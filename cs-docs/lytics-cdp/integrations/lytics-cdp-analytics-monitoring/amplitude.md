---
title: "Amplitude"
description: "Amplitude is a product analytics service that tracks user events and builds rich cross-sectional and longitudinal profiles. It primarily sources users and…"
url: /lytics/amplitude
---

# Amplitude

## Amplitude

## Overview

[Amplitude](https://amplitude.com/) is a product analytics service that tracks user events and builds rich cross-sectional and longitudinal profiles. It primarily sources users and events from websites and mobile apps. Amplitude provides a powerful UI enabling you to create "cohorts" of users based on event histories.

Integrating Lytics with Amplitude provides cross-channel profile resolution, expedited marketing activation, and Journey Orchestration. Lytics can import the cohorts and events stored in Amplitude, enabling users to further refine targeting logic.

## Authorization

If you haven't already done so, you will need to setup an Amplitude account before you begin the process described below. Follow the instructions on setting up an account and starting a new [project](https://amplitude.zendesk.com/hc/en-us/articles/207108137-Introduction-Getting-Started). Each project has its own unique API key and secret, which you will need to authorize this integration.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Amplitude** from the list of providers.
2.  Select the **Amplitude API Key** method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (optional) In the **Description** text box, enter a description for this authorization
5.  In the **API Key** field, enter your Amplitude API username.
6.  In the **API Secret** field, enter your Amplitude API password.
7.  Click **Save Authorization**.\\

![Amplitude Auth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd7194b3e020895da/e5430ab5f0818a8ec9c0273d/image-42d63e18.png)

## Import Cohorts

Importing cohorts from Amplitude results in new and/or updates to existing user profiles in your Lytics account containing fields from Amplitude. Once imported, Lytics can use this Amplitude data to inform its ML-based enrichments, and this data enables you to target your multi-channel campaigns orchestrated by Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration one-time or daily continuous updates where the time of day can be configured.
-   **Resulting Data**: Full user profiles from Amplitude for selected Cohorts.

This integration utilizes the [Amplitude Behavioral Cohorts API](https://amplitude.zendesk.com/hc/en-us/articles/206214068-Behavioral-Cohorts-API) to retrieve data. On each run of the job, it will [request a list of cohorts](https://amplitude.zendesk.com/hc/en-us/articles/206214068-Behavioral-Cohorts-API#listing-all-cohorts), and for each cohort selected by the user during the configuration step, it will:

1.  [Request a single cohort](https://amplitude.zendesk.com/hc/en-us/articles/206214068-Behavioral-Cohorts-API#phase-1-request-a-cohort) for download.
2.  [Poll the request status](https://amplitude.zendesk.com/hc/en-us/articles/206214068-Behavioral-Cohorts-API#phase-2-poll-request-status) for completion.
3.  Once completed, [download the cohort file](https://amplitude.zendesk.com/hc/en-us/articles/206214068-Behavioral-Cohorts-API#phase-3-download-file).
4.  Ingest the data from the cohort file into the Lytics data stream amplitude\_cohorts.

### Fields

The following fields are included in the default mapping of the amplitude\_cohorts stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| amplitude\\\_id | amplitude\\\_id unique id | Amplitude ID | string |
| carrier | amplitude\\\_carrier | Amplitude Carrier | string |
| city | city | City | string |
| country | country | Country | string |
| device | amplitude\\\_device | Amplitude Device | string |
| device\\\_type | amplitude\\\_device\\\_type | Amplitude Device Type | string |
| dma | amplitude\\\_dma | Amplitude DMA | string |
| language | language | Language | string |
| library | amplitude\\\_library | Amplitude Library | string |
| map(cohort\\\_id, cohort\\\_membership) | amplitude\\\_cohort\\\_ids | Amplitude Cohort IDs | map\\\[string\]bool |
| map(cohort\\\_name, cohort\\\_membership) | amplitude\\\_cohort\\\_names | Amplitude Cohort Names | map\\\[string\]bool |
| os | amplitude\\\_os | Amplitude OS | string |
| platform | amplitude\\\_platform | Amplitude Platform | string |
| region | region | State/Province | string |
| region | state | State | string |
| start\\\_version | amplitude\\\_start\\\_version | Amplitude Start Version | string |
| todate(last\\\_computed) | amplitude\\\_last\\\_computed | Amplitude Cohort Last Computed time | date |
| user\\\_id | amplitude\\\_user\\\_id unique id | Amplitude User ID | string |
| version | amplitude\\\_version | Amplitude Version | string |

### Configuration

Follow these steps to set up and configure an import job for Amplitude in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources)documentation for more information.

1.  Select **Amplitude** from the list of providers.
2.  Select the **Import Cohorts** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.\\

![Amplitude Cohort Import Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambe72f71e558cb67d/b33142de0695d63324c6ca69/image-05d8450b.png)

1.  (Optional) From the **Amplitude ID Field** input, select the field name that contains the user's Amplitude ID. If left blank, cohorts will only be added to profiles.
2.  (Optional) From the **Amplitude Cohort Names Field** input, select the field name that contains the user's cohort membership. If left blank, cohorts will only be added to profiles.
3.  (Optional) From the **Cohorts** input, select the cohorts you want to import. If left blank, all cohorts will be imported.
4.  (Optional) Select the **Keep Updated** checkbox, to import cohorts daily.
5.  (Optional) From the **Time of Day** input, select time of day to start import.
6.  (Optional) From the **Timezone** input, select timezone for time of day.
7.  Click **Start Import**.

## Import Events

Importing events from Amplitude enables you to refine audience definitions within Lytics. Beyond just basic event triggers, Lytics can apply its ML-powered [Behavioral Scores](/docs/lytics/descriptive-predictive-modeling) and [Content Affinities](/docs/lytics/affinities) to enhance user profiles.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration one-time or daily continuous updates.
-   **Resulting Data**: User Fields and Raw Event Data (see additional fields).

This integration utilizes the [Amplitude Export API](https://amplitude.zendesk.com/hc/en-us/articles/205406637-Export-API-Export-Your-Project-s-Event-Data) to retrieve event data. On each run of the job, it will:

1.  [Request an export](https://amplitude.zendesk.com/hc/en-us/articles/205406637-Export-API-Export-Your-Project-s-Event-Data#export-api-parameters) of zipped event data in a JSON format.  
    \\

**NOTE**: If the user opted to backfill events, on the first run of the job it will request all events from the time frame selected by the user. Otherwise the import requests a file of all events between the current and previous run.

1.  Ingest the data from the JSON files into the Lytics data stream amplitude\_events.

#### Fields

The following fields are included in the default mapping from the amplitude\_events stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| $insert\\\_id | amplitude\\\_insert\\\_id | Amplitude Insert Id | string |
| $schema | amplitude\\\_schema | Amplitude Schema | int |
| adid | amplitude\\\_adid | Amplitude Adid | string |
| amplitude\\\_attribution\\\_ids | amplitude\\\_attribution\\\_ids | Amplitude Amplitude Attribution IDs | string |
| amplitude\\\_event\\\_type | amplitude\\\_event\\\_type | Amplitude Amplitude Event Type | string |
| amplitude\\\_id | amplitude\\\_id unique id | Amplitude ID | string |
| app | amplitude\\\_app | Amplitude App | int |
| city | city | City | string |
| country | country | Country | string |
| data | amplitude\\\_data | Amplitude Data | string |
| device\\\_brand | amplitude\\\_device\\\_brand | Amplitude Device Brand | string |
| device\\\_carrier | amplitude\\\_device\\\_carrier | Amplitude Device Carrier | string |
| device\\\_family | amplitude\\\_device\\\_family | Amplitude Device Family | string |
| device\\\_id | amplitude\\\_device\\\_id | Amplitude Device ID | string |
| device\\\_manufacturer | amplitude\\\_device\\\_manufacturer | Amplitude Device Manufacturer | string |
| device\\\_model | amplitude\\\_device\\\_model | Amplitude Device Model | string |
| device\\\_type | amplitude\\\_device\\\_type | Amplitude Device Type | string |
| dma | amplitude\\\_dma | Amplitude Dma | string |
| event\\\_id | amplitude\\\_event\\\_id | Amplitude Event ID | int |
| idfa | amplitude\\\_idfa | Amplitude Idfa | string |
| is\\\_attribution\\\_event | amplitude\\\_is\\\_attribution\\\_event | Amplitude Is Attribution Event | bool |
| language | language | Language | string |
| library | amplitude\\\_library | Amplitude Library | string |
| location\\\_lat | amplitude\\\_location\\\_lat | Amplitude Location lat | number |
| location\\\_lng | amplitude\\\_location\\\_lng | Amplitude Location lng | number |
| match("event\\\_properties.") | amplitude\\\_event\\\_properties | Amplitude Event Properties | map\\\[string\]string |
| match("group\\\_properties.") | amplitude\\\_group\\\_properties | Amplitude Group Properties | map\\\[string\]string |
| match("user\\\_properties.") | amplitude\\\_user\\\_properties | Amplitude User Properties | map\\\[string\]string |
| os\\\_name | amplitude\\\_os\\\_name | Amplitude OS Name | string |
| os\\\_version | amplitude\\\_os\\\_version | Amplitude Os Version | string |
| paying | amplitude\\\_paying | Amplitude Paying | bool |
| platform | amplitude\\\_platform | Amplitude Platform | string |
| region | region | State/Province | string |
| region | state | State | string |
| sample\\\_rate | amplitude\\\_sample\\\_rate | Amplitude Sample Rate | string |
| session\\\_id | amplitude\\\_session\\\_id | Amplitude Session ID | string |
| todate("2006-01-02 15:04:05.000000", client\\\_event\\\_time) | amplitude\\\_client\\\_event\\\_time | Amplitude Client Event Time | date |
| todate("2006-01-02 15:04:05.000000", client\\\_upload\\\_time) | amplitude\\\_client\\\_upload\\\_time | Amplitude Client Upload Time | date |
| todate("2006-01-02 15:04:05.000000", event\\\_time) | amplitude\\\_event\\\_time | Amplitude Event Time | date |
| todate("2006-01-02 15:04:05.000000", server\\\_upload\\\_time) | amplitude\\\_server\\\_upload\\\_time | Amplitude Server Upload Time | date |
| todate("2006-01-02 15:04:05.000000", user\\\_creation\\\_time) | amplitude\\\_user\\\_creation\\\_time | Amplitude User Creation Time | date |
| user\\\_id | amplitude\\\_user\\\_id unique id | Amplitude User ID | string |
| valuect(event\\\_type) | amplitude\\\_events | Amplitude Event Count | map\\\[string\]intsum |

#### Additional fields

The following fields are not included in the default mapping, reach out to the [customer support team](https://support.lytics.com/) to add them to the mappings for your account.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| server\\\_received\\\_time | amplitude\\\_server\\\_received\\\_time | Amplitude Server Received Time | date |
| processed\\\_time | amplitude\\\_processed\\\_time | Amplitude Processed Time | date |
| version\\\_name | amplitude\\\_version\\\_name | Amplitude Version Name | string |
| start\\\_version | amplitude\\\_start\\\_version | Amplitude Start Version | string |
| uuid | amplitude\\\_uuid | Amplitude UUID | string |
| ip\\\_address | amplitude\\\_ip\\\_address | Amplitude IP Address | string |

### Configuration

Follow these steps to set up and configure an import job for Amplitude in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources)documentation for more information.

1.  Select **Amplitude** from the list of providers.
2.  Select the **Import Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/amplitude/authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.\\

![image](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambfd47ebc1e115a95/3fc7e011c297c52794dd208c/image-8790f3d2.png)

1.  In the **Backfill Days** numeric field, enter how many days in the past do you want to import events (default is 90 days). Select 0 if you want to start from now on.
2.  (Optional) Toggle **Show Advanced Options**. Select the **Keep Updated** checkbox to import events hourly.
3.  Click **Start Import**.
