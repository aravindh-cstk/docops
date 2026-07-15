---
title: "[Brand Kit] - Export a Voice Profile"
description: Exporting a Voice Profile in Contentstack helps you reuse your brand’s tone and language settings across different stacks or environments.
url: https://www.contentstack.com/docs/brand-kit/export-a-voice-profile
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Brand Kit] - Export a Voice Profile

This page explains how to export a Voice Profile from Contentstack Brand Kit so you can reuse, back up, or migrate your brand tone and language settings across stacks or environments. It is intended for Contentstack users with appropriate Organization/Stack access who need to download one or more Voice Profiles as JSON files.

## Export a Voice Profile

Exporting a Voice Profile in Contentstack helps you reuse your brand’s tone and language settings across different stacks or environments. Whether you are backing it up, migrating to a new project, or ensuring consistency across teams, this feature simplifies the process and saves you time.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Organization that has Brand Kit enabled
- Access to the Contentstack Organization/Stack as the [Owner](../../developers/organization/organization-roles.md#organization-owner)/[Admin](../../developers/organization/organization-roles.md#organization-admin)
- Access to Brand Kit as an invited [Collaborator](./invite-collaborators.md)

## Steps for Execution

**Note**: For this guide, we have assumed that you have [created a Voice Profile](./create-a-voice-profile.md) inside your Brand Kit.

To export a Voice Profile, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the left navigation panel, click the **Brand Kit** icon.![1-Brand-Kit-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2793aa12bafb2903/68a78e6d5555ae37ee9b0d79/1-Brand-Kit-Icon.png)
- Select the **Brand Kit** that contains the Voice Profile you want to export.![2-Select-Brand-Kit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbbadd20a5d68e86f/68a79e0e3e44086b28dc24ca/2-Select-Brand-Kit.png)
- Under **Actions**, click the vertical ellipsis next to the desired Voice Profile and select **Export** to download the Voice Profile.![3-Import-Voice-Profile-Export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf3e3656e49d0942/687fbb102a594b079878bd97/3-Import-Voice-Profile-Export.png)
- To export multiple Voice Profiles, select the checkboxes for the desired Voice Profiles and click **Export** from the floating bar.
    ![4-Import-Voice-Profile-Export-From-Toolbar](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1883d225c7a47f62/687fbb10086c36fd62294c42/4-Import-Voice-Profile-Export-From-Toolbar.png)The selected Voice Profiles will be downloaded as `.json` files.

## Common questions

### What file format are exported Voice Profiles downloaded in?
The selected Voice Profiles will be downloaded as `.json` files.

### Can I export more than one Voice Profile at a time?
Yes. Select the checkboxes for the desired Voice Profiles and click **Export** from the floating bar.

### What access do I need to export a Voice Profile?
You need access to the Contentstack Organization/Stack as the [Owner](../../developers/organization/organization-roles.md#organization-owner)/[Admin](../../developers/organization/organization-roles.md#organization-admin) and access to Brand Kit as an invited [Collaborator](./invite-collaborators.md).