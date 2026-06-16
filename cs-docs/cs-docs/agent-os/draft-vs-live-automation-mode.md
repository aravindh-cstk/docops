---
title: "[Automations guides and connectors] - Draft vs. Live Automation Mode"
description: Draft vs. Live Automation Mode for Agent OS automations, including why the modes exist and what actions are allowed in each mode.
url: https://www.contentstack.com/docs/developers/automation-hub-guides/draft-vs-live-automation-mode
product: Agent OS
doc_type: guide
audience:
  - developers
  - automation-builders
version: draft
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Draft vs. Live Automation Mode

This page explains how Agent OS automations behave in Draft vs. Live mode, what you can and cannot change in each mode, and why these modes exist. It is intended for developers and automation builders who need to safely update automations without disrupting active executions.

## Draft vs. Live Automation Mode

Agent OS has introduced a new way to view and update your existing or new automation(s) in two different ways. You can see how the user interactivity changes when the automation is toggled between Draft and Live mode.

## Why Draft and Live Mode?

Suppose there is an active automation to publish entries to the Algolia dashboard. Edits to the automation by a different user could hamper the ongoing execution.

In order to maintain the uninterrupted operation of live automation, it will be safeguarded against any modifications or adjustments. This means that you will **not **be able to make edits or changes to it.

If you wish to make alterations to a live automation, you have two options. First, you can disable it, which will unlock it for editing. Alternatively, you can create a [clone of the automation](/docs/developers/automation-hub-guides/clone-an-automation), make your desired changes to the clone, and when you're ready, you can activate the clone (while deactivating the previous version).

You can view the automation in Live mode. The status of the automation is notified on the automation builder page.

Let’s look at each of them in detail:

## Draft Mode

- Draft mode is when an automation is **deactivated**.
- You can update the automation configuration in draft mode **only**.

## Benefits of Draft Mode

- You can only edit, update, and configure automation steps in the Draft mode. This allows to configure an automation without hampering the ongoing execution.
- You can add new steps or edit/delete trigger and action steps while working in Draft mode.

## Live Mode

- Live mode is when an automation is **active**.
- You can view automation configuration in Live mode.
- You cannot add new steps or delete automation steps in the Live mode.
- You can **only ******[Clone an Automation](/docs/developers/automation-hub-guides/clone-an-automation)****or [Throttle Execution](/docs/developers/automation-hub-guides/throttle-execution) in Live mode.
- All the trigger and action steps are locked.
- You cannot [edit](/docs/developers/automation-hub-guides/edit-automation-details) the Automation Title and Description.
- You cannot [delete an automation](/docs/developers/automation-hub-guides/delete-automation).
- You cannot add a new step between existing automation steps.
- The Delete Trigger and Delete Action icons will not be visible on hover.

## Benefits of Live Mode

- You can execute an automation in Live mode.

You can check the status of the automation on the Automations listing page.

## Common questions

### Can I edit an automation while it is Live?
No. In Live mode, the automation configuration is locked and you cannot add or delete steps or edit the Automation Title and Description.

### How can I change a Live automation safely?
Disable it to unlock editing, or create a [clone of the automation](/docs/developers/automation-hub-guides/clone-an-automation), apply changes to the clone, then activate the clone while deactivating the previous version.

### What can I do in Live mode besides viewing the configuration?
You can **only** [Clone an Automation](/docs/developers/automation-hub-guides/clone-an-automation) or [Throttle Execution](/docs/developers/automation-hub-guides/throttle-execution) in Live mode.

### Where do I see whether an automation is Draft or Live?
The status of the automation is notified on the automation builder page, and you can check the status of the automation on the Automations listing page.