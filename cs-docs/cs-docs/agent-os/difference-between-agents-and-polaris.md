---
title: "[Automations guides and connectors] - Difference Between Agents and Polaris"
description: Difference Between Agents and Polaris in Contentstack Agent OS.
url: https://www.contentstack.com/docs/agent-os/difference-between-agents-and-polaris
product: Contentstack Agent OS
doc_type: guide
audience:
  - developers
  - content-managers
version: early-access
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Difference Between Agents and Polaris

This page explains how Agents and Polaris differ within Contentstack Agent OS, clarifying what each component does, where it operates, and when to use one versus the other. It is intended for users evaluating or implementing Agent OS workflows inside the Contentstack CMS.

## Difference Between Agents and Polaris

**Note:** **Agent OS** is currently in **Early Access**. Features may change and limitations may apply. We recommend using it in non-production environments until general availability. For more information, contact [support](mailto:support@contentstack.com).

Polaris and Agents are both core parts of **Contentstack Agent OS**, but they serve very different purposes.

While **Agents** provide the intelligence and decision-making, **Polaris** provides a safe, in context execution experience inside the CMS.

The table below highlights their differences across key aspects, with examples embedded for clarity.

| Aspect | Agents | Polaris |
|---|---|---|
| **Definition** | Core intelligence layer of Agent OS, it acts as the “brain” across CMS, automations, and interfaces. | Embedded inside the CMS, it appears as a side panel within the Contentstack CMS UI. |
| **Operational scope** | Context-aware across systems, it uses content data, brand rules, and signals together. | Works on **Entries**, **Assets**, and **Visual Editor** elements, limited to the currently selected CMS object. |
| **Decision-making** | Reasons and decides. Determines the best publish time based on traffic. | No independent reasoning, does not decide when to publish. |
| **Execution behavior** | Adaptive behavior, adjusts actions if data or conditions change. | Deterministic execution. Follows validate → preview → execute. |
| **Handling ambiguity** | Interprets vague intent like “urgent” or “soon”. | Requires clear, explicit user intent. |
| **System integration** | Uses tools and abilities, can invoke CMS actions, automations, or integrations. | Uses existing CMS APIs only, same APIs as the CMS UI. |
| **State and learning** | Learns and adapts, improves decisions as context evolves. | Stateless execution, does not remember previous interactions. |
| **Governance and control** | Governed intelligence. Follows Brand Kit and Knowledge Vault rules. | Strict permission enforcement. Honors role-based and field-level access. |
| **Best suited for** | Judgment & orchestration. “Should this content be reviewed, translated, or published?” | Guided CMS actions. “Update this entry and show me the preview.” |

## Common questions

### When should I use Agents instead of Polaris?
Use Agents for judgment & orchestration, such as deciding whether content should be reviewed, translated, or published.

### When should I use Polaris instead of Agents?
Use Polaris for guided CMS actions inside the CMS, such as updating an entry and showing a preview.

### Can Polaris make independent decisions like publish timing?
No. Polaris has no independent reasoning and does not decide when to publish.

### Does Polaris remember previous interactions?
No. Polaris is stateless execution and does not remember previous interactions.