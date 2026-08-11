---
title: "Stack Invitation Acceptance Failure Due to Missing Organization Access"
description: "Stack Invitation Acceptance Failure Due to Missing Organization Access"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/05-organization-stack-invitations/01-stack-invitation-acceptance-failure-due-to-missing-organization-access
doc_type: faq
_cms_section_uid: cse79a80b55702a523
_cms_faq_uid: cs7f66df603e93503c
---

# Stack Invitation Acceptance Failure Due to Missing Organization Access

Stack invitations cannot be accepted when login credentials for the platform have not yet been established. Access to the specific stack is not granted until login credentials for the platform have been established.

**Root Cause**

Organization-level access and valid login credentials must be established before a user can accept invitations to individual stacks.

**Resolution**

1.  Obtain organization-level access to the platform.
2.  Log in through Okta.
3.  Accept the stack invitation once organization access is confirmed.

After obtaining organization access and logging in, check the stack list to verify if access is restored.
