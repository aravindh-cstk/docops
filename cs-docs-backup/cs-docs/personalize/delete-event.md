---
title: "[Personalize] - Delete an Event"
description: Delete referenced and non-referenced events in Contentstack Personalize projects.
url: https://www.contentstack.com/docs/personalize/delete-event
product: Contentstack Personalize
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Personalize] - Delete an Event

This page explains how to delete events in a Contentstack Personalize project, including both non-referenced and referenced events. It is intended for users who manage Personalize projects and need to remove events that are no longer relevant or must be updated, especially when events are tied to A/B Test experiences.

### Delete an Event

Deleting an event from your Personalize project might be necessary if it is no longer relevant or if you need to modify your tracking metrics.

This guide provides step-by-step instructions for deleting both referenced and non-referenced events.

**Warning:** Deleting an event might cause loss of metrics data affecting the experience and variants analytics.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize

**Note: **Users with Owner and Member access to a Personalize project can delete existing events.

## Steps for Execution
**Note: **For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](./create-personalize-project.md) and create a project in Personalize.

### Delete a Non-referenced Event
To delete an existing non-referenced event, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an event.
- Click the **Events **tab.
- You can delete an existing event by clicking the corresponding vertical ellipses under the **Actions **section and selecting **Delete**.
- In the** Delete Event **modal, click **Delete** to permanently delete the event.

You will get a success message after the event is deleted from Personalize.

### Delete a Referenced Event
**Note: **For this part of the guide, we have assumed that you have already created a Personalize project and [added an event to an existing A/B Test experience](./add-event-to-ab-test-experience.md).

To delete an existing referenced event, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an event.
- On the **Experiences** page, to remove the referenced event from the A/B Test experience, navigate to the experience you want to remove the referred event by clicking your experience to open it or by clicking the corresponding vertical ellipses under the **Actions **section and selecting **Edit**.**Note:** An A/B Test experience must be in the ‘Draft’ status to delete event(s) from it.
- Click the **Configuration **tab, scroll to the Metrics section and then click the **Delete **icon next to the preferred event from the list.**Note:** When you delete a primary event from the Metrics, the immediate successor is assigned as the primary metric automatically.
- Once you have done that, click the **Save **button.
- Now that we have removed the event from the A/B Test experience’s Metrics, click the **Events **tab in the left navigation panel.
- You can delete an existing event by clicking the corresponding vertical ellipses under the **Actions **section and selecting **Delete**.
- In the** Delete Event **modal, click **Delete** to permanently delete the event.

You will get a success message after the event is deleted from Personalize.

**Additional Resource:** You can use the [Personalize Management API](../../api-docs/api-detail/personalize-management-api.md#events) to create, edit, delete, and get all existing events.

## Common questions

**Q: Who can delete existing events in a Personalize project?**  
A: Users with Owner and Member access to a Personalize project can delete existing events.

**Q: What should I do before deleting a referenced event?**  
A: Remove the referenced event from the A/B Test experience’s Metrics (the experience must be in the ‘Draft’ status), save the experience, and then delete the event from the Events tab.

**Q: What is the risk of deleting an event?**  
A: Deleting an event might cause loss of metrics data affecting the experience and variants analytics.

**Q: Is there an API option to manage events?**  
A: Yes, you can use the Personalize Management API to create, edit, delete, and get all existing events.