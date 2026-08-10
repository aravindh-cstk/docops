---
title: "Webhook Conditions Only Support OR Logic - Cannot Exclude a Content Type"
description: "Webhook Conditions Only Support OR Logic - Cannot Exclude a Content Type"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/30-webhook-conditions-only-support-or-logic-cannot-exclude-a-content-type
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs69e4047fed11f463
---

# Webhook Conditions Only Support OR Logic - Cannot Exclude a Content Type

A webhook needs to fire for all content types except one test-only type. The webhook configuration UI only supports OR conditions - there is no built-in exclusion or AND logic to skip a specific content type.

**Root Cause**

Contentstack webhook conditions use OR logic - each configured condition is an additional trigger, not a filter-by-exclusion. There is no AND logic or NOT condition available in the webhook configuration to exclude a specific content type. Selecting multiple content types means the webhook fires for any of them.

**Resolution**

1.  In the webhook configuration, manually select every content type except the test-only type. This is the most straightforward approach for a limited number of content types.
2.  Alternatively, configure the webhook without content type restrictions (fire for all content types) and implement exclusion logic in the webhook receiving endpoint: check the content\_type.uid field in the payload and discard events from the test content type.

Receiver-side filtering is the recommended approach when complex exclusion logic is required, as it provides full control over event handling without being constrained by the webhook configuration UI.
