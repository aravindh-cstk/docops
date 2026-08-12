---
title: "Permanently Deleting Projects in Contentstack Launch"
description: "Permanently Deleting Projects in Contentstack Launch"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/01-workspaces-access-admin/03-permanently-deleting-projects-in-contentstack-launch
doc_type: faq
_cms_section_uid: cscf1f73b7ae7fb2cf
_cms_faq_uid: cs19084ed6817bc0c4
---

# Permanently Deleting Projects in Contentstack Launch

Unable to locate the administrative settings required to permanently remove a project from the Contentstack Launch dashboard. This prevents the cleanup of unused or test environments and may lead to a cluttered project list.

**Root Cause**

The project deletion option is located within the project-specific settings and requires explicit confirmation, which can make it difficult for users to identify without specific guidance.

**Resolution**

1.  Log in to your Contentstack account and click the **Launch** icon from the App Switcher.
2.  From the Launch landing page, select the specific project you wish to delete.
3.  Click the **Settings** icon from the top panel or left navigation menu.
4.  In the **General** section, scroll down to the **Delete Project** area.
5.  Click the **Delete Project** button.
6.  In the confirmation modal that appears, type DELETE in the input field.
7.  Click the **Yes, Delete** button to permanently remove the project.

**Note:** This action is irreversible and will remove all domains and environments associated with the project.

After completing the deletion steps, return to the Launch main dashboard. If the deleted project no longer appears in your project list and all associated URLs are inactive, the issue is resolved.
