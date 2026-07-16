---
title: "[Web Framework] - contentstack-express Folder Structure"
description: Folder and file structure reference for the deprecated contentstack-express web framework.
url: https://www.contentstack.com/docs/developers/web-framework/contentstack-express-folder-structure
product: Contentstack
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Web Framework] - contentstack-express Folder Structure

This page describes the folder and file structure created after installing contentstack-express. It is intended for developers maintaining existing contentstack-express projects and should be used when locating configuration, templates, themes, logs, and other project assets.

### contentstack-express Folder Structure

**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

After successfully [installing](./installation.md) contentstack-express, your main directory will contain the following sub-folders:

| Folder/File Name | Description |
|---|---|
| content | All the published content of your stack is stored here. Since it contains important data, it is highly recommended that you should not edit/delete the contents of this folder. |
| logs | This contains all the log files, including site logs (site access and errors) and sync logs (publish/unpublish events). |
| config | This folder contains all your system configuration files. |
| themes | It houses all the themes that can be used in your application. The “theme” folder further has sub-folders within it. |
| templates | All the pages, layouts, and partials reside here. |
| public | It contains all the static assets like css,js, images, etc. |
| plugins | This section contains extensions to the current application in the form of plugins such as redirect-rules, blogs, and static site generator. |
| app.js | This is the file that will run the server on the specified port and environment. Default port is 4000 and default environment is  “development” |
| package.json | This is a node.js package manager file that maintains the application version along with its dependencies. |

## Common questions

### Is contentstack-express still supported?
No. **Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework.

### What should I use instead of contentstack-express?
Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

### Where are templates and layouts stored?
They reside in the `templates` folder: “All the pages, layouts, and partials reside here.”

### Which folder should I avoid editing or deleting?
The `content` folder: “Since it contains important data, it is highly recommended that you should not edit/delete the contents of this folder.”