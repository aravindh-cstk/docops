---
title: "[SSO] - Set up SSO with Okta"
description: Step-by-step guide to set up Single Sign-On (SSO) in Contentstack with Okta as your SAML 2.0 identity Provider (IdP).
url: https://www.contentstack.com/docs/administration/set-up-sso-with-okta
product: Contentstack
doc_type: setup-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-26
---

# [SSO] - Set up SSO with Okta

This page explains how to set up Single Sign-On (SSO) in Contentstack using Okta as a SAML 2.0 identity provider. It is intended for Contentstack organization owners/admins and Okta admins configuring SSO and (optionally) IdP role mapping, and should be used when enabling SSO access for an organization.

**Warning: **This set up guide is deprecated. Please visit our documentation on [Set up SSO with Okta Native App](/docs/developers/single-sign-on/set-up-sso-with-okta-native-app).

This step-by-step guide explains how to set up [Single Sign-On](/docs/developers/single-sign-on) in Contentstack with Okta as your SAML 2.0 identity Provider (IdP).

The integration with Okta can be done in following easy steps:
- [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
- [Configure Contentstack App in Okta](#configure-contentstack-app-in-okta)
- [Configure Okta details in Contentstack](#configuring-okta-details-in-contentstack)
- [Manage users access control in Okta](#manage-users-access-control-in-okta)[Add application to users](#a-add-application-to-users)
- [Add application to user groups for IdP Role Mapping](#b-add-application-to-user-groups-for-idp-role-mapping)
- [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
- [Test and Enable SSO](#test-and-enable-sso)

Let’s see each of the processes in detail.

## Create SSO Name and ACS URL in Contentstack

Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the **Organization Settings** page and click on the **SINGLE SIGN-ON** tab.
- Enter an **SSO name** of your choice, and click **Create**. For example, if your company name is “Acme, Inc.” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in.**Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).

Let's use “sso-test” as the **SSO Name**.
- This will generate **Assertion Consumer Service (ACS)** URL and other details such as **Entity ID**, **Attributes**** **and **NameID** Format. These details will be used in **Step 2** for configuring the Contentstack app in Okta.

Keep this window open, as you may need these details for setting up Contentstack app in Okta.

## Configure Contentstack App in Okta

Log in to your Okta Admin account.
- After logging in, you will see the Okta dashboard. Click on the **Application** tab and select **Applications**.
- In the **Applications** page, you will see your already created applications, if any.
- Click on the **Add Application** button and click on **Create New App** to create a new application for Contentstack.
- Set the **Platform** as **Web,** the **Sign on method** as **SAML 2.0**, and **Create** your application:
- You will be redirected to the **General Settings** page of your application. Provide a name for your application, e.g., **Contentstack**, a logo for your application, and click on **Next** to proceed to configure SAML settings.
- In the **Configure SAML** tab, under **SAML Settings**, provide the following details:**Single Sign on URL**: Paste the **Assertion Consumer Service URL** that we create in Contentstack in Step 1.c
- **Audience URI (SP Entity ID): **Enter Contentstack’s **Entity ID** that you received in **step 1**. In most cases, this value would be https://app.contentstack.com.
- **Default RelayState: **Keep it blank.
- **Name ID format**: Select **EmailAddress** option
- **Application username**: Select **Email **option
- Click on the **Show Advanced Settings** link and in the **SAML Issuer ID**, enter Contentstack's **Entity ID**, for e.g., `https://app.contentstack.com`.
- In **ATTRIBUTE STATEMENTS (OPTIONAL)**, under attribute mapping details, add the attributes.

Add three attributes: `**email**`, `**first_name**`, and `**last_name**` under **Name**, and select **user.email**, **user.firstName**, and **user.lastName**, respectively, under **Value**.
- [***Optional Step***] If you want to create role mapping, then, in the **GROUP ATTRIBUTE STATEMENTS (OPTIONAL)** section, under **Name**, enter “roles”; under **Filter**, select **matches regex, **add the key name as** roles**; and finally, enter your regex term, e.g., ^contentstack.([^\s]+)* (if all your Contentstack specific users are assigned roles that start with “contentstack”) in the textbox beside **Filter**. This will retrieve all the groups that start with “Contentstack.”
The following image depicts the IdP role mapping for Okta:

**Note:** Perform this step only if you want to enable [IdP Role Mapping](/docs/developers/single-sign-on/idp-role-mapping).
- Click **Next** and then **Finish** on the next screen.

## Configuring Okta details in Contentstack

In Okta, click on the **Sign On** tab of the application that you created in Step 2.
- Click on **View Setup Instructions** additional settings fields for your Contentstack application.

Click on the **Download Certificate** button.
- Copy **Identity Provider Single Sign-On URL**. Then, in the Contentstack SSO settings page, go to the **IdP Configuration**, and paste the URL in the **Single Sign-on URL** field.
- Upload the X.509 certificate that you downloaded from Okta, into the **Certificate** field in the **2 IdP Configuration** section in Contentstack.

That’s it! Now, let’s see how to assign your Contentstack application to your users in Okta.

## Manage users access control in Okta

After setting the necessary configurations in Contentstack, you need to now assign the newly added application to your users.

### A – Add application to users

Go to the **Assignments** tab of your application,click on the **Assign** dropdown, and select **Assign to People**.
- You will get a list of registered users to whom you need to assign your application. Click on the **Assign** button beside the user to whom you want to assign the application, and click on **Done**.
- Also, you may use multiple applications assignments available in **Applications** > **Assign applications** menu.

With this, you are done with setting up the Contentstack app in Okta. Proceed to configuring the remaining steps in Contentstack SSO in [Step 6](#test-and-enable-sso).

But, if you want to perform IdP Role Mapping and allow user groups to directly log in to your SSO-enabled organization (without invitation) with the assigned permissions through role mapping, perform **Step 4.B**.

### B - Add application to user groups for IdP Role Mapping

***Perform this step only if IdP Role Mapping is part of your Contentstack plan.***

[IdP Role Mapping](/docs/developers/single-sign-on/idp-role-mapping) is an alternate way of managing users and permissions of your SSO-enabled organization. This feature allows you to map your IdP roles to Contentstack roles while configuring SSO for your organization.
- Go to the **Assignments** tab of your application, click on the **Assign** dropdown in the application details section, and select **Assign to Groups**.
- You will see a list of registered groups. Click on the **Assign** button beside the group(s) to which you need to assign your application. Click on **Done**.

You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **3. User Management** section of your Contentstack SSO settings and perform **Step 5**.

## Create Role Mappings in Contentstack

In the **User Management** section, you will see the following steps:

**Strict Mode**: Enable [**Strict Mode**](/docs/developers/single-sign-on/set-up-sso-in-contentstack#strict-mode)** **if you do not want any users to access the organization without SSO login.
- **Session Timeout**: The [**Session Timeout**](/docs/developers/single-sign-on/set-up-sso-in-contentstack#session-timeout) option lets you define the session duration for a user signed in through SSO. While the default is set to 12 hours, you can modify it as needed.
- **Advanced Settings**: Click on the [advanced settings](/docs/developers/single-sign-on/set-up-sso-in-contentstack#advanced-settings) to expand the IdP Role Mapping section to map IdP roles to Contentstack.[/docs/developers/single-sign-on/set-up-sso-in-contentstack#advanced-settings](/docs/developers/single-sign-on/set-up-sso-in-contentstack#advanced-settings)In the **Add Role Mapping** section, click on the **+ ADD ROLE MAPPING** link to add new IdP role mapping and enter the following details:**IdP Role Identifier**: Enter the IdP group/role identifier, for example, “Contentstack Developers.”
- **Organization Role**: Assign either the **Admin or Member **role to the mapped group/role.
- **Stack Roles ***(optional)*: Assign [stacks](/docs/developers/set-up-stack/about-stack) as well as the corresponding stack-level roles to this role.

Likewise, you can add more role mappings for your Contentstack organization. To add a new Role mapping, click on **+ ADD ROLE MAPPING** and enter the details.- Keep **Role Delimiter** blank as Okta usually returns roles in an array.
- Finally, check the **Enable IdP Role Mapping** checkbox to enable the feature.
- Click on **Next** to continue further.

While some details about these steps are given below, you can refer to our [general SSO guide](/docs/developers/single-sign-on) for more information.

## Test and Enable SSO

Next, you can try out the “Test SSO” and “Enable SSO” steps in Contentstack

### Test SSO

Before enabling SSO, it is recommended that you test the SSO settings configured so far. To do so, perform the following steps:

Click on the **Test SSO** button and it will take you to Contentstack’s **Login Via SSO** page, where you need to specify your organization SSO name.
- Then, click on **Continue** to go to your IdP sign in page.
- Sign in to your account. If you are able to sign in to your IdP, your test is successful.On successful connection, you will see a success message as follows
- But, if you have enabled IdP Role Mapping, you’ll find the following details in a new page:

**SSO connection established successfully** - A success message is displayed.
- **IdP Roles received** - The list of all the roles assigned to you in your IdP.
- **Contentstack-IdP role mapping details** - The details of all the Contentstack Organization-specific and Stack-specific roles mapped to your IdP roles.
- Click on the **Close** button. Now, you can safely enable SSO for your organization.

**Note**: While testing SSO settings with IdP Role Mapping enabled, the test will be performed only for the IdP roles of the currently logged-in user (i.e., the Owner performing the test).

### Enable SSO

Once you have tested your SSO settings, click **Enable SSO** to enable SSO for your Contentstack organization.

Confirm your action by clicking on **Yes**.

Once this is enabled, users of this organization can access the organization through SSO. If needed, you can always disable SSO from this page as well.

## Common questions

### Is this set up guide current?
**Warning: **This set up guide is deprecated. Please visit our documentation on [Set up SSO with Okta Native App](/docs/developers/single-sign-on/set-up-sso-with-okta-native-app).

### What information from Contentstack do I need to configure Okta?
You need the **Assertion Consumer Service (ACS)** URL and other details such as **Entity ID**, **Attributes**** **and **NameID** Format.

### When should I perform the IdP Role Mapping steps?
Perform the IdP Role Mapping steps only if you want to enable [IdP Role Mapping](/docs/developers/single-sign-on/idp-role-mapping) and if IdP Role Mapping is part of your Contentstack plan.

### What should I do before enabling SSO?
Before enabling SSO, it is recommended that you test the SSO settings configured so far using the **Test SSO** step.