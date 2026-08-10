---
title: "Unschedule Request Failing With ‘job_id is Required’"
description: "Unschedule Request Failing With ‘job_id is Required’"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/44-unschedule-request-failing-with-job-id-is-required
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csd123436f99feab28
---

# Unschedule Request Failing With ‘job_id is Required’

Attempting to cancel a scheduled publish via the Unschedule API returns ‘job\_id is required’. The scheduled publish exists but cannot be canceled.

**Root Cause**

The scheduled job was created without a job\_id reference because the nestedSinglePublishing feature flag is not enabled. Without this flag, the scheduling system does not properly associate job IDs with individual publish actions.

**Resolution**

1.  Contact Contentstack Support and request enablement of the nestedSinglePublishing feature flag for the affected stack.
2.  After the flag is enabled, retry the unschedule operation. New scheduled jobs created after enablement will correctly receive job IDs.

After enabling nestedSinglePublishing, confirm that new scheduled releases can be successfully canceled using the Unschedule API.
