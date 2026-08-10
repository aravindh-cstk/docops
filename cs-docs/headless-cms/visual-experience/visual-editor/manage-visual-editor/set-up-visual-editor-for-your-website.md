---
title: "Set Up Visual Editor for Your Website"
description: "Transform your content management with Contentstack's Visual Editor. Edit and preview in real time for a seamless, advanced editing experience."
url: /headless-cms/set-up-visual-editor-for-your-website
---

# Set Up Visual Editor for Your Website

## Set Up Visual Editor for Your Website

Contentstack’s Visual Editor transforms the content management experience, enabling content managers to edit and preview website content in real time. Unlike the standard Live Preview feature, which only allows previews within entries, the Visual Editor offers advanced capabilities—letting you modify the website’s structure and design from the same interface. This feature provides an intuitive and interactive environment for updating content, ensuring greater control over the final published result.

This guide outlines the steps to set up and configure Visual Editor for your website. Follow these instructions to enable Live Preview, upgrade SDKs, and set up the Visual Editor for an optimized editing experience.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to [stack settings](/docs/headless-cms/view-stack-details)
-   [Live Preview](/docs/headless-cms/set-up-live-preview-for-your-website) must be set up for your website
-   [Preview token](/docs/headless-cms/about-delivery-tokens#about-preview-tokens)
-   IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

1.  ## Upgrade Delivery and Live Preview SDKs
    
    The Visual Editor requires Live Preview Utils version **3.0** or above and delivery SDK version 3.20.3 or above. To update to the latest versions, run the following command:
    
    ```
    npm install contentstack@latest @contentstack/live-preview-utils@latest
    ```
    
2.  ## Configure Visual Editor
    
    Pass the following config to the Live Preview init method:
    
    ```
    ...
    import ContentstackLivePreview from "@contentstack/live-preview-utils"
    ContentstackLivePreview.init({
      stackDetails: {
        apiKey: "your-stack-api-key",
        environment: "your-environment",
      },
      mode: "editor",
      ...
    });
    ...
    ```
    
    **Note:** To explore the different configuration properties, refer to the [config](/docs/headless-cms/get-started-with-live-preview-utils-sdk-v3#config) section.  
    Ensure Live Preview is set up for your website. Refer [Set Up Live Preview for Your Website](/docs/headless-cms/set-up-live-preview-for-your-website) for more information.
    
    ![Set-Up-Visual-Builder-1.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ca051cb1a7d6737/67110939014172885819932f/Set-Up-Visual-Builder-1.gif)
3.  ## Set Up Edit Tags
    
    Once you’ve set up Live Preview, you should be able to see your website in Visual Editor.
    
    ![Set_Up_Edit_Tags.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef88b4fb3e9a058b/6992e23f99cddc00082298e7/Set_Up_Edit_Tags.gif)
    
    Edit tags contain the location where the corresponding field lies within the entry. The Live Preview Utils SDK searches for the elements which contain the edit tags referred to as data-cslp.  
    Setting up edit tags will enable edit functionalities within your website.
    
    ```
    <main>
      <h1 {...(post.$?.title ?? {})}>{post.title}</h1>
      <div {...(post.$?.author.$?.name ?? {})}>{post.author.name}</div>
      <div {...(post.$?.body ?? {})}>{post.body}</div>
    </main>
    ```
    
    When your website runs in production, you should remove the edit tags. This will throw an error when you try to destructure an undefined value. Hence, we use the [Nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) and pass an empty object value.Refer to [Set Up Live Edit Tags for Entries with REST](/docs/headless-cms/set-up-live-edit-tags-for-entries-with-rest) to configure your tags. To enable actions like adding, deleting, and ordering an instance of a multiple field type, add live edit tags for each instance of the field. Refer to the [Enable Support for Multiple Field Actions in Visual Editor](/docs/headless-cms/set-up-live-edit-tags-for-entries-with-rest#enable-support-for-multiple-field-actions-in-visual-editor) section for more information.![Working_in_Visual_Editor.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7f61cf5d2f6dbedd/6992e4751084000008ac6cdd/Working_in_Visual_Editor.gif)By following these steps, you can fully configure the Visual Editor for your website, allowing seamless content management and live preview capabilities.
    
4.  ## Set the Page Context for Custom URL Entries
    
    If your stack uses custom URL patterns, entries are not tied to a single URL field, so Visual Editor needs the entry UID and content type UID to open the correct entry from the **Start editing** button. Set the page context with the setPageContext method from the Live Preview Utils SDK (4.4.4 or later).
    
    For the method signature, parameters, and CSR, SSR, and meta-tag examples, refer to [setPageContext(context)](/docs/headless-cms/get-started-with-live-preview-utils-sdk-v4#setpagecontextcontext) in the Live Preview Utils SDK config reference.
    
5.  ## \[Optional\] Enable Empty Placeholder for Multiple Fields
    
    Additionally, to display an empty placeholder when a modular blocks field is not populated, import the VB\_EmptyBlockParentClass from Live Preview Utils:
    
    ```
    import { VB_EmptyBlockParentClass } from '@contentstack/live-preview-utils'
    ```
    
    Add it as a class to the parent HTML element of all the block components:
    
    ```
    <div
      {...(entry.$?.page_components || {})}
      className={pageComponents?.length ? undefined : VB_EmptyBlockParentClass}
    >
    {/* Block components */}
    </div>
    ```
    
    Once added, you should see a empty placeholder for multiple fields.
    

## Tutorial Video
