---
title: "Field-Level Permissions Inside Modular Blocks Are Not Supported"
description: "Field-Level Permissions Inside Modular Blocks Are Not Supported"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/28-field-level-permissions-inside-modular-blocks-are-not-supported
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs315f15e398a855fa
---

# Field-Level Permissions Inside Modular Blocks Are Not Supported

A customer wants to restrict access to specific fields nested inside a modular block using Roles and Permissions. The expected granular control does not appear to be available.

**Root Cause**

Field-level permission control for fields nested inside modular blocks is not supported in the current version of Contentstack. Permissions can be configured at the content type and top-level field levels, but not for individual fields within modular block types.

**Resolution**

As an alternative, use content type-level permissions to restrict access to entire content types that contain the sensitive modular block fields. Contact Contentstack Support to submit an enhancement request if granular modular block field-level permissions are a business requirement.
