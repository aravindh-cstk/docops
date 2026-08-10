---
title: "Migration to Image Preset Metadata from Native Asset Field Using Automate"
description: "This guide covers transferring data from native to custom image fields, including bulk metadata creation using the Automation Hub."
url: /headless-cms/migration-to-image-preset-metadata-from-native-asset-field-using-automate
---

# Migration to Image Preset Metadata from Native Asset Field Using Automate

## Migration to Image Preset Metadata from Native Asset Field Using Automate

Native File field data migration to the image preset custom field with preset metadata creation in bulk for all existing entries using the Automate.

## Diagram Walkthrough

**Tactical Rundown:**

The first step is setting up an Automation Trigger to set the trigger for bulk entries, we can choose either a workflow trigger, release trigger, or environment trigger to kick-start Automation for bulk entries.

Here's how the Automation would work:  

![image9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdcb8ab5462f525e8/65f9affbd4e0c036c429368c/image9.png)

1.  ### Set up the Workflow trigger
    
    Let's set up the Workflow trigger in Automate and get the output of entries which is moved to the image preset migration stage.
    
    **Note:** As a prerequisite, the respective workflow should be configured. Here's the [guide](/docs/headless-cms/about-workflows#set-up-workflows) on how to do so.
    
    ![image1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ae17ff3dd917e53/65f9affbe55fcb8155236249/image1.png)
    
2.  ### Get Entry data for native File field values
    
    Get Entry data for native asset file field values which need to be transformed to create metadata against it  
    
    ![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3de16d63d9131166/65f9affb0c744d49c57c1e6e/image2.png)
3.  ### Use Transform action to Create Preset Metadata Request Body
    
    Use Transform action to Create Metadata Request Body using native file field UID data
    
    ![image3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc38ab5cff6942304/65f9affb5fa1c63d064be8ef/image3.png)
4.  ### Make Create Metadata CMA call
    
    Make Create Metadata CMA call against those native field asset UIDs![image8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta26498fdb21b753b/65f9affc9b2cda0bb593f2ac/image8.png)
    
5.  Use Transform action to generate request Preset field Object for Entry update for adding metadata to preset field
    
    Transform Request Object for Entry update to migrate metadata to preset field.![image5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9f542aa9607eb542/65f9affb7a44b0fdf154aaed/image5.png)
    
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
    
6.  Use the Update Entry action to add Preset image data in the custom preset app field
    
    Update Entry with Preset image data in the custom preset app field![image5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9f542aa9607eb542/65f9affb7a44b0fdf154aaed/image5.png)
    
7.  Enable Throttle Execution toggle in Automation Setting
    
    While setting up Automate Enable Throttle Execution toggle to throttle automation's executions to help stay within API rate limits while performing bulk update operations on Entries.  
    ![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4aab3adfbed113e4/65f9affbba94f019447cfe9c/image4.png)
    
8.  Verify Migration of Preset data in entries
    
    Migration of native image field to preset app field completes
