---
title: "Components of an Agent"
description: "Discover the core components of a Contentstack agent in Agent OS: triggers, instructions, and tools for building intelligent automation."
url: /agent-os/components-of-an-agent
uid: blt133ec6326cf476e1
---

# Components of an Agent

## Components of an Agent

**Note:** For access, please talk to our [Support](mailto:support@contentstack.com) team.

Agents in Contentstack Agent OS are configured using **three building blocks**. Each block answers one simple question:

-   **Trigger:** When should the agent run?
-   **Instructions:** What should the agent do, and how should it behave?
-   **Tools:** What is the agent allowed to use to get work done?

## Trigger

Triggers define the starting point. A trigger is the event that causes your agent to run automatically.

### When to use a trigger

Use triggers when you want an agent to run:

-   Whenever a content or system event occurs
-   On a defined schedule
-   When an external signal is received (through connected capabilities)

## Instructions

The **Instructions** section, the **most crucial aspect**, defines the agent’s persona and domain context, provides detailed rules or guidelines it must follow, and specify exactly how its responses should be structured, formatted, or written (for example, in a particular language or tone). Clear and precise instructions ensure the agent consistently acts in line with your goals and delivers the outputs you expect. Based on the agent description, a brief set of instructions is fetched and displayed. You can edit the details to add or remove those by simply selecting the text.

### What good instructions include

-   **Role:** What the agent is (e.g., “SEO assistant”, “Release note summarizer”)
-   **Goal:** What it must accomplish
-   **Rules:** What it must always do / never do
-   **Output format:** The structure you want (bullets, table, short paragraph, etc.)

## Tools

Tools define the actions an agent is allowed to perform. They are the bridge between an agent’s understanding and real system behavior.

An agent does not have unlimited access to the platform. It can only act through the tools you explicitly give it.

### What tools enable

Tools allow an agent to **participate in real workflows**, not just generate responses.

With tools, an agent can:

-   Interact with Contentstack data (such as creating or updating entries).
-   Invoke automations to run predefined workflows.
-   Communicate with external systems through connectors.
-   Delegate specialized work to other agents.
