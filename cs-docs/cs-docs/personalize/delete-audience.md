---
title: "[Personalize] - Delete an Audience"
description: "Step-by-step instructions for deleting referenced and non-referenced audiences in Contentstack Personalize."
url: https://www.contentstack.com/docs/personalize/delete-audience
product: Contentstack Personalize
doc_type: how-to
audience:
  - developers
  - content-managers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Personalize] - Delete an Audience

This page explains how to delete an audience in Contentstack Personalize, including both non-referenced and referenced audiences. It is intended for users with access to a Personalize project who need to remove audiences safely without disrupting active experiences.

### Delete an Audience

Deleting an audience from your Personalize project helps maintain an organized set of audiences. This ensures that your personalization strategy focuses on an active, valuable audience.

Before you proceed, please note that removing a referenced audience could affect active personalization campaigns. Exercise caution and update references accordingly.

Let's get started with the step-by-step instructions for deleting both referenced and non-referenced audiences.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize
- [Audience created](/docs/personalize/create-audience) in your Personalize project

**Note:** Users with Owner and Member access to a Personalize project can delete existing audiences.

## Steps for Execution
**Note:** For this guide, we have assumed that you have already [created a Personalize project](/docs/personalize/create-personalize-project) and [an experience](/docs/personalize/create-segmented-experience).

### Delete a Non-Referenced Audience
A non-referenced audience in Contentstack Personalize is an audience that is not currently being used in any experiences within your project.

To delete an existing non-referenced audience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an audience.
- Click the **Audiences** tab.
- You can delete an existing audience by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.
- In the **Delete Audience** modal, click **Delete** to permanently delete the audience.

You will get a success message after the audience is deleted from Personalize.

### Delete a Referenced Audience
A referenced audience in Contentstack Personalize is an audience that is currently being used in one or more experiences within your project.

This means that the audience is actively involved in defining the parameters or criteria for targeting specific audiences with personalized experiences.

As a result, deleting a referenced audience requires additional steps to ensure that existing experience definitions and personalization strategies are not disrupted. This involves first removing the audience from any experience where it is used, and then proceeding with its deletion.

To delete an existing referenced audience in an Experience draft, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize.**
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an audience.
- On the **Experiences** page, to remove the referenced audience, navigate to the experience where the audience is used by clicking the experience to open it or by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Edit**.**Note:** An experience with the referenced audience must be in the 'Draft' status to delete the audience.
- Click the **Configuration** tab in the left panel and click the **Remove** icon next to the preferred audience from the list.**Note:** For A/B Test experiences, go to the **Configuration > Target Group** to remove the referenced audiences.
- Once you have done that, click the **Save Draft** button.
- Now that we have removed the audience from the experience as a reference, click the **Audiences** tab in the left navigation panel.
- You can delete the audience by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.
- In the **Delete Audience** modal, click **Delete** to permanently delete the audience.

**Warning:** Deleting an audience might cause loss of metrics data and also affect the experience performance. Ensure that any references to the deleted audience are updated accordingly.

You will get a success message after the audience is deleted from Personalize.

**Additional Resource:** You can use the [Personalize Management API](/docs/developers/apis/personalize-management-api#audiences) to create, edit, delete, and retrieve all existing audiences.

## Common questions

### Who can delete an audience in Personalize?
Users with Owner and Member access to a Personalize project can delete existing audiences.

### What is the difference between a referenced and non-referenced audience?
A non-referenced audience is not currently being used in any experiences, while a referenced audience is being used in one or more experiences within your project.

### Why do I need to remove an audience from an experience before deleting it?
Deleting a referenced audience requires first removing the audience from any experience where it is used to ensure that existing experience definitions and personalization strategies are not disrupted.

### Can I manage audiences via an API instead of the UI?
Yes. You can use the Personalize Management API to create, edit, delete, and retrieve all existing audiences.