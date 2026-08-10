---
title: "Migrating a Legacy Website to Contentstack (Progressive Headless)"
description: "Learn how to migrate a legacy website to Contentstack using a progressive headless approach with incremental routing, Contentstack Launch, and safe rollbacks."
url: /headless-cms/migrating-a-legacy-website-to-contentstack
---

# Migrating a Legacy Website to Contentstack (Progressive Headless)

## Migrating a Legacy Website to Contentstack (Progressive Headless)

Migrating a website to a modern digital experience platform (DXP) does not have to be an all-or-nothing process. With a Progressive Headless approach, you can migrate your website one page or route at a time while continuing to serve the remaining traffic from your existing platform.

During migration, both backends run in parallel while ownership of individual routes gradually shifts from the legacy platform to Contentstack. You can continue accessing the same website without interruption, and each migrated route can be validated independently before proceeding to the next.

This approach works with legacy platforms such as WordPress, Drupal, Adobe Experience Manager (AEM), Sitecore, or custom-built applications. Once every route has been migrated, the legacy platform can be decommissioned, leaving a standard Contentstack implementation powered by Contentstack CMS and Automate, and hosted on Launch.

This guide explains the migration architecture, routing strategies, and implementation components required for a Progressive Headless migration. For deployment configuration, Git integration, preview environments, and hosting details, refer to [Simple Website with Contentstack Launch](/docs/headless-cms/simple-website-with-contentstack-launch).

## Prerequisites

Before you begin, ensure the following requirements are met:

