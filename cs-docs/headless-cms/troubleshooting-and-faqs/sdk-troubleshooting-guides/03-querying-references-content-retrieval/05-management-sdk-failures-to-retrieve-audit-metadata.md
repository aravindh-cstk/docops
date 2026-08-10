---
title: "Management SDK Failures to Retrieve Audit Metadata"
description: "Management SDK Failures to Retrieve Audit Metadata"
url: /headless-cms/troubleshooting-and-faqs/sdk-troubleshooting-guides/03-querying-references-content-retrieval/05-management-sdk-failures-to-retrieve-audit-metadata
doc_type: faq
_cms_section_uid: cscd48a28b393a181f
_cms_faq_uid: cs1dbac5773298eb7a
---

# Management SDK Failures to Retrieve Audit Metadata

Developers cannot programmatically access "Last Modified By" or "Owner" details via the SDK, as these are excluded from default responses for performance.

**Root Cause**

Metadata fields like "Owner" or "Last Modified By" are excluded from standard entry responses to optimize performance and must be requested via specific inclusion parameters.

**Resolution**

1.  Use CMA (not Delivery SDK) for metadata workflows.
2.  Fetch entry-level metadata through documented entry params:
    -   entry(uid).fetch({ include\_workflow: true, include\_publish\_details: true })
3.  Fetch action/user audit trail through stack audit-log APIs:
    -   stack.auditLog().fetchAll({ include\_count: true, limit, skip })
    -   stack.auditLog('log\_uid').fetch()
4.  Verify the token has read access for the stack objects being queried.

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

include\_workflow

:

true

,

include\_publish\_details

:

true

});

const

logs =

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

auditLog

() .

fetchAll

({

include\_count

:

true

,

limit

:

10

,

skip

:

0

});

Entry fetch returns metadata fields (including workflow/publish context), and audit-log calls return actor/action records for the stack. Escalate with entry UID, audit-log request params, token type, and sample response payload if metadata is still missing.
