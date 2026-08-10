---
title: "Live Preview Blank or Partial for Custom Roles - Missing Environment Permissions"
description: "Live Preview Blank or Partial for Custom Roles - Missing Environment Permissions"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/48-live-preview-blank-or-partial-for-custom-roles-missing-environment-permissions
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs9b011688bd9f0b26
---

# Live Preview Blank or Partial for Custom Roles - Missing Environment Permissions

Live Preview works correctly for Admin and Developer users but shows a blank or partial preview for custom role users.

**Root Cause**

Custom roles require explicit environment access permissions for Live Preview. If the custom role does not have access to the preview environment, Live Preview API calls return 401/403 and the preview pane cannot load content.

**Resolution**

1.  Navigate to Settings > Roles and Permissions and open the custom role configuration.
2.  Under Environments, add the preview environment to the allowed environments for this role.
3.  If using a preview token for Live Preview, ensure the preview token also has access to the correct environment.
4.  Save the role and ask the affected user to log out and back in.

After adding the preview environment to the custom role, log in as the affected user and confirm Live Preview renders content correctly.
