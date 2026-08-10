---
title: "Deleted Field Still Appearing in API Responses After Branch Schema Update"
description: "Deleted Field Still Appearing in API Responses After Branch Schema Update"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/086-deleted-field-still-appearing-in-api-responses-after-branch-schema-update
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs64858258e7512496
---

# Deleted Field Still Appearing in API Responses After Branch Schema Update

A field deleted from a content type in one branch (for example, main) continues to appear in API responses when querying other branches (for example, production) or when the entry is fetched directly.

**Root Cause**

Content type schema changes, including field deletions, are branch-specific in Contentstack. Deleting a field in one branch does not automatically remove it from other branches. The field and its data persist in branches where the schema has not been updated, so the API continues to return the field for those branches.

**Resolution**

1.  Apply or merge the schema change (field deletion) to all branches where the field should be removed.
2.  After updating the schema in each branch, verify the content type no longer includes the deleted field.
3.  Re-run the API request against each branch and confirm the deleted field is no longer present in the response.

After updating the schema across all relevant branches, execute the API call and confirm the deleted field does not appear in any branch’s response.
