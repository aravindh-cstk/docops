---
title: "Scheduled Publishing Not Triggering - Job Scheduler Service Hang"
description: "Scheduled Publishing Not Triggering - Job Scheduler Service Hang"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/43-scheduled-publishing-not-triggering-job-scheduler-service-hang
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs38186a200cce54d6
---

# Scheduled Publishing Not Triggering - Job Scheduler Service Hang

Scheduled publishing stops working across an organization. Both single and bulk scheduled publishers fail to trigger at their configured time.

**Root Cause**

This is a platform-level incident. The job scheduler service can become stuck due to a service hang in the pod, preventing all queued messages from being processed across multiple organizations in the affected region.

**Resolution**

1.  Check the Contentstack Status Page (status.contentstack.com) to confirm whether an incident has been identified.
2.  Contact Contentstack Support immediately, providing the affected stack details, region, and estimated start time.
3.  Engineering will identify and restart the stuck scheduler pod.
4.  After the fix, verify that past-due scheduled jobs are processed or re-schedule them manually.

After the scheduler service is restored, confirm that newly scheduled publish jobs trigger at the correct time.
