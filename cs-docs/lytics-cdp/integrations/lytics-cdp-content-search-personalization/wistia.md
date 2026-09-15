---
title: "Wistia"
description: "Wistia"
url: /lytics/wistia
uid: blt2bd8dceba89cc5d4
---

# Wistia

## Wistia

## Overview

[Wistia](https://wistia.com/) is a video-hosting platform for businesses. Wistia provides advanced analytics such as heatmaps, engagement graphs, and A/B testing, as well as lead generation tools inline annotations including email capture and marketing CTAs to engage and convert customers during their video experience.

Importing Wistia video activity will enrich Lytics user profiles with video viewing behavior and conversion data. This data can inform targeting for your cross-channel marketing Experiences with Lytics Journey Canvas or stand-alone ads, email, web, or mobile campaigns.

## Authorization

If you haven't already done so, you will need to setup a Wistia account before you begin the process described below. To access your Wistia data, you'll need to get an API token from Wistia. Follow the directions in the [Wistia Data API docs](https://wistia.com/support/developers/data-api#getting) to create a new API token for Lytics to use.

**Note:** You will need to select both **Read all project and video data** and **Read detailed stats** permissions for the key.

![wistia key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7174e0a83f79b939/fd22f97a3d9ff0ccc7416afc/img-0355.png)

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Wistia** from the list of providers.
2.  Select the **Wistia** method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your **API Token**.
6.  Click **Save Authorization**.

![wisita authorization config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc007afd1c0d7dff1/f5ce5b237255678b793c6680/img-0356.png)

## Import Activity

Import Wistia video activity to add video viewing behavior data to your user profiles in Lytics. Once imported, this data enables you to target users based on their video viewing habits in your multi-channel marketing experiences orchestrated by Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Hourly Batch Integration.
-   **Resulting data**: New User Profiles for Wistia users not already tracked in Lytics. Or new User Fields containing video activity data for users profiles that already exist in Lytics.

This integration utilizes the [Wistia Stats API](https://wistia.com/support/developers/stats-api) to retrieve event data:

1.  [Request activity data](https://wistia.com/support/developers/stats-api#events) from the last hour.
2.  Calculate the time viewed for viewing session.
3.  Ingest the data in the Lytics data stream `wistia_activity`.

### Fields

The following fields are included in the default mapping of the `wistia_activity` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| country | wistia\\\_country | Wistia Last Viewed Country | string |
| region | wistia\\\_state | Wistia Last Viewed State | string |
| duration\\\_viewed | wistia\\\_duration\\\_viewed | Wistia Last Viewed Duration | number |
| media\\\_name | wistia\\\_media\\\_names | Wistia Viewed Media Names | \\\[\]string |
| conversion.last\\\_name | last\\\_name | Last Name | string |
| city | wistia\\\_city | Wistia Last Viewed City | string |
| media\\\_id, percent\\\_viewed | wisita\\\_media\\\_percent | Wisita Viewed Media Percent | map\\\[string\]number |
| conversion.first\\\_name | first\\\_name | First Name | string |
| org | wistia\\\_org | Wistia Last Viewed Org | string |
| percent\\\_viewed | wistia\\\_percent\\\_viewed | Wistia Last Viewed Percent | number |
| media\\\_id | wisita\\\_media\\\_ids | Wistia Viewed Media IDs | \\\[\]string |
| media\\\_id, duration\\\_viewed | wistia\\\_media\\\_duation | Wistia Viewed Media Duration | map\\\[string\]number |
| visitor\\\_key | wistia\\\_visitor\\\_key `unique id` | Wistia Visitor Key | string |
| conversion\\\_data.email | email `unique id` | Email Address | string |

### Configuration

Follow these steps to set up an import job for Wistia. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Wistia** from the list of providers.
2.  Select the **Import Activity Data** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (Optional) Enter the **Start Date** to start importing Wistia activity data from this date. Please use the format `yyyy-mm-dd` (e.g. 2021-01-25). If left empty, only new viewing activity will be pulled in.
7.  (Optional) Enter the **End Date** to stop importing Wistia activity data from this date. Please use the format `yyyy-mm-dd` (e.g. 2021-12-19). If left empty, only new viewing activity will be imported from the current date.
8.  Select **Keep Updated** to continually pull in activity data. This will take priority over the 'End Date' configuration.
9.  Click **Start Import**.

![wistia import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6a11f4257066deac/f299914f9ec0bb1d98c6b3ca/img-0357.png)
