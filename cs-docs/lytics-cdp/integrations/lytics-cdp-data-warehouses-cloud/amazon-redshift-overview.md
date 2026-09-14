---
title: "Amazon Redshift"
description: "Learn how to connect Lytics to Amazon Redshift to import user records from a Redshift table or export Lytics audiences to a Redshift table for use with your existing analytics tools."
url: /lytics/amazon-redshift-overview
---

# Amazon Redshift

## Amazon Redshift

## Overview

[Amazon Redshift](https://aws.amazon.com/redshift/) is a cloud data warehouse service provided by Amazon. With Redshift, you can query and combine structured and semi-structured data across your data warehouse, operational database, and data lake using standard SQL. Redshift lets you easily save the results of your queries back to S3. Connect Lytics to your Redshift database to leverage Lytics' data science and audience building capabilities on your data.

## Authorization

If you haven't already done so, you will need to set up an Amazon Web Services (AWS) account before you begin the process described below. See the [Redshift Getting Started Guide](https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html) to get started with Amazon Redshift. You will also have to add Lytic's IPs to your [cluster's ingress rules](https://docs.aws.amazon.com/redshift/latest/mgmt/managing-security-groups-console.html). Contact your Account Manager for the current list of Lytics' IP addresses.

There are two Redshift Authorization Types:

-   [Redshift Only](#redshift-only) for importing records from a Redshift Table
-   [Redshift and S3](#redshift-and-s3) for exporting users to a Redshift table

### Redshift Only

To set up AWS Redshift User you will need the following credentials: database username and password. See the [Redshift Users Guide](https://docs.aws.amazon.com/redshift/latest/dg/r_Users.html) for instructions on how to create a user in Amazon Redshift. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Amazon Web Services** (AWS) from the list of providers.
2.  Select the **AWS Redshift User** method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  In the **Username** text box, enter your Redshift cluster admin user name.
6.  In the **Password** password box, enter your Redshift cluster admin password.
7.  (Optional) In the **DB URL** text box, enter your Redshift database endpoint. Follow [these instructions](https://docs.aws.amazon.com/redshift/latest/mgmt/configuring-connections.html#connecting-drivers.html) to obtain your **DB URL**; copy the **Endpoint** from the general information page (the area as the JDBC URL in the Amazon instructions). This will be of the form: `redshift-cluster-name.VCP-cluster.region.redshift.amazonaws.com:port/db-name`. If left blank the import will need to have the **DB URL** set in the job configuration.
8.  (Optional) From the **SSL mode** input, select your SSL mode credential. Leave blank to disable SSL verification.
9.  Click **Save Authorization**. ![aws-redshift-auth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd55868689f0f72f9/b0b1990e97366d91beb5dba0/img-0008.png)

### Redshift and S3

To setup the **AWS S3 Keys And Redshift User** you will need the following credentials:

-   Redshift database username
-   Redshift database password
-   S3 access key ID
-   S3 secret key
-   Redshift database URL

See the [Redshift Users Guide](https://docs.aws.amazon.com/redshift/latest/dg/r_Users.html) for instructions on how to create a user in Amazon Redshift. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  In the **Label** text box, enter a name for the authorization.
2.  (optional) In the **Description** text box, enter a description for this authorization.
3.  In the **S3 Access Key** text box, enter your S3 Access Key credential.
4.  In the **S3 Secret Key** password box, enter your S3 Secret Key credential.
5.  In the **Redshift Username** text box, enter your Redshift Username credential.
6.  In the **Redshift Password** password box, enter your Redshift Password credential.
7.  In the **Redshift DB URL** text box, enter your Redshift DB URL credential. Follow these instructions to obtain your DB URL; copy the Endpoint from the general information page (the area as the JDBC URL in the [Amazon instructions](https://docs.aws.amazon.com/redshift/latest/mgmt/configuring-connections.html#connecting-drivers.html)). This will be of the form: `redshift-cluster-name.VCP-cluster.region.redshift.amazonaws.com:port/db-name`.
8.  From the **Redshift SSL mode** input, select your Redshift SSL mode credential.

## Export Audience

The Redshift Export lets you create and keep updated an AWS Redshift table based on a Lytics audience. With your audience in Redshift you can use your already existing analytics tools to gain new insight into your users.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: File Based Transfer Integration
-   **Frequency**: Batch Integration
-   **Resulting data**: User Profile Fields

Steps/Pattern:

1.  Scan the selected audience.
2.  [Write a file up to 1 GB](https://docs.aws.amazon.com/redshift/latest/dg/t_splitting-data-files.html#t_splitting-data-files-compressed) of users to S3. Repeat until all users have been written to a file.
3.  [Copy the files into a temporary table.](https://docs.aws.amazon.com/redshift/latest/dg/t_Loading_tables_with_the_COPY_command.html)
4.  [Rename the temporary table to the main table](https://docs.aws.amazon.com/redshift/latest/dg/r_ALTER_TABLE.html#r_ALTER_TABLE-parameters).

The Redshift Export is a two step export, it first exports users to Amazon S3, then executes a COPY operation to load those files to a table in Redshift. The table's name is based on the Lytic's audience's slug name. The files are setup to expire after 72 hours, so no manual cleanup is needed. Executing the COPY command to a temporary table allows the main table to continue to be used while data is loading; Only the brief time when the main table is removed and the temporary table is renamed will the data be unavailable. The temporary table is a full table and not an actual [temporary table](https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_TABLE_NEW.html#r_CREATE_TABLE_NEW-parameters) in Redshift.

### Fields

By default, Lytics exports all user fields to Redshift. You may configure the fields to export by selecting them in the **Fields to Export** input.  
Fields in Redshift will match their Lytics field names. The type depends on  
the field type in Lytics:

| Lytics type | Redshift column type |
| --- | --- |
| Int | INT8 |
| Float | FLOAT |
| Date | TIMESTAMPZ |
| Bool | BOOLEAN |
| String | VARCHAR(max) |
| Other | SUPER |

### Configuration

Follow these steps to set up and configure an export job for Amazon Web Services (AWS) Redshift in the Lytics platform.

1.  Select **Amazon Web Services (AWS)** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job.
8.  (optional) From the **Region** input, select aWS region that S3 resides in (us-east-2, etc.).
9.  (optional) In the **S3 Bucket Name** text box, enter select or enter the bucket that you would like to save your files in.
10.  In the **Directory** text box, select or enter the directory that you would like to save your files in. The directory suggestions can be slow on large S3 buckets. These files will expire after 72 hours.
11.  (optional) From the **Fields to Export** input, select a list of user fields to export.
12.  (optional) In the **User Limit** numeric field, enter the maximum number of users to export. Leave blank to export all users.
13.  (optional) Select the **Keep Updated** checkbox, to select to run this export continuously.
14.  (optional) From the **File Export Frequency** input, select how often a continuous export should update the table. Default is daily.
15.  (optional) From the **Time of Day** input, select the time of day to start the update. This only affects daily and slower frequency exports. Exact time of the update will vary based on load and audience size.
16.  (optional) From the **Timezone** input, select the timezone to use for the time of day.
17.  Click the **Start job** button to start the job

## Import Table

Import user data directly from your AWS Redshift database into Lytics, resulting in new user profiles or updates to fields on existing profiles.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: PostgreSQL connection.
-   **Frequency**: Batch Integration with frequency configurable from hourly to weekly.
-   **Resulting data**: User Profiles.

This integration connects to your Redshift table through a [PostgreSQL connection](https://docs.aws.amazon.com/redshift/latest/mgmt/connecting-from-psql.html) and then completes the following steps:

1.  Create a temporary table containing a snapshot of the database to query against.
    -   Adds a column for consistent ordering of data.
    -   Only rows that have a timestamp after the last import, or **Since Date** will be included.
2.  Query a batch of rows from the temporary table.
3.  Emits rows to the data stream.
4.  Repeat steps 2 and 3 until the entire temporary table is read.

### Fields

Because of the nature of Redshift data, there is no default mapping defined. By default the data will be added to the `redshift_table_name` data stream, where `table_name` is the name of the Redshift table imported.

### Configuration

Follow these steps to set up and configure an import Redshift table job for Amazon Web Services (AWS) in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Amazon Web Services (AWS)** from the list of providers.
2.  Select the **Import Redshift Table** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job. ![aws_redshift_import_config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf062c1a5b29b7ea8/98fb9ef3e55cdc65affb93fa/img-0009.png)
6.  Complete the configuration steps for your job.
7.  (Optional) In the **DB URL** text box, enter the Redshift URL to connect to. Leave blank to use the authorization's setting. Follow [these instructions](https://docs.aws.amazon.com/redshift/latest/mgmt/configuring-connections.html#connecting-drivers.html) to obtain your DB URL; copy the **Endpoint** from the general information page (the area as the JDBC URL in the Amazon instructions). This will be of the form: `redshift-cluster-name.VCP-cluster.region.redshift.amazonaws.com:port/db-name`
8.  (Optional) From the **SSL mode** input, select the SSL mode to use to connect to the database. Leave blank to use the authorization's setting.
9.  From the **Table** input, select the Redshift table to import data from.
10.  From the **Timestamp Column** input, select the timestamp column to order the events.
11.  (Optional) From the **Record Timestamp Column** input, select the timestamp column to use as event timestamps, if left blank the Timestamp Column will be used.
12.  (Optional) From the **Since Timestamp** input, enter the earliest timestamp to import records from; only records with a Timestamp Column after this date will be imported. Use `yyyy-mm-dd` `HH:MM:SS` UTC format.
13.  (Optional) In the **Stream Override** text box, enter the data stream name you want to add data to. if the data stream does not exist, it will be created. If left blank the data will go to the `redshift_TABLE` data stream, where TABLE is the name of the Redshift table.
14.  (Optional) Select the **Keep Updated** checkbox to repeatedly run this import on a schedule.
15.  (Optional) From the **Import Frequency** input, select how often a repeated import should run.
16.  (Optional) From the **Time of Day** input, select the time of day to start import. Only applies to **Daily**, **Weekly**, or **Monthly** **import frequencies**.
17.  (optional) From the **Timezone** input, select the timezone for **time of day**.
18.  (Optional) In the **Query Timeout** numeric field, enter the maximum time a query is allowed to run in minutes.
19.  Click **Start Import**.
