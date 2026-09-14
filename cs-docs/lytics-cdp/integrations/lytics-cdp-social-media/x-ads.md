---
title: "X Ads"
description: "X is a social media platform where users interact with each other using tweets and messages. X Ads platform allows advertisers to share various types of…"
url: /lytics/x-ads
---

# X Ads

## X Ads

## Overview

[X](https://www.twitter.com) is a social media platform where users interact with each other using tweets and messages. [X Ads](https://ads.twitter.com/) platform allows advertisers to share various types of ads and reach their customers. Connect your X Ads account with Lytics to send audiences to X Ads and target them with specific ads to increase your return.

## Authorization

If you haven't already done so, you will need to set up a [X Account](https://www.twitter.com) and [X Ads Account](https://ads.twitter.com) before you begin the process described below. Please refer to X's [authentication](https://developer.twitter.com/en/docs/authentication/oauth-1-0a) document for details on how Lytics accesses X's [Ads API](https://developer.twitter.com/en/docs/twitter-ads-api).

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select X from the list of providers.
2.  Select the authorization method. Note that different methods may support different job types. X supports the following authorization methods:
    -   [X Ads Sign-In](#twitter-sign-in)
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Complete the configuration steps needed for your authorization. These steps will vary by method.
6.  Click **Save Authorization**.

### X Ads Sign-In

This authorization allows Lytics to access your X Ads account.

1.  Select **X Sign-In Oauth** authorization method.
2.  From the user selection window, select the X Ads account you want to connect from the list of accounts.
3.  Click **Allow**.

## Export Audience

Use this export job to send Lytics user to X Ads Custom audience

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: [X Ads Custom Audience](https://developer.twitter.com/en/docs/twitter-ads-api/audiences/overview/user-data) matched with users from the selected Lytics audience.

This integration utilizes [X Ads API](https://developer.twitter.com/en/docs/twitter-ads-api) to send the Lytics audience users. Once the job is started, it will:

1.  Create a new X Ads Custom Audience with the name format Lytics {audience\_slug} {YYYYMMDD\_hhmmss} if it does not already exist.
2.  For every user entering the selected Lytics audience, the job adds the user's selected identifiers and adds them to the add queue. Similarly, for every user exiting the selected Lytics audience, the selected user's identifiers will be placed on remove queue.
3.  Both the add and remove queue are sent to X Ads using its [Custom Audience Users](https://developer.twitter.com/en/docs/twitter-ads-api/audiences/api-reference/custom-audience-users) API.
4.  The export job will run continuously. The add/remove queue of users are sent to X Ads every 5 minutes or when the batch reaches 1,000 users.

### Fields

The export job gives you an option to select to send Email, Device ID, X Handle and X ID as part of job configuration. Please refer to [X Ads documentation](https://developer.twitter.com/en/docs/twitter-ads-api/audiences/api-reference/custom-audience-users) to learn more about each type of identifier. Identifiers already SHA-256 hashed are accepted, otherwise plain user-identifier data will be SHA-256 hashed before being exported to X Ads.

### Configuration

Follow these steps to set up and configure an export job for X Ads in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **X Ads** from the list of providers.
2.  Select the **Export Audience** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.\\

![twitter-export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb28e95291b8b5464/19b5eb68dc8198201c4bccbf/twitter-export.png)

1.  From the **X Ads Account** input, select the X Ads Account.
2.  (Optional) From the **X Ads Custom Audience** input, select an existing X Ads custom audience to export Lytics users to. If no audience is selected, a new custom audience will be created with the name format Lytics {audience\_slug} {YYYYMMDD\_hhmmss}.
3.  From the **Identifier Fields Mapping** input, map the value from Lytics field to X Identifier field. At least one of Email, Device ID, X Handle or X ID must be mapped. Identifiers already SHA-256 hashed are accepted, otherwise plain user-identifiers will be SHA-256 hashed.
4.  Click the **Complete** button to start the job.
