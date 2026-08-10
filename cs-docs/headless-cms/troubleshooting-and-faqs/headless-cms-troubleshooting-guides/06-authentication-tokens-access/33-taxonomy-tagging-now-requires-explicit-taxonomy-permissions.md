---
title: "Taxonomy Tagging Now Requires Explicit Taxonomy Permissions"
description: "Taxonomy Tagging Now Requires Explicit Taxonomy Permissions"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/33-taxonomy-tagging-now-requires-explicit-taxonomy-permissions
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: csa8d348f40fe4d901
---

# Taxonomy Tagging Now Requires Explicit Taxonomy Permissions

Users who previously could tag entries with taxonomy terms now encounter errors or cannot see taxonomy terms after a platform update.

**Root Cause**

A platform update changed the permission model. Previously, users with entry edit access could tag taxonomy terms without separate taxonomy permissions. Now explicit taxonomy permissions are required.

**Resolution**

1.  Navigate to Settings > Roles and Permissions and open the custom role configuration.
2.  Under Taxonomies, add the specific taxonomies the role should be able to apply to entries. Grant ‘Read’ access to allow tagging without full management permissions.
3.  Avoid granting ‘All Taxonomies’ with full permissions unless the role should also create and modify taxonomy structures.
4.  Save the role and ask affected users to log out and back in.

After adding taxonomy Read permissions, confirm affected users can view and apply taxonomy terms without permission errors.
