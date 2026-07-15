---
title: "[AM2.0] - Getting Started with Assets"
description: Getting Started with Assets
url: https://www.contentstack.com/docs/assets/getting-started-with-assets
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
  - administrators
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Getting Started with Assets

This page is a step-by-step guide showing how an ecommerce brand can use Contentstack Assets to organize, enrich, govern, and reuse digital assets across multiple websites. It is intended for teams planning an Assets implementation (admins, developers, and content/asset managers) and should be used when setting up spaces, asset models, metadata, localization, workspaces, search, and governance.

## Getting Started with Assets

This guide walks you through how an ecommerce brand, **Amazemart**, can use Assets to organize, enrich, and reuse digital assets across multiple websites.

This guide follows a realistic implementation journey and highlights which capabilities to use at each step.

## Use Case Overview: Amazemart

Amazemart operates three websites, all powered by Contentstack CMS:
- **Amazemart – Main** (B2C storefront)
- **Amazemart – Business** (B2B storefront)
- **Amazemart – Resource Center** (guides, legal documents, help content)

Amazemart cares deeply about:
- **Brand consistency** across all sites (logos, icon sets, brand imagery)
- **Campaign agility** for frequent seasonal and promotional sales
- **Strong governance** around asset rights and usage windows

Assets helps Amazemart solve these needs by providing:
- A **central place** to model and store assets
- **Reusable asset spaces** for shared brand elements
- **Metadata, search, and AI** to keep assets discoverable and compliant

## Plan Spaces for Each Site and Shared Assets

Assets is the highest-level system for organizing and governing digital assets in Contentstack. Within it, a **space** acts as the central repository for brand- or project-specific assets.

For Amazemart, you would create:

**Amazemart Main Space**: Assets specific to the B2C site
- **Amazemart Business Space**: Assets specific to the B2B site
- **Amazemart Resource Center Space**: PDFs, legal docs, guides
- **Global Brand Assets Space**: Shared logos, icons, typography, global imagery

Each space is:
- Independent (its assets, roles, and settings do not affect other spaces)
- Linkable to one or more **CMS stacks**, so CMS entries can pick assets from the relevant spaces

You may also create additional spaces later, for example a **Sneaker Vendor Space** that holds assets sourced from a third-party partner.

**Tip:** Use the Global Brand Assets space to host logos, navigation icons, and shared lifestyle imagery that all three sites can reference via multi-space linking.

## Configure Asset Models (Fields, Groups, and Types)

Next, Amazemart needs structured metadata so teams can search, filter, and govern assets reliably.

### Create Custom Fields and Field Groups

In **Fields**, you define reusable fields and group them logically. For example:

- Single Line Textbox: `product_id`, `sku`, `brand`
- Multi Line Textbox: `usage_notes`, `legal_disclaimer`
- Number: `discount_percentage`, `priority_score`
- Date: `campaign_start_date`, `campaign_end_date`, `license_expiry_date`
- Boolean: `is_hero_image`, `approved_for_reuse`
- Group (Asset Rights):`rights_holder` (text)
- `license_type` (select: royalty-free, rights-managed, internal only)
- `license_start_date`/`license_end_date` (dates)
- Nested group restrictions (channels, regions, notes)

For each asset type, you can:
- Mark critical fields as **mandatory** (for example `license_end_date` for rights)
- Configure validation (for example, `license_end_date` must be after `license_start_date`)

These fields become the backbone of Amazemart’s search and compliance workflows.

### Create Asset Types

In **Asset Types**, you map file formats to **MIME type + extension** and attach the relevant fields.

Examples:

**JPEG Image**MIME type: image/jpeg
- Extensions: .jpg, .jpeg
- Fields: product_id, sku, category, color, is_hero_image, Asset Rights group

**Campaign Banner PNG**MIME type: image/png
- Extension: .png
- Fields: campaign_name, campaign_start_date, campaign_end_date, locale, Asset Rights

**Legal PDF**MIME type: application/pdf
- Extension: .pdf
- Fields: document_type, region, effective_from, effective_to

This ensures every uploaded file carries the metadata Amazemart needs.

## Organize Folders and Upload Assets

Inside each space, Amazemart structures assets into folders:

In **Amazemart Main Space**Home Page
- Category Pages > Fashion > Shoes
- Campaigns > Diwali Sale 2025

In **Global Brand Assets Space**Logos
- Icons
- Brand Photography

Users can:
- Create folders and subfolders
- Upload assets directly into a folder
- Edit folder names and descriptions
- Delete folders that are no longer required

As assets are uploaded, Asset Management:
- Applies the correct **asset type** (based on MIME type and extension)
- Displays all **required fields** that must be filled in before saving

## Enrich Assets with Metadata and Localization

### Configurable Metadata and AI Suggestions

When a user opens an asset, the **Edit Configurable Metadata** panel allows them to:

- Set **title**, **description**, and **tags**
- Fill in **user-defined fields** (e.g., product_id, Asset Rights)
- Use **AI-powered suggestions** for:Descriptions and alt texts
- Tags

Metadata can be added once in the Global Brand Assets space and reused where that asset is referenced.

### Localize Assets for Multiple Languages

Asset localization follows a two-stage configuration model:

- Add languages globally in **Asset** > **Settings**, defining fallback relationships.
- Add required languages at the workspace level, making them available for asset localization.

Only languages enabled in a workspace become available for that workspace’s assets.

