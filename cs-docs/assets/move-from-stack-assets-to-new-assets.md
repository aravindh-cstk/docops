---
title: [AM2.0] - Move from Stack Assets to New Assets
description: 
url: https://www.contentstack.com/docs/assets/move-from-stack-assets-to-new-assets
product: Contentstack
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2026-03-27
filename: move-from-stack-assets-to-new-assets.md
---

# [AM2.0] - Move from Stack Assets to New Assets

This page explains [AM2.0] - Move from Stack Assets to New Assets for Contentstack. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Move from Stack Assets to New Assets

When transitioning from stack-based assets to the new Contentstack Assets, the way you structure, manage, and reuse assets changes significantly.

In the stack-based assets system, assets were tightly coupled with stacks, and teams often relied on workarounds (such as dummy content types) to manage metadata. With Contentstack Assets, you now have a dedicated, scalable asset management system with built-in support for reusability of assets - single source of truth, metadata, asset types, localization, and governance.

This guide walks you through the key actions to take after upgrading, using a dummy e-commerce company the Ridge & Rover use case to illustrate how to adopt the new system effectively.

### What Changes After Migration?

In stack-based assets:

* Metadata was often stored using dummy content types
* Assets were not reusable across stacks so assets were duplicated in each stack
* Localization required separate assets per locale
* Limited filtering and governance

With Contentstack Assets:

* Metadata is handled via user-defined fields
* Assets are centrally managed in spaces and can be shared across stacks
* Localization is native and linked
* Assets are structured, searchable, and reusable

### Example Use Case - Ridge & Rover

Ridge & Rover operates multiple digital experiences:

* B2C storefront
* B2B platform
* Schools platform

Each experience uses shared and localized assets across:

* Ridge & Rover B2C Site
* Ridge & Rover B2B Site
* Ridge & Rover Schools Site

After migrating to Contentstack Assets, they restructured their asset strategy using the steps below.

### 1. Organize Assets in Spaces for Reuse

In Contentstack Assets, spaces define how assets are organized, governed, and reused across stacks. A well-structured space strategy ensures better discoverability, access control, and scalability.

#### One Space per Stack (Stack-Specific Assets)

When you create a stack a dedicated space will be created for each stack to store assets exclusive for that stack.

Example:

* Ridge&Rover-B2c
* Ridge&Rover-B2B
* Ridge&Rover-Schools

Use this for:

* Page-specific images
* Campaign assets unique to a single stack
* Stack-level content that is not reused

#### One Global Space (Shared Assets)

Create a common space for assets that are reused across multiple stacks.

Example: Ridge & Rover – Global Brand Assets

Use this for:

* Logos and brand elements shared/reused across stacks
* Icons and design systems
* Shared marketing and lifestyle imagery

#### One Vendor Space (External Assets)

Create a separate space for assets sourced from external vendors or partners.

Example: Partnerstore – Sneaker Nest

Use this for:

* Vendor product images
* Third-party content
* Partner-specific assets with licensing constraints

Link these spaces to your stacks using Assets Hub to enable seamless asset selection in CMS.

### 2. Create User-Defined Fields

In stack assets, Ridge & Rover previously stored asset metadata using a custom content type (for example, to track campaign details or licensing information).

With Contentstack Assets, this is replaced by user-defined fields.

#### Example: Campaign Metadata

Ridge & Rover creates a field: **Campaign Name (Single line text)**

This allows them to:

* Tag assets to campaigns
* Filter assets by campaign

#### Example: Asset Rights (Group Field)

They also define a group field called **Asset Rights**, which includes:

* Location
* License type
* Usage period
* Copyright
* Photographer details (nested group)

This structure enables:

* Better governance
* Compliance tracking
* Advanced filtering

With the user-defined fields, metadata is now directly attached to assets instead of being managed separately.

### 3. Associate Fields with Asset Types

Once fields are created, the next step is to associate them with asset types.

In Contentstack Assets:

* Fields become usable only when linked to asset types
* This ensures consistent metadata across similar assets

Ridge & Rover, for their product images associated the following fields with asset type:

* Asset Type: Product Image (JPEG)
* Associated fields:
  + Campaign Name
  + Asset Rights

Now, whenever an image is uploaded, required fields appear automatically. Teams can filter assets based on these fields

### 4. Create Custom Asset Types

Out-of-the-box asset types may not cover all business needs. Contentstack Assets allows you to define custom asset types.

Ridge & Rover manages 3D product previews. They create a custom asset type:

* **Asset Type**: 3D Model
* **MIME Type**: model/3mf
* **Fields**:
  + Product SKU
  + Dimensions
  + License Expiry
  + Asset Rights

This ensures correct metadata for specialized assets, enforces validation rules, and improves discovery and filtering.

### 5. Define Locales and Localize Assets

In stack assets:

* Localization required separate assets
* No relationship between language variants

In Contentstack Assets, localization is native and linked

#### Step 1: Add Languages to Workspace

Ridge & Rover adds languages (e.g., French) to their workspace:

**Assets** > **Space Settings** > **Workspaces** > **Add Language**

Only enabled languages can be used for asset localization.

#### Step 2: Localize Assets

On the English product page, Ridge & Rover has product images in English

They now:

1. Switch to French
2. Replace or update the asset
3. Save the image to create a localized version

This creates a localized version of the asset tied to the fallback locale.

### Best Practices After Migration

To fully leverage Contentstack Assets:

* Replace dummy content types with user-defined fields and asset types
* Standardize metadata using asset types
* Use custom asset types for specialized formats
* Enable workspace-level languages before localization
* Structure assets into spaces for reuse across stacks

After completing these steps, you can explore advanced capabilities:

* AI-powered tagging and search
* Visual markup for images
* Saved views and filters
* Asset recommendations in CMS

Moving from stack assets to Contentstack Assets is not just a migration, it is a shift to a structured, scalable, and intelligent asset management system.

## Common questions
### What is covered in [AM2.0] - Move from Stack Assets to New Assets?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [AM2.0] - Move from Stack Assets to New Assets?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
