---
title: "[Automations guides and connectors] - Difference Between Agents and Automations"
description: Key differences between Agents and Automations in Contentstack Agent OS.
url: https://www.contentstack.com/docs/agent-os/difference-between-agents-and-automations
product: Contentstack Agent OS
doc_type: concept
audience:
  - developers
  - administrators
version: early-access
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Difference Between Agents and Automations

This page explains how Agents and Automations differ in Contentstack Agent OS, outlining their roles in intelligent workflows. It is intended for users designing or operating Agent OS workflows who need to decide when to use an agent versus an automation.

## Difference Between Agents and Automations

**Note:** **Agent OS** is currently in **Early Access**. Features may change and limitations may apply. We recommend using it in non-production environments until general availability. For more information, contact [support](mailto:support@contentstack.com).

The table below highlights the key differences between Agents and Automations in Contentstack Agent OS. Both are core building blocks, but they serve distinct roles in how intelligent workflows are designed and executed.

**Note**:
- An **agent decides what should happen and when**
- An **automation executes how it happens**

| Aspect | Agents | Automations |
|---|---|---|
| Primary role | Reasoning and decision-making<br><br>**Example:** An agent reads a user’s request like *“Summarize this doc and extract action items.”* | Workflow execution<br><br>**Example:** An automation publishes an entry at 2:00 AM and sends a Slack notification. |
| Core purpose | Understand context, interpret intent, and decide what should happen<br><br>**Example:** Determines whether content needs translation, review, or scheduling based on context. | Carry out predefined steps reliably and at scale<br><br>**Example:** Executes translation, assigns reviewers, or schedules publishing once the path is defined. |
| Nature | Adaptive and context-aware<br><br>**Example: **Adjusts behavior if required metadata is missing or if brand rules differ by region. | Deterministic and rule-based<br><br>**Example:** Always runs the same steps when a “Content Approved” event occurs. |
| Input type | Unstructured or semi-structured input (natural language, context, signals)<br><br>**Example: **Processes natural language or contextual requests like “Prepare this blog for EMEA launch next week. | Structured events, triggers, or schedules<br><br>**Example: **Triggered by explicit signals such as events, schedules, or defined inputs. |
| Decision-making | Yes. Evaluates options, goals, and constraints<br><br>**Example: **Chooses between multiple automations: “Should I schedule publishing or trigger an urgent release?” | No. Follows defined logic and steps<br><br>**Example: **Executes whichever path the agent (or rules) selected. |
| Handling ambiguity | Can handle ambiguity and incomplete information<br><br>**Example:** Interprets “soon” or “high-priority” and resolves it into concrete actions. | Requires clearly defined conditions<br><br>**Example: **Fails or pauses if required fields or conditions are not explicitly defined. |
| Execution style | Chooses actions and coordinates tasks<br><br>**Example: **Coordinates multiple automations, approval, localization, publishing, based on context. | Executes tasks exactly as configured<br><br>**Example: **Runs steps in a fixed order: validate → publish → notify. |
| User interaction | Conversational (via Polaris or Digital Concierge)<br><br>**Example:** A user chats with Polaris: “What’s blocking this release?” | Non-conversational, system-driven<br><br>**Example: **Runs silently in the background after a trigger fires. |
| Interfaces | Custom Agents, Polaris, and Digital Concierge<br><br>**Example:** Can also be used through Polaris or Digital Concierge to guide users. | Automations, event triggers, schedules<br><br>**Example:** Configured via Automations with triggers and actions. |
| Reusability | Reused across interfaces and workflows as shared intelligence<br><br>**Example:** Coordinates and sequences actions or automations based on context. | Reused as execution blocks across workflows<br><br>**Example: **Executes a defined sequence of steps exactly as configured. |
| Governance | Governed by Brand Kit and Knowledge Vault for reasoning, interpretation, and decision-making.<br><br>**Example:** An agent decides how to respond to a user request while aligning with brand tone and approved terminology. | Governed by workflow controls, audit logs, and Brand Kit where applicable for content generation or transformation.<br><br>**Example:** An automation generates or reformats content using Brand Kit rules but does not decide whether or why to do so. |
| Best used when | Judgment, flexibility, or reasoning is required<br><br>**Example:** When judgment, prioritization, or interpretation is required. | Reliability, consistency, and scale are required<br><br>**Example:** When steps must be executed consistently, reliably, and at scale. |

## Common questions

### When should I use an agent instead of an automation?
Use an agent when judgment, flexibility, or reasoning is required.

### When should I use an automation instead of an agent?
Use an automation when reliability, consistency, and scale are required.

### Can an agent trigger or coordinate automations?
Yes. An agent chooses actions and coordinates tasks, including coordinating multiple automations based on context.

### Do automations make decisions about what should happen?
No. Automations follow defined logic and steps and execute whichever path the agent (or rules) selected.