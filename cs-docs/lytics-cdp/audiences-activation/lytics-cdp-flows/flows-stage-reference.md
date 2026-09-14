---
title: "Integration Stage Reference"
description: "Complete reference of all available workflow stage integrations for Flows."
url: /lytics/flows-stage-reference
---

# Integration Stage Reference

## Integration Stage Reference

Complete reference of all available workflow stage integrations for Flows.

## Overview

Flows support 90+ integration stages across email, advertising, CRM, data warehouse, analytics, and other platforms. This reference catalogs all available stages by category.

Each stage is used within a Flow's Export step to send data to an external system, or within an import configuration to pull data into Lytics.

**Note:** Not all stages listed here are available in the visual Flow builder. Some are available only via the API. Contact your Lytics account team if you need access to a stage not shown in the UI.

## Email & Messaging

| Integration | Capabilities | Description |
| --- | --- | --- |
| **SendGrid** | Import, Export, Send Email | Export Lytics segments as SendGrid segments, import engagement data, trigger transactional emails. |
| **Braze** | Export (Profiles, Events, Purchases) | Export Lytics segments to Braze as audience attributes. Import user and event data via webhooks. |
| **Mailchimp** | Import, List Sync | Import subscribers and campaign engagement data. Sync Lytics segments to Mailchimp lists. |
| **Iterable** | Import, Export | Import users and events from Iterable. Export audiences for campaign targeting. |
| **Klaviyo** | Export | Export Lytics audiences to Klaviyo email lists. |
| **Campaign Monitor** | Import, Export | Campaign Monitor email integration. |
| **Brevo** | Import, Export | Brevo (formerly Sendinblue) marketing platform integration. |
| **Cordial** | Import | Import contact data from Cordial. |
| **SparkPost** | Send Email | Send transactional emails through SparkPost. |
| **Mailgun** | Send Email | Mailgun email delivery integration. |
| **Mandrill** | Send Email | Mandrill transactional email service. |
| **Sailthru** | Import | Import list data from Sailthru. |
| **Dotmailer** | Import | Import contact and engagement data from Dotdigital (formerly Dotmailer). |
| **iContact** | Import | Import contacts and campaign data from iContact. |
| **Maropost** | Import | Import contacts from Maropost. |
| **PostUp** | Import | Import user profiles from PostUp. |

## Advertising

| Integration | Capabilities | Description |
| --- | --- | --- |
| **Facebook** | Export (Audiences, Conversions), Import (Metrics) | Export segments as Facebook Custom Audiences. Import ad set performance metrics. Send conversion events via the Conversions API. |
| **Google Ads** | Export (Customer Match, Conversions) | Export audiences via Google Ads Customer Match. Track conversions. |
| **LinkedIn** | Export | Export audiences for LinkedIn advertising and account matching. |
| **Pinterest** | Export | Export custom audiences for Pinterest ad targeting. |
| **TikTok** | Export | Export custom audiences for TikTok ad targeting. |
| **Snapchat** | Export | Export custom audiences for Snapchat ad targeting. |
| **Twitter/X** | Export, Import | Export audiences for X (Twitter) ad targeting. Import web event data. |
| **Reddit** | Export | Export custom audiences for Reddit ad targeting. |
| **The Trade Desk** | Import (Metrics) | Import experience metrics from The Trade Desk programmatic campaigns. |
| **Amazon DSP** | Export | Export audiences for Amazon Display advertising. |
| **AdRoll** | Export | Sync Lytics segments to AdRoll audience segments. |
| **Criteo** | Export | Export audiences for Criteo retargeting. |
| **DV360** | Export | Export audiences to Google Display & Video 360. |
| **MediaMath** | Export | Export audiences to MediaMath DSP. |
| **Yahoo** | Export | Export audiences for Yahoo advertising. |
| **Taboola** | Export | Export audiences for Taboola content advertising (S3-based). |

## CRM

| Integration | Capabilities | Description |
| --- | --- | --- |
| **Salesforce** | Import, Export | Import leads, contacts, opportunities, accounts, and custom objects. Export Lytics audiences as new leads with enrichment data. Includes duplicate rule validation. |
| **HubSpot** | Import, Export | Import contacts and companies. Export Lytics audiences to HubSpot contact lists. |
| **Marketo** | Import | Import leads and accounts from Marketo. |
| **Pardot** | Export | Export Lytics audiences as Pardot prospects. |
| **Salesforce Marketing Cloud** | Import, Export, Trigger | Import/export data extensions and lists. Trigger Marketing Cloud journeys. Import experience metrics. |
| **NetSuite** | Import | Import customer records from NetSuite. |
| **Zendesk** | Export | Export contacts and organizations to Zendesk. |
| **Zuora** | Import | Import subscription and billing data from Zuora. |

