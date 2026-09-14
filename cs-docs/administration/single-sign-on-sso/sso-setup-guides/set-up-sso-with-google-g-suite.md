---
title: "Set up SSO with Google G-Suite"
description: "Set up single sign-on in Contentstack with Google Workspace (G Suite) as your SAML 2.0 identity provider, as one of up to five IdP connections."
url: /administration/set-up-sso-with-google-g-suite
---

# Set up SSO with Google G-Suite

## Set up SSO with Google G-Suite

This step-by-step guide explains how to set up [single sign-on](/docs/administration/about-single-sign-on-sso) (SSO) in Contentstack with Google G Suite as your SAML 2.0 identity provider (IdP). You create a connection in Contentstack, set up a custom SAML app in the Google Admin console, map attributes, turn the app on for your users, and then test and enable SSO in Contentstack.

You can attach up to five SAML 2.0 IdPs to a single Contentstack organization. Each IdP is a separate connection with its own certificate, session policy, role mapping, and login URL, which is useful when one user population authenticates through Google and another through a different IdP. This guide walks through one connection. To add and organize more connections, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers).

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Google Admin account
-   The organization owner role, a security manager role, or a custom role with SSO write permissions in your Contentstack [organization](/docs/administration/about-organizations)

## What You Will Learn

-   How to create a connection and generate the ACS URL in Contentstack.
-   How to set up a custom SAML app for Contentstack in the Google Admin console.
-   How to import Google's metadata into Contentstack instead of entering details by hand.
-   How to map attributes and turn the app on for your users.
-   How to test and enable SSO for your organization.

## Steps to Set up SSO with Google G Suite

The integration with Google G Suite can be done in two steps:

