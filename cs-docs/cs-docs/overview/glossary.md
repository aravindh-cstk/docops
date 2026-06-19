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
- [Stacks](/docs/developers/set-up-stack/about-stack): Centralized repository that holds all the content (entries and assets) related to your project. They also serve as a collaboration space where multiple users can work together to [create](/docs/content-managers/working-with-entries/create-an-entry), [edit](/docs/content-managers/working-with-entries/edit-an-entry), [approve](/docs/content-managers/use-workflows/send-an-entry-for-publish-or-unpublish-approval), and [publish](/docs/content-managers/publish-content) content.
- [Content types](/docs/developers/create-content-types/about-content-types): Structure or blueprint of a page or a section of your web or mobile property. They consist of fields which are the building blocks for structured content.
- [Entries](/docs/content-managers/working-with-entries/about-entries): Actual pieces of content that you want to publish.
- [Assets](/docs/content-managers/working-with-assets/about-assets): Files stored in the system, such as images, videos, PDFs, audio files, and so on.
- [Environments](/docs/developers/set-up-environments/about-environments): One or more deployment servers or content delivery destinations (web page URLs) where the entries need to be published.
- [Trash](/docs/developers/manage-trash/about-trash): Temporary storage area for deleted content types, global fields, entries, and assets, allowing users to review and restore them within the stack.

