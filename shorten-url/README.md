# Shorten URL

This is a simple URL shortener built with [Astro](https://astro.build/), [Svelte](https://svelte.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                            |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Installs dependencies                             |
| `npm run dev`             | Starts local dev server at `localhost:4321`       |
| `npm run build`           | Build your production site to `./dist/`           |
| `npm run preview`         | Preview your build locally, before deploying      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro -- --help` | Get help using the Astro CLI                      |
| `npx astro add svelte`    | Add Svelte integration to the Astro project       |
| `npx astro add tailwind`  | Add Tailwind CSS integration to the Astro project |

## 🚩 Requirements

In order to shorten the URLs, you need to have a [short.io](https://short.io/) account and an [API key](https://app.short.io/settings/integrations/api-key).

## ⚙️ Environment Variables

```bash
PUBLIC_SHORTIO_DOMAIN=your_shortio_domain
PUBLIC_SHORTIO_API_KEY=your_shortio_api_key # https://app.short.io/settings/integrations/api-key
```

## 🔗 Useful links

- [short.io](https://short.io/)
- [short.io Developer Hub](https://developers.short.io/)
