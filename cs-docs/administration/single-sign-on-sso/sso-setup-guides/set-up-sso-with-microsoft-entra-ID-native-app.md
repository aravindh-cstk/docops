---
title: "Set up SSO with Microsoft Entra ID Native App"
description: "Learn to set up Single Sign-On in Contentstack with Microsoft Entra ID Native App. Follow our step-by-step guide for seamless integration."
url: /administration/set-up-sso-with-microsoft-entra-ID-native-app
---

# Set up SSO with Microsoft Entra ID Native App

## Set up SSO with Microsoft Entra ID Native App

**Warning:** This set up guide is deprecated. Please visit our documentation on [Set up SSO with Microsoft Azure AD](/docs/administration/set-up-sso-with-microsoft-azure-ad).

This step-by-step guide explains how to set up [single sign-on](/docs/administration/about-single-sign-on-sso) (SSO) in Contentstack with Microsoft Entra ID as your SAML 2.0 identity provider (IdP), using the Contentstack app from the Entra ID application gallery. You create a connection in Contentstack, configure the Contentstack app in Entra ID, exchange the IdP details, add users and app roles, optionally map roles, and then test and enable SSO.

You can attach up to five SAML 2.0 IdPs to a single Contentstack organization. Each IdP is a separate connection with its own certificate, session policy, role mapping, and login URL, which is useful when a parent company and an acquired subsidiary run separate Entra ID tenants. This guide walks through one connection. To add and organize more connections, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers).

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   The organization owner role, a security manager role, or a custom role with SSO write permissions in your Contentstack [organization](/docs/administration/about-organizations)
-   Microsoft Entra ID administrator access with an active Microsoft Entra ID subscription

## What You Will Learn

-   How to create a connection and generate the ACS URL in Contentstack.
-   How to configure the Contentstack app in Microsoft Entra ID as a SAML 2.0 IdP.
-   How to import Entra ID’s federation metadata into Contentstack instead of entering details by hand.
-   How to add app roles in Entra ID and map them to Contentstack roles (optional).
-   How to test and enable SSO for your organization.

## Steps to set up SSO with Microsoft Entra ID

In a nutshell, this integration requires the following steps:

