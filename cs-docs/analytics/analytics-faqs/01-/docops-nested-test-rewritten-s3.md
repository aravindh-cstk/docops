---
title: "DocOps Round 4 Rewrite Test - Analytics"
description: "Round 4 rewrite test for the Analytics product, confirming a heavily rewritten rename is treated as a delete plus a create by git and the sync."
url: /analytics/docops-nested-test
---

# DocOps Round 4 Rewrite Test - Analytics

## Purpose

This file replaces the previous Analytics test article entirely. Every paragraph and heading below is new content, written to fall below git's similarity threshold for rename detection.

## What Changed

None of the original wording survives. This section pads out the body with new sentences describing a distinct scenario. It confirms how the sync engine behaves when `handleRename` is bypassed. The change instead flows through the ordinary delete and create code paths.

## Expected Outcome

The old Sandbox entry at this same URL should be unpublished. A new entry should be created with a different internal uid. This proves that a rewrite this large skips the update-in-place logic entirely.
