---
title: "Get Resource Types"
description: scim/v2.0/organizations/{organization_uid}/ResourceTypes
url: /get-resource-types
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:16.012Z
updated_at: 2023-01-05T14:09:16.012Z
---

# Get Resource Types

<p>The <span data-type="inlineCode">Get Resource Types</span>&nbsp;request returns the list of available resource types&nbsp;like Users or Groups.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/ResourceTypes`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the <a href="https://app.contentstack.com/docs/developers/apis/content-management-api/#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.

## Headers

- **Content-Type** (required)
  <p>The format of the response content.</p>
- **Authorization** (required)
  <p>The access token obtained after authorizing the IdP client.</p>

## Response

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

