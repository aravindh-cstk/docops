---
title: "Live Edit Tags Must Be Applied to Raw Contentstack Response"
description: "Live Edit Tags Must Be Applied to Raw Contentstack Response"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/25-live-edit-tags-must-be-applied-to-raw-contentstack-response
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csab86c6e414c3e2f7
---

# Live Edit Tags Must Be Applied to Raw Contentstack Response

The Live Preview Edit button does not function when clicking on components in the preview. Edit icons appear but clicking them does not open the correct field in the editor.

**Root Cause**

addEditableTags must be called on the raw Contentstack API response object, not on a transformed or reshaped version of the data. If data is restructured before addEditableTags is called, the data-cslp attributes are generated incorrectly and cannot be mapped back to the correct fields.

**Resolution**

1.  Call addEditableTags on the entry object directly as returned by the Contentstack SDK or API, before any transformation or mapping.
2.  Do not hardcode data-cslp attribute values - they must be derived dynamically from the raw entry structure.
3.  If using a deep clone before addEditableTags (for example, to handle frozen GraphQL response objects), ensure the clone is a plain, extensible object.

After applying addEditableTags to the raw entry response, click a component in the Live Preview pane. If the correct field opens in the editor, the tags are correctly mapped.
