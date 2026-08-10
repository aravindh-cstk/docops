---
title: "UI Extension Not Triggering When Entry Is Saved from Visual Builder"
description: "UI Extension Not Triggering When Entry Is Saved from Visual Builder"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/38-ui-extension-not-triggering-when-entry-is-saved-from-visual-builder
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csefece368b7a6c3af
---

# UI Extension Not Triggering When Entry Is Saved from Visual Builder

A UI extension that updates a group field when an entry is saved works correctly from the standard entry editor but does not trigger when saving via Visual Builder.

**Root Cause**

Visual Builder’s save operation uses a different code path than the standard entry editor save. Extensions listening to editor-specific lifecycle events may not receive signals from Visual Builder’s save mechanism.

**Resolution**

1.  Review the extension code to use App SDK lifecycle hooks rather than editor-specific event listeners.
2.  Use ContentstackSDK.entry.onSave() if available in the App SDK version being used.
3.  If the extension cannot be adapted, implement the logic as a webhook instead - webhooks fire on save/publish events regardless of which authoring surface triggered the action.

After adapting the extension to use App SDK lifecycle hooks, test saving from both the standard entry editor and Visual Builder. Confirm the group field updates in both cases.
