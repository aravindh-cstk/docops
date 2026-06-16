---
title: Set Up Live Preview with GraphQL for SSR
description: Configure Live Preview with GraphQL for a Server-side Rendering (SSR) website.
url: https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-preview-with-graphql-for-server-side-rendering
product: Contentstack
doc_type: guide
audience:
  - developers
version: v3
last_updated: 2026-03-25
---

# Set Up Live Preview with GraphQL for SSR

This page explains how to configure Contentstack Live Preview with GraphQL for a Server-side Rendering (SSR) website. It is intended for developers setting up preview tokens, the Live Preview Utils SDK, and GraphQL request handling to enable real-time preview updates and (optionally) live edit tags.

Set Up Live Preview with GraphQL for SSR

Use [GraphQL APIs](https://www.contentstack.com/docs/developers/graphql-api/about-graphql) to preview content in real time with Live Preview. This guide explains how to configure [Live Preview](https://www.contentstack.com/docs/content-managers/author-content/about-live-preview) with GraphQL for a Server-side Rendering (SSR) website.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- Access to [stack settings](/docs/developers/set-up-stack/view-stack-details)
- [Preview token](https://www.contentstack.com/docs/developers/create-tokens/about-delivery-tokens#understanding-preview-tokens)
- IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

Follow these steps to configure Live Preview with GraphQL for your SSR website:
- ## Set Up the Website
To enable Live Preview on your website, begin by setting up the essentials—create a preview token, install the Live Preview Utils SDK, and configure your GraphQL requests to support real-time updates.

### Generate a Preview Token for Configuration
Create a preview token by navigating to **Settings** > **Tokens** > **Delivery Tokens** (press “Alt + O” for Windows or “Option + O” for Mac).

**Note:** It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.

Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **+ Create Preview Token** option and copy the generated token.
- ### Install and Initialize the Live Preview Utils SDK
Use the [**Live Preview Utils SDK**](/docs/developers/set-up-live-preview/get-started-with-live-preview-utils-sdk-v3) to listen for content updates and fetch real-time preview data on the server side.

Install the SDK using one of the following methods:

**Via npm:**

Install the SDK via npm:

```
npm install @contentstack/live-preview-utils
```
Initialize the SDK using the `init()` method:

```
import ContentstackLivePreview from "@contentstack/live-preview-utils";
ContentstackLivePreview.init({
  ssr: true,
  enable: true,
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
- **Via script:**

Install the SDK using a script tag in your HTML:

```

import ContentstackLivePreview from "https://esm.sh/@contentstack/live-preview-utils@3.0.1";

ContentstackLivePreview.init({
  enable: true,
  ssr: true,

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
- ### Utilize the Live Preview Hash
When your website runs inside the Live Preview panel in SSR mode, the SDK appends a hash to the URL as a query string parameter. Use this hash to retrieve the corresponding preview data from the server.
The following example uses an `Express.js` route handler to extract the Live Preview Hash from the query string.

```
app.get('/', async (request, response) => {
  const livePreviewHash = request.query.live_preview;
  const data = await gqlRequest(gql, livePreviewHash);
  ...
});
```
- ### Update the GraphQL URL and Headers
To enable Live Preview in the preview panel, update the GraphQL API’s hostname dynamically based on the presence of a hash.

**Example:** Basic configuration for GraphQL requests

```
const graphqlUrl = new URL(
  `https://graphql.contentstack.com/stacks/${REACT_APP_CONTENTSTACK_API_KEY}?environment=${REACT_APP_CONTENTSTACK_ENVIRONMENT}`,
);

function getHeaders() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("access_token", REACT_APP_CONTENTSTACK_DELIVERY_TOKEN);
  return headers;
}

export const gqlRequest = async (gql) => {
  const headers = getHeaders();
  const res = await fetch(graphqlUrl.toString(), {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query: gql }),
  });
  return res.json;
};
```
This example sets up the GraphQL endpoint and defines getHeaders() to supply the required headers. The gqlRequest() function fetches data from Contentstack’s GraphQL API.

**Example:** Conditional configuration for Live Preview

```
const graphqlUrl = new URL(
  `https://graphql.contentstack.com/stacks/${REACT_APP_CONTENTSTACK_API_KEY}?environment=${REACT_APP_CONTENTSTACK_ENVIRONMENT}`,
);

