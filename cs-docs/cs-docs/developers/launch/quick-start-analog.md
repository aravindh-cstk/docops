---
title: "[Contentstack Launch] - Launch Quick Start Guide with Analog"
description: Launch Quick Start Guide with Analog
url: https://www.contentstack.com/docs/launch/quick-start-analog
product: Contentstack Launch
doc_type: quick-start
audience:
  - developers
version: current
last_updated: 2026-04-13
---

# [Contentstack Launch] - Launch Quick Start Guide with Analog

This page explains how to quickly create and deploy a Contentstack Launch project using an Analog starter repository from GitHub. It is intended for developers and organization admins/owners who need to set up a first Launch project and optionally configure Analog for SSR deployments.

## Launch Quick Start Guide with Analog

The fastest way to get started with Launch is to clone and deploy a [sample Analog Starter project](https://github.com/contentstack-launch-examples/contentstack-analog-example-starter). With Launch, you can easily create a project by importing your website code from GitHub.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization
- [GitHub account](https://github.com/login)

## Steps for Execution
Follow the steps given below to deploy your first Launch project using GitHub:

**Note:** Only the Organization [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles/#admin)/[Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) has the right to create projects in a stack for Launch.
- [Log in to Contentstack](https://www.contentstack.com/login/) and click the **Launch** icon from the dashboard, as shown below:
Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.
- On the **Launch Projects** screen, click the **+ New Project** button to initiate the project creation process.
- From the **Create New Project** modal, click **Import from a Git Repository**.
**Note:** You can also choose to [upload a .zip file to import a project](/docs/launch/import-project-using-file-upload/).
- Click **GitHub**.**Additional Resource:** You can also import a project using Bitbucket Cloud. Follow the steps in the [Create a Project Using Bitbucket Cloud](/docs/launch/import-a-project-using-bitbucket-cloud) guide to proceed.

A Sign in to GitHub screen pops up. Enter your credentials and log in to your GitHub account.

**Note:** We have assumed that you have a GitHub account and your website code stored in the repository.
- Enter your credentials and log in.
- In the **Repository access** section, select **All repositories**.
**Note:** If you want to choose specific repositories, select the **Only select repositories** option and choose the required repository.
- Click the **Save **button.
**Note:** If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize** button after selecting **All repositories**.

You will be redirected to the Launch app.
- In the **Create New Project** modal, add the following details:

**Repository** (Mandatory): Select the Git repository. In our example, we have selected the **Analog Starter App** repository.**Note:** When you select the repo, the **Build and Output Settings** section gets auto-populated.
- **Git Branch **(Mandatory): By default, `master` or `main` is selected as the branch. You can choose another branch from the dropdown.
- **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
- **Environment Name** (Mandatory): Enter the name of the environment.
- **Build and Output Settings** (Mandatory): The fields in this section get auto-populated based on the Analog framework, as discussed above. Update the **Output Directory** to `./dist/contentstack-analog-starter-app`**Note:**The `Server Command` field allows you to deploy [Analog as Server-Side Rendered](#analog-as-an-ssr-based-application). In most cases, this command will be `npm preview`.
- Leaving the `Server Command` field blank will deploy the framework as `CSR (Client-Side Rendered)`.
- **Environment Variables** (Optional):Enter the key and value of one or more environment variables.
- You can also add the key-value pairs in bulk in the **Bulk Edit** section.

For the Contentstack Analog Starter to work, we need to provide the following environment variables:

```
CONTENTSTACK_LIVE_PREVIEW=
CONTENTSTACK_MANAGEMENT_TOKEN=
CONTENTSTACK_DELIVERY_TOKEN=
CONTENTSTACK_API_HOST=
CONTENTSTACK_REGION=
CONTENTSTACK_APP_HOST=
CONTENTSTACK_API_KEY=
CONTENTSTACK_ENVIRONMENT=
```
**Note:** Click **Back **to revert the changes and re-enter details.
- Once ready, click **Deploy **to save and deploy the project.As soon as the deployment starts, you will see the **Deploying **status as shown in the following screenshot:

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:

If you want to deploy the changes from any other commits, you can click the **Redeploy **button and choose the required commit.

**Note:** The log details of the current deployment can be found under the **Logs** section.

## Analog as an SSR-based Application
By default, Analog is deployed as a Single-Page Application (SPA). To deploy Analog as an SSR-based application, follow the steps below:
- On the top navigation panel, click the **Settings** icon and then **Environments**.
- Click the **Deployments** tab to navigate to the deployment settings screen.
- In the **Server Command** field, add the command present in the `package.json` file to run the SSR based build locally. For example:
```
node dist/my-app/server/server.mjs
```
**Note:** The `Server Command` field will be displayed in the `Deployments` tab only if you choose `Analog` as the framework.
- Click the **Save Deployment Settings** button.
- To **redeploy** the environment with the latest updates, follow these steps:Click the **Environments** icon on the top panel and then click the **environment** where the updates are made.
- In the **Deployments** screen that appears, click the **Redeploy** button to redeploy on the environment.

Once deployed, your application will start rendering pages on the server. You can inspect and verify the application content for accuracy.

## Common questions

### Who can create Launch projects in a stack?
Only the Organization [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles/#admin)/[Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) has the right to create projects in a stack for Launch.

### What happens if I leave the `Server Command` field blank?
Leaving the `Server Command` field blank will deploy the framework as `CSR (Client-Side Rendered)`.

### Where can I find deployment logs?
The log details of the current deployment can be found under the **Logs** section.

### How do I deploy Analog as an SSR-based application?
In the **Deployments** tab, add the SSR command from `package.json` to the **Server Command** field (for example, `node dist/my-app/server/server.mjs`) and then redeploy the environment.