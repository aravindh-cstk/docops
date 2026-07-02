---
title: "Global Fields"
description: "Global Fields define the reusable content structure across different parts of your website or mobile application. To start using Global Fields, you must first create its instance in the stack. To use Nested Global Fields , pass API Version 3.2 as a parameter when calling `global_fields()` function. You can specify the API version in one of the following ways: Passing options directly: import contentstack\\_management client = contentstack\\_management.Client(authtoken='auth\\_token') response = client.stack('api\\_key').global\\_fields(options={\"api\\_version\": \"3.2\"}).create(data) Targeting a specific global field by UID with options: import contentstack\\_management client = contentstack\\_management.Client(authtoken='auth\\_token') response = client.stack('api\\_key').global\\_fields(\"uid\", options={\"api\\_version\": \"3.2\"}).fetch()"
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/python/reference/global-fields"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Global Fields

## Global Fields

[Global Fields](/docs/developers/global-field/about-global-field) define the reusable content structure across different parts of your website or mobile application. To start using Global Fields, you must first create its instance in the stack.

To use [Nested Global Fields](/docs/developers/global-field/about-global-field#nested-global-fields), pass **API Version 3.2** as a parameter when calling `global_fields()` function. You can specify the API version in one of the following ways:

- Passing options directly:
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack('api_key').global_fields(options={"api_version": "3.2"}).create(data)
- Targeting a specific global field by UID with options:import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack('api_key').global_fields("uid", options={"api_version": "3.2"}).fetch()
