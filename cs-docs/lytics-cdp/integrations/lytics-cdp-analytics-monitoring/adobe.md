---
title: "Adobe"
description: "This guide offers an overview of options for leveraging Lytics standard integration capabilities to connect with Adobe’s ads products."
url: /lytics/adobe
uid: blte16002f86ff1f600
---

# Adobe

## Adobe

### Overview

This guide offers an overview of options for leveraging Lytics standard integration capabilities to connect with Adobe’s ads products.

The decisioning capabilities of Lytics can be combined with the personalized activation proficiency of the Adobe products:

-   Adobe Campaign
-   Adobe Analytics
-   Adobe Target
-   Adobe Ad Cloud
-   Adobe Audience Manager

#### Options for sending data from Lytics to Adobe:

1.  Sending file based data directly to Adobe using a [Lytics File Servce](/docs/lytics/lytics-file-service)
2.  Sending data in near real time from Lytics to one of our supported data warehouse integrations ([Google BigQuery](/docs/lytics/google-bigquery-overview), [Microsoft Azure](/docs/lytics/microsoft-azure), [Snowflake](/docs/lytics/snowflake), [Amazon Web Services (AWS) Redshift](/docs/lytics/amazon-redshift-overview)).\\

Then from the data warehouse, send the data to Adobe Cloud

1.  Client Side - Lytics surfaces data in Web Layer via the Lytics JavaScript Tag. Learn how you can via the Lytics tag [here.](/docs/lytics/lytics-javascript-tag#accessing-visitor-profiles)

#### Options for sending data from Adobe to Lytics:

1.  From Adobe send data to a Lytics Supported data warehouse ([Google BigQuery](/docs/lytics/google-bigquery-overview), [Microsoft Azure](/docs/lytics/microsoft-azure), [Snowflake](/docs/lytics/snowflake), [Amazon Web Services (AWS) Redshift](/docs/lytics/amazon-redshift-overview)). The data from the data warehouse can be imported into Lytics. In many cases this is the recommended approach to avoid duplication of processes and data storage.
2.  Sending file based data from Adobe to Lytics using a [Lytics File Service](/docs/lytics/lytics-file-service)
3.  Client Side - Using the Lytics JavaScript Tag \\\[link\] to pass Information to Lytics from the website / data layer

#### Further details on integrating with Adobe products

**Adobe Campaign**

Lytics can export file based data to Adobe Campaign via hourly/daily CSV file export to an SFTP location. Adobe Campaign can import CSV files from its own secure location. This is more of a limitation on the Adobe Campaign side regarding limited API access.

---

##### Adobe Analytics

There are many ways to get data into Lytics from Adobe Analytics. One common method is to use the Lytics Javascript tag (jstag.send) function to send eVars directly from the data layer into Lytics on page load. This method will simplify the onboarding process and minimize the need to do a data transfer from Adobe Analytics on a regular basis.

As part of onboarding, we can help identify which data you would like to pull in for activation and identify the right mechanisms for ingestion. Lytics provides ways to ingest this data from scheduled SFTP pickups to Bulk API imports or transactional APIs.

---

##### Adobe Target

Our Javascript Tag will communicate user audience membership to Adobe Target, which will respond with the appropriate site personalizations. This Lytics data will be returned from our platform on page load and the Users Profile, segmentation information and content recommendations will be placed in the web page data layer.

You can pass this information simply by leveraging the lio.data.segments object that is loaded onto every page where the Lytics JS tag is deployed.

---

##### Adobe Ad Cloud

Similar to other Adobe products, Adobe Ad Cloud supports the consumption of user audiences via SFTP, Json file upload, API (Lytics can create a webhook to stream data - but more conversation with Adobe will be needed) as well as direct from other Adobe products like Adobe Audience Manager.

Lytics can also directly send audiences from Lytics into ad platforms (e.g. Facebook, Google, Linkedin, Twitter, Snapchat, Instagram, LiveRamp. With our Google partnership, Lytics has early access to Google’s API-based integration for custom audiences within DV360.

---

##### Adobe Audience Manager

We can deliver audiences into Audience Manager via SFTP or Data Warehouse integration, similar to how the above integrations have been documented.
