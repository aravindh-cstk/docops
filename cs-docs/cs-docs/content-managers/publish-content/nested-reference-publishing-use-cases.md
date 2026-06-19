---
title: "[Publish Content] - Nested Reference Publishing Use Cases"
description: Nested Reference Publishing Use Cases for publishing nested references with complex structures and understanding bulk publish statuses.
url: https://www.contentstack.com/docs/headless-cms/nested-reference-publishing-use-cases
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Publish Content] - Nested Reference Publishing Use Cases

This page explains Nested Reference Publishing use cases in Contentstack, including how nested references are handled during publishing, why publishing may fail in certain scenarios, and how to interpret bulk publish statuses in the Publish Queue. It is intended for Contentstack users who publish entries with references and need to understand validation, workflow, approvals, permissions, and publish outcomes.

Nested Reference Publishing Use Cases

Nested Reference Publishing allows you to access and publish all nested references related to an entry with ease. You can publish nested items that are up to **5 levels** deep.

The following provides an overview of the structure of nested references:

In this guide, we’ll go through a use-case to understand how to work with Nested Reference Publishing in Contentstack.

## Publishing Nested References with Complex Structure

Consider a scenario where you have nested references with a complex setup. You have workflows, publish rules, and various permissions set for users in your organization.

Now with Nested Reference Publishing enabled for their organization, if the user tries to publish the parent entry, all the nested references will be sent along with the parent entry. The **Publish References** modal will show a detailed view of the structure of nested references within the selected parent entry.

If few of the nested references do not meet the publishing validation criteria, you will see an alert sign across the entry.

Let’s check out a few scenarios where publishing might fail.

### Entry is in In-progress State

For **Child Entry One - Level 4**, you can see a warning sign because the entry is in the in-progress state, i.e., required fields are empty.

Since, this entry does not meet the publishing criteria, it will not be sent for publishing and all its nested references will not be considered for publishing either.

### Workflow Stage is Incomplete

For **Child Entry - Level 7**, the workflow stage is incomplete due to which the entry and its nested references (if any) will not be sent for publishing.

### Approval(s) Pending

For **Child Entry - Level 8**, there is a publish rule applied, where the entry needs approval from set approvers for publishing. In this scenario, an alert will be displayed stating "Approval(s) Pending” and once the entry is approved, you will need to re-publish it.

Now, when you click the **Send with References** button, this action is considered as a bulk task since the parent and referenced entries are sent together for publishing. You will be able to view the summary of your job in the **Publish Queue**.

You can also view the details of all the individual entries sent for publishing within this job by clicking the specific job.

## Bulk Publish Status for Each Entry/Asset in the Publish Queue

Here are some of the statuses that you should see for your entries in your bulk-publish job.

### Published

When entry(ies) or asset(s) are published successfully.

### Failed

When entry(ies) or asset(s) could not be published due to some error. On hovering over the “info” sign, you will be able to view the reason for failure.

### Authorization Denied

When you do not have permission to publish certain entry(ies) or asset(s).

**Note**: Entries for which you do not have permissions to publish are not displayed within the Publish References modal.

### Skipped

When entry(ies) or asset(s) are already published in a specific environment and locale. Nested Reference Publishing works based on the latest unpublished changes and stops at the last published version of any nested reference.

Consider this scenario:
- If entry A references entry B, and B references entry C
- B has already been published
- Later, C is updated

When you publish A, C will not be included in the nested publishing process.

This happens because B, which acts as the link between A and C, has not changed since it was last published. The nested reference publishing process stops at B (or whenever it finds a published reference), assuming it is up to date.

To ensure C is included, you must republish B with references so that the system detects a change in the reference chain or manually publish C.

**Note**: The nested reference tree is not displayed for child entries that have already been published. For instance, if a parent entry has a child entry that is already published, the subsequent child entries will not be sent for publishing. However, if you manually publish that published child entry (i.e., force publish), then all its subsequent child entries will be sent for publishing.

### Workflow Stage Incomplete

When the workflow stage of entry(ies) has not reached “Done” for a certain environment(s).

**Additional Resource**: Learn more about [cases when reference publishing could fail](/docs/content-managers/publish-content/streamline-your-publishing-process-with-nested-reference-publishing/#cases-when-reference-publishing-could-fail).

## Common questions

### How deep can Nested Reference Publishing publish nested items?
You can publish nested items that are up to **5 levels** deep.

### Why do some referenced entries show an alert sign in the Publish References modal?
If few of the nested references do not meet the publishing validation criteria, you will see an alert sign across the entry.

### Why might an entry be skipped during nested reference publishing?
When entry(ies) or asset(s) are already published in a specific environment and locale, they can be marked as **Skipped**, and the process stops at the last published version of any nested reference.

### Where can I view the results of a bulk publish job?
You will be able to view the summary of your job in the **Publish Queue**, and view details by clicking the specific job.