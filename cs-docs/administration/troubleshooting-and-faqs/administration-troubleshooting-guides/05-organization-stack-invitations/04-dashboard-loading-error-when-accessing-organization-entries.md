---
title: "Dashboard Loading Error When Accessing Organization Entries"
description: "Dashboard Loading Error When Accessing Organization Entries"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/05-organization-stack-invitations/04-dashboard-loading-error-when-accessing-organization-entries
doc_type: faq
_cms_section_uid: cse79a80b55702a523
_cms_faq_uid: cs49a272dd4643fa6f
---

# Dashboard Loading Error When Accessing Organization Entries

Attempting to access entries within an organization may result in the dashboard failing to load and displaying a "Something went wrong" error.

**Root Cause**

Role-related inconsistencies in user permissions prevent the dashboard from syncing and loading correctly.

**Resolution**

1.  Contact the organization owner or administrator to refresh account permissions.
2.  Change the organization role from Member to Admin, then revert it to the original role (or vice versa if currently an Admin).
3.  Remove the user from the organization and re-add them with the correct role to resync access.

After re-adding the user and updating roles, attempt to access the organization entries. If the dashboard loads without error, the issue is resolved.
