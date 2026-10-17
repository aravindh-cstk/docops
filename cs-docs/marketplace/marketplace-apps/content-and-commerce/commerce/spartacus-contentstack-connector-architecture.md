---
title: "SAP Spartacus Connector Architecture | Contentstack"
description: "Understand how the Contentstack connector for SAP Composable Storefront divides responsibility between Contentstack and SAP Commerce Cloud, composes each page in layers, and runs without extra infrastructure."
url: /marketplace/spartacus-contentstack-connector-architecture
uid: blt9f6fc993c9548e63
---

# SAP Spartacus Connector Architecture | Contentstack

## SAP Spartacus Connector Architecture

The SAP Spartacus Connector lets an SAP Composable Storefront (Spartacus) render content that you author in Contentstack, while SAP Commerce Cloud stays the commerce engine. This page explains the connector's design: the systems involved, how responsibility is divided between them, and how a page is put together at run time.

It is written for solution architects and technical leads at implementation partners, and for the architects who review their proposals. It assumes that you are familiar with SAP Commerce Cloud and SAP Composable Storefront.

**Note:** This page explains the design. To install and configure the connector, refer to the [Install the SAP Spartacus Connector](/docs/marketplace/spartacus-contentstack-connector) documentation.

## Related Resources

The connector's GitHub repository is the source for the following reference material.

