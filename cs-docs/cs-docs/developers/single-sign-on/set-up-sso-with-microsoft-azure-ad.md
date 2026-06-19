---
title: "[SSO] - Set up SSO with Microsoft Azure AD"
description: Step-by-step guide to set up Single Sign-On (SSO) in Contentstack with Microsoft Azure Active Directory (AD) as your SAML 2.0 Identity Provider (IdP).
url: https://www.contentstack.com/docs/administration/set-up-sso-with-microsoft-azure-ad
product: Contentstack
doc_type: setup-guide
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-03-26
---

# [SSO] - Set up SSO with Microsoft Azure AD

This page provides a step-by-step procedure for configuring Single Sign-On (SSO) in Contentstack using Microsoft Azure Active Directory (AD) as a SAML 2.0 Identity Provider (IdP). It is intended for Contentstack organization owners and Azure AD administrators setting up or maintaining SSO for an organization.

## Set up SSO with Microsoft Azure AD

**Warning**: This set up guide is deprecated. Please visit our documentation on [Set up SSO with Microsoft Entra ID Native App](/docs/developers/single-sign-on/set-up-sso-with-microsoft-entra-ID-native-app).

This step-by-step guide explains how to set up [Single Sign-On](/docs/developers/single-sign-on) in Contentstack with Microsoft Azure Active Directory (AD) as your SAML 2.0 Identity Provider (IdP).