const GRAPHQL_HOST_NAME = "graphql.contentstack.com";
const LIVE_PREVIEW_HOST_NAME = "graphql-preview.contentstack.com";

function getHeaders() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("access_token", REACT_APP_CONTENTSTACK_DELIVERY_TOKEN);
  return headers;
}

export const gqlRequest = async (gql, hash) => {
  const headers = getHeaders();
  if (hash) {
    headers.append("live_preview", hash);
    headers.append("preview_token", REACT_APP_CONTENTSTACK_PREVIEW_TOKEN);
    headers.append("include_applied_variants", "true");
    graphqlUrl.hostname = LIVE_PREVIEW_HOST_NAME;
  } else {
    graphqlUrl.hostname = GRAPHQL_HOST_NAME;
  }

  const res = await fetch(graphqlUrl.toString(), {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query: gql }),
  });
  return res.json;
};
```
In this example, you can use the hash to selectively update the hostname and headers. To enable Live Preview, it is important to send both the hash and preview_token. Optionally, if you want to support variants in edit tags, include the include_applied_variants header.

Once configured, you can continue using GraphQL as usual.

**Note:** Always use a preview token for Live Preview instead of a read-only management token. For region-specific hostnames, refer to the [Base URLs for Live Preview](/docs/developers/apis/graphql-content-delivery-api#base-urls-for-live-preview) section.
- ## Host the Website
To host a website, you can simply use [launch](/docs/developers/launch) or any other website hosting service.

**Note:** Make sure your website is HTTPS enabled.
- ## Update Stack Settings
To set up Live Preview for the entries of your stack, perform the following steps:

Navigate to **Settings** and select **Environments**.
- [**Set the base URLs**](/docs/developers/set-up-environments/add-an-environment/) for different locales, and click **Save**.
- Select **Visual Experience** from the stack settings.
- In the **General** tab, select the **Enable Live Preview** checkbox.
- Set the **Default Preview Environment** and click **Save** to save the settings.**Tip:** You can also update the preview URL and environment from the preview settings available on the entry page.
- Enable the** Display Setup Status** toggle to display the configuration status. You can now see the Live Preview icon within all the entries of your stack and the feature previews data from the hosted website.
- ## Live Edit Tags for Entries (recommended)
Live Edit tags allow editors to directly jump from the Live Preview pane to the corresponding content fields in the entry editor. Clicking the **Edit** button next to a content block automatically opens the relevant field. If the field refers to another entry, you’ll be redirected to that entry’s editor page.

**Process entry for live editing**

Locate the section of your website's code responsible for fetching content from Contentstack. To ensure proper functionality of live editing, it's crucial to retrieve `system {uid}` from GraphQL at the root of the query and system `{uid, content_type_uid}` for all references.

Here is an example of the `gqlRequest()` method for your reference:

```
const query = `
  query HeaderQuery {
    all_header {
      items {
          page_Connection {
           edges {
             node {
               ... on Page {
                 title
                 system {
                   uid
                   content_type_uid
                 }
               }
             }
           }
         }
      system {
        uid
      }
    }
  }
}
`;

