---
title: "Set up SSO with Okta Native App"
description: "Set up single sign-on in Contentstack with Okta as your SAML 2.0 identity provider, using the native Contentstack app from the Okta App Catalog."
url: /administration/set-up-sso-with-okta-native-app
---

# Set up SSO with Okta Native App

## Set up SSO with Okta Native App

This guide explains how to set up [single sign-on](/docs/administration/about-single-sign-on-sso) (SSO) in Contentstack with Okta as your SAML 2.0 identity provider (IdP), using the native Contentstack app from the Okta App Catalog. You create a connection in Contentstack, add and configure the Contentstack app in Okta, exchange the IdP details, optionally map roles, and then test and enable SSO.

You can attach up to five SAML 2.0 IdPs to a single Contentstack organization. Each IdP is a separate connection with its own certificate, session policy, role mapping, and login URL. This guide walks through one connection. To add and organize more connections, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers).

**Supported features include:**

-   SP-initiated (Service-Provider-initiated) SSO
-   IdP-initiated (Identity-Provider-initiated) SSO
-   Just-In-Time provisioning

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Okta administrator account
-   The organization owner role, a security manager role, or a custom role with SSO write permissions in your Contentstack [organization](/docs/administration/about-organizations)

## What You Will Learn

-   How to create a connection and generate the ACS URL in Contentstack.
-   How to add and configure the Contentstack app in Okta as a SAML 2.0 IdP.
-   How to import Okta's metadata into Contentstack instead of entering details by hand.
-   How to map Okta roles to Contentstack roles (optional).
-   How to test and enable SSO, and sign in through SSO.

## Steps to Set up SSO with Okta Native App

The integration with Okta can be done in the following steps:

