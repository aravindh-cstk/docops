---
title: "About Environments"
description: "Environments in Contentstack act as content delivery destinations, allowing seamless publishing, previewing, and management across multiple channels."
url: /headless-cms/about-environments
---

# About Environments

## About Environments

A publishing environment is a specific destination where your content (such as [entries](/docs/headless-cms/about-entries) or [assets](/docs/headless-cms/about-assets)) is delivered when published. Environments act as distinct channels tailored to specific publishing needs.

For example, you can use environments to preview content on an internal channel, such as a **staging** or **pre-production** website, accessible only to authorized users.

Organizations have complete control over the **environments** they create and how they use them to align with their requirements and workflows.

![CMS-Environments](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0de02aaf8db8ae5/69f311308a644d054ea6d634/CMS-Environments.png)

**Note:** Environments are [global modules](/docs/headless-cms/global-modules) available across all branches of your [stack](/docs/headless-cms/about-stack). Any environment created in the main branch is accessible in all other [branches](/docs/headless-cms/about-branches).

## Publishing Across Multiple Environments

With Contentstack, you can publish content across multiple environments.

For example, if your website has **development** and **production** environments, you can publish your content in the **development** environment to preview it before publishing it live in the **production** environment.

**Note:** Content published in Contentstack doesn't automatically appear on your website or app. Your website or application must have specific code to fetch this content from Contentstack.

## Specialized Publishing Environments

In Contentstack, you can create specialized publishing environments customized for specific channels or purposes, such as mobile apps or social media.

**Note:** Contentstack's [Automate](/docs/agent-os/what-is-contentstack-agent-os) and [Webhooks](/docs/headless-cms/about-webhooks) can automatically publish your content to social media platforms, simplifying content distribution.

## Using Server for Multi-server Deployments

You can use Webhooks to deploy published content simultaneously across multiple servers within a single publishing environment.

Imagine your company runs a website on several servers in different regions, like the US, Europe, and Asia. When you publish new content in an environment, webhooks instantly alert all servers. This triggers each server to fetch and deploy the content immediately, ensuring efficient and synchronized global updates.

**Additional Resource:** Use our [Live Preview](/docs/headless-cms/about-live-preview) feature to view your content in real time without saving or publishing it to any environment.
