---
title: "[Automations guides and connectors] - How Conditional Paths Work"
description: How Conditional Paths Work in Automation Hub guides and connectors.
url: https://www.contentstack.com/docs/agent-os/how-conditional-paths-work
product: Agent OS
doc_type: guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-25
---

# [Automations guides and connectors] - How Conditional Paths Work

This page explains how Conditional Paths work in automations, including how to configure triggers, action steps, and the If/Else branches. It is intended for developers and automation builders who need to route automation flows based on conditions that evaluate to true or false.

## How Conditional Paths Work?

Conditional Path is a part of setting up the automations by providing logical expressions that resolve to either true or false. Based on this, different actions can be executed for different paths. It adds flexibility and adaptability in automation.

Here are the steps to configure Conditional Path in your automation.
- Configure Trigger
- Configure Action Step  
      Select Conditional Path  
          If - Add Step
- Else - Add Step

## Configure Trigger

Triggers are invocation events that happen whenever an event is triggered. Agent OS provides different triggers to invoke an event based on certain conditions.

For example, Contentstack Trigger provides different events to configure the trigger connector, such as executing an action when an entry is created in Contentstack.

**Note:** If the trigger conditions do not satisfy the conditions, then the automation will not be executed. To go ahead in the conditional path block, the configuration in the Trigger Conditions (if provided) must match.

## Configure Action Step

Configure Action Step executes when the trigger event is fired. For example, when an entry is created/updated/deleted in Contentstack, a slack message is sent to the channel to notify the team members of the ongoing updates.

Contentstack provides a variety of connectors or third-party applications that can be used based on the requirements. This allows you to connect your Contentstack application to a third-party application by simply authenticating your account.

**Note: **Pause and Response action connectors cannot be used inside Conditional Path.

In the Conditional Path configuration, provide the conditions you want to set up in the input box.

Suppose you want to execute the If block only when an entry is created in a specific content type. You can provide the content type UID and match it with the content type.

## 2-1 If (Configure Action Step)

In the Configure Action Step section, provide the action you want to perform if the conditions provided in the Conditional Path configuration resolves to true, then the If block will get executed.

You can check the success message for the execution of the automation in the Execution Log section.

Similarly, you can add multiple steps in the If statement for execution. See the screenshot below.

## 2-2 Else (Configure Action)

The basic formula of the Conditional Path is to execute a specific action. Check for the configuration; if the conditions match, execute IF; otherwise, execute ELSE block.

So, if the condition resolves to false, then execute the Else block. You can set up any action connector in the Else block.

Once the Else block is executed, you can check the success message for the execution in the Execution Log section. In detail , you can see the name of the steps that are executed and number of steps configured (2-3 and 3-2)

**Note: **The naming for steps 2-1, 2-3, 4-3 depends on the number of actions configured in the conditional path.

## Common questions

### What does a Conditional Path evaluate to?
A Conditional Path uses logical expressions that resolve to either true or false.

### Can I use any connector inside a Conditional Path?
No. **Pause and Response action connectors cannot be used inside Conditional Path.**

### What happens if the trigger conditions do not match?
If the trigger conditions do not satisfy the conditions, then the automation will not be executed.

### Where can I verify whether the If/Else steps executed successfully?
You can check the success message for the execution of the automation in the Execution Log section.

<!-- filename: automations-guides-and-connectors-how-conditional-paths-work.md -->