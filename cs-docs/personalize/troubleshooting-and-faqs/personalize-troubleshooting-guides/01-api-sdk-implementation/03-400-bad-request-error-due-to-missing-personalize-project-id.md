---
title: "400 Bad Request Error Due to Missing Personalize Project ID"
description: "400 Bad Request Error Due to Missing Personalize Project ID"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/01-api-sdk-implementation/03-400-bad-request-error-due-to-missing-personalize-project-id
doc_type: faq
_cms_section_uid: cs770b42cb56e18e4b
_cms_faq_uid: cs974c286f2e85b82a
---

# 400 Bad Request Error Due to Missing Personalize Project ID

API calls to retrieve user attributes from Personalize may return a 400 Bad Request error. This prevents the system from fetching necessary user data, effectively blocking any personalization logic that relies on these attributes.

**Root Cause**

The issue is caused by a missing Project ID in the Personalize API request. When the integration is powered by Lytics, the API expects a valid Project ID to route the request; if this ID is not configured within the Lytics platform fields, it will not be passed in the outgoing request, resulting in an authentication or routing failure.

**Resolution**

1.  Inspect the failed API request and confirm if the project\_id parameter or header is missing or null.
2.  Navigate to the Lytics platform settings and locate the field designated for the Personalize Project ID.
3.  Update this field with the correct Project ID from the Contentstack Personalize dashboard.
4.  Save the configuration to ensure the ID is included in subsequent API calls.

After updating the Project ID in Lytics, re-trigger the API call to fetch user attributes. If the system returns a 200 OK response with the correct user data, the issue is resolved.
