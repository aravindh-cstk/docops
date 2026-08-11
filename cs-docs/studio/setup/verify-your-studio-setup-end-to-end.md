---
title: "Verify Your Studio Setup End-to-End"
description: "A layered smoke test to confirm your Delivery SDK, Live Preview, Studio SDK, canvas route, template preview, and inline editing are all wired correctly."
url: /studio/verify-your-studio-setup-end-to-end
---

# Verify Your Studio Setup End-to-End

## Verify Your Studio Setup End-to-End

A layered smoke test. Run these checks top-to-bottom, each layer is gated on the previous one passing. When a check fails, fix that layer before continuing.

## 1\. Delivery SDK: Can Your App Read Content?

Add a temporary log to any page or a one-off script:

```
import { stack } from "@/lib/contentstack";

const { entries } = await stack
  .contentType("blog_post")     // any content type you have
  .entry()
  .find();

console.log("Delivery:", entries.length, "entries");
```

✅ **Pass:** non-empty array (or empty array if your stack has no content yet, but no error) ❌ **Fail:** Check your browser console for errors including: - 401 Unauthorized, wrong Stack API Key or Delivery Token - 404 Not Found, wrong content type UID

Re-check [Install the Delivery SDK](/docs/studio/install-the-delivery-sdk).

## 2\. Live Preview: Does the Page Update Without Reloading?

1.  Open your app in a browser.
2.  In another tab, open Contentstack to an entry of a content type your app reads.
3.  Edit a field. Click **Preview**.
4.  Switch to your app tab.

✅ **Pass:** the page reflects the edit without a manual refresh. ❌ **Fail:** the page didn't change. Work through this checklist: - \[ \] Confirm ContentstackLivePreview.init(…) runs at app boot, then add a console.log inside the init call to verify. - \[ \] Confirm onEntryChange is wired to your render or refetch function. - \[ \] Confirm the Preview Token in your .env.local matches the token shown in Stack → Settings → Tokens.

Re-check [Install Live Preview](/docs/studio/install-live-preview).

## 3\. Studio SDK: Does studioSdk.init Run Cleanly?

Open the browser console for your app. Check your browser console for errors including: - studioSdk not initialised - contentTypeUid is required - stackSdk is missing

Add a temporary log:

```
import { studioSdk } from "@/lib/contentstack";
console.log("Studio SDK ready");
```

✅ **Pass:** the log fires without errors. ❌ **Fail:** check that studioSdk.init({ stackSdk, contentTypeUid }) is called, that stackSdk is the Delivery SDK instance, and that contentTypeUid matches the CT Studio created. Re-check [Install the Studio SDK](/docs/studio/install-the-studio-sdk).

## 4\. Canvas Route: Does <StudioCanvas /> Render?

Open your canvas route directly in a browser, the composed canvas address, which is the environment's per-locale Base URL (origin) + the **Canvas URL** path you set in Studio Configuration (e.g. http://localhost:5173 + /canvas = http://localhost:5173/canvas).

✅ **Pass:** the page loads. It might look blank or show a minimal Studio shell because it's expecting to be loaded inside Studio's iframe (that's fine). ❌ **Fail:** 404 → the route doesn't exist. Add it (see [Section preview route](/docs/studio/section-preview-route)). Blank with a JS error → check that <StudioCanvas /> is imported and mounted.

## 5\. Studio Project: Can You Open a Composition?

1.  Open Studio to your project.
2.  Click any section in the Sections tab (or create one).
3.  The canvas iframe should load with the section rendered inside.

✅ **Pass:** the section renders inside the iframe. ❌ **Fail:** - "No Canvas URL Found" → set the Canvas URL field in Project Settings → Configuration. - "Environment Not Configured" → pick an Environment + Language. - Iframe loads your home page instead of the canvas: your Canvas URL is / instead of a dedicated path.

## 6\. Template Preview: Does a Real Page Render?

1.  Create or open a Connected template in Studio.
2.  Drop a few components, save.
3.  Visit the route on your site that matches the template's URL pattern (e.g. /blog/ai-101).

✅ **Pass:** the page renders with the template's layout + bound entry data. ❌ **Fail:** "Template did not load" → the template's URL pattern doesn't match your route. Either fix the pattern in Studio (Edit URL modal) or add the matching route. See [Template preview routes](/docs/studio/template-preview-routes).

## 7\. Inline Editing: Does Visual Editor Work?

1.  Open the template's canvas in Studio.
2.  Click on any component bound to entry data.
3.  Edit the field inline.

✅ **Pass:** the change saves to the entry and reflects in the canvas without a reload. ❌ **Fail:** Visual Editor not enabled stack-wide. Open Contentstack, then Stack, then Settings, then Visual Experience, then General, then check **Enable Live Preview**.

## All Green?

You're done. Studio is wired end-to-end. Hand the canvas URL to your authors and they can start composing.

## Optional: LLM-Assisted Verification

```
npx @contentstack/studio-skills install
```

Then: _"verify my Studio setup"_. The LLM runs the same checks, prints a layered report, and offers to fix what failed.
