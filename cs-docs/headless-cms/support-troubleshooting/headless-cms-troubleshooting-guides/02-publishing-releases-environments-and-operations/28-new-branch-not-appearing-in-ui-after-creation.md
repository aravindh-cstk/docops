---
title: "New Branch Not Appearing in UI After Creation"
description: "New Branch Not Appearing in UI After Creation"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/28-new-branch-not-appearing-in-ui-after-creation
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csec071e40153183f5
---

# New Branch Not Appearing in UI After Creation

A newly created branch does not appear in the Contentstack UI several hours after creation. Branch creation jobs disappear from the Bulk Task Queue without confirming success or providing error logs.

**Root Cause**

This was previously caused by infrastructure bottlenecks (GCP search service / Elasticsearch capacity) combined with a UI bug where long-running branch creation tasks dropped off the Bulk Task Queue before completing, even though the branch was still being created in the background. Contentstack has since remediated the infrastructure bottleneck through search service scaling and the Branch Parallelization plan; branch creation times for large stacks have stabilized to a 45–60 minute window. Retrying creation while the original job is still running produces a ‘branch already exists’ error.

**Resolution**

1.  Wait 45–60 minutes before assuming branch creation has failed. This is the expected window for large-stack branch creation following Contentstack’s infrastructure improvements.
2.  Check whether the branch already exists by navigating to Settings > Branches and refreshing the page.
3.  Do not retry branch creation if the job appeared to disappear - check first whether the branch was silently created. Retrying will produce a ‘branch already exists’ error if creation is completed.
4.  If the branch genuinely did not create after several hours, contact Contentstack Support with the stack API key and the time the creation was initiated. Engineering can check the background job status.

After confirming the branch exists, verify it contains the expected content by navigating to it and checking a known content type.
