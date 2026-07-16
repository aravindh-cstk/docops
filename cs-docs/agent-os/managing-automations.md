---
title: "[Automations guides and connectors] - Managing Automations"
description: Guide for creating, editing, deleting automations and managing steps in Agent OS Automations.
url: https://www.contentstack.com/docs/agent-os/managing-automations
product: Contentstack Agent OS
doc_type: guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Managing Automations

This page explains how to manage Automations in Contentstack Agent OS, including creating, editing, and deleting automations as well as deleting and renaming steps. It is intended for users who work in the Agent OS interface and need to maintain automation workflows.

Managing Automations

## Create an Automation
Automations helps you efficiently manage workflows by setting up step-by-step executions triggered by specific conditions. With Automations, you can easily create, edit, and delete automation sequences directly within the Agent OS interface. This guide walks you through managing automations to streamline your tasks.

To create an automation, perform the following steps:
- Log in to your [Contentstack account](https://www.contentstack.com/login).
- After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.![App_Switcher_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1fdcbdc45f5b75e7/699bc0d1ead2f50008c963a1/App_Switcher_Icon.png)
- Click **+ New Project** or create a new one.
- In the top navigation panel, click **Automations**.![Automations_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt820ca908806084ce/699bc07fa6967e0008df4d58/Automations_Icon.png)
- Click **+ New Automation**. From the dropdown, select **Create New**.![Create_New_Automation_button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt094d50c316ed4d3d/699bc08045700700085f5a77/Create_New_Automation_button.png)
- In the **Create New Automation** modal, provide an **Automation Name **and an optional **Description**. Click **Create**.
![Create_Automation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4988549bcba86d73/699bc07f624a07000845fd57/Create_Automation.png)**Additional Resource: **Refer to the [Get Started with Automations]( /docs/developers/automation-hub-guides/get-started-with-automation-hub) documentation to learn the automation configuration.

## Edit Automation Details
You can edit the primary details of an automation, i.e., its **Name** and **Description**.

To do so, perform the steps given below:
- Navigate to the Automations listing page, click the vertical ellipses, then click **Edit**.![Edit_Automation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ebd0b7a76f144f2/699bc080370b580008b41ced/Edit_Automation.png)
- In the **Edit Automation** modal, provide the new **Name** and **Description** of the automation. Once you have updated the details, click **Update**.![Update_Automation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf428d9c5aadfbff/699bc0805a4f77000823282d/Update_Automation.png)

## Delete an Automation
To delete an automation, perform the steps given below:
- Navigate to the Automations listing page, click the vertical ellipses, then click **Delete**.![Delete_Automation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt10a5796798765d31/699bc0803f35720008e049a2/Delete_Automation.png)
- In the **Delete Automation **modal, verify and click **Delete** again to delete the automation permanently.![Delete_Automation_Modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf3c12eaec9124cdb/699bc07f2b6dd50008a89f03/Delete_Automation_Modal.png)

## Delete a Step
To delete a step, perform the steps given below:
- Click the **Configure Action Step** tab (in our case, Transform).![Delete_Transform_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7c3bfe899ea893fb/699bc0867603c100089f20e7/Delete_Transform_Step.png)
- Click the vertical ellipses, then click the **Delete Step** icon.![Delete_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt60a628b9ccdbf717/699bc0808b33e4000870c689/Delete_Step.png)
- Confirm your action by clicking the **Delete** button.![Delete_Step_Modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd4ab4fbbe7b4a2d/699bc085da5d88000881eea7/Delete_Step_Modal.png)
- You can also delete the step from the configured action as shown below:![Delete_Step_from_Configuration_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltccb94a3533ce7962/699bc08531a5c5000890e902/Delete_Step_from_Configuration_Step.png)

## Rename a Step
To rename a step, perform the steps given below:
- Click the action tab (in our case, **Transform**).
- Click the edit icon visible on the action header to rename the step.![Edit_Step_Name_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88bcb452c7b6e41c/699bc086db043d0008254232/Edit_Step_Name_Icon.png)
- The **Transform** field becomes editable. You can update the name of the action as required and click the “✔” check mark.![Tick_step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfe783f4aa3163d06/699bc086676f8800085c09d5/Tick_step.png)

## Common questions

### Where do I create a new automation in Agent OS?
Go to **Automations** in the top navigation panel, then click **+ New Automation** and select **Create New**.

### What automation details can I edit?
You can edit the automation’s **Name** and **Description** from the Automations listing page via **Edit**.

### Is deleting an automation permanent?
Yes. In the **Delete Automation **modal, you verify and click **Delete** again to delete the automation permanently.

### Can I rename or delete individual steps in an automation?
Yes. You can delete a step using the vertical ellipses and **Delete Step**, and rename a step using the edit icon on the action header.