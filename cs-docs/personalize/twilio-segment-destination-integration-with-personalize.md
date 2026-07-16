---
title: "[Personalize] - Twilio Segment Destination Integration with Personalize"
description: Twilio Segment destination integration with Contentstack Personalize, including destination types, prerequisites, setup steps, and creating Personalize experiences.
url: https://www.contentstack.com/docs/personalize/twilio-segment-destination-integration-with-personalize
product: Contentstack Personalize
doc_type: integration-guide
audience:
  - developers
  - implementers
version: v1
last_updated: 2026-03-25
---

# [Personalize] - Twilio Segment Destination Integration with Personalize

This page explains how to integrate Twilio Segment Destinations with Contentstack Personalize, including choosing the right destination type, configuring mappings and settings, and creating Personalize experiences. It is intended for developers and admins setting up audience and event/attribute syncing between Segment and Personalize.

## Twilio Segment Destination Integration with Personalize

**Warning**: The Twilio Segment destination integration with Personalize has been deprecated. Contentstack now recommends using [Data & Insights (Lytics)](/docs/data-and-insights#data-and-insights-lytics-overview) as the preferred method for audience activation and personalization. To ensure continued support and compatibility, please transition to the [Data Activation Layer (DAL)](/docs/data-and-insights#using-data-and-insights-lytics) approach.

Contentstack Personalize and Twilio Segment Integration enables dynamic and data-driven personalization. This allows real-time personalization by using customer data to tailor content, improve engagement, and optimize the user journey across various channels, ensuring a seamless and targeted experience for each user.

Twilio Segment captures and unifies user data across various platforms, while Contentstack Personalize uses this data to deliver customized content in real time. This integration allows the syncing of custom attributes, computed attributes, events, and audiences to the Personalize project.

## Contentstack Segment Destinations

In Twilio Segment, a Destination refers to a service where data collected from a Source (e.g., websites, apps) is sent for processing, analysis, or engagement purposes, in our case, Contentstack Personalize.

Contentstack provides two types of destinations in the Segment Destination [Catalog](https://segment.com/catalog/). Depending on your use case, you can use either or both:
- **Contentstack Web**: Supports syncing of events and attributes into Contentstack Personalize.
**When to Use Contentstack Web Destination**:

**Real-Time User Attributes**: Use **Contentstack Web** when you need to capture user attributes in real time based on user actions occurring in the browser. This allows for immediate updates and personalized content delivery.
- **Behavior Tracking**: Opt for this destination to track user behavior through events performed in the browser. This is essential for applications requiring live interaction and feedback.
- **Contentstack Cloud**: Supports syncing of audiences and computed traits into Contentstack Personalize.
**When to Use Contentstack Cloud Destination**:

**Syncing Computed Attributes**: Choose **Contentstack Cloud** when you need to sync user’s computed attributes for personalization without manually sending them from the browser. This is beneficial for managing complex user profiles.
- **Audience Syncing**: Use this destination to sync user audiences for personalization based on their events in the browser. This allows for more strategic audience segmentation and targeted content delivery without real-time interaction.

**Additional Resource**: To learn more about [Contentstack Web](https://segment.com/catalog/integrations/destination/contentstack-web/) and [Contentstack Cloud](https://segment.com/catalog/integrations/destination/actions-contentstack/), refer to the [Contentstack Web Destination](https://segment.com/docs/connections/destinations/catalog/contentstack-web/) and [Contentstack Cloud Destination](https://segment.com/docs/connections/destinations/catalog/actions-contentstack/) documentation.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/) that has Personalize enabled
- Access to the Contentstack Organization/Stack as the [Owner](../developers/organization/organization-roles.md#organization-owner)/[Admin](../developers/organization/organization-roles.md#organization-admin)
- Access to a project in Personalize
- [Twilio Segment Workspace](https://app.segment.com/login)

**Additional Resource**:
- To configure **Personalize** for your Organization, refer to the [Getting Started with Contentstack Personalize](./get-started-with-personalize-with-ab-test-end-to-end-guide.md) document.
- To configure **Segment** on your website, refer to the [Basic Segment Installation](https://segment.com/docs/getting-started/02-simple-install/) guide.

Let's follow this step-by-step guide to set up a **Contentstack Destination** within Segment to connect with Contentstack Personalize.

## Steps for Executions

- [Integrate Segment into your Website](#integrate-segment-into-your-website)
- [Configure the Contentstack Destination](#configure-the-contentstack-destination)
- [Create a Personalize Experience](#create-a-personalize-experience)

## Integrate Segment into your Website

To integrate **Segment** into your website, follow the detailed steps outlined in the [Basic Segment Installation](https://segment.com/docs/getting-started/02-simple-install/) guide. Then, follow the given high-level steps for configuration:

**Retrieve Source ID**: In Segment, get the **Source ID** of your source. Go to **Sources** from the left navigation panel and select the required source. Navigate to the **Settings** tab of the source, click **API Keys**, and you will see the **Source ID** listed there.![Source-ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt912a2e18ef1b1bad/66f46dbc7808db6d52ef9d69/Source-ID.png)
- **Add Segment to Website**: Use *analytics.js* or any other Segment SDK to add Segment to your website. When initializing the SDK, use the Source ID obtained in the previous step.
- **Send Events to Segment:** Use Segment’s [track](https://segment.com/docs/connections/spec/track/) or [identify](https://segment.com/docs/connections/spec/identify/) calls to send event data. These events will also sync with Contentstack Personalize.![Event-Trigger](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4af77e3d3850d639/66f6d7606e787d1374190c72/Event-Trigger.png)
- **Receive Personalized Content**: Based on your event payloads, personalized content will be delivered to users in real-time using the active variant assigned in Personalize.

## Configure the Contentstack Destination

To configure the Contentstack Destination within Twilio Segment, follow the steps given below:

**Create a Segment Source**: Ensure that a valid source of events is streaming into your Segment workspace, as discussed in the [Integration](#integrate-segment-into-your-website) steps above.
- **Install the Contentstack Destination**: Navigate to the Segment Destination **Catalog**, search for *Contentstack*, and install the desired destination: **Contentstack Web** or **Contentstack Cloud**. Refer to the [Contentstack Segment Destination](#contentstack-segment-destinations) section to choose the suitable destination.![Catalog-Contentstack-Destinations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f06f324d660ce1b/66f46dbbd2760a752faa7a9b/Catalog-Contentstack-Destinations.png)
- **Configure Mappings**: In the **Mappings** section of your Segment setup, follow the steps:**Add a New Mapping**: Click the **+ New Mapping** button to add a new mapping. You can map the values according to the Contentstack Destination installed. Refer to the [Contentstack Segment Destination](#contentstack-segment-destinations) documentation.
- **Configure Mapping Settings**: Ensure the payload is structured correctly and mapped as per your requirements.
- **Save the Mappings**: Click the **Save** button to save the mappings.
- **Configure Destination Settings**: In the **Settings** section of your Contentstack destination, provide your **Personalize project ID** (mandatory) and [**Personalize Edge API base URL**](../../api-docs/api-detail/personalize-edge-api.md#base-url) (mandatory), and save the settings.![Catalog-Contentstack-Web-Destination-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4ddb6a53246508a3/66f46dbbd9d2f8b147219fc6/Catalog-Contentstack-Web-Destination-Settings.png)
- **Test the Destination**: Use the **Event Tester** tool to verify the destination configuration:Send a payload to the Contentstack destination based on your Segment call type.
- Review the results to ensure the data is flowing properly into Contentstack Personalize.

## Create a Personalize Experience

In Contentstack Personalize, an Experience allows you to tailor content for different audiences, manage variants, and run A/B tests to enhance user engagement and conversions.

Contentstack Personalize supports 2 types of experiences:

[Segmented Experience](#steps-to-create-a-personalize-segmented-experience)
- [A/B Test Experience](#steps-to-create-a-personalize-a-b-test-experience)

### Steps to Create a Personalize Segmented Experience

- **Create a Personalize Project**: In your Contentstack organization, [create a new Personalize project](./create-personalize-project.md) and link your stack to give the project access to entries and the variants needed for personalized content.![Personalize-Project](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt33222c9ca166c7ff/66f46dc6818c8b6398c3de98/Personalize-Project.png)
- **Create Attributes**: Navigate to the **Attributes** sections in the Personalize project to create any custom attributes that need to be mapped from Segment. For more details, refer to the [Attributes](./about-attributes.md) documentation.![Personalize-Attributes](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf9f4f25e80556d7d/66f46dc6353506d881b721ed/Personalize-Attributes.png)

  **Note**: In the beta version, you will need to manually create these data points and ensure that they must match the data IDs within your Segment Workspace.![Segment-DataID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0576d354023c2a8b/66f6d760751cb0c6bd9bd08c/Segment-DataID.png)
- **Create Audiences**: Navigate to the **Audiences** sections in the Personalize project to create any audiences that need to be mapped from Segment. For more details, refer to the [Audiences](./about-audiences.md) documentation.![Personalize-Audiences](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3964d40ed5443a5c/66f46dc6833cff02b7ebcf2c/Personalize-Audiences.png)
- **Create Segmented Experiences**: Create a **Segmented** experience within your Personalize project for each audience.Define active **Variants** for each **Audience**, give them descriptive names, apply **Condition**, and ensure you note the **Short UIDs**, as they will be used during content creation.

For further information on creating **Segmented** experiences, refer to the [Create a Segmented Experience](./create-segmented-experience.md) document.
- **Activate the Experience**: Once configured, activate the **Segmented Experience** for use within the project.![Personalize-Experience-Segmented-Dashboard](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c08683b9fca0cb5/66f46dc65ff09a086d1d0076/Personalize-Experience-Segmented-Dashboard.png)

### Steps to Create a Personalize A/B Test Experience

- **Create a Personalize Project**: In your Contentstack organization, [create a new Personalize project](./create-personalize-project.md) and link your stack to give the project access to entries and the variants needed for personalized content.
- **Create Events**: In the **Events** section of your personalize project, create new events with unique keys. For more details, refer to the [Events](./about-events.md) documentation.![Personalize-Events](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b09d611247c5ead/66f46dc631612139b9b0bc92/Personalize-Events.png)

  **Note**: In the beta version, you will need to manually create these event values and ensure that they must match the event values within your Segment Workspace.![Segment-EventID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde66ebadcedf58fe/66f6d760339f2a554669c114/Segment-EventID.png)
- **Create A/B Test Experiences**: Create an **A/B Test** experience within your Personalize project for each audience.Define active **Variants** for each **Audience**, give them descriptive names, assign **Traffic Distribution** percentages for each one, and ensure you note the **Short UIDs**, as they will be used during content creation. Add all the events in **Metrics** that are needed for impressions and conversions, and then select the relevant audience(s) for your **Target Group**.

For further information on creating **A/B Test** experiences, refer to the [Create an A/B Test Experience](./create-ab-test-experience.md) document.
- **Activate the Experience**: Once configured, activate the **A/B Test Experience** for use within the project.![Personalize-Experience-ABTest-Dashboard](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1033dc5ddc6e8e8e/66f46dc6fb482cec35b4aaf9/Personalize-Experience-ABTest-Dashboard.png)

**Additional Resource**: Learn more about [Personalize](./about-personalize.md) documentation.

Once the setup is complete, all custom traits and audiences from Segment will be synced into the custom attributes of Contentstack Personalize. These attributes can then be leveraged in the creation of personalized experiences and variants, ensuring precise audience targeting and dynamic content delivery across your digital platforms.

## Common questions

### Is this Twilio Segment destination integration still supported?
The Twilio Segment destination integration with Personalize has been deprecated, and Contentstack recommends transitioning to [Data & Insights (Lytics)](/docs/data-and-insights#data-and-insights-lytics-overview) using the [Data Activation Layer (DAL)](/docs/data-and-insights#using-data-and-insights-lytics) approach.

### What is the difference between Contentstack Web and Contentstack Cloud destinations?
**Contentstack Web** supports syncing of events and attributes into Contentstack Personalize, while **Contentstack Cloud** supports syncing of audiences and computed traits into Contentstack Personalize.

### What settings are mandatory when configuring the Contentstack destination?
You must provide your **Personalize project ID** (mandatory) and [**Personalize Edge API base URL**](../../api-docs/api-detail/personalize-edge-api.md#base-url) (mandatory) in the destination **Settings**.

### What types of experiences can be created in Contentstack Personalize?
Contentstack Personalize supports 2 types of experiences: **Segmented Experience** and **A/B Test Experience**.

<!-- Filename: personalize-twilio-segment-destination-integration-with-personalize.md -->