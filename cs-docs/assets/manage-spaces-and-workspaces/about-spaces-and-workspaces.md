---
title: "About Spaces and Workspaces"
description: "Optimize asset management and experimentation with Spaces and Workspaces in Contentstack. Ensure organized, compliant, and flexible governance."
url: /assets/about-spaces-and-workspaces
---

# About Spaces and Workspaces

## About Spaces and Workspaces

In Assets, **spaces** serve as the highest-level containers for assets and governance, while **workspaces** allow experimentation and parallel development inside a space. Understanding when to use each helps you keep assets organized, compliant, and adaptable.

## Spaces

A space is a central repository for all your digital assets, metadata, and configurations related to a specific brand, team, or initiative.

-   Each space is independent, assets, roles, and settings in one space do not affect another.
-   Spaces define governance boundaries: roles, permissions, and settings are scoped at the space level.
-   Spaces can be linked to one or more CMS stacks, allowing assets to be reused seamlessly inside content entries.

### When to Use Spaces

-   To manage assets for different brands (e.g., contentstack.com/product-marketing, contentstack.com/docs, or contentstack.com/academy).
-   To create separate environments for legal or regional requirements.

## Workspaces

Within a space, you can create workspaces. Workspaces act as parallel environments where assets and schemas can evolve independently. They are similar to branches in Git or Contentstack Headless CMS.

-   Workspaces are typically used to test or experiment without affecting the main workspace.
-   Each workspace has a parent-child relationship as new workspaces are forked from another workspace.

**Note:** Every space includes a **main workspace** that serves as the primary workspace. Any new workspace you create becomes a fork of the main (or another parent workspace), inheriting its assets and configurations. In other words, when a workspace is forked, it inherits assets, metadata, and configurations from its parent. Changes made in the child workspace remain isolated and do not affect the parent. This forking model allows safe experimentation while keeping the main workspace stable.

### When to Use Workspaces

-   To prepare seasonal or campaign-specific assets without affecting the main workspace.
-   To experiment with new asset schemas or metadata before rolling them out globally.
-   To align with CMS branching workflows, ensure assets stay in sync with content changes.

**Warning:**

-   Do not create a workspace to manage separate websites, brands, or business units.
-   Workspaces are designed for isolated experimentation and campaign-level asset workflows, not as replacements for spaces.
-   Each website, brand, or regional entity should have its own space, not a workspace.

## Best Practices

-   Use spaces for long-term organizational separation (eg., brands, regions).
-   Use workspaces for short-term or experimental work (eg., campaigns, testing).
-   Avoid over-fragmentation (too many small spaces/workspaces increase complexity).

## Quick Compare

| Use Case | Choose Spaces | Choose Workspaces |
| --- | --- | --- |
| Manage different brands or websites | check\_circle | cancel |
| Separate environments for regions or legal requirements | check\_circle | cancel |
| Enforce role-based governance at the unit level | check\_circle | cancel |
| Run campaign-specific asset workflows | cancel | check\_circle |
| Safely test new asset schemas or metadata | cancel | check\_circle |
| Branch assets to align with CMS content variants | cancel | check\_circle |

  

By combining spaces and workspaces correctly, Assets provides both structural clarity and operational flexibility, ensuring assets are always organized, governed, and adaptable.
