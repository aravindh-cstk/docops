---
title: [Automations guides and connectors] - Agent OS Architecture
description: Discover Agent OS, an adaptive AI framework with Agents, Automations, and governance for scalable enterprise automation.

url: https://www.contentstack.com/docs/agent-os/agent-os-architecture
product: Automations
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2026-02-20
filename: agent-os-architecture.md
---

# [Automations guides and connectors] - Agent OS Architecture

This page explains [Automations guides and connectors] - Agent OS Architecture for Automations. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Agent OS Architecture

Agent OS is Contentstack’s unified intelligence platform, designed to centralize reasoning, execution, and governance so intelligence can be built once and reused safely across the platform.

### Architectural Principle

Agent OS separates intelligence, execution, and interaction so the same agents can power internal tools, background automation, and customer-facing experiences, without duplication or loss of control.

### Core Subsystems

* **Agents:** The adaptive intelligence layer that reasons, decides, and coordinates actions.
* **Automations:** The deterministic execution layer that runs workflows reliably at scale.
* **Polaris:** The internal conversational interface for contextual assistance and human-in-the-loop control.
* **Digital Concierge:** The external conversational interface that brings the same governed intelligence to customer-facing digital experiences.

### Layered Architecture

Agent OS follows a layered model that separates concerns while allowing tight coordination between intelligence and execution.

![Architecture_image](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt758a4d86ac50940f/6998735d99cddc000822b44e/Architecture_image.png)

#### Intelligence layer: Agents

Agents form the core of Agent OS. They interpret context, reason over data, and decide what actions to take. Agents are interface-agnostic, allowing the same intelligence to be reused across Polaris, Automations, and the Digital Concierge.

#### Execution layer: Automations

Automations handle how actions are executed. They provide predictable, event-driven, and auditable workflows. Agents can invoke automations, and automations can invoke agents, combining AI-driven decisions with reliable execution.

#### Interface layer: Polaris and Digital Concierge

Polaris and Digital Concierge are two interaction surfaces for the same intelligence:

* **Polaris** supports internal users with guidance, explanations, and approvals.
* **Digital Concierge** enables external users to interact with agents through conversational experiences.

Both interfaces invoke the same agents and automations, ensuring consistent behavior and outcomes.

#### Integration layer: MCP Server

The Model Context Protocol (MCP) enables secure, standardized integration with Contentstack services and third-party systems, reducing tight coupling and improving maintainability.

### Governance and Trust

Governance is built into the architecture of Agent OS.

* **Observability:** Centralized visibility into agents, automations, and executions.
* **Auditability:** Detailed logs for actions, content changes, API calls, and errors.
* **Brand Control:** Brand Kit and Knowledge Vault ensure consistent tone, terminology, and factual accuracy across all AI outputs.

### Why This Architecture Matters

Agent OS enables enterprises to:

* Build intelligence once and reuse it everywhere.
* Combine AI flexibility with reliable execution.
* Maintain consistent brand and governance across channels.
* Scale AI adoption with confidence.

## Common questions
### What is covered in [Automations guides and connectors] - Agent OS Architecture?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Automations guides and connectors] - Agent OS Architecture?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
