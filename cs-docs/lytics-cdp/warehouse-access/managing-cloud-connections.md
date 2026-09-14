---
title: "Connecting Warehouses"
description: "Cloud Connect tabs are found under Data Pipeline > Cloud Connect . Connections configure the access to your data warehouses, and Data Models configure the…"
url: /lytics/managing-cloud-connections
---

# Connecting Warehouses

## Connecting Warehouses

## Access

Cloud Connect tabs are found under **Data Pipeline** > **Cloud Connect**. Connections configure the access to your data warehouses, and Data Models configure the SQL queries that are run to connect audience membership and profile attributes.

![e71f0a0818c26d22d22341e20a67e3da8446c8a98480f399ee1233d41dd51970-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am12f7d6a583152161/c92dbd2c02968cad14ba41c0/e71f0a0818c26d22d22341e20a67e3da8446c8a98480f399ee1233d41dd51970-image.png)

## Creating a Connection

Click **\+ Create New Connection** from the Connections Dashboard at the top right and complete the following steps.

1.  Choose the provider.
2.  Choose the Connection type.
3.  Select an existing Authorization or create a new one by following the [Authorization instructions](/docs/lytics/keys-authorizations).
4.  Add a name (label), description, and complete the configuration options. These will vary slightly between providers.\\

![a621f60-Screenshot_2023-10-26_at_4.44.38_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7e47b083b0d9d091/b6fde7e263a1052db8964450/a621f60-Screenshot_2023-10-26_at_4.44.38_PM.png)

### Authorization & Security

The authorization selected for your Connection will control your Lytics account users' access to your data warehouse. You can control whether a user has read access to the entire dataset or individual tables, maintaining your security and governance practices within your data warehouse.

### Supported Data Warehouses

Cloud Connect currently supports a number of popular data warehouses:

-   Amazon Redshift
-   Databricks
-   Google BigQuery
-   Microsoft Azure SQL Database
-   Snowflake

## Managing Connections

Once you have created a Connection, you can access a summary page showing how data from your data warehouse is being leveraged in Lytics. At the top of the page, you’ll see the following information:

-   **Provider**: Data warehouse that you are connecting with Lytics.
-   **Authorization**: Name of the authorization, such as “Cloud Connect JWT.” Note: Lytics users can access any data tables that the Connection Authorization has read access to.
-   **Type**: Indicates the type based on your provider.
-   **Created By**: Lytics user who created the Connection.
-   **Created On**: Date the Connection was initially created.
-   **Last Updated**: Date the Connection was most recently edited.

![825ccb9-Screenshot_2023-10-26_at_4.53.02_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd5b8c37d93bad1f3/dbb9faa74ec8220cd4ce880a/825ccb9-Screenshot_2023-10-26_at_4.53.02_PM.png)

The rest of the Summary tab shows how many active and inactive data models are built using this Connection as a data source and how many tables are accessible from this dataset. The Activity chart displays how many rows are being queried, which can have cost implications based on your data warehouse usage.

### Explore

The Explore tab provides a simple Schema Explorer to validate that the data shown is as you would expect to see in your data warehouse. In the example below, we only connected an individual table, but here you will see as many tables as the authorization has read access to.

![60c3d3a-Screenshot_2023-10-26_at_4.50.32_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4a4944534ee21e17/6ff8cc93bde6b5ecf7004fac/60c3d3a-Screenshot_2023-10-26_at_4.50.32_PM.png)

### Details

The Details section displays all the information about setting up your Connection, including the authorization and configuration settings.

![c0af03e-Screenshot_2023-10-26_at_4.54.12_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am82f889ac661737ac/5c4fdaed320033b19109271b/c0af03e-Screenshot_2023-10-26_at_4.54.12_PM.png)

### Logs

The Logs section records the history of events for this Connection, which are helpful to ensure your connection is working as expected. Below are the connection event types you may see.

| Connection Events | Description |
| --- | --- |
| Created | First event indicating the Connection is active. |
| Updated | Connection was updated by a Lytics user. |
| Deleted | Connection was removed and any data models built on this Connection will no longer be updated. |
