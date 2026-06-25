---
title: "[Contentstack Regions] - About Regions"
description: About Regions in Contentstack Regions.
url: https://www.contentstack.com/docs/administration/about-regions
product: Contentstack
doc_type: concept
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Contentstack Regions] - About Regions

This page explains what Contentstack regions are, which regions and data centers are supported, and the key features and constraints of using regions. It is intended for developers and administrators who need to choose, understand, or configure the correct region for their Contentstack organization and related endpoints.

## About Regions

A Contentstack region refers to the location of the data centers where your organization's data resides.

While subscribing to a [Contentstack Account](https://app.contentstack.com/#!/login), you can decide the data center that will host your organization’s data.

Contentstack currently supports seven regions: **AWS North America**,** AWS Europe**, **AWS Australia, Azure North America**, **Azure Europe**, **GCP North America, and GCP Europe.**

## Data Centers

Contentstack supported regions are hosted in the following data centers:
- For AWS North America, our main region is **Oregon, US (us-west-1)** and the backup region is **North Virginia, US (us-east-1)**.
- For AWS Europe, our main region is **Ireland, Europe (eu-west-1) **and the backup is **Frankfurt, Europe (eu-central-1)**.
- For AWS Australia, our primary region is **Sydney** and our backup region is **Singapore.**
- For Azure North America, our primary region is **West US 2 **and our backups are configured in **US East **region(**MongoDB Database** backups) and **West US** region(**Assets **backups).
- For Azure Europe, our primary region is **West Europe (Netherlands) **and our backup region is **EU Central 1 (Frankfurt).**
- For GCP North America, our primary region is **Oregon, US (us-west1)** and the backup region is **South Carolina, US (us-east1).**
- For GCP Europe, our primary region is **Europe-west1 (Belgium)** and our backup region is **Europe-west3 (Frankfurt).**

## Features of Contentstack Regions

- Global Availability
- Independent Data Centers
- Speed and Security

### Global Availability

Each data center is installed in a specific region, but it is capable of serving customers across the globe.
For example: The AWS Europe data center is installed in the European region and it is capable of serving customers across all of Europe and other continents.

### Independent Data Centers

- Each region is a separate, independent region. Therefore a region doesn't work as a fallback or disaster recovery option for the other.
You can't use a region as a backup of your primary region.
- The data stored in one region cannot be accessed by anyone from a different region.
- You cannot store your organization's content in multiple regions.
For example: If you choose the AWS Europe data center as your region, all of your organization's data will reside in the AWS Europe region
- Each region has its own login URLs and other endpoints.

### Speed and Security

- Contentstack regions offer high level of [data security and privacy](https://www.contentstack.com/trust).
- The Contentstack app functions at the optimum level in all the available regions.

## Using Regions in Contentstack

- [Login Endpoints](./login-endpoints.md)
- [API Endpoints](./api-endpoints.md)
- [Selecting Regions in Contentstack Starter Apps](./selecting-region-in-contentstack-starter-apps.md)
- [Selecting Regions in SDKs](./selecting-region-in-sdks.md)
- [Configure Regions in the CLI](../cli/configure-regions-in-the-cli.md)

## Common questions

**Q: When do I choose a Contentstack region?**  
A: While subscribing to a [Contentstack Account](https://app.contentstack.com/#!/login), you can decide the data center that will host your organization’s data.

**Q: Can I use one region as a backup or disaster recovery option for another region?**  
A: No. Each region is a separate, independent region. Therefore a region doesn't work as a fallback or disaster recovery option for the other.

**Q: Can I store my organization's content in multiple regions?**  
A: No. You cannot store your organization's content in multiple regions.

**Q: Where do I find the correct endpoints for my region?**  
A: See the links under “Using Regions in Contentstack,” such as [Login Endpoints](./login-endpoints.md) and [API Endpoints](./api-endpoints.md).