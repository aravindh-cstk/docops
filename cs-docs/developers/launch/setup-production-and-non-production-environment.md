---
title: "[Contentstack Launch] - Setup Production and Non-Production Environment"
description: Step-by-step guide to creating both production and non-production environments in Contentstack Launch.
url: https://www.contentstack.com/docs/launch/setup-production-and-non-production-environment
product: Contentstack Launch
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Setup Production and Non-Production Environment

This page explains how to set up production and non-production environments in Contentstack Launch. It is intended for developers and organization members with access to Launch, and should be used when you need to configure environment stages for developing and releasing apps.

## Setup Production and Non-Production Environment

When apps are being developed and released, software developers use environments to create stages. As per industry standards for environments, most of the processes begin with development and end with production.

Launch allows you to create such environments.

This step-by-step guide will walk you through the process of creating both production and non-production environments.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization

## Create a Production Environment
Follow the steps given below to convert the Default environment of a project to a production environment.
- [Log in to your Contentstack account](https://www.contentstack.com/login/) and select the Launch icon from the dashboard.
- On the Launch landing page, open the project for which you want to change the Default environment to production environment.
- On the **Environments** screen, click the **ellipses** under **Actions**, next to **Default**, and then click **Settings**.
- In **Environments** under **Settings**, click **General** and enter ***Production*** as the **Environment Name**.
- Click the **Save Environment Details** button.
- Next, click **Deployments**.
- Click the **Auto Deploy on Commits** toggle to disable it, and then click the **Save Deployment Settings** button.**Note**: For Git repository based projects, you can prevent the ‘Production’ environment from automatically deploying any new commits that you push.
- You can add a custom domain for your projects. To do this, click **Domains** and then the **+ New Domain** button, to [add a custom domain](./custom-domain.md).
- Click the **Environments** icon in the left panel and then click the production environment you created to view the **Deployments** page.

With these steps, you have successfully set up a production environment for your projects.

## Create a Non-Production Environment
Follow the steps given below to create a non-production environment.
- Follow the steps provided in the Create an Environment section in [this](./environments.md) guide.**Note**: Make sure to add the Environment Name as per the non-production environment you want to create. For example, if you want to create a development environment, add the Environment Name as *Development*.
- Next, in **Environments** under **Settings**, click **Deployments**.
- Click the **Auto Deploy on Commits** toggle to enable it, and then click the **Save Deployment Settings** button.

**Note**: Skip this step if the Auto Deploy on Commits toggle is already enabled.

You have successfully set up a non-production environment for your projects.

## Common questions

### What is the difference between production and non-production environments in Launch?
Production is intended for live releases, while non-production environments (for example, Development) are used for earlier stages of development and testing.

### Should Auto Deploy on Commits be enabled for production?
This page instructs you to disable **Auto Deploy on Commits** for the production environment to prevent automatically deploying new commits.

### Do I need a Contentstack account to set up environments in Launch?
Yes. The prerequisites list a [Contentstack account](https://www.contentstack.com/login/) and access to Launch for your organization.

### Can I add a custom domain to my Launch project?
Yes. The production environment steps include adding a custom domain via **Domains** and **+ New Domain**, linking to [add a custom domain](./custom-domain.md).