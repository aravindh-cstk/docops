---
title: "[Create and Manage Releases NEW] - Clone a Release"
description: Clone a release to create a duplicate of an existing release along with all its items.
url: https://www.contentstack.com/docs/headless-cms/clone-a-release
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: NEW
last_updated: 2026-03-25
---

# [Create and Manage Releases NEW] - Clone a Release

This page explains how to clone a release in Contentstack, creating a duplicate of an existing release and its items. It is intended for content managers (and developers using the API) who need to reuse an existing release while keeping the original intact.

## Clone a Release

Cloning a release creates a duplicate of the original release along with all its items. This is useful when you want to reuse an existing release while keeping the original intact. After cloning, you can modify the items in the new Release as needed.

To clone a release, log in to your [Contentstack account](https://www.contentstack.com/login) and follow these steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Releases” icon in the left navigation panel.
- Hover over the release you want to clone in the left panel.
- Click the “Clone” icon in the popup modal. Alternatively, click the horizontal ellipsis in the top right corner and click **Clone**.
- In the resulting **Clone Release** modal, enter a suitable name and description for your release and click the **Clone** button.

## API Reference

To clone a release via API, refer to the [Clone a Release](../../../api-docs/api-detail/content-management-api.md#clone-a-release) API request.

## Common questions

### Does cloning a release also clone all items inside it?
Yes. Cloning a release creates a duplicate of the original release along with all its items.

### Can I change the cloned release without affecting the original?
Yes. After cloning, you can modify the items in the new Release as needed while keeping the original intact.

### Where do I find the Clone option in the UI?
You can click the “Clone” icon in the popup modal after hovering over the release, or click the horizontal ellipsis in the top right corner and click **Clone**.

### Is there an API to clone a release?
Yes. To clone a release via API, refer to the [Clone a Release](../../../api-docs/api-detail/content-management-api.md#clone-a-release) API request.