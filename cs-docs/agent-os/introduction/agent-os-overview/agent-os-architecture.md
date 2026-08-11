---
title: "Agent OS Architecture"
description: "Discover Agent OS, an adaptive AI framework with Agents, Automations, and governance for scalable enterprise automation.
"
url: /agent-os/agent-os-architecture
---

# Agent OS Architecture

## Agent OS Architecture

Agent OS is Contentstack’s centralized architecture for AI-driven workflows, designed to centralize reasoning, execution, and governance so teams can configure agents and automations once and reuse them across multiple interfaces.

## Architectural Principle

Agent OS separates intelligence, execution, and interaction so the same agents can power internal tools, background automation, and customer-facing experiences, without duplicating configurations or bypassing governance rules.

## Core Subsystems

-   **Agents:** The adaptive intelligence layer that reasons, decides, and coordinates actions.
-   **Automations:** The deterministic execution layer that runs workflows reliably at scale.
-   **Polaris:** The internal conversational interface for contextual assistance and human-in-the-loop control.

## Layered Architecture

Agent OS follows a layered model that separates concerns while allowing tight coordination between intelligence and execution.

![Architecture_image_cleaned.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amd710fa6d46761267/cb63bd94b47d8ef5ffc7a17d/Architecture_image_cleaned.png?locale=en-us)

### Intelligence layer: Agents

Agents form the core of Agent OS. They interpret context, reason over data, and decide what actions to take. Agents are interface-agnostic, allowing the same intelligence to be reused across Polaris, and Automations.

### Execution layer: Automations

Automations handle how actions are executed. They provide predictable, event-driven, and auditable workflows. Agents can invoke automations, and automations can invoke agents, combining AI-driven decisions with reliable execution.

### Interface layer: Polaris

Polaris is the interaction surface for the same intelligence:

-   **Polaris** supports internal users with guidance, explanations, and approvals.

Both interfaces invoke the same agents and automations, ensuring consistent execution through shared agents and workflows.

### Integration layer: MCP Server

The Model Context Protocol (MCP) enables secure, standardized integration with Contentstack services and third-party systems, reducing tight coupling and improving maintainability.

## Governance and Trust

Governance is built into the architecture of Agent OS.

-   **Observability:** Centralized visibility into agents, automations, and executions.
-   **Auditability:** Detailed logs for actions, content changes, API calls, and errors.
-   **Brand Control:** Brand Kit and Knowledge Vault ensure consistent tone, terminology, and factual accuracy across all AI outputs.

## Why This Architecture Matters

Agent OS enables enterprises to:

-   Build intelligence once and reuse it everywhere.
-   Combine AI flexibility with reliable execution.
-   Maintain consistent brand and governance across channels.
-   Scale AI usage while maintaining governance controls.
