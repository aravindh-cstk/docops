---
title: "Installation"
description: "Contentstack Marketplace enables users to directly install prebuilt apps and starters. However, app installations are subject to access restrictions, meaning your ability to view all or certain installed apps depends on the permissions granted at both the stack and organization levels. If you are an organization admin or owner , you will be able to see all the stack and organization apps installed by any user in your organization. If you are a stack admin or owner , you will be able to see the apps installed for the stacks that you have access to. If you are not a stack admin or owner , you will be able to see the apps installed for the stacks that you have access to. Example: Marketplace marketplace = new Marketplace.Builder(\"ORGANIZATION\\_UID\") .host(\"[marketplace.contentstack.io](http://marketplace.contentstack.io)\").build(); Installation installation = marketplace.installation();"
url: "https://www.contentstack.com/developers/sdks/marketplace-sdk/java/reference/installation"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Installation

## Installation

Contentstack Marketplace enables users to directly install prebuilt apps and starters. However, app installations are subject to access restrictions, meaning your ability to view all or certain installed apps depends on the permissions granted at both the stack and organization levels.

- If you are an **organization admin or owner**, you will be able to see all the stack and organization apps installed by any user in your organization.
- If you are a **stack admin or owner**, you will be able to see the apps installed for the stacks that you have access to.
- If you are not a **stack admin or owner**, you will be able to see the apps installed for the stacks that you have access to.

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
Installation installation = marketplace.installation();
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| organizationId | String | Yes | — | UID of the organization |
| installationId | String | No | — | UID for the installation |
