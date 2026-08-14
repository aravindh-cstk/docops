---
title: "DocOps Round 4 Rewrite Plus Url Test - Personalize"
description: "Round 4 test that rewrites a Personalize doc's entire body and changes its url in the same commit, to check whether the old entry is left orphaned."
url: /personalize/docops-nested-test-rewritten-and-moved-s28
---

# DocOps Round 4 Rewrite Plus Url Test - Personalize

## Purpose

This file replaces the previous Personalize test article entirely. Every paragraph and heading below is new content, written to fall below git's similarity threshold for rename detection.

## What Changed

None of the original wording survives, and the url changed in the same commit. This combination was not covered by the earlier round 4 rewrite scenario, which kept its url unchanged.

## Expected Outcome

The old entry at the original url should end up unpublished but still present in Sandbox. A separate new entry should be created at the new url with a different uid.
