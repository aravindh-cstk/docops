---
title: "[Introduction to Contentstack - a Headless CMS] - Glossary"
description: Glossary of key terms and core concepts across the Contentstack CMS.
url: https://www.contentstack.com/docs/headless-cms/glossary
product: Contentstack
doc_type: glossary
audience:
  - content managers
  - developers
  - marketers
version: current
last_updated: 2026-03-25
---

# [Introduction to Contentstack - a Headless CMS] - Glossary

This page provides a glossary of key terms and core concepts used across the Contentstack CMS. It is intended for content managers, developers, and marketers who need a shared reference when modeling content, managing roles, publishing, integrating via APIs, or using personalization features.

## Glossary

This reference document defines key terms and core concepts across the Contentstack CMS, including structured content, content modeling, publishing workflows, developer tools, and personalization features—serving as a clear reference for content managers, developers, and marketers.

## Core Concepts
- [Stacks](../developers/set-up-stack/about-stack.md): Centralized repository that holds all the content (entries and assets) related to your project. They also serve as a collaboration space where multiple users can work together to [create](../content-managers/author-content/create-an-entry.md), [edit](../content-managers/author-content/edit-an-entry.md), [approve](../content-managers/use-workflows/send-an-entry-for-publish-or-unpublish-approval.md), and [publish](/docs/content-managers/publish-content) content.
- [Content types](../developers/create-content-types/about-content-types.md): Structure or blueprint of a page or a section of your web or mobile property. They consist of fields which are the building blocks for structured content.
- [Entries](../content-managers/author-content/about-entries.md): Actual pieces of content that you want to publish.
- [Assets](/docs/content-managers/working-with-assets/about-assets): Files stored in the system, such as images, videos, PDFs, audio files, and so on.
- [Environments](../developers/set-up-environments/about-environments.md): One or more deployment servers or content delivery destinations (web page URLs) where the entries need to be published.
- [Trash](../developers/manage-trash/about-trash.md): Temporary storage area for deleted content types, global fields, entries, and assets, allowing users to review and restore them within the stack.

