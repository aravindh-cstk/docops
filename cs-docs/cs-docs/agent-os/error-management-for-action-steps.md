---
title: "[Automations guides and connectors] - Error Management for Action Steps"
description: Error Management for Action Steps feature for managing automation workflows when an action step encounters an error.
url: https://www.contentstack.com/docs/developers/automation-hub-guides/error-management-for-action-steps
product: Automation Hub
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Error Management for Action Steps

This page explains how to use the **Error Management for Action Steps** feature to control what happens when an automation action step fails. It is intended for developers building Automation Hub workflows who need to decide whether to stop execution or continue by skipping failed steps.

## Error Management for Action Steps

The** Error Management for Action Steps** feature provides users with flexibility in managing automation workflows when an action step encounters an error. With this enhancement, you can handle errors seamlessly, ensuring that your workflows remain efficient and robust, even when issues arise.

### Key Benefits and Advantages
- **Uninterrupted workflow execution: **This feature ensures that minor issues do not disrupt the entire workflow by allowing you to skip failed steps. Example: If a non-critical Slack notification fails, the automation continues executing other critical tasks, such as data transformation or API calls.
- **Greater control over execution:** You can choose to either halt the workflow entirely or proceed with the remaining steps, depending on the importance of the failed step. This provides greater flexibility in managing automation outcomes.
- **Customizable error handling:** Tailored error-handling options enable you to build dynamic workflows that adapt to various business scenarios, ensuring that automation aligns with evolving business needs.

### How does it work?

When an action step fails, you can choose one of the following options:
- **Stop Automation:**

      Halts the entire execution immediately upon encountering an error.
- Best suited for critical steps where failure impacts the overall integrity of the automation.
- **Ignore and Skip Step, Continue Execution:**

      Allows the execution to continue, bypassing the failed step.
- Ideal for non-critical steps that do not affect subsequent actions.

**Note: **This functionality is supported in [Repeat Path](/docs/developers/automation-hub-guides#repeat-paths-within-automate) and [Conditional Path](/docs/developers/automation-hub-guides#conditional-paths-within-automate) configurations, giving you precise control over automation execution. Additionally, the error screen will not be displayed in the [Response](/docs/developers/automation-hub-connectors/response/) Connector.

### How to Use Error Handling for Action Steps

Here’s an example scenario that outlines a process for setting up and testing an automated workflow with error handling that involves three components: an [HTTP Trigger](/docs/developers/automation-hub-connectors/http-trigger), a [Transform](/docs/developers/automation-hub-connectors/transform) Connector, and a [Slack](/docs/developers/automation-hub-connectors/slack) Connector.

#### Example Scenario:
- **Configuration:**
    Set up an HTTP Trigger, a Transform Connector, and a Slack Connector.
- **Testing:**

      Test the HTTP Trigger and Transform Connector. Ensure these are functional.
- Leave the Slack Connector untested to simulate a failure.
- **Execution:**
    If the Slack Connector fails:

      Select **Ignore and Skip Step, Continue Execution** to bypass the failure and allow the other actions to execute.
- Alternatively, select** Stop Automation** to terminate the execution immediately.
- You can view the history of the execution in the [Execution Log](/docs/developers/automation-hub-guides/view-execution-log-of-automations) section.

## Common questions

### When should I choose **Stop Automation**?
Use **Stop Automation** when the failed step is critical and failure impacts the overall integrity of the automation.

### When should I choose **Ignore and Skip Step, Continue Execution**?
Use **Ignore and Skip Step, Continue Execution** for non-critical steps that do not affect subsequent actions.

### Where is this functionality supported?
This functionality is supported in [Repeat Path](/docs/developers/automation-hub-guides#repeat-paths-within-automate) and [Conditional Path](/docs/developers/automation-hub-guides#conditional-paths-within-automate) configurations.

### Why don’t I see the error screen in some cases?
Additionally, the error screen will not be displayed in the [Response](/docs/developers/automation-hub-connectors/response/) Connector.