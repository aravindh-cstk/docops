---
title: "Build an Agent in Polaris | Contentstack"
description: "Create an agent by describing it in a Polaris conversation. Polaris asks which project and how it should start, selects the tools, writes the instructions, and creates a draft agent you review and publish in the Agent Builder."
url: /agent-os/build-an-agent-in-polaris
uid: blt26edc2f2d4011f04
---

# Build an Agent in Polaris | Contentstack

## Build an Agent in Polaris

You can build an agent without opening the Agent Builder first. Describe what you want in a **Polaris** conversation, and Polaris interviews you for the few things it needs, selects matching tools, writes the agent's instructions, and creates the agent as a **draft**. You then review it and publish it from the **Agent Builder**.

This is the fastest way to go from an idea to a working agent: you describe the outcome in plain language, and Polaris assembles the trigger, tools, and instructions for you.

## How It Works

When you ask Polaris to create an agent, it works through a short, guided flow and then hands the result to the Agent Builder:

1.  **Describe the agent:** You tell Polaris, in plain language, what the agent should do.
2.  **Answer a couple of questions:** Polaris asks which project should contain the agent and how it should start.
3.  **Review and create:** Polaris shows a summary of the agent it will build and creates it as a draft.
4.  **Finish in the Agent Builder:** Polaris gives you a link to open the draft, complete any remaining setup, and publish.

Polaris does the assembly for you. It inspects the tools available in the project, picks the ones that fit, and writes the agent's **Goal**, **Instructions**, and guardrails from your description. You stay in control, because nothing runs until you review the draft and publish it.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to Agent OS for your organization
-   Access to Polaris. Organization Owners and Admins have it by default.
-   Collaborator access to at least one Agent OS project to hold the agent

## What You Will Learn

-   How to start building an agent from a Polaris conversation.
-   How Polaris collects the project and the start method.
-   How Polaris creates the agent as a draft.
-   How to finish and publish the agent in the Agent Builder.

## Build an Agent from a Polaris Conversation

### Open Polaris and Describe the Agent

1.  Click the **Polaris** (sparkle) icon in the top navigation bar to open the Polaris panel.
2.  In the composer, describe the agent you want, for example, "Create an agent that reads the latest published entries in a stack and returns a short summary of each," and send it.

Polaris confirms that it will create an agent, checks the projects and existing agents available to you, and then asks for anything it still needs. The more detail you give, the fewer questions Polaris asks.

**Tip:** Write the description the way you would brief a teammate. A specific outcome works better than a vague one. For example, "summarize the latest published entries and list each entry by title" is clearer than "help with entries."

### Answer Polaris's Questions

Polaris asks what it still needs in a single card, with one step for each question. Answer each step and move to the next.

1.  **Project:** Choose which project should contain the new agent, then click **Next**. Polaris recommends a project and lists the others available to you.
2.  **Start method:** Choose how the agent should start. This sets the agent's trigger. Depending on your request, Polaris offers options such as **On demand** (you run it yourself), **Scheduled** (it runs on a recurring schedule), **When published** (it runs when an entry is published), or **Another trigger** that you describe. Click **Submit**.

![The Project step in Polaris, with the recommended project selected](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am839e5dc16c8ce45c/950776c4ec6cdc17ad9c0f4a/ba-01-project-cropped.png)

**Note:** Before it creates a new agent, Polaris checks the project's existing agents. If it finds one that already does a similar job, it tells you and lets you either create a new, similar agent or update the existing one with the new requirements.

![The Start method step in Polaris, with On demand selected](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ameafd6f1c1040054f/d1a3014abcca04aa86494a1f/ba-02-startmethod-cropped.png)

### Review and Create the Agent

When you click **Submit**, Polaris creates the agent as a **draft** and shows a summary of what it built:

-   **Agent:** The name Polaris gave the agent.
-   **Project:** The project that contains it.
-   **Description:** A short description of what it does.
-   **Trigger:** How the agent starts, based on the start method you chose.
-   **Tools:** The tools Polaris selected to do the work.
-   **Instructions:** The **Goal** and the step-by-step **Instructions**, written from your description.

![The summary Polaris shows after it creates the draft agent](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7364c248d48fd0b8/372ca08a3411596bb736b632/ba-03-summary-cropped.png)

Polaris also shows an **Open the agent in Agent Builder** link, so you can review the draft and publish it.

## Finish and Publish in the Agent Builder

The agent Polaris creates is a **draft**. It does not run until you review it and publish it.

1.  Click **Open the agent in Agent Builder** to open the draft. You can also ask Polaris to edit the drafted agent directly in the Agent Builder.
2.  Review the **Trigger**, **Tools**, and **Instructions** that Polaris assembled.
3.  Complete any tool that still needs setup. A tool that requires configuration, such as an account or a required field, shows an alert icon; open the tool's **Actions** to finish it.
4.  When the agent is ready, click **Publish**, then confirm. You can also ask Polaris to publish for you.

**Note:** The **Run** button stays disabled until the agent has a published version. Runs always use the agent's active, published version.

After you publish an on-demand agent, you can run it from a Polaris conversation. To learn how, refer to the [Run an Agent On Demand](/docs/agent-os/run-an-agent-on-demand) documentation.

## What Polaris Builds for You

When it creates an agent, Polaris does the following on your behalf:

-   **Selects tools.** Polaris reads the actions available in the project and chooses the ones that match the job you described.
-   **Writes the instructions.** Polaris drafts the **Goal**, the **Instructions**, and an **Important** section of guardrails, so the agent has a clear brief from the start.
-   **Sets the trigger.** Polaris configures the trigger from the start method you chose.

You review everything in the Agent Builder before you publish, so you can adjust the tools, instructions, or trigger before the agent goes live.

**Note:** Polaris builds agents. It does not create automations from a conversation. To build an automation, use Automate.

## Additional Resources

-   To create and configure an agent directly in the Agent Builder, refer to the [Get Started with Agents](/docs/agent-os/get-started-with-agents) documentation.
-   To run an on-demand agent from Polaris, refer to the [Run an Agent On Demand](/docs/agent-os/run-an-agent-on-demand) documentation.
-   To learn more about Polaris, refer to the [Get Started with Polaris](/docs/agent-os/get-started-with-polaris) documentation.
-   To learn what Polaris is, refer to the [What is Polaris](/docs/agent-os/what-is-polaris) documentation.
-   To understand how agents and Polaris differ, refer to the [Difference Between Agents and Polaris](/docs/agent-os/difference-between-agents-and-polaris) documentation.
