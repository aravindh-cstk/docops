---
title: "Run an Agent On Demand | Contentstack"
description: "Build an agent once, then run it on demand from a Polaris conversation. An on-demand agent runs interactively as the person who runs it, using their accounts, permissions, and per-run inputs."
url: /agent-os/run-an-agent-on-demand
uid: blt066c2a35e1728227
---

# Run an Agent On Demand | Contentstack

## Run an Agent On Demand

An on-demand agent is an agent a person runs interactively, when they want something done, instead of an agent that runs on its own when an event fires or a schedule triggers. An on-demand agent acts as the person who runs it: it uses their connected accounts, their permissions, and the values they supply for that run, and the run is recorded against their name.

You run an on-demand agent from a Polaris conversation, either by typing **@** and picking the agent, or with the **Run** button in the Agent Builder. Both open a run inside a Polaris conversation, which is what lets the agent ask you questions while it works and lets you keep talking to it afterward.

## How On-Demand Agents Differ

An agent has one trigger, and the trigger decides how the agent runs. The table compares an agent that runs automatically, on an event or schedule, with an on-demand agent that a person runs.

|  | Event- or schedule-triggered agent | On-demand agent |
| --- | --- | --- |
| **Starts when** | An event happens, or a schedule fires | A person runs it |
| **Acts as** | The author, on the accounts they connected when they built it | The person running it, on their accounts |
| **Inputs** | Fixed at build time | Supplied fresh, every run |
| **Visible while it works** | No | Yes, every step streams as it happens |
| **Can it ask you something?** | No | Yes, it pauses, asks, and continues from that point |

Choosing the **On Demand** trigger replaces an event or schedule trigger. If you later switch away from **On Demand**, the agent's run-input references are removed from the instructions and the setup on tools that were set to run as the runner is cleared. Pick the trigger before you build the rest of the agent.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to Agent OS for your organization
-   Access to Polaris. Organization Owners and Admins have it by default.

## What You Will Learn

-   How to build an on-demand agent, from the trigger to its inputs and tools.
-   How to run an agent from a Polaris conversation and from the Agent Builder.
-   How the agent behaves while it runs.
-   How identity, connected accounts, and the execution log work for on-demand runs.

## Build an On-Demand Agent

This section is for the person creating the agent in the Agent Builder. To create an agent, refer to the [Get Started with Agents](/docs/agent-os/get-started-with-agents) documentation.

### Choose the On Demand Trigger

1.  Create an agent, or open an existing one, to open the **Agent Builder**.
2.  In the **Trigger** section, click the **+** icon. In the **Select A Trigger** panel, under **Contentstack**, select **On Demand**.
3.  Give the agent a clear **title** and **description**.

The description does real work: it is what people read when they pick your agent in Polaris, and what Polaris reads to decide whether a request belongs to your agent. A specific description, such as "Publishes blog entries to the chosen environments and posts a Slack note," routes correctly where a vague one, such as "Helper agent," does not.

![The Agent Builder showing the On Demand trigger, the instructions with the Target Locale input, and the Get Single Entry tool](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfcd8f7ed136b0f78/0c64181b9a896b8a820d72d7/ondemand-agent-builder.png)

### Define the On Demand Inputs

On Demand Inputs are the questions the agent asks the runner before it starts. The agent asks for these every run, in the order you list them. Add them in the trigger's configuration panel.

1.  In the **On Demand: Inputs** panel, click **Add Input**.
2.  Configure the input:
    1.  **Title** (required): The name the runner sees, and the name you reference in the instructions. Two inputs cannot share a title.
    2.  **Instruction**: A helper line, shown under the field at run time.
    3.  **Data Type** (required): **Text Input**, **Multi-line Text Input**, or **Select**. For **Select**, add the list of choices and choose whether the runner can pick a **Single** or **Multiple** option.
    4.  **Required**: When on, the run cannot start unless the runner fills this field.
3.  Click **Save**, then click **Done**.

**Tip:** Anything that changes from run to run belongs in an On Demand Input.

![The On Demand Inputs panel with the Target Locale input](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am50c8bad0fcad4e43/a08a8856efde8a4f9ba2770c/ondemand-on-demand-inputs.png)

