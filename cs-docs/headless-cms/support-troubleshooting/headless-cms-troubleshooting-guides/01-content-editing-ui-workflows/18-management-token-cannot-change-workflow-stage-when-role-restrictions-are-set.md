---
title: "Management Token Cannot Change Workflow Stage When Role Restrictions Are Set"
description: "Management Token Cannot Change Workflow Stage When Role Restrictions Are Set"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/18-management-token-cannot-change-workflow-stage-when-role-restrictions-are-set
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs4b2e1a7ed38f3d53
---

# Management Token Cannot Change Workflow Stage When Role Restrictions Are Set

A CMA request to change a workflow stage using a management token returns an access denied error. The same operation works when using a user auth token.

**Root Cause**

Workflow stage transitions with role restrictions require the transition to be performed by a user who holds the required role. A management token is not associated with a user role — it is a stack-level credential without user identity. When role restrictions are applied to a workflow stage, the CMA validates the requester's role, and a management token cannot satisfy this check.

**Resolution**

Two options are available:

1.  Option A - Use a user auth token: Generate an auth token from a user account that holds the required role for the workflow transition. Use this auth token instead of the management token for workflow stage change requests.
2.  Option B - Remove role restrictions: If user identity is not required for the transition, remove the role restriction from the workflow stage configuration. This allows management tokens to perform the transition

After applying the chosen approach, re-run the workflow stage change request. If the transition succeeds without an access denied error, the authorization requirement is satisfied.
