---
title: "Set up SSO with PingIdentity"
description: "Set up single sign-on in Contentstack with PingIdentity as your SAML 2.0 identity provider, as one of up to five IdP connections in an organization."
url: /administration/set-up-sso-with-pingidentity
uid: bltce6d5c0aecc9ed33
---

# Set up SSO with PingIdentity

## Set up SSO with PingIdentity

This step-by-step guide explains how to set up [single sign-on](/docs/administration/about-single-sign-on-sso) (SSO) in Contentstack with PingIdentity as your SAML 2.0 identity provider (IdP).

You can attach up to five SAML 2.0 IdPs to a single Contentstack organization. Each IdP is a separate connection with its own certificate, session policy, role mapping, and login URL. This guide walks through one connection. To add and organize more connections, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers).

This integration requires the following steps:

1.  [Create a Connection in Contentstack](#create-a-connection-in-contentstack)
2.  [Configure Contentstack App in PingIdentity](#configure-contentstack-app-in-pingidentity)
3.  [Configure PingIdentity details in Contentstack](#configure-pingidentity-details-in-contentstack)
4.  [Add application to user groups for IdP Role Mapping](#add-application-to-user-groups-for-idp-role-mapping)
5.  [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
6.  [Test and Enable SSO](#test-and-enable-sso)

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



    Contentstack opens the connection at **1\. SSO Configuration** and generates the **Assertion Consumer Service (ACS)** URL, along with read-only details such as **Entity ID**, **SAML Version**, **Attributes**, and **NameID Format**. You need these details in [Step 2](#configure-contentstack-app-in-pingidentity). Keep this window open.

    **Note:** The ACS URL contains this connection's SSO ID, so every connection in your organization has its own ACS URL. Use the ACS URL of the connection you are configuring.

    **Tip:** Instead of copying the ACS URL and Entity ID individually into PingIdentity, share Contentstack's service provider (SP) metadata in one step. Use **Download Metadata XML**. If you enable SAML encryption on this connection, the downloaded metadata also carries the public certificate your IdP uses to encrypt assertions. You can download that certificate on its own from the [Contentstack public certificate](https://app.contentstack.com/public_cert.cer) link. PingIdentity accepts SP metadata through the **Import Metadata** option on the **Configure SAML Connection** page. For details, refer to [Download Contentstack (SP) Metadata](/docs/administration/download-sp-metadata).

2.  ## Configure Contentstack App in PingIdentity

    **Note:** You need to be a PingIdentity administrator to complete the steps below.

    1.  Log in to your PingIdentity Admin account, and click **Connections** in the left navigation panel.  

        ![PingIdentity_connection.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3ae49d850a212dbf/617803193ce65615842b3eeb/PingIdentity_connection.png)
    2.  Click the "Add Application" plus icon.  

        ![PingIdentity_add_connection.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6cfbd233989a204d/6178033a2d2c9113dd588b23/PingIdentity_add_connection.png)
    3.  Under **SELECT AN APPLICATION TYPE**, click **WEB APP**.  

        ![PingIdentity_add_connection_webapp.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt29498b355cfb8ebf/6178035a2378d322b0633606/PingIdentity_add_connection_webapp.png)
    4.  Choose the connection type as SAML and click **Configure**.  

        ![PingIdentity_add_connection_webapp_saml.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt20070a3fc01e01e9/61780377c2de5e0b3c33bdff/PingIdentity_add_connection_webapp_saml.png)
    5.  On the **Create App Profile** page, provide the appropriate **APPLICATION NAME** and click **Next**.

        **Tip:** In an organization with more than one connection, name each PingIdentity application after the Contentstack connection it serves, for example "Contentstack (Acme Employees)."



        ![PingIdentity_connection_create_app_profile.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt81df08d8ed6a9fe7/617803b42378d322b063360a/PingIdentity_connection_create_app_profile.png)
    6.  On the **Configure SAML Connection** page, perform the following steps:

        1.  Select the **Manually Enter** option.
        2.  Under **ACS URLS**, paste the Assertion Consumer Service URL generated for this connection in Contentstack.
        3.  Set the signing algorithm to **RSA\_SHA256** and download the signing certificate in Pem (.crt) format.
        4.  Copy the **Entity ID** from Contentstack and enter it under **ENTITY ID**.
        5.  Set the **ASSERTION VALIDITY DURATION (IN SECONDS)** to **60**.
        6.  Click **Save and Continue**.



        ![PingIdentity_SAML_1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb92a9772f7e93860/61780428fdb9af22b36e37ec/PingIdentity_SAML_1.png)  

        ![PingIdentity_SAML_2.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4f37c348f1a85cc9/6178043d3ce65615842b3efb/PingIdentity_SAML_2.png)
    7.  On the **Attribute Mapping** screen, set the attributes for email, first\_name, and last\_name, and click **Save and Close**.  

        ![PingIdentity_Attribute_mapping.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1ddc033e10027ff6/6178047ec2de5e0b3c33be0d/PingIdentity_Attribute_mapping.png)
    8.  Enable the created application using the toggle button.  

        ![PingIdentity_enable.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb6f64bcb4e0dd148/617804ab16d29a13daa7ae4e/PingIdentity_enable.png)
3.  ## Configure PingIdentity details in Contentstack



    Go to **2\. IdP Configuration** for this connection in Contentstack. You can provide PingIdentity's details in one of three ways:

    -   **Metadata URL**: Enter the IDP metadata URL from the PingIdentity application's **Configuration** tab and click **Fetch**. Contentstack retrieves and parses the details.
    -   **Metadata XML**: Download the metadata from PingIdentity and upload the file. Use this when network rules prevent the browser from reaching the metadata URL.
    -   **Manual entry**: Enter the single sign-on service URL and certificate by hand, as described below.

    **Tip:** Importing metadata auto-populates the Single Sign-On URL, certificate, and related fields, which reduces manual entry and errors. Signature algorithm and SAML encryption are not part of IdP metadata, so you always set those by hand. For the full procedure and error handling, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).



    To enter the details manually:

    1.  Copy the **SINGLE SIGNON SERVICE** URL from the PingIdentity application configuration into the **Single Sign-On URL** field.
    2.  Upload the certificate you downloaded in Step 2.f into the **Certificate** field.

        **Warning:** A connection stores one signing certificate. Contentstack shows its expiry date next to the field. When your IdP switches to a new signing certificate, every SAML assertion arrives signed by a certificate Contentstack does not recognize, and sign-in through this connection fails until you upload the new certificate here. Coordinate the replacement with the switch on the IdP side rather than waiting for the current certificate to expire.

    3.  Under **Signature Algorithm**, select **SHA-256** to match the RSA\_SHA256 signing algorithm set in PingIdentity.

        **Note:** The **Single Sign-On URL** must use HTTPS.

    4.  _(Optional)_ Turn on [SAML encryption](/docs/administration/enable-saml-encryption) to encrypt your SAML attributes. SAML encryption is configured per connection.
    5.  Click **Save**, and go to the **3\. User Management** step.

    **Note:** The organization owner can always sign in with Contentstack credentials, regardless of SSO status. If SSO login fails after a certificate update, the owner can sign back in and restore the previous configuration.

4.  ## Add application to user groups for IdP Role Mapping



    After setting the necessary configurations in Contentstack, you need to assign the newly added application to your users.  

    Create a group in PingIdentity that corresponds to Contentstack roles, for example, "ContentManager."

    1.  In your PingIdentity admin account, click the **Identities** icon in the left navigation panel.  

        ![PingIdentity_Identities.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt24e70d462cb31415/617805ccb3a3022432637555/PingIdentity_Identities.png)
    2.  Select **Groups**, and click the "Add Group" plus icon.  

        ![PingIdentity_groups.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltfffd36639ea32843/617805e1c05249199df19152/PingIdentity_groups.png)
    3.  In the **Create New Group** form, enter the group details, and click **Finish & Save**.  

        ![PingIdentity_groups_2.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt26eb687d7c3a6266/61780601da668e199e76477a/PingIdentity_groups_2.png)
    4.  Add users to this group from the **Members** tab.

        **Note:** Add only the users who authenticate through this connection. In an organization with more than one connection, a user is identified by email address across every IdP, and the same email cannot map to different users in different IdPs.



        ![PingIdentity_members.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltab264e38df6f2042/61780620412fb409f16bf599/PingIdentity_members.png)
    5.  Click the **Connections** tab and expand the application you configured.  

        ![PingIdentity_24.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4e3b594a95f2445c/617806562d2c9113dd588b45/PingIdentity_24.png)
    6.  Select the **Attribute Mappings** tab and click the "Edit" icon.  

        ![PingIdentity_attribute_mapping_2.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb1aefd5f02d3286a/61780675b3a302243263755d/PingIdentity_attribute_mapping_2.png)
    7.  Click **\+ ADD ATTRIBUTE**, add the roles attribute, and click **Save and Close**.  

        ![PingIdentity_Attribute_mapping.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0b2c9903d363d17c/617806d02d2c9113dd588b49/PingIdentity_Attribute_mapping.png)



    You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **3\. User Management** step of this connection and perform **Step 5**.
5.  ## Create Role Mappings in Contentstack



    Go to **3\. User Management** to define how users access your SSO-enabled organization through this connection. This step covers **Strict Mode**, **User Email Whitelists**, **Session Time-Out**, and **Advanced Settings**.

    1.  **Strict Mode**: Enable [Strict Mode](/docs/administration/set-up-sso-in-contentstack#strict-mode) if you do not want any user to access the organization without SSO login.

        **Note:** Strict mode is set per connection, but it takes effect across the whole organization. If any **enabled** connection has strict mode on, the entire organization is SSO-only. Because of this, only one connection can hold the strict mode toggle at a time, and enabling strict mode on one connection disables the toggle on the others. Disabling a connection that has strict mode on removes strict mode for the organization, because a disabled connection does not contribute to the organization's strict state.

    2.  **User Email Whitelists**: Lets specified users access APIs even when strict mode is enabled. This setting is organization-scoped and applies only when strict mode is enabled, so the field appears only under the **User Management** step of the connection that has strict mode enabled. Enter up to 100 email addresses separated by commas, for example, user1@example.com, user2@example.com. Each address must belong to an accepted, non-owner member of the organization.

        **Note:** This is a plan-based feature. For access, contact our [support](mailto:support@contentstack.com) team.

    3.  **Session Time-Out**: The [Session Time-Out](/docs/administration/set-up-sso-in-contentstack#session-time-out) option lets you define the session duration for a user signed in through this connection. The default is 12 hours, and you can set any value between 1 and 24 hours. This setting applies per connection.
    4.  **Advanced Settings**: Click [Advanced Settings](/docs/administration/set-up-sso-in-contentstack#advanced-settings) to expand the **IdP Role Mapping** section and map PingIdentity groups to Contentstack roles.
        1.  In the **Add Role Mapping** section, click **Add Role Mapping** to add a new IdP role mapping, and enter the following details:

            -   **IdP Role Identifier**: Enter the IdP group or role identifier, for example, "Contentstack Developers."
            -   **Assign Product Roles**: Assign Contentstack roles per product. For each product, such as CMS, Personalize, Agent OS, and Administration, click **Manage Roles** and select the roles this IdP group receives. For the **Administration** product, at least one role is required, and the **Member** role is selected by default.

            **Note:** The available products and roles depend on your Contentstack plan and the applications enabled for your organization.



            Likewise, you can add more role mappings, up to 200 per connection. To add a new role mapping, click **Add Role Mapping** and enter the details.
        2.  Keep **Role Delimiter** blank.
        3.  Turn on the **Enable IdP Role Mapping** toggle to enable the feature.

            **Warning:** Once IdP Role Mapping is on, a user whose assertion carries no role matching any mapping is denied sign-in through this connection. Organization owners are exempt, so a successful test as the owner does not prove that other users can sign in. Before you enable it, confirm that every group you expect to sign in has a matching mapping and that the **Role Delimiter** matches what your IdP sends.

    5.  Click **Save**, and then click **Next** to continue.

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

**Additional Resource:** To add more identity providers, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers). To import PingIdentity's metadata instead of entering details by hand, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).
