---
url: /headless-cms/roll-back-a-release
marker: "Headless CMS | Releases"
heading: "Roll Back a Release"
---

A rollback reverts a deployed release, returning every entry and asset to the version published in the target environment before deployment. Use it to recover quickly when a release deploys to the wrong environment or publishes entries or assets that were not ready to go live.

When you roll back a release, Contentstack creates a rollback release: a system-generated duplicate of the original deployed release. Deploying this rollback release restores each document to its previous published state or unpublishes it if no prior version existed.

> **Note:** A rollback acts on the publish state of each document, not on its content. It republishes the previously published version or unpublishes the document; it does not delete or restore content versions.

## When to Use a Rollback

Use a rollback when:

-   A release deploys to an unintended environment.
-   A release publishes entries or assets that were not meant to go live.
-   You need to return an environment to its last known good state after a deployment.

## Prerequisites

Before rolling back a release:

-   The release is already deployed. You cannot roll back a release that has not been deployed, including a scheduled release before its scheduled date.
-   You have the permissions required to deploy a release in the target environment.

## Roll Back a Deployed Release

To roll back a release, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps below:

1.  Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the **Releases** icon.
2.  Open the deployed release you want to roll back.
3.  Click the horizontal ellipsis and select **Create Rollback Release**. A confirmation message explains that Contentstack duplicates the release and that deploying the rollback release reverts the changes from the last deployment.
4.  Confirm the action. The rollback release appears in your releases list, marked as a rollback release.
5.  Open the rollback release and review its items.
6.  Click **Deploy**, select the target environment, and confirm the deployment. This reverts each entry and asset to its previously published version in that environment, or unpublishes it if no previous version exists.

After deployment completes, the target environment reflects the publish state that existed before the original release deployment.

**Note:**

-   A rollback reverts only the entries whose published state has not changed since the original deployment. If you have published or unpublished an entry after the deployment, the rollback skips that entry and keeps the newer published version.
-   A rollback also reverts the references and assets included in the release, unless you have separately changed and published a reference or asset after the original deployment.
-   Each user who deploys a release gets their own rollback release. A non-admin can see only the rollback releases they created; an admin can see all rollback releases for a deployed release.
-   If the same user deploys the same release multiple times, rollback restores entries and assets to the state captured during that user’s first deployment of the release.

## Roll Back a Scheduled Release

A scheduled release cannot be rolled back before it deploys. After the release deploys on its scheduled date, create a rollback release and deploy it to revert the changes. Rollback releases cannot be scheduled; you deploy them manually.

**Additional Resource:**

-   For a single entry, use the rollback option within the entry editor. Refer to the [Publish an Entry](/docs/content-managers/author-content/publish-an-entry) document.
-   For a bulk publish, use the rollback option in the Publish Queue. Refer to the [Bulk Publish](/docs/content-managers/author-content/bulk-publish-entries) and [Publish Queue](/docs/content-managers/publish-content/view-publish-status-of-entries-assets-in-publish-queue) document.

## Limitations

The key limitations are:

-   A rollback release cannot be scheduled and must be deployed manually.
-   Only deployed releases can be rolled back.
-   A rollback release cannot itself be rolled back.
-   After you delete a rollback release, you must redeploy the original release before creating another rollback release.
