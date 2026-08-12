---
title: "Lytics Experience Pop-up Failing to Appear on Live Pages"
description: "Lytics Experience Pop-up Failing to Appear on Live Pages"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/02-experiences-variant-delivery/04-lytics-experience-pop-up-failing-to-appear-on-live-pages
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: cs78cf76c6cf4f4eda
---

# Lytics Experience Pop-up Failing to Appear on Live Pages

A Lytics Experience (such as a notification or pop-up) may be visible in the preview environment but fail to appear on live pages, often accompanied by a "Bad Request" error.

**Root Cause**

The request sent to the personalization edge API is missing the PROJECT\_UID header. Without the x-cs-personalize-project-uid header during a PATCH request to the /user-attributes endpoint, the system returns an error and blocks the experience.

**Resolution**

1.  Open browser developer tools and inspect the **Network** tab for failed requests to personalize-edge.contentstack.com.
2.  Look for the error message: personalize.USER\_ATTRIBUTES.PROJECT\_UID\_HEADER\_NOT\_SET.
3.  Update the implementation to ensure the required Project UID is included in all personalization-related request headers.
4.  Verify the experience is correctly activated in the Lytics dashboard and targeted to the correct URL.

Navigate to the target live page after ensuring the Project UID header is correctly set. If the intended pop-up appears as expected, the issue is resolved.
