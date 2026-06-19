---
title: "[Set Up Your Project] - Create and Apply Labels"
description: Create and apply labels to content types in Contentstack, including branch-specific behavior and related API references.
url: https://www.contentstack.com/docs/headless-cms/create-and-apply-labels
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - Create and Apply Labels

This page explains how to create and apply labels to content types using the Content Type Builder in Contentstack, including important branch-specific behavior. It is intended for developers and content modelers who manage content types and need to organize them with labels, and should be used when creating or editing a content type in a specific branch.

## Create and Apply Labels

When you [create](/docs/developers/create-content-types/create-a-content-type) or [edit](/docs/developers/create-content-types/edit-a-content-type) a [content type](/docs/developers/create-content-types/about-content-types), the Content Type Builder page displays an **Apply Label** option at the top-right corner. Clicking this option displays a list of existing labels, if available.

**Note:** Labels are branch-specific. Labels created in one branch, such as the development branch, can only be applied to content types within that same branch. For more details, refer to the [Branch-specific Modules](/docs/developers/branches/branch-specific-modules) document.

To create a new label, log in to your [Contentstack account](https://app.contentstack.com/#!/stacks) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack), click the “Content Models” icon on the left navigation panel, and open the **Content Type Builder** page for the content type to which you want to apply the label.
- Click the **Apply Label** dropdown on the top-right corner to apply an existing label or click **+ New Label**.
- In the dialog box that appears, fill in the following details:**Name** (required): Provide a suitable name for the label.
- **Nest Label Under** (optional): If you want to nest this label under an existing label, select it from the dropdown. Leave this blank if creating a standalone label.
- Save the label using one of these options:**Create:** Saves the label for future use.
- **Create & Apply:** Saves the label and immediately applies it to the content type.

## API Reference

To create and apply labels via API, refer to the following API requests:
- [Add label](/docs/developers/apis/content-management-api#add-label)
- [Update label](/docs/developers/apis/content-management-api#update-label)

## Common questions

### Are labels shared across branches?
No. **Note:** Labels are branch-specific. Labels created in one branch, such as the development branch, can only be applied to content types within that same branch.

### Where do I apply a label in the UI?
In the Content Type Builder page, use the **Apply Label** option at the top-right corner.

### Can I create a label and apply it immediately?
Yes. Use **Create & Apply:** Saves the label and immediately applies it to the content type.

### Which API endpoints are relevant for labels?
Use the API requests listed under **API Reference**: [Add label](/docs/developers/apis/content-management-api#add-label) and [Update label](/docs/developers/apis/content-management-api#update-label).