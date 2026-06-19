---
title: "[Personalize] - Edit an Audience"
description: Edit an Audience in Contentstack Personalize.
url: https://www.contentstack.com/docs/personalize/edit-audience
product: Contentstack Personalize
doc_type: guide
audience:
  - developers
  - content-managers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Personalize] - Edit an Audience

This page explains how to edit an existing audience in Contentstack Personalize. It is intended for users who manage targeting and segmentation and should be used when you need to refine audience definitions as user behavior or business requirements change.

## Edit an Audience

Contentstack Personalize empowers you to create tailored content for specific audiences. But as your user base evolves, so should your targeting. Regularly editing your audiences ensures that your content reaches the right people at the right time, maximizing the impact of your personalization efforts.

This guide provides a step-by-step walkthrough for editing audiences in Contentstack Personalize. Whether you're refining existing segments or adapting to new user behaviors, you'll learn how to keep your targeting strategies effective.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize
- [Audience created](/docs/personalize/create-audience) in your Personalize project

**Note:** Users with Owner and Member access to a Personalize project can edit existing audiences.

## Steps for Execution
**Note:** For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](/docs/personalize/create-personalize-project) and create a project in Personalize.

To edit an existing audience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to edit an audience.
- Click the **Audiences** tab.
- You can edit an existing audience by clicking your audience to open it or by clicking the corresponding vertical ellipses under **Actions** and selecting **Edit**.
- On the **Audience** page, make the necessary changes to the **Name**, **Description**, **Rules** or **Groups**.
- Once you have done that, click the **Save** button to apply the changes.

**Warning:** Editing an audience that is referenced in an experience might affect your active segmentation, A/B tests, and analytics. Ensure you update any references to the modified audience accordingly.

You will get a success message after the audience has been successfully updated.

**Additional Resource:** You can use the [Personalize Management API](/docs/developers/apis/personalize-management-api#audiences) to create, edit, delete, and retrieve all existing audiences.

## Common questions

**Q: Who can edit existing audiences in Personalize?**  
A: Users with Owner and Member access to a Personalize project can edit existing audiences.

**Q: Where do I edit an audience in the Personalize UI?**  
A: Open your project, go to the **Audiences** tab, then open the audience or use the vertical ellipses under **Actions** and select **Edit**.

**Q: What should I be careful about when editing an audience?**  
A: Editing an audience referenced in an experience might affect active segmentation, A/B tests, and analytics, so update any references accordingly.

**Q: Can I edit audiences via an API?**  
A: Yes, you can use the [Personalize Management API](/docs/developers/apis/personalize-management-api#audiences) to create, edit, delete, and retrieve audiences.