---
title: "Unable to Create Personalize Projects - Must Be Org Admin or Owner"
description: "Unable to Create Personalize Projects - Must Be Org Admin or Owner"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/05-platform-settings-permissions/07-unable-to-create-personalize-projects-must-be-org-admin-or-owner
doc_type: faq
_cms_section_uid: csc937f59aa3c9d5e3
_cms_faq_uid: cs9fe459fad6d0367d
---

# Unable to Create Personalize Projects - Must Be Org Admin or Owner

A user is unable to create a new Personalize project despite having access to the Personalize section. The create action is not available or results in a permission error.

**Root Cause**

Creating a Personalize project requires organization admin or owner rights. Users who are collaborators on an existing project can view it but cannot create new projects. Regular members cannot create or view Personalize projects.

**Resolution**

1.  Confirm the user's role within the Contentstack organization. Project creation requires the admin or owner role.
2.  If the user needs to create projects, an existing admin or owner must promote the user's role in the organization settings.
3.  If the user only needs to view or contribute to an existing project, an org admin can add them as a collaborator on that specific project without changing their organization role.
4.  After the role or collaborator status is updated, the user should refresh the Personalize dashboard and verify that the create project option is now available.

Role changes in Contentstack take effect immediately. The user does not need to wait for a cache refresh, but logging out and back in ensures the updated permissions are reflected.
