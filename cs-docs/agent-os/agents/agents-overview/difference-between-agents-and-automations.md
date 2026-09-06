---
title: "Difference Between Agents and Automations"
description: "Discover the key differences between agents and automations in Agent OS for building intelligent, scalable workflows in Contentstack."
url: /agent-os/difference-between-agents-and-automations
uid: blt204e0f6d946d7300
---

# Difference Between Agents and Automations

## Difference Between Agents and Automations

**Note:** For access, please talk to our [Support](mailto:support@contentstack.com) team.

The table below highlights the key differences between Agents and Automations in Contentstack Agent OS. Both are core building blocks, but they serve distinct roles in how intelligent workflows are designed and executed.

**Note**:

-   An **agent decides what should happen and when**
-   An **automation executes how it happens**

| Aspect | Agents | Automations |
| --- | --- | --- |
| Primary role | Reasoning and  
decision-making  

**Example:** An agent reads a user’s request like _“Summarize this doc and extract action items.”_ | Workflow execution  

**Example:** An automation publishes an entry at 2:00 AM and sends a Slack notification.  |
| Core purpose | Understand context, interpret intent, and decide what should happen  

**Example:** Determines whether content needs translation, review, or scheduling based on context.  | Carry out predefined steps reliably and at scale  

**Example:** Executes translation, assigns reviewers, or schedules publishing once the path is defined.  |
| Nature | Adaptive and context-aware  

**Example:** Adjusts behavior if required metadata is missing or if brand rules differ by region.  | Deterministic and rule-based  

**Example:** Always runs the same steps when a “Content Approved” event occurs.  |
| Input type | Unstructured or semi-structured input (natural language, context, signals)  

**Example:** Processes natural language or contextual requests like “Prepare this blog for EMEA launch next week.  | Structured events, triggers, or schedules  

**Example:** Triggered by explicit signals such as events, schedules, or defined inputs.  |
| Decision-making | Yes. Evaluates options, goals, and constraints  

**Example:** Chooses between multiple automations: “Should I schedule publishing or trigger an urgent release?”  | No. Follows defined logic and steps  

**Example:** Executes whichever path the agent (or rules) selected.  |
| Handling ambiguity | Can handle ambiguity and incomplete information  

**Example:** Interprets “soon” or “high-priority” and resolves it into concrete actions.  | Requires clearly defined conditions  

**Example:** Fails or pauses if required fields or conditions are not explicitly defined.  |
| Execution style | Chooses actions and coordinates tasks  

**Example:** Coordinates multiple automations, approval, localization, publishing, based on context.  | Executes tasks exactly as configured  

**Example:** Runs steps in a fixed order: validate → publish → notify.  |
| User interaction | Conversational (via Polaris)  

**Example:** A user chats with Polaris: “What’s blocking this release?”  | Non-conversational, system-driven  

**Example:** Runs silently in the background after a trigger fires.  |
| Interfaces | Custom Agents and Polaris  

**Example:** Can also be used through Polaris to guide users.  | Automations, event triggers, schedules  

**Example:** Configured via Automations with triggers and actions.  |
| Reusability | Reused across interfaces and workflows as shared intelligence  

**Example:** Coordinates and sequences actions or automations based on context.  | Reused as execution blocks across workflows  

**Example:** Executes a defined sequence of steps exactly as configured.  |
| Governance | Governed by Brand Kit and Knowledge Vault for reasoning, interpretation, and decision-making.  

**Example:** An agent decides how to respond to a user request while aligning with brand tone and approved terminology.  | Governed by workflow controls, audit logs, and Brand Kit where applicable for content generation or transformation.  

**Example:** An automation generates or reformats content using Brand Kit rules but does not decide whether or why to do so.  |
| Best used when | Judgment, flexibility, or reasoning is required  

**Example:** When judgment, prioritization, or interpretation is required.  | Reliability, consistency, and scale are required  

**Example:** When steps must be executed consistently, reliably, and at scale. |
