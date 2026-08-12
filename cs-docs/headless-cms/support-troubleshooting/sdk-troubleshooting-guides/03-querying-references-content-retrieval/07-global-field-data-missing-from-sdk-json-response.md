---
title: "Global Field Data Missing from SDK JSON Response"
description: "Global Field Data Missing from SDK JSON Response"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/03-querying-references-content-retrieval/07-global-field-data-missing-from-sdk-json-response
doc_type: faq
_cms_section_uid: cscd48a28b393a181f
_cms_faq_uid: cs9fbce56dbad747cd
---

# Global Field Data Missing from SDK JSON Response

Data contained within a Global Field is missing from the final SDK response, even though other entry fields are present.

**Root Cause**

The field is restricted by role-based permissions, or the global field schema was updated without re-publishing the affected entries.

**Resolution**

Global field payload may appear missing due to model visibility, permission, or publish-state mismatch.

1.  Verify the global field is not hidden/restricted in the content model.
2.  Confirm token roles can access the field data.
3.  Re-publish content type/entries if model updates were recent.

Entry response includes expected global field object for the published target. Escalate with content type UID, field UID, and role/token details.
