---
title: "[Variants CMS] - Edit an Entry Variant"
description: How to edit an entry variant in Contentstack and where to find the API request for updating an entry variant.
url: https://www.contentstack.com/docs/headless-cms/edit-an-entry-variant
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Variants CMS] - Edit an Entry Variant

This page explains how to edit an entry variant in Contentstack so you can update personalized content for specific user segments. It is intended for content managers and developers who work with Entry Variants and need to make changes either in the UI or via the Content Management API.

## Edit an Entry Variant

**Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

Editing entry variants in Contentstack allows you to update personalized content tailored for specific user segments. This process ensures that your content remains relevant and engaging for your audience.

To edit an entry variant, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:

- Navigate to the desired [stack](/docs/developers/set-up-stack/about-stack), then click the **Entries **icon in the left navigation panel and select an existing entry variant.
- Within the entry editor for an entry variant, only the fields marked with the **Variant Field **tag are exclusive to the entry variant. Other field values are inherited from the latest version of the base entry.**Note: **Only the fields you modify within the entry variant will be saved; other field values will remain inherited from the base entry.
- Modify the fields as needed. Make sure your changes align with the intended personalization for the user segment targeted by this variant.
- Once you are satisfied with the edits, click the **Save **button to apply the changes to the entry variant.

By following these steps, you can efficiently edit entry variants in Contentstack, ensuring your personalized content remains accurate and relevant to your target audience.

## API Reference

To edit an entry variant via API, refer to the [Update Entry Variant](/docs/developers/apis/content-management-api#update-entry-variant) API requests.

## Common questions

**Q: Which fields can I edit in an entry variant?**  
A: Only the fields marked with the **Variant Field **tag are exclusive to the entry variant; other field values are inherited from the latest version of the base entry.

**Q: What happens to fields I don’t modify in the entry variant?**  
A: **Note: **Only the fields you modify within the entry variant will be saved; other field values will remain inherited from the base entry.

**Q: Can I edit an entry variant using an API instead of the UI?**  
A: Yes. Refer to the [Update Entry Variant](/docs/developers/apis/content-management-api#update-entry-variant) API requests.

**Q: What if I don’t have access to Entry Variants?**  
A: **Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.