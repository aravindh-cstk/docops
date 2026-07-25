---
title: "Get Single User By Username"
description: scim/v2.0/organizations/{organization_uid}/Users?filter=userName eq "<<email-address>>"
url: /get-single-user-by-username
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.137Z
updated_at: 2023-01-05T14:09:12.137Z
---

# Get Single User By Username

<p>The <span data-type="inlineCode">Get Single User by Username</span> request returns comprehensive details of a specific user that exists in the Contentstack organization.</p>
<p>You need to pass the username as a query parameter.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Users?filter=userName eq "<<email-address>>"`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>The UID of the organization. Use the <a href="/docs/developers/apis/content-management-api#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.</p>

## Query Parameters

- **filter** (required)
  <p>Specify the type of filter you want to use. In this case, the filter will be “userName eq”</p>

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
    "totalResults": 1,
    "startIndex": 1,
    "itemsPerPage": 100,
    "Resources": [
        {
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:User"
            ],
            "id": "bltfa*********",
            "userName": "user.name@contentstack.com",
            "name": {
                "givenName": "User",
                "familyName": "Name"
            },
            "active": true,
            "emails": [
                {
                    "value": "user.name@contentstack.com",
                    "type": "work",
                    "primary": true
                }
            ],
            "meta": {
                "resourceType": "User",
                "created": "2020-09-30T13:34:40.878Z",
                "lastModified": "2021-01-27T09:59:35.782Z",
                "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt56********/Users/bltfa*********"
            }
        }
    ]
}
```

