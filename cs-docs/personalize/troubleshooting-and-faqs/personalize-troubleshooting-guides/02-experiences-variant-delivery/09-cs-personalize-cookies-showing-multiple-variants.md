---
title: "cs-personalize Cookies Showing Multiple Variants"
description: "cs-personalize Cookies Showing Multiple Variants"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/02-experiences-variant-delivery/09-cs-personalize-cookies-showing-multiple-variants
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: cs919f81efbcd212fd
---

# cs-personalize Cookies Showing Multiple Variants

Browser cookies set by Contentstack Personalize (cs-personalize) contain multiple variant entries such as "4:0; 6:0; c:0" across different experiences. Users may be unsure whether this is expected behavior or a tracking error, and may be relying on cookies to determine which variant was actually displayed on a page.

**Root Cause**

The /manifest endpoint evaluates all active experiences for a user at runtime and returns variants for each applicable experience simultaneously. Cookies reflect all evaluated and active experiences, not just the one tied to the current page render. This is expected behavior and not a bug.

**Resolution**

1.  Do not rely on cs-personalize cookies to determine which variant was actually shown on a given page. Cookies reflect all experiences evaluated at manifest resolution time, not just what was rendered.
2.  To accurately track which variant was rendered, use the Content Delivery API (CDA) response. Extract the publish\_details.variants field from the entry response, which contains the actual variant aliases applied to the content that was returned.
3.  Trigger impression and conversion tracking events using the variant aliases extracted from publish\_details.variants, not from cookie values.
4.  Refer to the official impression tracking documentation for the recommended implementation pattern: https://www.contentstack.com/docs/personalize/dynamically-track-variant-impressions

Using publish\_details.variants from the CDA response ensures that tracking reflects exactly what was displayed to the user, preventing inflated or incorrect attribution.
