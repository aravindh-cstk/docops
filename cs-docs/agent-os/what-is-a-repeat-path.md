---
title: "[Automations guides and connectors] - What is a Repeat Path?"
description: What is a Repeat Path in Agent OS and when to use it.
url: https://www.contentstack.com/docs/agent-os/what-is-a-repeat-path
product: Contentstack
doc_type: guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - What is a Repeat Path?

This page explains the Repeat Path feature in Agent OS, including what it does, when to use it, and key limits to keep in mind. It is intended for developers and automation builders who need to run the same set of automation steps multiple times based on a count or a data source.

## What is a Repeat Path?

The Repeat Path feature in Agent OS lets you repeat actions based on a specific data source or a defined count. It functions like a loop, executing the configured steps multiple times.

For example, you can use Repeat Path to create multiple entries in Contentstack based on bulk data or an array of values received from a trigger or action. You can use the Repeat Path configuration to specify the number of times you want to create the entry or select the data source so the repeat path can iterate or loop based on the number of items in the array (list).

## When to Use Repeat Path?

The Repeat Path feature in the automation software allows you to automate repetitive tasks, especially when dealing with bulk data. It automates a sequence of actions by iterating them multiple times, enabling operations on bulk or structured data efficiently.

Repeat Path eliminates the risk of human error by automating repetitive data processing consistently and accurately.

## Some points to remember:

- The default limit for executing Repeat Path is 100. You can request a higher limit by contacting the [support team](mailto:support@contentstack.com) to customize your plan.
- If the repeat count exceeds your plan limit, the automation will fail. You can view details in the [Execution Log](/docs/developers/automation-hub-guides/view-execution-log-of-automations/) section.
- The Basic plan allows up to **15 steps** in each automation, covering both the Repeat and Conditional Paths. The step limit may vary based on your subscription plan.

## Common questions

**How do I choose between a defined count and a data source for Repeat Path?**  
Use a defined count when you want the steps to run a fixed number of times, and use a data source when you want the repeat path to iterate based on the number of items in an array (list).

**What happens if my Repeat Path exceeds the allowed limit?**  
If the repeat count exceeds your plan limit, the automation will fail, and you can view details in the Execution Log.

**Can I increase the default Repeat Path execution limit?**  
Yes. You can request a higher limit by contacting the support team to customize your plan.

**Do Repeat Path steps count toward my automation step limit?**  
Yes. The Basic plan allows up to **15 steps** in each automation, covering both the Repeat and Conditional Paths, and the step limit may vary based on your subscription plan.