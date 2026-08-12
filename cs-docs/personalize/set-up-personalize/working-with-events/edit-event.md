---
title: "Edit an Event"
description: "Learn how to edit events within your Personalize projects."
url: /personalize/edit-event
---

# Edit an Event

## Edit an Event

Contentstack Personalize empowers you to refine your event strategy on the fly. This guide equips you with step-by-step instructions to effortlessly edit event keys and descriptions within your Personalize projects, ensuring your campaigns remain aligned with your evolving goals.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
    
    **Note:** Users with **Owner** and **Member** access to a Personalize project can edit existing events.
    
-   Access to Personalize project
    
    **Note:** We assumed that you have already created a Personalize project. If not, follow [this guide](/docs/personalize/create-personalize-project) to create a project in Personalize.
    

## What You Will Learn

-   How to open an existing event for editing in a Personalize project.
    
-   How to change an event's Key and Description.
    
-   What to update elsewhere before you edit an event tied to A/B tests.
    

## Steps for Execution

To edit an existing event, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to edit an event.
3.  Click the **Events** tab.
4.  You can edit an existing Event by clicking your event to open it or by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Edit**.  
    ![Edit option under the Actions column for an event](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf73qspVx9doKUtaSHEICRyoaQ-ahISa-8FTi3MlWj0MpVuJJnXN_aEv7lVWW7AL4PQLUPjU5DnbYQAkJd5qaZZyzfrAaPwNJFsEphpokQgVNln-MSnzaaEYSZTDjUtFF9zH97JqQ?key=LqV841MXdJhIoLht06Dq9w)
5.  In the **Edit Event** modal, make the necessary changes to the **Key** and **Description** fields.
6.  Click **Save** to complete the setup.
    
    **Warning:** Modifying an event tied to A/B tests can impact your metrics. Before editing, update all references to it in your experiments. Reset the Event Key used in triggerImpressions and triggerEvent via the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/about-javascript-personalize-edge-sdk/). This prevents skewed metrics and keeps your personalization on track.
    

You will get a success message after the Event is edited.

## Related Resource

-   [Personalize Management API: Update an Event](/docs/developers/apis/personalize-management-api/events#update-an-event)
