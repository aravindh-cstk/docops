---
title: "[Developer Hub guides] - Introduction to Contentstack Applications"
description: Introduction to Contentstack Applications, including app categories, scope levels, visibility states, and guidance on choosing between Standard and Machine to Machine apps.
url: https://www.contentstack.com/docs/developer-hub/introduction-to-contentstack-applications
product: Contentstack
doc_type: developer-hub-guide
audience:
  - developers
  - solution-architects
  - administrators
version: current
last_updated: 2026-03-26
---

# [Developer Hub guides] - Introduction to Contentstack Applications

This page introduces Contentstack Applications, explaining what they are, how they are categorized (Standard vs Machine to Machine), how scope and visibility work, and how to choose the right app type for common real-world scenarios. It is intended for developers and teams planning to extend Contentstack or integrate it with other systems.

## Introduction to Contentstack Applications

Contentstack allows you to connect to and extend its functionality through applications. Applications are small programs that extend Contentstack's functionality, enabling you to customize your experience and business operations across the platform. Let's review some key concepts of an application.

Contentstack applications can be categorized into two groups based on their intended functionality:
- **Standard**
- **Machine to Machine**

The scope level of your application is defined by the **App Type**:
- **Stack App** - Stack scope apps are only available to users who have access to the specific stack where the app is installed.
- **Organization App **- Organization scope apps are available to all users within an organization.

Apps can also have three different Visibility States:
- **Private:** This is the default visibility for all newly created applications. These apps are private to the organization they are created in.
- **Public: **These apps are available in our public marketplace for any customer to install and configure. Only Contenstack can convert an application to Public. [Learn More](../marketplace-platform-guides/app-submission-and-approval-guide.md) here to see how you can get your app listed.
- **Public Unlisted:** These applications are not listed publicly in the Marketplace, but are available for installation if the installation URL is shared with you. This status is generally reserved for applications in a **beta **state.

Let's explore these concepts in more detail.

## Standard Applications

Standard Applications are the most versatile type of application. They offer a variety of features and capabilities, including:
- **UI Locations: **Allows you to create custom user interfaces across the platform. Learn more about all of the available UI locations [here](./about-ui-locations.md).
- **Webhooks:** Allows you to trigger actions in your application when certain events happen in Contentstack. This enables you to build logic into your application based on user interactions and events in the platform.
- **OAuth 2.0 Integrations: **Allows you to connect your application to third-party services using OAuth 2.0, making it easy to exchange data and authenticate users.
- **App Hosting: **Allows you to host your application's code directly in [Launch](./app-hosting.md#hosting-with-launch). This provides a convenient and quick way to stand up your application without having to bring your own hosting solution to the table.

## Machine to Machine Applications

Machine to Machine (M2M) Applications are designed specifically for server-to-server communication. They do not require a user interface and are primarily used for tasks like:
- **Automating content updates and other tasks**
- **Integrating with third-party systems that don't have a user interface**
- **Performing secure data transfers between systems**

M2M Applications in Contentstack are OAuth-only applications, meaning they use the OAuth 2.0 protocol for authentication and authorization. This makes them highly secure and reliable for machine-to-machine interactions.

**Here's a quick breakdown of the key differences between Standard and M2M apps:**

| Feature | Standard | Machine to Machine |
|---|---|---|
| App Type | Organization or Stack | Only Organization |
| Visibility | Can be Public, Private or Public Unlisted | Private Only |
| UI Locations | Supported | Not supported |
| Webhooks | Supported | Not supported |
| OAuth 2.0 Integrations | Supported | Supported (OAuth-only) |
| Launch Hosting | Supported | Not supported |

## So what app category should I use?

It can be a little confusing to figure out which app category is right for you. So, let's break it down with some real-world examples:

## Standard:

Think of the Standard app category as the "Swiss Army Knife" of Contentstack apps. They're versatile and can do a lot of different things. Here's when you'd want to use a Standard App:
- **Commerce Integration:** You're a busy marketer juggling thousands of product listings. A standard app can query and display products for selection into your entries from a third party system, saving you a ton of time by working out of one system
- **Search Indexing: **You want to provide your customers with search results from multiple sources. Through an app like Algolia, you can index your entries so can retrieve the exact product they are looking for
- **Custom Content Editor:** You want to create a content editor that perfectly matches your unique workflow. Standard apps let you design a content editor that feels just right for your team, streamlining your content creation process.

## Machine to Machine Apps:

M2M apps are the behind-the-scenes heroes of Contentstack. They're designed to work seamlessly with other systems without human interaction. Think of them as the "silent powerhouses" of your Contentstack setup:
- **Data Sync: **You need to keep your Contentstack data in sync with your CRM or e-commerce platform. An M2M app can automate this process, making sure your data is always up-to-date across all your systems. No manual data entry needed, just smooth, consistent data flow!
- **Custom Jobs: **You need to run backend services that perform automated tasks, like nightly data syncs or content backups, without user interaction. M2M apps can handle these tasks efficiently and securely using client credentials for authentication.

The best app category for you depends on your specific needs. If you're looking for something with more flexibility and a user interface, Standard Apps are your best bet. If you need a powerful solution for server-to-server interactions, go with a Machine to Machine app.

## Common questions

### What is the difference between a Stack App and an Organization App?
A **Stack App** is only available to users who have access to the specific stack where the app is installed, while an **Organization App ** is available to all users within an organization.

### Can a Machine to Machine application be installed at the stack scope?
No. Machine to Machine apps are listed as **Only Organization** under **App Type**.

### Can Standard applications be made public in the marketplace?
Yes. Standard apps can have Visibility states including **Public**, but only Contenstack can convert an application to Public.

### Do Machine to Machine apps support UI Locations or Launch Hosting?
No. Machine to Machine apps do **Not supported** for **UI Locations** and **Launch Hosting**.