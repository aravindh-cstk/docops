---
title: "Files by Agent OS"
description: "Use the Files by Agent OS connector to export stack content into a downloadable file and deliver it via any third party application. "
url: /agent-os/files-by-agent-os
---

# Files by Agent OS

## Files by Agent OS

Agents and automations often need to hand back more than a short message: a list of low-stock inventory, a summary report, a set of records pulled from a system.

Instead of sending that data as a message, the **Files by Agent OS** connector lets an agent or automation export it, whether that's content from your stack or any data produced during its run, into a proper file (CSV, JSON, TXT, or Markdown) and share a secure download link instead.

The link only works for people signed in to your organization, and it's automatically cleaned up after a set period of time.

With the **Files by Agent OS** connector, you can:

-   Export content (for example, all content types in a stack, or any other data produced during an automation/agent run) into a file.
-   Automatically deliver the file via email, Mailgun, or as a Contentstack asset, with a downloadable link.
-   Control how long the generated file remains available for download.

**Note:** The **Files by Agent OS** connector currently supports **export** **only**. Importing data through this connector is not supported.

## Before You Begin

-   Create a File is **opt-in**. It only works for agents or automations where it has been explicitly added as a tool/connector; it is not included by default.
-   The person setting up the agent or automation decides when a file should be created, based on what the agent or automation is doing.

## Set Up the Files by Agent OS Connector

Perform the following steps to set up the **Files by Agent OS** connector in an automation:

1.  Click **Configure Action Step** in the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Files by Agent OS** connector.![Files_Connector_in_Automations.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7d71480d09e44a74/ad953bc62e4ed126ecc73cbb/Files_Connector_in_Automations.png?locale=en-us)
4.  Under **Choose an Action**, select the **Create a File** action.![Create_a_File_Action.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am5a27c39ecefb1a9d/0a6dbd728d9bad875c4a352b/Create_a_File_Action.png?locale=en-us)
5.  On the **Configure Action** page, enter the following details:
    1.  **Data (required):** Enter or map the data you want written to the file (for example, the output of a previous step, such as all content types fetched for a stack).
    2.  **File name (required)**: Enter a name for the generated file, including its extension (for example, export.md). The extension determines the file format (CSV, JSON, TXT, or MD).

**Note:** The **Create a File action** only generates the file and its download link. To deliver the file to a user, add a follow-up step using a delivery connector, for example, Email (to send the file or link by email) and reference the URL (or other fields) from the output of the previous **Create a File** step.

![Create_A_File_Fields.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am07ee9c576a5b476e/e72a42c62e39a9f5e9b72925/Create_A_File_Fields.png?locale=en-us)

1.  Once done, click **Proceed**.
2.  Click **Test Action** to test the configured action.
3.  On successful configuration, you see the output, which includes a download link for the generated file. Click **Save and Exit**.![Save_Exit_Button.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amd97c6a4e1a310387/0f4b7163bcb88dcdbca653fc/Save_Exit_Button.png?locale=en-us)

## Set Up the Files by Agent Tools in Agents

Follow the steps to add the tool:

1.  Open the agent you want to add file creation to, in the builder.
2.  In the **Tools** section, click **Add Tool**.  
    ![Files_Tool_in_Agent.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amc5dd280414c9842a/92a19f0ef308c9c5452c63e7/Files_Tool_in_Agent.png?locale=en-us)
3.  From the list, click **Files**, enter the **Data** and the **File name** similar to automation.
4.  Save your changes.![Save_Exit_Button.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amd97c6a4e1a310387/0f4b7163bcb88dcdbca653fc/Save_Exit_Button.png?locale=en-us)

Once added, the agent can generate a file as part of its response, any time it runs.

## Supported File Formats

| File extension | Format |
| --- | --- |
| .csv | Comma-separated values (spreadsheet-style data) |
| .json | JSON |
| .txt | Plain text |
| .md | Markdown |

**Note:** If the data does not match the requested format (for example, plain text data is passed in but the filename ends in .csv), the file is not created and the agent/automation reports that the export failed. Every time the agent or automation runs and creates a file, it is a brand-new file: nothing is ever overwritten. Each run has its own file, tied to that specific execution.

## Sharing the File

Create a File itself only creates the file and a download link; it doesn't send the file anywhere on its own. To actually deliver it to people, pair it with a delivery step using an **"Attach File / Image by URL"** field to pass the file along:

**Examples**:

-   **Email**: attach the file to an email sent through the built-in Email connector.
-   **Mailgun**: attach the file to an email sent through a connected Mailgun account.
-   **Contentstack**: use the file to create a new asset, or update an existing one, in your Contentstack organization.

**Note:** **Sending** files through **Slack** is **not yet** available for everyone.

## Viewing and Downloading Files from Execution Log

Every time an agent or automation runs and creates a file, you can find that file from the **execution details** view for that run.

Look for the **File** step in the execution details. Instead of raw output, you'll see a **file card** with the file's information.

**While the file is still available**, the card shows:

-   The file name and its format (CSV, JSON, TXT, or Markdown)
-   The file size
-   How much time is left before the file expires (for example, "Expires in 23h 41m")
-   A **Download** button
-   A **Copy link** button, to copy the download link

Clicking **Download** saves the file directly to your device, using its original file name.

**Once the file has expired**, the card instead shows:

-   The file name, struck through
-   A **Link expired** label
-   Disabled Download and Copy link buttons
-   A note letting you know the export has expired, the file and download link are no longer available, and you'll need to re-run the agent or automation to generate a fresh one

**Note:** The download link only works for people who are signed in to the same organization the file belongs to. It isn't a public link.

## File Retention

-   **Default:** 1 day.
-   **Editable by:** Super Admins only. This window can be extended for enterprise customers depending on your organization's plan; there's currently no option to set a custom expiry time yourself.
-   **Expiry shown in:** the expiry field in the Create a File action's output.
-   **Download link access:** restricted to users with access to the automation/agent that generated it, not a public link.
-   Once a file has expired, simply re-run the agent or automation to generate a new one.

## Good to Know

-   **One file per run:** Every time an agent or automation creates a file, it's a brand-new file tied to that run; nothing gets overwritten.
-   **Files have a size limit:** By default, files can be up to **5 MB**; this can be raised for enterprise customers. If the data is too large to fit within the limit, the export fails and the agent lets you know.
-   **Downloads only, no in-app preview:** You can view a file's details (name, format, size) from the execution details view, but to see its contents you must download it.
-   **Export only:** There is currently no option to import data using this connector.
-   **Not yet supported:** Exporting to Excel/XLSX or PDF format, setting a custom expiry time, previewing files without downloading, and a dedicated file browser across all your exports. These may be added in future updates.
