---
title: "Troubleshoot Studio as a Content Author"
description: "Top author-facing symptoms + fixes you can try without escalating to engineering."
url: /studio/troubleshooting-for-authors
---

# Troubleshoot Studio as a Content Author

## Troubleshooting for Authors

**Time:** ~5 min per symptom. **Level:** Any. Jump in when something looks wrong. **Glossary:** every unfamiliar Studio word has a one-line definition in the [Glossary](/docs/studio/studio-glossary-for-authors).

Top author-facing symptoms + fixes you can try without escalating to engineering. If a fix says "ask your team," it's a code-side change you can't do from Studio alone.

## My Section is empty

**Likely cause:** the entry field the Section binds to is empty.

**Fix:** open the entry in Contentstack: go to Content, then Entries. Fill the empty field. Publish the entry. Refresh Studio's canvas.

If the field is filled but the Section still shows empty, the field name may have changed on the content type since the Section was built. Ask your team.

## The exposed prop I changed doesn't take effect

**Likely cause:** you Saved but didn't Deploy.

**Fix:** in Studio, open your project, then the Template, and click **Save** THEN **Deploy**. Save alone is a draft. Deploy publishes it to visitors.

## The page 404s

**Likely cause:** the Template's URL pattern doesn't match your entry's URL.

**Fix:** open the Template. Check the URL pattern (e.g. /blog/{{entry.slug}}). Open the entry: does its slug field match the URL you're testing? If the pattern is {{entry.slug}} but your entry's slug is empty, the URL won't resolve. Fill the slug. Publish. Retry.

## A component I want isn't in the palette

**Cause:** your engineering team hasn't registered that component yet.

**Fix:** ask your team to add it. Share the component name and a screenshot of where you want to use it.

## A Section that USED to be in my palette is gone

**Cause:** engineering removed or renamed the underlying component in the code base. When a Section's inner component disappears, the Section itself is unusable. Studio hides it from the palette until the code catches up.

**Fix:** two questions for engineering:

-   "Was <XyzComponent> removed on purpose, or is this a bug?" If on purpose, they should replace the Section with a new one. If a bug, they revert the removal.
-   "Any Templates I still have live that used this Section?": if yes, those Templates now render an empty region where the Section was. Ask engineering to fix quickly. In the meantime, open affected Templates and drop a replacement Section into the gap.

You can find affected Templates by opening each and looking at the Layers panel. If a row shows a red / broken indicator with the old component's name, that Template needs attention.

## Studio's canvas is blank

Order to check:

1.  **Empty state?** If you opened Studio and haven't dropped anything, blank is expected. Drop a Section from the palette.
2.  **Iframe failing to load?** Check the browser console (F12). If you see CORS or "mixed content" errors, your team's app isn't reachable. Ping engineering.
3.  **The Template has no matching entry?** If the Template's URL pattern requires a slug field and the entry doesn't have one, the preview is empty. Ask a colleague to add a test entry.

## My change was fine yesterday and now it's gone

**Cause:** either a colleague redeployed an older version, or a Contentstack workflow reverted the entry.

**Fix:** open the composition (Template or Section), go to Versions, find your version by date, and Deploy it. Full rollback flow: [Rolling back](/docs/studio/publishing-and-preview-for-authors#rolling-back-a-bad-deploy) in Publishing and preview.

## The Section renders but the CTA / image / button isn't clickable

**Cause:** either the field's value points to a broken URL, or the component is misconfigured.

**Fix:** open the entry, verify the href / url field is a real URL. If it's fine, the component itself may have a bug. Ask your team.

## I dropped a Section and I don't see it on the canvas

**Cause:** the Section may have rendered but be positioned off-screen (empty container styling, height:0 elements) OR the Section's underlying component crashed silently.

**Fix:**

1.  Save + Deploy first: sometimes the canvas doesn't refresh until the composition is saved.
2.  Scroll the canvas. The Section may have rendered further down.
3.  If still not visible, check the browser console for errors. Share the error with your team.

## "Section doesn't fit" or "Cannot drop here"

**Cause:** the Section's linked schema doesn't match anything on the Template's content type.

**Fix:** the Section was built for a different content type than this Template. Either use a different Section, or ask your team to link that Section to this CT.

## A cookie banner or chat bubble is covering the canvas

**Cause:** not a Studio bug. The canvas shows your real website, so your site's cookie-consent banner (OneTrust etc.) and chat widget (Intercom, Drift, Qualified) load inside it too. Dismissing the banner only lasts until the next refresh.

**Fix:** this is a quick code-side change, not something you can fix from Studio. Send your developer this link: [Detect the Studio canvas, gating third-party scripts](/docs/studio/detect-the-studio-canvas). It's typically a 10-minute fix, and it also stops your analytics from counting your editing sessions as real visitors.

## Still stuck?

Grab a screenshot of the canvas + the browser console (F12, then the Console tab) + the URL you're testing, and share with your engineering team. Most author-facing issues are 5-minute fixes for someone who knows the code.
