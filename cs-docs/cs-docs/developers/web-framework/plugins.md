---
title: "[Web Framework] - Plugins"
description: Plugins help you add features and extend the functionality of Contentstack using the contentstack-express web framework.
url: https://www.contentstack.com/docs/developers/web-framework/plugins
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Web Framework] - Plugins

This page explains how to create, configure, and use plugins in the contentstack-express web framework, including available hooks and examples. It is intended for developers extending Contentstack-powered sites and should be used when you need to add custom behavior via plugin hooks or Express middleware.

**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

Plugins help you add features and extend the functionality of Contentstack. While Contentstack provides a number of pre-built plugins, you can create your own plugins to build your custom functionality.

## Directory Structure

Every plugin must have a package.json file in the root of its directory. This file describes the plugin name and version to Contentstack. A typical plugin directory structure is given below:

```
plugins
└── myplugin
    ├── index.js
    └── package.json
```

## Plugin Development

Creating your own plugin is fairly easy with contentstack-express. Let’s look at the steps involved in developing a plugin from scratch.

To create a plugin, run the following command inside your contentstack-express based application.

```
$ contentstack plugin create MyPlugin
```

The above command will create a plugin “MyPlugin” with default directory structure.

## Plugin Configuration

Once you have created a plugin, you will need to activate it. Activation takes place in the config file, where the execution order of the plugins is defined. The process for activating the plugin is given below:

```
config > all.js
{
  plugins: {
    "myplugin" : {
      content_type: “test”,
      per_page: 10
   }
  }
}
```

**Options**: Options can be assigned to plugin in the config file while activating the plugin. It is the object which will be used by a plugin in a hook. For instance, in the above example, activation of the plugin is done using two parameters – content_type and per_page –. You can access these options by using `MyPlugin.options` within the plugin.

To access the assigned options within a plugin, use the following code snippet:

```
MyPlugin.serverExtends = function(app) {
    var perPage = MyPlugin.options.per_page
    console.log(perPage) //output: 10
};
```

## Hooks

Hooks, in simple words, are specific places in your code where a function will be executed (if it has been configured). Contentstack Express provides some popular, ready-to-use hooks for your website. Let’s have a look at the uses of each.

### templateExtends

This hook allows you to reconfigure the template engine as well as extend its functionality by adding custom filters, tags, macros etc. While using the Nunjucks template engine(default), please ensure to getEnvironment() before making any changes on the engine object.

```
MyPlugin.templateExtends = function (engine) {
    var environment = engine.getEnvironment();
}
```

### serverExtends

This hook allows you to extend the existing functionality of Contentstack Framework by providing the app instance in the argument.

#### app.use()

This works the same as [express middlewares](http://expressjs.com/en/guide/using-middleware.html). This hook is useful if you want to set a custom route, which is not relevant to Contentstack data, such as sending requests to a third party server to get the data.

An appropriate example of its usage would be showing XSS feeds from the third party server. Another example would be adding the bodyparser middleware, which is required if you want to perform any post/put/delete operation from your server to parse the data sent in the request.

#### app.extends().use()

app.extends() essentially extends the existing functionality of Contentstack routes (for pages that are already published on the site).

This hooks is quite similar to the above one, except here your request will pass through the Contentstack logic of searching the data in the local server and serving it. This hook is useful if, for instance, you want to proxy the same data from a different URL. A request-level API is available to change the template, to add the additional data in the response/template.

For example, we can define that ‘/company’ should send the company information page along with the latest press releases that are available on the site.

```
app
.extends()
.get(“/company”, function(req, res, next){
    //custom logic
})
```

**request-level API**

**req.contentstack.get(key)**Gets the current request variables

**- url/originalUrl****
****- parsedUrl****
****- lang****
****- content_type****
****- query****
****- entry****
****- template**

To understand the usage of the request variable of “req.contentstack.get(key),” refer to the sample code of a plugin file, [myplugin.js](https://gist.github.com/ninadhatkar/60bb71d26ba3704d095202e3e095dd03).

**req.contentstack.set(key, value) **Overwrites “template” and “entry”

**req.getViewContext() **Sets additional data on the template or result page/entry

**- req.getViewContext().set(key, value)**, For example, you can set the recent press releases which were published on the site. These will then be available as the top level key in the template.

```
req.getViewContext().set(‘press_releases’, [pr1, pr2]);
```

So, the template will be directly accessible using the “press_releases” key.

**- req.getViewContext().get(key) **Gets the value from current request

#### app.error()

This is quite similar to express [error middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.error-handling) that has “error” as the first argument. If next is called with the err argument, then it will be sent to the contentstack (system-defined) error handler.

Example

```
app.error(function(err, req, res, next){
    // custom code to handle error or overwrite the template and send custom response
})
```

### beforepublish" >="" This hook allows you to perform specific operations after the entry/assets have been sent for publishing but before they are published over an environment.

```
MyPlugin.beforePublish = function (data, next) {
    next();
};
```

### beforeunpublish" >="" This hook triggers when any entry/asset is unpublished/deleted from the ContentStack and before the relevant data is removed from the local server.

```
MyPlugin.beforeUnpublish = function (data, next) {
    next();
};
```

## Plugin Examples

Contentstack express framework is based on Express framework. We can use all the express middlewares in Contentstack. First, let us take the “view-helper” express module as an example and see how this can be plugged in.

**Plugin Code:**

```
var helpers = require('view-helpers');
module.exports = function ViewHelperPlugin() {
  ViewHelperPlugin.serverExtends = function(app) {
    // app object is extended express object which has all the Express methods.
    app.use(helpers('app name'));
  };
};
```

**Plugin Activation Config:**

```
{
    plugins : {
        "view-helper-plugin" : {}
    }
}
```

Now, let's consider an example. Consider that you need to extract multiple entries of a content type through a plugin. For example, if you want to create a “Blog posts list” page, where you need to fetch and display all the blogs posts, you can do this by creating a plugin. Below is the sample code for the plugin:

```
/*!
  * myplugin
*/
"use strict";
/*!
  * Module dependencies
*/
var contentstack =  require('contentstack-express');
module.exports = function Myplugin() {
  /*
    * Myplugin.options provides the options provided in the configuration.
  */
  var options = Myplugin.options;
  var stack = contentstack.Stack();
  Myplugin.templateExtends = function(engine) {
    engine.getEnvironment().addFilter("shorten", function(str, count) {
      return str.slice(0, count || 5);
    });
  };
  Myplugin.serverExtends = function(app) {
    app
      .extends()
      .get('/blog', function(req, res, next){
      // your code goes here
      var query = stack.ContentType('>').Query().toJSON().find();
      query.then(
        function(data) {
          req.getViewContext().set("data", data);
          next();
        }, function(error) {
          req.getViewContext().set("data", {});
          next();
      });
    });
  };
};
```

**Plugin Activation Config:**

```
{
    plugins : {
        "myplugin" : {}
    }
}
```

## Common questions

### Is contentstack-express still supported?
**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

### Where do I define the execution order of plugins?
Activation takes place in the config file, where the execution order of the plugins is defined.

### How do I access plugin options inside a plugin?
You can access these options by using `MyPlugin.options` within the plugin.

### What is the difference between `app.use()` and `app.extends().use()`?
`app.use()` is useful if you want to set a custom route, which is not relevant to Contentstack data, while `app.extends()` extends the existing functionality of Contentstack routes (for pages that are already published on the site).

