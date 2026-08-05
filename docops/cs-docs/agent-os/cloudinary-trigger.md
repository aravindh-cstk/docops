---
title: Automations guides and connectors - Cloudinary
description: Set up the Cloudinary action connector to automate updating metadata for assets in a Cloudinary account.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/cloudinary
product: Automate
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Cloudinary

This page describes the Cloudinary connector in Automate and explains how to set it up to update asset metadata. It is intended for developers and automation builders configuring third-party action steps, and should be used when you need to authorize a Cloudinary account and test an Update Metadata action.

## Cloudinary

Cloudinary is an image and video management tool for websites and mobile applications covering everything from uploading, storage, optimization, and delivery.  
With Automate, you can now easily automate the process of updating the metadata of all the assets present in a cloudinary account.

## Set up Cloudinary

Perform the following steps to set up the Cloudinary action connector:

- Click **Configure Action Step **from the left navigation panel.
- Click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **Cloudinary** connector.
- Under **Choose an Action** tab, select the **Update Metadata **action.
- In the **Configure Action** tab, click **+ Add New Account **to add your Cloudinary account.
- In the **Authorize** pop-up window, provide details such as **Cloud Name**, **API Key**, and **API Secret**.To generate Cloud Name, API Key, and API Secret, log in to the Cloudinary dashboard and perform the following steps:

  Click the **Dashboard** tab in the left navigation.
- Under the “Product Environment” section, you will see the **Cloud Name**. Click **Go to API Keys**, and click the **+ Generate New API Key **button to create a new API key.You will see the **API Secret**. Click the **Eye **icon and provide the login password. Click **Approve **to view the API Secret.

  For more information, refer to the [Admin API reference](https://cloudinary.com/documentation/admin_api) document.
- Once done, click **Authorize**.
- Select the **MetaData** from the **Lookup** list. Cloudinary structured metadata allows you to define asset fields, populate them with values programmatically or via the Media Library, and perform searches on them. You can also add validation rules, set default values, and define fields as mandatory.
- In the **Body** field, enter the metadata field that you want to update. It should be in JSON format.
- Click **Proceed**.
- To execute and test the configured action, click **Test Action**.
- On successful configuration, you can see the below output. Click **Save and Exit**.
- Navigate to Cloudinary to check the progress. This output should show the mandatory field disabled.

This sets the **Cloudinary** action connector.

## Common questions

**How do I get the Cloud Name, API Key, and API Secret?**  
Log in to the Cloudinary dashboard, find the **Cloud Name** under “Product Environment”, and use **Go to API Keys** and **+ Generate New API Key ** to create a key and view the **API Secret**.

**What action should I select for updating asset metadata?**  
Under **Choose an Action** tab, select the **Update Metadata **action.

**What format should the Body field use?**  
In the **Body** field, enter the metadata field that you want to update. It should be in JSON format.

**How do I verify the connector is working?**  
Click **Test Action**, then click **Save and Exit**, and navigate to Cloudinary to check the progress.