---
title: "Hundreds of Entries Failing Release Publish Due to Missing Modular Block Metadata"
description: "Hundreds of Entries Failing Release Publish Due to Missing Modular Block Metadata"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/11-hundreds-of-entries-failing-release-publish-due-to-missing-modular-block-metadata
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs8957124c721e23f7
---

# Hundreds of Entries Failing Release Publish Due to Missing Modular Block Metadata

A large number of entries in a release fail to publish. Re-saving entries manually without changes fixes the error, but manually re-saving hundreds of entries is not practical.

**Root Cause**

The entries are missing the required \_metadata.uid field for one or more nested modular blocks. This metadata is auto-generated when an entry is saved through the CMS. Entries created or modified programmatically (for example, via API or migration scripts) may not have this metadata populated. The release publish validation requires this metadata and fails when it is absent.

**Resolution**

1.  Use the CMA API to programmatically fetch and re-save each affected entry. A re-save without content changes is sufficient to trigger the metadata regeneration.
2.  Script the re-save using the following approach:

-   Fetch each entry UID from the release using the Releases API.
-   For each UID, perform a GET then a PUT (update) to the entry with the same payload to force a re-save.

4.  After re-saving all affected entries, re-attempt the release publish and confirm entries are now deploy-ready.

After scripting the bulk re-save, check the release deployment status. If entries transition from error to deploy-ready and the release publishes successfully, the metadata regeneration is complete.
