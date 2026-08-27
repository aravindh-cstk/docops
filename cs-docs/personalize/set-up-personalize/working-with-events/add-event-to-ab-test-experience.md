---
title: "Add an Event to an A/B Test Experience"
description: "Learn how to add events to an A/B Test Experience in Contentstack Personalize to measure variant performance."
url: /personalize/add-event-to-ab-test-experience
uid: bltb63b118ee714f622
---

# Add an Event to an A/B Test Experience

## Add an Event to an A/B Test Experience

Adding an event to an A/B Test experience in Contentstack allows you to evaluate variant performance for impressions and conversions.

**Events** serve as metrics within A/B tests. The default number of events (metrics) you can add per A/B Test experience is **10**. By Contentstack permissions, this can be extended up to **20** per experience. To increase this limit, contact our [support team](https://www.contentstack.com/support).

The **primary** metric determines the winning variant, while **secondary** metrics provide additional insights into user behavior.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
-   Access to Personalize project

    **Note:** We assumed that you have already [created a Personalize project](/docs/personalize/create-personalize-project) and [an event](/docs/personalize/create-event).


## What You Will Learn

-   How to open or create an A/B Test experience for editing.

-   How to add an event as a metric in the Configuration tab.

-   How primary and secondary metrics are used to evaluate variants.


## Steps for Execution

To add the created event to an A/B Test experience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to add the event.
3.  On the **Experiences** page, you can create a new A/B Test experience by clicking the **\+ New Experience** button or select an existing A/B Test experience.

    **Note:** If you have an A/B Test experience already created then click the existing A/B Test experience to open it or click the corresponding vertical ellipses under the **Actions** section, select **Edit,** and jump directly to step 6.

    ![New Experience button on the Experiences page](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdbX5E4hp2cMF8tlg9jYfMKTGtPFU-IZDGLj1FoQtgTCNqRKAbwbTbx154mBu7u2LsHTwI8ZwxbKc42dyqFPzPqjKf36dlFKT6BLmbD-9c0EBsVxIU5R3Wc68iq5vYhINOW28az?key=ixgDaj1MY9E9fQW_h5stqw)
4.  In the **Select Experience Type** modal, click the **A/B Test** experience type.

5.  On the experience draft page, in the **Overview** tab, provide a suitable **Name** and an optional **Description** for the experience.
6.  Click **Save General Details**.
7.  Click **Configuration** tab in the left-hand menu.
8.  Scroll to the **Metrics** section and then click **\+ Add Event**.
9.  Select the preferred event from the drop-down list.

    You can add multiple events to an A/B Test experience as Metrics. Use the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/about-javascript-personalize-edge-sdk/) to trigger the events for your experiences using the triggerImpressions and triggerEvent methods.

    **Note:** When adding an event for the first time, it is automatically set as ‘primary’. The 'primary' metric determines A/B test winners from the variants, while secondary metrics offer additional insights. When any of the listed events occur, metrics calculate an increase in unique conversions per visitor which you can view in the [Experience Analytics](/docs/personalize/experience-analytics).

10.  Click **Save** to complete the set up.

This adds the new event as a reference in your A/B Test experience.

## Related Resource

-   [Personalize Management API: Events](/docs/developers/apis/personalize-management-api#events)
