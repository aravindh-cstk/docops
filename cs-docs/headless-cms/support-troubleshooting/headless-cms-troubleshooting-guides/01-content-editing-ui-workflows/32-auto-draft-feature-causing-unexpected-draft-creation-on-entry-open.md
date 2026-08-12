---
title: "Auto Draft Feature Causing Unexpected Draft Creation on Entry Open"
description: "Auto Draft Feature Causing Unexpected Draft Creation on Entry Open"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/32-auto-draft-feature-causing-unexpected-draft-creation-on-entry-open
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csdb2114e60eae03a8
---

# Auto Draft Feature Causing Unexpected Draft Creation on Entry Open

After enabling the Auto Draft (Auto-Save) Early Access feature, drafts are automatically created whenever any editor opens an entry, even without making changes. This disrupts the editorial workflow and is causing unexpected publish issues in the newsroom.

**Root Cause**

The Auto Draft Early Access feature creates a draft automatically when an entry is opened for editing. In some configurations or with certain workflow setups, this behavior was overly aggressive - creating drafts even for read-only views or in environments where the feature’s interaction with existing publish flows was not yet fully validated.

**Resolution**

1.  Disable the Auto Draft feature to restore normal workflow behavior: navigate to Settings > Early Access Features and toggle Auto Draft off.
2.  After disabling, confirm that opening an entry no longer creates an automatic draft.
3.  Before re-enabling Auto Draft in future, test it on a non-production stack to validate its interaction with existing workflows and publish rules.
4.  Contact Contentstack Support to report the specific disruptive behavior observed - this feedback helps improve the feature before general release.

After disabling Auto Draft, verify that editors can open entries without triggering unexpected drafts and that the publishing workflow returns to normal.
