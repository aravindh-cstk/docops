---
title: "Custom Role Editors Cannot See Newly Created Taxonomies"
description: "Custom Role Editors Cannot See Newly Created Taxonomies"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/25-custom-role-editors-cannot-see-newly-created-taxonomies
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cse7840608940eae74
---

# Custom Role Editors Cannot See Newly Created Taxonomies

Editors with a custom role that grants full access to specific content types can see existing taxonomies but cannot see newly created ones. Admin users see all taxonomies.

**Root Cause**

Taxonomy visibility for custom roles requires explicit permission grants for each taxonomy. When a new taxonomy is created, it is not automatically added to the permissions of existing custom roles. Each new taxonomy must be explicitly permitted in the role settings.

**Resolution**

1.  Navigate to Settings > Roles and Permissions and select the affected custom role.
2.  Under the Taxonomies section, add explicit access to the newly created taxonomy.
3.  Save the updated role.
4.  Ask editors to log out and back in for the permission change to take effect.

After updating the role, confirm that editors can see and interact with the new taxonomy.
