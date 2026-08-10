---
title: "Recommended Order for Migrating Content Types Between Stacks"
description: "Recommended Order for Migrating Content Types Between Stacks"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/02-migration-cloning-architecture/13-recommended-order-for-migrating-content-types-between-stacks
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: cs3fb9e2f98e4b269b
---

# Recommended Order for Migrating Content Types Between Stacks

The correct order for migrating content types and entries from one stack to another was unclear.

**Root Cause**

Migrating modules out of order can cause dependency failures, since content types may reference Marketplace App configurations or global fields that don't yet exist in the target stack. csdx cm:stacks:import applies the correct order automatically for a full import (no --module). That automatic sequencing is skipped when importing modules one at a time with --module, so the order must be followed manually in that case.

**Resolution**

1.  For per-module imports, follow this sequence: locales, environments, assets, taxonomies, extensions, Marketplace Apps, webhooks, global fields, content types, workflows, entries, labels, custom roles.
2.  Update and configure Marketplace Apps once imported, since content types import right after and may depend on their configuration.
3.  For a full import, running csdx cm:stacks:import without --module is sufficient - the CLI sequences modules internally.
