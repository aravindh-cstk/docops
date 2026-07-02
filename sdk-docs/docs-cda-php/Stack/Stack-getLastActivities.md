---
title: "getLastActivities"
description: "To get the last_activity information of the configured environment from all the content types."
url: "https://www.contentstack.com/php-stack-getlastactivities"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getLastActivities

To get the last_activity information of the configured environment from all the content types.

No parameters.

Returns:
Type
object

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->getLastActivities();
```
