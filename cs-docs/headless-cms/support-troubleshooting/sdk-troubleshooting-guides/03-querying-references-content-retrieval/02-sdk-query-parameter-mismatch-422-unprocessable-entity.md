---
title: "SDK Query Parameter Mismatch (422 Unprocessable Entity)"
description: "SDK Query Parameter Mismatch (422 Unprocessable Entity)"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/03-querying-references-content-retrieval/02-sdk-query-parameter-mismatch-422-unprocessable-entity
doc_type: faq
_cms_section_uid: cscd48a28b393a181f
_cms_faq_uid: csd68175f45911f4f4
---

# SDK Query Parameter Mismatch (422 Unprocessable Entity)

The SDK returns a 422 Unprocessable Entity error when query methods (like filters or includes) use unsupported or misspelled parameters.

**Root Cause**

The query uses misspelled parameters, unsupported filter methods for a specific field type, or hidden characters that violate API validation rules.

**Resolution**

1.  Check the SDK method syntax; ensure you are using the correct helper methods (e.g., .includeCount() vs manually adding parameters).
2.  Verify that parameters like include\_fallback are supported for the specific content type.
3.  Ensure no trailing spaces or hidden characters exist in the parameter strings.

The query executes successfully and returns the expected count or localized content. Escalate if the same query works via cURL but fails via SDK. Provide the generated request URL.
