---
title: "Amazon Kinesis"
description: "Amazon Kinesis Data Streams is a real-time data streaming service provided by Amazon."
url: /lytics/aws-kinesis-overview
uid: blt34bd2e433c39cf83
---

# Amazon Kinesis

## Amazon Kinesis

## Overview

[Amazon Kinesis Data Streams](https://aws.amazon.com/kinesis/data-streams/) is a real-time data streaming service provided by Amazon.

Integrating Lytics with AWS Kinesis allows you to bring in data from Kinesis Data Streams and leverage Lytics to enrich user profiles and build behavioral audiences in Lytics. You can then send Lytics audience events as triggers back to your Kinesis Data Streams.

## Authorization

If you have not already done so, you will need to set up an [AWS Kinesis](https://aws.amazon.com/kinesis/) account before you begin the process described below.

You can authorize the integration in one of two ways:

-   [Providing your AWS keys](#providing-your-aws-keys)
-   [Delegating Access via AWS IAM](#delegating-access-via-aws-iam)

### Providing your AWS Keys

Follow the steps below to authorize AWS with Lytics using your AWS keys. For more information on obtaining your keys, see Amazon's documentation on [secret and access keys](https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/).

1.  Select **Amazon Web Services** from the list of providers.
2.  Select the **AWS Keys** method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your **Access Key** and **Secret Key**.
6.  Click **Save Authorization**.

### Delegating Access via AWS IAM

Instead of providing AWS credentials directly, you can grant Lytics access to your Kinesis streams by creating an IAM role in your AWS account. Below is a set of instructions for how to set up delegated authorization.

#### 1\. Create an IAM Role

Create a role with the following trust policy, which allows Lytics to assume it:

```
{
  "Version": "2012-10-17",
  "Statement": {
    "Effect": "Allow",
    "Principal": {
      "AWS": "arn:aws:iam::358991168639:user/gce1"
    },
    "Action": "sts:AssumeRole"
  }
}
```

#### 2\. Attach a Permission Policy

Attach a policy to the role granting the Kinesis actions Lytics needs. Replace YOUR\_ACCOUNT\_ID, region, and stream name with your values.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kinesis:PutRecord",
        "kinesis:PutRecords",
        "kinesis:GetRecords",
        "kinesis:GetShardIterator",
        "kinesis:ListShards"
      ],
      "Resource": "arn:aws:kinesis:us-east-1:YOUR_ACCOUNT_ID:stream/YOUR_STREAM"
    },
    {
      "Effect": "Allow",
      "Action": "kinesis:ListStreams",
      "Resource": "*"
    }
  ]
}
```

> The kinesis:ListStreams action requires "Resource": "\*" because it does not support resource-level permissions. This permission is used by the Lytics UI to display available streams when configuring a job.
> 
> If you prefer not to include kinesis:ListStreams in your IAM policy, you can manually enter the stream name in the job configuration.
> 
> You may also separate permissions into distinct IAM policies for import-only and export-only use cases, as appropriate.



**KMS-Encrypted Streams**

If your Kinesis stream uses [server-side encryption with AWS KMS](https://docs.aws.amazon.com/streams/latest/dev/server-side-encryption.html), you must also add kms:Decrypt and kms:GenerateDataKey permissions to the IAM role's permission policy. The Resource should be the ARN of the KMS key used to encrypt your stream.

Without these permissions, Lytics will receive a KMSAccessDeniedException when attempting to read from the stream.

#### 3\. Configure in Lytics

When configuring your Kinesis import or export job, enter the role ARN (e.g. arn:aws:iam::YOUR\_ACCOUNT\_ID:role/Lytics/LyticsKinesisAccess) in the **Role ARN** field.

To learn more, review the following Amazon reference materials:

## Import Activity Data

Import data from your AWS Kinesis Data Streams to use Lytics data science scoring and Insights to build rich, behavioral audiences.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Type**: REST API Integration
-   **Frequency**: Real-time Integration
-   **Resulting Data**: Import of Event Data published in AWS Kinesis Data Stream.

### Fields

Any fields that are present in the event data in your AWS Kinesis Stream are posted in your Lytics Stream that is [configured](#configuration) during the job setup. You can map them to Lytics User Profiles using Custom LQL. Please contact [Lytics Support](https://support.lytics.com/) to find out more about this option.

### Configuration

Follow these steps to set up and configure an AWS Kinesis Import job in the Lytics platform. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Amazon Web Services** from the list of providers.
2.  Select the **Import Activity Data (Kinesis)** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Enter the name of the Lytics **Stream** where the data will be imported into.
7.  From the **Region** drop-down, select the AWS region that has the Kinesis Stream you want to import data from.
8.  Using the **AWS Role ARN** textbox , enter the valid AWS Role ARN to AssumeRole into that has access to Kinesis read operations. Only necessary if you are using delegated auth.
9.  From the **Kinesis Stream** drop-down, select the AWS Kinesis Stream from which you are bringing in the data.
10.  Click **Start Import**.\\

![kinesis-import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8996636cfded9cd9/29fc15893a1d618914298ad7/3f7cd6ffb376e0484517d8445c8224c35d159ef88b4a577ee4c302a0f6150c4d-Lytics-Admin-02-18-2026_11_26_AM.png)

## Export Audience Triggers

Send Lytics audience event triggers to your AWS Kinesis Data Streams to trigger a message when a user enters or exits a Lytics audience.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Type**: REST API Integration
-   **Frequency**: Real-time Integration, with an optional one-time Backfill of the audience after setup.
-   **Resulting Data**: Event Data published to AWS Kinesis Stream.

### Fields

The fields included depend on the raw event in Lytics. All user fields will be included in the data published to your AWS Kinesis Data Stream unless specified in the **Export Fields** selection.

### Configuration

Follow these steps to set up and configure the AWS Kinesis Trigger job in Lytics Platform.

1.  Select **Amazon Web Services** from the list of providers.
2.  Select the **Export Audience Triggers** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.

![ef4472964694b2c01f2ad2295b79c6d94a3c460493af1fcf510e0b774e7f1a18-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7fae4bd0282c46f5/2e367977fb71af704993dc12/ef4472964694b2c01f2ad2295b79c6d94a3c460493af1fcf510e0b774e7f1a18-image.png)

1.  From the **Audiences** list, select the Lytics audiences with events you want to send to the Kinesis Stream.
2.  From the **Stream Region** drop-down, select the AWS region for the Kinesis Stream.
3.  (Optional) Using **AWS Role ARN** input, enter the Role ARN that will be used if you selected the delegated authorization method.
4.  From the **Kinesis Stream** drop-down, select the AWS Kinesis Stream that you want to publish Lytics events.
5.  (Optional) From the **User Identifier Field** drop-down, select the field that will be used as [Kinesis Partition Key](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html#Streams-PutRecord-request-PartitionKey).
6.  (Optional) From **Export Fields** select all the user fields to include. If none are selected then _all_ user fields will be sent.
7.  (Optional) Select the **Existing Users** checkbox to enable a backfill of current members of the audience(s) as enter event.
8.  Click **Complete** to start job.
