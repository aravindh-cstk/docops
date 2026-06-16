---
title: "[Contentstack Launch] - Edge Functions"
description: Edge Functions in Contentstack Launch allow you to execute your code in proximity to your user’s location before a request is processed.
url: https://www.contentstack.com/docs/developers/launch/edge-functions
product: Contentstack Launch
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Edge Functions

This page explains how to create and use Edge Functions in Contentstack Launch, including required file structure, runtime expectations, handler parameters/return types, limits, caching behavior, debugging, and deployment considerations. It is intended for developers implementing request/response logic at the edge and should be used when you need to run JavaScript close to users before requests reach the Launch origin server.

## Edge Functions

Edge Functions in Contentstack Launch allow you to execute your code in proximity to your user’s location before a request is processed. They enable you to modify requests or responses, make calls to domains other than the Launch origin server, and return responses from the edge without making any calls to the Launch origin server.

**Note:** For [Edge URL Redirects](/docs/developers/launch/edge-url-redirects/), [Edge URL Rewrites](/docs/developers/launch/edge-url-rewrites/), and [Password Protection](/docs/developers/launch/password-protection/), consult their respective documentation. They provide a straightforward and declarative method to accomplish the same tasks.

You must code your function in JavaScript in a file named `[proxy].edge.js` and save it in the `/functions` directory at the root of your project.

