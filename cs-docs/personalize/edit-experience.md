---
title: "[Personalize] - Edit an Experience"
description: How to edit draft and active experiences in Contentstack Personalize.
url: https://www.contentstack.com/docs/personalize/edit-experience
product: Contentstack Personalize
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Personalize] - Edit an Experience

This page explains how to edit experiences in Contentstack Personalize, including both draft and active experiences. It is intended for users who manage Personalize projects and need to update experience details, variants, and audiences to keep targeting accurate and relevant.

## Edit an Experience

Contentstack Personalize feature allows you to create and manage personalized experiences for your website or application. Regularly editing experiences is crucial because it allows you to keep your content targeting up to date and relevant. As your products, services, and offers change, you can easily update the variants and audiences in your experiences to reflect those changes. This ensures that your visitors always see the most accurate and relevant content.

This guide provides a step-by-step walkthrough for editing experiences in Contentstack Personalize. You will learn how to ensure that your personalized content is always accurate, relevant, and precisely targeted. Note that, at any given point in time, only **1 draft** can exist for each experience in your Personalize project.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize
- [Experience](../agent-os/personalize.md#working-with-experiences) created in your Personalize project

**Note:** Users with Owner and Member access to a Personalize project can edit existing experiences.

## Steps for Execution
**Note:** For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](./create-personalize-project.md) and create a project in Personalize.

### Editing an Experience Draft
To edit an existing experience (draft which was never activated previously), log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize.**
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to edit an existing experience.![Personalize Projects](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcDaJKjbFaJlFAx07-40HofccXEPTK7ycXNmVlwpn-mhUS05fqmCJzi67Xwh3lP0tTwX-bdcuOK0IkDHfcs0ZauTkO-82yAs1qR3nT1w71gJ1Q3PHECha-u5eLkrSRn4BhQLe5gbQ?key=6c1Vt8Jo_3lcF8s9aWAEuw)
- You can edit an existing experience by clicking your experience to open it or by clicking the corresponding vertical ellipses under **Actions** and selecting **Edit**.![Edit an experience](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcL6cqVWQLwQ4vwaBAt9NG1_af0u8WscIBhsr4-pbQ__j8_nqBIXXuMtUXBMvJcgYOkKxa85Hv9f0RI5CjNsSGQRv1piRHUuE2TTPUf4ksoMXXmLFw3DBYkPCz6vwwUoEeBNQtGOQ?key=6c1Vt8Jo_3lcF8s9aWAEuw)

  **Note:** An experience must be in the 'Draft' status to edit.
