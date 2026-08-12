---
title: "Resolving Projects Limit Reached Error in Launch"
description: "Resolving Projects Limit Reached Error in Launch"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/08-project-account-management/04-resolving-projects-limit-reached-error-in-launch
doc_type: faq
_cms_section_uid: csdf5c487bad88febc
_cms_faq_uid: cs331d2a7c12eadda8
---

# Resolving Projects Limit Reached Error in Launch

An error stating “Projects limit reached” appears when attempting to create or deploy a new Launch project. This prevents new projects from being added to the instance.

**Root Cause**

Contentstack Launch instances have a default maximum on the number of active projects. When the limit is reached, the platform prevents new project creation until existing projects are removed or the limit is increased.

**Resolution**

1.  Review your current Launch projects and identify any unused, test, or duplicate projects that can be safely deleted.
2.  Delete unnecessary projects by navigating to the project settings and using the Delete Project option (refer to the Permanently Deleting Projects article for detailed steps).
3.  If all existing projects are required and the limit needs to be increased, contact Contentstack Support with your organization ID and a description of your use case to request a limit increase.
4.  Once space is available or the limit is raised, retry creating or deploying the new project.

The issue is resolved when the new project is successfully created and deployments proceed without the “Projects limit reached” error.
