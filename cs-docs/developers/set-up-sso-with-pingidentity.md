---
title: "[Security Management] - Set up SSO with PingIdentity"
description: Step-by-step guide to set up Single Sign-On (SSO) in Contentstack with PingIdentity as your SAML 2.0 Identity Provider (IdP).
url: https://www.contentstack.com/docs/developers/set-up-sso-with-pingidentity
product: Contentstack
doc_type: security-management-guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-26
---

# [Security Management] - Set up SSO with PingIdentity

This page explains how to set up Single Sign-On (SSO) in Contentstack using PingIdentity as a SAML 2.0 Identity Provider (IdP). It is intended for Contentstack organization owners/admins and PingIdentity administrators who need to configure and enable SSO (including optional IdP role mapping) for an organization.

## Set up SSO with PingIdentity

This step-by-step guide explains how to set up [Single Sign-On](./single-sign-on.md) in Contentstack with PingIdentity as your SAML 2.0 Identity Provider (IdP).

To do so, this integration requires the following steps:
- [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
- [Configure Contentstack App in PingIdentity](#configure-contentstack-app-in-pingidentity)
- [Configure PingIdentity details in Contentstack](#configure-pingidentity-details-in-contentstack)
- [Add application to user groups for IdP Role Mapping](#add-application-to-user-groups-for-idp-role-mapping)
- [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
- [Test and Enable SSO](#test-and-enable-sso)

## Create SSO Name and ACS URL in Contentstack

Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the “Organization Settings” page, and click on **Single Sign-On**.![Set_up_SSo_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt502bf146eb3bd724/60df37a5c8e01a3013e5f574/Set_up_SSo_1_highlighted.png)
- Enter an **SSO name** of your choice, and click **Create**. For example, if your company name is “Acme, Inc.” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in.  
  **Note:** The SSO Name once created, cannot be changed. It can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).

Let's use “sso-test” as the **SSO Name**.
- This will generate **Assertion Consumer Service (ACS)** URL and other details such as **Entity ID**, **Attributes,** and **NameID** Format. These details will be used in Step 2 for configuring the Contentstack app in PingIdentity.![PingIdentity_3.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt48ad8010a3a472db/61780229c05249199df1912c/PingIdentity_3.png)  
  Keep this window open, as you may need these details for setting up the Contentstack app in PingIdentity.

## Configure Contentstack App in PingIdentity

**Note:**: You will need to be a PingIdentity administrator to complete the below steps.

Log into your PingIdentity Admin account, and click on **Connections** on the left navigation panel.![PingIdentity_connection.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3ae49d850a212dbf/617803193ce65615842b3eeb/PingIdentity_connection.png)
- Click on the “Add Application” plus icon.![PingIdentity_add_connection.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6cfbd233989a204d/6178033a2d2c9113dd588b23/PingIdentity_add_connection.png)
- Next, under **SELECT AN APPLICATION TYPE**, click on **WEB APP**.![PingIdentity_add_connection_webapp.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt29498b355cfb8ebf/6178035a2378d322b0633606/PingIdentity_add_connection_webapp.png)
- Choose the connection type as SAML and click on **Configure**.![PingIdentity_add_connection_webapp_saml.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt20070a3fc01e01e9/61780377c2de5e0b3c33bdff/PingIdentity_add_connection_webapp_saml.png)
- Within the **Create App Profile** page, provide the appropriate **APPLICATION NAME** and click **Next**.![PingIdentity_connection_create_app_profile.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt81df08d8ed6a9fe7/617803b42378d322b063360a/PingIdentity_connection_create_app_profile.png)
- On the **Configure SAML Connection** page, perform the following steps:  
  Select the **Manually Enter** option.
- Under **ACS URLS**, copy the Assertion Consumer Service URL from SSO configurations in Contentstack.
- Set the Signing algorithm to **RSA_SHA256** and download the signing certificate in Pem(.crt) format.![PingIdentity_SAML_2.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4f37c348f1a85cc9/6178043d3ce65615842b3efb/PingIdentity_SAML_2.png)
- **Copy the “Entity Id” from Contentstack and pass it under ENTITY ID**.
- Set the **ASSERTION VALIDITY DURATION (IN SECONDS)** to **60**.
- Click **Save and Continue**.
- On the **Attribute Mapping** screen, set the attributes as shown below, and click **Save and Close**.![PingIdentity_Attribute_mapping.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1ddc033e10027ff6/6178047ec2de5e0b3c33be0d/PingIdentity_Attribute_mapping.png)
- Enable the created application by using the toggle button.![PingIdentity_enable.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb6f64bcb4e0dd148/617804ab16d29a13daa7ae4e/PingIdentity_enable.png)

## Configure PingIdentity details in Contentstack

Head to the Contentstack SSO setup screen.
- Under the **IdP Configuration** tab, copy the **SINGLE SIGNON SERVICE** url from PingIdentity application Configuration to **Single Sign-On Url*** and upload the certificate that we had downloaded in **step 2.f**.![PingIdentity_4.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt647047f424fdbc91/617804fa2a814718581acdc2/PingIdentity_4.png)
- Head to the **User Management** screen and click **Next**.

## Add application to user groups for IdP Role Mapping

After setting the necessary configurations in Contentstack, you need to assign the newly added application to your users.

Create a group that corresponds to Contentstack roles in PingIdentity, say “ContentManager”.

In your PingIdentity admin account, click on the **Identities** icon on the left navigation panel.![PingIdentity_Identities.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt24e70d462cb31415/617805ccb3a3022432637555/PingIdentity_Identities.png)
- Select **Groups**, and click on the “Add Group” plus icon.![PingIdentity_groups.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltfffd36639ea32843/617805e1c05249199df19152/PingIdentity_groups.png)
- In the **Create New Group** form that opens up, enter the details as shown below, click **Finish & Save**.![PingIdentity_groups_2.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt26eb687d7c3a6266/61780601da668e199e76477a/PingIdentity_groups_2.png)
- You can add users to this group from within the **Members** tab.![PingIdentity_members.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltab264e38df6f2042/61780620412fb409f16bf599/PingIdentity_members.png)
- Once done, click on the “Connections” tab and expand the application that you have configured.![PingIdentity_24.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4e3b594a95f2445c/617806562d2c9113dd588b45/PingIdentity_24.png)
- Select the **Attribute Mappings** tab and click on the “Edit” icon.![PingIdentity_attribute_mapping_2.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb1aefd5f02d3286a/61780675b3a302243263755d/PingIdentity_attribute_mapping_2.png)
- Click on **+ ADD ATTRIBUTE**, enter the details as shown below, and click **Save and Close**.![PingIdentity_Attribute_mapping.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0b2c9903d363d17c/617806d02d2c9113dd588b49/PingIdentity_Attribute_mapping.png)  
  You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **3. User Management** section of your Contentstack SSO settings and perform **Step 5**.

## Create Role Mappings in Contentstack

In the **User Management** section, you will see the following steps:

**Strict Mode**: Enable **Strict Mode **if you do not want any users to access the organization without SSO login.
- **Session Timeout**: The [**Session Timeout**](./single-sign-on/set-up-sso-in-contentstack.md#session-timeout) option lets you define the session duration for a user signed in through SSO. While the default is set to 12 hours, you can modify it as needed.
- ** Advanced Settings**: Click on the [advanced settings](./single-sign-on/set-up-sso-in-contentstack.md#advanced-settings) to expand the IdP Role Mapping section to map IdP roles to Contentstack.[/docs/developers/single-sign-on/set-up-sso-in-contentstack#advanced-settings](./single-sign-on/set-up-sso-in-contentstack.md#advanced-settings)  
  In the **Add Role Mapping** section, click on the **+ ADD ROLE MAPPING** link to add new IdP role mapping and enter the following details:  
  **IdP Role Identifier**: Enter the IdP group/role identifier, for example, “Contentstack Developers.”
- **Organization Role**: Assign either the **Admin or Member **role to the mapped group/role.
- **Stack Roles ***(optional)*: Assign [stacks](./set-up-stack/about-stack.md) as well as the corresponding stack-level roles to this role.![PingIdentity_6.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt08b507e32250038a/6178071916d29a13daa7ae62/PingIdentity_6.png)

Likewise, you can add more role mappings for your Contentstack organization. To add a new Role mapping, click on **+ ADD ROLE MAPPING** and enter the details.
- Keep **Role Delimiter** blank.
- Finally, check the **Enable IdP Role Mapping** checkbox to enable the feature.
- **Save** and click on **Next** to continue further.

While some details about these steps are given below, you can refer to our [general SSO guide](./single-sign-on.md) for more information.

## Test and Enable SSO

Next, you can try out the “Test SSO” and “Enable SSO” steps in Contentstack

### Test SSO

Before enabling SSO, it is recommended that you test the SSO settings configured so far. To do so, perform the following steps:

Click on the **Test SSO** button and it will take you to Contentstack’s **Login Via SSO** page, where you need to specify your organization SSO name.
- Then, click on **Continue** to go to your IdP sign in page.
- Sign in to your account. If you are able to sign in to your IdP, your test is successful.On successful connection, you will see a success message as follows![Set_up_SSo_10_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltcda07901cf6eb3e6/60df38173b10992ed7acbb72/Set_up_SSo_10_no_highlight.png)
- But, if you have enabled IdP Role Mapping, you’ll find the following details in a new page:![PingIdentity_7.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt46089ff8b3a8d025/617807bcda668e199e764788/PingIdentity_7.png)

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

### Do I need admin access in PingIdentity to complete this setup?
Yes. **Note:**: You will need to be a PingIdentity administrator to complete the below steps.

### Where do I find the ACS URL and Entity ID needed for PingIdentity?
This will generate **Assertion Consumer Service (ACS)** URL and other details such as **Entity ID**, **Attributes,** and **NameID** Format.

### Can the SSO Name be changed after creation?
**Note:** The SSO Name once created, cannot be changed.

### What happens if I enable Strict Mode?
**Strict Mode**: Enable **Strict Mode **if you do not want any users to access the organization without SSO login.

