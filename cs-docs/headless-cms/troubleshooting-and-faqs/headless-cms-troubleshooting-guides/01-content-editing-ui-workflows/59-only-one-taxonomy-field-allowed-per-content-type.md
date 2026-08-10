---
title: "Only One Taxonomy Field Allowed Per Content Type"
description: "Only One Taxonomy Field Allowed Per Content Type"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/59-only-one-taxonomy-field-allowed-per-content-type
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs6a7ff5fc6b6b8c92
---

# Only One Taxonomy Field Allowed Per Content Type

A customer asks whether it is possible to add more than one taxonomy field to a single content type. They want to classify entries using multiple independent taxonomy structures (for example, one for Topic and one for Region).

**Root Cause**

Contentstack currently supports only one taxonomy field per content type. The taxonomy field is treated similarly to the Tags or URL field - it is a classification field with a single instance limit per content type. This is a current platform constraint.

**Resolution**

As a workaround:

1.  Use taxonomy\_uid within the single taxonomy field to differentiate between multiple taxonomy structures. The field can contain terms from multiple taxonomies, distinguished by their taxonomy\_uid in the API response.
2.  Alternatively, use a Reference field pointing to a dedicated ‘Tag Node’ content type for additional classification axes where strict taxonomy tree behavior is not required.
3.  Contact Contentstack Support to submit an enhancement request for multiple taxonomy field support per content type.

After implementing the workaround, verify that entries can be classified across multiple taxonomies using the single taxonomy field with multiple taxonomy\_uid values.
