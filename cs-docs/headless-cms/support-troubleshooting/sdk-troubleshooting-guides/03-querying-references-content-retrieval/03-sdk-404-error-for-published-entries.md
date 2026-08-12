---
title: "SDK 404 Error for Published Entries"
description: "SDK 404 Error for Published Entries"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/03-querying-references-content-retrieval/03-sdk-404-error-for-published-entries
doc_type: faq
_cms_section_uid: cscd48a28b393a181f
_cms_faq_uid: cs3ee79f8ad1f8c48b
---

# SDK 404 Error for Published Entries

Published entries can still return 404 when the environment/locale/region does not match the publish target.

**Root Cause**

The request is targeting a different environment or locale than the one where the entry was successfully published.

**Resolution**

1.  Confirm entry is published to the same environment used by SDK config.
2.  Ensure locale code matches exactly.
3.  Verify region/host alignment for the stack.

Entry fetch returns 200 and expected UID for requested environment/locale. Escalate with entry UID, environment, locale, and region used in request.
