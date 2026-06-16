---
title: "[Automations guides and connectors] - HTTP"
description: HTTP Action connector setup for making an HTTP call when a trigger event occurs.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/http-action
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-26
---

# [Automations guides and connectors] - HTTP

This page explains how to configure the HTTP Action connector to make an HTTP call whenever a trigger event occurs. It is intended for developers and automation builders setting up action steps in Automation Hub, and should be used when you need to call an external HTTP endpoint as part of an automation workflow.

## HTTP

The HTTP Action lets you make an HTTP call whenever a trigger event occurs.

## Set up the HTTP Action

Perform the following steps to set up the HTTP action connector:

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **HTTP **connector.
- Under **Choose an Action** tab, select the **HTTP Request** action.
- On the **HTTP Request Configure Action** page, enter the details given below:Under the **Select Account** drop-down, select one of the accounts connected to your project. The sensitive information, such as access code, secret key, API key, etc., can be fetched from the selected account.**Note: ***Select Account *is an optional field. You can still configure the action without selecting an account.
- Enter the **URL **and select any HTTP methods: GET, POST, PUT, DELETE, or PATCH. For this example, we are choosing the **GET **HTTP method.
- Optionally, enable the **Show Optional Fields** toggle button to enter the respective names and values for **Headers** and **Query Parameters**.
- Provide a **Header Name** and a **Value** fetched from the **Account Data** drop-down. The **Account data** drop-down contains all the sensitive masked data retrieved from the selected account.
- Click the **Throw error status** checkbox to throw an error in case the error status codes are between 4**-5**.
  **Note: **Throw an error will display an error message in the **Trigger output** and the **Execution Log** section.
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit.** Hit the URL to find the header value in the output.

This sets the **HTTP** action connector.

## Common questions

**How do I choose which HTTP method to use (GET, POST, PUT, DELETE, PATCH)?**  
Select the method based on the endpoint you are calling and what the API expects; the connector supports GET, POST, PUT, DELETE, or PATCH.

**Do I have to select an account in the Select Account drop-down?**  
No. **Select Account** is an optional field. You can still configure the action without selecting an account.

**Where do header values come from when using Account Data?**  
The **Account data** drop-down contains all the sensitive masked data retrieved from the selected account.

**What happens if I enable Throw error status?**  
Throw an error will display an error message in the **Trigger output** and the **Execution Log** section when the error status codes are between 4**-5**.