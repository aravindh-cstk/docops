---
title: "[Security Management] - Set Up SCIM Provisioning With OneLogin"
description: Set up SCIM provisioning with OneLogin for Contentstack to provision and deprovision users and manage group mappings.
url: https://www.contentstack.com/docs/administration/set-up-scim-provisioning-with-onelogin
product: Contentstack
doc_type: security-management-guide
audience:
  - developers
  - admins
  - owners
version: unknown
last_updated: 2026-03-25
---

# [Security Management] - Set Up SCIM Provisioning With OneLogin

This page explains how to configure Contentstack as a provisioning app in OneLogin using SCIM, including enabling SCIM, authenticating the OneLogin app, provisioning/deprovisioning users, and setting up group provisioning and group mapping. It is intended for Contentstack organization Owners/Admins and OneLogin administrators who need automated user lifecycle management and permission assignment via groups.

## Set Up SCIM Provisioning With OneLogin

You can configure Contentstack as a provisioning app in OneLogin. This will allow you to use OneLogin to provision or deprovision users automatically with Contentstack.

**Note**: Before proceeding with this guide, ensure that SCIM is a part of your Contentstack plan.

Here’s a step-by-step guide that explains how you can do this.
- [Enable SCIM in Contentstack](#enable-scim-in-contentstack)
- [Create and authorize Contentstack app in OneLogin](#create-and-authorize-contentstack-app-in-onelogin)
- [Enable Provisioning in Your OneLogin App](#enable-provisioning-in-your-onelogin-app)
- [Enable Provisioning for Groups in OneLogin](#enable-provisioning-for-groups-in-onelogin)
- [Provision and Deprovision Users via OneLogin](#provision-and-deprovision-users-via-onelogin)
- [Set up groups in OneLogin](#set-up-groups-in-onelogin)
- [Create group mapping in Contentstack](#create-group-mapping-in-contentstack)

## Prerequisite
- OneLogin [Developer account](https://www.onelogin.com/developer-signup)
- Contentstack account

Let's check the process of setting up SCIM in Contentstack.

## Enable SCIM in Contentstack
**Note**: Only the Owner or Admin users of an organization in Contentstack can perform this step.

To allow provisioning and deprovisioning of users in Contentstack’s organization through OneLogin, you need to enable SCIM in Contentstack by performing the following steps:

Log in to your Contentstack account and go to the [**Organization Settings**](../organization/organization-settings-overview.md) page.
- Go to the SCIM tab and select the **Enable SCIM** option.
- On the **Enable SCIM **modal, click **Enable**.![Enable_SCIM_1.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7e386a8976a8ac99/9ac05fc9f7dd0f7679eb9c10/Enable_SCIM_1.png?locale=en-us)

After enabling SCIM, you’ll see the **Group Mapping** section. This section will enable you to set permissions for a group of users provisioned via the OneLogin app. We’ll cover the steps to create groups and set up group mappings later in this guide.

## Create and Authorize Contentstack App in OneLogin
**Note**: You will need administrator rights in OneLogin to complete the steps given below.

Log in to your OneLogin account, click **Administration** on the header, and then click the **Applications** link on the header.
- Next, on the **Applications** screen, click the **Add App** button.
- Search for “Contentstack” in the search menu, as shown below, and click the **Contentstack** application.![contentstack-app.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt50156fb27aaf7a83/60488debacf0d53d70c5d52f/contentstack-app.png)
- You will see the app’s **Info** screen with default content. Click on **Save**.

The Contentstack app is now added to your OneLogin account.
- On the left navigation panel, go to **Configuration**.
- Then, in the **Application details** section, provide the following details:**Site**: Provide the base URL of Contentstack Auth API.For North American region, use **https://auth-api.contentstack.com**
- For Europe region, use **https://eu-auth-api.contentstack.com**
- For Azure NA region, use **https://azure-na-auth-api.contentstack.com**
- For Azure EU region, use **https://azure-eu-auth-api.contentstack.com**
- For GCP North America region, use** https://gcp-na-auth-api.contentstack.com**
- For GCP Europe region, use** https://gcp-eu-auth-api.contentstack.com**
- **Authorization URL**: Enter the base URL of the Contentstack app to authorize OneLogin with SCIM in Contentstack.For North American region, use **https://app.contentstack.com**
- For Europe region, use **https://eu-app.contentstack.com**
- For Azure NA region, use **https://azure-na-app.contentstack.com**
- For Azure EU region, **use https://azure-eu-app.contentstack.com**
- For GCP North America region, use **https://gcp-na-app.contentstack.com**
- For GCP Europe region, use **https://gcp-eu-app.contentstack.com**
- **Organization UID**: Enter the UID of your Contentstack organization. To get the UID, log in to your Contentstack account and go to the [Organization Settings](../organization/organization-settings-overview.md) page. Then, go to the **INFO** tab and you’ll see **Organization ID** on the** Organization Info** page as shown below:

Finally, your **Application details** section will look similar to the image below:
- Click on **Save** on the top-right corner.
- Go back to the **Configuration** section, navigate to the **API Connection** section, at the end of the **Configuration** page, and click on **Authenticate**.![Authenticate.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltac4b521854d14a01/624ac5253e5d2501c89413a2/Authenticate.png)
- On the **Complete Authentication Process** modal, click on the **Contentstack** link.
This will redirect you to the Contentstack app where you need to authorize OneLogin.**Note:** If you haven’t logged in to your Contentstack account, it will ask you to first log in to your Contentstack account, and then allow access.
- Then, on the “Authorization” modal that appears, select the checkbox to accept terms and conditions and then click on the **Authorize & Install** button to allow OneLogin to access your Contentstack account.

  **Note**: Ensure OneLogin has access to the provided organization.![Tick checkbox to accept terms and conditions, and click on Authorize & Install](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1cb1a0c9b09132a6/63962e68299486317b51a6b8/OneLogin1.jpg)

Finally, you will get the “OAuth authorization performed successfully” message denoting that the authorization steps are successfully completed.

## Enable Provisioning in Your OneLogin App
To enable your app to use the provisioning feature, before adding or removing a user from the Contentstack organization, you need to perform the following steps:

Staying inside the **Contentstack** app in OneLogin, click on **Provisioning** on the left navigation panel.
- Under the **Workflow** section, check the **Enable provisioning** option, select **Delete** (to enable deprovisioning) from the first dropdown, and **Save** it.

This will enable user provisioning as well as deprovisioning in your OneLogin app.

**Note**: By default, admin approval for the create, delete, and update user options is enabled. You can uncheck any of these if required. For this tutorial, we have kept the default configuration unchanged.

Now let’s proceed to enable the provision of groups in OneLogin.

## Enable Provisioning for Groups in OneLogin
To use groups in the OneLogin’s **Contentstack** app, you should enable it by performing the following steps:

Go to the **Parameters** tab on the left navigation menu, and click **Groups** from the **Optional Parameters** section.![click-groups.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb31cbe5cf46c96c3/60488dca3c41f30bce4842be/click-groups.png)
- Then, in the **Edit Field Groups** modal, select** Include in User Provisioning** option, and click **Save**.![edit-field-groups.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta15e030c77ac214f/60488dece122b53af551221e/edit-field-groups.png)

## Provision and Deprovision Users via OneLogin
Using SCIM, you can provision and deprovision users in your Contentstack organization via OneLogin.

### Provision Users via OneLogin
To do so, perform the following steps:In the OneLogin’s **Contentstack** app, after configuring the application, go to the **Users** tab on the header, and then select **Users**.
- To add a user, click on the **New User** button.
- On the** New User** page that appears, provide the following details about the user:First and last name
- Email address
- Username

**Note**: The email address and username should not be different.
- Click on the **Save User** button. With this step, you’ve added a user to your OneLogin app. Now let’s provision this user to your organization in Contentstack.
- Once the user is added, you’ll see an **Applications** tab on the left navigation panel. Go to the **Applications** tab and click the ‘**+**’ button.![click_plus_icon](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf7a28507d402b15a/604a0a09c7198e3af48f92ad/click-plus-icon.png)
- On the “Assign new login to {name of user}” modal that appears, select the application to which you want to provision the user from the **Select application** dropdown menu, and click **Continue**.![select-application.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt97c7bb86591b15ed/60488e11982f2a0bdaf5d1bb/select-application.png)
- On the next screen, review or edit the user’s details and click on **Save** to confirm.![click-delete-user.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte8dab83efebf3b82/60488dca08636f3d7749ca7b/click-delete-user.png)
- As the provisioning option is enabled, initially the status of the request will be in the “Pending” state denoting that admin's approval is required to provision this user. Click on **Pending**.![click-pending.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt03e49e623d1d5059/60488debfef76d094c703386/click-pending.png)
- Then click on **Approve** to approve the request.![click-approve.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6eb6f4b00fc15531/60488dc808636f3d7749ca77/click-approve.png)
- Once the request is approved, the status changes to **Provisioned** as shown in the screenshot below.![provisioned-status.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt84cfbe57b08c8eaf/60488e111a42e25ce54e8f35/provisioned-status.png)

The added user will get an invitation (via email) to collaborate on the Contentstack organization. To verify if the user has been provisioned, go to the [**Organization Settings**](../organization/organization-settings-overview.md) page in Contentstack, and then [**USERS**](../organization/organization-users.md) to check if the user’s name appears in the list.
Once the user is added to your Contentstack organization, you can proceed with **Step 6** to create groups in the Onelogin app.

### Deprovision Users via OneLogin
To deprovision/remove a user from your Contentstack organization using OneLogin, perform the following steps:
- Go to the **Contentstack** app in OneLogin created in **Step 2** and click **Users** on the left navigation panel.
- You’ll see a list of users added to the application. Click the user you want to deprovision.![select-user-to-delete.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt926f149d6bf4f27e/60488e11fa12da5a61658b4d/select-user-to-delete.png)
- On the prompt that appears, click **Delete**.
- To approve this delete request, click on the **Pending** link.![click-on-pending.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt65d8ef99d8d20446/60488de71322a9094ddef9eb/click-on-pending.png)
- **Approve** the request for deprovisioning.![approve-delete-request.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt14f22ec36087d0cd/60488dc8f9638443346d6696/approve-delete-request.png)

The user is now removed from the assigned organization in Contentstack. Note that the user will still have a Contentstack account, but with no access to your organization.

## Set up Groups in OneLogin
A group refers to a collection of users who are designated to share common permissions. Through the OneLogin account, you can create a group using several ways such as through roles or departments.

After creating a group, you can use the “group mapping” functionality in your Contentstack organization for setting permissions.

To set up groups in OneLogin according to the role, perform the following steps:

Click on the **Users** tab and select **Roles**.![select-roles-option.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdf59fee6278e9def/63962cefb17ff611a337f50b/select-roles-option.jpg)
- - On the **Roles** page, you will see a default role. Click on the **New Role** button.
- On the next screen, provide a role name, for example, “Developer Role,” then select the applications to which this role is applicable, and **Save** it.![name-the-role.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbcaebe30a54c48a1/60488debfa12da5a61658b49/name-the-role.png)
- A new role will be created and you will be redirected to the **Roles** page. Click on the newly created role.
- Then, go to the **Users** section from the left navigation panel, then under the **Check existing or add new users to this role** section, enter the name of the user, and click **Check**.![add-user-to-role.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf37c5434bc116a0f/60488dbd3c41f30bce4842ba/add-user-to-role.png)
- Add this user to the role by clicking on the **Add To Role** option and then the **Save** button.![add-user-to-role-confirm.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdbb613db6b9b70df/60488dc7c7198e3af48f89fc/add-user-to-role-confirm.png)
- Confirm to add a user to the role by clicking **Save**.
- Next, click on the **Applications** tab at the top.![go-to-applications.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4237accca3310582/60488debf9638443346d669e/go-to-applications.png)
- - From the **Applications** page, go to the **Contentstack** application we created in **Step 2.**
- Go to the **Rules** tab and click the **Add Rule** button.![click-add-rule.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt606aecb1f8dbe308/60488dc6e122b53af551221a/click-add-rule.png)
- In the** New mapping** modal that appears, provide the following:
**Name** of the rule, for example, “Developer Role rule”.
- **Conditions**: Skip it for now.
- **Actions**: Select **Set Groups in Contentstack** from the dropdown menu. From the **For each** dropdown, select **role**, and in the **with value that matches** field, provide the name of the role that you created, for example, “**Developer Role.**”

**Note**: Ensure that the **Map from OneLogin** option is selected as shown above.
- Click on **Save**.
- Now navigate to the **Users** tab from the left navigation panel. You'll see the **Provisioning State** of the user you have associated with a role, as **Pending**.![pending-state-of-user-group-provisioning.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb4d6d1b5e7b30050/60488e11f9638443346d66a2/pending-state-of-user-group-provisioning.png)
- Click on **Pending** and then **Approve**.

You have now successfully added the group. To verify if a group has been added, go to your Contentstack’s **Organization Settings** page, click the **SCIM** tab, and search for the group (you just created) in the dropdown list under the **Group Mapping** section.

Now let’s proceed to map groups to permissions in the Contentstack organization.

## Create Group Mapping in Contentstack
Group mapping refers to the process of assigning permissions to the SCIM groups at the organization level and the stack level in Contentstack. The permissions you set for a particular group will be applicable to all the users added to that group.

To perform group mapping, perform the following steps:

Go to the **Organization Settings** page in Contentstack and then to the **SCIM **tab.
- From the **SCIM Group** dropdown, select the group for which you want to set permissions.
- Select the **Organization Role** for the group.
- Set **Stack Role** for the group. For example, if you set the “Developer” role for the “Developer stack” stack, users within the selected group will have a “Developer” role on that stack.
- Finally, **Save** the group mappings.

## Common questions

### Who can enable SCIM in Contentstack?
Only the Owner or Admin users of an organization in Contentstack can perform this step.

### Do I need special permissions in OneLogin to set this up?
Yes. You will need administrator rights in OneLogin to complete the steps given in the guide.

### What happens when a user is deprovisioned via OneLogin?
The user is removed from the assigned organization in Contentstack. Note that the user will still have a Contentstack account, but with no access to your organization.

### Why set up group mapping in Contentstack?
Group mapping refers to the process of assigning permissions to the SCIM groups at the organization level and the stack level in Contentstack, and the permissions you set for a particular group will be applicable to all the users added to that group.