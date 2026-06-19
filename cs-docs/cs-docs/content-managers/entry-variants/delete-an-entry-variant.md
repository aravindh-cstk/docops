---
title: "[Variants CMS] - Delete an Entry Variant"
description: Instructions for deleting an entry variant in Contentstack, including UI steps and API reference.
url: https://www.contentstack.com/docs/headless-cms/delete-an-entry-variant
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-26
---

# [Variants CMS] - Delete an Entry Variant

This page explains how to delete an entry variant in Contentstack, including the steps in the Contentstack UI and where to find the API request for deleting an entry variant. It is intended for content managers and developers who manage personalized content variants and need to remove variants that are no longer needed.

## Delete an Entry Variant

**Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

Deleting an entry variant in Contentstack allows you to remove specific personalized versions of your content that are no longer needed.

To delete an entry variant, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:
- Navigate to the desired [stack](/docs/developers/set-up-stack/about-stack), then click the **Entries **icon in the left navigation panel and select an existing entry variant.
- Click the horizontal ellipsis at the bottom of the entry editor and click the **Delete **button.
- In the **Delete Entry Variant** modal that appears, under **Select Language(s)**, select the locale(s) in which you want to delete the entry.
- Confirm by clicking the **Delete **button.**Note: **Once deleted, you cannot recover the entry variant.

By following these steps, you can efficiently delete entry variants in Contentstack, helping maintain the relevancy and accuracy of your content.

## API Reference

To delete an entry variant via API, refer to the [Delete Entry Variant](/docs/developers/apis/content-management-api#delete-entry-variant) API requests.

## Common questions

### Can I recover an entry variant after deleting it?
No. **Note: **Once deleted, you cannot recover the entry variant.

### Where do I delete an entry variant in the UI?
Click the horizontal ellipsis at the bottom of the entry editor and click the **Delete **button.

### Can I delete an entry variant for specific locales only?
Yes. In the **Delete Entry Variant** modal, under **Select Language(s)**, select the locale(s) in which you want to delete the entry.

### Is there an API to delete an entry variant?
Yes. Refer to the [Delete Entry Variant](/docs/developers/apis/content-management-api#delete-entry-variant) API requests.