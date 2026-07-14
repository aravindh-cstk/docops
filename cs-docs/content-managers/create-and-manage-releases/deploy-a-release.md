---
title: "[Headless CMS | Releases] - Deploy a Release"
description: Deploy a Release
url: https://www.contentstack.com/docs/headless-cms/deploy-a-release
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-06-02
---

# [Headless CMS | Releases] - Deploy a Release

This page explains how to deploy a release in Contentstack (publish or unpublish the items in that release) to one or more environments, including immediate and scheduled deployments. It is intended for content managers and developers who manage releases and need to deploy changes across environments.

## Deploy a Release

Deploying a release performs the selected action (publish or unpublish) on the items of that release associated with a specific environment.

So, for instance, let’s assume that you have added five items to a release (3 for publishing and 2 for unpublishing). When you deploy this release, the three items added with the publish action will be published, and the two with the unpublish action will be unpublished, all at once.

To deploy a release, log in to your [Contentstack account](https://www.contentstack.com/login) and follow these steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Releases” icon in the left navigation panel. Or, press “alt + R” for Windows and “option + R” for Mac.
- Select the release you want to deploy in the left panel and click the **Deploy** button located at the top.**![Deploy a Release_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5e302ef10c62a8dc/66f24662bb79b747154143c7/Deploy_a_Release_1.png)Note**:

You can update the release items to their latest versions before you deploy the release. Refer to our [Update Release Items to their Latest Versions](./update-release-items-to-their-latest-versions.md) documentation for more information.
- If a content type or global field is updated after an entry was created (for example, a new required field is added), Contentstack validates the entry against the latest configuration when you publish. If any required field is empty, the entry cannot be published until you complete it.
- In the **Deploy Release** window, you will get the following options:**Select Environment(s)**: Choose the environment(s) in which you want to deploy the release.
- **Deploy**: Select if you want to deploy the release **Now** or **Later**.If you select **Now**, Contentstack will immediately deploy all the added items in the specified environment.

If you select **Later**, you need to specify the **Date** and **Time** at which the release should be deployed, along with your time zone.

**Note**: The deployment date cannot extend beyond **12** months when scheduling a release.
- Finally, click **Deploy**.

**Note**: Once you deploy a release in an environment, all the items within are locked. You can [unlock the release](./unlock-a-release.md) and make the necessary changes.

## API Reference

To deploy the Release via API, refer to the [Deploy a Release](../../../api-docs/api-detail/content-management-api.md#deploy-a-release) API request.

## Common questions

### What happens when I deploy a release?
Deploying a release performs the selected action (publish or unpublish) on the items of that release associated with a specific environment.

### Can I schedule a release deployment for later?
Yes. In the **Deploy Release** window, select **Later** and specify the **Date** and **Time** at which the release should be deployed, along with your time zone.

### Is there a limit on how far in advance I can schedule a deployment?
Yes. **Note**: The deployment date cannot extend beyond **12** months when scheduling a release.

### What happens to items after a release is deployed to an environment?
**Note**: Once you deploy a release in an environment, all the items within are locked. You can [unlock the release](./unlock-a-release.md) and make the necessary changes.