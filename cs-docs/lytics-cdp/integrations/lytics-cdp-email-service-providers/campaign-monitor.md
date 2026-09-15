---
title: "Campaign Monitor"
description: "Campaign Monitor is an email marketing platform that allows you to execute email marketing campaigns."
url: /lytics/campaign-monitor
uid: blt20fcae70cb4e6c8b
---

# Campaign Monitor

## Campaign Monitor

## Campaign Monitor Overview

[Campaign Monitor](https://www.campaignmonitor.com/) is an email marketing platform that allows you to execute email marketing campaigns.

Integrate Lytics with Campaign Monitor to improve the personalization of your email marketing. Lytics combines your Campaign Monitor user activity data with your other marketing tools so you can create custom audiences based on how users interact with your brand.

## Authorization

If you haven't already done so, you will need to set up a Campaign Monitor account before you begin the process described below.

1.  Navigate to Campaign Monitor in the Jobs section of Lytics.\\

![Screenshot_from_2018-11-30_13-22-05.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4c407694518200f9/0622bc95c7c4100c1822e1a3/Screenshot_from_2018-11-30_13-22-05.png)

1.  Navigate to **Authorizations**.
2.  Click **Add new authorization**.
3.  In the **Email or Username** box, enter your Campaign Monitor email or username.
4.  In the **Password** box, enter your Campaign Monitor password.
5.  Click **Log in**.

![CM username and password](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amff2c3c9052131d78/e3ecdb41c697b89e1cdf077b/campaign_manager_authorize.png)

1.  Click **Allow access**.\\

![campaign_monitor_allow_access.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am197bd7a2e525f7c2/744dad06aa00e8f1c3698740/campaign_monitor_allow_access.png)

1.  In the **Description** box, enter a name for your authorization.
2.  Click **Authorize**.\\

![Screenshot_from_2018-11-30_13-24-48.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am32f26f96cb238cd5/90c0a12729a188a46dd1423d/Screenshot_from_2018-11-30_13-24-48.png)\\ You are now ready to start a workflow with Campaign Monitor.

## Export List

Exporting your Lytics Audiences to Campaign monitor allows you to leverage Lytics' powerful data science driven segments for targeting. This integration will keep Lytics and Campaign Monitor in sync as users enter and exit your Lytics audiences. Leverage the export integration along with [Campaign Monitor Automated Journeys](https://help.campaignmonitor.com/automated-journeys) to trigger emails to your users as they enter or exit a Lytics Audience. You can find a full guide of setting up an automated journey in Campaign Monitor [here](https://www.campaignmonitor.com/resources/guides/how-to-create-a-customer-journey/).

### Integration Details

-   **Implementation Type**: Client-side Integrations.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Lytics Users added to the configured Campaign Monitor list. Each user's audience membership will be in the Lytics Audiences field.

This integration utilizes the [Campaign Monitor APIs](https://www.campaignmonitor.com/api/) to send user data. Once the export is started the workflow will:

1.  Create a Lytics Audiences custom field in Campaign Monitor which will contain a user's Lytics audience memberships
2.  Export your configured audiences into the configured Campaign Monitor list
3.  Continue to keep your configured Lytics audiences in sync with Campaign Monitor as users enter or exit the audiences.

### Fields

By default, Lytics exports the following fields to Campaign Monitor. The source of the email field and name field are configurable. Additional fields can be sent to Campaign Monitor by mapping them during configuration.

| Lytics User Field | Description | Campaign Monitor Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |
| name | Name | name | string |

### Configuration

Follow these steps to set up and configure an export of Campaign Monitor in the Lytics platform.

1.  From the **Account** input, choose the Campaign Monitor account you would like to export to
2.  From the **List** input, select the list where you'd like Lytics to send audience members. Note: duplicate users across lists in Campaign Monitor results in a bill per user per list.
3.  From the **Audiences** input, select the name of the Lytics audiences that contains the users you want to sync to Campaign Monitor. Lytics will create segments within the Campaign Monitor list for each selected audience.
4.  Click on the **Show Advanced Options** tab to expand the advanced configuration
5.  From the **Existing Users** checkbox, check to add users who already exist in the selected Lytics audience
6.  From the **Resubscribe Users** checkbox, check to add users who have previously been deleted or unsubscribed from the Campaign Monitor list
7.  From the **Queue Subscription Based Auto Responders** checkbox, check to automate workflow emails that are based on the subscription date. In Campaign Monitor, emails are not sent by default when subscribers are imported into an email campaign based on the subscription date
8.  From the **Email Field** input, select the field name that contains the user's email
9.  From the **Name Field** input, select the field name that contains the user's full name
10.  In the **Field Mappings** section, map Lytics user fields to Campaign Monitor custom fields for the selected list
11.  Click the **Start export** button to start the workflow

## Import List

Import your Campaign Monitor lists into Lytics allows you to combine your Campaign Monitor data with your other marketing tools, giving you a single view of your users. This can ultimately lead to running more efficient and better targeted marketing campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Real-time Integration and Batch Integration.
-   **Resulting data**: User Profiles and raw event data.

This integration utilizes the [Campaign Monitor APIs](https://www.campaignmonitor.com/api/) to import user data. Once the import is started the workflow will:

1.  Import all users from the configured lists into the cm\_user stream.
2.  Import all user activity data into the cm\_activity stream.
3.  Create a webhook for each list to ingest user activity data into the cm\_activity stream.
4.  If the **Keep Updated** option is selected, schedule the next run of the integration.

### Fields

The following fields are included in the default mapping of the cm\_user stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email(email) | email unique id | Email Address | string |
| emaildomain(email) | email\\\_domain | Email Domain | string |
| map(list\\\_id, status) | cm\\\_list\\\_ids\\\_status | CM List Status By ID | map\\\[string\]string |
| map(list\\\_name, status) | cm\\\_list\\\_names\\\_status | CM List Status By Name | map\\\[string\]string |
| name | cm\\\_name | CM Name | string |
| set(client\\\_id) | cm\\\_client\\\_ids | Campaign Monitor Client ID | \\\[\]string |
| set(client\\\_name) | cm\\\_client\\\_names | Campaign Monitor Client Name | \\\[\]string |

The following fields are included in the default mapping of the cm\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| cc |  | country\\\_code | Country Code | string |
| city |  | city | City | string |
| count(event) | IF eq(event, "click") | cm\\\_clickct | Campaign Monitor click count | int |
| count(event) | IF eq(event, "open") | cm\\\_openct | Campaign Monitor Open count | int |
| count(event) | IF eq(event, "sent") | cm\\\_sendct | Campaign Monitor Send Count | int |
| email(email) |  | email unique id | Email Address | string |
| emaildomain(email) |  | email\\\_domain | Email Domain | string |
| max(epochms()) | IF eq(event, "click") | cm\\\_lastclick\\\_ts | Campaign Monitor Last click | date |
| max(epochms()) | IF eq(event, "open") | cm\\\_lastopen\\\_ts | Campaign Monitor Last Open | date |
| max(epochms()) | IF (event == "deactivate" AND status == "unsubscribe") | cm\\\_unsub\\\_ts | Campaign Monitor Unsub date | number |
| max(epochms()) | IF event IN ("open", "click", "subscribe") | last\\\_active\\\_ts | Last Active | date |
| min(epochms()) | IF eq(event, "click") | cm\\\_firstclick\\\_ts | Campaign Monitor First click | date |
| min(epochms()) | IF eq(event, "open") | cm\\\_firstopen\\\_ts | Campaign Monitor First Open | date |
| region |  | region | State/Province | string |
| set("email") | IF event IN ("open", "click", "subscribe") | channels | All Channels Used | \\\[\]string |
| set(campaign\\\_id) |  | cm\\\_campaign\\\_ids | Campaign Monitor Campaign ID the send was a part of | \\\[\]string |
| set(campaign\\\_name) |  | cm\\\_campaign\\\_names | Campaign Monitor Campaign the send was a part of | \\\[\]string |
| set(client\\\_id) |  | cm\\\_client\\\_ids | Campaign Monitor Client ID | \\\[\]string |
| set(client\\\_name) |  | cm\\\_client\\\_names | Campaign Monitor Client Name | \\\[\]string |
| set(list\\\_id) |  | cm\\\_listids | Campaign Monitor List the send originated from | \\\[\]string |
| set(list\\\_name) |  | cm\\\_list\\\_names | Campaign Monitor List Name | \\\[\]string |
| set(url) |  | cm\\\_email\\\_urls | Campaign Monitor urls | \\\[\]string |
| valuect(event) |  | cm\\\_email\\\_event | Campaign Monitor Events | map\\\[string\]intsum |
| valuect(hash(urlmain(url))) | IF eq(event, "open") OR eq(event, "click") | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| valuect(hourofday()) | IF eq(event, "open") | cm\\\_hourlyopen | Campaign Monitor Hourly Events | map\\\[string\]intsum |
| valuect(hourofweek()) | IF eq(event, "open") | cm\\\_hourofweek | Campaign Monitor Hour of Week Events | map\\\[string\]intsum |
| valuect(yymm()) | IF eq(event, "open") | cm\\\_monthly | Campaign Monitor Opens By Month | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import of Campaign Monitor in the Lytics platform.

1.  From the **Select the Client to Import From** input, select the client you would like to import lists from.
2.  From the **Lists to Import** input, select the lists you would like to import. only users, campaigns, and activity associated with these lists will be imported. If no lists are selected, all lists will be imported.
3.  Click on the **Show Advanced Options** tab to expand the advanced configuration
4.  From the **Keep Updated** checkbox, check to continuously run this import
5.  Click the **Start import** button to start the work
