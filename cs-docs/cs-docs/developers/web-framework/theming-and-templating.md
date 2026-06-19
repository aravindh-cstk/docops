---
title: "[Web Framework] - Theming and Templating"
description: Theming and templating in contentstack-express web framework, including theme structure, templates, layouts, partials, filters, helpers, localization, and Nunjucks configuration.
url: https://www.contentstack.com/docs/developers/web-framework/theming-and-templating
product: Contentstack
doc_type: developer-guide
audience:
  - developers
  - frontend-developers
  - web-framework-users
version: unknown
last_updated: 2026-03-26
---

# [Web Framework] - Theming and Templating

This page explains how theming and templating work in the contentstack-express web framework, including theme folder structure, template conventions, layouts/partials, and Nunjucks configuration. It is intended for developers customizing the look, structure, and rendering of Contentstack-powered websites using the framework, and should be used when creating or activating themes and building page templates.

**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

Themes help you customize the look and feel of your Contentstack website or web application. By default, Contentstack provides a "basic" theme for your website, which is stored in the framework’s "theme" folder. You can store multiple themes in your framework, and activate any one theme at a time.

## Theme Structure

Given below is the folder structure for themes:

All the files related to themes are stored in the "themes" folder of your framework. Let’s look at the subfolders of this directory.

| Directories | Description |
|---|---|
| basic | This is the individual theme folder, containing the default theme files. Any new themes will be on same level. |
| public | This folder contains all assets, i.e., items that are part of your theme, such as CSS, JavaScript, and fonts. |
| templates | The "templates" folder contains sub folders (layouts, pages, and partials) that hold the files related to the templates. |
| templates/layouts | It stores all the layouts of your website. Read Layouts for more details. |
| templates/pages | This folder stores the templates of the pages of your website, e.g., home/index.html, about/index.html. See Pages for more detail. |
| templates/partials | Partials store all the re-usable code elements of your website, such as header.html, footer.html. Learn more about Partials. |

## Default theme

contentstack-express provides "basic" as the default theme for your website, and is stored in {website-root-folder}/themes/basic. It serves as a good starting point for customizing the theme your way. If creating your own theme, it is recommended that you have a closer look at this default theme, and understand how it works.

## New theme settings

contentstack-express provides a "basic" theme by default, which is stored in the "themes" directory. Any new theme you wish to add should be on the same level as "basic." This new theme should follow the directory structure as mentioned above.

To activate the theme, specify it in the config. E.g.,

```
{
    theme: "advance"
}
```

**Static files**: This includes all the static files such as, CSS, images, JavaScript, fonts, etc. of your website’s theme. By default, all the static files are accessible using '/static' relative path.

For example, the style.css file saved in the ‘public > CSS’ folder can be accessed using the URL "/static/css/style.css."

**Example:**

**File path**

```
├── public
│   ├── css
│   │   └── style.css
```

**File URL**

```
/static/css/style.css
```

## Templating

Templates are like blueprints for pages, components, and other areas of a website. They help you define the output of your website.

