---
title: "Agent OS Projects Not Visible Due to Organization Role Constraints"
description: "Agent OS Projects Not Visible Due to Organization Role Constraints"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/01-workspaces-access-administration/01-agent-os-projects-not-visible-due-to-organization-role-constraints
doc_type: faq
_cms_section_uid: cs88fdd58dfb5bf7c8
_cms_faq_uid: csfe11b8a238f6c42a
---

# Agent OS Projects Not Visible Due to Organization Role Constraints

A user may have stack access but cannot see or access Automation Hub projects, preventing them from viewing or managing automations.

**Root Cause** Automation Hub access is governed at the organization level; Member roles may not have required privileges.

**Resolution**

1.  Navigate to the automation project's **Settings tab**.
2.  Under the Members or Invitations section, **invite the individual user** to the project.
3.  Log out and log back in to refresh their session if the project does not appear immediately.

Users can view Automation Hub projects and open/create automations.
