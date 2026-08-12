---
title: "Handling \"Entry Deleted\" Errors During SDK Sync API Calls"
description: "Handling \"Entry Deleted\" Errors During SDK Sync API Calls"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/04-caching-sync-performance-limits/04-handling-entry-deleted-errors-during-sdk-sync-api-calls
doc_type: faq
_cms_section_uid: cs2fbb946b868a690a
_cms_faq_uid: cs5146356406342e7d
---

# Handling "Entry Deleted" Errors During SDK Sync API Calls

The SDK's Sync API returns an error or stops processing when it encounters a deletion event in the sync queue.

**Root Cause**

The application logic fails to distinguish between entry updates and entry\_deleted event types in the Sync API response, leading to processing errors for non-existent UIDs.

**Resolution**

Sync consumers break when deletion events are treated like normal entry payloads.

Use one of the following supported patterns based on your sync architecture:

1.  **Client-side event switch (default):**
    -   Process all syncData.items by item.type
    -   Remove local records for entry\_deleted
2.  **Server-filtered delete sync jobs:**
    -   Run stack.sync({ type: 'entry\_deleted' }) for cleanup-focused workers
3.  **Tokened incremental strategy (recommended at scale):**
    -   Drain batches with pagination\_token
    -   Persist and continue with sync\_token for delta runs
    -   Apply delete events before any re-fetch/re-hydration logic

const

syncData =

await

stack.

sync

({

syncToken

: lastSyncToken });

for

(

const

item

of

syncData.

items

) {

if

(item.

type

\===

'entry\_deleted'

) {

// remove from local store

} }

// Example server-filtered delete run:

const

deletedOnly =

await

stack.

sync

({

type

:

'entry\_deleted'

});

Sync completes with 200, delete events are consumed without exceptions, and local state no longer contains deleted entry UIDs after reconciliation. Escalate with sync mode used (full/mixed/deleted-only), sync\_token/pagination\_token, failing item payload, and local-store reconciliation logs.
