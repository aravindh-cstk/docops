---
title: "CDI and CDP Implementation Strategy"
description: "This guide streamlines the integration of Customer Data Infrastructure (CDI) and Customer Data Platform (CDP) into your marketing technology framework…"
url: /lytics/strategy-for-implementing-a-cdi-and-a-cdp
uid: blte4382765c8928105
---

# CDI and CDP Implementation Strategy

## CDI and CDP Implementation Strategy

### Objective

This guide streamlines the integration of Customer Data Infrastructure (CDI) and Customer Data Platform (CDP) into your marketing technology framework. Given the overlapping functionalities of both tools, distinguishing their roles in marketing activation is crucial. By clearly assigning responsibilities and adhering to best practices for each platform, businesses can improve customer profiling, segmentation, and activation efforts, all while eliminating data redundancies and streamlining processes.

### Implementation Overview

#### Roles and Responsibilities

Give clear roles and responsibilities to each tool in order to limit duplicative processes.

**CDI Responsibilities:** Focus on data collection, routing, and transformation. Establish how it will handle website tagging and funnel web-based data appropriately.

**CDP Responsibilities (Lytics):** Concentrate on activation, segmentation, and customer interactions. Define the specific data that should be directly ingested into the CDP.

#### Best Practices

**Simultaneous Implementation:** Understand the end-state requirements for your data in the CDP to guide the setup of your CDI, avoiding redundant reconfiguration.

**Feature Allocation:** Assign primary tasks (e.g., identity resolution, segmentation) to one platform to reduce complexity and maintenance challenges.

#### Key Implementation Steps

**Define Tool Roles:** Clearly outline why each tool was chosen based on its strengths and intended use in your martech strategy.

**Data Flow and Schema:** Align data types and formats with primary activation use cases, ensuring CDI processes non-marketing data and CDP focuses on customer engagement data.

**Identity Resolution:** Develop a joint strategy for both platforms to unify customer profiles promptly, ensuring a seamless customer journey across all touchpoints.

**Activation Channel Allocation:** Specify which platform will manage client-side and server-side activations to prevent overlapping functionalities and increased costs.

#### Specific Considerations

**Client-Side vs. Server-Side:** Clearly distinguish between the two, utilizing each for its strengths in anonymous and known activations.

**Unique Integrations:** Treat similar functionalities, like JavaScript tags, as distinct integrations based on their roles within each platform.

### Ongoing Maintenance

Regularly update your integration strategy within the Martech Center of Excellence to accommodate new tools and data sources, ensuring consistent and efficient use of your CDI and CDP platforms.

This involves:

1.  Integrating new data sources as per established guidelines.
2.  Continuously evaluating and adapting to new features to solve existing challenges.
3.  Monitor the current solution to make sure roles should not be modified.

_**By following this focused approach, businesses can efficiently leverage the strengths of CDI and CDP platforms, ensuring a cohesive and powerful marketing technology ecosystem.**_
