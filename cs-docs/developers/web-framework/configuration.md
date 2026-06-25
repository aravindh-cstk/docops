---
title: "[Web Framework] - Configuration"
description: Configuration options and usage for the contentstack-express web framework, including environment-specific config files and available settings.
url: https://www.contentstack.com/docs/developers/web-framework/configuration
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Web Framework] - Configuration

This page explains how to configure the contentstack-express web framework, including how configuration files work across environments and how to read configuration values in code. It is intended for developers maintaining existing contentstack-express implementations and should be used when setting up or modifying framework behavior (cache, logs, view engine, static/assets handling, storage, themes, and languages).

## Configuration

**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

All the configuration for contentstack-express is stored in the ` file under the “config” folder. This config file is loaded for all the environments of your stack. If you want separate configuration for a specific environment, you can create a separate config file for that environment. For example, the “Development” environment will have development.js` file, and “Production” will have `production.js` file.

**Example**

```
all.js
{
    theme: “basic”
}
staging.js
{
    theme: “advanced”
}

```

In the above example, when the application will run on the “staging” environment, the “advanced” theme will be implemented for templates and static files. For the rest of the environments, the basic theme will be implemented, as specified in `all.js` file.

## Get configuration

To get the configuration, use the following command:

**contentstack.config.get('key')
	**

In the above command,  “key” is any key present in the “config” file.

For example, if we have mentioned a port value in the config file, we can get it by using the following command:

```
contentstack.config.get('port')

```

To get the nested-level JSON key, you can use the dot-separated syntax as given below:

```
contentstack.config.get('storage.options.baseDir')

```

The following are the various configurations that the user can use as per the requirement.

```
{
    cache: true,
    logs: {
        console: true,
        json: true,
        path: "./_logs"
    },
    view: {
        module: "nunjucks",
        extension: "html",
        scaffold: true,
        minify: true,
        options: {
                autoescape: false,
                throwOnUndefined: false,
                trimBlocks: false,
                lstripBlocks: false,
                watch: true,
                noCache: true
        }
    },
    languages: [
        {
            code: "en-us",
            relative_url_prefix: "/"
        }
    ],
    storage: {
        provider: "FileSystem",
        options: {
            basedir: "./_content"
        }
    },
    assets: {
        pattern: "/assets/:uid/:filename",
        basedir: "./_content",
        options: {
            dotfiles: 'ignore',
            etag: true,
            extensions: [ 'html', 'htm'],
            fallthrough: true,
            index: 'index.html',
            lastModified: true,
            maxAge: 0,
            redirect: true,
            setHeaders: function (res, path, stat) {
                res.set('x-timestamp', Date.now());
            }
        }
    },
    "static": {
        url: "/static",
        path: "public",
        options: {
            dotfiles: 'ignore',
            etag: true,
            extensions: [ 'html', 'htm'],
            fallthrough: true,
            index: 'index.html',
            lastModified: true,
            maxAge: 0,
            redirect: true,
            setHeaders: function (res, path, stat) {
                res.set('x-timestamp', Date.now());
            }
        }
    }
}

```

### cache

With this option, you can enable/disable content caching. The default value is **true**. This fulfills read requests by serving cached content, thereby improving the site performance.

### logs

Use this settings to set a different path for the logs, and provide the textual or JSON format for logs.

### view

Here, you can specify the module, extension, and scaffold settings, along with module-based options such as autoescape and cache (above example is specific for nunjucks; options may vary based on the module).

### static

contentstack-express is based on Express.js. This enables us to use the same options that are available for static in [Express.js](http://expressjs.com/en/4x/api.html#express).

### assets

contentstack-express creates a URL for each published [asset](/docs/content-managers/working-with-assets/about-assets), which you can change from here. Beside, you can also specify the static options of Express.js for the published assets.

### storage

Change the location of the storage also with the different providers.

### theme

Activate a theme from here. The theme specified here should be one of the themes residing in the ‘themes’ folder.

### languages

To configure a [language](../multilingual-content/about-languages.md) other than the default one on the server, add the language in the format specified below. It requires a valid language code and a relative_url_prefix. You also need to specify that the application is having a separate domain for this particular language.

**Example**

```
{
    code: ‘ja-jp’,
    relative_url_prefix: ‘/’,
    host: ‘www.jp.example.com’
}

```

The above example shows how to add a new [localized](../multilingual-content/about-localization.md) language (Japanese) on the server. Here, we first specify the language code, and then the relative url prefix. Lastly, we specify the specific domain name for the new language.

## Common questions

### How do I create environment-specific configuration?
Create a separate config file for that environment (for example, `development.js` for “Development” and `production.js` for “Production”).

### How do I read a configuration value in code?
Use `contentstack.config.get('key')`, where “key” is any key present in the “config” file.

### How do I access nested configuration values?
Use dot-separated syntax such as `contentstack.config.get('storage.options.baseDir')`.

### Where do I configure languages beyond the default?
Add the language under the `languages` configuration in the format shown, including a valid language code and a `relative_url_prefix`, and specify a separate domain for that language.