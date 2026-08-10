---
title: "Cloud Regions and Hyperscalers"
description: "Learn how Contentstack uses cloud regions and hyperscalers, how regional data boundaries work, and which services operate globally for performance."
url: /headless-cms/cloud-regions-and-hyperscalers
---

# Cloud Regions and Hyperscalers

## Cloud Regions and Hyperscalers

This guide explains how Contentstack is deployed across cloud providers and regions, and how regional boundaries apply to your organization's data. It covers:

-   Which hyperscalers and regions Contentstack operates in.
-   Which services operate globally for performance and which data remains within your organization's assigned region.

## Architecture Diagrams

-   ### Hyperscalers and Regions
    
    Contentstack currently operates across seven regions on three hyperscalers. Each hyperscaler and region combination is a separate, isolated deployment rather than a logical partition of shared infrastructure.
    
    The regions available to your organization depend on the selected hyperscaler. Not every hyperscaler supports the same regional footprint.
    
    ![Hyperscalers and Regions](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amb2c0506febc2f683/42a0d4ceb9fa9d7e2d3bcec9/Hyperscalers_and_Regions.png?locale=en-us)
-   ### Inside a Region
    
    The same deployment model is used independently in every Contentstack region.
    
    This diagram illustrates the regional boundary, showing which services operate within the region and which services operate globally to optimize request routing and performance.
    
    ![Regional Cloud Boundary](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am817b12419dcb3a9c/546d615310f7b1cfd969e684/Regional_Cloud_Boundary.png?locale=en-us)

## Architecture Overview

Every Contentstack organization is created in one region on one hyperscaler. The assigned region becomes the organization's home region and remains unchanged throughout the lifetime of the organization.

Management operations, including content authoring, configuration changes, deployment triggers, and Management API requests, are processed within the organization's home region. These operations are not processed by other regional deployments.

This is why administrators and management services connect directly to the regional deployment shown in the architecture diagram.

Content delivery follows a different request path.

Requests from websites, applications, and end users are first routed through Contentstack's global CDN and edge network. Cached responses are served from points of presence (POPs) close to the requesting user whenever possible to reduce latency. Supported services that perform edge processing also execute at these global edge locations.

When a request requires organization data, it is routed to the organization's home region. Although the CDN and edge network operate globally, the organization's content and management data remain within the assigned regional deployment.

The same regional boundary applies across Contentstack services. Global edge services improve performance and request routing, but they do not change where organization data is stored.

An organization's content, assets, configuration, and metadata remain within its assigned region. Data is never distributed across multiple regions, and one regional deployment is never used as a fallback or disaster recovery region for another. Each region operates independently.

## What Crosses a Region Boundary

The following table summarizes which services operate globally and which remain within an organization's assigned region.

| **Operates Globally** | **Remains in the Home Region** |
| --- | --- |
| Cached responses delivered through the global CDN and edge network. This performance layer does not create durable copies of organization data. | Content, assets, and configuration data remain within the assigned region and are never stored across multiple regions. |
| Edge processing performed at global points of presence (POPs) for supported services. | Management API requests are always processed within the organization's assigned region. |
| A small number of asset endpoints served from fixed global locations, regardless of organization region. | Metadata and audit logs remain within the assigned regional deployment. |

## Key Architecture Principles

The following principles apply to every Contentstack deployment:

-   **Single-region deployment:** Every Contentstack organization is created in one region on one hyperscaler. The assigned region is permanent and cannot be changed after the organization is created.
-   **Regional data residency:** Content, assets, configuration, and metadata remain within the organization's assigned region. Organization data cannot be distributed across multiple regions.
-   **Independent regional deployments:** Each region operates independently. One region is never used as a fallback or disaster recovery region for another.
-   **Regional data isolation:** Data stored in one region is not accessible from another regional deployment.

**Additional Resources**

-   [About Regions](/docs/administration/about-regions): Full list of supported regions and how region selection works for a new organization.
-   [Data Storage](/docs/administration/data-storage): Where organization data physically resides for each supported region.
-   [Content Delivery API](/docs/developers/apis/content-delivery-api): How the CDN-backed delivery path serves published content.
-   [Content Management API](/docs/developers/apis/content-management-api): How authoring and configuration operations reach an organization's home region.
