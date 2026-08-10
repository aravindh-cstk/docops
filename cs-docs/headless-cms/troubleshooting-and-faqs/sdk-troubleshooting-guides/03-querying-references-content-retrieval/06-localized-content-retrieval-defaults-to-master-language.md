---
title: "Localized Content Retrieval Defaults to Master Language"
description: "Localized Content Retrieval Defaults to Master Language"
url: /headless-cms/troubleshooting-and-faqs/sdk-troubleshooting-guides/03-querying-references-content-retrieval/06-localized-content-retrieval-defaults-to-master-language
doc_type: faq
_cms_section_uid: cscd48a28b393a181f
_cms_faq_uid: cs5d1a3ae8021c5e96
---

# Localized Content Retrieval Defaults to Master Language

The SDK returns content in the master language even when a different locale is requested, or it returns a 404 if the locale is not properly specified.

**Root Cause**

The query does not explicitly define the .locale() parameter, or the requested locale code does not match the exact casing/format defined in the stack.

**Resolution**

1.  Use .locale('locale-code') on Delivery SDK queries/entry fetches.
2.  Confirm the target locale is enabled and published for the entry.
3.  Use exact locale code casing/format as defined in stack locales.

const

localizedEntry =

await

stack .

contentType

(

'article'

) .

entry

(

'entry\_uid'

) .

locale

(

'fr-fr'

) .

fetch

();

Returned fields contain localized values (or expected fallback behavior if locale content is unavailable). Escalate with entry UID, locale code, and publish evidence when locale data is still missing.
