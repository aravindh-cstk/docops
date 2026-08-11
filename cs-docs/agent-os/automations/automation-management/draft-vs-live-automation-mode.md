---
title: "Draft vs. Live Automation Mode"
description: "With the Draft mode, you can update automation configuration, while with the Live mode you can only view the automation."
url: /agent-os/draft-vs-live-automation-mode
---

# Draft vs. Live Automation Mode

## Draft vs. Live Automation Mode

Agent OS has introduced a new way to view and update your existing or new automation(s) in two different ways. You can see how the user interactivity changes when the automation is toggled between Draft and Live mode.

## Why Draft and Live Mode?

Suppose there is an active automation to publish entries to the Algolia dashboard. Edits to the automation by a different user could hamper the ongoing execution.

In order to maintain the uninterrupted operation of live automation, it will be safeguarded against any modifications or adjustments. This means that you will **not** be able to make edits or changes to it.

If you wish to make alterations to a live automation, you have two options. First, you can disable it, which will unlock it for editing. Alternatively, you can create a [clone of the automation](/docs/agent-os/clone-an-automation), make your desired changes to the clone, and when you're ready, you can activate the clone (while deactivating the previous version).

![Draft_Mode.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt046a99caf5f8816b/65408cb1588560001b273ebf/Draft_Mode.png)

  

![Live_Mode.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt12a7c4cb29224f98/65408cb12797e3040709c5ad/Live_Mode.png)

You can view the automation in Live mode. The status of the automation is notified on the automation builder page.

Let’s look at each of them in detail:

## Draft Mode

1.  Draft mode is when an automation is **deactivated**.
2.  You can update the automation configuration in draft mode **only**.

## Benefits of Draft Mode

1.  You can only edit, update, and configure automation steps in the Draft mode. This allows to configure an automation without hampering the ongoing execution.
2.  You can add new steps or edit/delete trigger and action steps while working in Draft mode.

## Live Mode

1.  Live mode is when an automation is **active**.
2.  You can view automation configuration in Live mode.
3.  You cannot add new steps or delete automation steps in the Live mode.
4.  You can **only** [Clone an Automation](/docs/agent-os/clone-an-automation)or [Throttle Execution](/docs/agent-os/throttle-execution) in Live mode.
5.  All the trigger and action steps are locked.
6.  You cannot [edit](/docs/agent-os/managing-automations#edit-automation-details) the Automation Title and Description.
7.  You cannot [delete an automation](/docs/agent-os/managing-automations#delete-an-automation).
8.  You cannot add a new step between existing automation steps.
9.  The Delete Trigger and Delete Action icons will not be visible on hover.

## Benefits of Live Mode

1.  You can execute an automation in Live mode.

You can check the status of the automation on the Automations listing page.

![Automation_listing_poage.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48a16700cf5f888e/699bcd9f73e3df0008d2e6b4/Automation_listing_poage.png)
