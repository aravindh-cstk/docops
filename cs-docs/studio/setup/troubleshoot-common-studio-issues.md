---
title: "Troubleshoot Common Studio Issues"
description: "Fix common Studio setup issues including canvas iframe errors, template render failures, Live Preview problems, content fetch errors, and SDK init order issues."
url: /studio/troubleshoot-common-studio-issues
uid: blt895158ed79acf0ed
---

# Troubleshoot Common Studio Issues

## Troubleshoot Common Studio Issues

Organized by **failure phase** — the lifecycle stage where the symptom surfaces. Work top-to-bottom: an earlier phase failing usually cascades into every later phase. Every entry has a real symptom (an error message, a runtime state, or a network response) and a runtime-verified fix. If you don't know which phase your problem is in, use the sidebar search or Ctrl-F the exact error text.

## 30-second self-check

Before reading further, run this decision tree:

1.  **Is your dev server actually running** at the port your Canvas URL points at? (curl http://localhost:PORT/ returns 200?) → If not, start it.
2.  **Does studioSdk.init() run before any render**? Check src/lib/contentstack.ts (or wherever). → If not, see [SDK initialization](#sdk-initialization).
3.  **DevTools on the Studio tab → Network → reload the composition. What's the status code of the request to your Canvas URL?**
4.  200 and content returned → Studio-side rendering issue; see [Runtime render](#runtime-render) or [Composition load](#composition-load).
5.  net::ERR\_BLOCKED\_BY\_LOCAL\_NETWORK\_ACCESS\_CHECKS / blocked:mixed-content / blocked:private-network-access → browser blocking; see [Studio project + canvas](#studio-project--canvas).
6.  401 / 403 → auth; see [SDK initialization](#sdk-initialization).
7.  Anything else → keep reading.

---

## Setup + install

If your problem is package-install or TypeScript-config related, this is the phase.

### npm install @contentstack/studio-react fails with Node engine warning

**Symptom:** npm ERR! notsup Not compatible with your version of node/npm or an engine warning during npm install.

**Cause:** Studio SDK requires Node ≥ 18.

**Fix:** upgrade Node.

```
node -v        # confirms current version
nvm install 20 # or 18+; nvm-preferred
nvm use 20
```

Reinstall: delete node\_modules + lockfile, then npm install.

### Peer dependency conflict with react or react-dom

**Symptom:** npm install completes but emits npm WARN ERESOLVE unable to resolve dependency tree mentioning React or React DOM. At runtime the canvas app crashes with Invalid hook call or Cannot read properties of null (reading 'useContext').

**Cause:** two copies of React in the resolved tree. Studio-SDK peer-deps to react ^18 || ^19; if your app pins a different major or has react duplicated via a nested dep, two React runtimes ship.

**Fix:**

```
npm ls react       # must show exactly ONE line under root
npm ls react-dom   # same — exactly one line
```

If more than one appears, resolve via overrides in package.json:

```
{
  "overrides": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  }
}
```

Then rm -rf node\_modules package-lock.json && npm install.

### import.meta.env.VITE\_CONTENTSTACK\_\* is undefined at runtime

**Symptom:** SDK init throws stackSdk is required or apiKey is required. Or the canvas app boots but every content fetch 401s.

**Cause:** environment-variable prefix mismatch. Vite requires VITE\_\* prefixes for client-visible env; Next.js requires NEXT\_PUBLIC\_\*; Astro requires PUBLIC\_\*. The bundler silently drops any prefix it doesn't recognize.

**Fix:** confirm the prefix matches your bundler, then confirm the values are populated in .env (not .env.local, not .env.production — the file the dev server actually reads):

```
# Vite
grep VITE_CONTENTSTACK_ .env

# Next.js
grep NEXT_PUBLIC_CONTENTSTACK_ .env

# Astro
grep PUBLIC_CONTENTSTACK_ .env
```

Full map at [Prerequisites → Framework prefix map](/docs/studio/review-prerequisites-before-you-start#where-to-find-each-in-the-stack).

Restart your dev server after edits — bundlers snapshot env at startup, they don't hot-reload it.

### TypeScript can't find @contentstack/studio-react/rsc (Next.js RSC)

**Symptom:** Module '"@contentstack/studio-react/rsc"' has no exported member 'StudioServerComponent' or Cannot find module '@contentstack/studio-react/rsc'.

**Cause:** older SDK version. The /rsc subpath entry ships from @contentstack/studio-react ≥ 1.4.

**Fix:**

```
npm ls @contentstack/studio-react
```

Upgrade if below 1.4:

```
npm install @contentstack/studio-react@latest
```

Then re-run tsc --noEmit to confirm.

### Node SSR: TypeError: Cannot read properties of null (reading 'hasOwnProperty') from @contentstack/json-rte-serializer

Handled in Framework recipes → Troubleshooting → jsdom + JSON-RTE in Node. Short answer: htmlToJson needs a real DOM HTMLElement, not a string — wrap it with jsdom in Node contexts.

---

## SDK initialization

If your problem is initStudio() errors, missing env vars, "SDK Not Initialized", or invalid stack keys / tokens before any composition loads, this is the phase.

### "studioSdk is not initialised"

studioSdk.init was never called, or it ran _after_ useCompositionData first rendered.

**Fix:** Init must complete before any hook reads the SDK. The safest place is a shared module imported at app boot — usually src/lib/contentstack.ts — so React never sees a hook call before init finishes.

```
// src/lib/contentstack.ts — imported at app entry
import { studioSdk } from "@contentstack/studio-react";
studioSdk.init({ stackSdk, contentTypeUid: "compositions" });
```

Then import ./lib/contentstack in main.tsx / \_app.tsx / app/layout.tsx before any component that uses useCompositionData.

### "stackSdk is required"

studioSdk.init was called with no Delivery SDK instance.

**Fix:**

```
import Contentstack from "@contentstack/delivery-sdk";
import { studioSdk } from "@contentstack/studio-react";

const stack = Contentstack.stack({ … });
studioSdk.init({ stackSdk: stack, contentTypeUid: "compositions" });
```

### studioSdk.init({ variantAlias }) didn't apply the variant

variantAlias is not a valid studioSdk.init() config field. The SDK's Zod schema silently strips unknown keys, so the call doesn't throw — the variant just never applies. **Runtime-verified.** UserConfig accepts only: stackSdk, contentTypeUid, locale, cslp, openInStudioButton, fetchComposition, fetchTemplateEntry.

**Fix:** Pass variantAlias per-fetch in the second arg (CompositionQueryOptions):

```
useCompositionData({ url }, { variantAlias: "holiday-2026" });
// or
await csStudio.fetchCompositionData({ url, searchQuery }, { variantAlias: "holiday-2026" });
```

See [Variant aliases](/docs/studio/variant-aliases-deep-dive).

### 401 fetching content

Stack API Key or Delivery Token is wrong, expired, or not set.

**Fix:** 1. Re-copy from Stack → Settings → Tokens → the Delivery Token edit screen. 2. Make sure your .env.local has the right values. 3. Restart your dev server — env vars are read at boot.

### 404 fetching a content type

The content type UID is wrong, or doesn't exist in the stack.

**Fix:** Check Contentstack → Content Models → your CT → UID and pass that exact value to stack.contentType("...").

### API error (422): The Content Type 'compositions' was not found

You wired the SDKs but no Studio project exists yet — the compositions content type hasn't been provisioned into your stack, OR the contentTypeUid value passed to studioSdk.init doesn't match the actual provisioned UID.

This is the **expected error** for the "installed but no project yet" state. It's not a broken install.

**Fix:** 1. Create the Studio project in app.contentstack.com (Studio → New Project → link your stack). Provisioning creates the compositions content type. 2. Note the UID (Studio → Project → Settings → Configuration → "Composition Content Type"). If it isn't compositions, set the corresponding env var in .env.local. 3. Until a composition is published on a route you're hitting, wrap the fetch in try/catch and render a "no composition yet" placeholder — the 422 goes away once any composition is published.

### Studio shows compositions but useCompositionData returns null

The composition's connected content type UID in studioSdk.init doesn't match what Studio is writing into.

**Fix:** Confirm studioSdk.init({ contentTypeUid: "..." }) matches the **Compositions** CT in your stack (Studio → Project → Settings → Configuration → "Composition Content Type").

---

## Studio project + canvas

If your problem is a Canvas iframe issue — project not loading in Studio UI, iframe blank/CORS/mixed-content/PNA localhost issues, section preview route not resolving, or HTTPS-in-localhost — jump here.

### "No Canvas URL Found" / MISSING\_CANVAS\_URL

Studio is trying to open a section but doesn't know where your canvas route lives.

**Fix:** 1. Project → Settings → Configuration → set **Canvas URL** to your route path (e.g. /canvas). 2. Make sure that route exists in your app and mounts <StudioCanvas />. 3. See [Section preview route](/docs/studio/section-preview-route).

### "Environment Not Configured"

Studio can't resolve the Base URL because no Environment + Language is picked.

**Fix:** Project → Settings → Configuration → pick both.

### Canvas iframe loads my home page instead of <StudioCanvas />

Your Canvas URL is / (or empty). Studio is loading the site root.

**Fix:** Change Canvas URL to a dedicated path like /canvas or /studio-canvas. Add the route in your app if it doesn't exist.

### "Use Studio Canvas Component" overlay shows on the canvas

Your canvas route is mounting <StudioComponent /> — the template renderer for visitor routes — instead of <StudioCanvas />. Studio detects this and overlays guidance until you switch.

**Fix:** in the file your project's Canvas URL points at, replace the <StudioComponent /> import + render with <StudioCanvas />. The two are not interchangeable — <StudioCanvas /> self-mounts the section preview from the URL params Studio appends to the iframe, no props needed:

```
import { StudioCanvas } from "@contentstack/studio-react";

export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

The overlay disappears on the next canvas reload. See [Add the section preview route](/docs/studio/section-preview-route) for the full canvas-route guide.

### Canvas loads blank, no error

The route exists but doesn't mount <StudioCanvas />.

**Fix:** Add the component:

```
import { StudioCanvas } from "@contentstack/studio-react";
export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

### Studio can't reach your localhost canvas

You'll hit this **only when your Canvas URL points at localhost** (or 127.0.0.1, 192.168.\*, 10.\* — any private-network origin). Affects **every major browser**, with different error copy per browser.

![Studio canvas showing the SDK Not Initialized dialog with three potential-issue bullets and an SDK Initialization Code snippet; the iframe body behind the dialog is empty because the browser blocked the http://localhost load](../assets/screenshots/troubleshoot-sdk-not-initialized-pna.png)

**Runtime-verified in Brave 149.** DevTools Network showed net::ERR\_BLOCKED\_BY\_LOCAL\_NETWORK\_ACCESS\_CHECKS on every iframe fetch to http://localhost:3006. Studio surfaces this to the user as an **"SDK Not Initialized"** dialog because from Studio's perspective, no post-message came back from the iframe.

**Note:** related to § SDK initialization → "studioSdk is not initialised". The Studio-side symptom is identical, but the root cause here is a browser-level network block, not a missing init() call.

**Underlying cause.** Studio is served from https://app.contentstack.com (public HTTPS). Your dev server is http://localhost (private, plain HTTP). Every modern browser refuses to embed the private HTTP iframe inside a public HTTPS page. Two overlapping mechanisms:

1.  **Mixed content** — browsers refuse http:// subresources from an https:// page. Blocks Safari, Firefox, and any browser without PNA.
2.  **Private Network Access (PNA)** — Chromium-only extra check: even HTTPS subresources going public → private need opt-in. Brave enforces by default; Chrome / Edge behind a flag.

Either way, the block is at the browser layer. No CORS header, CSP change, or SDK setting can undo it from Studio's side or yours.

**Symptoms by browser:**

| Browser | What you see |
| --- | --- |
| **Any browser (Studio-side)** | _"SDK Not Initialized"_ overlay dialog |
| **Brave** | Inside iframe: _"The connection is blocked because it was initiated by a public page to connect to devices or servers on your local network."_ Network: net::ERR\_BLOCKED\_BY\_LOCAL\_NETWORK\_ACCESS\_CHECKS |
| **Chrome / Edge** | _"Mixed Content: The page at 'https://app.contentstack.com/…' was loaded over HTTPS, but requested an insecure resource 'http://localhost:...'. This request has been blocked."_ |
| **Safari** | Empty iframe. Console: _"\[Warning\] Blocked mixed active content 'http://localhost:...'"_ |
| **Firefox** | Empty iframe with shield icon. Console: _"Blocked loading mixed active content 'http://localhost:...'"_ |

**The one fix that works in every browser.** Serve your dev server over HTTPS with a locally-trusted certificate. See Serve your canvas-app over HTTPS locally — a full walkthrough with per-framework configs for Vite, Next.js, Remix, Astro, Nuxt, Angular, Webpack, CRA, custom Node/Express, and Docker Compose (~5 min end-to-end, one-time setup per machine).

**Per-browser dev-only escape hatches** — re-enable defaults when you're done:

| Browser | Escape hatch |
| --- | --- |
| **Brave** | brave://flags → _"Block insecure private network requests"_ → **Disabled** → Relaunch |
| **Chrome / Edge** | chrome://flags/#block-insecure-private-network-requests → **Disabled** → Relaunch. Also click the shield icon → **Site settings** → **Insecure content** → **Allow**. |
| **Safari** | No per-flag toggle; use mkcert HTTPS above, or switch browsers for Studio |
| **Firefox** | about:config → security.mixed\_content.block\_active\_content = false (global — flip back after) |

### Renderer mix-up — StudioCanvas vs StudioComponent

**Two runtime-render components that are not interchangeable.** Mounting the wrong one, or missing one entirely, is the second-most-common canvas failure after PNA.

| Component | Where it mounts | What it renders |
| --- | --- | --- |
| **<StudioCanvas />** | ONE route matching your Canvas URL (e.g. /canvas) | The section-preview surface Studio's iframe loads while authoring a Section |
| **<StudioComponent specOptions={…} />** | Every URL a template maps to — typically ONE catch-all route (app/\[\[...slug\]\]/page.tsx for Next App Router, <Route path="\*"> for React Router) | The runtime render of a composition (Section OR Template) against real CMS data |

#### "Use Studio Canvas Component" overlay shows on the canvas

**Note:** related to § Studio project + canvas → "Use Studio Canvas Component" overlay shows on the canvas (above). Same symptom described from the renderer-mix-up angle; both entries retained.

Your canvas route is mounting <StudioComponent /> instead of <StudioCanvas />. Studio detects the wrong mount and overlays guidance.

**Fix:** In the file your project's Canvas URL points at, replace <StudioComponent /> with <StudioCanvas />. The two are not interchangeable — <StudioCanvas /> self-mounts from URL params Studio appends, no props needed:

```
import { StudioCanvas } from "@contentstack/studio-react";
export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

Overlay disappears on next canvas reload.

---

## Composition load

If your problem is a template not found for a URL, fetchCompositionData returning null, "Composition Not Found", published-vs-draft mismatch, composable\_uid mismatch, or Studio-panel-blank-but-fetch-works asymmetry, jump here.

### Templates 404 in production (or "Template did not load" in Studio) even though the canvas renders fine

Your app has per-template routes (app/blog/\[slug\]/page.tsx) that don't exist, OR you have no catch-all route (app/\[\[...slug\]\]/page.tsx) mounting <StudioComponent />. Studio's URL pattern resolution runs INSIDE csStudio.fetchCompositionData({ url }) — it doesn't need per-template routes in your router, but it does need SOMEONE to fetch and render.

**Runtime-verified.** Navigating a Vite React-Router SPA to an unregistered URL falls back to the SPA shell HTML but React Router matches no route → empty body → visitors see nothing. Studio itself surfaces this as a "Template Did Not Load" banner with the composition UID and failed URL pattern.

**Fix — the recommended default is one catch-all route:**

```
// Next.js App Router — app/[[...slug]]/page.tsx
export default async function StudioRoute({ params, searchParams }) {
  const searchQuery = new URLSearchParams(searchParams as Record<string, string>).toString();
  const url = "/" + (params.slug ?? []).join("/");
  try {
    const specOptions = await csStudio.fetchCompositionData({ url, searchQuery });
    return <StudioRouteClient specOptions={specOptions} />;
  } catch {
    notFound();
  }
}
```

```
// React Router (Vite SPA) — src/main.tsx
<Routes>
  <Route path="/canvas" element={<CanvasRoute />} />
  <Route path="*" element={<StudioRoute />} />   {/* catch-all */}
</Routes>
```

Alternative fix — add the specific per-template route the composition's URL pattern requires. See [Wire template preview routes](/docs/studio/template-preview-routes).

### <StudioComponent /> mounted with no specOptions prop

Runtime crash. specOptions is the required prop; the SDK doesn't fall back to a default.

**Fix:** Fetch first, then pass:

```
const { specOptions, isLoading } = useCompositionData({ url });
if (isLoading) return <Loading />;
if (!specOptions?.spec) return <NotFound />;
return <StudioComponent specOptions={specOptions} />;
```

### <StudioComponent data={specOptions} /> — wrong prop for the resolved-composition object

data is a separate Record<string, any> prop for **Component Default Data** (external runtime values you inject alongside CMS data). It is NOT where the resolved composition goes. Runtime-verified: passing specOptions as data (and omitting the required specOptions prop) crashes the render subtree.

**Fix:**

```
<StudioComponent
  specOptions={specOptions}        // resolved composition — required
  data={{ livePricing: pricing }}  // external data — optional Record<string, any>
/>
```

See [Component Default Data](/docs/studio/set-component-default-data).

### Either compositionUid, url, or templateContentTypeUid is required

You passed a query object with keys that aren't valid at the top level of CompositionQueryInput. The SDK only accepts compositionUid, url, templateContentTypeUid (and their combinations, plus searchQuery for SSR).

**Common misuses:**

```
// ❌ Wrong — these keys are options, not top-level query fields
useCompositionData({ contentTypeUid: "blog_post", templateEntryUid: slug });
useCompositionData({ variantAlias: "winter-sale", url: "/blog/x" });
useCompositionData({ locale: "fr-fr", url: "/blog/x" });
```

**Fix:** Put query-identifiers in the FIRST arg, options in the SECOND arg (CompositionQueryOptions):

```
useCompositionData(
  { templateContentTypeUid: "blog_post" },
  { templateEntryUid: slug, variantAlias, locale },
);
```

### Composition not found when passing a compositionUid

The value you passed isn't the composable slug — you passed the entry UID by mistake.

**Runtime-verified.** useCompositionData({ compositionUid: "blt2ec5a39fff004468" }) (entry UID) → "Composition not found. The requested composition does not exist or has been deleted." Same call with the slug useCompositionData({ compositionUid: "hero\_strip" }) → hasSpec: true.

**Fix:** compositionUid accepts the composable\_uid **slug** — the value in the entry's composable\_uid field (e.g. "hero\_strip", "pdp\_marketing\_band", "blog\_post\_template") — NOT the entry UID (blt…). Find it in Studio → your composition → right-panel Settings → "Composable UID", or via curl against the compositions CT.

### SSR: TypeScript error "Argument of type '{ url }' is not assignable to parameter of type 'CompositionQueryForSSRInput'"

csStudio.fetchCompositionData(queryOptions, options) requires searchQuery on the first arg for SSR (the type is CompositionQueryForSSRInput = CompositionQueryInput & { searchQuery }). The SDK reads searchQuery to apply Studio's iframe overrides and Live Preview's draft hash.

**Fix:**

```
// Next.js App Router
const searchQuery = new URLSearchParams(searchParams as Record<string, string>).toString();
const specOptions = await csStudio.fetchCompositionData({ url, searchQuery });

// Next.js Pages Router
const searchQuery = context.req.url.split("?")[1] ?? "";

// SSG / build-time
const specOptions = await csStudio.fetchCompositionData({ url, searchQuery: "" });
```

### SSR fetch throws for a URL that doesn't match — page becomes a 500

**Runtime-verified.** csStudio.fetchCompositionData({ url: "/blog/does-not-exist" }) **rejects the promise** with "Entry not found for content type: blog\_post". It does NOT resolve with { hasSpec: false }. Unhandled → your framework treats it as a server error and renders a 500.

**Fix:** Wrap in try/catch and call the framework's not-found API. Also keep the hasSpec check as a defensive backstop for empty-but-resolved states:

```
let specOptions;
try {
  specOptions = await csStudio.fetchCompositionData({ url, searchQuery });
} catch {
  notFound();   // Next App Router; or return { notFound: true } for getServerSideProps
}
if (!specOptions.hasSpec) notFound();
return <StudioComponent specOptions={specOptions} />;
```

### Strict-TS error: Type '{} | null' is not assignable to type 'StudioComponentSpecOptions'

useCompositionData returns a discriminated union LoadingState | ErrorState | SuccessState. During load and error states, specOptions is null. Passing it straight to <StudioComponent> fails strict TS.

**Fix:** Guard until TS narrows to SuccessState:

```
const { specOptions, isLoading, error } = useCompositionData({ url });
if (isLoading) return <Loading />;
if (error) return <ErrorState message={error instanceof Error ? error.message : String(error)} />;
if (!specOptions?.spec) return <NotFound />;
return <StudioComponent specOptions={specOptions} />;
```

Note error is typed NonNullable<unknown> in ErrorState — narrow with instanceof Error before reading .message, or use String(error).

### Passing variantAlias / locale / templateEntryUid at the top level of the query

Same class as the first entry in this section, but worth calling out — these fields are only valid in the **second-arg options** object:

```
// ❌
useCompositionData({ url, variantAlias: "B" });
csStudio.fetchCompositionData({ url, searchQuery, locale: "fr-fr" });

// ✅
useCompositionData({ url }, { variantAlias: "B" });
csStudio.fetchCompositionData({ url, searchQuery }, { locale: "fr-fr" });
```

### "Template did not load"

Studio surfaces this as a banner on the canvas showing the composition UID and URL pattern that failed to resolve. The template's URL pattern doesn't match a route on your site that mounts <StudioComponent />.

**Fix paths (in order of likelihood):** 1. **Add a catch-all route** mounting <StudioComponent /> — recommended default. See [Composition load → Templates 404](#templates-404-in-production-or-template-did-not-load-in-studio-even-though-the-canvas-renders-fine). 2. Edit the template's URL pattern in Studio ��� click the pencil icon in the canvas toolbar → Edit URL modal (see [Connected content type → Editing the URL](/docs/studio/connected-content-type#editing-the-url)). 3. Confirm the route mounts <StudioComponent /> and not <StudioCanvas /> — they're not interchangeable.

### Preview Entry from Studio renders empty fields

The connected entry doesn't have the data the template binds to.

**Fix:** Switch the Preview Entry from the canvas toolbar (the ⇄ swap icon) to an entry that has the fields populated. Or populate the current entry's fields in Contentstack.

---

## Runtime render

If your problem is an empty component palette, a dropped component that won't render, bindings resolving to undefined at render time, a Repeater rendering 0 items, static\_value keys not found, JSON-RTE embeds rejected, or hydration / SSR mismatches, jump here.

### Registered components don't appear in Studio's palette

Components are registered after Studio's canvas iframe loads, so it doesn't see them.

**Fix:** Call registerComponent / registerComponents **before** the canvas mounts. The cleanest way is to register at app boot, in the same module that imports @/lib/contentstack:

```
// src/lib/contentstack.ts
import { studioSdk, registerComponents } from "@contentstack/studio-react";
import { components } from "@/studio/components";

studioSdk.init({ … });
registerComponents(components);
```

### Component appears in palette but drops as a blank / fallback

The composition spec references a component type string that doesn't match anything registered. **Runtime-verified.** Walking a resolved specOptions.spec.ui tree shows every type the composition wants. If a type isn't registered, the SDK renders a fallback.

**Fix:** 1. In DevTools console, dump the type names in the spec: ts const { specOptions } = useCompositionData({ url }); const types = new Set(); const walk = n => { n?.type && types.add(n.type); (n?.children ?? \[\]).forEach(walk); Object.values(n?.slots ?? {}).forEach(s => (s ?? \[\]).forEach(walk)); }; walk(specOptions.spec.ui); console.log(\[...types\]); 2. Compare with your registerComponent calls. Any missing type → add its registration. 3. If the case is off (Hero vs hero), the type strings must match exactly.

### Lazy components flash blank when dropped

The default Suspense fallback is null. Provide your own:

```
import { Suspense } from "react";
function PaletteFallback() { return <div className="loading-card">Loading…</div>; }
// Wrap your top-level StudioComponent / StudioCanvas render in your own Suspense.
```

The SDK uses <Suspense fallback={null}> internally — wrapping at your app's top level provides the fallback the SDK's inner boundary defers to.

### Edits in Contentstack don't reflect on my page

Live Preview isn't initialised, or onEntryChange isn't wired to your render.

**Runtime-verified.** With ContentstackLivePreview.onEntryChange(refetchSpec) wired to useCompositionData's refetchSpec, firing the callback triggers a fresh CDA fetch of the composition + template + entry — confirmed via Network tab (three new requests appear immediately after each callback fire).

**Fix:** 1. Confirm ContentstackLivePreview.init({ … }) runs at app boot. 2. Wire onEntryChange to your render or refetch: tsx const { refetchSpec } = useCompositionData({ url }); useEffect(() => { ContentstackLivePreview.onEntryChange(refetchSpec); }, \[refetchSpec\]); 3. Make sure your stack has Live Preview enabled stack-wide (Stack → Settings → Visual Experience → General). 4. Check the Preview Token in your .env.local matches the one on Contentstack. 5. See [Install Live Preview](/docs/studio/install-live-preview).

### "Edit in Contentstack" button doesn't open

clientUrlParams.host is wrong for your region.

**Fix:** Match it to your region's app host (US: app.contentstack.com, EU: eu-app.contentstack.com, etc.). See [Install Live Preview → Non-US regions](/docs/studio/install-live-preview#non-us-regions).

### error while registering components — NO\_REQUEST\_LISTENER\_FOUND — contentstack-adv-post-message: No request listener found for event "register-components"

**Runtime-verified benign.** This error fires when your app loads **outside** a Studio iframe (i.e. during regular dev / on a visitor URL). The SDK's post-message channel tries to broadcast registered components to the parent frame; if no parent is listening (because there is no Studio iframe wrapper), the SDK logs this error.

**Fix:** None needed — this is expected behavior outside Studio. Component registration still succeeds; only the "notify Studio's editor iframe" broadcast fails, and Studio isn't listening because it isn't there. When your app loads INSIDE Studio's canvas iframe, the broadcast succeeds silently.

Silence the console noise (optional) by only registering components when you detect a Studio iframe context — but the recommended pattern is to leave it alone.

---

## Speed it up with an LLM

```
curl -fsSL {{STUDIO_DOCS_BASE_URL}}/install.sh | sh
```

Then describe what you're seeing — e.g. _"my canvas iframe is blank"_, _"edits don't reflect in real time"_, _"401 on every fetch"_, _"'Either compositionUid, url, or templateContentTypeUid is required' error"_. The LLM walks the same diagnostic tree and offers to fix what it finds.

## Still stuck?

If you've worked through this page and the canvas still doesn't render, open an issue with:

-   What you see (error text, screenshots if helpful).
-   Which phase failed (Setup + install / SDK initialization / Studio project + canvas / Composition load / Runtime render).
-   Browser console output during the failure — especially anything starting \[Composable Studio SDK\].
-   DevTools Network tab: the status code and response body of the request to your canvas URL.

That triages fast.
