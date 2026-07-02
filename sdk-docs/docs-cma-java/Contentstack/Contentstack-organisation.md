---
title: "organisation"
description: "The organization is the top-level entity in the hierarchy of Contentstack, consisting of stacks and stack resources, and users. The organization allows easy management of projects as well as users within the Organization."
url: "https://www.contentstack.com/java-management-contentstack-organization"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## organisation

The organization is the top-level entity in the hierarchy of Contentstack, consisting of stacks and stack resources, and users. The organization allows easy management of projects as well as users within the Organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| organizationUid | String | No | — |  |

Returns:
Type
Organisation

```
import contentstack;

Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
//OR
Organisation organisation = contentstack.organisation("organisationId");
```
