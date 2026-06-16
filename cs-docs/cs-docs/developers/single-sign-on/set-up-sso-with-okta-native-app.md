---
title: "[SSO] - Set up SSO with Okta Native App"
description: Step-by-step guide to set up Single Sign-On (SSO) in Contentstack with Okta as your SAML 2.0 identity Provider (IdP).
url: https://www.contentstack.com/docs/developers/single-sign-on/set-up-sso-with-okta-native-app
product: Contentstack
doc_type: guide
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-03-25
---

# [SSO] - Set up SSO with Okta Native App

This page provides a step-by-step guide for administrators and developers to configure Single Sign-On (SSO) for a Contentstack organization using Okta as a SAML 2.0 identity provider (IdP), including optional IdP Role Mapping and validation steps before enabling SSO.

## Set up SSO with Okta Native App

This step-by-step guide explains how to set up [Single Sign-On](/docs/developers/single-sign-on) in Contentstack with Okta as your SAML 2.0 identity Provider (IdP).

The integration with Okta can be done in following easy steps:
- [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
- [Configure Contentstack App in Okta](#configure-contentstack-app-in-okta)
- [Configure Okta details in Contentstack](#configure-okta-details-in-contentstack)
- [Manage users access control in Okta](#manage-users-access-control-in-okta)[Add application to users](#add-application-to-users)
- [Add application to user groups for IdP Role Mapping](#add-application-to-user-groups-for-idp-role-mapping)
- [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
- [Test and Enable SSO](#test-and-enable-sso)

**Supported features include:**
- SP-initiated (Service-Provider-initiated) SSO
- IdP-initiated (Identity-Provider-initiated) SSO
- Just-In-Time provisioning

Let’s see each of the processes in detail.

## Create SSO Name and ACS URL in Contentstack

Log in to your [Contentstack account](https://www.contentstack.com/login/), go to the **Organization Settings** page and click on the **SINGLE SIGN-ON** tab.
- Enter an **SSO name** of your choice, and click **Create**. For example, if your company name is “Acme, Inc.” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in and cannot be editable later on.

**Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).

Let's use “sso-test” as the **SSO Name**.
- This will generate **Assertion Consumer Service (ACS) URL** and other details such as **Entity ID**, **Attributes** and **NameID** Format. These details will be used in [Step 2](#configure-contentstack-app-in-okta) for configuring the Contentstack app in Okta.

Keep this window open, as you may need these details for setting up the Contentstack app in Okta.

## Configure Contentstack App in Okta

Log in to your Okta Admin account.
- After logging in, you will see the Okta dashboard. Click on the **Application** tab and select **Applications**.
- In the **Applications** page, you will see your already created applications, if any.
- Click the **Browse App Catalog** to set up an application for Contentstack.
- Search for “Contentstack” within the **Browse App Integration Catalog** section and select the **Contentstack** app.
- You will be redirected to the **Contentstack** application. Click on the **Add Integration** button.
- You can edit the **Application label** as per your preference and click on **Done**.
- You will be redirected to the application’s configuration page. Locate the **Sign On** tab and click the **Edit** button.
- In the **Settings** section expand **Attributes** to add any additional attributes (Optional).
- Optionally, you can create role mapping. To do this, in the **Group Attribute Statements (Optional)** section, enter the following:

For Name, enter “roles” Name.
- Under **Name format (optional)**, select **Unspecified**.
- For the **Filter**, select **Matches regex** and enter your regex term in the textbox beside it. For example, if all your **Contentstack** specific users are assigned roles that start with contentstack, enter the regex term `^contentstack.([^\s]+)*`.
- This will retrieve all the groups that start with "contentstack".

**Note:** Perform this step only if you want to enable [IdP Role Mapping](/docs/developers/single-sign-on/idp-role-mapping).
- In the **Advance Sign-On** Settings, enter the following details:

**Assertion Consumer Service URL**: Enter the Assertion Consumer Service (ACS) URL that you created in Contentstack in [Step 1](#create-sso-name-and-acs-url-in-contentstack).
- **Entity ID**: Enter the Entity ID of Contentstack, from [step 1](#create-sso-name-and-acs-url-in-contentstack), typically represented as `https://app.contentstack.com`.
- **Application username format**: Select the Email option
- **Update application username on**: Select Create and update
- Click **Save**.

## Configuring Okta details in Contentstack

In Okta, click the **Sign On** tab of the application that you created in [Step 2](#configure-contentstack-app-in-okta) and then click **More details**.
- Copy the **Sign-On URL** and Download the Certificate.
- Go to the **Contentstack Single Sign-On** settings page, and locate the **IdP Configuration** tab. Enter the Sign-On URL that you copied in the previous step in the **Single Sign-on URL** field.
- Upload the X.509 certificate that you downloaded from Okta, into the **Certificate** field in the **2 IdP Configuration** section in Contentstack.

That’s it! Now, let’s see how to assign your Contentstack application to your users in Okta.

## Manage users access control in Okta

After setting the necessary configurations in Contentstack, you need to now assign the newly added application to your users.

### Add application to users

Go to the **Assignments** tab of your application,click the **Assign** dropdown, and select **Assign to People**.
- You will get a list of registered users to whom you need to assign your application. Click the **Assign** button beside the user to whom you want to assign the application, and click **Done**.
- Also, you may use multiple applications assignments available under **Applications > Assign applications** menu.

With this, you are done with setting up the Contentstack app in Okta. Proceed to configuring the remaining steps in Contentstack SSO in [Step 6](#test-and-enable-sso).

But, if you want to perform IdP Role Mapping and allow user groups to directly log in to your SSO-enabled organization (without invitation) with the assigned permissions through role mapping, perform [Step 4.2](#add-application-to-user-groups-for-idp-role-mapping).

### Add application to user groups for IdP Role Mapping

***Perform this step only if IdP Role Mapping is part of your Contentstack plan.***

[IdP Role Mapping](/docs/developers/single-sign-on/idp-role-mapping) is an alternate way of managing users and permissions of your SSO-enabled organization. This feature allows you to map your IdP roles to Contentstack roles while configuring SSO for your organization.

Go to the **Assignments** tab of your application, click the **Assign** dropdown in the application details section, and select **Assign to Groups**.
- You will see a list of registered groups. Click the **Assign** button beside the group(s) to which you need to assign your application. Click **Done**.

You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **3. User Management** section of your Contentstack SSO settings and perform [Step 5](#create-role-mappings-in-contentstack).

## Create Role Mappings in Contentstack

In the **User Management** section, you will see the following steps:

**Strict Mode**: Enable [Strict Mode](/docs/developers/single-sign-on/set-up-sso-in-contentstack#strict-mode) if you do not want any users to access the organization without SSO login.
- **Session Timeout**: The [Session Timeout](/docs/developers/single-sign-on/set-up-sso-in-contentstack#session-timeout) option lets you define the session duration for a user signed in through SSO. While the default is set to 12 hours, you can modify it as needed.
- **Advanced Settings**: Click on the [advanced settings](/docs/developers/single-sign-on/set-up-sso-in-contentstack#advanced-settings) to expand the IdP Role Mapping section to map IdP roles to Contentstack.

In the **Add Role Mapping** section, click on the **+ ADD ROLE MAPPING** link to add new IdP role mapping and enter the following details:
- **IdP Role Identifier**: Enter the IdP group/role identifier, for example, “Contentstack Developers”. This should be the same as the name of the group assigned to the application on Okta.
- **Organization Role**: Assign either the Admin or Member role to the mapped group/role.

**Stack Roles (optional)**: Assign [stacks](/docs/developers/set-up-stack/about-stack) as well as the corresponding stack-level roles to this role.
- Likewise, you can add more role mappings for your Contentstack organization. To add a new Role mapping, click on **+ ADD ROLE MAPPING** and enter the details.
- Keep **Role Delimiter** blank as Okta usually returns roles in an array.
- Finally, check the **Enable IdP Role Mapping** checkbox to enable the feature.
- Click **Next** to continue further.

While some details about these steps are given below, you can refer to our [general SSO guide](/docs/developers/single-sign-on) for more information.

## Test and Enable SSO

Next, you can try out the “Test SSO” and “Enable SSO” steps in Contentstack

### Test SSO

Before enabling SSO, it is recommended that you test the SSO settings configured so far. To do so, perform the following steps:

Click the **Test SSO** button and it will take you to Contentstack’s **Login Via SSO** page, where you need to specify your organization’s SSO name.
- Then, click **Continue** to go to your IdP sign in page.
- Sign in to your account. If you are able to sign in to your IdP, your test is successful. On successful connection, you will see a success message as follows:
- But, if you have enabled IdP Role Mapping, you’ll find the following details in a new page:

**SSO connection established successfully** - A success message is displayed.
- **IdP Roles received** - The list of all the roles assigned to you in your IdP.
- **Contentstack-IdP role mapping details** - The details of all the Contentstack Organization-specific and Stack-specific roles mapped to your IdP roles.
- Click on the **Close** button. Now, you can safely enable SSO for your organization.

**Note:** While testing SSO settings with IdP Role Mapping enabled, the test will be performed only for the IdP roles of the currently logged-in user (i.e., the Owner performing the test).

### Enable SSO

Once you have tested your SSO settings, click **Enable SSO** to enable SSO for your Contentstack organization.
- Confirm your action by clicking on **Yes**.
- Once this is enabled, users of this organization can access the organization through SSO. If needed, you can always disable SSO from this page as well.

## Log In via SSO

To log in to Contentstack via sso, perform the steps given below:
- Go to the [Contentstack App](https://app.contentstack.com/#!/login) and click the **Via SSO** button.
- Enter your **SSO Name** (created in step 1.2).
- Click on **Log In**.

## Common questions

### Do I need IdP Role Mapping to set up SSO with Okta?
No. IdP Role Mapping is optional and should be performed only if it is part of your Contentstack plan.

### What values from Contentstack are required in Okta?
You need the Assertion Consumer Service (ACS) URL and the Entity ID generated in Contentstack when you create the SSO Name.

### What do I need to enter in Contentstack from Okta?
You need to copy the Sign-On URL and upload the X.509 certificate downloaded from Okta into Contentstack’s IdP Configuration.

### Should I test SSO before enabling it?
Yes. The guide recommends using the **Test SSO** step before clicking **Enable SSO**.