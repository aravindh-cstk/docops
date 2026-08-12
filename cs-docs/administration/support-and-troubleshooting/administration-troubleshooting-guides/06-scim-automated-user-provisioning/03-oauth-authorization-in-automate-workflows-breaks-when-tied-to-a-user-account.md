---
title: "OAuth Authorization in Automate Workflows Breaks When Tied to a User Account"
description: "OAuth Authorization in Automate Workflows Breaks When Tied to a User Account"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/06-scim-automated-user-provisioning/03-oauth-authorization-in-automate-workflows-breaks-when-tied-to-a-user-account
doc_type: faq
_cms_section_uid: csd0a373399b66dd92
_cms_faq_uid: cs485c59fe14771c3c
---

# OAuth Authorization in Automate Workflows Breaks When Tied to a User Account

OAuth-based authorization used within Contentstack Automate workflows may stop working unexpectedly across all stacks, even though it had previously been functioning normally.

**Root Cause**

OAuth authorization in Automate is tied to the individual user account that originally authorized it, creating a dependency on that user's account state, such as account disablement or permission changes. A platform-level issue previously caused this OAuth authorization to stop working unexpectedly; that issue has since been fixed on the platform side.

**Resolution**

1.  As the more stable long-term approach, use Management Tokens instead of OAuth for Automate workflows. Management Tokens are not tied to an individual user account, which removes this dependency and reduces the risk of workflow failure due to user-related changes.
2.  If you are currently affected by an OAuth authorization failure of this kind, contact Contentstack Support to confirm your environment reflects the platform-side fix.

After switching to Management Tokens, or after confirming the platform fix is reflected in your environment, confirm Automate workflows run without interruption.
