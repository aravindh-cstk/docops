---
title: "[Data & Insights] - Create a Data & Insights (Lytics) Integration"
description: Create and configure a Data Activation Layer (DAL) configuration to integrate Data & Insights (Lytics) with Contentstack and Personalize.
url: https://www.contentstack.com/docs/data-and-insights/create-data-and-insights-lytics-integration
product: Contentstack
doc_type: guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Data & Insights] - Create a Data & Insights (Lytics) Integration

This page explains how to integrate Data & Insights (Lytics) with Contentstack using the Data Activation Layer (DAL), including prerequisites, setup steps, authorization, and configuration needed to enable event collection and audience syncing for Personalize.

## Create a Data & Insights (Lytics) Integration

This guide explains how to integrate **Data & Insights (Lytics)** with your stack using built-in Contentstack products. This integration enables the platform to collect behavioral data, enrich audience profiles, and deliver personalized experiences through [Personalize](../agent-os/personalize.md#personalize-overview).

Without this authorization, Data & Insights (Lytics) cannot collect events, and Personalize cannot receive audience data. Personalize relies on this data to segment audiences and deliver relevant, tailored experiences at scale.

## Prerequisites
- Data & Insights enabled for your organization
- Your self-hosted site deployed
- Stack connected to the deployed site
- [Personalize project](../personalize/create-personalize-project.md) created

## Integrate Data & Insights (Lytics)
Once DAL is enabled for your organization, create a new DAL configuration as follows:
- In the top navigation bar, click the **App Switcher** icon and then click **Administration**.
- Click **Data Activation Layer**.
- If this is your first time, you will be presented with the **Set Up Data Activation Layer** page, click the **+ New DAL Configuration** button to connect your Contentstack organization to Data & Insights (Lytics).![1. Set up a new Data Activation Layer.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba8ec72a8b08f66e/69b9d63cdafe75074090618a/1._Set_up_a_new_Data_Activation_Layer.png)
- Mark the checkbox to accept the Data Privacy terms and conditions as shown below and then click the **Proceed** button.![2. Data privacy confirmation step in DAL setup.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt70132a8d5d301753/69b9d63c56a5ae48f0b838d6/2._Data_privacy_confirmation_step_in_DAL_setup.png)
- In the modal that appears, enter the following details:**Title:** Enter a suitable name for your DAL. Spaces in the title are allowed.
- **Domain: **Enter the domain name of your website. Ensure that you enter the **production URL** where your content resides. For example, `https://www.redpandaresorts.com/`
- **CMS Stacks:** Add your CMS stack if you’ve set it up for this specific Launch project or website.
- **Launch Projects: **(Optional)** **Select the Launch project where you want to integrate Event Tracking (Data & Insights (Lytics)).
- **Personalize Projects:** Add your [Personalize](../personalize/about-personalize.md) project if you’ve set it up for this specific Launch project or website. You can leverage Personalize to deliver tailored experiences using [Entry Variants](/docs/content-managers/entry-variants#work-with-entry-variants), to optimize engagement and conversions.
- **Data & Insights (Lytics) Account: **Create a new Data & Insights (Lytics) account by clicking the **+ New Lytics Account** button, OR select an existing Data & Insights (Lytics) account from the drop-down list to connect the appropriate Data & Insights (Lytics) account to your DAL.

  **Note:** To connect your pre-existing Data & Insights (Lytics) account, please contact the [support team](mailto:support@contetstack.com).
- **Add additional DAL Managers** (Optional): You can grant users in your Contentstack organization access to the configuration.Click **+ Add users**.
- In the Select Users modal, choose one or more users from your organization.Use the search bar to filter the list if needed.
- Only users with the Admin or Member role appear in the list.
- Click **Add Users**.
- Review the list of added users displayed under Added Users.![3. New_data_activation_layer_setup.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbfa1ab28065c6588/69b9d63c2a26b8140871b297/3._New_data_activation_layer_setup.png)

**Note:** Ideally, each DAL should be connected to a **single website** for optimal tracking and data consistency.
- Click the **Test Connection** button to ensure the setup was successful.![4. Connection test success for RedPandaResorts.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt54f8bab0fc71f00d/69b9d63c8f08478396bbdcdd/4._Connection_test_success_for_RedPandaResorts.png)
- Click **Save** to finalize your DAL configuration.

The DAL has been created successfully.

## Add Non-Admin Users to Existing Data & Insights (Lytics) Account
- In the top navigation bar, click the **App Switcher** icon and then click **Administration**.
- Click **Data Activation Layer**.
- In the list of configurations, find the Data Activation Layer you want to update.
- In the **Actions** column, click the vertical ellipsis and then click **Edit**.
- In the **Edit Data Activation Layer (DAL)** modal, scroll down to the **Add additional DAL Managers** section.
- Click **+ Add Users**.
- In the **Select Users** modal, choose one or more users from your organization.Use the search bar to filter the list if needed.
- Only users with the Admin or Member role appear in the list.
- Click **Add Users**.
- Review the list of added users displayed under **Added Users**.
- Click **Update** to save your changes.

## Authorize and Configure Content Classification for your DAL Connection
The first time you access Data & Insights after setting up the DAL configuration, you will need to configure shared authorization. To do this, follow these steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Data & Insights**.
- Click the **Select** button for the Data & Insights account you want to access.![5. Account selection screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt975d36aa7e57186a/69b9d63c7d3ec052722ffa79/5._Account_selection_screen.png)
- Click the preferred Contentstack organization in the OAuth modal.![6. Organization selection screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2600d42b910b13a3/69b9d63c50ca695bddd3f46d/6._Organization_selection_screen.png)
- Click the **Authorize** button to complete the setup.

After successful authorization, you will be redirected to your Data & Insights dashboard. The first time you access it, you will be guided through the initial setup to ensure a personalized and efficient experience.

When prompted, verify the domain(s) you want classified. This step is important. It tells Data & Insights where to access your website so it can associate content interactions with your visitors.

Once you have enabled and configured DAL, your first DAL has been created. All existing audiences from your Data & Insights (Lytics) account are [automatically synced and displayed](https://docs.lytics.com/docs/using-your-dal#personalization) within the Personalize Audience module.

**Note:** After authorization, [enable the **JavaScript Tag** plugin](./end-to-end-guide-data-and-insights.md#enable-and-install-javascript-tag-plugin-for-contentstack) for Contentstack.

## Common questions

### Do I need authorization for Data & Insights (Lytics) to collect events?
Yes. Without this authorization, Data & Insights (Lytics) cannot collect events, and Personalize cannot receive audience data.

### What domain should I enter when creating the DAL configuration?
Enter the **production URL** where your content resides (for example, `https://www.redpandaresorts.com/`).

### Can I add additional users to manage the DAL configuration?
Yes. Use the **Add additional DAL Managers** section and click **+ Add Users** to grant users in your Contentstack organization access to the configuration.

### What should I do after authorization?
After authorization, [enable the **JavaScript Tag** plugin](./end-to-end-guide-data-and-insights.md#enable-and-install-javascript-tag-plugin-for-contentstack) for Contentstack.