---
title: "Delete an Audience"
description: "Learn how to delete referenced and non-referenced audience in your Personalize projects."
url: /personalize/delete-audience
---

# Delete an Audience

## Delete an Audience

Deleting an audience from your Personalize project helps maintain an organized set of audiences. This ensures that your personalization strategy focuses on an active, valuable audience.

Before you proceed, please note that removing a referenced audience could affect active personalization campaigns. Exercise caution and update references accordingly.

Let's get started with the step-by-step instructions for deleting both referenced and non-referenced audiences.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
    
    **Note:** Users with **Owner** and **Member** access to a Personalize project can delete existing audiences.
    
-   Access to Personalize project
    
    **Note:** We assumed that you have already created a Personalize project. If not, follow [this guide](/docs/personalize/create-personalize-project) to create a project in Personalize.
    
-   [Audience created](/docs/personalize/create-audience) in your Personalize project

## What You Will Learn

-   How to delete a non-referenced audience from a Personalize project.
    
-   How to remove a referenced audience from an experience before deleting it.
    
-   What data and performance impacts to expect when you delete an audience.
    

## Steps for Execution

To delete the audience, follow the steps:

### Delete a Non-Referenced Audience

A non-referenced audience in Contentstack Personalize is an audience that is not currently being used in any experiences within your project.

To delete an existing non-referenced audience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an audience.
3.  Click the **Audiences** tab.![Audiences tab in a Personalize project](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeX4Msgqz57OAyM9SqDp1WRI1yFU_502PTR0qUrhAM8AO1-o32rZJGrjLX2FOru_SUzJmtm1RcRTS3wk86yy7ozEdP2ub5K4wpmXYwFtAKAD1vzfJW-h48suia1vmVAGBTaB6eIGQ?key=lx61JLV__VsURLhShzpulQ)
4.  You can delete an existing audience by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.![Delete option under the Actions column for an audience](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeTzh6U3cFE-Kj7tsu5P0DbRuR5fl1YqSKNil3Nk0s3S6m5HiOTGyaDQC8meaPvf3GmWwmj3Cw5bjUFtYiNGJmazomSNTKqa-75nyaFkxhcJNZvukI4EOI_mGL9ytCKWtVjlhT4CA?key=lx61JLV__VsURLhShzpulQ)
5.  In the **Delete Audience** modal, click **Delete** to permanently delete the audience.![Delete Audience confirmation modal](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf3d0wfIGTNEU8KA3kQM_V6UfQU8xaXMsBlGrYyjXi02wNLHrrFlJycHoUFP5JTw0uuIXptzdVDL9RL1LzxZixwYFqEtJuYtP6riju_AjNtk_yHUf1hG1fGoIopg1R50IJVH6i-KGMI72SvNssSa3U4uhmm?key=FgoiKl48HsensDkIPuZKtg)

You get a success message after the audience is deleted from Personalize.

### Delete a Referenced Audience

A referenced audience in Contentstack Personalize is an audience that is currently being used in one or more experiences within your project.

This means that the audience is actively involved in defining the parameters or criteria for targeting specific audiences with personalized experiences.

As a result, deleting a referenced audience requires additional steps to ensure that existing experience definitions and personalization strategies are not disrupted. This involves first removing the audience from any experience where it is used, and then proceeding with its deletion.

To delete an existing referenced audience in an Experience draft, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize.**
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an audience.
3.  On the **Experiences** page, to remove the referenced audience, navigate to the experience where the audience is used by clicking the experience to open it or by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Edit**.![Edit option for an experience](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd-EnSaSWNMaoRjUJR1s7N4pgPcrzInn7cJob27Yd-AAp-3OSidvtyK9QmtZyCEMMtxsrnao7v_kHrIuUrWexmYO0XrVGu4t1XpskekDreZkr46cdF1EScm0XBEEH89UUkC4eaB?key=lx61JLV__VsURLhShzpulQ)
    
    **Note:** An experience with the referenced audience must be in the 'Draft' status to delete the audience.
    
4.  Click the **Configuration** tab in the left panel and click the **Remove** icon next to the preferred audience from the list.![Remove icon next to an audience in experience Configuration](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfXLrv6hQ888k4qR6vizy7fCDmoX3mcHvfoH-YvYBE9ZOnXGmZhWhnGKWEAHfg8xfnsBRtWmzUVXZjBhdRZjt4u9LzJE7KvWzcRNzBLj3pCujscSkvYsmHvRn3BnHeVQduQkMg5m2zoYFPfnoxqyfwECf7m?key=FgoiKl48HsensDkIPuZKtg)
    
    **Note:** For A/B Test experiences, go to the **Configuration > Target Group** to remove the referenced audiences.
    
5.  Once you have done that, click the **Save Draft** button.
6.  Now that we have removed the audience from the experience as a reference, click the **Audiences** tab in the left navigation panel.
7.  You can delete the audience by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.
8.  In the **Delete Audience** modal, click **Delete** to permanently delete the audience.![Delete Audience confirmation modal](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcBrHqRHk-gnPWZ4MYG80VYFuolkvT61L0JYqDBoeTcog_Ossr4OJmj8R0Qi6LWDP1ouGUQvtcf2iBZPow8t8S4gc4IxDIG7Fv7sN9z7mxm80WmR-D0LfJL-yVbKH7DW83tFTW0ezBLZwHOfjwCD2h4tC4?key=FgoiKl48HsensDkIPuZKtg)

**Warning:** Deleting an audience might cause loss of metrics data and also affect the experience performance. Ensure that any references to the deleted audience are updated accordingly.

You will get a success message after the audience is deleted from Personalize.

## Related Resource

-   [Personalize Management API: Delete an audience](/docs/developers/apis/personalize-management-api/audiences#delete-an-audience)
