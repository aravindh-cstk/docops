---
title: "[Studio] - About Studio React SDK"
description: Overview of the Studio React SDK for fetching, rendering, and editing Studio compositions in React applications.
url: https://www.contentstack.com/docs/developers/sdks/studio-sdk/react/about-studio-react-sdk
product: Contentstack
doc_type: overview
audience:
  - developers
  - frontend-engineers
version: latest
last_updated: 2026-03-25
---

# [Studio] - About Studio React SDK

This page introduces the Studio React SDK and explains what it enables in React applications. It is intended for developers integrating Contentstack Studio into React projects, especially when setting up composition rendering and in-app editing with Live Preview.

## About Studio React SDK

Use Contentstack’s Studio to power composable experiences in your React projects.

The Studio React SDK lets you fetch, render, and edit compositions directly within your React application. It includes pre-built components such as `StudioComponent`, `PreviewRenderer`, and `StudioCanvas`, as well as supporting hooks and utilities to streamline integration.

**Note:** Initialize the Studio React SDK with a Contentstack Delivery SDK instance with [Live Preview](/docs/content-managers/author-content/about-live-preview) enabled. Without Live Preview, editing capabilities won’t work.

## Key Features

Here are some of the key features of the Studio React SDK:
- **Composable content rendering:** Fetch compositions from Contentstack Studio inside React applications. Render them using the `useCompositionData` hook and the `<ComposableComponent>` component.
- **Custom component registration:** Register custom React components in Studio by defining props, data bindings, and conditions in a structured, schema-based configuration. This allows developers to build modular and reusable UI elements within Studio.
- **Design tokens and theming:** Define reusable design tokens for color, spacing, and typography as CSS variables. Use these tokens when configuring component-level styles through sections such as size, layout, background, and shadow for consistent theming.
- **Responsive breakpoints:** Register custom viewport breakpoints to define and manage device-specific layouts within Studio.
- **Studio-aware utilities and hooks:** Make components adapt to Studio state using built-in hooks. These hooks detect selection, visibility, and environment state to enable conditional rendering and interaction logic.
- **Server-side rendering support:** Render Studio compositions in server-side frameworks such as Next.js and inline CSS during the rendering to improve performance and SEO.

To integrate your React application with the Studio React SDK, follow the steps in the [Get Started ](/docs/developers/sdks/studio-sdk/react/get-started-with-studio-react-sdk)document.

## Common questions

### Do I need Live Preview to use the Studio React SDK?
Yes. **Note:** Initialize the Studio React SDK with a Contentstack Delivery SDK instance with [Live Preview](/docs/content-managers/author-content/about-live-preview) enabled. Without Live Preview, editing capabilities won’t work.

### What components are included in the Studio React SDK?
It includes pre-built components such as `StudioComponent`, `PreviewRenderer`, and `StudioCanvas`, as well as supporting hooks and utilities to streamline integration.

### How do I get started integrating the SDK?
Follow the steps in the [Get Started ](/docs/developers/sdks/studio-sdk/react/get-started-with-studio-react-sdk)document.