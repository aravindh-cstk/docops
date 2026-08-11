---
title: "Key Concepts"
description: "Understand the core building blocks of the Lytics App in Contentstack: projects, connections, collaborators, roles, JStag, and the dashboard and how they work together. "
url: /lytics/key-concepts
---

# Key Concepts

## Key Concepts

Understand the core building blocks of the Lytics CDP and how they relate before you begin saves time during setup.

This page defines each concept, explains what it does, and shows where it fits in the broader picture.

## Project

A project is the top-level container for one customer data initiative inside the Lytics CDP.

Each project has:

-   **Name:** a unique, human-readable identifier within your organization.
-   **Description** (optional): useful when managing multiple projects.
-   **Domain:** the primary web property where JStag runs.
-   **Owner:** the user who created it, who always retains full administrative access.

A project also carries a Lytics account ID: the internal identifier that ties it to its corresponding account on the Lytics platform. What the Lytics platform calls an "account" is the same thing the Lytics CDP calls a "project." The two terms refer to the same entity.

**Note:**

-   One Contentstack organization can contain multiple Lytics projects.
-   Each project is independent. Its connections, collaborators, and data do not carry over to other projects.

The Lytics CDP displays a project overview screen showing live event, profile, and audience counts once you install JStag.

## JStag

JStag is the Lytics JavaScript SDK. It is a small snippet of code that you install in the <head> of every page on your customer-facing website. Once installed, it runs on each page load and sends visitor events, page views, interactions, and behavioral signals into your project's default data stream on the Lytics platform.

The Lytics CDP generates a unique JStag snippet for each project and provides an in-app verification check that confirms data has started arriving after installation.

**Note:** If your website runs on Contentstack Launch, do not install JStag manually. Instead, connect your Launch project via **Settings > Connections**, which handles event tracking from the Launch environment automatically.

JStag is installed from the Install Lytics modal on the project dashboard. Refer to the [Install the Lytics JStag SDK](/docs/lytics/install-lytics-jstag-sdk) documentation for the full setup flow.

## Connection

A connection is a link between a Lytics project and another Contentstack product.

Three connection types are supported:

| **Connection type** | **What it does** |
| --- | --- |
| CMS Stack | Links a Contentstack CMS stack that publishes content for the audiences built in this project. |
| Launch Project | Links a Contentstack Launch project where the Lytics JStag SDK runs and collects visitor behavior. |
| Personalize Project | Links a Contentstack Personalize project so Lytics audiences become available for variant targeting and experiments. |

A single Lytics project can connect to multiple stacks, Launch projects, and Personalize projects at the same time. Connections are managed from the **Settings > General** screen inside the project.

**Note:** Disconnecting a product may affect how data flows between your products. Review the impact before removing a connection.

## Collaborator

A collaborator is any user who has been explicitly invited to a Lytics project. Being a member of the parent Contentstack organization does not automatically grant access to a Lytics project, a user must be invited to it.

Collaborators are managed from **Settings > Users** inside the project. Each collaborator is assigned a role when they are invited.

## Role

A role is a named set of permissions that controls what a collaborator can do inside a Lytics project. Roles are mapped automatically from Contentstack organization roles and cannot be assigned or changed inside the Lytics CDP interface.
