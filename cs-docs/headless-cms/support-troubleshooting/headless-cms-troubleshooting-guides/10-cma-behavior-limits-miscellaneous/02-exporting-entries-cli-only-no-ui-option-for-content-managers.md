---
title: "Exporting Entries: CLI Only, No UI Option for Content Managers"
description: "Exporting Entries: CLI Only, No UI Option for Content Managers"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/02-exporting-entries-cli-only-no-ui-option-for-content-managers
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: csd6755405d337d09f
---

# Exporting Entries: CLI Only, No UI Option for Content Managers

A content manager needs to export a list of entries but does not have access to the Contentstack CLI due to their role. No UI-based export option is available.

**Root Cause**

Entry export in Contentstack is currently only available via the CLI (using the cm:stacks:export command). There is no native UI option for content managers to export entries directly. The CLI requires developer-level access and familiarity with the command-line environment.

**Resolution**

1.  Coordinate with a developer on the team who has CLI access to run the export on behalf of the content manager.
2.  Alternatively, use the CMA GET entries endpoint programmatically to retrieve all entries and export them to a CSV or JSON file using a script. A developer can build this as a one-time or recurring export tool.
3.  Submit a feature request to Contentstack for a UI-based entry export option if this is a recurring need.

After working with a developer to run the CLI export, confirm the exported file contains the expected entries in the correct format.
