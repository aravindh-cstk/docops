---
title: "Live Edit Button Appearing in Production Environment"
description: "Live Edit Button Appearing in Production Environment"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/46-live-edit-button-appearing-in-production-environment
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csdffee27c6b34c282
---

# Live Edit Button Appearing in Production Environment

The Live Preview edit button (#cslp-tooltip) appears on the production website even though Live Preview is not configured for production.

**Root Cause**

The production build is including the full Live Preview SDK rather than the lightweight build, so Visual Builder components - including the edit button (#cslp-tooltip) - are bundled and injected into the production DOM even when a Live Preview token is not defined.

**Resolution**

1.  Set the PURGE\_PREVIEW\_SDK=true environment flag in .env.production (for Next.js projects using @contentstack/live-preview-utils). This swaps in the lightweight SDK build, which excludes Live Preview and Visual Builder components - including the edit button - from the production bundle.
2.  Rebuild and redeploy the production environment after adding the flag.
3.  If the edit button or Visual Builder code persists in the production bundle/DOM after correctly applying PURGE\_PREVIEW\_SDK=true, this is a known SDK-bundling issue rather than a configuration mistake. Confirm you are on the latest SDK version, and if the issue persists, contact Contentstack Support with your @contentstack/live-preview-utils version and a description of the persisting behavior.

After redeploying with the flag applied, confirm the edit button overlay no longer appears in production and, if it does, escalate to Support rather than assuming a coding error.
