---
title: "Scheduled Publish vs. Releases - When to Use Each"
description: "Scheduled Publish vs. Releases - When to Use Each"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/09-scheduled-publish-vs-releases-when-to-use-each
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs8fd27ebe1fdde627
---

# Scheduled Publish vs. Releases - When to Use Each

Basic scheduled publish is used to queue entries for future publishing. However, when the entry is updated after the schedule is set, it is unclear whether the updated or original version will be published at the scheduled time.

**Root Cause**

The basic Schedule Publish feature publishes the entry at the scheduled time, but what it publishes depends on the latest saved version at that time, not a snapshot taken at scheduling. This can lead to unexpected results if the entry is modified after scheduling. Releases address this by providing a snapshot-based workflow.

**Resolution**

1.  For content that may be updated between scheduling and publish time, use Releases instead of basic scheduled publish.
2.  Releases allow you to group entries, review exactly what will be published, and deploy the release at a scheduled time.
3.  If an entry in a Release is updated before the release is deployed, the release will publish the latest version — this is intentional and predictable.
4.  Use basic scheduled publish only for simple, single-entry scenarios where no edits are expected between scheduling and publish time.

After switching time-sensitive multi-entry workflows to Releases, confirm that deployments publish the expected version of each entry.
