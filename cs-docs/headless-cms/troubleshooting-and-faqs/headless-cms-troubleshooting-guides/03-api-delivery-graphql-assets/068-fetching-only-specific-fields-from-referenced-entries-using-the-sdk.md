---
title: "Fetching Only Specific Fields from Referenced Entries Using the SDK"
description: "Fetching Only Specific Fields from Referenced Entries Using the SDK"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/068-fetching-only-specific-fields-from-referenced-entries-using-the-sdk
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cscf6238cd6a5eb71a
---

# Fetching Only Specific Fields from Referenced Entries Using the SDK

When fetching entries through the SDK using .includeReference(), the full content of referenced entries is returned. There is no apparent way to limit the response to only specific fields within referenced entries, leading to oversized responses.

**Root Cause**

The SDK’s .includeReference() method fetches the complete referenced entry by default. To limit the fields returned for referenced entries, the .only() method must be used in combination with field-specific parameters to specify which fields to include in the response.

**Resolution**

1.  Chain .only() after .includeReference() in the SDK query to specify the fields required from the referenced entry.
2.  Pass the reference field name and an array of the desired sub-fields as parameters to .only().
3.  Example structure: Query.includeReference(‘author’).only(‘author’, \[‘name’, ‘bio’\]).find()
4.  Test the query to confirm only the specified fields are returned within the referenced entry object.

After implementing .only(), execute the query and verify that referenced entries in the response contain only the specified fields, reducing the response payload size.
