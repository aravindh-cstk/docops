---
title: "[Set Up Your Project] - Clone a Release"
description: Clone a Release
url: https://www.contentstack.com/docs/developers/create-releases/clone-a-release
product: Contentstack
doc_type: guide
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Clone a Release

This page explains how to clone an existing deployed Release in Contentstack so you can reuse it and make changes to its items. It is intended for developers and content managers working with Releases, and should be used when you need to duplicate a locked deployed Release for further edits or reuse.

## Clone a Release

Since deployed [Releases](/docs/developers/create-releases/about-releases) are “locked” (i.e., you cannot make any changes to Release items), the only way to reuse existing deployed Releases are to clone them.

Cloning a Release means creating a copy of an existing Release along with all the items within it. After cloning a Release, you can make the necessary changes to its items, and then use the updated Release.

To clone a Release, login to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack), click on the “Releases” icon on the left navigation panel. This opens the **Releases** page where you can see a list of all the existing Releases. You can also use the shortcut key “alt + R” for Windows OS users, and “option + R” for Mac OS users to access Releases.
- Hover over the release you want to clone, click on the “Copy” icon that appears on the floating modal.
- In the **Clone Release** window, provide a suitable **Name** (mandatory) and **Description** (optional) for the Release, and click **Save**.

## API Reference

To clone a release via API, refer to the [Clone a Release](/docs/developers/apis/content-management-api#clone-a-release) API request.

## Common questions

### Can I edit a deployed Release directly?
No. Since deployed Releases are “locked” (i.e., you cannot make any changes to Release items), you need to clone the Release to make changes.

### What gets copied when I clone a Release?
Cloning a Release means creating a copy of an existing Release along with all the items within it.

### Are Name and Description required when cloning a Release?
In the **Clone Release** window, **Name** is mandatory and **Description** is optional.

### Is there an API to clone a Release?
Yes. To clone a release via API, refer to the [Clone a Release](/docs/developers/apis/content-management-api#clone-a-release) API request.