---
title: "[AM2.0] - Add Languages in Assets"
description: Add languages globally in Assets for centralized language management and asset localization across spaces and workspaces.
url: https://www.contentstack.com/docs/assets/add-languages-in-assets
product: Contentstack Assets
doc_type: guide
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Add Languages in Assets

This page explains how to add languages globally in Contentstack Assets so spaces and workspaces can enable them for consistent asset localization. Read this if you manage localization settings and need to configure supported and fallback languages before localizing assets.

## Add Languages in Assets

Assets supports centralized language management to enable consistent and controlled asset localization across spaces and workspaces. Languages are added globally at the Assets level. Spaces and workspaces do not create languages independently; instead, they selectively enable languages from this global list based on their specific requirements.

To add languages, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps below:
- Open Assets and navigate to **Settings** > **Languages**.
- Click **+ New Language**.
- Select **Add Supported Language**.
- Choose a language from the **Select Language** list.
- Select a **Fallback Language**.**Note**: The system uses the fallback language when localized content is unavailable.
- Click **Add**.

The system adds the language to the space and makes it available for configuration in workspaces. Refer to the [Add Languages to a Workspace](./add-languages-to-a-workspace.md) document to get started with asset localization.

## Common questions

**How are languages managed in Assets?**  
Languages are added globally at the Assets level, and spaces and workspaces selectively enable languages from this global list.

**What is a fallback language used for?**  
**Note**: The system uses the fallback language when localized content is unavailable.

**Do spaces and workspaces create languages independently?**  
No. Spaces and workspaces do not create languages independently; they enable languages from the global list.

**Where do I configure languages in Assets?**  
Open Assets and navigate to **Settings** > **Languages**.