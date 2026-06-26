---
title: [Automations guides and connectors] - Get Started with Agents
description: Learn how to get started with agents in Agent OS to automate workflows, manage tasks, and build intelligent agents using Contentstack.

url: https://www.contentstack.com/docs/agent-os/get-started-with-agents
product: Automations
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2026-02-20
filename: get-started-with-agents.md
---

# [Automations guides and connectors] - Get Started with Agents

This page explains [Automations guides and connectors] - Get Started with Agents for Automations. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Get Started with Agents

**Note:** Agent OS is currently in **Early Access**. Features may change and limitations may apply. We recommend using it in non-production environments until general availability. For more information, contact [Support](mailto:support@contentstack.com).

Agents in Agent OS are intelligent tools designed to execute complex, multi-step workflows that go beyond traditional, linear automation. They leverage AI models and connectors to perform dynamic tasks, reasoning, and decision-making.

This guide provides a hands-on introduction by walking you through the creation of an AI-powered agent. This agent automatically discovers, analyzes, and publishes breaking news, demonstrating an end-to-end automation cycle.

The agent you build performs the following complex workflow:

1. **Trigger:** Activates the process via a simple HTTP URL call.
2. **Discovery and analysis:** Searches for the top three breaking AI news items, generates a summary of each, and analyzes its potential impact on the IT industry.
3. **Content automation:** Creates a separate content entry in your Contentstack CMS for each news item.
4. **Notification:** Sends a Slack notification with the compiled summaries and impact analysis to a designated channel.

### Prerequisites

