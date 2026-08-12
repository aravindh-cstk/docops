---
title: "Set up SSO with Active Directory Federation Services (AD FS)"
description: "This step-by-step guide explains how to setup Single Sign-On in Contentstack with AD FS as your SAML 2.0 Identity Provider (IdP):"
url: /administration/set-up-sso-with-adfs
---

# Set up SSO with Active Directory Federation Services (AD FS)

## Set up SSO with Active Directory Federation Services (AD FS)

This step-by-step guide explains how to set up [Single Sign-On](/docs/administration) in Contentstack with AD FS as your SAML 2.0 Identity Provider (IdP). You create an SSO name and Assertion Consumer Service (ACS) URL in Contentstack, configure a Relying Party Trust on Windows Server, define claim rules, export the token-signing certificate, and then configure and enable SSO in Contentstack.

**Note:** This guide covers SAML 2.0 SSO setup using Windows Server 2012 R2 Standard (Windows Server 2008R2 is supported too, but requires additional setup), and AD FS 2.0 serves as the Identity Provider.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   AD FS administrator access to a Windows Server
-   An AD FS token-signing certificate

## What You Will Learn

-   How to create an SSO name and ACS URL in Contentstack.
    
-   How to configure a Relying Party Trust for Contentstack on Windows Server.
    
-   How to define claim rules and export the token-signing certificate.
    
-   How to configure AD FS details in Contentstack and enable SSO.
    

## Steps to Set up SSO with AD FS

