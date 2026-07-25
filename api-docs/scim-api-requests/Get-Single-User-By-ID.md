---
title: "Get Single User By ID"
description: scim/v2.0/organizations/{organization_uid}/Users/{user_id}
url: /get-single-user-by-id
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.041Z
updated_at: 2023-01-05T14:09:15.041Z
---

# Get Single User By ID

<p>The <span data-type="inlineCode">Get Single User by ID</span> request returns comprehensive information of a specific user that exists in the organization.</p>
<p>You need to pass the ID of the user as the URL parameter.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>The UID of the organization. Use the <a href="/docs/developers/apis/content-management-api#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.</p>
- **user_id** (required)
  <p>The ID of the user whose details you want to fetch. Refer to the <a href="#get-all-users">Get All Users</a> request to get the user ID.</p>

## Headers

- **Content-Type** (required)
  <p>The format of the response content.</p>
- **Authorization** (required)
  <p>The access token obtained after authorizing the IdP client.</p>

## Response

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "id": "blt**********",
    "userName": "user1@contentstack.com",
    "name": {
        "givenName": "firstname",
        "familyName": "lastname"
    },
    "active": true,
    "emails": [
        {
            "value": "user1@contentstack.com",
            "type": "work",
            "primary": true
        }
    ],
    "meta": {
        "resourceType": "User",
        "created": "2018-01-10T09:54:44.800Z",
        "lastModified": "2021-02-08T11:06:02.058Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt**********/Users/blt**********"
    }
}
```

