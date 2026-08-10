---
title: "addEditableTags TypeScript Type Mismatch with CLI-Generated Models"
description: "addEditableTags TypeScript Type Mismatch with CLI-Generated Models"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/24-addeditabletags-typescript-type-mismatch-with-cli-generated-models
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csbbd22111eee24008
---

# addEditableTags TypeScript Type Mismatch with CLI-Generated Models

TypeScript type validation fails when calling addEditableTags() with CLI-generated entry models. The error indicates a type incompatibility between the generated types and the types expected by addEditableTags.

**Root Cause**

CLI-generated models include SystemFields in the type definition. The addEditableTags function expects the entry object to include a uid property, but TypeScript cannot confirm this at compile time because SystemFields may not always expose uid in the type signature.

**Resolution**

1.  Add a runtime check before calling addEditableTags to verify the uid property exists: if (‘uid’ in entry) { … }
2.  After the runtime check, apply a type assertion to satisfy TypeScript: addEditableTags(entry as EntryEmbeds, ‘content\_type\_uid’)
3.  This approach maintains type safety without modifying generated code or utility definitions.

After implementing the runtime check and type assertion, confirm TypeScript compilation succeeds and addEditableTags applies edit tags correctly to the entry.
