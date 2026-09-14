---
title: "1. Account Setup"
description: "1. Account Setup"
url: /lytics/developer-quickstart-1-account-setup
---

# 1. Account Setup

## 1. Account Setup

To ensure that content classification, affinities, and real-time user profiles function as expected, we'll walk you through a few easy steps to ensure your account is configured correctly. You'll need to navigate to your account settings for all of the steps within this section.

## Update Account Details

1.  Use the left-hand navigation to select **Account** > **Settings** > **Details**.
2.  Ensure the **Account Name** used is accurate and descriptive.
3.  Verify that the **Domain** reflects your primary web address. _Note: Your domain should include the relevant subdomain (`www`, etc.) and exclude the protocol (**http** or **https**)._ ![shortcode-img-0014.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am254e875c20a8950c/1c3df66b3973225e7644b28e/shortcode-img-0014.png)
4.  Ensure **Allow access via API** is checked. ![shortcode-img-0015.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3258a546aecf66f7/7df487c06c59ff7a89d075fd/shortcode-img-0015.png)
5.  Press **Save Changes** to confirm the updates.

The **Allow access via API** setting ensues that the current visitor's profile is surfaced and accessible via JavaScript on your website. If unchecked, the Personalization API will prevent access and no profile will be made available.

## Update Content Settings

1.  Use the left-hand navigation to select **Account** > **Settings** > **Content**.
2.  Scroll down to **Content domains allowlist**.
3.  Update the **Content domains allowlist** to include all domains and subdomains where the tag will be installed. _Note: Be sure to update the domains allowlist, not the paths allowlist._ > ❗️ > > **Automated classification requires a valid robots.txt file on your configured domain(s)**. In addition, we highly recommend using your production URL rather than a development URL for classification. This will greatly reduce confusion when it comes to recommendations and moving to production. ![shortcode-img-0016.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3c27ac33ae82615d/7d8dc6649ab3d7c4067825fa/shortcode-img-0016.png)

1) Press **Save Changes** to confirm the updates.

For the content classification and affinity service to run properly, you must ensure all target domains have been listed. This prevents content from an unintended domain from ever being classified and associated with your profiles.
