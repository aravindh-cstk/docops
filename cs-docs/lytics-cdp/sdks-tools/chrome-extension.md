---
title: "Chrome Extension"
description: "The Contentstack Data & Insights Dev Tools Chrome extension is a comprehensive tool designed to simplify validation, debugging, and exploration of Lytics'…"
url: /lytics/chrome-extension
---

# Chrome Extension

## Chrome Extension

## Contentstack Data & Insights Dev Tools Chrome Extension

### Overview

The Contentstack Data & Insights Dev Tools Chrome extension is a comprehensive tool designed to simplify validation, debugging, and exploration of Lytics' client-side capabilities as facilitated by our core and personalization SDKs. With this extension, users can easily:

-   Validate that Lytics is connected to your site.
-   Debug and validate that the data collected by Lytics, be it automatic or custom, is behaving as expected.
-   Explore the current visitor's full profile to validate:
    -   If the profile is available for personalization.
    -   The events collected are having the expected impact on attributes and segment membership.
-   Explore "Experiences" currently active on your site and could be surfaced to visitors.

### Installation

#### [Install Now](https://chromewebstore.google.com/detail/contentstack-data-insight/febcknnoljbaehmlibhjckhhahedgeci?authuser=0&hl=en)

![Chrome Extension](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2df43ed3d0e9e503/6e4a0d485abefc83dfa563d7/d9946d051cd78783ae19257ba145ac88096a289f270f6040392e1af2d8b6a010-image_6.png)

1.  **Install Extension:** This extension is installed directly into your Chrome browser. To install, visit the primary extension page and follow the instructions.
2.  **Pin Extension to Nav Bar:** Once installed, we recommend pining the extension to your top bar for easy access.

![e6d8ee36730d9ba06d83dab134bc90b01c96a0e6bf70da6b796cec4a6a4b319c-image_5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4d5b3a26620de34b/3c6f2a414d75b9332c03b2f6/e6d8ee36730d9ba06d83dab134bc90b01c96a0e6bf70da6b796cec4a6a4b319c-image_5.png)

### Getting Started

Once the extension is installed, you can visit any website where Lytics is or should be installed and begin debugging.

1.  **Enable the extension**: To activate the Lytics Dev Tools extension, open the extension and toggle the slider at the top right of the extension to either "Enable" or "Disable."
2.  **Verify Installation:** The extension will verify that the Lytics tag has been installed successfully before further debugging. This is confirmed by the "Lytics JavaScript SDK Installed" alert displayed on the dashboard of the extension.
3.  **Navigation:** Once enabled, you'll access four key sections: Status, Debugger, Profile, and Personalization, each offering specific functionalities tailored to streamline your debugging and exploration process.



### Status

The Status section provides real-time visibility into the Lytics JavaScript SDK installation and operational status on the current domain. It automatically detects SDK presence and displays comprehensive configuration details including account ID, stream settings, cookie configuration, and third-party cookie status. The dashboard tracks essential metrics such as last activity timestamp and total requests made today, offering immediate insight into your tag's health and data collection activity. This centralized view ensures you can quickly verify proper SDK implementation and monitor ongoing performance without interrupting your workflow, making it the essential first stop for any debugging or validation task.

![5c9d850421e014e3e93c06beaa9017de797e35b8877b8f712c1b2c5bcbff2899-image_11.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd76f9d250e9ada27/48d565e2ba03c06738ec4e1d/5c9d850421e014e3e93c06beaa9017de797e35b8877b8f712c1b2c5bcbff2899-image_11.png)

### Debugger

The debugger section of the extension serves multiple purposes. Firstly, as we did previously, it allows you to validate installation, ensuring that the Lytics tag is successfully implemented. Additionally, it provides access to the full active configuration of the JavaScript SDK through the configuration tab. Moreover, it includes a live event debugger that monitors and displays comprehensive details of any calls made to the Lytics APIs in real time. This feature is particularly valuable for reviewing data sent via jstag.send calls, offering insights into the interaction between your website and Lytics APIs.

![019fd8f2169f161a3b0bd3688dc40cf83e95d1c51b326dc01c18f0afebfd0234-image_7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am850b4c4d5a6f4452/5c1d2f0630c4b102581e0b40/019fd8f2169f161a3b0bd3688dc40cf83e95d1c51b326dc01c18f0afebfd0234-image_7.png)

![43ed894a4b2b6aa68f946b8eecca8383d22f576cf2d9a16e8769a5e4087eda98-image_8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame7f1837109f46ad4/14545b4ddad34e46b0717355/43ed894a4b2b6aa68f946b8eecca8383d22f576cf2d9a16e8769a5e4087eda98-image_8.png)

### Profile

In the "Profile" section of the extension, users gain a live look at the current visitor's profile, providing valuable insights into their browsing behavior and demographic information. This section offers a snapshot of key details, such as the visitor's unique identifier and behavioral scores, allowing for a quick assessment of their engagement level. Additionally, users can access a detailed view of all information available to the browser, including demographic data, past interactions, and any custom attributes stored in the visitor's profile. This comprehensive overview enables users to tailor their strategies and personalize experiences based on individual visitors' specific characteristics and preferences.

![16df7f00389454230e48758a81ceb8230f573e460aeb0de025a8ec13a993b827-image_9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1c5dbfddb9ba8a85/e6cf5667e1a0f6eea739fb4b/16df7f00389454230e48758a81ceb8230f573e460aeb0de025a8ec13a993b827-image_9.png)

![59f267f81e23f6377131a53c9d17fd8c313c52d0a4c61e792950f89864e09f9b-image_10.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am246f7f7d4fb2e0af/ded3cebabe71516f3c7b94b1/59f267f81e23f6377131a53c9d17fd8c313c52d0a4c61e792950f89864e09f9b-image_10.png)

### Personalization

In the "Personalization" section of the extension, users gain access to a log of all active Lytics experiences and campaigns, along with their associated details. This feature proves invaluable when debugging the configuration of experiences or ensuring that overrides have produced the expected results. Users can easily track the performance and behavior of each personalized element on their website by providing a comprehensive overview of active campaigns and experiences, including their parameters and settings. This functionality streamlines debugging and empowers users to fine-tune their personalization strategies for optimal effectiveness.

![350f3a7e25aa8db163678a362a5c0ccdc7b0afe37509a0b16545af672df38092-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am96c7af1ec727854f/65cce1a3803436869aae3525/350f3a7e25aa8db163678a362a5c0ccdc7b0afe37509a0b16545af672df38092-image.png)
