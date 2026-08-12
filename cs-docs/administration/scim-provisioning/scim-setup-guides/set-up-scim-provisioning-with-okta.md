---
title: "Set Up SCIM Provisioning with Okta"
description: "Set Up SCIM Provisioning with Okta that allows you to use Okta to provision or deprovision users automatically with Contentstack."
url: /administration/set-up-scim-provisioning-with-okta
---

# Set Up SCIM Provisioning with Okta

## Set Up SCIM Provisioning with Okta

**Warning:** This set up guide is deprecated. Please visit our documentation on [Set Up SCIM Provisioning with Okta Native App](/docs/administration/set-up-scim-provisioning-with-okta-native-app).

You can configure Contentstack as a provisioning app in Okta. This allows you to use Okta to provision or deprovision users automatically with Contentstack.

**Note:** Before proceeding with this guide, ensure that SCIM enabled for your Contentstack organization. If you do not see SCIM settings within **Administration**, reach out to our [support](mailto:support@contentstack.com) team to get it enabled for your organization.

## Prerequisites

-   [Okta tenant](https://developer.okta.com/docs/concepts/multi-tenancy/#what-is-a-tenant) that has [permission](https://help.okta.com/en-us/Content/Topics/Security/administrators-admin-comparison.htm#Applicat) to configure provisioning
-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner, Admin, or Security Manager](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to enable SCIM in Contentstack.
    
-   How to install the Okta Generic SCIM app from the Contentstack Marketplace.
    
-   How to add the Contentstack app to Okta.
    
-   How to configure provisioning and attribute mappings in Okta.
    
-   How to assign users and groups, and map groups to roles in Contentstack.
    

## Steps for Execution

Here’s a step-by-step guide that explains how you can do this.

1.  [Enable SCIM in Contentstack](#enable-scim-in-contentstack)
2.  [Install the Okta Generic SCIM App from Contentstack Marketplace](#install-the-okta-generic-scim-app-from-contentstack-marketplace)
3.  [Add the Contentstack App to Okta](#add-the-contentstack-app-to-okta)
4.  [Configure Provisioning in Okta](#configure-provisioning-in-okta)
5.  [Assign Users and Groups to Your Application](#assign-users-and-groups-to-your-application)
6.  [Create Group Mapping in Contentstack](#create-group-mapping-in-contentstack)

1.  ## Enable SCIM in Contentstack
    
    To allow provisioning of users in Contentstack’s organization through Okta, you need to enable SCIM in Contentstack by performing the following steps:
    
    1.  Log in to your Contentstack account, then navigate to **Administration** through the App Switcher.
    2.  Open the **SCIM** settings and select the **Enable SCIM** option.
    3.  On the resulting **Enable SCIM** modal, click **Enable**.![Enable_SCIM_1.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7e386a8976a8ac99/9ac05fc9f7dd0f7679eb9c10/Enable_SCIM_1.png?locale=en-us)
2.  ## Install the Okta Generic SCIM App from Contentstack Marketplace
    
    1.  On the left navigation panel, click the "Marketplace" icon and then **Apps**. Type out “Okta” in the search bar as follows:![select_okta_frop_MP_apps.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2b169880342f59f4/6437fa538485c010da11b019/select_okta_frop_MP_apps.png)
    2.  Click the **Okta Generic SCIM** card and click **Install App**.![Install_app.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3bd4e165913ea38f/6437fa2dcbf47d113c0b28d7/Install_app.png)
    3.  In the resulting authorization window, click the **Authorize & Install** button.![Okta-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt17030df479922e5e/64b91d74ff3e9b816b4d7761/Okta-Install-App.png)
    4.  A **SCIM URL** and a **Secret Token** are generated on the successful installation of the app. Copy them both for future reference.![scim_url_and_token.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt203fd251c7c8a5fa/6437fa5335650a11076449dc/scim_url_and_token.png)
3.  ## Add the Contentstack App to Okta
    
    **Note:** In order to add Contentstack to the Okta application integration, you must be an administrator. To set up an app for Contentstack to use single sign-on (SSO), refer to our [Configure Contentstack App in Okta](/docs/administration/set-up-sso-with-okta/#configure-contentstack-app-in-okta). If you've already created an app for Contentstack, you can skip this step.
    
4.  ## Configure Provisioning in Okta
    
    To enable your app to use the provisioning feature, before adding or removing a user from the Contentstack organization, you need to perform the following steps:
    
    1.  Navigate to the **General** tab and click **Edit**.![general-edit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte16588e90db5c912/6437fa2de663291176df340d/general-edit.png)
    2.  Within your Contentstack app in Okta, check the **Enable SCIM provisioning** checkbox and click **Save**.![enable_provisioning_and_save.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt02b5506db3f2aaaa/6437f9d9b2ef0d11ecea05b2/enable_provisioning_and_save.png)
    3.  Go to the **Provisioning** tab, and click **Edit**. Provide the following credentials in the **SCIM Connection window**:
        -   **SCIM connector base URL**: Contentstack’s SCIM URL is used as **SCIM connector base URL**. Enter the **SCIM URL** generated in [**step 2.4**](#install-the-okta-generic-scim-app-from-contentstack-marketplace) while installing the **Okta Generic SCIM** app.
        -   **Unique identifier field for users**: Enter a unique username.
        -   **Supported provisioning actions**: Under this section, enable **Push New Users**, **Push Profile Updates**, and **Push Groups**.
        -   **Authentication mode**: Select **HTTP Header** from the drop down.
        -   **HTTP Header**: Add the **Secret Token** generated in [**step 2.4**](#install-the-okta-generic-scim-app-from-contentstack-marketplace) as the **Bearer** token for the **Authorization** field.![scim_connection_modal_credentials.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9fe9151574b79712/6437fa5270368e118fdf14d1/scim_connection_modal_credentials.png)
    4.  Click **Test Connector Configuration** (see above screenshot) to ensure the connection between the Okta and the Contentstack app is successful.
        
        Click **Save** to save the app provisioning configurations.
        
    5.  Navigate to the **Settings > To App > Contentstack Attribute Mappings** section to map user attributes such as userName, givenName, and familyName.![attribute_mapping.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd67982076e1a8676/6437f9d937ecbf10cadcf4b3/attribute_mapping.png)
    6.  Navigate back to the **Settings > To App** section and click **Edit**.
    7.  Enable **Create Users** for provisioning, and **Deactivate Users** for deprovisioning.![enable_provisioning_and_deprovisioning.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt64b2279d3a409bf7/6437f9d9eb41fa1100c8412f/enable_provisioning_and_deprovisioning.png)
    8.  Click **Save** to save the provisioning settings.
5.  ## Assign Users and Groups to Your Application
    
    After configuring the provisioning settings, you need to assign either users or groups (of users) to your app. Let’s see how to do them both.
    
    -   ### Assign People to Your Application
        
        To assign people to your application, perform the following steps:
        
        1.  Navigate to the **Assignments** tab. Click the **Assign** dropdown and select the **Assign to People** option.![people_assignments.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8dc6653f55f4046/6437fa2d7f99b91181b33747/people_assignments.png)
        2.  You need to provide the individual's email address and click **Assign**.![people_assignment_modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ec1f310b96bb17c/6437fa2d243bd1112e62f93b/people_assignment_modal.png)
        3.  In the resulting people assignment modal, click **Save** **and** **Go Back**.
        4.  Click **Done** to save the assignment. The people assignments are listed as shown below:![view_people_assignment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7d6dc8a6abf630bd/6437fa537ae71310d19e3179/view_people_assignment.png)
    -   ### Assign Groups to Your Application
        
        To assign groups to your application, perform the following steps:
        
        1.  Navigate to the **Assignments** tab. Click the **Assign** dropdown and select the **Assign to Groups** option.![assign_groups.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c2d2ecbdd9a3b5a/6437f9d9baf8ae10e2170897/assign_groups.png)
        2.  Click **Assign** against the group for assigning the group to your app.![assign_group_and_save.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4874d15079d11b8/6437f9d8cbf631109cafb22d/assign_group_and_save.png)
        3.  In the resulting **Assign Contentstack to Groups** modal, provide the required information and click **Save** **and** **Go Back**. Then, click **Done**.
    -   Another way to assign groups to your application is via the **Push Groups** method where you add rules and all groups that meet the rules will be added to the Contentstack app. Here’s how to do it:
        
        1.  Navigate to the **Push Groups** tab. Click the **Push Groups** dropdown and select **Find groups by rule**.![push_groups.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0bfade1d90afd42/6437fa2e8f121010dc4ca835/push_groups.png)
        2.  In the resulting window, add some rules for the group and click **Create Rule**.![create_rule.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ef07b29a0c3d60a/6437f9d9ba137c11cf05a5ec/create_rule.png)
    -   Create a rule that matches with the groups to be pushed to Contentstack. For example, the rule created in the above screenshot will push all groups with a name that starts with “Contentstack” to your app (Contentstack).
6.  ## Create Group Mapping in Contentstack
    
    Group mapping assigns roles to SCIM groups across your organization and its products in Contentstack. The roles you set for a group apply to all the users added to that group.
    
    To perform group mapping, perform the following steps:
    
    1.  Navigate to **Administration** through the App Switcher, then open the **SCIM** settings.
    2.  From the **SCIM Group** dropdown, select the group for which you want to set permissions.
    3.  Assign one or more organization-level **Administration** roles and product roles for the group.
    4.  Assign project-level roles for the group across stacks, spaces, or AgentOS projects. For example, if you set the “Developer” role for the “Developer stack” stack, users within the selected group will have a “Developer” role on that stack.
    5.  Finally, click **Update** to update the changes in the group mappings.

This process sets up the SCIM Provisioning for your Contenstack account with the Okta.

## Related Resource

-   [SCIM API](/docs/developers/apis/scim-api)
