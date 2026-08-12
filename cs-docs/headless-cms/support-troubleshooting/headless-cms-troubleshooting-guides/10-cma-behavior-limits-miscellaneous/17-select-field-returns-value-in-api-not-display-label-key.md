---
title: "Select Field Returns Value in API - Not Display Label (Key)"
description: "Select Field Returns Value in API - Not Display Label (Key)"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/17-select-field-returns-value-in-api-not-display-label-key
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs6e20d0fa4695cb55
---

# Select Field Returns Value in API - Not Display Label (Key)

A Select field configured with key-value pairs (for example, display label ‘New York’, stored value ‘NY’) returns only the value (‘NY’) in the Delivery API response. The frontend needs to display the human-readable label.

**Root Cause**

This is expected behavior. In Contentstack, when a Select field uses key-value pairs, the CMS editor UI displays the key (the human-readable label) for editorial ease. However, the API response returns the value (the stored string) - not the label. This design allows the stored value to be short, consistent, and suitable for programmatic use, while the label is for display purposes only.

**Resolution**

1.  Fetch the content type schema via the CMA: GET /v3/content\_types/{uid} and retrieve the enum options array for the Select field, which contains both key and value pairs.
2.  Build a lookup map on the frontend: { ‘NY’: ‘New York’, ‘CA’: ‘California’, … }
3.  Use the lookup map to resolve the value returned by the API to the corresponding display label before rendering.
4.  Cache the content type schema lookup map at application start to avoid fetching it on every request.

After building the lookup map, verify that API values are correctly resolved to their display labels in the application UI.

**Note:** The Sync API follows the same behavior. When consuming the Sync API (via stack.sync() in the SDK), multi-select Enum fields with advanced key-value choices also return only the raw value string(s), not the full key-value pair object. For example, a field with choices { key: ‘Growth Seller’, value: ‘GROWTH’ } returns ‘GROWTH’ (single select) or \[‘GROWTH’, ‘STARTER’\] (multi-select) in the sync payload. There is no SDK flag or include option to retrieve the display label alongside the value in sync responses. Use the same content type schema lookup map approach to resolve values to display labels in the sync consumer.
