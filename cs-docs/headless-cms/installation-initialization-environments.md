---
title: "[Headless CMS] - Installation, Initialization & Environments"
description: Troubleshooting guidance for installation, initialization, and environment-related issues for Headless CMS SDKs/CLI, including SSR frameworks, Node.js compatibility, env loading, browser runtime errors, and dependency conflicts.
url: https://www.contentstack.com/docs/headless-cms/installation-initialization-environments
product: Contentstack Headless CMS
doc_type: troubleshooting-guide
audience:
  - developers
version: v1
last_updated: 2026-05-12
---

# [Headless CMS] - Installation, Initialization & Environments

This page covers common installation, initialization, and environment-related issues encountered when using Headless CMS SDKs and tooling. It is intended for developers integrating SDKs/CLI into Node.js, SSR frameworks, and browser environments, and should be used when initialization fails, runtime errors occur, or dependency/environment configuration causes unexpected behavior.

## Installation, Initialization & Environments

## 1. Type Error During SDK Initialization or App Configuration
Initialization fails with type/runtime errors when config values have the wrong shape (for example, passing a string where an object is expected).

**Root Cause******Initialization parameters do not match the expected data types (e.g., passing stringified JSON instead of a raw object), or Marketplace app configuration schemas are misaligned with defined parameter shapes.

**Resolution**
- Validate the SDK initialization object against the SDK README/types.
- Ensure nested options (proxy/retry/cache/plugin options) are objects, not stringified JSON.
- For Marketplace apps, verify config schema matches app parameter definitions.

SDK initializes without exception and the first API call returns a 2xx JSON response. Escalate with a redacted config object and full stack trace if error persists.

## 2. Node.js Version Incompatibility with CLI and SDK
Runtime/module parse errors can occur when project Node runtime is incompatible with package expectations.

**Root Cause******The project's Node.js runtime version falls outside the supported range of the specific SDK or CLI package, causing syntax errors or module parsing failures during execution.

**Resolution**
- Check node -v.
- Use an Active LTS Node version unless the specific SDK/CLI package documents different requirements.
- Reinstall dependencies after runtime switch.
- Avoid blanket downgrade guidance. Align Node version per package constraints in your lockfile/CI.

Install/import completes and sample SDK calls run without syntax/module loader errors.

## 3. SDK Initialization Failures in SSR Frameworks (Next.js, Astro, Nuxt)
SSR builds/runtime can fail when browser-only assumptions leak into server execution paths.

**Root Cause**Browser-specific objects (like window or document) are referenced during server-side execution, or the SDK is initialized as a global singleton that cannot persist across stateless server requests.**Resolution**
- Initialize SDK with contentstack.stack(...) in server-safe modules.
- Keep browser-only logic behind typeof window !== 'undefined' checks.
- Pass explicit environment/region in config for deterministic server behavior.
- Avoid older constructor/global-singleton patterns in SSR code.

Server render completes and fetch returns 2xx without window is not defined or similar runtime errors. Escalate with framework version and minimal initialization snippet.

## 4. SDK Environment Variable Loading Failures in Node.js
The SDK fails to initialize or connect with "Undefined" values because it cannot successfully read the API Key or Token from local .env files.

**Root Cause******The SDK is imported or initialized before the application has finished loading .env files, or there is a naming mismatch between the system environment keys and the code.

**Resolution**
- Load env variables before any SDK initialization/import side effects.
- Match env key names exactly between .env and code.
- Restart runtime after changing .env.

Startup shows non-empty required env vars (redacted), and the first SDK call returns 2xx. Escalate with startup order snippet and SDK version if envs are present but init still fails.

## 5. Javascript SDK "Buffer is not defined" Error in Browser Environments
Browser runtime errors occur when Node-only globals/modules are pulled into client bundles.

**Root Cause**The application is attempting to use Node.js-specific modules (like Buffer) in a client-side browser environment without the necessary polyfills or the use of a browser-safe SDK build.

**Resolution**
- Upgrade to the latest supported SDK/browser-safe package build.
- Remove Node-only imports from client-side bundles.
- Add polyfills only when upgrade/refactor is not immediately possible.

Browser flow completes without Buffer being defined, and SDK calls return expected data. Escalate with bundler config and import graph if error persists.

## 6. SDK Installation Peer Dependency Version Conflicts
Installing the SDK results in a "Peer Dependency Conflict," preventing installation in projects using specific versions of React or Node.

**Root Cause**Version mismatches between the SDK’s requirements and the existing project dependencies (e.g., React or Node.js versions) prevent the package manager from resolving a stable dependency tree.

**Resolution**

Install failures often come from incorrect package names or incompatible dependency trees.
- Install correct SDK packages for the use case:@contentstack/delivery-sdk
- @contentstack/management
- Align Node and package manager versions with project/toolchain constraints.
- Resolve lockfile conflicts explicitly; use bypass flags only as a temporary debugging step.

```
npm i @contentstack/delivery-sdk
npm i @contentstack/management
```
Packages install successfully and import without unresolved dependency conflicts. Escalate with lockfile excerpt, package manager version, and full install error output.

## Common questions

### What should I check first if SDK initialization throws a type/runtime error?
Validate the SDK initialization object against the SDK README/types, and ensure nested options (proxy/retry/cache/plugin options) are objects, not stringified JSON.

### How do I know if my Node.js version is causing CLI/SDK runtime errors?
Check node -v and confirm your runtime is within the supported range for the specific SDK/CLI package; reinstall dependencies after switching runtimes.

### Why does SDK initialization fail in SSR frameworks like Next.js?
Browser-specific objects (like window or document) may be referenced during server-side execution, or the SDK may be initialized as a global singleton that cannot persist across stateless server requests.

### What should I do if I see “Buffer is not defined” in the browser?
Upgrade to the latest supported SDK/browser-safe package build, remove Node-only imports from client-side bundles, and add polyfills only when upgrade/refactor is not immediately possible.