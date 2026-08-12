---
title: "Role Permissions Not Taking Effect - Permission Cache Desync"
description: "Role Permissions Not Taking Effect - Permission Cache Desync"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/19-role-permissions-not-taking-effect-permission-cache-desync
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: csf53ae38d45b90fa0
---

# Role Permissions Not Taking Effect - Permission Cache Desync

A user’s role and permissions are correctly configured but actions they should be allowed to perform - such as editing entries or accessing certain sections - are still blocked. The UI behaves as if an older permission set is active.

**Root Cause**

User role and permission data is cached in Redis for performance. If a role update does not propagate correctly to the cache, the old permission set continues to govern the user’s actions. This can occur after role changes, multi-role assignment updates, or SSO sync events.

**Resolution**

1.  Ask an Organization Owner or Admin to temporarily change the affected user’s role and then revert it. This triggers a cache refresh.
2.  Alternatively, remove the user from the stack and re-add them, which forces a full permission state rebuild.
3.  Ask the user to log out and log back in after the role change.

After the role toggle or re-add, ask the user to attempt the previously blocked action. If it succeeds, the permission cache has been refreshed.
