---
title: "Read-Only Role That Can View Publish Status Without Publishing"
description: "Read-Only Role That Can View Publish Status Without Publishing"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/30-read-only-role-that-can-view-publish-status-without-publishing
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs367ab7dc1ab5f881
---

# Read-Only Role That Can View Publish Status Without Publishing

A team needs a role that provides read-only access to stack content but still allows users to view which environments an entry is published to - without any ability to publish or modify entries.

**Root Cause**

Publish status visibility is tied to environment access within the role. Granting environment access at the Read level shows publish status without enabling publish or unpublish actions.

**Resolution**

1.  Create or edit the read-only role in Settings > Roles and Permissions.
2.  Under Entries and Assets, grant Read permissions only.
3.  Assign the relevant environments to the role so publish status is visible for those environments.
4.  Do not enable any Publish or Unpublish permissions.

After configuring the role, confirm that users can view the publish status (environment badges) on entries but cannot initiate any publish or unpublish actions.