1.  [Create a Connection in Contentstack](#create-a-connection-in-contentstack)
2.  [Configure Google G Suite for Contentstack](#configure-google-g-suite-for-contentstack)

Let's see each of the steps in detail.

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



    Contentstack opens the connection at **1\. SSO Configuration** and generates the **Assertion Consumer Service (ACS)** URL, along with read-only details such as **Entity ID**, **SAML Version**, **Attributes**, and **NameID Format**. You need these details in [Step 2](#configure-google-g-suite-for-contentstack). Keep this window open.

    **Note:** The ACS URL contains this connection's SSO ID, so every connection in your organization has its own ACS URL. Use the ACS URL of the connection you are configuring.

    **Tip:** Instead of copying the ACS URL and Entity ID individually into the Google Admin console, share Contentstack's service provider (SP) metadata with your IdP team in one step. Use **Download Metadata XML**. If you enable SAML encryption on this connection, the downloaded metadata also carries the public certificate your IdP uses to encrypt assertions. You can download that certificate on its own from the [Contentstack public certificate](https://app.contentstack.com/public_cert.cer) link. For details, refer to [Download Contentstack (SP) Metadata](/docs/administration/download-sp-metadata).

2.  ## Configure Google G Suite for Contentstack

    1.  Log in to your Google Admin account, click **Apps**, and select **SAML apps**.  

        ![1.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb7a911dd47fa510a/6387667e4005df1070b03d5b/1.jpg)
    2.  Click **Add a service/App to your domain**, or click the plus (**+**) icon in the bottom right corner.  

        ![2.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt48f770fed1c50e2a/5d65144965cd852769378a75/2.png)
    3.  This opens the **Enable SSO for SAML Application** window. Click **SETUP MY OWN CUSTOM APP**.  

        ![3.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt212e63b7ec42bf67/6387670b76567a10a7cbe7ae/3.jpg)
    4.  Copy the link in the **SSO URL** field, and download the certificate using the **Download** button. You can also click **DOWNLOAD METADATA** to get Google's IdP metadata XML, which lets you import all the details into Contentstack in one step.
    5.  In Contentstack, go to **2\. IdP Configuration** for this connection and provide Google's details in one of the following ways:

        -   **Metadata XML**: Upload the IdP metadata file you downloaded from the Google Admin console. Contentstack parses the sign-on URL and certificate for you. This is the recommended path for Google G Suite.
        -   **Manual entry**: Paste the **SSO URL** into the **Single Sign-On URL** field, and upload the downloaded certificate into the **Certificate** field. The **Single Sign-On URL** must use HTTPS.

        **Tip:** Importing metadata reduces manual entry and errors. Signature algorithm and SAML encryption are not part of IdP metadata, so you always set those by hand. For the full procedure and error handling, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).

        **Warning:** A connection stores one signing certificate. Contentstack shows its expiry date next to the field. When your IdP switches to a new signing certificate, every SAML assertion arrives signed by a certificate Contentstack does not recognize, and sign-in through this connection fails until you upload the new certificate here. Coordinate the replacement with the switch on the IdP side rather than waiting for the current certificate to expire.



        ![4.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt828aff1c2bf237f4/6387673d1da254109279d823/4.jpg)
    6.  Next, you will see the **Basic information for your Custom App** window, where you can provide an application name and upload a logo. Then click **Next** to proceed to SAML settings.

        **Tip:** In an organization with more than one connection, name each Google SAML app after the Contentstack connection it serves, for example "Contentstack (Acme Employees)."



        ![5.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt154358226b0fed05/63876753f33b43105dcdaab0/5.jpg)
    7.  In the **Service Provider Details** window, provide the **ACS URL** and the **Entity ID** of your Contentstack connection.  

        ![6.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf2676e91e660b57b/5d6513e35ab0281fbe5e1764/6.png)
    8.  In the **Name ID** field, select **Basic information** and **Primary Email**. For the **Name ID Format** field, select **EMAIL**. Click **Next**.  

        ![7.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3e97433c9bc1a861/6387678ef9bf30104c6e3959/7.jpg)
    9.  In the **Attribute Mapping** window, click **ADD NEW MAPPING**.  

        ![8.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta65ef543f9a14a18/638767a87140e510ae4aba25/8.jpg)
    10.  Enter "email," and select **Basic information** and **Primary Email**; enter "first\_name," and select **Basic information** and **First Name**; and enter "last\_name," and select **Basic information** and **Last Name**.  

         ![9.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt735162fa4de82569/638767c1303d7a10a114a61d/9.jpg)
    11.  On the following prompt, click **OK**.  

         ![10.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0a6ba6362400d2c5/638767d307d496104f3925e0/10.jpg)
    12.  Now, you will see your SAML app.  

         ![11.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3e6b37e5834cb010/638767ee12a129103e952504/11.jpg)
    13.  Click the three dots at the top of the gray box. You will see three options: **On for everyone**, **OFF**, and **On for some organizations**.  

         ![12.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc38e3476ae5aa85e/638768059743b810a4de87ab/12.jpg)
    14.  Select the option that matches the user population for this connection, and confirm.

         **Note:** Turn the app on only for the users who authenticate through this connection. In an organization with more than one connection, a user is identified by email address across every IdP, and the same email cannot map to different users in different IdPs.



         ![13.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt10ba7faa020e7601/6387681b6237d71069351c37/13.jpg)
    15.  Your app is now turned on for the selected users.  

         ![Screenshot 2017-11-17 16.29.18.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1174f382c2493cad/63ea4ac5723591743bc4d2c9/Screenshot_2017-11-17_16.29.18.png)



    With this, you are done with setting up the Contentstack app in Google G Suite. You can now proceed to configuring the remaining steps in Contentstack.

## Further Steps

### User Management

In Contentstack, save your settings and go to **3\. User Management** for this connection.

-   **Strict Mode**: Enable [Strict Mode](/docs/administration/set-up-sso-in-contentstack#strict-mode) if you do not want any user to access the organization without SSO login.

**Note:** Strict mode is set per connection, but it takes effect across the whole organization. If any **enabled** connection has strict mode on, the entire organization is SSO-only. Because of this, only one connection can hold the strict mode toggle at a time, and enabling strict mode on one connection disables the toggle on the others. Disabling a connection that has strict mode on removes strict mode for the organization, because a disabled connection does not contribute to the organization's strict state.

-   **User Email Whitelists**: Lets specified users access APIs even when strict mode is enabled. This setting is organization-scoped and applies only when strict mode is enabled, so the field appears only under the **User Management** step of the connection that has strict mode enabled. Enter up to 100 email addresses separated by commas, for example, user1@example.com, user2@example.com. Each address must belong to an accepted, non-owner member of the organization.

**Note:** This is a plan-based feature. For access, contact our [support](mailto:support@contentstack.com) team.

-   **Session Time-Out**: [Session Time-Out](/docs/administration/set-up-sso-in-contentstack#session-time-out) lets you define the session duration for a user signed in through this connection. The default is 12 hours, and you can set any value between 1 and 24 hours. This setting applies per connection, so different user populations can have different session lengths.

**Note:** IdP Role Mapping is currently supported for Okta, OneLogin, and Microsoft Entra ID. To know how it works, refer to [IdP Role Mapping](/docs/administration/idp-role-mapping).

### Test & Enable

Go to **4\. Test & Enable** for this connection in Contentstack.

Click [Test SSO](/docs/administration/set-up-sso-in-contentstack#test-sso) to check that your settings are configured properly. On the **Login via SSO** page, specify this connection's SSO ID. It is highly recommended that you test your settings before enabling the connection.

To enable SSO for your Contentstack organization, click [Enable SSO](/docs/administration/set-up-sso-in-contentstack#enable-sso). Once enabled, users can access the organization through this connection.

You can then disable the connection from the same page when required.

**Note:** The first connection you enable becomes the organization's primary connection. In an organization with more than one connection:

-   Every organization invitation email contains a single SSO login link, the one for the primary connection. Distribute the login URL of each non-primary connection to the users who authenticate through it.
-   You cannot disable the primary connection while other active connections exist. To turn off SSO for the whole organization, disable every secondary connection first, and then disable the primary connection.

For the full set of connection actions, refer to [Manage SSO Connections](/docs/administration/manage-sso-connections).

**Additional Resource:** To add more identity providers, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers). To import Google's metadata instead of entering details by hand, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).
