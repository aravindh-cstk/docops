---
title: "[Automations guides and connectors] - How Repeat Paths Work?"
description: Documentation on configuring and using Repeat Path in automations to perform actions on bulk data.
url: https://www.contentstack.com/docs/developers/automation-hub-guides/how-repeat-paths-work
product: Contentstack
doc_type: guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - How Repeat Paths Work?

This page explains how Repeat Path works in automations, including how to configure it with triggers and action steps to process bulk data using a data source or a fixed repeat count. It is intended for developers and automation builders who need to run repeated actions over arrays or a specified number of iterations.

## How Repeat Paths Work?

Repeat Path is used in automations to perform actions on bulk data. It allows you to repeat steps based on a data source or a specified count, adding efficiency, consistency, and scalability.

Here are the steps to configure a Repeat Path in your automation.
- Configure Trigger
- Configure Action Step
      Select Repeat Path
          Data source
- Number of times
- ## Configure Trigger

    Triggers are invocation events that happen whenever an event is triggered. Agent OS provides different triggers to invoke an event based on certain conditions.

    For example, HTTP Trigger provides a webhook URL to perform HTTP requests. So, when a user makes an HTTP request to the configured webhook URL, the associated action is performed. You can send bulk data to the HTTP webhook URL.

- ## Configure Action Step (Repeat Path)

    Configure Action Step executes when the trigger event is fired. For example, when an entry is created/updated/deleted in Contentstack, a Slack message is sent to the channel to notify the team members of the ongoing updates.

    Contentstack provides a variety of connectors or third-party applications that can be used based on your requirements. This allows you to connect your Contentstack application to a third-party application by simply authenticating your account.

    Select the Repeat Type for your action step in the Repeat Path configuration. If you want to create multiple entries from an array of data in Contentstack, select the Data source or the Number of times as a count to iterate the loop.

      **Data source:** In the Data source field, select the source in which you are sending bulk data so that the Repeat Path can iterate the action step inside it, till the length of the array.

Suppose you are fetching your data in the HTTP trigger; you can select output from the previous automation step in this field.

- **Number of times:** In the Number of times field, you must enter the count/number to iterate the Repeat Path.

        **Note:** In the Number of times field, you can also select the output from a previous automation step.

## Some points to remember:
- The default limit for executing Repeat Path is 100. Although, it can be increased by customizing your plan key. Please contact the [support team](mailto:support@contentstack.com) to customize your plan.
- Based on the plan limit, if the repeat count exceeds, the automation fails. You can view the details in the [Execution Log](/docs/developers/automation-hub-guides/view-execution-log-of-automations/) section.
- ## 2-1 Configure Action Step

    In the Repeat Path Step section, provide the action which will iterate based on the Repeat Path configuration.

    You can see the status of the Repeat Path in the [Execution Log](/docs/developers/automation-hub-guides/view-execution-log-of-automations/) section.

    Similarly, you can add multiple steps in the Repeat Path as seen in the screenshot below:

    **Note:** Currently, when previewing a JSON payload object within Automate, only the first **3** nodes of an array (such as those used in loops) are displayed in the *Design* mode. This limitation is intended to optimize performance and ensure efficient data rendering in the browser.

## Common questions

### What is Repeat Path used for?
Repeat Path is used in automations to perform actions on bulk data by repeating steps based on a data source or a specified count.

### What are the available Repeat Type options?
You can select the Data source to iterate based on the length of an array, or the Number of times to iterate using a specified count.

### What happens if the repeat count exceeds the plan limit?
Based on the plan limit, if the repeat count exceeds, the automation fails, and you can view the details in the Execution Log section.

### Why do I only see part of an array in Design mode preview?
Currently, when previewing a JSON payload object within Automate, only the first 3 nodes of an array are displayed in the Design mode to optimize performance and ensure efficient data rendering in the browser.