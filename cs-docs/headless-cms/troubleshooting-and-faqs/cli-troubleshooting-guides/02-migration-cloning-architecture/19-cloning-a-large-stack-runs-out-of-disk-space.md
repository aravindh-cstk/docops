---
title: "Cloning a Large Stack Runs Out of Disk Space"
description: "Cloning a Large Stack Runs Out of Disk Space"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/02-migration-cloning-architecture/19-cloning-a-large-stack-runs-out-of-disk-space
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: csf7cb90192675a4b1
---

# Cloning a Large Stack Runs Out of Disk Space

Cloning a large stack (entries and assets) consumed all available disk space and could not complete.

**Root Cause**

csdx cm:stacks:clone runs an export followed by an import, both executing locally through the same process as cm:stacks:export and cm:stacks:import. The export step writes the source stack's content types, entries, and assets to a local directory; only after that completes does the import step read the same directory and upload to the target stack, and the directory is deleted automatically once import finishes. For a large stack, the full set of entries and asset files must exist on local disk at once, which exhausts available space. Cloning via the Content Delivery or Content Management API directly isn't unsupported in the sense of the APIs being unavailable - clone already uses the Content Management API under the hood for both steps. What's actually missing is a streaming or in-memory clone path that skips writing to local disk before importing.

**Resolution**

1.  Confirm available local disk space before a large clone, or run it from a machine/volume with headroom for the full exported content.
2.  If entries and assets aren't needed, run csdx cm:stacks:clone --type a for structure-only cloning (all modules except entries and assets) - this is a supported flag, not a manual workaround, and avoids downloading asset files entirely.
3.  If both structure and content are needed but disk space is limited, clone structure with --type a first, then move entries and assets in smaller batches using cm:stacks:export/cm:stacks:import with --content-types or --branch filters.
4.  If none of the above works, replicate stack components manually as a last resort.
