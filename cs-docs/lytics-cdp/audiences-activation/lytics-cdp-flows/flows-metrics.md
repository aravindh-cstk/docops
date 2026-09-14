---
title: "Metrics"
description: "Understanding how your flows are performing is crucial for optimization and success. This guide covers all available metrics, monitoring capabilities, and…"
url: /lytics/flows-metrics
---

# Metrics

## Metrics

Understanding how your flows are performing is crucial for optimization and success. This guide covers all available metrics, monitoring capabilities, and how to interpret flow performance data.

### Overview

Flows provide comprehensive metrics at multiple levels to help you understand user behavior and flow performance.

![52cbde81866e5f11b1d83d8a5f6ebcd3d5bc66be61a71313cf1cc9747f9f1342-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama68ebd2d655e9f13/197441ce73975fe46af87e71/52cbde81866e5f11b1d83d8a5f6ebcd3d5bc66be61a71313cf1cc9747f9f1342-image.png)

#### Metrics Update Frequency

**Important Note:** All flow metrics are calculated once every 24 hours, not in real-time. This means:

-   You won't see instant changes when testing
-   Metrics reflect data from the previous day
-   Allow 24 hours for accurate reporting after flow changes

### Canvas-Level Metrics

The main flow canvas provides high-level performance indicators for your entire flow.

![3ce87f83c390fd0fa0ecc05cc11152052aecdc9de1ba6b86bdbc5302c30308a4-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5419b45d4fadc785/792e1029b821da69a6e2e062/3ce87f83c390fd0fa0ecc05cc11152052aecdc9de1ba6b86bdbc5302c30308a4-image.png)

#### Key Canvas Metrics

**Total Entries:**

-   Total number of users who have ever entered this flow
-   Cumulative count across all time periods

**Total Completed:**

-   Number of users who have reached the end of the flow
-   Users who progressed through all configured steps
-   Indicates successful flow completion

**Currently In Flow:**

-   Number of users actively progressing through steps
-   Users currently in wait states or pending actions

#### Canvas Metrics Display

Access canvas metrics by:

1.  Opening the metrics panel at the top of the canvas
2.  Expanding the metrics section to see detailed breakdown
3.  Viewing metrics snapshot on individual step cards

### Detailed Metrics View

Each step offers a comprehensive metrics breakdown with historical data and trends.

![cb8a61259f56006d145e2c64ce6c3f2c003ba3f8fa4d7e8f395c2d6cd4f45a23-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc51b5666819986e7/bb8219f8a11ab592233c46e7/cb8a61259f56006d145e2c64ce6c3f2c003ba3f8fa4d7e8f395c2d6cd4f45a23-image.png)

#### Historical Data

**Time Period Selection:**

-   Daily breakdown: See activity by specific days
-   Weekly view: Understand weekly patterns

### Profile-Level Flow Tracking

Individual user profiles show detailed flow state information, enabling personalized experiences and troubleshooting.

![e980d67492c726f610e922429ffe709dcf724e81f93a5376b2f7e3e40dbcaa90-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am28783cf29bc7ca72/787bc7a32091ef584a5b079d/e980d67492c726f610e922429ffe709dcf724e81f93a5376b2f7e3e40dbcaa90-image.png)

![534f405f9ea97de5737d115e8edce48f14795e8cd6efe0ffa3e66871644e0665-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2a700aecf6e019b8/79cf436a0e83fe8a9bcee9a8/534f405f9ea97de5737d115e8edce48f14795e8cd6efe0ffa3e66871644e0665-image.png)

#### Flow State on Profiles

**Flow Steps Array:**

-   Shows current position in all active flows
-   Includes personalization keys from wait steps
-   Updates in real-time as users progress
-   Available through JavaScript and APIs

### Next Steps

With a solid understanding of metrics:

1.  Explore [Templates](/docs/lytics/flows-templates) for proven flow patterns
