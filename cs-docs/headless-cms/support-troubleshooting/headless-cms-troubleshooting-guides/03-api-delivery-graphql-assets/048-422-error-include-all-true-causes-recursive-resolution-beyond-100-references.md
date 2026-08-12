---
title: "422 Error - include_all=true Causes Recursive Resolution Beyond 100 References"
description: "422 Error - include_all=true Causes Recursive Resolution Beyond 100 References"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/048-422-error-include-all-true-causes-recursive-resolution-beyond-100-references
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csa4dd8bb263d8e40e
---

# 422 Error - include_all=true Causes Recursive Resolution Beyond 100 References

The API returns a 422 error with the message ‘should not be greater than 100’ when using include\_all=true, even though there are fewer than 100 referenced entries at the first level. The error appears intermittent or only for certain entries.

**Root Cause**

The 100-reference limit is cumulative across all resolved depth levels, not per level. When include\_all=true is used, the API recursively resolves all references at every level. A content type with 10 first-level references, each pointing to 5 second-level references, can produce 60 resolved references in total - exceeding the limit for entries with deeper or broader reference trees. Additionally, 422 errors on include\[\] can also be triggered by invalid locale parameter formats in the same request.

**Resolution**

1.  Switch from include\_all=true to explicit include\[\] paths that resolve only the specific references needed.
2.  Use include\_all\_depth=1 or =2 rather than allowing unlimited recursive resolution, and verify the total resolved reference count stays under 100.
3.  For content types with deep or wide reference structures, split the request: fetch the top-level entry first, then fetch referenced entries in separate calls using their UIDs.
4.  Verify the locale parameter format is correct if 422 errors are not consistently triggered by include\_all. Valid format examples: en-us, fr-fr. Invalid: en\_US, de\_DE (underscore notation is not accepted).

After switching to explicit include\[\] paths and verifying the locale format, confirm the 422 error no longer occurs for the affected entries.
