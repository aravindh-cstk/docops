---
title: "[Set Up Your Project] - Deploy a Release"
description: Deploying a Release to publish or unpublish items in a selected environment.
url: https://www.contentstack.com/docs/developers/create-releases/deploy-a-release
product: Contentstack
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Deploy a Release

This page explains how to deploy a Release in Contentstack, including choosing environments and scheduling deployment. It is intended for developers managing Releases and environments, and should be used when you are ready to publish/unpublish the items included in a Release.

## Deploy a Release

Deploying a [Release](/docs/developers/create-releases/about-releases) means performing the selected action (publish/unpublish) to the items of a Release associated with an [environment](/docs/developers/set-up-environments/about-environments).

So, for instance, let’s assume that you have added five items to a Release (3 for publishing and 2 for unpublishing). When you deploy this Release, the three items added with the publish action will be published, and the two with the unpublish action will be unpublished, all at once.

To deploy a release, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

- Go to your [stack](/docs/developers/set-up-stack/about-stack), and click on the “Releases” icon on the left navigation panel**.** This opens the **Releases** page where you can see a list of existing Releases in the stack. You can also use the shortcut key “alt + R” for Windows OS users, and “option + R” for Mac OS users to access Releases.
- Select the Release you want to deploy, and click on the **Deploy** button located at the top.
- In the **Deploy Release** window, you will get the following options:**Select Environment(s**): Choose the environment(s) on which you want to deploy the release.
- **Deploy**: Select if you want to deploy the Release **Now** or **Later**.

If you select **Now**, Contentstack will immediately deploy all the added items on the specified environment.

If you select **Later**, you need to specify the date and time at which the Release should be deployed, along with your time zone.

- Finally, click on **Deploy**.

**Note**: You can update the release items to their latest versions before you deploy the release. Refer to our [Update release items to their latest versions](https://app.contentstack.com/docs/content-managers/create-and-manage-releases/update-release-items-to-their-latest-versions/) documentation for more information.**
**

**Warning**: Once you deploy a Release on an environment, the items are locked. This means that you cannot add/remove items from this Release. You can, however, deploy items to another environment (or redeploy on the same environment) or [clone the Release](/docs/developers/create-releases/clone-a-release).

## API Reference

To deploy the Release via API, refer to the [Deploy a Release](/docs/developers/apis/content-management-api#deploy-a-release) API request.

## Common questions

### Can I schedule a Release deployment for later?
Yes. In the **Deploy Release** window, select **Later**, then specify the date, time, and your time zone.

### What happens to items in a Release after it is deployed?
Once you deploy a Release on an environment, the items are locked, meaning you cannot add/remove items from this Release.

### Can I deploy the same Release to multiple environments?
Yes. You can deploy items to another environment (or redeploy on the same environment).

### Is there an API to deploy a Release?
Yes. Refer to the [Deploy a Release](/docs/developers/apis/content-management-api#deploy-a-release) API request.