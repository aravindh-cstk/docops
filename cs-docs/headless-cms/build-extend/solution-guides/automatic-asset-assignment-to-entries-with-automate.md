---
title: "Automatic Asset Assignment to Entries with Automate"
description: "This solution guide highlights a specific use case around keeping product data and images within the Contentstack platform."
url: /headless-cms/automatic-asset-assignment-to-entries-with-automate
---

# Automatic Asset Assignment to Entries with Automate

## Automatic Asset Assignment to Entries with Automate

When doing ecommerce with Contentstack it is in general best practice to keep product data and images in the ecommerce platform but sometimes you want to keep some of it in Contentstack and this guide talks about a specific use case around images.

The core idea is to read filenames of uploaded assets and according to known heuristics extract identifiers that can be used to find matching entries and then linking the assets to the entries with Content Management API calls. An example of such a pattern would be:

-   12323123\_1.jpg
-   12323123\_2.jpg
-   12323123\_3.jpg
-   12323123\_4.jpg

Which would result in those four assets being linked to product\_id 12323123 and ordered by the latter number (1-4).

Once all assets for a product are uploaded a sync script in the products entry sidebar should be triggered that fetches all the assets and links them to the entry.

One important note is that this process should not be triggered every time an asset is uploaded since that will result in parallel sync operations and lead to out of sync data.

## Initial Setup

Create a content type called Product with the following fields:

1.  A Single Line Text field called **Product Key**.
2.  A File field called **Product Images** (UID: product\_images) and allow multiple files.

![1st_image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5364cb1ab27f93dc/660d48df6c4a3915b1e46cd8/1st_image.png)

## Building the Automation

1.  ### Set the Trigger
    
    The trigger is a simple HTTP trigger, when testing it you should have a product\_key query parameter so the autocomplete in step 2 can pick it up.
    
    ![2nd_image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt126a4fdce8df05da/660d48e0df43aaf22bf123ea/2nd_image.png)
    
2.  ### Fetch assets with the given product key
    
    In step 2 we fetch all the assets with the product key we got in the query parameter in step 1. This is a straightforward CMA call with regex search in the filename. This returns a list of assets.
    
    ![4th_Image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb17b8f67e5771ace/660d48e06ccdb833d5a4f8ee/4th_Image.png)
    
    Your input looks like this:
    
    ![3rd_Image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c64ce63348db0ed/660d48dfdd5b9e99c0a89a4a/3rd_Image.png)
    
3.  ### Sort the images
    
    In step three we loop through the assets associated with the product key. We sort according to the latter part of the filename (123123\_2.jpg) and return just the sorted list of UID’s.
    
    ![5th_image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc3e9d828ee986f99/660d48df04d34cf5afbdaf38/5th_image.png)
    
4.  ### Fetch the entry for the given product key
    
    The trigger is a simple HTTP trigger, when testing it you should have a product\_key query parameter so the autocomplete in step 2 can pick it up.
    
    The full URL should be: https://eu-api.contentstack.com/v3/content\_types/product/entries?query={"product\_id":"{{1.query.product\_key}}"}
    
      
    ![6th_image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf4f378ac54f1abc3/660d48e1fa138c5f9387ed5a/6th_image.png)
5.  ### Update entry with sorted list of asset UIDs
    
    In the final step, we update the product entry with an updated and sorted list of asset UIDs
    
    ![7th_image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b13511fabfb5f49/660d48dfcac0bcbe81c87bb7/7th_image.png)
6.  ### Trigger automation from Entry Sidebar widget
    
    The final step is to set up an easy way to trigger the URL, one method (outside of scope for this guide) is to set up a Entry Sidebar widget with the following code (set unique\_automation\_key so it matches the URL from Step 1.):
    
    ```
    <html><head><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link href="https://www.contentstack.com/sdks/contentstack-ui-extensions/dist/latest/ui-extension-sdk.css" rel="stylesheet" type="text/css" media="all"><script src="https://www.contentstack.com/sdks/contentstack-ui-extensions/dist/latest/ui-extension-sdk.js"></script></head>
    <body>
       <script>
           window.extensionField = {};
           var product_key = null;
           ContentstackUIExtension.init().then(function (extension) {
               extensionField = extension;
               product_key = extensionField.entry.getField("product_key").schema.value;
           })
    
           function trigger_automation() {
               // URL from automation trigger
               var url = "https://eu-app.contentstack.com/automations-api/run/<unique_automation_key>?product_key=" + product_key;
               // Trigger the automation
               fetch(url)
           }
       </script>
       <button onClick="trigger_automation()">Sync product images for this entry</button>
    </body></html>
    ```
