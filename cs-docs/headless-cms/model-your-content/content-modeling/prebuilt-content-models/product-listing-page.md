---
title: "[Features Content Models] Product Listing Page"
description: "Create a Product Listing Page in Contentstack to display product images, descriptions, prices, and more in a structured layout."
url: /headless-cms/product-listing-page
---

# [Features Content Models] Product Listing Page

## Product Listing Page

The “Product Listing Page” content model provides a structured schema to display a list of multiple products and their details. Using this content model, you can choose to display a comprehensive view of your product details such as product images, descriptions, prices, and other information ensuring visitors get a complete understanding in one glance.

Let’s dive deep into how this model will help you create your company’s “Product Listing Page” content model.

1.  ## Analyzing Requirements for the Product Listing Page
    
    The Product Listing Page content model includes three main sections:
    
    -   The “Product Listing Page” hero banner
    -   The “Products List” section cards
    -   The “Related Products” list
    
    Here’s how your Product Listing Page will look like on your website:
    
    ![Analyzing_Requirements_for_the_Product_Listing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd1fd24628014d55f/65360c12340b70a56f94269e/Analyzing_Requirements_for_the_Product_Listing_Page.png)
2.  ## Identifying Content Model
    
    Let's identify the fields that build up your Product Listing Page content type that you see in the above step.
    
    ![Identifying_Content_Model_for_the_Product_Listing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c3c3db2b868d5e6/65360c112c35818546b39907/Identifying_Content_Model_for_the_Product_Listing_Page.png)
3.  ## Developing Content Type
    
    The “Product Listing Page” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.
    
    **Product Listing Page** Content Type:
    
    -   **Title**: This is where you need to provide your “Product Listing Us" page a name. The [Title](/docs/headless-cms/title) field defines the title of the Product Listing page/entry.
    -   **URL**: Here goes the web URL of your “Product Listing" page. When clicked on, this link provided in the [URL](/docs/headless-cms/url) field takes users straight to your Product Listing page.
    -   **Page Components**: The different sections that you see on your “Product Listing" page have been collectively considered together, and hence have used the [Modular Block](/docs/headless-cms/modular-blocks/) field to create the following components:
        -   **Hero Banner**: This is the first block which is a big, bold section at the top of your page, usually with standout images or messages. In this block, a [reference](/docs/headless-cms/reference) field is used to fetch content from the [Hero Banner](/docs/headless-cms/hero-banner#developing-content-type) content type.
        -   **Product:** This is the second block where you will be able to see the list of related products. For this block, a [reference](/docs/headless-cms/reference) field is used to fetch content from the **Product** content type as explained in the section below.
        -   **Widget:** This is the third block that includes the list of products on your page. Your list can appear in cards that contain multiple details.
            -   **Title H2:** This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field that defines the title of this widget section.
            -   **Related Products:** This is a [Reference](/docs/headless-cms/reference#self-referencing) field that refers to the **Product Listing Page** content type.
    -   **SEO**: The SEO [Global](/docs/headless-cms/about-global-field/) field consists of multiple fields, as listed below:
        -   **Meta Title:** Meta Title is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field where you can add the meta title of your entry.
        -   **Meta Description:** Meta Descriptions is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field where you can add the meta description of your entry.
        -   **Meta Keywords:** Meta Keywords is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field where you can add the meta keywords of your entry.
        -   **Enable Search Indexing:** You can enable or disable the searches in this [Boolean](/docs/headless-cms/boolean/) field. If you turn it on, it makes sure search engines can find your page. If you turn it off, it keeps the page more private.
    
      
    **Product** Content Type:
    
    -   **Title**: This is a [Title](/docs/headless-cms/title) field that defines the title of the product entry. This is a mandatory field and must be unique.
    -   **URL**: This is a [URL](/docs/headless-cms/url/) field that adds the redirection URL of the entry. This is a mandatory field.
    -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the product description.
    -   **Featured Image**: This is a [File](/docs/headless-cms/file/) field that allows you to select the product image(s) and add it to the entry. You can add multiple images to this field.
    -   **Price**: This is a [Number](/docs/headless-cms/number) field that stores the price of the product.
    -   **Call To Action**: This is a [Link](/docs/headless-cms/link/) field that stores the button name as a title and URL for submitting product details.
    

This completes the creation of your “Product Listing Page” content model.

![product-listing-page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6807fc00984b4c20/65ea98b91b585aefc23de12c/product-listing-page.png)

  

**Additional Resource**:

-   To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/headless-cms/import-prebuilt-content-models) documentation.
-   To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/marketplace/how-to-import-content-model) document.
