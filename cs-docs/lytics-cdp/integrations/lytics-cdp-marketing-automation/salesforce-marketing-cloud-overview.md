---
title: "Salesforce Marketing Cloud"
description: "Salesforce Marketing Cloud is a digital marketing platform that allows you to create and manage marketing relationships and campaigns with customers."
url: /lytics/salesforce-marketing-cloud-overview
---

# Salesforce Marketing Cloud

## Salesforce Marketing Cloud

## Overview

[Salesforce Marketing Cloud](https://www.salesforce.com/products/marketing-cloud/overview/) is a digital marketing platform that allows you to create and manage marketing relationships and campaigns with customers.

Connecting Lytics and Salesforce Marketing Cloud allows you to export Lytics audience membership to a data extension or trigger an event definition journey in real-time, and receive activity data in Lytics for further segmentation.

The [Lytics Canvas](/docs/lytics/goals#goal-canvas-audiences) supports Salesforce Marketing Cloud Experiences. Using Lytics to enrich user data with cross-channel behavior and content affinities, you can send responsive campaigns through Salesforce Marketing Cloud.

## Authorization

In order to allow Lytics to access your Salesforce Marketing Cloud account, you'll need the following:

-   Client ID
-   Client Secret
-   Authentication Base URI

To get Salesforce Marketing Cloud client keys, see the [Marketing Cloud API Integration guide](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/get-api-key.htm). Your Salesforce Marketing Cloud client keys will need the following access permissions to work with your Lytics and Marketing Cloud workflows:

| Lytics Workflow | Marketing Cloud Permission | Read | Write |
| --- | --- | --- | --- |
| Import Subscriber and Activity | Contacts - List and Subscribers | x |  |
| Import Subscriber and Activity | Provisioning - Organizations | x |  |
| Import Subscriber and Activity | Data - Tracking Events | x |  |
| Import Audiences & Activity Data | Data - Data Extensions | x |  |
| Import Audiences & Activity Data | Provisioning - Organizations | x |  |
| Export Audiences to Data Extension | Data - Data Extensions | x | x |
| Export Audiences to Data Extension | Provisioning - Organizations | x |  |
| Export Lists | Contacts - List and Subscribers | x | x |
| Export Lists | Provisioning - Organizations | x |  |
| Triggered Journey | Automation - Journeys | x | x |
| Triggered Journey | Contacts - Audiences | x | x |
| Triggered Journey | Provisioning - Organizations | x |  |
| Experiences | Channels - Email | x |  |
| Experiences | Provisioning - Organizations | x |  |



If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Salesforce Marketing Cloud** from the list of providers.
2.  Select the **Rest V2 API Token**s method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your Salesforce Marketing Cloud Client keys in the **Client ID**, **Client Secret**, and **Authentication Base URI** fields.
6.  Click **Save Authorization**.

## Import Subscriber and Activity

Importing subscribers and activity data from Marketing Cloud results in new users or existing user profiles supplemented with Marketing Cloud campaign activity data. You can use this data to build and refine your existing Lytics audiences to power better, cross-channel campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST and SOAP API Integration
-   **Frequency**: Batch Integration(scheduled hourly by default).
-   **Resulting data**: User Profiles

This integration utilizes both the Marketing Cloud REST and SOAP API Integration to pull in subscriber and event data.

1.  Every hour the job will scan for new subscribers via the SOAP retrieve call for [SubscriberList](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/subscriberlist.htm) to pull in new subscribers for the imported lists and written to the sfmc\_subscribers data stream in Lytics.
2.  If importing subscriber attributes is selected, full [Subscriber](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/subscriber.htm) is retrieved and written to the sfmc\_subscribers data stream in Lytics. **Note**: subscriber attributes are only imported on the initial import, or if the subscriber list membership is updated. If list subscription is not updated, Lytics will not get new subscriber attribute updates.
3.  Every hour, if activity data import is selected, activity data since the last run is retrieved through the SOAP retrieve endpoints for each of the following events, [BounceEvent](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/bounceevent.htm), [ClickEvent](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/clickevent.htm), [ForwardEmailOptInEvent](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/forwardedemailoptinevent.htm), [FowardEmailEvent](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/forwardedemailevent.htm), [OpenEvent](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/openevent.htm), [SentEvent](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/sentevent.htm), [SurveyEvent](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/surveyevent.htm), and [UnsubEvent](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/unsubevent.htm). All activity data is written to the sfmc\_events data stream in Lytics.
4.  If historical subscriber or activity data is selected to be imported, the above calls are repeated for a days worth a data at a time, going backward in time, until all selected historical data is imported.

### Fields

#### sfmc\\\_events fields

The following fields are included in the default mapping of the sfmc\_events stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| subscriber\\\_key | sfmc\\\_subscriber\\\_keys unique id |  | \\\[\]string |
|  | channels | All Channels Used | \\\[\]string |
| url | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
|  | last\\\_active\\\_ts | Last Active | date |
|  | last\\\_channel\\\_activities | Last Activity By Channel | map\\\[string\]time |
| bounce\\\_category | sfmc\\\_bounce\\\_category | SFMC Bounce Category | string |
| bounce\\\_type | sfmc\\\_bounce\\\_type | SFMC Bounce Type | string |
| campaign\\\_name | sfmc\\\_campaign\\\_name | SFMC Campaign Name | string |
| url | sfmc\\\_click\\\_urls | SFMC Urls Clicked on | \\\[\]string |
| event\\\_type | sfmc\\\_clickct | SFMC Click Count | int |
| event\\\_type | sfmc\\\_events |  | map\\\[string\]intsum |
|  | sfmc\\\_firstclick\\\_ts | SFMC First Click | date |
|  | sfmc\\\_firstopen\\\_ts | SFMC First Open | date |
|  | sfmc\\\_hourlyopen | SFMC Hourly Opens | map\\\[string\]intsum |
|  | sfmc\\\_hourofweek | SFMC Hour of Week Events | map\\\[string\]intsum |
|  | sfmc\\\_lastclick\\\_ts | SFMC Last Click | date |
|  | sfmc\\\_lastopen\\\_ts | SFMC Last Open | date |
| list\\\_name | sfmc\\\_list\\\_name | SFMC List Name | string |
| event\\\_type | sfmc\\\_openct | SFMC Open Count | int |
| opt\\\_in\\\_sub\\\_key | sfmc\\\_opt\\\_in\\\_sub\\\_key | SFMC Forward Opt-In | string |
| send\\\_id | sfmc\\\_send\\\_id | SFMC Send ID | string |
| event\\\_type | sfmc\\\_sendct | SFMC Send Count | int |
| smtp\\\_reason | sfmc\\\_smtp\\\_bounce\\\_reason | SFMC SMTP Bounce Reason | string |
| survey\\\_answer | sfmc\\\_survey\\\_answer | SFMC Survey Answer | string |
| survey\\\_question | sfmc\\\_survey\\\_question | SFMC Survey Question | string |
|  | sfmc\\\_unsub\\\_ts | SFMC Unsub date | date |
|  | sfmc\\\_yymm | SFMC Opens By Month | map\\\[string\]intsum |
| send\\\_id | total\\\_clicks\\\_by\\\_message | The number of clicks for a message | map\\\[string\]intsum |
| send\\\_id | total\\\_opens\\\_by\\\_message | The number of opens for a message | map\\\[string\]intsum |

#### sfmc\\\_subscribers fields

The following fields are included in the default mapping of the sfmc\_subscribers stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| subscriber\\\_key | sfmc\\\_subscriber\\\_keys unique id |  | \\\[\]string |
| email | email unique id |  | string |
| subscriber\\\_id | sfmc\\\_subscriber\\\_ids unique id |  | \\\[\]string |
| email | emaildomain | Email Domain | string |
| business\\\_id | sfmc\\\_business\\\_id | SFMC Business ID | string |
| business\\\_name | sfmc\\\_business\\\_name | SFMC Business Name | string |
| created\\\_date | sfmc\\\_created\\\_date | SFMC Created Date | date |
| list\\\_id, status | sfmc\\\_list\\\_ids\\\_status | Subscription Status by List ID | map\\\[string\]string |
| list\\\_name, status | sfmc\\\_list\\\_name\\\_status | Subscription Status by List Name | map\\\[string\]string |

### Configuration

Follow these steps to set up and configure an import of Marketing Cloud subscriber data and activity into the Lytics platform.If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Salesforce Marketing Cloud** from the list of providers.
2.  Select the **Import Subscribers and Activity** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select what data you would like to import from Salesforce Marketing Cloud, **Subscribers** and/or **Activity**.\\

![sfmc standard import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am93a953d6ef3656c4/158604ca73ef87627b8cd6c8/sfmc_standard_import.png)

1.  Click to **Show Advanced Options** to reveal additional settings.
    -   **Business Units**: Use this input to select a set of [Salesforce Marketing Cloud business units](https://help.salesforce.com/articleView?id=mc_es_business_units.htm\&type=5) to import. Business unit available to be imported from Salesforce Marketing Cloud are located in the left column. Business units added to the right column will be imported into Lytics. Leave the right column empty to import from all business units. Depending on your authorization settings, leaving empty may cause the import to pull in the **All** subscriber list from Salesforce Marketing Cloud. To ensure importing from only the business units available to the selected authorization, you must select all the listed business units.\\

![sfmc business units](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3ce20d7b08a3cd5d/63c298966ed0fa81ab71f2ec/sfmc_business_units.png)

-   **Get Custom Subscriber Attributes**: Select to import custom subscriber attributes. This will cause your imports to take a longer time.
-   **Subscriber Properties**: Select the subscriber properties to import. One of subscriber key or ID must be selected. Properties in the left column are Salesforce Marketing Cloud properties available to import. Properties in the right column will be imported into Lytics. If no properties are selected, all properties will be imported.
-   **Subscriber Backfill Start Date**: Use in conjunction with **Subscriber Backfill End Date** to import a set of subscribers who already exist in Salesforce Marketing Cloud. Enter a date string, for example 2019-05-11, in the text box. All subscribers created beginning on this date until the end date will be imported into Lytics.
-   **Subscriber Backfill End Date**: Use in conjunction with **Subscriber Backfill Start Date** to import a set of subscribers who already exist in Salesforce Marketing Cloud. Enter a date string, for example 2019-05-11, in the text box. All subscribers created before this date but after the start date will be importing into Lytics.\\

![sfmc subscriber backfill](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7cd3abd7fe13298f/fcb891e28a433016ad1213ff/sfmc_subscriber_backfill.png)

-   **Activity Backfill Start Date**: Use in conjunction with **Activity Backfill End Date** to import a set of activity data that already exists in Salesforce Marketing Cloud. Enter a date string, for example 2019-05-11, in the text box. All activity recorded beginning on this date until the end date will be importing into Lytics. **NOTE**: Importing more than 6 months of activity data can slow down processing time with little actionable benefit.
-   **Activity Backfill End Date**: Use in conjunction with **Activity Backfill Start Date** to import a set of activity data that already exists in Salesforce Marketing Cloud. Enter a date string, for example 2019-05-11, in the text box. All activity recorded before this date but after the start date will be importing into Lytics.![sfmc activities select](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcbeec72eeb17d0fb/968da819822db01da78b623d/sfmc_activities_select.png)
-   **Activities**: Use this input to select a subset of Salesforce Marketing Cloud activities to import. In most cases you can leave the right column empty to import all activities. Activities in the left column are Salesforce Marketing Cloud activities available to import. Activities in the right column will be imported into Lytics. **NOTE**: In large accounts importing all activities, particularly Opens may cause the activity import to not keep up in real time.![sfmc activities select](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcbeec72eeb17d0fb/968da819822db01da78b623d/sfmc_activities_select.png)

1.  Click **Start Import**.

Salesforce Marketing Cloud data should start populating in Lytics within a few minutes.

## Import Audiences & Activity Data

Data Extensions can be used to store a wide variety of information in Salesforce Marketing Cloud. The Data Extension Import allows you to bring that data into Lytics to get a more complete picture of your users.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST and SOAP API Integration
-   **Frequency**: Batch Integration (continuous update by default).
-   **Resulting data**: User Profiles , User Fields , Raw Event Data, Metrics

This integration utilizes the [Salesforce Marketing Cloud APIs](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/index-api.htm) to send user data. Once the import is started the job will:

1.  Construct the [retrieve request](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/simplefilterpart.htm) for the Data Extension's rows.
    -   If no **timestamp** field was selected, or this is the first run of the import, all rows are requested.
    -   If a **timestamp** field was selected, and this is not the first run of the export, the rows are filtered to only include rows with a timestamp later than the last timestamp previously imported.
2.  Page through the retrieved [Data Extension's rows](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_dataextension_object.htm) and ingest them into the selected data stream.

### Fields

There are no default mapped fields because of the variety of information that can be stored in a Data Extension. You will select which **Fields** to import during the configuration described below.

### Configuration

Follow these steps to set up and configure an import of Salesforce Marketing Cloud data in the Lytics platform.If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Salesforce Marketing Cloud** from the list of providers.
2.  Select the **Import Audiences & Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/salesforce-integrations/salesforce-marketing-cloud/authorization).
4.  From the **Data Extension** input, select the Marketing Cloud Data Extension to import data from.
5.  From the **Stream** text input, enter the data stream you would like to import data to.
6.  From the **Timestamp Field** input, select the field that represents the event time for the data in the Data Extension. If this field is not selected for a continuous import, all data will be imported during each cycle.
7.  From the **Fields** input, select the fields to import from the Data Extension.
8.  Select the **Keep Updated** checkbox to run this import continuously. A timestamp field should be selected to prevent duplicate data.
9.  Click on the **Show Advanced Options** tab to expand the advanced configuration.
10.  From the **Import Frequency** input, choose how often a continuous import should attempt to read new data.
11.  From the **Time of Day** input, select the time of day to start the import.
12.  From the **Timezone** input, select the timezone for the time of day.
13.  Click **Start Import**.

## Export Audience To Existing Data Extension

Exporting a Lytics audience to Salesforce Marketing Cloud data extensions allows you to send email, push notifications, or SMSs to your users based on your own, relevant targeting criteria, such as cross-channel behavior, content affinities, and more.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST and SOAP API Integration
-   **Frequency**: Batch Integration (continuous update by default).
-   **Resulting data**: Data pushed to a Marketing Cloud data extension.

This integration utilizes both the Marketing Cloud REST and SOAP API Integration to push a Lytics Audience to a data extension in Marketing Cloud.

1.  If non-scalar fields are selected, then new data extensions may be created for them. The data extensions for non-scalar fields will be named Lytics\_<field name>\_field where <field name> is the name of the non-scalar field.
2.  The mapped user fields for the users in the Lytics audience will be continually updated in the data extension, with rows being [added](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/postDataExtensionRowsetByKey.htm) or removed by calling a [DataExtensionObject](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/dataextensionobject.htm) add/remove call as users enter/exit the audience.

### Fields

There are no default fields exported into the data extension. If you are creating a new data extension, you will select a field to be the Marketing Cloud subscriber key. Usually email or the Marketing Cloud subscriber key is selected as the identifier. If you are exporting to an existing data extension, you will map the Lytics fields to your data extension fields during the configuration.

### Configuration

Follow these steps to set up and configure an export from Lytics to a Marketing Cloud Data Extension.If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

Select **Salesforce Marketing Cloud** from the list of providers.

1.  Select **Salesforce Marketing Cloud** from the list of providers.
2.  Select the export **Export Audience To Existing Data Extension** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job.
8.  (optional) From the **Business Unit** input, select the business unit where the data extension exists. Leave empty to export to your base Marketing Cloud account.
9.  From the **Data Extension** input, select the Data Extension to export to.
10.  From the **Subscriber Key Field** input, select the Lytics field containing the subscriber key for the exported data extension. **NOTE: you must map your selected key field in the mapping section below**.
11.  From the **Map Fields** input, select all the fields to send to Marketing Cloud by mapping the Lytics user profile field on the left to the Marketing Cloud field on the right. If you select set fields here, they will be sent as a comma-separated list in the field. To send set fields in a separate join table, select in the non-scalars list below. **NOTE: This section is only applicable if you are exporting to an existing data extension. You must map your selected subscriber key field in this section**.
12.  (optional) From the **Non-Scalar Fields** input, choose the non-scalar fields to export **NOTE: these will each be created in a separate data extensions**.
13.  (optional) From the **Folder** input, select the Marketing Cloud Folder to export user data to.
14.  (optional) Select the **Existing Users** checkbox, to select to add users who already exist in the selected Lytics audience.
15.  Click the **Complete** button to start the job.

## Export Audience To New Data Extension

Exporting a Lytics audience to Salesforce Marketing Cloud data extensions allows you to send email, push notifications, or SMSs to your users based on your own, relevant targeting criteria, such as cross-channel behavior, content affinities, and more.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST and SOAP API Integration
-   **Frequency**: Batch Integration (continuous update by default).
-   **Resulting data**: Data pushed to a Marketing Cloud data extension.

This integration utilizes both the Marketing Cloud REST and SOAP API Integration to push a Lytics Audience to a data extension in Marketing Cloud.

1.  A new data extension will be created to store the non-scalar fields selected. If non-scalar fields are selected, then new data extensions may be created for them. The data extensions for non-scalar fields will be named Lytics\_<field name>\_field where <field name> is the name of the non-scalar field.
2.  The mapped user fields for the users in the Lytics audience will be continually updated in the data extension, with rows being [added](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/postDataExtensionRowsetByKey.htm) or removed by calling a [DataExtensionObject](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/dataextensionobject.htm) add/remove call as users enter/exit the audience.

### Fields

There are no default fields exported into the data extension. If you are creating a new data extension, you will select a field to be the Marketing Cloud subscriber key. Usually email or the Marketing Cloud subscriber key is selected as the identifier. If you are exporting to an existing data extension, you will map the Lytics fields to your data extension fields during the configuration.

### Configuration

Follow these steps to set up and configure an export from Lytics to a Marketing Cloud Data Extension. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

Select **Salesforce Marketing Cloud** from the list of providers.

Select **Salesforce Marketing Cloud** from the list of providers.

1.  Select the export **Export Audience To New Data Extension** from the list.
2.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
3.  Enter a **Label** to identify this job you are creating in Lytics.
4.  (Optional) Enter a **Description** for further context on your job.\\

marketingcloud

1.  Select the audience to export.
2.  Complete the configuration steps for your job.
3.  (optional) From the **Business Unit** input, select the business unit where the data extension exists. Leave empty to export to your base Marketing Cloud account.
4.  From the **Subscriber Key Field** input, select the Lytics field containing the subscriber key for the exported data extension. **NOTE: If you are exporting to an existing data extension, you must map your selected key field in the mapping section below**.
5.  From the **Subscriber Key Field Type** input, select the Marketing Cloud type of the Subscriber Key.
6.  From the **Scalar Fields** input, when creating a new data extension, choose the all the fields to export to the user table. If you select set fields here, they will be sent as a comma-separated list to a single field in the user table. To send set fields in a separate join table, select the field in the non-scalars list below. **NOTE: these all will be created in the same data extension**.
7.  From the **Non-Scalar Fields** input, choose the non-scalar fields to export **NOTE: these will each be created in a separate data extensions**.
8.  (optional) From the **Folder** input, select the Marketing Cloud Folder to export user data to.
9.  (optional) Select the **Existing Users** checkbox to add users who already exist in the selected Lytics audience.
10.  (optional) Select the **Sendable and Testable** checkbox to when creating a new data extension, select this to make the new data extension sendable and testable.
11.  Click the **Complete** button to start the job.

## Export Lists

This job type allows you to sync Lytics audiences and profile data in real-time to Salesforce Marketing Cloud for targeting your email communications.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: SOAP API Integration, Audience Trigger Integration
-   **Frequency**:\\ Real-time Integration
-   **Resulting data**:\\

Each profile in the Lytics audience is added to the Marketing Cloud list as a [Subscriber](https://help.salesforce.com/articleView?id=mc_es_subscribers.htm\&type=5). [User fields](/docs/lytics/integrated-marketing-tools#user-fields) are included as [Subscriber Attributes](https://help.salesforce.com/articleView?id=mc_es_profile_pref_attributes.htm\&type=5).

This integration utilizes the [Marketing Cloud SOAP API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/web_service_guide.htm) to send user data. Once the export is started the job will:

1.  If the **Existing Users** option is selected (see below), the job will generate enter events for every user in the Lytics audience. After these are processed via steps 2-4 below, the job will listen for enter/exit events and process them accordingly.
2.  Ensure the user has an email field.
3.  Package the user as a Marketing Cloud Subscriber. If fields are mapped (see step 8 of Configuration), they are added to the subscriber as attributes.
4.  If it's an enter event, the user is added to the list using a SOAP "CREATE" [method](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_subscribers_to_a_list.htm). If the user already exists, it will be added to the list and updated with the mapped fields.
5.  If it's an exit event, one of the following will occur:
    -   If the **Unsubscribe on Exit** option is NOT selected, the event will be ignored.
    -   If the **Unsubscribe on Exit** option is selected, the user will be unsubscribed from the list via the process described [here](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_subscribers_on_lists.htm).

### Fields

By default, Lytics exports the following field to Salesforce Marketing Cloud for the Export Lists job.

| Lytics User Field | Description | SFMC Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |

### Configuration

Follow these steps to set up and configure an export of lists to Salesforce Marketing Cloud from the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Salesforce Marketing Cloud** from the list of providers.
2.  Select the **Export Audiences (Lists)** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  From the **Audience** dropdown, choose the Lytics audience to send to Marketing Cloud.
5.  From the **Email Field** dropdown, select the field that has the user's email.
6.  From the **List to Update** input, select the Marketing Cloud list to update. If none is selected, a new list will be created with the form lytics\_{audience\_name}.
7.  From the **Map Fields**, select all the fields to send to Marketing Cloud by mapping the Lytics user profile field on the left to the Marketing Cloud field on the right.
8.  (Optional) From the **Subscriber Key Field** input, select the Lytics field containing the subscriber key for the exported list. It allows multiple Marketing Cloud subscribers to have the same email address.
9.  (Optional) Select the **Existing Users** checkbox to immediately push users who currently exist in the selected Lytics audience. Deselecting will only push users as they enter or exit the audience.
10.  (Optional) Select the **Unsubscribe on Exit** checkbox to unsubscribe a user from the list when they exit the Lytics audience. Deselecting will ignore exit events
11.  Click **Complete** to start the job.

## Trigger Journey

Push users into a Marketing Cloud journey when users enter a Lytics audience to send event-driven, responsive campaigns across any channel.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST and SOAP API Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: Selected data is sent to Marketing Cloud journey.

This integration utilizes the REST and SOAP API Integration to push data to a Marketing Cloud journey. When the export is started the job will:

1.  As users enter the selected Lytics audience, a Marketing Cloud [journey event is fired](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/postEvent.htm) with the selected user data being mapped to data fields.

### Fields

There are two required fields, ContactKey and EventDefinitionKey, that are selected in configuring the job and sent to the Marketing Cloud journey. Additional Lytics user fields can be mapped to Marketing Cloud journey data fields when setting up the job.

### Configuration

Follow these steps to set up and configure the export to a Marketing Cloud journey in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Salesforce Marketing Cloud** from the list of providers.
2.  Select the **Export Audiences to Trigger Journey** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  From the **Audience** input, select the Lytics audience to send to Marketing Cloud.
5.  Select the **Event Definition** to select the Marketing Cloud Event Definition to write to. This selection is populated from Marketing Cloud.
6.  From the **Map Fields** , select all the fields to send to Marketing Cloud by mapping the Lytics user profile field on the left to the Marketing Cloud field on the right.
7.  From the **Contact Key** input, select the mapped field from above that contains the ID that uniquely identifies a Marketing Cloud subscriber.
8.  From the **Audience Field** input, select a field to write the additional Lytics audiences to.
9.  From the **Additional Audience Membership** input, select additional Lytics audiences to send to the Audience Field specified above. Audience slugs will be sent concatenated by a comma, field may be limited by size
10.  From the **Existing Users** checkbox, trigger events for users who already exist in the selected Lytics audience. The default option is to leave this unchecked and only initiate events as users enter the Lytics audience from the start of the work onward. However, to send events for all the users that are currently in the Lytics audience, check this checkbox.
11.  Click **Complete** to start the job.

This export will run continuously until it is terminated by a user. For every new user that enters the chosen Lytics audience, the selected data will be written to the Marketing Cloud trigger journey data extension within a couple of minutes.

## Experiences

[Lytics Experiences](/docs/lytics/experiences#experiences-quick-start) support Salesforce Marketing Cloud journeys based on your data extensions or triggered API events. These Experiences are best kept as simple email journeys with a single email send action. Any actions beyond the first email send will not be counted in reach and conversion metrics. To manage the full customer lifecycle, you can create multiple Salesforce Marketing Cloud Experiences, each with a single email send, in the Lytics Canvas.

### Experience Import

Like all Experience enabled providers, you can [import Experiences](/docs/lytics/importing-external-experiences#importing-external-experiences) from Salesforce Marketing Cloud to Lytics. During the import process, you will be asked to select an authorization. Read the [Salesforce Marketing Cloud authorization documentation](#authorization) for more information.

![experience-import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambfd45085e1609703/51cb518d0c558e50c6b9454e/experience-import.png)

### Tactics

Tactics are determined by the journey's [entry source](https://help.salesforce.com/articleView?id=mc_jb_entry_sources.htm\&type=5).\\ Salesforce Marketing Cloud Experiences in Lytics support the following tactics:

-   **API Event** - Send responsive campaigns in real-time using API-driven entry to a journey. This option supports Delivery Optimization from Lytics.
-   **Data Extension** - Send scheduled emails (e.g. newsletters and event notifications) using data extension-driven entry to a journey.

### Configuration

After importing a Salesforce Marketing Cloud Experience you can configure it for activation. All tactics for Salesforce Marketing Cloud have the same three configuration steps within the [Experience Editor](/docs/lytics/experiences#experience-editor):

1.  **[Target](/docs/lytics/experiences#target)** - select the target audience for your Experience.
2.  **[Configure SalesForce Marketing Cloud](/docs/lytics/experiences#experience-editor)** - set up how the audience for your Experience will be exported. This step will match the configuration instructions of the following jobs based on tactic:
    -   [Triggered Journey export](/docs/lytics/salesforce-marketing-cloud-overview#trigger-journey) for API Event tactics.
    -   [Data Extension export](/docs/lytics/salesforce-marketing-cloud-overview#export-audiences) for Data Extension tactics.

The activation will generally function the same as the export jobs, but with some changes:

1.  There will be no **Audience** selection as it is configured by the **Target** step in the Experience editor.
2.  The **Event Definition** or **Data Extension** will not be available (depending on tactic), as these are set by the Experience.
3.  **[Configure Delivery](/docs/lytics/experiences#configure-delivery)** - choose to turn the Delivery Optimization feature on or off, which only applies to the API Event tactic since it is real-time. The Data Extension tactic does not benefit from Delivery Optimization since the journey is scheduled to activate at a specific time.

Once you've finished configuring the Experience you can save and activate it.

### Activation

Activating Salesforce Marketing Cloud Experiences will export users and populate a Data Extension, but the exact method depends on the Experience tactic.

#### API Event Tactics

The API Event tactic will push users via the [Triggered Journey export](/docs/lytics/salesforce-marketing-cloud-overview#trigger-journey). The users sent to Salesforce Marketing Cloud will be [stored in a data extension](https://help.salesforce.com/articleView?id=mc_jb_admit_contacts_via_api.htm\&type=5).

**NOTE:** For this tactic, you will activate the Salesforce Marketing Cloud journey before activating the Lytics Experience so that it is ready to process incoming events. If Delivery Optimization is enabled, the API event will be sent at the best time to email the user. No delay should be configured in the Salesforce Marketing Cloud journey between user entry and email send.

1.  Navigate to the Journey Builder in Salesforce Marketing Cloud.
2.  Select your journey from the list of journeys in Salesforce Marketing Cloud.
3.  Click the **Activate** button to activate the journey in Salesforce Marketing Cloud.![sfmc API Journey](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am94b5ca30b4a67303/af6faef05e9cdd500fafccdc/sfmc_API_Journey.png)
4.  Navigate to your [Lytics Experience](https://activate.getlytics.com/experiences).
5.  Click on your Experience.
6.  Click **Activate**. If the **Activate** button is disabled, you will need to follow the instructions in the [Configuration](#configuration) section above to set up the Experience.

#### Data Extension Tactics

The Data Extension tactic will push users via the [Data Extension export](/docs/lytics/salesforce-marketing-cloud-overview#trigger-journey). The Salesforce Marketing Cloud journey will evaluate the Data Extension once the journey is activated.

**NOTE:** For this tactic, you will activate the Experience in Lytics before activating the journey in Salesforce Marketing Cloud, which gives the export time to populate the Data Extension. Exact timing will depend on your audience size, among other factors.

1.  Navigate to your [Lytics Experience](https://activate.getlytics.com/experiences).
2.  Click on your Experience.
3.  Click **Activate**. If the **Activate** button is disabled, you will need to follow the instructions in the [Configuration](#configuration) section above to set up the Experience.
4.  Navigate to the Journey Builder in Salesforce Marketing Cloud.
5.  Select the journey from the list of journeys.
6.  Click the **Activate** button to activate the journey. If the journey is configured with a schedule, the journey will trigger on the selected date(s). If the journey is configured to trigger immediately, then the journey will run once you click **Activate**. There are options [for configuring a data extension journey](https://help.salesforce.com/articleView?id=mc_jb_data_extension.htm\&type=5).

![sfmc DE Journey](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2484b4573000b36b/0f1d3c0bfa932b9f09d59568/sfmc_DE_Journey.png)

### Metrics

Salesforce Marketing Cloud metrics are collected through the [Retrieve API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/retrieve.htm) to populate the [reach and conversion metrics](/documentation/product/features/experiences/overview#experience-metrics) for Salesforce Marketing Cloud Experiences.

![API-experience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8974bcba71028de3/0573ae265863158865c183d2/API-experience.png)

Metrics from the SalesForce Marketing Cloud are mapped to Lytics as follows:

-   **Reach** - Impressions are counted by the number of users who have opened the email sent by the Experience. Lytics will retrieve all the [OpenEvents](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/openevent.htm) from Salesforce Marketing Cloud for the Experience.
-   **Converted** - Conversions are counted by the number of users who have clicked a link in the email sent by the Experience. Lytics will retrieve all the [ClickEvents](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/clickevent.htm) from Salesforce Marketing Cloud for the Experience.

These events are also mapped to the Lytics user fields **Reached with SFMC Experience** and **Converted on SFMC Experience**, which are available in the audience builder so that you can create audiences of users who have been reached by or converted on your Salesforce Marketing Cloud Experiences.
