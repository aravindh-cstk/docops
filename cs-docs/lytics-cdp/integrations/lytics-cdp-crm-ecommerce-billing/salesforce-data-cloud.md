---
title: "Salesforce Data Cloud"
description: "Salesforce Data Cloud (formerly Customer Data Platform / CDP) is Salesforce's customer data platform for unifying data across Salesforce clouds and…"
url: /lytics/salesforce-data-cloud
---

# Salesforce Data Cloud

## Salesforce Data Cloud

## Overview

[Salesforce Data Cloud](https://www.salesforce.com/data/) (formerly Customer Data Platform / CDP) is Salesforce's customer data platform for unifying data across Salesforce clouds and external systems into a single, queryable customer profile.

Integrating Lytics with Salesforce Data Cloud lets you exchange profile, segment, and insight data between the two platforms. You can import unified Individual profiles, segment membership, and calculated insights from Data Cloud into Lytics to enrich behavioral profiles, and you can export Lytics audiences and user fields back to Data Cloud either in real time via the Ingestion API or in bulk via Google Cloud Storage for zero-copy ingestion.

## Authorization

Lytics connects to Salesforce Data Cloud using the **JWT Bearer Token** flow against an [External Client App](https://help.salesforce.com/s/articleView?id=sf.external_client_apps_overview.htm) in your Salesforce org. There is no browser-based OAuth flow for Data Cloud — JWT is required.

Two authorization methods are available, one for production orgs and one for sandbox orgs. Both use the same configuration fields; only the Salesforce login host differs.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

### Prerequisites

Before creating an authorization in Lytics, you must set up an External Client App in Salesforce that is enabled for Data Cloud and grant the connecting user access to it.

1.  **Generate an RSA key pair**:

```
# Generate a private key
   openssl genpkey -algorithm RSA -out sfdc_private_key.pem -pkeyopt rsa_keygen_bits:2048

   # Create a self-signed X.509 certificate
   openssl req -new -x509 -key sfdc_private_key.pem -out sfdc_cert.pem -days 365 -subj "/CN=Lytics Data Cloud JWT"
```

1.  **Create an External Client App in Salesforce**:
    -   Go to **Setup** > **App Manager** > **New External Client App**.
    -   Fill in the basic info (name, contact email).
    -   Check **Enable OAuth Settings**.
    -   Set the callback URL to any valid URL (e.g. https://login.salesforce.com/services/oauth2/callback). This value is not used by JWT Bearer Token authentication but is required by Salesforce.
    -   Select the following OAuth scopes:
        -   **Manage user data via APIs (api)**
        -   **Perform requests at any time (refresh\\\_token, offline\\\_access)**
        -   **Perform ANSI SQL queries on Data Cloud data (cdp\\\_query\\\_api)**
        -   **Manage Data Cloud Ingestion API data (cdp\\\_ingest\\\_api)**
        -   **Manage Data Cloud profile data (cdp\\\_profile\\\_api)**
        -   **Manage Data Cloud Calculated Insight data (cdp\\\_calculated\\\_insight\\\_api)**
        -   **Manage Data Cloud segment membership (cdp\\\_segment\\\_api)**
    -   Check **Use digital signatures** and upload the sfdc\_cert.pem certificate file you created above.
    -   Click **Save**.
2.  **Pre-authorize users for the app**:
    -   Open the External Client App you created and click **Manage**.
    -   Click **Edit Policies**.
    -   Under **Permitted Users**, select **Admin approved users are pre-authorized**.
    -   Click **Save**.
    -   Scroll down to the **Profiles** section and click **Manage Profiles**.
    -   Select the profile(s) that include the Salesforce user you want to authorize (e.g. **System Administrator**).
    -   Click **Save**.
3.  **Copy the Consumer Key**:
    -   In the app detail page, copy the **Consumer Key** value.

### Create the Authorization in Lytics

1.  Select **Salesforce Data Cloud** from the list of providers.
2.  Select the **JWT Bearer Token** method (or **JWT Bearer Token (Sandbox)** for sandbox orgs).
3.  Enter the **Consumer Key** from your Salesforce External Client App.
4.  Enter the **Salesforce Username** of the pre-authorized user.
5.  Enter your **My Domain URL** — the org's My Domain login URL (for example, https://yourorg.my.salesforce.com, or https://yourorg--sandbox.sandbox.my.salesforce.com for a sandbox). You can find this in Salesforce under **Setup** > **My Domain**.
6.  Paste the contents of your **Private Key** file (sfdc\_private\_key.pem).
7.  Enter a **Label** to identify your authorization.
8.  (Optional) Enter a **Description** for further context on your authorization.
9.  Click **Save Authorization**.

**Note:** As of the Salesforce Spring '26 release, Salesforce no longer redirects the generic login.salesforce.com / test.salesforce.com hosts to your org. The JWT token exchange must be sent directly to your org's My Domain URL, so this field is now required. If you have an existing Salesforce Data Cloud JWT authorization that was created before this field existed, re-open it and save it with your My Domain URL, otherwise the token exchange will fail.

## Import Data Cloud Segment Membership

This is the default import. It pulls unified Individual profile data along with segment membership and contact-point details (email, phone, and address) from Salesforce Data Cloud into Lytics. The Individual data populates user profile fields, while contact points and segment events are written to additional streams that can be joined into the user profile.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration, configurable hourly, daily, weekly, or monthly.
-   **Resulting data**: User Profiles populated from Data Cloud Individuals, with contact-point and segment-membership events available as additional streams.

This integration uses the Data Cloud [Query API](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_query_v2.htm) to retrieve data from the standard unified Data Model Objects (DMOs):

-   UnifiedIndividual — the core profile DMO
-   UnifiedContactPointEmail
-   UnifiedContactPointPhone
-   UnifiedContactPointAddress
-   Segment membership records

Each DMO is written to its own Lytics stream, and a default LQL query maps the streams into the user entity by email or hashed email.

### Streams and Fields

Each run of this import writes to up to five streams. Default field mappings are listed below; you can customize the LQL queries after the import is created if you need to map additional DMO fields.

#### sdc\_individuals

Maps the unified Individual DMO to user profile fields.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| sdc\\\_individual\\\_id | sdc\\\_individual\\\_ids unique id | Data Cloud: Individual IDs | \\\[\]string |
| sdc\\\_email | email unique id | Email | string |
| sdc\\\_email | email\\\_domain | Email Domain | string |
| sdc\\\_email | email\\\_sha256 | SHA-256 hash of email | string |
| sdc\\\_first\\\_name | first\\\_name, sdc\\\_first\\\_name | First Name | string |
| sdc\\\_last\\\_name | last\\\_name, sdc\\\_last\\\_name | Last Name | string |
| sdc\\\_city | city, sdc\\\_city | City | string |
| sdc\\\_country | country, sdc\\\_country | Country (ISO code) | string |
| sdc\\\_birth\\\_date | dob | Date of Birth | date |
| sdc\\\_created\\\_date | sdc\\\_individual\\\_created\\\_date | Data Cloud: Individual Created Date | date |
| sdc\\\_last\\\_modified\\\_date | sdc\\\_individual\\\_last\\\_modified\\\_date | Data Cloud: Individual Last Modified Date | date |
|  | sdc\\\_last\\\_user\\\_imported | Data Cloud: Last User Imported | date |

#### sdc\_contact\_point\_emails

Maps the UnifiedContactPointEmail DMO and applies email opt-out as a Lytics consent value.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| sdc\\\_email\\\_address | email unique id | Email | string |
| sdc\\\_email\\\_address | email\\\_domain | Email Domain | string |
| sdc\\\_email\\\_address | email\\\_sha256 | SHA-256 hash of email | string |
| sdc\\\_email\\\_opt\\\_out | consent\\\_email\\\_marketing | false if opted out, otherwise true | map |
| sdc\\\_email\\\_address | sdc\\\_contact\\\_point\\\_email | Data Cloud: Contact Point Email | string |
| sdc\\\_email\\\_type | sdc\\\_contact\\\_point\\\_email\\\_type | Data Cloud: Email Type | string |
| sdc\\\_email\\\_opt\\\_out | sdc\\\_contact\\\_point\\\_email\\\_opt\\\_out | Data Cloud: Email Opt Out | bool |
| sdc\\\_email\\\_last\\\_modified\\\_date | sdc\\\_email\\\_last\\\_modified\\\_date | Data Cloud: Email Last Modified Date | date |

#### sdc\_contact\_point\_phones

Maps the UnifiedContactPointPhone DMO. Phone numbers are joined to user profiles via a related email address from the linked Individual.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| sdc\\\_phone\\\_email | email unique id | Email (from linked Individual) | string |
| sdc\\\_phone\\\_number | phone | Phone Number | string |
| sdc\\\_phone\\\_type | sdc\\\_phone\\\_type | Data Cloud: Phone Type | string |
| sdc\\\_phone\\\_opt\\\_out | sdc\\\_phone\\\_opt\\\_out | Data Cloud: Phone Opt Out | bool |
| sdc\\\_phone\\\_last\\\_modified\\\_date | sdc\\\_phone\\\_last\\\_modified\\\_date | Data Cloud: Phone Last Modified Date | date |

#### sdc\_contact\_point\_addresses

Maps the UnifiedContactPointAddress DMO. Addresses are joined to user profiles via a related email address from the linked Individual.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| sdc\\\_address\\\_email | email unique id | Email (from linked Individual) | string |
| sdc\\\_address\\\_street | sdc\\\_address\\\_street | Data Cloud: Street Address | string |
| sdc\\\_address\\\_city | city | City | string |
| sdc\\\_address\\\_state | sdc\\\_address\\\_state | Data Cloud: State | string |
| sdc\\\_address\\\_postal\\\_code | sdc\\\_address\\\_postal\\\_code | Data Cloud: Postal Code | string |
| sdc\\\_address\\\_country | country | Country (ISO code) | string |
| sdc\\\_address\\\_type | sdc\\\_address\\\_type | Data Cloud: Address Type | string |
| sdc\\\_address\\\_last\\\_modified\\\_date | sdc\\\_address\\\_last\\\_modified\\\_date | Data Cloud: Address Last Modified Date | date |

#### sdc\_segments

Records segment enter/exit events from Data Cloud. Active segment names are accumulated into a set user field for easy targeting in Lytics audiences.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| sdc\\\_email | email unique id | Email | string |
| sdc\\\_segment\\\_id | sdc\\\_segment\\\_id | Data Cloud: Segment ID | string |
| sdc\\\_segment\\\_name | sdc\\\_segment\\\_name | Data Cloud: Segment Name | string |
| sdc\\\_membership\\\_status | sdc\\\_membership\\\_status | Data Cloud: Membership Status | string |
| sdc\\\_segment\\\_name | sdc\\\_active\\\_segments | Set of currently active Data Cloud segments (only added when membership status is active) | \\\[\]string |

**Note:** Contact-point, segment, and change-event streams are joined into the user profile by email (or its SHA-256 hash). If your Data Cloud Individuals are unified primarily by a non-email identifier, you'll need to update the LQL queries for these streams to use the appropriate join key.

### Configuration

1.  Select **Salesforce Data Cloud** from the list of providers.
2.  Select the **Import Data Cloud Segment Membership** job type.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (Optional) From the **Data Cloud Segments** input, select specific Data Cloud segment IDs to import. Leave empty to import membership for all segments.
7.  In the **Stream** input, select an existing Lytics stream or enter a new stream name. The default is sdc\_segments. (Other DMO streams use the fixed names listed above.)
8.  From the **Import Frequency** input, select **Hourly**, **Daily**, **Weekly**, or **Monthly**.
9.  Click **Start Import**.

## Import Data Cloud Calculated Insights

[Calculated Insights](https://help.salesforce.com/s/articleView?id=sf.c360_a_calculated_insights.htm) are pre-computed metrics in Data Cloud (for example, lifetime value or recency/frequency scores). This job imports the most recent insight values into a Lytics stream so they can be mapped onto the user profile.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration, configurable hourly, daily, weekly, or monthly.
-   **Resulting data**: Insight metrics written as Event records that map onto the user profile.

This integration uses the Data Cloud [Calculated Insights API](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_calc_insight_v2.htm) to retrieve insight result rows and writes them to a stream in Lytics.

### Fields

The default mapping for the sdc\_calculated\_insights stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| sdc\\\_email | email unique id | Email | string |
| sdc\\\_insight\\\_name | sdc\\\_insight\\\_name | Data Cloud: Insight Name | string |
| sdc\\\_calculated\\\_at | sdc\\\_insight\\\_calculated\\\_at | Data Cloud: Insight Calculated At | date |

Because each calculated insight has its own dimensions and measures, you'll typically extend the LQL query for this stream to map the specific dimension and measure fields you care about onto the user profile after the import is set up.

### Configuration

1.  Select **Salesforce Data Cloud** from the list of providers.
2.  Select the **Import Data Cloud Calculated Insights** job type.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Calculated Insights** input, select one or more calculated insights to import.
7.  (Optional) From the **Dimensions** input, select dimension filters to limit which insight rows are imported. Leave empty to import all rows.
8.  In the **Stream** input, select an existing Lytics stream or enter a new stream name. The default is sdc\_calculated\_insights.
9.  From the **Import Frequency** input, select **Hourly**, **Daily**, **Weekly**, or **Monthly**.
10.  Click **Start Import**.

## Import Data Cloud Change Events

This job polls Salesforce Data Cloud for CREATE, UPDATE, and DELETE events on selected Data Model Objects and writes them to a Lytics stream. Use it when you need a near-real-time signal in Lytics that something changed in Data Cloud — for example, to trigger a workflow on a profile update.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration (interval polling).
-   **Frequency**: Continuous, polled at a configurable interval (default 5 minutes).
-   **Resulting data**: Event records describing DMO change events.

The job tracks changes by reading a configurable timestamp field on each DMO (default LastModifiedDate\_\_c). On the first run it fetches changes within the configured initial lookback window; subsequent runs use the timestamp of the previous successful poll.

### Fields

The default mapping for the sdc\_changes stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| sdc\\\_email | email unique id | Email | string |
| sdc\\\_change\\\_entity | sdc\\\_change\\\_entity | Data Cloud: Changed Entity | string |
| sdc\\\_change\\\_timestamp | sdc\\\_change\\\_timestamp | Data Cloud: Change Timestamp | date |

### Configuration

1.  Select **Salesforce Data Cloud** from the list of providers.
2.  Select the **Import Data Cloud Change Events** job type.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Data Model Objects** input, select the DMOs to monitor for change events.
7.  In the **Stream** input, select an existing Lytics stream or enter a new stream name. The default is sdc\_changes.
8.  (Optional) In **Poll Interval (seconds)**, set how often to poll Data Cloud. Default is 300 (5 minutes).
9.  (Optional) In **Initial Lookback (minutes)**, set how far back to look on the first run. Default is 15.
10.  (Optional, Advanced) In **Timestamp Field**, set the DMO field used to track changes. The field must exist on every selected DMO. Default is LastModifiedDate\_\_c.
11.  Click **Start Import**.

## Export Audience Membership to Data Cloud

This export keeps Lytics audience membership in sync with a Salesforce Data Cloud Ingestion API source in real time. Users entering an audience are sent as adds; users exiting are sent as removes. Use this when you want Data Cloud to reflect the current state of a Lytics audience.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration — Audience Trigger Integration.
-   **Frequency**: Real-time Integration with a one-time Backfill of existing audience members after setup.
-   **Resulting data**: Records in a Data Cloud Ingestion API target object reflecting Lytics audience membership.

This integration uses the Data Cloud [Ingestion API](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_ingest.htm). Each record sent to Data Cloud is keyed by the **Match Field** you select in Lytics — typically email or another identifier — so you can match incoming records to existing Individuals in Data Cloud.

### Configuration

Before configuring this export, your Salesforce administrator must create an [Ingestion API source](https://help.salesforce.com/s/articleView?id=sf.c360_a_create_ingestion_api_source.htm) and define a target object (stream/schema) in Data Cloud to receive Lytics audience membership.

1.  Select **Salesforce Data Cloud** from the list of providers.
2.  Select the **Export Audience Membership to Data Cloud** job type.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Ingestion API Source** input, select the Ingestion API source configured in Salesforce Data Cloud.
7.  From the **Target Object** input, select the object (stream) within that source where audience membership should be written.
8.  From the **Audiences** input, select the Lytics audience(s) whose membership should be synced.
9.  From the **Match Field** input, select the Lytics user field used to identify each record in Data Cloud (e.g. email). Users without a value for this field will be skipped.
10.  Click **Start Export**.

## Export Users to Data Cloud

This export streams Lytics user profile data to a Salesforce Data Cloud Ingestion API object. Unlike the audience-membership export, you supply a custom mapping of Lytics user fields to Data Cloud object fields, which makes it suitable for sending arbitrary profile attributes (not just audience adds/removes).

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Real-time Integration with a one-time Backfill of existing audience members after setup.
-   **Resulting data**: Records in a Data Cloud Ingestion API target object populated from Lytics user fields.

The integration uses the Data Cloud Ingestion API and supports per-hour rate limiting. Records are sent in batches of up to 200 per request (the Data Cloud limit).

### Configuration

1.  Select **Salesforce Data Cloud** from the list of providers.
2.  Select the **Export Users to Data Cloud** job type.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Ingestion API Source** input, select the Ingestion API source configured in Salesforce Data Cloud.
7.  From the **Target Object** input, select the object (stream) within that source.
8.  From the **Audiences** input, select the Lytics audience(s) to export.
9.  From the **Field Mappings** input, map Lytics user fields (left) to Data Cloud object fields (right). The Data Cloud field list is populated from the selected target object.
10.  (Optional) From the **Match Field** input, select a field used to match records in Data Cloud. The chosen field must be one of the mapped target fields.
11.  (Optional) In **Batch Size**, set how many records are sent per Ingestion API request. Default is 200. Maximum is 200.
12.  (Optional) In **Max Requests Per Hour**, set a rate limit for outbound requests to the Ingestion API. Default is 0 (no rate limit).
13.  Click **Start Export**.

## Bulk Export to Data Cloud via GCS

This export stages Lytics audience data as a CSV or newline-delimited JSON file in a Google Cloud Storage bucket so that Salesforce Data Cloud can pick it up via [zero-copy ingestion](https://help.salesforce.com/s/articleView?id=sf.c360_a_zero_copy.htm). Use this when you need to move large volumes of audience data into Data Cloud and prefer file-based ingestion over per-record API calls.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: File Based Transfer Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: A CSV or JSON file written to GCS at <gcs\_prefix>/<timestamp>.<ext>, available for Data Cloud zero-copy ingestion.

### Configuration

You must have a Google Cloud Storage bucket that is accessible to Salesforce Data Cloud. Configuring the GCS-side data source for zero-copy ingestion is a one-time setup performed in Salesforce.

1.  Select **Salesforce Data Cloud** from the list of providers.
2.  Select the **Bulk Export to Data Cloud via GCS** job type.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audiences** input, select the Lytics audience(s) to include in the bulk export file.
7.  From the **Fields** input, select the Lytics user fields to include in the exported file. The selected field names are used directly as column headers in the staged file.
8.  (Optional) From the **File Format** input, choose **CSV** (default) or **JSON (newline-delimited)**.
9.  In the **GCS Bucket** input, enter the Google Cloud Storage bucket where the file should be staged.
10.  (Optional) In the **GCS Prefix** input, enter a prefix (folder path) within the bucket. Files are written as <prefix>/<timestamp>.<ext>.
11.  Click **Start Export**.

## API Limitations

Salesforce Data Cloud has its own API limits separate from the standard Salesforce CRM API limits. Limits vary based on your Data Cloud edition. Key limits to be aware of:

-   The **Ingestion API** caps each request at 200 records. Lytics enforces this limit automatically; the **Export Users to Data Cloud** job lets you set a per-hour request rate limit if you need to throttle further.
-   The **Query API** has per-org concurrency and rate limits. Polling-based imports (Change Events, Calculated Insights, Segment Membership) honor the configured run frequency or poll interval to stay within these limits.
-   For high-volume audience exports, consider the **Bulk Export to Data Cloud via GCS** job, which uses zero-copy ingestion instead of per-record API calls.

See the [Salesforce Data Cloud Limits documentation](https://help.salesforce.com/s/articleView?id=sf.c360_a_limits.htm) for current per-edition limits.
