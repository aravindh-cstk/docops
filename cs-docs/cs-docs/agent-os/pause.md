---
title: "[Automations guides and connectors] - Pause"
description: The Pause action connector lets you pause an existing automation.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/pause
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Pause

This page explains how to use and configure the Pause action connector in Automation Hub. It is intended for developers setting up automation workflows and should be used when you need to pause an existing automation and optionally preserve properties from previous steps.

## Pause

The Pause action connector lets you pause an existing automation.

## Set up the Pause Connector

Perform the following steps to set up the Pause action connector:

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the** Pause **connector.
- Under **Choose an Action** tab, select the **Pause an Automation** action.
- On the **Configure Action** page, simply click the **Proceed **button to pause an automation.
- Click the **Show optional fields** toggle button to choose to **Preserve Properties Previous Steps** (i.e., use the previous step’s properties). You need to enter a **Property Name** for the trigger event and select a trigger **Value** from the output dropdown. Also, you can provide the **Sample of HTTP payload from Automation resume request** by entering the values in the **Query** and **Body** textboxes in JSON format only.**Note: **The **Pause** action can stop the workflow, but resuming it requires support from an external system. Because of this dependency, it is not well-suited for time-based triggers, as it introduces unnecessary complexity.
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.

**Note**: You need to add a new action that will resume the automation by following the steps described in the respective action connector document.

This sets up the **Pause** action connector.

## Common questions

### Does the Pause action resume the automation automatically?
No. **Note: **The **Pause** action can stop the workflow, but resuming it requires support from an external system.

### Can I use Pause for time-based triggers?
It is not well-suited for time-based triggers, as it introduces unnecessary complexity.

### Can I preserve properties from previous steps when pausing?
Yes. Use the **Show optional fields** toggle button to choose to **Preserve Properties Previous Steps** (i.e., use the previous step’s properties).