---
title: "Provider Configuration Endpoints"
description: "API endpoints for discovering available resources from connected third-party platforms."
url: /lytics/provider-configuration-endpoints
uid: bltdf7befc75f1a2496
---

# Provider Configuration Endpoints

## Provider Configuration Endpoints

API endpoints for discovering available resources from connected third-party platforms.

## Overview

Provider configuration endpoints allow you to discover available resources from your connected third-party platforms. These endpoints query the actual third-party APIs in real-time to list resources like S3 buckets, Salesforce objects, SendGrid lists, Facebook custom audiences, etc.

These endpoints are primarily used by the Lytics UI when configuring integrations and workflows. They can also be used programmatically to discover available resources before creating export or import configurations.

**Note:** All provider endpoints require a valid auth\_id query parameter referencing an existing authorization for that provider.

## Common Pattern

All provider endpoints follow a consistent pattern:

```
GET /v2/provider/{provider}/{resource_type}?auth_id={auth_id}
```

**Response format**: An array of \[id, display\_name\] tuples:

```
[
  ["resource_id_1", "Resource Display Name 1"],
  ["resource_id_2", "Resource Display Name 2"]
]
```

Some providers support hierarchical navigation where you pass additional query parameters to drill down into nested resources (e.g., BigQuery project -> dataset -> table -> field).

## Available Providers

### AWS

| Endpoint | Description |
| --- | --- |
| GET /v2/provider/aws/regions | List available AWS regions |
| GET /v2/provider/aws/s3/buckets | List S3 bucket names |
| GET /v2/provider/aws/s3/directories | List directory paths in a bucket |
| GET /v2/provider/aws/s3/objects | List object names in a bucket |
| GET /v2/provider/aws/s3/objectfields | List fields from an S3 object |
| GET /v2/provider/aws/kinesis/streams | List Kinesis stream names |
| GET /v2/provider/aws/redshift/tables | List Redshift table names |
| GET /v2/provider/aws/redshift/timestamps | List Redshift timestamp columns |
| GET /v2/provider/aws/pinpoint/apps | List Pinpoint applications |
| GET /v2/provider/aws/pinpoint/channel-type | List Pinpoint channel types |
| GET /v2/provider/aws/pinpoint/message-type | List Pinpoint message types |

### Google

| Endpoint | Description |
| --- | --- |
| GET /v2/provider/google/accounts | List Google accounts |
| GET /v2/provider/google/ads | List Google Ads accounts |
| GET /v2/provider/google/ads/customers | List Google Ads customers |
| GET /v2/provider/google/ads/lists | List Google Ads audience lists |
| GET /v2/provider/google/bigquery | List BigQuery resources (use type param: project, dataset, table, field) |
| GET /v2/provider/google/bigquery/streams | List BigQuery stream names |
| GET /v2/provider/google/cloudstorage/buckets | List GCS bucket names |
| GET /v2/provider/google/cloudstorage/projects | List GCS projects |
| GET /v2/provider/google/cloudstorage/files | List GCS file paths |
| GET /v2/provider/google/pubsub/topics | List Pub/Sub topics |
| GET /v2/provider/google/sheets/sheetlist | List Google Sheets |
| GET /v2/provider/google/properties | List GA4 properties |
| GET /v2/provider/google/dimensions | List GA4 dimensions |
| GET /v2/provider/google/dv360/lists | List DV360 audience lists |
| GET /v2/provider/google/gtmaccounts | List GTM accounts |
| GET /v2/provider/google/gtmcontainers | List GTM containers |

### Azure

| Endpoint | Description |
| --- | --- |
| GET /v2/provider/azure/containers | List Blob Storage containers |
| GET /v2/provider/azure/container/blobs | List blobs in a container |
| GET /v2/provider/azure/blob/fields | List fields from blob data |
| GET /v2/provider/azure/sql/tables | List Azure SQL tables |
| GET /v2/provider/azure/sql/timestamp | List Azure SQL timestamp columns |

### Snowflake

