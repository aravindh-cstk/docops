---
title: "About Lytics"
description: "Understand what the Lytics App is, how it relates to the Lytics platform, and how it fits into the Contentstack product suite. "
url: /lytics/about-lytics
---

# About Lytics

## About Lytics

[**Lytics**](https://docs.lytics.com/) is Contentstack's built-in customer data platform. It collects behavioral data, builds real-time user profiles and audiences, and activates that data across your digital properties, all from a project you create and manage inside Contentstack. You can access it via the **App Switcher** in your Contentstack organization.

It provides project-level management of the following:

-   **Data collection:** Collect behavioral data via the JSTag SDK installed on your front end.
-   **Audience intelligence:** Build user profiles and segments based on real-time visitor behavior.
-   **Product connections:** Link CMS stacks, Launch projects, and Personalize projects for automatic audience data flow.

From your project dashboard, click **Manage Lytics** to jump straight into the full Lytics workspace, same login, one click, no separate setup, for deeper work like building audiences or inspecting profiles.

## Where Lytics CDP Fits in Contentstack

| Where you are | What you do |
| --- | --- |
| Contentstack (project setup) | Create your project, install JSTag, connect CMS stacks, Launch, and Personalize projects, and manage collaborator access |
| Lytics workspace (one click via **Manage Lytics**) | Build audiences, inspect profiles, and configure the data pipeline |
| Contentstack CMS | Content connected to Lytics topics and audience affinities |
| Contentstack Launch | Front end where JSTag runs and collects visitor behavior |
| Contentstack Personalize | Receives Lytics audiences for variant targeting and A/B tests |

## Core Concepts

**Project:** The top-level container for one customer data initiative. Inside the Lytics workspace, a project is called an **account,** the two terms refer to the same underlying resource. Each project has a name, domain, and set of connected Contentstack resources.

**Connection:** A link between a Lytics project and a CMS stack, Launch project, or Personalize project. Connections enable automatic data flow between systems.

**Collaborator:** A user who has access to a specific Lytics project. Access is determined by the user's Contentstack organization role, which is mapped automatically to a corresponding role in Lytics. Roles are managed through Contentstack and cannot be configured independently. Refer to the Access Management documentation for details on organization roles and how they map to Lytics access.

**JSTag:** The Lytics JavaScript SDK. Installed on your front end, it sends visitor events into your project's data stream, enabling profile building and audience segmentation.

> **Tip** If your site runs on Contentstack Launch, you can enable JSTag via a toggle in Launch Environments settings rather than installing it manually. Refer to the JSTag Installation documentation for both methods.

**Dashboard:** Your project's home screen. It surfaces live event counts, profile counts, and audience counts, and includes a **Manage Lytics** button that opens the full workspace in one click.

## Key Capabilities

Lytics CDP connects behavioral data collection with content delivery across your Contentstack products. It provides the following capabilities:

-   **Real-time personalization**: Uses live visitor behavior and audience membership to determine which content variant a visitor receives in Personalize.
-   **Unified data flow**: Connects CMS entries, behavioral event data collected by JSTag, and personalization targeting in a single configured pipeline.
-   **Multichannel data collection**: JSTag collects visitor behavior across web, mobile, and other digital touchpoints and feeds it into a single project stream.
-   **Audience activation without custom infrastructure**: Audiences you build are made available to Personalize through a configured connection, without requiring custom middleware or data pipelines.

## Next Steps

Now that you understand what Lytics CDP is and how it fits into Contentstack, you can begin setting it up:

-   Refer to the [JSTag Installation documentation](/docs/lytics/install-lytics-jstag-sdk) to install JSTag on your front end or enable it via Launch.
-   Refer to the [Manage a Lytics CDP Project documentation](/docs/lytics/manage-a-lytics-project) to manage your project.
