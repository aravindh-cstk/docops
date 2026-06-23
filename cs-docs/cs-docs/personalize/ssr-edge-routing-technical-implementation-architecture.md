---
title: [Personalize] - Server Side Rendering (SSR) with Edge Routing Technical Implementation Architecture
description: Learn to implement Personalize in a Server-Side Rendered site with Edge Routing for improved performance, scalability, and real-time personalization.
url: https://www.contentstack.com/docs/personalize/ssr-edge-routing-technical-implementation-architecture
product: Personalize
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2024-11-06
filename: server-side-rendering-ssr-with-edge-routing-technical-implementation-architecture.md
---

# [Personalize] - Server Side Rendering (SSR) with Edge Routing Technical Implementation Architecture

This page explains [Personalize] - Server Side Rendering (SSR) with Edge Routing Technical Implementation Architecture for Personalize. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Server Side Rendering (SSR) with Edge Routing Technical Implementation Architecture 

Personalize supports a wide variety of different implementation architectures. As a best practice, we strongly recommend one particular architectural pattern over the others. We believe that this architecture checks all the boxes and allows for the most robust experience.

![1 - SSR with Edge Routing Technical Implementation Architecture.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt84827955201d563f/672b73add2e3a87d85fb5c60/1_-_SSR_with_Edge_Routing_Technical_Implementation_Architecture.png)

### Introduction

Contentstack Personalize offers flexibility and freedom in implementation, by being API-first and agnostic of the tech stack. As long as you can make API calls to Contentstack, you can use Personalize. However, the SSR (Server-Side Rendering) + Edge Routing architecture stands out as the best approach for multiple reasons.

This approach helps you maximize your website’s performance in terms of user experience, scalability, both in terms of serving personalized content to more users, and allowing for more personalized content on the same page. It is also the most maintainable as your website or the application grows, making it the optimal architecture.

This is the most robust option and will also deliver the smoothest user experience for your users by eliminating loading screens or flickers, all while enabling real-time personalization.

**Note:** This document provides a high-level overview. For details on how to use Personalize and other best practices, refer to Contentstack's [official documentation](../agent-os/personalize.md) and consult with our support team.

### What is the Edge?

**TL;DR:** it’s essentially your CDN.

For the longest time, CDNs have been associated with caching. Their primary responsibility has been to stand in front of your origin servers, close to your users and serve your web content directly from there to enhance user experience, and also avoid overwhelming your origin server with requests from around the world.

