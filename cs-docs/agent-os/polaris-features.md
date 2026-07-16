---
title: Automations guides and connectors - Polaris Features
description: Polaris Features for Agent OS (Early Access), including context-aware intelligence, CMS action execution, preview-first change management, and governance safeguards.
url: https://www.contentstack.com/docs/agent-os/polaris-features
product: Contentstack Agent OS
doc_type: feature-overview
audience:
  - developers
  - content-managers
version: early-access
last_updated: 2026-03-25
---

# Automations guides and connectors - Polaris Features

This page describes Polaris features in Contentstack Agent OS, outlining how Polaris provides context-aware intelligence and executes real CMS actions with preview-first safeguards and permission-aware governance. It is intended for users evaluating or using Agent OS (Early Access) and should be referenced when understanding what Polaris can do and how it behaves during read/write operations.

**Note:** **Agent OS** is currently in **Early Access**. Features may change and limitations may apply. We recommend using it in non-production environments until general availability. For more information, contact [support](mailto:support@contentstack.com).

Polaris is designed to streamline everyday CMS operations through context-aware intelligence and CMS automation features. By combining guided execution with enterprise-grade governance, Polaris reduces manual effort while ensuring safety, predictability, and control across Contentstack workflows.

## Context-Aware Intelligence
Polaris automatically understands the **context of the page **you are working on and scopes every interaction accordingly.
- Inherits context from entries, assets, and the Visual Editor
- Understands content type schemas and field structures
- Identifies selected elements in the Visual Editor
- Eliminates the need for manual explanations or setup

## Real CMS Action Execution
Polaris is built to perform **actual CMS operations**, not just generate suggestions.
- Updates entry fields such as titles, descriptions, and structured content
- Modifies asset metadata including titles, descriptions, tags, and folders
- Applies changes directly using Contentstack APIs
- Executes actions that mirror what users can do through the UI

## Preview-First Change Management
Polaris uses **preview-first safeguards** for all write operations.
- Clearly displays current values and proposed updates
- Allows users to confirm or cancel changes
- Prevents accidental or unintended modifications
- Ensures transparency and user control

## Read vs. Write Action Separation
Polaris clearly distinguishes between informational requests and data-modifying actions.
- Read actions (queries, explanations, content inspection) execute immediately
- Write actions (updates, edits, metadata changes) require confirmation
- Prevents silent or implicit data changes

## Multi-Action Requests
Polaris supports complex workflows through a single prompt.
- Handles multiple field updates in one request
- Supports bulk asset metadata changes
- Validates each action independently
- Presents all proposed changes in a unified preview

## Visual Editor Integration
Polaris integrates directly with the [Visual Editor](/docs/content-managers/visual-builder/about-visual-builder) for truly contextual editing.
- Automatically understands the selected page element
- Maps visual elements to underlying entries and fields
- Applies updates with real-time visual feedback
- Maintains preview and confirmation safeguards

## Permission-Aware Operations
Polaris enforces the same governance model as the Contentstack CMS.
- Uses the logged-in user’s credentials
- Respects role-based, entry-level, and field-level permissions
- Prevents unauthorized actions
- Clearly explains permission-related failures

## Schema and Validation Awareness
Before applying changes, Polaris validates every request against CMS structure.
- Checks content type schemas
- Ensures field compatibility
- Prevents invalid or unsupported updates
- Reduces schema-related errors

## Consistent Execution Model
Polaris executes tasks in a structured, step-by-step manner.
- Breaks requests into discrete CMS-backed operations
- Validates permissions, schema, and data integrity
- Applies changes only after successful validation and approval

## Common questions

**What does “context-aware” mean in Polaris?**  
Polaris automatically understands the context of the page you are working on and scopes every interaction accordingly.

**Does Polaris make changes automatically?**  
Write actions (updates, edits, metadata changes) require confirmation, and Polaris uses preview-first safeguards for all write operations.

**Can Polaris perform real CMS operations or only provide suggestions?**  
Polaris is built to perform actual CMS operations and applies changes directly using Contentstack APIs.

**How does Polaris handle permissions and governance?**  
Polaris uses the logged-in user’s credentials, respects role-based, entry-level, and field-level permissions, and prevents unauthorized actions.