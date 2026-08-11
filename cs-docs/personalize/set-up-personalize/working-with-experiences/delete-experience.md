---
title: "Delete an Experience"
description: "Learn how to safely delete experiences in your Personalize projects."
url: /personalize/delete-experience
---

# Delete an Experience

## Delete an Experience

Deleting outdated or irrelevant experiences from your Personalize project ensures that your personalization engine focuses on the most current and relevant data, improving the accuracy and effectiveness of future recommendations.

Before you proceed, please note:

-   **Data Impact:** Deleting an activated/paused experience may result in the loss of associated analytics data.
-   **Experience Disruption:** Removing an experience could affect active personalization campaigns. Exercise caution and update campaigns accordingly.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
    
    **Note:** Users with **Owner** and **Member** access to a Personalize project can delete existing experiences.
    
-   Access to Personalize project
    
    **Note:** We assumed that you have already created a Personalize project. If not, follow [this guide](/docs/personalize/create-personalize-project) to create a project in Personalize.
    
-   [Experience](/docs/personalize/about-experiences) created in your Personalize project

## Steps for Execution

To delete an experience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an experience.
3.  You can delete an existing experience draft by clicking the corresponding vertical ellipses under the **Actions** and selecting **Delete**.![Experience Actions menu with Delete option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9987126c2cbee0b0/68cba648961205749091e78a/EXp.png)
4.  In the **Delete Experience** modal, click **Delete** to permanently delete the experience.![Delete Experience confirmation modal](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeFHaxE0stvk-TSUYhM4qBC_fQKeta4gKiVaVKv0TMWplHmkRI2mfRyVZMnQg3pdbAqIt5nMYpAx-F8tqoMfOTwl4i5flf91WvSz2roXWY8bTjNVoxYoZpdK8gEx0kAcJtpHcDP_e3urPHppWFfkwBjdifW?key=r_iE_avCzc_SouI8_unvIw)
    
    **Warning:** Deleting an experience may result in the loss of associated analytics data, unlink Variant Group for Entry Variants in the CMS by automatically removing the metadata and could affect active personalization campaigns on your website for visitors.
    

You will get a success message after the experience is deleted from Personalize.

## Related Resource

-   [Personalize Management API: Delete an Experience](/docs/developers/apis/personalize-management-api/experiences#delete-an-experience)
