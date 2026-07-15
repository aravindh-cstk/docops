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
- [Audience created](./create-audience.md) in your Personalize project

**Note:** Users with Owner and Member access to a Personalize project can delete existing audiences.

## Steps for Execution
**Note:** For this guide, we have assumed that you have already [created a Personalize project](./create-personalize-project.md) and [an experience](./create-segmented-experience.md).

### Delete a Non-Referenced Audience
A non-referenced audience in Contentstack Personalize is an audience that is not currently being used in any experiences within your project.

To delete an existing non-referenced audience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an audience.
- Click the **Audiences** tab.![AD_4nXeX4Msgqz57OAyM9SqDp1WRI1yFU_502PTR0qUrhAM8AO1-o32rZJGrjLX2FOru_SUzJmtm1RcRTS3wk86yy7ozEdP2ub5K4wpmXYwFtAKAD1vzfJW-h48suia1vmVAGBTaB6eIGQ](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeX4Msgqz57OAyM9SqDp1WRI1yFU_502PTR0qUrhAM8AO1-o32rZJGrjLX2FOru_SUzJmtm1RcRTS3wk86yy7ozEdP2ub5K4wpmXYwFtAKAD1vzfJW-h48suia1vmVAGBTaB6eIGQ?key=lx61JLV__VsURLhShzpulQ)
- You can delete an existing audience by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.![AD_4nXeTzh6U3cFE-Kj7tsu5P0DbRuR5fl1YqSKNil3Nk0s3S6m5HiOTGyaDQC8meaPvf3GmWwmj3Cw5bjUFtYiNGJmazomSNTKqa-75nyaFkxhcJNZvukI4EOI_mGL9ytCKWtVjlhT4CA](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeTzh6U3cFE-Kj7tsu5P0DbRuR5fl1YqSKNil3Nk0s3S6m5HiOTGyaDQC8meaPvf3GmWwmj3Cw5bjUFtYiNGJmazomSNTKqa-75nyaFkxhcJNZvukI4EOI_mGL9ytCKWtVjlhT4CA?key=lx61JLV__VsURLhShzpulQ)
- In the **Delete Audience** modal, click **Delete** to permanently delete the audience.![AD_4nXf3d0wfIGTNEU8KA3kQM_V6UfQU8xaXMsBlGrYyjXi02wNLHrrFlJycHoUFP5JTw0uuIXptzdVDL9RL1LzxZixwYFqEtJuYtP6riju_AjNtk_yHUf1hG1fGoIopg1R50IJVH6i-KGMI72SvNssSa3U4uhmm](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf3d0wfIGTNEU8KA3kQM_V6UfQU8xaXMsBlGrYyjXi02wNLHrrFlJycHoUFP5JTw0uuIXptzdVDL9RL1LzxZixwYFqEtJuYtP6riju_AjNtk_yHUf1hG1fGoIopg1R50IJVH6i-KGMI72SvNssSa3U4uhmm?key=FgoiKl48HsensDkIPuZKtg)

You will get a success message after the audience is deleted from Personalize.

### Delete a Referenced Audience
A referenced audience in Contentstack Personalize is an audience that is currently being used in one or more experiences within your project.

This means that the audience is actively involved in defining the parameters or criteria for targeting specific audiences with personalized experiences.

As a result, deleting a referenced audience requires additional steps to ensure that existing experience definitions and personalization strategies are not disrupted. This involves first removing the audience from any experience where it is used, and then proceeding with its deletion.

To delete an existing referenced audience in an Experience draft, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize.**
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an audience.
- On the **Experiences** page, to remove the referenced audience, navigate to the experience where the audience is used by clicking the experience to open it or by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Edit**.![AD_4nXd-EnSaSWNMaoRjUJR1s7N4pgPcrzInn7cJob27Yd-AAp-3OSidvtyK9QmtZyCEMMtxsrnao7v_kHrIuUrWexmYO0XrVGu4t1XpskekDreZkr46cdF1EScm0XBEEH89UUkC4eaB](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd-EnSaSWNMaoRjUJR1s7N4pgPcrzInn7cJob27Yd-AAp-3OSidvtyK9QmtZyCEMMtxsrnao7v_kHrIuUrWexmYO0XrVGu4t1XpskekDreZkr46cdF1EScm0XBEEH89UUkC4eaB?key=lx61JLV__VsURLhShzpulQ)

  **Note:** An experience with the referenced audience must be in the 'Draft' status to delete the audience.
- Click the **Configuration** tab in the left panel and click the **Remove** icon next to the preferred audience from the list.![AD_4nXfXLrv6hQ888k4qR6vizy7fCDmoX3mcHvfoH-YvYBE9ZOnXGmZhWhnGKWEAHfg8xfnsBRtWmzUVXZjBhdRZjt4u9LzJE7KvWzcRNzBLj3pCujscSkvYsmHvRn3BnHeVQduQkMg5m2zoYFPfnoxqyfwECf7m](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfXLrv6hQ888k4qR6vizy7fCDmoX3mcHvfoH-YvYBE9ZOnXGmZhWhnGKWEAHfg8xfnsBRtWmzUVXZjBhdRZjt4u9LzJE7KvWzcRNzBLj3pCujscSkvYsmHvRn3BnHeVQduQkMg5m2zoYFPfnoxqyfwECf7m?key=FgoiKl48HsensDkIPuZKtg)

  **Note:** For A/B Test experiences, go to the **Configuration > Target Group** to remove the referenced audiences.
- Once you have done that, click the **Save Draft** button.
- Now that we have removed the audience from the experience as a reference, click the **Audiences** tab in the left navigation panel.
- You can delete the audience by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.
- In the **Delete Audience** modal, click **Delete** to permanently delete the audience.![AD_4nXcBrHqRHk-gnPWZ4MYG80VYFuolkvT61L0JYqDBoeTcog_Ossr4OJmj8R0Qi6LWDP1ouGUQvtcf2iBZPow8t8S4gc4IxDIG7Fv7sN9z7mxm80WmR-D0LfJL-yVbKH7DW83tFTW0ezBLZwHOfjwCD2h4tC4](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcBrHqRHk-gnPWZ4MYG80VYFuolkvT61L0JYqDBoeTcog_Ossr4OJmj8R0Qi6LWDP1ouGUQvtcf2iBZPow8t8S4gc4IxDIG7Fv7sN9z7mxm80WmR-D0LfJL-yVbKH7DW83tFTW0ezBLZwHOfjwCD2h4tC4?key=FgoiKl48HsensDkIPuZKtg)

**Warning:** Deleting an audience might cause loss of metrics data and also affect the experience performance. Ensure that any references to the deleted audience are updated accordingly.

You will get a success message after the audience is deleted from Personalize.

**Additional Resource:** You can use the [Personalize Management API](../../api-docs/api-detail/personalize-management-api.md#audiences) to create, edit, delete, and retrieve all existing audiences.

## Common questions

### Who can delete an audience in Personalize?
Users with Owner and Member access to a Personalize project can delete existing audiences.

### What is the difference between a referenced and non-referenced audience?
A non-referenced audience is not currently being used in any experiences, while a referenced audience is being used in one or more experiences within your project.

### Why do I need to remove an audience from an experience before deleting it?
Deleting a referenced audience requires first removing the audience from any experience where it is used to ensure that existing experience definitions and personalization strategies are not disrupted.

### Can I manage audiences via an API instead of the UI?
Yes. You can use the Personalize Management API to create, edit, delete, and retrieve all existing audiences.