---
title: "[Personalize] - Setup Next.js Website with Personalize - Vercel"
description: "This guide will help you setup your Next.js website with Personalize, hosted on Vercel."
url: https://www.contentstack.com/docs/personalize/setup-nextjs-website-with-personalize-vercel
product: Contentstack Personalize
doc_type: guide
audience:
  - developers
  - implementers
version: latest
last_updated: 2026-03-25
---

# [Personalize] - Setup Next.js Website with Personalize - Vercel

This page explains how to set up a Next.js (App Router) website hosted on Vercel to work with Contentstack Personalize using the Personalize Edge SDK, including middleware-based request proxying, fetching variant content, and optionally setting attributes and triggering events.

## Setup Next.js Website with Personalize - Vercel

This guide will help you setup your Next.js website with Personalize, hosted on Vercel.

## Prerequisites
- Next.js website on the latest version (14 and above) with [app router](https://nextjs.org/docs/app)
- Website content sourced from a Stack
- Website deployed on Vercel
- Personalize project created and connected to the Stack

## Steps for Execution
To set up your Next.js website with Personalize, perform the following steps:

### Get Personalize Project UID
To retrieve the project UID, perform the steps given below:
- Navigate to **Personalize** > your preferred project.
- Click the **Settings** icon in the left navigation panel.
- In the **General** tab, under **Project Details**, you will find the 24-character project UID.
- Click the **Copy** icon to copy the project UID to your clipboard. We will need this UID while setting up the Personalize Edge SDK in the next step.

### Proxy Requests with Middleware
[Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) allows you to execute logic on the edge before each request on the website. Using this feature, we can make a call to the [Personalize Edge API](../../api-docs/api-detail/personalize-edge-api.md) and fetch the [User Manifest](./glossary-key-features.md#user-manifest) for each visitor. The User Manifest contains the selected Variant for each Experience. We can then pass these variants as the URL query parameters.

Let’s take a look at each one of these steps.
- #### Install the Personalize SDK
To install the Personalize Edge SDK in your Next.js project:

```
$ npm install @contentstack/personalize-edge-sdk
```

**Additional Resource**: The [API Reference](../developers/create-content-types/reference.md) for the SDK contains a lot of information on how to use the SDK.

- #### Create the Middleware Handler
The `middleware.ts` is to be created at the root folder of your website source code. To create the Middleware Handler:

```
// middleware.ts
export default async function middleware(req: NextRequest) {
  return NextResponse.next();
}
```

The Middleware will now allow you to proxy all requests.

- #### Initialize the SDK
Now modify the middleware.ts file with the following code to initialize the Personalize Edge SDK:

```
import {
  NextRequest,
  NextResponse,
} from 'next/server';
import Personalize from '@contentstack/personalize-edge-sdk';
export default async function middleware(req: NextRequest) {
  const projectUid = process.env.NEXT_PUBLIC_PERSONALIZATION_PROJECT_UID as string;
  // set a custom edge API URL
  if (process.env.CONTENTSTACK_PERSONALIZE_EDGE_API_URL) {
  Personalize.setEdgeApiUrl(process.env.CONTENTSTACK_PERSONALIZE_EDGE_API_URL);
  }
  // Initialize the SDK and pass the request as well
  const personalizeSdk = await Personalize.init(projectUid, {
    request: req,
  });
  return NextResponse.next();
}
```

Here, we initialize the Personalize Edge SDK. Notice how we are passing the `request` object along. As part of the initialization process, the user context is extracted from the `request` object and used to fetch the [User Manifest](./glossary-key-features.md#user-manifest) from the Personalize Edge API. The Manifest provides a list of variants selected in each published experience.

**Note**: You can also provide a different Edge API URL in case you are on a different Contentstack region. Here are the Edge API URLs for each region:

AWS NA: `https://personalize-edge.contentstack.com`
- AWS EU: `https://eu-personalize-edge.contentstack.com`
- Azure NA: `https://azure-na-personalize-edge.contentstack.com`
- Azure EU: `https://azure-eu-personalize-edge.contentstack.com`
- GCP NA: `https://gcp-na-personalize-edge.contentstack.com`
- AWS AU: `https://au-personalize-edge.contentstack.com`

- #### Pass the variant parameter in the URL
Now add the following code the middleware.ts file to pass the variant parameter in the URL:

```
import {
  NextRequest,
  NextResponse,
} from 'next/server';
import Personalize from '@contentstack/personalize-edge-sdk';
export default async function middleware(req: NextRequest) {
  const projectUid = process.env.NEXT_PUBLIC_PERSONALIZATION_PROJECT_UID as string;
  if (process.env.CONTENTSTACK_PERSONALIZE_EDGE_API_URL) {
  Personalize.setEdgeApiUrl(process.env.CONTENTSTACK_PERSONALIZE_EDGE_API_URL);
  }
  const personalizeSdk = await Personalize.init(projectUid, {
    request: req,
  });
  // get the variant parameter from the SDK
  const variantParam = personalizeSdk.getVariantParam();
  const parsedUrl = new URL(req.url);
  // set the variant parameter as a query param in the URL
  parsedUrl.searchParams.set(personalizeSdk.VARIANT_QUERY_PARAM, variantParam);
  // rewrite the request with the modified URL
  const response = NextResponse.rewrite(parsedUrl);
  return response;
}
```

Here, we’re passing the variants we receive from Personalize into a query parameter `personalize_variants` as defined by `personalizeSdk.VARIANT_QUERY_PARAM`. We then make a request to the Next.js app with the modified URL. Essentially, we are rewriting the URL with the modified query parameter (here the website user does not know about the changed URL).

For e.g. if we have a URL as follows: `/rewards`, we’re rewriting it to `/rewards?personalize_variants=0_0,1_0` here `0_0,1_0` is the variant parameter which is the combination of the Experience Short UID mapped to the selected Variant Short UID.

We use the short uids here to optimize the URL length which has a [limit](https://developer.mozilla.org/en-US/docs/Web/URI/Schemes/data#length_limitations).

- #### Add Response Context
Now add the following code to the `middleware.ts` file to add the response context:

```
import {
  NextRequest,
  NextResponse,
} from 'next/server';

import Personalize from '@contentstack/personalize-edge-sdk';
export default async function middleware(req: NextRequest) {
  const projectUid = process.env.NEXT_PUBLIC_PERSONALIZATION_PROJECT_UID as string;

  if (process.env.CONTENTSTACK_PERSONALIZE_EDGE_API_URL) {
  Personalize.setEdgeApiUrl(process.env.CONTENTSTACK_PERSONALIZE_EDGE_API_URL);
  }

  const personalizeSdk = await Personalize.init(projectUid, {
    request: req,
  });

  // get the variant parameter from the SDK
  const variantParam = personalizeSdk.getVariantParam();
  const parsedUrl = new URL(req.url);

  // set the variant parameter as a query param in the URL
  parsedUrl.searchParams.set(personalizeSdk.VARIANT_QUERY_PARAM, variantParam);

  // rewrite the request with the modified URL
  const response = NextResponse.rewrite(parsedUrl);

  // add cookies to the response
  personalizeSdk.addStateToResponse(response);

  return response;
}
```

The Personalize Edge SDK needs to identify the visitor on the next request. To achieve this, the SDK sets two cookies on the response, with one for the user UID and another for the current state of the manifest. Here, we use `addStateToResponse()` method to modify the response object and add those cookies before returning it.

We now have the Middleware ready to go. Next, we’ll look at leveraging the variant parameter passed in the URL.

### Fetching Variant Content from Origin
The final step is to fetch the variant content using the variant parameter passed in the URL. This step needs to be performed for all the pages that need Personalize enabled.

In the following example, we are modifying the Homepage (`/app/page.ts`). Similarly add the code to the other pages of your website source code.

#### Fetch Personalized Variants from the CMS
Here, we modify the Homepage (`/app/page.ts`) to fetch Personalized variants from the CMS.

```
import Personalize from '@contentstack/personalize-edge-sdk';
import contentstack from '@contentstack/delivery-sdk';
const Page = async ({
  searchParams,
}: {
  searchParams: Record;
}) => {
  // extract the variant parameter from the URL
  let variantParam = decodeURIComponent(
    searchParams[Personalize.VARIANT_QUERY_PARAM]
  );
  // initialize the CMS Delivery SDK
  const stack = contentstack.stack({
    apiKey: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
    deliveryToken: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN,
    environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT,
    host: process.env.CONTENTSTACK_DELIVERY_API_HOST,
  });
  // the call to fetch a specific entry
  const entryCall = stack
    .contentType(process.env.NEXT_PUBLIC_CONTENTSTACK_HOMEPAGE_CONTENTTYPE_UID)
    .entry(process.env.NEXT_PUBLIC_CONTENTSTACK_HOMEPAGE_ENTRY_UID);
  let entry;
  if (variantParam) {
    // convert the variant parameter to variant aliases
    const variantAlias = Personalize.variantParamToVariantAliases(variantParam).join(',');
    // pass the variant aliases when fetching the entry
    entry = await entryCall.variants(variantAlias).fetch();
  } else {
    // fetch the entry without the variant aliases
    entry = await entryCall.fetch();
  }
  // render the page with the entry
};
```

The above example shows how to fetch an entry variant instead of the base entry when variants are passed in the URL. We are converting the variant parameter passed in the URL to [variant aliases](./glossary-key-features.md#variant-aliases) used in the SDK.

**Note:** Optionally, if you want to enable Live Preview for your Personalize project, follow the steps in the [Get Started with TypeScript Delivery SDK and Live Preview](../developers/sdks/content-delivery-sdk/typescript/get-started-with-typescript-delivery-sdk-and-live-preview.md#initializing-the-stack-with-live-preview) guide.

### Setting Attributes and Triggering Events
Setting attributes and triggering events can be done in the following ways:
- Integrating with a [CDP](./about-cdp-integration.md)
- Using [Google Tag Manager](./google-tag-manager-integration-with-personalize.md)
- Using the SDK in the code ([JavaScript Personalize Edge SDK](../developers/sdks/personalize-edge-sdk/javascript.md))

Below we have elaborated on the third approach.
- #### Initialize the SDK
You can create a personalized [React Context](https://react.dev/learn/passing-data-deeply-with-context) and React Provider to initialize the SDK as follows:

**Note: **For this step, we have placed the file in `/components/context/` but you can choose to place this wherever appropriate.

```
// /components/context/PersonalizeContext.ts

'use client';

import Personalize from '@contentstack/personalize-edge-sdk';
import { Sdk } from '@contentstack/personalize-edge-sdk/dist/sdk';

let sdkInstance: Sdk | null = null;

export async function getPersonalizeInstance() {
  if (!Personalize.getInitializationStatus()) {
    sdkInstance = await Personalize.init(process.env.PERSONALIZE_PROJECT_UID);
  }
  return sdkInstance;
}

const PersonalizeContext = createContext(null);

export function PersonalizeProvider({ children }: { children: React.ReactNode }) {
  const [sdk, setSdk] = useState(null);

  useEffect(() => {
    getPersonalizeInstance().then(setSdk);
  }, []);

  return (

      {children}

  );
}

export function usePersonalize() {
  return useContext(PersonalizeContext);
}
```

And you can wrap the app with `PersonalizeProvider` as follows:

```
// app/layout.tsx

import
{PersonalizeProvider} from '@/app/components/context/PersonalizeContext'

export default function RootLayout({
  children,
}: Readonly) {
  return (

          {children}

  );
}
```

Here, we initialize the Personalize SDK as part of the React Context. We then use the SDK object to create the context.

The SDK needs to be initialized before setting attributes or triggering events.

We use React Context here so the SDK is initialized once and then available as Context for any [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) in Next.js. Setting attributes and triggering impressions and events should be done on the client side since we set data and trigger the events when the page renders on the browser.

- #### Set Attributes
The following snippet shows how to set an attribute submitted via a form for a user’s age:

```
'use client';import { useContext } from 'react';import { usePersonalize } from '../context/PersonalizeContext';const Page = () => {  const personalizeSdk = usePersonalize();  const onFormSubmit = async (form: MyForm) => {    await personalizeSdk.set({ age: form.age });  }  // render the component}
```

Here, the attributes are a key-value object passed to the `set` method. You can pass multiple key-values here. If the same key is passed, the existing attribute is overwritten.

- #### Trigger Events
**Impressions**

To let Personalize know that a particular experience is being shown to the user, you can trigger an impression event. The following snippet shows how to trigger impressions:

```
'use client';import { useContext, useEffect } from 'react';import { usePersonalize } from '../context/PersonalizeContext';const Page = () => {  const personalizeSdk = usePersonalize();  useEffect(async () => {    await personalizeSdk.triggerImpression(MY_EXPERIENCE_SHORT_UID);  }, []);  // render the component}
```

We are using useEffect in this example so that the impression is triggered only on the first render of the component, that is, when the page loads for the first time in the browser.

Here the triggerImpression method takes an Experience Short UID, which you can find in the Personalize UI on the Experiences List page. The SDK will also automatically pass the selected variant of the experience as part of the impression.

**Conversions**

Any action performed by the user can be a conversion event if it leads to a positive outcome. To let Personalize know that an action has been performed, trigger the event as follows:

```
'use client';import { useContext } from 'react';import { usePersonalize } from '../context/PersonalizeContext';const Page = () => {  const personalizeSdk = usePersonalize;  const onClickLearnMore = async (e: any) => {    e.preventDefault();    await personalizeSdk.triggerEvent('learnMoreClicked'); // here 'learnMoreClicked' is the eventKey  }  // render the component}
```

Here, we are triggering an event on the click of the Learn More button. The `triggerEvent` method takes an `eventKey`. The `eventKey` is configured when you [create an event](./get-started-with-personalize-with-ab-test-end-to-end-guide.md#create-an-event).

*Your Personalize Edge SDK is now set up and ready to interact with your Contentstack Personalize project and proceed with personalization for your website.*

### Reference Project
You can refer to the following project for a reference implementation: [Next.js example GitHub repository](https://github.com/contentstack-personalize-examples/nextjs-example) and find it hosted here: [https://personalize-demo.vercel.app/](https://personalize-demo.vercel.app/)

## Common questions

### Do I need middleware to use Personalize with Next.js on Vercel?
Yes. The guide uses Next.js Middleware to call the Personalize Edge API, fetch the User Manifest, and pass variants via URL query parameters.

### What is the query parameter used for variants?
The variants are passed in the `personalize_variants` query parameter as defined by `personalizeSdk.VARIANT_QUERY_PARAM`.

### How does the SDK persist visitor state between requests?
The SDK sets two cookies on the response (user UID and current manifest state) using `addStateToResponse()`.

### Where do I fetch variant content in my Next.js app?
Variant content is fetched from origin in the pages that need Personalize enabled (example shown for the Homepage at `/app/page.ts`) using the variant parameter passed in the URL.