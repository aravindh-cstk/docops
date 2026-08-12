---
title: "Set up SSO with Microsofts Azure AD"
description: "This step-by-step guide explains how to set up Single Sign-On in Contentstack with Azure Active Directory (AD) as your SAML 2.0 Identity Provider (IdP)."
url: /administration/set-up-sso-with-microsoft-azure-ad
---

# Set up SSO with Microsofts Azure AD

## Set up SSO with Microsoft Azure AD

This step-by-step guide explains how to set up [Single Sign-On](/docs/administration) in Contentstack with Microsoft Azure Active Directory (AD) as your SAML 2.0 Identity Provider (IdP). You create an SSO name in Contentstack, register and configure the Contentstack app in Azure AD, exchange the IdP details, add users and app roles, optionally map roles, and then test and enable SSO.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Organization [Owner](/docs/administration/about-administration-roles) permissions
-   Microsoft Azure AD administrator account

## What You Will Learn

-   How to create an SSO name and ACS URL in Contentstack.
    
-   How to register and configure the Contentstack app in Microsoft Azure AD as a SAML 2.0 IdP.
    
-   How to add users and app roles in Azure AD and map them to Contentstack roles (optional).
    
-   How to test and enable SSO for your organization.
    

## Steps to Set up SSO with Microsoft Azure AD

In a nutshell, this integration requires following steps:

