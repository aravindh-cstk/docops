---
title: "429 Too Many Requests During SDK-Driven Bulk Operations"
description: "429 Too Many Requests During SDK-Driven Bulk Operations"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/04-caching-sync-performance-limits/03-429-too-many-requests-during-sdk-driven-bulk-operations
doc_type: faq
_cms_section_uid: cs2fbb946b868a690a
_cms_faq_uid: cs70911c352ccf4b37
---

# 429 Too Many Requests During SDK-Driven Bulk Operations

High-concurrency scripts hit platform/API rate limits and receive 429.

**Root Cause**

High-concurrency scripts exceed the platform’s rate limits by sending too many simultaneous requests without exponential backoff or throttling.

**Resolution**

1.  Use retry with exponential backoff in application logic.
2.  Reduce parallelism and batch requests.
3.  Use SDK-supported bulk operation endpoints/methods where applicable.
4.  In CMA JS flows, configure retry settings intentionally (retryOnError, retryLimit).

const

client = contentstack.

client

({

authtoken

: process.

env

.

CS\_AUTHTOKEN

,

retryOnError

:

true

,

retryLimit

:

5

});

Bulk workflow completes successfully without terminal 429 failures. Escalate if 429 appears at low request volume; share request rate, source IP, and stack UID.
