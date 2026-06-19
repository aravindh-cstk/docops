---
title: "[Contentstack Launch] - Supported Node.js Versions"
description: Supported Node.js versions on Contentstack Launch and how to set the Node.js version in package.json.
url: https://www.contentstack.com/docs/launch/supported-nodejs-versions
product: Contentstack Launch
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2025-08-01
---

# [Contentstack Launch] - Supported Node.js Versions

This page lists the supported Node.js versions available on Contentstack Launch, explains how to set the Node.js version via `package.json`, and provides troubleshooting guidance for redeployments impacted by discontinued Node.js versions. It is intended for developers deploying or redeploying Launch projects, especially when configuring or updating runtime versions.

## Supported Node.js Versions

**Warning**: Support for Node.js version 18 is discontinued for Launch as of August 1, 2025. Update to a supported Node.js version to avoid disruptions in your projects.

The following are the available [Node.js](https://nodejs.org/en/download/) versions on Launch:
- 24.x (default)
- 22.x
- 20.x

**Note**:
- Only major long-term support (LTS) versions are supported. Contentstack Launch will automatically update to the latest minor versions and security patches.
- If your site uses an unsupported Node.js version, update it before redeploying. Launch does not upgrade Node.js automatically for existing deployments if the `"engines"` field is missing in `package.json`. This safeguard is intentional to prevent unexpected issues from incompatible Node.js libraries. Redeployments will fail until a supported version (for example, Node.js 22 or 24) is explicitly specified in `package.json`.

## Setting the Node.js Version in the package.json File

You can specify the major Node.js version in the [engines](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#engines) section of the `package.json` file.

**Example:**

`package.json`

```
{
  "engines": {
    "node": "22.x"
  }
}
```

When a valid [semver range](https://semver.org/) for Node.js 20 (e.g. 20.x) is specified in the `package.json`, the project will be deployed with the latest available 20.x version of Node.js.

**Note**: If the `engines` section is not specified in `package.json`, the default Node.js version (Node.js 24.x) will be used.

**Example Version Ranges and their Deployed Node.js Versions:**

| **Version in package.json** | **Version deployed** |
|---|---|
| 20.x | 20.x |
| ^20.0.0 | 20.x |
| >=20.0.0 | 24.x |
| >=18.x | 24.x |
| ^22.0.0 | 22.x |
| >=22.0.0 | 22.x |
| 24.x | 24.x |

## Troubleshooting

If you encounter the following error when redeploying an existing project, it is likely due to the Node.js version settings:

```
ERROR: Node.js v18. and below are no longer supported on Launch. Please upgrade to a supported version to continue deploying your projects. View supported versions here: https://www.contentstack.com/docs/launch/supported-nodejs-versions
```

Your latest live deployment was created **before August 1**, and your `package.json` does not specify an `"engines"` property. In such cases, the deployment still defaults to **Node.js 18**, which has now been **discontinued**. As a result, redeployments of these projects fail.

To ensure smooth deployments, **explicitly define the Node.js version** in your `package.json`:
- **Add** the following snippet.
- **Commit** the change.
- **Redeploy**.

```
{
  "engines": {
    "node": "24.x"
  }
}
```

This configuration instructs the deployment system to use **Node.js 24**, which is the currently supported default version.
- **New environments created after support for a new LTS Nodejs version is added in Launch.** Default to that version if no `"engines"` property is specified.
- **New Deployments on environments created support for a new LTS Nodejs version is added in Launch:** Will continue to use the previously set Node.js version (e.g., Node.js 18) unless explicitly updated via the `"engines"` field.

## Common questions

### What Node.js versions are available on Launch?
The following are the available Node.js versions on Launch: 24.x (default), 22.x, and 20.x.

### What happens if my project is still using Node.js 18?
Support for Node.js version 18 is discontinued for Launch as of August 1, 2025, and redeployments will fail until a supported version is explicitly specified in `package.json`.

### How do I set the Node.js version for my Launch deployment?
You can specify the major Node.js version in the `engines` section of the `package.json` file.

### What Node.js version is used if I don’t specify `"engines"` in `package.json`?
If the `engines` section is not specified in `package.json`, the default Node.js version (Node.js 24.x) will be used.