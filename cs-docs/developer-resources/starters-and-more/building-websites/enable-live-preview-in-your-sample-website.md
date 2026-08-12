---
title: "Enable Live Preview in Your Sample Website"
description: "Learn how to set up Live Preview in your website with Contentstack. See your website changes in real-time before publishing."
url: /headless-cms/enable-live-preview-in-your-sample-website
---

# Enable Live Preview in Your Sample Website

## Enable Live Preview in Your Sample Website

After learning how to add a new page to our Getting Started website, this guide will help you set up a Live Preview allowing you to see your website in action.

Live Preview lets users preview entry content across multiple channels before saving or publishing it to a live website. You can edit an entry and preview the content changes side by side in real-time.

## Steps to Follow

To enable live preview in our website you need to perform the following steps:

1.  Generate preview token in the already created delivery token
2.  Enable Live Preview in the Stack
3.  Update the code with the Live Preview Changes
4.  Pushing the Live Preview changes to Git repository
5.  Deploy new changes using Launch

### Generate Preview Token In Existing Delivery Token

1.  Click on the Stack Settings icon and click on **Tokens**.
2.  Open the previously generated delivery token (PlateStack)
3.  Click on **\+ Create Preview Token**  
    ![1. Create Preview Token.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ecebe9e379f9079/66d5c0d455d3e050d8d1ac3c/1._Create_Preview_Token.png)
4.  Copy the Generated Preview token and save it in the .env file as:
    
    ```
    REACT_APP_CONTENTSTACK_PREVIEW_TOKEN=<YOUR_PREVIEW_TOKEN>
    ```
    
5.  Click on **Save** to save the **Preview** token.

### Enable Live Preview in the Stack

1.  Click on the Stack Settings icon and click on **Live Preview**.
2.  Tick the checkbox of **Enable Live Preview**.
3.  Select the **Default Preview Environment** i.e., **Development**.  
    ![2. Select the Default Preview Environment - Development.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b352ebb0ee764fa/66d5c0d4bbafa705385cf13f/2._Select_the_Default_Preview_Environment_-_Development.png)
4.  Click on **Save**.

### Update the code with the Live Preview Changes

Follow these steps to set up live preview through the code:

1.  Go to src/sdk/utils.ts file. This file has all the SDK initialization logic.
    
    1.  Add the following two methods at the top of the file:
        
        ```
        const getLivePreviewHostByRegion = (region: string) => {
            switch (region) {
              case "US":
                return "rest-preview.contentstack.com";
              case "EU":
                return "eu-rest-preview.contentstack.com";
              case "AZURE_NA":
                return "azure-na-rest-preview.contentstack.com";
              case "AZURE_EU":
                return "azure-eu-rest-preview.contentstack.com";
              default:
                return "rest-preview.contentstack.com";
            }
          };
        const getHostByRegion = (region: string) => {
            switch (region) {
              case "US":
                return "app.contentstack.com";
              case "EU":
                return "eu-app.contentstack.com";
              case "AZURE_NA":
                return "azure-na-app.contentstack.com";
              case "AZURE_EU":
                return "azure-eu-app.contentstack.com";
              case "GCP_NA":
                return "gcp-na-api.contentstack.com";
              default:
                return "app.contentstack.com";
            }
          };
        ```
        
    2.  Update the Environment Variable with REACT\_APP\_CONTENTSTACK\_PREVIEW\_TOKEN at the top of initializeContentstackSdk
        
        ```
        const {
            REACT_APP_CONTENTSTACK_API_KEY,
            REACT_APP_CONTENTSTACK_DELIVERY_TOKEN,
            REACT_APP_CONTENTSTACK_ENVIRONMENT,
            REACT_APP_CONTENTSTACK_REGION,
            REACT_APP_CONTENTSTACK_PREVIEW_TOKEN
          } = process.env;
        ```
        
    3.  Update the Contentstack.Stack method within the initializeContentstackSdk with the below code:
        
        ```
        const Stack = Contentstack.Stack({
            api_key: REACT_APP_CONTENTSTACK_API_KEY as string,
            delivery_token: REACT_APP_CONTENTSTACK_DELIVERY_TOKEN as string,
            environment: REACT_APP_CONTENTSTACK_ENVIRONMENT as string,
            region: region,
            live_preview: {
              enable: true,
              host: getLivePreviewHostByRegion(REACT_APP_CONTENTSTACK_REGION as string),
              preview_token: REACT_APP_CONTENTSTACK_PREVIEW_TOKEN as string
            }
          });
        ```
        
    4.  Install Live Preview Utils SDK package via npm using the following command:
        
        ```
        npm install @contentstack/live-preview-utils
        ```
        
    5.  Import ContentstackLivePreview along with other imports at the top of the file:
        
        ```
        import ContentstackLivePreview from "@contentstack/live-preview-utils";
        ```
        
    6.  Initialize the Live Preview SDK below the Contentstack.Stack method and before return stack:
        
        ```
        ContentstackLivePreview.init({
            stackSdk: Stack
        });
        ```
        
    7.  Finally, at the end of the file export the onEntryChange method:
        
        ```
        export const onEntryChange = ContentstackLivePreview.onEntryChange;
        ```
        
    8.  Finally, save the file.
    
    Here’s what you did above:
    
    1.  Added getLivePreviewHostByRegion and getHostByRegion to the top of the file
    2.  Updated the Environment Variable import for REACT\_APP\_CONTENTSTACK\_PREVIEW\_TOKEN
    3.  Updated Stack Initialization with the live\_preview parameter
    4.  Installed Live Preview SDK via npm
    5.  Imported ContentstackLivePreview along with other imports
    6.  Initialized the Live Preview SDK by passing stack information
    7.  Added onEntryChange to the exports at the end of file
