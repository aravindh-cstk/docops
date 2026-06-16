---
title: "[Set Up Your Project] - Set date range"
description: Documentation for the Set date range property in the Date field when setting up a content type.
url: https://www.contentstack.com/docs/developers/create-content-types/set-date-range
product: Contentstack
doc_type: reference
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Set date range

This page explains how to use the **Set date range** property for the **Date** field while setting up a content type, who it applies to (developers configuring content types), and when to use it (to restrict entry date input to a defined range).

### Set date range

The **Set date range **property lets you define a range of date for the user.

While setting up a [content type](/docs/developers/create-content-types/about-content-types), if you add the [**Date**](/docs/developers/create-content-types/date) field and select this property, it will show the following options along with\ the mandatory and hide-time options:
- **Start date**: Let's you specify the start date for the date range.
- **End date**: Let's you specify the end date for the date range.

When you set this range, the user will only be able to enter the date within the specified range on the [entry](/docs/content-managers/working-with-entries/about-entries) page.

**Additional Resources**: To add this property to the Date field when [creating your content type via an API request](/docs/developers/apis/content-management-api#create-a-content-type), refer to the [JSON payload of the Date](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#date) field.

Making changes in existing field properties may result in data loss. To prevent this, make sure you go through our [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide before you go ahead.

## Common questions

### What does the Set date range property do?
It lets you define a range of date for the user, so the user will only be able to enter the date within the specified range.

### Where do Start date and End date appear?
If you add the **Date** field and select this property while setting up a content type, it will show **Start date** and **End date** options.

### Can I configure this when creating a content type via API?
Yes. Refer to the **Additional Resources** section and the linked JSON payload of the Date field.

### Is it safe to change this property on an existing field?
Making changes in existing field properties may result in data loss; review the linked Content Type Change Management guide before you go ahead.