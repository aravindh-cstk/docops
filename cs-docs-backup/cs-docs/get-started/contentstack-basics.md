---
title: "[Get Started with CS] - Contentstack Basics"
description: Contentstack Basics glossary and overview of how Contentstack works.
url: https://www.contentstack.com/docs/headless-cms/contentstack-basics
product: Contentstack
doc_type: get-started
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-26
---

# [Get Started with CS] - Contentstack Basics

This page introduces Contentstack Basics, including a glossary of key terms and a brief overview of how Contentstack works. It is intended for developers and content managers who are getting started with Contentstack and need foundational terminology and concepts before modeling, managing, and publishing content.

### Item 1

#### Article section

##### Heading

Contentstack Basics

##### Content

A headless Content Management System (CMS) is a back-end-only content management platform that acts primarily as a content repository. A headless CMS makes content accessible via an API for display on any device without a built-in, front-end or presentation layer.

## Glossary

Explore and understand the definitions of key Contentstack terms.

### Organizations

A parent entity that encapsulates stacks (and all the resources stored within), belonging to the same company or group.

### Stack

A container that holds all the content (entries) and assets related to a site where multiple users can collaborate.

### Branches

Create multiple copies of your stack content to serve as independent workspaces for developers and content managers to collaborate on content models and content.

### Content Types

Lays the foundation of your content by defining your digital property's page structure.

### Fields and Field Properties

The building blocks for structured content and configuring their properties allow you to create dynamic and flexible content types.

### Entries

Actual piece of content that you want to publish. You can create entries for one of the available content types.

### Assets

Store files such as images, videos, PDFs, audio files, and so on in your assets repository.

### Environments

Corresponds to one or more deployment servers or a content delivery destination (web page URLs) where the entries need to be published.

### Languages (Localization)

Add multiple languages to your stack and publish your entries in multiple languages.

### Tokens

Lets you authorize API calls. Management Token allows you to make authorized Content Management API requests and Delivery Token allows you to make authorized Content Delivery APIs.

### Publish Content

Once you create an entry/asset, you can publish it to one or all of the available publishing environments.

### Live Preview

Preview content in real time without publishing it to an environment or saving the changes made to the content.

### Releases

Group a set of entries and assets that needs to be deployed (published or unpublished) all at once to a particular environment.

### Workflows

Define your team's content creation and review process through different stages before it is published.

### Publish Rules

Define conditions for your content publishing by governing if entries can be published with or without someone’s approval or only when the content is at a particular stage.

### Roles

Assign permissions to users as roles to work within an organization and stack.

### APIs

Use REST and GraphQL APIs to retrieve and deliver data to a web page or app.

### Automate

An automation platform that helps you automate repetitive tasks between two or more apps without the need to code.

### Webhook

A user-defined HTTP callback that sends real-time information to any third-party app or service.

### Marketplace

A hub for ready-to-use apps and other resources that help you extend the capability of our core CMS and customize its functionalities.

### Experience Extensions

Extend Contentstack’s UI by creating customized experiences or integrating third-party applications.

### Developer Hub

Create apps (for Marketplace) that extend Contentstack's fundamental functionality and use them in your organizations or stacks.

### Trash

A container that temporarily stores deleted data (Content Type, Global Fields, Entries, and Assets).

### CLI

Supports content management scripts through which you can perform content management tasks.

### Regions

Refers to the location of the data centers where your organization's data resides.

## How Contentstack works?

Contentstack is an API-based, headless content management platform that allows developers and content managers to create and manage content simultaneously and independently, to create websites and applications quickly in a simple 3-step process:
- Content Modeling: Developers define the structure of your content in a platform-independent way.
- Content Management: Content Managers add content and manage content.
- Content Publishing: Once content is created, it can be published to your website, app, or another channel.

Learn more about [Contentstack Basics](../developers/contentstack-basics.md).

## Common questions

### What is a headless CMS in this context?
A headless Content Management System (CMS) is a back-end-only content management platform that acts primarily as a content repository.

### What are the three steps in how Contentstack works?
Contentstack works in a simple 3-step process: Content Modeling, Content Management, and Content Publishing.

### What is the difference between a stack and an organization?
Organizations are a parent entity that encapsulates stacks (and all the resources stored within), belonging to the same company or group, while a stack is a container that holds all the content (entries) and assets related to a site where multiple users can collaborate.

### What are tokens used for?
Tokens lets you authorize API calls, including Management Token for Content Management API requests and Delivery Token for Content Delivery APIs.