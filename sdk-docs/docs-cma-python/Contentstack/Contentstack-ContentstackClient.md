---
title: "ContentstackClient"
description: "The Client serves as the central element of the SDK, providing users with an interface to access and engage with external services. It encapsulates functionality and configuration within a user-friendly API, abstracting away intricate technical aspects. This streamlines the procedure of sending requests and managing responses."
url: "https://www.contentstack.com/python-management-contentstackclient"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ContentstackClient

The Client serves as the central element of the SDK, providing users with an interface to access and engage with external services. It encapsulates functionality and configuration within a user-friendly API, abstracting away intricate technical aspects. This streamlines the procedure of sending requests and managing responses.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| host | str | No | — | Hostname for API endpoint |
| authtoken | str | No | — | A user-specific read-write token for authorization of API requests |
| headers | str | No | — | Headers to be included in the API requests |
| authorization | str | No | — | A user-specific read-write token for authorization of API requests |
| region | Region | No | — | DB region for Stack. You can choose from seven regions namely, AWS NA, AWS EU, AWS AU, Azure NA, Azure EU, GCP NA, and GCP EU. The default region is set to NA. |

Returns:
Type
Client

```
import contentstack_management
client = contentstack_management.Client()
```
