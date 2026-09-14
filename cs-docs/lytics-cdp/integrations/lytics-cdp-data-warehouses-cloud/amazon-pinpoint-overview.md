---
title: "Amazon Pinpoint"
description: "Amazon Pinpoint is an AWS service that you can use to engage with your customers across multiple messaging channels. You can use Amazon Pinpoint to send…"
url: /lytics/amazon-pinpoint-overview
---

# Amazon Pinpoint

## Amazon Pinpoint

## Overview

[Amazon Pinpoint](https://docs.aws.amazon.com/pinpoint/latest/userguide/welcome.html) is an AWS service that you can use to engage with your customers across multiple messaging channels. You can use Amazon Pinpoint to send push notifications, emails, SMS text messages, and voice messages.

Integrating Lytics with Amazon Pinpoint allows you to import email, SMS, and push activity from Amazon Pinpoint and then export Lytics cross-channel, behavioral-driven audiences to deliver personalized marketing campaigns.

## Authorization

If you have not already done so, you will need to set up an [Amazon Pinpoint account](https://aws.amazon.com/pinpoint/) before you begin the process described below. For more information on obtaining your AWS keys for authorization, see Amazon's documentation on [secret and access keys](https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/).

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Amazon Web Services** from the list of providers.
2.  Select the **AWS Keys** method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your **Access Key** and **Secret Key**.
6.  Click **Save Authorization**.

## Import Activity Data

Import email, push, or mobile activity from Amazon Pinpoint to add behavior data to your user profiles in Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Real-time Integration
-   **Resulting data**: Raw event data

Importing Pinpoint activity into Lytics requires setting up an export of Pinpoint Events to Kinesis. See [Amazon's documentation](https://docs.aws.amazon.com/pinpoint/latest/developerguide/event-streams.html) for more information, and follow these [instructions](https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-event-streams.html) to set it up via the Pinpoint UI.

This integration uses the [Amazon Kinesis Data Streams Service APIs](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html) to get Pinpoint activity records from the Kinesis stream in near real-time. You can then start the Pinpoint import job in Lytics.

1.  Once the import is started, the Pinpoint events will be continuously read off the Kinesis stream into Lytics in near real-time. Data is pulled from Kinesis via the [GetRcords endpoint](https://docs.aws.amazon.com/sdk-for-go/api/service/kinesis/#Kinesis.GetRecords).
2.  The activity data will be ingested into the Lytics data stream pinpoint\_activity.

### Fields

The following fields are included in the default mapping of the pinpoint\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| endpoint.Status |  | pinpoint\\\_status | Pinpoint Endpoint Status | string |
| count(event\\\_type) | IF eq(event\\\_type, "click") | pinpoint\\\_clickct | Pinpoint Click Count | int |
| count(event\\\_type) | IF eq(event\\\_type, "\\\_email.open") | pinpoint\\\_openct | Pinpoint Open Count | int |
| count(event\\\_type) | IF eq(event\\\_type, "\\\_email.send") | pinpoint\\\_sendct | Pinpoint Send Count | int |
| email(endpoint.Id) |  | email unique id |  | string |
| max(epochms()) | IF event\\\_type IN ("\\\_email.open", "\\\_email.click") | last\\\_active\\\_ts | Last Active | date |
| max(epochms()) | IF eq(event\\\_type, "\\\_email.open") | pinpoint\\\_last\\\_open\\\_ts | Pinpoint Last Open | date |
| max(epochms()) | IF eq(event\\\_type, "click") | pinpoint\\\_lastclick\\\_ts | Pinpoint Last Click | date |
| min(epochms()) | IF eq(event\\\_type, "click") | pinpoint\\\_firstclick\\\_ts | Pinpoint First Click | date |
| valuect(hourofday()) | IF eq(event\\\_type, "\\\_email.open") | pinpoint\\\_hourly\\\_open | Pinpoint Hourly event\\\_types | map\\\[string\]intsum |
| valuect(hourofweek()) | IF eq(event\\\_type, "\\\_email.open") | pinpoint\\\_hourofweek | Pinpoint Hour of Week event\\\_types | map\\\[string\]intsum |
| valuect(yymm()) | IF eq(event\\\_type, "\\\_email.open") | pinpoint\\\_monthly | Pinpoint Opens By Month | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import of Pinpoint activity in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources)documentation for more information.

1.  Select **Amazon AWS Services** from the list of providers.
2.  Select the **Import Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Region** input, enter the AWS region that the Kinesis stream resides in (e.g. us-east-1).
7.  From the **Kinesis Stream** input, enter the AWS Kinesis stream that is connected to the Pinpoint activity.
8.  Click **Start Import**.\\

![pinpoint_activity_import.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am72df96c5c189fce5/f27c9e826428a4a5ca60b8e3/pinpoint_activity_import.png)

If activity data is avaiable in the Kinesis Pinpoint stream, the data will appear in Lytics within a few minutes.

## Export Audiences

Export Lytics audiences to add audience membership data to your Pinpoint endpoints, and send targeted notifications using Pinpoint as users enter or exit Lytics audiences.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: User fields.

This integration utilizes the [Pinpoint REST APIs](https://docs.aws.amazon.com/pinpoint/latest/apireference/welcome.html) to send Pinpoint events that set an attribute for a Pinpoint [Endpoint](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints.html) as a user enters or exits an audience in Lytics.

1.  As users enter or exit the Lytics audience, a new event is [sent](https://docs.aws.amazon.com/sdk-for-go/api/service/pinpoint/#Pinpoint.PutEvents) with the identifier lytics\_audience with the slug of the exported Lytics audience. For example, lytics\_highly\_engaged is sent with the value true if they have entered the audience, and false if they have exited the audience.
2.  When building a campaign in Pinpoint, this attribute can be used to trigger a send event. In the Pinpoint campaign setup step "Choose when to send the campaign" you can target the attribute Lytics Audience for when the exported Lytics audience slug is set to true.
3.  The Lytics audience is also added as a Pinpoint endpoint attribute which can be used in Pinpoint to create custom segments.

### Fields

By default, Lytics exports the following fields to Pinpoint.

| Lytics User Field | Description | Pinpoint Field | Type |
| --- | --- | --- | --- |
| _custom_ | Address Field | Address for channel | string |
| Audience | Exported Audience | lytics\\\_audience | bool |

### Configuration

Follow these steps to set up and configure an export of a Lytics audience to Pinpoint.

1.  Select **Amazon AWS Services** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audience** input, select Lytics Audiences to emit events from. Each enter/exit event from the selected audience will be sent as a Pinpoint email event.
7.  From the **Region** input, select the AWS region that Pinpoint resides in (e.g. us-east-2).
8.  From the **Pinpoint Project** input, select your Pinpoint Project.
9.  From the **Pinpoint Channel Type** input, select the channel type, e.g., Email or SMS, to send to (channel must first be activated in Pinpoint).
10.  From the **Address Field** input, select the Lytics field that contains the user's endpoint address for the selected channel, e.g. "Email Address" if the selected channel type is "EMAIL".
11.  (Optional) From the **User ID Field** input, select the Lytics field that contains the user's unique ID that is used in Pinpoint to tie channel endpoints together.
12.  Select the **Existing Users** checkbox to send an enter event for users who are already in the selected Lytics audience.
13.  Click **Start Export**.\\

![pinpoint_export.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama6c719636ea09ca6/03fff7a1786a14dd75104dfc/pinpoint_export.png)

If the **Existing Users** option is selected, audience data should be in Pinpoint within minutes. Otherwise, data will be seen when a new user enters or exits the exported audience.

In Pinpoint, segments can be created to target the Lytics audience by defining a segment with the exported Lytics segment slug name set to true.

![pinpoin segment](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8b9e0557dd9a52d1/01aeff5bca46faf39d2164c7/pinpoin_segment.png)

## Export Audience Triggers

You can use Lytics to send messages to your customers via various [AWS Pinpoint channels](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels.html) (Email/SMS/GCM/APNS) when they enter a Lytics audience.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration (Audience Trigger Integration).
-   **Frequency**: Real-time Integration.
-   **Resulting data**: A notification message sent to users entering the selected Lytics audiences. The message can be populated with Lytics profile data for the user depending on the job [configuration](#configuration-2).

The job uses the [Pinpoint API](https://docs.aws.amazon.com/pinpoint/latest/developerguide/send-messages.html) to send the [Email](https://docs.aws.amazon.com/pinpoint/latest/developerguide/send-messages-email.html), [SMS](https://docs.aws.amazon.com/pinpoint/latest/developerguide/send-messages-sms.html), [APNS and GCM](https://docs.aws.amazon.com/pinpoint/latest/developerguide/send-messages-push.html) messages. Before you can set up this job, you must enable the desired channel in your AWS Pinpoint project via which you would like to send a notification message. Once started, this job will proceed as follows.

1.  If backfill is enabled, construct the message with the user fields (if any) and send the notification message to each user using the configured channel.
2.  For each user entering the selected audience, construct the message with the user fields (if any) and send the notification message using the configured channel.

### Fields

As mentioned above, the notification message can be configured with user fields so that it can be populated with corresponding user field values and the resulting message will be sent to the user using your chosen [AWS Pinpoint channels](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels.html).

Please refer to the [Templating](/docs/lytics/integrated-marketing-tools#templating) section for more information on configuring messages with the desired user fields.

### Configuration

Follow these steps to set up and configure an export from Lytics to Amazon Pinpoint.

1.  Select **Amazon AWS Services** from the list of providers.
2.  Select the **Export Audiences Triggers** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/aws/amazon-pinpoint/authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audience** input, select the Lytics audiences to send the notification message.
7.  (Optional) Select the **Existing Users** checkbox to send the message to users who are already in the selected Lytics audiences.
8.  Using the **Region** dropdown, select the AWS region that your Pinpoint project resides in.
9.  Using the **Pinpoint Project** dropdown, select the AWS Pinpoint project you would like to use.
10.  Using the **Pinpoint Channel Type** dropdown, select the Pinpoint channel type to send the message.
11.  From the **Endpoint Address Field** dropdown, select the **Lytics user field** that contains the address that uniquely identifies the device or email to send messages to.
12.  (_Required_ except for SMS) In the **Title** field, enter the title to display above the notification message on the recipient's device. If you are sending an email notification, this would be the subject for the email.
13.  In the **Body** field, enter the body of the notification message/Email/SMS.![pinpoint_send_msg_pt1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb7df1f9c604dbce8/c19d7758b658ecd96beabcc2/pinpoint_send_msg_pt1.png)
14.  Click **Show Advanced Options** to set additional configuration option, all of which are **optional**:
15.  (For Email Channel Only) In the **From Email Address** field, enter the verified email address to send the email message from. The default value is the _FromAddress_ specified in Pinpoint for the email channel.
16.  (For Email Channel Only) In the **Reply To Address** field, enter the reply-to email address(es) for the email message. If a recipient replies to the email, each reply-to address receives the reply. For multiple email addresses, please separate them using a comma.
17.  (For Apple/GCM Channel) Using the **Action** dropdown, select the action to occur if the recipient taps the notification message. Please refer to Pinpoint documentation on [Action](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-prop-defaultpushnotificationmessage-action) for more information.
18.  (For Apple/GCM Channel) In the **URL** field, enter the URL to open in the recipient's default mobile browser, if a recipient taps the notification message and the value of the **Action** property in above input is URL.
19.  (For Apple/GCM Channel) Using the **Priority** dropdown, select the Priority for the message you are sending.
20.  (For Apple/GCM Channel) Check the **Silent Push** checkbox to send the message as a silent notification message .
21.  (For Apple/GCM Channel) In the **Sound** field, enter the name of the sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file cannot be found or you specify _default_ for the value, the system plays the default alert sound.
22.  (For SMS Channel Only) In the **Keyword** field, enter the SMS program name that you provided to AWS Support when you requested your dedicated number.
23.  (For SMS Channel Only) In the **Origination Number** field, enter the number to send the SMS message from. The phone number or short code that you specify has to be associated with your Amazon Pinpoint account.
24.  Using the **Message Type** dropdown, select the SMS message type. If you plan to send time-sensitive content, specify TRANSACTIONAL. If you plan to send marketing-related content, specify PROMOTIONAL. Please refer to Pinpoint documentation on [Message Type](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-prop-smsmessage-messagetype) for more information.
25.  (For SMS Channel Only) In the **Sender ID** field, enter the Sender ID to display as the sender of the message on a recipient's device.
26.  Click **Start Export**.![pinpoint_send_msg_pt2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama9cf567d76ee8ffa/7536e4afd28d2508dfea44ab/pinpoint_send_msg_pt2.png)
