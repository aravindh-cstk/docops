---
title: "AI SQL Generation"
description: "Generate SQL queries from natural language descriptions for your connected data sources."
url: /lytics/ai-sql-generation
uid: blt6a7831a65d32aa71
---

# AI SQL Generation

## AI SQL Generation

Generate SQL queries from natural language descriptions for your connected data sources.

## Overview

Lytics can generate valid SQL queries from natural language descriptions for any of your connected database sources. This feature is useful when you need to query connected data warehouses but want to avoid writing SQL by hand.

The system uses embeddings to understand your database schema and selects the most relevant tables for your query, then generates syntactically correct SQL tailored to the specific database connection.

## How It Works

1.  **Schema Embedding**: When you enable SQL generation for a connection, Lytics computes vector embeddings of your table schemas. These embeddings capture the semantic meaning of table and column names.
2.  **Query Understanding**: When you submit a natural language query, it is converted into an embedding and compared against the stored table embeddings using cosine similarity.
3.  **Table Selection**: The top 5 most relevant tables are selected based on similarity, and their schemas are included as context.
4.  **SQL Generation**: An LLM generates a syntactically valid SQL query based on your natural language input and the relevant table schemas.

## API Reference

### Generate SQL from Natural Language

```
POST /v2/ai/sql/{connection}
```

Translates a natural language description into a SQL query for the specified database connection.

#### Path Parameters

| Parameter | Description |
| --- | --- |
| connection | The ID of the database connection to query against |

#### Query Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| engine | string | vertex | AI engine: vertex or openai |

#### Request Body

```
{
  "text": "Show me the top 10 customers by total purchase amount in the last 30 days"
}
```

#### Response

```
{
  "query": "SELECT customer_id, SUM(amount) as total_amount FROM orders WHERE order_date >= DATEADD(day, -30, GETDATE()) GROUP BY customer_id ORDER BY total_amount DESC LIMIT 10"
}
```

### Pre-compute Schema Embeddings

```
POST /v2/ai/embedding
```

Kicks off a background job to compute embeddings for table schemas across one or more connections. This step improves query generation speed and relevance.

#### Request Body

```
{
  "connections": ["connection_id_1", "connection_id_2"]
}
```

#### Response

Returns HTTP 201 (Created) with no body. The embedding job runs asynchronously.

**Note:** Embeddings are cached and reused if the underlying table schema hasn't changed. You only need to recompute embeddings when your database schema is modified.

## Supported Engines

| Engine | Model | Notes |
| --- | --- | --- |
| vertex | Google Vertex AI | Default engine. Uses code generation models. |
| openai | GPT-3.5 Turbo | Alternative engine. |

## Prerequisites

-   A configured [database connection](/docs/lytics/connections-api) with valid credentials
-   The connection must be accessible from the Lytics platform
-   For best results, pre-compute schema embeddings before generating queries
