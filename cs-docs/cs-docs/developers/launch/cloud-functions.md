---
title: "[Contentstack Launch] - Cloud Functions"
description: Launch cloud functions for providing backend functionality on sites, including writing, deploying, and running server-side code on-demand as API endpoints.
url: https://www.contentstack.com/docs/developers/launch/cloud-functions
product: Contentstack Launch
doc_type: concept-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Cloud Functions

This page explains how Contentstack Launch Cloud Functions work, how to structure and deploy them in your project, and what runtime behaviors and limitations to expect. It is intended for developers adding backend API endpoints to Launch projects, and should be used when implementing, debugging, or operating server-side functionality within Launch.

## Cloud Functions

Launch cloud functions are a mechanism for you to provide backend functionality on your sites, and enable you to **write**, **deploy**, and **run** server-side code on-demand as API endpoints.

These functions are co-located with your frontend code and part of your Git workflow. As traffic increases, they automatically scale up and down to meet your needs.

**Example use cases**: CRUD operations with database, sending automated email, server-side input validation, etc.

You must code your functions in JavaScript and save them to the `/functions` directory in your project’s root folder.

The function endpoint is determined by its **file path** relative to `/functions.`

Each JavaScript file to be deployed as a cloud function must export a `handler` function with the following general syntax:

```
export default function handler(request, response) {
  // your server-side functionality
}

```

**Example**:

```
// functions/hello.js

export default function handler(request, response) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}

```

The above example returns the request body, path query, and cookies in JSON format.

This function runs when you visit the URL path: `/hello`

Sometimes you may want to place extra code files, such as `utils.js`, inside the `/functions` folder. To skip turning these files into serverless functions, `default exporting` from such files is not supported. Below is an example of a valid `utils.js` file that can be placed inside the `/functions` directory.

**Example**:

```
//functions/utils.js

export function getShortName(name) {
   return name.slice(0, 3);
}

//functions/user.js

import { getShortName } from "./utils"

export default function handler(request, response) {
  const name = "Hilary";
  const shortName = getShortName(name);
  response.status(200).send({ name, shortName});
}

```

## Node.js Request and Response Objects

Each request to a Launch cloud function gets access to Request and Response objects.

