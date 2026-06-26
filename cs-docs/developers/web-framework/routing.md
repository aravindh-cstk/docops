---
title: "[Web Framework] - Routing"
description: Routing essentially means how URLs are mapped to actions and variables.
url: https://www.contentstack.com/docs/developers/web-framework/routing
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Web Framework] - Routing

This page explains how routing works in the contentstack-express web framework, including how URLs map to actions and how to define route rules. It is intended for developers building or maintaining apps with the web framework and should be used when configuring or customizing request handling for specific URLs.

## Routing

**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

Routing essentially means how URLs are mapped to actions and variables.

When a URL is accessed on your domain, a request is sent to the router that is available in “app.js” file or a plugin. This router is responsible for finding a matching page and, accordingly, routing the request to the page. contentstack-express allows you to define these routing rules.

Example:

Let’s define a rule where the router will return “hello world” when a GET request is made to the home page.

```
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
```

Similarly, you can variously define custom routes. contentstack-express supports all the route methods, paths, and handlers that are provided by [Node.js Express](http://expressjs.com/en/guide/routing.html).

## Common questions

**Q: Where is the router defined in a contentstack-express project?**  
A: When a URL is accessed on your domain, a request is sent to the router that is available in “app.js” file or a plugin.

**Q: What happens when a URL is accessed on the domain?**  
A: A request is sent to the router, which is responsible for finding a matching page and routing the request to the page.

**Q: What routing features are supported by contentstack-express?**  
A: contentstack-express supports all the route methods, paths, and handlers that are provided by [Node.js Express](http://expressjs.com/en/guide/routing.html).

**Q: What should be used instead of the deprecated contentstack-express framework?**  
A: The page recommends using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.