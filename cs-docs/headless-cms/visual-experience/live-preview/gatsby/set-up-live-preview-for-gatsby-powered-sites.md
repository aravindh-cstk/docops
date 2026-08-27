---
title: "Set Up Live Preview for Gatsby-Powered Sites"
description: "Learn how to configure live preview for Gatsby-powered websites using GraphQL in Contentstack."
url: /headless-cms/set-up-live-preview-for-gatsby-powered-sites
uid: blt7f2b85e3b4724100
---

# Set Up Live Preview for Gatsby-Powered Sites

## Set Up Live Preview for Gatsby-Powered Sites

Gatsby is an open-source framework that combines functionality from React, [GraphQL](/docs/headless-cms/about-graphql), and Webpack into a single tool for building static websites and apps. This guide explains how to configure [Live Preview](/docs/headless-cms/about-live-preview) for your Gatsby-powered websites using Contentstack.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Access to [stack settings](/docs/headless-cms/view-stack-details)
-   [Preview token](https://www.contentstack.com/docs/headless-cms/about-delivery-tokens#understanding-preview-tokens)
-   Website that uses [Contentstack Delivery SDKs](/docs/developers/sdks)
-   IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) errors

Follow these steps to configure Live Preview with GraphQL for your Gatsby-powered website:

1.  ## Set Up the Website

    To enable Live Preview on your website, begin by setting up the essentials—create a preview token, install the Live Preview Utils SDK, and configure your GraphQL requests to support real-time updates.

    1.  ### Generate a Preview Token

        Create a preview token by navigating to **Settings** > **Tokens** > **Delivery Tokens** (press “Alt + O” for Windows or “Option + O” for Mac).

        **Note:** It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.

        Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **\+ Create Preview Token** option and copy the generated token.

        ![Preview Token Setup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt15ab5f111f767ae8/684ac9714d8175ee4bc8dc4a/0._enable_preview_token.png)

    2.  ### Initialize the Contentstack Gatsby Class

        Create a live-preview.js file in the src folder (or any preferred path). Import ContentstackGatsby from the gatsby-source-plugin, initialize it with your config, and export it. This enables Live Preview data fetching.

        ```
        // live-preview.js
        import { ContentstackGatsby } from "gatsby-source-contentstack/live-preview";
        export const getCSData = new ContentstackGatsby({
          api_key: GATSBY_CONTENTSTACK_API_KEY,
          environment: GATSBY_CONTENTSTACK_ENVIRONMENT,
          live_preview: {
            preview_token: GATSBY_CONTENTSTACK_PREVIEW_TOKEN,
            enable: true,
            host: "rest-preview.contentstack.com"
          }
        });
        ```

        **Note:** For the **North America** endpoint, set the host parameter to rest-preview.contentstack.com. For other data centers:

        -   **AWS EU:** eu-rest-preview.contentstack.com
        -   **Azure NA:** azure-na-rest-preview.contentstack.com
        -   **Azure EU:** azure-eu-rest-preview.contentstack.com
        -   **GCP NA:** gcp-na-rest-preview.contentstack.com
        -   **GCP EU:** gcp-eu-rest-preview.contentstack.com

    3.  ### Install and Initialize the Live Preview Utils SDK

        Use the [Live Preview Utils SDK](/docs/headless-cms/get-started-with-live-preview-utils-sdk-v3) to listen for content updates and fetch real-time preview data on the client side.

        Install the Live Preview Utils SDK package via npm by running the following command:

        ```
        npm install @contentstack/live-preview-utils@contentstack/utils
        ```

        Initialize the SDK using the init() method to set up event listeners for content updates:

        ```
        // live-preview.js
        import ContentstackLivePreview from "@contentstack/live-preview-utils";

        ContentstackLivePreview.init({
          enable: true,
          ssr: false,
          stackSdk: getCSData.stackSdk,

          // Recommended: Enables Edit Tags
          editButton: { enable: true },
          stackDetails: {
            apiKey: "your api key",
            environment: "your environment value",
            branch: "your branch",
          },
          clientUrlParams: {
            protocol: "https",
            host: "app.contentstack.com", // Use region-specific host if applicable
            port: 443,
          },
        });
        ```

        **Note:** To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.

    4.  ### Configure Live Preview Across Each Webpage

        When you update an entry, the onEntryChange() method detects the change and runs your defined logic to fetch updated data.

        The example below demonstrates how to enable Live Preview for a Gatsby page.

        ```
        import React from "react";
        import { graphql } from "gatsby" 
        import ContentstackLivePreview from "@contentstack/live-preview-utils";
        import LivePreviewInitComponent from "../components/LivePreviewInitComponent"
        export const pageQuery = graphql`
        // your Gatsby query
        query {
          allContentstackPage {
            nodes {
              title
              url
            }
          }
        }`;

        const Home = (props) => {
          return (
                <LivePreviewInitComponent />

            <div>{props.data.allContentstackPage.nodes[0].title}</div>
          );
        };

        export default Home;
        ```

        In the example above, the title is displayed directly from the props received by the component. To make Live Preview work, you need to store this data in the component’s state so it can update automatically when content changes. First, import ContentstackLivePreview and getCSData (from step two). Then, create a function that fetches the updated data using getCSData.get() and update the state with this new data. Finally, connect this function to ContentstackLivePreview.onLiveEdit(), which will call the function every time someone edits the entry, allowing you to see the changes instantly. Make sure your GraphQL query includes both \_\_typename and uid fields—these are needed by Live Preview to correctly track and refresh the content.

        ```
        import React, { useEffect, useState } from "react";
        import { graphql } from "gatsby" 
        import ContentstackLivePreview from "@contentstack/live-preview-utils";
        import LivePreviewInitComponent from "../components/LivePreviewInitComponent"
        import { getCSData } from "../live-preview";
        export const pageQuery = graphql`
        // your Gatsby query
        query {
          allContentstackPage {
            nodes {
              title
              url
            }
          }
        }`;

        const Home = (props) => {
          const [data, setData] = useState(props.data.allContentstackPage.nodes[0]);

          const fetchLivePreviewData = async () => {
            const updatedData = await getCSData.get(props.data.allContentstackPage.nodes[0]);
            setData(updatedData);
          };

          useEffect(() => {
            ContentstackLivePreview.onLiveEdit(fetchLivePreviewData);
          }, []);

          return (
                <LivePreviewInitComponent />

            <div>{data.title}</div>
          );
        };

        export default Home;
        ```

        **Note:**

        -   In the above example, onLiveEdit() is used instead of onEntryChange() because onLiveEdit() only runs the fetch function when you are actively editing content. This helps avoid unnecessary updates. If you use onEntryChange() together with ContentstackGatsby.get(), it can cause issues and may lead to errors.
        -   If your content model supports multiple locales, make sure to pass the locale explicitly in the object passed to getCSData.get(). Omitting the locale may cause the SDK to fetch data incorrectly or fail altogether, especially if no default locale fallback is configured.