1. [Contentstack account](https://www.contentstack.com/login)
2. Agent plan for your organization
3. [Admin](../developers/invite-users-and-assign-roles/types-of-roles.md#admin)/[Owner](../developers/invite-users-and-assign-roles/types-of-roles.md#owner) access for the Contentstack stack

Let's start by logging into the [Contentstack account](https://www.contentstack.com/login/) and following the steps given below:

1. After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.![App_Switcher_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt72031a63ce1512b9/6996d58073e3df0008d2d8de/App_Switcher_Icon.png)

Let’s see the two ways to create an agent:

1. Create an agent in a new project.
2. Create an agent in an existing project.

#### Create an agent in a **new project**

1. On the **Agent OS** projects page, click **+ New Project**.
2. Enter a **Name** and an optional **Description**, then click **+ Create Project**.
3. From the **Agent OS Dashboard** page, click **+ New Agent**.
4. In the **Create Agent** modal, click **Skip, I'll create manually**. Enter a suitable **Title** and a **Description** for your agent. Click the **Create Agent** button.![Create_agent_modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta911d7762344a3e0/6996d5971eaffc0008e45b79/Create_agent_modal.png)

   **Note:** You can also create an agent using the **Automated Setup**, where you provide a description and the system automatically configures the trigger, tools, and instructions.
5. You are redirected to the **Agent Builder** page, where you can add the **Trigger**, **Tools**, and **Instructions**.![Agent_Builder_Screen_Updated.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1b643fff1205313/6997f2a6da5d88000881e6fc/Agent_Builder_Screen_Updated.png)

#### Create an agent in an **existing project**

1. Navigate to your project.
2. From the **Dashboard** page, click the **Create** drop-down.![Create_agent_from_dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcc08570e112f5efe/6996d58099cddc000822abf6/Create_agent_from_dashboard.png)
3. From the dropdown, select **+ New Agent** button.![New_agent_dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcc561af22c64cb94/6996d598618a670008b887e8/New_agent_dashboard.png)
4. In the **Create Agent** modal, click **Skip, I'll create manually**. Enter a suitable **Title** and a **Description** for your agent. Click the **Create Agent** button.![Create_agent_modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta911d7762344a3e0/6996d5971eaffc0008e45b79/Create_agent_modal.png)

   **Note:** You can also create an agent using the **Automated Setup**, where you provide a description and the system automatically configures the trigger, tools, and instructions.
5. You are redirected to the **Agent Builder** page, where you can add the **Trigger**, **Tools**, and **Instructions**.![Agent_Builder_Screen_Updated.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1b643fff1205313/6997f2a6da5d88000881e6fc/Agent_Builder_Screen_Updated.png)

Let’s see how to configure the **Trigger**, **Tools**, and **Instructions** for the agent.

### Agent Builder

The Agent Builder comprises three sections: **Trigger**, **Tools**, and **Instructions**.

#### Trigger

**Trigger** defines the events that start your agent’s workflow, allowing it to run automatically.

1. In the **Triggers** section, click **+** to add the trigger. A side panel opens.

   **Additional Resource:** Refer to the [Triggers](../developers/automation-hub-connectors.md#triggers) documentation to learn more.

   ![Add_Trigger_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf256c59911b330a3/6996d58080879200082ead1a/Add_Trigger_Icon.png)
2. Select the **HTTP Trigger** and click **Save**. Once done, you are ready to use the trigger.

   **Additional Resource:** Refer to the [HTTP Trigger](./http-trigger.md) documentation to learn more.
3. Click the vertical ellipsis to edit the configuration or replace the trigger. Selecting either option opens a side panel where you can modify the existing trigger configuration or replace it with a new trigger.![Edit_replace_trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt493a9886398d9578/6996d598b13d650008b4f278/Edit_replace_trigger.png)

#### Tools

The **Tools** section lets you define what your agent can do by selecting the tools, automations, and agents it can use to perform tasks.

For our use case, we will select the three tools: **Create an Entry** action, **Slack** connector, and **ChatGPT: Web Search**.

Let’s see how to add all three tools:

1. In the **Tools** section, click **+ Add** to add the tools.![Add_Tools.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb7702a4c253a04c/6996d57f8d3a6a0008c5a3b9/Add_Tools.png)

   **ChatGPT: Web Search**

   1. A side panel opens. Under the **Tools** category, select **ChatGPT: Web Search**. Authenticate your ChatGPT account, then select a **Model**. For the remaining fields, let AI select the values. Click **Save**.

      **When you select a tool:**

      1. A modal opens with two configuration options:

         1. **Let AI select data:** The agent automatically extracts the values for the action fields from the prompt.

            For example, Agent Prompt: Retrieve values from the **Sample Stack** and choose the **AI Intelligence** entry.

            These values are selected dynamically at runtime.
         2. **Add custom data:** You can manually select predefined values using the **Lookup** drop-down.

            **Note:** All actions are shown in unselected mode by default, and you can choose any available connector as needed.

            ![ChatGPT_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltce9e0263ad52c5f7/6996d58036d8d5000862c86e/ChatGPT_Action.png)

      **Additional Resource:** For more information, refer to the [ChatGPT connector](./chatgpt.md) documentation.

   **CMS: Create an Entry action**

   1. Click **+ Add** to add the **Create an Entry** action.
   2. In the side panel, under the **Tools** category, select **CMS**.
   3. In the **Entry** category, select the **Create an Entry** action.
   4. On the **Create an Entry** configuration screen, authenticate your Contentstack account.
   5. From the **Select Stack** drop-down, select **Add custom data**, then select a stack from the **Lookup** drop-down.
   6. For the remaining fields, let AI select the values. Once complete, click **Save**.![Create_an_entry_action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c6ec466dc875ca5/6996d5980f938800084cf886/Create_an_entry_action.png)

   **Slack Connector:**

   1. Click **+ Add** to add the **Slack** connector.![Select_Slack_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2dfae0a98140509e/6996d5e0b13d650008b4f27c/Select_Slack_Connector.png)
   2. Select the **Send a Message** action.
   3. Add your **Slack** account.
   4. From the **Channel** drop-down, select **Add custom data**, then choose a channel from the **Lookup** drop-down.
   5. For the rest of the fields, let AI select the values. Click the **Save** button.![Slack_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt539e58740bba060f/6996d5e08d3a6a0008c5a3bd/Slack_Configuration.png)
2. Once done, you see all the added tools.![Added_tools.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9f0d6858b716813a/6996d57fcf7e250008e68028/Added_tools.png)

   **Additional Resource:** Refer to the [Connectors](../developers/automation-hub-connectors.md) documentation to learn more.

#### Instructions

Instructions, the most important component, define the agent’s role and rules. It controls how the agent behaves and what “good output” looks like.

1. Navigate to the **Instructions** section.
2. Add the instructions required for agent execution, as shown below:
3. Use **/** to add tools to your set of instructions.![Agent_instructions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47edc923eb684a1d/6996d5801eaffc0008e45b75/Agent_instructions.png)

#### Save agent

Once the agent configurations are set, click the **Save** button from the top-right navigation to save the agent.

![Save_button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c942b22f05f084d/6996d5e0ab60c900082f24e2/Save_button.png)

#### Publish an agent

To publish the agent, follow the steps below:

1. Click the **Publish** button from the top-right navigation panel.![Publish_button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd264c93d1e6b257/6996d5e0ca1be7000834d2c9/Publish_button.png)
2. In the **Publish Agent** pop-up, click the **Publish** button.![publish_agent-Updated.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba95a4a33fe8b17e/6997ff3fc9b89800084dd436/publish_agent-Updated.png)

Once the agent is published, hit the HTTP URL. You see three entries created in the CMS.

#### Edit an agent

To edit the agent, follow the steps below:

1. To edit the agent configurations, click the **Edit** button.![Edit_Agent.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e9c210bfb8ae619/6996d59860af9b0008db5fa4/Edit_Agent.png)
2. Once you click the **Edit** button, the agent is available in the **Draft** mode to edit.

#### Unpublish an agent

Unpublishing an agent revokes the latest changes. To unpublish the agent, follow the steps below:

1. Click the **Unpublish** button from the top-right navigation panel.![Unpublish_button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt54b60bfc8222cb0a/6996d5e18d3a6a0008c5a3c5/Unpublish_button.png)
2. In the **Unpublish Agent** pop-up, click the **Unpublish** button.![UNPUBLISH_AGENT-Updated.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt98b54be6848cb062/6997ff3f624a07000845f620/UNPUBLISH_AGENT-Updated.png)

**Note:** You can view the agent versions by clicking the **Version** icon.

### Agent Creation Using Template

Let’s see the steps to create an agent using a predefined template:

1. In the **Create Agent** modal, click the **Browse Template** button.![Browse_Template_button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0deee16a6f5c14f1/6996d580618a670008b887e4/Browse_Template_button.png)
2. In the **Browse Templates** pop-up, select a template to get started. You can hover over any template and click the **View template** link to view its configuration.![Template_selected.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec7c6c53898fd3b5/6996d5e08d3a6a0008c5a3c1/Template_selected.png)
3. Click **Use Template** to use an existing template. You are redirected to the **Agent Builder** screen.![Use_this_template_button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2fa86e11f601517c/6996d5e0b13d650008b4f280/Use_this_template_button.png)
4. You are redirected to the **Agent Builder** page, where you can see the **Trigger**, **Tools**, and **Instructions** configured for your template.![Agent_Builder_Screen_Updated.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1b643fff1205313/6997f2a6da5d88000881e6fc/Agent_Builder_Screen_Updated.png)

### Executions

The **Executions** view provides a complete and transparent breakdown of how an automation or agent run performed from start to finish, helping users understand outcomes, performance, and resource usage.

**Includes:**

* **Status**: Displays a clear execution status (for example, *Success*).
* **Started At:** Indicates the start time of the execution.
* **Total Duration:** Displays the total duration of the run.
* **Tools Used:** External tools or capabilities the agent invoked during an execution.

**On clicking an individual execution**

**Execution steps**  
The **Execution Steps** timeline shows every action performed during the run in chronological order, making it easy to trace agent behavior and identify performance bottlenecks.

**Includes:**

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
    - Displays structured execution results in JSON format.

![Execution_log.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte3518418210b0ccd/6996d59899cddc000822abfa/Execution_log.png)

#### **Troubleshooting tips**

* **Success but no result**: Check output data.
* **Link check errors (405/403)**: Ensure fallback from HEAD to GET.
* **Intermittent failures**: Compare timestamps with rate limits or API issues.

### Settings

#### General

The **General** section lets you define your agent’s identity with a title and description, so its purpose is clear from the start.

1. You see a **Title (required)** and an optional **Description** for the agent’s purpose.

   The app automatically picks a name and description for your agent based on what you entered in the **Create Agent** step. If you want, you can edit the name or update the description.
2. Click the **Save** button.![Manual_Setup_Title_Description.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a207ec0e2f337a3/6996d59880879200082ead1e/Manual_Setup_Title_Description.png)

#### AI Model

The **AI Model** screen is where you choose and connect the underlying model that powers your agent, ensuring it can reason and respond effectively. You see Contentstack Managed (Organization Default).

![AI_model_Contentstack_managed.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc5c8ab21373cd615/6996d580a9de3800086c71fa/AI_model_Contentstack_managed.png)

By clicking the **Change** link, you see two configurations: **Organization Default** and **Custom Configuration**.

**Custom Configuration**:

1. In the **Select Model Provider** (required) drop-down , select the LLM provider for your agent. Currently supported providers include:

   * Azure OpenAI
   * Gemini
   * OpenAI
   * Google Vertex
   * Anthropic

   For our use case, we used **OpenAI**.
2. In the **Agent Authentication** field, add or select an account to authenticate the agent. To create a new key, click **+ Add API Key** and sign in with your model provider’s API Key and Organization ID (for OpenAI). If you select **Gemini**, you see Google Vertex authentication options; if you select **OpenAI**, you see ChatGPT authentication options.
3. In the **Select AI Model** field, select which underlying AI model the agent should use to run tasks or generate responses.
4. Click the **Save** button to save the configuration.![Custom_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt163e788aa0ff2a41/6996d598676f8800085bfc13/Custom_Configuration.png)

#### Delete an agent

To delete an agent, click the **Delete Agent** button. A pop-up appears. Enter **DELETE** in the input field and click the **Delete Agent** button.![Delete_Agent.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcde9771e8c55711f/6996d598ce3ab300088bdce9/Delete_Agent.png)

## Common questions
### What is covered in [Automations guides and connectors] - Get Started with Agents?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Automations guides and connectors] - Get Started with Agents?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
