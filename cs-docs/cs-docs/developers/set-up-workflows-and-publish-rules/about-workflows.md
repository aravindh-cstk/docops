---
title: "[Workflows] - About Workflows"
description: About Workflows
url: https://www.contentstack.com/docs/headless-cms/about-workflows
product: Workflows
doc_type: concept
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Workflows] - About Workflows

This page explains what a Workflow is, highlights key features, and describes how workflows operate through stages and tasks. It is intended for developers and team members setting up content review and approval processes, and should be used when designing or understanding workflow-driven content publishing.

## About Workflows

A **Workflow** defines a sequence of steps that streamlines the content review and approval process. It enables teams to follow a structured approach and collaborate efficiently, ensuring consistency and quality in published content.

**Note:** You can create [branch-specific](/docs/developers/branches/branch-specific-modules) workflows. This means you can add multiple workflows for a content type, with each one linked to a distinct branch.

For example, in an enterprise content team, multiple users collaborate on entries. A defined workflow ensures a clear and consistent flow of content from creation to publication across all digital properties.

## Key Features

Workflows provide flexibility and control over how content moves through its lifecycle.

- **Stage Definition:** Create and name stages that represent key phases of your content process, such as Draft, Review, and Publish.
- **User and Role Assignments:** Assign specific users or roles to workflow stages to clarify ownership and responsibilities.
- **Approval Rules:** Add publishing approval conditions to ensure that only authorized users can approve or publish entries.
- **Prevent Self-advancement:** Require at least two distinct reviewers before content moves to the next stage. This promotes accountability and helps maintain higher content quality and compliance standards.
- **Branch-Specific Workflows:** Create workflows for specific branches to help teams manage content independently across environments.
- **Task Management:** Track pending actions through the **Tasks** page, where assigned users can access and move entries between workflow stages.

**Note:** Workflows are available only if included in your plan. Only the **Stack Owner**, **Administrator**, and **Developer** roles can create workflows.

## How Workflows Work

After you define a workflow and assign a user to the next stage, that user receives a **Workflow Task**. From the [Tasks](/docs/developers/set-up-workflows-and-publish-rules/about-workflow-tasks) page, they can:

- Open the assigned entry.
- Review its content.
- Move the entry to the next stage in the process.

Each stage transition is captured in the **Audit Log**, providing visibility into who moved an entry and when. This helps maintain traceability throughout the workflow.

**Additional Resource:** For details on configuring workflow stages and rules, see [Set Up a Workflow](/docs/developers/set-up-workflows-and-publish-rules/add-workflows-and-stages).

## Tutorial Video

## Common questions

### Who can create workflows?
Only the **Stack Owner**, **Administrator**, and **Developer** roles can create workflows.

### Can I have multiple workflows for the same content type?
Yes. You can add multiple workflows for a content type, with each one linked to a distinct branch.

### Where do users see and act on workflow tasks?
Assigned users can use the [Tasks](/docs/developers/set-up-workflows-and-publish-rules/about-workflow-tasks) page to open entries, review content, and move entries to the next stage.

### How are workflow stage changes tracked?
Each stage transition is captured in the **Audit Log**, showing who moved an entry and when.