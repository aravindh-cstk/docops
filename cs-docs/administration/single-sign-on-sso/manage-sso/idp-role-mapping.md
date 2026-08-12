---
title: "IdP Role Mapping"
description: "IdP Role Mapping"
url: /administration/idp-role-mapping
---

# IdP Role Mapping

## IdP Role Mapping

**IdP Role Mapping** allows you to assign [Contentstack roles](/docs/developers/invite-users-and-assign-roles/types-of-roles) to the users of a group/role in your IdP. Subsequently, users of such groups can directly log in to your SSO-enabled organization (without invitation) with the assigned permissions.

This is an alternate way of managing users and permissions of your SSO-enabled organization (the other way being invitation-based users and roles management).

To use this feature, you need to [map your IdP roles](/docs/developers/single-sign-on/set-up-sso-in-contentstack#advanced-settings) to Contentstack roles, while configuring SSO for your organization.

**Note:** After enabling [IdP Role Mapping](/docs/faqs/#role-mapping) , in Contentstack, the role management for the users of your IdP is handled from your IdP instead of Contentstack. The following  points are important to note: Admins/Owners can remove the users from an organization with both SSO and IdP Role Mapping. This is done through IdP because if they are removed from the organization but not the IdP, they can still sign up.  
Two possible SSO scenarios:  
**If Organization has SSO enabled but IdP role mapping not enabled** \- Admin/Owner will be able to delete the user from the user list directly within Contentstack.  
**If Organization has both SSO and IdP role mapping enabled** \- The user cannot be removed from within Contentstack as the Role Management is done from the IdP. This is done to avoid any source of ambiguity and inconsistency in the user actions.

Currently, IdP Role Mapping is supported only for [Okta](/docs/developers/single-sign-on/set-up-sso-with-okta), [OneLogin](/docs/developers/single-sign-on/set-up-sso-with-onelogin), and [Microsoft Azure AD](/docs/developers/single-sign-on/set-up-sso-with-microsoft-azure-ad).

**Note:** Every newly created stack will have unassigned roles and requires a manual mapping in the SSO section.
