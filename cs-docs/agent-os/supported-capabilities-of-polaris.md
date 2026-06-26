---
title: "[Automations guides and connectors] - Supported Capabilities of Polaris"
description: Supported capabilities and limitations of Polaris in Agent OS (Early Access).
url: https://www.contentstack.com/docs/agent-os/supported-capabilities-of-polaris
product: Agent OS
doc_type: guide
audience:
  - developers
  - content-authors
  - administrators
version: early-access
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Supported Capabilities of Polaris

This page describes what Polaris can and cannot do in Agent OS (Early Access). It is intended for users evaluating or using Polaris to work with CMS content, assets, and the Visual Editor, especially when understanding permission scope and action confirmation requirements.

## Supported Capabilities of Polaris

**Note:** **Agent OS** is currently in **Early Access**. Features may change and limitations may apply. We recommend using it in non-production environments until general availability. For more information, contact [support](mailto:support@contentstack.com).

- Polaris is currently focused on **CMS Entries**, **Assets**, and **Visual Editor**.
- Polaris performs actions using the **credentials and permissions of the logged-in user**.
- Polaris supports** text and metadata content only**.
- Polaris **does not** analyze or **edit images or videos**.
- Polaris acts only on the content that is **currently open or explicitly selected** by the user.
- For all **write** **actions**, Polaris pauses before execution and requires **explicit user confirmation**.

## Common questions

### Does Polaris work on all content types?
Polaris is currently focused on **CMS Entries**, **Assets**, and **Visual Editor**.

### Can Polaris make changes without my approval?
For all **write** **actions**, Polaris pauses before execution and requires **explicit user confirmation**.

### Does Polaris edit images or videos?
Polaris **does not** analyze or **edit images or videos**.

### What permissions does Polaris use when performing actions?
Polaris performs actions using the **credentials and permissions of the logged-in user**.