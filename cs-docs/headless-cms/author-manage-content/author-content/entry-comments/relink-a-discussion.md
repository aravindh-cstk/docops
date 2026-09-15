---
title: "Relink a Discussion"
description: "Relink unlinked discussions in Contentstack to a new field."
url: /headless-cms/relink-a-discussion
uid: blt010067137bdb9c66
---

# Relink a Discussion

## Relink a Discussion

Some discussions are unlinked from their fields due to the recent changes in content type or entry. This typically occurs in the following scenarios:

-   **Marking fields as "Multiple" or reverting them to "Single":** Fields such as “[Group](/docs/headless-cms/group),” “[Modular Blocks](/docs/headless-cms/modular-blocks),” or “[Global](/docs/headless-cms/about-global-field)” are made up of multiple subfields, and you can create discussions for each subfield. However, when you change the parent field to “[Multiple](/docs/headless-cms/multiple),” the discussion loses track of the subfield it was linked to. The same issue occurs when you change a parent field from "Multiple" back to "Single".

    **Note:** You can add comments only to the primitive subfields within “Group,” “Modular Blocks,” or “Global” fields, such as “Boolean,” “Select,” “Link,” “Single Line Textbox,” “Multiline Textbox,” and so on.

-   **Metadata not provided via API:** To identify each instance of a field marked as "Multiple," you must include the \_metadata parameter in the API request. If the \_metadata parameter is not provided, the discussion cannot identify the specific field instance it was linked to.

When a discussion is unlinked from a field, it moves to the “Active” section in the right navigation panel and remains in the “Unlinked” state.

To relink such discussions to a field of your choice, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and edit an existing entry.
2.  Go to the “Discussions” tab, where the **Active** section is displayed by default.
3.  Go to the unlinked discussion and click on **ReLink**. ![Relink_a_Discussion2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbf979925b2963403/678df59abf5204a1da7cf7fb/Relink_a_Discussion2.png)
4.  A popup titled **Relink Field With** appears with a list of alternative fields from which you can select one to link this discussion to.

    **Note:** You cannot relink a discussion to a field that has an active discussion.

5.  Click **Confirm** to relink the discussion to a field.

After relinking the comments to a field, the discussion becomes active and appears in the field view on the entry page.
