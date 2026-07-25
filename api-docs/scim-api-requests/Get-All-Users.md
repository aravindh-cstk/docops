---
title: "Get All Users"
description: scim/v2.0/organizations/{organization_uid}/Users
url: /get-all-users
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.120Z
updated_at: 2023-01-05T14:09:12.120Z
---

# Get All Users

<p>The <span data-type="inlineCode">Get All Users</span> request fetches the list of all users (along with details such as name, user ID, and email address) of your Contentstack organization.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Users`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>The UID of the organization. Use the <a href="/docs/developers/apis/content-management-api#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.</p>

## Query Parameters

- **count** (optional)
  <p>To fetch a certain number of users in a single request. You can fetch a maximum of 100 users at a time.</p>
- **startIndex** (optional)
  <p>It is the index number from which you want to fetch user details.</p>
<p>By default, the value is 1. Example: If you specify 2, you will get details starting from the second user in the list.</p>

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

