---
title: "[Publish Content] - Working with Nested Reference Publishing"
description: Nested Reference Publishing allows you to view all references for an entry(ies) and send them all for publishing along with the parent entry together.
url: https://www.contentstack.com/docs/content-managers/publish-content/working-with-nested-reference-publishing
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-05-18
---

# [Publish Content] - Working with Nested Reference Publishing

This page explains how Nested Reference Publishing works in Contentstack, including publishing nested references for single entries and bulk publishing scenarios. It is intended for content managers and developers who publish entries with references and need to understand depth limits, selection behavior, and bulk-action execution constraints.

## Working with Nested Reference Publishing

Nested Reference Publishing allows you to view all references for an entry(ies) and send them all for publishing along with the parent entry together.

You can send nested items up to **5 levels** of depth for publishing. By employing this method, you can enhance your understanding of the structure of entries you are publishing.

## Publishing Nested References for a Single Entry

Consider a scenario where you are publishing a single entry. This parent entry can be called “Single Parent Entry (Level 0)”. When you click on **Publish**, you get the **Publish Entry** modal, where you can select the **Environment(s)** and **Language(s)** to which you want to publish your entry.

In this scenario, let’s select two environments and five languages and click **Send**.

The **Publish Reference(s)** modal appears, showing a tree view of all the referenced entries, assets, and taxonomies (if applicable). You can expand each level to view nested references up to five levels of depth. You can even check them for the different languages you selected. By clicking the **Send with References** button, you can publish all of these references, including referenced taxonomies, along with their parent entry, all at once.

**Note**:
- The entire taxonomy is published. Individual terms cannot be selectively published.
- The branch selected during entry publishing determines the locale fallback hierarchy used for taxonomy publishing.
- If the taxonomy contains localized terms, only the selected locales will be published.

**Note:** For the number of environments and languages you can select within which you want to publish the parent and child entries, you have a limit of **50** each. But, the number of the references or inter-linked items that are sent for publishing along with the parent entry has no limit.

In the above scenario, when a single parent entry was selected for publishing to two environments and 5 locales, the total number of items in the publish job was 110.

Similarly, if you have tens of thousands of items inter-linked along with the parent entry, all those reference items are sent for publishing.

**Note:** Publish jobs with a high number of referenced items will take some time to process.

## Bulk Publishing Entries with Nested References

Consider that you need to bulk publish multiple entries, all of which are parent entries at level 0. To do this, choose a content type, select the entries you wish to publish, and then click the **Publish** button on the top bar.

When you select the entries to publish, a **Publish Entry** modal appears where you can choose the **Environment(s)** and **Language(s)** to which you want to publish your entry. In this scenario, two environments and five languages are selected. To publish all of the nested references along with their parent entries at once, click the **Send**, and then the **Send with References** button.

In the scenario described above, where four parent entries are selected for publishing to two environments and five locales, the total number of items in the publish job is 560.

## Execution of Bulk-Action Jobs with Nested References

Since multiple items are sent for publishing, all publishing activities are considered bulk-action jobs. Due to the multiple levels of nesting and the number of items sent for publishing, there is a fixed limit on the number of jobs that can run simultaneously within an organization.

Consider a scenario in which a user in **Stack A **initiates **ten bulk-publish** actions, followed by a user in **Stack B** who initiates **five bulk-publish** actions a minute later. Contentstack's limit is that only two bulk actions can execute at the same time within an organization. Therefore, two of Stack A's bulk actions would execute first, followed by the next two, and so on until all ten are completed. Then, the bulk actions initiated by the user in Stack B would begin.

While two actions are executing, all other bulk actions in the Publish Queue for both Stack A and Stack B will have a status of **In queue**, since only two bulk actions can be executed simultaneously.

## Common questions

**Q: What is the maximum depth for nested reference publishing?**  
A: You can send nested items up to **5 levels** of depth for publishing.

**Q: Is there a limit to how many environments and languages can be selected for publishing?**  
A: Yes, you have a limit of **50** each for environments and languages.

**Q: Is there a limit to the number of referenced items that can be sent for publishing with a parent entry?**  
A: No, the number of the references or inter-linked items that are sent for publishing along with the parent entry has no limit.

**Q: How many bulk actions can execute at the same time within an organization?**  
A: Contentstack's limit is that only two bulk actions can execute at the same time within an organization.