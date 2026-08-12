---
title: "422 Error - 100 Reference Include Limit Cannot Be Increased"
description: "422 Error - 100 Reference Include Limit Cannot Be Increased"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/049-422-error-100-reference-include-limit-cannot-be-increased
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csd4859006b2b9bf87
---

# 422 Error - 100 Reference Include Limit Cannot Be Increased

A request to increase the 100-reference include limit to 150–200 is made. The application’s content structure genuinely requires resolving more than 100 references in a single call. The same ‘include should not be greater than 100’ error can also surface on the CMA (not just the CDA) - for example, on entries where a Group field combines a Boolean field with a Reference field - because the 100-reference count applies to the total resolved references in the response, regardless of endpoint.

**Root Cause**

The 100-reference limit for include\[\] and include\_all is a hard platform constraint imposed due to the high computational cost of resolving reference trees at scale. It applies to both the CDA and the CMA and cannot be increased at the organization or account level.

**Resolution**

1.  Restructure the application to fetch deep reference chains in multiple requests: first call resolves the top-level entry with the first set of references; subsequent calls resolve each referenced entry’s nested references individually.
2.  Merge the results client-side to reconstruct the full data structure before rendering.
3.  For CMA requests hitting this error on a Group field with a Boolean + Reference combination, reduce the include depth or scope to keep the total resolved reference count within the limit.
4.  Consider using GraphQL for complex reference structures - GraphQL’s explicit field selection can retrieve specific nested fields without triggering the 100-reference counting mechanism.
5.  If the content model can be simplified (for example, by flattening some nested reference chains into inline fields), this can reduce the number of references that need resolving per request.

After splitting the request into multiple calls and merging results client-side, verify the full content structure is correctly assembled and the application renders as expected.
