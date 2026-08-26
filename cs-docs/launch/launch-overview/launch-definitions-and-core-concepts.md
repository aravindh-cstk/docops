---
title: "Launch Definitions and Core Concepts"
description: "Definitions of core Launch concepts, including build time, compute time, and bandwidth, that determine usage and cost across the CDN and origin."
url: /launch/launch-definitions-and-core-concepts
uid: blta11a91e54b0830c5
---

# Launch Definitions and Core Concepts

## Launch Definitions and Core Concepts

This page defines the core concepts that determine how usage is measured on Contentstack Launch. It is intended for teams evaluating Launch who want to understand how deployments, compute, and bandwidth work before they plan a project.

Use it to understand what each concept means and how usage is counted. For the resource allocations that apply to your plan, refer to your Services Description or contact your Contentstack representative.

## How Launch Serves a Website

When a visitor requests a page on a Launch-hosted website, the request goes to the Content Delivery Network (CDN) first. The CDN is a global network of servers that keeps copies of your content close to your visitors.

If the CDN already holds a valid cached copy of the requested content, it serves that copy directly. If not, it fetches the content from the origin ��� where your application runs — and may cache the response depending on the caching headers returned.

The cache serves most traffic to a well-configured site, so visitors do not face geographic latency and get instant responses from the nearest CDN POP to their location, thus reducing the load on the origin and providing a much better experience.

## Compute Time

Compute time is the processing time your project uses on Launch. It is measured in GB-Hours, which represents the amount of memory used multiplied by the time it runs.

There are two types of compute time:

-   **Build time:** The time it takes to compile your application. When you deploy an environment, Launch builds your site before it goes live. A site that takes six minutes to build uses six minutes of build time. Build complexity and application size affect how long a build takes.
-   **Server execution time:** The time your server spends processing a request or event. For example, if your server retrieves data from a database and returns a response in 0.03 seconds, it uses 0.03 seconds of server execution time.

Both types draw from the same compute allocation.

**Note:** Build Machines determine the CPU, memory, and disk allocated to your project during a build. For details on machine tiers and build duration, refer to the [Build Machines on Launch](/docs/launch/build-machines-on-launch) documentation.

## Bandwidth

Bandwidth on Launch measures the content transferred from your origin into the CDN for content that is not already cached.

When the CDN serves a cached request, that transfer does not count toward your Launch bandwidth usage. When the CDN fetches content from the origin because the content is not cached, that transfer counts toward your Launch bandwidth.

This means caching has a direct effect on bandwidth usage. The more requests served from the cache, the less bandwidth your project consumes.

**Note:** Launch bandwidth is separate from the overall bandwidth allocated to your Contentstack organization. They are measured independently.

## Environments

An [environment](/docs/launch/environments) is an independently deployed and hosted version of your project, such as development, staging, or production. It is linked to a Git branch or a custom file upload, served on its own unique URL, and can be configured and updated independently. Each environment can have multiple deployments, but only one is live at any given time.

## Custom Domains

A [custom domain](/docs/launch/custom-domain) is a domain you own and connect to a Launch environment so your site is served from your own web address instead of the default Launch domain (for example, yoursite.com or www.yoursite.com instead of yoursite.contentstackapps.com). You can map domains to specific environments, and custom domains support both apex domains (for example, yoursite.com) and subdomains (for example, www.yoursite.com or staging.yoursite.com).

## Edge Functions

Edge Functions let you run custom JavaScript at the CDN edge, close to your users, before a request reaches your origin server. Refer to the [Edge Functions](/docs/launch/edge-functions) documentation for details.

## Caching

Caching stores copies of your content on CDN servers close to your users, reducing load times and origin server load. Launch caches content based on the Cache-Control headers your application returns. Refer to the [Caching Guide for Contentstack Launch](/docs/launch/caching-guide-for-contentstack-launch) for details.

## Build Machines

Build Machines determine the CPU, memory, and disk allocated to your project during the build process. Refer to the [Build Machines on Launch](/docs/launch/build-machines-on-launch) documentation for tier specifications and build execution limits.

## Server Machines

Server Machines determine the CPU and memory allocated to your functions at runtime. Launch offers three tiers (L1 default, L2, and L3) to match your workload requirements. Refer to the [Server Machines on Launch](/docs/launch/server-machines-on-launch) documentation for tier specifications.

## Log Targets

Log Targets let you forward runtime logs from your Launch environments to third-party monitoring services such as Datadog, New Relic, or Honeycomb. Refer to the [Log Targets](/docs/launch/log-targets) documentation for setup details.

## Add-ons

Add-ons are additional resources you can purchase to increase your allocations beyond what your plan includes. They let you scale capacity as your usage grows.
