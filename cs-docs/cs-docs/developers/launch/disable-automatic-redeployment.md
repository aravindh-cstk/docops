---
title: "[Contentstack Launch] - Disable Automatic Redeployment"
description: Steps to disable the Auto-Deploy on Commits setting in Contentstack Launch environments.
url: https://www.contentstack.com/docs/launch/disable-automatic-redeployment
product: Contentstack Launch
doc_type: how-to
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Disable Automatic Redeployment

This page explains how to disable automatic redeployments (Auto-Deploy on Commits) for a project environment in Contentstack Launch. It is intended for users with access to Launch in their organization who want to prevent new Git commits from triggering automatic redeployments.

## Disable Automatic Redeployment

By default, all environments in Launch are configured for automatic redeployment by default. Launch allows you to prevent automatic redeployments of any new commits made to the Git repository based projects.

This step-by-step guide provides the steps required to disable the automatic redeployment of projects.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization

## Disable Automatic Redeployment
Follow the steps given below to disable the Auto-Deploy feature to prevent automatic redeployment.
- [Log in to your Contentstack account](https://www.contentstack.com/login/) and click the Launch icon from the dashboard.
- Click the **project card** to open your project from the Launch landing page.
- On the **Environments** screen, click the **ellipses** under **Actions** next to your environment and then click **Settings** to go to **Environment Settings**.
- In the **Environments** section under **Settings**, click **Deployments**.
- Click the **Auto Deploy on Commits** toggle button to disable it, and then click the **Save Deployment Settings** button.

You have successfully disabled the automatic redeployment of your project.

## Common questions

### Does disabling Auto Deploy on Commits stop all deployments?
No. It disables automatic redeployments triggered by new commits; deployments can still be initiated manually.

### Can I disable automatic redeployment for only one environment?
Yes. The steps describe disabling the setting for the specific environment you select under **Environments**.

### Do I need special permissions to change deployment settings?
You need access to Launch for your organization and sufficient permissions to open **Environment Settings** and save deployment settings.