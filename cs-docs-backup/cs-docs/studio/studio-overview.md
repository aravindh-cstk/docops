---
title: "[Studio] - Studio Overview"
description: Overview of Studio, a visual web experience builder, including core concepts, workflows, data binding, design system integration, and live editing compatibility.
url: https://www.contentstack.com/docs/studio/studio-overview
product: Contentstack Studio
doc_type: overview
audience:
  - developers
  - designers
  - content-authors
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Studio Overview

This page introduces Contentstack Studio, explaining what it is, who it’s for (developers, designers, and content teams), and when to use it to build and manage visual, component-based web experiences with CMS integration.

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Studio is a visual web experience builder that streamlines frontend development. It offers a component-based interface that bridges design, development, and content, enabling teams to launch scalable digital experiences efficiently.

## Core Concepts

Studio introduces key building blocks for structured and visual page creation:

- **Project:** A logical container linked one-to-one with a stack. It houses all compositions within that stack.
- **Composition Type:** A content type in the linked stack that stores composition metadata, such as layout JSON, title, and component references. You can start with a freeform composition and link it to a content type later.
- **Composition:** The primary unit in Studio. It represents a full page, reusable section, or UI component. Stored as a structured JSON tree, it includes:Layout structure
- Component references
- Data bindings
- Design configurations
- **Symbol:** A reusable component derived from a composition. All symbol instances reflect updates made to the source.
- **Template:** A copy-based variation of a composition. Changes affect only the specific instance.
- **Code Component:** A React component registered within your project to handle business logic or complex UI. These function as foundational building blocks.**Default Components:** Prebuilt layout and content elements such as containers, text blocks, and images. These appear in the left panel by default.
- **Registered Components:** User-defined code components that, once registered, also appear in the left panel under categorized sections.

## Visual Composition Workflow

Studio enables drag-and-drop page building with modular components.

### Design-to-Code Workflow

Connect design and development with enhanced automation:

- Import design layers using the Figma plugin
- Use AI to scaffold layout structures
- Register production-ready components using the CLI

This workflow supports rapid iteration for business users and full control for developers.

## CMS Data Binding

Each composition can be linked to a Contentstack content type. Bind component fields (props) to entry fields to:

- Dynamically render content
- Centrally manage content from Visual Builder
- Enable personalization and localization

## Design System Integration

Maintain brand consistency and scale design decisions using tokens for:

- Color
- Typography
- Spacing
- Breakpoints

## Live Editing Compatibility

Studio compositions integrate seamlessly with Contentstack’s visual experience tools:

- **Live Preview:** View content updates in real time.
- **Visual Builder:** Edit content directly within the rendered UI.

All default and AI-generated components are automatically wrapped in live-edit tags.

Studio combines visual workflows, reusable component models, design-token support, and deep CMS integration. It empowers teams to create consistent, scalable digital experiences, faster.

## Common questions

**What is Studio used for?**  
Studio is a visual web experience builder that streamlines frontend development with a component-based interface bridging design, development, and content.

**How does Studio connect to Contentstack CMS content?**  
Each composition can be linked to a Contentstack content type, and component fields (props) can be bound to entry fields for dynamic rendering and centralized content management.

**What’s the difference between a Symbol and a Template?**  
A **Symbol** is a reusable component derived from a composition where all instances reflect updates made to the source, while a **Template** is a copy-based variation where changes affect only the specific instance.

**Does Studio support live editing tools?**  
Yes. Studio compositions integrate with **Live Preview** and **Visual Builder**, and all default and AI-generated components are automatically wrapped in live-edit tags.