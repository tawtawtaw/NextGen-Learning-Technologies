# Site videos

Place your MP4 files here. They are served directly by the website (no YouTube).

## Featured (NextGen services)

| File | Config path in `src/brand.ts` |
|------|-------------------------------|
| `NextGen.mp4` | `/videos/NextGen.mp4` (featured — services overview) |
| `posters/….jpg` | optional thumbnail before play |

## Gallery — All Exam Success

| File | Purpose |
|------|---------|
| `aes-walkthrough.mp4` | Platform walkthrough |
| `aes-ai-practice.mp4` | AI practice features |
| `aes-mobile-app.mp4` | Mobile app demo |

Optional posters: `posters/aes-walkthrough.jpg`, etc.

## Gallery — EasyMatch BD

Set `src` (and optional `poster`) in `src/brand.ts` under each `product: 'easy-match-bd'` entry. Example filenames:

| Suggested file | Purpose |
|----------------|---------|
| `em-how-it-works.mp4` | Sign up, connect, interact |
| `em-profile-matching.mp4` | Profiles & matching |
| `em-premium-packages.mp4` | Packages & premium features |

## Tips

- Use **H.264 MP4** for widest browser support.
- Keep files reasonably compressed (e.g. 720p) for faster loading on mobile data in Bangladesh.
- To add more videos, add a `gallery` object in `src/brand.ts` with `product: 'all-exam-success'` or `'easy-match-bd'`, then add the file here.
