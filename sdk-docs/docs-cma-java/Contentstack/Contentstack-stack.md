---
title: "stack"
description: "A Stack is a space that stores the content of a project (a web or mobile property). Within a stack, you can create content structures, content entries, users, etc. related to the project."
url: "https://www.contentstack.com/java-management-contentstack-stack"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## stack

A [Stack](https://www.contentstack.com/docs/developers/apis/content-management-api/#stacks) is a space that stores the content of a project (a web or mobile property). Within a stack, you can create content structures, content entries, users, etc. related to the project.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| apiKey | String | No | — | The apiKey for the stack |
| managementToken | String | No | — | The authorization for the stack |
| branch | String | No | — | The branch that include branching in the response |

Returns:
Type
Stack

```
import contentstack;

Contentstack contentstack = new Contentstack.Builder().build();

Stack stack = contentstack.stack();

or

Stack stack = contentstack.stack("apiKey");

or

Stack stack = contentstack.stack("apiKey", "managementToken", "branch");
```
