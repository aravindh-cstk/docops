---
title: "Publish an Entry Variant"
description: "Learn how to publish entry variants in Contentstack to deliver personalized content tailored to specific user segments."
url: /headless-cms/publish-an-entry-variant
uid: blt48f12a694cad09af
---

# Publish an Entry Variant

## Publish an Entry Variant

**Note:** The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

Publishing entry variants in Contentstack allows you to deliver personalized content tailored to specific user segments.

To publish an entry variant, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:

1.  Navigate to the desired [stack](/docs/headless-cms/about-stack), click the **Entries** icon in the left navigation panel, and select an existing entry variant, indicated by the variants icon on the entries list page.
2.  Click the **Publish** button within the entry editor.
3.  In the **Publish Entry Variant** modal that appears, under **Select Environment(s)** and **Select Language(s)**, select the environment(s) and the locale(s) to which you want to publish the entry.
4.  Under **Publish**, you have two sub-options – **Now** (to publish immediately) and **Later** (to publish at a later date/time that you provide).

    When you select “Later”, a group of options appear asking you to select the **Date** and **Time** of publishing, and the **Time-Zone**.

5.  Confirm your settings by clicking the **Send** button.
6.  If you have nested references within your entry variant, the The **Publish Reference(s)** modal showing all the nested references for the entry will open up.
7.  Click **Send With References** to send the entry along with all its nested references for publishing.![1-Publish-Entry-Variant.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltced2aa68dd077a81/66fa9202762d3a12215a9d60/1-Publish-Entry-Variant.gif)

    **Note:**

    -   If no previous or current version of the base entry is published in the selected environment(s) and language(s), the base entry will be published by default.
    -   If a content type or global field is updated after an entry was created (for example, a new required field is added), Contentstack validates the entry against the latest configuration when you publish. If any required field is empty, the entry cannot be published until you complete it.


Alternatively, when publishing the base entry, you can **Select Variant(s)** from the dropdown in the **Publish Entry** modal. Choose from the available entry variants to publish them alongside the base entry.

![2-Publish-Base-Entry-with-Entry.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt81fccaa9f02d8360/66fa9202a18b1f913c01451b/2-Publish-Base-Entry-with-Entry.gif)

By following these steps, you can effectively publish entry variants in Contentstack, enabling personalized content delivery to specific user segments.

## API Reference

To publish an entry variant via API, refer to the [Publish Entry Variant](/docs/developers/apis/content-management-api/entry-variants#publish-entry-variant) API requests.
