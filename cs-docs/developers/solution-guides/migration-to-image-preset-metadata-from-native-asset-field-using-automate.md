---
title: "[Solution Guides Articles] - Migration to Image Preset Metadata from Native Asset Field Using Automate"
description: Native File field data migration to the image preset custom field with preset metadata creation in bulk for all existing entries using the Automate.
url: https://www.contentstack.com/docs/headless-cms/migration-to-image-preset-metadata-from-native-asset-field-using-automate
product: Contentstack
doc_type: solution-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Solution Guides Articles] - Migration to Image Preset Metadata from Native Asset Field Using Automate

This page explains how to migrate native File field data to an image preset custom field by creating preset metadata in bulk for existing entries using Automate. It is intended for developers setting up automation workflows to perform bulk entry updates and should be used when transitioning from native asset fields to preset metadata fields.

## Migration to Image Preset Metadata from Native Asset Field Using Automate

Native File field data migration to the image preset custom field with preset metadata creation in bulk for all existing entries using the Automate.

## Diagram Walkthrough

**Tactical Rundown:**

The first step is setting up an Automation Trigger to set the trigger for bulk entries, we can choose either a workflow trigger, release trigger, or environment trigger to kick-start Automation for bulk entries.

Here's how the Automation would work:

- ### Set up the Workflow trigger

  Let's set up the Workflow trigger in Automate and get the output of entries which is moved to the image preset migration stage.

  **Note:** As a prerequisite, the respective workflow should be configured. Here's the [guide](/docs/developers/set-up-workflows-and-publish-rules#set-up-workflows) on how to do so.

- ### Get Entry data for native File field values

  Get Entry data for native asset file field values which need to be transformed to create metadata against it

- ### Use Transform action to Create Preset Metadata Request Body

  Use Transform action to Create Metadata Request Body using native file field UID data

- ### Make Create Metadata CMA callMake Create Metadata CMA call against those native field asset UIDs![image8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta26498fdb21b753b/65f9affc9b2cda0bb593f2ac/image8.png)

- Use Transform action to generate request Preset field Object for Entry update for adding metadata to preset fieldTransform Request Object for Entry update to migrate metadata to preset field.

```
{
"entry": {
"banner_image_preset": {
"uid": "{banner_image_uid}",
"_content_type_uid": "sys_assets",
"lookup":"{lookup}",
"metadata": "{metadata}",
"extension_uid": "blt42b2de65c82f3ce3"
},
"asset": "{asset}"
}
}
```

- Use the Update Entry action to add Preset image data in the custom preset app fieldUpdate Entry with Preset image data in the custom preset app field![image5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9f542aa9607eb542/65f9affb7a44b0fdf154aaed/image5.png)

- Enable Throttle Execution toggle in Automation SettingWhile setting up Automate Enable Throttle Execution toggle to throttle automation's executions to help stay within API rate limits while performing bulk update operations on Entries.![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4aab3adfbed113e4/65f9affbba94f019447cfe9c/image4.png)

- Verify Migration of Preset data in entriesMigration of native image field to preset app field completes

## Common questions

**Q: What triggers can be used to kick-start Automation for bulk entries?**  
A: We can choose either a workflow trigger, release trigger, or environment trigger to kick-start Automation for bulk entries.

**Q: What is the prerequisite before setting up the Workflow trigger?**  
A: As a prerequisite, the respective workflow should be configured.

**Q: Why enable the Throttle Execution toggle in Automation Setting?**  
A: Enable Throttle Execution toggle to throttle automation's executions to help stay within API rate limits while performing bulk update operations on Entries.

**Q: What is being migrated in this process?**  
A: Native File field data migration to the image preset custom field with preset metadata creation in bulk for all existing entries using the Automate.