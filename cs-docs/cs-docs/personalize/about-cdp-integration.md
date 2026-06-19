---
title: "[Personalize] - About Customer Data Platform Integration"
description: About integrating a Customer Data Platform (CDP) with Contentstack Personalize via Data & Insights (Lytics).
url: https://www.contentstack.com/docs/personalize/about-cdp-integration
product: Contentstack Personalize
doc_type: concept
audience:
  - developers
  - marketers
version: current
last_updated: 2026-03-25
---

# [Personalize] - About Customer Data Platform Integration

This page explains what a Customer Data Platform (CDP) is and how to integrate CDP data with Contentstack Personalize using Data & Insights (Lytics). It is intended for teams planning personalization workflows and deciding how to route customer data for audience targeting and activation.

## About Customer Data Platform Integration

A Customer Data Platform (CDP) is a centralized system that collects, unifies, and manages customer data from various sources to create a single customer view. This data can include behavioral, demographic, and transactional information, helping businesses better understand their customers and tailor personalized experiences. CDPs enable organizations to segment audiences, track user interactions, and apply data for targeted marketing strategies.

When used with **Contentstack Personalize**, CDP's play a crucial role in powering dynamic, audience-based experiences. To streamline this integration, Contentstack supports CDP connections exclusively through **Data & Insights (Lytics)**.

## CDP Architecture

**Customer Data Platforms (CDPs)** centralize customer data from multiple touchpoints, such as websites, mobile apps, products, email, and social media, into a single customer profile. This unified view enables marketers to deliver more relevant and personalized campaigns that resonate with their audiences.

The architecture for integrating customer data with **Contentstack Personalize** follows a hub-and-spoke model. Instead of connecting CDPs directly to Personalize, Contentstack recommends routing all CDP data through **Data & Insights (Lytics)** to maintain a centralized profile and ensure a scalable personalization workflow.

**Note:** Direct integrations between CDPs and Personalize are no longer recommended. Route all CDP data through [Data & Insights (Lytics)](/docs/data-and-insights/about-data-activation-layer/) to maintain consistency and enable advanced features such as experience versioning, variants, and experience targeting.

## CDP Integration via Data & Insights (Lytics)

Contentstack Personalize supports integration with a wide range of CDPs. **Data & Insights (Lytics)** serves as the central hub for behavioral data and audience activation across the personalization workflow.

Integrating your CDP with Personalize through Data & Insights (Lytics) unifies audience data and streamlines personalized content delivery. It collects real-time behavioral signals and transforms them into actionable audience profiles, which Personalize uses to activate tailored experiences.

## Why Integrate Your CDP via Data & Insights (Lytics)?

- **Unified Audience Management:** Data & Insights (Lytics) receives raw behavioral data from your CDP, computes audiences and traits, and passes them to Personalize for targeting.
- **Real-time Signals:** Behavior events such as page views or clicks are processed in real time, enabling timely personalization.
- **Automatic Audience Sync:** Audience memberships and custom traits are automatically synced to your Personalize stack.
- **Cross-channel Reach:** Use CDP data from web, mobile, and backend sources to deliver consistent experiences across platforms.
- **A/B Testing and Targeting:** Segment users using Data & Insights (Lytics) logic and run experiments in Personalize based on audience membership.

## Example Use Cases

Organizations integrating CDPs with Data & Insights (Lytics) and Personalize typically:

- **Track Real-time User Attributes:** Sync traits such as device type, purchase intent, or referral source to create dynamic segments.
- **Stream Behavioral Events:** Send events like clicks, form submissions, or scroll depth to Data & Insights (Lytics) and activate experiences in Personalize.
- **Segment Audiences Strategically:** Group users into high-value segments such as “loyal customers” or “new visitors” and personalize their experience accordingly.
- **Run Experiments:** Test content variations for different segments and measure performance to optimize engagement.
- **Support Rich User Profiles:** Use CDP-enriched attributes to power complex personalization logic in Personalize.

## For Existing CDPs Like Segment or Salesforce

If you currently use a CDP such as Segment, Salesforce, or another provider, Contentstack recommends routing your integration through **Data & Insights (Lytics)** instead of connecting directly to Personalize. This approach standardizes data ingestion, ensures consistent audience logic, and provides a single hub to manage segmentation and profile enrichment.

Data & Insights (Lytics) acts as the bridge between your CDP and Contentstack Personalize. You can configure Lytics to ingest data, compute traits, build audiences, and push enriched data to Personalize via the [Data Activation Layer (DAL)](/docs/data-and-insights/integrating-data-and-insights-lytics).

## Integration Path

To personalize experiences using customer data, connect your CDP through Data & Insights (Lytics). This ensures consistent and scalable data activation:

**Your CDP → Data & Insights (Lytics) → Contentstack Personalize**

- If you are using Segment or another CDP, refer to the [Lytics Destination documentation on Segment](https://segment.com/docs/connections/destinations/catalog/lytics/#lytics-destination) for instructions on routing CDP data through Lytics.

For setup steps, refer to the [End-to-end Guide for Data & Insights (Lytics)](/docs/data-and-insights/end-to-end-guide-data-and-insights).

## Common questions

### Can I connect my CDP directly to Contentstack Personalize?
Direct integrations between CDPs and Personalize are no longer recommended. Route all CDP data through Data & Insights (Lytics).

### What role does Data & Insights (Lytics) play in the integration?
Data & Insights (Lytics) serves as the central hub for behavioral data and audience activation, collecting signals, computing audiences/traits, and syncing them to Personalize.

### What is the recommended integration path?
**Your CDP → Data & Insights (Lytics) → Contentstack Personalize**

### Where can I find setup instructions?
Refer to the [End-to-end Guide for Data & Insights (Lytics)](/docs/data-and-insights/end-to-end-guide-data-and-insights) and, if applicable, the [Lytics Destination documentation on Segment](https://segment.com/docs/connections/destinations/catalog/lytics/#lytics-destination).