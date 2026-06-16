---
title: "[Personalize] - Edit an Event"
description: Step-by-step instructions to edit event keys and descriptions within Contentstack Personalize projects.
url: https://www.contentstack.com/docs/personalize/edit-event
product: Contentstack Personalize
doc_type: how-to
audience:
  - developers
  - product-managers
  - marketers
version: current
last_updated: 2026-03-25
---

# [Personalize] - Edit an Event

This page explains how to edit an existing event in Contentstack Personalize, including updating the event key and description. It is intended for users with access to a Personalize project who need to adjust event configuration as campaign goals evolve.

## Edit an Event

Contentstack Personalize empowers you to refine your event strategy on the fly. This guide equips you with step-by-step instructions to effortlessly edit event keys and descriptions within your Personalize projects, ensuring your campaigns remain aligned with your evolving goals.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize

**Note: **Users with Owner and Member access to a Personalize project can edit existing events.

## Steps for Execution
**Note:** For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](/docs/personalize/create-personalize-project) and create a project in Personalize.

To edit an existing event, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to edit an event.
- Click the **Events **tab.
- You can edit an existing Event by clicking your event to open it or by clicking the corresponding vertical ellipses under the **Actions **section and selecting **Edit**.
- In the **Edit Event** modal, make the necessary changes to the **Key **and **Description **fields.
- Click **Save **to complete the setup.**Warning:** Modifying an event tied to A/B tests can impact your metrics. Before editing, update all references to it in your experiments. Reset the Event Key used in `triggerImpressions` and `triggerEvent` via the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/). This prevents skewed metrics and keeps your personalization on track.

You will get a success message after the Event is edited.

**Additional Resource:** You can use the [Personalize Management API](/docs/developers/apis/personalize-management-api#events) to create, edit, delete, and get all existing events.

## Common questions

### Who can edit existing events in a Personalize project?
Users with Owner and Member access to a Personalize project can edit existing events.

### What fields can I change when editing an event?
You can make changes to the **Key **and **Description **fields in the **Edit Event** modal.

### What should I consider before editing an event used in A/B tests?
Modifying an event tied to A/B tests can impact your metrics. Before editing, update all references to it in your experiments and reset the Event Key used in `triggerImpressions` and `triggerEvent` via the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/).

### Can I edit events using an API instead of the UI?
You can use the [Personalize Management API](/docs/developers/apis/personalize-management-api#events) to create, edit, delete, and get all existing events.