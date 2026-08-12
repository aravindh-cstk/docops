---
title: "Delete an Event"
description: "Learn how to delete referenced and non-referenced events in your Personalize projects."
url: /personalize/delete-event
---

# Delete an Event

## Delete an Event

Deleting an event from your Personalize project might be necessary if it is no longer relevant or if you need to modify your tracking metrics.

This guide provides step-by-step instructions for deleting both referenced and non-referenced events.

**Warning:** Deleting an event might cause loss of metrics data affecting the experience and variants analytics.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
    
    **Note:** Users with **Owner** and **Member** access to a Personalize project can delete existing events.
    
-   Access to Personalize project
    
    **Note:** We assumed that you have already created a Personalize project. If not, follow [this guide](/docs/personalize/create-personalize-project) to create a project in Personalize.
    

## What You Will Learn

-   How to delete a non-referenced event from a Personalize project.
    
-   How to remove a referenced event from an A/B Test experience and then delete it.
    

## Steps for Execution

To delete the event, follow the steps:

### Delete a Non-referenced Event

To delete an existing non-referenced event, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an event.
3.  Click the **Events** tab.
4.  You can delete an existing event by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.![Delete option in the Events Actions menu](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfQ6467h4dUC9ad9JG4Ha6Xk0JhTBkO1y8f4XjA3i1leWE3n6yOTl8j1jmiFVyfSSg7dUeih7NDmcQTn53krZMWsqDB2-qMJClDh3H3N1u6yOqcaa7wz6dSDXF7cBDXoyCsKoJdnQ?key=kxf9b3oCOX-WSRLUHilftg)
5.  In the **Delete Event** modal, click **Delete** to permanently delete the event.

You will get a success message after the event is deleted from Personalize.

### Delete a Referenced Event

**Note:** For this part of the guide, we have assumed that you have already created a Personalize project and [added an event to an existing A/B Test experience](/docs/personalize/add-event-to-ab-test-experience/).

To delete an existing referenced event, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete an event.
3.  On the **Experiences** page, to remove the referenced event from the A/B Test experience, navigate to the experience you want to remove the referred event by clicking your experience to open it or by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Edit**.![Edit option for an experience on the Experiences page](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe_SP6hWWkYYi0__5UbBBOqgnjo2ugvfeYKXqk9soEgqXVoXb6HIlc0YahHUF-KJSt0TNhs_vYUq8cKrqj-OTApXS_1tDJ0M6Sdqtu35vfDuIiZlrgkfyolxC1UlwJ0r3yFYWtWWg?key=kxf9b3oCOX-WSRLUHilftg)
    
    **Note:** An A/B Test experience must be in the ‘Draft’ status to delete event(s) from it.
    
4.  Click the **Configuration** tab, scroll to the Metrics section and then click the **Delete** icon next to the preferred event from the list.
    
    **Note:** When you delete a primary event from the Metrics, the immediate successor is assigned as the primary metric automatically.
    
5.  Once you have done that, click the **Save** button.
6.  Now that we have removed the event from the A/B Test experience’s Metrics, click the **Events** tab in the left navigation panel.
7.  You can delete an existing event by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.![Delete option in the Events Actions menu](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeolcuyRI7pi4ZNOHL-KV6NAqkNRViI059VPTcozUX-UL22CoiWtedyFNdQxF7HaM_Q3gHYHiXWpAdhQvM9gTa_03OIO2Jubbqq0r6xL5ZJL6UXH_Yzm0PmI990xquoeEx4JeeLnA?key=kxf9b3oCOX-WSRLUHilftg)
8.  In the **Delete Event** modal, click **Delete** to permanently delete the event.

You will get a success message after the event is deleted from Personalize.

## Related Resource

-   [Personalize Management API: Delete an Event](/docs/developers/apis/personalize-management-api/events#delete-an-event)