2.  Go to src/routes/index.ts file. This is the file that maintains the routing logic of our application.
    
    1.  Import onEntryChange from src/sdk/utils at the top of the file:
        
        ```
        import { onEntryChange } from "../sdk/utils";
        ```
        
    2.  In the useEffect function, wrap the fetchInitialData method within the onEntryChange handler before invoking it:
        
        ```
        useEffect(() => {
            onEntryChange(() => {
              fetchInitialData(dispatch, setLoading);
            });
          }, [dispatch]);
        ```
        
    3.  Save the file.
    
    Here's what you did above:
    
    1.  Added onEntryChange to the import statement
    2.  Wrapped fetchInitialData function with onEntryChange
3.  Go to src/components/menu/Menu.tsx file. This file consists of the Rendering Logic of the Menu Page of our Restaurant Menu Website.
    
    1.  Import onEntryChange from src/sdk/utils at the top of the file:
        
        ```
        import { onEntryChange } from "../../sdk/utils";
        ```
        
    2.  In the useEffect function, wrap the fetchMenuPageData method within the onEntryChange handler before invoking it:
        
        ```
        useEffect(() => {
            onEntryChange(() => {
              fetchMenuPageData(dispatch, setLoading);
            });
          }, [dispatch]);
        ```
        
    3.  Save the file.
    
    Here's what you did above:
    
    1.  Added onEntryChange to the import statement.
    2.  Wrapped fetchMenuPageData Function with onEntryChange

### Pushing the Live Preview Changes to Git Repository

The changes done above are in your local machine. Let’s see how to deploy this using Launch to take it live.

