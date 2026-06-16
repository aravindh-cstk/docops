---
title: "[Taxonomy] - Limitations for Taxonomy"
description: Limitations for Taxonomy
url: https://www.contentstack.com/docs/developers/taxonomy/limitations-for-taxonomy
product: Contentstack
doc_type: reference
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-05-18
---

# [Taxonomy] - Limitations for Taxonomy

This page lists the limitations and constraints for the Taxonomy feature in Contentstack. It is intended for developers and administrators planning taxonomy usage, configuration, and publishing behavior, and should be referenced when designing content models and permission/publishing workflows.

## Limitations for Taxonomy

- The taxonomy feature is plan-based and accessible exclusively with the activation of the new CDA plan. Please contact the [support](mailto:support@contentstack.com) team to get this activated for your organization.
- Taxonomy is a global module, and not specific to any branch.
- The maximum number of taxonomies allowed per stack will depend on the product tier.
- The maximum character length for a taxonomy name and UID is **50** characters.
- The maximum character length for a taxonomy description is **255** characters.
- The maximum number of terms allowed per taxonomy is **10000**.
- The maximum number of terms allowed per entry is **25**.
- The maximum depth of terms allowed is **10** levels.
- The maximum character length for a term name and UID is **50** characters.
- The taxonomy and term UIDs cannot be edited, once they are saved.
- The UID for a term is unique within a taxonomy but not unique within a stack.
- You can include and configure multiple taxonomies within a single taxonomy field in a content type. However, adding multiple taxonomy fields is not supported.
- The taxonomy field cannot be added within modular blocks or group fields.
- The UID for the taxonomy field is "taxonomies" within content types and is now a restricted keyword, which cannot be used for any other field.
- Uncategorized entries (entries not assigned any term) will not be visible to users with taxonomy-based permissions.

## Publishing-related Limitations

- **Publishing applies to the entire taxonomy**. You cannot publish individual terms.
- **No versioning** or **rollback** is supported for taxonomy publishing.
- Each publish action **overwrites** the previously published taxonomy for the selected environment and locale.
- Only **published taxonomies** are available through the Content Delivery API (CDA).
- Entries can reference **unpublished taxonomies**, but those references will not be resolved on delivery.
- Although taxonomies are global, publishing requires **branch selection** to define locale availability and fallback hierarchy.

## Common questions

### Can I publish individual terms within a taxonomy?
No. **Publishing applies to the entire taxonomy**. You cannot publish individual terms.

### Are unpublished taxonomies available through the Content Delivery API (CDA)?
No. Only **published taxonomies** are available through the Content Delivery API (CDA).

### Can I add more than one taxonomy field to a content type?
No. You can include and configure multiple taxonomies within a single taxonomy field in a content type. However, adding multiple taxonomy fields is not supported.

### Can taxonomy and term UIDs be edited after saving?
No. The taxonomy and term UIDs cannot be edited, once they are saved.