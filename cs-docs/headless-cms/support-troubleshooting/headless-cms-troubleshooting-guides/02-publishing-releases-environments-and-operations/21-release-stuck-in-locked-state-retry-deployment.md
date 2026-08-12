---
title: "Release Stuck in Locked State - Retry Deployment"
description: "Release Stuck in Locked State - Retry Deployment"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/21-release-stuck-in-locked-state-retry-deployment
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs515eab03b3d0b446
---

# Release Stuck in Locked State - Retry Deployment

A release repeatedly fails to deploy and appears in a locked state. Previous deployment attempts have failed in the release history. The release cannot be re-triggered from the UI.

**Root Cause**

Release deployments can enter a locked state when a previous deployment attempt failed partway through and did not correctly release its lock. Subsequent retry attempts are blocked until the lock is cleared.

**Resolution**

1.  Review the release deployment history in the Releases section for any failed attempts and their error details.
2.  Wait briefly and attempt to retry the deployment from the UI - in some cases the lock clears on its own.
3.  If the lock does not clear, contact Contentstack Support with the release UID and stack details. Engineering can manually clear the lock and allow a fresh deployment attempt.
4.  During a call with Support, review the deployment and network logs to validate the release item count and confirm the deployment can proceed.

After the lock is cleared, retry the deployment and confirm the release completes successfully and entries are published or unpublished as intended.
