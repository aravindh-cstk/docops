---
title: "Analytics Dashboard Access - Only Organization Owners and Admins"
description: "Analytics Dashboard Access - Only Organization Owners and Admins"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/32-analytics-dashboard-access-only-organization-owners-and-admins
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs406fa2199c436647
---

# Analytics Dashboard Access - Only Organization Owners and Admins

A user with stack-level Admin, Content Manager, and Developer roles cannot access the Analytics dashboard. The Analytics tab is not visible for that user.

**Root Cause**

Analytics access in Contentstack is restricted to Organization-level Owners and Admins only. Stack-level roles - regardless of their permission level - do not grant access to the Organization Analytics dashboard.

**Resolution**

1.  If the user requires Analytics access, assign them the Organization Admin or Organization Owner role at the organization level.
2.  If full Organization Admin access is not appropriate, note that stack-level Analytics access is not separately configurable - this is a platform limitation.

After assigning the Organization Admin role, ask the user to log out and back in, then confirm the Analytics dashboard is accessible.
