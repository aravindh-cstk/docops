---
title: "SDK Authentication Error for Non-US Region Stacks"
description: "SDK Authentication Error for Non-US Region Stacks"
url: /headless-cms/troubleshooting-and-faqs/sdk-troubleshooting-guides/02-authentication-regions-networking/04-sdk-authentication-error-for-non-us-region-stacks
doc_type: faq
_cms_section_uid: cs11e3b2dfad59b84e
_cms_faq_uid: csbfc1ca3a9b869bf0
---

# SDK Authentication Error for Non-US Region Stacks

Using default region/host against non-US stacks can produce auth/key mismatch symptoms.

**Root Cause**

The SDK is defaulting to the US region host while the target stack is hosted in a different region (e.g., EU or AU), causing a "Stack Not Found" or invalid key error.

**Resolution**

1.  Set explicit region in SDK initialization.
2.  Use valid region constants supported by the SDK (for example Region.EU, Region.AU, Region.AZURE\_NA, Region.AZURE\_EU, Region.GCP\_NA, Region.GCP\_EU in Delivery TS SDK).
3.  Ensure API key/token are from the same regional stack.

Region-configured calls return 200 from the correct regional host. Escalate if region is correct but key is still rejected; include stack UID, region, and request host.
