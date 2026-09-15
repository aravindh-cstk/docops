---
title: "Build Image"
description: "Learn about Build Image used in Contentstack Launch."
url: /launch/build-image
uid: blt02da36083349b482
---

# Build Image

## Build Image

Build image is a snapshot of an operating system that has various packages pre installed. When a deployment is triggered on Launch, the build image is used to provision a new container which would then perform the task of building your website.

Launch uses the linux/amd64 node:<version>-bullseye-slim base image during deployments, where <version> corresponds to the supported Node.js versions on Launch. This provides a stable and lightweight environment for building your websites. You can also pull and run the corresponding image locally to debug or verify build compatibility with the Launch environment. For the list of currently supported Node.js versions, please refer to the [Supported Node.js Versions on Launch](/docs/launch/supported-nodejs-versions/) documentation.

## Pre-installed Packages

Launch provides a pre-configured build environment with essential tools and packages like [build-essential](https://packages.ubuntu.com/focal/build-essential) and [Python3](https://www.python.org).
