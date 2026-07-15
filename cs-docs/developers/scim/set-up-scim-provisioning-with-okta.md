---
title: "[SCIM] - Set Up SCIM Provisioning with Okta"
description: Set up guide for configuring Contentstack as a provisioning app in Okta using SCIM (deprecated).
url: https://www.contentstack.com/docs/administration/set-up-scim-provisioning-with-okta
product: Contentstack
doc_type: setup-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-26
---

# [SCIM] - Set Up SCIM Provisioning with Okta

This page explains how to configure Contentstack as a provisioning app in Okta using SCIM, including enabling SCIM in Contentstack, installing the Okta Generic SCIM app, configuring provisioning, assigning users/groups, and mapping groups. It is intended for Contentstack organization owners/admins and Okta administrators who need automated user provisioning/deprovisioning between Okta and Contentstack.

## Set Up SCIM Provisioning with Okta

**Warning**: This set up guide is deprecated. Please visit our documentation on [Set Up SCIM Provisioning with Okta Native App](./set-up-scim-provisioning-with-okta-native-app.md).

You can configure Contentstack as a provisioning app in Okta. This allows you to use Okta to provision or deprovision users automatically with Contentstack.

**Note**: Before proceeding with this guide, ensure that SCIM is a part of your Contentstack plan.

