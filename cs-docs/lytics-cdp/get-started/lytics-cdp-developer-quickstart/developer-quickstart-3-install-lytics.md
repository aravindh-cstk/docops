---
title: "Install the Lytics Tag"
description: "In the Web SDK, Lytics provides a tag that can be placed on your site to collect behavioral data and surface the materialized profile back to your browser…"
url: /lytics/developer-quickstart-3-install-lytics
---

# Install the Lytics Tag

## Install the Lytics Tag

## Installing the Tag

In the Web SDK, Lytics provides a tag that can be placed on your site to collect behavioral data and surface the materialized profile back to your browser in real time. Manual installation instructions are available from within the app at **Data Pipeline** > **SDK** > **Web SDK**.

If your site is a **Drupal** or **WordPress** site, or you use **Google Tag Manager**, we recommend using one of these turnkey methods to install the Lytics Tag:

**Drupal**

For Drupal users, getting up and running is as simple as installing the official [Lytics Drupal module](https://www.drupal.org/project/lytics). Once you have the module added to your site using **composer** or another preferred method, you will want to complete the following configuration steps:

-   Visit the **Configuration** page either from the module details in the **Extend** section of Drupal or directly from the **Configuration** section (/en/admin/config/system/lytics).

![Lytics module configuration page in Drupal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am38d298bde9d91ca1/e631db45189d2a2ffb282436/78fb92a-image.png)

-   Add a valid API Token for your Lytics account. Be sure to give that token **admin** privileges, as that will unlock account verification and direct access to all Lytics systems responsible for surfacing and managing profiles and personalization. This token should also have no expiration, as it will need continued access to your Lytics account. For more information visit our [Access Token documentation](/docs/lytics/access-tokens).

![Entering the Lytics API token in Drupal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am370a6f2ac5e235a7/42143e5a0eb3435684546d64/b851a7b-image.png)

-   With your token entered, ensure the **Enable Tab** setting is selected. This will automatically place the Lytics JavaScript SDK onto all public pages of your site.

![Enable Tab setting in the Drupal module configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama5b514f9c0739598/e0a521636b590539229c3e7d/d480fb5-image.png)

-   Upon **saving configuration**, your account details will be surfaced. Be sure to verify that your token is for the Lytics account you are currently configuring.
-   That's it!

**WordPress**

A formal WordPress plugin is currently under development and coming soon.

**Google Tag Manager**

-   From the left-hand navigation, select **Data Pipeline** > **SDK** > **Web SDK**.
-   [Set up and install](https://support.google.com/tagmanager/answer/6103696?hl=en) Google Tag Manager.
-   Create a new [**Custom HTML**](https://support.google.com/tagmanager/answer/6107167?hl=en) tag and place the Lytics JavaScript snippet into the text box.
-   Ensure the tag is triggered on the pages you desire. We recommend using the **All Pages** default trigger to start.

![Custom HTML tag configuration in Google Tag Manager](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf24d9510007f442c/e6948c86d5c22135c870ef6c/d92fda3-image.png)

-   Submit and [publish](https://support.google.com/tagmanager/answer/6107163?hl=en) your Google Tag Manager version.

## Testing the Lytics Tag Installation

Once the tag has been installed, validate a successful installation via one of the three following methods:

**Lytics Dev Tools Chrome Extension (Recommended)**

The Lytics Dev Tools Chrome Extension makes validation and exploration simple. Once you've installed the extension as outlined above:

1.  Open the extension and ensure it has been activated.

![Activating the Lytics Dev Tools Chrome Extension](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am96fcace3fed576d5/711613e06bd2909b0f748d5d/8b2183b-image.png)

1.  The interface will display a message to confirm the correct installation of the Lytics tag and relevant configuration details.

![Installation confirmation in the Chrome extension](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am24a2e57269762c17/600c7a10277aa4381d2fb171/a8d0212-image.png)

**In-app Verification Assistant**

We've built a simple tool to validate that data flows into your Lytics account. Please note that the collected events may take a few minutes to reflect in the UI.

1.  Select **Account** from the main navigation.
2.  Use the left-hand navigation to select **Setup** > **JavaScript Tag**.
3.  At the bottom of the Setup page, click the **refresh** button to validate installation if it does not already state **Successfully installed**.

![JavaScript Tag setup verification in the Lytics app](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd5b338f3fbe1496a/634fcb91a13d00782d0a871a/211b431-image.png)

**Manually**

If you prefer to verify the installation manually, you can do so by opening the Chrome developer console and ensuring jstag is accessible. In addition, by viewing the network tab, you can monitor data collection requests being sent to lytics.io/c and personalization requests being loaded from lytics.io/api/personalize.

## Testing the Current Visitor's Profile via JavaScript SDK

The final step to verify installation is ensuring you can access your visitor profile. This profile is built and delivered in real time as you engage with content.

**Lytics Dev Tools Chrome Extension (Recommended)**

The Lytics Dev Tools Chrome Extension makes validation and exploration simple. Once you've installed the extension as outlined above:

1.  Open the extension and ensure it has been activated.

![Activating the Lytics Dev Tools Chrome Extension](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama39dc2c8a97de129/d1fa72403e60d4570632b0dc/d7ccacb-image.png)

1.  Access **Profile** from the bottom menu in the Chrome extension.

![Profile menu in the Chrome extension](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfa986a03eda522b0/325e82061822a4b01cf24fd6/f5adcd5-image.png)

1.  This section of the extension provides two views into your profile:
    1.  The **Summary**, showcasing available attributes and affinities.
    2.  The **Details**, which provides a raw JSON dump of all available attributes and insights accessible via the Personalization Engine web SDK.

![Summary and Details views of a visitor profile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am980fdc47eb143233/95de3dda9096e0e06b9a82ad/45569c0-image.png)

**Manually**

If you prefer to verify the installation manually, you can do so by opening the Chrome developer console and ensuring jstag is accessible. In addition, by viewing the network tab, you can monitor data collection requests being sent to lytics.io/c and personalization requests being loaded from lytics.io/api/personalize.
