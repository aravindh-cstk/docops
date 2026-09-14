---
title: "Create Compositions via the API"
description: "If you're new to Studio's API, the four pages in this chapter build on each other:"
url: /studio/create-compositions-via-the-api
---

# Create Compositions via the API

## Create Compositions via the API

> Everything you need to create, update, publish, and delete a composition without the Studio UI. The per-shape catalog (blocks, section cases, and template cases, each with JSON examples) lives in the companion references listed at the end. SDK at least **1.2.1** is assumed throughout (see Spec encoding).
> 
> **In scope:** creating, updating, publishing, and deleting Template and Section compositions. **Out of scope:** provisioning the stack / project / content type (assumed to already exist).

> **Two ways to create a composition.** This chapter is the **raw Content Management API (CMA)** path. You hold a management token, encode the ui yourself, and POST entries directly. If you'd rather have a managed layer do the encoding, validation, and auth for you (sending the ui uncompressed to a REST endpoint), see the [Studio API service](/docs/studio/studio-api). Same result. Higher level. Use the raw CMA here when you're scripting migrations / server-to-server work with a management token and want full low-level control.

## Roadmap: read in this order

If you're new to Studio's API, the four pages in this chapter build on each other:

1.  **This page**: the shared envelope: what a composition entry is, how to authenticate, how the ui field is zlib-encoded, and how to create the entry via CMA. **Start here even if you know Studio's UI.**
2.  **[Building Blocks](/docs/studio/composition-building-blocks)**: the shared vocabulary for the ui tree. Every node type, every value source, Repeater + Condition Block + Section Slot + Binding Override, plus the closed sets of prop types and built-in node types. **Read the "Start here: the anatomy of a node" section at the top before jumping to the catalog.**
3.  **[Section Catalog](/docs/studio/section-compositions-api)**: worked JSON for every Section shape (14 cases). The recommended reading arc is Cases 1, 2, 6 and 10, in that order. Skip the rest until you need them.
4.  **[Template Catalog](/docs/studio/template-compositions-api)**: worked JSON for Templates (linked + freeform). Only two Examples, so read the whole page.

After that, you can build any composition through the API: start from the closest catalog case, adapt the JSON, and go.

## 1\. What you're creating

A **composition** is a saved layout tree (the ui spec) plus the data bindings that drive it. It is stored as a **Contentstack Management API (CMA) entry** of your project's **composition content type**. There is no separate "compositions" endpoint. Creating one is creating an entry.

There are two kinds:

