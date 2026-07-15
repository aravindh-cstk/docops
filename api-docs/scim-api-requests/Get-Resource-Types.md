---
title: "Get Resource Types"
description: GET scim/v2.0/organizations/{organization_uid}/ResourceTypes
url: scim-api-requests/types
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get Resource Types

**GET** `scim/v2.0/organizations/{organization_uid}/ResourceTypes`

The Get Resource Types request returns the list of available resource types like Users or Groups.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](https://app.contentstack.com/docs/developer-apis/content-management-api/#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

## Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

## Sample Response

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

