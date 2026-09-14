---
title: "Set up SSO with Active Directory Federation Services (AD FS)"
description: "Set up single sign-on in Contentstack with AD FS as your SAML 2.0 identity provider, as one of up to five IdP connections in an organization."
url: /administration/set-up-sso-with-adfs
---

# Set up SSO with Active Directory Federation Services (AD FS)

## Set up SSO with Active Directory Federation Services (AD FS)

This step-by-step guide explains how to set up [single sign-on](/docs/administration/about-single-sign-on-sso) (SSO) in Contentstack with AD FS as your SAML 2.0 identity provider (IdP). You create a connection in Contentstack, configure a Relying Party Trust on Windows Server, define claim rules, export the token-signing certificate, and then configure and enable the connection in Contentstack.

You can attach up to five SAML 2.0 IdPs to a single Contentstack organization. Each IdP is a separate connection with its own certificate, session policy, role mapping, and login URL, which is useful when an on-premises AD FS population and a cloud IdP population share one organization. This guide walks through one connection. To add and organize more connections, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers).

**Note:** This guide covers SAML 2.0 SSO setup using Windows Server 2012 R2 Standard (Windows Server 2008 R2 is supported too, but requires additional setup), with AD FS 2.0 as the identity provider.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   AD FS administrator access to a Windows Server
-   An AD FS token-signing certificate
-   The organization owner role, a security manager role, or a custom role with SSO write permissions in your Contentstack [organization](/docs/administration/about-organizations)

## What You Will Learn

-   How to create a connection and generate the ACS URL in Contentstack.
-   How to configure a Relying Party Trust for Contentstack on Windows Server.
-   How to define claim rules and export the token-signing certificate.
-   How to configure AD FS details in Contentstack, by metadata XML or manually, and enable the connection.

## Steps to Set up SSO with AD FS

