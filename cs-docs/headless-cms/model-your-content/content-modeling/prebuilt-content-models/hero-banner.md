---
title: "[Features Content Models] Hero Banner"
description: "The Hero Banner content model is a well-structured system designed for front-page hero banner content information on your website.
"
url: /headless-cms/hero-banner
---

# [Features Content Models] Hero Banner

## Hero Banner

A “Hero Banner” is a large, visually appealing image or video that is prominently displayed at the top of a website's homepage. It is typically the first thing that visitors see when they land on a webpage and is designed to grab their attention.

The Hero Banner Content Model is a thoughtfully designed system for gathering and organizing essential information for the hero banner content that appears on your website's front page.

Let’s understand how this content model will assist you in creating a Hero Banner for your webpage.

1.  ## Analyzing Requirements for the Hero Banner
    
    The “Hero Banner” in your webpage will be the point of attraction for your webpage. It will include the brief details about your webpage and a Call-to-Action (CTA) button for the users.
    
    Here is how a Hero Banner will look like on your webpage:
    
    ![Analyze_Requirements_for_the_Hero_Banner.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77b5ad3f25865f93/65360bf2d3195307fa0dafba/Analyze_Requirements_for_the_Hero_Banner.png)
2.  ## Identifying Content Model
    
    Let's identify the fields that create the Hero Banner for your webpage content type that you see in the above step.
    
    ![Identifying_the_Content_Model_for_the_Hero_Banner.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt699d351b92ebeefd/65360bf25904dc7e3daa336f/Identifying_the_Content_Model_for_the_Hero_Banner.png)
3.  ## Developing Content Type
    
    The “Hero Banner” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.
    
    **Hero Banner** Content Type:   
    **Banner Title**: This is a [Title](/docs/headless-cms/title) field where you will add a unique name to your banner. It is a mandatory field and must be clear and concise.   
    **Banner Image**: This field allows you to insert images in your banner. We have used a [File](/docs/headless-cms/file/) field to make this possible.  
    **Background Color**: You can set a background color of your choice for the banner. Here, we have used a [Custom](/docs/headless-cms/custom/) field that adds [Color Picker](/docs/marketplace/color-picker/) as an extension to make this possible.  
    **Text Color**: You can set a text color of your choice for the banner. Here, we have used a [Custom](/docs/headless-cms/custom/) field that adds [Color Picker](/docs/marketplace/color-picker/) as an extension to make this possible.  
    **Banner Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field where you can add content in the banner. This content can be a brief description of the content that you have included in the webpage or anything else.  
    **Call To Action**: This is a [Link](/docs/headless-cms/link/) field to add links based on your requirement.   
    **Is Banner Image Full Width?**: This is a [Boolean](/docs/headless-cms/boolean) field that controls whether the banner image on a web page is displayed in full width. By default, the banner image is displayed in full width i.e, the default value for this field is true.  
    **Banner Image Alignment**: You can set the image alignment in the banner as per your requirement. To do this, we have used a [Select](/docs/headless-cms/select) field with Single Choice as the Selection Type.  
    **Content Alignment**: You can set the alignment for the content as per your requirement. To do this, we have used a [Select](/docs/headless-cms/select) field with Single Choice as the Selection Type to select the alignment of the content.

This completes the creation of the “Hero Banner” content model.

![hero-banner.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5933f17b998ae172/65e07f34eb46a63e7c7e9702/hero-banner.png)

**Additional Resource**:

-   To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/headless-cms/import-prebuilt-content-models) documentation.
-   To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/marketplace/how-to-import-content-model) document.
