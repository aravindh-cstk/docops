---
title: "Set Up SSO in Contentstack"
description: "Set up single sign-on in Contentstack with any SAML 2.0 identity provider, using manual entry or metadata import, and manage users, strict mode, and role mapping."
url: /administration/set-up-sso-in-contentstack
uid: bltbe764ea41acc6985
---

# Set Up SSO in Contentstack

## Set Up SSO in Contentstack

This guide explains how to set up **single sign-on** (**SSO**) in Contentstack with any **Security Assertion Markup Language 2.0** (**SAML 2.0**) **identity provider** (**IdP**).

**Note:** SSO can be configured by the organization owner, a security manager, or a user with a custom role that has SSO write permissions.

You can attach more than one IdP to an organization. Each IdP is a separate connection with its own configuration, and you can add up to five. This guide walks through a single connection. To add and organize multiple connections, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers).

## Prerequisites

To enable SSO for your organization, you need the following:

-   Access to your identity provider's configuration settings.
-   The organization [owner](/docs/headless-cms/types-of-roles#owner) role, a security manager role, or a custom role with SSO write permissions in your Contentstack [organization](/docs/administration/about-organizations).

## Overview

Setting up SSO takes five steps:

1.  [Create a connection in Contentstack](#step-1-create-a-connection-in-contentstack)
2.  [Set up the Contentstack app in your IdP](#step-2-set-up-the-contentstack-app-in-your-idp)
3.  [Configure IdP details in Contentstack](#step-3-configure-idp-details-in-contentstack)
4.  [Manage users in Contentstack](#step-4-manage-users-in-contentstack)
5.  [Test and enable SSO](#step-5-test-and-enable-sso)

## Step 1: Create a Connection in Contentstack

1.  Sign in to your [Contentstack account](https://app.contentstack.com/#!/login), open the **App Switcher**, go to **Administration**, and then click **Single Sign-On**.

    ![The Single Sign-On page in Administration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am395e787147351a89/c2498546e5c460e08470f535/sso-01-connections-grid.png)

2.  Add a connection to open the **New Connection** dialog, and enter the following details:

    -   **Connection Name**: A friendly name shown across SSO surfaces, up to 128 characters. It does not affect login URLs. For example, "Acme Employees."
    -   **SSO ID**: The unique identifier for your SSO-enabled organization. Contentstack auto-generates it from the connection name, and you can edit it before you create the connection. Users enter it as one of the login parameters once SSO is enabled.
    -   **Description** (optional): Context about this connection, up to 400 characters.

    **Note:** The SSO ID can contain only lowercase letters, numbers (0-9), and hyphens (-). You cannot change the SSO ID after you create the connection.

    ![The New Connection dialog with Connection Name and SSO ID fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am074e9b2c81439709/98d10a53fa78f93e094f1a5f/sso-11-new-connection-modal.png)

3.  Click **Create**.


Contentstack opens the connection at **1\. SSO Configuration** and generates the **Assertion Consumer Service (ACS)** URL, along with other read-only details such as **Entity ID**, **SAML Version**, **Attributes**, and **NameID Format**. You need these details in Step 2. Keep this window open.

![The SSO Configuration step showing the ACS URL and read-only details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8f35945428d79b8d/96f875510e6c6b74dcc7d3a6/sso-04-step1-sso-configuration.png)

**Tip:** Instead of copying the ACS URL and Entity ID individually, share Contentstack's service provider (SP) metadata with your IdP team in one step. Use **Download Metadata XML**. If you enable SAML encryption on this connection, the downloaded metadata also carries the public certificate your IdP uses to encrypt assertions. You can download that certificate on its own from the [Contentstack public certificate](https://app.contentstack.com/public_cert.cer) link. For details, refer to [Download Contentstack (SP) Metadata](/docs/administration/download-sp-metadata).

## Step 2: Set Up the Contentstack App in Your IdP

1.  Sign in to your IdP admin account.

2.  Create a new application (also called an app or connector in some IdPs). Name it "Contentstack."

3.  In the SAML settings, enter the SSO configuration details from Step 1:

    -   **Single Sign-On URL**: The ACS URL generated for your organization in Contentstack.
    -   **Audience URI**, **SP Entity ID**, or **SAML Issuer ID**: Contentstack's Entity ID from Step 1.
    -   **NameID Format**: Select or enter **EmailAddress**. This defines the parameter your IdP uses to identify Contentstack users.
    -   _(Optional)_ To encrypt SAML attributes, enable SAML encryption in your IdP and upload the [Contentstack public certificate](/docs/administration/enable-saml-encryption#download-the-contentstack-public-certificate-for-saml-encryption).

    **Tip:** If your IdP supports importing SP metadata, import the Contentstack metadata URL or XML file instead of entering these fields by hand. Refer to [Download Contentstack (SP) Metadata](/docs/administration/download-sp-metadata).

4.  Under **Attribute Mapping** or **Attribute Statements**, add three attributes, **email**, **first\_name**, and **last\_name**, and map them to the corresponding IdP values.

    **Note:** The name format for these attributes must be "Basic." The **Unspecified** format and other formats do not work.

5.  _(Optional)_ To map IdP groups or roles to Contentstack roles, add a **roles** attribute under **Attribute Mapping** that returns your IdP users' roles or groups.

    **Note:** Perform this step only if IdP Role Mapping is part of your Contentstack plan.

6.  Save your settings. Your IdP returns an **IdP Single Sign-On URL** and an **X.509 certificate**. You need these in Step 3.


## Step 3: Configure IdP Details in Contentstack

Go to **2\. IdP Configuration** in Contentstack. You can provide your IdP's details in one of three ways. Choose the one that matches your IdP's capabilities and your network environment:

-   **Metadata URL**: Enter your IdP's metadata endpoint and click **Fetch**. Contentstack retrieves and parses the details. This is the fastest path for IdPs that expose a live metadata URL, such as Okta, Microsoft Entra ID, OneLogin, and Ping Identity.
-   **Metadata XML**: Upload your IdP's metadata file. Use this for IdPs that do not expose a URL, such as on-premises Active Directory Federation Services (AD FS) and some legacy IdPs, or when network rules prevent Contentstack from reaching the URL.
-   **Manual entry**: Enter each field by hand. Use this for IdPs that do not provide structured metadata.

**Tip:** Importing metadata auto-populates the Single Sign-On URL, certificate, and related fields, which reduces manual entry and errors. For the full procedure and error handling, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).

To enter the details manually:

1.  In the **Single Sign-On URL** field, paste the IdP Single Sign-On URL from Step 2. The URL must use HTTPS.

2.  In the **Certificate** field, upload the X.509 certificate from Step 2.

    **Warning:** A connection stores one signing certificate. Contentstack shows its expiry date next to the field. When your IdP switches to a new signing certificate, every SAML assertion arrives signed by a certificate Contentstack does not recognize, and sign-in through this connection fails until you upload the new certificate here. Coordinate the replacement with the switch on the IdP side rather than waiting for the current certificate to expire.

3.  Under **Signature Algorithm**, select the algorithm your IdP uses. Available options are, SHA-1, SHA-256, and SHA-512.

4.  _(Optional)_ Turn on [SAML encryption](/docs/administration/enable-saml-encryption) to encrypt your SAML attributes.

5.  Click **Save**.


![The IdP Configuration step with the Single Sign-On URL, Certificate, and Signature Algorithm fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1577358558874c9c/85c0c37d86010ca23f6cf663/sso-05-step2-idp-configuration.png)

**Tip:** In some IdPs, you assign the new Contentstack application to your users. You find these settings under the **Users** section in your IdP.

**Note:** The organization owner can always sign in with Contentstack credentials, regardless of SSO status (enabled, disabled, misconfigured, or strict mode). If SSO login fails after a certificate update, the owner can sign back in and restore the previous configuration.

![Set_Up_SSO_4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2c406e4cff9d2b9/6710d95bfe2f9d3cb3e2c9d9/Set_Up_SSO_4.png)

## Step 4: Manage Users in Contentstack

Go to **3\. User Management** to define how users access your SSO-enabled organization. This step covers **Strict Mode**, **User Email Whitelists**, **Session Time-Out**, and **Advanced Settings**.

![The User Management step](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7a7736fe1bda3606/89a67d30f982332b2f74e61e/sso-06-step3-user-management.png)

![Set_Up_SSO_5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2580e6af8d4e0bd8/67122016702a14919bf7039f/Set_Up_SSO_5.png)

### Strict Mode

Strict mode controls whether users who are not in your IdP can access the organization.

-   **Enabled**: Users can access the organization only through SSO. Users who are not in your IdP cannot sign in.
-   **Disabled**: Users marked **Allow access without SSO** in the organization's user settings can sign in with Contentstack credentials. This works like an exception list.

**Note:** In an organization with multiple connections, strict mode is set per connection but takes effect across the whole organization. If any **enabled** connection has strict mode on, the entire organization is SSO-only. Disabling a connection that has strict mode on removes strict mode for the organization, because a disabled connection does not contribute to the organization's strict state.

To let specific users sign in without SSO:

1.  Disable **Strict Mode** in the **User Management** step.
2.  Go to **Users** in your organization settings.
3.  Click **Invite User**, select **Allow Access Without SSO**, and enter the user's details.
4.  Click **Invite**.

### User Email Whitelists

The **User Email Whitelists** setting lets specified users access APIs even when strict mode is enabled. It is organization-scoped, not connection-scoped, and applies only when strict mode is enabled. Enter up to 100 email addresses, separated by commas (for example, user1@example.com, user2@example.com). Each address must belong to an accepted, non-owner member of the organization.

In a multi-connection organization, this field appears only under the **User Management** tab of the connection that has strict mode enabled. It does not appear on the other connections.

**Note:** Because any one strict connection makes the whole organization SSO-only, only one connection can hold the strict mode toggle at a time. Enabling strict mode on one connection automatically disables the strict mode toggle on every other connection.

**Note:** This is a plan-based feature. For access, contact our [support](mailto:support@contentstack.com) team.

### Session Time-Out

Set how long an SSO session lasts. The default is 12 hours, and you can set any value between 1 and 24 hours. The session begins when the user signs in through SSO and ends when the timeout period elapses.

### Advanced Settings

**Advanced Settings** contains **IdP Role Mapping**, which assigns Contentstack roles to the users of a group or role in your IdP.

**Note:** IdP Role Mapping is available only if it is part of your Contentstack plan. The **Role Mapping** section appears under **Advanced Settings** only when the feature is included. To add it to your plan, contact our [Support](mailto:support@contentstack.com) team.

Before you add role mappings, add the **roles** attribute in your IdP, as described in Step 2.

![A role mapping expanded, showing the IdP Role Identifier field and Assign Product Roles with a Manage Roles action per product](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8c362576b974fdf2/493ec80e635150e3daf2935e/sso-09-role-mapping-expanded.png)

To add a role mapping, click **Add Role Mapping**, and enter the following:

-   **IdP Role Identifier**: The name or UID of the IdP group you want to map. For example, "Contentstack Developers."
-   **Assign Product Roles**: Assign Contentstack roles per product. For each product, such as CMS, Personalize, Agent OS, and Administration, click **Manage Roles** and select the roles this IdP group receives.

For the **Administration** product, at least one role is required. The **Member** role is selected by default and grants read-only access to organization information. Change it only when the group needs elevated access. The Administration roles include:

-   **Admin**: Full administrative access across the organization, including users, roles, and settings.
-   **Security Manager**: Manages organization security settings, SSO, System for Cross-domain Identity Management (SCIM), user access, and related configuration.
-   **Product Analytics Viewer**: Access to the Analytics application.
-   **Member**: Read-only access to organization information.

**Note:** The available products and roles depend on your Contentstack plan and the applications enabled for your organization, so your list may differ from these examples.

Next, set the following and save:

-   **Role Delimiter**: The character your IdP uses to separate roles in the assertion, such as a comma, semicolon, or space.
-   **Enable IdP Role Mapping**: Select this checkbox to turn on the feature.

**Warning:** Once IdP Role Mapping is on, a user whose assertion carries no role matching any mapping is denied sign-in through this connection. Organization owners are exempt, so a successful test as the owner does not prove that other users can sign in. Before you enable it, confirm that every group you expect to sign in has a matching mapping and that the **Role Delimiter** matches what your IdP sends.

A connection holds up to 200 role mappings.

**Note:** After you enable IdP Role Mapping, role management for your IdP users is handled from your IdP, not from Contentstack. In an organization with multiple connections, role mapping is configured per connection, and the roles applied come from the connection the user signs in through. For how IdP Role Mapping interacts with SCIM provisioning, refer to [IdP Role Mapping](/docs/administration/idp-role-mapping).

## Step 5: Test and Enable SSO

In this final step, you verify the connection works and then turn SSO on for your organization. You can also disable SSO here later.

### Test SSO

Test the connection before you enable it:

1.  Click **Test SSO**. Contentstack opens the **Login via SSO** page.
2.  Enter your organization's SSO ID, and click **Continue** to open your IdP sign-in page.
3.  Sign in. If you reach your IdP and sign in, the test succeeds and Contentstack shows a success message.

_\[Screenshot: A successful SSO test\]_

If IdP Role Mapping is enabled, the result page also shows:

-   **SSO connection established successfully**: A success message.
-   **IdP Roles received**: The roles assigned to you in your IdP.
-   **Contentstack-IdP role mapping details**: The Contentstack roles mapped to your IdP roles.

**Note:** When you test with IdP Role Mapping enabled, the test evaluates only the IdP roles of the user performing the test.

![Set_Up_SSO_6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteec943deab92fc9b/6710d95bef9edcfde917ec09/Set_Up_SSO_6.png)

### Enable SSO

Click **Enable SSO**. Once enabled, users can access the organization through SSO. You can disable SSO from the same page at any time.

_\[Screenshot: The Enable SSO confirmation\]_

After you enable SSO, the **SSO One-Click URL** appears at the top of the SSO page. Bookmark it to go straight to your organization's SSO login page.

**Note:** If you are already signed in to your IdP, the trigger\_sso\_flow=<sso\_id> query parameter signs you in to Contentstack through SSO and skips the Contentstack login page.

**Note:** If IdP Role Mapping is disabled, only users invited to the organization can access it. IdP users who have not been invited cannot sign in.

![Set_Up_SSO_7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltefb9c3f4c8701321/6710d95bb7da8002c3eb7328/Set_Up_SSO_7.png)

![Set_Up_SSO_8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd87cff359ee97f0/6710d95b9c37a306d0bb04e7/Set_Up_SSO_8.png)

### Disable SSO

After you enable SSO, the **4\. Test & Enable SSO** tab becomes **4\. Disable SSO**. Click **Disable** to turn SSO off.

![The Disable SSO tab](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am696262c2c67b82bf/38a69b23cef4358030318687/sso-08-step4-disable-and-oneclick-url.png)

Once SSO is disabled, existing users sign in with Contentstack credentials. A user without Contentstack credentials uses the **Forgot password** link on the login page to set a password.

**Note:** In an organization with more than one connection:

-   You cannot disable the primary connection while other active connections exist. To disable SSO for the whole organization, deactivate every secondary connection first, and then deactivate the primary connection.
-   Every invitation email contains a single SSO login link, the link for the primary connection. Distribute the login URL for each non-primary connection to the users who authenticate through it.

**Additional Resource:** To add more identity providers, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers). To manage connections from the Connections list, refer to [Manage SSO Connections](/docs/administration/manage-sso-connections).

![Set_Up_SSO_9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt586c437ed1da28d6/6710d95bdc82aacaee6fe248/Set_Up_SSO_9.png)

**Note:** The screenshots below were on this page before the multi-IdP rewrite and no longer have a matching step. Reposition or replace them.

![Set_Up_SSO.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd63658aa6b7e086c/6710d95bbcf8a669de1a9e9f/Set_Up_SSO.png)

![Set_Up_SSO_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt557eb5531db0d6d1/6710d95b489d5671358555f7/Set_Up_SSO_2.png)

![Set_Up_SSO_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte21a34e19a317c55/6710d95b88de8877de3e3cb5/Set_Up_SSO_3.png)
