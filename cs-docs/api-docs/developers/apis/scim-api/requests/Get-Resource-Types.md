---
title: "Get Resource Types"
description: GET scim/v2.0/organizations/{organization_uid}/ResourceTypes
url: developers/apis/scim-api/requests/get-resource-types
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get Resource Types


**Method:** `GET`  
**Endpoint:** `scim/v2.0/organizations/{organization_uid}/ResourceTypes`

The Get Resource Types request returns the list of available resource types like Users or Groups.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| Content-Type | application/json | The format of the response content. |

| Authorization | Bearer access_token_from_IdP_client | The access token obtained after authorizing the IdP client. |

| organization_uid | your_organization_uid | The UID of the organization. Use the [Get All Organizations](https://app.contentstack.com/docs/developers/apis/content-management-api/#get-all-organizations) re |

**Response (200):**

```json
{
    "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "totalResults": 2,
    "startIndex": 1,
    "itemsPerPage": 2,
    "Resources": [
        {
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:ResourceType"
            ],
            "id": "User",
            "name": "User",
            "endpoint": "/Users",
            "description": "User Account",
            "schema": "urn:ietf:params:scim:schemas:core:2.0:User",
            "meta": {
                "resourceType": "ResourceType"
            }
        },
        {
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:ResourceType"
            ],
            "id": "Group",
            "name": "Group",
            "endpoint": "/Groups",
            "description": "Group",
            "schema": "urn:ietf:params:scim:schemas:core:2.0:Group",
            "meta": {
                "resourceType": "ResourceType"
            }
        }
    ]
}
```
