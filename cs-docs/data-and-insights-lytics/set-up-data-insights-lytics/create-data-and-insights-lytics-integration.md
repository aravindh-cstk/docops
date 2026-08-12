---
title: "Create a Data & Insights (Lytics) Integration"
description: "Learn how to set up Contentstack's Data & Insights (Lytics) to deliver real-time, personalized digital experiences at scale."
url: /data-and-insights/create-data-and-insights-lytics-integration
---

# Create a Data & Insights (Lytics) Integration

## Create a Data & Insights (Lytics) Integration

This guide explains how to integrate **Data & Insights (Lytics)** with your stack using built-in Contentstack products. This integration enables the platform to collect behavioral data, enrich audience profiles, and deliver personalized experiences through [Personalize](https://www.contentstack.com/docs/personalize#personalize-overview).

Without this authorization, Data & Insights (Lytics) cannot collect events, and Personalize cannot receive audience data. Personalize relies on this data to segment audiences and deliver relevant, tailored experiences at scale.

## Prerequisites

-   Data & Insights enabled for your organization
-   Your self-hosted site deployed
-   Stack connected to the deployed site
-   [Personalize project](/docs/personalize/create-personalize-project) created

## Integrate Data & Insights (Lytics)

Once DAL is enabled for your organization, create a new DAL configuration as follows:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Administration**.
2.  Click **Data Activation Layer**.
3.  If this is your first time, you will be presented with the **Set Up Data Activation Layer** page, click the **\+ New DAL Configuration** button to connect your Contentstack organization to Data & Insights (Lytics).![1. Set up a new Data Activation Layer.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba8ec72a8b08f66e/69b9d63cdafe75074090618a/1._Set_up_a_new_Data_Activation_Layer.png)
4.  Mark the checkbox to accept the Data Privacy terms and conditions as shown below and then click the **Proceed** button.![2. Data privacy confirmation step in DAL setup.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt70132a8d5d301753/69b9d63c56a5ae48f0b838d6/2._Data_privacy_confirmation_step_in_DAL_setup.png)
5.  In the modal that appears, enter the following details:
    1.  **Title:** Enter a suitable name for your DAL. Spaces in the title are allowed.
    2.  **Domain:** Enter the domain name of your website. Ensure that you enter the **production URL** where your content resides. For example, https://www.redpandaresorts.com/
    3.  **CMS Stacks:** Add your CMS stack if you’ve set it up for this specific Launch project or website.
    4.  **Launch Projects:** (Optional) Select the Launch project where you want to integrate Event Tracking (Data & Insights (Lytics)).
    5.  **Personalize Projects:** Add your [Personalize](/docs/personalize/about-personalize) project if you’ve set it up for this specific Launch project or website. You can leverage Personalize to deliver tailored experiences using [Entry Variants](/docs/headless-cms/about-entry-variants#work-with-entry-variants), to optimize engagement and conversions.
    6.  **Data & Insights (Lytics) Account:** Create a new Data & Insights (Lytics) account by clicking the **\+ New Lytics Account** button, OR select an existing Data & Insights (Lytics) account from the drop-down list to connect the appropriate Data & Insights (Lytics) account to your DAL.
        
        **Note:** To connect your pre-existing Data & Insights (Lytics) account, please contact the [support team](mailto:support@contetstack.com).
        
    7.  **Add additional DAL Managers** (Optional): You can grant users in your Contentstack organization access to the configuration.
        
        1.  Click **\+ Add users**.
        2.  In the Select Users modal, choose one or more users from your organization.
            1.  Use the search bar to filter the list if needed.
            2.  Only users with the Admin or Member role appear in the list.
        3.  Click **Add Users**.
        4.  Review the list of added users displayed under Added Users.![3. New_data_activation_layer_setup.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbfa1ab28065c6588/69b9d63c2a26b8140871b297/3._New_data_activation_layer_setup.png)
        
        **Note:** Ideally, each DAL should be connected to a **single website** for optimal tracking and data consistency.
        
6.  Click the **Test Connection** button to ensure the setup was successful.![4. Connection test success for RedPandaResorts.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt54f8bab0fc71f00d/69b9d63c8f08478396bbdcdd/4._Connection_test_success_for_RedPandaResorts.png)
7.  Click **Save** to finalize your DAL configuration.

The DAL has been created successfully.

### Add Non-Admin Users to Existing Data & Insights (Lytics) Account

1.  In the top navigation bar, click the **App Switcher** icon and then click **Administration**.
2.  Click **Data Activation Layer**.
3.  In the list of configurations, find the Data Activation Layer you want to update.
4.  In the **Actions** column, click the vertical ellipsis and then click **Edit**.
5.  In the **Edit Data Activation Layer (DAL)** modal, scroll down to the **Add additional DAL Managers** section.
6.  Click **\+ Add Users**.
7.  In the **Select Users** modal, choose one or more users from your organization.
    1.  Use the search bar to filter the list if needed.
    2.  Only users with the Admin or Member role appear in the list.
8.  Click **Add Users**.
9.  Review the list of added users displayed under **Added Users**.
10.  Click **Update** to save your changes.

### Authorize and Configure Content Classification for your DAL Connection

The first time you access Data & Insights after setting up the DAL configuration, you will need to configure shared authorization. To do this, follow these steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Data & Insights**.
2.  Click the **Select** button for the Data & Insights account you want to access.![5. Account selection screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt975d36aa7e57186a/69b9d63c7d3ec052722ffa79/5._Account_selection_screen.png)
3.  Click the preferred Contentstack organization in the OAuth modal.![6. Organization selection screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2600d42b910b13a3/69b9d63c50ca695bddd3f46d/6._Organization_selection_screen.png)
4.  Click the **Authorize** button to complete the setup.

After successful authorization, you will be redirected to your Data & Insights dashboard. The first time you access it, you will be guided through the initial setup to ensure a personalized and efficient experience. 

![7. Welcome to Lytcis.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta2b747a19704adde/69b9d63cee827a2f8320528a/7._Welcome_to_Lytcis.png)

When prompted, verify the domain(s) you want classified. This step is important. It tells Data & Insights where to access your website so it can associate content interactions with your visitors.

![8. Confirm Domains.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32e607194d5c7452/69b9d63c3a4db2778ccab4d9/8._Confirm_Domains.png)

Once you have enabled and configured DAL, your first DAL has been created. All existing audiences from your Data & Insights (Lytics) account are [automatically synced and displayed](https://docs.lytics.com/docs/using-your-dal#personalization) within the Personalize Audience module.

![9. Synced Audience List.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0a8631a38b9ad8a/69b9d63dee9a64e40c4b0a91/9._Synced_Audience_List.png)

**Note:** After authorization, [enable the **JavaScript Tag** plugin](https://www.contentstack.com/docs/data-and-insights/end-to-end-guide-data-and-insights#enable-and-install-javascript-tag-plugin-for-contentstack) for Contentstack.