- On the **Experience** page:In the **Overview** tab, make the necessary changes to the **Name** and **Description** and then click **Save General Details**.
- In the **Configuration** tab, make the necessary changes to the existing **Variants** or click the **+ Add Variant** to add more variants and then click the **Save Draft** button.![AD_4nXegOlbsrWPQuVRo7UHn7wu8KJhziBYlZuY5KFQe-2jDoF8rq4jrTCYO5ZgmwbbU25X6OBt10XJam_NRyUkaAjo13hqN3dfj2sIyX-3cpxtuj3V9UTZvyE5-UuN6iGvClqMqD-igRP25cp-L_AYU3ELISVI](https://lh7-rt.googleusercontent.com/docsz/AD_4nXegOlbsrWPQuVRo7UHn7wu8KJhziBYlZuY5KFQe-2jDoF8rq4jrTCYO5ZgmwbbU25X6OBt10XJam_NRyUkaAjo13hqN3dfj2sIyX-3cpxtuj3V9UTZvyE5-UuN6iGvClqMqD-igRP25cp-L_AYU3ELISVI?key=cH7c4urdJQqAZpO76hSK9w)
- You can choose to activate the draft by clicking the **Activate Draft** button.

You will get a success message after the experience draft has been successfully updated.

### Editing an Active Experience
**Note:** Editing an active experience will not interrupt the live experience. You can safely create and edit a draft version. When ready, activating the draft will instantly replace the live version without downtime.

Activating a new version resets analytics for the experience. Data collection starts fresh from the point of activation, while historical analytics remain tied to the previous version.

To edit an experience (which is currently active or paused), log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to edit an existing experience.
- You can edit an existing experience by clicking your experience to open it or by clicking the corresponding vertical ellipses under **Actions** and selecting **Edit**.![edit an active experience](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcL6cqVWQLwQ4vwaBAt9NG1_af0u8WscIBhsr4-pbQ__j8_nqBIXXuMtUXBMvJcgYOkKxa85Hv9f0RI5CjNsSGQRv1piRHUuE2TTPUf4ksoMXXmLFw3DBYkPCz6vwwUoEeBNQtGOQ?key=6c1Vt8Jo_3lcF8s9aWAEuw)
- On the **Experience** page:In the **Overview** tab, make the necessary changes to the **Name** and **Description** and then click **Save General Details**.
- In the **Configuration** tab, click the **Create Draft** button.
The **Edit Version** modal will appear, confirming that a new clone of the current active version will be created. Click **Edit Version** to proceed and switch the Experience to Draft mode.![AD_4nXdW6k-0WFTISyJc4ojs8EdXaomqPtgKj0J9Re1bSVcjIIFT3usIzmE3kRfjElP_7ZPDTfRJdZQZRT1geYDgFFCBdcjepMENdK1nCUObCg1duoC520wp0m_pS2zcBLLnSylAbG0AXg](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdW6k-0WFTISyJc4ojs8EdXaomqPtgKj0J9Re1bSVcjIIFT3usIzmE3kRfjElP_7ZPDTfRJdZQZRT1geYDgFFCBdcjepMENdK1nCUObCg1duoC520wp0m_pS2zcBLLnSylAbG0AXg?key=6c1Vt8Jo_3lcF8s9aWAEuw)

  **Note:** Pausing an active experience temporarily disables the personalization for that experience. During this time, visitors see the content from the **Base Entry** of the Entry Variant. We recommend, you create a draft from the active version to make changes, without pausing it.
- Make the necessary changes to the existing **Variants** or click the **+ Add Variant** to add more variants and then click the **Save Draft** button.![AD_4nXezgKF7DXJh9kbLqZwZxlp3s8tmcmid70WOSoXq3oJy38NaoZQVNMG5aeme-ClR1Qk5F_DQvencPqAsMLomdJasKcnaI4T8NKHY-aKX7QSARco8LZ8jtJw2LQKuo8Io9fU6FRHLx8OYGybB7Y85M5CdoiUE](https://lh7-rt.googleusercontent.com/docsz/AD_4nXezgKF7DXJh9kbLqZwZxlp3s8tmcmid70WOSoXq3oJy38NaoZQVNMG5aeme-ClR1Qk5F_DQvencPqAsMLomdJasKcnaI4T8NKHY-aKX7QSARco8LZ8jtJw2LQKuo8Io9fU6FRHLx8OYGybB7Y85M5CdoiUE?key=cH7c4urdJQqAZpO76hSK9w)
- You can choose to activate the draft by navigating to the **Draft** tab and then clicking the **Activate Draft** button.
- When you activate a draft of a previously activated experience, the currently active version is automatically archived which you can find in the right sidebar widget.![AD_4nXfn6ALRxkOs__O8jvnLqKqWo0EUyJsHMHg-irdaG6WpZWn0sP2kHzQmqJNdE_FFn0dMcX4qGGtRYqx4nHBM7cy_vk75-gYL61n4OH1KN6m42BGAruZ-fG4HIpz7Z1bkAEjl7NrfXETsYOSNw7Qu001niG8f](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfn6ALRxkOs__O8jvnLqKqWo0EUyJsHMHg-irdaG6WpZWn0sP2kHzQmqJNdE_FFn0dMcX4qGGtRYqx4nHBM7cy_vk75-gYL61n4OH1KN6m42BGAruZ-fG4HIpz7Z1bkAEjl7NrfXETsYOSNw7Qu001niG8f?key=cH7c4urdJQqAZpO76hSK9w)

You will get a success message after the experience has been successfully updated.

**Additional Resource:** You can use the [Personalize Management API](../../api-docs/api-detail/personalize-management-api.md#experiences) to create, edit, delete, and retrieve all existing experiences.

## Common questions

### Can I edit an experience that is not in Draft status?
An experience must be in the 'Draft' status to edit.

### Will editing an active experience cause downtime?
Editing an active experience will not interrupt the live experience. You can safely create and edit a draft version. When ready, activating the draft will instantly replace the live version without downtime.

### What happens to analytics when I activate a new version?
Activating a new version resets analytics for the experience. Data collection starts fresh from the point of activation, while historical analytics remain tied to the previous version.

### Who can edit existing experiences?
Users with Owner and Member access to a Personalize project can edit existing experiences.