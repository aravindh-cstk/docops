---
title: "include_all_depth Not Working in JavaScript Delivery SDK"
description: "include_all_depth Not Working in JavaScript Delivery SDK"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/066-include-all-depth-not-working-in-javascript-delivery-sdk
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs9eea8af57bfa3d6f
---

# include_all_depth Not Working in JavaScript Delivery SDK

Fetching deeply nested referenced entries using include\_all\_depth works correctly when calling the Contentstack REST API directly, but the same depth configuration does not produce nested results when using the JavaScript Delivery SDK.

**Root Cause**

The JavaScript Delivery SDK requires the include\_all\_depth parameter to be added explicitly via the .addParam() method. Without this, the SDK defaults to a shallow reference fetch and does not honor depth values passed through other means.

**Resolution**

1.  Add the include\_all\_depth parameter using the SDK’s .addParam() method:
2.  Example: Query.addParam(‘include\_all\_depth’, 3); - where 3 is the desired depth level.
3.  Ensure include\_all is also set to true alongside include\_all\_depth.
4.  Re-run the query and verify that nested referenced entries are returned at the specified depth.

Note: The 100-reference cumulative limit still applies across all resolved levels. If the total resolved references across all depth levels exceeds 100, the request will fail with a 422 error. Reduce depth or reference count if this occurs.

After adding the parameter, execute the SDK query and confirm that referenced entries at the target depth are present in the response.
