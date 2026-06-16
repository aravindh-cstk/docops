---
title: "[Automations guides and connectors] - Contentstack Management - Languages Actions"
description: Contentstack Management - Languages Actions for Automation Hub connectors, including Get All Languages.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/contentstack-management-languages-actions
product: Contentstack
doc_type: automation-hub-connector
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Contentstack Management - Languages Actions

This page describes the Contentstack Management - Languages Actions available in Automation Hub connectors, including how to configure and test the Get All Languages action. It is intended for developers and automation builders who need to fetch locale details from a stack when setting up workflows.

## Contentstack Management - Languages Actions

Contentstack offers advanced [multilingual content](/docs/developers/multilingual-content/about-languages) capabilities with over 200 pre-configured locales for creating and publishing entries in multiple languages. You can fetch the details of all the locales in a stack using the Contentstack Management Language action.

Let’s look at each of these in detail.

## Get All Languages

This action fetches the details of all the languages (locales) added in a stack.

- Under **Choose an Action** tab, select the **Get All Languages** action.
- On the **Get All Languages Configure Action **page, enter the details given below:  
  Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **from the **Lookup **list.
- **[Optional] **Enable the **Show Optional Fields** toggle button to display the **Language Limit**, **Skip Language (Pagination)**, and **Branch **fields.
- Click the checkboxes to include the **count of languages** and **branch details**.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.

## Common questions

**How do I connect my Contentstack account before using Get All Languages?**  
Click **+ Add New Account** and follow the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.

**What does the Get All Languages action return?**  
It fetches the details of all the languages (locales) added in a stack.

**Where do I find pagination-related options for languages?**  
Enable the **Show Optional Fields** toggle button to display **Language Limit** and **Skip Language (Pagination)**.

**How do I verify the action is configured correctly?**  
Click **Test Action** to test the configured action, then review the output and click **Save and Exit**.