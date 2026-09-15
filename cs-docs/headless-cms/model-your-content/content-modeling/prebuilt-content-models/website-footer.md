---
title: "Website Footer"
description: "The Website Footer content model includes fields and structures designed to capture the essential information about the footer of your website."
url: /headless-cms/website-footer
uid: blt1e442a06af2dd80b
---

# Website Footer

## Website Footer

The "Website Footer" refers to the content displayed at the bottom of every webpage on a site. It commonly encompasses elements such as navigation menu links, copyright details, contact information, social media icons, and various tools for visitors to interact with the website.

Let’s dive deep into how this model will help you create your company’s Website Footer.

1.  ## Analyzing Requirements for the Website Footer Page

    The “Website Footer” content model includes fields and structures designed to capture the essential information about the website footer.

    After publishing the entry, you can view the website footer on your website.

    ![Analyzing_Requirements_for_the_Website_Footer.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd9fa6c485136eaf9/65360c414782496379d01002/Analyzing_Requirements_for_the_Website_Footer.png)
2.  ## Identifying Content Model

    Let's identify the fields that build up your “Website Footer” content type that you see in the above step.

    ![Identifying_Content_Model_for_the_Website_Footer.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d54a05a25a3c048/65360c415a382f13aea25a4c/Identifying_Content_Model_for_the_Website_Footer.png)
3.  ## Developing Content Type

    The “Website Footer” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.  

    **Footer** Content Type:

    -   **Title**: This is where you'll provide your “Website Footer" a name. The [Title](/docs/headless-cms/title) field defines the title of the “Website Footer” content/entry.
    -   **Logo**: For logo, you will see a [File](/docs/headless-cms/file/) field that allows you to choose the website logo file and add it to the entry.
    -   **Navigation**: For the navigation, you will see a [Group](/docs/headless-cms/group/) field that showcases the navigation menu. It contains the following:
        -   **Link**: For the navigation item, you will see a [Link](/docs/headless-cms/link/) field that adds a navigation menu item as a title and links it for redirection.
        -   **Open in new tab**: You can choose to enable or disable the **Open in new tab** option with the help of a [Boolean](/docs/headless-cms/boolean/) field.
    -   **Social Media:** This is a [Global field](/docs/headless-cms/about-global-field/), and includes the following components:
        -   **Social Share**: Social Share is a [Group field](/docs/headless-cms/group) that covers the following set of fields:
            -   **Title:** You will find the [Title](/docs/headless-cms/title) field that defines the group title for the social media share.
            -   **Icon**: Here you will see the [File](/docs/headless-cms/file/) field where you get to upload or choose (from Assets) the social media icon.
            -   **Url**: The [Link](/docs/headless-cms/link/) field here will add a social media app name as a title, say “Twitter,” “Facebook,” “Instagram,” and so on and their respective links for redirection.
    -   **Copyright**: Copyright is a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field that holds the legal copyright information of the website.


This completes the creation of your "Website Footer" content model.

![website-footer.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f4f352175171bc4/65e080ff3759993f2a70bcf3/website-footer.png)

**Additional Resource**:

-   To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/headless-cms/import-prebuilt-content-models) documentation.
-   To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/marketplace/how-to-import-content-model) document.
