---
title: "Set Up SCIM Provisioning With OneLogin"
description: "Set Up SCIM Provisioning With OneLogin"
url: /administration/set-up-scim-provisioning-with-onelogin
---

# Set Up SCIM Provisioning With OneLogin

## Set Up SCIM Provisioning With OneLogin

You can configure Contentstack as a provisioning app in OneLogin. This will allow you to use OneLogin to provision or deprovision users automatically with Contentstack. 

**Note:** Before proceeding with this guide, ensure that SCIM enabled for your Contentstack organization. If you do not see SCIM settings within **Administration**, reach out to our [support](mailto:support@contentstack.com) team to get it enabled for your organization.

## Prerequisite

-   OneLogin [Developer account](https://www.onelogin.com/developer-signup)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner, Admin, or Security Manager](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to enable SCIM in Contentstack.
    
-   How to create and authorize the Contentstack app in OneLogin.
    
-   How to enable provisioning for users and groups in OneLogin.
    
-   How to provision and deprovision users, and set up groups, via OneLogin.
    
-   How to map OneLogin groups to roles in Contentstack.
    

## Steps for Execution

Here’s a step-by-step guide that explains how you can do this.

1.  [Enable SCIM in Contentstack](#enable-scim-in-contentstack)
2.  [Create and authorize Contentstack app in OneLogin](#create-and-authorize-contentstack-app-in-onelogin)
3.  [Enable Provisioning in Your OneLogin App](#enable-provisioning-in-your-onelogin-app)
4.  [Enable Provisioning for Groups in OneLogin](#enable-provisioning-for-groups-in-onelogin)
5.  [Provision and Deprovision Users via OneLogin](#provision-and-deprovision-users-via-onelogin)
6.  [Set up groups in OneLogin](#set-up-groups-in-onelogin)
7.  [Create group mapping in Contentstack](#create-group-mapping-in-contentstack)

Let's check the process of setting up SCIM in Contentstack.

1.  ## Enable SCIM in Contentstack
    
    To allow provisioning and deprovisioning of users in Contentstack’s organization through OneLogin, you need to enable SCIM in Contentstack by performing the following steps:
    
    1.  Log in to your Contentstack account, then navigate to **Administration** through the App Switcher.
    2.  Open the **SCIM** settings and select the **Enable SCIM** option.
    3.  On the **Enable SCIM** modal, click **Enable**.![Enable_SCIM_1.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7e386a8976a8ac99/9ac05fc9f7dd0f7679eb9c10/Enable_SCIM_1.png?locale=en-us)
    
    After enabling SCIM, you’ll see the **Group Mapping** section. This section will enable you to set permissions for a group of users provisioned via the OneLogin app. We’ll cover the steps to create groups and set up group mappings later in this guide.
    
2.  ## Create and Authorize Contentstack App in OneLogin
    
    **Note:** You will need administrator rights in OneLogin to complete the steps given below.
    
    1.  Log in to your OneLogin account, click **Administration** on the header, and then click the **Applications** link on the header.
    2.  Next, on the **Applications** screen, click the **Add App** button.
    3.  Search for “Contentstack” in the search menu, as shown below, and click the **Contentstack** application.![contentstack-app.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt50156fb27aaf7a83/60488debacf0d53d70c5d52f/contentstack-app.png)
    4.  You will see the app’s **Info** screen with default content. Click on **Save**.![contentstack-app-info.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt97fa024454d52a6a/60488dec08636f3d7749ca7f/contentstack-app-info.png)
        
        The Contentstack app is now added to your OneLogin account.
        
    5.  On the left navigation panel, go to **Configuration**.
    6.  Then, in the **Application details** section, provide the following details:
        
        -   **Site**: Provide the base URL of Contentstack Auth API.
            -   For North American region, use **https://auth-api.contentstack.com**
            -   For Europe region, use **https://eu-auth-api.contentstack.com**
            -   For Azure NA region, use **https://azure-na-auth-api.contentstack.com**
            -   For Azure EU region, use **https://azure-eu-auth-api.contentstack.com**
            -   For GCP North America region, use **https://gcp-na-auth-api.contentstack.com**
            -   For GCP Europe region, use **https://gcp-eu-auth-api.contentstack.com**
        -   **Authorization URL**: Enter the base URL of the Contentstack app to authorize OneLogin with SCIM in Contentstack.
            -   For North American region, use **https://app.contentstack.com**
            -   For Europe region, use **https://eu-app.contentstack.com**
            -   For Azure NA region, use **https://azure-na-app.contentstack.com**
            -   For Azure EU region, **use https://azure-eu-app.contentstack.com**
            -   For GCP North America region, use **https://gcp-na-app.contentstack.com**
            -   For GCP Europe region, use **https://gcp-eu-app.contentstack.com**
        -   **Organization UID**: Enter the UID of your Contentstack organization. To get the UID, log in to your Contentstack account, navigate to **Administration** through the App Switcher, and open the **Org Info** page, where you’ll see the **Organization UID** as shown below:![SCIM_Organization_UID.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am64f8e4a6fc239951/e10067226a142e07a4bcc2ff/SCIM_Organization_UID.png?locale=en-us)
        
        Finally, your **Application details** section will look similar to the image below:![Application_details.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt8084cf1a67f7fac2/63962d4abd8730261b83e8e9/Application_details.jpg)
    7.  Click on **Save** on the top-right corner.
    8.  Go back to the **Configuration** section, navigate to the **API Connection** section, at the end of the **Configuration** page, and click on **Authenticate**.  
        ![Authenticate.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltac4b521854d14a01/624ac5253e5d2501c89413a2/Authenticate.png)
    9.  On the **Complete Authentication Process** modal, click on the **Contentstack** link.![Complete_Authentication.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3f92daaa974a5f88/63962d950af06c10a8d703a0/Complete_Authentication.jpg)This will redirect you to the Contentstack app where you need to authorize OneLogin.
        
        **Note:** If you haven’t logged in to your Contentstack account, it will ask you to first log in to your Contentstack account, and then allow access.
        
    10.  Then, on the “Authorization” modal that appears, select the checkbox to accept terms and conditions and then click on the **Authorize & Install** button to allow OneLogin to access your Contentstack account.
         
         **Note:** Ensure OneLogin has access to the provided organization.
         
         ![Tick checkbox to accept terms and conditions, and click on Authorize & Install](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1cb1a0c9b09132a6/63962e68299486317b51a6b8/OneLogin1.jpg)
    
    Finally, you will get the “OAuth authorization performed successfully” message denoting that the authorization steps are successfully completed.
    
3.  ## Enable Provisioning in Your OneLogin App
    
    To enable your app to use the provisioning feature, before adding or removing a user from the Contentstack organization, you need to perform the following steps:
    
    1.  Staying inside the **Contentstack** app in OneLogin, click on **Provisioning** on the left navigation panel.
    2.  Under the **Workflow** section, check the **Enable provisioning** option, select **Delete** (to enable deprovisioning) from the first dropdown, and **Save** it.![enable-provisioning-option.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltfbd97cdba448d457/63962c79bed42e2d4903d608/enable-provisioning-option.jpg)  
        
        This will enable user provisioning as well as deprovisioning in your OneLogin app.
        
        **Note:** By default, admin approval for the create, delete, and update user options is enabled. You can uncheck any of these if required. For this tutorial, we have kept the default configuration unchanged.
        
    
    Now let’s proceed to enable the provision of groups in OneLogin.
    
4.  ## Enable Provisioning for Groups in OneLogin
    
    To use groups in the OneLogin’s **Contentstack** app, you should enable it by performing the following steps:
    
    1.  Go to the **Parameters** tab on the left navigation menu, and click **Groups** from the **Optional Parameters** section.![click-groups.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb31cbe5cf46c96c3/60488dca3c41f30bce4842be/click-groups.png)
    2.  Then, in the **Edit Field Groups** modal, select **Include in User Provisioning** option, and click **Save**.![edit-field-groups.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta15e030c77ac214f/60488dece122b53af551221e/edit-field-groups.png)
5.  ## Provision and Deprovision Users via OneLogin
    
    Using SCIM, you can provision and deprovision users in your Contentstack organization via OneLogin.
    
    ### Provision Users via OneLogin
    
    To do so, perform the following steps:
    
    1.  In the OneLogin’s **Contentstack** app, after configuring the application, go to the **Users** tab on the header, and then select **Users**.![click-users.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt62554eeeee8a6c0f/60488dec5aedc043351b7347/click-users.png)
    2.  To add a user, click on the **New User** button.
    3.  On the **New User** page that appears, provide the following details about the user:
        
        1.  First and last name
        2.  Email address
        3.  Username  
            
        
        **Note:** The email address and username should not be different.
        
        ![add_new_user_screen](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5c52218bf273edd2/604a099cf9638443346d6eae/add-new-user-screen.png)
    4.  Click on the **Save User** button. With this step, you’ve added a user to your OneLogin app. Now let’s provision this user to your organization in Contentstack.
    5.  Once the user is added, you’ll see an **Applications** tab on the left navigation panel. Go to the **Applications** tab and click the ‘**+**’ button.![click_plus_icon](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf7a28507d402b15a/604a0a09c7198e3af48f92ad/click-plus-icon.png)
    6.  On the “Assign new login to {name of user}” modal that appears, select the application to which you want to provision the user from the **Select application** dropdown menu, and click **Continue**.![select-application.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt97c7bb86591b15ed/60488e11982f2a0bdaf5d1bb/select-application.png)
    7.  On the next screen, review or edit the user’s details and click on **Save** to confirm.![click-delete-user.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte8dab83efebf3b82/60488dca08636f3d7749ca7b/click-delete-user.png)
    8.  As the provisioning option is enabled, initially the status of the request will be in the “Pending” state denoting that admin's approval is required to provision this user. Click on **Pending**.![click-pending.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt03e49e623d1d5059/60488debfef76d094c703386/click-pending.png)
    9.  Then click on **Approve** to approve the request.![click-approve.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6eb6f4b00fc15531/60488dc808636f3d7749ca77/click-approve.png)
    10.  Once the request is approved, the status changes to **Provisioned** as shown in the screenshot below.![provisioned-status.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt84cfbe57b08c8eaf/60488e111a42e25ce54e8f35/provisioned-status.png)
    
    The added user will get an invitation (via email) to collaborate on the Contentstack organization. To verify if the user has been provisioned, navigate to **Administration** through the App Switcher in Contentstack, then click the [**Users**](/docs/administration/organization-users) tab to check if the user’s name appears in the list.  
    Once the user is added to your Contentstack organization, you can proceed with **Step 6** to create groups in the Onelogin app.  
    
    ### Deprovision Users via OneLogin
    
    To deprovision/remove a user from your Contentstack organization using OneLogin, perform the following steps:
    
    1.  Go to the **Contentstack** app in OneLogin created in **Step 2** and click **Users** on the left navigation panel.
    2.  You’ll see a list of users added to the application. Click the user you want to deprovision.![select-user-to-delete.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt926f149d6bf4f27e/60488e11fa12da5a61658b4d/select-user-to-delete.png)
    3.  On the prompt that appears, click **Delete**.![click-delete-user.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte8dab83efebf3b82/60488dca08636f3d7749ca7b/click-delete-user.png)
    4.  To approve this delete request, click on the **Pending** link.![click-on-pending.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt65d8ef99d8d20446/60488de71322a9094ddef9eb/click-on-pending.png)
    5.  **Approve** the request for deprovisioning.![approve-delete-request.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt14f22ec36087d0cd/60488dc8f9638443346d6696/approve-delete-request.png)
    
    The user is now removed from the assigned organization in Contentstack. Note that the user will still have a Contentstack account, but with no access to your organization.
    
6.  ## Set up Groups in OneLogin
    
    A group refers to a collection of users who are designated to share common permissions. Through the OneLogin account, you can create a group using several ways such as through roles or departments.
    
    After creating a group, you can use the “group mapping” functionality in your Contentstack organization for setting permissions.
    
    To set up groups in OneLogin according to the role, perform the following steps:
    
    1.  Click on the **Users** tab and select **Roles**.![select-roles-option.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdf59fee6278e9def/63962cefb17ff611a337f50b/select-roles-option.jpg)
    2.  On the **Roles** page, you will see a default role. Click on the **New Role** button.![new-role-btn.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt49811740b6a43aa8/60488e107b7aea45bd9f6ff5/new-role-btn.png)
    3.  On the next screen, provide a role name, for example, “Developer Role,” then select the applications to which this role is applicable, and **Save** it.![name-the-role.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbcaebe30a54c48a1/60488debfa12da5a61658b49/name-the-role.png)
    4.  A new role will be created and you will be redirected to the **Roles** page. Click on the newly created role.
    5.  Then, go to the **Users** section from the left navigation panel, then under the **Check existing or add new users to this role** section, enter the name of the user, and click **Check**.![add-user-to-role.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf37c5434bc116a0f/60488dbd3c41f30bce4842ba/add-user-to-role.png)
    6.  Add this user to the role by clicking on the **Add To Role** option and then the **Save** button.![add-user-to-role-confirm.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdbb613db6b9b70df/60488dc7c7198e3af48f89fc/add-user-to-role-confirm.png)
    7.  Confirm to add a user to the role by clicking **Save**.
    8.  Next, click on the **Applications** tab at the top.![go-to-applications.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4237accca3310582/60488debf9638443346d669e/go-to-applications.png)
    9.  From the **Applications** page, go to the **Contentstack** application we created in **Step 2.**
    10.  Go to the **Rules** tab and click the **Add Rule** button.![click-add-rule.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt606aecb1f8dbe308/60488dc6e122b53af551221a/click-add-rule.png)
    11.  In the **New mapping** modal that appears, provide the following:
         1.  **Name** of the rule, for example, “Developer Role rule”.
         2.  **Conditions**: Skip it for now.
         3.  **Actions**: Select **Set Groups in Contentstack** from the dropdown menu. From the **For each** dropdown, select **role**, and in the **with value that matches** field, provide the name of the role that you created, for example, “**Developer Role.**”  
             ![new-mapping-window.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltfc8e28737c401735/60488e102d310e5a62e19487/new-mapping-window.png)
             
             **Note:** Ensure that the **Map from OneLogin** option is selected as shown above.
             
    12.  Click on **Save**.
    13.  Now navigate to the **Users** tab from the left navigation panel. You'll see the **Provisioning State** of the user you have associated with a role, as **Pending**.![pending-state-of-user-group-provisioning.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb4d6d1b5e7b30050/60488e11f9638443346d66a2/pending-state-of-user-group-provisioning.png)
    14.  Click on **Pending** and then **Approve**.
    
    You have now successfully added the group. To verify if a group has been added, navigate to **Administration** through the App Switcher, open the **SCIM** settings, and search for the group (you just created) in the dropdown list under the **Group Mapping** section.
    
    Now let’s proceed to map groups to permissions in the Contentstack organization.
    
7.  ## Create Group Mapping in Contentstack
    
    Group mapping assigns roles to SCIM groups across your organization and its products in Contentstack. The roles you set for a group apply to all the users added to that group.
    
    To perform group mapping, perform the following steps:
    
    1.  Navigate to **Administration** through the App Switcher, then open the **SCIM** settings.
    2.  From the **SCIM Group** dropdown, select the group for which you want to set permissions.
    3.  Assign one or more organization-level **Administration** roles and product roles for the group.
    4.  Assign project-level roles for the group across stacks, spaces, or AgentOS projects. For example, if you set the “Developer” role for the “Developer stack” stack, users within the selected group will have a “Developer” role on that stack.
    5.  Finally, **Save** the group mappings.

## Related Resource

-   [SCIM API](/docs/developers/apis/scim-api)
