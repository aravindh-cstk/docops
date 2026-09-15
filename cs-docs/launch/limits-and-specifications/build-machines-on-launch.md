---
title: "Build Machines on Launch"
description: "Compare Launch Build Machine tiers (L1–L5), default plans, build hours, limits, and execution rules to optimize performance and resource usage."
url: /launch/build-machines-on-launch
uid: blte1dc6f5a83500827
---

# Build Machines on Launch

## Build Machines on Launch

Build Machines determine the compute resources (CPU, memory, and disk) allocated to your project during the build process on Launch. Choosing the right tier ensures faster builds, better reliability, and optimal performance for your workloads.

### Build Machine Specifications

| Build Machine Type | Number of vCPUs | Memory (GB) | Disk Size (GB) |
| --- | --- | --- | --- |
| L1 | 2 | 4 | 6 |
| L2 | 4 | 8 | 12 |
| L3 | 6 | 12 | 18 |
| L4 | 8 | 16 | 24 |
| L5 | 12 | 24 | 36 |

### Default Tiers by Plan

**Non-Enterprise Plans**

-   Starts with **L1**.
-   Suitable for small applications and lightweight builds.
-   Customers can upgrade to higher tiers as needed.

**Enterprise Plans**

-   Starts with **L2** by default.
-   Designed for larger applications and faster build performance.
-   Customers can upgrade to higher tiers based on workload requirements. Contact [Support](mailto:support@contentstack.com) for assistance.

## Build Execution Limits

### Concurrent Builds

Launch does **not impose a fixed limit on concurrent builds**.

You can run multiple builds simultaneously as long as your available monthly [build hours quota](/docs/analytics/analytics-for-launch) has not been exhausted.

### Maximum Build Duration

-   A single build can run for a maximum of **60 minutes**.
-   Builds exceeding this duration are automatically terminated.

### Build Hours

-   Build usage is measured using **build hours**, which represent the total time your builds consume across all projects.
-   Build hour usage is based on the runtime duration of each build.
-   Concurrent builds consume build hours in parallel.
-   Once the allocated build hours limit is reached, new builds do not start until additional hours are available.

**Note:** Build hour limits can be increased depending on your plan.
