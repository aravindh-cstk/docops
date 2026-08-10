---
title: "Release Unpublish Stuck in ‘In Progress’ - Never Completes"
description: "Release Unpublish Stuck in ‘In Progress’ - Never Completes"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/20-release-unpublish-stuck-in-in-progress-never-completes
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs7e9d6f739f83db8f
---

# Release Unpublish Stuck in ‘In Progress’ - Never Completes

A release triggered for unpublishing content has been stuck in ‘In Progress’ state for an extended period. Entries included in the release remain published on live environments despite the release being in progress.

**Root Cause**

Release deployments can become stuck when the release processing job encounters a failure mid-execution that does not cleanly roll back or transition to a failed state. This leaves the release in a locked ‘In Progress’ state that prevents new deployments and leaves entries in their current published state.

**Resolution**

1.  Contact Contentstack Support immediately and provide the release UID, stack API key, and the time the release was triggered.
2.  Engineering will inspect the release job state and forcefully complete or retry the stuck deployment.
3.  If entries need to be unpublished urgently while the release is stuck, use the CMA bulk unpublish endpoint as a direct workaround: POST /v3/bulk/unpublish with the specific entry UIDs and environments.
4.  After the release is resolved, verify the entries are correctly unpublished and the release shows a completed state.

If the release deployment continues to fail after retry, consider recreating the release with the same entries and re-deploying.