Contentstack uses [Nunjucks](https://mozilla.github.io/nunjucks/) as the default template engine. Apart from providing the usual logic, looping, and variable control, Nunjucks also supports some very advanced page composition elements such as includes, layout inheritance, block inheritance, custom tags, macros, and more. If you are new to Nunjucks, we recommend you to read its [docs](https://mozilla.github.io/nunjucks/templating.html) before starting with contentstack-express templates.

### Conventions

Every content type should have its own template file. All the entries of the content type will be then rendered using the corresponding content type’s template.

There are two ways to do this. If you set "scaffold" to true in config, contentstack-express will create a template file automatically every time you create a new content type. This file (index.html) will be saved in **themes** > **basic** > **pages**. So, the path for this file is **themes/basic/pages/{content_type_uid}/index.html**.

If "scaffold" is set to false, you will need to create the template file manually for each content type in the directory mentioned above. For example, if the content type's unique id is "home," then the template’s path should be **themes/basic/pages/home/index.html**.

### Page Templates

As explained in "Conventions," each content type should have a corresponding template. These templates (such as Home, About Us, Blog) are saved in **themes** > **basic** > **templates** > **pages**. Now, whenever a new entry is created using a content type, the entry uses the corresponding template to render a page.

So, for instance, if your content type is "Blog Post" with unique id "blog-post," it should have a template file (index.html) in **themes** > **basic** > **pages** > **blog-post**. When you create a new entry using the "Blog Post" content type, it will use the corresponding template to display the post.

Page template is essentially a predesigned webpage structure that can be customized as per your requirements and can be applied to a single page or a number of pages.

For example, in templates/pages/home/index.html

```
{% extends "layouts/default.html" %}
{# display page values using the {{entry.field_id}} tag. #}
{% block content %}

# {{entry.title}}

    {{entry.body}}

{% endblock %}
```

In above template it extends the default.html layout from the layouts. In template “entry,” variable is provided to get the details of the current invoking page. To learn more about the nunjucks templating please refer [Nunjucks templating docs](https://mozilla.github.io/nunjucks/templating.html).

**Note:** To add a custom 404 page, you need to create a "404.html" template file and place it under "themes/{theme-folder}/templates/pages" of your contentstack-express framework. For example, if you wish to use the "basic" theme, the file location will be "themes/basic/templates/pages/404.html." This template file can be customized to suit your requirement.

### Layouts

Layouts includes the page scaffold, i.e., the structure of a page that contains common elements (e.g., header, footer, navigation). In most cases, the basic structure of most of the pages of your site would share the same header, footer, navigation, etc. Only the body of the page would change. In such a case, you need not have lots of identical HTML files. Layouts will do the job for you. You can have multiple layouts if you website has several different page structures. contentstack-express provides a default layout for your website called "default.html."

The "default.html" file present in the folder templates/layouts is the master layout file that includes layout partials and the global stylesheets and JavaScript files. This example shows a layout file is used to include the other files.

**Layout file**

```

    {% include "partials/header.html" %}
    {% block content %}{% endblock %}
    {% include "partials/footer.html" %}

```

**Template file**

```
{% extends “layouts/default.html” %}
{% block css %}

        p{margin: 10px}

{% endblock %}
{% block content %}

# {{entry.title}}

{{entry.body}}

{% endblock %}
```

**include**

```
{%include “partial-path” %}
```

"include" tag is used to include the external file to the current one.

"block" defines a section in the template and identifies it with a name. This is used by template inheritance. Base templates can specify blocks and child templates can override them with new content. For more info please refer [Nunjucks templating docs](https://mozilla.github.io/nunjucks/templating.html#block).

### Partials

Partials help you organize the code elements of your website in various small sections. You can re-use partials in multiple layouts. For instance, if your site has 10 layouts, you would not want to duplicate the site’s header and footer in all the layouts. You can simply create the header and footer as partials, and include them in all the layouts.

All the partials of your website are stored in templates/partials folder of your framework. Partials are included using the "include" tag in Nunjucks.

### Filters

Filters help you define the presentation logic of your website. They are small bits of code that allows you to do formatting or presentation-related changes in your template.

Let’s look at a simple example to understand how filters work. The "capitalize" filter capitalizes the first character of a value, and leave all other characters in lowercase.

```
{{ foo | capitalize }}
{# Output: Foo #}
```

Nunjucks comes with a long list of [pre-built filters](https://mozilla.github.io/nunjucks/templating.html#builtin-filters) that will help you manage most of your presentation logic needs. In case these aren’t adequate, you can create custom filters through [Nunjucks](https://mozilla.github.io/nunjucks/api#Registering-custom-filters) or through plugins.

Given below is the sample code for creating a custom filter that displays the first five characters of a value:

Custom filter plugin:

```
module.exports = function CountFilterPlugin() {
    CountFilterPlugin.templateExtends = function (engine) {
        // returns the first count characters in a string
        engine.getEnvironment().addFilter('shorten', function(str, count) {
            return str.slice(0, count || 5);
        });
    }
  };
```

### Template Helpers

Template helpers are a set of helper functions that helps the template grab and interact with the stored data. Contentstack provides following helper functions:

| **VIEW HELPERS** | **DESCRIPTION** |
|---|---|
| getTitle() | Returns the current page title |
| getUrl() | Returns the current page URL |
| getAssetUrl(asset_object) | Returns URL of the asset field ID passed |
| get('content_type_id') | Returns the latest published entry for the specified content type |

Given below is the list of helper objects available in page template:

| **OBJECTS** | **DESCRIPTION** |
|---|---|
| entry | Provides the entry for a specified URL |
| originalUrl/url | Provides the complete URL |
| parsedUrl | Parses a URL and provides the actual path. For example, in the URL localhost:4000/source1?a=A&b=B, the parsedUrl is /source1 |
| lang | Provides the current language object including the language code and the relative_url_prefix. For example, { code: 'en-us', relative_url_prefix: '/', url: '/?hitesh' } |
| query | Request query object. For example, in the URL localhost:4000/source1?a=A&b=B, the query is { a: 'A', b: 'B' } |

### Template localization

You can use different templates each locale of your website. So, if your website serves five countries in five different languages, you can have five separate templates.

The convention followed for the same is:

```
/pages/{content_type_uid}/{language_code}/index.html
```

**Example:**

If you want to have a separate template for the Japanese version of the homepage content type, the template path should be:

```
/pages/home/ja-jp/index.html
```

Here, "home" is the Homepage content type ID and "ja-jp" is the language code for Japanese language.

### Template Engine

By default, contentstack-express comes with [Nunjucks](https://mozilla.github.io/nunjucks/api) template engine, which is compatible with Node.js. You can use any other Node.js compatible template engine as well, as per your preference.

### Template Engine Configurations

Given below is the configuration settings for Nunjucks:

```
module.exports = exports = {
    view: {
        module: "nunjucks",
        extension: "html",
        scaffold: true,
        minify: true,
        options: {
           autoescape: false,
           throwOnUndefined: false, // keep this true in "production"
           trimBlocks: false,
           lstripBlocks: false,
           watch: true, // keep this false in "production"
           noCache: true // keep this false in "production"
         }
    }
}
```

### Extending the template engine

You can extend the current template engine by adding functionalities to it. Contentstack provides a plugin for the same. You can find out more about this plugin

## Common questions

### Is contentstack-express still supported?
**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

### Where do I place a custom 404 page template?
**Note:** To add a custom 404 page, you need to create a "404.html" template file and place it under "themes/{theme-folder}/templates/pages" of your contentstack-express framework. For example, if you wish to use the "basic" theme, the file location will be "themes/basic/templates/pages/404.html."

### How do I activate a new theme?
To activate the theme, specify it in the config. E.g.,

```
{
    theme: "advance"
}
```

### What template engine does contentstack-express use by default?
Contentstack uses [Nunjucks](https://mozilla.github.io/nunjucks/) as the default template engine.

<!-- filename: web-framework-theming-and-templating.md -->