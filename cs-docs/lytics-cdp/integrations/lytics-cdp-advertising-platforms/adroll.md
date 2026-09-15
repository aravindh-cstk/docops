---
title: "AdRoll"
description: "Connect Lytics and AdRoll to sync audience segments in real-time, so your AdRoll ad campaigns can target visitors based on their Lytics audience membership."
url: /lytics/adroll
uid: bltfca21075f97fb110
---

# AdRoll

## AdRoll

Connecting Lytics and AdRoll allows you to leverage Lytics Audiences in your AdRoll campaigns. When a visitor accesses your site Lytics identifies who they are and what Audiences they are currently a member of. This information is passed to AdRoll via the AdRoll SmartPixel, which is tied to the campaigns within your AdRoll account. As a result, your ads can target audiences based on any aspect of Lytics audiences such as behavioral scores or content affinity, in real-time.

## Overview

### Before You Begin

-   Ensure you have installed the Lytics JavaScript Tag. This is required in order to identify your web visitors and pass the audiences they are currently a member of to AdRoll in real-time.
-   Access to an Admin username & password in Adroll is required in order to enable the usage of Lytics Audiences within AdRoll.
-   An [AdRoll SmartPixel ID](https://help.adroll.com/hc/en-us/articles/211846018) is required in order to properly target the correct account. The steps outlined below will walk you through how to obtain this ID if you do not already have it handy.

## Authentication

First, you need to authorize Lytics to use your AdRoll account.

1.  Log into your [Lytics account](https://app.lytics.com/).
2.  Open AdRoll integration or Click **Data** > **Integrations** and select **AdRoll** from the integrations list. ![adroll](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2a2dea92bcee5610/ca5360735a43951d1aad7efc/adroll-1.png)
3.  Click **Authorizations**.
4.  Click **Add new authorization**.
5.  In the **Admin Username** box, enter your AdRoll admin username.
6.  In the **Admin Password** box, enter your AdRoll admin password.
7.  In the **Account Pixel** box, enter your AdRoll SmartPixel ID.

    -   Your ID can be found within your SmartPixel. Access that pixel by following [AdRoll's documentation](https://help.adroll.com/hc/en-us/articles/211845978-Activate-Your-Pixel). Once you have the pixel pulled up your ID can be found following `adroll_pix_id=` in your pixel tag.

    ![adroll-pixel-highlight](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcb17bfc33bfdbb37/28581b7226b9d2d4f0485499/adroll-2.png)
8.  In the **Description** box, enter any description.
9.  Click **Authorize** to save the authorization.

## Share Lytics Audience Definitions with AdRoll

| Summary |  |
| --- | --- |
| Frequency | Once, Daily starting from original start time. |
| Campaign content | None |

1.  Log into your [Lytics account](https://app.lytics.com/).
2.  Click **Data** > **Integrations** and select **AdRoll** from the integrations list.
3.  Click the **AdRoll Segment Sync** tab.
4.  Identify the authorization you would like to use and click **Select**.
5.  Determine if you would like to keep the audiences in Lytics and AdRoll in sync. If not, ensure the "Keep Updated" option is deselected. ![adroll workflow](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8096fc64268298da/08f1be6ee8810d287946c3c4/adroll-3.png)
6.  Click the **Start Export** tab.

Lytics will begin adding Audiences to AdRoll immediately but it may take a few minutes to see all audiences depending on total number.

## Configure the Lytics JavaScript Tag to Share Visitor Audiences with AdRoll in Real-time

| Summary |  |
| --- | --- |
| Frequency | Real-time |

By default the Lytics JavaScript tag will pass the audiences a current visitor is a member of to AdRoll if the AdRoll SmartPixel is found on the site with the proper ID. If for any reason you would like to prevent the Lytics JavaScript tag from passing data to AdRoll, you can do so by adding AdRoll to the list of blocked integrations in your [account settings](https://docs.lytics.com/documentation/product/features/account-management/editing-your-account#tag).

## Configure your AdRoll Campaign to Use a Lytics Audience

1.  Log into your [AdRoll account](https://app.adroll.com/account/signin).
2.  Select **Create Campaign**. ![adroll-create-campaign](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb6dc90487dabd304/6cf43177f041ea0b2a488ea1/adroll-4.png)
3.  Click **Websites & Apps** to get started.
4.  Click **Audience** and then **Choose** at the top right. ![adroll-configure-campaign](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4204f61141f4a28a/a8aef2af6a45cfc6a20ce959/adroll-5.png)
5.  Select one or more audiences from the list and then click **Choose**. ![adroll-choose-audience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am25c542e6fdfbb539/5e159d6eadd0fbc6ffa510b9/adroll-6.png)
6.  Continue on with your standard ad selection or creation process.
