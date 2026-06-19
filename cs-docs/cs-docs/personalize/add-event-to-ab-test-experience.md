---
title: "[Personalize] - Add an Event to an A/B Test Experience"
description: Adding an event to an A/B Test experience in Contentstack Personalize to evaluate variant performance for impressions and conversions.
url: https://www.contentstack.com/docs/personalize/add-event-to-ab-test-experience
product: Contentstack Personalize
doc_type: how-to
audience:
  - developers
  - marketers
  - product-managers
version: current
last_updated: 2026-03-25
---

# [Personalize] - Add an Event to an A/B Test Experience

This page explains how to add an event as a metric to an A/B Test experience in Contentstack Personalize. It is intended for users who have access to a Personalize-enabled organization and project, and should be used when you want to measure impressions and conversions to evaluate variant performance.

## Add an Event to an A/B Test Experience

Adding an event to an A/B Test experience in Contentstack allows you to evaluate variant performance for impressions and conversions.

**Events** serve as metrics within A/B tests, and you can add up to **5 events (1 primary and 4 secondary)** to each test.

The **primary** metric determines the winning variant, while **secondary** metrics provide additional insights into user behavior.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize

## Steps for Execution
**Note: **For this guide, we have assumed that you have already [created a Personalize project](/docs/personalize/create-personalize-project) and [an event](/docs/personalize/create-event).

To add the created event to an A/B Test experience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to add the event.
- On the **Experiences **page, you can create a new A/B Test experience by clicking the **+ New Experience **button or select an existing A/B Test experience.**Note:** If you have an A/B Test experience already created then click the existing A/B Test experience to open it or click the corresponding vertical ellipses under the **Actions **section, select **Edit,** and jump directly to step 6.
- In the **Select Experience Type** modal, click the **A/B Test** experience type.
- On the experience draft page, in the **Overview **tab, provide a suitable **Name** and an optional **Description** for the experience.
- Click **Save General Details**.
- Click **Configuration** tab in the left-hand menu.
- Scroll to the **Metrics **section and then click **+ Add Event**.
- Select the preferred event from the drop-down list.You can add multiple events to an A/B Test experience as Metrics. Use the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/) to trigger the events for your experiences using the `triggerImpressions` and `triggerEvent` methods.

**Note:** When adding an event for the first time, it is automatically set as ‘primary’. The 'primary' metric determines A/B test winners from the variants, while secondary metrics offer additional insights. When any of the listed events occur, metrics calculate an increase in unique conversions per visitor which you can view in the [Experience Analytics](/docs/personalize/experience-analytics).
- Click **Save** to complete the set up.

This adds the new event as a reference in your A/B Test experience.

**Additional Resource:** You can use the [Personalize Management API](/docs/developers/apis/personalize-management-api#events) to create, edit, delete, and get all existing events.

## Common questions

### How many events can I add to an A/B Test experience?
You can add up to **5 events (1 primary and 4 secondary)** to each test.

### What is the difference between primary and secondary metrics?
The **primary** metric determines the winning variant, while **secondary** metrics provide additional insights into user behavior.

### Where can I view the results for the events I add?
You can view metrics in the [Experience Analytics](/docs/personalize/experience-analytics).

### How do I trigger events for my experiences?
Use the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/) and the `triggerImpressions` and `triggerEvent` methods.