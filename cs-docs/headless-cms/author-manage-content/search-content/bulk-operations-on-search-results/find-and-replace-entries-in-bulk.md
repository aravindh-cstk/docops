---
title: "Find and Replace Entries in Bulk"
description: "Update the same text across many Contentstack entries in one operation. Filter and select the entries, preview every match, then apply the changes in bulk."
url: /headless-cms/find-and-replace-entries-in-bulk
uid: blt507b87b655cfe2f5
---

# Find and Replace Entries in Bulk

## Find and Replace Entries in Bulk

Find and Replace lets you update the same text across many entries in a single operation from the entry list page, instead of opening and editing each entry. Search for a text string across a filtered set of entries and replace it, or remove it, in one go.

The operation runs only on text-based fields, applies to the branch and locales you select, and validates your permissions before it makes any change.

**Note:** Find and Replace is available as an add-on. Contact your Contentstack account team to enable it for your organization.

## When to Use Find and Replace

Use find and replace when the same text change applies to several entries, such as:

-   Renaming a product, feature, or brand term that appears across many entries.
-   Correcting a recurring typo or an outdated phrase.
-   Removing a deprecated label, tag, or note from a group of entries.

For example, rename a product across your content in one pass, replace “Automation Hub” with “Contentstack Automate” across 120 entries, instead of editing each entry by hand.

**Tip:** Narrow your filters and selection first. Find and replace runs on the entries you select, so a focused selection makes the results easier to review before you apply changes.

## Prerequisites

-   Update (edit) permissions for the entries, fields, and content types you want to change. Find and replace respects your role: entries and fields you cannot edit are excluded from the results.
-   The Variants plan, only if you want changes to apply to variant entries.

## How Matching Works

Choose one of three match types when you search. Each controls how strictly the search term is compared to the text in your entries.

| Match type | What it matches | Example (search “cyber”) |
| --- | --- | --- |
| Contains | The search term wherever it appears within a field, including inside a longer word. | Matches “cyber,” “cybersecurity,” and “cyberattack.” |
| Matches | Whole words identical to the search term, ignoring case. | Matches “cyber” and “Cyber,” but not “cybersecurity.” |
| Exactly matches | Whole words identical to the search term, including case. | Matches “cyber” only, not “Cyber” or “cybersecurity.” |

**Note:** A whole word is text bounded by spaces or punctuation. With **Matches**, searching “log” finds “log” and “Log” but not “login” or “catalog.”

Replacements run only in the branch you're working in, only on entries already localized in the locales you select, and only on entries and fields you have permission to edit. Ineligible entries are excluded from the results.

## Find and Replace Text Across Entries

To find and replace text, log in to your Contentstack account and perform the following steps:

1.  Go to your stack and open the **Entries** list.
2.  Apply the filters you need, content type, locale, variant group, and published environment, then select the entries to include.
3.  In the bulk-actions bar, click **Find and Replace**.
4.  Under **Match**, choose **Contains**, **Matches**, or **Exactly matches**, then enter your term in **Find**.
5.  In **Replace With**, enter the replacement text.

    **Note:** To remove text instead of replacing it, select **Clear** rather than entering replacement text. Find and replace then deletes every matching occurrence within your selection.

6.  Click **Preview Changes**.
7.  Review the matches under **Preview Matching Results**. Each row shows the **Entry**, **Locale**, **Field**, and **Updates**. The **Updates** column shows the matched text alongside the replacement, so you can check each change without opening the entry.
8.  Select or clear individual changes or entries to control exactly what applies. The preview reflects the matches found when you generated it; the replacement applies to the latest version, so results can differ if entries change in between.
9.  Click **Apply Selected Changes**.
10.  In the **Replace Text** dialog, review the summary (for example, “Replace text in 100 fields across 32 entries”), optionally add the entries to a release (see below), then click **Replace Text**.
11.  Track progress in the task panel at the bottom right of the entry list. The panel is titled **Tasks in Progress** while the job runs and **Tasks Completed** when it finishes.
12.  To review the job at any time, go to your stack, click **Settings** in the top navigation bar, and open the [**Bulk Task Queue**](/docs/headless-cms/stack-bulk-task-queue) tab. The find job appears as **Bulk Find** and the replacement as **Bulk Replace** in the **Task Details** column. Open a job to review **All Entries**, **Successful Entries**, and **Failed Entries**, and select **Retry** on any failed entry.

**Note:**

-   Contentstack replaces all matches in an entry in a single operation, so an entry is either updated fully or fails as a whole. It is never left partially changed. Other entries in the same job are not affected; successful entries stay replaced even if some entries fail.
-   One find operation allows one replace operation. Reopening a job from the **Bulk Task Queue** restores it in the exact state it had when you ran the find. You can review the results, but you cannot regenerate the preview or replace it again. To run another replacement, select **Clear** to reset the **Find** and **Replace With** fields, then start a new find.

## Bundle Replaced Entries into a Release

After you apply changes, add the successfully replaced entries to a release from the **Replace Text** dialog so you can publish them together. Under **Add to a Release (optional)**, select an existing release or create a new one. To label the new versions, select **Apply custom version name** and enter a name in **Name for Updated Version(s)**.

**Tip:** You can add the entries to an existing release or create a new one from the **Replace Text** dialog.

## How Find and Replace Handles Your Content

Find and replace works within your existing content rules. The behavior below explains what it changes and what it skips.

-   **Permissions**: Find and replace validates permissions at the content type, entry, and field levels. Entries and fields you cannot edit are excluded from the results, so you only act on content you're allowed to change. If you don't have edit access to any of the matching entries, the results come back empty.
-   **Branches**: The operation is branch-specific. Changes apply only in the branch where you start the operation and do not affect other branches.
-   **Localization**: Find and replace runs only on entries already localized in the locales you select. It skips fallback locales and does not localize an entry in order to replace text. For example, if you select only the Arabic locale, only entries localized in Arabic are changed.
-   **Variants**: If the Variants plan is enabled, find and replace applies to variant entries. A change to a non-variant field in the base entry also appears in the variant entries that inherit that field.
-   **Non-localizable fields**: When you replace text in a non-localizable field in the master locale, the change propagates according to the existing non-localizable behavior, without disrupting other locales.
-   **Field rules and validation**: Before it saves, Contentstack runs schema validation on each entry. If a replacement would break a field rule, for example, exceeding a maximum character limit or falling below a minimum, that entry fails validation and is not changed.
-   **Latest version and drafts**: The replacement always runs on the latest version of the entry at the time of the replacement, not the version shown in the preview, to prevent content conflicts. If the latest version has a draft, Contentstack merges the draft and then replaces the text, saving the result as a new version.
-   **Content deleted during the operation**: If an entry, content type, or branch is deleted while a replacement is in progress, Contentstack handles it as a standard failure for the affected entries.
-   **Skipped entries**: If the latest version of an entry no longer contains the search text (for example, it changed after you previewed), Contentstack skips that entry rather than failing it.

**Additional Resources:**

-   To learn how to publish grouped content, refer to the [Releases](/docs/headless-cms/about-releases) documentation.
-   To refine which entries appear before you run a replacement, refer to [Advanced Search](/docs/headless-cms/advanced-search).