**Note:** The Edge Function handler runs on a [Web-interoperable Runtimes Community Group (or WinterCG)](https://common-min-api.proposal.wintercg.org/) compliant Launch Edge Function Runtime. Therefore, ensure that the code you write is WinterCG compliant.

`[proxy].edge.js` must export a `handler` function with the following general syntax:

```
export default function handler(request, context) {
 // your edge functionality
}
```

**Example**

```
export default function handler(request, context) {
 const parsedUrl = new URL(request.url);
 const route = parsedUrl.pathname;
 if (route === '/appliances') {
   const response = {
     time: new Date()
   }
   return new Response(JSON.stringify(response))
 }
 return fetch(request)
}
```

In the above example, the handler function accepts a `request` object and a `context` object, and it returns a JSON response containing the current date and time when you make a request to the URL path `/appliances`. It forwards all other requests to the server.

## Handler Function Parameters

### Launch Edge Function Request Object:
Each request to a Launch Edge Function is represented by the `request` object.

This object is the standard [Fetch API Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) object.

#### Client IP
Your user's IP address can be accessed within the Edge Function from the ``x-forwarded-for`` header.

```
request.headers.get('x-forwarded-for')
```

### Launch Edge Functions Context Object:
The Launch Edge Functions `context` object provides you with the access to the `environment variables` and `waitUntil` function.

#### Environment Variables:
You can access the environment variables inside the Launch Edge Function.

**Note**: Launch Edge Functions can have up to **64** environment variables, with the size of each environment variable not exceeding **5KB**.

You can [add environment variables](/docs/developers/launch/environment-variables#add-environment-variables) by going to the corresponding environment’s Settings page on Launch.

**Example:**

```
const testKeyValue = context.env.TEST_KEY;
```

#### waitUntil Function:
`context.waitUntil` allows you to continue to perform work even after a response is returned by the Launch Edge Function.

```
context.waitUntil(promise)
```

## Handler Function Return Type:
Handler function returns the standard [Fetch API Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.

## Execution Duration
Launch Edge Functions operate without a duration limit. They will continue to execute as long as the client, who sent the request, maintains the connection with the Launch Edge Function. When the client disconnects, all the associated tasks will stop.

## Memory Size
Each Launch Edge Function instance can consume up to **128 MB** of memory.

## Start up time
Launch Edge Functions must process their global scope (the code outside of the handler) not exceeding **400** **ms**. More extensive functions take longer to start, so avoid complex operations in the global scope for a faster startup.

## Bundle Size
Minified Bundle file size cannot exceed **1MiB** (1024 KiB) for the Launch Edge Function.

## Common Use cases

### Forward Requests to the Launch Origin Server
You can proxy the request to the Launch origin server by simply calling `fetch` on the incoming request as follows:

```
export default function handler(request, context) {
   return fetch(request)
 }
```

### Handling Routes at Edge
You can handle each request based on its path and method as follows:

```
export default function handler(request, context) {
 const parsedUrl = new URL(request.url);
 const route = parsedUrl.pathname;

 if (route === '/appliances' && request.method === 'POST') {
  return fetch(`https://example.com/api/appliances/new`);
 }
 return fetch(request)
}
```

In the above example, any POST request to `/appliances` is forwarded to `https://example.com/api/appliances/new` and any other requests will be sent to the Launch origin server.

### Modify Request and Response
With the Launch Edge Functions, you can modify the incoming request before forwarding it to the Launch origin server and also modify response received from the Launch origin server before sending it to the client.

```
export default async function handler(request, context) {
  const requestBody = await request.json()
  const modifiedRequest = new Request(request, {
    body: JSON.stringify({
      ...requestBody,
      foo: "bar"
    }),
    method: 'POST',
  })
  modifiedRequest.headers.set("Content-Type", "application/json");
  const modifiedUrl = new URL(request.url);
  modifiedUrl.search = '?id=1'
  const requestWithModifiedUrl = new Request(
    modifiedUrl.toString(),
    modifiedRequest
  );
  const response = await fetch(requestWithModifiedUrl);
  const responseBody = await response.json();
  const modifiedResponse = new Response(JSON.stringify({
    ...responseBody,
    time: new Date()
  }), response)
  modifiedResponse.headers.set("X-Message", "Modified response headers")
  return modifiedResponse;
}
```

In this scenario, the URL, headers, method, and body are modified before sending the request. Likewise, upon receiving the response, it is enriched with a timestamp and the header `X-Message` before forwarding it to the client.

In the example provided, the request and response headers are added to the existing headers using the `set` method on `request.headers` and `response.headers`. While you have the option to create a new headers object within the Request Initializer or Response Initializer, doing so would entirely replace the existing headers.

**Warning**: Altering Requests and Responses is restricted to initializing a new Request/Response object from the existing one. Attempting to directly modify the existing Request and Response objects may lead to errors or unpredictable outcomes.

### Redirect to a URL

```
export default async function handler(request) {
 const modifiedUrl = new URL(request.url);
 const route = modifiedUrl.pathname;

 if (route === '/appliances' && request.method === 'POST') {
   modifiedUrl.pathname = '/appliances/new';
   return Response.redirect(modifiedUrl, 301)
 }

 return fetch(request);
}
```

The code given above redirects any incoming `POST` requests on `/appliances` to `/appliances/new`. All other requests will be forwarded to the origin.

## Precedence of launch.json and Password Protection over Launch Edge Functions
- If you are using both `launch.json` and Launch Edge Functions in your project, then the [Edge URL Rewrites](/docs/developers/launch/edge-url-rewrites/) and [Edge URL Redirects](/docs/developers/launch/edge-url-redirects) using `launch.json` will take precedence over the Edge Function. This means if you define a redirect for a route in both `launch.json` and Edge Function, then the redirect from `launch.json` will always be executed first.
- If you have enabled [password protection](/docs/developers/launch/password-protection/) for your website, then it will take precedence over the Edge Function.

**Note:** When you forward or rewrite a request to the origin server from the [Launch Edge URL Rewrites](/docs/developers/launch/edge-url-rewrites) or the Launch Edge Function, the same request will not re-invoke the Launch Edge Function. Instead, it will be directly forwarded to the origin server through a cache layer.

## Deploying a Project with Only Launch Edge Function
Follow the steps given below to deploy a project that does not have a website but only Launch Edge Function:
- Ensure that the root directory has a `/functions` folder.
- Add a `[proxy].edge.js` file.
- While setting up the project, by [Importing from a Git Repository](/docs/developers/launch/import-project-using-github/) or [Uploading a file](/docs/developers/launch/import-project-using-file-upload/), set the **Framework Preset** to `Other`.
- If the Edge Function has dependency packages, follow the steps below:Ensure that a `package.json` file is present at the root directory.
- Set `Build Command` to `npm install` to install the dependency packages.

## Cache Interaction
When the Launch edge function initiates fetch requests (even to the external domains), they pass through the cache layer, where all static pages are cached by default.

However, it does respect the response headers for [cache control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) that the origin server (or the external server) returns. Please ensure that the APIs you retrieve data from include cache control headers in their responses to avoid unintentional caching.

**Note**:
- After redeployment, the cache linked to the origin server is automatically purged. However, this action does not affect the cache for external domains accessed via fetch from the Launch Edge Function.
- If you need to purge the cache for requests made to external domains, please contact [support](mailto:support@contentstack.com).

## Debugging Launch Edge Functions

### Server Logs
The **Server Logs** section in Contentstack Launch provides real-time access to logs from the latest deployment of your Launch Edge Functions. This includes any `console.log` outputs and unhandled exceptions generated by your Edge Function code.

**Note:** For both `Live` and `Archived` statuses, server logs are retained for **24** hours, with a maximum of **5000** most recent logs viewable. We recommend using [Log Targets](/docs/developers/launch/log-targets) to forward server logs to your logging platform in real-time for future reference.

If you encounter `Internal server error CFL-0001` on your application URL, it likely indicates an unhandled exception in your Edge Function code. For debugging assistance, please refer to the **Server Logs** section:

### Deployment Logs
Launch throws an `Edge functions deployment error` when it is unable to deploy your code to Launch Edge Function. This can happen in the following scenarios:
- **Code size limit exceeded**: If the combined size of your code and imported node modules exceeds the **1 MiB** bundling limit, the deployment will fail.
- **Non-Compliant Dependencies**: Your code imports packages or uses APIs that are not WinterCG compliant. This includes commonly used NPM packages that leverage Node.js APIs not listed in the [WinterCG common minimum set](https://common-min-api.proposal.wintercg.org/).
- **Bundling failed**: Bundling your Launch Cloud Function failed due to a syntax error in your code or missing dependencies in `package.json` which are used by the Cloud Function(s).
- **Misconfigured environment variables**: Deployment may fail if environment variables contain extra spaces, quotes, or newline characters (`\n`) in private keys.**Examples:**

| Case | Avoid | Suggested |
|---|---|---|
| Enclosing quotes | `key="1234"` | `key=1234` |
| Extra space | `key=a bc` | `key=abc` |
| Newline characters | `-----BEGIN OPENSSH PRIVATE KEY----- \\nFAKEKEY1234567890abcdefghijklmnopqrstuv -----END OPENSSH PRIVATE KEY-----` | `-----BEGIN OPENSSH PRIVATE KEY----- FAKEKEY1234567890abcdefghijklmnopqrstuv -----END OPENSSH PRIVATE KEY-----` |

## Launch Edge Functions Deployment Consistency
Launch attempts to deploy your Launch Edge Functions to multiple points of presence (POPs). This means that during deployment, there will be occasions where the Edge Function is updated to your latest code at some POPs, while at others, it continues to run your previously deployed Edge code. It may take up to **60** seconds for your Edge Function deployment to sync with all POPs.

Additionally, your logs from the latest deployed Edge Functions may stay associated with a previous deployment for up to 60 seconds.

## Limitations
- Writing Launch Edge Function using TypeScript is currently not supported.
- Running Launch Edge Functions locally using the CLI is not supported.

## Code Examples

### Blue-Green Deployments
Blue-Green Deployment involves running two app versions simultaneously: Blue (the previous version) and Green (the latest version). Traffic initially flows to the Blue version while the Green version is tested and verified. Once the Green version is ready, traffic is smoothly shifted to it, ensuring a seamless transition with no downtime and enabling a quick rollback if needed.

**GitHub Repository**: [https://github.com/launch-examples/edge-blue-green-deployments](https://github.com/launch-examples/edge-blue-green-deployments)  
**Demo URL**: [https://edge-blue-green.contentstackapps.com/](https://edge-blue-green.contentstackapps.com/)

### Device-Based Content Delivery
In Device-Based Content Delivery, content is customized for each device type, ensuring an optimized user experience. By detecting the accessing device, requests are directed to tailored versions, enhancing efficiency and user satisfaction.

**GitHub Repository**: [https://github.com/launch-examples/edge-device-adaptation](https://github.com/launch-examples/edge-device-adaptation)  
**Demo URL**: [https://edge-device-adaptation.contentstackapps.com/](https://edge-device-adaptation.contentstackapps.com/)

### Authenticate with Contentstack SSO
Contentstack Launch already offers basic [password protection](/docs/developers/launch/password-protection/) for your website using HTTP basic authentication. You can take security a step further by leveraging Contentstack Edge Functions to set up authentication based on [Contentstack account](https://www.contentstack.com/login/) logins.

Please `checkout` the repository `README` to understand the JWT + OAuth flow and also for instructions on how to set it up yourself.

**GitHub Repository**: [https://github.com/contentstack-launch-examples/edge-sso](https://github.com/contentstack-launch-examples/edge-sso)  
**Demo URL**: [https://edge-sso.contentstackapps.com/](https://edge-sso.contentstackapps.com/)

## Common questions

### Where do I place my Launch Edge Function file?
You must code your function in JavaScript in a file named `[proxy].edge.js` and save it in the `/functions` directory at the root of your project.

### What runtime compatibility is required for Edge Functions?
The Edge Function handler runs on a WinterCG compliant Launch Edge Function Runtime, so ensure that the code you write is WinterCG compliant.

### What are the key limits for Launch Edge Functions?
Each Launch Edge Function instance can consume up to **128 MB** of memory, global scope processing must not exceed **400 ms**, and the minified bundle file size cannot exceed **1MiB** (1024 KiB).

### How can I debug unhandled exceptions in an Edge Function?
Use the **Server Logs** section in Contentstack Launch, which provides real-time access to logs from the latest deployment, including `console.log` outputs and unhandled exceptions.