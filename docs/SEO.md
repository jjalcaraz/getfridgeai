# Fridge AI SEO + GEO Notes

This document records what was changed, what is still handled by a human, and how to maintain the work.

## What was added

### Structured data (JSON-LD)

- `Organization` and `WebSite` on every page (`globalJsonLd`), referenced by `@id`.
- `SoftwareApplication` on the homepage with `operatingSystem: "iOS"`, `applicationCategory: "LifestyleApplication"`, and two `Offer` entries for the $9.99/month and $59.99/year subscriptions.
- `FAQPage` on the homepage marking up the six existing FAQ entries verbatim.
- `Article` schema on each `/blog/[slug]` page, plus `HowTo` schema on the first post (`what-to-cook-with-what-you-have`).

### Social preview images

- 1200×630 `opengraph-image.tsx` and `twitter-image.tsx` for `/`, `/privacy`, `/terms`, `/support`, and `/blog/[slug]`.
- `twitter:card` upgraded to `summary_large_image`.
- The `keywords` meta tag was removed from all pages.

### New content

Four answer-first pages under `/blog/[slug]`:

- `/blog/what-to-cook-with-what-you-have` (HowTo + Article)
- `/blog/how-much-food-the-average-household-wastes`
- `/blog/how-ai-ingredient-recognition-from-a-photo-works`
- `/blog/fridge-ai-vs-manual-meal-planning`

Each leads with the answer, cites sources, and includes limitations.

### Sitemap

`src/app/sitemap.ts` now lists `/blog/*` routes with `lastModified`, `changeFrequency`, and `priority`.

### IndexNow infrastructure

- `next.config.ts` rewrites `/:key.txt` to `/api/indexnow-key?key=:key`.
- `app/api/indexnow-key/route.ts` serves the key as plain text if the request `key` matches `INDEXNOW_KEY`.
- `app/api/indexnow/submit/route.ts` accepts a JSON `urls` array and posts it to `https://api.indexnow.org/IndexNow`.

## IndexNow setup (human steps)

1. **Generate a key** containing 32–128 hexadecimal characters (Bing does not
   generate it for you), then keep the same value in Vercel and the hosted key
   file.
2. **Add the environment variable** in Vercel:
   - `INDEXNOW_KEY` = the key from Bing.
   - `INDEXNOW_HOST` (optional) = `www.getfridgeai.com`.
3. **Verify the key file is live** at `https://www.getfridgeai.com/{INDEXNOW_KEY}.txt`.
4. **Register the key location** in Bing Webmaster Tools under IndexNow.
5. **Submit only changed URLs** after each deploy. Options:
   - **GitHub Actions:** diff the changed files, map them to URLs, and `POST` to `https://www.getfridgeai.com/api/indexnow/submit`:
     ```bash
     curl -X POST https://www.getfridgeai.com/api/indexnow/submit \
       -H "Content-Type: application/json" \
       -d '{"urls":["https://www.getfridgeai.com/blog/what-to-cook-with-what-you-have"]}'
     ```
   - **Vercel deploy hook:** set a deploy hook to call the same endpoint after the build completes.

Do not submit the entire sitemap on every deploy. IndexNow is a change-notification API, not a bulk-submission API.

## Reading the Bing AI Performance report

After the pages are indexed, open **Bing Webmaster Tools > AI Performance** (public preview, as of February 2026).

- It takes 2–4 weeks for the first grounding queries to appear.
- Pay attention to **grounding queries**: the internal phrases Copilot uses to find sources. Those phrases are more useful than keyword tools because they show the questions your content is being evaluated against.

## robots.txt policy

`public/robots.txt` currently allows all user-agents:

```
User-agent: *
Allow: /
```

This includes `bingbot`, `BingPreview`, `OAI-SearchBot`, `PerplexityBot`, and `ClaudeBot`. If you later want explicit `User-agent` blocks, confirm each one before changing it.

## Corrections to the original brief

1. **Sitemap:** there is no static `public/sitemap.xml`; the sitemap is generated from `src/app/sitemap.ts`.
2. **App Store URL:** `https://apps.apple.com/app/fridge-ai-recipe-scanner` returns HTTP 404, and the source code comment says the app is still in review. `installUrl`/`downloadUrl` were left out of the `SoftwareApplication` schema to avoid linking to a dead URL.
3. **App Store ratings:** no real rating data exists, so `aggregateRating` was not added.
4. **Logo:** no logo asset exists, so the `logo` property was omitted from the `Organization` schema.
5. **OpenGraph and Twitter images:** the brief correctly noted they were missing; they have now been added.
6. **JSON-LD:** none existed in the source; it has been added.
7. **Keywords meta tag:** present in every page; it has been removed.
8. **DNS provider:** Vercel serves the site, but Namecheap hosts DNS for
   `getfridgeai.com` (`dns1.registrar-servers.com` and
   `dns2.registrar-servers.com`). Bing verification uses the persistent CNAME
   `fb61d3fdc059c45660435c6f17f2d74e.getfridgeai.com` pointing to
   `verify.bing.com`; the temporary `msvalidate.01` metadata tag was removed
   after authoritative DNS propagation was confirmed.
