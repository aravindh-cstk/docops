---
title: "Server Configuration"
description: "Learn about Launch Server configuration specs, including execution timeout, memory size, runtime environment, file system, and architecture."
url: /launch/server-configuration
---

# Server Configuration

## Server Configuration

This page describes the runtime specifications for applications hosted on Contentstack Launch, including execution timeout, memory size, runtime environment, file system behavior, and processor architecture.

### Execution Timeout

The Launch application enforces a maximum execution timeout, requiring it to respond to any incoming HTTP request within **30** seconds. If the application fails to respond within this duration, the request will time out, resulting in a response with an HTTP status error code **500**.

**Note:** For error code **500**, please refer to the timed-out errors in the **Server Logs** tab to understand and address the issue.

### Memory Size

The memory size for a Launch application is **1024 MB**.

### Runtime Environment

The Launch runtime environment leverages [**Node.js**](/docs/launch/supported-nodejs-versions) to power its execution environment.

### File System

The Launch framework file system refers to the Launch application's ability to interact with the file system, including read and write operations. By default, Launch applications implement a read-only file system, with the exception of the designated /tmp directory, which facilitates write operations.

The /tmp directory is a temporary file system accessible to every Launch serverless runtime, offering up to **500 MB** of storage.

**Note:** The data stored in /tmp is non-persistent and is automatically deleted upon request completion.

### Architecture

Launch application supports the x86\_64 instruction set.
