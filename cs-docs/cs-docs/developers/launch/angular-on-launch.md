---
title: "[Contentstack Launch] - Angular on Launch"
description: Angular on Launch in Contentstack Launch, including supported features and application specifications.
url: https://www.contentstack.com/docs/developers/launch/angular-on-launch
product: Contentstack Launch
doc_type: developer-guide
audience:
  - developers
  - devops
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Angular on Launch

This page explains how Angular applications work on Contentstack Launch, including supported deployment modes (SSG, SPA, SSR) and the runtime specifications/limits you should account for when deploying and operating an Angular app on Launch.

## Angular on Launch

[Angular](https://angular.io/) is a widely used open-source web application framework developed and maintained by Google. Known for its modularity and maintainability, Angular is efficient at building dynamic, single-page web applications (SPAs). Angular employs `TypeScript`, a superset of `JavaScript`, enabling you to build robust, scalable applications with a clear structure.

## Supported Features in Contentstack Launch

### Static Site Generation (SSG)

Contentstack Launch seamlessly supports Angular applications through [Static Site Generation (SSG)](https://angular.io/guide/prerendering) . This feature allows you to pre-render your Angular applications into static HTML files during the build process. These static files can be deployed to Launch, enhancing the performance and enabling quicker page loads.

### Single-Page Application (SPA)

Angular applications deployed on Launch can function as Single-Page Applications (SPAs), providing a smooth and dynamic user experience without the need for multiple page loads, ensuring a responsive and engaging user interface.

### Server-Side Rendering (SSR)

Launch supports Angular's Server-Side Rendering (SSR) approach. SSR allows Angular applications to render pages on the server, resulting in enhanced performance. After the rendered page is delivered to the client, Angular initializes the application and utilizes the data contained within the HTML page.

**Additional Resource:** Please refer to the [Quick Start Guide with Angular](/docs/developers/launch/quick-start-angular/) documentation for a step-by-step walkthrough to deploy an Angular Starter on Launch as an SSR-based application.

## Launch Angular Application Specifications

### Execution Timeout

The Launch application enforces a maximum execution timeout, requiring it to respond to any incoming HTTP request within **30** seconds. If the application fails to respond within this duration, the request will time out, resulting in a response with an HTTP status error code **500**.

**Note: **For error code **500**, please refer to the timed-out errors in the **Server Logs** tab to understand and address the issue.

### Memory Size

The memory size for a Launch application is **1024 MB**.

### Runtime Environment

The Launch runtime environment leverages [**Node.js**](/docs/developers/launch/supported-nodejs-versions) to power its execution environment.

### File System

The Launch Angular file system refers to the Launch application's ability to interact with the file system, including `read` and `write` operations. By default, Launch applications implement a read-only file system, with the exception of the designated `/tmp` directory, which facilitates `write` operations.

The `/tmp` directory is a temporary file system accessible to every Launch serverless runtime, offering up to **500 MB** of storage.

**Note: **The data stored in `/tmp` is non-persistent and is automatically deleted upon request completion.

### Architecture

Launch application supports the `x86_64` instruction set.

### Caching

By default, all the pages are cached on Launch’s CDN when you deploy Angular as SSR. This means that the subsequent requests to the same page will be cached, and the page will not be regenerated.

You can configure this behavior by returning appropriate cache headers from your server side implementation in Angular. In the following example, we modify the `Express.js` route that handles Angular engine requests in `server.ts` to regenerate the page every 5 minutes:

```
server.get('*', (req, res, next) => {
	const { protocol, originalUrl, baseUrl, headers } = req;

	commonEngine
  	.render({
    	bootstrap,
    	documentFilePath: indexHtml,
    	url: `${protocol}://${headers.host}${originalUrl}`,
    	publicPath: browserDistFolder,
    	providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
  	})
  	.then((html) => res.header('cache-control', 'max-age=0, s-maxage=300').send(html))
  	.catch((err) => next(err));
});

```

### Cache Revalidation

As an Angular SSR user, you can also leverage [Launch’s cache revalidation feature](/docs/developers/launch/revalidate-cdn-cache) to render new content updates on demand.

**Note:** Please ensure that you also revalidate the cache for the data endpoint backing the content in addition to the page URL. This is important if you have cached API endpoints delivering data for the page.

## Common questions

### Does Launch support Angular SSR, SSG, and SPA deployments?
Yes. The page lists support for Static Site Generation (SSG), Single-Page Application (SPA), and Server-Side Rendering (SSR).

### What happens if my Angular app takes too long to respond on Launch?
The Launch application must respond within **30** seconds; otherwise the request will time out and return an HTTP status error code **500**.

### Can my Angular app write files on Launch?
By default, the file system is read-only except for the designated `/tmp` directory, which facilitates `write` operations and offers up to **500 MB** of storage.

### How can I control CDN caching for Angular SSR on Launch?
You can configure caching by returning appropriate cache headers from your server side implementation in Angular (for example, modifying the `Express.js` route in `server.ts`).