---
title: "Angular on Launch"
description: "Explore Angular framework support and features available in Contentstack Launch for building dynamic front-end apps."
url: /launch/angular-on-launch
uid: bltbedba9890dcfae86
---

# Angular on Launch

## Angular on Launch

[Angular](https://angular.dev/) is a widely used open-source web application framework developed and maintained by Google. Known for its modularity and maintainability, Angular is efficient at building dynamic, single-page web applications (SPAs). Angular employs TypeScript, a superset of JavaScript, enabling you to build robust, scalable applications with a clear structure.

## Supported Features in Contentstack Launch

### Static Site Generation (SSG)

Contentstack Launch seamlessly supports Angular applications through [Static Site Generation (SSG)](https://v17.angular.io/guide/prerendering) . This feature allows you to pre-render your Angular applications into static HTML files during the build process. These static files can be deployed to Launch, enhancing the performance and enabling quicker page loads.

### Single-Page Application (SPA)

Angular applications deployed on Launch can function as Single-Page Applications (SPAs), providing a smooth and dynamic user experience without the need for multiple page loads, ensuring a responsive and engaging user interface.

### Server-Side Rendering (SSR)

Launch supports Angular's Server-Side Rendering (SSR) approach. SSR allows Angular applications to render pages on the server, resulting in enhanced performance. After the rendered page is delivered to the client, Angular initializes the application and utilizes the data contained within the HTML page.

**Additional Resource:** Please refer to the [Quick Start Guide with Angular](/docs/launch/quick-start-angular/) documentation for a step-by-step walkthrough to deploy an Angular Starter on Launch as an SSR-based application.

## Launch Angular Server Configuration

Refer to the [Server Configuration](/docs/launch/server-configuration) document to learn about the Angular server configuration.

### Caching

By default, all the pages are cached on Launch’s CDN when you deploy Angular as SSR. This means that the subsequent requests to the same page will be cached, and the page will not be regenerated.

You can configure this behavior by returning appropriate cache headers from your server side implementation in Angular. In the following example, we modify the Express.js route that handles Angular engine requests in server.ts to regenerate the page every 5 minutes:

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

As an Angular SSR user, you can also leverage [Launch’s cache revalidation feature](/docs/launch/revalidate-cdn-cache) to render new content updates on demand.

**Note:** Please ensure that you also revalidate the cache for the data endpoint backing the content in addition to the page URL. This is important if you have cached API endpoints delivering data for the page.
