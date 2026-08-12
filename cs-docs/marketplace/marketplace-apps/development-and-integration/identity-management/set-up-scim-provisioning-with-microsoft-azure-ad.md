---
title: "Set Up SCIM Provisioning with Microsoft Entra ID/Azure AD"
description: "Set Up SCIM Provisioning with Microsoft Azure AD that allows you to use Microsoft Azure AD to provision or deprovision users automatically with Contentstack."
url: /administration/set-up-scim-provisioning-with-microsoft-azure-ad
---

# Set Up SCIM Provisioning with Microsoft Entra ID/Azure AD

## Set Up SCIM Provisioning with Microsoft Entra ID/Azure AD

You can configure Contentstack as a provisioning app in Microsoft Entra ID previously known as the Azure Active Directory (Azure AD). This allows you to use Microsoft Entra ID/Azure AD to provision or deprovision users automatically with Contentstack.

**Note:** Before proceeding with this guide, ensure that SCIM enabled for your Contentstack organization. If you do not see SCIM settings within **Administration**, reach out to our [support](mailto:support@contentstack.com) team to get it enabled for your organization.

## Prerequisite

-   [Microsoft Azure AD tenant](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) that has [permission](https://learn.microsoft.com/en-us/azure/active-directory/roles/permissions-reference) to configure provisioning
-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner, Admin, or Security Manager](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to enable SCIM in Contentstack.
    
-   How to install the Azure Generic SCIM app from the Contentstack Marketplace.
    
-   How to add Contentstack to Microsoft Azure AD.
    
-   How to configure automatic provisioning and attribute mappings in Azure AD.
    
-   How to assign users and groups, and map groups to roles in Contentstack.
    

## Steps for Execution

Here’s a step-by-step guide that explains how you can do this.

1.  [Enable SCIM in Contentstack](#enable-scim-in-contentstack)
2.  [Install Azure Generic SCIM App from Contentstack Marketplace](#install-azure-generic-scim-app-from-contentstack-marketplace)
3.  [Add Contentstack to Microsoft Azure AD](#add-contentstack-to-microsoft-azure-ad)
4.  [Configure Provisioning in Microsoft Azure AD](#configure-provisioning-in-microsoft-azure-ad)
5.  [Add Users and Groups to your Application](#add-users-and-groups-to-your-application)
6.  [Create Group Mapping in Contentstack](#create-group-mapping-in-contentstack)

1.  ## Enable SCIM in Contentstack
    
    To allow provisioning of users in Contentstack’s organization through Microsoft Azure AD, you need to enable SCIM in Contentstack by performing the following steps:
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/), then navigate to **Administration** through the App Switcher.
    2.  Open the **SCIM** settings and select the **Enable SCIM** option.
    3.  On the resulting **Enable SCIM** modal, click **Enable**.![Enable_SCIM_1.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7e386a8976a8ac99/9ac05fc9f7dd0f7679eb9c10/Enable_SCIM_1.png?locale=en-us)
    
    After enabling SCIM, you’ll see the **Group Mapping** section. This section will enable you to set permissions for a group of users provisioned via Microsoft Azure AD app.
    
2.  ## Install Azure Generic SCIM App from Contentstack Marketplace
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Within the Marketplace, you can see the available apps. Hover over the **Azure Generic SCIM** app click **Install**. ![Azure_Geniric_app_Install.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am4e451c27578f68c6/f80de8bb9c3afbf3a826c818/Azure_Geniric_app_Install.png?locale=en-us)
    3.  In the resulting authorization window, click the **Authorize & Install** button.  
        ![Azure-Generic-SCIM-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5413d780dff41f9c/64b91c49bbc0385fa5776cd1/Azure-Generic-SCIM-Install-App.png)  
        
    4.  A tenant URL and a secret token are generated on the successful installation of the app. Copy the tenant URL and the secret token for future reference.  
        ![tenant_url_and_token.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9f6a045cd71459c8/635b83455f4635106961656c/tenant_url_and_token.png)
3.  ## Add Contentstack to Microsoft Azure AD
    
    **Note:** In order to add Contentstack to the Azure AD application gallery, you must be a Microsoft Azure AD administrator. If you've already created an app for Contentstack to use SSO, you can skip this step.
    
    1.  Log in to the Microsoft Azure portal and click **Azure Active Directory**.  
        ![Click-AAD.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4f1e1b4c998f0e8b/635b8321f5b370107c3347e8/Click-AAD.png)
    2.  Click **Enterprise applications** from the left navigation panel.  
        ![Click_enterprise_applications.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt40d176d0ec654ee6/635b82d8a86a565857b1da73/Click_enterprise_applications.png)
    3.  Click **\+ New application.**![Click_new_application.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltac733787705ce8f6/635b82d89a123e5dbdbc9c4e/Click_new_application.png)
    4.  Within the Azure AD Gallery, click **Create your own application**.  
        ![Create_your_own_app.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta4fbe209151db344/635b8321882b96108ae78d74/Create_your_own_app.png)
    5.  In the resulting **Create your own application** panel, enter the application name, select the **Non-Gallery** option, and click **Create** to create the Contentstack app.  
        ![Create_CS_app.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9db07812922c3791/635b8321ae3c755821909705/Create_CS_app.png)
    6.  Now, your Contentstack app is added to the Microsoft Azure Active Directory.  
        ![CS_in_AAD.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9680f3125bcab3c3/635b8322ff7b405f6b3f4329/CS_in_AAD.png)
4.  ## Configure Provisioning in Microsoft Azure AD
    
    1.  Within your Contentstack app in Microsoft Azure AD, click **Provisioning** from the left navigation panel.  
        ![Click_provisioning.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltfe391cc4a98b8bfc/635b8321ff305610f618b664/Click_provisioning.png)
    2.  Click **Get started**. It opens up in the **Provisioning** window. Change the **Provisioning Mode** to **Automatic** and provide the **Admin** credentials, such as **Tenant URL** and **Secret Token** of the installed **Azure Generic SCIM** app.
        -   **Tenant URL**: Contentstack’s SCIM URL is used as **Tenant URL**. Enter the tenant URL generated in [step 2.4](#install-azure-generic-scim-app-from-contentstack-marketplace) while installing the Azure Generic SCIM app.
        -   For the **Secret Token** field, add the token generated in [step 2.4](#install-azure-generic-scim-app-from-contentstack-marketplace) while installing the Azure Generic SCIM app.  
            ![Admin_credentials.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltab479e7a14ff39a1/635b82d7ff7b405f6b3f431d/Admin_credentials.png)
    3.  Click **Test Connection** to ensure connection between the Azure AD and the Contentstack app. Click **Save** to save the app provisioning configurations.
    4.  Under the **Mappings** section, select **Provision Azure Active Directory Users**.  
        ![AAD_users_mapping.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf3361af7395b8ecd/635b82d7a739cc5f6cbd5bd7/AAD_users_mapping.png)
    5.  In the **Attribute-Mapping** section, map user attributes, such as userName, givenName, surname, and IsSoftDeleted.  
        ![User_attributes_mapping.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltab0e530b59e9da8f/635b8345eb4a5478dab72beb/User_attributes_mapping.png)
    6.  Click **Save** to save the changes.
    7.  Navigate back to the **Mappings** section and select **Provision Azure Active Directory Groups**.  
        ![AAD_groups_mapping.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7539afd438777673/635b82d7882b96108ae78d70/AAD_groups_mapping.png)
    8.  In the **Attribute-Mapping** section, map group attributes such as displayName and members.  
        ![group_mapping.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt25ae3f3b835eab78/635b82f91012fd77000850f1/group_mapping.png)
    9.  Click **Save** to save the changes.
    10.  Under the **Settings** section, for the **Notification Email** field, enter the email address of the person or group who should receive the provisioning error notifications. Check the “Send an email notification when a failure occurs” check box.  
         ![email_notification.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltaacd040fa0a8acf9/635b8321127d2c10959f6cb4/email_notification.png)
    11.  For **Scope**, select a suitable option.  
         ![scope_setting.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltef4ab0b416d5baab/635bc9e62746fd107d68b88a/scope_setting.png)  
         
    12.  Set the **Provisioning Status** to **On** for enabling Azure AD provisioning.  
         ![provision_status_on.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltcce1ddc3cb4f2396/635bcaa8da572d57ecd26308/provision_status_on.png)
    13.  Click **Save** to save the provisioning.
5.  ## Add Users and Groups to your Application
    
    After configuring the provisioning settings, you need to add users to your newly added application.
    
    **Note:** Skip this step if you have selected "Sync All Users and Groups" in [step 4.11](#configure-provisioning-in-microsoft-azure-ad).
    
    To add Users and Groups to your Application, perform the following steps:
    
    1.  Navigate to **Azure Active Directory**, select **Enterprise applications**, select **All applications**, and then select your application.  
        ![select_appln.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt787473d977b51fb7/635bcd95127d2c10959f6dbf/select_appln.png)
    2.  Within the **Getting Started** section, click the **Assign users and groups** tab.  
        ![assign_users_and_groups.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7d6d3f66d6617cb0/635bce6f7a7bad106b9add70/assign_users_and_groups.png)  
        
    3.  Click the **\+ Add user/group** button.  
        ![add_user_and_group.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt61aa33fee4d3ef4a/635b82d82746fd107d68b2b8/add_user_and_group.png)
    4.  In the resulting window, click **None selected** under **Users and groups**.  
        ![click_none_users_and_groups.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3172777830bc5aa3/6368cd47960cb16cff698b14/click_none_users_and_groups.png)  
        
    5.  A list of users appears in the resulting **Users and groups** modal. From the given list, click **Select** to select the users and groups and click **Assign** to assign them the app roles.  
        ![assign_user_to_app_role.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt74bc606e81a0d3c1/6368ca4ad085883b63454347/assign_user_to_app_role.png)  
        
6.  ## Create Group Mapping in Contentstack
    
    Group mapping assigns roles to SCIM groups across your organization and its products in Contentstack. The roles you set for a group apply to all the users added to that group.
    
    To perform group mapping, perform the following steps:
    
    1.  Navigate to **Administration** through the App Switcher, then open the **SCIM** settings.
    2.  From the **SCIM Group** dropdown, select the group for which you want to set permissions.
    3.  Assign one or more organization-level **Administration** roles and product roles for the group.
    4.  Assign project-level roles for the group across stacks, spaces, or AgentOS projects. For example, if you set the “Developer” role for the “Developer stack” stack, users within the selected group will have a “Developer” role on that stack.
    5.  Finally, click **Update** to update the changes in the group mappings.

This process sets up the SCIM Provisioning for your Contenstack account with the Microsoft Azure Active Directory.

## Related Resource

-   [SCIM API](/docs/developers/apis/scim-api)
