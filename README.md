# NextGen Learning Technologies

Marketing website for **NextGen Learning Technologies** — education technology and digital learning solutions for Bangladesh.

## Brand & contact

Edit **`src/brand.ts`** for company positioning, **platform URLs** (All Exam Success, EasyMatch BD, app store links, helplines, **Facebook**), and real contact details (email, phone, WhatsApp, address).

## Languages

The site supports **English** and **বাংলা (Bengali)**. Use the **EN | বাংলা** toggle in the header. Copy lives in `src/i18n/translations.ts`.

## Brand

- **Mission:** Empowering students and institutions through intelligent learning technology.
- **Industry:** Education Technology & Digital Learning Solutions
- **Market:** Bangladesh

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser (port may differ if already in use — check the terminal).

### Share both sites with ngrok (Hobbyist / paid)

Your **$10 Hobbyist** plan supports **3 online endpoints** and **10 ngrok-branded domains** (no visit-site interstitial). Each app still needs its **own** reserved URL — they cannot share `unclean-meteorologically-lucca.ngrok-free.dev`.

1. All Exam Success: `https://unclean-meteorologically-lucca.ngrok-free.dev` → port **3000**
2. NextGen: `https://nextgen.ngrok-free.dev` → port **5175** (match `npm run dev` port in `ngrok.yml` if needed)
3. Run both apps, then:

```bash
npm run dev
ngrok start all-exam-success nextgen
```

### ERR_NGROK_334 (“endpoint is already online”)

ngrok is **already running** somewhere (another terminal, background, or a previous session). **Do not** run `ngrok http …` with the same URL.

**If both sites should be up:** open http://127.0.0.1:4040 — if you see both tunnels, you are done; share the URLs from there.

**To restart cleanly:**

```powershell
Get-Process -Name ngrok -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 3
ngrok start all-exam-success nextgen
```

Or: `.\scripts\ngrok-restart.ps1`

## Build

```bash
npm run build
npm run preview
```

Static output is in `dist/` — deploy to any static host (Vercel, Netlify, Cloudflare Pages, etc.).
