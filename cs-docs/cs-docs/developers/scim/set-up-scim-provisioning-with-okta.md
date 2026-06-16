---
title: "[SCIM] - Set Up SCIM Provisioning with Okta"
description: Set up guide for configuring Contentstack as a provisioning app in Okta using SCIM (deprecated).
url: https://www.contentstack.com/docs/developers/scim/set-up-scim-provisioning-with-okta
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

**Warning**: This set up guide is deprecated. Please visit our documentation on [Set Up SCIM Provisioning with Okta Native App](/docs/developers/scim/set-up-scim-provisioning-with-okta-native-app).

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

Log in to your Contentstack account and go to the [Organization Settings](/docs/owners-and-admins/organization-settings-overview) page.
- Go to the **SCIM** tab and select the **Enable SCIM** option.
- On the resulting **Enable SCIM **modal, click **Enable**.

## Install the Okta Generic SCIM App from Contentstack Marketplace
On the left navigation panel, click the "Marketplace" icon and then **Apps**. Type out “Okta” in the search bar as follows:
- Click the **Okta Generic SCIM** card and click **Install App**.
- In the resulting authorization window, click the **Authorize & Install** button.
- A **SCIM URL** and a **Secret Token** are generated on the successful installation of the app. Copy them both for future reference.

## Add the Contentstack App to Okta
**Note**: In order to add Contentstack to the Okta application integration, you must be an administrator. To set up an app for Contentstack to use single sign-on (SSO), refer to our [Configure Contentstack App in Okta](/docs/developers/single-sign-on/set-up-sso-with-okta/#configure-contentstack-app-in-okta). If you've already created an app for Contentstack, you can skip this step.

## Configure Provisioning in Okta
To enable your app to use the provisioning feature, before adding or removing a user from the Contentstack organization, you need to perform the following steps:

Navigate to the **General** tab and click **Edit**.
- Within your Contentstack app in Okta, check the **Enable SCIM provisioning** checkbox and click **Save**.
- Go to the **Provisioning** tab, and click **Edit**. Provide the following credentials in the **SCIM Connection window**:**SCIM connector base URL**: Contentstack’s SCIM URL is used as **SCIM connector base URL**. Enter the **SCIM URL** generated in [**step 2.4**](#install-the-okta-generic-scim-app-from-contentstack-marketplace) while installing the **Okta Generic SCIM** app.
- **Unique identifier field for users**: Enter a unique username.
- **Supported provisioning actions**: Under this section, enable **Push New Users**, **Push Profile Updates**, and **Push Groups**.
- **Authentication mode**: Select **HTTP Header** from the drop down.
- **HTTP Header**: Add the **Secret Token** generated in [**step 2.4**](#install-the-okta-generic-scim-app-from-contentstack-marketplace) as the **Bearer** token for the **Authorization** field.
- Click **Test Connector Configuration** (see above screenshot) to ensure the connection between the Okta and the Contentstack app is successful.Click **Save** to save the app provisioning configurations.
- Navigate to the **Settings > To App > Contentstack Attribute Mappings** section to map user attributes such as userName, givenName, and familyName.
- Navigate back to the **Settings > To App** section and click **Edit**.
- Enable **Create Users** for provisioning, and **Deactivate Users** for deprovisioning.
- Click **Save** to save the provisioning settings.

## Assign Users and Groups to Your Application
After configuring the provisioning settings, you need to assign either users or  groups (of users) to your app. Let’s see how to do them both.
- ### Assign People to Your Application
- To assign people to your application, perform the following steps:Navigate to the **Assignments** tab. Click the **Assign** dropdown and select the **Assign to People** option.
- You need to provide the individual's email address and click **Assign**.
- In the resulting people assignment modal, click **Save** **and** **Go Back**.
- Click **Done** to save the assignment. The people assignments are listed as shown below:
- ### Assign Groups to Your Application
- To assign groups to your application, perform the following steps:Navigate to the **Assignments** tab. Click the **Assign** dropdown and select the **Assign to Groups** option.
- Click **Assign** against the group for assigning the group to your app.
- In the resulting **Assign Contentstack to Groups** modal, provide the required information and click **Save** **and** **Go Back**. Then, click **Done**.
- Another way to assign groups to your application is via the **Push Groups** method where you add rules and all groups that meet the rules will be added to the Contentstack app. Here’s how to do it:Navigate to the **Push Groups** tab. Click the **Push Groups** dropdown and select **Find groups by rule**.
- In the resulting window, add some rules for the group and click **Create Rule**.
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
**Warning**: This set up guide is deprecated. Please visit our documentation on [Set Up SCIM Provisioning with Okta Native App](/docs/developers/scim/set-up-scim-provisioning-with-okta-native-app).

### Who can enable SCIM in Contentstack?
**Note**: Only the Owner or Admin users of an organization in Contentstack can perform this step.

### What values do I need from the Contentstack Marketplace app installation?
A **SCIM URL** and a **Secret Token** are generated on the successful installation of the app. Copy them both for future reference.

### Which provisioning actions should be enabled in Okta?
Under **Supported provisioning actions**, enable **Push New Users**, **Push Profile Updates**, and **Push Groups**.