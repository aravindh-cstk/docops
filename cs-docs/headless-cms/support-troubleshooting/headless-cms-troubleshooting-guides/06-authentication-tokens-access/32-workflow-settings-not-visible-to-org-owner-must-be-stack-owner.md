---
title: "Workflow Settings Not Visible to Org Owner - Must Be Stack Owner"
description: "Workflow Settings Not Visible to Org Owner - Must Be Stack Owner"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/32-workflow-settings-not-visible-to-org-owner-must-be-stack-owner
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: csfb7fdacb5184356d
---

# Workflow Settings Not Visible to Org Owner - Must Be Stack Owner

An Org Owner cannot see or access workflow settings within a specific stack, even with full organization access.

**Root Cause**

In Contentstack, certain configuration areas - including Workflow settings - are only visible to users who hold the Stack Owner role for that specific stack. Org Owner access alone is insufficient for stack-level settings. Each role operates at a different scope.

**Resolution**

1.  Have the current Stack Owner assign the requesting user as a Stack Owner for the specific stack.
2.  Once assigned as Stack Owner, the user will have full visibility into and control over Workflow settings.

After the user is assigned Stack Owner, navigate to Settings > Workflows in the affected stack and confirm the settings section is now visible.