let entry = gqlRequest(query);
```
Next, include `_content_type_uid` and `uid` alongside system, and assign the values from `system.content_type_uid` to `_content_type_uid` and `system.uid` to `uid`. As a result, the final output will appear as follows:

```
{
  "all_header": {
    "items": [
      {
        "page_referenceConnection": {
          "totalCount": 1,
          "edges": [
            {
              "node": {
                "title": "Home",
                "url": "/",
                "uid": "blt336e63b68a71c1cb",
                "_content_type_uid": "page",
                "system": {
                  "uid": "blt336e63b68a71c1cb",
                  "content_type_uid": "page"
                }
              }
            }
          ]
        },
        "system": {
          "uid": "bltf9961a71ea3fd917"
        },
        "uid": "bltf9961a71ea3fd917"
      }
    ]
  }
}
```
- **Import the addEditableTags() method**

Install Contentstack Utils from npm using the following command:

```
npm i @contentstack/utils
```
Now, import the `addEditableTags()` method from the Contentstack SDK:

```
import {addEditableTags} from "@contentstack/utils"
import Contentstack from 'contentstack'
```
- **Generate edit tags for previewed entry content**

After retrieving data from Contentstack, pass the resultant entry within the `addEditableTags()` function to add edit tags to the previewed entry content:

```
addEditableTags(entry, content_type_uid, tagsAsObject, locale)
```
Here, entry is the actual entry you get from the SDK, `content_type_uid` is the unique ID of the current entry’s content type, and `tagsAsObject` determines the format in which the edit tag would be added.

**Note:** The `addEditableTags()` method does not return any value. It only modifies the entry passed as the first argument to the method.

By default, `tagsAsObject` is set to false, and it appends data-cslp in the form of a string as follows:

```
'data-cslp=path.to.field'
```
**Note:** This option is provided for React-based apps as you cannot directly add any attributes in string format. Instead, you need to destructure an object.

If `tagsAsObject` is set to true, the `data-cslp` attribute is returned in object format as follows:

```
{ 'data-cslp': 'path.to.field'}
```
Here's a sample that shows how the code would look once you add the `addEditableTags()` method:

```
let entry = gqlRequest(request);
addEditableTags(entry[0][0], "content_type_uid", false)
```
When you use the `addEditableTags()` method, a new key-value pair is returned at every level in the existing entry schema. This pair is known as the **edit tag** and is denoted by a dollar sign (**$**).

For example, consider that you passed the following entry schema against the first parameter in the `addEditableTags()` method:

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
Once the `addEditableTags()` method is executed, the entry passed against the first parameter is updated as follows:

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
- **Set up the Live Preview Utils SDK**

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
Here, the `clientUrlParams` key is optional and is set for the North America region. For Europe region, you can use the following config for `clientUrlParams`:

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
- **Configure live edit tags for each webpage**

Now, navigate to the section in your website's front-end HTML code where you need to pass the edit tags as attributes. To access an edit tag, fetch the path to a field in the entry and add a dollar sign (**$**) before the last field in the field depth hierarchy.

For example, if the path to your entry data is `data.description.height`, then the corresponding edit tag will be `data.description.$.height`.

Once you add the edit tag, content managers will be able to see the "Edit" icon whenever they hover over the corresponding content block on the website.

```

# {{ data.author.title }}

## {{ data.author.job_title }}

    {{ data.author.biography }}

        [mailto:{{ data.author.social.email }}](mailto:{{ data.author.social.email }})
        [https://www.twitter.com/{{ data.author.social.twitter }}](https://www.twitter.com/{{ data.author.social.twitter }})
        [https://www.instagram.com/{{ data.author.social.instagram }}](https://www.instagram.com/{{ data.author.social.instagram }})

```
For React-based applications, you can generate edit tags by setting the `tagsAsObject` parameter to true. When set to true, this parameter returns the edit tag in object format. You need to destructure the object while passing it within the JSX element.

Here is an example of an edit tag that is returned in object format:

```

# {data.name}

{data.description.height}

```

**Note: **This setup only works for generic websites that use basic JavaScript frontend code. For websites working on other programming languages, you need to provide the entire path to the specific field.
- **Add CSS to display edit buttons in the project****Note:** This step is not required for Live Preview SDK version 2.0.0 and above.

The styles for the live edit tags are available in the `@contentstack/live-preview-utils/dist/main.css` file. You can import these styles in your main `index.js` file as follows:

```
import "@contentstack/live-preview-utils/dist/main.css";
```
Alternatively, you can directly import the CSS within the HTML using the following code:

```

```

Once you have configured the settings, you will be able to see the Edit icon whenever you hover over a content block in your preview panel.

## Common questions

### Do I need a preview token to use Live Preview with GraphQL?
Yes. To enable Live Preview, it is important to send both the hash and preview_token.

### Where do I get the Live Preview hash in SSR?
When your website runs inside the Live Preview panel in SSR mode, the SDK appends a hash to the URL as a query string parameter (for example, `request.query.live_preview`).

### Which GraphQL host should I use for Live Preview?
Use `graphql-preview.contentstack.com` when a hash is present, and `graphql.contentstack.com` otherwise.

### Is HTTPS required for hosting the website?
Yes. **Note:** Make sure your website is HTTPS enabled.