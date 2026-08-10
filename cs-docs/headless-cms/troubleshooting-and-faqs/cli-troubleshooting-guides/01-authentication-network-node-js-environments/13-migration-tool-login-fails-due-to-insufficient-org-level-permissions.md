---
title: "Migration Tool Login Fails Due to Insufficient Org-Level Permissions"
description: "Migration Tool Login Fails Due to Insufficient Org-Level Permissions"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/01-authentication-network-node-js-environments/13-migration-tool-login-fails-due-to-insufficient-org-level-permissions
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: cs496ad5c95e57d049
---

# Migration Tool Login Fails Due to Insufficient Org-Level Permissions

Login to the Contentstack migration tool failed, with no clear reason why access was being denied.

**Root Cause**

The migration tool requires Org-level Admin or Owner permissions. Admin access at the stack level alone, with only a Member role at the org level, blocks login. Logging in via the wrong region compounds the issue.

**Resolution**

1.  Ask your Org Admin or Owner to update your role to Admin or Owner at the organization level.
2.  Confirm you're logging in using the correct region for your organization (for example, AWS NA rather than Azure EU).
3.  Retry logging in to the migration tool.
