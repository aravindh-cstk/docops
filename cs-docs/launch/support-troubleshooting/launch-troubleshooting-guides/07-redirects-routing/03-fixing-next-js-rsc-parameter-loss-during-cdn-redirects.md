---
title: "Fixing Next.js RSC Parameter Loss During CDN Redirects"
description: "Fixing Next.js RSC Parameter Loss During CDN Redirects"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/07-redirects-routing/03-fixing-next-js-rsc-parameter-loss-during-cdn-redirects
doc_type: faq
_cms_section_uid: csa82453e7ca89b7fd
_cms_faq_uid: csa53ddd063338b811
---

# Fixing Next.js RSC Parameter Loss During CDN Redirects

A production site using Next.js on Launch experiences routing failures where the \_rsc parameter is stripped during CDN-level redirects. This breaks React Server Component (RSC) data fetching and causes partial or blank page renders.

**Root Cause**

Launch CDN redirect rules do not automatically preserve internal Next.js parameters such as \_rsc. When CDN-level rewrites or redirects occur, these parameters are dropped, disrupting the RSC payload request cycle that Next.js relies on for client-side navigation.

**Resolution**

1.  Update the rewrite or redirect logic in the Launch configuration or Edge Function to explicitly detect and preserve the \_rsc query parameter.
2.  As an alternative, implement a Launch Edge Function that intercepts requests containing \_rsc, strips the parameter before forwarding to the origin (to avoid double-processing), and ensures the response is returned correctly to the client.
3.  Review all existing CDN rewrite rules to confirm that no other Next.js internal parameters (such as \_next or \_\_nextjs\_) are being stripped.
4.  Redeploy and test client-side navigation flows to confirm RSC payloads load correctly without blank page renders.

The issue is resolved when all pages load correctly during client-side navigation and RSC data fetching errors no longer appear in the browser console or server logs.
