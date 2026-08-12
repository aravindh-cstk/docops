---
title: "include[] Path Broken After Content Type Schema Update"
description: "include[] Path Broken After Content Type Schema Update"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/046-include-path-broken-after-content-type-schema-update
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs895bc94647973885
---

# include[] Path Broken After Content Type Schema Update

An include\[\] parameter that correctly resolved a nested reference stops working after a content type schema update. The API returns incomplete data or ignores the include path entirely.

**Root Cause**

The include\[\] path is evaluated against the current content type schema. When a schema is updated - for example, a reference field is moved, renamed, or restructured within a group or modular block - the include path that previously worked no longer matches the updated schema. The API silently ignores include paths that do not resolve to a valid reference field.

**Resolution**

1.  After a content type schema update, review all include\[\] paths in the application against the updated schema.
2.  Fetch the current content type schema: GET /v3/content\_types/{uid} to inspect the field UID structure and confirm the correct path.
3.  Update the include\[\] path to reflect the new field structure. For example, if a reference field moved from section\_config.items.ref to section\_config.carousel.items.ref, update the path accordingly.
4.  Test the updated include\[\] path with a single entry before deploying the change to production.

After updating the include path to match the current schema, confirm the referenced entry data is returned in the API response.