-   **Template**: a full page with its own URL. Either **linked** to a content type (renders at that type's entry URLs) or **freeform** (no content type. A standalone page). (Wire value: place\_composition\_as: "page".)
-   **Section**: a reusable block with no URL of its own. (Wire value: place\_composition\_as: "section".)

Template and Section entries differ in only three fields. The ui spec is built the same way for both:

| Field | Template | Section |
| --- | --- | --- |
| place\_composition\_as | "page" | "section" |
| connected\_content\_type | CT uid (**linked**) or "" (**freeform**) | "" (empty string) |
| url / url\_metadata | from the CT URL pattern (linked) or a default /{composition-ct-uid}/{composable\_uid} (freeform) | no url. Default metadata |

> **Concept guides:** [When to use Templates vs Sections](/docs/studio/choosing-between-templates-and-sections), [What's a composition?](/docs/studio/what-is-a-composition), [Templates](/docs/studio/templates-overview), [Sections](/docs/studio/build-and-use-sections).

## 2\. Prerequisites

| You need | Notes |
| --- | --- |
| A Contentstack **stack** | Holds the composition entries. |
| A Studio **project** | Links the stack + the composition content type. Created via the Studio UI / Studio API. Not covered here. |
| The **composition content-type UID** | Per project (configurable). **Defaults to compositions**. All create calls target this content type. Get it from your project settings if customized. |
| A **management token** + **stack API key** | See Authentication. |
| Consuming app on **Studio SDK at least 1.2.1** | Required to decode the zlib-compressed ui (see Spec encoding). |

> Compositions are authored only in the stack's **master locale**. Create the entry in the master locale (e.g. en-us). The bound data lives in every locale, but the composition entry itself does not. See [Multi-locale at scale](/docs/studio/managing-multiple-locales-at-scale).

## 3\. Authentication

Composition entries are created through the standard CMA. Three auth mechanisms. Pick **one**, and prefer the first:

| Auth type | Header | Value | Recommended for |
| --- | --- | --- | --- |
| **OAuth** (preferred) | authorization | Bearer <access\_token>, from csdx auth:login --oauth or the Contentstack MCP's --auth | Everything interactive. This is the credential the CLI itself prefers, and nothing is pasted |
| **Management token** | authorization | A stack-scoped management token (in your stack, open Settings, then Tokens, then Management Tokens). Send the **bare token, with no Bearer prefix** | Server-to-server, CI, migration scripts |
| **Session token** | authtoken | The authtoken cookie from an active app.contentstack.com login | Last resort. It's a full user-session credential (every org, every stack) so scope it to the call and discard it |

> **OAuth access tokens expire, and a raw curl never refreshes them**. csdx refreshes before every request. So a 401 on a token that worked earlier means "refresh and retry", not "this endpoint rejects OAuth". Full ladder, scope headers and failure signatures: [authenticate-cma](https://studio-documentation.contentstackapps.com/prompts/authenticate-cma.html).

Common headers on both:

| Header | Value |
| --- | --- |
| api\_key | Your stack API key |
| Content-Type | application/json |
| branch (optional) | Branch UID. Defaults to main |

> **Wrong header = 401.** Session tokens sent via authorization return {"error\_code":105,"errors":{"authorization":\["is not valid."\]}}. Management tokens sent via authtoken return the same, and a management token prefixed with Bearer also 401s. Get the auth-type / header pair right.
> 
> **Missing api\_key = 412**, not 401. The CMA rejects the request as a precondition failure before it evaluates the token. Always send both api\_key and one of authorization / authtoken.

### Working with branches

Stacks that use Contentstack **Branches** need the branch header on every CMA call. Otherwise the request lands on main and can trample or silently miss the target branch's entries. Pass the branch UID exactly as it appears in Stack Settings:

```
const res = await fetch(url, {
  method: "POST",
  headers: {
    api_key: STACK_API_KEY,
    authorization: MANAGEMENT_TOKEN,
    "Content-Type": "application/json",
    branch: "feature-2026-relaunch",         // ← branch UID; omit or "main" for the default
  },
  body: JSON.stringify({ entry }),
});
```

The same header applies to publish, update, delete, and query calls. Two branches carrying compositions with the same composable\_uid don't collide because each branch has its own entry table. The CMA scopes the uniqueness check per branch.

Sending branch: main on a stack that hasn't enabled Branches returns **200**, silently accepted. Sending a non-existent branch UID returns **422** with error\_code: 900 and message "The Branch '<uid>' was not found." Use the 422 to detect typos in CI. Don't rely on a 200 to prove the branch exists.

### Master locale: non-en-us stacks

The locale query parameter must be the **stack's master locale**, whatever it is (e.g. en-gb, de-de, ja-jp). It's not always en-us. Fetch it once at startup:

```
async function getMasterLocale(): Promise<string> {
  const res = await fetch(`https://${CMA_HOST}/v3/locales`, {
    headers: { api_key: STACK_API_KEY, authorization: MANAGEMENT_TOKEN },
  });
  const { locales } = await res.json() as { locales: Array<{ code: string; fallback_locale?: string | null }> };
  const master = locales.find(l => !l.fallback_locale);   // master locale is the one without a fallback
  if (!master) throw new Error("No master locale on stack");
  return master.code;
}
```

Cache the result. The master locale doesn't change per stack.

-   **Non-existent locale code** (e.g. ?locale=fr-fr when the stack has no French locale) returns **422** with {"error\_message":"Language was not found. Please try again.","error\_code":141}.
-   **Existing non-master locale** (e.g. ?locale=en-gb on a stack whose master is en-us and which has en-gb added) **succeeds with 201**, and the CMA creates a **locale variant** of that entry. A subsequent GET without a locale query param returns the master-locale record (Studio won't see your composition). GET ?locale=en-gb returns the variant you wrote. Compositions authored under a non-master locale variant don't render in Studio's canvas. Write to the master.
-   **No locale param** means the CMA defaults to the master locale (verified: entry's locale field comes back as en-us on this stack).

## 4\. The composition entry

The request body is { "entry": { … } }. Fields:

| Field | Required | Type | Notes |
| --- | --- | --- | --- |
| title | Yes | string | Display name. |
| composable\_uid | Yes | string | Unique identifier for the composition. **Must be unique** within the content type. |
| place\_composition\_as | Section only | "page" | "section" | Template vs Section. **Optional**, an absent/empty value resolves as a Template ("page"). Set it only to mark a Section. |
| ui | Yes | string | The layout spec, **zlib-compressed**. See Spec encoding. |
| data\_sources | Yes | string | **JSON-stringified array** of data bindings. "\[\]" if none. See the callout below. |
| schema\_version | No | string | Convention marker (current value **"1.0.0"**). Stored on the entry, but **not CMA-mandatory and the SDK doesn't read it**. See the [schema\_version semantics](#semantics) note below. |
| connected\_content\_type | Template only | string | Content-type UID for a Template. "" for a Section. |
| url | Template only | string | URL pattern, e.g. "/blog/{{entry.slug}}". Omitted for Sections. |
| url\_metadata | No | object | { url\_source, url\_queries } where url\_queries is **JSON-stringified**. See URL metadata. |
| linked\_schemas | No (Section) | array | Attached **later in the editor**, not required at creation. See the [linked\_schemas shape](#shape-2) note below. |
| static\_value | No | object | Static (non-bound) content groups. Empty at creation. Shapes that use static text populate it. See the [static\_value shape](#shape) note below. |
| linked\_sections | **Required if the Template embeds Sections** | array | Array of { uid, \_content\_type\_uid } per embedded Section (where uid is the Section entry's CMA uid, \_content\_type\_uid is the composition CT UID). **Runtime-verified: without this field the Studio canvas can't resolve section-composition embeds** even if metadata.compositionUID is set on the node. Empty \[\] for Templates with no embeds. See [Embedding Sections](#8a-embedding-a-section-inside-a-template) below. |

> **What the CMA actually enforces:** only title and composable\_uid are mandatory on the composition content type. ui and data\_sources are marked required here because they're needed in practice (no layout / no bindings without them), not because the CMA rejects their absence.

> **Format callout: ui and data\_sources are string on the wire.** The ui field is a zlib:\-prefixed base64 string (Section 6). The data\_sources field is a JSON-stringified array. Every JSON example in the [building-blocks](/docs/studio/composition-building-blocks), [sections](/docs/studio/section-compositions-api), and [templates](/docs/studio/template-compositions-api) catalogs shows the **parsed** shape for readability. Before you POST, you must JSON.stringify(data\_sources) and encodeUi(ui) respectively. If you send a raw array or object, the CMA rejects with a **422 type mismatch**. static\_value, url\_metadata.url\_queries, and linked\_sections follow the same "string on the wire" convention. See Section 8 for a fully-serialised worked envelope.

> **Concept detail:** for connected\_content\_type, see [The connected content type](/docs/studio/connected-content-type). For linked\_schemas, see [Linked schema](/docs/studio/link-content-types-with-linked-schema). For url and url\_metadata, see [URL variables reference](/docs/studio/url-variables-reference). For the ui tree, see [Building Blocks](/docs/studio/composition-building-blocks).

### URL metadata

```
"url_metadata": {
  "url_source": "content_type_url_pattern", // see allowed values below
  "url_queries": "{\"include\":[],\"only\":{},\"where\":{}}" // JSON string, not an object
}
```

url\_source is one of custom\_preview\_url, content\_type\_url\_pattern, default\_url\_pattern, user\_specified\_pattern, legacy\_url.

> **The URL and its metadata must agree, and both are required.** A Template's url pattern and the url\_metadata that describes how to resolve it are written together, a matched pair, never one without the other. Omitting url\_metadata doesn't fail the write and delivery may still resolve off the pattern alone, but Studio then has no derivation to read and treats the composition as legacy\_url. Sections carry neither field.

## 5\. The ui spec (layout tree)

> This section is the terse TypeScript type + the empty starting spec, enough to encode + POST. For a **key-by-key walkthrough** of every field with worked examples (uid, type, metadata, how props map from your React component, and how slots chain into a tree), read [Start here, the anatomy of a node](/docs/studio/composition-building-blocks#how-your-react-components-props-become-the-json) in the Building Blocks reference. This page and that one are matched: same seven fields, two different lenses.

ui is a tree of **nodes**. The root is always a page node (for both Templates and Sections). A node:

```
type Node = {
  uid: string;                      // 15-char nanoid, unique within the tree
  type: string;                     // "page" | "repeater" | "condition-block" | "section" | a registered component name
  attrs: Record<string, any>;       // reserved; {}
  metadata: {                       // optional; e.g. node-level bindings, condition, exposed props
    bindings?: Record<string, { type: string; value: unknown }>;
    // …
  };
  props: Record<string, NodeProp>;  // component props; a bindable prop is { type, binding: { type, value } }
  slots: Record<string, Node[]>;    // childUID → child nodes
  styles: Record<string, any>;      // per-group style overrides: { [group]: { classes, responsiveStyles } }; {} when unstyled
};
```

The **empty** spec the UI starts both Templates and Sections with:

```
{
  "uid": "<nanoid>",
  "type": "page",
  "attrs": {},
  "metadata": {},
  "props": { "children": { "type": "slot", "slot": "<slotUID>" } },
  "slots": { "<slotUID>": [] },
  "styles": {}
}
```

A node's type matches a **registered component** in the consuming app (the components you register via the SDK), plus the built-in types page, repeater, condition-block, section/section-slot.

(Bindings, repeaters, condition blocks, slots, and exposed props are detailed per shape in the catalog below.)

## 6\. Spec encoding (zlib): the critical step

The ui field is **not** raw JSON. It is the spec tree, zlib-compressed, base64-encoded, and prefixed with zlib::

```
ui = "zlib:" + base64( zlib_deflate( utf8( JSON.stringify(spec) ) ) )
```

> **Format must be exactly zlib (RFC 1950), not gzip, not raw DEFLATE.** The SDK decodes with unzlibSync, which rejects anything else. Use **standard** base64 (not URL-safe). Prefix the result with the literal ASCII string zlib:.

> **Reading ui back: expect both formats.** Verified against multiple stacks: the CMA accepts and stores ui **either** as zlib:\-prefixed base64 **or** as plain JSON string. Older or manually-created compositions may be uncompressed. Any client that reads ui from CMA/CDA should:
> 
> ```
> function decodeUi(field: string): object {
>   if (field.startsWith("zlib:")) {
>     const bytes = Uint8Array.from(atob(field.slice(5)), c => c.charCodeAt(0));
>     return JSON.parse(strFromU8(unzlibSync(bytes)));
>   }
>   return JSON.parse(field);   // plain JSON path
> }
> ```
> 
> **Always write compressed.** New entries you create should always use the zlib: encoding. It's smaller, and the SDK's write path assumes it.

> **The ui envelope has a strict shape. The CMA accepts less, but the SDK won't render it.** A minimal-but-CMA-accepted ui (e.g. {"type":"page","slots":{"root":\[...\]}}) POSTs successfully (201), and Studio's **Layers** panel even parses the tree, but the visitor-facing <StudioComponent /> renders **blank**. The SDK requires the full authored envelope:
> 
> -   **Root node** must include: uid, type: "page", attrs: {}, metadata: {}, styles: {}, and (critically) props.children: { type: "slot", slot: "<slotKey>" } pointing at a key inside slots, where the actual children live. Slot keys are opaque strings (Studio uses UID-like ids), **not** the literal "root".
> -   **Every child node** needs: uid, attrs: {}, type, metadata: {}, props, slots, and styles: { default: { classes: \[""\], responsiveStyles: { default: {} } } }. Setting styles: {} alone is not enough. The default.classes array + responsiveStyles are load-bearing for the SDK's style resolver.
> -   **metadata must be an object at every level.** The SDK's getSeoMetadata reads ui.metadata.seo unconditionally. With ui.metadata undefined, it throws TypeError: Cannot read properties of undefined (reading 'seo') and aborts the render. That's the first symptom of an under-specified envelope. Even after that's fixed, the missing style structure alone will keep the visitor render blank.
> 
> **Practical rule:** don't hand-craft the envelope from scratch. Author one composition in Studio, GET it back, use it as the template, and only edit the leaf props.\*.binding values in code. Studio-authored trees have every load-bearing field already populated.
> 
> Binding behavior in a linked template rendered on the canvas-app:
> 
> | Binding | What renders |
> | --- | --- |
> | { type: "template", value: { path: { title: {} } } } | Linked entry's title field value |
> | { type: "static\_value", value: "<nodeUID>-<propName>" } | Resolves against the entry's static\_value group by key. String, href, and choice (array-valued) all resolve. |
> | { type: "static\_value", value: "unknown-key" } | No match, so the component's registered defaultValue renders instead, with no error. This is the number-one authoring mistake: a binding.value that reads like a literal instead of a group key. |
> | { type: "component\_props", value: "<propName>" } | the consuming route must pass a data prop (NOT componentProps) to <StudioComponent />: <StudioComponent specOptions={...} data={{ auditProbeText: "...", auditProbeVariant: "secondary" }} />. data maps 1:1 to component\_props keys the SDK resolves. Both string and choice (array) prop types resolve correctly through this path. Without data, the binding silently falls back to the component's registered defaultValue. |
> | plaintext binding to an RTE field (field\_metadata.allow\_rich\_text\_editor: true) | the component receives the **raw HTML string** (e.g. "<p>Most CMS-driven…</p><p>This post walks…</p>") with tags visible if the component renders it as text. To display formatted output, the component must render its text prop via dangerouslySetInnerHTML. |
> | plaintext binding to a **plain multiline** text field (multiline: true but no RTE flag) | the component receives the string as-is, no <p> wrapping, newlines preserved. |
> | template binding with a nested path, { path: { hero: { headline: {} } } }, traversing into a **Global Field** | Global Field sub-fields resolve through path chaining. Same shape as a Group. |
> | template binding into a **Group** (Case 3), { path: { info\_grp: { g\_text: {} } } } | nested Group sub-fields resolve, rendering the actual entry values (GROUP.g\_text VALUE). |
> | **Repeater over a Modular Block field** (Case 11) with Condition Blocks per block type | With a 3-item MB (alpha, beta, alpha), the Repeater renders 5 conditional-branch leaves (alpha branch times 2 iterations + beta times 1) each hydrated with the real per-item text (ALPHA #1 text, BETA #1 text, ALPHA #2 text). Confirms condition-block.metadata.condition.value matching per block type and per-iteration data hydration on the deployed visitor route. |
> | **Nested Group inside a Modular Block** (Case 13), inner-group field inside an alpha block | Renders per alpha iteration with the real inner value (ALPHA #1 inner, ALPHA #2 inner). |
> | **Wrapper + Component** (Case 5), a box/wrapper node with children: { type: "slot", slot } holding a component whose props resolve normally | Wrapper is transparent to bindings. The slotted component's static\_value/template bindings resolve exactly as they would at the root. Rendered CASE 5 (WRAPPER+COMPONENT) RESOLVED from a static\_value on the slotted callout. |
> 
> **Scope of type: "repeater" path inside a Condition Block.** The repeater binding path is **scope-relative to the CB's dataBinding**, not to the outer template entry. If the CB's dataBinding.value.path is { alpha: {} }, then a repeater binding inside that CB uses path: { <field-of-alpha>: {} }, NOT path: { alpha: { <field> } }. The block-type prefix is already implied by the CB. Prefixing it a second time silently falls back to component defaults. Runtime-verified: writing path: { alpha: { alpha\_text: {} } } renders defaults. Rewriting to path: { alpha\_text: {} } renders the real MB item text.
> 
> **CMA publish is not Studio deploy.** Publishing the composition entry via CMA (POST .../entries/<uid>/publish) makes the entry visible to the CDA, but does not by itself push the composition tree to the visitor-facing render surface. **A visitor route (localhost:3006/blog/…) with real, per-item hydrated data requires the composition to be deployed through Studio** (Studio's UI Deploy button, or the Studio deploy API). Without deploy, the visitor route returns PREVIEW\_ENTRY\_NOT\_FOUND, and Studio's edit-mode canvas iframe (localhost:5173/studio/…/canvas/<uid>) shows the structure but leaves repeater inner leaves at component defaults.
> 
> **Studio Preview Mode**: the switch labeled Preview Mode in the Configuration panel when a Repeater is selected in Layers. Off (default) = one placeholder iteration. On = the SDK iterates the actual items binding count. Toggling this in a headless script means clicking the input inside the Configuration panel next to the Preview Mode label.

**Node / TypeScript** (matches the SDK's own implementation, fflate):

```
import { zlibSync } from "fflate";

