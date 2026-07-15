---
title: "[Personalize] - Delete an Experience"
description: "How to delete an experience in Contentstack Personalize."
url: https://www.contentstack.com/docs/personalize/delete-experience
product: "Contentstack Personalize"
doc_type: "how-to"
audience:
  - developers
  - content-managers
  - administrators
version: "current"
last_updated: 2026-03-25
---

# [Personalize] - Delete an Experience

This page explains how to delete an experience in Contentstack Personalize. It is intended for users who manage Personalize projects and need to remove outdated or irrelevant experiences, and should be used when maintaining or cleaning up experiences that may affect analytics and active personalization campaigns.

### Item 1

#### Article section

##### Heading

Delete an Experience

##### Content

Deleting outdated or irrelevant experiences from your Personalize project ensures that your personalization engine focuses on the most current and relevant data, improving the accuracy and effectiveness of future recommendations.

Before you proceed, please note:
- **Data Impact:** Deleting an activated/paused experience may result in the loss of associated analytics data.
- **Experience Disruption:** Removing an experience could affect active personalization campaigns. Exercise caution and update campaigns accordingly.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize
- [Experience](./about-experiences.md) created in your Personalize project

**Note:** Users with Owner and Member access to a Personalize project can delete existing experiences.

## Steps for Execution
**Note:** For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](./create-personalize-project.md) and create a project in Personalize.

To delete an experience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an experience.
- You can delete an existing experience draft by clicking the corresponding vertical ellipses under the **Actions** and selecting **Delete**.![EXp.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9987126c2cbee0b0/68cba648961205749091e78a/EXp.png)
- In the **Delete Experience** modal, click **Delete** to permanently delete the experience.![AD_4nXeFHaxE0stvk-TSUYhM4qBC_fQKeta4gKiVaVKv0TMWplHmkRI2mfRyVZMnQg3pdbAqIt5nMYpAx-F8tqoMfOTwl4i5flf91WvSz2roXWY8bTjNVoxYoZpdK8gEx0kAcJtpHcDP_e3urPHppWFfkwBjdifW](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeFHaxE0stvk-TSUYhM4qBC_fQKeta4gKiVaVKv0TMWplHmkRI2mfRyVZMnQg3pdbAqIt5nMYpAx-F8tqoMfOTwl4i5flf91WvSz2roXWY8bTjNVoxYoZpdK8gEx0kAcJtpHcDP_e3urPHppWFfkwBjdifW?key=r_iE_avCzc_SouI8_unvIw)

  **Warning:** Deleting an experience may result in the loss of associated analytics data, unlink Variant Group for Entry Variants in the CMS by automatically removing the metadata and could affect active personalization campaigns on your website for visitors.

You will get a success message after the experience is deleted from Personalize.

**Additional Resource:** You can use the [Personalize Management API](../../api-docs/api-detail/personalize-management-api.md#experiences) to create, edit, delete, and retrieve all existing experiences.

## Common questions

**Q: Who can delete existing experiences in a Personalize project?**  
A: Users with Owner and Member access to a Personalize project can delete existing experiences.

**Q: What happens to analytics data when I delete an experience?**  
A: Deleting an activated/paused experience may result in the loss of associated analytics data.

**Q: Can deleting an experience affect live personalization on my website?**  
A: Removing an experience could affect active personalization campaigns; exercise caution and update campaigns accordingly.

**Q: Is there an API option to delete experiences instead of using the UI?**  
A: Yes, you can use the Personalize Management API to create, edit, delete, and retrieve all existing experiences.