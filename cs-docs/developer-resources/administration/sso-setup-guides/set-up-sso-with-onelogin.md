---
title: "Set up SSO with OneLogin"
description: "Set up single sign-on in Contentstack with OneLogin as your SAML 2.0 identity provider, as one of up to five IdP connections in an organization."
url: /administration/set-up-sso-with-onelogin
uid: blta125cf07d352661c
---

# Set up SSO with OneLogin

## Set up SSO with OneLogin

This step-by-step guide explains how to set up [single sign-on](/docs/administration/about-single-sign-on-sso) (SSO) in Contentstack with OneLogin as your SAML 2.0 identity provider (IdP). You create a connection in Contentstack, set up the Contentstack app in OneLogin, exchange the IdP details, add users and roles, optionally map roles, and then test and enable SSO.

You can attach up to five SAML 2.0 IdPs to a single Contentstack organization. Each IdP is a separate connection with its own certificate, session policy, role mapping, and login URL. This guide walks through one connection. To add and organize more connections, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers).

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   OneLogin administrator account
-   The organization owner role, a security manager role, or a custom role with SSO write permissions in your Contentstack [organization](/docs/administration/about-organizations)

## What You Will Learn

-   How to create a connection and generate the ACS URL in Contentstack.
-   How to configure the Contentstack app in OneLogin as a SAML 2.0 IdP.
-   How to import OneLogin's metadata into Contentstack instead of entering details by hand.
-   How to map OneLogin roles to Contentstack roles (optional).
-   How to test and enable SSO for your organization.

## Steps to Set up SSO with OneLogin

This integration requires the following steps:

