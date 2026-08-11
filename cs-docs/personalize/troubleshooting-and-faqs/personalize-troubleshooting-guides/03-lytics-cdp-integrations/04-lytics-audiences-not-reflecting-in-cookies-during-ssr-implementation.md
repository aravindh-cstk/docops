---
title: "Lytics Audiences Not Reflecting in Cookies During SSR Implementation"
description: "Lytics Audiences Not Reflecting in Cookies During SSR Implementation"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/03-lytics-cdp-integrations/04-lytics-audiences-not-reflecting-in-cookies-during-ssr-implementation
doc_type: faq
_cms_section_uid: cs5e5eda65652298fc
_cms_faq_uid: cs9c7a03a14449abac
---

# Lytics Audiences Not Reflecting in Cookies During SSR Implementation

Implementing personalization in a Server-Side Rendering (SSR) environment may fail when Lytics audiences do not correctly appear in browser cookies. This prevents Personalize from identifying user segments, causing the site to display default content.

**Root Cause**

The issue is caused by a failure in the Lytics segment assignment process, where the user profile is not successfully associated with the target audience at the CDP level. Because the segmentation data never reaches the browser cookies, the downstream Personalize engine cannot trigger variant rules.

**Resolution**

1.  Check the Lytics dashboard to verify if the test user is successfully being added to the intended segment.
2.  Verify the Edge function and proxy configuration to ensure data is passing correctly between the server and the Lytics API.
3.  If the user does not appear in the Lytics segment, escalate the issue to the Lytics support team via a specialized Zendesk ticket.
4.  Provide the development domain and specific cookie screenshots to the Lytics team to facilitate troubleshooting.
