---
title: "Verify a Framework Recipe with the curl Test"
description: "Every framework recipe is only \\\"done\\\" when a plain curl against a Studio route returns three things: composition body content, a Studio-emitted style tag."
url: /studio/framework-recipe-verification
---

# Verify a Framework Recipe with the curl Test

## Verification: the curl test every recipe must pass

Every framework recipe is only "done" when a plain curl against a Studio route returns composition body content, a Studio-emitted style tag, and populated metadata. These are the exact assertions the SDK's example apps run on every continuous integration (CI) pass.

Runnable reference: examples/node-ssr/baseline-check.ts in the SDK repo.

## The three assertions

Given a known-good composition URL (/blog/some-slug, /product/some-sku: pick one you know has an entry authored), verify:

### 1\. Composition body text lands in the initial HTML

```
URL=http://localhost:3000/blog/some-slug
curl -s "$URL" > /tmp/ssr-check.html

# Search for a known text string from the composition — heading, paragraph, CTA label.
grep -F "Some Known Heading From The Entry" /tmp/ssr-check.html
```

A match means server-side rendering (SSR) is working: the composition rendered server-side. An empty match means the body didn't SSR. Check [Troubleshooting, Empty <main> under raw Node](/docs/studio/framework-recipe-troubleshooting#empty-under-raw-node) and [Section Attempted to call X() from the server](/docs/studio/framework-recipe-troubleshooting#framework-recipe-troubleshooting-ssr-failures-by-symptom-2).

Alternative: look for the composition's structural markers rather than content strings.

```
grep -oE '<main[^>]*>' /tmp/ssr-check.html
grep -c '<section' /tmp/ssr-check.html   # 1+ if the composition has sections
```

### 2\. Design-panel tokens land in a Studio-emitted style tag

```
grep -o 'data-studio-ssr' /tmp/ssr-check.html         # → data-studio-ssr
grep -oE '\-\-token-[a-z-]+:' /tmp/ssr-check.html | head -5
```

-   If data-studio-ssr is present, the SDK emitted the <style> block.
-   If \--token-<name>: custom properties are present, the composition's design-panel tokens are in the response.

Both are required for FOUC-free first paint. If either is missing, see [Section Unstyled first paint](/docs/studio/framework-recipe-troubleshooting#unstyled-first-paint-fouc).

### 3\. Metadata tags populated

```
grep -oE '<title>[^<]+</title>' /tmp/ssr-check.html
grep -oE '<meta name="description" content="[^"]+"' /tmp/ssr-check.html
grep -oE '<meta property="og:image" content="[^"]+"' /tmp/ssr-check.html
grep -oE '<link rel="canonical" href="[^"]+"' /tmp/ssr-check.html
```

All four required for full SEO coverage. If any are empty:

-   An empty <title> means the metadata call is missing from the recipe wiring.
-   Empty OG or canonical tags mean the entry's SEO fields are not authored. See [Section Metadata gaps](/docs/studio/framework-recipe-troubleshooting#metadata-gaps-missing-og-tags).

## Framework-specific verification quirks

-   **Next.js Pages Router**: run next build && next start, not next dev. Dev mode's per-request recompile is racy for module init order. Prod is deterministic.
-   **Next.js App Router (RSC)**: the initial response is a mix of streamed HTML + RSC flight payload (self.\_\_next\_f). The composition HTML must be in the plain HTML section, not just the flight payload. curl -s | grep -v '\_\_next\_f' isolates it.
-   **Astro**: verify in astro dev mode is fine. The SSR path is identical to astro build.
-   **Gatsby DSG**: first request generates the deferred page (slower). Subsequent requests are fast. Warm the URL with one curl before running assertions.
-   **Remix**: remix dev runs the real SSR pipeline. No build step needed for verification.

## The script

Save this as verify-ssr.sh in your project root, run before every deploy or as part of CI:

```
#!/usr/bin/env bash
set -euo pipefail

URL="${1:-http://localhost:3000/blog/some-known-slug}"
HTML=$(mktemp)
trap "rm -f $HTML" EXIT

curl -sSf "$URL" > "$HTML"

pass=true
check() {
  local label="$1" pattern="$2"
  if grep -q "$pattern" "$HTML"; then
    echo "✓ $label"
  else
    echo "✗ $label — pattern not found: $pattern"
    pass=false
  fi
}

check "body has <main>" '<main'
check "styles emitted"  'data-studio-ssr'
check "tokens present"  '\-\-token-'
check "title populated" '<title>[^<]\{3,\}'
check "og:image"        'og:image'

$pass || { echo "SSR verification failed at $URL"; exit 1; }
echo "SSR verification passed at $URL"
```

Wire it into your deploy pipeline so nothing ships until SSR responds at a known URL.

## What each host's example app runs

Both CI-tested example apps run this same three-assertion contract:

-   examples/node-ssr/baseline-check.ts in the SDK repo: the Node-side reference.
-   examples/nextjs-rsc/tests/baseline-check.ts in the SDK repo: the RSC reference, also verified on Next 14 and Next 16.

If a customer recipe passes the contract, it's SSR-shipping-ready. If it doesn't, the specific assertion that failed maps directly to a [troubleshooting](/docs/studio/framework-recipe-troubleshooting) section.

## See also

-   [Framework recipes: index](/docs/studio/framework-recipes).
-   [Troubleshooting](/docs/studio/framework-recipe-troubleshooting): every failure mode indexed by symptom.
