---
title: "Authorization Errors When Uploading or Publishing Assets for Content Manager Role"
description: "Authorization Errors When Uploading or Publishing Assets for Content Manager Role"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/31-authorization-errors-when-uploading-or-publishing-assets-for-content-manager-rol
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs9b2318ee4a10886d
---

# Authorization Errors When Uploading or Publishing Assets for Content Manager Role

Team members with the Content Manager or Content Editor roles receive authorization errors when uploading or publishing assets, while users with the Developer role can perform the same actions without issues.

**Root Cause**

The Content Manager and Content Editor roles are missing the Upload Assets and/or Publish Assets permissions, or do not have permission grants for the relevant environments.

**Resolution**

1.  Navigate to Settings > Roles and Permissions and select the Content Manager or Content Editor role.
2.  Enable the Upload Assets permission under the Assets section.
3.  Enable the Publish Assets permission for the required environments.
4.  Save the updated role and ask affected users to retry the action.

After updating the role permissions, confirm affected users can upload and publish assets without authorization errors.
