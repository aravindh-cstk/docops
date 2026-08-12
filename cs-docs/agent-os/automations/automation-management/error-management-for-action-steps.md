---
title: "Error Management for Action Steps"
description: "Handle errors in Contentstack Automate workflows by stopping execution or skipping failed steps."
url: /agent-os/error-management-for-action-steps
---

# Error Management for Action Steps

## Error Management for Action Steps

The **Error Management for Action Steps** feature provides users with flexibility in managing automation workflows when an action step encounters an error. With this enhancement, you can handle errors seamlessly, ensuring that your workflows remain efficient and robust, even when issues arise.

### Key Benefits and Advantages

-   **Uninterrupted workflow execution:** This feature ensures that minor issues do not disrupt the entire workflow by allowing you to skip failed steps. Example: If a non-critical Slack notification fails, the automation continues executing other critical tasks, such as data transformation or API calls.
-   **Greater control over execution:** You can choose to either halt the workflow entirely or proceed with the remaining steps, depending on the importance of the failed step. This provides greater flexibility in managing automation outcomes.
-   **Customizable error handling:** Tailored error-handling options enable you to build dynamic workflows that adapt to various business scenarios, ensuring that automation aligns with evolving business needs.

### How does it work?

When an action step fails, you can choose one of the following options:

1.  **Stop Automation:**
    -   Halts the entire execution immediately upon encountering an error.
    -   Best suited for critical steps where failure impacts the overall integrity of the automation.
2.  **Ignore and Skip Step, Continue Execution:**
    -   Allows the execution to continue, bypassing the failed step.
    -   Ideal for non-critical steps that do not affect subsequent actions.

**Note:** This functionality is supported in [Repeat Path](/docs/agent-os#repeat-paths-within-automate) and [Conditional Path](/docs/agent-os#conditional-paths-within-automate) configurations, giving you precise control over automation execution. Additionally, the error screen will not be displayed in the [Response](/docs/agent-os/response/) Connector.

### How to Use Error Handling for Action Steps

Here’s an example scenario that outlines a process for setting up and testing an automated workflow with error handling that involves three components: an [HTTP Trigger](/docs/agent-os/http-trigger), a [Transform](/docs/agent-os/transform) Connector, and a [Slack](/docs/agent-os/slack) Connector.

#### Example Scenario:

1.  **Configuration:**
    Set up an HTTP Trigger, a Transform Connector, and a Slack Connector.
2.  **Testing:**
    -   Test the HTTP Trigger and Transform Connector. Ensure these are functional.
    -   Leave the Slack Connector untested to simulate a failure.
3.  **Execution:**
    
    If the Slack Connector fails:
    
    -   Select **Ignore and Skip Step, Continue Execution** to bypass the failure and allow the other actions to execute.
    -   Alternatively, select **Stop Automation** to terminate the execution immediately.
    -   You can view the history of the execution in the [Execution Log](/docs/agent-os/view-execution-log-of-agent-os) section.

![Error_Seetings.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt516d3f9123428488/6793a6d858fb6d7e7b813578/Error_Seetings.png)
