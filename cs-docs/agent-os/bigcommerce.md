---
title: Automations guides and connectors - BigCommerce
description: Set up the BigCommerce action connector to retrieve product details from your BigCommerce store.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/bigcommerce
product: BigCommerce
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - BigCommerce

This page describes the BigCommerce connector in an automation hub, including what it does and the steps required to configure and authorize it. It is intended for developers and automation builders who need to retrieve product details from a BigCommerce store as part of an automated workflow.

## BigCommerce

BigCommerce is a cloud-based platform that helps set up an online store for your products. This action connector allows you to retrieve product details from your BigCommerce store.

## Set up BigCommerce

Perform the following steps to set up the BigCommerce action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **BigCommerce** connector.
- Under **Choose an Action** tab, select the **Get Product Details** action.
- In the **Configure Action** tab, click** + Add New Account** to add your BigCommerce account.
- In the **Authorize** pop-up window, provide the **Store Hash** and **Access Token**.To generate Store Hash and Access Token, log in to the BigCommerce dashboard and perform the following steps:

Click the **Advanced Settings** tab in the navigation and select **API Accounts**.
- Under the “API Accounts” section, click **+ Create API Account**.
- Provide a **Name** and set the OAuth scopes. Once done, click **Save**.
- Copy the “Store Hash” and “Access Token” for future use.

For more information, refer to the[Store API Accounts](https://support.bigcommerce.com/s/article/Store-API-Accounts?language=en_US)document.
- Once done, click **Authorize**.
- Provide the **Product ID** to fetch your product details. You can either check for the Product ID from your BigCommerce online store or can dynamically add it from the previous step.
- Click **Proceed**.
- To execute and test the configured action, click **Test Action**.
- On successful configuration, you can see the below output. Click **Save and Exit**.

This sets the **BigCommerce** action connector.

## Common questions

### What does the BigCommerce connector do?
It allows you to retrieve product details from your BigCommerce store using the **Get Product Details** action.

### What information is required to authorize the connector?
You must provide the **Store Hash** and **Access Token** in the **Authorize** pop-up window.

### Where do I find the Store Hash and Access Token?
Log in to the BigCommerce dashboard, go to **Advanced Settings** > **API Accounts**, create an API account, and copy the “Store Hash” and “Access Token”.

### What input is needed to fetch product details?
You must provide the **Product ID**, either by checking it in your BigCommerce online store or dynamically adding it from the previous step.