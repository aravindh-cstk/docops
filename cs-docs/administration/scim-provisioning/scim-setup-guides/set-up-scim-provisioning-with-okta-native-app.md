---
title: "Set Up SCIM Provisioning with Okta Native App"
description: "Set up SCIM provisioning seamlessly with Okta Native App. Enable automatic user provisioning in Contentstack via Okta. Follow our guide now!"
url: /administration/set-up-scim-provisioning-with-okta-native-app
---

# Set Up SCIM Provisioning with Okta Native App

## Set Up SCIM Provisioning with Okta Native App

You can configure Contentstack as a provisioning app in Okta. This allows you to use Okta to provision or deprovision users automatically with Contentstack.

**Note:** Before proceeding with this guide, ensure that SCIM enabled for your Contentstack organization. If you do not see SCIM settings within **Administration**, reach out to our [support](mailto:support@contentstack.com) team to get it enabled for your organization.

## Prerequisite

-   [Okta tenant](https://developer.okta.com/docs/concepts/multi-tenancy/#what-is-a-tenant) that has [permission](https://help.okta.com/en-us/Content/Topics/Security/administrators-admin-comparison.htm#Applicat) to configure provisioning
-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner, Admin, or Security Manager](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to enable SCIM in Contentstack.
    
-   How to add the Contentstack app to Okta from the App Catalog.
    
-   How to configure API-integration provisioning in Okta with a region-specific base URL.
    
-   How to assign users and groups to your application.
    
-   How to map groups to roles in Contentstack.
    

## Steps for Execution

Here’s a step-by-step guide that explains how you can do this.

1.  [Enable SCIM in Contentstack](#enable-scim-in-contentstack)
2.  [Add the Contentstack App to Okta](#add-the-contentstack-app-to-okta)
3.  [Configure Provisioning in Okta](#configure-provisioning-in-okta)
4.  [Assign Users and Groups to your Application](#assign-users-and-groups-to-your-application)
5.  [Create Group Mapping in Contentstack](#create-group-mapping-in-contentstack)

1.  ## Enable SCIM in Contentstack
    
    To allow provisioning of users in Contentstack’s organization through Okta Native App, you need to enable SCIM in Contentstack by performing the following steps:
    
    1.  Log in to your Contentstack account.
    2.  Navigate to **Administration** through the App Switcher.
    3.  Open the **SCIM** settings and enable the **Enable SCIM** toggle switch.![Enable_SCIM_1.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7e386a8976a8ac99/9ac05fc9f7dd0f7679eb9c10/Enable_SCIM_1.png?locale=en-us)
    4.  On the resulting **Enable SCIM** modal, click **Enable**.
2.  ## Add the Contentstack App to Okta
    
    **Note:** In order to add Contentstack to the Okta application integration, you must be an administrator. If you've already created an app for Contentstack, you can skip this step.
    
    1.  Log in to your Okta Admin account.![3_Okta_Admin_Login.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43079ae4b214afe0/661e53a3f5bcd1821a0c94b6/3_Okta_Admin_Login.png)
    2.  After logging in, you will see the Okta dashboard. Click on the **Application** tab and select **Applications.**
    3.  In the **Applications** page, you will see your already created applications, if any.![4_Applications_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9af22fa5313fe044/661e53a4f19ed857fe2556be/4_Applications_Page.png)
    4.  Click the **Browse App Catalog** to set up an application for Contentstack.![5_Browse_App_Catalog.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0f9ac1d16cf98b93/661e53a4645d1a3961cf0dea/5_Browse_App_Catalog.png)
    5.  Search for “Contentstack” within the **Browse App Integration Catalog** section and select the **Contentstack** app.![6_Browse_App_Integration_Catalog.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt864fc9ba207d542b/661e53a59db0245064a536f3/6_Browse_App_Integration_Catalog.png)
    6.  You will be redirected to the **Contentstack** application. Click on the **Add Integration** button.![7_Add_Integration_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c77dc970816f150/661e53a5f19ed83ea12556c2/7_Add_Integration_Button.png)
    7.  You can edit the **Application label** as per your preference and click on **Done**.![8_Application_label.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb38a4b952b44bb4e/6666f340c97e387144f16389/Step_2.7_Application_Label.png)
    8.  Click **Save**.
3.  ## Configure Provisioning in Okta
    
    To enable your app to use the provisioning feature, you need to perform the following steps:
    
    1.  Locate the **Sign On** tab and click the **Edit** button on Okta Configured App.![9_Edit_in_SSO_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2c490d906fcf6ad/661e53a5f19ed807942556c6/9_Edit_in_SSO_Tab.png)
    2.  Enter the region-specific Application URL of the Contentstack app, as follows, to authorize Okta with SCIM in Contentstack.
        1.  For **North American** region, use https://app.contentstack.com
        2.  For **Europe** region, use https://eu-app.contentstack.com
        3.  For **Azure NA** region, use https://azure-na-app.contentstack.com
        4.  For **Azure EU** region, use https://azure-eu-app.contentstack.com
        5.  For **GCP NA** region, use https://gcp-na-app.contentstack.com
    3.  For **Application username format**, select **Email** from the dropdown.![13_Application_username_format.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94e7bdd076912fb6/661e53af45b6a8e45a390313/13_Application_username_format.png)
    4.  Click **Save**.
    5.  Click on **Provisioning** and then on **Configure API Integration**.![14_Configure_API_Integration_in_Provisioning.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf9c4f44a34738428/661e53afd89750101a17ba90/14_Configure_API_Integration_in_Provisioning.png)
    6.  Select **Enable API integration**. ![15_Enable_API_integration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16833000a5dc264f/6666f2fe3c0f7e3771a43fe9/Step_3.6_Enable_API_Integration.png)
    7.  Navigate back to Contentstack, then navigate to **Administration** through the App Switcher and copy the Organization ID from the **Organization Info** page.
    8.  Next, you need to create the Base URL for the Contentstack Auth API. To do so, select the region-specific URL mentioned below, and replace ORG\_ID with the **Organization ID** value you copied in the above step
        
        <table><tbody><tr><td><strong>Region</strong>&nbsp;</td><td><strong>Base URL</strong>&nbsp;</td></tr><tr><td>North American&nbsp;</td><td><span class="code">https://auth-api.contentstack.com/scim/v2.0/organizations/ORG_ID&nbsp;</span></td></tr><tr><td>Europe&nbsp;</td><td><span class="code">https://eu-auth-api.contentstack.com/scim/v2.0/organizations/ORG_ID&nbsp;</span></td></tr><tr><td>Azure NA&nbsp;</td><td><span class="code">https://azure-na-auth-api.contentstack.com/scim/v2.0/organizations/ORG_ID&nbsp;</span></td></tr><tr><td>Azure EU&nbsp;</td><td><span class="code">https://azure-eu-auth-api.contentstack.com/scim/v2.0/organizations/ORG_ID</span></td></tr></tbody></table>
        
    9.  Now enter this URL beside the **Base URL** field as shown below:![16_Base_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd31d61d923e0f3b7/6666f285a8434eed4826972b/Step_3.9_Base_URL.png)
    10.  Click on **Authenticate with Contentstack** and you will be redirected to the Contentstack Okta app to authorize.
    11.  Click on **Authorize & Install.** ![17_Authorize_&_Install.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt138ed4168c119a2d/661e53af45b6a8dd5939030f/17_Authorize_&_Install.png)
    12.  Go to **To App** on the left under the Settings menu. Make sure you check all the values (as shown in screenshot below).![18_To_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt25f9ff58f88bc042/661e53af0d562600e19cc901/18_To_App.png)
    13.  Click **Save**.
4.  ## Assign Users and Groups to your Application
    
    After configuring the provisioning settings, you need to assign either users or groups (of users) to your app. Let’s see how to do them both.
    
    ### Assign People to your Application
    
    To assign people to your application, perform the following steps:
    
    1.  Navigate to the **Assignments** tab. Click the **Assign** dropdown and select the **Assign to People** option.  
        ![19_Assign_to_People_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5df0c5b494fb9f6f/662795e845f9893ed3cf4a3b/19_Assign_to_People_Button.png)
    2.  You need to provide the individual's email address and click the **Assign** button.  
        ![20_Assign_CS_to_People.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9c1b4b04c4023757/661e53afa3e62295b04bdce5/20_Assign_CS_to_People.png)
    3.  In the resulting people assignment modal, click **Save and Go Back.**
    4.  Click **Done** to save the assignment. The people assignments are listed as shown below:  
        ![21_People_assignments.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt06b60a9398b4b38b/662795e885518c1969556f17/21_People_assignments.png)
    
    ### Assign Groups to your Application
    
    To assign groups to your application, perform the following steps:
    
    1.  Navigate to the **Assignments** tab. Click the **Assign** dropdown and select the **Assign to Groups** option.  
        ![22_Assign_to_Groups_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdc024aa1ee4dde7c/662795e8b0544178b999ef88/22_Assign_to_Groups_Button.png)
    2.  Click **Assign** against the group for assigning the group to your app.![23_Assign_CS_to_Groups.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt55e00b351be99deb/6666f2351946582be64c806e/Step_4B.2_Assign_to_group.png)
    3.  Click **Done**.
    
    Another way to assign groups to your application is via the Push Groups method where you add rules and all groups that meet the rules will be added to the Contentstack app. Here’s how to do it:
    
    1.  Navigate to the **Push Groups** tab. Click the **Push Groups** dropdown and select **Find groups by rule**.  
        ![24_Find_groups_by_rule.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt90a8716edd39644a/662795e8c9de468583d4829f/24_Find_groups_by_rule.png)
    2.  In the resulting window, add some rules for the group and click **Create Rule**.  
        ![25_Create_Rule.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt162b0e307c85464f/662795e8cac8482f4928cd26/25_Create_Rule.png)
    
    Create a rule that matches with the groups to be pushed to Contentstack. For example, if you have a rule created that will push all groups with a name that starts with “Contentstack” to your app (Contentstack).
    
5.  ## Create Group Mapping in Contentstack
    
    Group mapping assigns roles to SCIM groups across your organization and its products in Contentstack. The roles you set for a group apply to all the users added to that group.
    
    To perform group mapping, perform the following steps:
    
    1.  Navigate to **Administration** through the App Switcher, then open the **SCIM** settings.
    2.  From the **SCIM Group** dropdown, select the group for which you want to set permissions.
    3.  Assign one or more organization-level **Administration** roles and product roles for the group.
    4.  Assign project-level roles for the group across stacks, spaces, or AgentOS projects. For example, if you set the “Developer” role for the “Developer stack” stack, users within the selected group will have a “Developer” role on that stack.
    5.  Finally, click **Update** to update the changes in the group mappings.

This process sets up the SCIM Provisioning for your Contenstack account with the Okta native app.

## Related Resource

-   [SCIM API](/docs/developers/apis/scim-api)
