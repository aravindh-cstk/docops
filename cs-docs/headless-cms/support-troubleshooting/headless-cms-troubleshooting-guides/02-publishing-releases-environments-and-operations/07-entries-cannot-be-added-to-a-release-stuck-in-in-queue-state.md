---
title: "Entries Cannot Be Added to a Release - Stuck in In-Queue State"
description: "Entries Cannot Be Added to a Release - Stuck in In-Queue State"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/07-entries-cannot-be-added-to-a-release-stuck-in-in-queue-state
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs962548e7b4923891
---

# Entries Cannot Be Added to a Release - Stuck in In-Queue State

Bulk Add to Release operations fail with entries stuck in an in-queue state in the bulk task queue. The issue affects multiple users and blocks release workflows.

**Root Cause**

This is a platform-level capacity issue where the bulk-action processing pods are overwhelmed by concurrent Add to Release requests, particularly when Marketplace Integration jobs are also running simultaneously. Insufficient pod capacity causes the queue to back up.

**Resolution**

1.  Contact Contentstack Support and report the stack details and the in-queue bulk task UIDs.
2.  Engineering can scale the bulk-action processing pods to clear the backlog and resume processing.
3.  As a workaround while the queue is clearing, add entries to releases in smaller batches with pauses between batches.
4.  Avoid running large Add to Release operations simultaneously with other bulk operations (bulk delete, global field updates) to reduce pod contention.

After engineering scales the processing capacity, monitor the bulk task queue. If entries transition from in-queue to processing and complete, the capacity issue is resolved.
