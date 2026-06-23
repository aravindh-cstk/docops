---
title: "[Contentstack Launch] - Build Image"
description: Build image details for Contentstack Launch deployments, including base image and pre-installed packages.
url: https://www.contentstack.com/docs/launch/build-image
product: Contentstack Launch
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Build Image

This page explains what a build image is in Contentstack Launch, which base image Launch uses during deployments, and what packages are pre-installed. It is intended for developers who need to understand or debug the build environment used when Launch provisions containers to build websites.

Build Image

Build image is a snapshot of an operating system that has various packages pre installed. When a deployment is triggered on Launch, the build image is used to provision a new container which would then perform the task of building your website.

Launch uses the `linux/amd64 node:<version>-bullseye-slim` base image during deployments, where `<version>` corresponds to the supported Node.js versions on Launch. This provides a stable and lightweight environment for building your websites. You can also pull and run the corresponding image locally to debug or verify build compatibility with the Launch environment. For the list of currently supported Node.js versions, please refer to the [Supported Node.js Versions on Launch](./supported-nodejs-versions.md) documentation.

## Pre-installed Packages

Launch provides a pre-configured build environment with essential tools and packages like [build-essential](https://packages.ubuntu.com/focal/build-essential) and [Python3](https://www.python.org).

## Common questions

**What base image does Launch use for deployments?**  
Launch uses the `linux/amd64 node:<version>-bullseye-slim` base image during deployments.

**Can I run the same build image locally?**  
Yes, you can pull and run the corresponding image locally to debug or verify build compatibility with the Launch environment.

**Where do I find the supported Node.js versions for Launch?**  
Refer to the [Supported Node.js Versions on Launch](./supported-nodejs-versions.md) documentation.

**What tools are pre-installed in the Launch build environment?**  
Launch provides essential tools and packages like [build-essential](https://packages.ubuntu.com/focal/build-essential) and [Python3](https://www.python.org).