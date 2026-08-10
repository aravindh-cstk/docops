---
title: "Dashboard Not Loading and Entries Cannot Be Opened"
description: "Dashboard Not Loading and Entries Cannot Be Opened"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/37-dashboard-not-loading-and-entries-cannot-be-opened
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs0eca229b23001dba
---

# Dashboard Not Loading and Entries Cannot Be Opened

A user can see the entry list but cannot open any individual entry. Clicking an entry shows the ‘Something went wrong’ error. The dashboard also fails to load for the same user.

**Root Cause**

The user’s authorization state has become stale or desynchronized, typically due to a Redis cache issue in the authorization layer. This can occur after role changes, SSO sync events, or organization permission updates.

**Resolution**

1.  Ask the Organization Owner or Admin to switch the user’s organization role from Member to Admin and back to Member (or the reverse if they are currently an Admin). This forces a permission re-sync.
2.  Alternatively, remove the user from the organization entirely and re-add them with the correct role.
3.  After the role change, ask the user to log out, clear their browser cache, and log back in.

After the role toggle or re-add, confirm the user can access the dashboard and open entries without errors.
