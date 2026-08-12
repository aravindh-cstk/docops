---
title: "Set Up SSO in Contentstack"
description: "Set up SSO in Contentstack"
url: /administration/set-up-sso-in-contentstack
---

# Set Up SSO in Contentstack

## Set Up SSO in Contentstack

**Note:** Only the owner of the organization has the right to set up SSO.

This is a general step-by-step guide explaining the process of setting up single sign-on in Contentstack with your SAML 2.0 Identity Provider.

## Prerequisites

-   Access to your identity provider's configuration settings
-   [Owner](/docs/headless-cms/types-of-roles#owner) role in your Contentstack [organization](/docs/administration/about-organizations)

## What You Will Learn

-   How to create an SSO name and Assertion Consumer Service (ACS) URL in Contentstack.
    
-   How to configure the Contentstack application in your IdP.
    
-   How to enter your IdP details in Contentstack.
    
-   How to manage user access with Strict Mode, email whitelists, and session timeout.
    
-   How to test and enable SSO.
    

## Steps to Enable SSO in Contentstack

In order to set up SSO for your Contentstack organization with any IdP, you need to proceed according to steps given below.

1.  [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
2.  [Setup Contentstack app in your IdP](#setup-contentstack-app-in-your-idp)
3.  [Configure IdP details in Contentstack](#configure-idp-details-in-contentstack)
4.  [User Management in Contentstack](#user-management-in-contentstack)
5.  [Test and Enable SSO](#test-and-enable-sso)

Let’s go through each of these steps in detail.

1.  ### Create SSO Name and ACS URL in Contentstack
    
    1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login), click the “Org Admin” icon on the left navigation panel and select **Single Sign-On**.
        
        ![Set_Up_SSO.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd63658aa6b7e086c/6710d95bbcf8a669de1a9e9f/Set_Up_SSO.png)
    2.  Enter an SSO name of your choice, and click **Create**. For example, if your company name is “Acme, Inc.,” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in.
        
        **Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).
        
        ![Set_Up_SSO_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt557eb5531db0d6d1/6710d95b489d5671358555f7/Set_Up_SSO_2.png)
        
        Let's use “test-sso” as the SSO Name.
        
    3.  This will generate the **Assertion Consumer Service (ACS)** URL and other details such as **Entity ID**, **Attributes**, and **NameID Format**. You will need these details in Step 2 for configuring the Contentstack app in your Identity Provider.
        
        ![Set_Up_SSO_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte21a34e19a317c55/6710d95b88de8877de3e3cb5/Set_Up_SSO_3.png)
        
        Keep this window open, as you may need these details for setting up the Contentstack app in your IdP in the next step.
        
2.  ### Setup Contentstack app in your IdP
    
    1.  Login to your IdP admin account.
    2.  Create a new application (also known as app or connector in some IdPs) with application name preferably as "Contentstack."
    3.  In SAML settings, you need to provide the "SSO Configuration" details that you received from Contentstack in **Step 1**.
        
        In your IdP, provide the following details:
        
        1.  In the **Single Sign-on URL** field, provide the ACS URL that was generated for your organization in Contentstack.
        2.  Use Contentstack’s Entity ID (generated in Step 1) in your IdP in **Audience URI**, **SP Entity ID**, **SAML Issuer ID**, or fields similar to these.
        3.  In the **NameID Format**, select or enter **EmailAddress**. This defines the parameter that your IdP should use to identify Contentstack users.
        4.  _**\[Optional Step\]**_ If you want to encrypt your SAML attributes, you need to enable SAML encryption in your IdP and upload the [Contentstack Public Certificate](/docs/administration/enable-saml-encryption/#download-the-contentstack-public-certificate-for-saml-encryption).
    4.  Under **Attribute Mapping** or **Attribute Statements**, add three attributes, i.e., **email**, **first\_name**, and **last\_name**, and map corresponding IdP values, such as email, first name, and last name. The Name format of the attributes(email, first\_name, last\_name) must be "Basic". If the Name format is selected as **Unspecified** or in any other format, then it doesn’t work.
    5.  **\[**_**Optional Step**_**\]** If you want to map IdP groups/roles to Contentstack roles, you need to add a new attribute called “roles” under **Attribute Mapping**, and return your IdP users’ roles or groups.
        
        **Note:** Perform this step only if **IdP Role Mapping** is part of your Contentstack plan.
        
    6.  Once you enter all the details and save your settings in IdP, you should receive **IdP Single Sign-On URL** and **X.509 certificate**. Use these details in **Step 3**.
3.  ### Configure IdP Details in Contentstack
    
    1.  Go to **2\. IdP Configuration** in Contentstack.
    2.  In the **Single Sign-On URL** field, paste the **IdP Single Sign-On URL** that you received from IdP in Step 2.
    3.  In the **Certificate** field in Contentstack, upload the **X.509** or **Public Key Certificate** that you received from your IdP.
    4.  Select the relevant algorithm from the options given under the **Signature Algorithm** field.
    5.  _**\[Optional Step\]**_ Enable the [SAML encryption](/docs/administration/enable-saml-encryption) in Contentstack if you want to encrypt your SAML attributes via your IdP.
    6.  Click **Save** to save IdP configuration.![Set_Up_SSO_4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2c406e4cff9d2b9/6710d95bfe2f9d3cb3e2c9d9/Set_Up_SSO_4.png)
    
    **Tip:** In some IdPs, you may have to assign the newly-created Contentstack application to the existing users of your IdP. You can find these settings under the **Users** section in IdP.
    
    With this step, you have completed SSO settings in your IdP. However, you need to configure two more steps in Contentstack.
    
    **Note:** If the organization owner logs out after updating the certificate and SSO login fails, they can still log back in using their credentials and restore the previous configuration. The organization owner can always log in using their Contentstack credentials, regardless of SSO status (enabled, disabled, misconfigured, or strict mode).
    
4.  ### User Management in Contentstack
    
    In Contentstack, go to **3\. User Management**. Here, you need to define important settings related to your users in your SSO-enabled organization. These settings include **Strict Mode**, **User Email Whitelists**, **Session Time-Out**, and **Advanced Settings**.
    
    ![Set_Up_SSO_5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2580e6af8d4e0bd8/67122016702a14919bf7039f/Set_Up_SSO_5.png)
    
    #### 
    
    **Strict Mode**
    
    Strict Mode lets you decide if you want to allow any non-IdP users (i.e., users that are not available in your IdP) to access the SSO-enabled organization in Contentstack.
    
    1.  **Enable “Strict Mode”**  
        If you enable **Strict Mode**, users that are not added to your IdP will not be able to access the Contentstack organization. This means that users can access the organization only through SSO, without any exceptions.
    2.  **Disable “Strict Mode”**  
        If you disable **Strict Mode**, users with special permission (i.e., users marked as **Allow access without SSO** in Organization User settings) can access this organization using Contentstack credentials, instead of through SSO (IdP credentials). It is similar to creating an exception list of users.
    
    **Invite users to access organization without SSO**  
    To allow users to access your SSO-enabled organization without SSO login (using Contentstack credentials), perform the following steps:
    
    1.  Disable **Strict Mode** in the **User Management** step in SSO settings.
    2.  Go to **Users** in Organization settings.
    3.  Click on **Invite User**. On the modal that appears, check **Allow Access Without SSO**, and enter user details.
    4.  Click **Invite**.
    
    #### **User Email Whitelists**
    
    The **User Email Whitelists** allows specified users to access APIs even when strict mode is enabled, bypassing any restrictions imposed by it. To whitelist users, simply enter their email addresses, separating multiple addresses with commas (e.g., user1@example.com, user2@example.com). This option becomes visible only when strict mode is active.
    
    **Note:** This is a plan-based feature and may not be available to all users. For further assistance or more information, contact our [support](mailto:support@contentstack.com) team.
    
    #### **Session Time-Out**
    
    You can define the session duration of user signed in through SSO. By default, this is set to 12 hours. However, you can set anywhere between 1 hour and 24 hours. The session begins when the user logs in to Contentstack via SSO and will timeout after 12 hours (or the time period that you specify here).
    
    #### **Advanced Settings**
    
    Under **Advanced settings**, you will find more advanced settings related to user management, which includes _**IdP Role Mapping**_.
    
    **Note:** The IdP Role Mapping feature is available only if it is part of your Contentstack plan. Consequently, only then will you find the **Role Mapping** section under **Advanced settings**. If you want to include this feature in your plan, contact our [Support](mailto:support@contentstack.com) team.
    
    ##### **Configuring IdP Role Mapping**
    
    [IdP Role Mapping](/docs/administration/idp-role-mapping) allows you to assign Contentstack roles to the users of a group/role in your IdP.
    
    Before you add new role mappings, you must add the “roles” attributes in the “Attribute Mappings” section in your IdP. The steps are covered in Step 2 above.
    
    To add new IdP role mapping, click on the **\+ ADD ROLE MAPPING** link. Enter the following details:
    
    -   **IdP Role Identifier**: Role identifier is the name or UID (by which it is uniquely identified in IdP) of the IdP group that you want to map. For example, “Contentstack Developers” or “Contentstack Project Managers.”
    -   **Organization Role**: Assign an organization-level Contentstack role (i.e., either “Admin” or “Member”) to the IdP group/role that you are mapping.
    -   **Stack Roles**: Assign [stacks](/docs/headless-cms/about-stack) as well as corresponding stack-level roles to this IdP role.
    
    On the [IdP side](#setup-contentstack-app-in-your-idp), you need to add “Group Mapping” or “Group Attributes” to map the roles.
    
    Likewise, you can add more role mappings for your Contentstack organization.
    
    In the **Role Delimiter** section, mention the character that serves as the delimiter for the roles. Depending on the IdP selected, the delimiter can be a space, comma (','), semicolon (;), or something else.
    
    Finally, select the **Enable IdP Role Mapping** checkbox to enable this feature.
    
    **Note:** After enabling **IdP Role Mapping**, the role management (in Contentstack) for the users of your IdP will be handled from your IdP, instead of from Contentstack.
    
5.  ### Test and Enable SSO
    
    #### **Test SSO**
    
    Before enabling SSO, it is recommended that you test it. To test it, perform the following steps:
    
    1.  Click on the **Test SSO** button. This opens the Contentstack’s **Login via SSO** page.
    2.  Specify your organization SSO name, and click on **Continue** to go to your IdP sign in page.
    3.  Sign in to your account. If you are able to sign in to your IdP, your test is successful.
        
        ![Set_Up_SSO_6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteec943deab92fc9b/6710d95bef9edcfde917ec09/Set_Up_SSO_6.png)
        
        On successful connection, you will see a success message.
        
    
    If you have enabled IdP Role Mapping, you’ll find the following details in a new page:
    
    1.  **SSO connection established successfully** - A success message is displayed.
    2.  **IdP Roles received** - The list of all the roles assigned to you in your IdP.
    3.  **Contentstack-IdP role mapping details** - The details of all the Contentstack Organization-specific and Stack-specific roles mapped to your IdP roles.
    4.  Click on the **Close** button.
    
    Now, you can safely enable SSO for your organization.
    
    **Note:** While testing SSO settings with IdP Role Mapping enabled, the test will be performed only for the IdP roles of the currently logged-in user (i.e., the user performing the test).
    
    #### **Enable SSO**
    
    Click on **Enable SSO** to enable SSO for your Contentstack organization. Once this is enabled, users of this organization can access the organization through SSO login. You can disable SSO from the same page when required.
    
    ![Set_Up_SSO_7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltefb9c3f4c8701321/6710d95bb7da8002c3eb7328/Set_Up_SSO_7.png)
    
    **Note:** If you've already logged into your SSO IdP, the trigger\_sso\_flow=<sso\_name> query parameter automatically lets you log in to Contentstack via SSO, allowing you to skip the Contentstack login page.
    
    After enabling SSO, you will see **SSO One-click URL** at the top of the SSO page. You can use this URL to directly go to Contentstack’s SSO login page. Bookmark this URL to skip multiple steps while logging in.
    
    ![Set_Up_SSO_8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd87cff359ee97f0/6710d95b9c37a306d0bb04e7/Set_Up_SSO_8.png)
    
    **Note:** Only the users invited to the SSO-enabled organization can access the organization if IdP Role Mapping is disabled. Your IdP users cannot directly access the organization if they have not been invited to this organization.
    
    #### **Disable SSO**
    
    After enabling SSO, you will notice that **4\. Test & Enable SSO** changes to **4\. Disable SSO** in your SSO settings page. You can disable SSO for your organization anytime by clicking the **Disable** button.
    
    ![Set_Up_SSO_9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt586c437ed1da28d6/6710d95bdc82aacaee6fe248/Set_Up_SSO_9.png)
    
    Once disabled, the existing users of your organization will have to use Contentstack credentials to sign in. In case the existing user does not have Contentstack credentials, the user will have to use the **Forgot password** link on the login page in Contentstack to create a new password for login.
