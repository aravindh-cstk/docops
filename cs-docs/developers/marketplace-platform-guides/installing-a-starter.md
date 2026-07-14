---
title: "[Marketplace guides and apps] - Importing a Starter"
description: Step-by-step instructions to import a Starter using both the Marketplace and Stack Creation Experience.
url: https://www.contentstack.com/docs/marketplace/installing-a-starter
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - Importing a Starter

This page explains how to import a Starter in Contentstack to create a new preconfigured stack. It is intended for Organization Owners and Admins who want to accelerate project setup using Marketplace Starters or the Stack Creation Experience.

## Importing a Starter

Starters in Contentstack are preconfigured templates designed to accelerate the setup of your digital projects. They include predefined content types, sample data, and stack configurations.

This guide provides step-by-step instructions to import a Starter using both the Marketplace and Stack Creation Experience.

**Note**: Importing a Starter creates a new stack in your organization. Only **Organization Owners** and **Admins** can perform this action.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin
- [Launch](../launch/about-launch.md) enabled for your Organization if you are using Launch for website deployment
- Access to the Github repository

Let's follow this step-by-step guide to import and configure a Starter within your stack.

## Steps for Execution
- [Import Starters using Marketplace](#import-starters-using-marketplace)
- [Import Starters using Stacks](#import-starters-using-stacks)

## Import Starters using Marketplace

To import a Starter, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

- From the left-hand side primary navigation, click the **Marketplace** icon.
- Click **Starters** from the left panel.
- Within the Marketplace, you can see the available starters. Hover over the starter you want to import and click the **Import** button.  
  ![Importing-A-Starter-Import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte3cd343c8980922a/6837b9c08b77840b05dedfa9/Importing-A-Starter-Import.png)Alternatively, click the Starter card (that you want to import) to open its detail page, review its description, screenshots, and demos, and click the **Import** button.![Importing-A-Starter-Import-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e951fc0acdcb83a/6837b9c11ae5e5ad7be4a033/Importing-A-Starter-Import-Button.png)
- In the pop-up window, review the permissions and click **Authorize**.
- Enter a name for your new stack in the **Stack Name** field, and click **Import Starter**.  
  ![Importing-A-Starter-Add-Stack-Name](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c87e9b14d877051/6837b9b627cc81ab374b7d19/Importing-A-Starter-Add-Stack-Name.png)Contentstack will create and configure a new stack in the background. While the Starter is being imported, you can view the logs.![Importing-A-Starter-Logs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc2add60a12920d15/6837b9ba68ee2ed0d790fa32/Importing-A-Starter-Logs.png)
- After a successful import, choose your preferred deployment method:  
  **Deploy in Launch**: Click **Deploy in Launch**, then click **Connect with GitHub**, sign in, and authorize the connection. Once connected, the selected starter app repository will appear under the **Source Git Repository** section.
- **Deploy in Vercel**: Click **Deploy in Vercel**, select your Git provider (GitHub, GitLab, or Bitbucket), sign in, and authorize the deployment.
- Once the deployment is complete, you will see the **Setup Complete!** message.![Importing-A-Starter-Setup-Complete](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt293cd575e8008bca/6837b9b888c3a0aca40100a7/Importing-A-Starter-Setup-Complete.png)

You can directly navigate to your new stack in Contentstack, visit your deployed website, access the related Launch project, or view your Git repository containing the project's source code. Use the provided quick-action buttons and links to conveniently manage and further customize your Starter stack.

## Import Starters using Stacks

To import a prebuilt starter, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

- In the top-right corner of the CMS dashboard, click **+ New Stack** and select **Use Prebuilt **from the dropdown.![Importing-A-Starter-Via-Stack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9d318a8ffe823521/6837b9b6cae4fa1c6f724a5c/Importing-A-Starter-Via-Stack.png)
- In the **Add Stack** modal, hover over the Starter you want to import and click the **Import** button.  
  ![Importing-A-Starter-Via-Stack-Import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3915ac335351044/6837b9bc5a0af54a268be27d/Importing-A-Starter-Via-Stack-Import.png)Alternatively, click the Starter card to open its detail page, review the description and demos, and click the **Import** button.

Now, you can follow the same steps mentioned in the [Import Starters Using Marketplace](#import-starters-using-marketplace) section for successful import.

## Common questions

**Q: Does importing a Starter modify an existing stack?**  
A: No. Importing a Starter creates a new stack in your organization.

**Q: Who can import a Starter?**  
A: Only **Organization Owners** and **Admins** can perform this action.

**Q: Do I need Launch enabled to import a Starter?**  
A: Launch is listed as a prerequisite only if you are using Launch for website deployment.

**Q: Which Git providers are supported for Vercel deployment in this flow?**  
A: GitHub, GitLab, or Bitbucket.