In a nutshell, this integration requires following steps:
- [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
- [Configure Microsoft Azure AD details in Contentstack](#configure-microsoft-azure-ad-details-in-contentstack)
- [Add Users to Your Microsoft Azure AD Application](#add-users-to-your-microsoft-azure-ad-application)
- [Add Users Roles in Your Application](#add-users-roles-in-your-application)
- [Assign Roles to Application Users for IdP Role Mapping](#assign-roles-to-application-users-for-idp-role-mapping)
- [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
- [Test and Enable SSO](#test-and-enable-sso)

Let us see each of the processes in detail.

## Create SSO Name and ACS URL in Contentstack

**Note:** Only the Organization [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) will be able to perform the steps discussed below.

Start by creating an SSO Name and generate the ACS URL in Contentstack

Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the **Organization Settings** page, and click on **SINGLE SIGN-ON** tab.
- Enter an **SSO Name** of your choice, and click **Create**. For example, if your company name is “Acme, Inc.” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in.

**Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).

Let's use “sso-test” as the SSO Name.
- When you click **Create**, this will generate the **Assertion Consumer Service (ACS)** URL and other details such as **Entity ID**, **Attributes**, and **NameID Format**. These details will be used in **Step 2** for configuring the Contentstack app in Microsoft Azure AD.

Keep this window open, as you may need these details for setting up the Contentstack app in Azure AD.

## Configure Contentstack App in Microsoft Azure AD

**Note:** You need to be a Microsoft Azure AD administrator to complete the steps below.

To configure the integration of Contentstack into Microsoft Azure AD, you need to add the Contentstack app. For this, go to the Microsoft Azure portal, and click on the **Azure Active Directory** tab.
- Click on **Enterprise Applications** on the left panel, and click on **+ New application** on the top.
- Click on **Non-gallery application** to create a new application that is not already present in the gallery.
- Provide a name to your app, for example, “test-sso,” and click on **Add**.
- This will lead you to the **Overview** page where you will see the overview details of your application. Under the **Getting Started** section, click on the **2. Set up single sign on** tab.
- On the **Select a single sign-on method** page, select the **SAML** mode to enable single sign-on.
- You will be led to the **Set up Single Sign-On with SAML** page where you can perform the further steps after creating your app.
- Click on the “Edit” (pencil) icon beside the **Basic SAML Configuration** section, add the following details:

**Identifier (Entity ID)**: Enter the “Entity ID” of  Contentstack, i.e., https://app.contentstack.com.
- **Reply URL (Assertion Consumer Service URL)**: Enter the ACS URL that we generated in **Step 1.c.**
- Next, edit the **User Attributes & Claims** section. Under **Claim Name**, you will see the primary claim, **Unique User Identifier (Name ID)**, with the claim **Value** set to **user.userprincipalname [nameid-format:emailAddress]**. On clicking this claim, you will find the following details on the **Manage claim** page:

Close this page. Now, delete the default attributes that you see under the **Additional claims** section. We will be adding our own set of attributes.
- Now, to add your attributes, click on **+ Add new claim**.
- In the **Manage claim** page, enter first_name under **Name**, select **user.givenname** under the **Source** attribute, and click **Save**.

Similarly, add the following attributes:

| Name | Value |
|---|---|
| `last_name` | **user.surname** |
| `email` | **user.userprincipalname** |
| `roles` | **user.assignedroles** |

If you want to enable Role Mapping in Contentstack, then it is highly important to add the `roles` attribute as we need this for IdP Role Mapping which we will cover in the next set of steps.

You will see the added attributes in the **User Attributes & Claims** section.
- In the **SAML Signing Certificate** section, click the **Download** link beside **Certificate (Base64)**. This will download and save the Base64 version of the certificate for your Contentstack app.

If needed, edit the **Notification Email Addresses** section, change the notification email, and click on **Save**.
- Under the **Set up <*****app_name*****>** section, you will find important data, such as **Login URL**, **Azure AD Identifier**, and **Logout URL** of your Microsoft Azure AD app. This data is required when configuring the Microsoft Azure AD details in Contentstack.

## Configure Microsoft Azure AD details in Contentstack

From the previous section, copy the URL provided in the **Login URL** section of your Contentstack application in Microsoft Azure AD and paste it into **Single Sign-On URL** field in Contentstack’s **2 IdP configuration** section.
- Upload the X.509 certificate that you downloaded from Microsoft Azure AD in Step 2.i. into the **Certificate** field in Contentstack SSO Settings.

Next, you need to define roles in Microsoft Azure AD that would be used to create role mapping in Contentstack.

## Add Users to Your Microsoft Azure AD Application

After setting the necessary configurations in Contentstack, you need to add users to your newly added application.

To do so, you need to perform the following steps:

Navigate to **Azure Active Directory**, select **Enterprise Applications**, select **All applications**, then select your application.
- Under the **Getting Started** section, click on the **1. Assign users and groups** tab.
- Click on the **+ Add user** button.
- Click on **Users and groups**. You will find a list of users whom you can add into your application.

You can either select from the given list of users or you can invite and add new users by inviting them.

## Add Users Roles in Your Application

**Note:** This is an optional step, but it”s mandatory if IdP Role Mapping is part of your Contentstack plan and you want to implement it.

Application Roles are defined under the application's registration manifest in the Microsoft Azure portal. To add user roles, perform the following steps:

In the left navigation, click on **App Registrations**, and click on **All applications**. Locate your newly created application and click on it.
- In your application blade, click on **Manifest**. You will see the JSON representation of your application.

Add the following code snippet of a new role under appRoles:

```
{
 "allowedMemberTypes": [
      "User"
     ],
     "description": "Developer Role",
     "displayName": "Developer",
     "id": "18d14569-c3bd-439b-9a66-3a2aee02f15f",
     "isEnabled": true,
     "value": "developer"
}
```

The above code snippet is for adding a single role where the value provided to the value parameter is what you need to add in the IdP Role Mapping section of Contentstack. All the values provided in this snippet is user-defined.

For adding multiple roles, create similar snippets with the required role details. You can add multiple such IdP roles and add their mappings in Contentstack.
- Save the manifest.

You will be able to see all the roles that you created when you assign them to your application users.

## Assign Roles to Application Users for IdP Role Mapping

**Note:** This is an optional step, but it is mandatory if [IdP Role Mapping](/docs/developers/single-sign-on/idp-role-mapping) is part of your Contentstack plan and you want to implement it.

This is an alternate way of managing users and permissions of your SSO-enabled organization. Performing this step lets you map your IdP roles to Contentstack roles while configuring SSO for your Contentstack organization.

To assign roles to application users, perform the following steps:Navigate to **Azure Active Directory**, select **Enterprise Applications**, select **All applications**, then select your application.
- Under the **Getting Started** section, click on the **1. Assign users and groups** tab.
- To add a new user with a role, click on the **+ Add User** button.
- Click on **Users and groups**. You will find a list of users whom you can add into your application.
- Next, click on **Select Role** in the **Add Assignment** page of your application. In the **Select Role** panel on the right, you will see the role you created (in our case, developer).
- Assign the selected role to the application user.

You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **User Management **section of your Contentstack SSO settings.

## Create Role Mappings in Contentstack

**Note:** You will only be able to view and perform this step if IdP Role Mapping is part of your Contentstack plan.

In the **User Management** section of Contentstack's SSO Setup page, you will see [Strict Mode](/docs/developers/single-sign-on/set-up-sso-in-contentstack#strict-mode) (authorize access to organization users only via SSO login) and [Session Timeout](/docs/developers/single-sign-on/set-up-sso-in-contentstack#session-timeout) (define session duration for a user signed in through SSO).

Below these options, you will see the **Advanced Settings** option.

Click on it to expand the **IdP Role Mapping **section to map IdP roles to Contentstack.

In the **Add Role Mapping** section, click on the **+ ADD ROLE MAPPING** link to add the mapping details of an IdP role. The details include the following:

**IdP Role Identifier**: Enter the IdP group/role identifier, for example, “developers.” You can use the value from your manifest.
- **Organization Role**: Assign either the **ADMIN **or **MEMBER**role to the mapped group/role.
- **Stack Roles ***(optional)*: Assign [stacks](/docs/developers/set-up-stack/about-stack) as well as the corresponding stack-level roles to this role.

Likewise, you can add more role mappings for your Contentstack organization. To add a new Role mapping, click on **+ ADD ROLE MAPPING** and enter the details.
- Keep **Role Delimiter** blank as Microsoft Azure AD usually returns roles in an array.
- Finally, check the **Enable IdP Role Mapping** checkbox to enable the feature.
- Click on **Next** to continue further.

While some details about these steps are given below, you can refer to our [general SSO guide](/docs/developers/single-sign-on) for more information.

## Test and Enable SSO

Next, you can try out the “Test SSO” and “Enable SSO” steps in Contentstack

### Test SSO

Before enabling SSO, it is recommended that you test the SSO settings configured so far.

To do so, perform the following steps:Click on the **Test SSO** button and it will take you to Contentstack’s **Login Via SSO** page where you need to specify your organization SSO name.
- Then, click on **Continue** to go to your IdP sign in page.
- Sign in to your account. If you are able to sign in to your IdP, your test is successful.

On successful connection, you will see a success message as follows:

If you have enabled IdP Role Mapping, you’ll find the following details in a new page:
- **SSO connection established successfully** - A success message is displayed.
- **IdP roles received** - The list of all the roles assigned to you in your IdP.
- **Contentstack-IdP role mapping details** - The details of all the Contentstack Organization-specific and Stack-specific roles mapped to your IdP roles.

Click on the **Close** button. Now, you can safely enable SSO for your organization.

**Note**: While testing SSO settings with IdP Role Mapping enabled, the test will be performed only for the IdP roles of the currently logged-in user (i.e., the Owner performing the test).

### Enable SSO

Once you have tested your SSO settings, click **Enable SSO** to enable SSO for your Contentstack organization.

Confirm your action by clicking on **Yes**.

Once this is enabled, users of this organization can access the organization through SSO. If needed, you can always disable SSO from this page as well.

## Common questions

### Is this guide still recommended for new SSO setups?
No. **Warning**: This set up guide is deprecated. Please visit our documentation on [Set up SSO with Microsoft Entra ID Native App](/docs/developers/single-sign-on/set-up-sso-with-microsoft-entra-ID-native-app).

### Who can perform the Contentstack-side SSO setup steps?
**Note:** Only the Organization [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) will be able to perform the steps discussed below.

### Do I need to add the `roles` attribute in Azure AD?
If you want to enable Role Mapping in Contentstack, then it is highly important to add the `roles` attribute as we need this for IdP Role Mapping which we will cover in the next set of steps.

### When should I use “Test SSO” vs “Enable SSO”?
Before enabling SSO, it is recommended that you test the SSO settings configured so far. Once you have tested your SSO settings, click **Enable SSO** to enable SSO for your Contentstack organization.

Filename: sso-set-up-sso-with-microsoft-azure-ad.md