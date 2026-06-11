# Cloudflare in front of Railway

Putting Cloudflare in front of your Railway deployment caches static assets at the edge (closer to users in East Africa) and reduces load on the app server.

## 1. Add your domain to Cloudflare

1. Create a free Cloudflare account and add `willsworldwide.com` (or your domain).
2. Update nameservers at your registrar to Cloudflare’s pair.

## 2. Point DNS to Railway

In Cloudflare **DNS** → **Records**:

| Type  | Name | Content              | Proxy        |
|-------|------|----------------------|--------------|
| CNAME | `@`  | `<your-app>.up.railway.app` | Proxied (orange cloud) |
| CNAME | `www`| `<your-app>.up.railway.app` | Proxied |

In Railway → your service → **Settings** → **Networking**, add the custom domain (`willsworldwide.com`).

## 3. SSL

- Cloudflare SSL mode: **Full (strict)**
- Railway provisions HTTPS for the custom domain automatically.

## 4. Cache rules (recommended)

**Caching** → **Cache Rules** → Create rule:

- **If** URI Path starts with `/images/` **or** `/logo.png` **or** `/_next/static/`
- **Then** Cache eligibility: Eligible for cache  
- **Edge TTL**: 1 month  
- **Browser TTL**: Respect origin headers  

The app already sends `Cache-Control: public, max-age=31536000, immutable` for `/images/*` and `/logo.png` via `next.config.mjs`.

## 5. Optional performance settings

- **Speed** → **Optimization** → Auto Minify: JS, CSS, HTML  
- **Speed** → **Brotli**: On  
- **Network** → **HTTP/3**: On  

## 6. Staging

Repeat with a subdomain, e.g. `staging.willsworldwide.com` → Railway staging service.

## Verify

After DNS propagates, check response headers:

```bash
curl -I https://willsworldwide.com/images/logistics/transit-truck.webp
```

Look for `cf-cache-status: HIT` on repeat requests.
