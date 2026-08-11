---
title: "About SCIM Group Mapping"
description: "About SCIM Group Mapping"
url: /administration/about-scim-group-mapping
---

# About SCIM Group Mapping

## About SCIM Group Mapping

The **SCIM Group Mapping** functionality allows you to assign roles to a group of users across your organization and its products in Contentstack. When you add a user to a group via an IdP (Identity Provider) such as OneLogin, the roles you have defined for the group apply to that user.

**Note:** Only the organization [Owner, Admin, or Security Manager](/docs/administration/about-administration-roles) can use the SCIM group mapping functionality.

To set roles for a group, navigate to **Administration** through the App Switcher and open the **SCIM** settings. Then, from the groups you have created via your IdP, select a group and assign its roles. You can assign organization-level Administration and product roles, along with project-level roles for individual stacks, spaces, or AgentOS projects.

For example, if you assign the **Content Manager** role to a “Content Manager group” for every stack in the organization, all the users belonging to this group have the **Content Manager** role for those stacks.

**Note:** It is recommended to disable SSO role-mapping when SCIM is enabled, because SCIM groups perform the role assignments in advance.

## Related Resource

-   [SCIM API](/docs/developers/apis/scim-api)
