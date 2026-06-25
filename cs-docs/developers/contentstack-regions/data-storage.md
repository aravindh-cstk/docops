---
title: "[Contentstack Regions] - Data Storage"
description: Data storage behavior and constraints across Contentstack regions.
url: https://www.contentstack.com/docs/administration/data-storage
product: Contentstack
doc_type: concept
audience:
  - developers
  - owners
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Regions] - Data Storage

This page explains how organization data is stored across Contentstack regions, who it applies to (organization owners/admins and developers), and when to reference it (when selecting or confirming an organization’s region and understanding data residency constraints).

## Data Storage

The AWS North America, AWS Europe, AWS Australia, Azure North America, Azure Europe, GCP North America and GCP Europe regions are completely separate and isolated from each other. Every piece of your [organization](../organization/about-organizations.md) data resides in your choice of [region](./about-regions.md). This means that you cannot decide to store some parts of the organization data in one region and the rest in the other.

**Note**: Once an organization has been registered/created, you cannot change the organization region.

## Common questions

**Can I split my organization data across multiple regions?**  
No. You cannot decide to store some parts of the organization data in one region and the rest in the other.

**Are Contentstack regions isolated from each other?**  
Yes. The AWS North America, AWS Europe, AWS Australia, Azure North America, Azure Europe, GCP North America and GCP Europe regions are completely separate and isolated from each other.

**Can I change my organization region after creation?**  
No. Once an organization has been registered/created, you cannot change the organization region.