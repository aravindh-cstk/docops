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
-   Applies changes directly using Contentstack APIs
-   Executes actions that mirror what users can do through the UI

## Preview-First Change Management

Polaris uses **preview-first safeguards** for all write operations.

-   Clearly displays current values and proposed updates
-   Allows users to confirm or cancel changes
-   Prevents accidental or unintended modifications
-   Ensures transparency and user control

## Read vs. Write Action Separation

Polaris clearly distinguishes between informational requests and data-modifying actions.

-   Read actions (queries, explanations, content inspection) execute immediately
-   Write actions (updates, edits, metadata changes) require confirmation
-   Prevents silent or implicit data changes

## Multi-Action Requests

Polaris supports complex workflows through a single prompt.

-   Handles multiple field updates in one request
-   Supports bulk asset metadata changes
-   Validates each action independently
-   Presents all proposed changes in a unified preview

## Visual Editor Integration

Polaris integrates directly with the [Visual Editor](/docs/headless-cms/about-visual-editor) for truly contextual editing.

-   Automatically understands the selected page element
-   Maps visual elements to underlying entries and fields
-   Applies updates with real-time visual feedback
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
