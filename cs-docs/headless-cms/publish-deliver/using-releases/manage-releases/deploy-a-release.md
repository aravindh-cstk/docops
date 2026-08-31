---
title: "Deploy a Release"
description: "Deploy releases in Contentstack to publish or unpublish items in a specific environment. Learn how to schedule releases."
url: /headless-cms/deploy-a-release
uid: blt3a73095862647640
---

# Deploy a Release

## Deploy a Release

Deploying a release performs the selected action (publish or unpublish) on the items of that release associated with a specific environment.

So, for instance, let’s assume that you have added five items to a release (3 for publishing and 2 for unpublishing). When you deploy this release, the three items added with the publish action are published, and the two with the unpublish action are unpublished, all at once.

To deploy a release, log in to your [Contentstack account](https://www.contentstack.com/login) and follow these steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and, in the top navigation bar, click **Releases**. Or, press “alt + R” for Windows and ��option + R” for Mac.
2.  Select the release you want to deploy in the left panel and click the **Deploy** button located at the top.![Deploy a Release_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5e302ef10c62a8dc/66f24662bb79b747154143c7/Deploy_a_Release_1.png)

    **Note**:

    -   You can update the release items to their latest versions before you deploy the release. Refer to our [Update Release Items to their Latest Versions](/docs/headless-cms/update-release-items-to-their-latest-versions) documentation for more information.
    -   If a content type or global field is updated after an entry was created (for example, a new required field is added), Contentstack validates the entry against the latest configuration when you publish. If any required field is empty, the entry cannot be published until you complete it.

3.  In the **Deploy Release** window, the following options are available:
    1.  **Select Environment(s)**: Choose the environment(s) in which you want to deploy the release.
    2.  **Deploy**: Select if you want to deploy the release **Now** or **Later**.

        If you select **Now**, Contentstack immediately deploys all the added items in the specified environment.

        ![Deploy a Release_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79b604fd470bb748/66f24662eaccafbba8a5afbc/Deploy_a_Release_2.png)

        If you select **Later**, you need to specify the **Date** and **Time** at which the release should be deployed, along with your time zone.

        ![Deploy a Release_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte3226891635d2116/66f24662ed7186377bfb9685/Deploy_a_Release_3.png)

        **Note:** The deployment date cannot extend beyond **12 months** when scheduling a release.

4.  Finally, click **Deploy**.

**Note**

-   Once you deploy a release in an environment, all the items within are locked. You can [unlock the release](/docs/headless-cms/unlock-a-release) and make the necessary changes.
-   Every deployed release can be rolled back. Rolling back creates a rollback release that, when deployed, reverts the release’s entries and assets to the version published before deployment. Refer to the [Roll Back a Release](/docs/headless-cms/roll-back-a-release) document.

## API Reference

To deploy the Release via API, refer to the [Deploy a Release](/docs/developers/apis/content-management-api/releases#deploy-a-release) API request.