2.  ## Host the Website

    To host a website, you can simply use [launch](/docs/launch) or any other website hosting service.

3.  ## Update Stack Settings

    To set up Live Preview for the entries of your stack, perform the following steps:

    1.  Navigate to **Settings** and select **Environments**.
    2.  [**Set the base URLs**](/docs/headless-cms/add-an-environment/) for different locales, and click **Update**.  
        ![Base URL Setup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbaa7fda3f1479aaa/684ac97134388681002cdeee/1._edit_environment_box.png)
    3.  Select **Visual Experience** from the stack settings.
    4.  In the **General** tab, select the **Enable Live Preview** checkbox.
    5.  Set the **Default Preview Environment** and click **Save** to save the settings.

        **Tip:** You can also update the preview URL and environment from the preview settings available on the entry page.

    6.  Enable the **Display Setup Status** toggle to display the configuration status. ![Enable_LP_Open_in_New_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b2de40925240e2f/69bd80e04440ed410cb1da8e/Enable_LP_Open_in_New_Tab.png)

        You can now see the Live Preview icon within all the entries of your stack and the feature previews data from the hosted website.

4.  ## Live Edit Tags for Entries (recommended)

    Live Edit tags allow editors to directly jump from the Live Preview pane to the corresponding content fields in the entry editor. Clicking the **Edit** button next to a content block automatically opens the relevant field. If the field refers to another entry, you’ll be redirected to that entry’s editor page.

    ![track_and_edit_in_live_preview_panel](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3596a5d35f6da045/64faab205813cbd69b457fc6/Track-and-Edit-Content-in-Preview-Pane.gif)

    Edit tags contain the location where the corresponding field lies within the entry. The [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk) searches for the elements which contain the edit tags referred to as data-cslp.

    The structure of the **edit tag** (field location in the entry) you can pass against the data-cslp attribute is as follows:

    ```
    {content_type_uid}.{entry_uid}.{locale}.{field_uid}
    ```

    Here's a sample field path:

    ```
    home.blt80654132ff521260.en-us.modular_blocks.block_1.media_group_uid.image_uid
    ```

    **Note:** If the field is nested within another complex field, such as Modular Blocks, provide the field path as follows: {modular\_block\_field\_UID}.{block\_UID}.{field\_UID}.

    For a website built using Contentstack's [JavaScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk/), you can use the addEditableTags() method to automatically generate the edit tag for you. The following section explains how you can set up live edit tags using addEditableTags().

    #### Set Up Live Editing Using the addEditableTags Method

    1.  **Process entry for live editing**

        Update the query to incorporate \_\_typename and uid for all the references within the data. This is crucial to ensure accurate redirection of references. Then, navigate to the website's code where the entry is retrieved, which, in this case, occurs just before it is assigned to the state.

        ```
        const fetchLivePreviewData = async () => {
            const updatedData = await getCSData.get(props.data.allContentstackPage.nodes[0]);
            setData(updatedData)
          }
        ```

        After obtaining the data, utilize the ContentstackGatsby.addContentTypeUidFromTypename() method to include \_content\_type\_uid in the references, as it is a necessary step.

        ```
        const fetchLivePreviewData = async () => {
            const updatedData = await getCSData.get(props.data.allContentstackPage.nodes[0]);
        ContentstackGatsby.addContentTypeUidFromTypename(updatedData)
        // call addEditableTags here
            setData(updatedData)
          }
        ```

        **Note:** You can skip using the ContentstackGatsby.addContentTypeUidFromTypename() method if there are no references in the page.

    2.  **Import the addEditableTags() method**

        Install the Contentstack Utils from npm:

        ```
        npm i @contentstack/utils
        ```

        Import the addEditableTags from Contentstack utils:

        ```
        import {addEditableTags} from "@contentstack/utils"
        ```

    3.  **Generate edit tags for previewed entry content**

        After retrieving data using the ContentstackGatsby class, pass the resultant entry within the addEditableTags() function to add edit tags to the previewed entry content:

        ```
        addEditableTags(entry, content_type_uid, tagsAsObject, locale)
        ```

        Here, entry is the actual entry you get from the SDK, content\_type\_uid is the unique ID of the current entry’s content type, and tagsAsObject determines the format in which the edit tag would be added.

        **Note:** The addEditableTags() method does not return any value. It only modifies the entry passed as the first argument to the method.

        By default, tagsAsObject is set to false, and it appends data-cslp in the form of a string as follows:

        ```
        'data-cslp=path.to.field'
        ```

        **Note:** This option is provided for React-based apps as you cannot directly add any attributes in string format. Instead, you need to destructure an object.

        If tagsAsObject is set to true, the data-cslp attribute is returned in object format as follows:

        ```
        { 'data-cslp': 'path.to.field'}
        ```

        Here's a sample that shows how the code would look once you add the addEditableTags() method:

        ```
        addEditableTags(props.data.allContentstackPage.nodes[0], "content_type_uid", false)
        ```

        When you use the addEditableTags() method, a new key-value pair is returned at every level in the existing entry schema. This pair is known as the edit tag and is denoted by a dollar sign (**$**).

        For example, consider that you passed the following entry schema against the first parameter in the addEditableTags() method:

        ```
        {
            "name": "John Doe",
            "description": {
                "occupation": [{
                    "name": "Plumber",
                    "since": 1920
                }],
                "height": "5ft"
            }
        }
        ```

        Once the addEditableTags() method is executed, the entry passed against the first parameter is updated as follows:

        ```
        {
            "name": "John Doe",
            "$": {
                "name": "profile.blt8tvsk328dbw258.en-us.name"
            },
            "description": {
                "$": {
                    "occupation": "profile.blt8tvsk328dbw258.en-us.description.occupation",
                    "height": "profile.blt8tvsk328dbw258.en-us.description.height"
                },
                "occupation": [{
                    "$": {
                        "name": "profile.blt8tvsk328dbw258.en-us.description.occupation.name",
                        "since": "profile.blt8tvsk328dbw258.en-us.description.occupation.since"
                    },
                    "name": "Plumber",
                    "since": 1920
                }],
                "height": "5ft"
            }
        }
        ```

    4.  **Set up the Live Preview Utils SDK**

        Live Preview requires the stack API key and host URL to perform appropriate redirection to the relevant stack.

        ```
        ContentstackLivePreview.init({
            ...
            stackDetails: {
               apiKey: "your api key",
               environment: "your environment",
               branch: "your branch"
        },
           clientUrlParams: {

               host: "app.contentstack.com",

           },
        })
        ```

        Here, the clientUrlParams key is optional and is set for the North America region. For other [regions](/docs/administration/about-regions), you can use the following configurations for clientUrlParams.  
        For Europe region, use the following config:

        ```
        {
           host: "eu-app.contentstack.com"
        }
        ```

        For Azure NA region, use the following config:

        ```
        {
           host: "azure-na-app.contentstack.com"
        }
        ```

        For Azure EU region, use the following config:

        ```
        {
           host: "azure-eu-app.contentstack.com"
        }
        ```

    5.  **Configure live edit tags for each webpage**

        Now, navigate to the section in your website's front-end HTML code where you need to pass the edit tags as attributes. To access an edit tag, fetch the path to a field in the entry and add a dollar sign (**$**) before the last field in the field depth hierarchy.

        For example, if the path to your entry data is data.description.height, then the corresponding edit tag will be data.description.$.height.

        Once you add the edit tag, content managers will be able to see the "Edit" icon whenever they hover over the corresponding content block on the website.

        ```
        <header class="text-center">
            <div class="author">
                <img {{ data.author.profile_image.$.url }} src="{{ data.author.profile_image.url }}" alt="{{ data.author.title }}"/>
            </div>
            <h1 {{ data.author.$.title }}>{{ data.author.title }}</h1>
            <h2 class="author-job" {{ data.author.$.job_title }}>{{ data.author.job_title }}</h2>
            <p class="author-bio" {{ data.author.$.biography }}>{{ data.author.biography }}</p>
            <div class="author-social">
                <a href="mailto:{{ data.author.social.email }}"><ion-icon name="mail-outline"></ion-icon></a>
                <a href="https://www.twitter.com/{{ data.author.social.twitter }}"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="https://www.instagram.com/{{ data.author.social.instagram }}"><ion-icon name="logo-instagram"></ion-icon></a>
            </div>
        </header>
        ```

        For React-based applications, you can generate edit tags by setting the tagsAsObject parameter to true. When set to true, this parameter returns the edit tag in object format. You need to destructure the object while passing it within the JSX element.

        Here is an example of an edit tag that is returned in object format:

        ```
        <h1 {...data.$.name}>{data.name}</h1><p> {...data.description.$.height}>{data.description.height}</p>
        ```

        **Note:** This setup only works for generic websites that use basic JavaScript frontend code. For websites working on other programming languages, you need to provide the entire path to the specific field.

    6.  **Add CSS to display edit buttons in the project**

        **Note:** This step is not required for Live Preview SDK version 2.0.0 and above.

        The styles for the live edit tags are available in the @contentstack/live-preview-utils/dist/main.css file. You can import these styles in your Gatsby pages or your layout components as follows:

        ```
        import "@contentstack/live-preview-utils/dist/main.css";
        ```

        Alternatively, you can directly import the CSS within the HTML using the following code:

        ```
        <link rel="stylesheet" href="https://unpkg.com/@contentstack/live-preview-utils@1.4.3/dist/main.css">
        ```


    Once you have configured the settings, you will be able to see the Edit icon whenever you hover over a content block in your preview panel.

    ![edit_icon_in_the_live_preview_panel](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt322231bc032d4b33/64faab1e9e7ba6bd92ca9de9/Edit_icon_in_preview_window.jpg)
