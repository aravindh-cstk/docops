---
title: "[Contentstack Regions] - Europe Region — What it is and What it isn't"
description: Details on what the Contentstack Europe region is and what it is not, including capabilities, separation from North America, and API endpoint differences.
url: https://www.contentstack.com/docs/developers/contentstack-regions/europe-region-what-it-is-and-what-it-isnt
product: Contentstack
doc_type: concept
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-26
---

# [Contentstack Regions] - Europe Region — What it is and What it isn't

This page explains what the Contentstack Europe region is and what it isn’t, helping developers and administrators understand regional separation, access requirements, and API endpoint differences when choosing or working within the Europe data center.

## Europe Region — What it is and What it isn't

Contentstack recently announced the Europe region. Let’s learn more about this [region](/docs/developers/contentstack-regions/about-regions):

**What it is**
- Although the European data center is installed in the European region, it's capable of serving customers across all of Europe and other continents.
- It's a separate, independent region than the North America and therefore has a different login URL, password, and API endpoints to access the organization apps and the content.
- The level of [data security and privacy](/trust) is as good as in the North America region.
- The Contentstack app functions at the optimum level in the European region similar to the North American region.

**What it isn't**
- It is an independent data center and therefore doesn't work as the fallback or disaster recovery option for the North America region.
- It is not a backup of the North America region and the data stored in the European region cannot be accessed by anyone from the North America region.
- You cannot store a part of your organization's content in the European region and the other part in the North American region. If you choose the European data center as your region, all of your organization's data will reside in the European region.
- The API endpoints for the North American region will not work for the European region. The European region has its own separate, dedicated [API endpoints](/docs/developers/contentstack-regions/api-endpoints).

## Common questions

### Does the Europe region have different login and API endpoints than North America?
Yes. It's a separate, independent region than the North America and therefore has a different login URL, password, and API endpoints to access the organization apps and the content.

### Can the Europe region be used as a disaster recovery option for North America?
No. It is an independent data center and therefore doesn't work as the fallback or disaster recovery option for the North America region.

### Can an organization split content between Europe and North America regions?
No. You cannot store a part of your organization's content in the European region and the other part in the North American region.

### Will North American API endpoints work for the Europe region?
No. The API endpoints for the North American region will not work for the European region. The European region has its own separate, dedicated [API endpoints](/docs/developers/contentstack-regions/api-endpoints).