1.  [Create a Connection in Contentstack](#create-a-connection-in-contentstack)
2.  [Configure Windows Server](#configure-windows-server)
3.  [Edit Claim Rules for your AD FS App](#edit-claim-rules-for-your-ad-fs-app)
4.  [Configure AD FS details in Contentstack](#configure-ad-fs-details-in-contentstack)

Let's go into each of the processes in detail.

1.  ## Create a Connection in Contentstack

    **Note:** SSO can be configured by the organization owner, a security manager, or a user with a custom role that has SSO write permissions.

    1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login), open the **App Switcher**, go to **Administration**, and then click **Single Sign-On**.
    2.  Add a connection to open the **New Connection** dialog, and enter the following details:

        -   **Connection Name**: A friendly name shown across SSO surfaces. It does not affect login URLs. For example, "Acme Corporate AD."
        -   **SSO ID**: The unique identifier for this connection. Contentstack auto-generates it from the connection name, and you can edit it before you create the connection. Users enter it as one of the login parameters once SSO is enabled.
        -   **Description** (optional): Context about this connection, up to 400 characters.

        **Note:** The SSO ID can contain only lowercase letters, numbers (0-9), and hyphens (-). You cannot change the SSO ID after you create the connection. SSO IDs are unique across all Contentstack organizations, so a name already in use elsewhere is rejected.



        Let's use "sso-test" as the **SSO ID**.
    3.  Click **Create**.



    Contentstack opens the connection at **1\. SSO Configuration** and generates the **Assertion Consumer Service (ACS)** URL, along with read-only details such as **Entity ID**, **SAML Version**, **Attributes**, and **NameID Format**. You need these details in [Step 2](#configure-windows-server). Keep this window open.

    **Note:** The ACS URL contains this connection's SSO ID, so every connection in your organization has its own ACS URL. Use the ACS URL of the connection you are configuring, and enter it in the Relying Party Trust for that connection.

    **Tip:** Instead of copying the ACS URL and Entity ID individually, share Contentstack's service provider (SP) metadata with your AD FS administrator in one step. Use **Download Metadata XML** on the **1\. SSO Configuration** step. If you enable SAML encryption on this connection, the downloaded metadata also carries the public certificate your IdP uses to encrypt assertions. You can download that certificate on its own from the [Contentstack public certificate](https://app.contentstack.com/public_cert.cer) link. AD FS can import SP metadata from a file when you add the Relying Party Trust. For details, refer to [Download Contentstack (SP) Metadata](/docs/administration/download-sp-metadata).

2.  ## Configure Windows Server

    1.  Open the AD FS Management Console.  

        ![adfs-mangement-console.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0f409c370390012c/5d6513c8cc605f23dfb5542f/adfs-mangement-console.png)
    2.  Define a Relying Party Trust (RPT), which serves as the connection between AD FS and Contentstack. Click **Add Relying Party Trust** from the **Actions** sidebar on the right. This opens the **Add Relying Party Trust Wizard**. Click **Start**.  

        ![step-1-add-relying-party.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7f7552b498b4d160/5d6513c04532dc2764646d48/step-1-add-relying-party.png)
    3.  Select a data source. Choose **Enter data about the relying party manually**, and click **Next**.

        **Tip:** If you downloaded Contentstack's SP metadata in Step 1, choose **Import data about the relying party from a file** instead, and select the downloaded XML. AD FS fills in the ACS URL and identifier for you.



        ![step-2-select-data-source.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd38038f6888fa8a6/5d6513bd0d77ee2fe445eff4/step-2-select-data-source.png)
    4.  Enter a name for your relying party, for example, "ms-adfs-test."

        **Tip:** In an organization with more than one connection, name each Relying Party Trust after the Contentstack connection it serves, so the trust-to-connection pairing stays clear.



        ![step-3-Display-name.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd5c676de7f39e175/5d6513bd79adf9235f38e9ff/step-3-Display-name.png)
    5.  To choose a profile, click **AD FS profile**. This profile supports relying parties that are interoperable with the SAML 2.0 protocol. Then click **Next**.  

        ![step-4-choose-profile.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3119fb4b52c6b446/5d6513bbcc605f23dfb5541b/step-4-choose-profile.png)
    6.  You can skip the **Configure Certificate** step, as it is not required. Click **Next**.  

        ![step-5-certificate.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdb6095b71b8c3d4c/5d6513bbde50ec209c8f4528/step-5-certificate.png)
    7.  In **Configure URL**, select **Enable support for the SAML 2.0 WebSSO protocol**, and enter the Assertion Consumer Service URL generated for this connection in Step 1.c. Click **Next**.

        **Warning:** Do not add a slash "/" at the end of the identifier, otherwise this integration will not work.



        ![step-6-configuration-url.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltfdf04e1b51393358/5d6513b910bdff289acf52e9/step-6-configuration-url.png)
    8.  In the **Configure Identifiers** section, enter the Entity Identifier URL (without a trailing slash) generated in Contentstack, and click **Add**. After adding it, click **Next**.  

        ![step-7-configue-identifiers.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt91bd782b5938e3b5/5d6513b91aa7592787971620/step-7-configue-identifiers.png)
    9.  Click the **I do not want to configure multi-factor authentication settings for this relying party trust at this time** radio button in the **Configure Multi-factor Authentication Now?** section, and click **Next**.  

        ![step-8-configure-multi-auth.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltce1ef60d80a98a4d/5d6513b75ab0281fbe5e174a/step-8-configure-multi-auth.png)
    10.  In the **Choose Issuance Authorization Rules** section, select **Permit all users to access this relying party** to allow all Active Directory users to sign in to Contentstack, and click **Next**.

         **Note:** Permit only the users who authenticate through this connection. In an organization with more than one connection, a user is identified by email address across every IdP, and the same email cannot map to different users in different IdPs.



         ![step-9-permit-users.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltee93b1aee5b3c7de/5d6513b7db2a5d2441d96884/step-9-permit-users.png)
    11.  The **Ready to Add Trust** section displays the configuration you set. Do not change any setting, and click **Next**.
    12.  You have successfully configured the Relying Party Trust. Leave the **Open the Edit Claim Rules dialog for this relying party trust when the wizard closes** option checked to set up the claim rules.
    13.  Click **Close** to close the wizard.  

         ![step-11-final.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt679b6644c0b5c975/5d6513b4d84c39242e05d414/step-11-final.png)



    As soon as you have configured Windows Server, the **Edit Claim Rules for** _app\_name_ window opens. Let us see how to set up claim rules in the next step.
3.  ## Edit Claim Rules for your AD FS App

    1.  In the **Edit Claim Rules for ms-adfs-test** window, click **Add Rule** under the **Issuance Transform Rules** tab.  

        ![step-12-edit-claim-rules.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9f41aa89f5316d3c/5d6513b279adf9235f38e9f7/step-12-edit-claim-rules.png)
    2.  In the **Add Transform Claim Rule Wizard** window, select **Send LDAP Attributes as Claims** as the **Claim rule template**, and click **Next**.  

        ![step-13-choose-rule-type.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1db19518d29a71f0/5d6513b05ab0281fbe5e1742/step-13-choose-rule-type.png)
    3.  Enter a name for your claim rule, for example, "email," then set **Attribute store** to **Active Directory**.
    4.  Enter the LDAP attributes. Enter **E-Mail-Addresses** twice and set the outgoing types to **E-Mail Address** and **email**. Similarly, enter **Given-Name** twice with outgoing types **Given-Name** and **first\_name**, and enter **Surname** twice with outgoing types **Surname** and **last\_name**.

        **Note:** Every attribute is entered twice in order to provide a user-specific claim type (that is, **email**, **first\_name**, and **last\_name**).



        ![step-13-a.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc9e089c066c7cfbb/5d6513b25760052efac57a10/step-13-a.png)
    5.  Click **OK** when you are done adding the required LDAP attributes.

        **Warning:** Make sure you select accurate options, because the integration may not work if the variant you select does not match.



        ![step-13-b.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0a78a19b076814b2/5d6513b024521b0c64edc995/step-13-b.png)
    6.  Add another claim rule. Click **Add Rule** on the **Issuance Transform Rules** tab, select **Transform an Incoming Claim**, and click **Next**.  

        ![step-14-incoming-claim.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1af73b940d6801d7/5d6513ae45154b20a6902893/step-14-incoming-claim.png)
    7.  Enter a claim rule name, for example, **Incoming-claim**, set **Incoming claim type** to **E-Mail Address**, set **Outgoing claim type** to **Name ID**, and set **Outgoing name ID format** to **Email**.
    8.  Select **Pass through all claim values** and click **Finish**.  

        ![step-14-a-incoming-claim.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt18dd15bb4c764885/5d6513ae4532dc2764646d3e/step-14-a-incoming-claim.png)
    9.  In the **Edit Claim Rules** window, click **OK**.
    10.  Click **Service > Certificates**, select your token-signing certificate, and click **View Certificate…** in the **Actions** pane.
    11.  Click the **Details** tab and click **Copy to File…**. This opens the **Certificate Export Wizard**. Click **Next**.  

         ![step-16-download-cert.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2c961cb80b9e780e/5f46b0e6c0e5e047f9386fbb/step-16-download-cert.png)
    12.  Select **Base-64 encoded X.509 (.CER)** as the format of your certificate, and click **Next**.  

         ![step-16-b-download-cert.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta39a74f50cfa3e64/5d6513a87afbb0203184b5a2/step-16-b-download-cert.png)
    13.  Click **Browse**, choose a location to save the certificate file, click **Next**, and then click **Finish** and **OK**.  

         ![step-16-c-download-cert.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt064cdd18b13f290e/5d6513a5aa1103252e0b8b26/step-16-c-download-cert.png)
    14.  On your AD FS server, click **Service > Endpoints**, and locate the endpoint URL path for the SAML 2.0 specification. You will use this when configuring AD FS details in Contentstack.

         **Tip:** If you plan to import IdP metadata into Contentstack instead of entering details by hand, also save your AD FS federation metadata file, which is usually available at https://<your-adfs-server>/FederationMetadata/2007-06/FederationMetadata.xml.



         ![step-17-adfs-url.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9a9863479a8fc5e5/5d6513f34d3ad511ffc4a52d/step-17-adfs-url.png)
4.  ## Configure AD FS details in Contentstack



    Go to **2\. IdP Configuration** for this connection in Contentstack. You can provide AD FS details in one of the following ways:

    -   **Metadata XML**: Upload the AD FS federation metadata file. This is the recommended path for AD FS, because AD FS endpoints are usually on-premises or firewalled, so the browser cannot reach them directly to fetch a metadata URL.
    -   **Manual entry**: Enter the single sign-on URL and certificate by hand, as described below.

    **Tip:** Importing metadata auto-populates the Single Sign-On URL, certificate, and related fields, which reduces manual entry and errors. Signature algorithm and SAML encryption are not part of IdP metadata, so you always set those by hand. For the full procedure and error handling, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).



    To enter the details manually:

    1.  Enter the single sign-on login URL of your AD FS service into the **Single Sign-On URL** field. This is generally the URL of your AD FS service followed by the suffix "/adfs/ls/".
    2.  Upload the certificate you exported in Step 3 into the **Certificate** field.

        **Warning:** A connection stores one signing certificate. Contentstack shows its expiry date next to the field. When your IdP switches to a new signing certificate, every SAML assertion arrives signed by a certificate Contentstack does not recognize, and sign-in through this connection fails until you upload the new certificate here. Coordinate the replacement with the switch on the IdP side rather than waiting for the current certificate to expire.

    3.  Under **Signature Algorithm**, select the algorithm your AD FS server uses. Available options are SHA-1, SHA-256, and SHA-512.

        **Note:** The **Single Sign-On URL** must use HTTPS.

    4.  _(Optional)_ Turn on [SAML encryption](/docs/administration/enable-saml-encryption) to encrypt your SAML attributes. SAML encryption is configured per connection.
    5.  Click **Save**.

    **Note:** The organization owner can always sign in with Contentstack credentials, regardless of SSO status. If SSO login fails after a certificate update, the owner can sign back in and restore the previous configuration.


## Further Steps

### User Management

In Contentstack, save your settings and go to **3\. User Management** for this connection.

-   **Strict Mode**: Enable [Strict Mode](/docs/administration/set-up-sso-in-contentstack#strict-mode) if you do not want any user to access the organization without SSO login.

**Note:** Strict mode is set per connection, but it takes effect across the whole organization. If any **enabled** connection has strict mode on, the entire organization is SSO-only. Because of this, only one connection can hold the strict mode toggle at a time, and enabling strict mode on one connection disables the toggle on the others. Disabling a connection that has strict mode on removes strict mode for the organization, because a disabled connection does not contribute to the organization's strict state.

-   **User Email Whitelists**: Lets specified users access APIs even when strict mode is enabled. This setting is organization-scoped and applies only when strict mode is enabled, so the field appears only under the **User Management** step of the connection that has strict mode enabled. Enter up to 100 email addresses separated by commas, for example, user1@example.com, user2@example.com. Each address must belong to an accepted, non-owner member of the organization.

**Note:** This is a plan-based feature. For access, contact our [support](mailto:support@contentstack.com) team.

-   **Session Time-Out**: [Session Time-Out](/docs/administration/set-up-sso-in-contentstack#session-time-out) lets you define the session duration for a user signed in through this connection. The default is 12 hours, and you can set any value between 1 and 24 hours. This setting applies per connection, so an AD FS connection can use a different session length from your other connections.

**Note:** IdP Role Mapping is not yet available for AD FS. To know how it works, refer to [IdP Role Mapping](/docs/administration/idp-role-mapping).

### Test & Enable

Go to **4\. Test & Enable** for this connection in Contentstack.

Click [Test SSO](/docs/administration/set-up-sso-in-contentstack#test-sso) to check that your settings are configured properly. On the **Login via SSO** page, specify this connection's SSO ID. It is highly recommended that you test your settings before enabling the connection.

To enable SSO for your Contentstack organization, click [Enable SSO](/docs/administration/set-up-sso-in-contentstack#enable-sso). Once enabled, users can access the organization through this connection.

You can disable the connection anytime from the same page.

**Note:** The first connection you enable becomes the organization's primary connection. In an organization with more than one connection:

-   Every organization invitation email contains a single SSO login link, the one for the primary connection. Distribute the login URL of each non-primary connection to the users who authenticate through it.
-   You cannot disable the primary connection while other active connections exist. To turn off SSO for the whole organization, disable every secondary connection first, and then disable the primary connection.

For the full set of connection actions, refer to [Manage SSO Connections](/docs/administration/manage-sso-connections).

**Additional Resource:** To add more identity providers, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers). To upload your AD FS federation metadata instead of entering details by hand, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).
