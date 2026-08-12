---
title: "Diagnosing CPU and Memory Exhaustion on Long-Running Launch Containers"
description: "Diagnosing CPU and Memory Exhaustion on Long-Running Launch Containers"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/15-application-performance-resource-management/01-diagnosing-cpu-and-memory-exhaustion-on-long-running-launch-containers
doc_type: faq
_cms_section_uid: cs952c8e2acdedb37b
_cms_faq_uid: csafebcecd64256a50
---

# Diagnosing CPU and Memory Exhaustion on Long-Running Launch Containers

A Launch-hosted application becomes unstable or experiences repeated downtime, with CPU and memory utilization climbing toward 100%. The instability may not have been visible previously because frequent redeployments were effectively resetting the application containers.

**Root Cause**

This is application-specific resource consumption behavior, not a platform-level fault. When redeployment frequency decreases—for example, after resolving an unrelated deployment issue, containers run for longer uninterrupted periods, exposing underlying memory leaks or unbounded resource growth that redeployments had been masking. The absence of caching on the site can also contribute to sustained high resource usage.

**Resolution**

1.  Review CPU and memory utilization graphs for the affected environment to confirm a gradual climb toward 100% over time rather than a sudden spike.
2.  As an immediate mitigation, increase the allocated CPU and memory for the affected environment (for example, from 1 vCPU/2 GiB to 2 vCPU/4 GiB) to provide headroom while a permanent fix is implemented.
3.  If utilization continues to climb even after the resource increase, configure scheduled force restarts (for example, hourly) as an interim mitigation to reset accumulated memory usage.
4.  Investigate the application code for memory leaks, unbounded caches, or repeated allocations that are not being garbage collected.
5.  Implement caching at the application or CDN layer to reduce the volume of requests that require full server-side processing, lowering sustained CPU and memory load.

The issue is resolved when CPU and memory utilization remain stable over extended periods without requiring scheduled restarts, and the application no longer experiences instability-related downtime.
