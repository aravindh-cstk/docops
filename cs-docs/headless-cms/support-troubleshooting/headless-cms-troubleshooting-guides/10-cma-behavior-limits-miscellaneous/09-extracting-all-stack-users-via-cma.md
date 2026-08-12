---
title: "Extracting All Stack Users via CMA"
description: "Extracting All Stack Users via CMA"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/09-extracting-all-stack-users-via-cma
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs82945726b8afdf88
---

# Extracting All Stack Users via CMA

A stack administrator needs a list of all users added to their stack for reporting or auditing purposes. No built-in UI export is available.

**Root Cause**

Contentstack does not provide a native UI export for stack user lists. However, all stack users can be retrieved programmatically via the CMA and the JSON response can be processed into a CSV or spreadsheet format.

**Resolution**

1.  Call GET /v3/stacks/users with the auth token and stack API key headers.
2.  The response returns a JSON array of all users, including their uid, email, first\_name, last\_name, and role.
3.  Parse the JSON response and export it to CSV using a script or a tool such as jq for command-line JSON processing.
4.  Refer to the CMA documentation for the Get All Users endpoint for full response schema details.

After running the CMA users call and parsing the response, confirm the output file contains the expected list of users with their associated roles.
