---
title: "Pathfora Web Personalization"
description: "Deliver personalized on-site experiences using the Pathfora JavaScript SDK."
url: /lytics/pathfora
---

# Pathfora Web Personalization

## Pathfora Web Personalization

Deliver personalized on-site experiences using the Pathfora JavaScript SDK.

## Overview

Pathfora is Lytics' web personalization SDK. It generates JavaScript that you embed on your website to deliver targeted experiences -- modals, slide-outs, bars, forms, content gates, and content recommendations -- based on visitor segments. Pathfora integrates with the [Orchestration API](/docs/lytics/orchestration) to manage campaign structure and the [Decision Engine](/docs/lytics/decision-engine) to select the optimal experience for each visitor.

## How It Works

1.  Create campaigns and experiences in Lytics (via the UI or the [Orchestration API](/docs/lytics/orchestration))
2.  Configure variations with content, layout, and audience targeting
3.  Lytics generates a JavaScript SDK bundle containing all published campaigns
4.  Embed the SDK on your website
5.  The SDK evaluates visitor segments client-side and displays matching experiences

## Tactic Types

| Tactic | Widget Type | Use Case |
| --- | --- | --- |
| present\_message | Message | Announcements, notifications, promotions |
| target\_url | Message (clickable) | Call-to-action directing to a URL |
| capture\_leads | Form | Email capture, surveys, lead generation |
| SiteGate | Modal form | Gating content behind a form submission |
| recommend\_content | Message | Personalized content recommendations |

## Layout Options

Pathfora supports several layout types:

-   **Modal** -- Centered overlay dialog
-   **Slideout** -- Slides in from the side of the page
-   **Bar** -- Fixed bar at the top or bottom of the page
-   **Sticky Bar** -- Stays visible while scrolling
-   **Gate** -- Full-page blocking overlay (for site gates)

## Audience Targeting

Experiences are targeted using Lytics audience segments:

-   Each campaign or variation is assigned a target segment
-   The SDK checks the visitor's segment membership client-side
-   **Conversion segments** can be specified to exclude users who have already converted
-   **Personalization keys** provide an alternative to segments for dynamic targeting

### A/B Testing

Campaigns with multiple variations automatically set up A/B tests:

-   Variations are split evenly (e.g., 50/50 for two variations)
-   Each visitor consistently sees the same variation
-   Metrics are tracked per-variation for comparison

## Widget Configuration

Each widget/variation supports:

| Field | Description |
| --- | --- |
| headline | Primary heading text |
| msg | Body text content |
| image | Image URL |
| confirmAction | Button configuration (text, URL, callback) |
| cancelAction | Dismiss button configuration |
| closeAction | Close button behavior |
| formElements | Form fields: name, email, title, message, phone, company |
| colors | Theme colors (background, text, headline) |

### Display Conditions

Control when widgets appear:

-   **Date ranges**: Start and end dates for time-limited campaigns
-   **Impression limits**: Maximum displays per session or total
-   **URL matching**: Show on specific pages via referrer URL regex or collection matching

### Event Hooks

JavaScript callbacks for custom behavior:

-   onInit -- Widget initialized
-   onLoad -- Widget displayed
-   onSubmit -- Form submitted
-   onModalClose -- Widget dismissed

## Account Configuration

Account-level Pathfora settings control global behavior:

```
GET /program/settings
POST /program/settings
```

Settings include:

| Setting | Description |
| --- | --- |
| theme | Default color theme for all widgets |
| colors | Default color palette (background, text, headline hex values) |

## Integration with Google Analytics

Pathfora can send events to Google Analytics for widget interactions. This can be disabled per-account via the integration settings.

## Performance

-   JavaScript is minified for production use
-   SDK loads asynchronously on page load
-   All targeting logic executes client-side with no additional server requests
-   Candidate lists are cached server-side for fast delivery
