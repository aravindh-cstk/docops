---
title: "Website Header"
description: "The Website Header content model defines the structure and fields to design the header of your website."
url: /headless-cms/website-header
---

# Website Header

## Website Header

The header is a constant element located at the top of each page, including key components such as the website’s title, logo, and navigation menu. The "Website Header" Content Model is thoughtfully designed to gather and structure vital information pertaining to your website’s header, guaranteeing a unified and influential branding encounter.

Let’s dive deep into how this model will help you create your company’s Website Header.

1.  ## Analyzing Requirements for the Website Header
    
    The “Website Header” content model defines the structure and fields to design the website header of your website.
    
    Here’s how your website header looks after you publish the entry  
    
    ![Analyzing_Requirements_for_the_Website_Header.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6f25e20821c2f811/65360c2be5f6ed25bef77fae/Analyzing_Requirements_for_the_Website_Header.png)
    
2.  ## Identifying Content Model
    
    Let's identify the fields that build up your Website Header content type that you see in the above step  
    
    ![Identifying_Content_Model_for_the_Website_Header.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0f2085769e4b1d1/65360c2b6ca7486c3dc20e66/Identifying_Content_Model_for_the_Website_Header.png)
    
3.  ## Developing Content Type
    
    The “Website Header” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.
    
    **Header** Content Type:
    
    -   **Title**: This is where you'll provide your Website Header a name. This is a [Title](/docs/headless-cms/title) field that displays the title of the website header entry. This mandatory field defines the title of the Website Header.
    -   **Logo**: Choose an appropriate image file to add as the website logo. The Logo field is a [File](/docs/headless-cms/file/) field. This is also a mandatory field. The image size must not exceed 100 Kb.
    -   **Navigation Menu**: This is a [Group](/docs/headless-cms/group/) field with the following fields in it:
    -   **Notification Bar**: This is a [Group](/docs/headless-cms/group/) field with the following fields in it:
    -   **Label**: This [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field is used to name the navigation items in the Navigation Menu.
    -   **Call To Action**: This is a [Link](/docs/headless-cms/link/) field where you can add the links to the navigation items in the Navigation Menu.
    -   **Open in New Tab**: This is a [Boolean](/docs/headless-cms/boolean/) field that, if enabled, lets you open the link in a new tab.
    -   **Announcement Text**: You can add any announcement to your website using this [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field.
    -   **Show Announcement?**: You can enable or disable the announcement in this [Boolean](/docs/headless-cms/boolean/) field.

This completes the creation of your “Website Header” content model.

![website-header.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9fa2d56453cff243/65e086e674714158b60a3ef2/website-header.png)

**Additional Resource**:

-   To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/headless-cms/import-prebuilt-content-models) documentation.
-   To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/marketplace/how-to-import-content-model) document.