| Resource | What it covers |
| --- | --- |
| [README](https://github.com/contentstack/contentstack-spartacus-connector/blob/main/README.md) | Capability overview, configuration reference, and the maintained list of supported features and limitations. |
| [Getting Started guide](https://github.com/contentstack/contentstack-spartacus-connector/blob/main/GETTING_STARTED.md) | Configuring the connector in an existing Composable Storefront application. |
| [Content model reference](https://github.com/contentstack/contentstack-spartacus-connector/blob/main/CONTENT-MODEL.md) | The content types and fields that ship with the connector, and how they map to SAP slot positions. |
| [Troubleshooting guide](https://github.com/contentstack/contentstack-spartacus-connector/blob/main/TROUBLESHOOTING.md) | Symptoms, causes, and resolutions found during implementation. |
| [B2C reference storefront](https://github.com/contentstack/sapcc-storefront-electronics-demo) | A running storefront on a B2C base site. |
| [B2B reference storefront](https://github.com/contentstack/sapcc-storefront-powertools-demo) | The same storefront configured for a B2B base site. |

## Why the Connector Exists

SAP Commerce Cloud provides the commercial side of a storefront: catalog, pricing, promotions, cart, and checkout. Marketing teams need something different from the same pages: campaign content, navigation, imagery, and localized copy. That content changes far more often than the catalog, and the people who author it don't work in a commerce system.

Without an integration, organizations usually run two disconnected processes. A campaign change waits for a storefront deployment, or content is copied into the commerce platform and maintained twice. The connector removes that coupling. You author and publish content in Contentstack, and the same storefront renders it in the page positions that SAP already defines. Neither system takes on the other's responsibilities.

## Systems and Responsibilities

Three systems take part: the storefront, SAP Commerce Cloud, and Contentstack.

![Context view: the shopper's browser runs the SAP Composable Storefront with the connector installed and calls SAP Commerce Cloud for commerce data and the Contentstack Delivery API for page content](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7c0dec5497c02cda/f66e5f321e53ef726b391bac/fig1-context-container.png)

SAP Commerce Cloud builds and serves the storefront application alongside the commerce platform. The application is a standard SAP Composable Storefront with the connector installed as an Angular library, and it runs in the shopper's browser. Content requests and commerce requests both start there. Neither platform calls the other.

Each system remains the system of record for its own domain. The design fixes this boundary, not the configuration, so it's the first thing to agree on with a client.

| Concern | System of record | Notes |
| --- | --- | --- |
| Product catalog, pricing, and stock | SAP Commerce Cloud | Resolved when the page renders. Never stored in Contentstack. |
| Cart, checkout, orders, and accounts | SAP Commerce Cloud |  |
| Page templates and slot positions | SAP Commerce Cloud | Decide which positions exist on a page, and therefore what can be authored. |
| Search, facets, and product listings | SAP Commerce Cloud |  |
| Editorial content and media | Contentstack | Authored per locale and published per environment. |
| Navigation menus | Contentstack | Header and footer menus of any depth. |
| Product selection within content | Contentstack | Only the product code. Commercial attributes come from SAP. |

### Design Constraints

The design treats four constraints as fixed. They explain the goals in the next section, and they're worth confirming in every engagement.

-   **Composable Storefront must stay upgradeable.** SAP releases the storefront libraries on its own schedule, under the client's entitlement. Forking or patching them would turn every upgrade into custom work.
-   **SAP owns the page structure.** SAP Commerce Cloud defines the page templates and the positions within them. The integration works within that structure instead of creating a parallel one.
-   **Adoption must be incremental.** An existing storefront with content already in place can't be asked to migrate everything before it sees any benefit.
-   **No additional runtime infrastructure.** A middleware layer between the storefront and either platform would add something new for the client to operate.

## Architecture Goals

Each goal follows from the constraints above and has a direct consequence for implementations.

| Goal | Rationale | Consequence |
| --- | --- | --- |
| The storefront application stays standard. | SAP licenses and releases Composable Storefront. Forking or patching it moves the maintenance burden to the client. | The connector extends the application through the injection points that SAP publishes, so storefront upgrades stay routine. |
| SAP Commerce Cloud stays the system of record for commerce. | Commercial data is transactional, permissioned, and priced per customer. Copying it into a content platform makes it stale and duplicates governance. | Content references products by code. Price, stock, and availability come from SAP when the page renders. |
| Composition happens per position, not per page. | An existing storefront can't migrate all at once, and not every position benefits from editorial control. | A single page can take some positions from Contentstack and the rest from SAP. Adoption proceeds position by position. |
| The page structure is read from SAP, not redefined. | Templates decide what a page can contain. A second definition would eventually disagree with the first. | Authors can fill only the positions that the SAP template renders. Extending what can be authored starts in SAP. |
| Runtime credentials are read-only. | The storefront is a public client, so anything it holds is visible to anyone who inspects it. | The application carries only a read-only, environment-scoped delivery token. Privileged credentials are never present at run time. |

## Components

Composable Storefront resolves content through two injectable contracts: CmsPageAdapter for the structure of a page, and CmsComponentAdapter for a single component. SAP's own implementations, OccCmsPageAdapter and OccCmsComponentAdapter, retrieve both from SAP Commerce Cloud. The connector implements the same two contracts, so it serves content from Contentstack, and the SAP implementations stay in place for anything the connector doesn't supply.

![Component view: the storefront's CmsPageConnector and CmsComponentConnector call the connector's page and component adapters, which use the client service, normalizers, access service, mapping tables, and preview bindings, and fall back to SAP's CMS adapters](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd5237af432c80fa4/f1934e4e440ad20897c1bbc8/fig2-content-layer-components.png)

| Component | Responsibility |
| --- | --- |
| Page adapter | Selects the content entry for the requested route, loads the SAP base page in parallel, and composes the layers described in the How a Page Is Composed section. |
| Component adapter | Resolves a single component when the storefront requests one directly. |
| Client service | Retrieves content, resolves the active locale, and transfers server-rendered content to the browser when server-side rendering is used. |
| Page and component normalizers | Translate a content entry into the page model that the storefront's rendering engine expects. They translate names and shapes, not data. |
| Mapping tables | Hold the correspondence between Contentstack identifiers and SAP position and component names, and the set of reference paths to resolve. |
| Access service | Optionally hides authored content in the browser based on the shopper's SAP sign-in state or role group. |
| Preview bindings | Connect the storefront to Contentstack's visual editing experience in non-production environments. |

### Module Structure

The connector ships as a single npm library, @contentstack/contentstack-spartacus-connector.

![Module structure: the connector library contains config, client, cms (adapters, converters, model, access), live-preview, and guards, and depends on @spartacus/core, @spartacus/storefront, and @contentstack/delivery-sdk](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7acda2d9e6f82f12/f1b026468d974ad0bf262d92/fig3-module-structure.png)

The library declares Angular and the Composable Storefront libraries as peer dependencies, so it uses the versions your application already has. It installs the Contentstack Delivery SDK as its own dependency. Within the cms package, three areas are where an implementation extends the integration:

-   converters: when a custom component needs a different shape.
-   model: when a template exposes a position that the connector doesn't map yet.
-   access: when content is tailored to the shopper.

## How a Page Is Composed

The storefront never builds a page twice. It starts from the page that SAP Commerce Cloud already defines, then replaces individual positions on it with content authored in Contentstack. How this replacement works decides what an implementation can offer a client, how a phased rollout is sequenced, and what a shopper sees when nothing is authored.

### Layers and Precedence

A page is assembled from up to three layers, applied one after another:

1.  **The SAP base page:** every position that the template renders, filled exactly as SAP Commerce Cloud defines it.
2.  **A shared Contentstack entry (optional):** the header, footer, and anything else that appears on every page. This layer applies when the storefront is configured with a shared entry.
3.  **The Contentstack entry for the current page:** the content specific to that page.

Each layer is applied on top of the one before it. When a layer has content for a position, it takes over that position. When it has nothing for a position, the position keeps what the layer beneath it provided. Every position on the finished page is therefore filled by exactly one layer.

![Layered composition: the SAP base page, the shared shell entry, and the page entry combine so that each position on the rendered page comes from one layer](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame9b8f59bd7ec9ab3/5d77db15ff7affd7b013b8e6/fig4-layered-composition.png)

The connector loads the SAP base page for every request, including pages that are fully authored in Contentstack. This guarantees that any unauthored position still renders, and it's why you can introduce the integration to a live storefront without a content freeze.

### Which Positions Authors Can Fill

Three things decide what an author can change on a page, in this order:

1.  **The SAP page template decides which positions exist.** A template that renders a hero band, three columns, and a footer gives the page those positions and no others. This is settled in SAP Commerce Cloud, before Contentstack is involved.
2.  **The Contentstack page type decides which of them an author can fill.** A page type in Contentstack has one field for each position it opens for authoring, and the field name connects it to the position in SAP Commerce Cloud. Positions that the page type doesn't cover stay with SAP Commerce Cloud, whatever the template renders.
3.  **The header and footer work the same way but are authored once.** A single shared entry holds the content for the positions that appear on every page, so a navigation change is made in one place.

The connector already recognizes the standard SAP positions. You add configuration only when a client's template renders a position outside that set: you register the correspondence between the Contentstack field and the SAP position in the storefront configuration.

**Note:** Contentstack changes what is on a page, not its shape. An authored entry fills positions, but it can't swap the template or add positions that the page doesn't have. To give authors more to work with, start with the template in SAP Commerce Cloud, and then extend the content model.

### What This Means for an Implementation

-   **Adoption can be sequenced.** An existing storefront keeps working exactly as it does today. A first release might bring editorial control to the header, footer, and home page hero, and later releases extend it to more positions without disturbing those already in place.
-   **Reversal is symmetrical.** Clearing a position returns it to the content that SAP Commerce Cloud already serves, so there's no separate rollback procedure.
-   **The existing templates set the scope.** Scoping starts with the positions that the client's templates already render, a question answered in SAP Commerce Cloud rather than in Contentstack.
-   **Shared layouts serve repeated page types.** You author product and category pages once, as a single layout that every product or category page uses, with its own data from SAP Commerce Cloud.

The shipped content model sets which Contentstack field maps to which SAP position. For the full list, refer to the [content model reference](https://github.com/contentstack/contentstack-spartacus-connector/blob/main/CONTENT-MODEL.md).

## Runtime Behavior

This section describes what happens when a shopper requests a page, and how the connector handles missing content, locales, and preview.

### Page Requests

The connector retrieves content and commerce data at the same time, so the integration adds a parallel request rather than an extra round trip in series.

![Sequence for one page: the storefront asks the connector for the route, the connector queries Contentstack and loads the SAP base page in parallel, composes the layers, and returns a merged page model; product price and stock come from SAP Commerce Cloud](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am798cf2f0abc4b0c1/a8655686c1d4a499b5cd57dd/fig5-page-request.png)

### Content Resolution and Fallback

Route resolution and fallback follow a single path, whether the content is absent, unpublished, or the request for it doesn't complete.

![Fallback flow: with no Contentstack entry or no content retrieved, SAP Commerce Cloud serves the entire page; otherwise each position renders from Contentstack when authored and from SAP Commerce Cloud when not](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am179bd58e70071a2e/ca21ef4e27dde1bb567f9d09/fig6-resolution-fallback.png)

Fallback is enabled by default (occFallback: true). If you disable it, unauthored positions render empty. This full-replacement model suits only an implementation where Contentstack is the only source of page content.

### Locales

The storefront's active language decides which Contentstack locale the connector queries. The two systems don't always use the same language codes, so you map them explicitly in the connector configuration (localeMapping).

An entry that isn't translated into the requested locale resolves to the master locale instead of rendering empty. The storefront stays in control of language selection, and the integration follows it. Interface labels from the storefront libraries aren't affected.

### Authoring and Preview

Authors work entirely in Contentstack: they compose entries, preview them in the storefront, and publish to an environment. Publishing makes the content visible, with no storefront deployment.

Visual preview of unpublished content works only in non-production environments. The connector refuses to enable Live Preview in a production build, so draft content can't be reached from a production application. Plan a preview environment for content review as part of your environment setup.

## Deployment

The integration lives entirely within the storefront application, which SAP Commerce Cloud builds and serves from the same repository as the commerce application. It adds no server-side component, no middleware, and no extra infrastructure for the client to operate.

![Deployment view: the connector from the public npm registry and the Composable Storefront libraries from SAP's RBSC registry are deployed into the storefront application on SAP Commerce Cloud, which runs in the shopper's browser and calls Contentstack over HTTPS](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amddf0a8175dde412a/27a3160ebac10016ba627799/fig7-deployment.png)

Two supply chains meet at build time. The storefront libraries come from SAP's RBSC registry under the client's entitlement. The connector comes from the public npm registry and installs as an ordinary dependency. Only the entitled SAP libraries need credentials, and only when the application is built.

### Environments

Each storefront environment pairs with a Contentstack publishing environment and its own delivery token. Promotion therefore has two independent tracks: application releases follow the client's existing deployment process, and content releases are publishing actions that need no deployment. When the content model itself changes, you can develop it on a separate [branch](/docs/headless-cms/about-branches) alongside the application work.