1.  [Create a Connection in Contentstack](#create-a-connection-in-contentstack)
2.  [Configure Contentstack App in OneLogin](#configure-contentstack-app-in-onelogin)
3.  [Configure OneLogin details in Contentstack](#configure-onelogin-details-in-contentstack)
4.  [Manage users access control in OneLogin](#manage-users-access-control-in-onelogin)
    1.  [Add application to users](#a-add-application-to-users)
    2.  [Add application to user groups for IdP Role Mapping](#b-add-application-to-user-groups-for-idp-role-mapping)
5.  [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
6.  [Test and Enable SSO](#test-and-enable-sso)

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

    Contentstack opens the connection at **1\. SSO Configuration** and generates the **Assertion Consumer Service (ACS)** URL, along with read-only details such as **Entity ID**, **SAML Version**, **Attributes**, and **NameID Format**. You need these details in [Step 2](#configure-contentstack-app-in-onelogin). Keep this window open.

    **Note:** The ACS URL contains this connection's SSO ID, so every connection in your organization has its own ACS URL. Use the ACS URL of the connection you are configuring.

    **Tip:** Instead of copying the ACS URL and Entity ID individually into OneLogin, share Contentstack's service provider (SP) metadata in one step. Use **Download Metadata XML**. If you enable SAML encryption on this connection, the downloaded metadata also carries the public certificate your IdP uses to encrypt assertions. You can download that certificate on its own from the [Contentstack public certificate](https://app.contentstack.com/public_cert.cer) link. For details, refer to [Download Contentstack (SP) Metadata](/docs/administration/download-sp-metadata).

2.  ## Configure Contentstack App in OneLogin

    **Note:** You need to be a OneLogin administrator to complete the steps below.

    1.  Log in to your OneLogin Admin account, click the **APPS** tab, and click **ADD APP** in the top right corner.
    2.  From the applications displayed on the page, use the **SAML Test Connector (IdP)** application. ![onelogin-add-app.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7a27f745cf5afb2b/5f467abfc0e5e047f9386ea8/onelogin-add-app.png)
    3.  Set the **Display Name** for your Contentstack application, for example, "Contentstack," and click **Save**.

        **Tip:** In an organization with more than one connection, name each OneLogin app after the Contentstack connection it serves, for example "Contentstack (Acme Employees)."

        ![onelogin-configuration-step-1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9bc14deff336d42c/5f467abf2a722a66860bd9df/onelogin-configuration-step-1.png)
    4.  In Contentstack, copy the **Assertion Consumer Service URL** generated for this connection in Step 1. 
    5.  Click the **Configuration** tab, and paste the ACS URL into the **ACS (Consumer) URL Validator** field in OneLogin. Paste the same value into the **ACS (Consumer) URL** field as well. ![onelogin-configuration-step-2-a.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltce0a3228389e0a86/5f467abfa5031b4a3bba8c94/onelogin-configuration-step-2-a.png)
    6.  Go to the **Parameters** tab and add parameters. By default, the first parameter is **NameID**. Set its value to **Email** by clicking the parameter and selecting it from the dropdown. ![onelogin-configuration-step-2-b.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7f98768306f8cba3/5f467abf3c3c0b6617212bcb/onelogin-configuration-step-2-b.png)
    7.  Click **Add parameter**, add a parameter named **first\_name**, select the **Include in SAML assertion** checkbox, and click **Save**. ![onelogin-configuration-step-3.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta025f3e144f1b114/5f467abf0341654a3a76ea8c/onelogin-configuration-step-3.png)
    8.  Assign a value for the created field. Click the **Value** dropdown, select **First Name**, and click **Save**. Similarly, add **last\_name** with **Last Name** as the value, and **email** with **Email** as the value. ![onelogin-configuration-step-3-a-1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt29a3d53c2a215324/5f467aeba5031b4a3bba8c9c/onelogin-configuration-step-3-a-1.png) 
    9.  \[_Optional step_\] If you want to map IdP roles to Contentstack roles, add a new attribute called roles. Select **Include in SAML assertion** and click **Save**.
    10.  Select **Users Roles** as the **Value** and click **Save**.

    **Note:** Perform steps 9 and 10 only if [IdP Role Mapping](/docs/administration/idp-role-mapping) is part of your Contentstack plan.

3.  ## Configure OneLogin details in Contentstack



    Go to **2\. IdP Configuration** for this connection in Contentstack. You can provide OneLogin's details in one of three ways:

    -   **Metadata URL**: Enter the issuer or metadata URL from the OneLogin app's **SSO** tab and click **Fetch**. Contentstack retrieves and parses the details.
    -   **Metadata XML**: Upload the metadata file you downloaded from OneLogin. Use this when network rules prevent the browser from reaching the metadata URL.
    -   **Manual entry**: Enter the SAML 2.0 endpoint and certificate by hand, as described below.

    **Tip:** Importing metadata auto-populates the Single Sign-On URL, certificate, and related fields, which reduces manual entry and errors. Signature algorithm and SAML encryption are not part of IdP metadata, so you always set those by hand. For the full procedure and error handling, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).



    To enter the details manually:

    1.  Click the **SSO** tab of your Contentstack application in OneLogin. You will see the **SAML 2.0 Endpoint (HTTP)** URL field. ![onelogin-configuration-step-4.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd497ac0e9582ee2b/5f467aeb70ca0f65ba109692/onelogin-configuration-step-4.png)
    2.  Click the "Copy to Clipboard" icon beside the **SAML 2.0 Endpoint (HTTP)** field, or copy the URL manually.
    3.  In Contentstack, go to **2\. IdP Configuration** for this connection, and paste the copied URL into the **Single Sign-On URL** field.
    4.  In the **SSO** tab, click **View Details** under the **X.509 Certificate** parameter. ![onelogin-configuration-step-4-a.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5b625cec4322e1b5/5f467aeb2a722a66860bd9e3/onelogin-configuration-step-4-a.png)
    5.  The **Standard Strength Certificate (2048-bit)** window displays the details of the certificate. Click **DOWNLOAD** to download the certificate. ![onelogin-configuration-step-4-1-1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt728e1023fc5f2d2f/5f467aebfb60b1668c21d8db/onelogin-configuration-step-4-1-1.png)
    6.  Upload the X.509 certificate that you downloaded into the **Certificate** field in Contentstack.

        **Warning:** A connection stores one signing certificate. Contentstack shows its expiry date next to the field. When your IdP switches to a new signing certificate, every SAML assertion arrives signed by a certificate Contentstack does not recognize, and sign-in through this connection fails until you upload the new certificate here. Coordinate the replacement with the switch on the IdP side rather than waiting for the current certificate to expire.

    7.  Under **Signature Algorithm**, select the algorithm OneLogin uses. Available options are SHA-1, SHA-256, and SHA-512.

        **Note:** The **Single Sign-On URL** must use HTTPS.

    8.  _(Optional)_ Turn on [SAML encryption](/docs/administration/enable-saml-encryption) to encrypt your SAML attributes. SAML encryption is configured per connection.
    9.  Click **Save**.

    **Note:** The organization owner can always sign in with Contentstack credentials, regardless of SSO status. If SSO login fails after a certificate update, the owner can sign back in and restore the previous configuration.

4.  ## Manage users access control in OneLogin



    After setting the necessary configurations in Contentstack, you need to assign the newly added application to your users.

    ### A - Add application to users

    1.  You can assign a single user under **Users > All Users**. OneLogin automatically retrieves the list of potential users based on the user's email address. ![onelogin-user-step-1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd58882a98939cf66/5f467aeba21dbd47faf25eeb/onelogin-user-step-1.png)
    2.  Click **NEW USER** in the top right corner to add new users. Add the user's **Email** address, **First Name**, and **Last Name**. ![onelogin-configuration-step-5.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0393f094f79ef0f4/5f467aebb008d84afeba6bcf/onelogin-configuration-step-5.png)
    3.  On the **Applications** tab, click the **+** icon beside the **Applications** bar, and select your app in the **Select Application** dropdown. Then click **CONTINUE**. You will be led to the **Edit Contentstack Login** window where you can verify the details. Click **Save**. ![onelogin-configuration-step-5-a.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2c605b280c5416bf/5f467aebc0e5e047f9386eac/onelogin-configuration-step-5-a.png)

    **Note:** Assign only the users who authenticate through this connection. In an organization with more than one connection, a user is identified by email address across every IdP, and the same email cannot map to different users in different IdPs.

    With this, you are done with setting up the Contentstack app in OneLogin. Proceed to configuring the remaining steps in Contentstack SSO in [Step 6](#test-and-enable-sso).  

    But if you want to perform IdP Role Mapping and allow user groups to sign in to your SSO-enabled organization directly (without an invitation) with the assigned permissions, perform **Step 4.B**.

    ### B - Add application to user groups for IdP Role Mapping



    _**Perform this step only if IdP Role Mapping is part of your Contentstack plan.**_  

    [IdP Role Mapping](/docs/administration/idp-role-mapping) allows you to map your IdP roles to Contentstack roles while configuring a connection.

    1.  You can assign a role under **Users > Roles**. OneLogin automatically retrieves the list of potential user roles in your OneLogin account.
    2.  To add a new role, click **NEW ROLE** in the top right corner.
    3.  Provide a role name and click the check (**✓**) icon.
    4.  Select the apps you want to assign the role to under the **Select Apps to Add** section.
    5.  Click **Save**.



    You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **3\. User Management** step of this connection and perform Step 5.  

    ![Click on](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc939934ac2ffe713/5d650d210d77ee2fe445edec/Role_list.png)  

    ![New_Role_and_Assign_Apps.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt93df320e4628b934/5f467abe185efb660c1ca5f9/New_Role_and_Assign_Apps.png)
5.  ## Create Role Mappings in Contentstack



    Go to **3\. User Management** to define how users access your SSO-enabled organization through this connection. This step covers **Strict Mode**, **User Email Whitelists**, **Session Time-Out**, and **Advanced Settings**.

    1.  **Strict Mode**: Enable [Strict Mode](/docs/administration/set-up-sso-in-contentstack#strict-mode) if you do not want any user to access the organization without SSO login.

        **Note:** Strict mode is set per connection, but it takes effect across the whole organization. If any **enabled** connection has strict mode on, the entire organization is SSO-only. Because of this, only one connection can hold the strict mode toggle at a time, and enabling strict mode on one connection disables the toggle on the others. Disabling a connection that has strict mode on removes strict mode for the organization, because a disabled connection does not contribute to the organization's strict state.

    2.  **User Email Whitelists**: Lets specified users access APIs even when strict mode is enabled. This setting is organization-scoped and applies only when strict mode is enabled, so the field appears only under the **User Management** step of the connection that has strict mode enabled. Enter up to 100 email addresses separated by commas, for example, user1@example.com, user2@example.com. Each address must belong to an accepted, non-owner member of the organization.

        **Note:** This is a plan-based feature. For access, contact our [support](mailto:support@contentstack.com) team.

    3.  **Session Time-Out**: The [Session Time-Out](/docs/administration/set-up-sso-in-contentstack#session-time-out) option lets you define the session duration for a user signed in through this connection. The default is 12 hours, and you can set any value between 1 and 24 hours. This setting applies per connection.
    4.  **Advanced Settings**: Click [Advanced Settings](/docs/administration/set-up-sso-in-contentstack#advanced-settings) to expand the **IdP Role Mapping** section and map OneLogin roles to Contentstack roles.
        1.  In the **Add Role Mapping** section, click **Add Role Mapping** to add a new IdP role mapping, and enter the following details:

            -   **IdP Role Identifier**: Enter the IdP group or role identifier, for example, "Contentstack Developers."
            -   **Assign Product Roles**: Assign Contentstack roles per product. For each product, such as CMS, Personalize, Agent OS, and Administration, click **Manage Roles** and select the roles this IdP group receives. For the **Administration** product, at least one role is required, and the **Member** role is selected by default.

            **Note:** The available products and roles depend on your Contentstack plan and the applications enabled for your organization.



            Likewise, you can add more role mappings, up to 200 per connection. To add a new role mapping, click **Add Role Mapping** and enter the details.
        2.  Enter **;** (semicolon) in the **Role Delimiter** textbox.
        3.  Turn on the **Enable IdP Role Mapping** toggle to enable the feature.

            **Warning:** Once IdP Role Mapping is on, a user whose assertion carries no role matching any mapping is denied sign-in through this connection. Organization owners are exempt, so a successful test as the owner does not prove that other users can sign in. Before you enable it, confirm that every group you expect to sign in has a matching mapping and that the **Role Delimiter** matches what your IdP sends.

    5.  Click **Next** to continue.

    **Note:** Role mapping is configured per connection. The roles applied to a user come from the connection that user signed in through, not from the union of every connection in the organization. For how IdP Role Mapping interacts with SCIM provisioning, refer to [IdP Role Mapping](/docs/administration/idp-role-mapping).

6.  ## Test and Enable SSO



    Next, you can try out the "Test SSO" and "Enable SSO" steps in Contentstack.

    ### Test SSO



    Before enabling this connection, it is recommended that you test the settings configured so far. To do so, perform the following steps:

    1.  Click **Test SSO**. Contentstack opens the **Login via SSO** page, where you specify this connection's SSO ID.
    2.  Click **Continue** to go to your IdP sign-in page.
    3.  Sign in to your account. If you are able to sign in to your IdP, your test is successful. On successful connection, you will see a success message.
    4.  If you have enabled IdP Role Mapping, you will find the following details on a new page:
        -   **SSO connection established successfully**: A success message is displayed.
        -   **IdP Roles received**: The list of all the roles assigned to you in your IdP.
        -   **Contentstack-IdP role mapping details**: The details of all the Contentstack roles mapped to your IdP roles.
    5.  Click **Close**. Now, you can safely enable this connection.

    **Note:** While testing with IdP Role Mapping enabled, the test is performed only for the IdP roles of the currently signed-in user.

    ### Enable SSO



    Once you have tested your settings, click **Enable SSO** to enable this connection. Confirm your action by clicking **Yes**.  

    Once enabled, users can access the organization through this connection. You can disable it from the same page at any time.

    **Note:** The first connection you enable becomes the organization's primary connection. In an organization with more than one connection:

    -   Every organization invitation email contains a single SSO login link, the one for the primary connection. Distribute the login URL of each non-primary connection to the users who authenticate through it.
    -   You cannot disable the primary connection while other active connections exist. To turn off SSO for the whole organization, disable every secondary connection first, and then disable the primary connection.



    For the full set of connection actions, refer to [Manage SSO Connections](/docs/administration/manage-sso-connections).

**Additional Resource:** To add more identity providers, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers). OneLogin also supports [SCIM provisioning](/docs/administration/set-up-scim-provisioning-with-onelogin), which is configured once at the organization level and is shared by every connection.
