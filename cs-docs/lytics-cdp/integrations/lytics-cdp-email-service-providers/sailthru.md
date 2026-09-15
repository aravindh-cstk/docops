---
title: "Sailthru"
description: "Sailthru"
url: /lytics/sailthru
uid: bltdbda2a28574913de
---

# Sailthru

## Sailthru

## Overview

[Sailthru](https://www.sailthru.com/) is a marketing automation software that enables you to deliver customer-centric email, web, and mobile experiences.

Connect Sailthru and Lytics to improve the personalization and precision of your email marketing. Lytics combines behavioral data from your other marketing tools so you can create audiences based on how your users interact with your brand across channels. Use these custom audiences to power your next Sailthru campaign.

## Authorization

If you haven't already done so, you will need to set up a Sailthru account before you begin the process described below. The API Key and API Secret are unique to your company’s Sailthru account and can be found on the [API & Postbacks Settings page](https://my.sailthru.com/settings/api_postbacks) in My Sailthru.

If you are new to creating authorizations in Lytics, see the [Authorizations Dashboard](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Sailthru** from the list of providers.
2.  Select the **Sailthru API Key** method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (Optional) In the **Description** text box, enter a description for this authorization
5.  Enter your API Key credential.
6.  Enter your API Secret credential.
7.  Click **Save Authorization**.

## Import Audiences

Import your Sailthru lists into Lytics to leverage this user data to build behavioral, cross-channel audiences in Lytics.

### Integration Details

-   **Implementation Type**: [Server-side](/docs/lytics/integrated-marketing-tools).
-   **Implementation Technique**:

[REST API](/docs/lytics/integrated-marketing-tools) and [File based transfer](/docs/lytics/integrated-marketing-tools).

-   **Frequency**: [Batch](/docs/lytics/integrated-marketing-tools) daily.
-   **Resulting data**: [User profiles](/docs/lytics/integrated-marketing-tools) and

[User fields](/docs/lytics/integrated-marketing-tools).

This integration utilizes the [Sailthru API](https://getstarted.sailthru.com/developers/api-basics/introduction/). Once started the job will:

1.  Create a Sailthru export [job](https://getstarted.sailthru.com/developers/api/job) of the List to import.
2.  Wait while the Sailthru job runs. Sailthru will write the contents of the list to a CSV file. When the file is written, the job completes and returns a link for the workflow to download the contents.
3.  The workflow will download the file, parse it, and the user fields will be ingested into the `sailthru_users` stream.
4.  If **Keep Updated** is selected in the [configuration](#configuration), steps 1 through 3 will repeat daily at the time specified by **Time of Day**.

### Fields

The following fields are included in the default mapping of the `sailthru_users` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| Email Hash | hashed\\\_email `unique id` | Email Hash | string |
| Profile Id | st\\\_ids `unique id` | Sailthru: Distinct ID | \\\[\]string |
| Geolocation City | city | City | string |
| Geolocation Country | country | Country | string |
| Last Click | email\\\_lastclick\\\_ts | Email: Last Time Email Clicked | date |
| Last Open | email\\\_lastopen\\\_ts | Email: Last Time Email Opened | date |
| Optout Time | email\\\_lastopt\\\_out\\\_ts | Email: Last Time Opted-out | date |
| Last Pageview | email\\\_lastpageview\\\_ts | Email: Last Pageview Time | date |
| Domain | emaildomain | Email Domain | string |
| Geolocation Zip | postal\\\_code | Postal Code | string |
| Clicks | st\\\_click\\\_ct | Sailthru: Click Count | int |
| Profile Created Date | st\\\_created\\\_ts | Sailthru: Profile Created Date | date |
| Email Status | st\\\_email\\\_status | Sailthru: Email Status | string |
| Engagement | st\\\_engagement | Sailthru: Engagement | string |
| Opens | st\\\_open\\\_ct | Sailthru: Open Count | int |
| source\\\_list | st\\\_source\\\_list | Sailthru: Source List | \\\[\]string |
| Pageviews | st\\\_view\\\_ct | Sailthru: Viewed Count | int |
| Geolocation State | state | State | string |

### Configuration

Follow these steps to set up and configure an import job for Sailthru in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Sailthru** from the list of providers.
2.  Select the **Import Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/sailthru/authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job. ![sailthru import configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amde4e9deef29b588e/7b3c0973c61ba544a29d756f/img-0266.png)
7.  From the **List** input, select the Sailthru list to import.
8.  (Optional) From the **Hash Algorithm** input, select sailthru hashes email addresses when sending to Lytics. Select the hash algorithm to use to hash the emails.
9.  (Optional) Select the **Keep Updated** checkbox to continuously run this import.
10.  (Optional) From the **Time of Day** input, select time of day to start import each day.
11.  (Optional) From the **Timezone** input, select a timezone for Time of Day.
12.  Click **Start Import**.

## Export Audiences

Export Lytics audiences to enrich your Sailthru campaigns with cross-channel data, behavioral scores, content affinities, and more.

### Integration Details

-   **Implementation Type**: [Server-side](/docs/lytics/integrated-marketing-tools).
-   **Implementation Technique**:

[REST API](/docs/lytics/integrated-marketing-tools) with [audience triggers](/docs/lytics/integrated-marketing-tools).

-   **Frequency**:

[Real-time](/docs/lytics/integrated-marketing-tools).

-   **Resulting data**:

A Sailthru list containing users currently in the Lytics audience. The name of Sailthru audience will be "Lytics " followed by the audience name that is being exported (e.g. _Lytics All_). Any [user fields](/docs/lytics/integrated-marketing-tools) selected in the [configuration](#configuration) will be sent and associated with the user in Sailthru.

This integration utilizes the [Sailthru API](https://getstarted.sailthru.com/developers/api-basics/introduction/) to send user data. Once the export is started the job will:

1.  Make a scan of the current members of the Lytics audience and send them to Sailthru via the `/job` [endpoint](https://getstarted.sailthru.com/developers/api/job/). If a corresponding audience does not yet exist in Sailthru, one will be created.
2.  The job will listen for changes to the Lytics audience being exported. Users are sent to Sailthru in batches via the `/job` endpoint every minute, or when the batch size reaches 1000, whichever happens first.
3.  When new users enter the audience, they will be added to the corresponding Sailthru audience.
4.  When users leave the audience, they will be removed from the Sailthru audience.

### Fields

By default, Lytics exports the following field to Sailthru.

| Lytics User Field | Description | Sailthru Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |

### Configuration

Follow these steps to set up and configure an export job for Sailthru in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Sailthru** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/sailthru/authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job. ![sailthru exportlist configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am415c424a58ed0bf3/1c870139ed97ab2a5f6d002d/img-0267.png)
8.  From the **Email Field** input, select the field name that contains the user's email.
9.  (Optional) From the **Fields to Export** input, select a list of user fields to export.
10.  Click **Start Export**.

## Export Audiences (Lifecycle Optimizer)

Sailthru [Lifecycle Optimizer](https://getstarted.sailthru.com/lo/lifecycle-optimizer/) allows you to automate email campaigns based on user events, such as entering an audience. By exporting your Lytics audiences in real-time, you can activate automated interactions with your users immediately as changes to their profiles are processed.

### Integration Details

-   **Implementation Type**: [Server-side](/docs/lytics/integrated-marketing-tools).
-   **Implementation Technique**:

[REST API](/docs/lytics/integrated-marketing-tools) with [audience triggers](/docs/lytics/integrated-marketing-tools) or other

-   **Frequency**:

[Real-time](/docs/lytics/integrated-marketing-tools).

-   **Resulting data**:

A Sailthru list containing users currently in the Lytics audience. The name of Sailthru audience will be "Lytics " followed by the audience name that is being exported (e.g. _Lytics All_). Any [user fields](/docs/lytics/integrated-marketing-tools) selected in the [configuration](#configuration) will be sent and associated with the user in Sailthru.

This integration utilizes the [Sailthru API](https://getstarted.sailthru.com/developers/api-basics/introduction/) to send user data. Once the export is started the job will:

1.  Make a scan of the current members of the Lytics audience and send them to Sailthru via the `/user` [endpoint](https://getstarted.sailthru.com/developers/api/user/). If a corresponding audience does not yet exist in Sailthru, one will be created.
2.  The job will listen for changes to the Lytics audience being exported. Users are sent to Sailthru one at a time via the `/user` endpoint.
3.  When new users enter the audience, they will be added to the corresponding Sailthru audience.
4.  When users leave the audience, they will be removed from the Sailthru audience.

### Fields

By default, Lytics exports the following fields to Sailthru

| Lytics User Field | Description | Sailthru Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |

### Set up Lifecycle Optimizer

Before configuring an export job in Lytics, you will need to set up Lifecycle Optimizer in your Sailthru account.

1.  Login to your Sailthru account and navigate to **Communications** > **Lifecycle Optimizer**.
2.  Set up a Lifecycle Optimizer flow schedule by declaring what **Action** should happen when a user joins a specified list (only **List Joined** option will work in the **Entry** part of the Lifecycle Optimizer flow).![Sailthru Lifecycle Optimizer](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am180762c3202fd13e/2d440525f72b4c8f91f22650/img-0268.png)
3.  The list should be named `Lytics` followed by the audience name you want to export from Lytics. Either create a new list corresponding to the audience from the **Users** > **Lists** or use an existing list.

See the Sailthru [Lifecycle Optimizer](https://getstarted.sailthru.com/email/lo/lifecycle-optimizer/) documentation for more information.

### Configuration

Follow these steps to set up and configure an export job for Sailthru in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Sailthru** from the list of providers.
2.  Select the **Export Audiences (Lifecycle Optimizer)** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/sailthru/authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job. ![sailthru exportlistslo configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0665f6e70195bab1/220fae99c0d1451e53303981/img-0269.png)
8.  (Optional) Select the **Existing Users** checkbox to add users who already exist in the selected Lytics audiences.
9.  From the **Email Field** input, select the field name that contains the user's email.
10.  (Ooptional) From the **Fields to Export** input, select a list of user fields to export.
11.  Click **Start Export**.

## Including Identifiers in Links

You may want to pass a unique Sailthru identifier from links within your email to help enable cross-channel [identity resolution](/documentation/product/features/user-profiles/profiles-and-identity-resolution). This will help Lytics identify users across data streams and merge their email and web activity.

The easiest way to pass a unique identifier from Sailthru click-through links into Lytics is to modify your email template to include a hashed `email` in each URL in the email being sent.

#### Requirements

The Lytics [JavaScript Tag](/docs/developers/sdks/lytics/web/lytics-javascript-tag) must be installed on your site, and an import will need to be active with `userId` set for import (default state). In addition, a line of LQL ([Lytics Query Language](/reference/query)) will need to be added to the Sailthru query in order to map the hashed email field to the user's profile. For assistance contact your Lytics representative or [Lytics support](mailto:support@lytics.com).

For example:

```
qs(url, "email_hash") as hashed_email SHORTDESC "Hashed Email"
```

#### Add encrypted email to Sailthru links

1.  Ensure the Lytics Sailthru import **Hash Algorithm** option is set to 'SHA-256' (default).

1.  Log in to [Sailthru](https://www.sailthru.com/) and navigate to **Communications > Templates** then select your email template.

1.  Select the **Advanced** tab.

1.  Copy `email_hash={sha256(email)}` into the **Auto-Append Link Parameters** field. ![Screenshot 2018-11-28 Template Editor](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame08a62416e265e90/72c7262140a77a0ff636842a/img-0270.png)

Now all email clicks will pass the encrypted SHA256 `email` to your website when users click the links, and Lytics will map the encrypted email to the user's profile.

```
www.yourcompanyURL.com/email-campaign-page?email_hash=hashed-email-here-for-each-user
```
