---
title: "[Solution Guides Articles] - Removing Stale Data from Targeting with Automate"
description: Removing stale terms from targeting data fields using an automation triggered by webhook or scheduler.
url: https://www.contentstack.com/docs/developers/solution-guides/removing-stale-data-from-targeting-with-automate
product: Contentstack
doc_type: solution-guide
audience:
  - developers
  - content-ops
version: current
last_updated: 2026-03-26
---

# [Solution Guides Articles] - Removing Stale Data from Targeting with Automate

This page explains how to use Contentstack Automate to remove stale terms from targeting data stored in an array-like field across entries. It is intended for developers or operations teams implementing maintenance automations, and should be used when you need to clean up outdated targeting values via a webhook- or scheduler-triggered workflow.

## Removing Stale Data from Targeting with Automate

An automation, triggered by webhook or scheduler, queries for all entries that contain a stale term in the field representing the targeting data. The contents of the field are filtered to remove the term, and the entries are updated.

## Tactical Rundown

### Content Type Definition

The content type should contain at least one field that stores an array of some kind. In this simple example, the field will be represented as a Select field with multiple selections available. The data could just as easily be stored in a JSON structure in a custom or other field. In this customer’s specific implementation, and more likely for real-world usage, the data is stored in a custom field with options supplied by an internal API.

### Automation Definition

- The first step of the automation, the trigger, can be defined in various ways depending on the needs of the customer. It could be triggered by the Scheduler for regular maintenance or by the HTTP trigger for action-specific maintenance.
- The automation needs to know which term to act on. A Scheduler-based automation would likely rely on the use of the HTTP action to fetch the term from an external API. An HTTP-based automation, like this example, can use a query parameter passed to the automation’s URL like so: [https://app.contentstack.com/automations-api/run/551238742dcb442786c47c078fb6cdde?term=stale_category_one_stale_category_two](https://app.contentstack.com/automations-api/run/551238742dcb442786c47c078fb6cdde?term=stale_category_one_stale_category_two)**Note:** These query terms aren’t defined by the automation; they need to be specified in the usage of the webhook URL.
- Assuming that the automation should accept multiple terms, the automation uses a Transform step to split the query string into an array.
- The automation needs to find all entries with the stale terms (to avoid updating all entries in the content type). To construct the query to match terms in an array, it’s necessary to use a Transform action.
- The **Get All Entries** action accepts the query defined previously and returns all entries with one or more of the stale entries.
- A **Repeat Path** Action iterates over all entries returned by the **Get All Entries** step above.
- An **Update Entry** action uses the same query defined in the above **Transform** step, combined with the Content Management API’s special “PULL” operation for array-based field data, to remove the stale values.

## Common questions

### Can this automation be triggered on a schedule instead of via webhook?
Yes. The trigger can be defined using the Scheduler for regular maintenance or the HTTP trigger for action-specific maintenance.

### How does the automation know which stale term(s) to remove?
An HTTP-based automation can use a query parameter passed to the automation’s URL, and a Scheduler-based automation would likely rely on the use of the HTTP action to fetch the term from an external API.

### Can the automation remove multiple stale terms in one run?
Yes. Assuming that the automation should accept multiple terms, it uses a Transform step to split the query string into an array.

### How are stale values removed from an array-based field?
An **Update Entry** action uses the Content Management API’s special “PULL” operation for array-based field data to remove the stale values.