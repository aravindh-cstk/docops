---
title: "[Developer Hub guides] - Contentstack App Lifecycle: A Developer's Guide"
description: Documentation describing the lifecycle of Contentstack Standard apps and Machine-to-Machine apps, including creation, development, hosting, installation, testing, listing, updates, and key considerations.
url: https://www.contentstack.com/docs/developer-hub/contentstack-app-lifecycle-a-developers-guide
product: Contentstack
doc_type: developer-hub-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Developer Hub guides] - Contentstack App Lifecycle: A Developer's Guide

This page explains the lifecycle stages of Contentstack apps for developers building either Standard apps or Machine-to-Machine apps. Read this when planning, building, hosting, testing, listing, and updating a Contentstack app, and when considering security, documentation, and support expectations.

## Contentstack App Lifecycle: A Developer's Guide

Contentstack applications offer powerful ways to extend the platform's functionality and customize your content management experience. This documentation will guide you through the lifecycle of your app, depending on whether you are building a Standard app or a Machine-to-Machine app.

## Standard App Lifecycle

- **Creation and Setup (Developer Hub):** **App Definition:** Define your app's name, description, and scope.
- **Development:** Using Contentstack's APIs and SDKs, you will build the core functionality of your app, design its user interface using the Venus design components, and integrate it with any necessary systems.
- **App Hosting (Developer Hub):** **Hosting Options:** You can choose any hosting solution, but we recommend using Contentstack Launch for seamless integration with the Contentstack ecosystem.You can also host your app locally during initial development or use your own hosting solution.
- **Installation and Testing (Developer Hub):** **Installation:** Install your app within your organization from Developer Hub.This requires Admin access to the Organization or Stack, depending on the app type.
- **Testing:** Thoroughly test your app in a test stack to ensure it works as intended.**Note:** If you don’t plan to list your application publicly, then you can ignore the next step and use your app privately in your organization.
- **Public Listing and Release (Optional):** **Public Listing Submission:** If you want to release your app publicly, you will need to submit it to Contentstack for review and approval. Contentstack's team will assess your app to ensure it meets their quality and functionality standards.You can find details on the submission process here: [Submit your app for review](../marketplace-platform-guides/app-submission-and-approval-guide.md)
- **Marketplace Discovery:** Once your app is approved and listed in the Marketplace, it becomes discoverable to all Contentstack users. Users can browse and find your app based on its category, features, or other criteria.
- **App Updates and Changes (Developer Hub):** **Versioning and Updates:** As your app evolves and as you make changes to your app, new app Versions will be generated.**Private apps** will have these versions immediately available to update your app.
- **Public apps** will require you to submit your app for review for any changes you would like to make public.

## Machine to Machine App Lifecycle

- **Creation and Setup (Developer Hub):** **App Definition:** Define your app's purpose and scope. You will be creating a Machine to Machine app that does not have a user interface.
- **Development:** Using Contentstack's APIs and SDKs, you will build the core functionality of your app and integrate it with any necessary systems.
- **App Configuration:** Set up your app's permissions and OAuth 2.0 integrations to define its access and behavior.
- **Authorization**:**Authorization:** Contentstack admins can authorize the app to access their data or resources. This process typically involves authentication using OAuth 2.0.

## Important Considerations for All Apps

- **Security:** Contentstack provides robust security measures, but developers should implement secure coding practices and handle sensitive data responsibly.
- **Documentation:** Clear and concise documentation is crucial for both app developers and end users.
- **Support:** Providing ongoing support for your app is crucial to ensure user satisfaction and maintain a positive experience.

## Common questions

### What’s the difference between a Standard app and a Machine-to-Machine app?
A Standard app includes a user interface, while a Machine to Machine app does not have a user interface and focuses on system-to-system functionality.

### Do I need to submit my app for review?
Only if you want to release your app publicly; private apps can be used within your organization without public listing.

### Can I host my app outside Contentstack?
Yes. You can choose any hosting solution, and you can also host your app locally during initial development or use your own hosting solution.

### How do updates work for private vs public apps?
Private apps will have new app Versions immediately available to update your app, while public apps require submitting changes for review to make them public.