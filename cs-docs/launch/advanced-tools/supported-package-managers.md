---
title: "Supported Package Managers"
description: "Get to know the supported package managers in Contentstack Launch."
url: /launch/supported-package-managers
uid: blta44825c75e4f2f2c
---

# Supported Package Managers

## Supported Package Managers

The following are the supported package managers on Launch:

-   [npm](https://www.npmjs.com/package/npm) (default)
-   [yarn](https://yarnpkg.com/)

Contentstack Launch leverages [corepack](https://github.com/nodejs/corepack#readme) to enable the specific package manager and version defined in the [packageManager](https://nodejs.org/docs/latest-v18.x/api/packages.html#packagemanager) field of the package.json file.

**Example:**

package.json

```
{
  "packageManager": "yarn@4.1.0"
}
```

**Note:** If the packageManager field is not specified in package.json, the default package manager (npm) will be used.

The table below shows the command that Contentstack Launch will execute to install dependencies, based on the identified package manager:

| **Package Manager** | **Install Command** |
| --- | --- |
| npm | npm install |
| yarn | yarn install |

## Yarn

Yarn Berry offers three install modes:

-   [node-modules](https://yarnpkg.com/features/linkers#nodelinker-node-modules)
-   [Plug'n'Play (PnP)](https://yarnpkg.com/features/linkers#nodelinker-pnp)
-   [pnpm](https://yarnpkg.com/features/linkers#nodelinker-pnpm)

Currently, Launch supports only the node-modules installation mode for Yarn. When deploying a project with Yarn Berry, Launch will automatically default to the node-modules mode.

Additional configuration options available through the use of .yarnrc files are as follows:

-   [Yarn classic (.yarnrc)](https://classic.yarnpkg.com/lang/en/docs/yarnrc/)
-   [Yarn berry (.yarnrc.yml)](https://yarnpkg.com/configuration/yarnrc)

## Limitation

Currently, Launch does not support the [pnpm](https://pnpm.io/) package manager. For projects using pnpm, Launch will automatically default to npm.