1.  [Create a Connection in Contentstack](#create-a-connection-in-contentstack)
2.  [Configure Contentstack App in Microsoft Entra ID](#configure-contentstack-app-in-microsoft-entra-id)
3.  [Configure Microsoft Entra ID details in Contentstack](#configure-microsoft-entra-id-details-in-contentstack)
4.  [Add Users to Your Microsoft Entra ID Application](#add-users-to-your-microsoft-entra-id-application)
5.  [Add Users Roles in Your Application](#add-users-roles-in-your-application)
6.  [Assign Roles to Application Users for IdP Role Mapping](#assign-roles-to-application-users-for-idp-role-mapping)
7.  [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
8.  [Test and Enable SSO](#test-and-enable-sso)

Let us see each of the processes in detail.

1.  ## Create a Connection in Contentstack

    **Note:** SSO can be configured by the organization owner, a security manager, or a user with a custom role that has SSO write permissions.

    1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login), open the **App Switcher**, go to **Administration**, and then click **Single Sign-On**.
    2.  Add a connection to open the **New Connection** dialog, and enter the following details:

        -   **Connection Name**: A friendly name shown across SSO surfaces. It does not affect login URLs. For example, "Acme Employees."
        -   **SSO ID**: The unique identifier for this connection. Contentstack auto-generates it from the connection name, and you can edit it before you create the connection. Users enter it as one of the login parameters once SSO is enabled.
        -   **Description** (optional): Context about this connection, up to 400 characters.

        **Note:** The SSO ID can contain only lowercase letters, numbers (0-9), and hyphens (-). You cannot change the SSO ID after you create the connection. SSO IDs are unique across all Contentstack organizations, so a name already in use elsewhere is rejected.



        Let's use "sso-test" as the **SSO ID**.
    3.  Click **Create**.



    Contentstack opens the connection at **1\. SSO Configuration** and generates the **Assertion Consumer Service (ACS)** URL, along with read-only details such as **Entity ID**, **SAML Version**, **Attributes**, and **NameID Format**. You need these details in [Step 2](#configure-contentstack-app-in-microsoft-entra-id). Keep this window open.

    **Note:** The ACS URL contains this connection's SSO ID, so every connection in your organization has its own ACS URL. Use the ACS URL of the connection you are configuring.

    **Tip:** Instead of copying the ACS URL and Entity ID individually into Entra ID, share Contentstack's service provider (SP) metadata in one step. Use **Download Metadata XML**. If you enable SAML encryption on this connection, the downloaded metadata also carries the public certificate your IdP uses to encrypt assertions. You can download that certificate on its own from the [Contentstack public certificate](https://app.contentstack.com/public_cert.cer) link. Entra ID accepts SP metadata upload from the **Basic SAML Configuration** section. For details, refer to [Download Contentstack (SP) Metadata](/docs/administration/download-sp-metadata).

2.  ## Configure Contentstack App in Microsoft Entra ID

    **Note:** You need to be a **Microsoft Entra ID** administrator to complete the steps below.



    To configure the integration of Contentstack into **Microsoft Entra ID**, you need to add the Contentstack app in the **Microsoft Entra ID** portal.
    1.  Go to the [Microsoft Azure portal](https://portal.azure.com/), and click **Microsoft Entra ID**. ![4_SS0_Entra_MS_EntraID.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1486a8f22524038a/662a169045f9896f2ecf7182/4_SS0_Entra_MS_EntraID.png)

        **Note:** Please make sure you have an active subscription of Microsoft Entra ID before we proceed to the next step.

    2.  Click **Enterprise applications** from the left panel. ![5_SS0_Entra_Overview_EnterpriseAppl.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2e2d82a0b46f61d/662a1690bb637281d41e07ad/5_SS0_Entra_Overview_EnterpriseAppl.png)
    3.  Click **\+ New application** from the top to create a new application. ![6_SS0_Entra_EnterpriseAppl_NewApp.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6965cc1ccf059acc/662a1690ca887457f7ed4906/6_SS0_Entra_EnterpriseAppl_NewApp.png)
    4.  Go to the search box and search for the Contentstack application, and then click the Contentstack app icon that appears. ![7_SS0_Entra_MSEntraGallery.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0e84a037afc06cf3/662a1691a9b0ab3821b92d81/7_SS0_Entra_MSEntraGallery.png)
    5.  You may provide a name to your application, for example, “Contentstack SSO” and click **Create**. ![8_SS0_Entra_Contentstack_SSO.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbfaf5b4af9ab6e5f/662a169bb0544162bd9a09d7/8_SS0_Entra_Contentstack_SSO.png)
    6.  This will lead you to the **Overview** page where you will see the overview details of your application. Under the **Getting Started** section, click the **2\. Set up single sign on** card. ![9_SS0_Entra_Contentstack_SSO_Setup_SSO.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1bc5b1ef4a98cb24/662a169c107b28ef1a6c70fc/9_SS0_Entra_Contentstack_SSO_Setup_SSO.png)
    7.  On the Single sign-on page, under **Select a single sign-on method**, select the **SAML** mode to enable single sign-on. ![10_SS0_Entra_Contentstack_SSO_SAML.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb3fa0419a0c73462/662a169cc9de461c66d49b39/10_SS0_Entra_Contentstack_SSO_SAML.png)
    8.  You will be led to the **Set up Single Sign-On with SAML** page where you can perform further steps after creating your app. ![11_SS0_Entra_Contentstack_SSO_SAML_NextSteps.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt140de857be3014fd/662a169c51b16fd618c4edd4/11_SS0_Entra_Contentstack_SSO_SAML_NextSteps.png)
    9.  Click the “Edit” (pencil) icon beside the **Basic SAML Configuration** section, and add the following details:

        1.  **Identifier (Entity ID):** Enter the “Entity ID” of Contentstack, i.e., [https://app.contentstack.com](https://app.contentstack.com).
        2.  **Reply URL (Assertion Consumer Service URL)**: Enter the ACS URL that we generated in Step 1.c.

        ![12_SS0_Entra_Contentstack_SSO_SAML_Basic_Config.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb774a038202fcb1e/662a169ce7ce958be0deaeaf/12_SS0_Entra_Contentstack_SSO_SAML_Basic_Config.png)
    10.  Click **Save**.  

         Now in the **Attributes & Claims** section, you can view default or pre-set claims and their corresponding values.![13_SS0_Entra_Attributes_Claims.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d7ac94920211a31/662a169b51b16fe1cbc4edd0/13_SS0_Entra_Attributes_Claims.png)  

         Amongst the listed attributes above, the attributes email, first\_name, last\_name, and roles are mandatory, while all other attributes are optional.

         | **Name** | **Value** |
         | --- | --- |
         | first\_name | user.givenname |
         | last\_name | user.surname |
         | email | user.userprincipalname |
         | roles | user.assignedroles |

         **Note:** If you want to enable Role Mapping in Contentstack, then it is highly important to add the already set roles attributes as we need these for IdP Role Mapping, which we will cover in the next set of steps.

    11.  In the **SAML Certificates** section, click the **Download** link beside **Certificate (Base64)**. This will download and save the Base64 version of the certificate for your Contentstack app. ![14_SS0_Entra_Notifiction_Email.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7496e134e5d8f48d/662a169b45f9898115cf7186/14_SS0_Entra_Notifiction_Email.png)
    12.  If needed, edit the **Notification Email Addresses** section, change the notification email, and click **Save**. ![15_SS0_Entra_Notifiction_Email_Address.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdc059bbc3229adbc/662a16b4776d0cef2724ea5f/15_SS0_Entra_Notifiction_Email_Address.png)
    13.  Under the Set up <_app\_name_\> section, you will find important data, such as Login URL, Entra ID Identifier, and Logout URL of your Microsoft Entra ID app. This data is required when configuring the Microsoft Entra ID details in Contentstack. ![16_SS0_Entra_Setup_SSO.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte6b3d5fb49372739/662a16b4776d0cebf324ea63/16_SS0_Entra_Setup_SSO.png)
3.  ## Configure Microsoft Entra ID details in Contentstack



    Go to **2\. IdP Configuration** for this connection in Contentstack. You can provide Entra ID's details in one of three ways:

    -   **Metadata URL**: Enter the **App Federation Metadata Url** from Step 2.k and click **Fetch**. Contentstack retrieves and parses the details.
    -   **Metadata XML**: Upload the federation metadata XML you downloaded from Entra ID. Use this when network rules prevent the browser from reaching the metadata URL.
    -   **Manual entry**: Enter the Login URL and certificate by hand, as described below.

    **Tip:** Importing metadata auto-populates the Single Sign-On URL, certificate, and related fields, which reduces manual entry and errors. Signature algorithm and SAML encryption are not part of IdP metadata, so you always set those by hand. For the full procedure and error handling, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).



    To enter the details manually:

    1.  Copy the URL provided in the **Login URL** section of your Contentstack application in Microsoft Entra ID (Step 2.m), and paste it into the **Single Sign-On URL** field in Contentstack's **2\. IdP Configuration** step.
    2.  Upload the X.509 certificate that you downloaded from Microsoft Entra ID in Step 2.k into the **Certificate** field.

        **Warning:** A connection stores one signing certificate. Contentstack shows its expiry date next to the field. When your IdP switches to a new signing certificate, every SAML assertion arrives signed by a certificate Contentstack does not recognize, and sign-in through this connection fails until you upload the new certificate here. Coordinate the replacement with the switch on the IdP side rather than waiting for the current certificate to expire.

    3.  Under **Signature Algorithm**, select the algorithm Entra ID uses. Available options are SHA-1, SHA-256, and SHA-512.

        **Note:** The **Single Sign-On URL** must use HTTPS.

    4.  _(Optional)_ Turn on [SAML encryption](/docs/administration/enable-saml-encryption) to encrypt your SAML attributes. SAML encryption is configured per connection.
    5.  Click **Save**.

    **Note:** The organization owner can always sign in with Contentstack credentials, regardless of SSO status. If SSO login fails after a certificate update, the owner can sign back in and restore the previous configuration.



    Next, you need to define roles in Microsoft Entra ID that will be used to create role mapping in Contentstack.
4.  ## Add Users to Your Microsoft Entra ID Application



    After setting the necessary configurations in Contentstack, you need to add users to your newly added application.  

    To do so, you need to perform the following steps:

    1.  Navigate to **Microsoft Azure Portal** > **Entra ID application**, select **Enterprise Applications**, select **All applications**, then select your application.
    2.  Under the **Getting Started** section, click the **1\. Assign users and groups** tab. ![18_SS0_Entra_Assign_Users_Groups.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20e2d8c49bcfdceb/662a16b4107b284e616c7100/18_SS0_Entra_Assign_Users_Groups.png)
    3.  Click the **\+ Add user/group** button. ![19_SS0_Entra_Users_and_Groups.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc73e8dcb7bdf0634/662a16b4528fc1824c55c0ae/19_SS0_Entra_Users_and_Groups.png)
    4.  Click **Users and groups**. You will find a list of users whom you can add into your application. ![20_SS0_Entra_Users_and_Groups_Modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9fbf4e73ee65368d/662a16b4b054416d1f9a09db/20_SS0_Entra_Users_and_Groups_Modal.png)



    You can either select from the given list of users or you can invite and add new users by inviting them.
5.  ## Add Users Roles in Your Application

    **Note:** This is an optional step, but it”s mandatory if IdP Role Mapping is part of your Contentstack plan and you want to implement it.



    Application Roles are defined under the application's registration manifest in the Microsoft Azure portal. To add user roles, perform the following steps:

    1.  In the left navigation, click **App Registrations**, and then click **All applications**. Locate your newly created application and click it. ![21_SS0_Entra_App_Registrations.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9042e09cc7414285/662a16b5a02ad7b2fdeea711/21_SS0_Entra_App_Registrations.png)
    2.  In your application blade, click **Manifest**. You will see the JSON representation of your application. ![22_SS0_Entra_Manifest.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1867a1a5a54bcb0e/662a16c8c9de4649e4d49b3f/22_SS0_Entra_Manifest.png)  

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
    3.  Save the manifest.



    You will be able to see all the roles that you created when you assign them to your application users.
6.  ## Assign Roles to Application Users for IdP Role Mapping

    **Note:** This is an optional step, but it is mandatory if [IdP Role Mapping](/docs/administration/idp-role-mapping) is part of your Contentstack plan and you want to implement it.



    This is an alternate way of managing users and permissions of your SSO-enabled organization. Performing this step lets you map your IdP roles to Contentstack roles while configuring SSO for your Contentstack organization.  

    To assign roles to application users, perform the following steps:

    1.  Navigate to **Azure Entra ID application**, select **Enterprise Applications**, select **All applications**, then select your application.
    2.  Under the **Getting Started** section, click the **1\. Assign users and groups** tab.
    3.  To add a new user with a role, click the **\+ Add User** button.
    4.  Click **Users and groups**. You will find a list of users whom you can add into your application.
    5.  Next, click **Select Role** in the **Add Assignment** page of your application. In the **Select Role** panel on the right, you will see the role you created (in our case, developer).
    6.  Assign the selected role to the application user.



    You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the User Management section of your Contentstack SSO settings.
7.  ## Create Role Mappings in Contentstack



    Go to **3\. User Management** to define how users access your SSO-enabled organization through this connection. This step covers **Strict Mode**, **User Email Whitelists**, **Session Time-Out**, and **Advanced Settings**.

    1.  **Strict Mode**: Enable [Strict Mode](/docs/administration/set-up-sso-in-contentstack#strict-mode) if you do not want any user to access the organization without SSO login.

        **Note:** Strict mode is set per connection, but it takes effect across the whole organization. If any **enabled** connection has strict mode on, the entire organization is SSO-only. Because of this, only one connection can hold the strict mode toggle at a time, and enabling strict mode on one connection disables the toggle on the others. Disabling a connection that has strict mode on removes strict mode for the organization, because a disabled connection does not contribute to the organization's strict state.

    2.  **User Email Whitelists**: Lets specified users access APIs even when strict mode is enabled. This setting is organization-scoped and applies only when strict mode is enabled, so the field appears only under the **User Management** step of the connection that has strict mode enabled. Enter up to 100 email addresses separated by commas, for example, user1@example.com, user2@example.com. Each address must belong to an accepted, non-owner member of the organization.

        **Note:** This is a plan-based feature. For access, contact our [support](mailto:support@contentstack.com) team.

    3.  **Session Time-Out**: The [Session Time-Out](/docs/administration/set-up-sso-in-contentstack#session-time-out) option lets you define the session duration for a user signed in through this connection. The default is 12 hours, and you can set any value between 1 and 24 hours. This setting applies per connection.
    4.  **Advanced Settings**: Click [Advanced Settings](/docs/administration/set-up-sso-in-contentstack#advanced-settings) to expand the **IdP Role Mapping** section and map Entra ID roles to Contentstack roles.

        **Note:** You will only be able to view and perform this step if IdP Role Mapping is part of your Contentstack plan.

        1.  In the **Add Role Mapping** section, click **Add Role Mapping** to add the mapping details of an IdP role. The details include the following:

            -   **IdP Role Identifier**: Enter the IdP group or role identifier, for example, "developer." Use the value from your manifest.
            -   **Assign Product Roles**: Assign Contentstack roles per product. For each product, such as CMS, Personalize, Agent OS, and Administration, click **Manage Roles** and select the roles this IdP group receives. For the **Administration** product, at least one role is required, and the **Member** role is selected by default.

            **Note:** The available products and roles depend on your Contentstack plan and the applications enabled for your organization.



            Likewise, you can add more role mappings, up to 200 per connection. To add a new role mapping, click **Add Role Mapping** and enter the details.
        2.  Keep **Role Delimiter** blank, as Microsoft Entra ID usually returns roles in an array.
        3.  Turn on the **Enable IdP Role Mapping** toggle to enable the feature.

            **Warning:** Once IdP Role Mapping is on, a user whose assertion carries no role matching any mapping is denied sign-in through this connection. Organization owners are exempt, so a successful test as the owner does not prove that other users can sign in. Before you enable it, confirm that every group you expect to sign in has a matching mapping and that the **Role Delimiter** matches what your IdP sends.

        4.  Click **Next** to continue.

    **Note:** Role mapping is configured per connection. The roles applied to a user come from the connection that user signed in through, not from the union of every connection in the organization. For how IdP Role Mapping interacts with SCIM provisioning, refer to [IdP Role Mapping](/docs/administration/idp-role-mapping).

8.  ## Test and Enable SSO



    Next, you can try out the "Test SSO" and "Enable SSO" steps in Contentstack.

    ### Test SSO



    Before enabling this connection, it is recommended that you test the settings configured so far. To do so, perform the following steps:

    1.  Click **Test SSO**. Contentstack opens the **Login via SSO** page, where you specify this connection's SSO ID.
    2.  Click **Continue** to go to your IdP sign-in page.
    3.  Sign in to your account. If you are able to sign in to your IdP, your test is successful.



    If you have enabled IdP Role Mapping, you will find the following details on a new page:

    -   **SSO connection established successfully**: A success message is displayed.
    -   **IdP roles received**: The list of all the roles assigned to you in your IdP.
    -   **Contentstack-IdP role mapping details**: The details of all the Contentstack roles mapped to your IdP roles.



    Click **Close**. Now, you can safely enable this connection.

    **Note:** While testing with IdP Role Mapping enabled, the test is performed only for the IdP roles of the currently signed-in user.

    ### Enable SSO



    Once you have tested your settings, click **Enable SSO** to enable this connection. Confirm your action by clicking **Yes**.  

    Once enabled, users can access the organization through this connection. You can disable it from the same page at any time.

    **Note:** The first connection you enable becomes the organization's primary connection. In an organization with more than one connection:

    -   Every organization invitation email contains a single SSO login link, the one for the primary connection. Distribute the login URL of each non-primary connection to the users who authenticate through it.
    -   You cannot disable the primary connection while other active connections exist. To turn off SSO for the whole organization, disable every secondary connection first, and then disable the primary connection.



    For the full set of connection actions, refer to [Manage SSO Connections](/docs/administration/manage-sso-connections).