1.  Open a new Terminal in VS code (press control + shift + \` or click on **Terminal** > **New Terminal**).
2.  With multiple files modified, it is essential to commit and push them to Git to facilitate a successful deployment.
3.  Now, let’s stage all the files that you need to commit. Run the below command in the terminal. You will see the list of files staged.
    
    ```
    git add . -v
    ```
    
    ![3. View the list of files staged.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f9c7bb7663a6376/66d5c0d4305302bd3d77eb22/3._View_the_list_of_files_staged.png)
4.  After the changes are staged, commit the staged files to the repository. Run the below command in the terminal. You will see the number of files changed.:
    
    ```
    git commit -m "Add Live Preview changes"
    ```
    
    ![4. View the number of files changed.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd417b52bfcf30e9b/66d5c0d4305302bc2277eb24/4._View_the_number_of_files_changed.png)
    
    Note:
    
    -   Let’s give a commit message “Add Live Preview changes” with -m flag. It’s a good practice to provide a commit message whenever you add new changes to the repository.
    -   Insertions and deletions count may differ for you.
    
5.  After committing the changes, push the changes to the repository. Run the below command in the terminal:
    
    ```
    git push origin main
    ```
    
    ![5. push the changes to the repository.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd7e47febc0f4de8c/66d5c0d43bf41eef81a40b97/5._push_the_changes_to_the_repository.png)

You have successfully pushed your changes to Git. Now let’s deploy the new changes using Launch.

### Deploy New Changes Using Launch

To deploy the changes you added to your application, perform the following set of steps:

1.  Go to [Launch](https://launch.contentstack.com) and click the **contentstack-getting-started-react-app** project
2.  By default, Launch will auto deploy new changes whenever you push code to the **main** branch of our repository. You would see a status of **Deploying** in the default environment as soon as the code is pushed.![6. Status of the default Environment changes to Deploying on code push.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7de598e4a219cdde/66d5c0d48f798d2543df8fcf/6._Status_of_the_default_Environment_changes_to_Deploying_on_code_push.png)
3.  Click on the “Settings” icon (press “S”) on the left navigation panel, and click on **Environments**.
4.  Select the **development** environment and navigate to **Environment Variables**.
5.  Scroll down and under the **Environment Variables** section, click on **\+ Add Environment Variable**.
6.  Now, to run our application with **Live Preview**, we need to add following environment variable from your .env file:
    
    ```
    REACT_APP_CONTENTSTACK_PREVIEW_TOKEN=YOUR_PREVIEW_TOKEN
    ```
    
7.  Finally, click **Save Environment Variables**.
8.  Click on the “Environments” icon (press “E”) on the left navigation panel, and click the **Default** environment.
9.  Finally, click on **Redeploy**.
10.  Once the deployment is completed, the status will be **Live**, click on the **Environment URL** to view the website.

## View Live Preview of Your Webpage

To start viewing your website in the Live Preview panel, perform the following steps:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login) and navigate to the organization in which you have your “Getting Started” stack.
2.  Click on the “Settings” icon (press “S”) on the left navigation panel, and click on the **Environments**.
3.  Click the **development** environment and update the base URL with the Launch Environment URL where your website is deployed and click **Save**.
4.  Click on the “Entries” icon (or press “E”) on the left navigation panel.
5.  Go into any of the entry (say, “Footer”) and open the “Live Preview” tab from the right sidebar![7. Footer entry - open the Live Preview panel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt760760bcee65adaa/66d5c3239ca1fedf34754eff/7._Footer_entry_-_open_the_Live_Preview_panel.png)
6.  Modify any value of a field and see it updated in the **Live Preview** panel instantly![8. Instantly view changes made to a field value in the Live Preview..png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf15322a2156f75ee/66d5c0d455d3e0b605d1ac40/8._Instantly_view_changes_made_to_a_field_value_in_the_Live_Preview..png)

## Live Edit Tags (optional)

Live edit tags allow you to navigate to the field that contains the website content being previewed within the Live Preview pane. When you click on the “Edit” button beside a content block in the preview pane, you will be redirected to the corresponding field within the entry. If the field holds reference to another entry, you will be redirected to the referenced entry's editor page.

For example of Live Edit Tags let us consider the header entry and the Respective code changes to Enable Live edit Tag

1.  To enable the Live Edit Tag buttons, add addEditableTags from @contentstack/utils
2.  When making API calls to retrieve an entry, pass that entry to the following function. This function modifies the entry and adds additional data, as discussed below.
3.  For example, in the header entry you have the following data:
    
    ```
    {
      "logo": {
        "title": "Header Logo.png",
        "url": "https://images.contentstack.io/v3/assets/Header_Logo.png"
      },
      "navigation_links": {
        "link": [
          { "title": "Home", "href": "/" },
          { "title": "Menu", "href": "/menu" },
          { "title": "About Us", "href": "/about-us" },
          { "title": "Contact", "href": "/contact" }
        ]
      }
    }
    ```
    
4.  Once it is passed to the addEditableTags, the entry is modified as follows:
    
    ```
    {
      "logo": {
        "title": "Header Logo.png",
        "url": "https://images.contentstack.io/v3/assets/Header_Logo.png",
        "$": {
          "url": "header.blt8tvsk328dbw258.en-us.logo",
          "title": "header.blt8tvsk328dbw258.en-us.logo.title"
        }
      },
      "navigation_links": {
        "link": [
          {
            "title": "Home",
            "href": "/",
            "$": {
              "title": "header.blt8tvsk328dbw258.en-us.navigation_links.link.0.title",
              "href": "header.blt8tvsk328dbw258.en-us.navigation_links.link.0.href"
            }
          },
          {
            "title": "Menu",
            "href": "/menu",
            "$": {
              "title": "header.blt8tvsk328dbw258.en-us.navigation_links.link.1.title",
              "href": "header.blt8tvsk328dbw258.en-us.navigation_links.link.1.href"
            }
          },
          {
            "title": "About Us",
            "href": "/about-us",
            "$": {
              "title": "header.blt8tvsk328dbw258.en-us.navigation_links.link.2.title",
              "href": "header.blt8tvsk328dbw258.en-us.navigation_links.link.2.href"
            }
          },
          {
            "title": "Contact",
            "href": "/contact",
            "$": {
              "title": "header.blt8tvsk328dbw258.en-us.navigation_links.link.3.title",
              "href": "header.blt8tvsk328dbw258.en-us.navigation_links.link.3.href"
            }
          }
        ]
      }
    }
    ```
    
5.  The “$” object consists of a key called data-cslp which follows a specific syntax that enables the live preview SDK to map fields within the entry page.
    
    ```
    {content_type_uid}.{entry_uid}.{locale}.{field_uid}
    ```
    
6.  By using the “$” object, you need to map each and every element in the frontend code that needs to have a live edit button. For example the logo of header
    
    ```
    <img {...logo.$.url}="" src="{logo?.url}" alt="Logo">
    ```
    

For complete Live Preview code with Live Edit tags, please check out the **livePreview** Branch by executing the below command:

```
git checkout live-preview
```

## Next Steps

[Starters and Samples](https://www.contentstack.com/docs/developers/sample-apps)
