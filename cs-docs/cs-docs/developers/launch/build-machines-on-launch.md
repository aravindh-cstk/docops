---
title: "[Contentstack Launch] - Build Machines on Launch"
description: Build Machines determine the compute resources (CPU, memory, and disk) allocated to your project during the build process on Launch.
url: https://www.contentstack.com/docs/launch/build-machines-on-launch
product: Contentstack Launch
doc_type: developer-guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Build Machines on Launch

This page explains how Build Machines work in Contentstack Launch, including available machine tiers, default tiers by plan, and build execution limits. It is intended for developers and teams configuring build performance and capacity, and should be used when selecting or upgrading build resources or planning build concurrency and quotas.

## Build Machines on Launch

Build Machines determine the compute resources (CPU, memory, and disk) allocated to your project during the build process on Launch. Choosing the right tier ensures faster builds, better reliability, and optimal performance for your workloads.

## Build Machine Specifications

| Build Machine Type | Number of vCPUs | Memory (GB) | Disk Size (GB) |
|---|---:|---:|---:|
| L1 | 2 | 4 | 6 |
| L2 | 4 | 8 | 12 |
| L3 | 6 | 12 | 18 |
| L4 | 8 | 16 | 24 |
| L5 | 12 | 24 | 36 |

## Default Tiers by Plan

**Non-Enterprise Plans**
- Starts with **L1**.
- Suitable for small applications and lightweight builds.
- Customers can upgrade to higher tiers as needed.

**Enterprise Plans**
- Starts with **L2 **by default.
- Designed for larger applications and faster build performance.
- Customers can upgrade to higher tiers based on workload requirements. Contact [Support](mailto:support@contentstack.com) for assistance.

## Build Execution Limits

### Concurrent Builds

Launch does **not impose a fixed limit on concurrent builds**.

You can run multiple builds simultaneously as long as your available monthly [build hours quota](/docs/analytics/analytics-for-launch) has not been exhausted.

### Maximum Build Duration

- A single build can run for a maximum of **60 minutes**.
- Builds exceeding this duration are automatically terminated.

### Build Hours

- Build usage is measured using **build hours**, which represent the total time your builds consume across all projects.
- Build hour usage is based on the runtime duration of each build.
- Concurrent builds consume build hours in parallel.
- Once the allocated build hours limit is reached, new builds do not start until additional hours are available.

**Note:** Build hour limits can be increased depending on your plan.

## Common questions

### How do I choose the right Build Machine tier?
Choose a tier based on the CPU, memory, and disk requirements of your builds, balancing faster builds and reliability with your workload needs.

### Is there a limit to how many builds I can run at the same time?
Launch does **not impose a fixed limit on concurrent builds**, but you can only run builds while your monthly build hours quota has not been exhausted.

### What happens if a build runs longer than 60 minutes?
A single build can run for a maximum of **60 minutes**; builds exceeding this duration are automatically terminated.

### What happens when I reach my build hours limit?
Once the allocated build hours limit is reached, new builds do not start until additional hours are available.

Filename: contentstack-launch-build-machines-on-launch.md