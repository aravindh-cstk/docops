---
title: "[Contentstack Launch] - Next JS On-Demand Revalidation for SSG pages"
description: Next JS On-Demand Revalidation for SSG pages in Contentstack Launch using SSR with cache headers and buildId configuration.
url: https://www.contentstack.com/docs/launch/nextjs-on-demand-revalidation-for-ssg-pages
product: Contentstack Launch
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Contentstack Launch] - Next JS On-Demand Revalidation for SSG pages

This page explains how to achieve On-Demand Revalidation for SSG pages in Contentstack Launch by switching to SSR with cache headers and configuring the Next.js `buildId`. It is intended for developers working with Next.js applications deployed via Launch, and should be used when you need frequently changing content while still leveraging browser/CDN caching behavior.

### Next JS On-Demand Revalidation for SSG pages

On-Demand Revalidation for SSG pages can be achieved in Contentstack Launch by using SSR with cache headers. SSR with cache headers allow you to serve dynamic content that changes frequently while still benefiting from caching at the browser or CDN level. You can use different cache-control directives to specify how long and where the content can be cached and how it can be revalidated.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization

## Steps for Execution

- To update your code for the SSG page from using `getStaticProps` to `getServerSideProps` (SSR) using cache headers, follow the steps below:

  Replace `getStaticProps` with `getServerSideProps`
    Replace the `getStaticProps` function with the `getServerSideProps` function in your page component. The `getStaticProps` function is used for SSG pages, while the `getServerSideProps` function is used for SSR pages.
- Set cache-control headers in the res object
    Set the appropriate cache-control headers in your response object inside the `getServerSideProps` function. You can use the `res.setHeader` method to do this. The cache-control headers determine how long and where your page can be cached by browsers, intermediate proxies, and CDN.

Example for using SSR with cache headers:

```
// index.js
import React from 'react';

export async function getServerSideProps(context) {
  // Fetch data from an API
  const response = await fetch('https://example.com/api/data');
  const data = await response.json();

  // Set cache-control header to "max-age=0, s-maxage=84000"
  // This means that the browser and any other user agents would not use the cache but would be forced to revalidate
  // but the response can be cached for a duration of 84000 seconds at the CDN without validating it with the server
  context.res.setHeader('cache-control', 'max-age=0, s-maxage=84000');

  // Return the data as props
  return { props: { data } };
}

// The page component receives the data as props
function IndexPage({ data }) {
  return (

# Index Page

      This is an SSR page that uses cache headers.

        {data.map((item) => (
- {item.name}

        ))}

  );
}

export default IndexPage;
```

- Set `buildId` to the latest live Launch deployment:
In order to revalidate the CDN cache of `_next/data` for a deployment, Launch requires the NextJs application to set the generation of `buildId` to the value of the latest live Launch deployment. This can be done by adding the following code snippet to your `next.config.js`.

```
// next.config.js

module.exports = {
  generateBuildId: () => {
    return  process.env.CONTENTSTACK_LAUNCH_DEPLOYMENT_UID
  },
}
```

## Common questions

### Do I need to replace `getStaticProps` with `getServerSideProps` to use this approach?
Yes, the steps describe updating your SSG page from using `getStaticProps` to `getServerSideProps` (SSR) using cache headers.

### Where do I set the cache-control headers?
Set the appropriate cache-control headers in your response object inside the `getServerSideProps` function using the `res.setHeader` method.

### Why does Launch require setting `buildId` to the latest live deployment?
Launch requires the NextJs application to set the generation of `buildId` to the value of the latest live Launch deployment in order to revalidate the CDN cache of `_next/data` for a deployment.

### Where should I add the `buildId` configuration?
Add the provided code snippet to your `next.config.js`.