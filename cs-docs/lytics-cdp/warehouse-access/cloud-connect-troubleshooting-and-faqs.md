---
title: "Cloud Connect Troubleshooting and FAQs"
description: "A sync refers to the process of running SQL queries configured on Data Models against data warehouses and then updating Lytics profiles with any changes…"
url: /lytics/cloud-connect-troubleshooting-and-faqs
---

# Cloud Connect Troubleshooting and FAQs

## Cloud Connect Troubleshooting and FAQs

## Syncs

### What is a “sync” in the context of Cloud Connect?

A sync refers to the process of running SQL queries configured on Data Models against data warehouses and then updating Lytics profiles with any changes that have occurred since the previous sync.

### Will my SQL query only be run once per sync?

Most of the time, yes. However, if an interruption occurs during the sync (either due to a processing or network error), we’ll attempt to resume the sync from the place where we left off. If that occurs, we’ll need to rerun the query.

### Why are the sync times slightly different than what I’d expect?

On the Data Model Details page, we display two timestamps related to the sync for your Data Model: “Last Sync on” and “Next Sync On”. The “Last Sync On” timestamp displays the exact time when your Data Model was last synced. However, the timestamp shown for “Next Sync On” will vary slightly from the time when your model will actually sync.

![f0613e8-Screenshot_2023-11-07_at_12.05.47_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am961096bd6acc8e5c/91bfb2c74419a4a36c2d27b0/f0613e8-Screenshot_2023-11-07_at_12.05.47_PM.png)

In an effort to reduce the number of syncs needed, we set the “Next Sync On” timestamp in a way where more models will end up synced together. Then every hour, we check to see which models are ready to sync - if “Next Sync on” is in the past, we sync the model.

Ultimately, you should think of your selected sync frequency as the number of times per day your model will sync (e.g. a model with a sync frequency of four hours will sync six times per day). The “Next Sync on” timestamp gives an estimate as to when the next sync will occur rather than the exact time.

## Data Models

### Why can’t I create a Data Model that returns no rows?

We use the columns returned by the SQL query to set up our internal schema. If no data is returned by the query, we don’t have the required information to correctly set up our schema. Note that once the schema is set up, your Data Model will continue to sync regardless of how many rows are returned.

### Why can’t I create/update a Data Model when my schema has unpublished changes?

Creating a Data Model modifies your profile schema - at a minimum, a true/false “membership” field will be added to denote whether a profile falls into that Data Model. In addition, one field is added for each activated field that’s selected. In order for these fields to be added, your profile schema cannot be in a draft state.

When updating a Data Model, we’ll attempt to update your profile schema if any activated fields are being changed. For this reason, if you try to edit your activated fields and your schema has unpublished changes, we’ll reject the update.

### Can I select any field as the primary key?

The UI allows for selecting any column that’s returned by your SQL query as your primary key. However, it’s important that the selected primary key field contain unique values. If there are duplicate values, we cannot guarantee that the values for your activated fields will be correct.

You should choose a field whose values will match to the values of an existing “by” field in your Lytics schema.

### Can I select any field as the Lytics key?

No; only “by” fields can be selected. Further, once a Data Model has been created for a certain primary key, all subsequent Data Models which use that primary key must also use that same Lytics key.

### Sync Failures Related To Collation

Cloud Connect requires that the column you use as the primary key of your data model queries be UTF-8 collated. If your column is collated differently, this can cause your data model syncs to fail. Most database providers allow columns to be converted to a particular collation within a query. If your primary key column is collated differently, consult the documentation of your database provider to ensure a compatible collation:

-   [Snowflake](https://docs.snowflake.com/en/sql-reference/collation)
-   [BigQuery](https://cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts)
-   [Azure](https://learn.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support?view=azuresqldb-current)
-   [RedShift](https://docs.aws.amazon.com/redshift/latest/dg/r_COLLATE.html)

### Sync Failures Related To Date Formats

When a column is mapped to a Lytics date field, Cloud Connect parses each value into a date. Columns already typed as DATE or TIMESTAMP in your warehouse sync reliably. Dates stored as **strings** can cause a sync to fail or, worse, be interpreted as the wrong date:

-   Unambiguous formats work as expected: ISO 8601 (2025-02-19 or 2025-02-19T14:30:00Z) and US format MM/DD/YYYY (e.g. 02/19/2025).
-   A day-first string such as 19/02/2025 will fail the sync, because 19 is read as the month.
-   An ambiguous string such as 03/02/2026 cannot be resolved from the value alone and may be interpreted as the wrong date (March 2 vs. February 3).

For the most reliable results, cast date columns to a native date type in your query rather than passing them as strings:

-   Snowflake: TO\_DATE(booking\_date, 'DD/MM/YYYY')
-   BigQuery: PARSE\_DATE('%d/%m/%Y', booking\_date)
