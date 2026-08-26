---
title: "Import a Voice Profile"
description: "Learn how to easily import a Voice Profile in Contentstack to streamline content creation and maintain consistent brand voice across environments."
url: /brand-kit/import-a-voice-profile
uid: blt7d3e556241896a72
---

# Import a Voice Profile

## Import a Voice Profile

Brand Kit allows you to import preconfigured voice profiles into your stack. This is useful when migrating configurations, sharing profiles across environments, or onboarding new teams.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Brand Kit-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions, or as [Collaborator](/docs/brand-kit/invite-collaborators)

    **Note:** Only the respective Brand Kit Owners can import the Voice Profiles.

-   An existing [Voice Profile](/docs/brand-kit/create-a-voice-profile)

## What You Will Learn

-   How to open the Brand Kit that will receive an imported Voice Profile.

-   How to import a Voice Profile from a JSON file.

-   Which file format the import supports.


## Steps for Execution

To import a Voice Profile, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to App Switcher in the top-right corner and select **Brand Kit**.
2.  Select the **Brand Kit** that contains the Voice Profile you want to import.
3.  To import a Voice Profile, click the **\+ New Voice Profile** button and select the **Import** option.![3-Import-Voice-Profile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt898656e198817a83/687fb8bd87ef1a5d143826e0/3-Import-Voice-Profile.png)
4.  In the **Import** modal, click the **Upload File** to browse and select the .json file containing your Voice Profile, then click **Proceed**.![4-Upload-Voice-Profile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt29f867e5d2f0d9a7/687fb8bd4b419586e225be87/4-Upload-Voice-Profile.png)

    **Note**:

    -   Import supports only valid JSON files that follow the Contentstack Voice Profile format.
    -   You can import Voice Profiles across different organizations to reuse settings and ensure consistency.

    You will get a success message after the Voice Profile is imported.

    ![5-Voice-Profile-Imported](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f4d460c5f294fb0/687fb8bd54ac0d4db590dc7a/5-Voice-Profile-Imported.png)

## Related Resource

-   [Brand Kit Management API: Import Voice Profile](/docs/developers/apis/brand-kit-management-api/voice-profile#import-voice-profile)
