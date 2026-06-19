---
title: "[Automations guides and connectors] - Throttle Execution"
description: Throttle Execution refers to controlling the rate at which the executions are carried out within a specific timeframe.
url: https://www.contentstack.com/docs/agent-os/throttle-execution
product: Agent OS
doc_type: guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Throttle Execution

This page explains how Throttle Execution works in Agent OS, who it applies to at the organization level, and when to use throttling versus direct queue execution to manage rate limits and execution behavior.

## Throttle Execution

Throttle Execution refers to controlling the rate at which the executions are carried out within a specific timeframe. Users can enable throttling their execution to overcome rate limit issues.

**Note: **Throttling occurs at the **Organization **level. When multiple automated processes are executed, they are processed in the order they are received, that is, following a first-come, first-serve approach.

## What is Throttling in Agent OS?

Suppose an organization has set a rate limit of 100 executions per minute, but the execution request it receives is 1000 per minute. This is much higher than the established limit. In this case, the execution will not work correctly, potentially resulting in automation failures.

To address this issue, the organization can choose to implement execution throttling . When a user triggers an automation 1000 times, these automations will be queued and the executions will be performed sequentially.

In short, the automations that have throttling enabled in their settings will go through the executions sequentially.

Automations with throttling enabled are executed **sequentially**.

Suppose you select two executions per second, and there is a request for 1000 executions, so the time taken for execution will reduce by half,( i.e., **500 seconds**).

**Additional Resource: **Refer to the [Error Notification](/docs/developers/automation-hub-guides/error-notification) document for more details.

You can view your automation's success and queue status in the [Execution Log](/docs/developers/automation-hub-guides/view-execution-log-of-automations) section.

**Note:** The queued executions will retry to execute three times before going into the Rejected status in case of any errors, such as engine failure.

## What Happens if an Automation is Not Throttled?

If an automation is not set to throttle the execution, it will go in the **Direct Queue**. In Direct Queue, the rate limit is set to **5000 **executions per minute per organization.

To use the Direct Queue for executions, you must ensure that the automation is not hitting other rate limits such as CMA limits.

Execution request(s) will be sent to the direct queue **only if **your automation does not contain the [Response](/docs/developers/automation-hub-connectors/response) connector.

The [Response](/docs/developers/automation-hub-connectors/response) connector works synchronously in the background to fetch the response from any server. If an automation contains the Response connector, it will send the response based on the configuration and if it goes in the Direct Queue for execution, you may not be able to view the response.

## Common questions

### Does throttling apply per automation or per organization?
Throttling occurs at the **Organization **level.

### What happens to executions when throttling is enabled?
These automations will be queued and the executions will be performed sequentially.

### How many times do queued executions retry before being rejected?
The queued executions will retry to execute three times before going into the Rejected status in case of any errors, such as engine failure.

### When are execution requests sent to the direct queue?
Execution request(s) will be sent to the direct queue **only if **your automation does not contain the [Response](/docs/developers/automation-hub-connectors/response) connector.