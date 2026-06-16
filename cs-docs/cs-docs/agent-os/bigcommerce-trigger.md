---
title: "[Automations guides and connectors] - BigCommerce Trigger"
description: Configure the BigCommerce trigger connector in Automation Hub to listen for BigCommerce events and use them in automations.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/bigcommerce-trigger
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - BigCommerce Trigger

This page explains what the BigCommerce Trigger connector is and how to configure it in Automation Hub. It is intended for developers and automation builders who need to start automations based on BigCommerce events (for example, when a product or order is created) and should be used when setting up or testing a BigCommerce-based trigger.

## BigCommerce Trigger

[BigCommerce](https://www.bigcommerce.com/) is a cloud-based platform that helps set up an online store for your products.

The Automate BigCommerce trigger lets you add BigCommerce-specific trigger events, such as Cart Converted, Customer Created, Product Created, Order Created, Shipment Created, SKU Created in your automation.

**Note:** After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the **Revert ****Changes **button.

## Set up the BigCommerce Trigger

Perform the following steps to configure the BigCommerce trigger:

- Click **Configure Trigger** from the left navigation panel.
- Within the **Configure Trigger **step, click the **BigCommerce** connector.
- Under **Choose Trigger** tab, select the **BigCommerce **trigger.
- In the **Configure Trigger **tab, click **+ Add New Account **to add your BigCommerce account.
- In the **Authorize **pop-up window, provide the **Store ****Hash **and **Access ****Token**.To generate Store Hash and Access Token, log into your BigCommerce dashboard and perform the following steps:

  Click the **Advanced ****Settings **tab in the navigation and select **API ****Accounts**.
- Under the “API Accounts” section, click **+ Create API Account**.
- Provide a **Name **and set the OAuth scopes. Once done, click **Save**.
- Copy the “Store Hash” and “Access Token” to your clipboard for future use.

  **Additional Resources: **For more information, refer to the [Store API Accounts](https://support.bigcommerce.com/s/article/Store-API-Accounts?language=en_US) document.
- Once done, click **Authorize**.
- **Select an Event** from the dropdown.
- Optionally, enable the **Show optional fields** toggle to add **Custom ****Header**. Click **+ Add Custom Header** to add multiple headers.
- Click the **Proceed **button.
- To execute and test the configured trigger, click the **Test ****Trigger **button.
- On successful configuration, you can see the below output. Click the **Save ****and ****Exit **button.

Additionally, you can use the BigCommerce trigger with the [BigCommerce](/docs/developers/automation-hub-connectors/bigcommerce) connector to fetch the product details. For example, you can select the “Product Created” event in the BigCommerce trigger and configure the action to fetch the product details.

This sets the **BigCommerce **trigger connector.

## Common questions

### What BigCommerce events can I use with the trigger?
You can add BigCommerce-specific trigger events, such as Cart Converted, Customer Created, Product Created, Order Created, Shipment Created, SKU Created in your automation.

### Where do I get the Store Hash and Access Token?
To generate Store Hash and Access Token, log into your BigCommerce dashboard and use **Advanced Settings** → **API Accounts** → **+ Create API Account**, then copy the “Store Hash” and “Access Token”.

### Can I add custom headers when configuring the trigger?
Yes. Enable the **Show optional fields** toggle to add **Custom Header**, and click **+ Add Custom Header** to add multiple headers.

### How do I test the configured trigger?
To execute and test the configured trigger, click the **Test Trigger** button.