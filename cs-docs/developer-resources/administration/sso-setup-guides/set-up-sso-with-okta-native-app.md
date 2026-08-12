---
title: "Set up SSO with Okta Native App"
description: "This setup guide explains how to set up Single Sign-On in Contentstack with Okta Native as your SAML 2.0 identity Provider (IdP). See the process in detail here."
url: /administration/set-up-sso-with-okta-native-app
---

# Set up SSO with Okta Native App

## Set up SSO with Okta Native App

This guide explains how to set up [Single Sign-On](/docs/administration) in Contentstack with Okta as your SAML 2.0 identity Provider (IdP), using the native Contentstack app from the Okta App Catalog. You configure an SSO name in Contentstack, add and configure the Contentstack app in Okta, exchange the IdP details, optionally map roles, and then test and enable SSO.

**Supported features include:**

-   SP-initiated (Service-Provider-initiated) SSO
-   IdP-initiated (Identity-Provider-initiated) SSO
-   Just-In-Time provisioning

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Okta administrator account

## What You Will Learn

-   How to create an SSO name and ACS URL in Contentstack.
    
-   How to add and configure the Contentstack app in Okta as a SAML 2.0 IdP.
    
-   How to map Okta roles to Contentstack roles (optional).
    
-   How to test and enable SSO, and log in via SSO.
    

## Steps to Set up SSO with Okta Native App

The integration with Okta can be done in following easy steps:

1.  [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
2.  [Configure Contentstack App in Okta](#configure-contentstack-app-in-okta)
3.  [Configure Okta details in Contentstack](#configure-okta-details-in-contentstack)
4.  [Manage users access control in Okta](#manage-users-access-control-in-okta)
    1.  [Add application to users](#add-application-to-users)
    2.  [Add application to user groups for IdP Role Mapping](#add-application-to-user-groups-for-role-mapping)
5.  [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
6.  [Test and Enable SSO](#test-and-enable-sso)

Let’s see each of the processes in detail.

1.  ## Create SSO Name and ACS URL in Contentstack
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/), go to the **Organization Settings** page and click on the **SINGLE SIGN-ON** tab.
        
        ![SSO_Okta_-_SSO_in_Contentstack_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f5bcc6c065a73c6/6561aea239941742e4b48abc/SSO_Okta_-_SSO_in_Contentstack_App.png)
    2.  Enter an **SSO name** of your choice, and click **Create**. For example, if your company name is “Acme, Inc.” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in and cannot be editable later on.
        
        **Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).
        
        ![SSO_Okta_-_SSO_Name.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcd9c2661eb71ad99/6561aea236b54556b6cd6953/SSO_Okta_-_SSO_Name.png)
        
        Let's use “sso-test” as the **SSO Name**.
        
    3.  This will generate **Assertion Consumer Service (ACS) URL** and other details such as **Entity ID**, **Attributes** and **NameID** Format. These details will be used in [Step 2](#configure-contentstack-app-in-okta) for configuring the Contentstack app in Okta.
        
        ![SSO_Okta_-_Assertion_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef8d7fc1c3eef788/6561aa52dd3986449a143c2d/SSO_Okta_-_Assertion_URL.png)
    
    Keep this window open, as you may need these details for setting up the Contentstack app in Okta.
    
2.  ## Configure Contentstack App in Okta
    
    1.  Log in to your Okta Admin account.  
        ![SSO_Okta_-_Okta_Login_page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fc8cf555fcf67fd/6561aea2d5954944e1b656ec/SSO_Okta_-_Okta_Login_page.png)
    2.  After logging in, you will see the Okta dashboard. Click on the **Application** tab and select **Applications**.
        
        ![SSO_Okta_-_Okta_Application.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd1b9f58b570137cb/6561aea3ec79944e1a968203/SSO_Okta_-_Okta_Application.png)
    3.  In the **Applications** page, you will see your already created applications, if any.
        
        ![SSO_Okta_-_created_applications.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0249809a1d5090e/6561aa516a1419639b41556b/SSO_Okta_-_created_applications.png)
    4.  Click the **Browse App Catalog** to set up an application for Contentstack.
        
        ![SSO_Okta_-_browse_app_catalog.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7ddfa6074090a76a/6561aa51efd9ef732bb815e1/SSO_Okta_-_browse_app_catalog.png)
    5.  Search for “Contentstack” within the **Browse App Integration Catalog** section and select the **Contentstack** app.
        
        ![SSO_Okta_-_App_Integration_catalog.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1393142028eba70e/6561ae932d2f23c97ef3c44c/SSO_Okta_-_App_Integration_catalog.png)
    6.  You will be redirected to the **Contentstack** application. Click on the **Add Integration** button.
        
        ![SSO_Okta_-_Add_Integration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfbd5853738316f5/6561ae9336b5457125cd694f/SSO_Okta_-_Add_Integration.png)
    7.  You can edit the **Application label** as per your preference and click on **Done**.
        
        ![SSO_Okta_-_Add_app_in_Okta.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt271c7bc80290af42/6561ae9352b29bd0fc5bff39/SSO_Okta_-_Add_app_in_Okta.png)
    8.  You will be redirected to the application’s configuration page. Locate the **Sign On** tab and click the **Edit** button.
        
        ![SSO_Okta_-_Sign_On_in_Okta.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt57cb1956541d0781/6561aea3df4282512a2eedd8/SSO_Okta_-_Sign_On_in_Okta.png)
    9.  In the **Settings** section expand **Attributes** to add any additional attributes (Optional).
        
        ![SSO_Okta_-_Attributes.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83dfe2710537790a/6561aea20a03adb4c239a09d/SSO_Okta_-_Attributes.png)
    10.  Optionally, you can create role mapping. To do this, in the **Group Attribute Statements (Optional)** section, enter the following:
         
         -   For Name, enter “roles” Name.
             
         -   Under **Name format (optional)**, select **Unspecified**.
             
         -   For the **Filter**, select **Matches regex** and enter your regex term in the textbox beside it. For example, if all your **Contentstack** specific users are assigned roles that start with contentstack, enter the regex term ^contentstack.(\[^\\s\]+)\*.
             
         -   This will retrieve all the groups that start with "contentstack".
             
             ![SSO_Okta_-_Group_Attributes.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc86308ea60aa3df2/6561aea2ec7994b4039681ff/SSO_Okta_-_Group_Attributes.png)
             
             **Note:** Perform this step only if you want to enable [IdP Role Mapping](/docs/administration/idp-role-mapping).
             
    11.  In the **Advance Sign-On** Settings, enter the following details:
         
         -   **Assertion Consumer Service URL**: Enter the Assertion Consumer Service (ACS) URL that you created in Contentstack in [Step 1](#create-sso-name-and-acs-url-in-contentstack).
             
         -   **Entity ID**: Enter the Entity ID of Contentstack, from [step 1](#create-sso-name-and-acs-url-in-contentstack), typically represented as https://app.contentstack.com.
             
         -   **Application username format**: Select the Email option
             
         -   **Update application username on**: Select Create and update
             
         
         ![SSO_Okta_-_Update_app_username.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd16a76b439992ea/6561aa5cf415048279125477/SSO_Okta_-_Update_app_username.png)
    12.  Click **Save**.
         
3.  ## Configuring Okta details in Contentstack
    
    1.  In Okta, click the **Sign On** tab of the application that you created in [Step 2](#configure-contentstack-app-in-okta) and then click **More details**.
        
        ![SSO_Okta_-_More_details.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1588ae11bbcbd0ec/6561aa5204116d6d7329e9e9/SSO_Okta_-_More_details.png)
    2.  Copy the **Sign-On URL** and Download the Certificate.
        
        ![SSO_Okta_-_Sign-On-URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8614ef2e0d340267/6561aa5181b93e6837a19fcb/SSO_Okta_-_Sign-On-URL.png)
    3.  Go to the **Contentstack Single Sign-On** settings page, and locate the **IdP Configuration** tab. Enter the Sign-On URL that you copied in the previous step in the **Single Sign-on URL** field.
        
        ![SSO_Okta_-_SSO_URL_in_contentstack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5be9008db078a675/6561aeadec79943902968207/SSO_Okta_-_SSO_URL_in_contentstack.png)
    4.  Upload the X.509 certificate that you downloaded from Okta, into the **Certificate** field in the **2 IdP Configuration** section in Contentstack.
        
    
    That’s it! Now, let’s see how to assign your Contentstack application to your users in Okta.
    
4.  ## Manage users access control in Okta
    
    After setting the necessary configurations in Contentstack, you need to now assign the newly added application to your users.
    
    1.  ### Add application to users
        
        1.  Go to the **Assignments** tab of your application,click the **Assign** dropdown, and select **Assign to People**.
            
            ![SSO_Okta_-_Assign_to_people.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt883f28322a9ee62d/6561aa517c56dd1561a5f876/SSO_Okta_-_Assign_to_people.png)
        2.  You will get a list of registered users to whom you need to assign your application. Click the **Assign** button beside the user to whom you want to assign the application, and click **Done**.
            
        3.  Also, you may use multiple applications assignments available under **Applications > Assign applications** menu.
            
            With this, you are done with setting up the Contentstack app in Okta. Proceed to configuring the remaining steps in Contentstack SSO in [Step 6](#test-and-enable-sso).
            
            But, if you want to perform IdP Role Mapping and allow user groups to directly log in to your SSO-enabled organization (without invitation) with the assigned permissions through role mapping, perform [Step 4.2](#add-application-to-user-groups-for-idp-role-mapping).
            
    2.  ### Add application to user groups for IdP Role Mapping
        
        _**Perform this step only if IdP Role Mapping is part of your Contentstack plan.**_
        
        [IdP Role Mapping](/docs/administration/idp-role-mapping) is an alternate way of managing users and permissions of your SSO-enabled organization. This feature allows you to map your IdP roles to Contentstack roles while configuring SSO for your organization.
        
        1.  Go to the **Assignments** tab of your application, click the **Assign** dropdown in the application details section, and select **Assign to Groups**.
            
            ![SSO_Okta_-_Assign_to_group.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77f3539a3122545a/6561aa516f7bf45ce582e3ed/SSO_Okta_-_Assign_to_group.png)
        2.  You will see a list of registered groups. Click the **Assign** button beside the group(s) to which you need to assign your application. Click **Done**.
            
    
    You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **3\. User Management** section of your Contentstack SSO settings and perform [Step 5](#create-role-mappings-in-contentstack).
    
5.  ## Create Role Mappings in Contentstack
    
    In the **User Management** section, you will see the following steps:
    
    1.  **Strict Mode**: Enable [Strict Mode](/docs/administration/set-up-sso-in-contentstack#strict-mode) if you do not want any users to access the organization without SSO login.
        
    2.  **Session Timeout**: The [Session Timeout](/docs/administration/set-up-sso-in-contentstack#session-timeout) option lets you define the session duration for a user signed in through SSO. While the default is set to 12 hours, you can modify it as needed.
        
    3.  **Advanced Settings**: Click on the [advanced settings](/docs/administration/set-up-sso-in-contentstack#advanced-settings) to expand the IdP Role Mapping section to map IdP roles to Contentstack.
        
        1.  In the **Add Role Mapping** section, click on the **\+ ADD ROLE MAPPING** link to add new IdP role mapping and enter the following details:
            
        2.  **IdP Role Identifier**: Enter the IdP group/role identifier, for example, “Contentstack Developers”. This should be the same as the name of the group assigned to the application on Okta.
            
        3.  **Organization Role**: Assign either the Admin or Member role to the mapped group/role.
            
            **Stack Roles (optional)**: Assign [stacks](/docs/headless-cms/about-stack) as well as the corresponding stack-level roles to this role.
            
            ![IdP_Role_Mapping_-_Stack_Roles.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdf06b6a0376dd4a1/6561ae9204116dd95129e9ee/IdP_Role_Mapping_-_Stack_Roles.png)
        4.  Likewise, you can add more role mappings for your Contentstack organization. To add a new Role mapping, click on **\+ ADD ROLE MAPPING** and enter the details.
            
        5.  Keep **Role Delimiter** blank as Okta usually returns roles in an array.
            
        6.  Finally, check the **Enable IdP Role Mapping** checkbox to enable the feature.
            
        7.  Click **Next** to continue further.
            
    
    While some details about these steps are given below, you can refer to our [general SSO guide](/docs/administration) for more information.
    
6.  ## Test and Enable SSO
    
    Next, you can try out the “Test SSO” and “Enable SSO” steps in Contentstack
    
    1.  ### Test SSO
        
        Before enabling SSO, it is recommended that you test the SSO settings configured so far. To do so, perform the following steps:
        
        1.  Click the **Test SSO** button and it will take you to Contentstack’s **Login Via SSO** page, where you need to specify your organization’s SSO name.
            
        2.  Then, click **Continue** to go to your IdP sign in page.
            
        3.  Sign in to your account. If you are able to sign in to your IdP, your test is successful. On successful connection, you will see a success message as follows:
            
            ![SSO_Okta_-_SSO_test_successful.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb3dd7ab0ba265069/6561aead94e6c934b021521e/SSO_Okta_-_SSO_test_successful.png)
        4.  But, if you have enabled IdP Role Mapping, you’ll find the following details in a new page:
            
            -   **SSO connection established successfully** - A success message is displayed.
                
            -   **IdP Roles received** - The list of all the roles assigned to you in your IdP.
                
            -   **Contentstack-IdP role mapping details** - The details of all the Contentstack Organization-specific and Stack-specific roles mapped to your IdP roles.
                
        5.  Click on the **Close** button. Now, you can safely enable SSO for your organization.
            
            **Note:** While testing SSO settings with IdP Role Mapping enabled, the test will be performed only for the IdP roles of the currently logged-in user (i.e., the Owner performing the test).
            
    2.  ### Enable SSO
        
        1.  Once you have tested your SSO settings, click **Enable SSO** to enable SSO for your Contentstack organization.
            
            ![SSO_Okta_-_Enable_SSO.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8316d576464f993b/6561aea294e6c94ce521521a/SSO_Okta_-_Enable_SSO.png)
            
        2.  Confirm your action by clicking on **Yes**.
            
        3.  Once this is enabled, users of this organization can access the organization through SSO. If needed, you can always disable SSO from this page as well.
            
            ![SSO_Okta_-_Disable_SSO.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd5003282e05d67b/6561aa5c41d574aab2c7ed2b/SSO_Okta_-_Disable_SSO.png)
            

## Log In via SSO

To log in to Contentstack via sso, perform the steps given below:

1.  Go to the [Contentstack App](https://app.contentstack.com/#!/login) and click the **Via SSO** button.
    
    ![SSO_Okta_-_Login_via_SSO.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4e4ba02739cb0ca2/6561aa52dd3986d50a143c29/SSO_Okta_-_Login_via_SSO.png)
2.  Enter your **SSO Name** (created in step 1.2).
    
3.  Click on **Log In**.
    
    ![SSO_Okta_-_App_login_page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9966a190d76e8a45/6561aa5041d5746e56c7ed27/SSO_Okta_-_App_login_page.png)
