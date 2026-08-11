---
title: "A/B Test Conversion Numbers Not Incrementing Correctly"
description: "A/B Test Conversion Numbers Not Incrementing Correctly"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/02-experiences-variant-delivery/05-a-b-test-conversion-numbers-not-incrementing-correctly
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: cs507eb2801318cd9a
---

# A/B Test Conversion Numbers Not Incrementing Correctly

Conversion numbers in a Personalize A/B test do not consistently increment even when conversion events are successfully triggered. This causes inaccurate test results and prevents reliable evaluation of variant performance.

**Root Cause**

The issue occurs in hybrid Next.js implementations where the Personalize SDK is initialized on the server side (SSR) but conversion events are triggered on the client side. This architectural split creates a User ID mismatch: the server-generated session ID differs from the client session, so the system cannot attribute client-side conversions to server-side impressions within the required 30-day attribution window. Race conditions between SDK initialization and event firing compound the problem.

**Resolution**

1.  Audit your SDK initialization code. Identify whether the SDK is being initialized in both server and client contexts.
2.  Move SDK initialization entirely to the client side using a Global Context Provider pattern. A custom hook (for example, usePersonalize) should manage the SDK instance and prevent redundant re-initialization across component renders.
3.  Ensure the User ID is generated and persisted consistently on the client side so that impression and conversion events share the same session context.
4.  Use the publish\_details field from the entry JSON to identify which variant was served. This simplifies variant filtering without requiring additional API calls.
5.  After migrating to a fully client-side SDK initialization, trigger an impression and then a conversion event and confirm that the conversion count increments in the Personalize analytics dashboard.

Once SDK initialization is consolidated on the client side, impression and conversion events will share a consistent User ID and conversions will be accurately attributed.
