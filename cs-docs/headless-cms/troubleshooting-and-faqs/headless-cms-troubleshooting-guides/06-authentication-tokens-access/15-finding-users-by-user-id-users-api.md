---
title: "Finding Users by user_ID - Users API"
description: "Finding Users by user_ID - Users API"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/15-finding-users-by-user-id-users-api
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: csfc02bf1de7dd5b26
---

# Finding Users by user_ID - Users API

An administrator needs to look up the name or email of a user given only their user UID (for example, from an entry’s created\_by or updated\_by field). The CMS UI does not provide a UID-based user search.

**Root Cause**

The Contentstack CMS UI does not support searching users by UID. User UID to identity mapping must be done programmatically via the CMA Users API.

**Resolution**

1.  Use the CMA Users API to resolve a user UID to user details: GET /v3/users/{user\_uid} - requires a management token or authtoken.
2.  For bulk lookup of multiple user UIDs, iterate over the list and call the endpoint for each UID.
3.  Alternatively, fetch all users in the organization: GET /v3/organizations/{org\_uid}/users - this returns a full list of users with their UIDs, names, and email addresses, which can be used to build a local lookup map.

After building the UID-to-user lookup map, confirm that all relevant user UIDs from entry metadata can be resolved to names or email addresses.