## Data Warehouse & Cloud

| Integration | Capabilities | Description |
| --- | --- | --- |
| **Google BigQuery** | Import, Export | Export audiences, segment changes, and events to BigQuery. Import data from BigQuery tables. Supports BigQuery ML model creation. |
| **Snowflake** | Export | Export Lytics events to Snowflake tables. |
| **AWS S3** | Import, Export | Import CSV/JSON files from S3. Export audience data to S3 buckets. |
| **AWS Kinesis** | Publish | Publish events to Kinesis streams. |
| **AWS Pinpoint** | Export | Export audiences to Amazon Pinpoint for messaging campaigns. |
| **Azure SQL** | Export | Export data to Azure SQL databases. |
| **Databricks** | Export | Export data to Databricks for analytics and processing. |
| **Google Cloud Storage** | Export | Export CSV audience data to GCS buckets. |
| **Google Cloud Pub/Sub** | Import, Export | Ingest events from Pub/Sub topics. Publish events to Pub/Sub. |
| **Google Sheets** | Export | Export audience data to Google Sheets. |

## Analytics & Testing

| Integration | Capabilities | Description |
| --- | --- | --- |
| **Amplitude** | Import | Import events and cohort data from Amplitude. |
| **Mixpanel** | Import | Import event and user profile data from Mixpanel. |
| **Google Analytics 4** | Export | Export event data to Google Analytics 4. |
| **Optimizely** | Export | Export Lytics segments to Optimizely experiments for A/B testing. |
| **Localytics** | Import | Import mobile activity data from Localytics. |

## Data Enrichment & Identity

| Integration | Capabilities | Description |
| --- | --- | --- |
| **FullContact** | Enrichment | Enrich user profiles with email, phone, and social data from FullContact. |
| **Clearbit** | Enrichment | B2B data enrichment using email and domain data. |
| **Versium** | Enrichment | Data enrichment via Versium services. |
| **LiveRamp** | Export | SFTP-based CSV export for identity resolution. Supports EU and US formats. |
| **Unified ID 2.0** | Enrichment | UID 2.0 identity enrichment. |
| **Lotame** | Export | Data exchange integration with Lotame. |

## Push Notifications & Mobile

| Integration | Capabilities | Description |
| --- | --- | --- |
| **OneSignal** | Import | Import user and device subscription data from OneSignal. |
| **Airship** | Import, Export | Import compliance data. Export user streams to Airship for mobile messaging. |
| **Insider** | Export | Export audiences to Insider for customer engagement. |
| **Customer.io** | Import, Trigger | Import customer profiles. Trigger events and send data to Customer.io. |

## E-Commerce

| Integration | Capabilities | Description |
| --- | --- | --- |
| **Shopify** | Import | Import order and customer data from Shopify stores. |
| **BigCommerce** | Import | Import order and customer data from BigCommerce. |

## Content

| Integration | Capabilities | Description |
| --- | --- | --- |
| **ContentStack** | Export | Export audience schema data to ContentStack CMS. |
| **Wistia** | Import | Import video engagement data from Wistia. |

## Other

| Integration | Capabilities | Description |
| --- | --- | --- |
| **Webhooks** | Import | Generic webhook receiver for ingesting data from any external system. |
| **Custom** | Varies | Custom integration framework for building bespoke stages. |
| **Google Tag Manager** | Setup | Configure GTM container setup for Lytics tag deployment. |
| **Cheetah Digital** | Export | Export audiences to Cheetah Digital for marketing automation. |
| **Drift** | Import | Import conversational engagement data from Drift. |
| **Mapp** | Import (Metrics) | Import experience metrics from Mapp marketing platform. |
| **Episerver** | Import, Export | Import activity data and export audiences to Episerver CMS. |
| **Selligent** | Export | SFTP-based audience export to Selligent. |
| **LeadSquared** | Export | Export leads to LeadSquared lead management. |

## Legacy Integrations

The following integrations exist in the platform but may be deprecated or have limited support:

| Integration | Notes |
| --- | --- |
| **Silverpop** | IBM Marketing Cloud (legacy). Contact and campaign import/export. |
| **Eloqua** | Oracle Eloqua. Event and visitor import. |
| **Responsys** | Oracle Responsys. File-based import. |
| **BlueHornet** | Acquired by Mapp. Segment/audience export. |
| **RetentionScience** | Retention marketing. Timed export. |
| **Gigya** | Customer identity platform. Export. |