function encodeUi(spec: object): string {
  const json = JSON.stringify(spec);
  const bytes = new TextEncoder().encode(json);
  const compressed = zlibSync(bytes, { level: 9 }); // level 9 = max
  const base64 = Buffer.from(compressed).toString("base64");
  return "zlib:" + base64;
}
```

Equivalent with Node's built-in zlib (no dependency):

```
import { deflateSync } from "node:zlib";

function encodeUi(spec: object): string {
  const compressed = deflateSync(Buffer.from(JSON.stringify(spec), "utf8"), { level: 9 });
  return "zlib:" + compressed.toString("base64");
}
```

> node:zlib's deflateSync produces zlib-wrapped output (correct). Do **not** use gzipSync.

## 7\. Create the composition

### Configuration & helpers

The examples use these constants and one helper. Set them once. For CMA\_HOST, use your stack's region host from Contentstack's [Content Management API endpoints](https://www.contentstack.com/docs/developers/contentstack-regions/api-endpoints) (all regions (AWS, Azure, GCP) are listed there. AWS NA is the default below):

```
const CMA_HOST = "api.contentstack.io";       // AWS NA — see the API Endpoints doc for your region
const STACK_API_KEY = "blt...";               // Stack → Settings → API key
const MANAGEMENT_TOKEN = "cs...";             // Stack → Settings → Tokens → Management Tokens (needs write scope)
const COMPOSITION_CT_UID = "compositions";    // your project's composition content-type UID
const LOCALE = "en-us";                        // your stack's MASTER locale (writes must target it)

