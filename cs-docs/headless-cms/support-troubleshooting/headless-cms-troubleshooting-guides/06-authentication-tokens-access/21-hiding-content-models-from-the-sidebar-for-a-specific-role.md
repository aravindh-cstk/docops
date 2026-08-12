---
title: "Hiding Content Models from the Sidebar for a Specific Role"
description: "Hiding Content Models from the Sidebar for a Specific Role"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/21-hiding-content-models-from-the-sidebar-for-a-specific-role
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs7b6e1326b2b61d7e
---

# Hiding Content Models from the Sidebar for a Specific Role

A customer wants to hide the Content Models section from the left sidebar for users assigned the Developer role, without changing their other permissions.

**Root Cause**

The Developer role is a default system role in Contentstack. Default system roles cannot be modified to restrict sidebar visibility. Only custom roles support granular permission configuration.

**Resolution**

1.  Create a new custom role with the same permissions as the Developer role.
2.  In the custom role settings, remove or restrict access to Content Models.
3.  Assign users who should not see Content Models to the new custom role instead of the default Developer role.

After assigning the custom role, confirm that the Content Models section is no longer visible in the sidebar for those users.
