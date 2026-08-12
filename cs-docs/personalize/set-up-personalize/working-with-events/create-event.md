---
title: "Create an Event"
description: "Learn how to create an event to capture and monitor every interaction made by a visitor for your A/B Test experiences."
url: /personalize/create-event
---

# Create an Event

## Create an Event

Events in Contentstack Personalize A/B Test experiences let you capture and monitor every interaction made by a visitor.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
    
    **Note:** Users with **Owner** and **Member** access to a Personalize project can create new events.
    
-   Access to Personalize project
    
    **Note:** We assumed that you have already created a Personalize project. If not, follow [this guide](/docs/personalize/create-personalize-project) to create a project in Personalize.
    

## What You Will Learn

-   How to create a new event in a Personalize project.
    
-   How to set an event Key and optional Description.
    
-   How to use the event next as a metric in an A/B Test experience.
    

## Steps for Execution

To create an event, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to create an event.
3.  Click the **Events** tab. From the **Events** page, click the **\+ New Event** button.
4.  In the **New Event** modal, provide a suitable **Key** and an optional **Description**.You can create custom events to track metrics (impressions and conversions) for common scenarios such as click, add\_to\_cart, checkout and many more.
5.  Click **Create** to complete the set up.

This creates a new event in your Personalize project.

**Note:**

-   Users with Owner and Member access to a Personalize project can create new events, and edit/delete existing events.
-   The default number of Events allowed per project is **100**.

## Next Steps

You can now [add the event to an A/B Test experience](/docs/personalize/add-event-to-ab-test-experience/) as a Metric to evaluate the variant performance for impressions and conversions.

## Related Resource

-   [Personalize Management API: Create an Event](/docs/developers/apis/personalize-management-api/events#create-an-event)
