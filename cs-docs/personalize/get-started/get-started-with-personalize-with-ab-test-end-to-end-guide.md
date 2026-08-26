---
title: "Getting Started with Contentstack Personalize with A/B Testing: An End-to-End Guide"
description: "Learn how to get started with Contentstack Personalize using A/B testing in this comprehensive end-to-end guide."
url: /personalize/get-started-with-personalize-with-ab-test-end-to-end-guide
uid: blt174d1cc4b54d4f41
---

# Getting Started with Contentstack Personalize with A/B Testing: An End-to-End Guide

## Getting Started with Contentstack Personalize with A/B Testing: An End-to-End Guide

Contentstack Personalize is an optimization engine that uses real-time user data to dynamically adapt content. This allows you to create highly targeted experiences for specific audiences, improving engagement and conversion.

This step-by-step guide will help you get started quickly with Contentstack Personalize by performing [Automate Your Winning Strategy](#automate-your-winning-strategy) the following sequence of tasks:

1.  [Create a Personalize Project and Connect it to an Existing Stack](#create-a-personalize-project-and-connect-it-to-an-existing-stack)
2.  [Set up SDK](#set-up-sdk)
3.  [Create an A/B Test Experience in Personalize](#create-an-a-b-test-experience-in-personalize)
4.  [Create an Event](#create-an-event)
5.  [Triggering Events and Collecting Metrics](#triggering-events-and-collecting-metrics)
6.  [Create Entry Variants in CMS](#create-entry-variants-in-cms)
7.  [Activate the A/B Test Experience](#activate-the-a-b-test-experience)
8.  [View Experience Analytics](#view-experience-analytics)
9.  [Automate Your Winning Strategy](#automate-your-winning-strategy)

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack [Organization Owner/Admin](/docs/administration/about-administration-roles) or [Stack Owner/Admin](/docs/headless-cms/types-of-roles) that has Personalize enabled
-   Next.js website (version 14 and above) with [App Router](https://nextjs.org/docs/app)
-   Website content sourced from a Stack and deployed on your preferred hosting platform
-   A basic understanding of A/B testing and Contentstack’s UI

## What You Will Learn

-   How to create a Personalize project and connect it to a stack.

-   How to build and activate an A/B test experience with variants and an event.

-   How to create, publish, and manage entry variants in the CMS.

-   How to view experience analytics and act on the winning variant.


In this guide, you will create an A/B test to test a different headline on your website, and convert a visitor every time they click the CTA (Call to Action). Let’s dive in and create a Personalize project.

## Create a Personalize Project and Connect it to an Existing Stack

To create a new Personalize project, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the **\+ New Personalize Project** button.
3.  In the **New Personalize Project** modal,
    1.  Enter a **Name** and optional **Description** for the project.
    2.  Select an existing stack from the drop-down list to connect it to your Personalize project.
    3.  Click the **Create Project** button.![New Personalize Project modal with name, description, and stack fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt322f6ad2aa274994/6752dbb67dc30f60b71cd913/3_-_Getting_Started_with_Contentstack_Personalize_with_A_B_Testing.png)

This creates your new Personalize project and it will now appear on the Personalize Projects landing page.

**Additional Resource:** For detailed information, please refer to the [Create a Project](/docs/personalize/create-personalize-project/) documentation.

## Set up SDK

You must set up the Personalize Edge SDK for your Next.js website, hosted on Vercel. To do this, refer to [this guide](/docs/personalize/setup-nextjs-website-with-personalize-vercel) and then continue the further steps in Personalize. After setting up the SDK for your Next.js website, continue the steps further from this guide.

**Additional Resource:** For setting up the Personalize Edge SDK for your Next.js website with Personalize, hosted on Launch, refer to [this guide](/docs/personalize/setup-nextjs-website-with-personalize-launch).

## Create an A/B Test Experience in Personalize

An Experience is a configuration within a personalization platform for managing and executing tests and campaigns. You can choose between Segmented or A/B Test experiences. An A/B test experience is a randomized experiment that lets you present two or more content variants of a web page or an app and display them to different sets of users at the same time to verify the effectiveness of these variants.

In this guide, you will create an A/B Test experience with the following details:

-   **A/B Test experience name**: Headline Test
-   **Variants**:
    -   Control: This is a variant that represents the existing headline - traffic - 50%
    -   Bold headline: The new variant with a different headline - traffic - 50%
-   **Metrics**:
    -   Primary metric: Click “Learn More“

![A/B test setup showing Control and Bold headline variants](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt24c5e2e150bddd89/6752dbb6effa2c7c496bbd0f/4_-_Getting_Started_with_Contentstack_Personalize_with_A_B_Testing.png)

To create a new A/B Test experience in the new project, perform the following steps:

1.  Click the newly created project to navigate to it.
2.  By default, you will be navigated to the Experience landing page. Click the **\+ New Experience** button.![Experience landing page with New Experience button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f773f1d96e211f4/68df6308d43eb0341d4f96b0/New_experience.png)
3.  In the **Select Experience Type** modal, click **A/B Test** as the experience type.![Select Experience Type modal with A/B Test option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ee0cc4cdfa8f3ee/6752dbb79f493462c3b8a3d0/7_-_Getting_Started_with_Contentstack_Personalize_with_A_B_Testing.png)
4.  Provide a **Name** and an optional **Description** for your experience, and click **Save General Details**.![Headline Test experience general details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb39d05de9732f928/68df647027ff814a1efb976c/headline_test_description.png)
5.  Click the **Configuration** tab to set up your A/B test variants as follows:
    1.  In the **Variant Distribution** drop-down, select **Equally split**.
    2.  Click the **\+ Add Variant** button twice to create two variants.
    3.  Enter **Control** and **Bold headline** in the Variant name fields.![Configuration tab with equally split distribution and two variants](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c49ed87690ed689/6752dbb72eab9c5b01c86bcb/9_-_Getting_Started_with_Contentstack_Personalize_with_A_B_Testing.png)
6.  Click the **Save Draft** button to save the A/B Test experience.

You’ve now created an A/B test experience that you can use to test different content variants.

**Additional Resource:** For detailed information, please refer to the [Create an A/B Test Experience](/docs/personalize/create-ab-test-experience/) documentation.

## Enable Live Preview and Visual Builder

To fully support personalized content creation and validation with **Contentstack Personalize**, enable both [Live Preview](/docs/headless-cms/about-live-preview) and [Visual Builder](/docs/headless-cms/about-visual-editor) on your stack. These tools provide editors with real-time visibility and intuitive controls for managing variant-based experiences directly in the CMS interface.

**Note:** **Live Preview** lets you preview personalized experiences in real time. **Visual Builder** allows editors to create and manage variants visually, and preview multiple variants simultaneously based on different audience selections, without requiring developer involvement.

## Create an Event

Events in Contentstack Personalize, are essential for measuring the success of your A/B tests. By tracking specific user actions (metrics) as events, such as clicks, form submissions, or video plays, you can accurately determine which variant in your experience performs better.

In this guide, you will create a Click event to track conversions for our A/B test on the ‘Learn More’.

To create an event, perform the following steps:

1.  Click the **Events** tab in the top navigation panel. From the **Events** page, click the **\+ New Event** button.![Events page with New Event button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt19bdbc70d708e4bd/68df65ff5eb723dea2237caf/New_Event.png)
2.  In the **New Event** modal, provide a suitable **Key** and an optional **Description**.![New Event modal with Key and Description fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt403d0c5fd003604e/6752dbbd6073ff09f4de5d5a/11_-_Getting_Started_with_Contentstack_Personalize_with_A_B_Testing.png)

    **Note:** You can create custom events to track conversions for common scenarios such as click, add\_to\_cart, checkout and many more.

3.  Once you have done that, click the **Create** button.

This creates a new event in your Personalize project. You can now add the event to an A/B Test experience as a Metric to evaluate the variant performance for conversions.

## Triggering Events and Collecting Metrics

Impressions are a way to count how many times users see specific content on your website. This helps you understand if the personalized content is actually being seen by users.

A conversion is an event that signifies a positive user action, such as clicking a CTA, adding a product to the cart, making a purchase, or scrolling to the end of a page. In this guide, you can measure which headline is more effective and leads to more clicks the learn more button.

To add the created event to an A/B Test experience, perform the following steps:

1.  Click the **Experiences** tab in the top navigation panel.
2.  On the **Experiences** page, click the previously created A/B Test experience to open it or click the corresponding vertical ellipses under the **Actions** section, select **Edit**.
3.  Click the **Configuration** tab.
4.  Scroll to the **Metrics** section and then click **\+ Add Event**.![Metrics section with Add Event button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa4ab65e635ddc5a/6752dbbd8486f126159a64fb/12_-_Getting_Started_with_Contentstack_Personalize_with_A_B_Testing.png)
5.  Select the preferred event from the drop-down list.![Event drop-down list in Metrics section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt085b26ea39665ee4/6752dbbd9dbaba0a4f00ecb5/13_-_Getting_Started_with_Contentstack_Personalize_with_A_B_Testing.png)

    **Note:** Use the Personalize Edge SDK to trigger the [impressions](/docs/developers/sdks/personalize-edge-sdk/javascript/reference/personalize#personalize-triggerimpression) and [events](/docs/developers/sdks/personalize-edge-sdk/javascript/reference/personalize#personalize-triggerevent) for your experiences using the triggerImpression and triggerEvent methods.

6.  Once you have done that, click the **Save** button.

This adds the new event as a reference in your A/B Test experience. Now let’s create Entry Variants for your A/B Test experience.

## Create Entry Variants in CMS

Contentstack’s [Entry Variants](/docs/headless-cms/about-entry-variants/) feature lets you create and manage variations of your content seamlessly, catering to diverse audiences, languages, and marketing experiments.

### Link Content Types to Variant Groups in CMS

The Variants page in Contentstack allows you to view and manage all variant groups and entry variants, sourced from the Personalize feature. Follow the steps below to access and manage variants within Contentstack.

1.  Navigate to the [stack](/docs/headless-cms/about-stack) that we synced with our personalized project in earlier steps.
2.  In the top navigation panel, click the **Settings** icon (or press **S**) and select **Variants**.
3.  You will see a list of all **Variant Groups** imported from Personalize. Below is an overview of the key details on this page:

    1.  **Variant Group**: Displays the name of the variant group.
    2.  **Linked With**: Indicates the connection status of the variant group with Personalize.
    3.  **Variant(s)**: Shows the total number of variants available within the group.
    4.  **Linked Content-Type(s)**: Lists the total number of content types linked with the variant group.
    5.  **Modified At:** The date and time along with the user name who modified the variant group.

    ![Variants page listing Variant Groups from Personalize](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb684b14514ce7092/68df6728d0e856bd0251e2fd/Compass_starter_variants.png)
4.  When you click a specific **Variant Group**, you will be redirected to the **Variant Group Details** page. On this page, you can view the following details:

    1.  **Variant Group Name**: The name of the group.
    2.  **Description**: A brief description of the variant group.
    3.  [**Variants**](/docs/personalize/about-variants): A list of all the variants under this group.

    **Note:** You cannot edit the above fields on the **Variant Group Details** page since this information comes from Personalize.

5.  In the **Link** [**Content Types**](/docs/headless-cms/about-content-types) section, select one or more content types you want to link with this variant group.
6.  Click **Apply** to link the selected content types to the variant group.
7.  Finally, click **Save** to confirm your changes.

Once you've linked a variant group to a content type, a **dropdown** will appear in the **Entry Editor** page. This allows you to create an entry variant based on the linked variant group.

### Create Entry Variants for the Experiences

Entry Variants allow you to deliver customized content to different user groups, making it easier to target specific audience segments. Follow these steps to create an entry variant.

1.  Navigate to the [stack](/docs/headless-cms/about-stack) where you want to create entry variants.
2.  Click the **Entries** icon in the top navigation panel.

    **Note:** Link variant groups to the relevant content type(s) before creating entry variants. Each [experience](/docs/personalize/about-experiences) in your Personalize project appears as a Variant Group in the stack. For linking details, refer to the [Manage Variant Groups and Entry Variants](/docs/headless-cms/manage-variant-groups) document.

3.  In the top navigation panel, click the **Entries** icon and select **Base Entries**.![Entries menu with Base Entries option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d43f7224cb3d1b7/68df67d5e943495cec8e71de/Compass_starter_base_variants.png)
4.  Select the desired variant from the available variant groups to create your entry variant.
5.  The entry editor will display content from the base entry by default. Enter or edit content in the fields as per the selected variant. This content will be tailored specifically for the configured [audiences](/docs/personalize/about-audiences).
6.  As soon as you enter or update content for a field, you will see a **Variant Field** tag.![Entry editor showing a Variant Field tag](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb04660987839bcb2/6752dbbdafbfb6b4896bfd92/18_-_Getting_Started_with_Contentstack_Personalize_with_A_B_Testing.png)
7.  You can click the **Variant Field** dropdown and select **Revert to base entry value** if you want to revert to the base entry content for a specific field.![Variant Field drop-down with Revert to base entry value option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a779a418dc0b92c/6752dbbd9cd8ef15547d6875/19_-_Getting_Started_with_Contentstack_Personalize_with_A_B_Testing.png)
8.  Once satisfied with the content, click **Save** to save the entry variant.![Saving an entry variant in the entry edito](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc51f2ead8089db2a/68df69776011aa24e6754bfe/Compass_starter_variants_save.png)

    **Note:** Once saved, the entry variants become independent of the base entry. For more details, refer to the [manage versions of entry variants](/docs/headless-cms/manage-versions-of-entry-variants) document.


You can manage and switch between different variants within the entry editor by selecting the relevant variant from the dropdown menu.

### Publish an Entry Variant

1.  Navigate to the desired [stack](/docs/headless-cms/about-stack), click the **Entries** icon, and select **Base & Entry Variants.**
2.  Select an existing entry variant, indicated by the variants icon on the entries list page.
3.  Click the **Publish** button within the entry editor.
4.  In the **Publish Entry Variant** modal that appears, under **Select Environment(s)** and **Select Language(s)**, select the environment(s) and the locale(s) to which you want to publish the entry.
5.  Under **Publish**, you have two sub-options – **Now** (to publish immediately) and **Later** (to publish at a later date/time that you provide).

    When you select “Later”, a group of options appear asking you to select the **Date** and **Time** of publishing, and the **Time-Zone**.

6.  Confirm your settings by clicking the **Send** button.
7.  If you have nested references within your entry variant, the Publish Reference(s) modal showing all the nested references for the entry will open up.
8.  Click **Send With References** to send the entry along with all its nested references for publishing.![Publishing an entry variant with references](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e2f78b58b6b01a1/68df6c65b0493a973accd5d0/publish_variants.gif)

    **Note:** If no previous or current version of the base entry is published in the selected environment(s) and language(s), the base entry will be published by default. Learn more about [how publishing works with Entry Variants](/docs/headless-cms/understanding-how-publishing-works-with-entry-variants/).

    Alternatively, when publishing the base entry, you can **Select Variant(s)** from the dropdown in the **Publish Entry** modal. Choose from the available entry variants to publish them alongside the base entry.

    ![Selecting variants to publish alongside the base entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3976008b038583c5/68df6cc3da110978c146a4e3/page_components_publish_variants.gif)

## Activate the A/B Test Experience

After creating the Entry Variants for your A/B Test experience, we can activate the experience in Personalize to run the testing of the different headlines of your website.

1.  In the top navigation panel, click the **Personalize** icon.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project we created in [step 1](#create-a-personalize-project-and-connect-it-to-an-existing-stack).
3.  On the **Experiences** page, click the corresponding vertical ellipses under **Actions**, click **Edit** for the previously created A/B Test experience to activate it on your website.
4.  Click the **Configuration** tab and then click the **Activate Draft** button.
5.  In the Activate Draft modal, click **Activate**.![Activate Draft modal for the A/B Test experience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd71af81a2bfc3c2b/68df6d59b0493a39f9ccd5de/activate_draft.png)

This activates your A/B Test experience created with the variants in Personalize with the Entry Variants in CMS. Once the experience is activated, the variants are displayed on your website to your visitors and Personalize automatically records the analytics for the impressions and conversions in real-time.

## View Experience Analytics

Once you activate the A/B Test, Personalize will start calculating the insights once a certain number of impressions and conversions come up within the Analytics tab.

Impressions occur when a user views a specific Variant within an Experience, effectively gaining an impression of the personalized content. Each impression is associated with the Experience, its Variant, and the active user.

A conversion is an event that signifies a positive user action, such as a click the button (Learn More) that we defined earlier in the guide. They are used in A/B Test experiences to evaluate the effectiveness of a variant, and a higher number of conversions can indicate a winning variant.

**Additional Resource:** To learn more about how we determine the winning variant in A/B test, please refer to the [Experience Analytics](/docs/personalize/experience-analytics#a-b-test-experience-analytics) documentation

.![Experience Analytics tab showing impressions and conversions](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt306d79c66833fbb6/6752dbc8dbc3c02f02c2f52a/24_-_Getting_Started_with_Contentstack_Personalize_with_A_B_Testing.png)

Once you learn which variant is winning, you can tweak the traffic distribution to send more traffic to the winning variant.

You have successfully set up a Contentstack Personalize project, connected it to an existing stack, configured the SDK, and created an A/B test experience with events and entry variants. You are now ready to start personalizing your content and analyzing the performance of your experiences.

This guide provides a complete overview to get you started with Personalize. For more advanced usage and customization, refer to the [Personalize documentation](/docs/personalize).

## Automate Your Winning Strategy

Once your A/B test has sufficient data to declare a winner, the final step is cleanup. Rather than manually updating your CMS entries and deleting variant data, install the Clearwinner app from the Contentstack Marketplace. This tool provides an automated alternative to manual merging, allowing you to promote winning content to your live site with a single click.

**Additional Resource:** For more information, refer to the [Clearwinner App Installation Guide](/docs/marketplace/clear-winner).