### Use the Inputs in the Instructions

In the **Instructions** section, type **/** to open the picker, select the **On Demand Inputs** tab, and choose an input. It is inserted as a pill and stored as a run-input reference, for example {{Target Locale}}.

At run time, each reference is replaced with the value the runner supplies. If you delete an input from the trigger, its pills are removed from the instructions when you save.

### Add Tools and Choose an Execution Account

Every tool on an on-demand agent has a **Select Account** (execution account) setting:

-   **Running user's session** (default): The tool acts as the person running the agent. Use it whenever the action should be attributed to the runner, such as creating or updating entries or posting as themselves. Contentstack, Personalize, Brand Kit, and Lytics tools run on the runner's own signed-in session, so the runner is not asked to connect them.
-   **Fixed account**: The tool acts as an account you bind at build time (click **\+ Add an Account**). Use it for a shared identity, such as a "Marketing Bot" Slack account that every run posts from. The runner is never asked to connect it.

Some tools, such as **HTTP Request** and **Email by Agent OS**, authenticate with nothing, so the runner is never asked to connect an account for them.

### Decide Who Fills Each Tool Field

For every field on a tool, choose one of three modes:

-   **Let AI select data**: The agent fills the field while it runs. The runner does not see it.
-   **Add custom data**: You fill the field now. The runner does not see it.
-   **Let user add data (On Demand)**: The person running the agent fills the field, each time they run it. This mode appears only on on-demand agents.

The runner sees only the fields you set to **Let user add data**. Everything else is hidden behind **Show remaining fields**, which reveals them prefilled and read-only. If you mark no fields, the runner is asked nothing and the agent fills everything within the values you set.

**Note:** Some fields depend on another, such as a channel list that needs a workspace. A dependent field's choices load from its parent's value, so a field whose parent is set to **Let user add data** cannot itself use **Add custom data**, because the parent has no value until someone runs the agent.

![The Get Single Entry tool with Select Account set to Running user's session and each field's fill mode](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3248c348a781f4e5/c4df1f7e0ea06cfe5f757188/ondemand-tool-fields.png)

### Publish and Keep the Agent Active

Runs always use the agent's active, published version. A draft change, such as a new input, a different field mode, or a new tool, has no effect on anyone's run until you publish it. An agent that is not active cannot be run.

To publish the agent, click **Publish** in the top navigation, then click **Publish** in the confirmation pop-up.

## Run an Agent from Polaris

Polaris is the assistant behind the sparkle icon in the navigation bar. Every on-demand run happens in a Polaris conversation.

### Pick the Agent

Type **@** in the composer. Polaris lists your on-demand agents, and **Browse Agents** opens the full list with descriptions. Select one, and a chip appears above the composer. You can mention more than one agent in a prompt, and each one runs separately. Picking an agent does not start it; it only makes the agent available in the conversation.

**Note:** Only on-demand agents can be run this way. If you name a scheduled or event-driven agent, Polaris tells you rather than starting it.

### Send Your Request

Send a normal message describing what you want, for example, "translate the homepage entry into German and tell the content team." Polaris decides whether the request is the agent's job and runs the agent if it is; otherwise, Polaris answers it and the agent stays available for later.

### Fill in the Setup Card

Before the agent runs, a **Set up** card can appear in the conversation, with up to two steps:

1.  **On Demand Inputs**: The inputs the author defined, in order, each with its helper line. Fill the required ones.
2.  **Connect**: One row per tool, so you can see who each tool acts as before you start. Each row shows a status:
    -   **Runs as you**: A Contentstack-family tool on your own session, with nothing to connect.
    -   **Runs on the agent's account**: A fixed tool that uses the author's account.
    -   **Not connected**: Select an account, or add one. To add one, click **Select account**, then choose an existing account or **\+ Add an account**, and connect with OAuth or with credentials, depending on the tool.
    -   **Needs setup**: A required field on that row is still empty.
    -   **Ready**: Nothing is left to do on that row.

The card also shows the fields the author left for you to fill. **Show remaining fields** reveals the rest as read-only. When the card is complete, click **Execute**.

**Note:** The setup card appears only when at least one tool needs something from you, such as an account to pick or a field to fill. An agent whose tools need nothing from you runs straight from your message. The card opens prefilled with what you entered on your last run of this agent, with **Start fresh** to reset to the author's values.

### Watch the Run

Pressing **Execute** starts the run without blocking the conversation, and the run card streams while you watch. The run card shows a live header and every step the agent takes. When the run ends, the card shows **View execution log**. You can leave the conversation and come back; it updates when the run finishes, fails, or is stopped.

**Note:** A conversation runs one agent at a time. If you ask for a second run while one is live, Polaris tells you which agent is still running and offers to cancel it first.

### Answer the Agent's Questions

A run pauses for three reasons: the setup card, a confirmation before an operation that changes data, and a question the agent needs answered. A question appears in the conversation; answer it and the run continues from the step where it paused, rather than starting over. A paused run holds its place, so you can answer now or come back to it.

### Stop a Run

You can stop a run in two ways: click **Stop** on the run card, which is available in every state before the run ends, or ask in the conversation, such as "stop the run." When you stop a run, the progress and the inputs you filled are lost, running the agent again starts from the beginning, and anything the agent has already changed stays changed.

## Run an Agent from the Agent Builder

The **Run** button in the agent's header is a shortcut into the Polaris run. It appears only on on-demand agents and stays disabled until the agent has a published version. Clicking it opens Polaris, starts a new conversation, and adds a mention of your agent to the composer. Type what you want done and send it; from there, the setup card, the run card, the questions, and the execution log work exactly as they do in a Polaris conversation.

## What the Agent Does While It Runs

Every run happens in a Polaris conversation, so these behaviors apply whether you started it from Polaris or from the **Run** button.

-   **It asks rather than guesses.** If your request can be read in more than one way, such as which stack or which entry, the agent asks you before it plans.
-   **It asks before it changes anything.** Operations that change data, such as create, update, publish, delete, or post, can be held for your approval; operations that only read are never held. The **Confirmation mode** selector in the composer decides: **Manually Approve** holds each operation for your approval, and **Auto** runs operations without asking. You can switch mode mid-run.
-   **It writes readable results.** Links to entries, assets, and other items are labeled with the item's title rather than its internal UID.

## Identity and Attribution

An on-demand run acts as the person who ran it, except where the author fixed an account.

| Tool | Acts as | Asked to connect? |
| --- | --- | --- |
| Contentstack, Personalize, Brand Kit, Lytics (running user's session) | You, on your signed-in session | No, shown as **Runs as you** |
| Any other connector (running user's session) | Your connected account | Yes, once; reused on later runs |
| Any tool set to a fixed account | The account the author bound | No, shown as **Runs on the agent's account** |
| Tools that authenticate with nothing | Not applicable | No |

Because the run acts as you, your permissions apply: if you cannot publish to an environment, neither can the agent while running for you. The audit trail names you, and the same agent can give different people different results, by design.

**Note:** Lookups on a fixed-account tool browse the author's workspace. If the author fixed a Slack account and left the channel for you to choose, the channel list is the author's workspace. This lets an author connect a shared workspace and still let you pick where to post.

## Connected Accounts

An account you connect during a run is saved for you, so you are asked once and not again. Manage your connections from **My connected apps**, where you can see every connection you have, see where each one is used, re-authorize a connection whose credentials expired, and revoke a connection. Your connected accounts and saved inputs are yours, and other runners do not inherit them.

## View the Execution Log

Every on-demand run is recorded. Open the log from **View execution log** on a finished run, or from the agent's **Executions** list. The log shows who ran the agent and that the trigger was **On Demand**, the status and time, and every step the agent took, with its input, its output, and the tool it used. When a run fails, the log names the failing step and the actual error.

## Additional Resources

-   To create an agent and configure its trigger, tools, and instructions, refer to the [Get Started with Agents](/docs/agent-os/get-started-with-agents) documentation.
-   To learn what an agent is, refer to the [What is an Agent](/docs/agent-os/what-is-an-agent) documentation.
-   To learn about Polaris, refer to the [Get Started with Polaris](/docs/agent-os/get-started-with-polaris) documentation.
