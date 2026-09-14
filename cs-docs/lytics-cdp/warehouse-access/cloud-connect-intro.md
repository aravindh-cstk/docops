---
title: "What is Cloud Connect?"
description: "An introduction to Lytics Cloud Connect, which runs SQL queries directly against a customer's data warehouse and turns the results into profile attributes and audiences without needing to replicate data."
url: /lytics/cloud-connect-intro
---

# What is Cloud Connect?

## What is Cloud Connect?

## Introduction

Cloud Connect allows you to run complex SQL queries directly against your data warehouse and translate the resulting records into profile attributes and audiences.

### Cloud Connect in Action

📘 Cloud Connect in Action

Check out the [solution architecture developed](https://cloud.google.com/blog/products/data-analytics/lytics-launches-secure-data-sharing-and-enrichment-solution-using-google-cloud) with Google which leverages BigQuery and Analytics Hub in addition to Cloud Connect to create a rich pattern for secure data collaboration and activation.

## Getting Started

### Accessing Cloud Connect

Cloud Connect is available to all Lytics customers. If you don't currently have access via the product switcher at the top of the primary navigation, contact support or your account management team.

### Common Use-cases

Cloud Connect unlocks many use cases enabling marketers to segment their customers based on any attributes stored in their database. A few examples include:

-   **Time Window**: All users who did not log in last month.
-   **Joins (B2B)**: All users associated with accounts without feature "x."
-   **Lifetime Value (LTV) or Rollup**: All users with a premium subscription have purchased at least two products.

📘 Need a warehouse?

Don't currently have access to a data warehouse? Lytics has you covered with Lytics Warehouse. We provide a simple data warehouse on top of Google BigQuery to all of our customers. Simply reach out to account manager or support for access and information.

## How it Works

Cloud Connect augments the rest of the Lytics CDP suite by providing a secure and flexible entry point into your data warehouse. Users can quickly write a standard SQL query to perform a number of complex data manipulations or aggregations and stream the results directly to materialized user profiles. From there, generate insight-heavy reports, enrich targeted segments, and activate across hundreds of marketing channels in just a few clicks.

Below you'll find an overview of the general architecture, which can be summarized into these key value drivers:

-   Direct access to existing customer data in your warehouse.
-   No need to rip and replace or replicate consumer data in order to activate.
-   Leverage standard SQL to extract only what is relevant to your business goals.
-   Maintain your warehouse as the "source of truth."
-   Requires very little to implement and begin generating ROI.

![Cloud Connect diagram](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc0303985306d7a4e/322d96f2e278b6e9cef1c090/img-0044.png)
