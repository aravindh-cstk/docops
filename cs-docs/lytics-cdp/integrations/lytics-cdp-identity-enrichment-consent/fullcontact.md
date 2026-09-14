---
title: "FullContact"
description: "FullContact is an enrichment service that can add key demographic information to your known audiences, including user interests, age, and location. By…"
url: /lytics/fullcontact
---

# FullContact

## FullContact

## Overview

[FullContact](https://www.fullcontact.com/) is an enrichment service that can add key demographic information to your known audiences, including user interests, age, and location. By utilizing common online identifiers (e.g. email, Twitter handle), FullContact provides profile enrichments allowing you to create more refined and effective audiences.

Use this integration to combine FullContact user profiles with behavioral user data and content affinities powered by data science on Lytics. Building rich, 360 degree views of your customers is an essential step in building truly personalized marketing campaigns.

The FullContact integration supports one job type for enriching audiences, but you can choose the identifying field to enrich the user based off of email address, phone number, or Twitter handle.

## Authorization

If you haven't already done so, you will need to setup a FullContact account before you begin the process described below.

To authorize a FullContact workflow, you must provide a FullContact API key so Lytics can communicate with FullContact's APIs. For instructions on how to create an API key, refer to [FullContact's API key documentation](https://support.fullcontact.com/portal/kb/articles/getting-started-with-enrich-api).

**Note:** FullContact will only give your API key once. If it is lost you will have to generate a new one.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **FullContact** from the list of providers.
2.  Select the FullContact method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (optional) In the **Description** text box, enter a description for this authorization
5.  In the **API Key** text box, enter your API Key credential.
6.  Click **Save Authorization**.

![Screenshot from 2019-05-24 17-20-59](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amed5a793733ce1404/bc2df426b91cfa29510389bf/Screenshot_from_2019-05-24_17-20-59.png)

## Enrich Audiences

The FullContact enrich audiences job provides additional demographic and social data for enriching user profiles. This can be done across all profiles or for specific audiences, which is often referred to as "selective" enrichment.

### Integration Details

-   **Implementation Type**: <<glossary:Server-side Integration>>.
-   **Implementation Technique**: REST <<glossary:API Integration>> with <<glossary:Audience Trigger Integration>>.
-   **Frequency**: <<glossary:Real-time Integration>>, with an optional one-time <<glossary:Backfill>> of the audience after setup.
-   **Resulting Data**: New, enriched <<glossary:User Field>>s on existing <<glossary:User Profile>>s.

This integration utilizes the [FullContact API](https://api.fullcontact.com/v2/person.json) to retrieve user profile data. Each run of the job will proceed as follows:

1.  User enters an audience causing a trigger event.
2.  User is sent to FullContact for enrichment using [email address](https://docs.fullcontact.com/?shell#lookup-by-email), [phone number](https://docs.fullcontact.com/?shell#lookup-by-phone), or [Twitter user ID](https://docs.fullcontact.com/?shell#lookup-by-twitter) as the primary lookup ID depending on the selection of the user.
3.  User profile is enriched with data from FullContact and new data is ingested into the fullcontact\_users data stream.

### Fields

The following fields are included in the default mapping for the fullcontact\_users stream.

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| age |  | age | Age Range | int |
| age\\\_range |  | age\\\_range | Age Range | string |
| confidence |  | fc\\\_confidence | FC Confidence | string |
| email(email) |  | email unique id | Email Address | string |
| emails.Hash.MD5 | IF ( EXISTS emails.Hash.MD5 ) | email\\\_hash\\\_md5 | Hashed Email Address (MD5) | string |
| emails.Hash.SHA256 | IF ( EXISTS emails.Hash.SHA256 ) | email\\\_hash\\\_sha256 | Hashed Email Address (SHA 256) | string |
| facebook\\\_photo |  | fb\\\_photo | Facebook Photo | string |
| facebook\\\_username |  | fb\\\_username | Facebook Username | string |
| family\\\_name |  | last\\\_name | Last Name | string |
| full\\\_name |  | name | Name | string |
| gender |  | gender | Gender | string |
| given\\\_name |  | first\\\_name | First Name | string |
| interests |  | fc\\\_interests | FC Interests | string |
| location |  | location | Location | string |
| twitter\\\_photo |  | tw\\\_photo | Twitter Photo | string |
| twitter\\\_username |  | tw\\\_uid unique id | Twitter User ID | string |

### Configuration

Follow these steps to set up and configure an enrich job for FullContact in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **FullContact** from the list of providers.
2.  Select one of the **Import Enrichment Data** job types. There are three options: **Email**, **Phone**, and **Twitter**. Select whichever you would like to use as the primary identifier of your users to enrich.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to enrich.
7.  Complete the configuration steps for your job.
8.  Based on the job type you selected:
    -   In the **Email Field** dropdown, select the Lytics user field containing the user's email address.
    -   In the **Phone Field** dropdown, select the Lytics user field containing the user's phone number.
    -   In the **Twitter Field** dropdown, select the Lytics user field containing the user's Twitter ID.
9.  (Optional) Select the **Enrich Existing Users** checkbox, to enrich existing users in the audience. Without this option selected, only users who enter the audience after the job is started will be enriched.
10.  Click **Start Job**.

![FullContact](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambd14da36d25918fa/a8d423abee22aa18c11dcb9e/Screenshot_from_2019-05-24_18-50-11.png)
