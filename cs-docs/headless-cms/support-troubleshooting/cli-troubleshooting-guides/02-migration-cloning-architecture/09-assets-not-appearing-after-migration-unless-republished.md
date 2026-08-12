---
title: "Assets Not Appearing After Migration Unless Republished"
description: "Assets Not Appearing After Migration Unless Republished"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/02-migration-cloning-architecture/09-assets-not-appearing-after-migration-unless-republished
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: cs01a519e0a363f623
---

# Assets Not Appearing After Migration Unless Republished

After migrating content between branches, the customer reported that assets were not visible on the frontend unless entries were manually republished. This created the impression that publishing was required post-migration for assets to render correctly.

**Root Cause**

This was not a universal publishing requirement from Contentstack. Based on the case notes, the customer’s workflow assumed that migrated entries must be republished for assets to become available.

Support confirmed that **publishing entries was not required** for assets to be usable post-migration **in their scenario**, and provided a workaround to avoid an unnecessary republish cycle.

**Resolution**

1.  Review the customer’s post-migration workflow where entries are being republished purely to “make assets appear.”
2.  Apply the workaround shared in the case: **proceed without republishing entries**, since republish was not required to make assets available in that use case.
3.  Ask the customer to repeat their validation steps (asset rendering/use) without republishing, and confirm if the behavior is consistent.

Assets are usable/visible post-migration **without requiring manual republishing** of entries in the validated case, and the customer is able to proceed with migration activity without the republish step.
