---
title: "Blueshift"
description: "Learn how to connect Lytics with Blueshift to export Lytics audiences as user profiles for cross-channel email, SMS, and push campaigns, including authorization setup and export job configuration."
url: /lytics/blueshift
---

# Blueshift

## Blueshift

## Overview

[Blueshift](https://blueshift.com/) is the customer engagement platform that allows you to execute cross-channel campaigns such as email, SMS, push notifications, and cloud app notifications. Blueshift offers end-to-end campaign reporting, segmentation, and predictive scoring.

You can export your Lytics user data to Blueshift for use in email or mobile campaigns. Using Lytics advanced audience builder and data science insights, you can make send intelligent audiences downstream to target with Blueshift campaigns. Using Lytics Experiences on the Journey Canvas you can optimize the time that users receive the content and personalize of an Experience to be executed with campaign tools such as Blueshift.

## Authorization

If you haven't already done so, you will need to setup a Blueshift account before you begin the process described below. In order to authorize Blueshift workflow, you will be required to provide the User API Key which Lytics uses to send data to your account. To obtain Blueshift User API Key please refer to the [Blueshift documentation](https://help.blueshift.com/hc/en-us/articles/115002714553-API-Overview).

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Blueshift** from the list of providers.
2.  Select the **User API Key** method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (optional) In the **Description** text box, enter a description for this authorization
5.  In the **API Key** password box, enter your API Key credential.
6.  Click **Save Authorization**. ![blueshift-auth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdfbccf325331ed06/148781f23e7843557b4449f0/img-0034.png)

## Export Audiences

Exporting Lytics audiences to Blueshift will allow you to supplement your Blueshift user base with new users or update existing users with cross-channel data from Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration , Audience Trigger Integration
-   **Frequency**: Real-time Integration, with an optional one-time Backfill of the audience after setup.
-   **Resulting Data**: Lytics users that are a member of the selected audience(s) are exported to Blueshift as user profiles.

This integration utilizes [Blueshift API](https://help.blueshift.com/hc/en-us/articles/115002714553-API-Overview) to send user data. Once the user initiates the workflow, it will run a backfill of users if configured to do so. Then the workflow will receive real-time updates when a user enters or exits the audience. For each user to export, regardless if the user is being added as part of the backfill, or they're entering/exiting the audience in real-time, it will:

1.  [Create or update the user](https://help.blueshift.com/hc/en-us/articles/115002731294-User-API#User) in Blueshift with the Lytics user field data selected.
2.  Append the `lytics_{audience_name}` field to the profile in Blueshift in order to identify which audience does that user belongs to. If the event indicates the user is leaving the audience in Lytics, this field will be updated in Blueshift.

### Fields

Blueshift supports fields listed in their [user documentation](https://help.blueshift.com/hc/en-us/articles/115002731294-User-API#User). Lytics allows you to map user profile fields with the corresponding Blueshift field as part of the workflow [configuration](#configuration).

### Configuration

Follow these steps to set up and configure an export job for Blueshift in the Lytics platform.

1.  Select **Blueshift** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the Lytics audiences to export.
7.  From the **Email Field** input, select the Lytics field that stores a profile's email address.
8.  (Optional) From the **Field Mapping** input, map all the fields from Lytics to BlueShift by selecting the Lytics field on the left, and its BlueShift destination on the right. By default, no additional fields are sent to BlueShift.
9.  (Optional) From the **Extra Fields** input, select additional fields that you would like to send from Lytics to BlueShift.
10.  (Optional) Select the **Existing Users** checkbox to send users who already exist in the selected Lytics audiences.
11.  Click **Start Export**.

![BlueShift Export Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3ff1edc83d5ff7bf/a61efb6516035bde902718c8/img-0035.png)
