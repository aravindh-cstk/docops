---
title: "[Data & Insights] - Install Real-Time Events Tag"
description: Instructions for installing and verifying the Lytics Real-Time Events Tag (Web SDK/JStag), including Google Tag Manager setup and in-app verification.
url: https://www.contentstack.com/docs/data-and-insights/install-real-time-event-tag
product: Lytics
doc_type: guide
audience:
  - developers
  - marketers
  - implementers
version: unknown
last_updated: 2026-03-25
---

# [Data & Insights] - Install Real-Time Events Tag

This page explains how to install the Lytics Real-Time Events Tag (Web SDK/JStag) on your website (including via Google Tag Manager) and how to verify that the tag is correctly sending data into your Lytics account. It is intended for anyone responsible for implementing or validating website tracking and real-time profile materialization.

## Install Real-Time Events Tag

Lytics provides a Web SDK tag that can be added to your site to collect behavioral data and display the materialized profile in the browser in real time. Manual installation instructions are available within the Lytics app at **Data Pipeline > SDK > Web SDK**.

If your website uses Google Tag Manager (GTM), it is recommended to use the following turnkey installation methods.

**Google Tag Manager**

Follow the steps to install the Lytics tag using Google Tag Manager:
- From the left-hand navigation, navigate to **Data Pipeline > SDK > Web SDK **in the Lytics app.
- [Setup and install](https://support.google.com/tagmanager/answer/6103696?hl=en) Google Tag Manager if it's not already configured.
- Create a new [Custom HTML](https://support.google.com/tagmanager/answer/6107167?hl=en) tag and paste the Lytics JavaScript snippet into the tag’s content box.
- Configure the tag to trigger on the appropriate pages. We recommend using the **All Pages** default trigger to start.
- Submit and [publish](https://support.google.com/tagmanager/answer/6107163?hl=en) your Google Tag Manager version.

## Testing the Lytics Tag Installation

Once the tag has been installed, you can validate the installation using the following method:

### In-app Verification Assistant

Lytics provides a simple tool to confirm that data is flowing into your account. Note that it may take a few minutes for events to appear in the UI.
- Select **Vault** using the product switcher at the top left.
- Navigate to **Setup > JavaScript Tag **from the left-hand menu.
- At the bottom of the page, click the Refresh button to validate the installation.
- Setup click the **refresh** button to validate installation if it does not already state **Successfully installed**.

## Lytics Web SDK (JStag)

The core Lytics SDK automatically collects behavioral data as users browse your site, helping build user profiles. These profiles are surfaced in real time for personalization use cases.

You can install the JStag:
- Directly on your site
- Through a tag manager
- Automatically via CMS plugins

**Additional Resource: **For additional information, please refer to our [documentation](https://docs.lytics.com/docs/lytics-javascript-tag#installation).

### 1. Installation Instructions

Copy and paste the following snippet as the **first element **inside the `<head> `of every webpage you want to track:

```

  !function(){"use strict";var o=window.jstag||(window.jstag={}),r=[];function n(e){o[e]=function(){for(var n=arguments.length,t=new Array(n),i=0;i

```

### 2. Verifying the Installation

To verify successful tag installation:
- Go to [app.lytics.com](https://app.lytics.com).
- Navigate to** Data Pipeline > SDK > Web (JS)**.

You should see confirmation once data is successfully flowing in.

**Note**: If your website is hosted on Contentstack Launch, you can manage the event tags by following the steps outlined in the [Event Tracking (Lytics) in Contentstack Launch](/docs/developers/launch/event-tracking-in-contentstack-launch) guide.

## Common questions

### How long does it take for events to appear after installing the tag?
It may take a few minutes for events to appear in the UI.

### Where do I find the manual installation instructions in the Lytics app?
Manual installation instructions are available within the Lytics app at **Data Pipeline > SDK > Web SDK**.

### What trigger should I use in Google Tag Manager to start collecting data?
We recommend using the **All Pages** default trigger to start.

### Where can I verify that the Web (JS) tag is sending data?
Go to [app.lytics.com](https://app.lytics.com) and navigate to** Data Pipeline > SDK > Web (JS)**.