---
title: "Drift"
description: "Drift is a conversational marketing platform with customer conversations at its core. Drift gives you the website engagement metrics, insights, and…"
url: /lytics/drift
---

# Drift

## Drift

## Overview

[Drift](https://www.drift.com/) is a conversational marketing platform with customer conversations at its core. Drift gives you the website engagement metrics, insights, and analytics to continually optimize and improve across both marketing and sales. Integrating Lytics with Drift enables you to import Drift's conversation, message, and customer data to add to your Lytics user profiles.

## Authorization

If you haven't already done so, you will need to set up a Drift account before you begin the process described below.

### Setup Drift App and Webhooks

Note this will only need to be done once per account.

1.  Go to Drift's [developer site](https://dev.drift.com/) and click on **Build your app** or **Create new app** after logging in.\\

![drift\_integration\_create app](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambda5ad9899e3cefe/f2aace2e2678a8d5f3775604/create_app.png)

1.  Click on **OAuth & Scopes**\\

![drift\_integration\_scopes](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am898f4dd836b98b78/84292ba01895af95ffaf2486/scopes.png)

1.  Under the scopes heading, from the **add permissions by scopes** Dropdown, select the following permissions:
    -   **contact\\\_read**
    -   **conversation\\\_read**
2.  Under the **Display Information** tab, set the app name to "Lytics Integration".
3.  Under the **Install to Drift** tab click the **Install App to Drift** button to generate an OAuth Access Token. This will be used to authenticate with Drift.
4.  Copy the **Oauth Access token** that replaces the **Install App to Drift** button.\\

![drift\_integration\_oauth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame86d9c02b88b3303/f2d19645ef7ff32d23b08748/oauth.png)

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select Drift from the list of providers.
2.  Select the **Drift App Key** method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (optional) In the **Description** text box, enter a description for this authorization
5.  In the **App Key** text box, enter your OAuth Access Token.\\

![authorization](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3d8f1962e402df0c/3d84eba16d2fac948d04e1c0/Screenshot_from_2018-12-03_10-49-19.png)

1.  Click **Save Authorization**.

## Import Activity Data

Importing user and activity data from Drift results in new users or existing user profiles supplemented with Drift conversation data. You can use this data to build and refine your existing Lytics audiences to power better, cross-channel campaigns.

### Integration Details

-   **Implementation Type**: Client-side Integrations.
-   **Implementation Technique**: REST API Integration and/or Webhook Integration.
-   **Frequency**: Batch Integration and/or Real-time Integration.
-   **Resulting data**: User Profiles and Content.

This integration uses [Drift's Conversation API](https://devdocs.drift.com/docs/how-to-export-conversations-from-drift) to import conversations. Once the job is started, it will:

1.  [Retrieve conversations](https://devdocs.drift.com/docs/listing-conversations) from Drift
2.  [Retrieve contacts](https://devdocs.drift.com/docs/retrieving-contact) assocatied with each conversation.
3.  [Retrieve messages](https://devdocs.drift.com/docs/retrieve-a-conversations-messages) associated with each conversation.

### Fields

The following fields are included in the default mapping of the drift\_contacts stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| city | city | City | string |
| contact\\\_id | dr\\\_contact\\\_id unique id | Drift Contact ID | string |
| country | country | Country | string |
| email(email) | email unique id | Email Address | string |
| emaildomain(email) | email\\\_domain | Email Domain | string |
| employer | employer | Employer | string |
| epochms(start\\\_date) | dr\\\_start\\\_date | Drift Start Date | number |
| first\\\_name | first\\\_name | First Name | string |
| full\\\_name | name | Full Name | string |
| last\\\_name | last\\\_name | Last Name | string |
| phone | phone | Phone Number | string |
| set(split(tags, ",")) | dr\\\_tags | Contact Tags | \\\[\]string |
| state | state | State | string |
| title | job\\\_title | Job Title | string |

The following fields are included in the default mapping of the drift\_conversations stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| contact\\\_id | dr\\\_contact\\\_id unique id | Drift Contact ID | string |
| conversation\\\_id | dr\\\_conversation\\\_id unique id | Drift Conversation ID | string |
| count(msg\\\_author\\\_type) | dr\\\_contact\\\_msg\\\_ct | Drift Contact Message Count | int |
| count(msg\\\_id) | dr\\\_msg\\\_ct | Total Drift Message Count | int |
| georegion(msg\\\_ip) | region | State/Province | string |
| max(epochms()) | dr\\\_last\\\_msg\\\_ts | Time of Last Drift Message | date |
| min(epochms()) | dr\\\_first\\\_msb\\\_ts | Time of First Drift Message | date |
| msg\\\_city | city | City | string |
| msg\\\_country | country | Country | string |
| msg\\\_postal\\\_code | zip | Zip | string |
| valuect(hourofday()) | dr\\\_hourly | Drift Active Hour of day | map\\\[string\]intsum |
| valuect(hourofweek()) | dr\\\_hourofweek | Drift Active Hour of Week | map\\\[string\]intsum |
| valuect(yymm()) | dr\\\_yymm | Drift Active Months | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import job for Drift in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources)documentation for more information.

1.  Select **Drift** from the list of providers.
2.  Select the import **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (optional) Select the **Keep Updated** checkbox to import continuously.
7.  (optional) In the **Start Date** text box, enter a date to begin importing data from. Please use the format yyyy-mm-dd, e.g. 2021-11-19.
8.  (optional) Select the **Skip Messages** checkbox to skipping importing message details.
9.  (optional) Select the **Skip Contact Details** checkbox to skip importing contact details.

![Drift Import Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1c72bc715f2fc5e5/841fcca22a23b9dae6223a59/Screen_Shot_2021-11-29_at_9.51.53_AM.png)

1.  Click the **Start job** button to start the job

## Configure Webhooks

Lytics highly recommends setting up Drift [event webhooks](https://devdocs.drift.com/docs/webhook-events-1) for real time event capture of your events. This will allow Lytics to get real-time activity data on your Drift integrated conversations.

**Note:** If you are running a continous [import from Drift](#import-activity-data) and using webhooks, some user activity data may be captured twice.

1.  Go to Drift's [developer site](https://dev.drift.com/) and click on **Build your app** or **Create new app** after logging in.\\

![drift\_integration\_create app](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambda5ad9899e3cefe/f2aace2e2678a8d5f3775604/create_app.png)

1.  Click on **OAuth & Scopes**\\

![drift\_integration\_scopes](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am898f4dd836b98b78/84292ba01895af95ffaf2486/scopes.png)

1.  Under the scopes heading, from the **add permissions by scopes** Dropdown, select the following permissions:
    -   **contact\\\_read**
    -   **conversation\\\_read**
2.  Under the **Events** tab:\\

![drift\_integration\_events](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amee5b26082decb3e0/85f0bbe65559d7b84ad64e3e/events.png)

-   Fill in the **request URL** with https://api.lytics.io/api/collect/json/drift?access\_token=YOUR\_API\_TOKEN where YOUR\_API\_TOKEN is your Lytics API token. You can [create a new Lytics API token](/docs/lytics/account-settings#api-tokens) from your Lytics account settings.
-   Under the **Subscribe to events** heading add contact\_identified, new\_message, and new\_conversation.

1.  Under the **Display Information** tab, set the app name to "Lytics Webhooks".\\

![drift\_integration\_name](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9a2f638656a45946/e24849e87e9872dac3d01587/name.png)

1.  Under the **Install to Drift** tab click the **Install App to Drift** button. Lytics will start receiving the selected events from drift\\

![drift\_integration\_install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0a41e2c4554ddaab/f99ccd31013ac839fe93d107/install.png)