1.  [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
2.  [Configure Windows Server](#configure-windows-server)
3.  [Edit Claim Rules for your AD FS App](#edit-claim-rules-for-your-ad-fs-app)
4.  [Configure AD FS details in Contentstack](#configure-ad-fs-details-in-contentstack)

Let’s go into each of the processes in detail.

1.  ## Create SSO Name and ACS URL in Contentstack
    
    1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the **Organization Settings** page and click on the **SINGLE SIGN-ON** tab.![Set_up_SSo_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb9ada275bd3bc7c9/60e3274ce743d53d6a654425/Set_up_SSo_1_highlighted.png)
    2.  Enter an **SSO Name** of your choice, and click **Create**. For example, if your company name is “Acme, Inc.” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in.
        
        **Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).
        
        ![Set_up_SSo_2_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf5d1bb6d8af865aa/60e327633b10992ed7acc254/Set_up_SSo_2_highlighted.png)
        
        Let's use “sso-test” as the **SSO Name**.
        
    3.  This will generate **Assertion Consumer Service (ACS)** URL and other details such as **Entity ID**, **Attributes,** and **NameID Format**. These details will be used in **Step 2** for configuring Contentstack app in AD FS.![ACS_URL.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbbd19c8098a9cc1f/63762ef176567a10a7cb82c1/ACS_URL.png)  
          
        Keep this window open, as you may need these details for setting up the Contentstack app in AD FS.
2.  ## Configure Windows Server
    
    1.  Open the AD FS Management Console, you will see the dashboard as follows:  
        ![adfs-mangement-console.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0f409c370390012c/5d6513c8cc605f23dfb5542f/adfs-mangement-console.png)
    2.  We will define a Relying Party Trust (RPT) which will serve as a connection between AD FS and Contentstack. Click on **Add Relying Party Trust** from the **Actions** sidebar on the right as shown in the above screenshot. This will open the **Add Relying Party Trust Wizard** where you need to perform certain steps to create your own RPT. Click on **Start**:  
        ![step-1-add-relying-party.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7f7552b498b4d160/5d6513c04532dc2764646d48/step-1-add-relying-party.png)
    3.  Select a data source for your Windows Server. Choose **Enter data about the relying party manually**. This option will allow you to manually enter the details of the relying party organization.  
        ![step-2-select-data-source.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd38038f6888fa8a6/5d6513bd0d77ee2fe445eff4/step-2-select-data-source.png)Click on **Next** to proceed ahead.
    4.  Enter a name for your relying party, for example, “ms-adfs-test.”  
        ![step-3-Display-name.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd5c676de7f39e175/5d6513bd79adf9235f38e9ff/step-3-Display-name.png)
    5.  To choose a profile, click on **AD FS profile**. This profile supports relying parties that are interoperable with SAML 2.0 protocol. Then, click on **Next**.  
        ![step-4-choose-profile.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3119fb4b52c6b446/5d6513bbcc605f23dfb5541b/step-4-choose-profile.png)
    6.  You can skip the **Configure Certificate** step, as it is not required. Click on **Next**.  
        ![step-5-certificate.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdb6095b71b8c3d4c/5d6513bbde50ec209c8f4528/step-5-certificate.png)
    7.  In **Configure URL**, select **Enable support for the SAML 2.0 WebSSO protocol**, and enter the Assertion Consumer Service URL that we created in Contentstack in Step 1.c. Finally, click on **Next**.  
        ![step-6-configuration-url.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltfdf04e1b51393358/5d6513b910bdff289acf52e9/step-6-configuration-url.png)
        
        **Warning:** Do not add a slash “/” at the end of identifier, otherwise, this integration will not work.
        
    8.  In the **Configure Identifiers** section, enter the Entity Identifier URL (without a slash “/” at the end) that was generated in Contentstack, and click on **Add**.  
        ![step-7-configue-identifiers.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt91bd782b5938e3b5/5d6513b91aa7592787971620/step-7-configue-identifiers.png)  
        After adding the Entity Identifier URL, click on **Next**.
    9.  Click on the **I do not want to configure multi-factor authentication settings for this relying party trust at this time** radio button in the **Configure Multi-factor Authentication Now?** section, and click on **Next**.![step-8-configure-multi-auth.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltce1ef60d80a98a4d/5d6513b75ab0281fbe5e174a/step-8-configure-multi-auth.png)
    10.  In the **Choose Issuance Authorization Rules** section, select **Permit all users to access this relying party** to allow all Active Directory users to log into Contentstack, and click on **Next**.  
         ![step-9-permit-users.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltee93b1aee5b3c7de/5d6513b7db2a5d2441d96884/step-9-permit-users.png)
    11.  The **Ready to Add Trust** section will display the configuration that you set. Don’t change any setting and click on **Next**.  
         ![step-10-ready-to-add-trust.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9def19361144885e/5d6513b445154b20a690289d/step-10-ready-to-add-trust.png)
    12.  Finally, you have successfully configured the Relying Party Trust. Leave the **Open the Edit Claim Rules dialog for this relying party trust when the wizard closes** option checked to set up the Claim Rules.
    13.  Click on **Close** to close the wizard.  
         ![step-11-final.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt679b6644c0b5c975/5d6513b4d84c39242e05d414/step-11-final.png)
    
    As soon as you have configured Windows Server, the **Edit Claim Rules for** _**app\_name**_ window opens up. Let us see how to set up claim rules in the next step.
    
3.  ## Edit Claim Rules for your AD FS App
    
    1.  In the **Edit Claim Rules for ms-adfs-test** window, click on the **Add Rule** button under the **Issuance Transform Rules** tab.  
        ![step-12-edit-claim-rules.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9f41aa89f5316d3c/5d6513b279adf9235f38e9f7/step-12-edit-claim-rules.png)
    2.  The **Add Transform Claim Rule Wizard** window opens where you need to select **Send LDAP Attributes as Claims** as the **Claim rule template**, and click **Next**.  
        ![step-13-choose-rule-type.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1db19518d29a71f0/5d6513b05ab0281fbe5e1742/step-13-choose-rule-type.png)
    3.  Enter a name for your Claim Rule, for example, “email,” then set **Attribute store** to **Active Directory**. 
    4.  Now we need to enter LDAP attributes. We will enter the LDAP attribute **E-Mail-Addresses** twice and set their outgoing types to **E-Mail Address** and **email**. Similarly, we will enter the LDAP attribute **Given-Name** twice and set their outgoing types to **Given-Name** and **first\_name**, and enter the LDAP attribute **Surname** twice and set their outgoing types to **Surname** and **last\_name**.  
        ![step-13-a.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc9e089c066c7cfbb/5d6513b25760052efac57a10/step-13-a.png)
        
        **Note:** Every attribute has been entered twice in order to provide a user-specific claim type (i.e., **email**, **first\_name**, and **last\_name**).
        
    5.  Click **OK** when you are done adding the required LDAP attributes.  
        ![step-13-b.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0a78a19b076814b2/5d6513b024521b0c64edc995/step-13-b.png)
        
        **Warning:** Make sure you select accurate options because the integration may not work if the variant you selected does not match.
        
    6.  You need to add another Claim Rule. So, click on **Add Rule** on the **Issuance Transform Rules** tab, select **Transform an Incoming Claim**, and click on **Next**.  
        ![step-14-incoming-claim.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1af73b940d6801d7/5d6513ae45154b20a6902893/step-14-incoming-claim.png)
    7.  Enter a Claim rule name, for example, **Incoming-claim**, set **Incoming claim type** to **E-Mail Address**, set **Outgoing claim type** to **Name ID**, and set **Outgoing name ID format** to **Email**. 
    8.  Select **Pass through all claim values** and click **Finish.**![step-14-a-incoming-claim.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt18dd15bb4c764885/5d6513ae4532dc2764646d3e/step-14-a-incoming-claim.png)
    9.  In the **Edit Claim Rules** window, click **OK**.
    10.  Now, click on **Service** > **Certificates**; select your Token-signing certificate and click **View Certificate…** in the **Actions** pane.![step-15-download-cert.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd7341206d7c0166a/5d6513ab5f97a827821d8285/step-15-download-cert.png)
    11.  Click the **Details** tab and click **Copy to File…** option.  
         ![step-16-a-download-cert.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt541848bebafc7347/5d6513abde50ec209c8f451e/step-16-a-download-cert.png)  
         This will open the **Certificate Export Wizard** window. Click **Next**.  
         ![step-16-download-cert.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2c961cb80b9e780e/5f46b0e6c0e5e047f9386fbb/step-16-download-cert.png)
    12.  Select **Base-64 encoded X.509 (.CER)** as the format of your certificate, and click **Next**.  
         ![step-16-b-download-cert.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta39a74f50cfa3e64/5d6513a87afbb0203184b5a2/step-16-b-download-cert.png)
    13.  Next, click on **Browse** and choose a location in your filesystem to save the certificate file. Click **Next**, and click **Finish** and **OK** if the certificate file was successfully exported.  
         ![step-16-c-download-cert.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt064cdd18b13f290e/5d6513a5aa1103252e0b8b26/step-16-c-download-cert.png)
    14.  On your AD FS Server, click on **Service** > **Endpoints,** and locate the endpoint URL path for the SAML 2.0 specification. ![step-17-adfs-url.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9a9863479a8fc5e5/5d6513f34d3ad511ffc4a52d/step-17-adfs-url.png)  
         Check the URL path of SAML 2.0/WS-Federation Endpoint. We will be using this when configuring AD FS details in Contentstack.
4.  ## Configure AD FS details in Contentstack
    
    1.  Enter the Single Sign-On Login URL of your AD FS service into the **Single Sign-on URL** field in Contentstack SSO settings. This is generally the URL of your AD FS service followed by the suffix “/adfs/ls/”.![Set_up_SSo_4_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltaede158f66c4ba63/60e327a2979c171ed133e01a/Set_up_SSo_4_highlighted.png)
    2.  Upload the certificate that you downloaded into the **Certificate** field in Contentstack.

## Further Steps

### User Management

In Contentstack, save your settings and go to **3\. User Management**. 

Enable [**Strict Mode**](/docs/administration/set-up-sso-in-contentstack#strict-mode) if you do not want any users to access the organization without SSO login.

![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt76d8a1401bbd3062/60e324887df6873288cd7e3b/image.png)

[**Session Timeout**](/docs/administration/set-up-sso-in-contentstack#session-timeout) lets you define the session duration for a user signed in through SSO. While the default is set to 12 hours, you can modify it as per your requirement.

**Note:** We are yet to introduce IdP Role Mapping for AD FS. If you want to know how it works, check out our [IdP Role Mapping](/docs/administration/idp-role-mapping) document.

### Test & Enable

Go to **4\. Test & Enable** in Contentstack.Click the [**Test SSO**](/docs/administration/set-up-sso-in-contentstack#test-sso) button to check if your SSO settings have been configured properly. It is highly recommended that you test your settings before enabling SSO.

![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt372469429b141fd4/60e3249b92aa422edd5e387f/image.png)

To enable SSO for your Contentstack organization, click on [**Enable SSO**](/docs/administration/set-up-sso-in-contentstack#enable-sso). Once this is enabled, users of the organization can access the organization through SSO. 

![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte01758f9cbbb449c/60e324c03b10992ed7acc23a/image.png)

You can disable SSO anytime from the same page.

![Disable_SSO.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd804680545216a38/63762ef15834861044c1f25b/Disable_SSO.png)
