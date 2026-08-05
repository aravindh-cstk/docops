---
title: "[Automations guides and connectors] - Clone an Automation"
description: How to duplicate (clone) an automation, including behavior across projects and handling project variables.
url: https://www.contentstack.com/docs/agent-os/clone-an-automation
product: Automation Hub
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Clone an Automation

This page explains how to clone an automation from the Automations listing page or Settings, what happens to tested/untested steps when cloning within the same project or to a different project, and how to copy Project Variables so the cloned automation works properly. It is intended for developers and builders managing automations across projects and environments.

## Clone an Automation

You can duplicate an automation from the automations listing page. A copy of the existing automation and all the current configurations is created, i.e., trigger(s) and action(s). Since the original and the cloned automation are in the same project, they can share important attributes, such as invited users and connected apps.

Creating a duplicate version of an automation can be useful for a number of reasons:
- You can create a backup of a working automation in case you need to revert to a previous version.
- You can duplicate a live automation to make changes and test them in duplicate. Once the updates are tested, you can replace the original with the updated version. This way, you do not have to change a live automation.
- Suppose you need to create an automation similar to another one. In that case, you can create a clone of the similar automation and have a nice starting point from which to begin building your steps.

To clone an automation, perform the steps given below:
- On the **Automations** listing page, click the **clone** icon.![Clone_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt929a4072f9f79cad/699bcdb58923a00008498a84/Clone_Icon.png)
- On the **Clone Automation** modal, provide the **Automation Name **and **Select Project **from the dropdown to clone the automation to the selected project.
- Once you have updated the details, click **Clone**.![Clone_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt689742509b94d67a/699bcdb5676f8800085c09f8/Clone_Button.png)
- You can see the clone created for the automation in the selected project.![Cloned_Automation_on_listing_page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b241d4839e2faa5/699bcdb5e8917700087c2736/Cloned_Automation_on_listing_page.png)
- Alternatively, go to the automation **Settings** page and click **Clone Automation** to duplicate the automation.![Clone_settings_page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt726350aa42f65ce6/699bcdb58923a00008498a88/Clone_settings_page.png)

**Note:** You can now throttle the execution for your automations to avoid rate limit. For more information, refer to the [Throttle Execution](./throttle-execution.md) document.

If the automation is cloned in the same project, some steps may appear as tested and untested. If any action has a dependency on the previous step and that step remains untested, then all the subsequent steps become untested.

You can find the dependency by checking the automation step number in the active action step. If the current step fetches value from the untested step, it becomes dependent on the previous step to testify as tested.

**Note:** If a user clones an automation to a different project, all the automation steps become untested and the user needs to configure connected apps to activate the automation.

## What if you have Project Variables defined in your project?

If you have defined project variables in your project and used them in your automation, then you can copy the project variables to the destination project for the cloned automation to work properly.
- In the Clone Automation modal, provide the **Automation Name **and **Select Project **from the dropdown to clone the automation to the selected project.
- Click **Next Step **to view and copy the project variables in the destination project.

    **Note:** Project Variables are defined at project level.
- Enable the toggle to copy the variables.
- Click **Clone **to clone the automation.![Clone_Button_New.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt45a84e1b1ab1b92a/656dbe190e4fd115ee57fc4a/Clone_Button_New.png)
- You will see the cloned automation along with the project variables in the destination project.![Cloned_Automation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt186c29da47bc5537/656dbe360e4fd163d957fc4e/Cloned_Automation.png)

## Common questions

**Q: Can I clone an automation to a different project?**  
A: Yes. On the **Clone Automation** modal, use **Select Project **from the dropdown to clone the automation to the selected project.

**Q: What happens to tested/untested steps when cloning?**  
A: If the automation is cloned in the same project, some steps may appear as tested and untested, and dependencies can cause subsequent steps to become untested. If a user clones an automation to a different project, all the automation steps become untested.

**Q: Do I need to reconfigure connected apps after cloning?**  
A: **Note:** If a user clones an automation to a different project, all the automation steps become untested and the user needs to configure connected apps to activate the automation.

**Q: How do I ensure Project Variables work in the cloned automation?**  
A: You can copy the project variables to the destination project by clicking **Next Step **in the Clone Automation modal, enabling the toggle to copy the variables, and then clicking **Clone **.