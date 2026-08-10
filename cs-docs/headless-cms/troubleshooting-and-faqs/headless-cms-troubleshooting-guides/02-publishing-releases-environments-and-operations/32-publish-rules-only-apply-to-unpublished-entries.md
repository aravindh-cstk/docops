---
title: "Publish Rules Only Apply to Unpublished Entries"
description: "Publish Rules Only Apply to Unpublished Entries"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/32-publish-rules-only-apply-to-unpublished-entries
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs3abacdad7aaff38c
---

# Publish Rules Only Apply to Unpublished Entries

Publish rules configured for a production environment are not enforced when an editor re-publishes an entry that was already published at a previous workflow stage. The re-publish bypasses the configured restrictions.

**Root Cause**

Publish rules in Contentstack apply only when an entry is being published for the first time (moving from an unpublished state). If an entry is already published and an editor simply changes the workflow stage and re-publishes the same version, the publish rules do not re-evaluate - the entry is treated as an update to an already-live item, not a new publish action.

**Resolution**

This is expected behavior. To enforce rules on every publish action:

1.  Configure workflows so that publishing to production always requires a version increment (new save before publish).
2.  Use Releases as a controlled publishing channel, which enforces a structured approval and deployment process.
3.  Educate editors on the distinction between new publishes (rule-enforced) and re-publishes of existing versions (not rule-enforced).

For use cases that require rules on every publish action regardless of prior state, submit an enhancement request through Contentstack Support.
