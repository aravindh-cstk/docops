---
title: "Architecture Planning And Deployment Models"
description: "Get an in-depth understanding of website architecture planning. Contentstack provides the best guide that will help you choose the right deployment model."
url: /headless-cms/architecture-planning-deployment-models
---

# Architecture Planning And Deployment Models

## Architecture Planning & Deployment Models

Before you start with any project, it’s important to first determine the right deployment model for the project. You need to choose between **PUSH publishing** and **PULL publishing**. This decision helps you set up the right infrastructure for the project.

This best practice guide will help you choose the right deployment model by discussing them in detail. The decision to choose between push and pull publishing becomes easier if you know the complete scope of the project beforehand. It is therefore recommended to understand the nature of the project and have knowledge about the architecture and the model that you choose for deployment.

## Push Publishing

Contentstack will notify your server whenever new content will be published. Published content is stored on the server. When a request for a web page is received, the content is served from this storage (usually, file system). This method requires setting up the required infrastructure on the server.

### When to choose Push Publishing

Go for push publishing in the following cases:

-   The website is **not likely** to have a lot of **content pages (ideally, under 500)**
-   The website is likely to have **content in one or two languages**
-   The website may have **basic referencing (not complex or deep referencing)**
-   The project involves managing **only website content** (not for devices). However, you can use the push publishing model to work on other devices such as IoT, Android, and iOS

In other words, if the website is likely to be lightweight, go for push publishing.

**Examples:** Company marketing website, basic documentation site, etc.

There are two ways of push publishing:

-   Via WebSocket: contentstack-express framework \[see architecture figure below\]
-   Via webhook: No Node.js module provided by Contentstack; custom coding required

If you consider proceeding with push publishing, it is recommended that you proceed with the contentstack-express framework. Let’s look at a typical infrastructure architecture built using the contentstack-express framework:

![image2.jpg](https://images.contentstack.io/v3/assets/bltf2fb14dd3176c6f6/bltdcb5d79676b96509/5d53daf2374502106094c207/image2.jpg)

contentstack-express v1 is a Node.js web application framework (built using [Express.js](https://expressjs.com/)) for building websites with push-publishing. contentstack-express v1 provides two major features:

**Sync content with file system:** contentstack-express v2 helps in syncing the published content of your Contentstack-powered websites with your file system (e.g., Amazon Elastic File System). Every time you publish a piece of content to any publishing environment, a copy of that content is saved on your file system. Subsequent page requests by users are then served through this file system.

**Provide presentation tools:** The framework provides presentation tools such as templates, themes, etc. It uses Nunjucks templating engine, by default.

Contentstack Express V2 also includes functionality for:

-   Syncing data with any database (MongoDB, MySQL) or file system
-   Separate syncing from delivery

### Points to consider

Things to remember while setting up push publishing infrastructure:

-   Fetching and delivering content is a little slower than pull publishing. Hence, it’s highly recommended to **set up CDN.**
-   API hits are lower since the content is delivered through file systems.
-   If the project involves querying on references, push-publishing is not recommended. Go for pull publishing instead.

## Pull Publishing

Your content is stored in Contentstack’s repository. When a request for the web page is received, content is fetched from this repository and delivered through Content Delivery APIs. This method doesn’t require any special setup on the server. It is recommended to use DataSync utility for implementing the Pull publishing model.

### When to consider Pull Publishing

Go for pull publishing in cases where:

-   The website is likely to have a **lot of content pages (over 500)**
-   The website is likely to have **content in many languages**
-   The website may have **many levels of referencing**
-   The Pull Publishing is fairly quick. It is still suggested to use CDN as it eventually reduces the number of API calls made to the Contentstack server.
-   The project involves managing content for the **website as well as devices (mobile apps)**

In other words, if the website is content-heavy, go for pull publishing.

**Examples**: E-commerce sites, huge documentation site, or any website with lots of pages.

The architecture image is given below:

**Additional Resource:** To know more about Architecture Diagrams, read through our extensive [documentation](/docs/headless-cms/simple-website-with-contentstack-launch) on it.
