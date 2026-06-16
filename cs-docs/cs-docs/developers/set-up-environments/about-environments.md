---
title: Set Up Environments - About Environments
description: About Environments
url: https://www.contentstack.com/docs/developers/set-up-environments/about-environments
product: Contentstack
doc_type: concept
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# Set Up Environments - About Environments

This page explains what publishing environments are in Contentstack, how they’re used to publish and preview content across different destinations, and when to use specialized environments or webhooks for multi-server deployments. It’s intended for developers setting up delivery workflows and publishing channels across stacks and branches.

## About Environments

A publishing environment is a specific destination where your content (such as [entries](/docs/content-managers/author-content/about-entries) or [assets](/docs/content-managers/author-content/about-assets)) is delivered when published. Environments act as distinct channels tailored to specific publishing needs.

For example, you can use environments to preview content on an internal channel, such as a **staging** or **pre-production** website, accessible only to authorized users.

Organizations have complete control over the **environments** they create and how they use them to align with their requirements and workflows.

**Note:** Environments are [global modules](/docs/developers/branches/global-modules) available across all branches of your [stack](/docs/developers/set-up-stack/about-stack). Any environment created in the main branch is accessible in all other [branches](/docs/developers/branches/about-branches).

## Publishing Across Multiple Environments

With Contentstack, you can publish content across multiple environments.

For example, if your website has **development** and **production** environments, you can publish your content in the **development** environment to preview it before publishing it live in the **production** environment.

**Note:** Content published in Contentstack doesn't automatically appear on your website or app. Your website or application must have specific code to fetch this content from Contentstack.

## Specialized Publishing Environments

In Contentstack, you can create specialized publishing environments customized for specific channels or purposes, such as mobile apps or social media.

**Note:** Contentstack's [Automate](/docs/developers/automation-hub-guides/about-automation-hub) and [Webhooks](/docs/developers/set-up-webhooks/about-webhooks) can automatically publish your content to social media platforms, simplifying content distribution.

## Using Server for Multi-server Deployments

You can use Webhooks to deploy published content simultaneously across multiple servers within a single publishing environment.

Imagine your company runs a website on several servers in different regions, like the US, Europe, and Asia. When you publish new content in an environment, webhooks instantly alert all servers. This triggers each server to fetch and deploy the content immediately, ensuring efficient and synchronized global updates.

**Additional Resource: **Use our [Live Preview](/docs/content-managers/author-content/about-live-preview) feature to view your content in real time without saving or publishing it to any environment.

## Common questions

### Are environments shared across branches?
Yes. **Note:** Environments are [global modules](/docs/developers/branches/global-modules) available across all branches of your [stack](/docs/developers/set-up-stack/about-stack). Any environment created in the main branch is accessible in all other [branches](/docs/developers/branches/about-branches).

### Does publishing to an environment automatically update my website or app?
No. **Note:** Content published in Contentstack doesn't automatically appear on your website or app. Your website or application must have specific code to fetch this content from Contentstack.

### Can I publish the same content to multiple environments?
Yes. With Contentstack, you can publish content across multiple environments.

### Can webhooks deploy content to multiple servers at once?
Yes. You can use Webhooks to deploy published content simultaneously across multiple servers within a single publishing environment.