## Content Modeling
- [Fields](../developers/create-content-types/about-fields.md): Building blocks for structured content.
- [Reference](../developers/create-content-types/reference.md): Field that allows you to create references to entries of the same or other content types.
- [Modular block](../developers/create-content-types/modular-blocks.md): Field that allows users to dynamically create and modify components of a page or app on the go.[Developers](../developers/invite-users-and-assign-roles/types-of-roles.md#developer) first need to [add this field](../developers/create-content-types/modular-blocks.md#developer) while [creating a content type](../developers/create-content-types/create-a-content-type.md) and define blocks like “Banner”, “Product Details”, or “Video”.
- Content managers can choose from these blocks while creating entries.
- For flexibility, you can nest [Modular blocks within Global fields](../developers/global-field/modular-blocks-within-global-fields.md).
- [Global field](../developers/create-content-types/global.md): Reusable field/group of fields you can use across content types. You can also nest [Global Fields within Modular Blocks](../developers/global-field/global-fields-as-blocks-within-modular-blocks.md).
- [Taxonomy](../developers/taxonomy/about-taxonomy.md): Categorize content to ease navigation, search, and retrieval.
- [Branches](../developers/branches/about-branches.md): Create stack copies to use as independent workspaces.

## Roles and Permissions
- **Roles**: Permissions assigned to users through an [organization role](../developers/organization/organization-roles.md) and one or more [stack roles](../developers/invite-users-and-assign-roles/about-stack-roles.md). Users can be assigned stack roles when added to an organization or as existing members. Predefined roles include:**Organization roles**: Organization [Owner](../developers/organization/organization-roles.md#organization-owner), [Admin](../developers/organization/organization-roles.md#organization-admin), and [Member](../developers/organization/organization-roles.md#organization-member)
- **Stack roles**: Stack [Owner](../developers/invite-users-and-assign-roles/types-of-roles.md#owner), [Developer](../developers/invite-users-and-assign-roles/types-of-roles.md#developer), [Content Manager](../developers/invite-users-and-assign-roles/types-of-roles.md#content-manager), and [Custom Roles](../developers/invite-users-and-assign-roles/types-of-roles.md#custom-role)
- [**Audit Log**](../developers/set-up-stack/monitor-stack-activities-in-audit-log.md): Records all activities performed in the stack, including content updates, user logins, publishing events, and administrative actions, helping maintain accountability and security.

## Publishing and Workflow
- [Publish Content](/docs/content-managers/publish-content): Push entries or assets to target environments.
- **Preview Content:** Preview entries before publishing, or by [creating a preview environment](../developers/set-up-environments/add-a-preview-environment.md).
- **Versions:** Track changes with [entry versions](/docs/content-managers/entry-versions) and [asset versions](/docs/content-managers/asset-versions).
- [Localization](../developers/multilingual-content/about-languages.md): Adapt content across multiple languages and regions.
- [Releases](../content-managers/create-and-manage-releases/about-releases.md): Bundle entries/assets and deploy together.
- [Workflows](../developers/set-up-workflows-and-publish-rules/about-workflows.md): Define stages, with [workflow stages](../developers/set-up-workflows-and-publish-rules/about-workflow-stages.md).
- [Automate](/docs/developers/automation-hub-guides/about-automation-hub/): Visual tool to automate workflows with trigger-action configurations.
- [Timeline](../content-managers/timeline/about-timeline.md): Visualize scheduled updates.
- [Live Preview](../content-managers/author-content/about-live-preview.md): Real-time editing preview across channels.
- [Publish Rules](../developers/set-up-workflows-and-publish-rules/about-publish-rules.md): Control publishing based on approval conditions or workflow stage.

## Developer Tools, APIs, and Integrations
- [Command Line Interface (CLI)](/docs/developers/cli): Perform content ops via terminal scripting.
- [SCIM API](../../api-docs/api-detail/scim-api.md): Automates user provisioning with SCIM standard.
- [Synchronization API](../../api-docs/api-detail/content-delivery-api.md#synchronization): Sync content across systems/environments.
- [Content Delivery API](../../api-docs/api-detail/content-delivery-api.md): Fetches published content.
- [Content Management API](../../api-docs/api-detail/content-management-api.md): Manage content types, entries, and assets.
- [GraphQL Content Delivery API](../../api-docs/api-detail/graphql-content-delivery-api.md): Fetch customizable content via GraphQL.
- [Image Delivery API](../../api-docs/api-detail/image-delivery-api.md): Retrieve/manipulate images.
- [Webhook](../developers/set-up-webhooks/about-webhooks.md): HTTP callback for real-time integration triggers.
- [Tokens](../developers/create-tokens/overview-of-tokens.md): Secure, encoded strings used to authorize API requests in Contentstack. Types include:[Delivery Token](../developers/create-tokens/about-delivery-tokens.md): Grants read-only access to published content via the Content Delivery API (CDA); scoped to specific environments.
- [Preview Token](../developers/create-tokens/about-delivery-tokens.md#understanding-preview-tokens): Grants access to unpublished content for live previews through the website’s preview panel.
- [Authtoken](../developers/create-tokens/types-of-tokens.md#authentication-tokens-auth-tokens): User-specific token obtained upon login, enabling authenticated operations via the Content Management API (CMA).
- [Management Token](../developers/create-tokens/about-management-tokens.md): Stack-level token with customizable scopes, used for secure, automated read-write or read-only access via the CMA.

## Personalization
- [Personalize](../personalize/about-personalize.md): Define and deliver tailored user experiences using variants and audience segmentation.
- [Variants](../personalize/about-variants.md): Entry versions tailored to different user groups or for A/B testing.

## Other Features and Products
- [Launch](../developers/launch/about-launch.md): Deploy front-end websites built on Contentstack.
- [Marketplace](../developers/marketplace-platform-guides/about-marketplace.md): Browse apps/extensions to extend CMS functionality.
- [Brand Kit](../content-managers/brand-kit/about-brand-kit.md): Manage branding, style guides, and voice.
- [Visual Builder](/docs/content-managers/visual-builder/about-visual-builder/): Drag-and-drop interface for visual content editing.
- [Analytics](../analytics/about-analytics.md): Centralized CMS usage and performance insights.

**Note:** [Experience Extensions](../developers/experience-extensions-overview/about-experience-extensions.md) use a legacy method. Prefer [UI locations](../developers/developer-hub/about-ui-locations.md) to build and extend Contentstack apps.

## Common questions

### Who is this glossary intended for?
This reference document defines key terms and core concepts across the Contentstack CMS, including structured content, content modeling, publishing workflows, developer tools, and personalization features—serving as a clear reference for content managers, developers, and marketers.

### Where can I learn about roles in Contentstack?
See [organization role](../developers/organization/organization-roles.md) and [stack roles](../developers/invite-users-and-assign-roles/about-stack-roles.md).

### Which APIs are listed for developers?
The page lists [Content Delivery API](../../api-docs/api-detail/content-delivery-api.md), [Content Management API](../../api-docs/api-detail/content-management-api.md), [GraphQL Content Delivery API](../../api-docs/api-detail/graphql-content-delivery-api.md), [Image Delivery API](../../api-docs/api-detail/image-delivery-api.md), [Synchronization API](../../api-docs/api-detail/content-delivery-api.md#synchronization), and [SCIM API](../../api-docs/api-detail/scim-api.md).

### What is the recommended approach for building and extending apps?
**Note:** [Experience Extensions](../developers/experience-extensions-overview/about-experience-extensions.md) use a legacy method. Prefer [UI locations](../developers/developer-hub/about-ui-locations.md) to build and extend Contentstack apps.