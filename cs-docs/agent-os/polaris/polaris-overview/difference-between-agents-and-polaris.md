---
title: "Difference Between Agents and Polaris"
description: "Discover the key differences between agents and automations in Agent OS for building intelligent, scalable workflows in Contentstack."
url: /agent-os/difference-between-agents-and-polaris
---

# Difference Between Agents and Polaris

## Difference Between Agents and Polaris

**Note:** For access, please talk to our [Support](mailto:support@contentstack.com) team.

Polaris and Agents are both core parts of **Contentstack Agent OS**, but they serve very different purposes.

While **Agents** provide the intelligence and decision-making, **Polaris** provides a safe, in context execution experience inside the CMS.

The table below highlights their differences across key aspects, with examples embedded for clarity.

| Aspect | Agents | Polaris |
| --- | --- | --- |
| **Definition** | Core intelligence layer of Agent OS, it acts as the “brain” across CMS, automations, and interfaces. | Embedded inside the CMS, it appears as a side panel within the Contentstack CMS UI. |
| **Operational scope** | Context-aware across systems, it uses content data, brand rules, and signals together. | Works on **Entries**, **Assets**, and **Visual Editor** elements, limited to the currently selected CMS object. |
| **Decision-making** | Reasons and decides. Determines the best publish time based on traffic. | No independent reasoning, does not decide when to publish. |
| **Execution behavior** | Adaptive behavior, adjusts actions if data or conditions change. | Deterministic execution. Follows validate → preview → execute. |
| **Handling ambiguity** | Interprets vague intent like “urgent” or “soon”. | Requires clear, explicit user intent. |
| **System integration** | Uses tools and abilities, can invoke CMS actions, automations, or integrations. | Uses existing CMS APIs only, same APIs as the CMS UI. |
| **State and learning** | Learns and adapts, improves decisions as context evolves. | Stateless execution, does not remember previous interactions. |
| **Governance and control** | Governed intelligence. Follows Brand Kit and Knowledge Vault rules. | Strict permission enforcement. Honors role-based and field-level access. |
| **Best suited for** | Judgment & orchestration.“Should this content be reviewed, translated, or published?” | Guided CMS actions. “Update this entry and show me the preview.” |
