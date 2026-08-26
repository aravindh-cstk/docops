---
title: "Glossary"
description: "Explore Contentstack CMS: Learn about content modeling, workflows, and personalized experiences for seamless content management and delivery."
url: /headless-cms/glossary
uid: blt12b01cbf8be6f05a
---

# Glossary

## Glossary

This reference document defines key terms and core concepts across the Contentstack CMS, including structured content, content modeling, publishing workflows, developer tools, and personalization features—serving as a clear reference for content managers, developers, and marketers.

## Core Concepts

-   [Stacks](/docs/headless-cms/about-stack): Centralized repository that holds all the content (entries and assets) related to your project. They also serve as a collaboration space where multiple users can work together to [create](/docs/headless-cms/create-an-entry), [edit](/docs/headless-cms/edit-an-entry), [approve](/docs/headless-cms/send-an-entry-for-publish-or-unpublish-approval), and [publish](/docs/headless-cms/publish-an-entry) content.
-   [Content types](/docs/headless-cms/about-content-types): Structure or blueprint of a page or a section of your web or mobile property. They consist of fields which are the building blocks for structured content.
-   [Entries](/docs/headless-cms/about-entries): Actual pieces of content that you want to publish.
-   [Assets](/docs/headless-cms/about-assets): Files stored in the system, such as images, videos, PDFs, audio files, and so on.
-   [Environments](/docs/headless-cms/about-environments): One or more deployment servers or content delivery destinations (web page URLs) where the entries need to be published.
-   [Trash](/docs/headless-cms/about-trash): Temporary storage area for deleted content types, global fields, entries, and assets, allowing users to review and restore them within the stack.

## Content Modeling

