# Share the site with stakeholders (ngrok)

Use this **before** pushing to live Vercel — for review and sign-off only.

## 1. Start the dev site

```powershell
cd "C:\Users\tareq\NextGen Learning Technologies"
npm run dev
```

Note the port in the terminal (usually **5173**).

## 2. Start ngrok

If your ngrok config points to port **5173**:

```powershell
ngrok http 5173
```

Or, if using the paid config in `ngrok.example.yml` (merge into `%LOCALAPPDATA%\ngrok\ngrok.yml`):

```powershell
ngrok start nextgen
```

## 3. Share the URL

- Copy the **https** URL from the ngrok terminal or http://127.0.0.1:4040
- Send to stakeholders — they can view EN / বাংলা, all Phase 1–3 sections, and videos

## 4. After stakeholder approval

```powershell
git add .
git commit -m "Your message"
git push origin main
```

Vercel deploys automatically to https://www.nextgenlearningbd.com

## Tips

- Keep `npm run dev` running while stakeholders review
- If ngrok shows “endpoint already online”, stop other ngrok sessions first
- Large videos load from the dev server — first play may take a moment
