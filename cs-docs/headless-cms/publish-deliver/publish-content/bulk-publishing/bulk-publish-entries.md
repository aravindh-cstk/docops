---
title: "Bulk Publish Entries"
description: "Effortlessly publish multiple content entries with Contentstack's bulk publish feature, ensuring consistency and efficiency across your platforms."
url: /headless-cms/bulk-publish-entries
uid: bltb8bba90526b5c581
---

# Bulk Publish Entries

## Bulk Publish Entries

The bulk publish feature allows you to publish multiple entries along with their linked or referenced content, ensuring a seamless and consistent publishing experience. This feature is ideal for bulk updates or managing releases with multiple content components efficiently.

**Note:** [Nested Reference Publishing](/docs/headless-cms/about-nested-reference-publishing/) is a plan-based feature. Reach out to our [support](mailto:support@contentstack.com) team for more information.

To bulk publish entries, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Entries” icon. You can also use the shortcut key “E” (for both Windows and Mac OS users).
2.  Use the checkboxes to select the entries you want to publish.
3.  After selecting the entries, click the **Publish** option in the floating panel that appears. ![Bulk_Publish_Entries_PublishIcon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta5d82ab37735ef52/6764e41d93a84baf1da341ea/Bulk_Publish_Entries_PublishIcon.png)
4.  In the **Publish Entries** modal:

    1.  **Select Environment(s)**: Select the environment(s) where the entries will be published.
    2.  **Select Language(s)**: Select the locale(s) in which you want the entries published. If localized content exists, it will be selected by default.
    3.  **Publish**: Select whether to publish the entries immediately (**Now**) or at a scheduled time (**Later**).

    **Note:** When publishing multiple localized and unlocalized versions of an entry, you can select up to **50 languages** and **50 environments**.

    ![Bulk_Publish_Entries_PublishModal1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde62ae0e98db59e8/678f35439d626e91d411c9e8/Bulk_Publish_Entries_PublishModal1.png)
5.  Click **Send With References** to publish the selected entries along with their referenced items, or **Send Without References** to publish only the selected entries.

**Note**:

-   If a content type or global field is updated after an entry was created (for example, a new required field is added), Contentstack validates the entry against the latest configuration when you publish. If any required field is empty, the entry cannot be published until you complete it.
-   When publishing multiple entries, only the latest version of each entry will be published.
-   Nested references are limited to a depth of **5 levels**, and only the latest versions of nested references will be published.
-   You can publish up to **100 entries** in **10 languages** across **10 environments** at a time.
-   When scheduling bulk publishing, the date cannot exceed **12 months** from the current date.

## Roll Back a Bulk Publish

You can roll back items published through a bulk publish action from the Publish Queue. Use bulk rollback to restore items to their previously published state after an unintended publish.

**Note:** A bulk publish rollback reverts each selected item to its previously published version in the selected environment, or unpublishes the item if no previous version exists.

**Additional Resource**:

-   For automated bulk publishing, refer to the [Bulk Publish and Unpublish Content](/docs/headless-cms/cli-bulk-publish-and-unpublish-content/v1) guide.
-   To publish with entry variants, refer to our documentation on [Publish an Entry Variant](/docs/headless-cms/publish-an-entry-variant) and [Understanding How Publishing Works with Entry Variants](/docs/headless-cms/understanding-how-publishing-works-with-entry-variants).
