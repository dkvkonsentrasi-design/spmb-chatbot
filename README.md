# Chatbot SPMB — Gemini + GitHub Pages

Versi ini membuat chatbot SPMB lebih fleksibel menggunakan Gemini API.

## Arsitektur

```text
Pengunjung
   ↓
GitHub Pages
(index.html + script.js)
   ↓
Cloudflare Worker
(API key disimpan sebagai Secret)
   ↓
Gemini API
   ↓
Jawaban natural
```

GitHub Pages tidak menyimpan API key Gemini.

## File yang digunakan

- `index.html` — tampilan chatbot.
- `style.css` — desain.
- `script.js` — komunikasi chatbot.
- `knowledge.js` — data resmi SPMB yang menjadi konteks jawaban.
- `config.js` — URL Cloudflare Worker.
- `cloudflare-worker/worker.js` — backend/proxy Gemini.
- `cloudflare-worker/wrangler.toml` — konfigurasi Worker.

## Setup

### 1. Buat API key Gemini

Buat API key melalui Google AI Studio. Gemini menyediakan free tier untuk sejumlah model/fitur, dengan batas penggunaan yang dapat berubah. Jangan menaruh key di file frontend.

### 2. Deploy Cloudflare Worker

Masuk ke folder `cloudflare-worker` lalu:

```bash
npx wrangler login
npx wrangler secret put GEMINI_API_KEY
npx wrangler deploy
```

Masukkan API key saat diminta.

### 3. Atur URL Worker

Edit `config.js`:

```javascript
window.SPMB_CONFIG = {
  API_URL: "https://spmb-gemini-api.nama-anda.workers.dev"
};
```

### 4. Upload ke GitHub Pages

Upload seluruh isi project ke repository GitHub. Aktifkan GitHub Pages dari branch utama/root.

### 5. Isi data SPMB

Edit hanya:

`knowledge.js`

Masukkan informasi resmi sekolah/daerah Anda. Gemini akan menggunakan data tersebut untuk menjawab secara natural.

## Catatan keamanan

Jangan pernah menulis:

```javascript
const API_KEY = "AIza...";
```

di `index.html`, `script.js`, atau file lain yang dipublikasikan GitHub Pages.

Gunakan Cloudflare Secret `GEMINI_API_KEY`.
