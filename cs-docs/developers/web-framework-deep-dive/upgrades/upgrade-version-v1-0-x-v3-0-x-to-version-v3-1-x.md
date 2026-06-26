---
title: "[Web Framework for Web Apps] - Upgrade version v1.0.x/v3.0.x to version v3.1.x"
description: Upgrade instructions and feature highlights for moving contentstack-express from v1.0.x or v3.0.x to v3.1.x.
url: https://www.contentstack.com/docs/developers/web-framework-deep-dive/upgrades/upgrade-version-v1-0-x-v3-0-x-to-version-v3-1-x
product: Contentstack
doc_type: upgrade-guide
audience:
  - developers
version: v3.1.x
last_updated: 2026-03-26
---

# [Web Framework for Web Apps] - Upgrade version v1.0.x/v3.0.x to version v3.1.x

This page describes the features available in contentstack-express v3.x and the steps required to upgrade an existing project from v1.0.x or v3.0.x to v3.1.x. It is intended for developers maintaining Contentstack web applications and should be used when planning or executing a framework upgrade.

## Upgrade version v1.0.x/v3.0.x to version v3.1.x

## Features of contentstack-express v3.x
- Support for ‘Releases’ feature is now available [v3.1.9 and above]
- Applications using `SYNC=false` and `Filesystem` as provider/db will now be able to run faster [v3.1.8 and above]

**Tip :** Recommended for applications containing large amount of ‘JSON’ data and ‘references’ in their content type schemas.
- Support for ‘Modular Blocks’ has been added [v3.1.7 and above]
- High number of hits on app pages will no longer run the application into ‘Internal Server Errors’ [v3.1.6 and above]
- App instance is now returned and is now available when create server is called [v3.1.4 and above]
- Faster content loading/serving - asset references are now resolved while publishing, rather than during runtime [v3.1.1 and above]
- `SYNC=false` architecture support added [v3.0.5 and above]
- Asset management support added [v3.0.1 and above]
- Default search engine has been changed from ‘swig’ to ‘nunjucks’ [v3.0.0 and above]

## Upgrade contentstack-express to v3.1.x

contentstack-express versions running in 1.0.x or 3.0.x will need to perform the following steps to upgrade to v3.1.x:
- Install `contentstack-cli@3.x` using `npm install -g contentstack-cli`.
- Go to your project folder and run `npm install -s contentstack-express@3.1.x`.
- Create a backup of the `_content` folder and then delete it before proceeding further.
- Set the environment on which you wish to sync the content, for example, `$ export NODE_ENV=production` (Linux distros) OR `$ set NODE_ENV=production` (Windows).
	**Note **: The environment variable used here is used to determine which configuration file to pick from when `contentstack` process is run.
- Use the `contentstack sync` command to get all the data from Contentstack.

**Warning :** The latest version of the framework can be used only with V3 stacks. If you are still using V2 stacks, you need to first upgrade your stacks to V3 before upgrading the framework. To upgrade your stacks from V2 to V3, please send an email to our support team at [support@contentstack.com](mailto:support@contentstack.com).

Also, while moving from v1.0.x to v3.x.x, the default contentstack-express templating has been changed from ‘[swig](http://node-swig.github.io/swig-templates/)’ to ‘[nunjucks](https://mozilla.github.io/nunjucks/)’.

## Release Notes

You can check out the release notes [here](https://github.com/builtio-contentstack/contentstack-express/releases).

## Common questions

### Do I need to back up the `_content` folder before upgrading?
Yes. Create a backup of the `_content` folder and then delete it before proceeding further.

### Which stacks are supported by the latest version of the framework?
The latest version of the framework can be used only with V3 stacks.

### What command should I use to fetch content after upgrading?
Use the `contentstack sync` command to get all the data from Contentstack.

### What templating engine change should I expect when moving from v1.0.x to v3.x.x?
The default contentstack-express templating has been changed from ‘swig’ to ‘nunjucks’.