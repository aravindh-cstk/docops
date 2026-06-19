---
title: "[Contentstack Launch] - Server Configuration"
description: Server configuration details for Contentstack Launch applications, including execution timeout, memory size, runtime environment, file system, and architecture.
url: https://www.contentstack.com/docs/launch/server-configuration
product: Contentstack Launch
doc_type: reference
audience:
  - developers
version: current
last_updated: 2026-04-29
---

# [Contentstack Launch] - Server Configuration

This page describes the server configuration constraints and runtime characteristics for Contentstack Launch applications. It is intended for developers deploying or troubleshooting Launch apps and should be used when validating runtime limits (timeouts, memory, filesystem behavior) and supported architecture.

## Server Configuration

### Execution Timeout
The Launch application enforces a maximum execution timeout, requiring it to respond to any incoming HTTP request within **30** seconds. If the application fails to respond within this duration, the request will time out, resulting in a response with an HTTP status error code **500**.

**Note: **For error code **500**, please refer to the timed-out errors in the **Server Logs** tab to understand and address the issue.

### Memory Size
The memory size for a Launch application is **1024 MB**.

### Runtime Environment
The Launch runtime environment leverages [**Node.js**](/docs/developers/launch/supported-nodejs-versions) to power its execution environment.

### File System
The Launch framework file system refers to the Launch application's ability to interact with the file system, including `read` and `write` operations. By default, Launch applications implement a read-only file system, with the exception of the designated `/tmp` directory, which facilitates `write` operations.

The `/tmp` directory is a temporary file system accessible to every Launch serverless runtime, offering up to **500 MB** of storage.

**Note: **The data stored in `/tmp` is non-persistent and is automatically deleted upon request completion.

### Architecture
Launch application supports the `x86_64` instruction set.

## Common questions

### What happens if my Launch app takes longer than 30 seconds to respond?
The request will time out and result in an HTTP status error code **500**.

### Where can I find details about timeout-related 500 errors?
Refer to the timed-out errors in the **Server Logs** tab.

### Can my Launch app write files to the filesystem?
By default, Launch applications implement a read-only file system, with the exception of the designated `/tmp` directory, which facilitates `write` operations.

### Is data written to `/tmp` persistent across requests?
No. The data stored in `/tmp` is non-persistent and is automatically deleted upon request completion.