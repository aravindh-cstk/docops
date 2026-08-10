---
title: "CMA Timeout Errors - Increasing SDK Timeout for Large Uploads and Slow API Calls"
description: "CMA Timeout Errors - Increasing SDK Timeout for Large Uploads and Slow API Calls"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/03-cma-timeout-errors-increasing-sdk-timeout-for-large-uploads-and-slow-api-calls
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs454d51f51622d97b
---

# CMA Timeout Errors - Increasing SDK Timeout for Large Uploads and Slow API Calls

CMA operations fail with a 408 Request Timeout error. This most commonly affects large asset uploads, but can also occur on slow CMA calls such as fetching all taxonomies or performing complex bulk operations on Vercel-hosted or serverless environments with strict execution time limits.

**Root Cause**

The default client-side timeout in the Contentstack SDK is set to 30 seconds. Any CMA operation that takes longer than this threshold triggers a client-side 408 timeout. Serverless platforms such as Vercel also impose their own request execution time limits (typically 10–30 seconds), which can cause premature timeout failures independent of the SDK setting.

**Resolution**

1.  Increase the timeout value in the Contentstack SDK client initialization. Set the timeout parameter to a higher value such as 60,000 ms (60 seconds) or higher depending on the expected operation duration.
2.  Example SDK initialization with extended timeout: Contentstack.Stack({ api\_key: '...', delivery\_token: '...', environment: '...', timeout: 60000 })
3.  For Vercel-hosted applications, also increase the function execution timeout in vercel.json or the Vercel dashboard for the affected API routes.
4.  For slow taxonomy or bulk CMA calls specifically, consider paginating results (using limit and skip) to reduce per-request response size and processing time.
5.  For very large file uploads (>100 MB), consider increasing the timeout further or implementing chunked upload logic.

After increasing the timeout in the SDK and platform configuration, retry the failing operation. If it completes without a 408 error, the timeout is now sufficient for the operation's duration.
