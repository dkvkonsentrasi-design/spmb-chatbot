const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const messages = $("#messages");
const input = $("#input");
const form = $("#chatForm");
const sendBtn = $("#sendBtn");

// Baca konfigurasi saat request dibuat. Jika config.js gagal dimuat,
// gunakan URL Worker yang sudah diketahui sebagai fallback.
const DEFAULT_API_URL = "https://spmb-gemini-api.dkvkonsentrasi.workers.dev";
function getApiUrl() {
  return (window.SPMB_CONFIG?.API_URL || DEFAULT_API_URL).replace(/\/$/, "");
}
let history = [];

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[ch]));
}

function renderMarkdownLite(text) {
  let html = escapeHtml(text);
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\n/g, "<br>");
  return html;
}

function addMessage(role, text, options = {}) {
  const wrap = document.createElement("div");
  wrap.className = `message-row ${role}`;
  const bubble = document.createElement("div");
  bubble.className = "message-bubble";
  bubble.innerHTML = options.html ? text : renderMarkdownLite(text);
  wrap.appendChild(bubble);
  messages.appendChild(wrap);
  messages.scrollTop = messages.scrollHeight;
  return bubble;
}

function setLoading(loading) {
  sendBtn.disabled = loading;
  input.disabled = loading;
  sendBtn.classList.toggle("loading", loading);
}

function buildKnowledgeContext() {
  return SPMB_KNOWLEDGE.map(item => {
    return `TOPIK: ${item.title}\nKATA KUNCI: ${item.keywords.join(", ")}\nINFORMASI: ${item.content}`;
  }).join("\n\n---\n\n");
}

async function askGemini(question) {
  const apiUrl = getApiUrl();
  if (!apiUrl || apiUrl.includes("PASTE_CLOUDFLARE")) {
    throw new Error("URL Cloudflare Worker belum tersedia.");
  }

  const payload = {
    message: question,
    history: history.slice(-8),
    knowledge: buildKnowledgeContext()
  };

  const response = await fetch(apiUrl + "/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || `Server error ${response.status}`);
  }
  if (!data.reply) throw new Error("Respons AI tidak berisi jawaban.");
  return data.reply;
}

function localFallback(question) {
  const q = question.toLowerCase();
  const hit = SPMB_KNOWLEDGE.find(item =>
    item.keywords.some(k => q.includes(k.toLowerCase()))
  );
  if (hit) return hit.answer;
  return "Maaf, saya belum bisa menjawab pertanyaan itu dari data SPMB yang tersedia. Silakan tanyakan tentang syarat, jalur, jadwal, kuota, hasil seleksi, daftar ulang, atau kontak.";
}

async function sendMessage(text = input.value.trim()) {
  if (!text || sendBtn.disabled) return;

  addMessage("user", text);
  input.value = "";
  setLoading(true);

  const loadingBubble = addMessage("assistant", "Sedang mencari informasi…");

  try {
    const reply = await askGemini(text);
    loadingBubble.innerHTML = renderMarkdownLite(reply);
    history.push({ role: "user", text });
    history.push({ role: "model", text: reply });
  } catch (err) {
    console.error(err);
    let fallback = "";
    try {
      fallback = localFallback(text);
    } catch (_) {}
    loadingBubble.innerHTML = renderMarkdownLite(
      fallback + "\n\n_(AI belum tersambung: " + err.message + ")_"
    );
  } finally {
    setLoading(false);
    input.focus();
  }
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});

input?.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

$$(["[data-prompt]", "[data-question]"].join(",")).forEach(btn => {
  btn.addEventListener("click", () => sendMessage(btn.dataset.prompt || btn.dataset.question));
});

addMessage(
  "assistant",
  "Halo! Saya **Asisten SPMB**. Silakan tanyakan apa saja tentang proses penerimaan murid baru. Saya akan mencoba menjawab berdasarkan data SPMB yang tersedia."
);
