---
title: "getLastActivities"
description: "The `getLastActivities` retrieves all the ContentTypes whose last activity updated."
url: "https://www.contentstack.com/get-last-activities"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getLastActivities

The `getLastActivities` retrieves all the ContentTypes whose last activity updated.

No parameters.

Returns:
Type
Promise

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
const result = await Stack.getLastActivities().toJSON().fetch();
```
