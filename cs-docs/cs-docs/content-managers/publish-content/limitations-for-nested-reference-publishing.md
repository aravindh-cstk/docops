---
title: "[Publish Content] - Limitations for Nested Reference Publishing"
description: Limitations for Nested Reference Publishing
url: https://www.contentstack.com/docs/content-managers/publish-content/limitations-for-nested-reference-publishing
product: Contentstack
doc_type: reference
audience:
  - content-managers
version: current
last_updated: 2026-05-18
---

# [Publish Content] - Limitations for Nested Reference Publishing

This page lists the limitations and constraints of the Nested Reference Publishing feature in Contentstack. It is intended for content managers and administrators who publish entries (single or bulk) and need to understand plan, depth, selection, and job-related restrictions before using nested reference publishing.

## Limitations for Nested Reference Publishing

- Nested Reference Publishing feature is plan-based. Please contact the [support](mailto:support@contentstack.com) team to get this activated for your organization.
- Entries can now be published with nested references up to a default depth of **5** levels, for both single and bulk publishing, and can vary as per your organization’s plan.
- You can select up to **50** environments and locales to which you want to publish content.
- When bulk publishing entries, you can only select a maximum of **100** parent entries.
- While bulk publishing entries, you cannot view the nested references of all parent entries within the tree.
- It is not possible to select specific child entries of a parent entry while publishing.
- When a referenced taxonomy appears in the **Publish Reference(s)** modal, the entire taxonomy (including all its terms) is published. It is not possible to selectively publish individual taxonomy terms.
- If any or all of the nested referred entries are already published in a specific environment and locale, they will be skipped when publishing the parent entry.
- If a referenced taxonomy is already published to the selected environment and locale for the entry, it is skipped and not republished.
- If any of the nested referred entries have an error, the other nested entries at lower levels of depth will not be sent for publishing.
- If a referenced taxonomy fails to publish, the publish job may fail depending on validation errors related to the taxonomy structure or localization.
- During multiple bulk publish tasks in an organization, only a maximum of **two** jobs will be active at any given time across the entire organization.
- You cannot cancel individual items once a publish job is scheduled. You can only cancel the whole publish job.
- The nested reference feature is not supported when publishing entries via releases.

## Common questions

**Q: What is the default nested reference depth supported for publishing?**  
A: Entries can now be published with nested references up to a default depth of **5** levels.

**Q: Can I selectively publish only certain child entries or taxonomy terms?**  
A: It is not possible to select specific child entries of a parent entry while publishing, and it is not possible to selectively publish individual taxonomy terms.

**Q: How many bulk publish jobs can run at the same time in an organization?**  
A: Only a maximum of **two** jobs will be active at any given time across the entire organization.

**Q: Can I cancel a single item within a scheduled publish job?**  
A: You cannot cancel individual items once a publish job is scheduled. You can only cancel the whole publish job.