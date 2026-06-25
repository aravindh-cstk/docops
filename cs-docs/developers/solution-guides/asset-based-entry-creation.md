---
title: "[Solution Guides Articles] - Asset-based Entry Creation"
description: Streamlines the process of creating an entry after creating a product asset.
url: https://www.contentstack.com/docs/headless-cms/asset-based-entry-creation
product: Contentstack
doc_type: solution-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Solution Guides Articles] - Asset-based Entry Creation

This page explains how to streamline entry creation and updates based on product asset events using automations. It is intended for developers configuring automations to reduce manual click-through and busy work when creating or updating product detail entries from assets.

## Article content

### Item 1

#### Article section

##### Heading

Asset-based Entry Creation

##### Content

Streamlines the process of creating an entry after creating a product asset. It helps reduce user click-through time and reduces the amount of busy work they need to do.

## Tactical Rundown

### Automation 1 - Asset Detail Page Creation

Here's the overview of the Automation that you need to create:
- Asset TriggerSelect the Asset Trigger and choose **Asset Created**
- Select the Stack you want to target with the automation
- Transform ConnectorChoose the Transform Connector

We create a bare-bones entry creation payload with the asset details. We assume the product page uses the “Title” and “Description” fields from the asset details page.
- Below is the snippet you can use to create the entry payload. Feel free to add more details to the JSON, if needed.
```
{
    "entry": {
        "title": "{title}",
        "description": "{description}",
        "product_image": "{file}"
    }
}
```
- Create an Entry ConnectorSelect the stack and content type from the previous steps
- Entry data should be the transform statement you receive in Step 2

### Automation 2 - Asset Update Detail Page

Here's the overview of the Automation that you need to create:
- Asset TriggerSelect the Asset Updated trigger
- Select the same stack used in the previous automation.
- Javascript Code Block ConnectorWe need to fetch the entry by UID of the asset to update the correct Product Detail Page
- Here's the code snippet used above:

```
const apiKey = input.apiKey;
const deliveryToken = input.deliveryToken;
const environment = input.environment;
const contentType = input.contentType;
const uid = input.assetUID;

// Build the URL for the API request
const url = `https://cdn.contentstack.io/v3/content_types/${contentType}/entries?environment=${environment}&query={"product_image":"${uid}"}`;

// Set the headers required by Contentstack
const headers = {
  'Content-Type': 'application/json',
  'api_key': apiKey,
  'access_token': deliveryToken
};
try {
  const response = await fetch(url, {
    headers });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  } const data = await response.json();
  return data;
} catch (error) {
  return error.message }
```
- Transform ConnectorBelow is what the transform statement looks like to update the entry with the new details. As you can see the input values take the title and description from the trigger event.
- Update Entry ConnectorSelect the **Update Entry** Action
- The **Stack** should be from a response in step 1.
- The **Content Type** should be from a response in step 1.
- The **Entry** should be from a response in step 1.
- The **Entry Data** should be from a response in step 3.

## Common questions

### What problem does Asset-based Entry Creation solve?
It streamlines the process of creating an entry after creating a product asset, helping reduce user click-through time and the amount of busy work.

### What triggers are used in the two automations?
Automation 1 uses **Asset Created** and Automation 2 uses the **Asset Updated** trigger.

### How does Automation 2 find the correct entry to update?
It uses a Javascript Code Block Connector to fetch the entry by UID of the asset to update the correct Product Detail Page.

### What should be used for “Entry Data” in each automation?
For Automation 1, Entry data should be the transform statement you receive in Step 2. For Automation 2, the **Entry Data** should be from a response in step 3.