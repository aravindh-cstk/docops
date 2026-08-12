---
title: "Launch API Returns 403 Forbidden - org_id Required"
description: "Launch API Returns 403 Forbidden - org_id Required"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/08-launch-api-returns-403-forbidden-org-id-required
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: csf22ef8d01e1337bc
---

# Launch API Returns 403 Forbidden - org_id Required

A Launch API request authenticated with a valid authtoken returns a 403 Forbidden error with the message ‘launch.FORBIDDEN\_RESOURCE’. The authtoken is freshly generated and valid for other CMA calls.

**Root Cause**

The Launch API requires both the authtoken and the org\_id to be passed in the request. Unlike standard CMA endpoints which infer the organization from the authtoken context, the Launch API uses the org\_id to scope access to the correct Launch project. Omitting the org\_id results in a 403 regardless of authtoken validity.

**Resolution**

1.  Add the organization\_uid header (or the x-cs-org-uid header, depending on the endpoint) to the Launch API request alongside the authtoken.
2.  The org\_id can be found in the Contentstack dashboard under Account Settings > Organizations, or by calling GET /v3/organizations with the authtoken.
3.  Example: curl ‘https://azure-eu-launch-api.contentstack.com/projects’ -H ‘authtoken: <token>’ -H ‘organization\_uid: <org\_id>’
4.  Retry the request with the org\_id included and confirm a 200 response is returned.

After adding the org\_id to the request, verify the Launch API returns the expected project list or resource without a 403 error.
