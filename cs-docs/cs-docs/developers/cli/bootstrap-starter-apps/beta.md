---
title: "[Contentstack Command-line Interface (CLI)] - Bootstrap Starter Apps | Beta Commands"
description: Bootstrap Starter Apps | V2.x.x Beta commands for the Contentstack CLI Bootstrap plugin.
url: https://www.contentstack.com/docs/developers/cli/bootstrap-starter-apps/beta
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: V2.x.x Beta
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Bootstrap Starter Apps | Beta Commands

This page explains how to use the Contentstack CLI Bootstrap plugin (`cm:bootstrap`) to set up Starter apps by cloning a selected app, creating or selecting a stack, and importing required content and configuration. It is intended for developers who want to automate Starter app project setup and run or deploy the resulting site.

## Bootstrap Starter Apps | V2.x.x Beta

The Bootstrap plugin in the Contentstack CLI simplifies the process of setting up [Starter apps](/docs/developers/sample-apps/#starter-apps) by automating stack creation and content import. With a single command, developers can quickly clone a Starter app and configure it with all the required assets and content.

Using this plugin, all necessary content—such as [content types](/docs/developers/create-content-types/about-content-types), [environments](/docs/developers/set-up-environments/about-environments), [entries](/docs/content-managers/author-content/about-entries), and [assets](/docs/content-managers/author-content/about-assets)—is automatically created in the stack you choose or create.

This guide explains how to use the Bootstrap plugin to automate the setup process for your Starter app projects.

**Note:** This Starter app uses [Live Preview](/docs/content-managers/author-content/about-live-preview) version 2.0.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login)
- CLI [installed](/docs/developers/cli/install-the-cli)
- [Set region](/docs/developers/cli/configure-regions-in-the-cli#set-region)
- Authenticate CLI using one of the following:  
      [Login](/docs/developers/cli/cli-authentication#authentication)
- [Management Token](/docs/developers/cli/cli-authentication#token-management)

## Using the Bootstrap Command

Use the `cm:bootstrap` command to automate Starter app setup. This command performs the following:
- Clones the selected app from GitHub
- Creates or uses an existing stack
- Imports content types, entries, assets, and environments

**Command:**

```
csdx cm:bootstrap
```

When executed, the command prompts you to provide the following details:
- **Technology**
    Select the Starter app you want to use (e.g., React, Next.js, Gatsby, Angular).

    In this example, let's select **React JS** as the Starter app.
- **Path**
    Choose the folder path to clone the app’s source code.
Use one of the following:

      **Current Folder**
- **Other** (to provide a custom path)
- **Live Preview**
    Choose whether to enable Live Preview (Y/n).

    Press **Y** to enable or **n** to skip.

    This will start cloning the selected app to the folder you provide.
- **Organization Name**
    Select the organization under which the stack should be created.
- **Stack Preference**
    Choose to create a **New** stack or use an **Existing** stack to import the app content.

    In this example, let's create a new stack in the organization we selected.
- **Stack Name**
    Enter a **name** for the new stack and click **Enter**.

    With this process, the content—including fields, assets, environments, languages, and other settings—will be imported into the selected stack.

**Note:** Imported content will be automatically published in the target stack.

This is how you can automate project setup in Contentstack by using the Bootstrap command.

You can also run the bootstrap command with all required parameters in a single line:

```
csdx cm:bootstrap --app-name "" --project-dir "" -k ""
```

or

```
csdx cm:bootstrap --app-name "" --project-dir "" --org "" -n ""
```

**Options**

| Flag | Short Flag | Description |
|---|---|---|
| `--app-name` |  | App name. <br><br>Examples: <br>`kickstart-next`,<br>`kickstart-next-ssr` |
| `--project-dir` |  | Directory to set up the project. |
| `--app-type` |  | Specify whether to use a Sample app or a Starter app. |
| `--stack-api-key` | `-k` | Provide the stack API key to seed content. |
| `--org` |  | Provide the organization UID to create a new stack. |
| `--stack-name` | `-n` | Name of the new stack that will be created. |
| `--yes` | `-y` | [Optional] Skip stack confirmation. |
| `--run-dev-server` |  | Automatically start the development server after setup. |
| `--alias` | `-a` | Alias of the management token. |

**Examples**
- To select the app you want to clone:

```
csdx cm:bootstrap --app-name ""
```

    Example: React JS

```
csdx cm:bootstrap --app-name reactjs-starter
```

- Use this command to provide the path to the location of the folder to clone the app:

```
csdx cm:bootstrap --project-dir ""
```

    Example:

```
csdx cm:bootstrap --project-dir "C:\Users\Name\Desktop\cli\content"
```

- Use this command to add all the flags in a single command:

```
csdx cm:bootstrap --app-name > --project-dir "" --org "your-org-uid" --stack-name "stack-name"
```

    Example

```
csdx cm:bootstrap --app-name reactjs-starter --project-dir "C:\Users\Name\Desktop\cli\content" --org "your-org-uid" --stack-name "sample-stack"
```

The above command will add the Starter app’s (React JS) content to your stack as shown below:

## Run the Bootstrap Starter App

You can easily run this Starter app on your local machine by following the steps below:
- Build, Configure, and Run the Website (Manual Process)  
      [Download](https://codeload.github.com/contentstack/contentstack-react-starter-app/zip/refs/heads/master) the website code.
- Open your terminal.
- Navigate to your project folder.
- Run the following command to create a configuration file named `.env.development`.
```
cp .env.example .env.development
```

        **Note:** If you are a Windows user, replace `cp` with `copy` in the command above.

        The `.env.development` file contains all the necessary configuration parameters.

          Open it in any code editor or IDE of your choice.
- Provide your stack credentials (such as [API key](/docs/developers/set-up-stack/view-stack-details/), [Delivery token](/docs/developers/create-tokens/about-delivery-tokens/), and [environment](/docs/developers/set-up-environments/about-environments/)), and save the file.

```
# Contentstack is the tool we use to manage our website's content.
# You need to replace 'your_stack_api_key', 'your_delivery_token', and 'your_environment_name' with the actual information.
REACT_APP_CONTENTSTACK_API_KEY=
REACT_APP_CONTENTSTACK_DELIVERY_TOKEN=
REACT_APP_CONTENTSTACK_ENVIRONMENT=

# Below config options are for enabling live preview/live edit tags for the starter app
REACT_APP_CONTENTSTACK_API_HOST=api.contentstack.io
REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN=
REACT_APP_CONTENTSTACK_APP_HOST=app.contentstack.com
REACT_APP_CONTENTSTACK_LIVE_PREVIEW=true
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS=false

# API Host, APP Host and Region Environment Variables for AWS North America region users
# REACT_APP_CONTENTSTACK_API_HOST=api.contentstack.io
# REACT_APP_CONTENTSTACK_REGION=NA
# REACT_APP_CONTENTSTACK_APP_HOST=app.contentstack.io

# API Host, APP Host and Region Environment Variables for AWS Europe region users
# REACT_APP_CONTENTSTACK_API_HOST=eu-api.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=EU
# REACT_APP_CONTENTSTACK_APP_HOST=eu-app.contentstack.io

# API Host, APP Host and Region Environment Variables for AWS Australia region users
# REACT_APP_CONTENTSTACK_API_HOST=au-api.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=AU
# REACT_APP_CONTENTSTACK_APP_HOST=au-app.contentstack.io

# API Host, APP Host and Region Environment Variables for Azure North America region users
# REACT_APP_CONTENTSTACK_API_HOST=azure-na-api.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=AZURE-NA
# REACT_APP_CONTENTSTACK_APP_HOST=azure-na-app.contentstack.io

# API Host, APP Host and Region Environment Variables for Azure Europe region users
# REACT_APP_CONTENTSTACK_API_HOST=azure-eu-api.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=AZURE-EU
# REACT_APP_CONTENTSTACK_APP_HOST=azure-eu-app.contentstack.io

# API Host, APP Host and Region Environment Variables for Google North America region users
# REACT_APP_CONTENTSTACK_API_HOST=gcp-na-api.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=GCP-NA
# REACT_APP_CONTENTSTACK_APP_HOST=gcp-na-app.contentstack.io

# API Host, APP Host and Region Environment Variables for Google Europe region users
# REACT_APP_CONTENTSTACK_API_HOST=gcp-eu-api.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=GCP-EU
# REACT_APP_CONTENTSTACK_APP_HOST=gcp-eu-app.contentstack.io

# By default branch=main, if a branch is not provided
# REACT_APP_CONTENTSTACK_BRANCH=

SKIP_PREFLIGHT_CHECK=true
```

        **Note:** Live Preview that uses the `REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN` will soon be deprecated. Instead, we recommend using the Live Preview that relies on the `REACT_APP_CONTENTSTACK_PREVIEW_TOKEN`, `REACT_APP_CONTENTSTACK_PREVIEW_HOST`, `REACT_APP_CONTENTSTACK_APP_HOST`, and `REACT_APP_CONTENTSTACK_API_HOST` as given below.

```
REACT_APP_CONTENTSTACK_PREVIEW_HOST=rest-preview.contentstack.io
REACT_APP_CONTENTSTACK_PREVIEW_TOKEN=
REACT_APP_CONTENTSTACK_APP_HOST=app.contentstack.com
REACT_APP_CONTENTSTACK_LIVE_PREVIEW=true
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS=false

# API Host, APP Host, Preview Host and Region Environment Variables for AWS North America region users
# REACT_APP_CONTENTSTACK_PREVIEW_HOST=rest-preview.contentstack.io
# REACT_APP_CONTENTSTACK_REGION=NA
# REACT_APP_CONTENTSTACK_API_HOST=api.contentstack.io

# API Host, APP Host, Preview Host and Region Environment Variables for AWS Europe region users
# REACT_APP_CONTENTSTACK_PREVIEW_HOST=eu-rest-preview.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=EU
# REACT_APP_CONTENTSTACK_API_HOST=eu-api.contentstack.com

# API Host, APP Host, Preview Host and Region Environment Variables for AWS Australia region users
# REACT_APP_CONTENTSTACK_PREVIEW_HOST=au-rest-preview.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=AU
# REACT_APP_CONTENTSTACK_API_HOST=au-api.contentstack.com

# API Host, APP Host, Preview Host and Region Environment Variables for Azure North America region users
# REACT_APP_CONTENTSTACK_PREVIEW_HOST=azure-na-rest-preview.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=AZURE-NA
# REACT_APP_CONTENTSTACK_API_HOST=azure-na-api.contentstack.com

# API Host, APP Host, Preview Host and Region Environment Variables for Azure Europe region users
# REACT_APP_CONTENTSTACK_PREVIEW_HOST=azure-eu-rest-preview.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=AZURE-EU
# REACT_APP_CONTENTSTACK_API_HOST=azure-eu-api.contentstack.com

# API Host, APP Host, Preview Host and Region Environment Variables for Google North America region users
# REACT_APP_CONTENTSTACK_PREVIEW_HOST=gcp-na-rest-preview.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=GCP-NA
# REACT_APP_CONTENTSTACK_API_HOST=gcp-na-api.contentstack.com

# API Host, APP Host, Preview Host and Region Environment Variables for Google Europe region users
# REACT_APP_CONTENTSTACK_PREVIEW_HOST=gcp-eu-rest-preview.contentstack.com
# REACT_APP_CONTENTSTACK_REGION=GCP-EU
# REACT_APP_CONTENTSTACK_API_HOST=gcp-eu-api.contentstack.com

# By default, branch=main if a branch is not provided
# REACT_APP_CONTENTSTACK_BRANCH=

SKIP_PREFLIGHT_CHECK=true
```

        **Note:** By default, the Live Preview feature is disabled for this project. To enable it, set `REACT_APP_CONTENTSTACK_LIVE_PREVIEW=true`.
- Now, open your terminal, point it to your project location, and run the following commands:
```
npm install
```

```
npm start
```

    That’s it, you have successfully completed the setup!

    You can now view the website by navigating to `http://localhost:3000`.

    Here's how your website's Home page will look after running on your localhost.

## Run the Compass Starter

You can easily run the Compass Starter on your local machine by following the steps below:
- Using Bootstrap Command  
      Open your terminal.
- Navigate to your project folder.
- Run the following commands:
```
npm install
npm start
```
- Build, Configure, and Run the Website (Manual Process)  
      [Download](https://github.com/contentstack/compass-starter-app/archive/refs/tags/3.2.0.zip) the website code.
- Open your terminal.
- Navigate to your project folder.
- Run the following command to create a configuration file named `.env`:
```
cp .env.sample .env
```

        **Note:** If you are a Windows user, replace `cp` with `copy` in the command above.

        The `.env` file contains all the necessary configuration parameters.
- Open it in any code editor or IDE of your choice.
- Provide your stack credentials (such as [API key](/docs/developers/set-up-stack/view-stack-details/), [Delivery token](/docs/developers/create-tokens/about-delivery-tokens/), and [environment](/docs/developers/set-up-environments/about-environments/)), and save the file.
- Now, open your terminal, point it to your project location, and run the following commands:
```
npm install
npm start
```

        **Note:** While running the Compass Starter app on your local machine in development mode, use the command `npm run dev` instead of `npm start`.

That’s it!

You can now view the website by navigating to `http://localhost:3000`.

Here's how your website's Home page will look after running on your localhost.

## Deploy the Website

You can deploy your Starter app using:
- [Contentstack Launch](https://app.contentstack.com/#!/launch)  
    **Additional Resource:** For more details, visit the [Contentstack Launch documentation](/docs/developers/launch).
- [Vercel](https://vercel.com/)

## Supported Starter Apps

- [React JS](/docs/developers/sample-apps/build-a-starter-website-using-react-js-and-contentstack/)
- [Next JS](/docs/developers/sample-apps/build-a-starter-website-using-next-js-and-contentstack)
- [Gatsby](/docs/developers/sample-apps/build-a-starter-website-with-gatsby-and-contentstack)
- [Angular](/docs/developers/sample-apps/build-a-starter-website-with-angular-and-contentstack)
- [Nuxt JS](/docs/developers/sample-apps/build-a-starter-website-with-nuxt-js-and-contentstack)
- [Vue JS](/docs/developers/sample-apps/build-a-starter-website-using-vue-js-and-contentstack/)
- [Stencil](/docs/developers/sample-apps/build-a-starter-website-with-stenciljs-and-contentstack)

**Additional Resource:** To create and run a demo website, use the sample code and guide provided in the [Contentstack Starter apps documentation](/docs/developers/sample-apps/#starter-apps).

## Limitations

- Avoid importing duplicate content types into existing stacks.
- To create new stacks, ensure your role is set to [**Owner**](/docs/owners-and-admins/organization-roles/#organization-owner) or [**Admin**](/docs/owners-and-admins/organization-roles/#organization-admin) in the organization.

## Common questions

### What does `csdx cm:bootstrap` do?
It clones the selected app from GitHub, creates or uses an existing stack, and imports content types, entries, assets, and environments.

### Will imported content be published automatically?
**Note:** Imported content will be automatically published in the target stack.

### Can I run the bootstrap command non-interactively?
You can run the bootstrap command with all required parameters in a single line using flags such as `--app-name`, `--project-dir`, `--org`, and `--stack-name`.

### What should I do if I’m on Windows and the instructions use `cp`?
**Note:** If you are a Windows user, replace `cp` with `copy` in the command above.