---
title: "Admin Users Bypass Workflow Stage Rules: Expected Behavior"
description: "Admin Users Bypass Workflow Stage Rules: Expected Behavior"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/17-admin-users-bypass-workflow-stage-rules-expected-behavior
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csd2f0f38308501e70
---

# Admin Users Bypass Workflow Stage Rules: Expected Behavior

An admin user is able to change an entry's workflow stage despite strict transition rules being configured that should prevent that move. The workflow constraints appear to be ignored for this user.

**Root Cause**

This is expected behavior by design. Organization owners, stack owners, and stack admins automatically bypass all workflow constraints, including stage transition rules and access restrictions. Elevated admin permissions are intentionally exempt from editorial workflow controls to ensure admins can always manage content regardless of workflow state.

**Resolution**

No fix or configuration change is available to apply workflow constraints to organization or stack admins. To manage this by design:

1.  Ensure that users who must be subject to workflow constraints are assigned standard roles (not owner or admin roles).
2.  Create dedicated content editor roles with the appropriate permissions that are not exempt from workflow rules.
3.  Document the admin bypass behavior for the team so editors understand why admins can make transitions that standard users cannot.

Workflow stage rules will be enforced correctly for non-admin users. Only organization owners, stack owners, and stack admins bypass these constraints.
