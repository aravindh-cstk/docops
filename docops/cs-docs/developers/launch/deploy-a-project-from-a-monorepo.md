---
title: "[Contentstack Launch] - Deploy a Project from a Monorepo on Launch"
description: Deploy a project from a monorepo on Contentstack Launch.
url: https://www.contentstack.com/docs/launch/deploy-a-project-from-a-monorepo
product: Contentstack Launch
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Deploy a Project from a Monorepo on Launch

This page explains how to deploy a single project from within a monorepo using Contentstack Launch. It is intended for developers who manage multiple apps in one repository and need to configure build and output settings to deploy a specific app.

## Deploy a Project from a Monorepo on Launch

A monorepo (mono repository) is a single repository that stores all of your code and assets for multiple projects.

Launch supports deploying a project from a monorepo.

This step-by-step guide lets you deploy a project from a monorepo on Launch.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization
- [GitHub account](https://github.com/login)
- A monorepo

We will be using the following [Turborepo](https://turbo.build/repo) monorepo for [this](https://github.com/contentstack-launch-examples/turborepo-npm-demo) tutorial.

As seen in the above screenshot, there are four distinct projects in the `apps` folder. We will deploy the `web` project, which is a `NextJS` site.

## Steps for Execution
Follow the steps to deploy a project from a monorepo.
- [Log in to your Contentstack account ](https://www.contentstack.com/login/)and click **Launch** in the dashboard.
- Click the **+ New Project** button.
- Select [Import from a Git Repository](./import-project-using-github.md) from the **Create New Project** modal, and then select your Git provider.**Note**:You can also deploy a project from a monorepo using the [File upload](./import-project-using-file-upload.md) approach.
- To import a project using Bitbucket Cloud, follow the steps in the [Create a Project Using Bitbucket Cloud](./import-a-project-using-bitbucket-cloud.md) guide to proceed.
- From the **Repository** drop-down, select the monorepo that contains the app you want to deploy.![Monorepo_CreateProjModal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt794804961aa92cf7/654a5360786647040af50bf6/Monorepo_CreateProjModal.png)
- In the **Build and Output Settings** section, perform the following steps:Select the framework for your project under the **Framework Preset** drop-down.
- Update the **Build Command** field.
The command `npm run build` runs the build for all the projects present in the monorepo.
Since we are using Turborepo in our example, we can use the [filter](https://turbo.build/repo/docs/core-concepts/monorepos/filtering) flag, as given below, to ensure that only the `web` project is built:
```
npm run build -- --filter web
```
- Update the **Output Directory** field.
Since the `web` project is a `NextJS` site, its build will be generated at `./apps/web/.next`
- Click the **Deploy** button to deploy the site.![Launch_Monorepo_Deployment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e4485605bd22535/6605004204d34cc4a9bd8824/Launch_Monorepo_Deployment.png)

You have successfully deployed a project from a monorepo.

## Limitations
- Deploying a Gatsby project from within a monorepo is currently not supported.
- Deploying Cloud Functions from the `functions` directory in an app within a monorepo is currently not supported.
- Adding a `launch.json` file to an app within a monorepo is currently not supported.
- The deployment of build output outside the source directory is currently not supported.This limitation particularly impacts projects with directory structures where build outputs are located separately from the source directory.

For instance, let’s consider a Next.js-based website within a monorepo structured as `/apps/mywebsite`. If the build output is directed to `/dist/apps/mywebsite/.next`, it falls outside the source directory `/apps/mywebsite`, making the deployment of this build output unsupported.

Some monorepo tools, such as [Nx](https://nx.dev/), by default, output builds to a different `dist` directory outside the source directory. To address this, you can configure Nx to support deployments on Launch.

## Troubleshooting Monorepo Build Failures
If your **Turborepo-based** monorepo build fails due to unexpected package resolutions or missing dependencies, consider the following steps:
- **Verify the **`**--filter**`** flag usage**When performing a filtered build, ensure that only the intended frontend package is included in the build process.

**Example:**

```
npm run build -- --filter=your-frontend-folder-name
```
- **Check for Cross-Package Imports**If your frontend project (`web`) imports files from another package in the monorepo (for example, `middleware`), ensure that the dependency is explicitly declared in the **consuming package**’s `package.json` file.

**Example Folder Structure:**

```
/monorepo-root
│── apps/
│   ├── web/  # Frontend app (consuming package)
│   │   ├── package.json  ✅ Needs dependency
│   ├── middleware/  # Another package providing modules
│   │   ├── getRelatedProducts.ts
│   │   ├── package.json
│── package.json
```
**Fix: Add the Missing Dependency**To ensure proper resolution, add `@repo/middleware to apps/web/package.json`

**Tip**: Sync all dependencies from `/middleware/package.json` to `/web/package.json`,
ensuring `/web` has everything it needs.

If `apps/web` imports `getRelatedProducts.ts` from `apps/middleware`, update `apps/web/package.json`:

```
{
  "dependencies": {
    "@repo/middleware": "workspace:*"
  }
}
```
Without this explicit declaration, the build process may fail because dependencies that work locally might not be properly resolved in the deployment environment.

## Common questions

### Can I deploy only one app from a monorepo in Launch?
Yes. Use the **Build Command** with a Turborepo filter (for example, `npm run build -- --filter web`) and set the **Output Directory** to the selected app’s build output path.

### What output directory should I use for a NextJS app in a monorepo?
For the `web` project that is a `NextJS` site, the build will be generated at `./apps/web/.next`.

### What monorepo deployments are not supported?
Deploying a Gatsby project from within a monorepo, deploying Cloud Functions from the `functions` directory in an app within a monorepo, adding a `launch.json` file to an app within a monorepo, and deploying build output outside the source directory are currently not supported.

### Why might a Turborepo monorepo build fail on Launch?
It can fail due to unexpected package resolutions or missing dependencies; verify `--filter` usage and ensure cross-package imports are explicitly declared in the consuming package’s `package.json`.