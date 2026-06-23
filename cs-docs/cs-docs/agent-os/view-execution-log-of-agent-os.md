---
title: [Automations guides and connectors] - View Execution Log of Agent OS
description: View and debug execution logs for Agents and Automations workflows with detailed input/output data, execution flow, and performance metrics.
url: https://www.contentstack.com/docs/developers/automation-hub-guides/view-execution-log-of-automations
product: Automations
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2026-02-20
filename: view-execution-log-of-agent-os.md
---

# [Automations guides and connectors] - View Execution Log of Agent OS

This page explains [Automations guides and connectors] - View Execution Log of Agent OS for Automations. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## View Execution Log of Agent OS

The Execution Log section in Agent OS helps you monitor the status of your automations and agents.

**Additional Resource:** Refer to the [Executions in Agent OS](/docs/automation-hub-guides/executions-in-automation-hub) documentation to learn about the execution statuses.

To access **Execution Log**, [log into your Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1. After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.![App_switcher_icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6290d7afc992eda9/6998761148bd410008f0963f/App_switcher_icon.png)
2. Open your project or [create](./managing-projects.md#create-a-project) a new one.
3. From the top navigation panel, click **Settings**.![Settings_Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt54c29342b477e2fd/69987601a9de3800086c7925/Settings_Icon.png)
4. Click **Execution Log** in the left navigation panel. You can view the executions for **Agents** and **Automations** by clicking the dropdown.![Agent_automation_dropdown](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c80c134cb3d8669/6998760163bcae00089104c6/Agent_automation_dropdown.png)

   On the listing page, you see the following columns:

   1. **Name:** Displays the name of the automation or agent that was executed.
   2. **Status:** Shows the final execution state (e.g., Success or Failed) or intermediate states (Running, Pending, Paused, and Rejected).
   3. **Started At:** Indicates the date and time when the execution began.
   4. **Duration:** Shows how long the execution took to complete.
   5. **Connectors Used:** Indicates which connectors or services were used during the execution.
   6. **Tools Used:** Indicates the tools used during the agent execution.

   **Note:** To view the log, you **must** execute an automation or agent.

   ![Execution_listing_page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8383e88d0caaf119/699876018923a00008498585/Execution_listing_page.png)
5. To view more details of a particular execution, click a specific log. You will see a time-wise distribution of each step.

**Execution steps**

The Execution Steps timeline shows every action performed during the run in chronological order, making it easy to trace agent behavior and identify performance bottlenecks.

**Agent execution detail includes:**

* Step-by-step execution flow (for example, web search, content creation, message delivery)
* **Metrics:**
  + **Started At:** Shows the exact date and time when the execution began.
  + **Duration:** Indicates how long the execution took to complete from start to finish.
  + **Total Tokens:** Represents the total number of tokens consumed during the run, helping track usage and cost.
  + **Model:** Identifies the AI model used to execute the task.
* **Input and Output:**
  + **Input:**
    - Displays the exact prompt or instructions provided to the agent.
    - Shown in JSON format for reproducibility.
  + **Output:**
    - Displays structured execution results in JSON format.![Execution_log_agent](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad29b072aea92f8a/69987601b13d650008b4fc28/Execution_log_agent.png)

**Automation execution detail includes:**

* Step-by-step execution flow (for example, web search, content creation, message delivery)
* **Metrics:**
  + **Started At:** Shows the exact date and time when the execution began.
  + **Duration:** Indicates how long the execution took to complete from start to finish.
* **Input and Output:**
  + **Input:**
    - Displays the trigger payload or initial input data/configuration for the automation.
    - Shown in JSON format for reproducibility.
  + **Output:**
    - Displays structured execution results in JSON format.![Automations_execution_screen](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd1e17e7582769585/6998760131a5c5000890e2ff/Automations_execution_screen.png)

## Common questions
### What is covered in [Automations guides and connectors] - View Execution Log of Agent OS?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Automations guides and connectors] - View Execution Log of Agent OS?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
