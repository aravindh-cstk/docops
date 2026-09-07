---
title: "Move from Stack Assets to New Assets"
description: "Move from Stack Assets to New Assets"
url: /assets/move-from-stack-assets-to-new-assets
uid: blt8b897ac66ea2648b
---

# Move from Stack Assets to New Assets

## Move from Stack Assets to New Assets

When transitioning from stack-based assets to the new Contentstack Assets, the way you structure, manage, and reuse assets changes significantly.

In the stack-based assets system, assets were tightly coupled with stacks, and teams often relied on workarounds (such as dummy content types) to manage metadata. With Contentstack Assets, you now have a dedicated, scalable asset management system with built-in support for reusability of assets - single source of truth, metadata, asset types, localization, and governance.

This guide walks you through the key actions to take after upgrading, using a dummy e-commerce company the Ridge & Rover use case to illustrate how to adopt the new system effectively. Contentstack Assets is available as a paid upgrade from the legacy Stack Asset Manager.

## How the Migration Works

Contentstack manages the migration from stack assets to Contentstack Assets end to end. During migration, Contentstack transforms your existing assets to support Contentstack Assets. You do not run the migration yourself or rebuild your asset library manually.

The migration preserves the behavior of your existing assets. During and after migration, you see no change in how existing asset endpoints, delivery URLs, and functionality behave. Everything that worked before migration continues to work the same way.

After migration completes, Contentstack enables the new Contentstack Assets features for your organization, alongside the existing behavior you already rely on.

**Note:** This migration suits organizations with large asset libraries. Assets that number in the thousands migrate without manual rework.

### What Keeps Working

The migration changes where and how your assets are managed, not how your published content is delivered or consumed. The following stay exactly as they are today:

-   No downtime. The migration runs as a background process, so your live site, apps, and published content stay available throughout.
-   Your Content Delivery API (CDA) and Content Management API (CMA) integrations continue to work unchanged, and no code changes or re-integration are required.
-   Existing webhooks, automations, and SDK calls keep functioning without modification.
-   All published assets continue to be delivered without interruption, so the end-user experience is unaffected.
-   If an issue occurs during migration, Contentstack can halt and roll it back before completion, so you are not left in a broken in-between state.

### Delivery URLs and API Endpoints

Your delivery URLs do not change during or after migration. Assets continue to be served from the same image delivery API you use today, so existing references resolve without any update.

The existing asset endpoints remain supported after migration. Any asset you add after migration also follows the original URL pattern and works with the v3 endpoints, so your current integrations continue to function.

### Asset References in Entries

You do not update any entries after migration. Contentstack remaps the existing asset references in your entries to the corresponding assets in Contentstack Assets automatically. This applies to references wherever they appear in your entries, so no manual or scripted update is required.

## The Migration Process

Migration runs in three phases. Your Customer Success Manager (CSM) and the product team help you plan and run each one.

### Before Migration

-   Work with your CSM and the product team to choose a migration window that suits you.
-   Migration time varies with the number of assets, the number of entries, the volume of published assets and entries, and the number of publish environments in your organization. As a benchmark, migrating about 200,000 assets takes roughly 20 minutes.

### During Migration

The migration runs as a background process, with no expected downtime. Some activities stay fully supported, while others are restricted to protect data consistency.

Supported activities, with no impact:

-   Uploading assets
-   Creating entries
-   Updating entries and associating assets

Restricted activities, which you avoid during the migration window:

-   Creating, updating, or deleting stacks
-   Creating, updating, or deleting branches
-   Modifying users
-   Changing roles or permissions

**Note:** These restrictions protect data consistency during the migration window only. They do not apply after migration completes.

### After Migration

-   Your CSM notifies you once migration is complete.
-   All your data is available in Contentstack Assets.

## Important: Contentstack Assets Is a One-Way Upgrade

**Warning:** Downgrading to the legacy Stack Asset Manager after migration is not supported. Once migration completes, your organization continues on the Contentstack Assets paid tier. Plan your migration window with this in mind, and raise any concerns with your CSM before migration begins.

Contentstack can roll back the migration only before it completes. After migration, engineering and product teams remain available to support you if any issues arise.

## What Changes After Moving to Contentstack Assets?

After moving from stack-based assets to Contentstack Assets, certain asset management workflows and permissions behave differently. Understanding these changes helps teams manage users, roles, localization, and asset governance more effectively in the new system.

### User Access and Onboarding

User access to Contentstack Assets is managed separately from CMS.

During migration, your existing stack users are added to the corresponding space automatically, with equivalent permissions, so your current team needs no action.

