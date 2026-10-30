---
title: "Polaris Features"
description: "Explore Polaris feature, including context-aware intelligence, real CMS actions, preview-first updates, and enterprise-grade governance."
url: /agent-os/polaris-features
uid: blt53284de9902a74e2
---

# Polaris Features

## Polaris Features

**Note:** For access, please talk to our [Support](mailto:support@contentstack.com) team.

Polaris is designed to streamline everyday CMS operations through context-aware intelligence and CMS automation features. By combining guided execution with enterprise-grade governance, Polaris reduces manual effort while ensuring safety, predictability, and control across Contentstack workflows.

## Context-Aware Intelligence

Polaris automatically understands the **context of the page** you are working on and scopes every interaction accordingly.

-   Inherits context from entries, assets, and the Visual Editor
-   Understands content type schemas and field structures
-   Identifies selected elements in the Visual Editor
-   Eliminates the need for manual explanations or setup

## Real CMS Action Execution

Polaris is built to perform **actual CMS operations**, not just generate suggestions.

-   Updates entry fields such as titles, descriptions, and structured content
-   Modifies asset metadata including titles, descriptions, tags, and folders
-   Creates content types, entries, and environments, and builds entry URLs from the content type's URL pattern
-   Creates releases, adds entries to them, deploys them, and rolls them back
-   Applies changes directly using Contentstack APIs
-   Executes actions that mirror what users can do through the UI

## Preview-First Change Management

Polaris uses **preview-first safeguards** for write operations.

-   Clearly displays current values and proposed updates
-   Allows users to confirm or cancel changes
-   Prevents accidental or unintended modifications
-   Ensures transparency and user control

**Note:** Previews and confirmations appear when the approval mode in the Polaris composer is set to **Manually Approve**. In **Auto** mode, Polaris performs operations without asking.

## Read vs. Write Action Separation

Polaris clearly distinguishes between informational requests and data-modifying actions.

-   Read actions (queries, explanations, content inspection, file exports) execute immediately
-   Write actions (updates, edits, metadata changes, comments, invitations) require confirmation in **Manually Approve** mode
-   Prevents silent or implicit data changes

## Multi-Action Requests

Polaris supports complex workflows through a single prompt.

-   Handles multiple field updates in one request
-   Supports bulk asset metadata changes
-   Validates each action independently
-   Presents all proposed changes in a unified preview

## Entry Comments

Polaris works with the comments on an entry, so you can act on review feedback without leaving the conversation.

-   Reads the open comments on the entry you are working on
-   Adds a comment to a specific field, with **@mentions** that Polaris resolves to the right collaborator before you confirm
-   Applies the feedback in a comment to the entry, then resolves the comment thread
-   Comments added through Polaris appear in the entry's **Discussions** panel

## User and Access Management

Polaris can manage who has access to a stack, using the same permissions you have in the UI.

-   Lists the people who have access to a stack, their roles, and pending invitations
-   Invites people to a stack with a role. If a person is not yet in your organization, the confirmation card tells you they also join it as a member.
-   Changes a person's stack role, including on a pending invitation
-   Resends a pending invitation

## File Exports

Polaris can turn content into a file you can download.

-   Exports one or more entries as a Markdown, JSON, PDF, or Word file
-   Returns a download link in the conversation
-   Download links require you to be signed in to Contentstack and expire after a limited time

## Answers from Contentstack Documentation

Polaris answers product questions from the Contentstack documentation.

-   Answers "How do I…" questions with steps in the conversation
-   Links to the relevant documentation page so you can read the full guide

## Visual Editor Integration

Polaris integrates directly with the [Visual Editor](/docs/headless-cms/about-visual-editor) for truly contextual editing.

-   Knows the open page, its language, the audience you are viewing, and the entries each part of the page comes from
-   Automatically understands the selected page element
-   Maps visual elements to underlying entries and fields
-   Saves changes to the entry and language behind the page, and shows them in the preview without a reload
-   Adds a missing language version of a page, including a page URL for that language
-   Applies audience edits only to the audience variant you are viewing
-   Replies with a link to open another page instead of switching the page you are on
-   Maintains preview and confirmation safeguards

## Permission-Aware Operations

Polaris enforces the same governance model as the Contentstack CMS.

-   Uses the logged-in user’s credentials
-   Respects role-based, entry-level, and field-level permissions
-   Prevents unauthorized actions
-   Clearly explains permission-related failures

## Schema and Validation Awareness

Before applying changes, Polaris validates every request against CMS structure.

-   Checks content type schemas
-   Ensures field compatibility
-   Prevents invalid or unsupported updates
-   Reduces schema-related errors

## Consistent Execution Model

Polaris executes tasks in a structured, step-by-step manner.

-   Breaks requests into discrete CMS-backed operations
-   Validates permissions, schema, and data integrity
-   Applies changes only after successful validation and approval
