---
title: "Skills and On-Demand Agents | Contentstack"
description: "Learn what Polaris skills and on-demand agents are, how they differ, and when to use each, with a side-by-side comparison and examples."
url: /agent-os/skills-and-on-demand-agents
uid: bltac87ac463fc50cf1
---

# Skills and On-Demand Agents | Contentstack

## Skills and On-Demand Agents

Skills and on-demand agents both put your team's know-how one step away in Polaris, and both can be shared with your team. They solve different problems:

-   A **skill** is a saved set of instructions. Polaris follows it when it works in Contentstack, using the same actions it always has.
-   An **on-demand agent** is a published agent with its own tools, including tools for systems outside Contentstack. A person runs it by name, and every run is recorded.

One question decides which one you need: **does the job need anything outside Contentstack?** If it does, build an on-demand agent. If it doesn't, a skill is enough.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to Agent OS and Polaris for your organization

## What You Will Learn

-   What a skill does and where it stops.
-   What an on-demand agent adds.
-   How the two compare, side by side.
-   How to decide which one a job needs, with examples.

## Skills

A skill tells Polaris _how_ your team wants something done, such as your translation rules, your brand voice, or a pre-publish checklist. You write the instructions once, and Polaris follows them every time the skill applies.

A skill works with the actions Polaris already has in Contentstack, such as reading, creating, updating, translating, and publishing entries. For example, "translate the entry I am on into French and save it as a draft." A skill shapes how Polaris works, not what it's allowed to do. It can't give anyone access to content they don't already have, and the confirmation mode you choose in the composer still applies. A skill can't reach Slack or any other system outside Contentstack.

To use a skill:

1.  **Create it.** In Polaris, open the menu, select **Skills**, and click **Create**. You can also describe the skill in a Polaris conversation, for example, "I want to create a skill for translation QA." Polaris drafts the skill and shows it to you as a card, and nothing is saved until you confirm it.
2.  **Run it.** Type **/** in Polaris and pick the skill, or type its command, such as /translation-qa, with your request. Polaris can also apply a skill on its own when your request matches the skill's description.
3.  **Share it.** A skill starts private and is live as soon as you save it. To share it, open the skill, choose **Share**, and add people, or set **General access** to **Anyone in the organization**. Each person gets **Can use** or **Can edit**. Skills have no publish step and no versions.

**Additional Resource:** Refer to the [Get Started with Polaris Skills](/docs/agent-os/polaris-skills) documentation to learn more.

## On-Demand Agents

An on-demand agent packages a job together with the tools it needs. Its tools can include systems outside Contentstack, such as Slack, Vercel, Airtable, Algolia, and AWS. **On Demand** means a person starts the agent: anyone with access runs it by name, within the setup the author chose, and every run is recorded.

To use an on-demand agent:

1.  **Describe the job.** Tell Polaris what you want, for example, "I want an agent that localizes this entry into the language I choose." You can also click **Create Agent** in the Agent Builder and describe it there. Polaris drafts the trigger, instructions, and tools.
2.  **Set the trigger to On Demand.** An agent has one trigger. Add run inputs, such as a target locale, and choose the tools the agent can use.
3.  **Publish it.** Each publish creates a version, and runs use the published version. The **Run** button stays disabled until the agent is published.
4.  **Run it.** In Polaris, type **@** and pick the agent. Polaris adds the agent's command name, such as @localize\_and\_notify, to your message. You can also click **Run** on the agent's page in the Agent Builder.

An on-demand run acts as the person who runs it, with their permissions. The exception is a tool the author connected to a fixed account, such as a shared Slack workspace: that tool acts on the author's account. The run's setup card shows which account each tool uses before the run starts.

**Note:** Agents with an event or schedule trigger are a separate kind. They start on their own, with no one in a chat, and you can't run them with **@**.

**Additional Resource:** Refer to the [Run an Agent On Demand](/docs/agent-os/run-an-agent-on-demand) documentation to learn more.

## Skills and On-Demand Agents Compared

Both can start in Polaris. A skill stays inside Contentstack and finishes in the conversation. An on-demand agent can reach outside Contentstack and records every run.

|  | Skill | On-demand agent |
| --- | --- | --- |
| **Think of it as** | A saved set of instructions that Polaris follows | A packaged job with its own tools, run by name |
| **Tools** | None of its own. Uses the actions Polaris has in Contentstack. | Its own set: Contentstack tools plus outside systems such as Slack, Vercel, Airtable, Algolia, and AWS |
| **Reach** | Inside Contentstack only | Inside and outside Contentstack |
| **Who runs it** | You and the people you share it with, in a Polaris conversation | Anyone with access to the agent |
| **How it starts** | Typed with **/**, or applied by Polaris when the request matches | **@** in Polaris, or **Run** in the Agent Builder |
| **Acts as** | You, through Polaris | The person running it, except tools the author connected to a fixed account |
| **Changes and versions** | Live as soon as you save. No versions. | Published in versions. Runs use the published version. |
| **Record** | The Polaris conversation | The execution log: who ran it, when, which version, and every step and tool |

## Decide Which One to Use

Ask whether the job needs anything outside Contentstack, such as posting to Slack, deploying on Vercel, or syncing to Airtable.

-   **No:** Build a skill. Save the instructions once, run them with **/**, share them so your team uses the same instructions, and let Polaris apply them when they fit.
-   **Yes:** Build an on-demand agent. Only agents can use tools outside Contentstack.

Most jobs start as a prompt you repeat. When you notice that you keep asking Polaris the same thing, save it as a skill so you and your team get the same instructions every time. When the job later needs a system outside Contentstack, or needs run inputs and a recorded run, build an on-demand agent for it.

### Examples

| Job | Skill | On-demand agent |
| --- | --- | --- |
| **Localization** | /translation-qa: terminology and quality rules any editor can run on a draft | @localize\_and\_notify: translates the entry and posts a summary to Slack |
| **Brand voice** | /brand-voice: rewrites copy using your Brand Kit voice profile | @campaign\_copy: drafts three variants from an entry and shares them with the team |
| **Pre-publish review** | /pre-publish: the review checklist, used in chat on the entry you are editing | @pre\_publish\_review: runs the checklist, updates the SEO fields, and posts the result to the team |

## Additional Resources

-   To create, run, and share skills, refer to the [Get Started with Polaris Skills](/docs/agent-os/polaris-skills) documentation.
-   To build and run an on-demand agent, refer to the [Run an Agent On Demand](/docs/agent-os/run-an-agent-on-demand) documentation.
-   To learn more about agents, refer to the [Get Started with Agents](/docs/agent-os/get-started-with-agents) documentation.