Going forward, you add each new user to both the stack and the space, because access to each is managed independently. This separation lets you control asset access independently across spaces and teams - for example, you can grant a vendor upload access to one space without any access to your CMS stack or other spaces.

### Roles and Permissions

Contentstack Assets uses a separate role and permission model from CMS.

During migration, new Assets system roles are created and mapped to their corresponding CMS roles.

Unlike CMS roles, Assets system roles cannot be edited after creation.

<table><tbody><tr><td><strong>CMS Role</strong>&nbsp;</td><td><strong>Assets Role</strong>&nbsp;</td></tr><tr><td>Admin&nbsp;</td><td>Space Admin&nbsp;</td></tr><tr><td>Developer&nbsp;</td><td>Asset Developer&nbsp;</td></tr><tr><td>Content Manager&nbsp;</td><td>Asset Manager</td></tr></tbody></table>

To preserve flexibility for organizations that previously customized CMS roles, additional custom roles are automatically created during migration:

-   CMS Developer role for Assets
-   CMS Content Manager role for Assets

These custom roles can be modified based on your organization’s requirements.

Permissions are now managed at the space level instead of the stack level, so you can scope access to only the assets a team needs. This supports custom roles for external vendors, legal reviewers, or regional teams with only the access they require.

**Note:** Changes to asset-related permissions must be managed from the corresponding Space Settings in Contentstack Assets.

### Asset Localization

In stack-based assets, an asset had no concept of locale - the same file and metadata served every language. Contentstack Assets adds native, linked localization, so a single asset can hold locale-specific versions of its title, description, metadata, and file. You manage one asset record and deliver the right version for each locale, without duplicating assets per language.

#### Configure Locales Before Localizing

Localization depends on matching locale configuration between CMS and Contentstack Assets. Before you localize an asset:

-   Make sure the required locales exist in the CMS stack.
-   Make sure the corresponding languages are enabled in the relevant Assets space or workspace.

Assets used in localized entries rely on this matching configuration to resolve the correct locale.

#### How Localized Assets Are Retrieved

To retrieve an asset in a specific locale, pass the locale query parameter. This scopes delivery to the requested locale and is the recommended method for all new and localized-asset integrations. For example, to request the fr-fr version of an asset:

```
GET /v3/assets/{asset_uid}?environment={env}&locale=fr-fr&include_fallback=true
```

Use include\_fallback=true to serve the fallback-locale asset when the requested locale has no published version. Fallback resolves toward the master language (for example, fr-fr → en-us).

Localizing an asset does not change delivery on its own. A localized variant is served only when it is published in that locale.

**Note:** Some existing integrations pass the locale in the request header only, not as a query parameter. In that case, delivery is not scoped to the requested locale and may return the asset from another published locale. This behavior is retained for backward compatibility but is not recommended. Migrate to the locale query parameter for locale-accurate delivery.

## What Is Possible Post Migration?

In stack-based assets:

-   Metadata was often stored using dummy content types
-   Assets were not reusable across stacks so assets were duplicated in each stack
-   Localization required separate assets per locale
-   Limited filtering and governance

With Contentstack Assets:

-   Assets are centrally managed in spaces and can be shared across stacks
-   Metadata is handled via user-defined fields
-   Assets are structured, searchable, and reusable
-   Localization is native and linked

**Note:** Some capabilities may require additional configuration or setup after migration depending on your organization’s requirements and workflows.

## Example Use Case - Ridge & Rover

Ridge & Rover operates multiple digital experiences:

-   B2C storefront
-   B2B platform
-   Schools platform

Each experience uses shared and localized assets across:

-   Ridge & Rover B2C Site
-   Ridge & Rover B2B Site
-   Ridge & Rover Schools Site

After migrating to Contentstack Assets, they restructured their asset strategy using the steps below.

## 1\. Organize Assets in Spaces for Reuse

In Contentstack Assets, spaces define how assets are organized, governed, and reused across stacks. A well-structured space strategy ensures better discoverability, access control, and scalability.

### One Space per Stack (Stack-Specific Assets)

When you create a stack a dedicated space will be created for each stack to store assets exclusive for that stack.

Example:

-   Ridge&Rover-B2c
-   Ridge&Rover-B2B
-   Ridge&Rover-Schools

Use this for:

-   Page-specific images
-   Campaign assets unique to a single stack
-   Stack-level content that is not reused

### One Global Space (Shared Assets)

Create a common space for assets that are reused across multiple stacks.

Example: Ridge & Rover – Global Brand Assets

Use this for:

