---
title: "Get All Users"
description: GET scim/v2.0/organizations/{organization_uid}/Users
url: developers/apis/scim-api/requests/get-all-users
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get All Users


**Method:** `GET`  
**Endpoint:** `scim/v2.0/organizations/{organization_uid}/Users`

The Get All Users request fetches the list of all users (along with details such as name, user ID, and email address) of your Contentstack organization.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| Content-Type | application/json | The format of the response content. |

| Authorization | Bearer access_token_from_IdP_client | The access token obtained after authorizing the IdP client. |

| organization_uid | your_organization_uid | The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the o |

| count | 2 | To fetch a certain number of users in a single request. You can fetch a maximum of 100 users at a time. |

| startIndex | 2 | It is the index number from which you want to fetch user details.  By default, the value is 1. Example: If you specify 2, you will get details starting from the |

**Response (200):**

```json
{
    "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "totalResults": 17,
    "startIndex": 2,
    "itemsPerPage": 2,
    "Resources": [
        {
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:User"
            ],
            "id": "bl*********",
            "userName": "user2@contentstack.com",
            "name": {
                "givenName": "firstname",
                "familyName": "lastname"
            },
            "active": true,
            "emails": [
                {
                    "value": "user2@contentstack.com",
                    "type": "work",
                    "primary": true
                }
            ],
            "meta": {
                "resourceType": "User",
                "created": "2018-01-10T09:54:44.800Z",
                "lastModified": "2021-02-08T11:06:02.058Z",
                "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt*******/Users/blt*******"
            }
        },
        {
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:User"
            ],
            "id": "blta3*********",
            "userName": "user3@contentstack.com",
            "name": {
                "givenName": "firstname3",
                "familyName": "lastname3"
            },
            "active": true,
            "emails": [
                {
                    "value": "user3@contentstack.com",
                    "type": "work",
                    "primary": true
                }
            ],
            "meta": {
                "resourceType": "User",
                "created": "2018-08-14T06:18:34.231Z",
                "lastModified": "2021-01-28T06:10:33.971Z",
                "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt*********/Users/blta3*********"
            }
        }
    ]
}
```
