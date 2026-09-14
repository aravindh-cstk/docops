---
title: "SendGrid"
description: "SendGrid"
url: /lytics/sendgrid
---

# SendGrid

## SendGrid

## Overview

[SendGrid](https://sendgrid.com/) is a cloud-based transactional email service and email marketing platform.

Integrating Lytics with SendGrid allows you to import email and other user activity data (such as opens and clicks) or export Lytics' cross-channel, behavior-driven audiences to build and send personalized marketing campaigns from SendGrid.

The [Lytics Goals](/docs/lytics/goals) supports SendGrid email Experiences. You can manage the cross-channel customer lifecycle with the Lytics Goals and use SendGrid marketing campaigns as your email touchpoints.

## Authorization

If you haven't already done so, you will need to setup a SendGrid account before you begin the process described below.

To authorize a SendGrid workflow, you must provide a SendGrid API key so Lytics can communicate with SendGrid's APIs to send and receive data from your account. For instructions on how to create an API key, refer to [SendGrid's API key documentation](https://sendgrid.com/docs/ui/account-and-settings/api-keys/#creating-an-api-key).

1.  Select **SendGrid** from the list of providers.
2.  Select the SendGrid method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter the SendGrid **API Key** that you generated.
6.  Click **Save Authorization**.

## Import Audiences

Importing user and activity data from SendGrid results in new users and/or existing user profiles supplemented with SendGrid campaign activity data. You can use this data to build and refine your existing Lytics audiences to power better, cross-channel campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: User import REST API Integration , Activity Webhook Integrations
-   **Frequency**: User data is done by a Batch Integration imported daily. Activity data, if configured, is received by a Real-time Integration
-   **Resulting data**: Full User Profiles for all SendGrid contacts or users in the selected lists. If configured, activity data related to marketing campaigns and transactional emails at the event level will be collected as additional User Fields

This integration utilizes the [SendGrid APIs](https://sendgrid.com/docs/API_Reference/api_v3.html) to receive user data. On each run of the job, it will:

1.  [Export all contacts](https://sendgrid.api-docs.io/v3.0/contacts/export-contacts) in your SendGrid account, or if you've configured import lists or segments, it will filter to only contacts in the selected lists and segments.
2.  For each contact imported it will:
3.  [Get that contact's list membership](https://sendgrid.api-docs.io/v3.0/contacts/get-a-contact-by-id).
4.  Ingest the collected user data into the `sendgrid_users` stream.

If the **Import email events** option is selected during the configuration process, on the first run of the job it will also:

1.  Check if [webhooks are set up in the SendGrid account](https://sendgrid.api-docs.io/v3.0/webhooks/retrieve-event-webhook-settings).
2.  Automatically [apply the proper settings](https://sendgrid.api-docs.io/v3.0/webhooks/update-event-notification-settings) to your SendGrid account to enable activity data to be sent to Lytics.
3.  After this, user activity is received in Lytics via webhook, reformatted on ingestion, and available in the `sendgrid_activity` stream.

### Fields

The following fields are included in the default mapping of the `sendgrid_users` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email `unique id` | Email | string |
| id | sendgrid\\\_id `unique id` | SendGrid User ID | string |
| email | emaildomain | Email Domain | string |
| first\\\_name | first\\\_name | First Name | string |
| last\\\_name | last\\\_name | Last Name | string |
| last\\\_clicked | sg\\\_last\\\_clicked | Last Clicked (SendGrid) | date |
| last\\\_emailed | sg\\\_last\\\_emailed | Last Emailed (SendGrid) | date |
| last\\\_opened | sg\\\_last\\\_opened | Last Opened (SendGrid) | date |
| list\\\_ids | sg\\\_list\\\_ids | SendGrid List IDs | \\\[\]string |
| list\\\_names | sg\\\_list\\\_names | SendGrid Lists | \\\[\]string |
| segment\\\_ids | sg\\\_seg\\\_ids | SendGrid Segment IDs | \\\[\]string |

Lytics will import all custom fields from SendGrid, however this stream does not automatically map these fields. If you would like to map the imported custom fields to Lytics user fields, contact [customer support](https://support.lytics.com/) for assistance.

The following fields are included in the default mapping of the `sendgrid_activity` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email `unique id` | Email | string |
| n/a | channels | the channel this event was received from, set to `email` | \\\[\]string |
| event | email\\\_bounce\\\_ct | Email Bounced | int |
| category | email\\\_category | Email Categories | map\\\[string\]intsum |
| event | email\\\_click\\\_ct | Email Clicked | int |
| event | email\\\_complaint\\\_ct | Email Complaint | int |
| timestamp | email\\\_first\\\_bounce\\\_ts | First Email Bounced | date |
| timestamp | email\\\_first\\\_complaint\\\_ts | First Email Complaint | date |
| timestamp | email\\\_first\\\_sent\\\_ts | First Email Sent | date |
| timestamp | email\\\_firstclick\\\_ts | First Email Clicked | date |
| timestamp | email\\\_firstopen\\\_ts | First Email Opened | date |
| timestamp | email\\\_last\\\_bounce\\\_ts | Last Email Bounced | date |
| timestamp | email\\\_last\\\_complaint\\\_ts | Last Email Complaint | date |
| timestamp | email\\\_last\\\_sent\\\_ts | Last Email Sent | date |
| timestamp | email\\\_lastclick\\\_ts | Last Email Clicked | date |
| timestamp | email\\\_lastopen\\\_ts | Last Email Opened | date |
| event | email\\\_open\\\_ct | Email Opened | int |
| event | email\\\_sent\\\_ct | Email Sent | int |
| url | email\\\_urls | Email Urls Clicked on | \\\[\]string |
| email | emaildomain | Email Domain | string |
| url | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| timestamp | last\\\_active\\\_ts | Last Active | date |
|  | last\\\_channel\\\_activities | Last Activity By Channel | map\\\[string\]time |
| bounce\\\_type | sg\\\_bounce\\\_type | SendGrid Bounce Type | \\\[\]string |
| marketing\\\_campaign\\\_name | sg\\\_campaigns | SendGrid Campaigns | \\\[\]string |
| experience\\\_id | sg\\\_conversions | Converted on SendGrid Experience | map\\\[string\]int |
| event | sg\\\_email\\\_action | SendGrid Email Actions | map\\\[string\]intsum |
| event | sg\\\_email\\\_opens | SendGrid Email Opens | int |
| reason | sg\\\_error\\\_reason |  | string |
| experience\\\_id | sg\\\_impressions | Reached with SendGrid Experience | map\\\[string\]int |

### Configuration

Follow these steps to set up and configure an import of SendGrid in the Lytics platform.If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **SendGrid** from the list of providers.
2.  Select the **Import Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Import Email Events** checkbox, to allow email event data to be sent to Lytics via webhooks. This will only turn on webhooks if they are not already configured to another destination within your SendGrid account. You can also manually set up SendGrid webhooks to go to Lytics by following [these instructions](/docs/lytics/sendgrid).
7.  From the **Import Lists** input, select the list(s) to import users from. If left blank, users will not be filtered by list.
8.  From the **Import Segments** input, select the segment(s) to import users from. If left blank, users will not be filtered by segment.
9.  Click **Start Import**. ![sendgrid-import-audiences-0521](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5c1de91a4571cbd4/9ff06538993cb590b213c8f5/img-0290.png)

## Export Audiences

Exporting a Lytics audience to SendGrid allows you to send a Single Send email to your users based on your own, relevant targeting criteria, such as: cross-channel behavior, content affinities, and more.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration and Audience Trigger Integration
-   **Frequency**: Real-time Integration, with a one-time Backfill of the audience after setup.
-   **Resulting data**: Lytics users that are a member of the selected audience(s) are exported as SendGrid contacts. A new SendGrid segment is created for each corresponding Lytics audience on the "All Contacts" list, or the list selected during [configuration](#configuration).

This integration utilizes the [SendGrid APIs](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-authentication) to send user data. Once the export is started the job will:

1.  [Create a new custom field in SendGrid](https://sendgrid.api-docs.io/v3.0/custom-fields/create-custom-field-definition) called `lytics_segments` to record Lytics audience membership.
2.  [Create new SendGrid segment(s)](https://sendgrid.api-docs.io/v3.0/segmenting-contacts/create-segment) on the list selected or on the "All Contacts" list if no list was selected in configuration.

The SendGrid segment(s) created by the job will ultimately contain the users from the exported Lytics audience(s). For example, if a Lytics audience named "High Value Users" with the id `5cecf2aa79b0a5641920e0607b95c793` is exported to SendGrid, you will see a new segment in SendGrid named "High Value Users". The definition of this segment will be `lytics_segments` contains `5cecf2aa79b0a5641920e0607b95c793`.

![SendGrid Segment](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5630dddc1e80c801/212d110571035a5eaae74876/img-0291.png)

After a backfill, the job will receive real-time updates when a user enters or exits the audience. For each user to export, regardless if the user is being added as part of the backfill, or they're entering/exiting the audience in realtime, it will:

1.  [Create the users as contacts in SendGrid](https://sendgrid.api-docs.io/v3.0/contacts/add-or-update-a-contact).
2.  If a list was selected in [configuration](#configuration) the users will be added to the list as part of the update.

The `lytics_segments` field is automatically populated with the a comma separated list of Lytics audience IDs the user is currently a member of. That is, once a user leaves the audience in Lytics, this field will be updated in SendGrid, and they will be removed from the SendGrid segment. Users will not automatically be removed from your SendGrid account, or the list your segment is on.

### Fields

By default, Lytics exports the following fields to SendGrid. You can export any Lytics user field to a custom SendGrid field, so long as the field type is a `string`, `int` or `date`. You can customize the Lytics source fields as part of the job [configuration](#configuration).

| Lytics User Field | Description | SendGrid Field | Type |
| --- | --- | --- | --- |
| last\\\_name | Last Name | last\\\_name | string |
| first\\\_name | First Name | first\\\_name | string |
| email | Email | email | string |
|  |  | lytics\\\_segments | string |



**Note:** additional `lytics_segments` fields (with an integer suffix e.g. `lytics_segments_1`) may be created if the total number of segments exported exceeds the max field size.

### Configuration

Follow these steps to set up and configure an export of users to SendGrid in the Lytics platform.If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **SendGrid** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Using the **Audiences** input, you may select Lytics audiences to export to SendGrid. Audiences in the right column will be exported.
7.  To use a non-default user field for email, select a field from the **Email Field** dropdown.
8.  (Optional) Toggle **Show Advanced Options** to reveal the following options.
9.  (Optional) Select a field from the **First Name Field** dropdown to use a non-default user field for first name.
10.  (Optional) Select a field from the **Last Name Field** dropdown to use a non-default user field for last name.
11.  (Optional) Select a list from the **Export to List** dropdown if you would like to export your users to segment(s) on a list within SendGrid.
12.  (Optional) Using the **Custom Field Mappings** you can map additional Lytics User fields to custom fields in SendGrid
13.  Click **Start Export**. ![SendGrid Export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3241a5ec6392853b/23cfc5b430ddce80ad9a4c92/img-0292.png)

## Export Audiences (Triggered Emails)

You can use Lytics to trigger a SendGrid transactional email to your customers when they enter a Lytics audience. For example, send a welcome email when a customer moves from unknown to known, or a retention email when a customer becomes disengaged.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration with Audience Trigger Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: An email sent to users entering the Lytics audience selected with the SendGrid templated selected. The payload of this send request may be populated with Lytics profile data and content recommendations for the user depending on configuration.

The job uses SendGrid's [v3 Mail Send API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/index.html) to deliver emails with the template you select during configuration. Thus before you can set up this job, you must first have created the dynamic transactional template you will use [in your SendGrid account](https://sendgrid.com/dynamic_templates). Each time a user enters the audience selected during configuration, the job will:

1.  Populate a payload with Lytics user profile fields and content recommendations as described in the [fields section below](#fields).
2.  Use the [Mail Send API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/index.html) to trigger the email.

The job will then wait for more users to enter the audience, and repeat this process as necessary.

**Note:** SendGrid's v3 API does not support "Legacy" Transactional Templates, thus they are not supported by this integration. If you have any legacy templates in your SendGrid account, they will not be available to choose from when selecting the template for this job. Please ensure that you first migrate any existing legacy template you may want to use. See SendGrid's legacy template migration [documentation here](https://sendgrid.com/docs/ui/sending-email/migrating-from-legacy-templates).

### Fields

As mentioned above, the payload to the SendGrid Mail Send endpoint is populated with the following keys under `personalizations.dynamic_template_data`:

-   **User Fields**: Populated as key/value pairs where the key is the name of the user field.
-   **Content Recommendations**: Stored under the `recommendations` key. See the example below for formatting.

Example email payload:

```
{
    "template_id": "abc",
    "from": {
        "email": "sender@senddomain.com"
    },
    "reply_to": {
        "email": "sender@senddomain.com"
    },
    "personalizations": [{
        "to": [{
            "email": "example02@domain.com",
            "name": "Full Name"
        }],
        "dynamic_template_data":{
            "name":"Sample Name",
            "address01":"1234 Fake St.",
            "address02":"Apt. 123",
            "city":"Place",
            "recommendations": [
                {  
                    "url":"www.getlytics.com/blog/post/intent_through_content",
                    "title":"Understanding User Intent Through Content",
                    "description":"Customer Intent comes from understanding the connection between engagement and its contexts. Content modeling and affinity graphs makes interpretation of intent a lot easier. Learn how marketers can benefit from this.",
                    "topics":[  
                        "customer data platform",
                        "data science",
                        "content marketing",
                        "personalization"
                    ],
                    "topic_relevances":{  
                        "content marketing":1,
                        "customer data platform":1,
                        "data science":1,
                        "personalization":1
                    },
                    "primary_image":"https://www.getlytics.com/img/blog/posts/intent_through_content/intent_through_content-bg.gif",
                    "author":"",
                    "created":"2016-06-08T16:11:45.599594093Z",
                    "id":"-3435113786560588929",
                    "sitename":"Lytics",
                    "stream":"default",
                    "path":[  
                        "blog",
                        "blog/post",
                        "blog/post/intent_through_content"
                    ],
                    "aspects":[  
                        "article"
                    ],
                    "language":"unknown",
                    "updated":"2016-06-09T12:49:36.870359765Z",
                    "fetched":"2016-06-09T12:49:35.812654441Z",
                    "meta":[  
                        "og:locale/en_us",
                        "og:site_name/lytics",
                        "og:title/understanding user intent through content",
                        "og:type/article",
                        "og:url/https://www.getlytics.com/blog/post/intent_through_content"
                    ],
                    "confidence":0.5916079783099615,
                    "visited":true
                }
            ]
        }
    }]
}
```

### Configuration

Follow these steps to set up and configure the SendGrid triggered email export in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **SendGrid** from the list of providers.
2.  Select the **Export Audiences (Triggered Emails)** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  In the **Audience** drop-down list, select a Lytics audience. These are the users who will receive the email.
7.  In the **From Email Address** field, enter the email address that you would like the email to appear to be sent from.
8.  In the **Template** drop-down list, select the template you would like to use. (This list is populated with the dynamic transactional templates that exist in your SendGrid account. If you don't see the template you wanted to use, double-check the [Dynamic Transactional Templates section](https://sendgrid.com/dynamic_templates) of your SendGrid account)
9.  (Optional) Under **Show Advanced Options**, you have additional configuration options you may wish to set/change:
10.  (Optional) From the **Email Field** drop-down list, select the Lytics user field in your account that contains the user's email address. By default, this will simply "Email Address", but if there is another field you'd like to use, you can change it here.
11.  (Optional) In **Name Field** drop-down list, you can optionally select the Lytics user field that contains the email recipient's name (eg, "Full Name").
12.  (Optional) In **Fields to Include**, you can select additional Lytics user fields that you would like to send to SendGrid in order to personalize the email. (See the [personalize the email](#personalize-the-email) section below.)
13.  (Optional) Select **Existing Users** to send emails to users who already exist in the selected audience.
14.  Click **Start Export**.

![sendgrid confg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am27f1bdaac1de0fe8/f7445dd2266a346610eb770e/img-0293.png)

### Personalizing the Email

In this integration, you can send Lytics user fields to SendGrid for use in personalizing the email. It's important to design and test your template carefully before setting up this job to ensure your emails will look the way you want them to.

SendGrid dynamic templates support Handlebars syntax for substitution ([see SendGrid's docs about using Handlebars here](https://sendgrid.com/docs/for-developers/sending-email/using-handlebars/#substitution)), so you just need to make sure that your template has the right variable name for the Lytics user field that are being sent.

Let's say you want to personalize our email to show a known user's first name in the greeting line. There is a user field, called "First Name" (the slug for which is **`first_name`**). You can see the slug for the field in parentheses in the "Fields To Include" section when you are configuring the job.

In SendGrid, the template HTML should look something like this (such that the variable name matches the Lytics user field slug exactly):

```
<h1>Welcome, {{first_name}}!<h1>
```

## Import Audiences (Legacy)

Importing user and activity data from SendGrid results in new users and/or existing user profiles supplemented with SendGrid campaign activity data. You can use this data to build and refine your existing Lytics audiences to power better, cross-channel campaigns.

Only use this job if you are still using SendGrid's legacy marketing campaigns API

For more information, see how to [migrate from legacy marketing campaigns](https://sendgrid.com/docs/ui/sending-email/migrating-from-legacy-marketing-campaigns/). If you are using the current Marketing API in SendGrid, please use the standard [Import Users](#import-audiences) job.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration, Webhook Integration
-   **Frequency**: User data is Batch Integration imported daily, on a continuous basis. Activity data, if configured, is received in Real-time Integration
-   **Resulting Data**: Full User Profiles for all SendGrid contacts or users in the selected lists. If configured, activity data related to marketing campaigns and transactional emails at the event level will be collected as additional User Fields.

This integration utilizes the [SendGrid APIs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html) to receive user data. On each run of the job, it will:

1.  [Query for all contacts](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html#List-Recipients-GET) in your SendGrid account, or if you've configured **Import Lists**, it will [query for recipients of those lists](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html#List-Recipients-on-a-List-GET).
2.  For each contact that has been updated since the last run of the workflow (or for all users on the first run of the job) it will:
3.  Query for [list membership](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html#Get-the-Lists-the-Recipient-Is-On-GET) of that user.
4.  Ingest the collected user data into the `sendgrid_users` stream.

If the **Import email events** option is selected during the [configuration process](#configuration), on the first run of the job it will also:

1.  Check if [webhooks are set up in the SendGrid account](https://sendgrid.api-docs.io/v3.0/webhooks/retrieve-event-webhook-settings).
2.  Automatically apply the proper settings to your SendGrid account to enable activity data to be sent to Lytics.
3.  After this, user activity is received in Lytics via webhook, reformatted on ingestion, and available in the `sendgrid_activity` stream.

**Note:** If you've already configured webhooks to send to another destination in your account, this job will not overwrite your existing settings. You can manually set up SendGrid webhooks to go to Lytics by following [these instructions](/docs/lytics/sendgrid).

### Fields

The following fields are included in the default mapping of the `sendgrid_users` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email `unique id` | Email | string |
| email | emaildomain | Email Domain | string |
| first\\\_name | first\\\_name | First Name | string |
| id | sendgrid\\\_id `unique id` | SendGrid User ID | string |
| last\\\_clicked | sg\\\_last\\\_clicked | Last Clicked | date |
| last\\\_emailed | sg\\\_last\\\_emailed | Last Emailed | date |
| last\\\_name | last\\\_name | Last Name | string |
| last\\\_opened | sg\\\_last\\\_opened | Last Opened | date |
| list\\\_ids | sg\\\_list\\\_ids | SendGrid List IDs | \\\[\]string |
| list\\\_names | sg\\\_list\\\_names | SendGrid Lists | \\\[\]string |

Lytics will import any and all custom fields from SendGrid, however this stream does not automatically map these fields. If you would like to map the imported custom fields to Lytics user fields, contact [customer support](https://support.lytics.com/) for assistance.

The following fields are included in the default mapping of the `sendgrid_activity` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| event | email\\\_open\\\_ct  
email\\\_sent\\\_ct  
email\\\_click\\\_ct  
email\\\_complaint\\\_ct  
email\\\_bounce\\\_ct  
sg\\\_email\\\_opens  
sg\\\_email\\\_action | Email Opened  
Email Send  
Email Clicked  
Email Complaint  
Email Bounced  
SendGrid Email Opens  
SendGrid Email Actions | int  
int  
int  
int  
int  
int  
map\\\[string\]int |
| timestamp | last\\\_active\\\_ts  
email\\\_lastopen\\\_ts  
email\\\_firstopen\\\_ts  
email\\\_last\\\_sent\\\_ts  
email\\\_first\\\_sent\\\_ts  
email\\\_lastclick\\\_ts  
email\\\_firstclick\\\_ts  
email\\\_last\\\_complaint\\\_ts  
email\\\_first\\\_complaint\\\_ts  
email\\\_last\\\_bounce\\\_ts  
email\\\_first\\\_bounce\\\_ts | Last Active  
Last Email Opened  
First Email Opened  
Last Email Sent  
First Email Clicked  
First Email Sent  
Last Email Clicked  
Last Email Complaint  
First Email Complaint  
Last Email Bounced  
First Email Bounced | date  
date  
date  
date  
date  
date  
date  
date  
date  
date  
date |
| bounce\\\_type | sg\\\_bounce\\\_type | SendGrid Bounce Type | \\\[\]string |
| reason | sg\\\_error\\\_reason |  | string |
| category | email\\\_category | Email Categories | map\\\[string\]int |
| url | email\\\_urls  
hashedurls | Email Urls Clicked on  
Hashed Urls Visited | \\\[\]string  
map\\\[string\]int |
| marketing\\\_campaign\\\_name | sg\\\_campaigns | SendGrid Campaigns | set |
| "email" | channels  
last\\\_channel\\\_activities | Channels  
Last Activity By Channel | \\\[\]string  
map\\\[string\]date |
| email | email `unique id`  
emaildomain | Email  
Email Domain | string  
string |
| experience\\\_id | sg\\\_impressions  
sg\\\_conversions | Reached with SendGrid Experience  
Converted on SendGrid Experience | map\\\[string\]int  
map\\\[string\]int |

### Configuration

Follow these steps to set up and configure a legacy import of SendGrid users in the Lytics platform.If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **SendGrid** from the list of providers.
2.  Select the **Import Audiences(Legacy)** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (Optional) Select the **Import email events** checkbox if you want to import activity data via webhooks. As noted above, this will only turn on webhooks if they are not already configured to another destination within your SendGrid account. You can also manually set up SendGrid webhooks to go to Lytics by following [these instructions](/docs/lytics/sendgrid).
7.  (Optional) Under **Advanced Options** you may select a limited number of lists to import using the **Import Lists** selection. If not selected, the import will default to collect data on all contacts.
8.  Click **Start Import**. ![Screenshot from 2019-05-23 19-51-35](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama8cb5ac5977b2b59/c836dc33b44ea420045e90bb/img-0294.png)

## Export Audiences (Legacy)

Exporting a Lytics audience to SendGrid allows you to send a Marketing Campaign email to your users based on your own, relevant targeting criteria, such as: cross-channel behavior, content affinities, and more.

Only use this job if you are still using SendGrid's legacy marketing campaigns API

For more information, see how to [migrate from legacy marketing campaigns](https://sendgrid.com/docs/ui/sending-email/migrating-from-legacy-marketing-campaigns/). If you are using the current Marketing API in SendGrid, please use the standard [Export Users](/docs/lytics/sendgrid) job.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration and Audience Trigger Integration
-   **Frequency**: Real-time Integration, with a one-time Backfill of the audience after setup.
-   **Resulting Data**: Lytics users that are a member of the selected audience(s) are exported as SendGrid contacts. A new SendGrid segment is created for each corresponding Lytics audience on the "ALL CONTACTS" list, or the list selected during [configuration](#configuration).

This integration utilizes the [SendGrid APIs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html) to send user data. Once the user initiates an export the job will:

1.  [Create a new custom field in SendGrid](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html#Create-a-Custom-Field-POST) called `lytics_segments` to record Lytics audience membership.
2.  [Create new SendGrid segment(s)](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html#Create-a-Segment-POST) on the list selected or on the "ALL CONTACTS" list if no list was selected in configuration.

The SendGrid segment(s) created by the job will ultimately contain the users from the exported Lytics audience(s). For example, if a Lytics audience named "High Value Users" with the id `87fa039a5d6649a68026a94c0c6d3f5e` is exported to SendGrid, you will see a new segment in SendGrid named "High Value Users." The definition of this segment will be `lytics_segments` contains the word `87fa039a5d6649a68026a94c0c6d3f5e`.

![segment definition](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am795384b3e736d70f/34c0f6b2812b0024bf82fde7/img-0295.png)

After a backfill, the job will receive real-time updates when a user enters or exits the audience. For each user to export, regardless if the user is being added as part of the backfill, or they're entering/exiting the audience in real-time, it will:

1.  [Create the users as contacts in SendGrid](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html#Add-Multiple-Recipients-POST).
2.  If a list was selected in [configuration](#configuration) it will then [add the recipients](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html#Add-Multiple-Recipients-to-a-List-POST) to the list.

The `lytics_segments` field is automatically populated with a comma separated list of Lytics audience IDs the user is currently a member of. That is, once a user leaves the audience in Lytics, this field will be updated in SendGrid, and they will be removed from the SendGrid segment. Users will not automatically be removed from your SendGrid account, or the list your segment is on.

### Fields

By default, Lytics exports the following fields to SendGrid. Note that you can customize the Lytics source fields as part of the job [configuration](#configuration):

| Lytics User Field | Description | SendGrid Field | Type |
| --- | --- | --- | --- |
| last\\\_name | Last Name | last\\\_name | string |
| first\\\_name | First Name | first\\\_name | string |
| email | Email | email | string |
|  |  | lytics\\\_segments | string |

You can also export any Lytics user field to a custom SendGrid field, so long as the field type is a `string`, `int` or `date`.

### Configuration

Follow these steps to set up and configure a legacy export of SendGrid users in the Lytics platform.If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **SendGrid** from the list of providers.
2.  Select the **Export Audiences (Legacy)** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Using the **Audiences** input, you may select Lytics audiences to export to SendGrid. Audiences in the right column will be exported.
7.  To use a non-default user field for email, select a field from the **Email Field** dropdown.
8.  (Optional) Toggle **Show Advanced Options** to reveal the following options.
9.  (Optional) Select a field from the **First Name Field** dropdown to use a non-default user field for first name.
10.  (Optional) Select a field from the **Last Name Field** dropdown to use a non-default user field for last name.
11.  (Optional) Select a list from the **Export to List** dropdown if you would like to export your users to segment(s) on a list within SendGrid.
12.  (Optional) Using the **Custom Field Mappings** you can map additional Lytics User fields to custom fields in SendGrid.
13.  Click **Start Export**.

![SendGrid Export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3241a5ec6392853b/23cfc5b430ddce80ad9a4c92/img-0292.png)

## Experiences

[Lytics Experiences](/docs/lytics/experiences)\## Experience Import

Like all Experience enabled providers, you can [import Experiences](/docs/lytics/experiences) from SendGrid to Lytics. During the import process, you will be asked to select an authorization. Read the [SendGrid authorization documentation](#authorization) for more information.

![SendGrid Experience Import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am95c47433d955efb1/98596b518d2995867e7ccaf5/img-0296.png)

### Tactics

SendGrid Experiences in Lytics support the following tactics:

-   **Single Send** - Sync a Lytics audience for a one-time email blast.
-   **Legacy Marketing Campaign** - Sync a Lytics audience for a one-time email blast to a legacy contact list for use in a [legacy campaign](https://sendgrid.com/docs/ui/sending-email/migrating-from-legacy-marketing-campaigns/).
-   **Transactional Email** - Send a transactional email to audience members whenever they enter a Lytics audience.

The tactic for an Experience is determined by the type of email created in SendGrid, [single send](https://sendgrid.api-docs.io/v3.0/single-sends), [campaign](https://sendgrid.api-docs.io/v3.0/campaigns-api/retrieve-all-campaigns), or [transactional template](https://sendgrid.api-docs.io/v3.0/transactional-templates/create-a-transactional-template). The [import list](#experience-import) is generated using all three of the endpoints in SendGrid.

### Configuration

After importing a SendGrid Experience you can configure it for activation. All tactics for SendGrid Experiences have the same three configuration steps within the [Experience Editor](/documentation/product/features/experiences/experience-editor):

1.  **[Target](/docs/lytics/experiences)** - select the target audience for your Experience.
2.  **[Configure SendGrid](/docs/lytics/experiences)** - set up how the audience for your Experience will be exported. This step will match the configuration instructions of the following jobs based on tactic:
3.  [Export Audiences](/docs/lytics/sendgrid) for Single Send tactics.
4.  [Export Audiences (Triggered Emails)](/docs/lytics/sendgrid) for Transactional Email tactics.
5.  [Export Audiences (Legacy)](/docs/lytics/sendgrid) for Legacy Marketing Campaign tactics.

The activation will generally function the same as the corresponding job, but without the **Audience** selection, as that is configured by the Target step in the Experience editor.

1.  **[Configure Delivery](/docs/lytics/experiences)** - choose to turn the Delivery Optimization feature on or off. Delivery Optimization is only supported by **Transactional Email** experiences because it is the only real time Experience type; **Single Send**, and **Legacy Marketing Campaign** Experiences are scheduled to send at a specific time and therefore cannot benefit from Delivery Optimization.

Once you've finished configuring the Experience you can save and activate it.

### Activation

**Single Send** and **Legacy Marketing Campaign** activation pushes users to a SendGrid contact List that you select and creates a segment of users to assign to your campaign, and function similarly to the [Export Audiences](/docs/lytics/sendgrid), and the [Export Audiences (Legacy)](/docs/lytics/sendgrid) jobs respectively. **Transactional Email** Experiences trigger real-time emails using the [Export Audiences (Triggered Emails)](/docs/lytics/sendgrid) job.

#### Single Send Tactics

When you activate this Experience, users will be pushed to a SendGrid contact list, and a segment will be created for the Experience in SendGrid.

1.  Ensure that a new segment was created and populated in your SendGrid account. Navigate to **Marketing > Contacts**. (If you have the legacy marketing campaigns enabled use the Marketing tab that is marked as **NEW**).
2.  You should see a new segment under the list you selected during configuration. This segment should have the same name as your Experience in Lytics and will have a single contains rule. ![SendGrid Contacts List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfa02abcf54aec2b4/ba9a4d697532e03b1c64736b/img-0297.png)
3.  Next you will assign this segment to your single send campaign. Navigate to **Marketing > Single Sends** And click on the single send you imported.
4.  [Configure your single send to use the segment](https://sendgrid.com/docs/ui/sending-email/how-to-send-email-with-marketing-campaigns/#sending-your-first-email) by selecting the segment under the **Send To** in the **Recipients** of the email editor. ![SendGrid Single Send Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb4188572030fdabd/bd68369c3c2c6472655e47dc/img-0298.png)
5.  Once your email is ready to send, click **Review Details and Send** to proceed with the sending process.

#### Legacy Marketing Campaign Tactics

When you activate this Experience, users will be pushed to a legacy contact list in SendGrid, and a segment will be created for the Experience.

1.  Ensure that a new segment was created and populated in your SendGrid account. Navigate to **Marketing > Contacts**. (If you have new marketing campaigns enabled use the Marketing tab that does not say **NEW**).
2.  You should see a new segment under the list you selected during configuration. This segment should have the same name as your Experience in Lytics and will have a single contains rule. ![SendGrid Contacts List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfa02abcf54aec2b4/ba9a4d697532e03b1c64736b/img-0297.png)
3.  Next you will assign this segment to your single send campaign. Navigate to **Marketing > Campaigns** And click on the marketing campaign you imported.
4.  Configure your marketing campaign to use the segment by selecting the segment under the **Send To** in the **Recipients** of the campaign editor. ![SendGrid Marketing Campaign Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb4188572030fdabd/bd68369c3c2c6472655e47dc/img-0298.png)
5.  Once your email is ready to send, click **Review Details and Send** to proceed with the sending process.

#### Transactional Email Tactics

After you activate this Experience, emails will automatically begin sending when users enter the audience in Lytics. No further configuration is necessary assuming your HTML template is ready to go. Confirm that emails are sending, you can check your [SendGrid email activity feed](https://sendgrid.com/docs/ui/analytics-and-reporting/email-activity-feed/) once new users have entered the audience in Lytics.

### Metrics

SendGrid metrics are collected through [webhooks](/docs/lytics/sendgrid). You must enable webhooks as described in that doc for Lytics to populate the [reach and conversion metrics](/docs/lytics/experiences) for SendGrid Experiences.

**Note:** If you are already running the [Import Audiences](/docs/lytics/sendgrid) job, webhooks should automatically be configured to send to Lytics.

![SendGrid Experience Metrics](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdef8284014050e7d/72dedab21e6492a14c35eb22/img-0299.png)

Metrics from the SendGrid are mapped to Lytics user fields as follows:

-   **Reach** - [Open events](https://sendgrid.com/docs/for-developers/tracking-events/event/#engagement-events) in Sendgrid are mapped to Lytics impressions.
-   **Converted** - [Click events](https://sendgrid.com/docs/for-developers/tracking-events/event/#engagement-events) in Sendgrid are mapped to Lytics conversions.

These events are also mapped to the Lytics user fields **Reached with SendGrid Experience** and **Converted on SendGrid Experience**, which are available in the audience builder so that you can create audiences of users who have been reached by or converted on your SendGrid Experiences.

![SendGrid Conversion field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am51f106f65b39e7cf/0b575295a02e88b918bcdfd8/img-0300.png)

## Configuring Webhooks

Lytics highly recommends setting up [SendGrid event notifications](https://sendgrid.com/docs/Glossary/event_webhook.html) to post event data to the Lytics. This will allow Lytics to get real-time activity data such as clicks, opens, etc. on your marketing campaigns and transactional emails. If you are running the [SendGrid Import Audiences](/documentation/product/integrations/sendgrid/import-users-and-activity), the job will configure webhooks for you. However if you want to set them up manually, or you had previously configured webhooks to send to another system, you may need to update your settings.

Lytics requires that webhooks are enabled to use SendGrid Experiences as part of the Lytics Canvas because it allows for the collection of reporting metrics for your SendGrid Experiences.

To set up event notifications to go to Lytics, you will need to have a Lytics API token ready, you can read how to [generate a new API token](/docs/lytics/account-settings) if you do not already have one. Then follow these steps:

1.  Login to your [SendGrid](https://sendgrid.com/) account.
2.  Navigate to [Mail Settings](https://app.sendgrid.com/settings/mail_settings) under the Settings menu.
3.  Click on **Event Notification** to open your webhook settings.
4.  Click **edit** in the top right corner to change your event notification settings.
5.  In the **HTTP POST URL** textbox, enter the following URL: `https://c.lytics.io/collect/json/sendgrid_webhooks?access_token={API_TOKEN}` Replace `{API_TOKEN}` with your Lytics API token.
6.  Under **Select Actions** check the boxes for the events you would like to recieve in Lytics. You may select **All**, or the following event types are recommended for collection:
7.  Dropped
8.  Delivered
9.  Bounced
10.  Opened
11.  Clicked
12.  Unsubscribed From
13.  Mark as Spam
14.  ASM Group Unsubscribe
15.  ASM Group Resubscribe
16.  Once you've selected event types, click the check mark button in the top right corner. Then make sure you toggle the button in the left-hand corner to **On**. ![Screenshot from 2019-05-24 16-22-11](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am89ff3ca12520ad57/5a9977243d0d0ba81393889d/img-0301.png)

Lytics will then receive real-time event data to the `sendgrid_webhooks` stream. If you've run the [SendGrid Import Audiences job](/docs/lytics/sendgrid), default mapping is automatically provided. Otherwise, contact [Lytics support](https://support.lytics.com/) to add the mappings for SendGrid activity in your account.
