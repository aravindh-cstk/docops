---
title: "‘Something Went Wrong’ Error When Accessing the Dashboard or Entries"
description: "‘Something Went Wrong’ Error When Accessing the Dashboard or Entries"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/35-something-went-wrong-error-when-accessing-the-dashboard-or-entries
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs77e8dca581d46c43
---

# ‘Something Went Wrong’ Error When Accessing the Dashboard or Entries

Users encounter a ‘Something went wrong’ error when navigating to the Contentstack dashboard, the entry list, or individual entries. Other users on the same stack may not be affected.

**Root Cause**

This error is typically caused by one of the following: a stale browser session, corrupted local cache or cookies, or a desynchronized user permission state in the authorization cache. In some cases it is triggered by a recent platform deployment that a specific browser session has not refreshed.

**Resolution**

1.  Clear browser cache and cookies and reload the page.
2.  Open Contentstack in a new incognito or private browsing window.
3.  If the error persists for a specific user, ask the Organization Owner to remove the user from the organization and re-add them. This re-syncs their permission state.
4.  If the error appears after a platform deployment, Engineering may need to revert the release. Contact Contentstack Support with the stack details and timestamps.

After clearing cache or re-adding the user, navigate to the affected page. If it loads correctly, the session or permission state has been refreshed.
