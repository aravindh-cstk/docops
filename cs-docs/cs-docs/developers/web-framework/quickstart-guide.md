---
title: "[Web Framework] - Quickstart Guide"
description: Steps involved in creating your first web page using contentstack-express (deprecated) and publishing content.
url: https://www.contentstack.com/docs/developers/web-framework/quickstart-guide
product: Contentstack
doc_type: quickstart
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Web Framework] - Quickstart Guide

This page explains how to create your first web page using the contentstack-express web framework, including setting up a stack, content type, publishing environment, connecting via CLI, and publishing content. It is intended for developers who are setting up a basic site workflow and need a step-by-step quickstart for the (deprecated) framework.

**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and flexible than the web framework.

This quickstart guide will take you through the steps involved in creating your first web page using contentstack-express. contentstack-express is a Node.js web application framework based on Node.js Express, which provides a number of features for creating websites easily.

The steps to be followed are given below:
- [Create a stack](#create-a-stack)
- [Create a Content Type](#create-a-content-type)
- [Create your first page](#create-your-first-page)
- [Set up publishing environment](#set-up-publishing-environment)
- [Set up and connect contentstack-express](#set-up-and-connect-contentstackexpress)
- [Publish Content](#publish-content)

## Create a stack

A [stack](../set-up-stack/about-stack.md) is like a container that holds the content of your site. To create a new stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and click the **+ New Stack** action button. Enter a suitable **Name** and **Description** (optional) for the stack.

## Create a content type

A [content type](../create-content-types/about-content-types.md) is your page’s structure. Since we are planning to create a simple home page, the page will contain only a couple of fields: **Title** and **Body**. You can add/remove more [fields](../create-content-types/about-fields.md) depending on your requirements. Let’s look at a short video to learn the process of creating a content type (**Home**).

## Create your first page

You can create pages for your website by creating [entries](../../content-managers/author-content/about-entries.md) using the defined content type. To create your website’s home page , click the **Home** content type and add content in the given fields.

With this step, we’re almost done with defining the structure and content of your site. Let’s now set up the publishing environment.

## Set up publishing environment

A publishing [environment](../set-up-environments/about-environments.md) is your web server where you want to deploy your content. While you [create an environment](../set-up-environments/add-an-environment.md), click on the **Advanced** option, and select **Deploy Content to Server(s)** option to sync the published content on your web server.

## Set up and connect contentstack-express

**Prerequisite** You need [Node.js v16 or later](https://nodejs.org/en/download/) to use Contentstack.

- **Install the CLI** Run this command in a Terminal or command prompt to obtain and globally install the latest version of the framework on your system:
```
$ npm install -g contentstack-cli
```

**Note**: You may need administrator privileges to perform this installation.

- **Connect** In the terminal, navigate to your workspace, and run the `connect` command.
```
$ contentstack connect
```

This will prompt you to enter the stack API key and Access Token. You can find these in the [Stack details](../set-up-stack/view-stack-details.md) page.
```
Enter your stack api key: {API_KEY}
Enter your stack access token: {ACCESS_TOKEN}
```

**Note**: We have stopped supporting Access Token for all stacks created after December 16, 2020. However, for stacks created before December 16, 2020, we will continue to support Access Tokens.

This will validate the stack. Once validated, you will be prompted to enter the project root directory and select the publishing environment ("development") which we created in earlier steps.
```
Enter name of the directory to contain the project: (my-site)
Select the publishing environment:
1. development
```

This will automatically configure your project for the selected publishing environment along with the basic theme for the website. We are now ready to start the application.

- **Start your application** To start your application, simply navigate to your site development folder and start it using Node.js. In this case, the steps would be as follows:
```
$ cd my_new_site
$ npm start
```

We are done with setting up the publishing environment! However, your site’s home will throw a “404” error. This is because the content has not yet been published. Let’s publish the home page.

## Publish content

Go to the **Home** content type, and publish the entry on the ****“**development**” environment. Then, visit the page `http://localhost:4000` in your browser to view the published content.

Contentstack's web framework automatically applies the default page theme and design. To customize your page design, check out the [Theming](./theming-and-templating.md) guide to customize your page design.

Contentstack provides [Postman collections of our Content Delivery, Content Management, and GraphQL APIs](../../../api-docs/postman-collections.md) which will help you to get started with the APIs and try them out through the Postman client. To get started with the the Postman collections, download the latest version of the Postman collection(s) and the Postman app, set your Contentstack account-specific values in the collection environment, and try out our APIs with ease.

## Common questions

### Is contentstack-express still supported?
**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and flexible than the web framework.

### What do I need installed before running the quickstart?
**Prerequisite** You need [Node.js v16 or later](https://nodejs.org/en/download/) to use Contentstack.

### Why do I see a “404” error after starting the application?
We are done with setting up the publishing environment! However, your site’s home will throw a “404” error. This is because the content has not yet been published.

### Where do I find the stack API key and Access Token?
This will prompt you to enter the stack API key and Access Token. You can find these in the [Stack details](../set-up-stack/view-stack-details.md) page.