import { nanoid } from "nanoid";
const id = () => nanoid(15);                    // node UIDs are 15-char nanoids
```

### Request

```
POST https://{CMA_HOST}/v3/content_types/{COMPOSITION_CT_UID}/entries?locale={LOCALE}
```

The locale query param is **required** and must be the stack's master locale. Composition entries are master-locale only.

**Node / TypeScript:**

```
async function createComposition(entry: object) {
  const url = `https://${CMA_HOST}/v3/content_types/${COMPOSITION_CT_UID}/entries?locale=${LOCALE}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      api_key: STACK_API_KEY,
      authorization: MANAGEMENT_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ entry }),
  });
  if (!res.ok) throw new Error(`Create failed: ${res.status} ${await res.text()}`);
  return res.json();
}
```

**Success** returns 201 with { entry: { uid, … }, notice: "Entry created successfully." }.

> **uid vs composable\_uid.** The returned entry.uid is the **CMA entry id**. It is not the composable\_uid. The SDK resolves a composition by its composable\_uid (and, for Templates, by URL), so composable\_uid is your stable handle, and the CMA uid is mostly for later update/delete calls.

**Errors, the full taxonomy:**

| Status | Meaning | Retry? |
| --- | --- | --- |
| 401 / 403 | Bad/expired management token, or no write scope on the content type. | No. Fix the token or scope. |
| 404 | COMPOSITION\_CT\_UID not found in the stack. | No. Fix the CT UID. |
| 422 | Validation error. **Full body shape:** { "error\_message": "...", "error\_code": <int>, "errors": { <field>: \[<message>\] } }. Verified: a duplicate composable\_uid returns error\_code: 119, errors.composable\_uid: \["is not unique."\]. A DELETE on a missing entry returns error\_code: 141, errors.uid: \["is not valid."\]. | No. Fix the payload. |
| 429 | Rate limit exceeded (10 req/sec/api-key on this CMA endpoint). **Body**: {"error\_code": 429, "error\_message": "Rate limit exceeded"}, a flat shape with no errors object. **Headers**: X-RateLimit-Limit: 10, X-RateLimit-Remaining: 0. **No Retry-After header**. | Yes. Back off. |
| 500 / 502 / 503 / 504 | Transient CMA error. | Yes. Retry with exponential backoff. |

**Retry policy that works in production:**

-   On **429**, back off starting at 1s, doubling to a 30s cap (2s, 4s, 8s, 16s, 30s). **No Retry-After header is sent** on this endpoint. You cannot honor a server-provided delay because there isn't one. Watch X-RateLimit-Remaining on 200 responses if you want proactive throttling.
-   On **5xx**, retry up to 3 times with jitter (500ms + random 0 to 500ms, then 2s, then 8s). Give up after that.
-   On **422**, **never retry**. The payload is bad. Log the exact errors object.
-   On **401/403/404**, **never retry**. The deployment is broken.

Idempotency: because composable\_uid is unique, retrying a create after a network glitch either succeeds fresh (if the original request never landed) or returns **422 "is not unique"** (if the original did land). Treat 422-not-unique as success + refetch.

**Batch operations.** The CMA has no true bulk-create endpoint. For migrations:

-   Queue creates with **concurrency at most 8** (below the 10 req/sec/token limit, leaves headroom for jitter).
-   Add 50 to 200ms jitter between requests. Watch for 429 and back off.
-   Chunk large migrations by 500-entry batches to log progress and resume on failure.
-   Use composable\_uid idempotency to make the migration script safely re-runnable. A resume queries each composable\_uid first and skips ones that already exist.

**Idempotency.** Treat composable\_uid as your idempotency key. Query for it before creating to avoid duplicates:

```
GET https://{CMA_HOST}/v3/content_types/{COMPOSITION_CT_UID}/entries?query={"composable_uid":"<uid>"}&locale={LOCALE}
```

### schema\_version semantics

schema\_version is a **convention marker** on the composition entry, not a CMA-enforced field, and the current SDK doesn't parse it. Its purpose is to give a stable string that downstream tooling (migration scripts, custom clients) can check before decoding ui. Current value: "1.0.0".

-   **When it changes.** Bumped when the ui\-spec encoding or node schema makes a **non-backward-compatible** change. Never bumped for additive changes (new prop types, new node types).
-   **Backward-compat guarantee.** The SDK reads any composition with a schema\_version at or below its own supported max. If the SDK is newer than the composition, the composition still renders.
-   **What to do.** Always write "1.0.0" unless the Studio release notes tell you to bump it. Custom clients: read this field, compare against the max version you understand, and either fall through to your decoder or refuse the entry with a clear error.

### Reference auto-inclusion

<a id="reference-auto-inclusion"></a>

Any composition whose ui binds against a reference field (a type: "reference" field in the connected CT, whether via a template binding path like { author: { slug: {} } } or through a Repeater over the reference) must declare the reference paths on the entry so the SDK expands them at delivery time:

```
{
  "data_sources": [
    { "uid": "template", "resolvedReferences": { "template": ["author", "related_posts"] } }
  ]
}
```

-   data\_sources is the JSON-stringified array (Section 6). The array element with uid: "template" carries a resolvedReferences map.
-   The **value** of each map key is an array of reference-field paths to auto-include ("author" for a top-level ref, "blocks.text.related\_posts" for a nested one).
-   The SDK reads this array at render time and injects the paths into the CDA request's includeReferences before fetching the connected entry. No manual url\_queries.include is needed or supported for template bindings.
-   The map's outer key is scoped to the specific binding origin. Studio writes "template" for template-scoped ref paths, or the picked entry's uid for contentstack\-source paths. For hand-authored compositions with template-scoped refs, "template" works.

Same shape applies to references used inside Repeaters, Condition Blocks, and query-source paths (the SDK aggregates resolvedReferences from all matching data-source entries).

### static\_value shape

static\_value on the entry is a nested object where each top-level key is a **field-type group** (text, choice, html\_rte, image, and so on) and each value is a list of { key, value } pairs. The SDK flattens these into one big key → value map at render time. That's the map a binding.type: "static\_value" looks up.

```
{
  "static_value": {
    "text": [
      { "key": "9c98abc123-text", "value": "Featured" },
      { "key": "9c98abc123-buttonLabel", "value": "Learn more" }
    ],
    "choice": [
      { "key": "abcd1234-align", "value": "center" }
    ],
    "html_rte": [
      { "key": "efgh5678-body", "value": "<p>Static rich text…</p>" }
    ]
  }
}
```

-   **The key format** (<nodeUID>-<propName>) is a **convention** Studio's editor uses so the same node's static props stay grouped. You can pick any unique key string. What matters is that the binding.type: "static\_value" value on the node **matches this key exactly**.
-   **Empty at creation.** Compositions created via the API typically don't need static\_value populated up front. Bindings that use it render the component's own default/placeholder until the field is filled.
-   **String on the wire?** No, unlike ui / data\_sources, static\_value is a regular JSON object field on the entry. Send it as parsed JSON, not stringified.

### Fields you don't write but see on responses

The CMA and CDA both add extra fields to every entry response. You never write to these. Studio and the CMS layer manage them.

**Top-level lifecycle fields** (present on CMA + CDA responses):

-   **uid**: the CMA entry id (a blt… string). Distinct from composable\_uid (your stable handle) and from any per-linked-schema \_metadata.uid.
-   **\_version**: monotonically increments on each update. **The CMA does NOT enforce a version check on PUT.** Verified against the live API: PUT with a stale \_version or with \_version omitted both succeed silently. If you need optimistic concurrency, implement it client-side (fetch, compare \_version, and refetch on mismatch). Do not rely on the server to reject.
-   **\_in\_progress**: boolean indicating an in-flight publish/unpublish job.
-   **publish\_details**: **requires ?include\_publish\_details=true on the GET**, otherwise the field is entirely absent from the response. Top-level array (not nested inside \_metadata). One entry per environment by locale currently published. Each item contains the environment **UID** (not name), locale, publish time, publishing user UID, and version:

    ```
    "publish_details": [
      {
        "environment": "blt0e52dde13a3c5cc9",   // environment UID, not name
        "locale":      "en-us",
        "time":        "2026-06-13T20:08:03.002Z",
        "user":        "blt733bdf350db15d56",
        "version":     10
      }
    ]
    ```

    To match against a target environment name, resolve environment via GET /v3/environments/{env\_uid} (or list envs and cache the map of names to uids).

-   **created\_at, updated\_at, created\_by, updated\_by, locale, ACL, tags**: standard CS entry envelope fields. Present on all CMA + CDA responses.

**No entry-level \_metadata.** Verified against live CMA POST / GET / PUT and CDA responses. The entry does NOT carry a top-level \_metadata key. If you see \_metadata, it is inside a linked\_schemas item (the CS internal link id, see next section), never at the entry root. Older Contentstack docs sometimes describe an entry-level \_metadata. On the composition CT it isn't present.

### linked\_schemas shape

Docs elsewhere show linked\_schemas as \[{content\_type\_uid, selected\_field}\]. That's the **narrow-scope** shape a Section uses when binding to a specific field. Reality adds:

**1\. Every linked-schemas item carries an auto-generated \_metadata.uid** on CDA (and CMA) responses:

```
"linked_schemas": [
  {
    "content_type_uid": "blog_post",
    "_metadata": { "uid": "csc71b86e884f121b8" }   // ← added by CS; internal link id
  }
]
```

The \_metadata.uid is a per-link internal id (distinct from any other uid on the entry). It's auto-generated on create and echoed back on reads. You don't need to include it on write. Omit it and the CMS assigns one.

**2\. selected\_field is optional and often absent.** A Section bound to the **whole content type** (Case 1, Case 10 in the [Section Catalog](/docs/studio/section-compositions-api)) omits selected\_field entirely. Only Sections that narrow into a specific field (a Modular Block, a nested Group, a Reference multi) carry it. Reader expectation to correct: selected\_field is a **narrow-scope opt-in**, not a required key.

### url\_metadata on responses

url\_metadata is **CMA-only**. Studio uses it to reconstruct URL patterns for the editor. Delivery-side CDA responses do NOT include this field. If you're writing a custom client that reads compositions via CDA, plan for url\_metadata to be undefined. Read url directly instead.

### linked\_sections shape variance

The CDA may return linked\_sections as an **empty array \[\]** (for Templates with no embedded Sections) or as an **absent key** (undefined) inconsistently between entries, even within the same stack. Handle both when parsing.

### Sanity-checking your spec before you POST

Two cheap checks that catch 80% of authoring mistakes before the CMA receives the request:

**1\. Round-trip the ui spec through your encoder and decoder.** If decodeUi(encodeUi(spec)) doesn't produce a structurally-identical object, your encoding is broken, usually a TextEncoder/Buffer mismatch or wrong zlib variant (see section 6). Do this once at process start:

```
const testSpec = { uid: id(), type: "page", attrs: {}, metadata: {},
  props: { children: { type: "slot", slot: "s1" } }, slots: { s1: [] }, styles: {} };
const roundTripped = decodeUi(encodeUi(testSpec));
if (JSON.stringify(roundTripped) !== JSON.stringify(testSpec)) {
  throw new Error("zlib round-trip failed — check encoder");
}
```

**2\. Walk the spec and validate slot links.** The most common per-node bug is a props.<name>.slot UID that doesn't match any key in the parent's slots. This is not caught by the CMA. The entry saves happily, then delivery renders empty. A 15-line walker catches every instance:

```
function validateSlots(node: any, path = "root"): string[] {
  const errors: string[] = [];
  const declared = new Set(Object.keys(node.slots ?? {}));
  for (const [propName, propVal] of Object.entries<any>(node.props ?? {})) {
    if (propVal?.type === "slot") {
      if (!declared.has(propVal.slot)) {
        errors.push(`${path}.props.${propName}.slot="${propVal.slot}" has no matching slots entry`);
      }
    }
  }
  for (const [slotUID, children] of Object.entries<any[]>(node.slots ?? {})) {
    children.forEach((c, i) => errors.push(...validateSlots(c, `${path}.slots["${slotUID}"][${i}]`)));
  }
  return errors;
}

const problems = validateSlots(spec);
if (problems.length) throw new Error("Spec has broken slot links:\n" + problems.join("\n"));
```

Also worth checking:

-   Every binding.type: "contentstack" and binding.type: "contentstack\_queries" references a uid / queryUID that appears in data\_sources. Silent-empty if not.
-   Every binding.type: "repeater" references a repeaterUID that matches an ancestor Repeater's uid. Silent-empty if not.
-   Every nanoid uid in the spec is unique within the tree (the CMA doesn't enforce this).

None of these are CMA-enforced, but all cause the composition to render blank or partially, which is hard to debug post-publish. Add them to your writer as CI gates and you'll catch most issues at author-time.

## 8\. Worked examples

### Minimal Template: linked (connected to a content type)

A linked Template binds to a content type and renders at that type's entry URLs.

```
const spec = { uid: id(), type: "page", attrs: {}, metadata: {},
  props: { children: { type: "slot", slot: "s1" } }, slots: { s1: [] }, styles: {} };

await createComposition({
  title: "Blog Post",
  composable_uid: "blog_post_template",
  place_composition_as: "page",                 // ← Template
  connected_content_type: "blog_post",          // ← the content type it binds to
  url: "/blog/{{entry.title}}",                 // from the content type's URL pattern
  url_metadata: {
    url_source: "content_type_url_pattern",
    url_queries: "{\"include\":[],\"only\":{},\"where\":{}}",
  },
  ui: encodeUi(spec),
  data_sources: "[]",
  schema_version: "1.0.0",
});
```

### Minimal Template: freeform (no content type)

A freeform Template has no connected content type. Its URL defaults to /{composition-ct-uid}/{composable\_uid}.

```
const spec = { uid: id(), type: "page", attrs: {}, metadata: {},
  props: { children: { type: "slot", slot: "s1" } }, slots: { s1: [] }, styles: {} };

await createComposition({
  title: "Spring 2026 Landing",
  composable_uid: "spring_2026_landing",
  place_composition_as: "page",                 // ← Template
  connected_content_type: "",                   // ← freeform: no content type
  url: `/${COMPOSITION_CT_UID}/spring_2026_landing`,  // default freeform URL
  url_metadata: {
    url_source: "default_url_pattern",
    url_queries: "{\"include\":[],\"only\":{},\"where\":{}}",
  },
  ui: encodeUi(spec),
  data_sources: "[]",
  schema_version: "1.0.0",
});
```

### Minimal Section

```
const spec = { uid: id(), type: "page", attrs: {}, metadata: {},
  props: { children: { type: "slot", slot: "s1" } }, slots: { s1: [] }, styles: {} };

await createComposition({
  title: "Featured Card",
  composable_uid: "featured_card",
  place_composition_as: "section",         // ← Section
  connected_content_type: "",
  ui: encodeUi(spec),
  data_sources: "[]",
  schema_version: "1.0.0",
  // no url; url_metadata from the section resolver; linked_schemas attached later in the editor
});
```

<a id="embedding-sections"></a>

## 8a. Embedding a Section inside a Template

Two fields must line up whenever a Template embeds a Section. Miss either and the Studio canvas renders the Template as an empty region with no error.

**On the Template entry:**

1.  **linked\_sections**: array of { uid, \_content\_type\_uid } per embedded Section:

    ```
    "linked_sections": [
      { "uid": "<section entry uid>", "_content_type_uid": "<composition CT uid>" }
    ]
    ```

    uid = the CMA entry UID of the Section (not its composable\_uid). \_content\_type\_uid = the composition CT (same as COMPOSITION\_CT\_UID, typically compositions or your custom one).

2.  **Inside the ui tree, a section-composition node** referencing the Section by its CMA uid:

    ```
    {
      "uid": "<node uid>",
      "type": "section-composition",
      "metadata": { "compositionUID": "<section entry uid>" },
      "props": {
        // Overrides for exposed Section props — key = exposed prop uid, value = { type, binding }
        "hero_headline": { "type": "plaintext", "binding": { "type": "static_value", "value": "custom-key-name" } }
      },
      "slots": {
        // Fills for Section Slots — key = section-slot node uid on the Section, value = child nodes
        "<section-slot node uid>": [ /* content the Template drops into the slot */ ]
      }
    }
    ```


**Two must-agree pairs:**

-   metadata.compositionUID on the node **\=** the Section entry uid in linked\_sections.
-   Each key in slots **\=** the exact uid of a section-slot node inside the referenced Section's ui tree.

Setting only metadata.compositionUID but omitting linked\_sections produces a Template that Studio recognizes as having the Section reference (it appears in the Sections palette) but doesn't render it in the canvas. Setting linked\_sections alone without a section-composition node produces the same silent-empty. Both fields are required.

<a id="rendering-in-studio-canvas"></a>

## 8b. Rendering in Studio's canvas: the URL prerequisite

Studio's canvas renders a composition by **loading your consuming app** (the one that hosts the SDK) at the composition's URL, not by decoding the ui spec directly. This has two implications for anyone creating Templates via the API:

-   **The Template's url must resolve to a route your consuming app serves.** If your app is set up per the docs with a catch-all Studio route (e.g. app/\[\[...slug\]\]/page.tsx), any URL matches. If not, the Template's URL must match one of the specific routes your app has. Mismatches show a "Template Did Not Load" banner in the canvas with hints.
-   **This works with unpublished compositions.** Studio's canvas uses the Live Preview call (a CMA-backed preview endpoint) instead of the CDA, so you can create a Template via the API, open it in Studio's canvas immediately, and see it render **without publishing**. Publishing is only needed for the CDA delivery path (see section 9).

**For Sections:** the Section canvas doesn't need a matching route. Studio renders the Section standalone against a preview entry. Only Templates need the URL prerequisite.

**Second prerequisite: the consuming app must have the Studio SDK initialized.**If the URL Studio loads exists but the page doesn't run studioSdk.init({ stackSdk, contentTypeUid }), the canvas shows an **"SDK Not Initialized"** overlay with the exact init snippet. Check the following when you see this:

-   The route your Template's url resolves to must be a page that includes the SDK init call (usually near the top of the app entry / layout).
-   contentTypeUid passed to studioSdk.init must be the same composition CT UID the project points at (in Studio, open Settings, then Composition Content Type, or read the value returned by GET /v1/projects/{project\_uid} under contentTypeUid).

## 9\. After creating: publish AND deploy

Creating the entry leaves the composition in **draft**, invisible to any consumer. Two separate steps make it visitor-ready:

1.  **Publish the entry via CMA** (below), required for the CDA to see it.
2.  **Deploy the composition through Studio**: required for the visitor-facing route (e.g. /blog/<slug>) to pick it up. Deploy is a separate operation from CMA publish. Without it, the visitor render surface returns PREVIEW\_ENTRY\_NOT\_FOUND even though the entry is published. Studio's edit-mode canvas iframe still works (it uses Live Preview messaging), which is why a not-yet-deployed composition looks fine inside Studio and blank on localhost:3006.

Publish (step 1) is the standard CMA call:

```
POST https://{CMA_HOST}/v3/content_types/{COMPOSITION_CT_UID}/entries/{entry_uid}/publish?locale={LOCALE}
```

**Body:**

```
{
  "entry": {
    "environments": ["development"],   // or "production", etc.
    "locales": ["en-us"]                // master locale of your stack
  }
}
```

**Success** returns **201** with {"notice":"The requested action has been performed."}. No job\_id in the response. The publish is async and the CMA doesn't hand back a tracking id.

> **Wrong environment name = 401, not 404.** Publishing to an env name that doesn't exist on the stack returns 401 with {"error\_message":"Environment doesn't exist or insufficient permission to access it.","error\_code":161}, the same shape as a token-permission failure. If you see 401 on a publish that worked yesterday, check GET /v3/environments before assuming your token was revoked. Common stacks have preview and production, not development.

**How to confirm it landed.** The publish\_details array on the entry is the source of truth, but two catches make polling non-obvious:

-   **You must pass ?include\_publish\_details=true** on the GET. Without the flag, the field is absent from the response entirely.
-   Match against the **environment UID**, not its name. publish\_details\[\].environment holds blt… UIDs. Resolve to names via GET /v3/environments.

```
GET /v3/content_types/{COMPOSITION_CT_UID}/entries/{entry_uid}?locale={LOCALE}&include_publish_details=true
```

Poll every 3 to 5s. The publish\_details entry typically lands within 10 to 30s. Cap polling at 60s.

Without publishing, useCompositionData / the delivery path returns 404. See [Save vs Deploy a composition](/docs/studio/save-vs-deploy-a-composition).

## 10\. Reading the composition back (delivery)

Read-side is the **CDA** (Content Delivery API), not the CMA. Two shapes:

-   **By URL** (Templates): the SDK's useCompositionData({ url }) hook resolves the URL through Studio's composition-matching pipeline (see [Template URL resolution](/docs/studio/template-compositions-api#example-linked-template)).
-   **By composable\_uid**: the SDK's fetchCompositionData({ compositionUid }) returns the parsed spec directly. Useful for embedding a Section in a hand-rendered route.

The delivery layer decompresses the zlib:\-encoded ui for you. If you're writing a custom client (not the SDK), pull the entry via CDA and run zlib\_inflate on the ui field after stripping the zlib: prefix.

## 11\. Update, delete, and query

Everything past create is standard CMA. Endpoints:

| Operation | Method + URL | Notes |
| --- | --- | --- |
| **Get one** | GET /v3/content\_types/{COMPOSITION\_CT\_UID}/entries/{entry\_uid}?locale={LOCALE} | Returns the entry with ui still zlib:-encoded. |
| **Query by composable\_uid** | GET /v3/content\_types/{COMPOSITION\_CT\_UID}/entries?query={"composable\_uid":"..."}&locale={LOCALE} | The idempotency check from section 7 also uses this. |
| **Update** | PUT /v3/content\_types/{COMPOSITION\_CT\_UID}/entries/{entry\_uid}?locale={LOCALE} | Body: { "entry": { ...changed fields } }. Send **only** the fields you want to change. Re-encode ui and re-stringify data\_sources if you touched them. |
| **Delete** | DELETE /v3/content\_types/{COMPOSITION\_CT\_UID}/entries/{entry\_uid}?locale={LOCALE} | **Not idempotent.** 200 on a real delete. **422** with {"error\_code":141,"errors":{"uid":\["is not valid."\]}} if the entry is already gone. Wrap the call with a try/catch for the not-found case. |
| **Unpublish** | POST /v3/content\_types/{COMPOSITION\_CT\_UID}/entries/{entry\_uid}/unpublish?locale={LOCALE} | Same body shape as publish. Required before delete for published entries in some stack configs. |

**Rate limits.** The CMA enforces per-token rate limits (default: 10 requests/second/token). Migrations should batch, add jitter, and back-off on **429** responses. Full CMA rate-limit reference: [Contentstack Rate Limits](https://www.contentstack.com/docs/developers/apis/content-management-api/#rate-limits).

**Concurrency.** CMA entry updates are **truly last-write-wins**. There's no ETag, no version header, and the \_version field in the entry body is **ignored on write** (verified: PUT with a stale \_version succeeds silently and increments the counter). Any optimistic concurrency has to be client-side: GET, remember \_version, PUT, then GET again and compare. If the returned \_version skipped past what you expected, someone else wrote in between and you should refetch and merge.

**Decoding ui for debugging.** After a GET, decode the field:

```
import { unzlibSync, strFromU8 } from "fflate";

function decodeUi(field: string): object {
  const b64 = field.replace(/^zlib:/, "");
  const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  return JSON.parse(strFromU8(unzlibSync(bytes)));
}
```

---

## 12\. The catalogs

The ui\-tree shapes (every building block, plus worked Section and Template cases) live in three companion docs:

-   **[Building Blocks](/docs/studio/composition-building-blocks)**: the shared vocabulary: every block (single value, value sources, repeater, condition block, groups & global fields, reference, modular blocks, registered component) + the mechanics (section slot, binding override) + the **data-source availability matrix** + the prop/node type reference. Explained once. Both catalogs reference it.
-   **[Section Catalog](/docs/studio/section-compositions-api)**: reusable sections, worked case by case (standard, slot, global field, group/group-multiple, modular blocks, references, wrapper sections, inner-nesting), each shown with the template that consumes it.
-   **[Template Catalog](/docs/studio/template-compositions-api)**: templates as first-class pages: **linked + freeform**, their container fields, data sources, URL patterns, and ui binding straight to the connected entry.