These objects are the standard HTTP [Request](https://nodejs.org/api/http.html#class-httpincomingmessage) and [Response](https://nodejs.org/api/http.html#class-httpserverresponse) objects from Node.js.

### Node.js Helpers

Additional helpers are provided inside the Request and Response objects passed to the function. These are:

| Method | Description | Object |
|---|---|---|
| `req.query` | An object containing the request's [query string](https://en.wikipedia.org/wiki/Query_string), or {} if the request does not have a query string. | Request |
| `req.params` | An object containing the request's path params, or {} if the request does not have any path params. | Request |
| `req.cookies` | An object containing the cookies sent by the request, or {} if the request contains no cookies. | Request |
| `req.body` | An object containing the body sent by the request, or null if no body is sent. | Request |
| `res.status(code)` | A function to set the status code sent with the response where the code must be a valid [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). Returns res for chaining. | Response |
| `res.send(body)` | A function to set the content of the response where the `body` can be a string, an object, or a Buffer. | Response |
| `res.json(obj)` | A function to send a JSON response where the `obj` is the JSON object to send. | Response |
| `res.redirect(url)` | A function to redirect to the URL derived from the specified path with status code `307 Temporary Redirect`. | Response |
| `res.redirect(statusCode, url)` | A function to redirect to the URL derived from the specified path, with the specified [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). | Response |

### Request Body

The `req.body` property populates with a parsed version of the content sent with the request when possible, based on the value of the **Content-Type** header as follows:

| Content-Type header | Value of req.body |
|---|---|
| No header | Undefined |
| application/json | An object representing the parsed JSON sent by the request. |
| application/x-www-form-urlencoded | An object representing the form data sent with the request. |
| text/plain | A string containing the text sent by the request. |
| application/octet-stream | A [Buffer](https://nodejs.org/api/buffer.html) containing the data sent by the request. |

When the request body contains malformed JSON, accessing `req.body` will throw an error. You can catch that error by wrapping `req.body` with `try...catch:`

```
try {
  const data = req.body;
} catch (error) {
  res.status(400).json({ error: 'Invalid JSON in request body' });
}

```

### Handling different HTTP methods

To handle different HTTP methods in a cloud function, you can use `req.method` in your handler as below:

```
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}

```

### Execution Timeout

Launch cloud functions enforce a maximum execution timeout. This means that the function must respond to an incoming HTTP request before the timeout has been reached. The maximum execution timeout is **30 seconds**. If a request times out, the response error code would be **500**.

### Memory Size

The memory size for a Launch Cloud Function is **1024 MB**.

### Runtime Environment

The Launch Cloud Functions runtime environment leverages [**Node.js**](/docs/developers/launch/supported-nodejs-versions) to power its execution environment.

### File System Support

File system support in Launch Cloud Functions refers to a function's ability to interact with the file system, including `read` and `write` operations. Launch Cloud Functions implement a read-only file system, except for the designated `/tmp` path, which facilitates `write` operations.

The `/tmp` path serves as a temporary file system accessible to every Launch Cloud Function, with a storage of up to **500 MB**. Note that the data stored in `/tmp` is non-persistent, as it is automatically deleted upon the termination of the function.

### Architecture

Launch Cloud Functions support the `x86_64` instruction set.

## Dynamic API Routes using Path Segments

Deploying cloud functions with Launch also gives users the ability to use path segments as file names.

When using path segments, any dynamic filename can be used; this is indicated by the use of square brackets ( **[ ]** ).

**Note**: The filename for the path segment is used solely for the purpose of providing a key name for accessing the value on the `req.params` object.

**Example**: `functions/user/[name].js`

Here, the value passed for the path segment is made available to the `req.params` object under the key used for the filename(**name**).

```
// functions/user/[name].js

export default function handler(request, response) {
  response.send(`Hello ${request.params.name}!`);
}

```

Running the function on the endpoint `/user/Jake` will return the response as `Hello Jake`.

## Environment Variables

Users can access environment variables inside the cloud functions.

Environment variables can be added by going to the corresponding environment’s **Settings** page on Launch.

**Example**:

```
export default async function handler(req, res) {
  const uri = process.env.DATABASE_URI;
  const client = new DBClient(uri);

  // perform database operations...

  res.status(200).send("Success");
}

```

**Note**: A new deployment must be triggered after adding/modifying environment variables.

## Debugging Cloud Functions

### Server Logs

The Server Logs section displays real-time logs generated by the cloud functions from the latest deployment.

**Note:** For both `Live` and `Archived` statuses, server logs are retained for **24** hours, with a maximum of **5000** most recent logs viewable. We recommend using [Log Targets](/docs/developers/launch/log-targets) to forward server logs to your logging platform in real-time for future reference.

### Deployment Logs

Launch throws a `Cloud functions deployment error` when it is unable to deploy your code to Launch Cloud Function. This can happen in the following scenario:
- **Bundling failed**: Bundling your Launch Cloud Function failed due to a syntax error in your code or missing dependencies in `package.json` which are used by the Cloud Function(s).

## Server-Side Frameworks and Launch Cloud Functions (Applicable for Launch Azure and GCP)

When deploying projects on Contentstack Launch that utilize server-side frameworks, it is recommended to use the native server-side capabilities offered by the framework itself. This leverages the native functionality provided by each framework and avoids conflicts with Launch Cloud Functions.

For example:
- **Next.js Pages Router**: Use [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
- **Next.js App Router**: Use [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- **Gatsby**: Use [Gatsby Functions](https://www.gatsbyjs.com/docs/reference/functions/getting-started/)
- **Other**: Use [other framework with server command](/docs/developers/launch/other-frameworks-on-launch#hosting-an-ssr-framework-site)

If a project with server-side functionality is detected, Launch Cloud Functions will be automatically disabled during deployment. This will be reflected in the [**Deployment Logs**](/docs/developers/launch/deployments#deployment-logs) with the following message:

```
Cloud functions:
Disabled with server side deployment
```

## Deploying a Project with Only Launch Cloud Functions

If you want to deploy a project that does not have a website but only Launch Cloud Functions, you can do so by following the steps given below:
- Ensure the root directory has a `/functions` folder as mentioned above.
- While setting up the project, set the **Framework Preset** to `Other`.
- If the Cloud Functions have dependency packages, follow the steps below:Ensure that a `package.json` file is present at the root directory.
- Set `Build Command` to `npm install` to install the dependency packages.

## Running Cloud Functions Locally

You can run your Launch project Cloud Functions locally using the [launch:functions](/docs/developers/cli/cli-for-launch/#functions) command in CLI.

## Limitations

- Writing Cloud Functions using TypeScript is currently not supported.
- Currently, running a standalone server (for example, Express, Fastify, and so on) in a Launch Cloud Function is not supported.

## Common questions

### Where do I put Launch Cloud Functions in my project?
You must code your functions in JavaScript and save them to the `/functions` directory in your project’s root folder.

### How is the function endpoint determined?
The function endpoint is determined by its **file path** relative to `/functions.`

### What are the timeout and memory limits?
The maximum execution timeout is **30 seconds** and the memory size is **1024 MB**.

### How long are server logs retained?
For both `Live` and `Archived` statuses, server logs are retained for **24** hours, with a maximum of **5000** most recent logs viewable.

<!-- filename: contentstack-launch-cloud-functions.md -->