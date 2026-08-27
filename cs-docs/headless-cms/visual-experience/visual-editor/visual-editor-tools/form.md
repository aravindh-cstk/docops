---
title: "Form"
description: "Edit entries in real time using the Form panel in Visual Editor for a seamless, contextual content editing experience."
url: /headless-cms/form
uid: blta49f14db370e9944
---

# Form

## Form

The **Form** panel in Visual Editor lets you **edit entries**, **manage versions**, and **perform entry-level actions**, without leaving your page. Changes you make reflect instantly on the canvas for a faster, more intuitive editing experience.

You can make quick updates or manage an entry’s full lifecycle without switching contexts.

## Key Features

The Form panel includes several capabilities that help you edit efficiently without leaving the context of your page.

-   **Breadcrumb Navigation**: Navigate between parent and referenced entries using the entry breadcrumb trail without leaving the page.
-   **Inline Reference Editing**: Edit referenced entries directly within the Form panel without opening a new tab for uninterrupted content updates.
-   **Real-Time Preview Sync**: Instantly view changes on the canvas as you edit, ensuring what you see accurately reflects what will be published.
-   **Entry Management Tools**: Import, export, unlocalize, version, and delete entries, directlyall from within the Form panel.

To access the Form panel, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Navigate to your [stack](/docs/headless-cms/about-stack) and select **Visual Experience**.
2.  Click **Editor** in the bottom pill menu.
3.  Use **URL bar** to locate the page you want to update the content.
4.  In the right sidebar, click the **Form** icon to open the entry editor.

    **Note:** If an entry is in a workflow stage that restricts edit access, you may not be able to modify its fields in the Form panel. You can use the **Request Edit Access** option in the Form panel to request editing permissions. Once submitted, the request remains pending until it is reviewed and approved.

5.  Edit the fields in the **Form** panel to see real-time changes on the Visual Editor canvas.
6.  Alternatively, click any field in the canvas. Then, in the toolbar, select **Form** to open that field in the Form panel.

    **Tip:** You can also use field modifiers directly on the canvas for supported fields without opening the Form panel.

7.  Click the “Open in editor” icon next to the page title to open the full entry editor in a new tab.

    ![Visual_Editor_Open_in_New_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc96ff88ef06b83c3/6992eb32db043d0008252367/Visual_Editor_Open_in_New_Tab.png)


## Manage Entries from the Form Panel

Once the Form panel is open, you can perform the following entry-level actions directly from within the panel.

1.  ### Import Entry

    Upload content into an entry using a JSON file.

    **To import an entry**:

    1.  Open the entry in the Form panel.
    2.  Click the **entry actions** menu.
    3.  Select **Import** and upload the JSON file.

    **Note:** The imported file must match the content type schema. A new version is automatically created after import.

    ![Visual_Editor_Import_Entry.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcdd3a0f357ff05bd/6992ebdfc9b89800084dba8f/Visual_Editor_Import_Entry.gif)
2.  ### Export Entry

    Download the current entry as a JSON file for backup or reuse.

    **To export an entry:**

    1.  Navigate to the entry in the Form panel.
    2.  Click the **entry actions** menu.
    3.  Select **Export**.

    The exported file reflects the selected locale and entry version.

    ![Visual_Editor_Export_Entry.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt233df25b463fa6a0/6992ec3fdb043d000825236b/Visual_Editor_Export_Entry.gif)
3.  ### Add to Release

    Add an entry to a release directly from the Form panel, without leaving the page or switching contexts.

    **To add an entry to a release**:

    1.  Open the entry in the **Form** panel.
    2.  Click the **entry actions** menu.
    3.  Select **Add to Release**.
    4.  In the modal that appears, select an existing **Release** or create a new one.
    5.  Select one or more **Locales**.
    6.  Click **Add** to confirm.

    ![Add_a_Specific_Entry_to_a_Release.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd387c303b9d6b7d1/69af08232b01730008d5f1f8/Add_a_Specific_Entry_to_a_Release.gif)

    A confirmation message will indicate the request is in progress. You can click **View Release** to track its status.

    **Tip:** Only entries that meet publishing criteria will be available to add. A green checkmark indicates readiness.

4.  ### Rename Entry Versions

    Make version history easier to manage by renaming versions.

    **To rename a version**:

    1.  Open the Form panel.
    2.  Click the **Version** dropdown.
    3.  Hover over a version and click the **pencil** icon.
    4.  Enter a new name and save.

    **Note:** Renaming a version does not modify entry content.

    ![Visual_Editor_Rename_Entry_Versions.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcda5196004729211/6992ecab73e3df0008d2c802/Visual_Editor_Rename_Entry_Versions.gif)
5.  ### Unlocalize an Entry

    Remove locale-specific content and revert to inherited content.

    **To unlocalize an entry**:

    1.  Open a localized entry in the Form panel.
    2.  Select **Unlocalize** from the entry actions menu.

    **Warning:** Unlocalizing permanently removes localized content and cannot be undone.

    ![Visual_Editor_Unlocalize_an_Entry.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c0c8669be5fa364/6992ed5960af9b0008db4e8c/Visual_Editor_Unlocalize_an_Entry.gif)
6.  ### Delete an Entry

    Remove an entry directly from Visual Editor.

    **To delete an entry**:

    1.  Open the entry in the Form panel.
    2.  Open the **entry actions** menu.
    3.  Select **Delete** and confirm.

    **Note:** Entry deletion follows the same permission rules as the entry editor.

    ![Visual_Editor_Delete_an_Entry.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f6560f3d4287062/6992edd8ab60c900082f1356/Visual_Editor_Delete_an_Entry.gif)

The Form panel combines editing, versioning, and localization into one unified workspace, helping you manage entries faster and preview changes as you go.
