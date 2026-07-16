---
title: "[AM2.0] - Create a Workspace"
description: Instructions for creating a workspace in AM2.0 to isolate assets and configurations within a space.
url: https://www.contentstack.com/docs/assets/create-a-workspace
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Create a Workspace

This page explains how to create a workspace in AM2.0 within a space so assets and configurations can evolve independently. It is intended for users who manage assets and collaboration workflows, and should be used when you need campaign-specific work, safe experimentation, or controlled collaboration without affecting the primary workspace.

## Create a Workspace

[Workspaces](./about-spaces-and-workspaces.md#workspaces) provide isolated environments within a space where assets and configurations can evolve independently. You can use workspaces to support campaign-specific collaboration, controlled experimentation, or parallel asset preparation, without disrupting ongoing work in the primary workspace.

Why create a workspace:
- **Campaign preparation**: Build a dedicated workspace for seasonal launches (eg., Spring Campaign) and manage all related assets in one place.
- **Safe experimentation**: Test new asset metadata conventions, validation rules, or organizational structures without impacting the main set of assets.
- **Controlled collaboration**: Restrict changes to a specific workstream while keeping the primary workspace stable for day-to-day usage.

To create a workspace, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Open the required space and navigate to **Space Settings**.
- Select **Workspaces**.
- Click **+ New Workspace**.
- In the **New Workspace** modal, enter the following details:
      **Name (required)**: The display name of the workspace (eg., Spring Campaign).
- **UID (required)**: A unique identifier for the workspace (eg., `spring_campaign`).
- **Description (optional)**: A short summary of the workspace purpose.
- **Source Workspace (required)**: Select the workspace from which assets should be inherited (eg., main).
- Click **Create Workspace**.

The newly created workspace is visible on the **Workspaces** listing page.

To switch to the new workspace:
- Navigate to **Assets**.
- Use the workspace dropdown on the asset listing page and select the newly created workspace to start working within it.

All assets and modifications made within workspaces stay isolated and do not affect other workspaces or the primary workspace.

## Common questions

**Q: What is a workspace used for?**  
A: Workspaces provide isolated environments within a space where assets and configurations can evolve independently.

**Q: Do changes in a workspace affect the primary workspace?**  
A: All assets and modifications made within workspaces stay isolated and do not affect other workspaces or the primary workspace.

**Q: Where can I see the workspace after creating it?**  
A: The newly created workspace is visible on the **Workspaces** listing page.

**Q: How do I switch to a newly created workspace?**  
A: Navigate to **Assets**, then use the workspace dropdown on the asset listing page and select the newly created workspace.