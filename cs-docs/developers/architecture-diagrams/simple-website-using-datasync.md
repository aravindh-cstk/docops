---
title: "[Architecture Diagrams] - Simple Website Using DataSync"
description: Architecture diagram and explanation for setting up a simple website using DataSync.
url: https://www.contentstack.com/docs/headless-cms/simple-website-using-datasync
product: Contentstack
doc_type: architecture-diagram
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Architecture Diagrams] - Simple Website Using DataSync

This page provides an architecture diagram and detailed component-level explanation for building a simple website using DataSync, intended for developers and architects who need to understand how requests flow through CDN, IaaS, SaaS integrations, and DataSync-backed local storage.

## Simple Website Using DataSync

A simple website represents a small or medium-sized app/website that uses a few SaaS integrations to support basic functionalities such as search, analytics, or marketing forms. One of the common examples of a simple website is the marketing website of any organization.

(Download Diagram: [PDF](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt9188e4f25a316b83/6113bb86461c9f13b0a14b48/Simple_Wesbite_Using_DataSync.pdf?disposition=download), [SVG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb6c824e1d4a19bd0/6113bb85461c9f13b0a14b44/Simple_Wesbite_Using_DataSync-02.svg?disposition=download), and [JPEG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf21d615f77057d25/6113c92060bb0f13c2eabdf1/Simple_Wesbite_Using_DataSync-02.jpg?disposition=download))

This diagram explains the architecture that you would need to set up a simple site using [DataSync](../develop-apps-with-datasync/about-contentstack-datasync.md). The DataSync utility allows you to store your Contentstack data in your local database, thus reducing API calls to the Contentstack server.

Let’s dig a little deeper into the architecture and understand the different components of the diagram.

## Diagram Overview

When a user requests a page through any browser, the CDN cache provides the requested page, if available in the cache. If that page is unavailable in the cache, the request gets forwarded to your application via load balancers.

The DataSync utility listens to the content’s publish/create/update events via Contentstack webhooks and stores the updated content to your local database. Your app interacts with the DataSync utility to fetch the requested page from the local database and sends it to the user. Contentstack interacts with other SaaS apps to provide the best possible experience to the client or the content manager.

## Detailed Explanation

Let’s look at the components of this architecture and how you can use them to set up your app or a website. To understand this diagram, let’s break this down into the following components:

IaaS - Infrastructure as a Service

SaaS - Software as a Service

CDN - Content Delivery Network

## SaaS (Software as a Service) Layer

Setting up a headless architecture lets you use a microservices approach to add and replace applications with ease. Your app communicates and works with several SaaS applications via APIs. Let’s look at examples of specific popular SaaS applications that simple websites use and understand how these applications interact with other architecture components.

Contentstack lets you create and manage the content of your website. Also, Contentstack communicates with other SaaS applications and your website as per your requirements. We’ll learn of this communication as follows:

**

Algolia** is one of the SaaS that helps you power search operations on your website. It interacts with the website, indexes the data, and provides the requested content to the user every time the user executes a search operation on the website. Its primary functions are as explained below:
- **Search initiation**: Happens when the user from the website initiates the search request.
- **Data indexing**: To index your website’s data, you can set up a webhook in Contentstack to trigger an action whenever you update/publish content or update your website’s code. Here, the POST call in your webhook should have the logic to index the data in Algolia.

**Marketo Forms** is a SaaS provider that helps you create marketing forms (for product campaigns, etc.) for your website. Contentstack allows you to embed Marketo Forms in entries via a [custom field extension](../create-custom-fields/about-custom-fields.md). So whenever you create an entry in Contentstack, you’ll have the provision to select a form from several available form options and add it to your entry. Later, when the page loads on your frontend page, the forms load through the embedded code.

**

Google Analytics** lets you analyze the performance of your website. Contentstack enables you to view Google Analytics data directly in your stack via a [custom widget](../create-sidebar-extensions.md) or [dashboard widget](../create-dashboard-extensions.md). You’ll get detailed analytics through a custom widget - user behavior, page load time, page views, etc. - of your specific entry within the entry page. You can get your website’s overall analytics on your Contentstack’s stack dashboard through the dashboard widget.