## Content Modeling
- [Fields](/docs/developers/create-content-types/about-fields): Building blocks for structured content.
- [Reference](/docs/developers/create-content-types/reference): Field that allows you to create references to entries of the same or other content types.
- [Modular block](/docs/developers/create-content-types/modular-blocks): Field that allows users to dynamically create and modify components of a page or app on the go.[Developers](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) first need to [add this field](/docs/developers/create-content-types/modular-blocks/#developer) while [creating a content type](/docs/developers/create-content-types/create-a-content-type) and define blocks like “Banner”, “Product Details”, or “Video”.
- Content managers can choose from these blocks while creating entries.
- For flexibility, you can nest [Modular blocks within Global fields](/docs/developers/global-field/modular-blocks-within-global-fields).
- [Global field](/docs/developers/create-content-types/global): Reusable field/group of fields you can use across content types. You can also nest [Global Fields within Modular Blocks](/docs/developers/global-field/global-fields-as-blocks-within-modular-blocks).
- [Taxonomy](/docs/developers/taxonomy/about-taxonomy): Categorize content to ease navigation, search, and retrieval.
- [Branches](/docs/developers/branches/about-branches/): Create stack copies to use as independent workspaces.

## Roles and Permissions
- **Roles**: Permissions assigned to users through an [organization role](/docs/owners-and-admins/organization-roles) and one or more [stack roles](/docs/developers/invite-users-and-assign-roles/about-stack-roles). Users can be assigned stack roles when added to an organization or as existing members. Predefined roles include:**Organization roles**: Organization [Owner](/docs/owners-and-admins/organization-roles#organization-owner), [Admin](/docs/owners-and-admins/organization-roles#organization-admin), and [Member](/docs/owners-and-admins/organization-roles#organization-member)
- **Stack roles**: Stack [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner), [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer), [Content Manager](/docs/developers/invite-users-and-assign-roles/types-of-roles#content-manager), and [Custom Roles](/docs/developers/invite-users-and-assign-roles/types-of-roles#custom-role)
- [**Audit Log**](/docs/developers/set-up-stack/monitor-stack-activities-in-audit-log): Records all activities performed in the stack, including content updates, user logins, publishing events, and administrative actions, helping maintain accountability and security.

## Publishing and Workflow
- [Publish Content](/docs/content-managers/publish-content): Push entries or assets to target environments.
- **Preview Content:** Preview entries before publishing, or by [creating a preview environment](/docs/developers/set-up-environments/add-a-preview-environment).
- **Versions:** Track changes with [entry versions](/docs/content-managers/entry-versions) and [asset versions](/docs/content-managers/asset-versions).
- [Localization](/docs/developers/multilingual-content/about-languages): Adapt content across multiple languages and regions.
- [Releases](/docs/content-managers/create-and-manage-releases/about-releases): Bundle entries/assets and deploy together.
- [Workflows](/docs/developers/set-up-workflows-and-publish-rules/about-workflows): Define stages, with [workflow stages](/docs/developers/set-up-workflows-and-publish-rules/about-workflow-stages).
- [Automate](/docs/developers/automation-hub-guides/about-automation-hub/): Visual tool to automate workflows with trigger-action configurations.
- [Timeline](/docs/content-managers/timeline/about-timeline): Visualize scheduled updates.
- [Live Preview](/docs/content-managers/author-content/about-live-preview): Real-time editing preview across channels.
- [Publish Rules](/docs/developers/set-up-workflows-and-publish-rules/about-publish-rules): Control publishing based on approval conditions or workflow stage.

## Developer Tools, APIs, and Integrations
- [Command Line Interface (CLI)](/docs/developers/cli): Perform content ops via terminal scripting.
- [SCIM API](/docs/developers/apis/scim-api): Automates user provisioning with SCIM standard.
- [Synchronization API](/docs/developers/apis/content-delivery-api#synchronization): Sync content across systems/environments.
- [Content Delivery API](/docs/developers/apis/content-delivery-api): Fetches published content.
- [Content Management API](/docs/developers/apis/content-management-api): Manage content types, entries, and assets.
- [GraphQL Content Delivery API](/docs/developers/apis/graphql-content-delivery-api): Fetch customizable content via GraphQL.
- [Image Delivery API](/docs/developers/apis/image-delivery-api): Retrieve/manipulate images.
- [Webhook](/docs/developers/set-up-webhooks/about-webhooks): HTTP callback for real-time integration triggers.
- [Tokens](/docs/developers/create-tokens/overview-of-tokens): Secure, encoded strings used to authorize API requests in Contentstack. Types include:[Delivery Token](/docs/developers/create-tokens/about-delivery-tokens): Grants read-only access to published content via the Content Delivery API (CDA); scoped to specific environments.
- [Preview Token](/docs/developers/create-tokens/about-delivery-tokens#understanding-preview-tokens): Grants access to unpublished content for live previews through the website’s preview panel.
- [Authtoken](/docs/developers/create-tokens/types-of-tokens#authentication-tokens-auth-tokens): User-specific token obtained upon login, enabling authenticated operations via the Content Management API (CMA).
- [Management Token](/docs/developers/create-tokens/about-management-tokens): Stack-level token with customizable scopes, used for secure, automated read-write or read-only access via the CMA.

## Personalization
- [Personalize](/docs/personalize/about-personalize/): Define and deliver tailored user experiences using variants and audience segmentation.
- [Variants](/docs/personalize/about-variants): Entry versions tailored to different user groups or for A/B testing.

## Other Features and Products
- [Launch](/docs/developers/launch/about-launch/): Deploy front-end websites built on Contentstack.
- [Marketplace](/docs/developers/marketplace-platform-guides/about-marketplace): Browse apps/extensions to extend CMS functionality.
- [Brand Kit](/docs/content-managers/brand-kit/about-brand-kit/): Manage branding, style guides, and voice.
- [Visual Builder](/docs/content-managers/visual-builder/about-visual-builder/): Drag-and-drop interface for visual content editing.
- [Analytics](/docs/analytics/about-analytics): Centralized CMS usage and performance insights.

**Note:** [Experience Extensions](/docs/developers/experience-extensions-overview/about-experience-extensions) use a legacy method. Prefer [UI locations](/docs/developers/developer-hub/about-ui-locations/) to build and extend Contentstack apps.

## Common questions

### Who is this glossary intended for?
This reference document defines key terms and core concepts across the Contentstack CMS, including structured content, content modeling, publishing workflows, developer tools, and personalization features—serving as a clear reference for content managers, developers, and marketers.

### Where can I learn about roles in Contentstack?
See [organization role](/docs/owners-and-admins/organization-roles) and [stack roles](/docs/developers/invite-users-and-assign-roles/about-stack-roles).

### Which APIs are listed for developers?
The page lists [Content Delivery API](/docs/developers/apis/content-delivery-api), [Content Management API](/docs/developers/apis/content-management-api), [GraphQL Content Delivery API](/docs/developers/apis/graphql-content-delivery-api), [Image Delivery API](/docs/developers/apis/image-delivery-api), [Synchronization API](/docs/developers/apis/content-delivery-api#synchronization), and [SCIM API](/docs/developers/apis/scim-api).

### What is the recommended approach for building and extending apps?
**Note:** [Experience Extensions](/docs/developers/experience-extensions-overview/about-experience-extensions) use a legacy method. Prefer [UI locations](/docs/developers/developer-hub/about-ui-locations/) to build and extend Contentstack apps.