---
title: Automations guides and connectors - Aprimo
description: Documentation for the Aprimo connector in Automation Hub, including setup and actions (Edit a Record, Get Single Record).
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/aprimo
product: Contentstack
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: current
last_updated: 2026-03-26
---

# Automations guides and connectors - Aprimo

This page explains how to set up and use the Aprimo connector in Contentstack Automations, including how to authorize an Aprimo account and run the available actions. It is intended for developers and automation builders who need to update or fetch Aprimo asset/record details as part of an automation workflow.

## Aprimo

The Aprimo connector lets you update and fetch asset details stored in Aprimo.

## Set up Aprimo Connector

The Aprimo connector lets you perform the following actions:
- [Edit a Record](#edit-a-record)
- [Get Single Record](#get-single-record)

Let’s look at each of them in detail.

### Edit a Record

This action lets you update the attributes such as Asset ID, Title, Description, Asset Status etc. of an asset/record stored in Aprimo.
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Aprimo** connector.
- Under **Choose an Action** tab, select the **Edit a Record** action.
- Click the **+ Add New Account** button to add your Aprimo account.
- In the Authorize pop-up window, provide the **Title**, **Aprimo URL**, **Client ID**, and **Client Secret**.

To generate **Client ID** and **Client Secret**, log in to the Aprimo dashboard and perform the following steps:

Click the **Administration** tab in the left navigation panel
- Click **Integration** in the left navigation panel and then click **Registrations**.
- Click the New icon present on the right side of the page.
- Provide the required details and then click the **Save** icon.
- You will be able to see the **Client ID**. Below is the list of Redirect URLs for different Contentstack Regions.**US (North America, or NA)**
Redirect URL:

```
https://automations-api.contentstack.com/userauths/auth/callback
```
- **Azure NA**
Redirect URL:

```
https://azure-na-app.contentstack.com/automationsapi/userauths/auth/callback
```
- **Europe (EU)**
Redirect URL:

```
https://eu-prod-automations-api.contentstack.com/userauths/auth/callback
```

**Note:** It is mandatory to select the **OAuth Flow Type** as **Client Credential**. The credentials are activated after 15 minutes so you can use them to authorize your Aprimo account.
- Enter an **Account Name **and then click **Save**.
- Select an **Asset** which you want to update from the **Lookup** dropdown.
**Note:** Contentstack Marketplace offers an [Aprimo](../developers/marketplace-apps/aprimo.md) app for its users, so they can fetch the assets/images into their Contentstack CMS entry. With the Aprimo connector, you can fetch the asset id from the Aprimo entry and you can edit the asset attributes.
- In the **Asset Attribute** field, provide the name of the attribute in the **Key** field and the value that you want to update in the **Value** field.
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.
- Once set, click the **Save and Exit** button.
- Navigate to the Aprimo dashboard to view the changes on the selected asset/record.

### Get Single Record

This action lets you fetch the asset details from your Aprimo dashboard.
- Within the **Configure Action Step**, click the **Aprimo** connector.
- Select the **Get Single Record** action.
- Click the **+ Add New Account** button to add your Aprimo account.
- In the Authorize pop-up window, provide the **Title**, **Aprimo URL**, **Client ID**, and **Client Secret**.

To generate **Client ID** and **Client Secret**, log in to the Aprimo dashboard and perform the following steps:

Click the **Administration** tab in the left navigation panel
- Click **Integration** in the left navigation panel and then click **Registrations**.
- Click the New icon present on the right side of the page.
- Provide the required details and then click the **Save** icon.
- You will be able to see the **Client ID**. Below is the list of Redirect URLs for different Contentstack Regions.**US (North America, or NA)**
Redirect URL:

```
https://automations-api.contentstack.com/userauths/auth/callback
```
- **Azure NA**
Redirect URL:

```
https://azure-na-app.contentstack.com/automationsapi/userauths/auth/callback
```
- **Europe (EU)**
Redirect URL:

```
https://eu-prod-automations-api.contentstack.com/userauths/auth/callback
```

**Note:** It is mandatory to select the **OAuth Flow Type** as **Client Credential**. The credentials are activated after 15 minutes so you can use them to authorize your Aprimo account.
- Enter an **Account Name **and then click **Save**.
- Select the **Record ID** to fetch the asset details from the **Lookup** dropdown.
- Click the **Proceed** button.
- Click the **Test Action **button to test the configured action.
- Once set, click the **Save and Exit** button.

**Note:** Aprimo does not support the Firefox browser, hence you cannot run this connector on Firefox.

This sets up the **Aprimo** action connector.

## Common questions

### Which actions are available in the Aprimo connector?
The Aprimo connector lets you perform the following actions: **Edit a Record** and **Get Single Record**.

### What OAuth Flow Type should I select when generating credentials in Aprimo?
It is mandatory to select the **OAuth Flow Type** as **Client Credential**.

### How long does it take for Aprimo credentials to become active?
The credentials are activated after 15 minutes so you can use them to authorize your Aprimo account.

### Can I run the Aprimo connector on Firefox?
No. **Aprimo does not support the Firefox browser, hence you cannot run this connector on Firefox.**