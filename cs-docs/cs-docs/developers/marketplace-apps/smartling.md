---
title: "[Marketplace guides and apps] - Smartling App Installation Guide"
description: Smartling App Installation Guide
url: https://www.contentstack.com/docs/developers/marketplace-apps/smartling
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: latest
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Smartling App Installation Guide

This page explains how to install and configure the Smartling app from the Contentstack Marketplace and set up the required Contentstack and Smartling prerequisites (locales, workflows, and API credentials). It is intended for Contentstack Owners/Admins and developers who need to implement a translation workflow for Contentstack entries using Smartling.

## Smartling App Installation Guide

Smartling is one of the most widely used cloud-based language translation platforms. It enables you to localize content across multiple digital properties.

Using Contentstack and Smartling powerful APIs, the Smartling app lets you translate your entry easily into the language of your choice.

## Prerequisites
- [Smartling account](https://www.smartling.com/)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/ Stack as the Owner/ Admin

In this guide, we will go through the steps required to set up a language translation system for your Contentstack-powered website using Smartling.

## Steps for Execution
- [Set up the Essentials in Contentstack](#set-up-the-essentials-in-contentstack)
- [Set up the Workflow for Translation](#set-up-the-workflow-for-translation)
- [Configure the Project in Smartling](#configure-the-project-in-smartling)
- [Install and Configure Smartling in Contentstack Marketplace](#install-and-configure-smartling-in-contentstack-marketplace)
- [Use the Smartling App](#use-the-smartling-app)

## Set up the Essentials in Contentstack

Log in to your Contentstack account and follow the steps given below:
- Create a stack, add a content type (for this exercise, we have created a Single Content Type named Smartling).

**Note**: In our example, we have used “title,” “url,” “single_line,” and “rich_text_editor,” fields. We will translate the content of these fields.
- Next, add two languages (locales), in our example, we have added the following two languages:

English [en-us] which is the source language.

French- France [fr-fr] is another language which will be our target language.

**Note**: Ensure that the languages you add are supported by Smartling.
- After adding the languages, go to your content type (Smartling in our example) and create an entry in the en-us locale.
- Finally, [create a management token](https://www.contentstack.com/docs/developers/create-tokens/#generate-a-management-token/) for your stack which we will use later while configuring the app.

With these steps, we have set up the essentials in Contentstack. Let's now move ahead with creating a workflow.

## Set up the Workflow for Translation

Perform the following steps to set up workflows in Contentstack for the translation process:
- Click the “Settings” icon on the left navigation panel, and click on **Workflows**. On the Workflow Settings page, click on **+ New Workflow**.
- Provide a suitable name to your workflow and an optional description.
- Under the **Scope** option, select if this workflow should be applied to **All Content Types** or **Specific Content Type(s)**.

For this example, we will select the **Specific Content Types(s)** option and then select the content type, **Smartling** from the dropdown menu, as shown below:
- Inside the **WORKFLOW STAGES** option, add four stages (for example, Draft, Send for Translation, Review, and Completed) as shown below:

**Additional Resource:** Additional Resource: Learn more about [workflow](https://www.contentstack.com/docs/developers/set-up-workflows-and-publish-rules/#about-workflows/) and its [stages](https://www.contentstack.com/docs/developers/set-up-workflows-and-publish-rules/#about-workflow-stages/), refer to the [set up workflows](https://www.contentstack.com/docs/developers/set-up-workflows-and-publish-rules/#add-workflows-and-stages/) guide.
- Lastly, click on the **Enable Workflow** checkbox and then on the **Save** button.

With these steps, our workflow is ready.

Let's move ahead and configure the project in Smartling.

## Configure the Project in Smartling

To build the Smartling app, you need a full stack Smartling account. Sign up with one of their plans and read this [guide](https://help.smartling.com/hc/en-us/articles/115003671993-Sign-in-to-Smartling) to set up your Smartling account.

### Create a New Project

Log in to your Smartling account and follow the steps below to create a new project.
- Click on the **SMARTLING** icon at the top left corner.
- Then, create a new project by clicking on the **Create New Project** button.
- On the **Create Project** screen, the **Apple iOS** is selected by default, leave it unchanged and click on **Next**.
- Next, provide a suitable name to your project. If you have already created a linguistic package earlier, then select it from the **Linguistic package** dropdown.

If you haven't created any linguistic package yet, click on the **Create New Package** link. When you click on it, the **Source Language** dropdown appears.
Select your source language, for example, **English (United States)**, and then add your target language in the **Target Languages** field as shown below. For our example, we have added **French (France)** as our target language. Then, click on **Create Project**:

**Note**: For this exercise we have selected French-France as the target language. You can add more target languages as per your requirements.

Your project is now created in Smartling. Let's move ahead and create a workflow in Smartling.

### Add a Workflow for your Smartling Project

By default a workflow is added in Smartling. Follow the steps below to add a new workflow:
- Click on the project that you have created, then on the **Settings** gear icon on the extreme right corner of the screen, and select **Project Settings**.
- Now, select **Workflows** from the left navigation panel.
- On the **Workflow Configuration** page, you will see a default workflow. Click on the dropdown icon inside the **Translation** block and select **Manage Step** as shown below:
- On the **Manage Step: Translation** screen, provide a suitable **Step Name**, for example **Translation**. In the **Translation Provider** dropdown, the **Human translators** option is selected by default, don't change it and also leave the remaining options to their default values, and click on **Save** as shown below:

The **Smartling Workflow** is now ready.

**Note**: To add more target languages to your project, click on the **Project Settings** option, and select **Languages** (similar to how you selected Workflows above). Then, click on the **Add Language** button. Then, in the **Add Languages** modal, add languages from the **Select Language** dropdown. Select **Project Default** from the **Default Translation Workflow** dropdown, Authorize all active strings from the **Translation Authorization** dropdown, and click on **Add**.

### Generate User Identifier and Secret Keys

Now, let's create Smartling user and secret keys. To do so, follow these steps:
- Click on the ACCOUNT SETTINGS dropdown at the top of the screen and select API.
- On the next screen, click on the Create Token button inside the Project Tokens section.
- Then, select your project (if not already selected, from the dropdown) , provide a name to your token, and click on **Create**.

Make note of the User identifier, Project ID, and User Secret keys as we need them while setting up our app in Contentstack.

With these steps we have now configured our Smartling account. Let's move ahead and install the Smartling app.

## Install and Configure Smartling in Contentstack Marketplace

Follow the steps below to install the Smartling application in Contentstack.
- Login to your Contentstack account.
- On the left-hand-side primary navigation, you will find a new icon for Marketplace (as shown below). Click on the icon to go to the Marketplace.
- Within the Marketplace, you will be able to see all the apps available, hover over the **Smartling** app and click on **Install App**.
- In the pop-up window, choose the stack where you want the Smartling app to be installed and click on the **Install** button.
- Now on the Configuration screen, enter the following details:
- **Smartling User Identifier**: Enter the **Smartling User Identifier** we retrieved in the previous step.
- **Smartling User Secret**: Enter the **Smartling User Secret** key that we retrieved in the previous step.
- **Smartling Project ID**: Enter the **Smartling Project ID** that we retrieved in the previous step.
- **Workflow**: Select the **Smartling** workflow that we created in step 1.
- **Workflow Stage**: Select **Send for Translation** as the workflow stage to translate your entry.
- **Next Workflow Stage**: After translating the content, the entry is moved to the next workflow stage. Choose the next workflow stage.
- **Management Token**: Add your stack’s [management token](https://www.contentstack.com/docs/developers/create-tokens/#about-management-tokens/)that you created in step 1.
- **Exclude Keys**: Exclude fields that you don’t want to translate.
- Exclude fields from specific content type: Choose the **Content Type(s)** of the fields you want to exclude, then insert the **Fields** you don't want to translate.
- Exclude fields from all content types: Navigate to the **Field Level Scope** section and enter the UIDs of the fields you don’t want to translate from all content types of your stack.
- After adding the configuration details, click on the **Save** button.
- Click on **Open Stack** to start using the Smartling application.

## Use the Smartling App
- Go to your stack and click the “Content Models” icon on the left navigation panel, and click on the **+ New Content Type** button.
- Create a content type by adding relevant details as displayed below:
- Go to the entry in your content type (in our example, it is Smartling content type) and change the workflow stage by selecting **Send for Translation** from the **Workflow Details** section on the right side.
- Now. select **French - France** from the locale drop-down and you should see your entry translated in the target language, French and the workflow stage changed to **Review**.

## Common questions

### Do I need to create workflows in both Contentstack and Smartling?
Yes. The guide includes steps to set up a workflow in Contentstack for the translation process and to add/configure a workflow in Smartling for the Smartling project.

### Which credentials are required when configuring the Smartling app in Contentstack?
You need the Smartling User Identifier, Smartling User Secret, and Smartling Project ID, along with a Contentstack management token.

### Can I exclude specific fields from translation?
Yes. The configuration includes **Exclude Keys**, with options to exclude fields from a specific content type or from all content types using field UIDs.

### What happens after I set the workflow stage to “Send for Translation”?
The entry is translated into the target locale (for example, French - France), and the workflow stage changes to **Review** as described in the guide.

<!-- filename: marketplace-guides-and-apps-smartling-app-installation-guide.md -->