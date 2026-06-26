---
title: [Automations guides and connectors] - Agent OS and Its Components: Agents and Automations
description: Learn how Agent OS, Agents, and Automations work together in Contentstack to deliver intelligent, reusable workflows.
url: https://www.contentstack.com/docs/agent-os/agent-os-and-its-components-agents-and-automations
product: Automations
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2026-02-19
filename: agent-os-and-its-components-agents-and-automations.md
---

# [Automations guides and connectors] - Agent OS and Its Components: Agents and Automations

This page explains [Automations guides and connectors] - Agent OS and Its Components: Agents and Automations for Automations. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Agent OS and Its Components: Agents and Automations

The concepts of **Agent OS**, **Agents**, and **Automations** are closely related but serve distinct roles within the platform. While the table below provides a high-level comparison, the real value emerges when these components work together to interpret context, make decisions, and execute outcomes in a governed and reusable way.

| Aspect | Agent OS | Agents | Automations |
| --- | --- | --- | --- |
| What it is | The **control layer** that sets the rules for how AI and workflows are allowed to operate across the platform | A **decision-making AI entity** that can understand context and make judgments | A **step-by-step process** that carries out actions exactly as defined |
| What it does | Enforces permissions, brand and safety rules, logging, rate limits, and reuse so AI and workflows run consistently and safely | Reads content or signals, interprets intent, evaluates conditions, and decides the correct outcome | Executes predefined steps such as creating tasks, sending notifications, updating entries, or publishing content |
| What it does not do | Interpret content or make decisions | Execute system actions directly | Interpret context or make judgments |
| Real-life example | Ensures only approved users can run AI checks, applies brand rules, records audit logs, and prevents unsafe actions across all workflows | Publishes an entry, identifies errors, fixes them, and retries until publishing succeeds | On publish failure, sends a Slack message and creates a revision task |
| Why it exists | Without it, AI behavior becomes inconsistent, unsafe, and impossible to govern at scale | Without it, the system can only follow rigid rules and cannot handle ambiguity | Without it, decisions never turn into real outcomes |
| How users experience it | Indirectly, through trust, consistency, security, and predictable behavior | Through suggestions, validations, explanations, and decisions shown in their workflow | Through visible outcomes like notifications, task creation, and status changes |

### How Agent OS, Agents, and Automations Work Together

#### For Users:

**Example:** When a user submits a content draft, Agent OS routes the request and applies governance rules. An agent reads the content, determines whether the tone aligns with brand guidelines, and initiates an automation to notify the author and create a revision task if needed.

#### For Developers:

* Agent defines the what (for example, “I am an agent responsible for tone analysis”).
* Automation defines the how (for example, “If the tone analysis agent detects a formal tone, execute the notification and task-creation steps”).

## Common questions
### What is covered in [Automations guides and connectors] - Agent OS and Its Components: Agents and Automations?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Automations guides and connectors] - Agent OS and Its Components: Agents and Automations?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
