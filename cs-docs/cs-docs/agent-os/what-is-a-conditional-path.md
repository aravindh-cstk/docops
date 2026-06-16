---
title: "[Automations guides and connectors] - What is a Conditional Path"
description: What is a Conditional Path in Automations and when to use it.
url: https://www.contentstack.com/docs/developers/automation-hub-guides/what-is-a-conditional-path
product: Automations
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Automations guides and connectors] - What is a Conditional Path

This page explains what a Conditional Path is in Automations, how it affects automation flow, and when to use it. It is intended for developers building or customizing automations who need to branch actions based on whether an expression evaluates to true or false.

## What is a Conditional Path?

A conditional path runs a different set of actions based on whether an expression is true or false.

For example, if you want to call someone, you can only do so if the person is available. Otherwise, you might send a voice message.

The Conditional Path feature in Automations, allows you to customize your automation paths and flows.
- If the conditions in the Conditional Path match, the actions in the If step are executed.
- If the conditions do not match, the actions in the Else step are executed.

## Basic Flowchart of Conditional Path

## When to Use the Conditional Path Statement?

With the Conditional Path feature, you can control the flow of your automation. Use a Conditional Path when you want to trigger specific actions only if a condition is met. For example, when a variable equals a specific value or exceeds a threshold.

Refer to the [Using Conditional Paths to Customize Automations ](/docs/developers/automation-hub-guides/using-conditional-paths-to-customize-automations/)use case to narrow down your automation for specific tasks.

## Common questions

### What happens if the Conditional Path conditions match?
If the conditions in the Conditional Path match, the actions in the If step are executed.

### What happens if the Conditional Path conditions do not match?
If the conditions do not match, the actions in the Else step are executed.

### When should I use a Conditional Path?
Use a Conditional Path when you want to trigger specific actions only if a condition is met, for example when a variable equals a specific value or exceeds a threshold.