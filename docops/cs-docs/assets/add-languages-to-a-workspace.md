---
title: "[AM2.0] - Add Languages to a Workspace"
description: Add and manage workspace languages in Assets so assets can be localized within a specific workspace.
url: https://www.contentstack.com/docs/assets/add-languages-to-a-workspace
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Add Languages to a Workspace

This page explains how to enable a subset of globally available Assets languages within a specific workspace so that assets can be localized in that workspace. It is intended for users managing spaces and workspaces who need to control which locales are available for localization in different workflows.

## Add Languages to a Workspace

Languages are first [added globally](./add-languages-in-assets.md) in Assets. These languages form the list of available locales. Spaces and their workspaces do not create languages independently; instead, they select from the available languages and enable only the ones they require.

Within a space, each workspace adds a subset of languages based on its specific requirements. Assets become available for localization only after languages are added to the workspace. This layered approach ensures controlled localization, avoids unnecessary language clutter, and supports focused regional or campaign-driven workflows.

For example, Assets may include five languages, but a workspace adds only two of them. Only those two languages are available for localizing assets within that workspace.

To add languages to a workspace, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **Assets**.
- Open the required space and click **Space Settings**.
- Select **Workspaces** from the left navigation panel.
- Locate the required workspace and click the vertical ellipsis in the **Actions** column.
- Select **Manage Workspace Languages**. The **Manage Workspace Languages** modal displays the languages currently enabled for the workspace.
- Click **+ Add Language**.
- Select one or more languages from the list of available languages. Each language displays its configured fallback language.

  **Note:** The default language remains locked and cannot be removed.
- Click **Apply** to confirm the selection.
- Click **Save Changes** to add the selected languages to the workspace.

The selected languages now become available for asset localization within that workspace only. Other workspaces in the same space remain unaffected.

**Note:**
- Languages must exist in Assets before they can be added to a workspace.
- Each workspace can enable a different set of languages based on its requirements.
- Assets support localization only for languages enabled in the active workspace.
- Changes to workspace languages apply only to that workspace and do not affect other workspaces or spaces.

## Common questions

### Do I need to add languages globally before enabling them in a workspace?
Yes. Languages are first added globally in Assets, and workspaces can only enable languages from that available list.

### Can I remove the default language from a workspace?
No. The default language remains locked and cannot be removed.

### Do workspace language changes affect other workspaces?
No. Changes to workspace languages apply only to that workspace and do not affect other workspaces or spaces.

### When do assets become available for localization in a workspace?
Assets become available for localization only after languages are added to the workspace.