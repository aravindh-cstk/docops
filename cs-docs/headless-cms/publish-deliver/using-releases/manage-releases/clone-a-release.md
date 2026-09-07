---
title: "Clone a Release"
description: "Easily clone a Release in Contentstack, creating a duplicate with all its items for quick reuse and modification."
url: /headless-cms/clone-a-release
uid: blt47f50a4ab186873e
---

# Clone a Release

## Clone a Release

Cloning a release creates a duplicate of the original release along with all its items. This is useful when you want to reuse an existing release while keeping the original intact. After cloning, you can modify the items in the new Release as needed.

To clone a release, log in to your [Contentstack account](https://www.contentstack.com/login) and follow these steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Releases” icon.
2.  Hover over the release you want to clone in the left panel.
3.  Click the “Clone” icon in the popup modal. Alternatively, click the horizontal ellipsis in the top right corner and click **Clone**.
4.  In the resulting **Clone Release** modal, enter a suitable name and description for your release and click the **Clone** button.![Clone-a-Release.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb8191f743fe4699/67fe43e80bdcf17e065f6574/Clone-a-Release.gif)

## Cloned Release vs Rollback Release

Contentstack creates two types of copied releases, and each serves a different purpose:

-   **Cloned release:** A standard copy that you create manually with the **Clone** option. It copies the items of an existing release so you can reuse or adjust them. You can edit its contents, environments, and schedule.
-   **Rollback release:** A system-generated release created when you select **Create Rollback Release** on a deployed release. It is designed specifically to revert that deployment, is marked with a distinct rollback icon, and cannot be scheduled.

Use a cloned release to reuse or modify release contents. Use a rollback release to undo a deployment. For rollback steps, refer to [Roll Back a Release](/docs/headless-cms/roll-back-a-release).

## API Reference

To clone a release via API, refer to the [Clone a Release](/docs/developers/apis/content-management-api/releases#clone-a-release) API request.
