---
title: "[Marketplace guides and apps] - Calendar App Installation Guide"
description: Calendar App Installation Guide for installing and using the Calendar app from the Contentstack Marketplace.
url: https://www.contentstack.com/docs/marketplace/calendar
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Calendar App Installation Guide

This page explains how to install, configure, and use the Calendar app from the Contentstack Marketplace within a stack. It is intended for Contentstack Organization/Stack Owners or Admins who want to enable a full-page calendar view for workflow tasks and scheduled publishing events.

## Calendar App Installation Guide

The Calendar is a Full Page Location app that displays the Workflow tasks, entries, and releases in a Calendar format. The app enables you to view all the events in the Calendar app quickly. You can view all the details of the scheduled events within your Contentstack environments. Also, you can apply various filters to view the events.

Contentstack Marketplace lets you integrate the Calendar app directly into your headless CMS. You can easily use this app to view the workflow tasks and scheduled events, such as Publish Entries and Releases of your stack in a Calendar view.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Calendar app within your stack.

## Steps for Execution

- [Install and Configure the Calendar app in Contentstack Marketplace](#install-and-configure-the-calendar-app-in-contentstack-marketplace)
- [Use the Calendar app within your Stack](#use-the-calendar-app-within-your-stack)

## Install and Configure the Calendar app in Contentstack Marketplace

Follow the steps to install the application in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Calendar** app and click **Install App**.
- In the popup window, select the stack where you want to install the Calendar app and click the **Install** button.![Calendar-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8771f2a94b477963/64b686de72f62ba629e8cbb3/Calendar-App-Install.png)
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Calendar-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbfd0903713e6f3f2/65b8186893cdf105ac7cad28/Calendar-UI-Locations.png)

**Note**: No additional configuration is required to use the Calendar app.

## Use the Calendar app within your Stack

**Note**: Calendar is a Full Page Location app. For more information, refer to the [Full Page Location](../developer-hub/full-page-location.md) documentation.

To use the Calendar application in your stack, follow the steps given below:

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- Now, go to the stack dashboard. In the left-hand side primary navigation, you will find the **Calendar** app icon (as shown below).![Calendar-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c9401cfea223393/64af6e7fce1ee505488fd839/Calendar-App-Icon.png)
- Click the app icon to view the Calendar app within your CMS.![Calendar-Authorize-Full-Screen](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49cc299189931950/64af6e7ff5591f3f5de59988/Calendar-Authorize-Full-Screen.png)
- You first need to authorize the app by providing access to your stack. Click the **Authorize** button to start using the app.![Calendar-Authorize](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2edea56c93a3f7c8/64af6e7fb7aec378ccd8a2cf/Calendar-Authorize.png)
- In the popup window, click the **Authorize** button again to authenticate the Calendar app.

The Calendar app shows the total number of events scheduled per day. By default, the Calendar app highlights today's date and displays today's scheduled events in the right-hand side panel.

The app uses color codes and icons to differentiate the Task, Publish, and Release events. The workflow task remains always on top, and the scheduled events include all the publishing entries and releases to be deployed. Scheduled events are sequenced based on the time of publishing.

**Additional Resource**: For more information about Task, Publish, and Release, please refer to the [Workflow Tasks](../set-up-workflows-and-publish-rules/about-workflow-tasks.md), [Publish an Entry](../../content-managers/author-content/publish-an-entry.md), and [Releases](../../content-managers/create-and-manage-releases/about-releases.md) documentation.

### Tasks

- Click the **Tasks** item to view the workflow task details in the Calendar app.

You can see all the details of the task.

- Click the **Entry name** to go to the entry editor.![Calendar-Task-In-Entry-Editor](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt03f285b2c341ca75/64af72224e2d5e4174f7663a/Calendar-Task-In-Entry-Editor.png)
- Click **Open My Tasks** to view all the workflow tasks.![Calendar-Tasks-List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3cee5fad395cc941/64af7222cef8c55dd5705d4f/Calendar-Tasks-List.png)

### Publish

- Click the **Publish** entry to view the entry details in the Calendar app.

You can view all the details of the entry.

- Click the **Ent****ry name** to go to the entry editor.![Calendar-Publish-Entry-Editor](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc94ff2b1848404e/64af72224d814364ab900858/Calendar-Publish-Entry-Editor.png)
- Click **Open Publish Queue** to view the status of all the publishing events.![Calendar-Publish-Queue](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1321e8a1caa8b021/64b3aeb03d598c5279044bac/Calendar-Publish-Queue.png)

### Release

- Click the **Release** item to view the release details in the Calendar app.

You can view all the details of the release.

- Click the **Name** to view the release details.![Calendar-Release-Details-In-CMS](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt007b74bf6f9bfdc1/64af72224eb51c2bcf35f411/Calendar-Release-Details-In-CMS.png)
- Click **Open Releases** to view the list of all the releases added to the CMS.![Calendar-Release-List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd68f81e547b50475/64af7222bd3ef850f57412c6/Calendar-Release-List.png)

### Filters

- You can select any month or year by clicking the dropdowns or using the **Previous month** and **Next month** icons.![Calendar-Filter-Month-And-Year](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ebddaef8adc9798/64af6f804d814337ee90084e/Calendar-Filter-Month-And-Year.png)
- Click the **Today** button to view the events scheduled for the current date.![Calendar-Filter-Today](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt877bbc603d5d890a/64af6f8155695ca698a94c17/Calendar-Filter-Today.png)
- Using the **View By** filter, you can preview the scheduled events in **Month**, **Timeline**, or **Week** view.

By default, the Calendar app displays the **Month** view.

Select the **Timeline** option from the **View By** dropdown to view the workflow tasks and scheduled events in a timeline view.

Select the **Week** option from the **View By** dropdown to view the workflow tasks and scheduled events in a week view.

**Note**: You can view the Task, Publish, and Release event details by clicking them.

- Using the **All Events** filter, you can select the Task, Publish, and Release options. By default, all three options are selected.![Calendar-Filter-Events](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdc73b46c2469c3f2/64af6f80f122ca9567e6c17d/Calendar-Filter-Events.png)

## Common questions

### Do I need to add any configuration after installing the Calendar app?
No. **Note**: No additional configuration is required to use the Calendar app.

### Where do I find the Calendar app after installation?
In the stack dashboard, in the left-hand side primary navigation, you will find the **Calendar** app icon.

### Why do I need to authorize the Calendar app?
You first need to authorize the app by providing access to your stack. Click the **Authorize** button to start using the app.

### What event types can I filter in the Calendar app?
Using the **All Events** filter, you can select the Task, Publish, and Release options. By default, all three options are selected.