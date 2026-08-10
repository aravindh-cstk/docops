---
title: "Restore Deleted Content"
description: "Restore deleted stacks, entries, assets, or content types by contacting Contentstack Support. Provide stack details, UID, and deletion time."
url: /headless-cms/restore-deleted-content
---

# Restore Deleted Content

## Restore Deleted Content

**Note:** By default, the [Trash](/docs/headless-cms/about-trash) feature stores deleted content such as Content Types, Entries, and Assets for **14 days** before it is permanently deleted. If this period has passed, contact the [Customer Support](mailto:support@contentstack.com) team with the necessary details for restoration.

If you have accidentally deleted stacks, entries, assets, or content types, the Contentstack [Customer Support](mailto:support@contentstack.com) team can assist with restoring the data. To process your request, you will need to provide specific details about the deleted modules.

**Note:** Only a **Stack** [**Owner**](/docs/headless-cms/types-of-roles#owner)**/**[**Admin**](/docs/headless-cms/types-of-roles#admin) or **Organization** [**Owner**](/docs/headless-cms/types-of-roles#owner)**/**[**Admin**](/docs/headless-cms/types-of-roles#admin) can submit or approve requests to restore content.

## Stacks

To restore a deleted stack, provide the following details:

-   **Stack API Key or Stack Owner/Admin Email Address:** The API key of the stack or the email address of its owner/admin.
-   **Stack Name:** The name of the deleted stack.
-   **Branch Name:** The name of the branch of the deleted stack.

**Note:** Restoring a stack may take approximately **10 business days**, depending on its size and resource availability.

## Content Types

To restore deleted content types, provide the following details:

-   **Stack API Key:** The API key of the stack containing the deleted content type.
-   **Deletion Time:** The date and time the content type was deleted (available in the stack’s [audit log](/docs/headless-cms/monitor-stack-activities-in-audit-log)).
-   **Branch Name:** The name of the branch containing the deleted content type(s).

**Note:** When restoring a content type, you can choose to restore it either with or without the entries that were deleted along with it.

## Entries

To recover deleted entries, provide the following details:

-   **Stack API Key:** The API key of the stack containing the deleted entries.
-   **Content Type UID:** The UID of the content type associated with the deleted entries (available in the stack’s [audit log](/docs/headless-cms/monitor-stack-activities-in-audit-log)).
-   **Deletion Time:** The date and time the entries were deleted (available in the stack’s [audit log](/docs/headless-cms/monitor-stack-activities-in-audit-log)).
-   **Branch Name:** The name of the branch containing the deleted entries.

**Warning:** The deletion time is necessary to restore entries associated with the content type. The published status of the deleted entries cannot be retrieved when restoring them.

## Assets

To restore deleted assets, provide the following details:

-   **Stack API Key:** The API key of the stack containing the deleted asset(s).
-   **Deletion Time:** The date and time the assets were deleted (available in the stack’s [audit log](/docs/headless-cms/monitor-stack-activities-in-audit-log)).
-   **Branch Name:** The name of the branch containing the deleted asset(s).

**Warning:** The published status of the deleted assets cannot be retrieved when restoring them.

**Note:** Once the request is received, the specified content will be restored within **2 business days**. The restored content will appear as the latest version and will not retain its published status.
