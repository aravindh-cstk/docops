---
title: "Error Code 118 - Content Type Not Found"
description: "Error Code 118 - Content Type Not Found"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/088-error-code-118-content-type-not-found
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs37098335dd0fc673
---

# Error Code 118 - Content Type Not Found

API calls to fetch entries for a specific content type return Error Code 118 with the message Content Type not found. The content type appears to exist in the CMS.

**Root Cause**

Error 118 is returned when the content type UID referenced in the API request is invalid, inaccessible, or not available in the queried environment. Common causes include:

-   The content type UID in the URL does not match the actual UID in the stack (case-sensitive mismatch or typo)
-   The content type exists in a different branch or environment than the one being queried
-   The delivery token being used does not have access to the environment containing the content type
-   The API key being used does not correspond to the stack containing the content type

**Resolution**

1.  Verify the content type UID exactly as it appears in the CMS (Settings > Content Types). UIDs are case-sensitive.
2.  Confirm the delivery token has access to the target environment.
3.  Confirm the API key matches the stack containing the content type.
4.  Ensure the request is targeting the correct branch if branches are in use.

After correcting the content type UID, token, and environment configuration, re-run the API request and confirm a valid response is returned without error 118.
