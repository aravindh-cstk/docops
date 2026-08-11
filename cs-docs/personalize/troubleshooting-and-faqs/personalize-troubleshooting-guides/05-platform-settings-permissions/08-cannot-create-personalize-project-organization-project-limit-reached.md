---
title: "Cannot Create Personalize Project - Organization Project Limit Reached"
description: "Cannot Create Personalize Project - Organization Project Limit Reached"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/05-platform-settings-permissions/08-cannot-create-personalize-project-organization-project-limit-reached
doc_type: faq
_cms_section_uid: csc937f59aa3c9d5e3
_cms_faq_uid: cs27f74f42c8d6164e
---

# Cannot Create Personalize Project - Organization Project Limit Reached

A user with the correct admin or owner permissions is unable to create a new Personalize project. All prerequisites appear to be in place but project creation fails or the option is unavailable.

**Root Cause**

Each Contentstack organization has a maximum limit on the number of Personalize projects that can be created. Attempts to create additional projects beyond this limit will fail. The default limit may be set to a low number (for example, 1 or 2 projects) and must be increased by Contentstack Support.

**Resolution**

1.  Confirm that the user attempting to create the project has organization admin or owner rights. Rule out a permissions issue before escalating the project limit.
2.  Count the current number of active Personalize projects in the organization. If the number equals or exceeds the configured limit, project creation will be blocked.
3.  Open a support case with Contentstack and request an increase to the Personalize project limit for your organization. Include your Organization UID and the desired new limit.
4.  Once the limit has been increased, retry project creation from an admin or owner account.

Project limit increases are applied at the organization level by Contentstack Support. There is no self-service option for adjusting this limit.
