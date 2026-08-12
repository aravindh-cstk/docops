---
title: "Migration, Cloning & Architecture Branch Merge Consumes Excessive Memory and Time: Use the - no-revert Flag"
description: "Migration, Cloning & Architecture Branch Merge Consumes Excessive Memory and Time: Use the - no-revert Flag"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/02-migration-cloning-architecture/10-migration-cloning-architecture-branch-merge-consumes-excessive-memory-and-time-use-the-no-revert-flag
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: cs6f9553a7c264ea21
---

# Migration, Cloning & Architecture Branch Merge Consumes Excessive Memory and Time: Use the - no-revert Flag

Merging branches on a large stack with significant data differences consumed roughly 12GB of memory and took a long time to complete.

**Root Cause**

The --no-revert flag controls whether a revert (backup) branch is created, but that creation happens server-side, not in the local CLI process, so it's unlikely to directly drive memory usage on the machine running the CLI. Status polling after a merge starts at a 5-second delay and increases by 1 second per attempt up to a 60-second cap, making a lightweight request each time; this is also unlikely to meaningfully affect memory. The more likely driver is that the CLI computes and holds the full difference between the base and compare branches in memory before the merge runs, regardless of whether --no-revert is passed. For a large stack, this diff computation is what scales with memory use.

**Resolution**

1.  Add --no-revert to skip server-side backup-branch creation: csdx cm:branches:merge ... --no-revert. This reduces overall merge time and server-side load, but does not reduce the memory the CLI itself uses to hold the branch diff, since that happens either way.
2.  If memory is the primary concern rather than time, there is currently no flag to limit or paginate the diff computation. Merging more frequently in smaller increments, so each diff is smaller, is the more directly supported way to lower memory use for this step.

Skipping the revert branch also means there is no automatic backup to roll back to, so plan your own backup strategy before merging without it.
