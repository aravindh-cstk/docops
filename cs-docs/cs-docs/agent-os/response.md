---
title: Automations guides and connectors - Response
description: Documentation for the Response action connector in Automation Hub connectors, including setup steps and usage notes.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/response
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Response

This page explains what the Response action connector does and how to configure it. It is intended for developers setting up automations and should be used when you need to notify users about the success or failure of a configured action via a response.

## Response

The Response action connector helps determine the status of your configured action. It notifies users about the success or failure of a configured action with a response.

**Note:** The Response action connector can only be used with the HTTP trigger connector.

## Set up Response

Perform the following steps to set up the Response action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **Response** connector.
- Under **Choose an Action **tab, select the **Response** action.
- Based on the results of your configured action, enter the **Response Status**.
- In the **Response Body** field, you can add data that you want to send as the response.
- Add** Response Headers** to provide any additional information.
- Click **Proceed**.
- To execute and test the configured action, click **Test Action**.
- On successful configuration, you can see the below output. Click **Save and Exit**.

You can check the response by activating automation and visiting the webhook URL you configured in the previous step.

This sets the **Response** action connector.

## Common questions

**How do I know if I can use the Response action connector with my automation?**  
The Response action connector can only be used with the HTTP trigger connector.

**Where do I set the status returned by the Response action connector?**  
Based on the results of your configured action, enter the **Response Status**.

**How can I verify the response after configuration?**  
You can check the response by activating automation and visiting the webhook URL you configured in the previous step.

**What fields can I include in the response?**  
In the **Response Body** field, you can add data that you want to send as the response, and add** Response Headers** to provide any additional information.