| Endpoint | Description |
| --- | --- |
| GET /v2/provider/snowflake/databases | List databases |
| GET /v2/provider/snowflake/schemas | List schemas |
| GET /v2/provider/snowflake/sources | List data sources |
| GET /v2/provider/snowflake/fields | List fields |

### Salesforce

| Endpoint | Description |
| --- | --- |
| GET /v2/provider/salesforce/objects | List Salesforce objects (Lead, Contact, etc.) |
| GET /v2/provider/salesforce/fields | List fields for a Salesforce object (requires salesforce\_object param) |

### Facebook

| Endpoint | Description |
| --- | --- |
| GET /v2/provider/facebook/lists | List Facebook audience lists |
| GET /v2/provider/facebook/customaudiences | List Facebook custom audiences |
| GET /v2/provider/facebook/fields | List available fields |
| GET /v2/provider/facebook/conversionapi/standard-events | List CAPI standard events |
| GET /v2/provider/facebook/conversionapi/user-data-parameters | List CAPI user data parameters |
| GET /v2/provider/facebook/conversionapi/action-sources | List CAPI action sources |

### LinkedIn

| Endpoint | Description |
| --- | --- |
| GET /v2/provider/linkedin/adaccounts | List LinkedIn ad accounts |
| GET /v2/provider/linkedin/segments | List audience segments |
| GET /v2/provider/linkedin/campaigns | List campaigns |
| GET /v2/provider/linkedin/conversionrules | List existing conversions |
| GET /v2/provider/linkedin/conversiontype | List conversion types |
| GET /v2/provider/linkedin/idfields | List identifier fields |

### Email Marketing

| Provider | Endpoints |
| --- | --- |
| **SendGrid** | lists, listsnew, segments, segmentsnew, customfields, customfieldsnew, templates |
| **Mailchimp** | lists, campaigns, fields |
| **Brevo** | lists, fields |
| **Campaign Monitor** | clients, lists, fields |
| **Klaviyo** | lists, fields |
| **Iterable** | lists, fields |
| **Marketing Cloud** | lists, dataexts, attributes, businessunits, eventdefs, eventfields, fieldtypes, folders, subproperties |

All follow the pattern GET /v2/provider/{provider}/{resource}.

### Other Advertising

| Provider | Endpoints |
| --- | --- |
| **Google Ads** | ads, ads/customers, ads/lists |
| **Pinterest** | accounts, lists, capifields |
| **TikTok** | advertisers, id-encryption-type, event-name, identifiers, properties |
| **Snapchat** | orgs, adaccounts, audiences |
| **Twitter/X** | adaccounts, customaudiences, idtypes |
| **Reddit** | businesses, ad-accounts, eventtypes, userdatafields |
| **Criteo** | advertisers, audiences, id-types |
| **AdRoll** | advertisables, pixel |
| **Yahoo** | adaccounts, idtypes |
| **The Trade Desk** | advertisers |

### Other

| Provider | Endpoints |
| --- | --- |
| **HubSpot** | lists, properties |
| **Marketo** | lists, fields, activitytypes, partitions |
| **Amplitude** | cohorts |
| **Shopify** | fields |
| **BigCommerce** | standard-fields, custom-attributes |
| **ContentStack** | content-types, organizations, personalize-projects, regions, taxonomies |
| **Airship** | lists, channels |
| **OneSignal** | apps |
| **Databricks** | Dynamic type parameter |
| **LiveRamp** | eu-custom-fields |
| **Insider** | identifiers, attributes |
| **Versium** | tools |

## Example: Hierarchical Discovery

Some providers support hierarchical navigation. For example, to configure a BigQuery export:

## Step 1: List available projects

GET /v2/provider/google/bigquery?auth\_id=auth\_xyz

## Step 2: List datasets in a project

GET /v2/provider/google/bigquery?auth\_id=auth\_xyz&type=dataset&project=my-project

## Step 3: List tables in a dataset

GET /v2/provider/google/bigquery?auth\_id=auth\_xyz&type=table&project=my-project&dataset=my\_dataset

## Step 4: List fields in a table

GET /v2/provider/google/bigquery?auth\_id=auth\_xyz&type=field&project=my-project&dataset=my\_dataset&table=my\_table
