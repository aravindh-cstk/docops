---
title: "Set up SSO with Okta"
description: "This setup guide explains how to set up Single Sign-On in Contentstack with Okta as your SAML 2.0 identity Provider (IdP). See the process in detail here."
url: /administration/set-up-sso-with-okta
---

# Set up SSO with Okta

## Set up SSO with Okta

**Warning:** This set up guide is deprecated. Please visit our documentation on [Set up SSO with Okta Native App](/docs/administration/set-up-sso-with-okta-native-app).

This step-by-step guide explains how to set up [Single Sign-On](/docs/administration) in Contentstack with Okta as your SAML 2.0 identity Provider (IdP).

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Okta administrator account

## What You Will Learn

-   How to create an SSO name and ACS URL in Contentstack.
    
-   How to configure the Contentstack app in Okta as a SAML 2.0 IdP.
    
-   How to map Okta roles to Contentstack roles (optional).
    
-   How to test and enable SSO for your organization.
    

## Steps to Set up SSO with Okta

The integration with Okta can be done in following easy steps:

1.  [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
2.  [Configure Contentstack App in Okta](#configure-contentstack-app-in-okta)
3.  [Configure Okta details in Contentstack](#configuring-okta-details-in-contentstack)
4.  [Manage users access control in Okta](#manage-users-access-control-in-okta)
    1.  [Add application to users](#a-add-application-to-users)
    2.  [Add application to user groups for IdP Role Mapping](#b-add-application-to-user-groups-for-idp-role-mapping)
5.  [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
6.  [Test and Enable SSO](#test-and-enable-sso)

Let’s see each of the processes in detail.

1.  ## Create SSO Name and ACS URL in Contentstack
    
    1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the **Organization Settings** page and click on the **SINGLE SIGN-ON** tab.  
        ![Set_up_SSo_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt502bf146eb3bd724/60df37a5c8e01a3013e5f574/Set_up_SSo_1_highlighted.png)
    2.  Enter an **SSO name** of your choice, and click **Create**. For example, if your company name is “Acme, Inc.” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in.
        
        **Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).
        
        ![Set_up_SSo_2_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte16094560a57968e/60df37b0ccb5203c30a28e8f/Set_up_SSo_2_highlighted.png)  
        Let's use “sso-test” as the **SSO Name**.
    3.  This will generate **Assertion Consumer Service (ACS)** URL and other details such as **Entity ID**, **Attributes** and **NameID** Format. These details will be used in **Step 2** for configuring the Contentstack app in Okta.  
        ![Set_up_SSo_3_highlighted.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltcfa122bf4ae86eb0/638768410fd02e10825078a8/Set_up_SSo_3_highlighted.jpg)  
        Keep this window open, as you may need these details for setting up Contentstack app in Okta.
2.  ## Configure Contentstack App in Okta
    
    1.  Log in to your Okta Admin account.  
        ![1. okta-login.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb71fe255a74ee5b8/5d65142c0f951227ac8327b1/1._okta-login.png)
    2.  After logging in, you will see the Okta dashboard. Click on the **Application** tab and select **Applications**.  
        ![okta-dashboard.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3b2e5ebb97404ae0/5f3cfc2f62013530f82eb6bf/okta-dashboard.png)
    3.  In the **Applications** page, you will see your already created applications, if any.  
        ![okta-application.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt654ee8da7220d176/5d651425de50ec209c8f4564/okta-application.png)
    4.  Click on the **Add Application** button and click on **Create New App** to create a new application for Contentstack.![okta-add-application.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5b0841dea1730824/5f3cfc2f5f7d2953ae821a3c/okta-add-application.png)
    5.  Set the **Platform** as **Web,** the **Sign on method** as **SAML 2.0**, and **Create** your application:  
        ![okta-create-application.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta4a4b7754d4c9a6a/5f3cfc2fd5b383280ff0f0b3/okta-create-application.png)
    6.  You will be redirected to the **General Settings** page of your application. Provide a name for your application, e.g., **Contentstack**, a logo for your application, and click on **Next** to proceed to configure SAML settings.![General_Settings_page.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte27e2c96750a4825/5f3cfc2f29a49b740ae68764/General_Settings_page.png)
    7.  In the **Configure SAML** tab, under **SAML Settings**, provide the following details:
        1.  **Single Sign on URL**: Paste the **Assertion Consumer Service URL** that we create in Contentstack in Step 1.c
        2.  **Audience URI (SP Entity ID):** Enter Contentstack’s **Entity ID** that you received in **step 1**. In most cases, this value would be https://app.contentstack.com.
        3.  **Default RelayState:** Keep it blank.
        4.  **Name ID format**: Select **EmailAddress** option
        5.  **Application username**: Select **Email** option  
            ![okta-saml-congfiguration-step-2-1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltcb5017d70c4028b4/5f3cfc496bbc0527106435df/okta-saml-congfiguration-step-2-1.png)
    8.  Click on the **Show Advanced Settings** link and in the **SAML Issuer ID**, enter Contentstack's **Entity ID**, for e.g., https://app.contentstack.com.
    9.  In **ATTRIBUTE STATEMENTS (OPTIONAL)**, under attribute mapping details, add the attributes.  
        ![Okta_Attribute_Statements.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt8b103b487f663667/5f3cfc2f80360a1fd38bc791/Okta_Attribute_Statements.png)  
        Add three attributes: **email**, **first\_name**, and **last\_name** under **Name**, and select **user.email**, **user.firstName**, and **user.lastName**, respectively, under **Value**.
    10.  \[_**Optional Step**_\] If you want to create role mapping, then, in the **GROUP ATTRIBUTE STATEMENTS (OPTIONAL)** section, under **Name**, enter “roles”; under **Filter**, select **matches regex,** add the key name as **roles**; and finally, enter your regex term, e.g., ^contentstack.(\[^\\s\]+)\* (if all your Contentstack specific users are assigned roles that start with “contentstack”) in the textbox beside **Filter**. This will retrieve all the groups that start with “Contentstack.”  
         The following image depicts the IdP role mapping for Okta:![Okta_sso_role_mapping.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3fec9c6bc19f1f8/6405dbc4ce1f78108607f9cd/Okta_sso_role_mapping.png)  
           
         
         **Note:** Perform this step only if you want to enable [IdP Role Mapping](/docs/administration/idp-role-mapping).
         
    11.  Click **Next** and then **Finish** on the next screen.
3.  ## Configuring Okta details in Contentstack
    
    1.  In Okta, click on the **Sign On** tab of the application that you created in Step 2.  
        ![okta-setup-instruction-button.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt815d34e04b2c9849/5f3cfc49327a6201d7ebcc3b/okta-setup-instruction-button.png)
    2.  Click on **View Setup Instructions** additional settings fields for your Contentstack application. ![okta-setup-instructions.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4dc54577680a020f/638768d5303d7a10a114a623/okta-setup-instructions.jpg)  
          
        Click on the **Download Certificate** button.
    3.  Copy **Identity Provider Single Sign-On URL**. Then, in the Contentstack SSO settings page, go to the **IdP Configuration**, and paste the URL in the **Single Sign-on URL** field.![Set_up_SSo_4_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltaa89578e21b0bf39/60df37e30f2b3833d0f68f30/Set_up_SSo_4_highlighted.png)
    4.  Upload the X.509 certificate that you downloaded from Okta, into the **Certificate** field in the **2 IdP Configuration** section in Contentstack.
    
    That’s it! Now, let’s see how to assign your Contentstack application to your users in Okta.
    
4.  ## Manage users access control in Okta
    
    After setting the necessary configurations in Contentstack, you need to now assign the newly added application to your users.
    
    ### A – Add application to users
    
    1.  Go to the **Assignments** tab of your application,click on the **Assign** dropdown, and select **Assign to People**.  
        ![Assign_to_People.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt08f2199ecc2cc228/5f3cfc2e327a6201d7ebcc37/Assign_to_People.png)
    2.  You will get a list of registered users to whom you need to assign your application. Click on the **Assign** button beside the user to whom you want to assign the application, and click on **Done**.![okta-user-step-2.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt834ee995e90d47c0/5d6514195760052efac57a32/okta-user-step-2.png)
    3.  Also, you may use multiple applications assignments available in **Applications** > **Assign applications** menu.
    
    With this, you are done with setting up the Contentstack app in Okta. Proceed to configuring the remaining steps in Contentstack SSO in [Step 6](#test-and-enable-sso).
    
    But, if you want to perform IdP Role Mapping and allow user groups to directly log in to your SSO-enabled organization (without invitation) with the assigned permissions through role mapping, perform **Step 4.B**.
    
    ### B - Add application to user groups for IdP Role Mapping
    
    _**Perform this step only if IdP Role Mapping is part of your Contentstack plan.**_
    
    [IdP Role Mapping](/docs/administration/idp-role-mapping) is an alternate way of managing users and permissions of your SSO-enabled organization. This feature allows you to map your IdP roles to Contentstack roles while configuring SSO for your organization.
    
    1.  Go to the **Assignments** tab of your application, click on the **Assign** dropdown in the application details section, and select **Assign to Groups**.  
        ![Click_on_Assign_to_Groups_.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blteba196ebe8174373/5f3cfc2e5f7d2953ae821a38/Click_on_Assign_to_Groups_.png)
    2.  You will see a list of registered groups. Click on the **Assign** button beside the group(s) to which you need to assign your application. Click on **Done**.  
        ![Select_the_groups.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltda7ebec47661506c/5f3cfc49abb6922b67514e0b/Select_the_groups.png)
    
    You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **3\. User Management** section of your Contentstack SSO settings and perform **Step 5**.
    
5.  ## Create Role Mappings in Contentstack
    
    In the **User Management** section, you will see the following steps:
    
    1.  **Strict Mode**: Enable [**Strict Mode**](/docs/administration/set-up-sso-in-contentstack#strict-mode)if you do not want any users to access the organization without SSO login.
    2.  **Session Timeout**: The [**Session Timeout**](/docs/administration/set-up-sso-in-contentstack#session-timeout) option lets you define the session duration for a user signed in through SSO. While the default is set to 12 hours, you can modify it as needed.
    3.  **Advanced Settings**: Click on the [advanced settings](/docs/administration/set-up-sso-in-contentstack#advanced-settings) to expand the IdP Role Mapping section to map IdP roles to Contentstack.[  
        ](/docs/administration/set-up-sso-in-contentstack#advanced-settings)
        1.  In the **Add Role Mapping** section, click on the **\+ ADD ROLE MAPPING** link to add new IdP role mapping and enter the following details:
            
            1.  **IdP Role Identifier**: Enter the IdP group/role identifier, for example, “Contentstack Developers.”
            2.  **Organization Role**: Assign either the **Admin or Member** role to the mapped group/role.
            3.  **Stack Roles** _(optional)_: Assign [stacks](/docs/headless-cms/about-stack) as well as the corresponding stack-level roles to this role.  
                ![Set_up_SSo_7_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0096c1ab74eacf29/60df37f52490ed30145e4c30/Set_up_SSo_7_highlighted.png)
            
            Likewise, you can add more role mappings for your Contentstack organization. To add a new Role mapping, click on **\+ ADD ROLE MAPPING** and enter the details.
        2.  Keep **Role Delimiter** blank as Okta usually returns roles in an array.
        3.  Finally, check the **Enable IdP Role Mapping** checkbox to enable the feature.
    4.  Click on **Next** to continue further.
    
    While some details about these steps are given below, you can refer to our [general SSO guide](/docs/administration) for more information.
    
6.  ## Test and Enable SSO
    
    Next, you can try out the “Test SSO” and “Enable SSO” steps in Contentstack
    
    ### Test SSO
    
    Before enabling SSO, it is recommended that you test the SSO settings configured so far. To do so, perform the following steps:
    
    1.  Click on the **Test SSO** button and it will take you to Contentstack’s **Login Via SSO** page, where you need to specify your organization SSO name.
    2.  Then, click on **Continue** to go to your IdP sign in page.
    3.  Sign in to your account. If you are able to sign in to your IdP, your test is successful.On successful connection, you will see a success message as follows  
        ![Set_up_SSo_10_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltcda07901cf6eb3e6/60df38173b10992ed7acbb72/Set_up_SSo_10_no_highlight.png)
    4.  But, if you have enabled IdP Role Mapping, you’ll find the following details in a new page:
        
        -   **SSO connection established successfully** - A success message is displayed.
        -   **IdP Roles received** - The list of all the roles assigned to you in your IdP.
        -   **Contentstack-IdP role mapping details** - The details of all the Contentstack Organization-specific and Stack-specific roles mapped to your IdP roles.
    5.  Click on the **Close** button. Now, you can safely enable SSO for your organization.
    
    **Note:** While testing SSO settings with IdP Role Mapping enabled, the test will be performed only for the IdP roles of the currently logged-in user (i.e., the Owner performing the test).
    
    ### Enable SSO
    
    Once you have tested your SSO settings, click **Enable SSO** to enable SSO for your Contentstack organization.
    
    ![Set_up_SSo_9_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt75b4943b1d78d28c/60e32dc13b10992ed7acc264/Set_up_SSo_9_highlighted.png)
    
    Confirm your action by clicking on **Yes**.
    
    Once this is enabled, users of this organization can access the organization through SSO. If needed, you can always disable SSO from this page as well.  
    
    ![Disable_SSO.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd804680545216a38/63762ef15834861044c1f25b/Disable_SSO.png)
