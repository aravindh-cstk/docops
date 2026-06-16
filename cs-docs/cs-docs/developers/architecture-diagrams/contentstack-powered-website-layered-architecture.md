---
title: "[Architecture Diagrams] - Layered Diagram"
description: Layered Diagram
url: https://www.contentstack.com/docs/developers/architecture-diagrams/contentstack-powered-website-layered-architecture
product: Contentstack
doc_type: architecture-diagram
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Architecture Diagrams] - Layered Diagram

This page provides a layered architecture diagram and explanation for building a simple website using Contentstack as a headless CMS. It is intended for developers and architects who want to understand how to structure infrastructure, microservices, frontend, and CDN layers when designing a Contentstack-powered web application.

(**Download diagram**: [PDF](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt399122d3e11ffabc/5f3d07775f7d2953ae821a9a/Contentstack-powered_Website_-_Layered_Architecture.pdf?disposition=download), [SVG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt962e100fe7d4caa4/5f3d07b880360a1fd38bc7e3/Contentstack-powered_Website_-_Layered_Architecture.svg?disposition=download), [JPG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb686bd66a92b4622/5f3d05c15f7d2953ae821a8a/Contentstack-powered_Website_-_Layered_Architecture.jpeg?disposition=download), and [VSDX](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt2e1e5114aa619eba/5f3d0843abb6922b67514e67/Contentstack-powered_Website_-_Layered_Architecture.vsdx?disposition=download))

Contentstack is a headless CMS that lets you manage and deliver content of your web application using APIs. This flexibility allows you to adopt a best-of-breed approach and bundle up multiple microservices to create websites and applications.

To create a simple website using Contentstack as its CMS, your architecture can be broken down into the following four layers, with each layer serving a different purpose:
- [Deployment and Infrastructure Layer](#deployment-and-infrastructure-layer)
- [Microservices Layer](#microservices-layer)
- [Frontend or Presentation Layer](#frontend-layer)
- [Frontend CDN Layer](#frontend-cdn-layer)

## Deployment and Infrastructure Layer
While creating a secure headless CMS website, you would need cloud infrastructure and hosting services. This layer consists of those services. You can use AWS, Azure, or Google Cloud as your cloud infrastructure provider. And to host your application, you can use hosting providers such as Netlify, Azure Blob Storage, or Amazon S3.

## Microservices Layer
Going headless enables you to adopt a microservices architecture, where you can plug in and replace applications with ease. For managing content of your website, you can use Contentstack CMS as a microservice. And you can easily integrate other third-party apps:
- Content translation services (such as Phrase, Smartling) to help translate the content of your website in other languages.
- E-commerce and cart services (such as Shopify, commercetools).
- Search apps (such as Algolia, Elasticsearch, Lucidworks Search, etc) to provide easy search for your website users.
- Digital Assets Management services (Bynder, Cloudinary, etc.) to help manage digital assets of your app.

The advantage of using API-based apps as microservices is that it allows these apps to communicate with each other as well as with your app seamlessly. For example, Phrase can work with Contentstack to translate the content within the CMS and deliver it to your app.

## Frontend Layer
Because Contentstack is a headless CMS, meaning no presentation or frontend layer attached to it, you can connect any frontend service to build your own custom frontend on any platform of your choice (such as Next.js, Nuxt.js, Gatsby, Metalsmith, Frontastic).

The presentation layer fetches content from Contentstack using Content Delivery APIs and renders it the way you want.

## Frontend CDN Layer
To help render content to your client quickly and without any lag, you can choose to connect a Content Delivery Network (such as Fastly, Cloudfront) of your choice to your frontend layer.

CDN services store caches of content in data centers around the world, and all subsequent page requests are served from the nearest cache data center, ensuring blazing fast content delivery.

You can define your custom cache purge policy based on how often you want to clear out the cache and make way for the new (fresh or updated) content.

## Next Steps

### More Architecture Diagrams
- [Simple website architecture](/docs/developers/architecture-diagrams/simple-website-detailed-architecture)
- [Static website architecture](/docs/developers/architecture-diagrams/static-website-detailed-architecture)
- [Dynamic website architecture](/docs/developers/architecture-diagrams/dynamic-website-detailed-architecture)
- [Partially headless setup architecture](/docs/developers/architecture-diagrams/partially-headless-setup-detailed-architecture)
- [Cloud infrastructure diagram](/docs/developers/architecture-diagrams/cloud-infrastructure-architecture-for-contentstack-powered-websites)
- [MACH System Architecture](/docs/developers/architecture-diagrams/mach-architecture-diagram)
- [Simple Website Using DataSync](/docs/developers/architecture-diagrams/simple-website-using-datasync)
- [Mobile and Smart Devices System Architecture](/docs/developers/architecture-diagrams/mobile-and-smart-devices-system-architecture)

### Resources to Get Started
- [Quickstart in 5 minutes](/docs/developers/quickstart-in-5-mins)
- [Sample applications](/docs/developers/sample-apps)
- [How to start using Contentstack](/docs/developers/contentstack-basics/how-to-start-using-contentstack)

## Common questions

### What are the four layers in this architecture?
Deployment and Infrastructure Layer, Microservices Layer, Frontend Layer, and Frontend CDN Layer.

### Where does Contentstack fit in this layered architecture?
For managing content of your website, you can use Contentstack CMS as a microservice.

### Why use a CDN in front of the frontend layer?
CDN services store caches of content in data centers around the world, and all subsequent page requests are served from the nearest cache data center, ensuring blazing fast content delivery.

### What kinds of third-party services can be added in the microservices layer?
Content translation services, E-commerce and cart services, Search apps, and Digital Assets Management services.