**

GitHub** helps you with smooth code deployment by setting up developer workflow. This workflow ensures the code changes reflect correctly in the GitHub repository via **CI/CD** (Continuous Integration/Continuous Deployment) pipeline. Thus, this guarantees smooth code deployments in your GitHub repository whenever there are code changes in your Contentstack-powered website’s code.

## IaaS (Infrastructure as a Service) Layer

Your website’s infrastructure stays within this layer. This layer holds your website’s code, DataSync utility, frontend server, load balancers, firewalls, and other essential components. The cloud infrastructure provider (such as AWS, Azure, or Google Cloud) offers some of the services you may need to set up the rest of the parts.

Let’s have an overview of these components:
- You need to set up an auto-scaling group that auto-scales on demand. This group usually contains your frontend app cluster, load balancer, and firewall.
- The load balancers distribute your website’s traffic to the frontend servers.
- The network filtering through firewalls allows only legitimate requests to enter your infrastructure.
- You can set up multiple instances of your frontend app (aka frontend app cluster), with each one containing the frontend server and your website code.
- Frontend servers provide all functionalities and services to ensure all connected microservices and Contentstack have the expected infrastructure to operate smoothly.
- When the client requests any data, the CDN first serves the data if available. If CDN doesn’t have the requested data, it then passes on the request to the frontend servers.
- The frontend servers interact with the DataSync utility (placed within the website’s code), fetch the requested data, and then pass this data to CDN.

**DataSync**
- Whenever a content manager publishes content from Contentstack, the DataSync listener listens to this action via webhooks.
- This listener then passes this content to the DataSync Manager, which stores this content into your local database - Storage.
- When a user requests data, the DataSync component residing within the website’s code fetches the data from your local database.

## CDN (Content Delivery Network) Layer

- A CDN is responsible for serving user requests through caches. You can use a CDN service, such as Fastly, to deliver content quickly to your clients.
- All user requests first hit the CDN. If it has the cache of the requested content, it delivers it to the client. Else, it asks the app to provide updated content.
- It also reduces the server’s load as the content gets delivered through cache instead of fetching content from your app every time.
- You can set up load balancers to filter out unwanted requests and manage network traffic and reverse proxy (for masking) between the CDN and the headless infrastructure.

## Next Steps

### More Architecture Diagrams
- [Static website architecture](./static-website-detailed-architecture.md)
- [Simple Website](./simple-website-detailed-architecture.md)
- [Dynamic website architecture](./dynamic-website-detailed-architecture.md)
- [Partially headless setup architecture](./partially-headless-setup-detailed-architecture.md)
- [Layered architecture for Contentstack-powered websites](./contentstack-powered-website-layered-architecture.md)
- [Cloud infrastructure diagram](./cloud-infrastructure-architecture-for-contentstack-powered-websites.md)
- [MACH System Architecture](./mach-architecture-diagram.md)
- [Mobile and Smart Devices System Architecture](./mobile-and-smart-devices-system-architecture.md)

### Resources to Get Started
- [Quickstart in 5 minutes](../quickstart-in-5-mins.md)
- [Sample applications](/docs/developers/sample-apps)
- [How to start using Contentstack](../contentstack-basics/how-to-start-using-contentstack.md)[/docs/developers/develop-apps-with-datasync/get-started-with-contentstack-datasync](../develop-apps-with-datasync/get-started-with-contentstack-datasync.md)
- [Contentstack DataSync](../develop-apps-with-datasync/get-started-with-contentstack-datasync.md)

## Common questions

### What does DataSync do in this architecture?
DataSync utility allows you to store your Contentstack data in your local database, thus reducing API calls to the Contentstack server.

### What happens when the CDN does not have the requested page in cache?
If that page is unavailable in the cache, the request gets forwarded to your application via load balancers.

### How does DataSync get updated content from Contentstack?
The DataSync utility listens to the content’s publish/create/update events via Contentstack webhooks and stores the updated content to your local database.

### Which SaaS examples are mentioned for simple websites?
Algolia, Marketo Forms, Google Analytics, and GitHub are mentioned as examples of specific popular SaaS applications that simple websites use.