-   Logos and brand elements shared/reused across stacks
-   Icons and design systems
-   Shared marketing and lifestyle imagery

### One Vendor Space (External Assets)

Create a separate space for assets sourced from external vendors or partners.

Example: Partnerstore – Sneaker Nest

Use this for:

-   Vendor product images
-   Third-party content
-   Partner-specific assets with licensing constraints

Link these spaces to your stacks using Assets Hub to enable seamless asset selection in CMS.

## 2\. Create User-Defined Fields

In stack assets, Ridge & Rover previously stored asset metadata using a custom content type (for example, to track campaign details or licensing information).

With Contentstack Assets, this is replaced by user-defined fields.

### Example: Campaign Metadata

Ridge & Rover creates a field: **Campaign Name (Single line text)**

This allows them to:

-   Tag assets to campaigns
-   Filter assets by campaign

### Example: Asset Rights (Group Field)

They also define a group field called **Asset Rights**, which includes:

-   Location
-   License type
-   Usage period
-   Copyright
-   Photographer details (nested group)

This structure enables:

-   Better governance
-   Compliance tracking
-   Advanced filtering

With the user-defined fields, metadata is now directly attached to assets instead of being managed separately.

## 3\. Associate Fields with Asset Types

Once fields are created, the next step is to associate them with asset types.

In Contentstack Assets:

-   Fields become usable only when linked to asset types
-   This ensures consistent metadata across similar assets

Ridge & Rover, for their product images associated the following fields with asset type:

-   Asset Type: Product Image (JPEG)
-   Associated fields:
    -   Campaign Name
    -   Asset Rights

Now, whenever an image is uploaded, required fields appear automatically. Teams can filter assets based on these fields

## 4\. Create Custom Asset Types

Out-of-the-box asset types may not cover all business needs. Contentstack Assets allows you to define custom asset types.

Ridge & Rover manages 3D product previews. They create a custom asset type:

-   **Asset Type**: 3D Model
-   **MIME Type**: model/3mf
-   **Fields**:
    -   Product SKU
    -   Dimensions
    -   License Expiry
    -   Asset Rights

This ensures correct metadata for specialized assets, enforces validation rules, and improves discovery and filtering.

## 5\. Define Locales and Localize Assets

In stack assets:

-   Localization required separate assets
-   No relationship between language variants

In Contentstack Assets, localization is native and linked

### Step 1: Add Languages to Workspace

Ridge & Rover adds languages (e.g., French) to their workspace:

**Assets** > **Space Settings** > **Workspaces** > **Add Language**

Only enabled languages can be used for asset localization.

### Step 2: Localize Assets

On the English product page, Ridge & Rover has product images in English

They now:

1.  Switch to French
2.  Replace or update the asset
3.  Save the image to create a localized version

This creates a localized version of the asset tied to the fallback locale.

## Best Practices After Migration

To fully leverage Contentstack Assets:

-   Replace dummy content types with user-defined fields and asset types
-   Standardize metadata using asset types
-   Use custom asset types for specialized formats
-   Enable workspace-level languages before localization
-   Structure assets into spaces for reuse across stacks

After completing these steps, you can explore advanced capabilities:

-   AI-powered tagging and search
-   Visual markup for images
-   Saved views and filters
-   Asset recommendations in CMS

Moving from stack assets to Contentstack Assets is not just a migration, it is a shift to a structured, scalable, and intelligent asset management system.

## Frequently Asked Questions

**Is there any downtime during migration?**

No. The migration runs in the background and does not affect your daily operations.

**Is my live site or app affected?**

No. All published assets and front-end experiences continue to work without disruption.

**Do I need to make any API or code changes?**

No. Your existing Content Management API (CMA) and Content Delivery API (CDA) integrations continue to work as-is.

**Can I continue uploading assets and updating entries during migration?**

Yes. Asset uploads and entry updates are supported during the migration window.

**Why are stack, branch, user, and role changes restricted during migration?**

These changes can affect data consistency mid-migration. The restriction is temporary and lifts once migration completes.

**Can I revert to the legacy Stack Asset Manager after migration?**

No. The upgrade to Contentstack Assets is permanent. Plan accordingly, and raise any concerns with your CSM before the migration window begins.

**Do asset URLs change?**

No. Existing published asset URLs continue to resolve as before.

**Do I need to re-invite my team to Contentstack Assets?**

No, not for your existing team. Existing stack users are added to the corresponding space automatically during migration. Only new users going forward need to be added to both the stack and the space.

**Who do I contact with questions?**

Reach out to your Customer Success Manager (CSM) for questions or assistance during the migration process.
