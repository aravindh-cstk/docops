---
title: "Contentstack"
description: "The Content Management API (CMA) is used to manage the content of your Contentstack account. This includes creating, updating, deleting, and fetching content of your account."
url: "https://www.contentstack.com/python-management-contentstack-method"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Contentstack

The Content Management API (CMA) is used to manage the content of your Contentstack account. This includes creating, updating, deleting, and fetching content of your account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| host | string | Yes | api.contentstack.io | API host |
| headers | Dict | No | — | Additional headers |
| early_access | List | No | — | Array of header strings for early access features. |
| authtoken | string | No | — | Authtoken is a user-specific read-write token used to make authorized CMA requests. |
| management_token | string | No | — | Authorization token is a read-write token used to make authorized CMA requests, but it is a user-specific token. |
| timeout | number | No | 30000ms | Number of milliseconds before the request times out. |
| region | string | Yes | — | DB region of the stack. You can choose from seven regions: AWS NA, AWS EU, AWS AU, Azure NA, Azure EU, GCP NA, and GCP EU. |

Returns:
Type
contentstack_management.Client

**Client Initialization**

```
import contentstack_management
client = contentstack_management.Client()
```

**Set the `host` to 'api.contentstack.io'**

```
import contentstack_management
client = contentstack_management.Client(host: 'api.contentstack.io' )
```

**Set the `headers` to { 'headerkey': 'value'}**

```
import contentstack_management
client = contentstack_management.Client( headers: { 'headerkey': 'value'} )
```

**Set the Early Access Headers**

```
import contentstack_management
client = contentstack_management.Client(early_access: ['early_access_1', 'early_access_2'])
)
```

**Set the `authtoken`**

```
import contentstack_management
client = contentstack_management.Client( authtoken: 'value' )
```

**Set the `authorization`**

```
import contentstack_management
client = contentstack_management.Client( management_token: Management  token' )
```

**Set the `timeout` to 50000ms**

```
import contentstack_management
client = contentstack_management.Client( timeout: 50000 )
```