1.  [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
2.  [Configure Microsoft Azure AD details in Contentstack](#configure-microsoft-azure-ad-details-in-contentstack)
3.  [Add Users to Your Microsoft Azure AD Application](#add-users-to-your-microsoft-azure-ad-application)
4.  [Add Users Roles in Your Application](#add-users-roles-in-your-application)
5.  [Assign Roles to Application Users for IdP Role Mapping](#assign-roles-to-application-users-for-idp-role-mapping)
6.  [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
7.  [Test and Enable SSO](#test-and-enable-sso)

Let us see each of the processes in detail.

1.  ## Create SSO Name and ACS URL in Contentstack
    
    **Note:** Only the Organization [Owner](/docs/headless-cms/types-of-roles#owner) will be able to perform the steps discussed below.
    
    Start by creating an SSO Name and generate the ACS URL in Contentstack
    
    1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the **Organization Settings** page, and click on **SINGLE SIGN-ON** tab.![Set_up_SSo_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb9e244f2d1f270c5/60df389a7c871833cab137c1/Set_up_SSo_1_highlighted.png)
    2.  Enter an **SSO Name** of your choice, and click **Create**. For example, if your company name is “Acme, Inc.” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in.
        
        **Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).
        
        ![Set_up_SSo_2_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte328006d160f9504/60df38a67df6873288cd7708/Set_up_SSo_2_highlighted.png)Let's use “sso-test” as the SSO Name.
    3.  When you click **Create**, this will generate the **Assertion Consumer Service (ACS)** URL and other details such as **Entity ID**, **Attributes**, and **NameID Format**. These details will be used in **Step 2** for configuring the Contentstack app in Microsoft Azure AD.![Set_up_SSo_3_highlighted.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltcfa122bf4ae86eb0/638768410fd02e10825078a8/Set_up_SSo_3_highlighted.jpg)Keep this window open, as you may need these details for setting up the Contentstack app in Azure AD.
2.  ## Configure Contentstack App in Microsoft Azure AD
    
    **Note:** You need to be a Microsoft Azure AD administrator to complete the steps below.
    
    1.  To configure the integration of Contentstack into Microsoft Azure AD, you need to add the Contentstack app. For this, go to the Microsoft Azure portal, and click on the **Azure Active Directory** tab.![Click_on_Azure_Active_Directory.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb06ad172bd331035/5f461e99fb60b1668c21d6ad/Click_on_Azure_Active_Directory.png)
    2.  Click on **Enterprise Applications** on the left panel, and click on **\+ New application** on the top.![Click_on_Newapplication.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1a8138f1176f5152/5f46221d70ca0f65ba10949a/Click_on_Newapplication.png)
    3.  Click on **Non-gallery application** to create a new application that is not already present in the gallery.![Click_on_Non_gallery_application.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd3e2e3168d687482/5f46221dba13f249213fb7d7/Click_on_Non_gallery_application.png)
    4.  Provide a name to your app, for example, “test-sso,” and click on **Add**.![Name_for_your_Azure_app.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb55a68f63ff089fc/5f46221e2ecc864927d8c4c7/Name_for_your_Azure_app.png)
    5.  This will lead you to the **Overview** page where you will see the overview details of your application. Under the **Getting Started** section, click on the **2\. Set up single sign on** tab.![Click_on_the_2_Set_up_single_sign_on_tab.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt51233ef8c91efb45/5f46221eb008d84afeba69be/Click_on_the_2_Set_up_single_sign_on_tab.png)
    6.  On the **Select a single sign-on method** page, select the **SAML** mode to enable single sign-on.![Select_SAML_as_the_Single_sign_on_method.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt756f6943548f8196/5f46224470ca0f65ba10949e/Select_SAML_as_the_Single_sign_on_method.png)
    7.  You will be led to the **Set up Single Sign-On with SAML** page where you can perform the further steps after creating your app.![Set_up_Single_Sign-On_with_SAML.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte3167e522b32f690/5f462244a9d4814afda14279/Set_up_Single_Sign-On_with_SAML.png)
    8.  Click on the “Edit” (pencil) icon beside the **Basic SAML Configuration** section, add the following details:
        -   **Identifier (Entity ID)**: Enter the “Entity ID” of Contentstack, i.e., https://app.contentstack.com.
        -   **Reply URL (Assertion Consumer Service URL)**: Enter the ACS URL that we generated in **Step 1.c.**![Basic_SAML_Configuration.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2bc9970d19ce8eed/5f461e99b008d84afeba69ba/Basic_SAML_Configuration.png)
    9.  Next, edit the **User Attributes & Claims** section. Under **Claim Name**, you will see the primary claim, **Unique User Identifier (Name ID)**, with the claim **Value** set to **user.userprincipalname \[nameid-format:emailAddress\]**. On clicking this claim, you will find the following details on the **Manage claim** page:![Manage_claim_Unique_User_Identifier.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2cecc279d92f2de5/5f46221e185efb660c1ca38b/Manage_claim_Unique_User_Identifier.png)Close this page. Now, delete the default attributes that you see under the **Additional claims** section. We will be adding our own set of attributes.![New_Attributes_in_User_Attributes_&_Claims.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt69f4806a1cf28e52/5f46221e79723565b971b21a/New_Attributes_in_User_Attributes_&_Claims.png)
    10.  Now, to add your attributes, click on **\+ Add new claim**.
    11.  In the **Manage claim** page, enter first\_name under **Name**, select **user.givenname** under the **Source** attribute, and click **Save**.![Add_first_name_attribute.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdd111dd740800e64/5f461e92fb60b1668c21d6a9/Add_first_name_attribute.png)Similarly, add the following attributes:
         
         <table><tbody><tr><td>Name</td><td>Value</td></tr><tr><td><span class="code">last_name</span></td><td><strong>user.surname</strong></td></tr><tr><td><span class="code">email</span></td><td><strong>user.userprincipalname</strong></td></tr><tr><td><span class="code">roles</span></td><td><strong>user.assignedroles</strong></td></tr></tbody></table>
         
         If you want to enable Role Mapping in Contentstack, then it is highly important to add the roles attribute as we need this for IdP Role Mapping which we will cover in the next set of steps.![Add_roles_attribute_for_idp_role_mapping.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltce12e7b1f456093c/5f461e94a11538653ea57e88/Add_roles_attribute_for_idp_role_mapping.png)You will see the added attributes in the **User Attributes & Claims** section.![New_Attributes_in_User_Attributes_&_Claims.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt69f4806a1cf28e52/5f46221e79723565b971b21a/New_Attributes_in_User_Attributes_&_Claims.png)
    12.  In the **SAML Signing Certificate** section, click the **Download** link beside **Certificate (Base64)**. This will download and save the Base64 version of the certificate for your Contentstack app.
         
         If needed, edit the **Notification Email Addresses** section, change the notification email, and click on **Save**.
         
         ![Change_notification_email.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta2005ad9e8a8ab1a/5f461e98c0e5e047f9386c88/Change_notification_email.png)
    13.  Under the **Set up <**_**app\_name**_**\>** section, you will find important data, such as **Login URL**, **Azure AD Identifier**, and **Logout URL** of your Microsoft Azure AD app. This data is required when configuring the Microsoft Azure AD details in Contentstack.
3.  ## Configure Microsoft Azure AD details in Contentstack
    
    1.  From the previous section, copy the URL provided in the **Login URL** section of your Contentstack application in Microsoft Azure AD and paste it into **Single Sign-On URL** field in Contentstack’s **2 IdP configuration** section.![Set_up_SSo_4_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt21a8c8a269c3122a/60df38c9ccb5203c30a28e9f/Set_up_SSo_4_highlighted.png)
    2.  Upload the X.509 certificate that you downloaded from Microsoft Azure AD in Step 2.i. into the **Certificate** field in Contentstack SSO Settings.
    
    Next, you need to define roles in Microsoft Azure AD that would be used to create role mapping in Contentstack.
    
4.  ## Add Users to Your Microsoft Azure AD Application
    
    After setting the necessary configurations in Contentstack, you need to add users to your newly added application.
    
    To do so, you need to perform the following steps:
    
    1.  Navigate to **Azure Active Directory**, select **Enterprise Applications**, select **All applications**, then select your application.
    2.  Under the **Getting Started** section, click on the **1\. Assign users and groups** tab.![Click_on_the_1_Assign_users_and_groups_tab.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltee694dc56a6898c6/5f46221ec0e5e047f9386cb8/Click_on_the_1_Assign_users_and_groups_tab.png)
    3.  Click on the **\+ Add user** button.![Click_on_Add_User.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blteb21dd3d2f83d543/5f461e9979723565b971b1f0/Click_on_Add_User.png)
    4.  Click on **Users and groups**. You will find a list of users whom you can add into your application.![Select_users_under_Users_and_groups.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt55e246fb68499795/5f4622442a722a66860bd804/Select_users_under_Users_and_groups.png)
    
    You can either select from the given list of users or you can invite and add new users by inviting them.
    
5.  ## Add Users Roles in Your Application
    
    **Note:** This is an optional step, but it”s mandatory if IdP Role Mapping is part of your Contentstack plan and you want to implement it.
    
    Application Roles are defined under the application's registration manifest in the Microsoft Azure portal. To add user roles, perform the following steps:
    
    1.  In the left navigation, click on **App Registrations**, and click on **All applications**. Locate your newly created application and click on it.![Click_on_App_registrations.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2a13bd5be65ef3d9/5f461e9970ca0f65ba109486/Click_on_App_registrations.png)
    2.  In your application blade, click on **Manifest**. You will see the JSON representation of your application.![Add_roles_under_Manifest.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltcbefb37792c607cb/5f461e9679723565b971b1ec/Add_roles_under_Manifest.png)
        
        Add the following code snippet of a new role under appRoles:
        
        ```
        {
         "allowedMemberTypes": [
              "User"
             ],
             "description": "Developer Role",
             "displayName": "Developer",
             "id": "18d14569-c3bd-439b-9a66-3a2aee02f15f",
             "isEnabled": true,
             "value": "developer"
        }
        ```
        
        The above code snippet is for adding a single role where the value provided to the value parameter is what you need to add in the IdP Role Mapping section of Contentstack. All the values provided in this snippet is user-defined.
        
        For adding multiple roles, create similar snippets with the required role details. You can add multiple such IdP roles and add their mappings in Contentstack.
        
    3.  Save the manifest.
    
    You will be able to see all the roles that you created when you assign them to your application users.
    
6.  ## Assign Roles to Application Users for IdP Role Mapping
    
    **Note:** This is an optional step, but it is mandatory if [IdP Role Mapping](/docs/administration/idp-role-mapping) is part of your Contentstack plan and you want to implement it.
    
    This is an alternate way of managing users and permissions of your SSO-enabled organization. Performing this step lets you map your IdP roles to Contentstack roles while configuring SSO for your Contentstack organization.
    
    To assign roles to application users, perform the following steps:
    
    1.  Navigate to **Azure Active Directory**, select **Enterprise Applications**, select **All applications**, then select your application.
    2.  Under the **Getting Started** section, click on the **1\. Assign users and groups** tab.
    3.  To add a new user with a role, click on the **\+ Add User** button.
    4.  Click on **Users and groups**. You will find a list of users whom you can add into your application.
    5.  Next, click on **Select Role** in the **Add Assignment** page of your application. In the **Select Role** panel on the right, you will see the role you created (in our case, developer).
    6.  Assign the selected role to the application user.
    
    You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **User Management** section of your Contentstack SSO settings.
    
7.  ## Create Role Mappings in Contentstack
    
    **Note:** You will only be able to view and perform this step if IdP Role Mapping is part of your Contentstack plan.
    
    In the **User Management** section of Contentstack's SSO Setup page, you will see [Strict Mode](/docs/administration/set-up-sso-in-contentstack#strict-mode) (authorize access to organization users only via SSO login) and [Session Timeout](/docs/administration/set-up-sso-in-contentstack#session-timeout) (define session duration for a user signed in through SSO).
    
    Below these options, you will see the **Advanced Settings** option.
    
    ![Set_up_SSo_5_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6e8d8789579e7bb8/60df38e1e7a80f3c2a868e6e/Set_up_SSo_5_no_highlight.png)
    
    Click on it to expand the **IdP Role Mapping** section to map IdP roles to Contentstack.
    
    1.  In the **Add Role Mapping** section, click on the **\+ ADD ROLE MAPPING** link to add the mapping details of an IdP role. The details include the following:
        
        1.  **IdP Role Identifier**: Enter the IdP group/role identifier, for example, “developers.” You can use the value from your manifest.
        2.  **Organization Role**: Assign either the **ADMIN** or **MEMBER**role to the mapped group/role.
        3.  **Stack Roles** _(optional)_: Assign [stacks](/docs/headless-cms/about-stack) as well as the corresponding stack-level roles to this role.
        
        ![SSO_IdP_Role_Mapping.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5c9e222bf01648a0/62b4643061e0990f949238d9/SSO_IdP_Role_Mapping.png)
        
        Likewise, you can add more role mappings for your Contentstack organization. To add a new Role mapping, click on **\+ ADD ROLE MAPPING** and enter the details.
        
    2.  Keep **Role Delimiter** blank as Microsoft Azure AD usually returns roles in an array.
    3.  Finally, check the **Enable IdP Role Mapping** checkbox to enable the feature.
    4.  Click on **Next** to continue further.
    
    While some details about these steps are given below, you can refer to our [general SSO guide](/docs/administration) for more information.
    
8.  ## Test and Enable SSO
    
    Next, you can try out the “Test SSO” and “Enable SSO” steps in Contentstack
    
    ### Test SSO
    
    Before enabling SSO, it is recommended that you test the SSO settings configured so far.
    
    To do so, perform the following steps:
    1.  Click on the **Test SSO** button and it will take you to Contentstack’s **Login Via SSO** page where you need to specify your organization SSO name.
    2.  Then, click on **Continue** to go to your IdP sign in page.
    3.  Sign in to your account. If you are able to sign in to your IdP, your test is successful.

On successful connection, you will see a success message as follows:

![Set_up_SSo_10_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3e74ddb73e4ec11d/60df39002eb77d200fac890c/Set_up_SSo_10_no_highlight.png)

If you have enabled IdP Role Mapping, you’ll find the following details in a new page:

-   **SSO connection established successfully** - A success message is displayed.
-   **IdP roles received** - The list of all the roles assigned to you in your IdP.
-   **Contentstack-IdP role mapping details** - The details of all the Contentstack Organization-specific and Stack-specific roles mapped to your IdP roles.

Click on the **Close** button. Now, you can safely enable SSO for your organization.

**Note:** While testing SSO settings with IdP Role Mapping enabled, the test will be performed only for the IdP roles of the currently logged-in user (i.e., the Owner performing the test).

### Enable SSO

Once you have tested your SSO settings, click **Enable SSO** to enable SSO for your Contentstack organization.

![Set_up_SSo_9_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdd84e1d16cbe048d/60e3358692aa422edd5e38d3/Set_up_SSo_9_highlighted.png)

Confirm your action by clicking on **Yes**.

Once this is enabled, users of this organization can access the organization through SSO. If needed, you can always disable SSO from this page as well.

![Disable_SSO.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd804680545216a38/63762ef15834861044c1f25b/Disable_SSO.png)
