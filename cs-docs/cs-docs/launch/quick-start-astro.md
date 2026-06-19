---
title: "[Contentstack Launch] - Launch Quick Start Guide with Astro"
description: Launch Quick Start Guide with Astro
url: https://www.contentstack.com/docs/launch/quick-start-astro
product: Contentstack Launch
doc_type: quick-start
audience:
  - developers
version: v1
last_updated: 2026-04-13
---

# [Contentstack Launch] - Launch Quick Start Guide with Astro

This page explains how to quickly create and deploy your first Contentstack Launch project using an Astro starter project imported from GitHub. It is intended for developers and organization admins/owners who want to set up a Launch project and deploy an Astro site, including configuring build/output settings and environment variables.

## Launch Quick Start Guide with Astro

The fastest way to get started with Launch is to clone and deploy a [sample Astro Starter project](https://github.com/contentstack-launch-examples/astro-example-starter). With Launch, create a project by importing your website code from GitHub.

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

    **Note:** You can also choose to [upload a .zip file to import a project](/docs/developers/launch/import-project-using-file-upload/).
- Click **GitHub**.
    **Additional Resource:** You can also import a project using Bitbucket Cloud. Follow the steps in the [Create a Project Using Bitbucket Cloud](/docs/developers/launch/import-a-project-using-bitbucket-cloud) guide to proceed.

    A Sign in to GitHub screen pops up. Enter your credentials and log in to your GitHub account.

    **Note:** We have assumed that you have a GitHub account and your website code stored in the repository.
- Enter your credentials and log in.
- In the **Repository access** section, select **All repositories**.

    **Note:** If you want to choose specific repositories, select the **Only select repositories** option and choose the required repository.
- Click the **Save **button.

    **Note:** If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize** button after selecting **All repositories**.

    You will be redirected to the Launch app.
- In the **Create New Project** modal, add the following details:

      **Repository** (Mandatory): Select the Git repository. In our example, we have selected the **Astro **project repository.**Note:** When you select the repo, the **Build and Output Settings** section gets auto-populated.
- **Git Branch **(Mandatory): By default, `master` or `main` is selected as the branch. You can choose another branch from the dropdown.
- **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
- **Environment Name** (Mandatory): Enter the name of the environment.
- **Build and Output Settings** (Mandatory): The fields in this section auto-populates based on the Astro framework, as discussed above. Update the **Output Directory** to `./dist`
        **Note:**

            In the `Server Command` field, enter `npm run start` to deploy Astro in server-side rendered (SSR) mode.
- Leaving the `Server Command` field blank will deploy the framework as `CSR (Client-Side Rendered)`.
- **Environment Variables** (Optional):
          Enter the key and value of one or more environment variables.
- You can also add the key-value pairs in bulk in the **Bulk Edit** section.

```
ENVIRONMENT=Production
SAMPLE_KEY=SAMPLE_VALUE
```

        **Note:** Click **Back **to revert the changes and re-enter details.
- Once ready, click **Deploy **to save and deploy the project.As soon as the deployment starts, the system displays the **Deploying **status as shown in the following screenshot:

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:

If you want to deploy the changes from any other commits, you can click the **Redeploy **button and choose the required commit.

**Note:** View the log details of the current deployment in the **Logs** section.

## Common questions

### Who can create projects in a stack for Launch?
Only the Organization [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles/#admin)/[Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) has the right to create projects in a stack for Launch.

### What should I set as the Output Directory for Astro?
Update the **Output Directory** to `./dist`.

### How do I deploy Astro in SSR mode?
In the `Server Command` field, enter `npm run start` to deploy Astro in server-side rendered (SSR) mode.

### Where can I view deployment logs?
View the log details of the current deployment in the **Logs** section.

<!-- filename: contentstack-launch-launch-quick-start-guide-with-astro.md -->