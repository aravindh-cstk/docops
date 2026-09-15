---
title: "Simple Website with Contentstack Launch"
description: "Learn to build a simple website with Contentstack Launch, connecting your Git, repository, CMS, and Automate for seamless, serverless deployment and delivery."
url: /headless-cms/simple-website-with-contentstack-launch
uid: bltc7163bd2fff20430
---

# Simple Website with Contentstack Launch

## Simple Website with Contentstack Launch

This architecture uses Contentstack Launch to manage deployment, hosting, and global delivery, while keeping content and code decoupled. It connects your Git-based application with Contentstack CMS to deliver content-driven experiences efficiently.

## Prerequisites

Before you begin, ensure the following requirements are met:

-   [Contentstack account](https://www.contentstack.com/login)
-   Organization [Owner](/docs/administration/about-administration-roles#organization-owner) or [Admin](/docs/administration/about-administration-roles#organization-admin) permissions
-   A Git provider account ([GitHub](https://github.com), [GitLab](https://about.gitlab.com/), or [Bitbucket](https://bitbucket.org))
-   [Contentstack Launch](/docs/launch/about-launch) enabled for your organization
-   An application codebase built with a modern framework (for example, [Next.js](https://nextjs.org), [React](https://react.dev), or [Vue](https://vuejs.org))
-   Access to a [Delivery Token](/docs/headless-cms/about-delivery-tokens) and familiarity with [Environment Variables](/docs/launch/environment-variables) ([CDA](/docs/developers/apis/content-delivery-api)/[CPA](/docs/headless-cms/preview-api))
-   Access to [Contentstack Automation](/docs/agent-os/what-is-an-automation) for cache invalidation setup

## Architecture Diagram

![Simple Website with Contentstack Launch](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/blt6d3e49c135cca08e/61faa4d749f226bdc3ab8ede/Simple_Website_with_Contentstack_Launch.png?locale=en-us)

## Core Workflow Steps

The following steps illustrate how content and code flow through the system during runtime:

1.  **Request Site:** When a user requests the website URL, the request is handled by Contentstack Launch.
2.  **Fetch Content (CDA/CPA):** Launch retrieves content from Contentstack CMS using the Content Delivery API (CDA) for published content and the Content Preview API (CPA) for draft or preview content.
3.  **Code Push Triggers Build:** When developers push code to a Git repository, Launch automatically triggers a build and deploys the updated application.
4.  **Content Change Webhook:** Contentstack Automation listens for publish and unpublish events in the CMS.
5.  **Cache Invalidation:** When content changes occur, Automation triggers cache invalidation in Contentstack Launch to refresh affected pages and ensure the latest content is served.

## Architecture Components

The architecture is composed of multiple components that work together to manage content, code, infrastructure, and automation. Each layer plays a specific role in delivering a scalable and efficient digital experience.

1.  **Content Layer (Contentstack CMS)**

    The Contentstack CMS manages structured content and provides APIs that developers use to fetch and preview content.

    -   **Content Modeling:** Define your [content types](/docs/headless-cms/create-a-content-type) or import from prebuilt content models such as [Homepage](/docs/headless-cms/website-homepage), [Blog Post](/docs/headless-cms/blog-landing-page), or [Product](/docs/headless-cms/product-listing-page) pages.
    -   **API Access:** Use a [Delivery Token](/docs/headless-cms/create-a-delivery-token) to access public content via the [Content Delivery API](/docs/developers/apis/content-delivery-api) (CDA) for production and the [Content Preview API](/docs/headless-cms/preview-api) (CPA) for draft content on development or staging.
2.  **Code Layer (Git)**

    The application layer contains your frontend code.

    -   **Source Control:** Store and manage application code in a Git provider such as GitHub, GitLab, or Bitbucket.
    -   **Environment Configuration:** Use [environment variables](/docs/launch/environment-variables) to switch between CDA and CPA endpoints based on the deployment environment (production, development, or staging).
3.  **Infrastructure Layer (Contentstack Launch)**

    Contentstack Launch is the front-end hosting platform that handles build, deployment, and delivery, and replaces your third-party hosting and CI/CD tools.

    -   **Build Automation:** Automatically triggers builds when code changes are pushed to connected Git branches.
    -   **Framework Support:** Supports modern frameworks with SSR (Server-Side Rendering), SSG (Static Site Generation), and ISR (Incremental Static Regeneration).
    -   **Global Delivery:** Deploys applications to edge locations for fast and reliable content delivery.
4.  **Automation Layer (Contentstack Automation)**

    Contentstack Automation ensures content updates are reflected in the delivered experience.

    -   **Event-Based Triggers:** Listens to CMS events such as publish and unpublish actions.
    -   **Cache Invalidation:** Triggers cache invalidation in Contentstack Launch to ensure users see the latest content.

## Step-by-Step Implementation Flow

To set up and deploy your website, follow these steps:

1.  **Connect Source Code to Launch:** [Create a project](/docs/launch/import-project-using-github) in Contentstack Launch and connect your Git repository.
    -   **Branch Mapping:** Map your main branch to the **production** environment and development or staging branches to a **staging** environment.
    -   **Build Configuration:** Select your framework from the list, or define the build command (for example, npm run build) and output directory as needed.
2.  **Configure Environment Variables:** Connect your [Contentstack Stack](/docs/headless-cms/about-stack) to Launch to import the required environment variables.
3.  **Implement Preview Mode:** Use [Contentstack Live Preview](/docs/headless-cms/about-live-preview) to view draft and in-progress content. Configure it in your stack, connect it to your Launch Preview URL, and implement preview handling in your application. For more details, see [Set Up Live Preview for your Website](/docs/headless-cms/set-up-live-preview-for-your-website).
4.  **Automation Cache Invalidation:** Configure Contentstack Automation to listen for CMS events (**Publish** or **Unpublish**) and trigger cache invalidation in Launch. For more details, see [Automation Connector - Launch](/docs/agent-os/launch).
5.  **Deployment and Validation:** Push code changes to your Git repository to trigger a new build and deployment in Contentstack Launch.
    -   **Code Deployment:** Launch detects the change, builds the application, and deploys it to the configured environment.
    -   **Content Updates:** When content is published in the CMS, Contentstack Automation triggers cache invalidation to ensure updated content is served via ISR (Incremental Static Regeneration) or fresh SSR (Server-Side Rendering) requests.
    -   **Validation:** Verify that both code and content updates are reflected correctly in the deployed environment.

## Key Benefits for Developers

-   **No Infrastructure Overhead:** Manage deployment, hosting, and delivery without maintaining servers or managing complex build pipelines.
-   **Atomic Deployments:** Each deployment is independent, allowing safe rollbacks if needed.
-   **Framework Agnostic:** Works consistently across frameworks such as Next.js, Nuxt, and static site generators.
