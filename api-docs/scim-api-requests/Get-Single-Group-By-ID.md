---
title: "Get Single Group By ID"
description: scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: /get-single-group-by-id
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.103Z
updated_at: 2023-01-05T14:09:12.103Z
---

# Get Single Group By ID

<p>The <span data-type="inlineCode">Get Single Group by ID</span> request fetches details of a single group that exists in the IdP client account.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>The UID of the organization. Use the <a href="/docs/developers/apis/content-management-api#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.</p>
- **group_id** (required)
  <p>The ID of the group. Refer to the <a href="#get-all-groups">Get All Groups</a> request to fetch group ID.</p>

## Query Parameters

- **excludedAttributes** (optional)
  <p>It is a list of strings indicating which resource attributes should be removed from the default set of attributes to be returned.</p>
<p>Currently, we support excluding only the 'members' attribute.</p>

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
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ],
      "id": "blt**********",
      "meta": {
        "resourceType": "Group",
        "created": "2020-11-24T05:48:14.060Z",
        "location": "http://auth-api.contentstack.com/scim/v2/organizations/blta6********/groups/blt22**********"
      },
      "displayName": "<group_name>",
      "active": true,
      "members": [
        {
          "value": "<user_uid>",
          "display": "User Name"
        }
      ]
    }
  ]
}
```

