---
title: "[Set Up Your Project] - Workflows Limitations"
description: Limitations applied to workflows, publish rules, stages, users, roles, and content types.
url: https://www.contentstack.com/docs/developers/set-up-workflows-and-publish-rules/workflows-limitations
product: Set Up Your Project
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Workflows Limitations

This page lists the limitations applied to workflows and related configuration (such as publish rules, stages, users, roles, and content types). It is intended for developers setting up workflows and publish rules who need to understand system limits while designing their workflow structure.

## Workflows Limitations

There are certain limitations that we have applied for workflows. Let’s understand what they are:
- You can create a maximum of **10 workflows per stack**.
- You can create a maximum of **100 publish rules per stack**.
- You can add a maximum of **100 content types** in the scope of a workflow.
- You need to add **at least two stages** in a workflow. The **maximum stage limit is 20**.
- You can add up to **100 super users** in a workflow.
- Under stage transition rules of a workflow, you can add up to **100 users and 100 roles** for each stage.
- Under stage transition rules of a workflow, you can add up to **20 next available stages** for a stage.

## Common questions

**What is the maximum number of workflows allowed per stack?**  
You can create a maximum of **10 workflows per stack**.

**How many publish rules can be created per stack?**  
You can create a maximum of **100 publish rules per stack**.

**What are the minimum and maximum stage limits in a workflow?**  
You need to add **at least two stages** in a workflow. The **maximum stage limit is 20**.

**How many users and roles can be added under stage transition rules for each stage?**  
Under stage transition rules of a workflow, you can add up to **100 users and 100 roles** for each stage.