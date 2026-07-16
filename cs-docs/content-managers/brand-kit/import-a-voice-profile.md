---
title: "[Brand Kit] - Import a Voice Profile"
description: Import preconfigured voice profiles into your Brand Kit stack using a JSON file.
url: https://www.contentstack.com/docs/brand-kit/import-a-voice-profile
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Brand Kit] - Import a Voice Profile

This page explains how to import a preconfigured Voice Profile into Contentstack Brand Kit using a `.json` file. It is intended for Brand Kit Owners and Organization/Stack admins who need to migrate, share, or reuse Voice Profile configurations across environments or organizations.

## Import a Voice Profile

Brand Kit allows you to import preconfigured voice profiles into your stack. This is useful when migrating configurations, sharing profiles across environments, or onboarding new teams.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Organization that has Brand Kit enabled
- Access to the Contentstack Organization/Stack as the [Owner](../../developers/organization/organization-roles.md#organization-owner)/[Admin](../../developers/organization/organization-roles.md#organization-admin)
- Access to Brand Kit as an invited [Collaborator](./invite-collaborators.md)

**Note**: Only the respective Brand Kit Owners can import the Voice Profiles.

## Steps for Execution
**Note**: For this guide, we have assumed that you have [created a Voice Profile](./create-a-voice-profile.md) inside your Brand Kit.

To import a Voice Profile, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the left navigation panel, click the **Brand Kit** icon.![1-Brand-Kit-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2793aa12bafb2903/68a78e6d5555ae37ee9b0d79/1-Brand-Kit-Icon.png)
- Select the **Brand Kit** that contains the Voice Profile you want to import.![2-Select-Brand-Kit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbbadd20a5d68e86f/68a79e0e3e44086b28dc24ca/2-Select-Brand-Kit.png)
- To import a Voice Profile, click the **+ New Voice Profile** button and select the **Import** option.![3-Import-Voice-Profile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt898656e198817a83/687fb8bd87ef1a5d143826e0/3-Import-Voice-Profile.png)
- In the **Import** modal, click the **Upload File** to browse and select the `.json` file containing your Voice Profile, then click **Proceed**.**Note**:

Import supports only valid JSON files that follow the Contentstack Voice Profile format.
- You can import Voice Profiles across different organizations to reuse settings and ensure consistency.

You will get a success message after the Voice Profile is imported.

## Common questions

### Who can import Voice Profiles in Brand Kit?
Only the respective Brand Kit Owners can import the Voice Profiles.

### What file type is required to import a Voice Profile?
Import supports only valid JSON files that follow the Contentstack Voice Profile format.

### Can I import Voice Profiles across different organizations?
Yes, you can import Voice Profiles across different organizations to reuse settings and ensure consistency.

### Where do I start the import flow in the UI?
In the left navigation panel, click the **Brand Kit** icon, select the **Brand Kit**, then click **+ New Voice Profile** and choose **Import**.