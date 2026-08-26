---
title: "App Development Best Practices"
description: "Best Practices for App Developers"
url: /developer-hub/app-development-best-practices
uid: blt6dbd149c0ea32309
---

# App Development Best Practices

## App Development Best Practices

Contentstack provides an App Framework that makes it easy to build mobile apps for [Contentstack Marketplace](/docs/marketplace/about-marketplace). This document explores some best practices to help app developers quickly build high-performing apps.

Developers can follow these guidelines and simplify the app developing, managing, reviewing and the approval process for their apps.

Here are the some recommended methods:

1.  [Use Venus Component Library](#use-venus-component-library)
2.  [Define Project Structure](#define-project-structure)
3.  [Follow Naming Conventions](#follow-naming-conventions)
4.  [Thorough Code Testing](#thorough-code-testing)
5.  [Logging and Monitoring](#logging-and-monitoring)
6.  [App Security](#app-security)
7.  [Incidence Response](#incidence-response)
8.  [App Documentation](#app-documentation)

## Use Venus Component Library

We highly recommend you to use the [Venus React Component Library](/docs/headless-cms/venus-component-library) to build Contentstack-based applications. The Venus framework offers a comprehensive collection of Contentstack's UI components, helping you keep consistency  
throughout the app development process.

## Define Project Structure

-   While building a project, defining a scalable project structure is essential. The project architecture and folder structure depends on the complexity of your project. Here are some factors to consider while creating a good project structure.
-   The folder layout should be designed according to the requirements of the project. You can use the component-centric file structure, the file grouping method or any other structure method of your choice.
-   Developers can add CSS to style and theme large projects easily.
-   Transform a component into a higher order by reusing the component logic in the render method.

## Follow Naming Conventions

Throughout the project, follow standard naming conventions. Developers can use the Pascal case to name components and Camel case to name the functions/ methods inside the components.

## Thorough Code Testing

-   Avoid potential errors in your code by automating the testing process. You can also use the linter process to analyze the code and fix language code style related errors automatically.
-   To ensure your application provides a quality experience to the end users, you can add end to end test cases to try and verify the flow of the app.
-   Automated testing allows you to run thousands of automated test cases simultaneously which will help you achieve an extensive test coverage. In addition, you can conduct automated testing on a regular basis to ensure high quality and performance of apps.

## Logging and Monitoring

-   Writing logs can help you to analyze the app, monitor the performance, find bugs and troubleshoot errors in your app.
-   Follow some best logging practices like using the suitable logging library, including structured logging, writing detailed log event messages, and avoid logging sensitive information of your app.
-   Furthermore, logs can also be used to audit the performance of your system and generate useful behavioral statistics of your app.
-   Frequent app monitoring is essential to provide uninterrupted service to the users. This can be achieved with periodic health checks and monitoring downtime.
-   Monitor the speed and wait-time of your app’s API Latency, to ensure low wait time on the loading speed.

## App Security

-   The app should be scanned for potential vulnerability at regular intervals on production infrastructure. The vulnerability scan results should be triaged and a timeline to remediate the vulnerability should be provided.
-   Apps should have the capability to encrypt data exchanged over the internet using HTTPS. A valid TLS certificate, or SSH, should also be present.
-   Store client ID and client secret keys securely. We suggest you store them as environmental variables.
-   Apps should be able to delete all user data within 30 days when such request is received from the user.
-   Tokens, client IDs, and client secrets should be encrypted by the app.
-   It is mandatory for OAuth Apps to authenticate using an OAuth token.

## Incidence Response

-   Before listing the app on Contentstack Marketplace, provide a clear incident response plan to the users. It is best if the incident response team works within the organization to work on the issues.
-   Inform the Contentstack Marketplace team within 24 hours of any confirmed incident. Provide users with instructions on what to do when an incident occurs.

## App Documentation

-   The app should have supported documents to guide the users through the app installation, set up and usage process.
-   Support your documentation with Screenshots and Videos wherever possible to help users understand the app features and process in detail.
-   Lastly, you must try out, verify and review the content before publishing it on your website.