-   [Fields](/docs/headless-cms/about-fields): Building blocks for structured content.
-   [Reference](/docs/headless-cms/reference): Field that allows you to create references to entries of the same or other content types.
-   [Modular block](/docs/headless-cms/modular-blocks): Field that allows users to dynamically create and modify components of a page or app on the go.
    -   [Developers](/docs/headless-cms/types-of-roles#developer) first need to [add this field](/docs/headless-cms/modular-blocks/#developer) while [creating a content type](/docs/headless-cms/create-a-content-type) and define blocks like “Banner”, “Product Details”, or “Video”.
    -   Content managers can choose from these blocks while creating entries.
    -   For flexibility, you can nest [Modular blocks within Global fields](/docs/headless-cms/modular-blocks-within-global-fields).
-   [Global field](/docs/headless-cms/global): Reusable field/group of fields you can use across content types. You can also nest [Global Fields within Modular Blocks](/docs/headless-cms/global-fields-as-blocks-within-modular-blocks).
-   [Taxonomy](/docs/headless-cms/about-taxonomy): Categorize content to ease navigation, search, and retrieval.
-   [Branches](/docs/headless-cms/about-branches/): Create stack copies to use as independent workspaces.

## Roles and Permissions

-   **Roles**: Permissions assigned to users through an [organization role](/docs/administration/about-administration-roles) and one or more [stack roles](/docs/headless-cms/about-stack-roles). Users can be assigned stack roles when added to an organization or as existing members. Predefined roles include:
    -   **Organization roles**: Organization [Owner](/docs/administration/about-administration-roles#organization-owner), [Admin](/docs/administration/about-administration-roles#organization-admin), and [Member](/docs/administration/about-administration-roles#organization-member)
    -   **Stack roles**: Stack [Owner](/docs/headless-cms/types-of-roles#owner), [Developer](/docs/headless-cms/types-of-roles#developer), [Content Manager](/docs/headless-cms/types-of-roles#content-manager), and [Custom Roles](/docs/headless-cms/types-of-roles#custom-role)
-   [**Audit Log**](/docs/headless-cms/monitor-stack-activities-in-audit-log): Records all activities performed in the stack, including content updates, user logins, publishing events, and administrative actions, helping maintain accountability and security.

## Publishing and Workflow

-   [Publish Content](/docs/headless-cms/publish-an-entry): Push entries or assets to target environments.
-   **Preview Content:** Preview entries before publishing, or by [creating a preview environment](/docs/headless-cms/add-a-preview-environment).
-   **Versions:** Track changes with [entry versions](/docs/headless-cms/understanding-entry-versions) and [asset versions](/docs/headless-cms/about-asset-versioning).
-   [Localization](/docs/headless-cms/about-languages): Adapt content across multiple languages and regions.
-   [Releases](/docs/headless-cms/about-releases): Bundle entries/assets and deploy together.
-   [Workflows](/docs/headless-cms/about-workflows): Define stages, with [workflow stages](/docs/headless-cms/about-workflow-stages).
-   [Automate](/docs/agent-os/what-is-contentstack-agent-os/): Visual tool to automate workflows with trigger-action configurations.
-   [Timeline](/docs/headless-cms/about-timeline): Visualize scheduled updates.
-   [Live Preview](/docs/headless-cms/about-live-preview): Real-time editing preview across channels.
-   [Publish Rules](/docs/headless-cms/about-publish-rules): Control publishing based on approval conditions or workflow stage.

## Developer Tools, APIs, and Integrations

-   [Command Line Interface (CLI)](/docs/headless-cms/install-the-cli/v1): Perform content ops via terminal scripting.
-   [SCIM API](/docs/developers/apis/scim-api): Automates user provisioning with SCIM standard.
-   [Synchronization API](/docs/developers/apis/content-delivery-api/synchronization): Sync content across systems/environments.
-   [Content Delivery API](/docs/developers/apis/content-delivery-api): Fetches published content.
-   [Content Management API](/docs/developers/apis/content-management-api): Manage content types, entries, and assets.
-   [GraphQL Content Delivery API](/docs/developers/apis/graphql-content-delivery-api): Fetch customizable content via GraphQL.
-   [Image Delivery API](/docs/developers/apis/image-delivery-api): Retrieve/manipulate images.
-   [Webhook](/docs/headless-cms/about-webhooks): HTTP callback for real-time integration triggers.
-   [Tokens](/docs/headless-cms/overview-of-tokens): Secure, encoded strings used to authorize API requests in Contentstack. Types include:
    -   [Delivery Token](/docs/headless-cms/about-delivery-tokens): Grants read-only access to published content via the Content Delivery API (CDA); scoped to specific environments.
    -   [Preview Token](/docs/headless-cms/about-delivery-tokens#understanding-preview-tokens): Grants access to unpublished content for live previews through the website’s preview panel.
    -   [Authtoken](/docs/headless-cms/types-of-tokens#authentication-tokens-auth-tokens): User-specific token obtained upon login, enabling authenticated operations via the Content Management API (CMA).
    -   [Management Token](/docs/headless-cms/about-management-tokens): Stack-level token with customizable scopes, used for secure, automated read-write or read-only access via the CMA.

## Personalization

-   [Personalize](/docs/personalize/about-personalize/): Define and deliver tailored user experiences using variants and audience segmentation.
-   [Variants](/docs/personalize/about-variants): Entry versions tailored to different user groups or for A/B testing.

## Other Features and Products

-   [Launch](/docs/launch/about-launch/): Deploy front-end websites built on Contentstack.
-   [Marketplace](/docs/marketplace/about-marketplace): Browse apps/extensions to extend CMS functionality.
-   [Brand Kit](/docs/brand-kit/about-brand-kit/): Manage branding, style guides, and voice.
-   [Visual Builder](/docs/headless-cms/about-visual-editor): Drag-and-drop interface for visual content editing.
-   [Analytics](/docs/analytics/about-analytics): Centralized CMS usage and performance insights.

**Note:** Experience Extensions use a legacy method. Prefer [UI locations](/docs/developer-hub/about-ui-locations/) to build and extend Contentstack apps.
