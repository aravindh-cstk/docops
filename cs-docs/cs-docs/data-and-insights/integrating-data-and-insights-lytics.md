---
title: "[Data & Insights] - Integrating Data & Insights (Lytics)"
description: Integrating Data & Insights (Lytics) with Contentstack using the Data Activation Layer (DAL) to enable real-time personalization.
url: https://www.contentstack.com/docs/data-and-insights/integrating-data-and-insights-lytics
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Data & Insights] - Integrating Data & Insights (Lytics)

This page explains what Data & Insights (Lytics) is in Contentstack and how it connects to your stack via the Data Activation Layer (DAL). It is intended for Contentstack organization owners/admins and developers who want to enable behavioral data-driven personalization and deploy the DAL tag in their environments.

## Integrating Data & Insights (Lytics)

**Data & Insights (Lytics)** is Contentstack’s behavioral data and audience platform that powers real-time personalization. It integrates with your CMS to classify content, track visitor behavior, and deliver smarter, more relevant experiences at scale.

By enabling the **Data Activation Layer (DAL)**, you can connect audience behaviour from **Data & Insights (Lytics)** directly to personalized content in your **stack**, allowing you to adapt homepage messaging, optimize landing pages, and tailor marketing journeys based on what users care about most, in the moments that matter.

## Why Use Data & Insights (Lytics)?
**Data & Insights (Lytics)** bridges behavioral data with content delivery. Enabling DAL unlocks several key benefits**:**
- **Real-time personalization**: Deliver tailored content using live user behavior and audience membership, beyond static rules.
- **Unified data fabric**: Link CMS entries, external data, and personalization strategy in one consistent flow.
- **Omnichannel readiness**: Ensure consistent personalization across websites, mobile apps, email campaigns, and other digital touchpoints.
- **No-code scale**: Activate audiences and variants across environments without the need to build or maintain custom infrastructure.

## How Data & Insights (Lytics) Connects to Your Stack?
Once enabled, **Data & Insights (Lytics)** integrates across the following components using the [DAL](https://docs.lytics.com/docs/contentstack-quickstart) architecture:

| Product | Purpose |
|---|---|
| **Contentstack CMS** | Classifies content and syncs entries with DAL |
| **Data & Insights (Lytics)** | Collects behavior data and builds audience profiles |
| **Contentstack Personalize** | Syncs all audiences from your Lytics account to your Personalize project |
| **Contentstack Launch** | Deploys the DAL JavaScript tag to your environment |

Together, these components form a continuous feedback loop connecting live behavioral data with content delivery, so your CMS becomes the engine for real-time personalization at scale.

## What Can You Do With DAL?
- Set up a DAL configuration from Org Admin in Contentstack
- Deploy the tracking tag via Contentstack Launch or your preferred deployment method
- Sync CMS entries and metadata to build topic-based content maps
- Build and explore audiences based on real user behavior and insights
- Push audiences into a Personalize project to trigger dynamic content delivery

Once your DAL is active, you can monitor visitor behavior, adjust content strategies, and launch hyper-targeted campaigns with full visibility into what’s working, and why.

## What You Need Before Getting Started?
Before getting started with DAL, make sure you have:
- Access to the Contentstack Organization as the [Owner](https://www.contentstack.com/docs/developers/organization/organization-roles#organization-owner)/[Admin](https://www.contentstack.com/docs/developers/organization/organization-roles#organization-admin) with DAL enabled (contact our [support team](mailto:support@contentstack.com) to get this enabled for your organization)
- A website or app where the DAL tag can be deployed (via [Launch](/docs/developers/launch/event-tracking-in-contentstack-launch/), Google Tag Manager, or directly in your code)
- Lytics/DAL [Dev Tools Chrome extension](https://docs.lytics.com/docs/chrome-extension) installed for your browser

## Next Steps:
- [Create a Data Activation Layer (DAL)](https://docs.lytics.com/docs/create-data-activation-layer)
- [Configure your DAL](https://docs.lytics.com/docs/configure-your-dal)
- [Using your DAL](https://docs.lytics.com/docs/using-your-dal)

## Common questions

### Do I need to be an Org Owner/Admin to enable DAL?
Yes—this page notes you need access to the Contentstack Organization as the Owner/Admin with DAL enabled.

### How is the DAL tag deployed?
The DAL tag can be deployed via Contentstack Launch, Google Tag Manager, or directly in your code.

### What systems are connected when Data & Insights (Lytics) is enabled?
It connects Contentstack CMS, Data & Insights (Lytics), Contentstack Personalize, and Contentstack Launch using the DAL architecture.

### What can I do after DAL is active?
You can monitor visitor behavior, adjust content strategies, and launch hyper-targeted campaigns with visibility into what’s working, and why.