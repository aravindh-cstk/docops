---
title: "Identifying Unpublished Entries via Management SDK"
description: "Identifying Unpublished Entries via Management SDK"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/03-querying-references-content-retrieval/01-identifying-unpublished-entries-via-management-sdk
doc_type: faq
_cms_section_uid: cscd48a28b393a181f
_cms_faq_uid: cs44065c39f7298fbb
---

# Identifying Unpublished Entries via Management SDK

Developers are unable to distinguish between "Draft" (unpublished) and "Published" entries when using the Management SDK for auditing or migration.

**Root Cause**

The Management SDK (CMA) returns all entries by default regardless of status; the publish\_details metadata must be explicitly requested and inspected to verify live status.

**Resolution**

1.  Fetch entries using CMA with include\_publish\_details: true.
2.  Inspect publish\_details in the response.
3.  Treat empty publish\_details (or version mismatch logic in your workflow) as unpublished/draft-like state.

Example:

const

entry =

await

client .

stack

({

api\_key

: process.

env

.

CS\_API\_KEY

}) .

contentType

(

'blog'

) .

entry

(

'entry\_uid'

) .

fetch

({

include\_publish\_details

:

true

});

The programmatic output correctly identifies which entries are live and which are drafts. Escalate if publish\_details are missing for entries known to be published. Provide Entry UID.