Once enabled, localization supports:
- Language-specific titles, descriptions, and tags
- Optional replacement of the asset binary (for example, packaging text in French)
- Fallback behavior when localized content is unavailable

This approach allows Amazemart to maintain a single logical asset with multiple language variants while respecting workspace-specific needs.

## Use Workspaces for Campaigns and Experiments

Each space includes a primary workspace that serves as the default working environment.

Additional workspaces can be created to support:

- Campaign preparation (for example Diwali-2026-Campaign)
- Experimental asset updates
- Review and approval workflows

In a campaign workspace, Amazemart can:
- Upload new banners and hero images
- Add or refine metadata and visual markups
- Review changes in isolation

Once ready, changes can be merged into the parent workspace.

**Warning:** Workspaces support controlled experimentation within a space. Do not use workspaces to manage separate websites or brands. Create separate spaces for that purpose. Support is not provided when workspaces are used as replacements for spaces.

## Search, Filter, and Save Views

As the asset library grows, Amazemart relies on **Search**, **Filters**, and **Views**.

### Basic and Advanced Search

From the **Assets** page, users can:

- Basic search scans across system metadata and all user-defined fields.
- Advanced search enables complex queries using multiple fields, operators, and conditions.

### Apply Filters

Filters help Amazemart narrow down results quickly:

- **Folder**: Filter by folder hierarchy
- **Asset Type**: For example only JPEG Product Image
- **Size**: Small, medium, large, or custom ranges (KB, MB, GB)
- **Color**: Find images where a color (for example blue) is dominant
- **Dimensions**: Custom width and height ranges (for example banner formats)
- **Dates**: Created or last modified ranges
- **Languages**: Show localized assets for specific languages
- **User-defined fields**: For example:Rights Holder = “Daniel Taylor”
- License End Date after today
- Category = “Shoes”

User-defined fields can be added to the **Filters** panel via **Manage Filters**, then reused as needed.

### Saved Views

Amazemart can configure useful combinations of columns and filters as **views**, such as:

- “Active Shoe Campaign Assets”
- “Rights Expiring in Next 30 Days”
- “Unlocalized French Assets”

These views help teams open “their” slice of the library with a single click.

## Add Visual Markup (Images) for Shoppable Experiences

For lifestyle images on the Amazemart Main site (for example a model wearing multiple items), editors can add **Visual Markup**:

- **Hotspots**: Pinpoint clickable markers (for example on a bag or shoe)
- **Bounding boxes**: Highlight a larger region (for example an entire outfit)

Workflow:
- Open an image asset (for example a photo of a study table or a fashion outfit).
- Open the **Visual Markup** panel.
- Use **Suggest Markup with AI** to detect people or objects, or manually add hotspots/bounding boxes.
- For each markup, set:Title (for example “Leather Tote Bag”)
- Description
- URL (for example a product detail page)
- Position and dimensions (for bounding boxes)

This enables **shoppable imagery** and interactive content directly from Asset Management.

## Make the Most of AI Capabilities

In addition to AI suggestions for metadata and markups, Assets offers several intelligent features that Amazemart can leverage:

- **Automatic tag generation** on upload with configurable maximum tags and confidence threshold.
- **Alt text suggestion** to improve accessibility and SEO.
- **Reverse**/**visual image search** to find visually similar images (for example similar sneakers).
- **Face detection** to identify human faces where needed.
- **Adult content detection** to flag sensitive assets.
- **Semantic search** to interpret natural language queries and return relevant assets.
- **AI-powered asset recommendations** (when integrated with CMS) to suggest images based on entry content and audience.

These features reduce manual effort and keep the library clean, compliant, and easy to navigate.

## Govern Access with Roles (High-Level)

Although this guide focuses on features, Amazemart also uses **space-level roles** to control access:

Out-of-the-box roles such as:Space Owner
- Space Admin
- Asset Manager
- Asset Developer
- Custom roles for:External vendors (for example the Sneaker Vendor Space)
- Legal reviewers
- Regional marketing teams

Roles determine who can upload, edit metadata, manage workspaces, or delete assets.

## Use Assets in CMS via Asset Picker

Once assets are modeled and organized:

CMS editors select assets from linked spaces using the updated **asset picker** in Headless CMS.
- They benefit from everything configured in Assets:Correct asset types
- Entry locale and fallback language rules

  **Note:** Only assets matching the entry’s locale or fallback locale appear as selectable, ensuring localization consistency.
- Rights-safe assets (based on metadata and filters)
- Visual markups for shoppable content

This completes the loop from **centralized assets** to **content delivery**.

Assets turns Amazemart’s growing asset library into a structured, searchable, and reusable system that supports multiple sites, campaigns, and regions with confidence.

## Common questions

### What is the difference between a space and a workspace in Assets?
A **space** acts as the central repository for brand- or project-specific assets, while **workspaces** support controlled experimentation within a space.

### When should I create a separate space instead of a workspace?
Do not use workspaces to manage separate websites or brands. Create separate spaces for that purpose.

### How do asset types help with governance?
Asset types map file formats to **MIME type + extension** and attach relevant fields, ensuring every uploaded file carries the metadata needed.

### How does localization affect what CMS editors can pick?
Only assets matching the entry’s locale or fallback locale appear as selectable, ensuring localization consistency.

<!-- filename: am2.0-getting-started-with-assets.md -->