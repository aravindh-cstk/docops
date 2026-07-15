---
title: "[Security Management] - Set Up SSO in Contentstack"
description: General step-by-step guide explaining the process of setting up single sign-on in Contentstack with your SAML 2.0 Identity Provider.
url: https://www.contentstack.com/docs/administration/set-up-sso-in-contentstack
product: Contentstack
doc_type: security-management
audience:
  - owners
  - admins
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Security Management] - Set Up SSO in Contentstack

This page explains how to set up single sign-on (SSO) for a Contentstack organization using a SAML 2.0 Identity Provider (IdP). It is intended for organization owners and administrators configuring SSO and related user management settings, and should be used when enabling, testing, or disabling SSO for an organization.

## Set Up SSO in Contentstack

**Note**: Only the owner of the organization has the right to set up SSO.

This is a general step-by-step guide explaining the process of setting up single sign-on in Contentstack with your SAML 2.0 Identity Provider.

## Prerequisites

In order to enable SSO for your organization, you would need the following:
- Access to your identity provider’s configuration settings
- [Owner role](../invite-users-and-assign-roles/types-of-roles.md#owner) in your Contentstack [organization](../organization/about-organizations.md)

## Steps to enable SSO in Contentstack

In order to set up SSO for your Contentstack organization with any IdP, you need to proceed according to steps given below.
- [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
- [Setup Contentstack app in your IdP](#setup-contentstack-app-in-your-idp)
- [Configure IdP details in Contentstack](#configure-idp-details-in-contentstack)
- [User Management in Contentstack](#user-management-in-contentstack)
- [Test and Enable SSO](#test-and-enable-sso)

Let’s go through each of these steps in detail.

### Create SSO Name and ACS URL in Contentstack

Log in to your [Contentstack account](https://app.contentstack.com/#!/login), click the “Org Admin” icon on the left navigation panel and select **Single Sign-On**.![Set_Up_SSO.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd63658aa6b7e086c/6710d95bbcf8a669de1a9e9f/Set_Up_SSO.png)
- Enter an SSO name of your choice, and click **Create**. For example, if your company name is “Acme, Inc.,” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in.

**Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).

Let's use “test-sso” as the SSO Name.
- This will generate the **Assertion Consumer Service (ACS) **URL and other details such as **Entity ID**, **Attributes**, and **NameID Format**. You will need these details in Step 2 for configuring the Contentstack app in your Identity Provider.

Keep this window open, as you may need these details for setting up the Contentstack app in your IdP in the next step.

### Setup Contentstack app in your IdP

Login to your IdP admin account.
- Create a new application (also known as app or connector in some IdPs) with application name preferably as "Contentstack."
- In SAML settings, you need to provide the "SSO Configuration" details that you received from Contentstack in **Step 1**.

In your IdP, provide the following details:

In the **Single Sign-on URL** field, provide the ACS URL that was generated for your organization in Contentstack.
- Use Contentstack’s Entity ID (generated in Step 1) in your IdP in **Audience URI**, **SP Entity ID**, **SAML Issuer ID**, or fields similar to these.
- In the **NameID Format**, select or enter **EmailAddress**. This defines the parameter that your IdP should use to identify Contentstack users.
- ***[Optional Step] ***If you want to encrypt your SAML attributes, you need to enable SAML encryption in your IdP and upload the [Contentstack Public Certificate](./enable-saml-encryption.md#download-the-contentstack-public-certificate-for-saml-encryption).
- Under **Attribute Mapping** or **Attribute Statements**, add three attributes, i.e., **email**, **first_name**, and **last_name**, and map corresponding IdP values, such as email, first name, and last name. The Name format of the attributes(email, first_name, last_name) must be "Basic". If the Name format is selected as **Unspecified** or in any other format, then it doesn’t work.
- **[*****Optional Step*****] **If you want to map IdP groups/roles to Contentstack roles, you need to add a new attribute called “roles” under **Attribute Mapping**, and return your IdP users’ roles or groups.

**Note:** Perform this step only if **IdP Role Mapping** is part of your Contentstack plan.
- Once you enter all the details and save your settings in IdP, you should receive **IdP Single Sign-On URL** and **X.509 certificate**. Use these details in **Step 3**.

### Configure IdP Details in Contentstack

Go to **2. IdP Configuration** in Contentstack.
- In the **Single Sign-On URL** field, paste the **IdP Single Sign-On URL** that you received from IdP in Step 2.
- In the **Certificate** field in Contentstack, upload the **X.509** or **Public Key Certificate** that you received from your IdP.
- Select the relevant algorithm from the options given under the **Signature Algorithm** field.
- ***[Optional Step] ***Enable the [SAML encryption](./enable-saml-encryption.md) in Contentstack if you want to encrypt your SAML attributes via your IdP.
- Click **Save** to save IdP configuration.![Set_Up_SSO_4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2c406e4cff9d2b9/6710d95bfe2f9d3cb3e2c9d9/Set_Up_SSO_4.png)

**Tip:** In some IdPs, you may have to assign the newly-created Contentstack application to the existing users of your IdP. You can find these settings under the **Users** section in IdP.

With this step, you have completed SSO settings in your IdP. However, you need to configure two more steps in Contentstack.

### User Management in Contentstack

In Contentstack, go to **3. User Management**. Here, you need to define important settings related to your users in your SSO-enabled organization. These settings include **Strict Mode**, **User Email Whitelists**, **Session Time-Out**, and **Advanced Settings**.

#### Strict Mode

Strict Mode lets you decide if you want to allow any non-IdP users (i.e., users that are not available in your IdP) to access the SSO-enabled organization in Contentstack.

**Enable “Strict Mode”**
If you enable **Strict Mode**, users that are not added to your IdP will not be able to access the Contentstack organization. This means that users can access the organization only through SSO, without any exceptions.
- **Disable “Strict Mode”**
If you disable **Strict Mode**, users with special permission (i.e., users marked as **Allow access without SSO** in Organization User settings) can access this organization using Contentstack credentials, instead of through SSO (IdP credentials). It is similar to creating an exception list of users.

**Invite users to access organization without SSO**
To allow users to access your SSO-enabled organization without SSO login (using Contentstack credentials), perform the following steps:
- Disable **Strict Mode** in the **User Management **step in SSO settings.
- Go to **Users** in Organization settings.
- Click on **Invite User**. On the modal that appears, check **Allow Access Without SSO**, and enter user details.
- Click **Invite**.

#### User Email Whitelists

The **User Email Whitelists** allows specified users to access APIs even when strict mode is enabled, bypassing any restrictions imposed by it. To whitelist users, simply enter their email addresses, separating multiple addresses with commas (e.g., `user1@example.com`, `user2@example.com`). This option becomes visible only when strict mode is active.

**Note**: This is a plan-based feature and may not be available to all users. For further assistance or more information, contact our [support](mailto:support@contentstack.com) team.

#### Session Time-Out

You can define the session duration of user signed in through SSO. By default, this is set to 12 hours. However, you can set anywhere between 1 hour and 24 hours. The session begins when the user logs in to Contentstack via SSO and will timeout after 12 hours (or the time period that you specify here).

#### Advanced Settings

Under **Advanced settings**, you will find more advanced settings related to user management, which includes ***IdP Role Mapping***.

**Note**: The IdP Role Mapping feature is available only if it is part of your Contentstack plan. Consequently, only then will you find the **Role Mapping** section under **Advanced settings**. If you want to include this feature in your plan, contact our [Support](mailto:support@contentstack.com) team.

##### Configuring IdP Role Mapping

[IdP Role Mapping](./idp-role-mapping.md) allows you to assign Contentstack roles to the users of a group/role in your IdP.

Before you add new role mappings, you must add the “roles” attributes in the “Attribute Mappings” section in your IdP. The steps are covered in Step 2 above.

To add new IdP role mapping, click on the **+ ADD ROLE MAPPING** link. Enter the following details:
- **IdP Role Identifier**: Role identifier is the name or UID (by which it is uniquely identified in IdP) of the IdP group that you want to map. For example, “Contentstack Developers” or “Contentstack Project Managers.”
- **Organization Role**: Assign an organization-level Contentstack role (i.e., either “Admin” or “Member”) to the IdP group/role that you are mapping.
- **Stack Roles**: Assign [stacks](../set-up-stack/about-stack.md) as well as corresponding stack-level roles to this IdP role.

On the [IdP side](#setup-contentstack-app-in-your-idp), you need to add “Group Mapping” or “Group Attributes” to map the roles.

Likewise, you can add more role mappings for your Contentstack organization.

In the **Role Delimiter** section, mention the character that serves as the delimiter for the roles. Depending on the IdP selected, the delimiter can be a space, comma (','), semicolon (;), or something else.

Finally, select the **Enable IdP Role Mapping** checkbox to enable this feature.

**Note:** After enabling **IdP Role Mapping**, the role management (in Contentstack) for the users of your IdP will be handled from your IdP, instead of from Contentstack.

### Test and Enable SSO

#### Test SSO

Before enabling SSO, it is recommended that you test it. To test it, perform the following steps:

Click on the **Test SSO** button. This opens the Contentstack’s **Login via SSO** page.
- Specify your organization SSO name, and click on **Continue **to go to your IdP sign in page.
- Sign in to your account. If you are able to sign in to your IdP, your test is successful.

On successful connection, you will see a success message.

If you have enabled IdP Role Mapping, you’ll find the following details in a new page:
- **SSO connection established successfully** - A success message is displayed.
- **IdP Roles received** - The list of all the roles assigned to you in your IdP.
- **Contentstack-IdP role mapping details** - The details of all the Contentstack Organization-specific and Stack-specific roles mapped to your IdP roles.
- Click on the **Close** button.

Now, you can safely enable SSO for your organization.

**Note:** While testing SSO settings with IdP Role Mapping enabled, the test will be performed only for the IdP roles of the currently logged-in user (i.e., the user performing the test).

#### Enable SSO

Click on **Enable SSO** to enable SSO for your Contentstack organization. Once this is enabled, users of this organization can access the organization through SSO login. You can disable SSO from the same page when required.

**Note:** If you've already logged into your SSO IdP, the `trigger_sso_flow=<sso_name> `query parameter automatically lets you log in to Contentstack via SSO, allowing you to skip the Contentstack login page.

After enabling SSO, you will see **SSO One-click URL** at the top of the SSO page. You can use this URL to directly go to Contentstack’s SSO login page. Bookmark this URL to skip multiple steps while logging in.

**Note:** Only the users invited to the SSO-enabled organization can access the organization if IdP Role Mapping is disabled. Your IdP users cannot directly access the organization if they have not been invited to this organization.

#### Disable SSO

After enabling SSO, you will notice that **4. Test & Enable SSO** changes to **4. Disable SSO** in your SSO settings page. You can disable SSO for your organization anytime by clicking the **Disable** button.

Once disabled, the existing users of your organization will have to use Contentstack credentials to sign in. In case the existing user does not have Contentstack credentials, the user will have to use the **Forgot password** link on the login page in Contentstack to create a new password for login.

## Common questions

### Who can set up SSO in Contentstack?
Only the owner of the organization has the right to set up SSO.

### What user identifier should be used for SSO?
In the **NameID Format**, select or enter **EmailAddress**.

### What attributes are required in the IdP configuration?
Under **Attribute Mapping** or **Attribute Statements**, add three attributes, i.e., **email**, **first_name**, and **last_name**, and map corresponding IdP values.

### What happens when SSO is disabled?
Once disabled, the existing users of your organization will have to use Contentstack credentials to sign in. In case the existing user does not have Contentstack credentials, the user will have to use the **Forgot password** link on the login page in Contentstack to create a new password for login.