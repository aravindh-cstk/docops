---
title: "Live Preview Blank Screen with GraphQL: Object Not Extensible Error"
description: "Live Preview Blank Screen with GraphQL: Object Not Extensible Error"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/06-live-preview-blank-screen-with-graphql-object-not-extensible-error
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs192cd1bceb570cc7
---

# Live Preview Blank Screen with GraphQL: Object Not Extensible Error

Enabling Live Preview in a Next.js setup with GraphQL results in a blank screen. A runtime error appears stating that a property could not be added because the object is not extensible.

**Root Cause**

The Live Preview SDK’s addEditableTags function attempts to add properties to the GraphQL entry object. If the object returned by GraphQL is frozen or sealed (non-extensible), JavaScript prevents property addition and throws a TypeError. This commonly occurs with GraphQL clients that return immutable response objects.

**Resolution**

1.  Before passing the GraphQL entry object to addEditableTags, create a deep clone of the object to ensure it is mutable.
2.  Use a utility such as cloneDeep from the lodash library or JSON.parse(JSON.stringify(entry)) to produce a plain, extensible copy of the entry data.
3.  Pass the cloned object to addEditableTags instead of the original GraphQL response object.
4.  Verify the Live Preview SDK is correctly configured with valid API keys and the preview URL is set in the stack settings.

After implementing the deep clone before addEditableTags, reload the Live Preview window. If the preview renders without a blank screen or runtime error, the frozen object issue is resolved.