This changed recently with the advent of Edge Computing, in which CDN providers let you run a small piece of code for a request before it hits the cache layer, enabling you to customize and enhance the response in many ways. Learn more about Edge Computing in our tech talk [here](https://www.contentstack.com/blog/tech-talk/revolutionizing-digital-experiences-with-edge-computing).

### Why do we Recommend this Architecture?

This architecture offers multiple benefits, below we have listed some of the important ones.

#### Real-time Personalization

As every request for a web page goes through the Edge, this architecture makes sure that the [Personalize Edge API](../../api-docs/api-detail/personalize-edge-api.md) (which is in charge of making personalization decisions about which variants are to be shown to a user) is called every time a user opens or refreshes a page on your website.

This means the variants to be shown to the user are decided in real-time, with the latest available context. If a new attribute is set for the user just before they visited the page, it will have an impact on the content shown on that page.

If there are dynamic factors, such as date and time, that affect the personalizations on the page, this architecture also ensures that those are evaluated in real-time. To your users, the content is always up-to-date based on their attributes and personalization rules that you define.

#### Best in Class Lighthouse Scores

Making personalization decisions at the Edge, in a location as close as possible to your users, helps keep the overhead introduced for personalization to a minimum. Additionally, the [Personalize Edge API](../../api-docs/api-detail/personalize-edge-api.md) has been built for high performance.

The page that loads in the browser for the user is already personalized for them, as compared to other implementations where the base page loads first, and personalizations are applied afterward.

As this architecture also leverages CDN caching to its fullest, it ensures that any content, personalized or not, is returned to the user as quickly as possible.

In this way, the Edge-based architecture helps keep your website fast and Lighthouse scores high.

#### Flicker-free Personalization

Traditional personalization implementations work entirely in the browser by injecting a JavaScript script in the front-end code. The non-personalized webpage loads along with the script, which then gathers the context about the user, makes API calls, and then replaces or injects personalized content directly into the HTML.

This means that until the script completes its process, the user is seeing either non-personalized content or a loading screen. Once the appropriate personalized content is determined, it is then suddenly injected into the page, causing flickers as non-personalized content is abruptly replaced with personalized content.

However, with the Edge-based SSR approach, this is not a problem. The page that initially loads in the user’s browser is already personalized, based on the latest available context about the user and the experiences defined by you. This provides the smoothest possible experience for users.

#### Scalability

Implementing a SSR architecture without an Edge component means that the personalization decision-making logic needs to be called from your origin. As every page view needs to check for personalization, this means that every request hits your origin.

This drastically increases the traffic to your origin server, potentially causing performance and scaling issues, as well as impacting user experience due to the time taken for a round trip from a user’s browser to your origin server.

The Edge Middleware is distributed, and designed to handle heavy traffic from around the world. Additionally, it allows you to leverage the CDN caching to serve personalized content, achieving maximum scalability by serving the majority of your traffic from the CDN.

#### Maintainability

Over time, the number of personalizations and experiments on your website will grow. You’ll have multiple experiments on the same page, across multiple pages. A naive approach would be to inject code in all the pages and elements that have any personalization. However, this quickly becomes difficult to manage and bloats your code base.

The architecture we recommend requires only an initial setup on your backend origin code and to add a simple common Edge function to personalize your entire website. Once set up, you can create as many personalizations and experiments as you wish without needing to change existing or add code for every new element you personalize.

**Note:** Triggering new impressions and conversion events may require additional code changes, but these are minimal and can also be managed through [Google Tag Manager](./google-tag-manager-integration-with-personalize.md) in a low-code manner.

#### SEO Friendliness

As the website (with and without personalization) is server-side rendered, it generates fully rendered HTML pages, making it easier for search engines to crawl and index your website pages.

#### Ease of Integration

To get started, this implementation requires minimal code changes in your front-end. You do not need to make any changes in your browser code to render personalized content (tracking events does require changes in browser code).

A common Edge function can be added, which requests the user’s variants from Contentstack Personalize, regardless of the page they are visiting. On the server side, it only requires a one-time setup to extract the user’s variants added to the request by the Edge function and pass them to the [Contentstack Delivery SDK](../developers/create-content-types/reference.md) or [API](../../api-docs/api-detail/content-delivery-api.md).

Since entry variants are simply entries with different content, they can be rendered exactly as your base content. This means that the code that renders the content retrieved from the CMS does not need to change at all, or even know that it is rendering personalized content.

#### Being Edge-ready

If you already have a server-side rendered website, adopting this architecture comes down to adding a small layer of logic at the Edge, i.e. running a small function before the request arrives at the CDN cache layer. Your current hosting or CDN provider likely already offers Edge compute options, as most popular ones do today.

If your website is hosted with a provider, these popular hosting providers offer Edge function options:

* Contentstack Launch ([Edge Functions](../developers/launch/edge-functions.md))
* Vercel ([Edge Middleware](https://vercel.com/docs/functions/edge-middleware))
* Netlify ([Edge Functions](https://docs.netlify.com/edge-functions/overview/))

Alternatively, if you’re hosting on your own and using a CDN, here are some popular CDN providers with Edge compute offerings:

* Cloudflare ([Cloudflare Workers](https://workers.cloudflare.com/))
* Fastly ([Compute@Edge](https://www.fastly.com/products/edge-compute))
* Akamai ([EdgeWorkers](https://www.akamai.com/products/serverless-computing-edgeworkers))
* AWS Cloudfront ([Lambda@Edge](https://aws.amazon.com/lambda/edge/))

### Diving Deeper into the Architecture

This builds on top of a traditional server-side architecture, by adding a very lean Edge function component between your user’s browser and the CDN cache. Here are the key components of this implementation architecture:

* **Your User’s Browser**: A user accesses your website using a browser on their device. The browser is responsible for making requests to your domain to ask for your website and then rendering the received page.
* **Your Edge Middleware Function**: The Edge server, distributed globally, acts as the first point of contact. The closest one to your user is called into action. Its simple task is to receive the request, communicate with Contentstack Personalize Edge to request the user’s variants, add them to the request URL’s query parameters, and forward the request per the usual flow.
* **Your CDN Cache:** Responsible for caching rendered pages at the location closest to your user. Once your origin generates and returns a page, the CDN cache stores a copy to serve when that page is requested again.  
  It can also detect the user's variant information in the request URL’s query parameters. If it recognizes variants it has cached before, the cached personalized page is returned to the user almost immediately. If not, it forwards the request to the origin, which generates the personalized page, and the CDN stores it for future requests.  
  One of the Edge-based architecture’s biggest advantages is its ability to leverage this cache for personalized content while maintaining real-time personalization.
* **Your SSR Origin**: The application server dynamically generates HTML pages with personalized or non-personalized content created in the CMS. It extracts the variant information passed to it by the Edge function and retrieves appropriate entry variants from the CDA. It does not need any user-specific context, only the variants to be displayed.
* **Contentstack Personalize Edge API and SDK**: The [Personalize Edge API](../../api-docs/api-detail/personalize-edge-api.md) is the decision engine for real-time personalization. To minimize overhead on your user’s requests, it exists at the Edge, as close as possible to your users and your Edge—the two locations where you’ll interact with it.  
  Given the user UID and other context, such as the page URL, referrer, etc., it responds with the UIDs of each experience’s variant that the visitor should see. Read more about the Edge API [here](../../api-docs/api-detail/personalize-edge-api.md).  
  We recommend using our [JavaScript Edge SDK](../developers/sdks/personalize-edge-sdk/javascript.md), which handles communication with the Edge API, providing it the necessary context on your behalf.
* **Contentstack CMS Content Delivery API (CDA)**: Contentstack's CDA delivers the content (articles, products, etc.) — both [base and personalized variants](../../api-docs/api-detail/content-delivery-api.md#entry-variants). Your SSR process combines this content with your page layout or components to generate the final personalized page shown to the user.

#### Request Flows

Let’s now take a look at how the components in the architecture work—in sequence—to deliver a personalized experience to your visitors when they visit your website.

##### When requesting a personalized variant for the first time

![2 - SSR with Edge Routing Technical Implementation Architecture.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt19256d1bb4f4a5c1/672b73ad194ea4bcd6348608/2_-_SSR_with_Edge_Routing_Technical_Implementation_Architecture.png)

##### When requesting the personalized variant subsequently

![3 - SSR with Edge Routing Technical Implementation Architecture.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83ddf44ce2122f33/672b73ad000ccbcc54f1eebc/3_-_SSR_with_Edge_Routing_Technical_Implementation_Architecture.png)

The diagrams visually represents this flow:

* The user's request is first received by your Edge function, which asks the Personalize Edge API for the user’s variants.
* Upon receiving the variants, the Edge function adds them to the request’s URL and forwards the request to the CDN cache layer.
* The cache layer does not yet have the personalized web page for the variants, and thus forwards the request to your origin.
* Your origin reads the variants and retrieves corresponding personalized content. It then generates the personalized page and returns it.
* The CDN now caches the personalized web page against the request URL and the variants in its query parameters for future use.
* The response is returned to the user, passing through the Edge function once again.
* Finally, a personalized page is displayed to the user.

The next time any user requests the same page and is resolved to the same variants by Personalize, the previously cached web page is immediately served to the user without needing to generate it anew at your origin.

### Things to Consider

Here is a list of some things to consider:

* **Tracking Analytics**: Now that the rendering of personalized content is taken care of, you need to track how your variants are performing. This involves triggering impression and conversion events from the browser when the user views personalized content or performs a conversion action.  
  This can be done by calling the Edge SDK’s triggerImpressions and triggerEvent methods, but this can become cumbersome over time. Alternatively, these can be managed via [Google Tag Manager](./google-tag-manager-integration-with-personalize.md).
* **User Data Management**: Ensure secure and compliant handling of user data for personalization. Avoid storing any personally identifiable information with Contentstack Personalize to facilitate personalization decisions.
* **Fallbacks and Error Handling**: Design robust fallback mechanisms with error handling in all the appropriate places to ensure a seamless user experience. Should any part of the system not work as expected, it’s important to be able to fall back to showing the users the default content (base entries) instead of an imprecise or incomplete personalized experience.

### Example Application with Code

We have created a sample app which implements this architecture. Please check out the [repository](https://github.com/contentstack-personalize-examples/nextjs-example) and our [sample app](https://personalize-demo.vercel.app/) for more information. You can also find a detailed guide that walks you through setting up the example application [here](./setup-nextjs-website-with-personalize-vercel.md).

## Common questions
### What is covered in [Personalize] - Server Side Rendering (SSR) with Edge Routing Technical Implementation Architecture?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Personalize] - Server Side Rendering (SSR) with Edge Routing Technical Implementation Architecture?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
