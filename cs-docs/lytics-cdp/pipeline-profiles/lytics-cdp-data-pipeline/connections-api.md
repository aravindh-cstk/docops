---
title: "Connections API"
description: "Manage external database connections for importing and querying data."
url: /lytics/connections-api
uid: bltbadf406c0c4a76c4
---

# Connections API

## Connections API

Manage external database connections for importing and querying data.

## Overview

Connections represent links to external databases and data warehouses (Snowflake, BigQuery, Redshift, SQL Server, etc.). Through connections, you can import data into Lytics, discover external schemas, and run ad-hoc queries against your data sources.

## API Reference

### List Connections

```
GET /v2/connection
```

Returns all connections for the account.

### Get a Connection

```
GET /v2/connection/{id}
```

Returns a single connection by ID. Credential fields are encrypted in the response.

### Create a Connection

```
POST /v2/connection
```

Creates a new database connection. When a connection is created, Lytics automatically triggers a background job to compute schema embeddings for [AI SQL generation](/docs/lytics/ai-sql-generation).

### Update a Connection

```
PUT /v2/connection/{id}
```

Updates an existing connection's configuration.

### Delete a Connection

```
DELETE /v2/connection/{id}
```

Soft-deletes a connection. The connection data is retained but marked as deleted.

### Query a Connection

```
POST /v2/connection/{id}/scan
```

Executes a SQL query against the external data source and returns results.

#### Constraints

-   **Rate limited**: 10 requests per 10 seconds
-   **Row limit**: Default 20 rows, maximum 100 rows
-   **Read-only**: DROP, INSERT, UPDATE, and other write operations are blocked
-   Queries are executed directly against the external database

#### Request Body

```
{
  "query": "SELECT * FROM customers WHERE signup_date > '2024-01-01' LIMIT 10"
}
```

### Discover External Schema

#### List Tables

```
GET /v2/connection/{id}/schema
```

Returns a list of tables available in the external data source. Results are cached in Redis for 30 minutes.

#### Get Table Columns

```
GET /v2/connection/{id}/schema/{table}
```

Returns column metadata (names, types) for a specific table in the external data source. Results are cached and rate-limited.

### Connection Configurations

#### List Connection Types

```
GET /v2/connectionconfig
```

Returns all available connection type configurations (supported database types and their required fields).

#### Get a Connection Type

```
GET /v2/connectionconfig/{id}
```

Returns configuration details for a specific connection type by ID or slug.
