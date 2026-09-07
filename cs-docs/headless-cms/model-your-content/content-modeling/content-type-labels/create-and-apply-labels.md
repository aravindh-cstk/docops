---
title: "Create and Apply Labels"
description: "Learn how to create and apply branch-specific labels in Contentstack. Organize content types using nested labels for streamlined management."
url: /headless-cms/create-and-apply-labels
uid: blt9cb0d7cadf14c14a
---

# Create and Apply Labels

## Create and Apply Labels

When you [create](/docs/headless-cms/create-a-content-type) or [edit](/docs/headless-cms/edit-a-content-type) a [content type](/docs/headless-cms/about-content-types), the Content Type Builder page displays an **Apply Label** option at the top-right corner. Clicking this option displays a list of existing labels, if available.

**Note:** Labels are branch-specific. Labels created in one branch, such as the development branch, can only be applied to content types within that same branch. For more details, refer to the [Branch-specific Modules](/docs/headless-cms/branch-specific-modules) document.

To create a new label, log in to your [Contentstack account](https://app.contentstack.com/#!/stacks) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack), click the “Content Models” icon on the left navigation panel, and open the **Content Type Builder** page for the content type to which you want to apply the label.
2.  Click the **Apply Label** dropdown on the top-right corner to apply an existing label or click **\+ New Label**.
3.  In the dialog box that appears, fill in the following details:
    1.  **Name** (required): Provide a suitable name for the label.
    2.  **Nest Label Under** (optional): If you want to nest this label under an existing label, select it from the dropdown. Leave this blank if creating a standalone label.
4.  Save the label using one of these options:
    1.  **Create:** Saves the label for future use.
    2.  **Create & Apply:** Saves the label and immediately applies it to the content type.

## API Reference

To create and apply labels via API, refer to the following API requests:

-   [Add label](/docs/developers/apis/content-management-api/labels#add-label)
-   [Update label](/docs/developers/apis/content-management-api/labels#update-label)
