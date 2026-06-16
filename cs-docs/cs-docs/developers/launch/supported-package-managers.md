---
title: "[Contentstack Launch] - Supported Package Managers"
description: Supported package managers on Contentstack Launch and how Launch installs dependencies based on packageManager configuration.
url: https://www.contentstack.com/docs/developers/launch/supported-package-managers
product: Contentstack Launch
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Contentstack Launch] - Supported Package Managers

This page lists the package managers supported by Contentstack Launch, explains how Launch determines which one to use via `package.json`, and documents the install commands and Yarn-specific behavior. It is intended for developers configuring build and dependency installation for Launch deployments.

## Supported Package Managers

The following are the supported package managers on Launch:
- [npm](https://www.npmjs.com/package/npm) (default)
- [yarn](https://yarnpkg.com/)

Contentstack Launch leverages [corepack](https://nodejs.org/api/corepack.html#corepack) to enable the specific package manager and version defined in the `packageManager` field of the `package.json` file.

**Example:**

`package.json`

```
{
  "packageManager": "yarn@4.1.0"
}
```

**Note**: If the `packageManager` field is not specified in `package.json`, the default package manager (`npm`) will be used.

The table below shows the command that Contentstack Launch will execute to install dependencies, based on the identified package manager:

| Package Manager | Install Command |
|---|---|
| npm | `npm install` |
| yarn | `yarn install` |

## Yarn

Yarn Berry offers three install modes:
- [node-modules](https://yarnpkg.com/features/linkers#nodelinker-node-modules)
- [Plug'n'Play (PnP)](https://yarnpkg.com/features/linkers#nodelinker-pnp)
- [pnpm](https://yarnpkg.com/features/linkers#nodelinker-pnpm)

Currently, Launch supports only the `node-modules` installation mode for Yarn. When deploying a project with Yarn Berry, Launch will automatically default to the `node-modules` mode.

Additional configuration options available through the use of `.yarnrc` files are as follows:
- [Yarn classic (.yarnrc)](https://classic.yarnpkg.com/lang/en/docs/yarnrc/)
- [Yarn berry (.yarnrc.yml)](https://yarnpkg.com/configuration/yarnrc)

## Limitation

Currently, Launch does not support the [pnpm](https://pnpm.io/) package manager. For projects using `pnpm`, Launch will automatically default to `npm`.

## Common questions

### How does Launch decide whether to use npm or yarn?
Launch leverages corepack to enable the specific package manager and version defined in the `packageManager` field of the `package.json` file.

### What happens if `packageManager` is not set in `package.json`?
If the `packageManager` field is not specified in `package.json`, the default package manager (`npm`) will be used.

### Does Launch support Yarn Berry Plug'n'Play (PnP) mode?
Currently, Launch supports only the `node-modules` installation mode for Yarn, and will automatically default to the `node-modules` mode.

### What happens if my project uses pnpm?
Currently, Launch does not support the pnpm package manager. For projects using `pnpm`, Launch will automatically default to `npm`.