---
title: "Agent OS and Its Components: Agents and Automations"
description: "Learn how Agent OS, Agents, and Automations work together in Contentstack to deliver intelligent, reusable workflows."
url: /agent-os/agent-os-and-its-components-agents-and-automations
---

# Agent OS and Its Components: Agents and Automations

## Agent OS and Its Components: Agents and Automations

The concepts of **Agent OS**, **Agents**, and **Automations** are closely related but serve distinct roles within the platform. While the table below provides a high-level comparison, these components work together to interpret context, make decisions, and execute governed outcomes.

| Aspect | Agent OS | Agents | Automations |
| --- | --- | --- | --- |
| What it is | The **control layer** that sets the rules for how AI and workflows are allowed to operate across the platform | A **decision-making AI entity** that can understand context and make judgments | A **step-by-step process** that carries out actions exactly as defined |
| What it does | Enforces permissions, brand and safety rules, logging, rate limits, and reuse so AI and workflows run consistently and safely | Reads content or signals, interprets intent, evaluates conditions, and decides the correct outcome | Executes predefined steps such as creating tasks, sending notifications, updating entries, or publishing content |
| What it does not do | Interpret content or make decisions | Execute system actions directly | Interpret context or make judgments |
| Real-life example | Ensures only approved users can run AI checks, applies brand rules, records audit logs, and prevents unsafe actions across all workflows | Publishes an entry, identifies errors, fixes them, and retries until publishing succeeds | On publish failure, sends a Slack message and creates a revision task |
| Why it exists | Without it, AI behavior becomes inconsistent and difficult to govern at scale. | Without it, the system can only follow rigid rules and cannot handle ambiguity | Without it, decisions never turn into real outcomes |
| How users experience it | Indirectly, through trust, consistency, security, and predictable behavior | Through suggestions, validations, explanations, and decisions shown in their workflow | Through visible outcomes like notifications, task creation, and status changes |

## How Agent OS, Agents, and Automations Work Together

### For Users:

**Example:** When a user submits a content draft, Agent OS routes the request and applies governance rules. An agent reads the content, determines whether the tone aligns with brand guidelines, and initiates an automation to notify the author and create a revision task if needed.

### For Developers:

-   The agent defines the decision logic (for example, “I am an agent responsible for tone analysis”).
-   The automation defines the execution steps (for example, “If the tone analysis agent detects a formal tone, execute the notification and task-creation steps”).
