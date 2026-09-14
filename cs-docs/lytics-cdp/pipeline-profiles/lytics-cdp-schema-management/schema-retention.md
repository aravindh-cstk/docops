---
title: "Schema Retention"
description: "Configure data retention policies for profile fields."
url: /lytics/schema-retention
---

# Schema Retention

## Schema Retention

Configure data retention policies for profile fields.

## Overview

Schema retention settings control how long data is kept for specific fields or tables in your schema. Retention policies help you manage data lifecycle, comply with privacy regulations, and keep profiles clean by automatically expiring stale data.

## Configuring Retention

Retention settings can be applied at the table level to control how long profile data is retained.

### API Reference

#### Get Retention Settings

```
GET /v2/schema/{table}/retention
```

Returns the current retention configuration for a table.

#### Update Retention Settings

```
POST /v2/schema/{table}/retention
```

Updates the retention configuration for a table.

## Field-Level Retention

Individual fields can have keep\_days configured to control how long their values are retained on profiles. When keep\_days is set, field values older than the specified number of days are automatically cleared during profile maintenance.

**Note:** See [Fields & Mappings](/docs/lytics/fields-mappings) for details on configuring keep\_days when creating or updating fields.

## Use Cases

-   **Cookie expiration**: Set retention on cookie-based identity fields to automatically expire inactive anonymous profiles.
-   **GDPR compliance**: Configure retention limits on PII fields to ensure data is not kept beyond required periods.
-   **Data freshness**: Expire behavioral signals that become stale after a defined period (e.g., recent purchase flags).
