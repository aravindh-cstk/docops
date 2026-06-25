---
title: "[Data & Insights] - End-to-end Guide for Data & Insights (Lytics)"
description: End-to-end setup guide to configure Data & Insights (Lytics), install the Lytics tag, synchronize content, and activate personalized experiences with Contentstack Personalize.
url: https://www.contentstack.com/docs/data-and-insights/end-to-end-guide-data-and-insights
product: Contentstack
doc_type: guide
audience:
  - developers
  - implementers
version: current
last_updated: 2026-03-25
---

# [Data & Insights] - End-to-end Guide for Data & Insights (Lytics)

This page provides an end-to-end implementation guide for setting up Data & Insights (Lytics) with Contentstack and Personalize. It is intended for developers and implementers configuring the DAL connection, installing the JavaScript tag, syncing content, and validating personalized experiences in an application.

## End-to-end Guide for Data & Insights (Lytics)

This guide provides step-by-step instructions, along with a clear explanation of what each step does and why it matters. Follow these sections to configure Data & Insights (Lytics), install the Lytics tag, synchronize content, and activate personalized experiences.

## Prerequisites

- [Contentstack account ](https://www.contentstack.com/login/)with Data & Insights (Lytics) enabled
- Your self-hosted site deployed
- Stack connected to the site
- [Personalize project](../personalize/create-personalize-project.md) created

### Create and Configure Data & Insights (Lytics) Connection

**What:** To establish a connection between Contentstack and Data & Insights (Lytics), you must first enable the Data Activation Layer (DAL). DAL acts as the central hub linking Contentstack (CMS), Data & Insights (Lytics) for behavior tracking, and Personalize (delivery). It authorizes data flow across platforms.

**Why:** Without this authorization, Data & Insights (Lytics) cannot collect events, and Personalize cannot receive audience data. Personalize relies on this data to segment audiences and deliver relevant and impactful tailored experiences.

See the following documentation to create and configure the DAL connection:

[Create a Data & Insights (Lytics) Integration](./create-data-and-insights-lytics-integration.md)

Once DAL is successfully created and configured for your organization, all the existing audiences from your Data & Insights (Lytics) account are [automatically synced and displayed](https://docs.lytics.com/docs/using-your-dal#personalization) within the Personalize Audience module. The next step is to authorize and connect the DAL to Personalize.

After successfully authorizing your Data & Insights and Contentstack connection, you must enable the JavaScript Tag plugin for Contentstack.

### Enable and Install JavaScript Tag Plugin for Contentstack

**What:** The Data & Insights (Lytics) Js Tag collects real-time behavioral data (page views, clicks) and sets visitor cookies for audience segmentation.

**Why:** This tag is the foundation of behavior-based audiences; without it, no data is collected and personalization cannot occur.

To enable Data & Insights (Lytics)' JS Tag to sync profile data with Contentstack's Personalize Edge API, follow these steps:

Go to [app.lytics.com](https://app.lytics.com/).

- Navigate to **Account > Settings > JavaScript Tag**.
- Check the box labeled **"Automatically sync your profiles with Contentstack personalize?"**.
- Enter the base URL for the **data center** to which you want to send Contentstack's Personalize Edge API.
- Enter your **Personalize Project ID** connected to your DAL configuration.
- Click **Save Changes**.

Once connected, you will be able to use any Data & Insights (Lytics) Audience as [Personalize Audience](../personalize/about-audiences.md) to help tailor content for different audiences, manage variants, and run A/B tests to enhance engagement and conversions.

**Note:**

- If your website is hosted on Contentstack Launch, you can manage the event tags by following the steps outlined in the [Event Tracking (Lytics) in Contentstack Launch](../developers/launch/event-tracking-in-contentstack-launch.md) guide a simple toggle in the **Launch Environments settings > Event Tracking** allows you to skip the manual setup.
- If you are using GTM, follow the steps in [this guide](https://docs.lytics.com/docs/developer-quickstart-3-install-lytics) for Google Tag Manager.
- For manually installing the JSTag, follow the steps below.

#### Installation Instructions

To integrate Data & Insights (Lytics), you need to add a HTML script tag to your app, which retrieves and initializes the JSTag.

Copy the JSTag script from Data & Insights (Lytics):

Open the [Lytics app](https://app.lytics.com/) connected to your project.

- Go to **Data Pipeline > SDK > Web (JS)**.
- Copy the script provided in the **Installation Instructions** section.
- Here’s a Next.js example where the script is added as a React Provider.

**Note:** For this step, the file is placed in `/components/context/`, but you can choose to place this wherever appropriate. Copy and paste the script from Lytics Web SDK (JSTag) in your `LyticsProvider.tsx` file.

```
// /components/context/LyticsProvider.tsx

'use client'
import React from 'react';

import Script from 'next/script';

export default function LyticsProvider({ children }: { children: React.ReactNode }) {
  return (
  <>

      {`
        !function(){"use strict";var o=window.jstag||(window.jstag={}),r=[];function n(e){o[e]=function(){for(var n=arguments.length,t=new Array(n),i=0;i
    );
}
```

Here, `ed11d636xxxxxxxxxxxxxxxxxxxx` is the `Lytics CID` (a Unique Lytics Account ID, which can be found in your Data & Insights (Lytics) account via **Accounts > Settings > Details > Account ID**).

The [Lytics JavaScript Tag (JSTag)](./install-real-time-event-tag.md) tracks user behavior during their site visit. This anonymous tracking is used to build and enhance behavioral user profiles. The JSTag also associates the current user's Data & Insights (Lytics) profile, making profile data like audience membership available to the Personalize integrations.

Wrap the app with `LyticsProvider` as shown below:

```
// app/layout.tsx

import LyticsProvider from '@/components/context/LyticsProvider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

             {children}

  );
}
```

The Lytics Provider initializes the Lytics tracking tag to track user behavior on site visits.

#### In-app Verification Assistant

Data & Insights (Lytics) provides a [simple tool](https://docs.lytics.com/docs/developer-quickstart-3-install-lytics#testing-the-lytics-tag-installation) to confirm that data is flowing into your account. Note that it may take a few minutes for events to appear in the UI.

Go to [app.lytics.com](https://app.lytics.com/).

- Navigate to **Data Pipeline > SDK > Web (JS) > Verify the Installation**.
- At the bottom of the page, click the **Refresh** button to validate the installation.
- If the status does not say **Successfully installed** click it again.

### Set Up Content Sync to Import CMS Entries and Taxonomies

**What:** Content Sync imports your Contentstack entries and taxonomies into Data & Insights (Lytics) so content can be analyzed and scored.

**Why:** Without syncing content, Data & Insights (Lytics) cannot build topic-based profiles or recommend relevant content.

**Note:** Use [this guide](./create-job-and-authorization-for-data-and-insights-lytics.md) to score visitors based on the topics they consume.

Pick the Content Types(CTs) you want to import (e.g., article, landing_page).

- Any CT without a **URL** field is ignored.
- The import algorithm examines each CT’s “text-y” fields (like RTEs) and picks the most text-dense field to generate topics.

After the affinities are generated, review them and use them based on your cases. Refer to the [Topics and Affinities](https://docs.lytics.com/docs/affinities) documentation for more.

**Tip:** Set up your audiences and experiences in [Data & Insights (Lytics) Audiences](https://docs.lytics.com/docs/audiences#creating-audiences) and configure Personalize Experiences ([Segmented](../personalize/create-segmented-experience.md) or [A/B Test](../personalize/create-ab-test-experience.md)) after verifying that topics are generated in the **Content** > **Context Layers **section of the [**Data & Insights (Lytics) Dashboard,**](https://app.lytics.com/) accessible from the left navigation panel.

### Create Data & Insights (Lytics) Audiences and Personalize Experiences

**What:** This step involves using the content affinities generated from Content Sync to build meaningful audience segments within Data & Insights (Lytics). These segments are then synced to Contentstack Personalize, where you can create tailored experiences, either segmented or A/B tests based on audience behavior and interest.

**Why:** Without defining audiences, you won’t be able to personalize content based on user behavior. This enables effective segmentation. Data & Insights (Lytics) uses content interaction data to assign users to audiences, and Personalize uses those audiences to deliver targeted [Entry Variants](https://www.contentstack.com/docs/content-managers/entry-variants#work-with-entry-variants). It’s the bridge between raw behavior and tailored content delivery.

**Additional Resource:** Use the [Audience Insights App](../developers/marketplace-apps/audience-insights.md) to view real-time insights into audience segments, content engagement, and behavior patterns helping you optimize personalization strategies at scale.

### Integrate Personalize With Your App

**What:** Use the SDK or custom middleware to fetch variant data specific to users for server-side rendering.

**Why:** If you need direct programmatic control over variant injection into pages, this step is required. Otherwise, variants may be served automatically based on cookies.

To get Personalize up and running in your app, please use one of the [Setup Personalize Guides](../agent-os/personalize.md#setup-personalize).

**Note:** To enable Audience Preview in Timeline and Visual Builder for your Personalize project, follow the steps in the following guide:

[Audience Preview](../content-managers/timeline/audience-preview.md)

- [Set Up Visual Builder for Your Website](https://www.contentstack.com/docs/developers/set-up-visual-builder/set-up-visual-builder-for-your-website)

Your Personalize Edge SDK is now set up and ready to interact with your Contentstack Personalize project and Data & Insights (Lytics) audiences, enabling personalization for your website.

**Tip:** Set up **Audience Preview** to view real-time personalized experience.

### Validating the Set Up

Final validation of your setup can be viewed in the [Audience Preview](../content-managers/timeline/audience-preview.md) within the Visual Builder and Timeline that you have configured.

In Personalize, you can view the Impressions and Conversions (for A/B Test experiences only) for each of your experiences within the [Experience Analytics](../personalize/experience-analytics.md).

## Reference Project

The following example demonstrates how to integrate Contentstack Personalize with Data & Insights (Lytics) using a Next.js app deployed via Launch:[Next.js example GitHub repository](https://github.com/contentstack-personalize-examples/nextjs-example-launch-with-lytics) hosted at [https://nextjs-example-with-lytics.contentstackapps.com.](https://nextjs-example-with-lytics.contentstackapps.com)

## Common questions

### Do I need the Data Activation Layer (DAL) before installing the JavaScript Tag?
Yes. The guide states you must first enable the Data Activation Layer (DAL) to authorize data flow across platforms.

### What happens if I don’t install the Data & Insights (Lytics) Js Tag?
The guide states that without the tag, no data is collected and personalization cannot occur.

### Why do I need Content Sync?
The guide states Content Sync imports your Contentstack entries and taxonomies into Data & Insights (Lytics) so content can be analyzed and scored.

### Where can I validate that the setup is working?
The guide states final validation can be viewed in the Audience Preview within the Visual Builder and Timeline, and analytics can be viewed in Experience Analytics for experiences.