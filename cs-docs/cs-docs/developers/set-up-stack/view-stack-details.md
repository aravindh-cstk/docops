---
title: "[Set Up Stack] - View Stack Details"
description: Access and manage stack details including configuration settings, API credentials (stack UID), and user permissions.
url: https://www.contentstack.com/docs/headless-cms/view-stack-details
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Stack] - View Stack Details

This page explains how to access and review your Contentstack stack details in the UI (including configuration settings, API credentials/stack UID, and permissions), and where to find the last modified timestamp for stack settings; it is intended for developers and stack administrators who need to manage or audit stack configuration.

### Item 1

#### Article section

##### Heading

View Stack Details

##### Content

Accessing stack details helps you manage configuration settings, authentication credentials (stack UID), and user permissions efficiently.

To view your stack details, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- In the **General** section, you can view or update the following details:**Name** of your stack
- The **description** provided for the stack
- The **Stack Owner Email** in read-only mode
- The **Appearance** section allows you to manage the visual identification of your stack. You can select a predefined color under **Stack Color** to visually identify your stack across the interface.**Note**: If no color is selected, a default color is applied.
- In the **API Credentials** section, view the stack **API Key** (stack UID) used for authentication and API requests.
- If you are the stack [Owner](https://www.contentstack.com/docs/developers/invite-users-and-assign-roles/types-of-roles#owner), you can [delete the stack](/docs/developers/organization/organization-stacks#delete-a-stack) or [transfer ownership](/docs/developers/set-up-stack/transfer-stack-ownership). Other users can only [leave the stack](/docs/developers/set-up-stack/leave-a-stack).

Accessing these settings allows you to manage stack configuration, authentication credentials, and user permissions effectively.

## View Last Modified Timestamp for Stack Settings
The last modified timestamp shows when the stack settings were most recently updated, helping you track changes and maintain auditability.

To view the last modified timestamp of a stack, perform the following steps:
- Click the “Stacks” icon in the top-left corner of the screen.
- This displays all accessible stack cards. Each card displays the **Last Modified** timestamp, which indicates when a user last made changes to the stack settings.

**Note:** The last modified timestamp reflects changes to stack settings only. It does not update when content within the stack is changed.

## API Reference
To view stack details via API, refer to the [Get Single Stack](/docs/developers/apis/content-management-api?_gl=1*81q8tb*_gcl_au*MTE2NTg1NDE5Ny4xNzQ4NDE1MjI1#get-a-single-stack) request.

## Common questions

### Where do I find the stack API Key (stack UID)?
In the stack “Settings” area, under the **API Credentials** section, view the stack **API Key** (stack UID).

### Who can delete a stack or transfer ownership?
If you are the stack **Owner**, you can delete the stack or transfer ownership; other users can only leave the stack.

### Does the “Last Modified” timestamp change when content changes?
No. The last modified timestamp reflects changes to stack settings only and does not update when content within the stack is changed.

### Can I view stack details via API?
Yes. Refer to the **Get Single Stack** request in the API Reference section.