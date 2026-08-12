---
title: "Set up SSO with Microsoft Azure AD B2C"
description: "Learn how to effortlessly set up Single Sign-On (SSO) with Microsoft Azure AD B2C on Contentstack."
url: /administration/set-up-sso-with-microsoft-azure-ad-b2c
---

# Set up SSO with Microsoft Azure AD B2C

## Set up SSO with Microsoft Azure AD B2C

This step-by-step guide explains how to set up [Single Sign-On](/docs/administration/about-single-sign-on-sso) in Contentstack with Microsoft Azure Active Directory (AD) B2C as your SAML 2.0 Identity Provider (IdP).

In a nutshell, this integration requires following steps:

1.  [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
2.  [Configure Contentstack App in Microsoft Azure AD B2C](#configure-contentstack-app-in-microsoft-azure-ad-b2c)
3.  [Configure Microsoft Azure AD B2C Details in Contentstack](#configure-microsoft-azure-ad-b2c-details-in-contentstack)
4.  [Add Users to Your Microsoft Azure AD B2C Application](#add-users-to-your-microsoft-azure-ad-b2c-application)
5.  [Test and Enable SSO](#test-and-enable-sso)

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner](/docs/administration/about-administration-roles) permissions
-   Active Microsoft Azure AD B2C subscription

## What You Will Learn

-   How to create an SSO name and generate the ACS URL in Contentstack.
    
-   How to register and configure the Contentstack app in Azure AD B2C.
    
-   How to configure the Azure AD B2C IdP details in Contentstack.
    
-   How to add users and test, then enable, SSO.
    

## Create SSO Name and ACS URL in Contentstack

Start by creating an SSO Name and generate the ACS URL in Contentstack

1.  Log in to your [Contentstack account](https://www.contentstack.com/login/), go to the **Organization Settings** page, and click the **Single Sign-On** tab.![SSO_AD_B2C_-_Single_Sign_on.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5727bef6997ce85b/6501997e7db54e50cec1ab57/SSO_AD_B2C_-_Single_Sign_on.png)  
    
2.  Enter an **SSO Name** of your choice, and click **Create**. For example, if your company name is “Acme, Inc.” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in.
    
    **Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).
    
    ![SSO_AD_B2C_-_SSO_Name.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt630dbc32e94a82c8/6501997e1c72d81dfe8b0d09/SSO_AD_B2C_-_SSO_Name.png)
    
    Let's use “sso-test” as the SSO Name.
    
3.  When you click **Create**, this will generate the **Assertion Consumer Service URL** and other details such as **Entity ID**, **Attributes**, **NameID Format**, and **SAML Version**. These details will be used in [Step 2](#configure-contentstack-app-in-microsoft-azure-ad-b2c) for configuring the Contentstack app in Microsoft Azure AD B2C.![Azure_AD_B2C_-_SSO_Configuration_-_Step_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteecae654830e6ebf/6501997e68d8e15c4f6042f7/Azure_AD_B2C_-_SSO_Configuration_-_Step_3.png)  
    

-   Keep this window open, as you may need these details for setting up the Contentstack app in Microsoft Azure AD B2C.
    
-   ## Configure Contentstack App in Microsoft Azure AD B2C
    
-   To configure the integration of Contentstack into Microsoft Azure AD B2C, you need to add the Contentstack app in Microsoft Azure AD B2C Portal.
    
    1.  Go to the [Microsoft Azure Portal](https://portal.azure.com/), and click on **Azure AD B2C**:![Azure-AD-B2C-portal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt68f157f35f1d58ad/64f6cbd555996b51f906bcc3/Azure_AD_B2C_-_portal.png)
        
        **Note:** Please make sure you have an active subscription of Azure AD B2C before we proceed to the next step.
        
    2.  Within the **Azure AD B2C** portal, in the left navigation panel, scroll and click **Identity Experience Framework**.  
        ![Azure-AD-B2C-IEE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5333f6ebbc7b146f/64f6cbc89bcd1bf0cd1cd2e6/Azure_AD_B2C_-_Identity_Experience_Framework.png)
    3.  Next, generate the required security certificate that you will be needing in the next step.
        
        **Additional Resource:** For detailed instructions on generating the certificate, refer to the [Obtain a Certificate](https://learn.microsoft.com/en-us/azure/active-directory-b2c/saml-service-provider?tabs=macos&pivots=b2c-custom-policy#obtain-a-certificate) documentation.
        
    4.  Next, you need to create and upload the Policy keys for your application. To do so, follow the steps given below:
        1.  Navigate to the **Policy keys** section in your Azure AD B2C portal and click the **\+ Add** button.  
            ![Azure-AD-B2C-add-policy-keys](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83c5c7923a131e25/64f6cbc7b8c6d65f8c0e33c1/Azure_AD_B2C_-_Add_Policy.png)
        2.  Within the **Create a key** panel that appears, select **Upload** from the dropdown menu for the **Options** field.
        3.  Enter the **Name** for the policy key.
        4.  In the **File upload** field, browse through your local machine and select the security certificate created in the previous step.
        5.  Enter a **Password** and click the **Create** button.  
            ![Azure-AD-B2C-create-policy keys](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt18674482658678a8/64f6cbc78606a861d4c84542/Azure_AD_B2C_-_Create_Policy.png)
    5.  Register the **IdentityExperienceFramework** and **ProxyIdentityExperienceFramework** applications in your portal.
        
        **Additional Resource:** Refer to the Microsoft documentation on Register the [IdentityExperienceFramework application](https://learn.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows?pivots=b2c-custom-policy#register-the-identityexperienceframework-application) and Register the [ProxyIdentityExperienceFramework application](https://learn.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows?pivots=b2c-custom-policy#register-the-proxyidentityexperienceframework-application) documents for more information.
        
    6.  Register the Contentstack Application in the Azure AD B2C Portal as follows:
        1.  Navigate to **App registrations** and click the **\+ New registration** button.  
            ![Azure-AD-B2C-app-registration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb79a55e995dc93a3/64f6cbc79bcd1bd53a1cd2e2/Azure_AD_B2C_-_App_registration.png)
        2.  Enter the **Name** for your application.
        3.  Select any one of the **Supported account types** from the given options.
        4.  Within the **Redirect URI** section. Select **Web** as the platform from dropdown and add the URL that you obtained while setting up your stack in [step 1.3](#create-sso-name-and-acs-url-in-contentstack).
        5.  Select the **Checkbox** under **Permissions** and click the **Register** button.  
            ![Azure-AD-B2C-registeration-an-app](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt68ff0a77217ea69e/64f6cbd529dd3665a93b4299/Azure_AD_B2C_-_Register_app.png)
            
            **Note:** Copy the Application ID for later use in the custom policies.
            
    7.  To configure your application, go to the **Manifest** tab in the left navigation panel. In the **IdentifierUris** field, enter the **EntityId** that you received in [step 1.3](#create-sso-name-and-acs-url-in-contentstack).  
        ![Azure-AD-B2C-manifest](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfdb391afc292c9e8/64f6cbc7da83c9064bf97cbf/Azure_AD_B2C_-_Manifest.png)
        
          
        Click **Save** to secure your changes.
        
    8.  Within the **Identity Experience Framework**, navigate to the **Custom policies** tab and click the **Upload custom policy** button.  
        ![Azure-AD-B2C-custom-policy](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd4e11afffc3ff1ec/64f6cbc7da83c9b9edf97cbb/Azure_AD_B2C_-_Custom_policy.png)
        1.  If you already have custom policies defined for your B2C application, you can use the same ensure SAML2 Assertion is configured. If not you can use the [custom policy starter pack](https://learn.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows?pivots=b2c-custom-policy#get-the-starter-pack) and follow [SAML assertion configurations](https://learn.microsoft.com/en-us/azure/active-directory-b2c/saml-service-provider?tabs=macos&pivots=b2c-custom-policy#enable-your-policy-to-connect-with-a-saml-application).
        2.  In the custom policy document, ensure the following output claims are added to the **Technical profile** section.  
            
            ```
            <OutputClaim ClaimTypeReferenceId="givenName" PartnerClaimType="first_name" />
            <OutputClaim ClaimTypeReferenceId="surname" PartnerClaimType="last_name" />
            <OutputClaim ClaimTypeReferenceId="signInNames.emailAddress" PartnerClaimType="email" />
            ```
            
        3.  Browse through your local machine and select the file that includes the updated custom policy as per your configuration and click **Upload.**  
            ![Azure-AD-B2C-upload-policy](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2bd2f2b85c551504/64f6cbd555996bbcd106bcc7/Azure_AD_B2C_-_Upload_policy.png)
    9.  Once the setup is done, navigate to the below URL https://<tenant-name>.b2clogin.com/<tenant-name>.onmicrosoft.com/<policy-name>/Samlp/metadata where <tenant-name> is your Azure B2C tenant name.  
        This should give you a valid SAML response.
    10.  Search for **SingleSignOnService** in the page and note the **URL** mentioned under the **Location** parameter.
-   Configure Microsoft Azure AD B2C Details in Contentstack
-   To configure the Microsoft Azure AD B2C details in your stack, follow the steps below:
    
    1.  Paste the URL from step 2.10 within the **Single Sign-On Url** field in your stack’s **Single Sign-On** settings.![SSO_AD_B2C_-_Configure_AD_B2C_in_contentstack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt217fe28860bafb05/6501997ec12d771768d067eb/SSO_AD_B2C_-_Configure_AD_B2C_in_contentstack.png)  
        
    2.  In the **Certificate** field, upload the certificate generated in [step 2](#configure-contentstack-app-in-microsoft-azure-ad-b2c).
-   Add Users to Your Microsoft Azure AD B2C Application
-   After setting the necessary configurations in Contentstack, you can add users to your newly added application. You can add users in two ways,
    
    -   Through SignUp page if configured
    -   Through Users list on the application
-   Here, we are using the second method to add users.
    
    1.  Within the **Microsoft Azure AD B2C** portal, click Users in the left navigation panel.
    2.  Click the **+New Users** button.  
        ![Azure-AD-B2C--new-user](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4affc8a2a439cfb4/64f8206f9bf26197fb6ba3cd/Azure_AD_B2C_-_Select_New_User.png)
    3.  In the **Select template**, choose any one from the options provided. You can either **Invite user**, **Create user**, or **Create Azure AD B2C** user.
    4.  In the **Identity** field, provide the required data and select the **Create** button.  
        ![Azure-AD-B2C-create-user](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b0768588c95a1ab/64f6cbd59da0150c141ea1f7/Azure_AD_B2C_-_New_User.png)
-   Test and Enable SSO
-   Next, you can try out the “Test SSO” and “Enable SSO” steps in Contentstack
    
-   ### Test SSO
    
-   Before enabling SSO, it is recommended that you test the SSO settings configured so far.
    
-   To do so, perform the following steps:
    
    1.  Click on the **Test SSO** button and it will take you to Contentstack’s **Login Via SSO** page where you need to specify your organization's SSO name.
    2.  Then, click **Continue** to go to your IdP sign in page.
    3.  Sign in to your account. If you are able to sign in to your IdP, your test is successful.  
        On successful connection, you will see a success message as follows:  
        ![Azure-AD-B2C-test-sso](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43e8a5bdf43e10e6/64f6cbfd8606a8b742c84546/SSO_AD_B2C_-_Test_SSO.png)
-   ### Enable SSO
    
-   Once you have tested your SSO settings, click **Enable SSO** to enable SSO for your Contentstack organization. ![SSO_AD_B2C_-_Enable_SSO.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5438eefb58cae9d5/6501997e9bcd1b45cd1cfd02/SSO_AD_B2C_-_Enable_SSO.png)
-   Confirm your action by clicking **Yes**.
    
-   Once this is enabled, users of this organization can access the organization through SSO. If needed, you can always disable SSO from this page as well.
