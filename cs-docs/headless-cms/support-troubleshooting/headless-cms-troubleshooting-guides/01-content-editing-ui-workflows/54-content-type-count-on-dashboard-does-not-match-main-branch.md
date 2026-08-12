---
title: "Content Type Count on Dashboard Does Not Match Main Branch"
description: "Content Type Count on Dashboard Does Not Match Main Branch"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/54-content-type-count-on-dashboard-does-not-match-main-branch
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csb02da05074770f91
---

# Content Type Count on Dashboard Does Not Match Main Branch

The Content Type count displayed on the Stack dashboard does not match the number of content types visible when navigating to the main branch.

**Root Cause**

The Stack dashboard displays the total count of content types across all branches in the stack, not just the main branch. If additional branches contain extra content types that do not exist in main, the dashboard total will be higher than the main branch count.

**Resolution**

This is expected behavior. To see the content type count for a specific branch, navigate to that branch directly and view the content types from within that branch context. No corrective action is needed.
