---
title: "[Create Tokens] - Delete a Delivery Token"
description: Instructions for deleting a Delivery Token (and its associated Preview Token) in Contentstack, plus how to delete only the Preview Token and related API references.
url: https://www.contentstack.com/docs/headless-cms/delete-a-delivery-token
product: Contentstack
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Create Tokens] - Delete a Delivery Token

This page explains how to delete a Delivery Token in Contentstack (and what happens when you do), how to delete only the associated Preview Token, and where to find the corresponding API requests. It is intended for developers and administrators managing token security and access for a stack.

## Delete a Delivery Token

Contentstack allows you to remove unnecessary [Delivery Tokens](/docs/developers/create-tokens/about-delivery-tokens) and [Preview Tokens](https://www.contentstack.com/docs/developers/create-tokens/about-delivery-tokens#understanding-preview-tokens) to improve security and organization.

**Warning:** Deleting a Delivery Token will end all sessions associated with it.

To delete a Delivery Token, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](/docs/developers/set-up-stack/about-stack), and perform the following steps:
- Click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- Click **Tokens** in the settings panel.
- On the **Delivery Tokens** tab, click the vertical ellipsis in the **Actions** column and select **Delete**.**Tip:** If you are on the [Management Tokens](/docs/developers/create-tokens/about-management-tokens) tab, press “Alt + O” (for Windows users) or “Option + O” (for Mac users) to navigate to the Delivery Tokens tab.
- Confirm your action in the **Delete Delivery Token** modal.

Once done, the Delivery Token and its associated Preview Token are deleted.

## Delete Only the Preview Token

To remove only the Preview Token without deleting the Delivery Token, perform the following steps:
- Select the Delivery Token associated with the Preview Token you want to delete.
- Click the **Delete** icon beside the Preview Token.
- Confirm your action in the **Delete Preview Token** modal.

## API Reference

- To delete a Delivery Token via API, refer to the [Delete Delivery Token](/docs/developers/apis/content-management-api#delete-delivery-token) API request.
- To delete a Preview Token via API, refer to the [Delete Preview Token](/docs/developers/apis/content-management-api#delete-preview-token) API request.

## Common questions

**Q: What happens to sessions when I delete a Delivery Token?**  
A: **Warning:** Deleting a Delivery Token will end all sessions associated with it.

**Q: Does deleting a Delivery Token also delete its Preview Token?**  
A: Once done, the Delivery Token and its associated Preview Token are deleted.

**Q: Can I delete only the Preview Token and keep the Delivery Token?**  
A: Yes. Use the steps in **Delete Only the Preview Token** to remove only the Preview Token without deleting the Delivery Token.

**Q: Where can I find the API requests to delete tokens?**  
A: See **API Reference** for the [Delete Delivery Token](/docs/developers/apis/content-management-api#delete-delivery-token) and [Delete Preview Token](/docs/developers/apis/content-management-api#delete-preview-token) API requests.