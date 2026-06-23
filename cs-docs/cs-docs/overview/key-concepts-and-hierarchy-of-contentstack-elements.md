---
title: "[Introduction to Contentstack - a Headless CMS] - Key Concepts and Hierarchy of Contentstack Elements"
description: Key Concepts and Hierarchy of Contentstack Elements
url: https://www.contentstack.com/docs/headless-cms/key-concepts-and-hierarchy-of-contentstack-elements
product: Contentstack
doc_type: overview
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-25
---

# [Introduction to Contentstack - a Headless CMS] - Key Concepts and Hierarchy of Contentstack Elements

This page introduces the foundational components of Contentstack and how they relate to each other, for developers and content managers who are new to the platform and need to understand the core hierarchy and concepts used to manage content operations.

## Key Concepts and Hierarchy of Contentstack Elements

If you are new to Contentstack, this guide helps you explore the foundational components of Contentstack, understand how they relate to each other, and learn how to use them effectively to manage your content operations.

## Platform Architecture

These components define the organizational structure of your content within Contentstack.

### Organization

The organization acts as the parent entity for your company or team. It encapsulates multiple stacks and branches and manages all associated resources. Learn more about [Organizations](../developers/organization.md).

### Stacks

A stack is a container that holds all the content (entries) and assets related to a site. It also serves as the central hub for collaboration across projects, where multiple users can work together. Learn more about [Stacks](/docs/developers/set-up-stack).

### Branches

Branches allow you to create multiple copies of your stack content. Changes can be made within different branches without affecting the main branch. Learn more about [Branches](../../api-docs/developers/apis/content-management-api/branches.md).

**Note:** The term module may refer to a conceptual part of Contentstack, not a distinct feature.

## Content Structure and Modeling

These elements enable you to define and organize the actual content you deliver to users.

### Content Types

Content types let you define the structure or blueprint of a page or a section of your digital property. It helps you lay the foundation of your content. You use these to build out repeatable formats (e.g., blog posts, product pages). Learn more about [Content Types](/docs/developers/create-content-types).

### Entries

Entries are the actual pieces of content created using one of the defined content types. To create an entry, content managers simply fill in data in the fields of a content type. Learn more about [Entries](/docs/content-managers/author-content#create-and-manage-content).

### Assets

Assets refer to all the media files (e.g., images, videos, PDFs, audio files, and so on) uploaded to Contentstack and reused across entries. Learn more about [Assets](/docs/content-managers/author-content#create-and-manage-assets).

### Language and Localization

Contentstack offers multilingual support, allowing you to create entries in any language of your choice. Localization is the process of making an entry available in another language. Learn more about [Localization](/docs/developers/multilingual-content).

### Entry Variants

Variants in Contentstack Personalize are alternative versions of your content or experiences, each represented in the CMS as a Variant Group matching the experience name and managed via the Entry Editor. They let you deliver real-time personalized content, run A/B tests, and iteratively optimize campaigns by creating and analyzing multiple entry variants for different audiences or contexts. Learn more about [Variants](/docs/developers/variants).

### Visual Builder

Visual Builder provides a WYSIWYG (What You See Is What You Get) interface, allowing users to build and update content-rich pages visually. It's ideal for marketers or non-technical users who want to structure content without directly handling code or schema fields. Learn more about [Visual Builder](/docs/content-managers/visual-builder).

## Users and Permissions

Manage who can do what inside a stack or organization.

### Users

A user is any member who can access a stack within an organization. Learn more about [Users](/docs/developers/invite-users-and-assign-roles#stack-users).

### Roles

A set of permissions that defines what a user can view, create, update, or delete. Stack Owners or Admins assign roles to users. Learn more about [Roles](/docs/developers/invite-users-and-assign-roles#stack-roles).

## Content Delivery

Manage where, when, and how your content is delivered to your audience.

### Environments

A publishing environment corresponds to one or more deployment servers or a content delivery destination (e.g., staging, production) where entries and assets are published. Learn more about [Environments](/docs/developers/set-up-environments).

### Live Preview

The Live Preview feature allows you to see content changes in real time as you make them. Each edit is instantly reflected in the preview panel, helping you visualize updates before saving or publishing. This streamlines the content creation and review process. Learn more about [Live Preview](/docs/content-managers/author-content#work-with-live-preview).

### Releases

Releases are bundles of entries and assets that can be deployed (published or unpublished) together in a single action across environments. Learn more about [Releases](/docs/content-managers/create-and-manage-releases).

### Publish Queue

Publish Queue places each publish or unpublish request into a background queue and processes them one after another. Users can track the status of each of these tasks in the Publish Queue. Learn more about the [Publish Queue](/docs/content-managers/publish-content#view-publish-status).

### Regions

Regions define where your data is hosted. Contentstack currently supports six regions: AWS North America, AWS Europe, Azure North America, Azure Europe, GCP North America, and GCP Europe. Learn more about [Regions](../developers/contentstack-regions.md).

## Workflows

Workflows allow you to define the steps content must go through (e.g., Draft → Review → Approved) before publication. Supports conditional approvals and user assignments. Learn more about [Workflows](/docs/developers/set-up-workflows-and-publish-rules).

### Webhooks

HTTP callbacks triggered by content changes. Used to notify or sync with third-party systems (e.g., Slack, AWS, Azure). Learn more about [Webhooks](/docs/developers/set-up-webhooks).

## Tokens

Contentstack APIs allow robust programmatic access to content. Contentstack has Delivery Tokens, Access Tokens, Authtokens, and Management Tokens. Tokens are required to authorize API calls. Learn more about [Tokens](/docs/developers/create-tokens).

## Content Management Tools

Search for content, track, and monitor everything that happens within your stack.

### Search Content

Search functionality makes it easy to find assets or entries within a specific stack. You can save custom Views, Search with Filters, perform a Quick Search, or use Advanced Search options for more precise results. Learn more about [Search](/docs/content-managers/search-content).

### Timeline

Timeline allows you to preview how your website will look on a future date and time by simulating scheduled content changes—ideal for campaigns or planned launches. Learn more about [Timeline](/docs/content-managers/timeline).

### Audit Log

Logs of all actions taken in a stack, including create/update/delete activities for content and assets. This helps the user track the current status of the existing content. Learn more about the [Contentstack Audit Log](../developers/set-up-stack/monitor-stack-activities-in-audit-log.md).

### Analytics

Centralized platform to monitor and view performance metrics and the usage data for your CMS, Launch, and Automate services. Learn more about [Analytics](/docs/analytics).

## Data Management

Manage deleted items and recover content as needed.

### Trash

Temporarily retains deleted items, allowing users to restore them if needed. Learn more about [Trash](/docs/developers/manage-trash).

## Common questions

### What is the relationship between an organization and a stack?
An organization acts as the parent entity, and it encapsulates multiple stacks and branches and manages all associated resources.

### What is the difference between content types and entries?
Content types define the structure or blueprint, while entries are the actual pieces of content created using one of the defined content types.

### When should I use environments and releases?
Use environments to define where entries and assets are published (e.g., staging, production), and use releases to bundle entries and assets to be deployed together in a single action across environments.

### What are tokens used for in Contentstack?
Tokens are required to authorize API calls and enable programmatic access to content through Contentstack APIs.

<!-- filename: introduction-to-contentstack-a-headless-cms-key-concepts-and-hierarchy-of-contentstack-elements.md -->