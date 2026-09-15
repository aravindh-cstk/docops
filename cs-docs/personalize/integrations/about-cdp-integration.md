---
title: "About Customer Data Platform Integration"
description: "Leverage Customer Data Platform with Contentstack to manage personalization campaigns and enhance user experiences effectively."
url: /personalize/about-cdp-integration
uid: bltacdbc4aef9cae861
---

# About Customer Data Platform Integration

## About Customer Data Platform Integration

A Customer Data Platform (CDP) is a centralized system that collects, unifies, and manages customer data from various sources to create a single customer view. This data can include behavioral, demographic, and transactional information, helping businesses better understand their customers and tailor personalized experiences. CDPs enable organizations to segment audiences, track user interactions, and apply data for targeted marketing strategies.

When used with **Contentstack Personalize**, CDP's play a crucial role in powering dynamic, audience-based experiences. To streamline this integration, Contentstack supports CDP connections exclusively through **Lytics**.

## CDP Architecture

**Customer Data Platforms (CDPs)** centralize customer data from multiple touchpoints, such as websites, mobile apps, products, email, and social media, into a single customer profile. This unified view enables marketers to deliver more relevant and personalized campaigns that resonate with their audiences.

The architecture for integrating customer data with **Contentstack Personalize** follows a hub-and-spoke model. Instead of connecting CDPs directly to Personalize, Contentstack recommends routing all CDP data through **Lytics** to maintain a centralized profile and ensure a scalable personalization workflow.

**Note:** Direct integrations between CDPs and Personalize are no longer recommended. Route all CDP data through [Lytics](/docs/lytics) to maintain consistency and enable advanced features such as experience versioning, variants, and experience targeting.

### CDP Integration via Lytics

Contentstack Personalize supports integration with a wide range of CDPs. **Lytics** serves as the central hub for behavioral data and audience activation across the personalization workflow.

Integrating your CDP with Personalize through Lytics unifies audience data and streamlines personalized content delivery. It collects real-time behavioral signals and transforms them into actionable audience profiles, which Personalize uses to activate tailored experiences.

### Why Integrate Your CDP via Lytics?

-   **Unified Audience Management:** Lytics receives raw behavioral data from your CDP, computes audiences and traits, and passes them to Personalize for targeting.
-   **Real-time Signals:** Behavior events such as page views or clicks are processed in real time, enabling timely personalization.
-   **Automatic Audience Sync:** Audience memberships and custom traits are automatically synced to your Personalize stack.
-   **Cross-channel Reach:** Use CDP data from web, mobile, and backend sources to deliver consistent experiences across platforms.
-   **A/B Testing and Targeting:** Segment users using Lytics logic and run experiments in Personalize based on audience membership.

### Example Use Cases

Organizations integrating CDPs with Lytics and Personalize typically:

-   **Track Real-time User Attributes:** Sync traits such as device type, purchase intent, or referral source to create dynamic segments.
-   **Stream Behavioral Events:** Send events like clicks, form submissions, or scroll depth to Lytics and activate experiences in Personalize.
-   **Segment Audiences Strategically:** Group users into high-value segments such as “loyal customers” or “new visitors” and personalize their experience accordingly.
-   **Run Experiments:** Test content variations for different segments and measure performance to optimize engagement.
-   **Support Rich User Profiles:** Use CDP-enriched attributes to power complex personalization logic in Personalize.

### For Existing CDPs Like Segment or Salesforce

If you currently use a CDP such as Segment, Salesforce, or another provider, Contentstack recommends routing your integration through **Lytics** instead of connecting directly to Personalize. This approach standardizes data ingestion, ensures consistent audience logic, and provides a single hub to manage segmentation and profile enrichment.

Lytics acts as the bridge between your CDP and Contentstack Personalize. You can configure Lytics to ingest data, compute traits, build audiences, and push enriched data to Personalize via the [Lytics CDP](/docs/lytics).

### Integration Path

To personalize experiences using customer data, connect your CDP through Lytics. This ensures consistent and scalable data activation:

**Your CDP → Lytics → Contentstack Personalize**

-   If you are using Segment or another CDP, refer to the [Lytics Destination documentation on Segment](https://segment.com/docs/connections/destinations/catalog/lytics/#lytics-destination) for instructions on routing CDP data through Lytics.

For setup steps, refer to the [Lytics CDP Documentation](/docs/lytics).
