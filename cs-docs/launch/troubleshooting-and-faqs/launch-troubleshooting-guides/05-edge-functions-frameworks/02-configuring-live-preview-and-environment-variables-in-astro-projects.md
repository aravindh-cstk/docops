---
title: "Configuring Live Preview and Environment Variables in Astro Projects"
description: "Configuring Live Preview and Environment Variables in Astro Projects"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/05-edge-functions-frameworks/02-configuring-live-preview-and-environment-variables-in-astro-projects
doc_type: faq
_cms_section_uid: csdb00c5f9828f74b1
_cms_faq_uid: cs277ed53d9ab30715
---

# Configuring Live Preview and Environment Variables in Astro Projects

Setting up Live Preview in Astro projects may fail when environment variables are handled incorrectly during SSR or SSG. This prevents users from viewing real-time content changes within the Live Preview interface.

**Root Cause**

Environment variables in Contentstack Launch are parsed upon ingestion, whereas local development environments typically treat these variables strictly as string values, leading to configuration mismatches.

**Resolution**

1.  Navigate to your Astro project configuration and verify how environment variables are being accessed for SSR and SSG.
2.  Adjust your code to account for the fact that Launch parses environment variables rather than treating them solely as strings.
3.  Review the implementation guide for Astro to ensure the Live Preview integration aligns with platform requirements.

After completing the resolution steps, open the Contentstack entry editor and initiate a Live Preview session for your Astro project. If the preview renders correctly and reflects your content changes, the issue is resolved.