1.  [Create a Connection in Contentstack](#create-a-connection-in-contentstack)
2.  [Configure Contentstack App in Okta](#configure-contentstack-app-in-okta)
3.  [Configure Okta details in Contentstack](#configure-okta-details-in-contentstack)
4.  [Manage users access control in Okta](#manage-users-access-control-in-okta)
    1.  [Add application to users](#add-application-to-users)
    2.  [Add application to user groups for IdP Role Mapping](#add-application-to-user-groups-for-idp-role-mapping)
5.  [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
6.  [Test and Enable SSO](#test-and-enable-sso)

Let's see each of the processes in detail.

1.  ## Create a Connection in Contentstack

    **Note:** SSO can be configured by the organization owner, a security manager, or a user with a custom role that has SSO write permissions.

    1.  Sign in to your [Contentstack account](https://app.contentstack.com/#!/login), open the **App Switcher**, go to **Administration**, and then click **Single Sign-On**.
    2.  Add a connection to open the **New Connection** dialog, and enter the following details:

        -   **Connection Name**: A friendly name shown across SSO surfaces. It does not affect login URLs. For example, "Acme Employees."
        -   **SSO ID**: The unique identifier for this connection. Contentstack auto-generates it from the connection name, and you can edit it before you create the connection. Users enter it as one of the login parameters once SSO is enabled.
        -   **Description** (optional): Context about this connection, up to 400 characters.

        **Note:** The SSO ID can contain only lowercase letters, numbers (0-9), and hyphens (-). You cannot change the SSO ID after you create the connection. SSO IDs are unique across all Contentstack organizations, so a name already in use elsewhere is rejected.



        Let's use "sso-test" as the **SSO ID**.
    3.  Click **Create**.



    Contentstack opens the connection at **1\. SSO Configuration** and generates the **Assertion Consumer Service (ACS)** URL, along with read-only details such as **Entity ID**, **SAML Version**, **Attributes**, and **NameID Format**. You need these details in [Step 2](#configure-contentstack-app-in-okta). Keep this window open.

    **Note:** The ACS URL contains this connection's SSO ID, so every connection in your organization has its own ACS URL. Use the ACS URL of the connection you are configuring.

    **Tip:** Instead of copying the ACS URL and Entity ID individually into Okta, share Contentstack's service provider (SP) metadata in one step. Use **Download Metadata XML**. If you enable SAML encryption on this connection, the downloaded metadata also carries the public certificate your IdP uses to encrypt assertions. You can download that certificate on its own from the [Contentstack public certificate](https://app.contentstack.com/public_cert.cer) link. For details, refer to [Download Contentstack (SP) Metadata](/docs/administration/download-sp-metadata).

2.  ## Configure Contentstack App in Okta

    1.  Log in to your Okta Admin account.
    2.  After logging in, you will see the Okta dashboard. Click the **Application** tab and select **Applications**.
    3.  On the **Applications** page, you will see your already created applications, if any.
    4.  Click **Browse App Catalog** to set up an application for Contentstack.
    5.  Search for "Contentstack" within the **Browse App Integration Catalog** section and select the **Contentstack** app.
    6.  You will be redirected to the **Contentstack** application. Click the **Add Integration** button.
    7.  Edit the **Application label** as per your preference and click **Done**.

        **Tip:** In an organization with more than one connection, name each Okta app after the Contentstack connection it serves, for example "Contentstack (Acme Employees)." This keeps the app-to-connection pairing clear when you manage several tenants or populations.

    8.  You will be redirected to the application's configuration page. Locate the **Sign On** tab and click **Edit**.
    9.  In the **Settings** section, expand **Attributes** to add any additional attributes (optional).
    10.  Optionally, you can create role mapping. To do this, in the **Group Attribute Statements (Optional)** section, enter the following:
         -   For Name, enter "roles."
         -   Under **Name format (optional)**, select **Unspecified**.
         -   For the **Filter**, select **Matches regex** and enter your regex term in the textbox beside it. For example, if all your Contentstack-specific users are assigned roles that start with contentstack, enter the regex term ^contentstack.(\[^\\s\]+)\*.
         -   This will retrieve all the groups that start with "contentstack."

             **Note:** Perform this step only if you want to enable [IdP Role Mapping](/docs/administration/idp-role-mapping).

    11.  In the **Advanced Sign-On** settings, enter the following details:
         -   **Assertion Consumer Service URL**: Enter the ACS URL generated for this connection in Contentstack in [Step 1](#create-a-connection-in-contentstack).
         -   **Entity ID**: Enter the Entity ID of Contentstack from [Step 1](#create-a-connection-in-contentstack), typically represented as https://app.contentstack.com.
         -   **Application username format**: Select the Email option.
         -   **Update application username on**: Select Create and update.
    12.  Click **Save**.



    ![SSO_Okta_-_Okta_Login_page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fc8cf555fcf67fd/6561aea2d5954944e1b656ec/SSO_Okta_-_Okta_Login_page.png)  

    ![SSO_Okta_-_Okta_Application.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd1b9f58b570137cb/6561aea3ec79944e1a968203/SSO_Okta_-_Okta_Application.png)  

    ![SSO_Okta_-_created_applications.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0249809a1d5090e/6561aa516a1419639b41556b/SSO_Okta_-_created_applications.png)  

    ![SSO_Okta_-_browse_app_catalog.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7ddfa6074090a76a/6561aa51efd9ef732bb815e1/SSO_Okta_-_browse_app_catalog.png)  

    ![SSO_Okta_-_App_Integration_catalog.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1393142028eba70e/6561ae932d2f23c97ef3c44c/SSO_Okta_-_App_Integration_catalog.png)  

    ![SSO_Okta_-_Add_Integration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfbd5853738316f5/6561ae9336b5457125cd694f/SSO_Okta_-_Add_Integration.png)  

    ![SSO_Okta_-_Add_app_in_Okta.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt271c7bc80290af42/6561ae9352b29bd0fc5bff39/SSO_Okta_-_Add_app_in_Okta.png)  

    ![SSO_Okta_-_Sign_On_in_Okta.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt57cb1956541d0781/6561aea3df4282512a2eedd8/SSO_Okta_-_Sign_On_in_Okta.png)  

    ![SSO_Okta_-_Attributes.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83dfe2710537790a/6561aea20a03adb4c239a09d/SSO_Okta_-_Attributes.png)  

    ![SSO_Okta_-_Group_Attributes.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc86308ea60aa3df2/6561aea2ec7994b4039681ff/SSO_Okta_-_Group_Attributes.png)  

    ![SSO_Okta_-_Update_app_username.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd16a76b439992ea/6561aa5cf415048279125477/SSO_Okta_-_Update_app_username.png)
3.  ## Configure Okta details in Contentstack



    Go to **2\. IdP Configuration** in Contentstack. You can provide Okta's details in one of three ways:

    -   **Metadata URL**: Enter Okta's metadata endpoint and click **Fetch**. Contentstack retrieves and parses the details. This is the fastest path, and Okta exposes a live metadata URL for each app.
    -   **Metadata XML**: Upload the metadata file you downloaded from Okta. Use this when network rules prevent the browser from reaching the metadata URL.
    -   **Manual entry**: Enter the Single Sign-On URL and certificate by hand, as described below.

    **Tip:** Importing metadata auto-populates the Single Sign-On URL, certificate, and related fields, which reduces manual entry and errors. Signature algorithm and SAML encryption are not part of IdP metadata, so you always set those by hand. For the full procedure and error handling, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).



    To enter the details manually:

    1.  In Okta, click the **Sign On** tab of the application you created in [Step 2](#configure-contentstack-app-in-okta), and then click **More details**.
    2.  Copy the **Sign-On URL** and download the certificate.
    3.  In Contentstack, go to **2\. IdP Configuration** for this connection and paste the Sign-On URL into the **Single Sign-On URL** field.
    4.  Upload the X.509 certificate you downloaded from Okta into the **Certificate** field.

        **Warning:** A connection stores one signing certificate. Contentstack shows its expiry date next to the field. When your IdP switches to a new signing certificate, every SAML assertion arrives signed by a certificate Contentstack does not recognize, and sign-in through this connection fails until you upload the new certificate here. Coordinate the replacement with the switch on the IdP side rather than waiting for the current certificate to expire.

    5.  Under **Signature Algorithm**, select the algorithm Okta uses. Available options are SHA-1, SHA-256, and SHA-512.

        **Note:** The **Single Sign-On URL** must use HTTPS.

    6.  _(Optional)_ Turn on [SAML encryption](/docs/administration/enable-saml-encryption) to encrypt your SAML attributes. SAML encryption is configured per connection.
    7.  Click **Save**.

    **Note:** The organization owner can always sign in with Contentstack credentials, regardless of SSO status. If SSO login fails after a certificate update, the owner can sign back in and restore the previous configuration.



    That's it. Now, let's see how to assign your Contentstack application to your users in Okta.  

    ![SSO_Okta_-_More_details.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1588ae11bbcbd0ec/6561aa5204116d6d7329e9e9/SSO_Okta_-_More_details.png)  

    ![SSO_Okta_-_Sign-On-URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8614ef2e0d340267/6561aa5181b93e6837a19fcb/SSO_Okta_-_Sign-On-URL.png)
4.  ## Manage users access control in Okta



    After setting the necessary configurations in Contentstack, you need to assign the newly added application to your users.

    1.  ### Add application to users

        1.  Go to the **Assignments** tab of your application, click the **Assign** dropdown, and select **Assign to People**.
        2.  You will get a list of registered users to whom you need to assign your application. Click **Assign** beside the user to whom you want to assign the application, and click **Done**.
        3.  You may also use multiple application assignments available under **Applications > Assign applications**.

            **Note:** Assign only the users who authenticate through this connection. In an organization with more than one connection, a user is identified by email address across every IdP, and the same email cannot map to different users in different IdPs.



            With this, you are done with setting up the Contentstack app in Okta. Proceed to configuring the remaining steps in Contentstack SSO in [Step 6](#test-and-enable-sso).  

            But if you want to perform IdP Role Mapping and allow user groups to sign in to your SSO-enabled organization directly (without an invitation) with the assigned permissions, perform [Step 4.2](#add-application-to-user-groups-for-idp-role-mapping).



        ![SSO_Okta_-_Assign_to_people.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt883f28322a9ee62d/6561aa517c56dd1561a5f876/SSO_Okta_-_Assign_to_people.png)
    2.  ### Add application to user groups for IdP Role Mapping



        _**Perform this step only if IdP Role Mapping is part of your Contentstack plan.**_  

        [IdP Role Mapping](/docs/administration/idp-role-mapping) is an alternate way of managing users and permissions of your SSO-enabled organization. This feature allows you to map your IdP roles to Contentstack roles while configuring a connection.

        1.  Go to the **Assignments** tab of your application, click the **Assign** dropdown in the application details section, and select **Assign to Groups**.
        2.  You will see a list of registered groups. Click **Assign** beside the groups to which you need to assign your application. Click **Done**.



        ![SSO_Okta_-_Assign_to_group.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77f3539a3122545a/6561aa516f7bf45ce582e3ed/SSO_Okta_-_Assign_to_group.png)



    You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **3\. User Management** step of this connection and perform [Step 5](#create-role-mappings-in-contentstack).
5.  ## Create Role Mappings in Contentstack



    Go to **3\. User Management** to define how users access your SSO-enabled organization through this connection. This step covers **Strict Mode**, **User Email Whitelists**, **Session Time-Out**, and **Advanced Settings**.

    1.  **Strict Mode**: Enable [Strict Mode](/docs/administration/set-up-sso-in-contentstack#strict-mode) if you do not want any user to access the organization without SSO login.

        **Note:** Strict mode is set per connection, but it takes effect across the whole organization. If any **enabled** connection has strict mode on, the entire organization is SSO-only. Because of this, only one connection can hold the strict mode toggle at a time, and enabling strict mode on one connection disables the toggle on the others. Disabling a connection that has strict mode on removes strict mode for the organization, because a disabled connection does not contribute to the organization's strict state.

    2.  **User Email Whitelists**: Lets specified users access APIs even when strict mode is enabled. This setting is organization-scoped and applies only when strict mode is enabled, so the field appears only under the **User Management** step of the connection that has strict mode enabled. Enter up to 100 email addresses separated by commas, for example, user1@example.com, user2@example.com. Each address must belong to an accepted, non-owner member of the organization.

        **Note:** This is a plan-based feature. For access, contact our [support](mailto:support@contentstack.com) team.

    3.  **Session Time-Out**: The [Session Time-Out](/docs/administration/set-up-sso-in-contentstack#session-time-out) option lets you define the session duration for a user signed in through this connection. The default is 12 hours, and you can set any value between 1 and 24 hours. This setting applies per connection, so different user populations can have different session lengths.
    4.  **Advanced Settings**: Click [Advanced Settings](/docs/administration/set-up-sso-in-contentstack#advanced-settings) to expand the **IdP Role Mapping** section and map Okta roles to Contentstack roles.
        1.  In the **Add Role Mapping** section, click **Add Role Mapping** to add a new IdP role mapping, and enter the following details:

            -   **IdP Role Identifier**: Enter the IdP group or role identifier, for example, "Contentstack Developers." This must match the name of the group assigned to the application in Okta.
            -   **Assign Product Roles**: Assign Contentstack roles per product. For each product, such as CMS, Personalize, Agent OS, and Administration, click **Manage Roles** and select the roles this IdP group receives. For the **Administration** product, at least one role is required, and the **Member** role is selected by default.

            **Note:** The available products and roles depend on your Contentstack plan and the applications enabled for your organization.

        2.  Likewise, you can add more role mappings, up to 200 per connection. To add a new role mapping, click **Add Role Mapping** and enter the details.
        3.  Keep **Role Delimiter** blank, as Okta usually returns roles in an array.
        4.  Turn on the **Enable IdP Role Mapping** toggle to enable the feature.

            **Warning:** Once IdP Role Mapping is on, a user whose assertion carries no role matching any mapping is denied sign-in through this connection. Organization owners are exempt, so a successful test as the owner does not prove that other users can sign in. Before you enable it, confirm that every group you expect to sign in has a matching mapping and that the **Role Delimiter** matches what your IdP sends.

        5.  Click **Next** to continue.

    **Note:** Role mapping is configured per connection. The roles applied to a user come from the connection that user signed in through, not from the union of every connection in the organization. For how IdP Role Mapping interacts with SCIM provisioning, refer to [IdP Role Mapping](/docs/administration/idp-role-mapping).

6.  ## Test and Enable SSO



    Next, you can try out the "Test SSO" and "Enable SSO" steps in Contentstack.
    1.  ### Test SSO



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

    2.  ### Enable SSO

        1.  Once you have tested your settings, click **Enable SSO** to enable this connection.
        2.  Confirm your action by clicking **Yes**.
        3.  Once enabled, users can access the organization through this connection. You can disable it from the same page at any time.

        **Note:** The first connection you enable becomes the organization's primary connection. In an organization with more than one connection:

        -   Every organization invitation email contains a single SSO login link, the one for the primary connection. Distribute the login URL of each non-primary connection to the users who authenticate through it.
        -   You cannot disable the primary connection while other active connections exist. To turn off SSO for the whole organization, disable every secondary connection first, and then disable the primary connection.



        For the full set of connection actions, refer to [Manage SSO Connections](/docs/administration/manage-sso-connections).

## Log In via SSO

To sign in to Contentstack through SSO, perform the steps given below:

1.  Go to the [Contentstack app](https://app.contentstack.com/#!/login) and click **Via SSO**.
2.  Enter the **SSO ID** of the connection you authenticate through (created in Step 1.2).
3.  Click **Log In**.

**Note:** Contentstack does not show an IdP selection screen and does not route users by email domain. Each connection has its own login URL built from its SSO ID, so users need the SSO ID of their own connection. If you are already signed in to Okta, the trigger\_sso\_flow=<sso\_id> query parameter signs you in to Contentstack and skips the Contentstack login page.

**Additional Resource:** To add more identity providers, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers). To import Okta's metadata instead of entering details by hand, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).
