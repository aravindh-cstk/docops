---
title: "‘Something Went Wrong’ or Blank Screen Errors in the CMS"
description: "‘Something Went Wrong’ or Blank Screen Errors in the CMS"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/71-something-went-wrong-or-blank-screen-errors-in-the-cms
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs40bbda35507d5b02
---

# ‘Something Went Wrong’ or Blank Screen Errors in the CMS

Multiple users across different roles and browsers encounter a ‘Something went wrong’ error or blank screen when accessing the Contentstack CMS. The issue may be widespread across an organization.

**Root Cause**

This error can be caused by: a stale browser cache serving outdated JavaScript assets after a platform deployment, a platform-level incident affecting the UI layer, or the Auto Draft Early Access feature creating unexpected behavior that blocks entry access.

**Resolution**

1.  Clear browser cache and cookies, then perform a hard refresh (Ctrl+Shift+R or Cmd+Shift+R).
2.  Open Contentstack in an incognito/private browsing window to rule out cache and extension issues.
3.  Check the Contentstack Status Page (status.contentstack.com) for any active incidents.
4.  If the Auto Draft Early Access feature is enabled, disable it via Settings > Early Access Features - this is a known cause of ‘You are not allowed’ and ‘Something went wrong’ errors across all roles.
5.  If the issue affects multiple users simultaneously and persists after cache clear, escalate to Contentstack Support with the time of onset and affected stack details.

After clearing cache or disabling Auto Draft, confirm entries load correctly for all affected users.
