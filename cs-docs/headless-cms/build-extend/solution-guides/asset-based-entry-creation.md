---
title: "Asset-based Entry Creation"
description: "This guide assists in establishing an automated workflow for generating a product page upon creating a new asset."
url: /headless-cms/asset-based-entry-creation
uid: bltc66dabdc408579af
---

# Asset-based Entry Creation

## Asset-based Entry Creation

Streamlines the process of creating an entry after creating a product asset. It helps reduce user click-through time and reduces the amount of busy work they need to do.

## Tactical Rundown

### Automation 1 - Asset Detail Page Creation

Here's the overview of the Automation that you need to create:

![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b5020a092b98929/65f996ce9b2cda349d93f11e/image2.png)

1.  Asset Trigger
    1.  Select the Asset Trigger and choose **Asset Created**
    2.  Select the Stack you want to target with the automation
2.  Transform Connector

    Choose the Transform Connector

    1.  We create a bare-bones entry creation payload with the asset details. We assume the product page uses the “Title” and “Description” fields from the asset details page.  
        ![image1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4aff128aa09798ac/65f996cf0780b99f7761dedd/image1.png)
    2.  Below is the snippet you can use to create the entry payload. Feel free to add more details to the JSON, if needed.

        ```
        {
            "entry": {
                "title": "{title}",
                "description": "{description}",
                "product_image": "{file}"
            }
        }
        ```

3.  Create an Entry Connector

    1.  Select the stack and content type from the previous steps
    2.  Entry data should be the transform statement you receive in Step 2

    ![image5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt564237b581b9f498/65f996ce9b2cda26d693f122/image5.png)

### Automation 2 - Asset Update Detail Page

Here's the overview of the Automation that you need to create:

![image3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0e878e57e373baa9/65f996cff50f9a84fa7c1c67/image3.png)

1.  Asset Trigger
    1.  Select the Asset Updated trigger
    2.  Select the same stack used in the previous automation.
2.  Javascript Code Block Connector
    1.  We need to fetch the entry by UID of the asset to update the correct Product Detail Page  
        ![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fbae91d1ac74dd8/65f996cff2a2921840bf5ebd/image4.png)
    2.  Here's the code snippet used above:  

        ```
        const apiKey = input.apiKey;
        const deliveryToken = input.deliveryToken;
        const environment = input.environment;
        const contentType = input.contentType;
        const uid = input.assetUID;

        // Build the URL for the API request
        const url = `https://cdn.contentstack.io/v3/content_types/${contentType}/entries?environment=${environment}&query={"product_image":"${uid}"}`;

        // Set the headers required by Contentstack
        const headers = {
          'Content-Type': 'application/json',
          'api_key': apiKey,
          'access_token': deliveryToken
        };
        try {
          const response = await fetch(url, {
            headers });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          } const data = await response.json();
          return data;
        } catch (error) {
          return error.message }
        ```

3.  Transform Connector

    Below is what the transform statement looks like to update the entry with the new details. As you can see the input values take the title and description from the trigger event.

    ![image6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb01f71a7e5ac902a/65f996cf5fa1c6a5e64be7db/image6.png)
4.  Update Entry Connector
    1.  Select the **Update Entry** Action  
        ![image7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf1afc8d2965211c7/65f996cf55464d0c3e0e0e33/image7.png)
    2.  The **Stack** should be from a response in step 1.
    3.  The **Content Type** should be from a response in step 1.
    4.  The **Entry** should be from a response in step 1.
    5.  The **Entry Data** should be from a response in step 3.
