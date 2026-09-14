---
title: "Set up SSO with Microsofts Azure AD"
description: "Set up single sign-on in Contentstack with Microsoft Azure Active Directory as your SAML 2.0 identity provider, as one of up to five IdP connections."
url: /administration/set-up-sso-with-microsoft-azure-ad
---

# Set up SSO with Microsofts Azure AD

## Set up SSO with Microsoft Azure AD

This step-by-step guide explains how to set up [single sign-on](/docs/administration/about-single-sign-on-sso) (SSO) in Contentstack with Microsoft Azure Active Directory (AD) as your SAML 2.0 identity provider (IdP). You create a connection in Contentstack, register and configure the Contentstack app in Azure AD, exchange the IdP details, add users and app roles, optionally map roles, and then test and enable SSO.

You can attach up to five SAML 2.0 IdPs to a single Contentstack organization. Each IdP is a separate connection with its own certificate, session policy, role mapping, and login URL, which is useful when a parent company and an acquired subsidiary run separate Azure AD tenants. This guide walks through one connection. To add and organize more connections, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers).

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   The organization owner role, a security manager role, or a custom role with SSO write permissions in your Contentstack [organization](/docs/administration/about-organizations)
-   Microsoft Azure AD administrator account

## What You Will Learn

-   How to create a connection and generate the ACS URL in Contentstack.
-   How to register and configure the Contentstack app in Microsoft Azure AD as a SAML 2.0 IdP.
-   How to import Azure AD's federation metadata into Contentstack instead of entering details by hand.
-   How to add users and app roles in Azure AD and map them to Contentstack roles (optional).
-   How to test and enable SSO for your organization.

## Steps to Set up SSO with Microsoft Azure AD

In a nutshell, this integration requires the following steps:

1.  [Create a Connection in Contentstack](#create-a-connection-in-contentstack)
2.  [Configure Contentstack App in Microsoft Azure AD](#configure-contentstack-app-in-microsoft-azure-ad)
3.  [Configure Microsoft Azure AD details in Contentstack](#configure-microsoft-azure-ad-details-in-contentstack)
4.  [Add Users to Your Microsoft Azure AD Application](#add-users-to-your-microsoft-azure-ad-application)
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



    Contentstack opens the connection at **1\. SSO Configuration** and generates the **Assertion Consumer Service (ACS)** URL, along with read-only details such as **Entity ID**, **SAML Version**, **Attributes**, and **NameID Format**. You need these details in [Step 2](#configure-contentstack-app-in-microsoft-azure-ad). Keep this window open.

    **Note:** The ACS URL contains this connection's SSO ID, so every connection in your organization has its own ACS URL. Use the ACS URL of the connection you are configuring.

    **Tip:** Instead of copying the ACS URL and Entity ID individually into Azure AD, share Contentstack's service provider (SP) metadata in one step. Use **Download Metadata XML**. If you enable SAML encryption on this connection, the downloaded metadata also carries the public certificate your IdP uses to encrypt assertions. You can download that certificate on its own from the [Contentstack public certificate](https://app.contentstack.com/public_cert.cer) link. Azure AD accepts SP metadata upload from the **Basic SAML Configuration** section. For details, refer to [Download Contentstack (SP) Metadata](/docs/administration/download-sp-metadata).

2.  ## Configure Contentstack App in Microsoft Azure AD

    **Note:** You need to be a Microsoft Azure AD administrator to complete the steps below.

    1.  To configure the integration of Contentstack into Microsoft Azure AD, you need to add the Contentstack app. Go to the Microsoft Azure portal, and click the **Azure Active Directory** tab.  

        ![Click_on_Azure_Active_Directory.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb06ad172bd331035/5f461e99fb60b1668c21d6ad/Click_on_Azure_Active_Directory.png)
    2.  Click **Enterprise Applications** on the left panel, and click **\+ New application** at the top.  

        ![Click_on_Newapplication.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1a8138f1176f5152/5f46221d70ca0f65ba10949a/Click_on_Newapplication.png)
    3.  Click **Non-gallery application** to create a new application that is not already present in the gallery.  

        ![Click_on_Non_gallery_application.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd3e2e3168d687482/5f46221dba13f249213fb7d7/Click_on_Non_gallery_application.png)
    4.  Provide a name for your app, for example, "test-sso," and click **Add**.

        **Tip:** In an organization with more than one connection, name each Azure AD app after the Contentstack connection it serves, for example "Contentstack (Acme Employees)." This keeps the app-to-connection pairing clear across tenants.



        ![Name_for_your_Azure_app.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb55a68f63ff089fc/5f46221e2ecc864927d8c4c7/Name_for_your_Azure_app.png)
    5.  This will lead you to the **Overview** page. Under the **Getting Started** section, click the **2\. Set up single sign on** tab.  

        ![Click_on_the_2_Set_up_single_sign_on_tab.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt51233ef8c91efb45/5f46221eb008d84afeba69be/Click_on_the_2_Set_up_single_sign_on_tab.png)
    6.  On the **Select a single sign-on method** page, select the **SAML** mode to enable single sign-on.  

        ![Select_SAML_as_the_Single_sign_on_method.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt756f6943548f8196/5f46224470ca0f65ba10949e/Select_SAML_as_the_Single_sign_on_method.png)
    7.  You will be led to the **Set up Single Sign-On with SAML** page.  

        ![Set_up_Single_Sign-On_with_SAML.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte3167e522b32f690/5f462244a9d4814afda14279/Set_up_Single_Sign-On_with_SAML.png)
    8.  Click the "Edit" (pencil) icon beside the **Basic SAML Configuration** section, and add the following details:

        -   **Identifier (Entity ID)**: Enter the Entity ID of Contentstack, that is, https://app.contentstack.com.
        -   **Reply URL (Assertion Consumer Service URL)**: Enter the ACS URL generated for this connection in Step 1.c.



        ![Basic_SAML_Configuration.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2bc9970d19ce8eed/5f461e99b008d84afeba69ba/Basic_SAML_Configuration.png)
    9.  Next, edit the **User Attributes & Claims** section. Under **Claim Name**, you will see the primary claim, **Unique User Identifier (Name ID)**, with the claim **Value** set to **user.userprincipalname \[nameid-format:emailAddress\]**. Delete the default attributes under **Additional claims**. You will add your own set of attributes.  

        ![Manage_claim_Unique_User_Identifier.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2cecc279d92f2de5/5f46221e185efb660c1ca38b/Manage_claim_Unique_User_Identifier.png)  

        ![New_Attributes_in_User_Attributes_&_Claims.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt69f4806a1cf28e52/5f46221e79723565b971b21a/New_Attributes_in_User_Attributes_&_Claims.png)
    10.  To add your attributes, click **\+ Add new claim**.
    11.  On the **Manage claim** page, enter first\_name under **Name**, select **user.givenname** under the **Source** attribute, and click **Save**. Similarly, add the following attributes:

         | Name | Value |
         | --- | --- |
         | last\_name | **user.surname** |
         | email | **user.userprincipalname** |
         | roles | **user.assignedroles** |



         If you want to enable role mapping in Contentstack, it is important to add the roles attribute, which is required for IdP Role Mapping covered in the next set of steps.  

         ![Add_first_name_attribute.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdd111dd740800e64/5f461e92fb60b1668c21d6a9/Add_first_name_attribute.png)  

         ![Add_roles_attribute_for_idp_role_mapping.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltce12e7b1f456093c/5f461e94a11538653ea57e88/Add_roles_attribute_for_idp_role_mapping.png)  

         ![New_Attributes_in_User_Attributes_&_Claims.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt69f4806a1cf28e52/5f46221e79723565b971b21a/New_Attributes_in_User_Attributes_&_Claims.png)
    12.  In the **SAML Signing Certificate** section, click the **Download** link beside **Certificate (Base64)**. This downloads the Base64 version of the certificate for your Contentstack app. Copy the **App Federation Metadata Url** from the same section if you plan to import metadata instead.  

         If needed, edit the **Notification Email Addresses** section, change the notification email, and click **Save**.  

         ![Change_notification_email.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta2005ad9e8a8ab1a/5f461e98c0e5e047f9386c88/Change_notification_email.png)
    13.  Under the **Set up <**_**app\_name**_**\>** section, you will find important data, such as **Login URL**, **Azure AD Identifier**, and **Logout URL** of your Microsoft Azure AD app. This data is required when configuring the Microsoft Azure AD details in Contentstack.
3.  ## Configure Microsoft Azure AD details in Contentstack



    Go to **2\. IdP Configuration** for this connection in Contentstack. You can provide Azure AD's details in one of three ways:

    -   **Metadata URL**: Enter the **App Federation Metadata Url** from Step 2.l and click **Fetch**. Contentstack retrieves and parses the details.
    -   **Metadata XML**: Upload the federation metadata XML you downloaded from Azure AD. Use this when network rules prevent the browser from reaching the metadata URL.
    -   **Manual entry**: Enter the Login URL and certificate by hand, as described below.

    **Tip:** Importing metadata auto-populates the Single Sign-On URL, certificate, and related fields, which reduces manual entry and errors. Signature algorithm and SAML encryption are not part of IdP metadata, so you always set those by hand. For the full procedure and error handling, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).



    To enter the details manually:

    1.  Copy the URL provided in the **Login URL** section of your Contentstack application in Microsoft Azure AD, and paste it into the **Single Sign-On URL** field in Contentstack's **2\. IdP Configuration** step.
    2.  Upload the X.509 certificate that you downloaded from Microsoft Azure AD in Step 2.l into the **Certificate** field.

        **Warning:** A connection stores one signing certificate. Contentstack shows its expiry date next to the field. When your IdP switches to a new signing certificate, every SAML assertion arrives signed by a certificate Contentstack does not recognize, and sign-in through this connection fails until you upload the new certificate here. Coordinate the replacement with the switch on the IdP side rather than waiting for the current certificate to expire.

    3.  Under **Signature Algorithm**, select the algorithm Azure AD uses. Available options are SHA-1, SHA-256, and SHA-512.

        **Note:** The **Single Sign-On URL** must use HTTPS.

    4.  _(Optional)_ Turn on [SAML encryption](/docs/administration/enable-saml-encryption) to encrypt your SAML attributes. SAML encryption is configured per connection.
    5.  Click **Save**.

    **Note:** The organization owner can always sign in with Contentstack credentials, regardless of SSO status. If SSO login fails after a certificate update, the owner can sign back in and restore the previous configuration.



    Next, you need to define roles in Microsoft Azure AD that will be used to create role mapping in Contentstack.
4.  ## Add Users to Your Microsoft Azure AD Application



    After setting the necessary configurations in Contentstack, you need to add users to your newly added application.

    1.  Navigate to **Azure Active Directory**, select **Enterprise Applications**, select **All applications**, and then select your application.
    2.  Under the **Getting Started** section, click the **1\. Assign users and groups** tab.  

        ![Click_on_the_1_Assign_users_and_groups_tab.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltee694dc56a6898c6/5f46221ec0e5e047f9386cb8/Click_on_the_1_Assign_users_and_groups_tab.png)
    3.  Click the **\+ Add user** button.  

        ![Click_on_Add_User.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blteb21dd3d2f83d543/5f461e9979723565b971b1f0/Click_on_Add_User.png)
    4.  Click **Users and groups**. You will find a list of users whom you can add to your application.  

        ![Select_users_under_Users_and_groups.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt55e246fb68499795/5f4622442a722a66860bd804/Select_users_under_Users_and_groups.png)



    You can either select from the given list of users or invite and add new users.

    **Note:** Assign only the users who authenticate through this connection. In an organization with more than one connection, a user is identified by email address across every IdP, and the same email cannot map to different users in different IdPs.

5.  ## Add Users Roles in Your Application

    **Note:** This is an optional step, but it is mandatory if IdP Role Mapping is part of your Contentstack plan and you want to implement it.



    Application roles are defined under the application's registration manifest in the Microsoft Azure portal. To add user roles, perform the following steps:
    1.  In the left navigation, click **App Registrations**, and click **All applications**. Locate your newly created application and click it.  

        ![Click_on_App_registrations.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2a13bd5be65ef3d9/5f461e9970ca0f65ba109486/Click_on_App_registrations.png)
    2.  In your application blade, click **Manifest**. You will see the JSON representation of your application.  

        Add the following code snippet of a new role under appRoles:  

        {"allowedMemberTypes": \["User"\],"description": "Developer Role","displayName": "Developer","id": "18d14569-c3bd-439b-9a66-3a2aee02f15f","isEnabled": true,"value": "developer"}  

        The value provided to the value parameter is what you add in the IdP Role Mapping section of Contentstack. All the values provided in this snippet are user-defined.  

        For adding multiple roles, create similar snippets with the required role details.  

        ![Add_roles_under_Manifest.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltcbefb37792c607cb/5f461e9679723565b971b1ec/Add_roles_under_Manifest.png)
    3.  Save the manifest.
6.  ## Assign Roles to Application Users for IdP Role Mapping

    **Note:** This is an optional step, but it is mandatory if [IdP Role Mapping](/docs/administration/idp-role-mapping) is part of your Contentstack plan and you want to implement it.



    To assign roles to application users, perform the following steps:

    1.  Navigate to **Azure Active Directory**, select **Enterprise Applications**, select **All applications**, and then select your application.
    2.  Under the **Getting Started** section, click the **1\. Assign users and groups** tab.
    3.  To add a new user with a role, click the **\+ Add User** button.
    4.  Click **Users and groups**. You will find a list of users whom you can add to your application.
    5.  Click **Select Role** on the **Add Assignment** page. In the **Select Role** panel on the right, you will see the role you created (in our case, developer).
    6.  Assign the selected role to the application user.



    You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **3\. User Management** step of this connection.
7.  ## Create Role Mappings in Contentstack



    Go to **3\. User Management** to define how users access your SSO-enabled organization through this connection. This step covers **Strict Mode**, **User Email Whitelists**, **Session Time-Out**, and **Advanced Settings**.

    1.  **Strict Mode**: Enable [Strict Mode](/docs/administration/set-up-sso-in-contentstack#strict-mode) if you do not want any user to access the organization without SSO login.

        **Note:** Strict mode is set per connection, but it takes effect across the whole organization. If any **enabled** connection has strict mode on, the entire organization is SSO-only. Because of this, only one connection can hold the strict mode toggle at a time, and enabling strict mode on one connection disables the toggle on the others. Disabling a connection that has strict mode on removes strict mode for the organization, because a disabled connection does not contribute to the organization's strict state.

    2.  **User Email Whitelists**: Lets specified users access APIs even when strict mode is enabled. This setting is organization-scoped and applies only when strict mode is enabled, so the field appears only under the **User Management** step of the connection that has strict mode enabled. Enter up to 100 email addresses separated by commas, for example, user1@example.com, user2@example.com. Each address must belong to an accepted, non-owner member of the organization.

        **Note:** This is a plan-based feature. For access, contact our [support](mailto:support@contentstack.com) team.

    3.  **Session Time-Out**: The [Session Time-Out](/docs/administration/set-up-sso-in-contentstack#session-time-out) option lets you define the session duration for a user signed in through this connection. The default is 12 hours, and you can set any value between 1 and 24 hours. This setting applies per connection.
    4.  **Advanced Settings**: Click [Advanced Settings](/docs/administration/set-up-sso-in-contentstack#advanced-settings) to expand the **IdP Role Mapping** section and map Azure AD roles to Contentstack roles.

        **Note:** You will only be able to view and perform this step if IdP Role Mapping is part of your Contentstack plan.

        1.  In the **Add Role Mapping** section, click **Add Role Mapping** to add the mapping details of an IdP role. The details include the following:

            -   **IdP Role Identifier**: Enter the IdP group or role identifier, for example, "developer." Use the value from your manifest.
            -   **Assign Product Roles**: Assign Contentstack roles per product. For each product, such as CMS, Personalize, Agent OS, and Administration, click **Manage Roles** and select the roles this IdP group receives. For the **Administration** product, at least one role is required, and the **Member** role is selected by default.

            **Note:** The available products and roles depend on your Contentstack plan and the applications enabled for your organization.



            Likewise, you can add more role mappings, up to 200 per connection. To add a new role mapping, click **Add Role Mapping** and enter the details.
        2.  Keep **Role Delimiter** blank, as Microsoft Azure AD usually returns roles in an array.
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

**Additional Resource:** To add more identity providers, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers). To import Azure AD's federation metadata instead of entering details by hand, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).
