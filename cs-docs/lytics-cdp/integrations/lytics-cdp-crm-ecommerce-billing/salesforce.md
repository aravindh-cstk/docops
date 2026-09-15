---
title: "Salesforce"
description: "Salesforce is a Customer Relationship Management (CRM) platform that is designed to help you sell, service, analyze, and connect with your customers."
url: /lytics/salesforce
uid: blt7b1a3eee145fdb9e
---

# Salesforce

## Salesforce

## Overview

[Salesforce](https://www.salesforce.com/) is a Customer Relationship Management (CRM) platform that is designed to help you sell, service, analyze, and connect with your customers.

Integrating Lytics with Salesforce allows you to import leads and opportunities to merge your CRM data with rich behavioral data in Lytics to gain a more complete view of your customers. Engage your users with messages on any channel based on their status in your sales cycle. You can also export any Lytics user fields such as [Behavioral Scores](/docs/lytics/behavioral-scores) and content affinities to qualify and sort your leads in Salesforce.

## Authorization

If you haven't already done so, you will need to set up a Salesforce account before you begin the process described below. Lytics supports two methods for connecting to Salesforce: **OAuth2** and **JWT Bearer Token**.

The user connecting to Salesforce must have the **API Enabled** and **Offline User** permissions within Salesforce. You can read more on [Salesforce permissions](https://help.salesforce.com/articleView?id=admin_userperms.htm\&type=5).

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

### OAuth2

OAuth2 allows you to simply enter your username and password to connect Lytics with Salesforce.

Before creating an OAuth2 authorization, you must install the Lytics Salesforce app in your Salesforce org:

-   **Production**: [Install the Salesforce app](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tVs000000GZWTIA4)
-   **Sandbox**: [Install the Salesforce app in sandbox](https://test.salesforce.com/packaging/installPackage.apexp?p0=04tVs000000GZWTIA4)

1.  Select **Salesforce** from the list of providers.
2.  Select the **OAuth2** (or **OAuth2 Sandbox**) method for authorization.
3.  Input your Salesforce username and password into the login screen.
4.  Enter a **Label** to identify your authorization.
5.  (Optional) Enter a **Description** for further context on your authorization.
6.  Click **Save Authorization**.

### JWT Bearer Token

JWT Bearer Token authentication allows you to connect Lytics to Salesforce without a browser-based login. This is useful for service accounts and automated environments. Instead of a username/password login, you provide a Consumer Key, Salesforce Username, and RSA Private Key from a Salesforce External Client App.

#### Prerequisites

Before creating a JWT authorization in Lytics, you must set up an External Client App in Salesforce:

1.  **Generate an RSA key pair**:

```
# Generate a private key
   openssl genpkey -algorithm RSA -out sf_private_key.pem -pkeyopt rsa_keygen_bits:2048

   # Create a self-signed X.509 certificate
   openssl req -new -x509 -key sf_private_key.pem -out sf_cert.pem -days 365 -subj "/CN=Lytics Salesforce JWT"
```

1.  **Create an External Client App in Salesforce**:
    -   Go to **Setup** > **App Manager** > **New Connected App** (or **External Client App** depending on your Salesforce edition).
    -   Fill in the basic info (name, contact email).
    -   Check **Enable OAuth Settings**.
    -   Set the callback URL to any valid URL (e.g. https://login.salesforce.com/services/oauth2/callback). This value is not used by JWT Bearer Token authentication but is required by Salesforce.
    -   Select OAuth scopes: **Full access (full)** or at minimum **API (api)**. You must also include **Perform requests at any time (refresh\\\_token, offline\\\_access)**.
    -   Check **Use digital signatures** and upload the sf\_cert.pem certificate file you created above.
    -   Click **Save**.
2.  **Pre-authorize users for the app**:
    -   Go to **Setup** > **App Manager** > find your app > **Manage**.
    -   Click **Edit Policies**.
    -   Under **Permitted Users**, select **Admin approved users are pre-authorized**.
    -   Click **Save**.
    -   Scroll down to the **Profiles** section and click **Manage Profiles**.
    -   Select the profile(s) that include the Salesforce user you want to authorize (e.g. **System Administrator**).
    -   Click **Save**.
3.  **Copy the Consumer Key**:
    -   In the app detail page, copy the **Consumer Key** value.

#### Create the Authorization in Lytics

1.  Select **Salesforce** from the list of providers.
2.  Select the **JWT Bearer Token** (or **JWT Bearer Token (Sandbox)** for sandbox orgs) method for authorization.
3.  Enter the **Consumer Key** from your Salesforce External Client App.
4.  Enter the **Salesforce Username** of the pre-authorized user.
5.  Enter your **My Domain URL** — the org's My Domain login URL (for example, https://yourorg.my.salesforce.com, or https://yourorg--sandbox.sandbox.my.salesforce.com for a sandbox). You can find this in Salesforce under **Setup** > **My Domain**.
6.  Paste the contents of your **Private Key** file (sf\_private\_key.pem).
7.  Enter a **Label** to identify your authorization.
8.  (Optional) Enter a **Description** for further context on your authorization.
9.  Click **Save Authorization**.

**Note:** As of the Salesforce Spring '26 release, Salesforce no longer redirects the generic login.salesforce.com / test.salesforce.com hosts to your org. The JWT token exchange must be sent directly to your org's My Domain URL, so this field is now required. If you have an existing Salesforce JWT authorization that was created before this field existed, re-open it and save it with your My Domain URL, otherwise the token exchange will fail.

## Import Audiences & Activity Data

Importing Leads and Opportunities from Salesforce allows you to enrich Lytics profiles with sales and CRM data to improve targeting for your marketing efforts.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: One time Batch Integration, with the option to update hourly.
-   **Resulting data**: User Profiles containing Lead or Opportunity data from Salesforce.

This integration utilizes [Salesforce APIs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_query.htm) to import user data. Once the import is started the job will:

1.  Request Salesforce objects to import.
2.  Ingest the data from the JSON files into the respective stream until there are no additional pages to import.

Account, Contact, Lead, and Opportunity data will be mapped to the following streams respectively: salesforce\_accounts, salesforce\_contacts, salesforce\_leads, and salesforce\_opportunities streams.

### Fields

The following fields are included in the default mapping of the salesforce\_accounts stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| account\\\_contact\\\_id | salesforce\\\_contact\\\_ids unique id | Salesforce: Contact Ids | \\\[\]string |
| account\\\_annual\\\_revenue | salesforce\\\_account\\\_annual\\\_revenue | Salesforce: Account Annual Revenue | number |
| account\\\_billing\\\_city | salesforce\\\_account\\\_billing\\\_city | Salesforce: Account Billing City | string |
| account\\\_billing\\\_country | salesforce\\\_account\\\_billing\\\_country | Salesforce: Account Billing Country | string |
| account\\\_billing\\\_country\\\_code | salesforce\\\_account\\\_billing\\\_country\\\_code | Salesforce: Account Billing Country Code | string |
| account\\\_billing\\\_latitude | salesforce\\\_account\\\_billing\\\_latitude | Salesforce: Account Billing Latitude | number |
| account\\\_billing\\\_longitude | salesforce\\\_account\\\_billing\\\_longitude | Salesforce: Account Billing Longitude | number |
| account\\\_billing\\\_postal\\\_code | salesforce\\\_account\\\_billing\\\_postal\\\_code | Salesforce: Account Billing Postal Code | string |
| account\\\_billing\\\_state | salesforce\\\_account\\\_billing\\\_state | Salesforce: Account Billing State | string |
| account\\\_billing\\\_state\\\_code | salesforce\\\_account\\\_billing\\\_state\\\_code | Salesforce: Account Billing State Code | string |
| account\\\_billing\\\_street | salesforce\\\_account\\\_billing\\\_street | Salesforce: Account Billing Street | string |
| account\\\_created\\\_date | salesforce\\\_account\\\_created\\\_date | Salesforce: Account Created Date | date |
| account\\\_id | salesforce\\\_account\\\_id | Salesforce: Account ID | string |
| account\\\_industry | salesforce\\\_account\\\_industry | Salesforce: Account Industry | string |
| account\\\_is\\\_partner | salesforce\\\_account\\\_is\\\_partner | Salesforce: Account Is Partner | bool |
| account\\\_name | salesforce\\\_account\\\_name | Salesforce: Account Name | string |
| account\\\_number\\\_of\\\_employees | salesforce\\\_account\\\_number\\\_of\\\_employees | Salesforce: Account Number of Employees | int |
| account\\\_ownership | salesforce\\\_account\\\_ownership | Salesforce: Account Ownership | string |
| account\\\_rating | salesforce\\\_account\\\_rating | Salesforce: Account Rating | string |
| account\\\_shipping\\\_city | salesforce\\\_account\\\_shipping\\\_city | Salesforce: Account Shipping City | string |
| account\\\_shipping\\\_country | salesforce\\\_account\\\_shipping\\\_country | Salesforce: Account Shipping Country | string |
| account\\\_shipping\\\_country\\\_code | salesforce\\\_account\\\_shipping\\\_country\\\_code | Salesforce: Account Shipping Country Code | string |
| account\\\_shipping\\\_postal\\\_code | salesforce\\\_account\\\_shipping\\\_postal\\\_code | Salesforce: Account Shipping Postal Code | string |
| account\\\_shipping\\\_state | salesforce\\\_account\\\_shipping\\\_state | Salesforce: Account Shipping State | string |
| account\\\_shipping\\\_state\\\_code | salesforce\\\_account\\\_shipping\\\_state\\\_code | Salesforce: Account Shipping State Code | string |
| account\\\_shipping\\\_street | salesforce\\\_account\\\_shipping\\\_street | Salesforce: Account Shipping Street | string |
| account\\\_source | salesforce\\\_account\\\_source | Salesforce: Account Source | string |
| account\\\_type | salesforce\\\_account\\\_type | Salesforce: Account Type | string |
| account\\\_website | salesforce\\\_account\\\_website | Salesforce: Account Website | string |

**Note on billing and shipping country/state fields:**

Salesforce provides two variants for country and state on billing and shipping addresses:

-   **Free-text fields** (e.g. BillingCountry, BillingState): Plain text values entered by users, mapped to salesforce\_account\_billing\_country, salesforce\_account\_billing\_state, etc.
-   **ISO-code fields** (e.g. BillingCountryCode, BillingStateCode): Standardized ISO code values (e.g. US, CA), mapped to the \_code variants such as salesforce\_account\_billing\_country\_code.

Both variants are now imported by Lytics. The ISO-code (\_code) fields are only populated if the **State and Country Picklists** feature is enabled in your Salesforce org.

The following fields are included in the default mapping of the salesforce\_contacts stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| contact\\\_id | salesforce\\\_contact\\\_ids unique id | Salesforce: Contact Ids | \\\[\]string |
| contact\\\_email | email unique id | Email | string |
| contact\\\_email | emaildomains | Email Domains | \\\[\]string |
| contact\\\_birthdate | salesforce\\\_contact\\\_birthdate | Salesforce: Contact Birthdate | date |
| contact\\\_city | salesforce\\\_contact\\\_city | Salesforce: Contact City | string |
| contact\\\_country\\\_code | salesforce\\\_contact\\\_country | Salesforce: Contact Country | string |
| contact\\\_created\\\_date | salesforce\\\_contact\\\_created\\\_date | Salesforce: Contact Created Date | date |
| contact\\\_department | salesforce\\\_contact\\\_department | Salesforce: Contact Department | string |
| contact\\\_email\\\_bounced\\\_reason | salesforce\\\_contact\\\_email\\\_bounced\\\_reason | Salesforce: Contact Email Bounced Reason | string |
| contact\\\_has\\\_opted\\\_out\\\_of\\\_email | salesforce\\\_contact\\\_has\\\_opted\\\_out\\\_of\\\_email | Salesforce: Contact Has Opted Out Of Email | bool |
| contact\\\_is\\\_email\\\_bounced | salesforce\\\_contact\\\_is\\\_email\\\_bounced | Salesforce: Contact Is Email Bounced | bool |
| contact\\\_last\\\_cu\\\_request\\\_date | salesforce\\\_contact\\\_last\\\_cu\\\_request\\\_date | Salesforce: Contact Last Stay-In-Touch Request Sent | date |
| contact\\\_email\\\_bounced\\\_date | salesforce\\\_contact\\\_last\\\_email\\\_bounced\\\_date | Salesforce: Contact Email Bounced Date | date |
| contact\\\_last\\\_modified\\\_date | salesforce\\\_contact\\\_last\\\_modified\\\_date | Salesforce: Contact Last Modified Date | date |
| contact\\\_latitude | salesforce\\\_contact\\\_latitude | Salesforce: Contact Latitude | number |
| contact\\\_longitude | salesforce\\\_contact\\\_longitude | Salesforce: Contact Longitude | number |
| contact\\\_salutation | salesforce\\\_contact\\\_salutation | Salesforce: Contact Salutation | string |
| contact\\\_title | salesforce\\\_contact\\\_title | Salesforce: Contact Title | string |
|  | salesforce\\\_last\\\_user\\\_imported | Salesforce: Last User Imported | date |
| contact\\\_lead\\\_source | salesforce\\\_lead\\\_source | Salesforce: Lead Source | string |

The following fields are included in the default mapping of the salesforce\_leads stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| lead\\\_id | salesforce\\\_lead\\\_ids unique id | Salesforce: Lead Ids | \\\[\]string |
| lead\\\_email | email unique id | Email | string |
| lead\\\_email | emaildomains | Email Domains | \\\[\]string |
|  | salesforce\\\_last\\\_user\\\_imported | Salesforce: Last User Imported | date |
| lead\\\_company | salesforce\\\_lead\\\_company | Salesforce: Lead Company | string |
| lead\\\_converted\\\_date | salesforce\\\_lead\\\_converted\\\_date | Salesforce: Lead Converted Date | date |
| lead\\\_created\\\_date | salesforce\\\_lead\\\_created\\\_date | Salesforce: Lead Created Date | date |
| lead\\\_email\\\_bounced\\\_date | salesforce\\\_lead\\\_email\\\_bounced\\\_date | Salesforce: Lead Email Bounced Date | date |
| lead\\\_email\\\_bounced\\\_reason | salesforce\\\_lead\\\_email\\\_bounced\\\_reason | Salesforce: Lead Email Bounced Reason | string |
| lead\\\_first\\\_name | salesforce\\\_lead\\\_first\\\_name | Salesforce: Lead First Name | string |
| lead\\\_has\\\_opted\\\_out\\\_of\\\_email | salesforce\\\_lead\\\_has\\\_opted\\\_out\\\_of\\\_email | Salesforce: Lead Has Opted Out of Email | bool |
| lead\\\_industry | salesforce\\\_lead\\\_industry | Salesforce: Lead Industry | string |
| lead\\\_is\\\_converted | salesforce\\\_lead\\\_is\\\_converted | Salesforce: Lead Is Converted | bool |
| lead\\\_last\\\_modified\\\_date | salesforce\\\_lead\\\_last\\\_modified\\\_date | Salesforce: Lead Last Modified Date | date |
| lead\\\_last\\\_name | salesforce\\\_lead\\\_last\\\_name | Salesforce: Lead Last Name | string |
| lead\\\_mobile\\\_phone | salesforce\\\_lead\\\_mobile\\\_phone | Salesforce: Lead Mobile Phone | string |
| lead\\\_name | salesforce\\\_lead\\\_name | Salesforce: Lead Name | string |
| lead\\\_number\\\_of\\\_employees | salesforce\\\_lead\\\_number\\\_of\\\_employees | Salesforce: Lead Number Of Employees | int |
| lead\\\_phone | salesforce\\\_lead\\\_phone | Salesforce: Lead Phone | string |
| lead\\\_postal\\\_code | salesforce\\\_lead\\\_postal\\\_code | Salesforce: Lead Postal Code | string |
| lead\\\_record\\\_type | salesforce\\\_lead\\\_record\\\_type | Salesforce: Lead Record Type | string |
| lead\\\_salutation | salesforce\\\_lead\\\_salutation | Salesforce: Lead Salutation | string |
| lead\\\_source, lead\\\_lead\\\_source | salesforce\\\_lead\\\_source | Salesforce: Lead Source | string |
| lead\\\_status | salesforce\\\_lead\\\_status | Salesforce: Most Recent Lead Status | string |
| lead\\\_title | salesforce\\\_lead\\\_title | Salesforce: Lead Title | string |
| lead\\\_website | salesforce\\\_lead\\\_website | Salesforce: Lead Website | string |

The following fields are included in the default mapping of the salesforce\_opportunities stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| opportunity\\\_contact\\\_id | salesforce\\\_contact\\\_ids unique id | Salesforce: Contact Ids | \\\[\]string |
| opportunity\\\_lead\\\_source | salesforce\\\_lead\\\_source | Salesforce: Lead Source | string |
| opportunity\\\_amount | salesforce\\\_opportunity\\\_amount | Salesforce: Opportunity Amount | number |
| opportunity\\\_close\\\_date | salesforce\\\_opportunity\\\_close\\\_date | Salesforce: Opportunity Close Date | date |
| opportunity\\\_created\\\_date | salesforce\\\_opportunity\\\_created\\\_date | Salesforce: Opportunity Created Date | date |
| opportunity\\\_fiscal | salesforce\\\_opportunity\\\_fiscal | Salesforce: Opportunity Fiscal | string |
| opportunity\\\_fiscal\\\_quarter | salesforce\\\_opportunity\\\_fiscal\\\_quarter | Salesforce: Opportunity Fiscal Quarter | string |
| opportunity\\\_fiscal\\\_year | salesforce\\\_opportunity\\\_fiscal\\\_year | Salesforce: Opportunity Fiscal Year | int |
| opportunity\\\_forecast\\\_category | salesforce\\\_opportunity\\\_forecast\\\_category | Salesforce: Opportunity Forecast Category | string |
| opportunity\\\_forecast\\\_category\\\_name | salesforce\\\_opportunity\\\_forecast\\\_category\\\_name | Salesforce: Opportunity Forecast Category Name | string |
| opportunity\\\_has\\\_open\\\_activity | salesforce\\\_opportunity\\\_has\\\_open\\\_activity | Salesforce: Opportunity Has Open Activity | bool |
| opportunity\\\_is\\\_closed | salesforce\\\_opportunity\\\_is\\\_closed | Salesforce: Opportunity Is Closed | bool |
| opportunity\\\_is\\\_won | salesforce\\\_opportunity\\\_is\\\_won | Salesforce: Opportunity Is Won | bool |
| opportunity\\\_last\\\_modified\\\_date | salesforce\\\_opportunity\\\_last\\\_modified\\\_date | Salesforce: Opportunity Last Modified Date | date |
| opportunity\\\_name | salesforce\\\_opportunity\\\_name | Salesforce: Opportunity Name | string |
| opportunity\\\_next\\\_step | salesforce\\\_opportunity\\\_next\\\_step | Salesforce: Opportunity Next Step | string |
| opportunity\\\_probability | salesforce\\\_opportunity\\\_probability | Salesforce: Opportunity Probability | number |
| opportunity\\\_stage\\\_name | salesforce\\\_opportunity\\\_stage\\\_name | Salesforce: Opportunity Stage Name | string |
| opportunity\\\_type | salesforce\\\_opportunity\\\_type | Salesforce: Opportunity Type | string |

**Note:** In addition to the standard fields listed above, you can select additional fields (including both Salesforce standard and custom fields) to import using the Additional Fields inputs during job configuration. Custom mappings are required to use additional fields.

### Configuration

Follow these steps to set up and configure an import of Salesforce Leads & Opportunities in the Lytics platform.

1.  Select **Salesforce** from the list of providers.
2.  Select the **Import Audiences & Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Maximum Daily API Calls** numeric field, select the maximum number of API calls the Lytics import can make on your behalf per day. See [API Limitations](#api-limitations) for tips on finding and estimating this.
7.  From the **Additional Lead Fields** input, select additional Lead fields to import beyond the standard fields listed above.
8.  From the **Additional Contact Fields** input, select additional Contact fields to import beyond the standard fields listed above.
9.  From the **Additional Account Fields** input, select additional Account fields to import beyond the standard fields listed above.
10.  From the **Additional Opportunity Fields** input, select additional Opportunity fields to import beyond the standard fields listed above.
11.  From the **Import Leads** checkbox, choose if you would like to include leads in the import.
12.  From the **Keep Updated** checkbox, continuously run this import.
13.  From the **Import Frequency** input, select how frequently the import should be run.
14.  (Optional) In the **Time of Day** text input, enter in a time for the weekly and daily continuous imports to run.
15.  (Optional) From the **Time Zone** input, select the time zone for the time of day entered above.
16.  (Optional) From the **Lead Timestamp Field** input, select a field on the Leads object to identify when the object was last modified. Lytics will use this field to search for newly created and updated objects when running continuously. If not selected, the Last Modified field will be used.
17.  (Optional) From the **Contact Timestamp Field** input, select a field on the Leads object to identify when the object was last modified. Lytics will use this field to search for newly created and updated objects when running continuously. If not selected, the Last Modified field will be used.
18.  (Optional) From the **Account Timestamp Field** input, select a field on the Leads object to identify when the object was last modified. Lytics will use this field to search for newly created and updated objects when running continuously. If not selected, the Last Modified field will be used.
19.  (Optional) From the **Opportunity Timestamp Field** input, select a field on the Leads object to identify when the object was last modified. Lytics will use this field to search for newly created and updated objects when running continuously. If not selected, the Last Modified field will be used.
20.  (Optional) From the **Leads Since** text input, add a date and time of the oldest Lead to import.
21.  (Optional) From the **Contacts Since** text input, add a date and time of the oldest Contact to import.
22.  (Optional) From the **Accounts Since** text input, add a date and time of the oldest Account to import.
23.  (Optional) From the **Opportunities Since** text input, add a date and time of the oldest Opportunity to import.
24.  Click **Start Import**.

## Import Custom Object

Importing custom objects from Salesforce allows you to enrich Lytics profiles with sales and CRM data from your Salesforce account. This will aid in targeting for your marketing efforts.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: One time Batch Integration or daily continuous updates.
-   **Resulting data**: Raw Event Data which may be mapped as custom User Field.

This integration utilizes [Salesforce APIs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm) to import user data. Once the import is started the job will:

1.  [Request a set of information](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_query.htm) from the configured Salesforce object.
2.  Ingest data from the Salesforce object to the data stream stream defined during [configuration](#configuration-1).

The job will run again in 24 hours if [configured](#configuration-1) to run continuously.

### Fields

Lytics will import any fields that are selected during the job [configuration](#configuration-1). Because the imported fields are custom you will need to map the custom fields.

### Configuration

Follow these steps to set up and configure an import of Salesforce in the Lytics platform.

1.  Select **Salesforce** from the list of providers.
2.  Select the **Import Custom Object** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Using the **Stream** text input, select an existing stream to write to, or enter a new stream name.
7.  From the **Maximum Daily API Calls** numeric field, select the [maximum number of API calls](#api-limitations) the Lytics job can make on your behalf per day.
8.  From the **Salesforce Object** input, select the Salesforce object you want to import.
9.  From the **Salesforce Fields** input, select fields to import.
10.  Toggle the **Keep Updated** checkbox to continuously run this export.
11.  (Optional) From the **Timestamp Field** input, select a field on the Salesforce object to identify when the object was last modified. Lytics will use this field to search for newly created and updated objects when running continuously. If not selected, the Last Modified field will be used.
12.  (Optional) From the **Objects Since** text input, add a date and time of the oldest object to import.
13.  (Optional) In the **Time of Day** text input, enter in a time for the daily continuous import to run.
14.  (Optional) From the **Time Zone** input, select the time zone for the time of day entered above.
15.  Click **Start Import**.

You should see the custom Salesforce object data populated in the stream selected shortly after starting the job.

## Export Audiences

Exporting users to Salesforce will allow you to create new Leads or Opportunities from promising groups of users you've encountered through other channels such as the web, email, or mobile. This export supports any kind of Salesforce object. Exporting Lytics user fields to existing Leads can help qualify and sort your Leads.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Real-time Integration with a one-time Backfill of the audience after setup.
-   **Resulting data**: New or existing Salesforce objects populated with Lytics user field and audience membership.

This integration utilizes the [Salesforce APIs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm) to send user data. Once the export is started the job will begin backfilling users who already exist in the selected audiences. For each user to export, regardless if the user is being added as part of the backfill, or they're entering/exiting the audience in realtime, it will:

1.  If a match field was provided during configuration, the job will [update an existing Salesforce object](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_update_fields.htm) based on values of the match field. Otherwise it will [create a new Salesforce object](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_sobject_create.htm).
2.  Keep your Lytics audience in sync with Salesforce by updating users in Salesforce as users are updated in Lytics.

### Fields

All fields that are provided in the mapping during configuration will be sent to Salesforce.

### Configuration

Follow these steps to set up and configure an export of Salesforce in the Lytics platform.

1.  Select **Salesforce** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audiences** field, input the Lytics audience(s) you'd like to send to Salesforce. Then click **Next Step**.
7.  In the **Maximum Daily API Calls** numeric field, enter the [maximum number of API calls](#api-limitations) the Lytics workflow can make on your behalf per day.
8.  From the **Salesforce Object** field, select the Salesforce object type you would like to export to.
9.  From the **Match Field** field, input the field in Salesforce to match records to avoid duplicates. **The field you select must be mapped in the fields below (either in the Required Fields or the Extra Fields).**
10.  From the **Send Audiences To** field, select a field on your Salesforce object which will contain a list of Lytics audiences for the user.
11.  From the **Required Fields** section, map all the required fields from Lytics to Salesforce by selecting the Lytics field on the left, and its Salesforce destination field on the right. All fields in the Salesforce dropdown must be mapped.
12.  From the **Extra Fields** section, map all the extra fields from Lytics to Salesforce by selecting the Lytics field on the left, and its Salesforce destination on the right.
13.  From the **Fields to Trigger** section, select up to 75 user fields to trigger on. For any user currently in the exported audience, if any of the selected field values change, then the user will be sent to Salesforce.
14.  Click **Start Export**.\\

You should see Lytics user data populated in your Salesforce object shortly after starting the workflow.

### Salesforce Administrator Setup

You'll need to involve a Salesforce administrator when setting up the export. The administrator will need to perform the following setup:

1.  Set up a [Duplicate Rule](https://help.salesforce.com/apex/HTViewHelpDoc?id=duplicate_rules_overview.htm\&language=en_US) in Salesforce for leads (configuration pictured below).
2.  [Set up the following Custom Fields](http://salesforce.vidyard.com/watch/um8ZtKv_2awfCTitmz0vtA) on the Salesforce "Lead" object:
3.  For "Send Audiences To"
    -   Field Type: Text Area (Long)
    -   Field Label: Lytics Audiences
    -   Field Length: 32,768 characters (32 KB)
    -   Field Visible Lines: 3
    -   Field Name: Lytics\\\_Audiences
    -   Field Description: This user is a member of these Lytics Audiences
    -   Visibility: Checked for all users
    -   Read-Only: Not checked for any users
    -   Layouts: Add to all available
4.  Optional: For "Send Content Affinity To"
    -   Field Type: Text Area (Long)
    -   Field Label: Lytics Content Affinity
    -   Field Length: 32,768 characters (32 KB)
    -   Field Visible Lines: 3
    -   Field Name: Lytics\\\_Content\\\_Affinity
    -   Field Description: The top three kinds of content this user prefers
    -   Visibility: Checked for all users
    -   Read-Only: Not checked for any users
    -   Layouts: Add to all available
5.  Optional: For "Send Scores To" (optional)
    -   Field Type: Text Area (Long)
    -   Field Label: Lytics Scores
    -   Field Length: 32,768 characters (32 KB)
    -   Field Visible Lines: 3
    -   Field Name: Lytics\\\_Scores
    -   Field Description
    -   Visibility: Checked for all users
    -   Read-Only: Not checked for any users
    -   Layouts: Add to all available

![duplicate rule screen](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am88385cad310279f0/a0351ac901dd7dc89cb58d95/duplicate-rule.png)

## API Limitations

Salesforce has limitations for the maximum number of daily API Calls. An API call is a connection made to a Salesforce server on your account's behalf. Lytics provides some guidelines below for working with these limits for your integration connection.

-   Different accounts have different limits on the number of API calls allowed per 24 hours. You can find more information about these limits in the [Salesforce documentation](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm).
-   In addition to your Lytics integration, your Sales team may have additional integrations using the Salesforce API. For example, they may use a tool to capture LinkedIn information and send it into Salesforce, which would also use their API.

To estimate an appropriate number of API calls to enter for the Salesforce import, Lytics recommends you use the following formula:

(Total Daily API Calls Allowed - Daily API Calls For Other Integrations) / 2

Dividing by two allows you to allot the same number of API calls to the upcoming Salesforce Export.

To roughly estimate how long your initial import will take, use the following formula:

(Total Leads + Total Contacts + Total Opportunities + Total Accounts) / Total Daily API Calls Allowed for Lytics Import

This will yield the approximate number of days that will be required.

Note: this estimate will be slightly low because each time the import encounters an API limit, it sleeps for 24 hours rather than restarting at the same time the following day.
