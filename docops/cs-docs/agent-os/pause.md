---
title: "[Automations guides and connectors] - Pause"
description: The Pause action connector lets you pause an existing automation.
url: https://www.contentstack.com/docs/agent-os/pause
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
- Within the **Configure Action Step**, click the** Pause **connector.![Pause_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb60ee381281bd263/68b802d14ac7c42c81ea52f2/Pause_Connector.png)
- Under **Choose an Action** tab, select the **Pause an Automation** action.![Select_an_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfe5bbdc05b9518e6/68b802d144498a3b373a54ab/Select_an_Action.png)
- On the **Configure Action** page, simply click the **Proceed **button to pause an automation.![Proceed.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2464cd4708013102/68b802d110a6d0f66c1c4c45/Proceed.png)
- Click the **Show optional fields** toggle button to choose to **Preserve Properties Previous Steps** (i.e., use the previous step’s properties). You need to enter a **Property Name** for the trigger event and select a trigger **Value** from the output dropdown. Also, you can provide the **Sample of HTTP payload from Automation resume request** by entering the values in the **Query** and **Body** textboxes in JSON format only.![Select_Fields_Pause.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcc44f1110642c972/68b802d2324d49107ab7ad11/Select_Fields_Pause.png)

  **Note: **The **Pause** action can stop the workflow, but resuming it requires support from an external system. Because of this dependency, it is not well-suited for time-based triggers, as it introduces unnecessary complexity.
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.![Save_Exit_Pause.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt72698929249224d3/68b802d168306ce7c017f6f8/Save_Exit_Pause.png)

**Note**: You need to add a new action that will resume the automation by following the steps described in the respective action connector document.

This sets up the **Pause** action connector.

## Common questions

### Does the Pause action resume the automation automatically?
No. **Note: **The **Pause** action can stop the workflow, but resuming it requires support from an external system.

### Can I use Pause for time-based triggers?
It is not well-suited for time-based triggers, as it introduces unnecessary complexity.

### Can I preserve properties from previous steps when pausing?
Yes. Use the **Show optional fields** toggle button to choose to **Preserve Properties Previous Steps** (i.e., use the previous step’s properties).