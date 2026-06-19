---
title: "[Marketplace guides and apps] - Audience Insights App Installation Guide"
description: Audience Insights App Installation Guide
url: https://www.contentstack.com/docs/marketplace/audience-insights
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - Audience Insights App Installation Guide

This page explains how to install and use the Audience Insights app in Contentstack, including where to access it (Full Page and Entry Sidebar) and what you can do with its key sections. It is intended for Contentstack Organization/Stack Owner/Admin users and developers who have Data & Insights (Lytics) enabled and want to view audience and content alignment insights inside their stack.

## Audience Insights App Installation Guide

The Audience Insights app connects Data & Insights (Lytics) with Contentstack to help you understand how your content aligns with user behavior and interests. It provides real-time insights into audience segments, content engagement, and behavior patterns to enable smarter personalization at scale.

Once installed, the app surfaces audience data directly in your stack. You can explore this data in two ways:
- On a **Full Page**, to dive deeper into user traits, topic clusters, and behavioral trends.
- In the **Entry Sidebar**, to view audience alignment while editing entries.

Use this app to make data-driven decisions and deliver content that resonates.

Learn how to leverage the Audience Insights app effectively in this quick overview video.

## Prerequisites
- [Data & Insights (Lytics) Account](https://app.lytics.com/login?aid=6584&table=user) connected to your Organization
- [Contentstack Account](https://www.contentstack.com/login/) with [Data & Insights (Lytics) enabled](https://docs.lytics.com/docs/create-data-activation-layer) for your Organization
- Access to the Contentstack Organization/Stack as the Owner/Admin

## Steps for Execution
- [Install the Audience Insights App within your Stack](#install-the-audience-insights-app-within-your-stack)
- [Use the Audience Insights app within your stack](#use-the-audience-insights-app-within-your-stack)

## Install the Audience Insights App within your Stack
To install the Audience Insights app, you must configure the **Data & Insights (Lytics)** in Contentstack. Once you successfully do this and create data connections, the app will be installed automatically.

**Additional Resource**: For more information on how to configure Data & Insights (Lytics), refer to the [Data & Insights (Lytics)](https://docs.lytics.com/docs/create-data-activation-layer) documentation.

## Use the Audience Insights App within your Stack
Once the app is installed, you can access it from both the Full Page and Entry Sidebar locations in your stack.

### Using Audience Insights as a Full Page Location App
To use the Audience Insights app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

Go to the stack dashboard. On the left-hand side primary navigation, you will find the **Audience Insights** app icon.**Note**: If you have enabled the **App Switcher**, the icon will be available at the top under the **Apps** section.
- Click the app icon to view the Audience Insights app within your CMS.
- The app consists of three sections:

#### Opportunity Explorer
It's a visualization tool that helps identify content topics with high or low impact based on audience behavior. It helps you quickly understand which content topics are resonating with your audience, and which ones may need attention.

It visualizes topics across four quadrants based on their urgency and impact. Lower-left topics may be less relevant right now, while upper-right topics highlight high-value opportunities to boost engagement.

You can act on these insights. Create tailored audience segments and deliver personalized experiences that reflect what your users care about most.

Let's discuss in detail:

**Y-axis (Prevalence)**: Shows how frequently a topic appears across your published content:Lower prevalence implies higher urgency to create more content.
- Higher prevalence implies lower urgency since the topic is already well covered.
- **X‑axis (Audience Value)**: Indicates how strongly each topic is predicted to resonate with your audience based on the selected model:**Lookalike Models** (likelihood of resembling a high‑value segment)
- **Behavioral Scores** (propensity to engage or convert)
- **Dimensions** (relevance by attributes or traits)

Higher scores indicate higher predicted impact.

**Additional Resource**: To learn more, refer to the Lytics [Behavioral Score](https://docs.lytics.com/docs/behavioral-scores-1) document.

Use the quadrants below to translate **Audience** Value (X-axis) and **Prevalence** (Y-axis) into clear content priorities:
- **Top Left** (Low Value, Low Urgency): This is the least important quadrant. It includes content that is abundant but not relevant to your valuable users.
- **Top Right** (High Value, Low Urgency): This contentOpportunity Explorer is engaging, but you already have plenty of it. Focus your efforts on content that is less prevalent.
- **Bottom Left** (Low Value, High Urgency): This content does not require much attention. It is limited in quantity and also not particularly relevant to your valuable users.
- **Bottom Right** (High Value, High Urgency): Content here is both high value and scarce, making it a prime opportunity to create more immediately.
- **Calculated Audience Size**: The size of each bubble reflects how many users are associated with that topic, larger bubbles mean larger audiences.
- **Topic Name**: The specific content topic being analyzed in the chart (e.g., sun). Click the **Topic** to view the details and create audiences.**Entries**: The number of content entries where this topic appears. (e.g., 0.30). A score or weight indicating topic relevance, likely tied to model-calculated value or urgency.
- **Topic appears in Audiences**: Shows how many audience segments currently include this topic.
- **Create Audience**: Allows you to build a new audience segment based on the selected topic by clicking the **Create Audience** button. Then, provide the **Audience Name** and click the** Confirm **button.The audience will be created in Data & Insights (Lytics).
- **Source (Standard Customer)**: Defines the base audience or data segment used to populate the chart.
- **Target (Premier Customer)**: The goal audience segment used for comparison or targeting strategy.
- **View Changes Over Time**: Lets you track how topic performance evolves over a selected date range.
- **Generate**: Click the **Generate** button to visualize Opportunity Explorer insights for the selected date range. This renders topic behavior and audience trends over time.You can select a date range, play and stop the timeline, and refresh it.

#### Content Map
Content Map visualizes how topics relate to one another based on user engagement. It helps identify core themes, topic clusters, and content gaps. Larger nodes indicate more traction, while connecting lines show shared associations. Use this map to refine strategy, personalize experiences, and prioritize content that aligns with audience interest.

Lets discuss in detail:

**Nodes**: Represents individual content topics. Larger nodes reflect higher user engagement or frequency (e.g., **Relaxation**, **Adventure**).
- **Lines/Connections**: Shows relationships between topics, based on co-occurrence or behavioral overlap.
- **Clusters**: Groups of tightly connected nodes indicating strong thematic alignment.
- **Article Tags**: Labels content types or categories tied to a topic (e.g., **Article:Culture**).
- **Show Labels**: Toggles to display or hide topic names on the map for better visual clarity.

#### Audience Explorer
A tool to help you understand what resonates with your users. It gives you a clear view of what your selected audience cares about most. It highlights the top content topics (or behaviors) your users are drawn to, ranked by engagement strength. This helps you understand what drives interest, so you can create more relevant, personalized experiences and refine your content strategy accordingly.

Lets discuss in detail:

**Choose an Audience**: Select a dropdown option or group of users defined by shared traits or activity levels (e.g., **Frequent Users**) to explore their content interests.
- **Audience Affinities**: Highlight the topics or themes your selected audience is most interested in. These affinities are ranked by relevance and strength of engagement, helping you understand what matters most to your users.Click anyone affinity to view the detailed insight:

When you select an affinity (e.g., **relaxation**), the right-side histogram shows how that interest is distributed across your audience.

**X-axis (Affinity Score: 0 to 1)**: Indicates how strongly each user in the segment is associated with the topic. This states **0** means **no interest** and **1** means **very strong interest**.
- **Y-axis (User Count)**: Number of users at each level of interest.
- **Stat Summary (mean, sd, min, max, n)**: It includes:**mean**: Average affinity score across users
- **sd**: Standard deviation (how much scores vary)
- **min/max**: Lowest and highest affinity values observed
- **n**: Number of users in the analysis

This breakdown shows whether interest in a topic is shared broadly across your audience or driven by a smaller group of highly engaged users, insights you can use to personalize campaigns, improve targeting, and inform content strategy.
- **Segment Filters**: Let you toggle between different behavioral and demographic audience types (e.g., Email Capture Status, Engagement).
- **Distribution Panel**: When a topic is selected, this panel displays how interest in that topic is spread across the audience (e.g., evenly or concentrated among a few users).

Use the app to turn behavioral data into actionable strategy, so every audience interaction is informed, personalized, and impactful.

### Using the Audience Insights App as an Entry Sidebar
To use the Audience Insights app as an Entry Sidebar, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps given below:
- Go to the stack dashboard and navigate to the **Entries** page. Open the entry and you will find the **Audience Insights** app icon in the right navigation panel.
- Click the app icon to view the Audience Insights app within your entry. To view the real-time analysis, click the **Analyze** button.
- You can view which topics your entry aligns with, and how well it connects with your target audiences. These insights help content teams turn every entry into a strategic, data-driven opportunity.**Topics**: This section shows the top themes detected in the analyzed content. Each topic (e.g., **Maldives**, **Beauty**, **Life**) reflects what the content is about, helping you understand its focus and contextual relevance. The length of each bar indicates how strongly the topic is represented.
- **Audience Alignment**: This section displays which audience segments are most aligned with the content. Segments like **Frequent Users**, **At Risk Users**, or **Multi Session Visitors** show how different groups connect with the page. Higher alignment suggests stronger relevance or engagement potential with that group.
- You can perform the analysis again by clicking the **Re-analyze** button.

## Common questions

### How is the Audience Insights app installed?
To install the Audience Insights app, you must configure the **Data & Insights (Lytics)** in Contentstack. Once you successfully do this and create data connections, the app will be installed automatically.

### Where can I access the Audience Insights app in Contentstack?
Once the app is installed, you can access it from both the Full Page and Entry Sidebar locations in your stack.

### What are the three sections available in the Full Page app?
The app consists of three sections: **Opportunity Explorer**, **Content Map**, and **Audience Explorer**.

### What do I need before using the app?
You need a [Data & Insights (Lytics) Account](https://app.lytics.com/login?aid=6584&table=user) connected to your Organization, a [Contentstack Account](https://www.contentstack.com/login/) with [Data & Insights (Lytics) enabled](https://docs.lytics.com/docs/create-data-activation-layer) for your Organization, and access to the Contentstack Organization/Stack as the Owner/Admin.

<!-- filename: marketplace-guides-and-apps-audience-insights-app-installation-guide.md -->