---
title: "Add Languages to a Workspace"
description: "Discover how to manage language settings in Contentstack, enabling targeted asset localization across workspaces for efficient, clutter-free campaigns."
url: /assets/add-languages-to-a-workspace
---

# Add Languages to a Workspace

## Add Languages to a Workspace

Languages are first [added globally](/docs/assets/add-languages-in-assets) in Assets. These languages form the list of available locales. Spaces and their workspaces do not create languages independently; instead, they select from the available languages and enable only the ones they require.

Within a space, each workspace adds a subset of languages based on its specific requirements. Assets become available for localization only after languages are added to the workspace. This layered approach ensures controlled localization, avoids unnecessary language clutter, and supports focused regional or campaign-driven workflows.

For example, Assets may include five languages, but a workspace adds only two of them. Only those two languages are available for localizing assets within that workspace.

To add languages to a workspace, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to **Assets**.
2.  Open the required space and click **Space Settings**.
3.  Select **Workspaces** from the left navigation panel.
4.  Locate the required workspace and click the vertical ellipsis in the **Actions** column.
5.  Select **Manage Workspace Languages**. The **Manage Workspace Languages** modal displays the languages currently enabled for the workspace.
6.  Click **\+ Add Language**.
7.  Select one or more languages from the list of available languages. Each language displays its configured fallback language.
    
    **Note:** The default language remains locked and cannot be removed.
    
8.  Click **Apply** to confirm the selection.
9.  Click **Save Changes** to add the selected languages to the workspace.

The selected languages now become available for asset localization within that workspace only. Other workspaces in the same space remain unaffected.

**Note:**

-   Languages must exist in Assets before they can be added to a workspace.
-   Each workspace can enable a different set of languages based on its requirements.
-   Assets support localization only for languages enabled in the active workspace.
-   Changes to workspace languages apply only to that workspace and do not affect other workspaces or spaces.
