---
title: "Amazon SQS"
description: "Learn how to export Lytics trigger events to Amazon SQS, including AWS Keys authorization setup, configuring the Export Activity Data job, and the JSON message format produced when a user's segment membership changes."
url: /lytics/aws-sqs-overview
---

# Amazon SQS

## Amazon SQS

## Overview

Export Lytics trigger events to [AWS SQS](https://aws.amazon.com/sqs/). A Lytics trigger is an event that is raised and available for export when a user enters or leaves a segment for example "User x just entered at\_risk\_to\_churn".

AWS SQS can be used for a variety of use cases such as:

-   Use a Lytics trigger "User at risk to churn" (user enters the segment at risk to churn) to send an [AWS Pinpoint message](https://aws.amazon.com/pinpoint/).
-   Use a Lytics user profile update to write user profiles to an AWS database service such as [Redshift](https://aws.amazon.com/redshift/), [RDS](https://aws.amazon.com/rds/), or [DynamoDB](https://aws.amazon.com/dynamodb/) for further analysis.
-   Use a Lytics user profile update to send to [AWS Lambda](https://aws.amazon.com/lambda/) for custom scoring and then returning the event score back to lytics.

## Authorization

If you haven't already done so, you will need to set up an AWS SQS account before you begin the process described below.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Amazon Web Services** from the list of providers.
2.  Select the **AWS Keys** method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your **Access Key** and **Secret Key**.
6.  Click **Save Authorization**.

## Export Activity Data

Export triggers to AWS SQS when users enter or exit selected audiences.

### Integration Details

| Summary |  |
| --- | --- |
| Frequency | Real-time Triggers (when event occurs for user) |
| Exports to | JSON record of user with event info on which segments they entered or left. |

### Fields

### Configuration

Follow these steps to set up an (import/export/enrichment) job for (provider name).

1.  Select **Amazon Web Services** from the list of providers.
2.  Select the **Export Activity Data (SQS)** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your jo
6.  Complete the required fields:
    -   **Audience(s)**: Select which Lytics audiences to emit events from.
    -   **SQS URL Stream**: Enter the AWS SQS stream url you have created and granted Lytics access to. IT will be in format like this: `https://us-east-2.queue.amazonaws.com/111111111/test_lytics_sqs`
    -   **Region**: Select the AWS region that the SQS stream resides in.
    -   **Event/User Attributes**: The user profile fields to use for SQS message attributes. (see sqs documentation for message attributes).
    -   **Existing Users**: Should we go back and find all user's currently in segment, and raise an event for them, then raise events in future for all users as they occur in real time? True means yes, back fill all current users. False means only raise events for users in the future as they occur.

#### Message format for Subscription Events

When a user profile is updated, it may be due to:

-   A new data event.
-   Scoring gets updated ocassionally.
-   A scheduled trigger evaluation. A trigger of "has not logged in last 7 days" may get scheduled to be evaluated 7 days after last x event.

When the user gets updated, segment membership is reevaluated and segments a user has moved into or out of triggers a message.

Here is an example of the message that is produced.

```
{
  "data": {
    "_created": "2016-06-29T18:50:16.902758229Z",
    "_modified": "2017-03-18T06:12:36.829070108Z",
    "email": "testwebhook@lytics.io",
    "user_id": "user123",
    "segment_events":[
        {
            "id": "d3d8f15855b6b067709577342fe72db9",
            "event": "exit",
            "enter": "2017-03-02T06:12:36.829070108Z",
            "exit": "2017-03-18T06:12:36.829070108Z",
            "slug": "demo_segment"
        },
        {
            "id": "abc678asdf",
            "event": "enter",
            "enter": "2017-03-02T06:12:36.829070108Z",
            "exit": "2099-03-18T06:12:36.829070108Z",
            "slug": "another_segment"
        }
    ]
  },
  "meta":{
     "object":"user",
     "subscription_id": "7e2b8804bbe162cd3f9c0c5991bf3078",
     "timestamp": "2017-03-18T06:12:36.829070108Z"
  }
}
```