Here’s a step-by-step guide that explains how you can do this.
- [Enable SCIM in Contentstack](#enable-scim-in-contentstack)
- [Install the Okta Generic SCIM App from Contentstack Marketplace](#install-the-okta-generic-scim-app-from-contentstack-marketplace)
- [Add the Contentstack App to Okta](#add-the-contentstack-app-to-okta)
- [Configure Provisioning in Okta](#configure-provisioning-in-okta)
- [Assign Users and Groups to Your Application](#assign-users-and-groups-to-your-application)
- [Create Group Mapping in Contentstack](#create-group-mapping-in-contentstack)

## Prerequisite
- [Okta tenant](https://developer.okta.com/docs/concepts/multi-tenancy/#what-is-a-tenant) that has [permission](https://help.okta.com/en-us/Content/Topics/Security/administrators-admin-comparison.htm#Applicat) to configure provisioning
- [https://app.contentstack.com/#!/login](https://app.contentstack.com/#!/login)[Contentstack account](https://www.contentstack.com/login/)

## Enable SCIM in Contentstack
**Note**: Only the Owner or Admin users of an organization in Contentstack can perform this step.

To allow provisioning of users in Contentstack’s organization through Okta, you need to enable SCIM in Contentstack by performing the following steps:

Log in to your Contentstack account and go to the [Organization Settings](../organization/organization-settings-overview.md) page.
- Go to the **SCIM** tab and select the **Enable SCIM** option.
- On the resulting **Enable SCIM **modal, click **Enable**.![Enable_SCIM_1.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7e386a8976a8ac99/9ac05fc9f7dd0f7679eb9c10/Enable_SCIM_1.png?locale=en-us)

## Install the Okta Generic SCIM App from Contentstack Marketplace
On the left navigation panel, click the "Marketplace" icon and then **Apps**. Type out “Okta” in the search bar as follows:![select_okta_frop_MP_apps.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2b169880342f59f4/6437fa538485c010da11b019/select_okta_frop_MP_apps.png)
- Click the **Okta Generic SCIM** card and click **Install App**.![Install_app.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3bd4e165913ea38f/6437fa2dcbf47d113c0b28d7/Install_app.png)
- In the resulting authorization window, click the **Authorize & Install** button.![Okta-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt17030df479922e5e/64b91d74ff3e9b816b4d7761/Okta-Install-App.png)
- A **SCIM URL** and a **Secret Token** are generated on the successful installation of the app. Copy them both for future reference.![scim_url_and_token.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt203fd251c7c8a5fa/6437fa5335650a11076449dc/scim_url_and_token.png)

## Add the Contentstack App to Okta
**Note**: In order to add Contentstack to the Okta application integration, you must be an administrator. To set up an app for Contentstack to use single sign-on (SSO), refer to our [Configure Contentstack App in Okta](../single-sign-on/set-up-sso-with-okta.md#configure-contentstack-app-in-okta). If you've already created an app for Contentstack, you can skip this step.

## Configure Provisioning in Okta
To enable your app to use the provisioning feature, before adding or removing a user from the Contentstack organization, you need to perform the following steps:

Navigate to the **General** tab and click **Edit**.![general-edit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte16588e90db5c912/6437fa2de663291176df340d/general-edit.png)
- Within your Contentstack app in Okta, check the **Enable SCIM provisioning** checkbox and click **Save**.![enable_provisioning_and_save.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt02b5506db3f2aaaa/6437f9d9b2ef0d11ecea05b2/enable_provisioning_and_save.png)
- Go to the **Provisioning** tab, and click **Edit**. Provide the following credentials in the **SCIM Connection window**:**SCIM connector base URL**: Contentstack’s SCIM URL is used as **SCIM connector base URL**. Enter the **SCIM URL** generated in [**step 2.4**](#install-the-okta-generic-scim-app-from-contentstack-marketplace) while installing the **Okta Generic SCIM** app.
- **Unique identifier field for users**: Enter a unique username.
- **Supported provisioning actions**: Under this section, enable **Push New Users**, **Push Profile Updates**, and **Push Groups**.
- **Authentication mode**: Select **HTTP Header** from the drop down.
- **HTTP Header**: Add the **Secret Token** generated in [**step 2.4**](#install-the-okta-generic-scim-app-from-contentstack-marketplace) as the **Bearer** token for the **Authorization** field.![scim_connection_modal_credentials.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9fe9151574b79712/6437fa5270368e118fdf14d1/scim_connection_modal_credentials.png)
- Click **Test Connector Configuration** (see above screenshot) to ensure the connection between the Okta and the Contentstack app is successful.Click **Save** to save the app provisioning configurations.
- Navigate to the **Settings > To App > Contentstack Attribute Mappings** section to map user attributes such as userName, givenName, and familyName.![attribute_mapping.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd67982076e1a8676/6437f9d937ecbf10cadcf4b3/attribute_mapping.png)
- Navigate back to the **Settings > To App** section and click **Edit**.
- Enable **Create Users** for provisioning, and **Deactivate Users** for deprovisioning.![enable_provisioning_and_deprovisioning.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt64b2279d3a409bf7/6437f9d9eb41fa1100c8412f/enable_provisioning_and_deprovisioning.png)
- Click **Save** to save the provisioning settings.

## Assign Users and Groups to Your Application
After configuring the provisioning settings, you need to assign either users or  groups (of users) to your app. Let’s see how to do them both.
- ### Assign People to Your Application
- To assign people to your application, perform the following steps:Navigate to the **Assignments** tab. Click the **Assign** dropdown and select the **Assign to People** option.
- You need to provide the individual's email address and click **Assign**.![people_assignment_modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ec1f310b96bb17c/6437fa2d243bd1112e62f93b/people_assignment_modal.png)
- In the resulting people assignment modal, click **Save** **and** **Go Back**.
- Click **Done** to save the assignment. The people assignments are listed as shown below:![view_people_assignment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7d6dc8a6abf630bd/6437fa537ae71310d19e3179/view_people_assignment.png)
- ### Assign Groups to Your Application
- To assign groups to your application, perform the following steps:Navigate to the **Assignments** tab. Click the **Assign** dropdown and select the **Assign to Groups** option.
- Click **Assign** against the group for assigning the group to your app.![assign_group_and_save.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4874d15079d11b8/6437f9d8cbf631109cafb22d/assign_group_and_save.png)
- In the resulting **Assign Contentstack to Groups** modal, provide the required information and click **Save** **and** **Go Back**. Then, click **Done**.
- Another way to assign groups to your application is via the **Push Groups** method where you add rules and all groups that meet the rules will be added to the Contentstack app. Here’s how to do it:Navigate to the **Push Groups** tab. Click the **Push Groups** dropdown and select **Find groups by rule**.
- In the resulting window, add some rules for the group and click **Create Rule**.![create_rule.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ef07b29a0c3d60a/6437f9d9ba137c11cf05a5ec/create_rule.png)
- Create a rule that matches with the groups to be pushed to Contentstack. For example, the rule created in the above screenshot will push all groups with a name that starts with “Contentstack” to your app (Contentstack).

## Create Group Mapping in Contentstack
Group mapping refers to the process of assigning permissions to the SCIM groups at the organization level and the stack level in Contentstack. The permissions you set for a particular group will be applicable to all the users added to that group.

To perform group mapping, perform the following steps:

Go to the **Organization Settings** page in Contentstack and then to the **SCIM **tab.
- From the **SCIM Group** dropdown, select the group for which you want to set permissions.
- Select the **Organization Role** for the group.
- Set **Stack Role** for the group. For example, if you set the “Developer” role for the “Developer stack” stack, users within the selected group will have a “Developer” role on that stack.
- Finally, click **Update** to update the changes in the group mappings.

This process sets up the SCIM Provisioning for your Contenstack account with the Okta.

## Common questions

### Is this guide current?
**Warning**: This set up guide is deprecated. Please visit our documentation on [Set Up SCIM Provisioning with Okta Native App](./set-up-scim-provisioning-with-okta-native-app.md).

### Who can enable SCIM in Contentstack?
**Note**: Only the Owner or Admin users of an organization in Contentstack can perform this step.

### What values do I need from the Contentstack Marketplace app installation?
A **SCIM URL** and a **Secret Token** are generated on the successful installation of the app. Copy them both for future reference.

### Which provisioning actions should be enabled in Okta?
Under **Supported provisioning actions**, enable **Push New Users**, **Push Profile Updates**, and **Push Groups**.