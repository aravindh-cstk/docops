---
title: "[Personalize] - Create an Event"
description: Create an event in Contentstack Personalize to capture and monitor visitor interactions for A/B Test experiences.
url: https://www.contentstack.com/docs/personalize/create-event
product: Contentstack Personalize
doc_type: how-to
audience:
  - developers
  - product-managers
  - marketers
version: current
last_updated: 2026-03-25
---

# [Personalize] - Create an Event

This page explains how to create events in Contentstack Personalize so you can capture and monitor visitor interactions for A/B Test experiences. It is intended for users who have access to a Personalize-enabled organization and an existing Personalize project, and should be used when you need to define custom events for tracking impressions and conversions.

## Create an Event

Events in Contentstack Personalize A/B Test experiences let you capture and monitor every interaction made by a visitor.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize

**Note: **Users with Owner and Member access to a Personalize project can create new events.

## Steps for Execution
**Note: **For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](/docs/personalize/create-personalize-project) and create a project in Personalize.

To create an event, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to create an event.
- Click the **Events **tab. From the **Events **page, click the **+ New Event** button.
- In the **New Event** modal, provide a suitable **Key **and an optional **Description**.You can create custom events to track metrics (impressions and conversions) for common scenarios such as `click`, `add_to_cart`, `checkout` and many more.
- Click **Create **to complete the set up.

This creates a new event in your Personalize project.

**Note:**
- Users with Owner and Member access to a Personalize project can create new events, and edit/delete existing events.
- The default number of Events allowed per project is **100**.

**Additional Resource:** You can use the [Personalize Management API](/docs/developers/apis/personalize-management-api#events) to create, edit, delete, and retrieve all existing events.

## Next Steps
You can now [add the event to an A/B Test experience](/docs/personalize/add-event-to-ab-test-experience/) as a Metric to evaluate the variant performance for impressions and conversions.

## Common questions

### Who can create events in a Personalize project?
Users with Owner and Member access to a Personalize project can create new events.

### What is the default limit for events per project?
The default number of Events allowed per project is **100**.

### Can I manage events via an API instead of the UI?
Yes. You can use the [Personalize Management API](/docs/developers/apis/personalize-management-api#events) to create, edit, delete, and retrieve all existing events.

### What do I do after creating an event?
You can now [add the event to an A/B Test experience](/docs/personalize/add-event-to-ab-test-experience/) as a Metric to evaluate the variant performance for impressions and conversions.