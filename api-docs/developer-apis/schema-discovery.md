---
title: "SCIM | Schema Discovery"
description: Discover SCIM schemas, resource types, and service provider configuration for identity integrations.
url: https://www.contentstack.com/docs/developer-apis/scim-api/schema-discovery
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# SCIM | Schema Discovery

Use the SCIM API requests to retrieve information about SCIM schemas supported by Contentstack and types of available resources.

## Get Schemas

### Get Schemas

**GET** `scim/v2.0/organizations/{organization_uid}/Schemas`

The Get Schemas request fetches a list of schemas for all supported resources, which can be used to introspect resources and attribute extensions

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](https://app.contentstack.com/docs/developer-apis/content-management-api/#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

#### Sample Response

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
            "description": "User Account",
            "id": "urn:ietf:params:scim:schemas:core:2.0:User",
            "name": "User",
            "attributes": [
                {
                    "name": "userName",
                    "type": "String",
                    "description": "Unique identifier for the User. Use email as userName.",
                    "mutability": "readWrite",
                    "multiValued": false,
                    "required": true,
                    "caseExact": false,
                    "returned": "default",
                    "uniqueness": "global"
                },
                {
                    "name": "name",
                    "type": "complex",
                    "multiValued": false,
                    "description": "User's name component",
                    "required": true,
                    "subAttributes": [
                        {
                            "name": "familyName",
                            "type": "string",
                            "multiValued": false,
                            "description": "The family name of the User, or last name.",
                            "required": true,
                            "caseExact": false,
                            "mutability": "readWrite",
                            "returned": "default",
                            "uniqueness": "none"
                        },
                        {
                            "name": "givenName",
                            "type": "string",
                            "multiValued": false,
                            "description": "The given name of the User, or first name.",
                            "required": true,
                            "caseExact": false,
                            "mutability": "readWrite",
                            "returned": "default",
                            "uniqueness": "none"
                        }
                    ]
                },
                {
                    "name": "emails",
                    "type": "complex",
                    "multiValued": true,
                    "description": "Email addresses for the user.",
                    "required": false,
                    "subAttributes": [
                        {
                            "name": "value",
                            "type": "string",
                            "multiValued": false,
                            "description": "Email addresses for the user.",
                            "required": false,
                            "caseExact": false,
                            "mutability": "readWrite",
                            "returned": "default",
                            "uniqueness": "none"
                        },
                        {
                            "name": "type",
                            "type": "string",
                            "multiValued": false,
                            "description": "A label indicating the type email address. only 'work' is supported.",
                            "required": false,
                            "caseExact": false,
                            "mutability": "readWrite",
                            "returned": "default",
                            "uniqueness": "none",
                            "canonicalValues": [
                                "work"
                            ]
                        },
                        {
                            "name": "primary",
                            "type": "boolean",
                            "multiValued": false,
                            "description": "A Boolean value indicating the 'primary' or preferred attribute value for this attribute",
                            "required": false,
                            "mutability": "readWrite",
                            "returned": "default"
                        }
                    ]
                },
                {
                    "caseExact": false,
                    "type": "Boolean",
                    "description": "A Boolean value indicating the User's administrative status.",
                    "mutability": "readWrite",
                    "name": "active",
                    "multiValued": false,
                    "required": true,
                    "returned": "default",
                    "uniqueness": "none"
                }
            ]
        },
        {
            "description": "Group",
            "id": "urn:ietf:params:scim:schemas:core:2.0:Group",
            "name": "Group",
            "attributes": [
                {
                    "name": "displayName",
                    "type": "string",
                    "multiValued": false,
                    "description": "A human-readable name for the Group. REQUIRED.",
                    "required": false,
                    "caseExact": false,
                    "mutability": "readWrite",
                    "returned": "default",
                    "uniqueness": "server"
                },
                {
                    "name": "members",
                    "type": "complex",
                    "multiValued": true,
                    "description": "A list of members of the Group.",
                    "required": false,
                    "subAttributes": [
                        {
                            "name": "value",
                            "type": "string",
                            "multiValued": false,
                            "description": "Identifier of the member of this Group.",
                            "required": true,
                            "caseExact": false,
                            "mutability": "immutable",
                            "returned": "default",
                            "uniqueness": "none"
                        },
                        {
                            "name": "display",
                            "type": "string",
                            "multiValued": false,
                            "description": "Display name of the member.",
                            "required": false,
                            "caseExact": false,
                            "mutability": "immutable",
                            "returned": "default",
                            "uniqueness": "none"
                        }
                    ]
                }
            ]
        }
    ]
}
```




## Get Resource Types

### Get Resource Types

**GET** `scim/v2.0/organizations/{organization_uid}/ResourceTypes`

The Get Resource Types request returns the list of available resource types like Users or Groups.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](https://app.contentstack.com/docs/developer-apis/content-management-api/#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

#### Sample Response

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

