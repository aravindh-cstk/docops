---
title: "Applications Renamed with a Suffix After Import (Duplicate Titles)"
description: "Applications Renamed with a Suffix After Import (Duplicate Titles)"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/03-export-import-commands-data-formats/14-applications-renamed-with-a-suffix-after-import-duplicate-titles
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: cse7e2febf9a079c56
---

# Applications Renamed with a Suffix After Import (Duplicate Titles)

After importing a stack, all Marketplace app names had been renamed with an appended suffix, and many names were truncated.

**Root Cause**

When cm:stacks:import finds a Marketplace app name that already exists in the target stack, it generates a new name automatically: truncating the original (18 characters for the app name, up to 50 for UI location names) and appending a lozenge character (◈) followed by a numeric suffix, e.g. My App◈1. If a terminal or font can't render ◈, it falls back to a replacement character, which can look like "?1". This behavior is present in current CLI versions, not just an old release - there's no confirmation that upgrading alone changes it. Long names can also get truncated even without a naming conflict, once they're at or above the length threshold that triggers a suffix. Passing -y/--yes during import applies the suggested name automatically without the normal confirm/edit prompt.

**Resolution**

1.  Before importing, check the source stack for duplicate app titles and rename them to be unique, avoiding the conflict path entirely.
2.  Avoid -y when duplicate titles may be present, so the suggested name can be reviewed and edited via the interactive prompt.
3.  If a rename already happened, look for ◈ (it may render as "?" depending on terminal/font) followed by a number, and rename the app manually.
4.  Updating the CLI is general hygiene, but not confirmed to change this specific naming behavior, since it's present in current releases too.
