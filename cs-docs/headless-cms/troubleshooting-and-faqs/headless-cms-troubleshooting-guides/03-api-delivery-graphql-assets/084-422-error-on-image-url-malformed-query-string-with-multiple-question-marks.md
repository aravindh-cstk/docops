---
title: "422 Error on Image URL - Malformed Query String with Multiple Question Marks"
description: "422 Error on Image URL - Malformed Query String with Multiple Question Marks"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/084-422-error-on-image-url-malformed-query-string-with-multiple-question-marks
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs6858944efcbca07c
---

# 422 Error on Image URL - Malformed Query String with Multiple Question Marks

Dynamically generated image URLs return 422 errors while static image URLs work correctly. The URLs appear similar but the dynamic version consistently fails.

**Root Cause**

The dynamic URL is malformed because multiple ? characters are present in the query string. This occurs when parameters are appended incorrectly - for example, adding ?environment=production after a URL that already contains ?auto=webp results in two separate query strings, which is invalid URL syntax. The server cannot parse the malformed URL and returns a 422 error.

**Resolution**

1.  Ensure that the first parameter in the URL uses ? and all subsequent parameters use &.
2.  Correct example: https://images.contentstack.io/v3/assets/{uid}/{asset}?auto=webp&environment=production&quality=80
3.  Incorrect example (two ? characters): https://images.contentstack.io/v3/assets/{uid}/{asset}?auto=webp?environment=production
4.  Review dynamic URL construction logic in the application code and validate that parameter concatenation always uses & after the first ?.

After correcting the URL construction logic, test a dynamically generated image URL and confirm a 200 response is returned with the expected image.
