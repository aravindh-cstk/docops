---
title: "Migrating from Queries to Schema"
description: "TL;DR: Many things you liked about LQL are still here, and many things you didn't like are out. Migrating your schema management to Lytics' Schema API can…"
url: /lytics/migrating-from-lql-to-conductor
---

# Migrating from Queries to Schema

## Migrating from Queries to Schema

## Deep Dive: Migrating from Queries to Schema

**TL;DR:** Many things you liked about LQL are still here, and many things you didn't like are out. Migrating your schema management to Lytics' Schema API can simplify your workflows.

## Intro

Lytics' profile pipeline processes your customer data in real-time to perform data cleansing, data transformation, data deduplication, and identity resolution.

Historically, these functions were performed in an expressive SQL-like scripting language called [LQL](/docs/lytics/lytics-query-language). After listening to how our customers used LQL and the operational scaffolding they developed to ensure reliability while enabling process scalability, we introduced a new Schema API. The **Building Profiles > Schema** interface provides a UI-based flow for interacting with the Schema API.

Longtime Lytics users who are comfortable with LQL have appreciated:

-   Brevity: LQL combined both data _definition_ (DDL) and data _manipulation_ (DML).
-   Readability: LQL reads similarly to SQL, which makes sense to a lot of database practitioners.

Longtime Lytics users who were uncomfortable with LQL didn't appreciate:

-   DRY violations: A common development mantra states _Don't Repeat Yourself_ (DRY). Repeating your code in multiple places introduces opportunities for inconsistency, and many LQL statements mapping data into the same field could yield inconsistent or unexpected results.
-   Lack of versioning: When you post LQL, you're doing it live! This can be problematic when there are large changesets that you want to stage together, or if you want to understand what changed at a given time.
-   Learning curve: Not every update needs to be complicated, and requiring users to learn LQL to make even small changes became prohibitive for many of them.

Lytics' new [Schema](https://docs.lytics.com/reference/schema) API allows you to use LQL expressions within a JSON framework with native version control.

## Analogs

An LQL statement combines features of data _definition_ and data _manipulation_. In the Schema API, data definition is expressed through fields, and data manipulation is expressed through mappings.

![9f4eb14-Query_Field_Mapping.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am18597bd806f28f39/45f09b4596e3c6bad98459ca/9f4eb14-Query_Field_Mapping.png)

### Field Analog Properties

<table><tbody><tr><td><strong>LQL</strong></td><td><strong>Schema API</strong></td></tr><tr><td>AS</td><td>ID</td></tr><tr><td>SHORTDESC</td><td>ShortDesc</td></tr><tr><td>LONGDESC</td><td>LongDesc</td></tr><tr><td>KIND</td><td>Type</td></tr><tr><td>MERGEOP</td><td>MergeOp</td></tr><tr><td>CAP</td><td>Capacity, KeepDays</td></tr><tr><td>BY</td><td>IsIdentifier</td></tr></tbody></table>

### Mapping Analog Properties

<table><tbody><tr><td><strong>LQL</strong></td><td><strong>Schema API</strong></td></tr><tr><td>–</td><td>ID</td></tr><tr><td>AS</td><td>Field</td></tr><tr><td>FROM</td><td>Stream</td></tr><tr><td>KIND</td><td>Expr</td></tr><tr><td>IF</td><td>Guard</td></tr></tbody></table>

### Example

Imagine we had the following simple LQL Select statement processing data from a "purchases" data stream. This statement is designed to accumulate the total amount that a customer has been refunded over their lifetime.

```
SELECT
  SUM(order_total) AS `refunded` IF eq(type, "refund") SHORTDESC "Refund Amount" LONGDESC "Total USD refunded",
  email(email) AS `email` SHORTDESC "Email Address"
FROM orders
INTO user
BY email
```

Instead of providing these definitions and transformations in a single statement, we would first create the fields into which we would like to direct this data. The definitions for the email and refunded fields would look like the following.

```
[
  {
    "id": "email",
    "shortdesc": "Email Address",
    "type": "string",
    "mergeop": "latest",
    "is_identifier": true
  },
  {
    "id": "refunded",
    "shortdesc": "Refund Amount",
    "longdesc": "Total USD refunded",
    "type": "number",
    "mergeop": "latest"
  }
]
```

Once we've defined the fields, we would define the mappings for both, which would look like the following.

```
[
  {
    "id": "abc123",
    "field": "refunded",
    "stream": "orders",
    "expr": "SUM(order_total)",
    "guard": "eq(type, \"refund\")"
  },
  {
    "id": "def456",
    "field": "email",
    "stream": "orders",
    "expr": "email(email)"
  }
]
```

After creating fields and mappings for the desired schema changes, simply publish your changes to see their effect immediately in your data processing.

## How to Get Started

Getting started is simple. All of your queries have been automatically translated into appropriate fields and mapping objects.

It is recommended to immediately publish your default schema _before_ making any changes to it. After it has been published, any changes can be published in batches to ensure better visibility on what changes go out.

While you're not required to immediately start using Lytics' new Schema API, the classic Query API will be deprecated starting February 1, 2024.