-   [Contentstack account](https://www.contentstack.com/login)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions (to update routing rules on your CDN or edge platform)
-   A Git provider account ([GitHub](https://github.com), [GitLab](https://gitlab.com), or [Bitbucket](https://bitbucket.org))
-   [Contentstack Launch](/docs/launch/about-launch) enabled for your organization
-   An application codebase built with a modern framework (for example, [Next.js](https://nextjs.org), [React](https://react.dev), or [Vue](https://vuejs.org))
-   Access to a [Delivery Token](/docs/headless-cms/about-delivery-tokens) and familiarity with [Environment Variables](/docs/launch/environment-variables) ([CDA](/docs/developers/apis/content-delivery-api)/[CPA](/docs/headless-cms/preview-api))
-   An existing website running behind a CDN or reverse proxy
-   Access to migrate content from your existing CMS
-   Access to [Contentstack Automate](/docs/agent-os/what-is-an-automation)

## Why Migrate Route by Route?

A Progressive Headless migration replaces the traditional "big bang" migration with an incremental approach. Instead of replacing the entire website during a single release, individual routes are migrated independently while both platforms continue operating together.

This approach offers several advantages:

-   **No global cutover date:** Each route follows its own migration timeline. A delayed homepage migration does not prevent lower-risk routes, such as /about or /contact, from being migrated first.
-   **Independent rollback:** Rollback occurs at the routing layer rather than within the application. If a migrated route requires additional changes, update the routing rule to direct traffic back to the legacy platform without redeploying the frontend or restoring content.
-   **Incremental modernization:** New routes immediately benefit from modern frontend frameworks, Launch hosting, and Contentstack content management while the remaining website continues operating on the existing platform.
-   **Clear migration endpoint:** As additional routes migrate, the legacy platform serves progressively fewer requests. After the final route has been migrated, remove the routing fallback and retire the legacy infrastructure.

During migration, both platforms remain operational. The routing layer becomes the component responsible for directing requests to the appropriate backend. Establishing this routing layer before migrating any content ensures that traffic can be redirected safely throughout the migration process.

## Migration Architecture

A Progressive Headless migration moves through three architectural stages.

1.  ### Before Migration
    
    Before migration begins, all website traffic flows through the existing platform. The legacy CDN forwards every request to the legacy origin, which continues serving all content and pages.
    
    Contentstack is not yet part of the request flow.
    
    #### Architecture Diagram
    
    ![Legacy Architecture](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amcfe3c0d23fa5b9d3/10e0777bb803cbb6c72d1784/Legacy_Architecture.png?locale=en-us)
2.  ### During Migration
    
    During migration, both platforms operate simultaneously.
    
    The legacy CDN continues serving as the public entry point for the website. Based on routing rules, requests for migrated routes are forwarded to Contentstack Launch, while all remaining routes continue to be served by the legacy platform.
    
    Launch acts as the origin for migrated routes only. Contentstack Automate invalidates Launch caches whenever migrated content is published or unpublished, ensuring visitors receive the latest content without affecting the legacy platform.
    
    At this stage:
    
    -   Migrated routes are served from Contentstack.
    -   Unmigrated routes continue to be served from the legacy platform.
    -   Visitors experience a single, uninterrupted website.
    -   Individual routes can be migrated and validated independently.
    
    #### Architecture Diagram
    
    ![Progressive Architecture](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am9cb9322cd7c8d982/53effb49ce1c900e9b9bf0db/Progressive_Architecture.png?locale=en-us)
3.  ### After Migration
    
    After all routes have been migrated, the legacy platform is removed from the request path.
    
    Launch becomes the primary hosting platform for the website, while Contentstack CMS becomes the single source of content. The routing fallback to the legacy platform is removed, resulting in a simplified architecture based entirely on Contentstack services.
    
    The final architecture aligns with the [Simple Website with Contentstack Launch](/docs/headless-cms/simple-website-with-contentstack-launch#architecture-diagram) implementation.
    
    #### Architecture Diagram
    
    ![Simplified Architecture](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ama95d504f7c7ab1a3/87363bcb15abe984738f9bc2/Simplified_Architecture.png?locale=en-us)

### Relationship to the Simple Website Architecture

Progressive Headless is designed as a migration strategy rather than a separate deployment model.

During migration, the routing layer directs requests between the legacy platform and Launch while both systems operate simultaneously. Once migration is complete, the routing fallback is removed, and the implementation becomes functionally identical to the [Simple Website with Contentstack Launch](/docs/headless-cms/simple-website-with-contentstack-launch) architecture.

The implementation details for Git integration, deployment pipelines, preview environments, Launch configuration, and CDN hosting remain the same as those described in the Simple Website architecture guide.

## The Implementation Stack

A Progressive Headless migration consists of five architectural layers that work together throughout the migration lifecycle. Each layer has a distinct responsibility, allowing the legacy platform and Contentstack to operate simultaneously while traffic is progressively shifted to the new frontend.

1.  ### Routing Layer
    
    The routing layer is the core of a Progressive Headless migration. It receives incoming requests and determines which backend should serve each route based on the request path.
    
    Two routing patterns are supported. The recommended approach depends on your existing infrastructure and operational requirements.
    
    -   #### Existing CDN as the Router (Recommended)
        
        In this approach, the existing CDN, such as Fastly, Cloudflare, Akamai, or another edge platform, remains the public entry point for the website throughout the migration.
        
        The CDN evaluates each request using path-based routing rules.
        
        -   Requests for migrated routes are forwarded to Launch.
        -   Requests for unmigrated routes continue to the legacy origin.
        -   Visitors continue accessing the website through the existing CDN.
        
        Launch acts only as the origin for migrated routes and does not replace the existing CDN during migration.
        
        This approach minimizes operational changes because:
        
        -   Existing caching behavior remains unchanged for unmigrated routes.
        -   Existing WAF policies and bot protection continue protecting the website.
        -   Existing SSL certificates, redirects, and edge configuration remain in place.
        -   The legacy origin remains protected behind the existing CDN.
        -   Only migrated routes begin using Launch.
        
        As additional routes migrate, the routing table gradually expands until every request is directed to Launch.
        
        This is the recommended approach for most production migrations because it introduces the fewest infrastructure changes while the majority of traffic continues to be served by the legacy platform.
        
    -   #### Launch as the Router
        
        Alternatively, Launch can become the public entry point for the website.
        
        In this model, Launch receives every incoming request and determines where traffic should be routed.
        
        -   Migrated routes are rendered directly by Launch.
        -   Unmigrated routes are proxied back to the existing CDN.
        -   The existing CDN continues protecting the legacy origin.
        
        The legacy origin should **not** be exposed directly to Launch. Instead, unmigrated traffic should always pass through the existing CDN to preserve existing caching behavior, security policies, WAF rules, and bot protection.
        
        This approach centralizes routing within Launch but introduces an additional caching layer for unmigrated traffic because requests pass through both Launch and the legacy CDN before reaching the legacy origin.
        
        Organizations adopting Launch as the primary edge platform may prefer this approach when they plan to retire the existing CDN shortly after migration.
        
2.  ### Content Layer
    
    During migration, content exists in two content management systems.
    
    -   #### Contentstack CMS
        
        Contentstack becomes the source of truth for migrated routes.
        
        Content is modeled using Content Types and delivered through the Content Delivery API (CDA). As additional routes migrate, more content ownership shifts from the legacy platform to Contentstack.
        
        Editors can begin managing migrated pages in Contentstack without affecting content that remains on the legacy platform.
        
    -   #### Legacy CMS
        
        The legacy CMS continues serving all unmigrated routes.
        
        Its existing database, templates, workflows, and editorial processes remain unchanged until each route is migrated.
        
        Because only migrated routes are redirected to Launch, editors can continue publishing content in the legacy CMS for the remainder of the website throughout the migration.
        
        This coexistence allows migration work to proceed incrementally without requiring editors to move all content at once.
        
3.  ### Code Layer
    
    The frontend application is developed independently from the legacy platform.
    
    A modern framework such as Next.js, Nuxt, Remix, or another supported framework is stored in a Git repository and deployed through Launch.
    
    The application renders only migrated routes.
    
    Routing rules ensure that each request is served by exactly one rendering layer.
    
    -   Migrated routes are rendered by the new frontend.
    -   Unmigrated routes continue using the legacy rendering engine.
    
    This separation prevents duplicate ownership of routes and allows frontend development to progress independently of the legacy application.
    
    As migration progresses, additional routes are implemented in the new frontend until it serves the entire website.
    
4.  ### Infrastructure Layer
    
    Launch provides the hosting and deployment infrastructure for the new frontend application.
    
    The deployment workflow remains identical to a standard Launch implementation.
    
    Launch provides:
    
    -   Git-based deployments
    -   Branch mapping, such as main for Production and develop for Stage
    -   Atomic deployments
    -   Preview environments
    -   Global CDN distribution
    -   Server-side rendering (SSR)
    -   Static Site Generation (SSG)
    -   Incremental Static Regeneration (ISR)
    
    These capabilities become available immediately for migrated routes without requiring changes to the remaining legacy platform.
    
    Because the frontend is deployed independently of the legacy CMS, releases can occur without affecting unmigrated sections of the website.
    
5.  ### Automation Layer
    
    Contentstack Automate manages cache invalidation for migrated routes.
    
    When editors publish or unpublish content in Contentstack, Automate triggers cache invalidation in Launch so visitors receive updated content without waiting for cache expiration.
    
    This process applies only to migrated routes.
    
    Content published through the legacy CMS continues using its existing cache invalidation mechanism until those routes migrate to Contentstack.
    
    Maintaining separate cache invalidation processes during migration allows both platforms to operate independently while ensuring visitors receive fresh content from the appropriate system.
    

### How the Layers Work Together

The following sequence illustrates a request during migration:

1.  A visitor requests a page.
2.  The routing layer evaluates the requested path.
3.  If the route has migrated, the request is forwarded to Launch.
4.  Launch renders the page using content delivered from the Content Delivery API (CDA).
5.  If the route has not migrated, the request continues to the legacy platform.
6.  Contentstack Automate invalidates Launch caches whenever migrated content is published.

Throughout the migration, visitors interact with a single website while requests are transparently routed to the appropriate backend.

## Migration Workflow

A Progressive Headless migration typically progresses through five phases. Each phase builds on the previous one, allowing the legacy platform and Contentstack to operate together while traffic is gradually shifted to the new frontend.

### Phase 1: Discover

Begin by creating an inventory of every route on the existing website.

For each route, identify:

-   Traffic volume
-   Business priority
-   Content complexity
-   Content ownership
-   Technical dependencies
-   Estimated migration effort

Use this information to prioritize the migration backlog. Low-risk routes, such as /about or /contact, are typically migrated before business-critical pages such as the homepage.

The output of this phase is a prioritized list of routes that defines the migration sequence.

### Phase 2: Carve

The Carve phase establishes the routing layer before any content is migrated.

Configure routing rules on the existing CDN or configure Launch as the routing layer, depending on your chosen architecture.

At this stage:

-   All requests continue to be served by the legacy platform.
-   The new frontend application is deployed to Launch.
-   No routes are redirected to Launch.
-   No user-visible changes occur.

Although visitors continue interacting with the legacy website, this phase introduces the routing layer that will later direct traffic between both platforms.

Establishing the routing layer before migrating content reduces operational risk and provides a controlled mechanism for redirecting traffic throughout the migration.

### Phase 3: Cut Over

After the routing layer is in place, migrate the first route from the legacy platform to Contentstack.

For each route:

1.  Create the required content model in Contentstack.
2.  Migrate the existing content.
3.  Implement the route in the new frontend.
4.  Validate the rendered output.
5.  Update the routing rule to direct traffic to Launch.

If issues are identified after deployment, update the routing rule to send traffic back to the legacy platform.

Because rollback occurs at the routing layer, the legacy content remains available without requiring content restoration or frontend redeployment.

Migrating a low-risk route first allows teams to validate deployment processes, publishing workflows, monitoring, and routing before expanding the migration.

### Phase 4: Expand

Continue migrating routes using the same workflow established during the initial cutover.

For each route:

1.  Model the content in Contentstack.
2.  Migrate the content.
3.  Render the route in the new frontend.
4.  Validate the implementation.
5.  Update the routing rule.
6.  Monitor traffic and application behavior.

As additional routes migrate:

-   The routing table gradually expands.
-   More traffic is served from Launch.
-   Content ownership shifts to Contentstack.
-   The legacy platform serves progressively fewer requests.

Each completed route reduces the scope of the remaining migration.

### Phase 5: Decommission

After every route has been migrated, remove the legacy platform from the architecture.

Complete the following tasks:

-   Remove the routing fallback to the legacy platform.
-   Delete legacy routing rules.
-   Retire the legacy hosting infrastructure.
-   Disable legacy publishing workflows.
-   Archive or decommission the legacy CMS.

After decommissioning, the architecture becomes functionally identical to the [Simple Website with Contentstack Launch](/docs/headless-cms/simple-website-with-contentstack-launch#architecture-components) implementation.

Contentstack becomes the single source of truth for content, while Launch hosts and serves the complete website.

## Edge Routing Patterns

Progressive Headless supports two routing approaches during migration.

The recommended approach depends on your existing infrastructure, operational requirements, and long-term deployment strategy.

### Pattern A: Existing CDN as the Router (Recommended)

In this approach, the existing CDN remains the public entry point for the website throughout the migration.

The CDN evaluates incoming requests and routes traffic based on configured path rules.

-   Requests for migrated routes are forwarded to Launch.
-   Requests for unmigrated routes continue directly to the legacy origin.
-   Visitors continue accessing the website through the existing CDN.

This approach minimizes infrastructure changes because the majority of website traffic continues following its existing request path.

Benefits include:

-   Existing caching behavior remains unchanged for unmigrated routes.
-   Existing WAF and bot protection continue protecting the website.
-   SSL certificates and redirects remain unchanged.
-   The legacy origin remains protected behind the existing CDN.
-   Only migrated routes begin using Launch.

Because most website traffic remains on the legacy platform during the early stages of migration, this approach introduces the fewest operational changes and is recommended for most production environments.

### Pattern B: Launch as the Router

In this approach, Launch becomes the public entry point for the website.

Launch evaluates each request and determines where traffic should be routed.

-   Migrated routes are rendered directly by Launch.
-   Unmigrated routes are proxied to the existing CDN.
-   The existing CDN continues protecting the legacy origin.

Unmigrated traffic should continue flowing through the existing CDN rather than connecting directly to the legacy origin. This preserves existing caching behavior, WAF policies, bot protection, and other edge services throughout the migration.

This approach centralizes routing within Launch but introduces an additional caching layer for unmigrated traffic because requests pass through both Launch and the legacy CDN before reaching the legacy origin.

Organizations planning to standardize on Launch as their primary edge platform may prefer this deployment model.

### Routing Pattern Comparison

| **Feature** | **Pattern A: Existing CDN** | **Pattern B: Launch** |
| --- | --- | --- |
| Best suited for | Existing CDN deployments | Launch-first deployments |
| Public entry point | Existing CDN | Launch |
| Routing configuration | CDN rules, workers, or VCL | Launch routing rules |
| Vendor footprint | CDN + Launch | Launch |
| Existing WAF and bot protection | Preserved | Recreated in Launch |
| Additional caching | Migrated routes only | Unmigrated routes |
| Recommended approach | ✓ Yes | Use when replacing the existing CDN |

## Adding Personalize and Lytics

After routes have been migrated to Contentstack, you can extend your implementation by integrating additional Contentstack products.

For example:

-   Use [Personalize](/docs/personalize/about-personalize) to deliver personalized experiences based on visitor behavior.
-   Use [Lytics](/docs/lytics/about-lytics) to better understand your users, build audience segments and deliver stronger personalized experiences.

Because personalization depends on content being delivered through Contentstack, these capabilities are available only for migrated routes.

**Additional Resource:** To learn more, refer to the [Personalized Website with Lytics and Personalize](/docs/headless-cms/personalized-website-with-lytics-and-architecture) documentation.
