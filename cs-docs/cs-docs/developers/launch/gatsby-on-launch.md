---
title: "[Contentstack Launch] - Gatsby on Launch"
description: Gatsby on Launch
url: https://www.contentstack.com/docs/launch/gatsby-on-launch
product: Contentstack Launch
doc_type: guide
audience:
  - developers
version: latest
last_updated: 2026-03-25
---

# [Contentstack Launch] - Gatsby on Launch

This page explains how Gatsby works on Contentstack Launch, including supported Gatsby features and the runtime specifications (timeouts, memory, environment, file system, and architecture). It is intended for developers deploying or running Gatsby applications on Launch and should be used when validating platform constraints and capabilities.

## Gatsby on Launch

[Gatsby](https://www.gatsbyjs.com/) is an open-source React-based framework that provides a hybrid static/server-side rendered model. Using Gatsby data fetching, you can render your content differently based on your application's use case and build APIs using Gatsby Functions.

### Supported Features

Launch supports the following Gatsby features out of the box:
- [Gatsby Functions](https://www.gatsbyjs.com/docs/reference/functions/getting-started/)
- [DSG](https://www.gatsbyjs.com/docs/how-to/rendering-options/using-deferred-static-generation/)
- [SSR](https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/)

## Launch Gatsby Application Specifications

### Execution Timeout

The Launch application enforces a maximum execution timeout, requiring it to respond to any incoming HTTP request within **30** seconds. If the application fails to respond within this duration, the request will time out, resulting in a response with an HTTP status error code **500**.

**Note: **For error code **500**, please refer to the timed-out errors in the **Server Logs** tab to understand and address the issue.

### Memory Size

The memory size for a Launch application is **1024 MB**.

### Runtime Environment

The Launch runtime environment leverages [**Node.js**](/docs/launch/supported-nodejs-versions) to power its execution environment.

### File System

The Launch Gatsby file system refers to the Launch application's ability to interact with the file system, including `read` and `write` operations. By default, Launch applications implement a read-only file system, with the exception of the designated `/tmp` directory, which facilitates `write` operations.

The `/tmp` directory is a temporary file system accessible to every Launch serverless runtime, offering up to **500 MB** of storage.

**Note: **The data stored in `/tmp` is non-persistent and is automatically deleted upon request completion.

### Architecture

Launch application supports the `x86_64` instruction set.

**Additional Resource:** Please refer to the [Quick Start Guide with Gatsby](/docs/launch/quick-start-gatsby) documentation for a step-by-step walkthrough to deploy a Gatsby site on Launch.

## Common questions

### Does Launch support Gatsby SSR and DSG?
Yes. Launch supports SSR and DSG out of the box, as listed under Supported Features.

### What happens if my Gatsby app takes longer than 30 seconds to respond?
The request will time out and result in a response with an HTTP status error code **500**.

### Can my Gatsby app write files at runtime on Launch?
By default, the file system is read-only except for the designated `/tmp` directory, which facilitates `write` operations.

### Is data stored in `/tmp` persistent across requests?
No. The data stored in `/tmp` is non-persistent and is automatically deleted upon request completion.