---
title: "Get All Groups"
description: scim/v2.0/organizations/{organization_uid}/Groups
url: /get-all-groups
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:16.865Z
updated_at: 2023-01-05T14:09:16.865Z
---

# Get All Groups

<p>The <span data-type="inlineCode">Get All Groups</span> request fetches details of all groups that exist in the IdP client account.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Groups`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>The UID of the organization. Use the <a href="/docs/developers/apis/content-management-api#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.</p>

## Query Parameters

- **count** (optional)
  <p>To fetch a certain number of groups in a single request.</p>
<p>For example, if you specify 2, you will receive details of two groups in a single request.</p>
<p>You can fetch a maximum of 100 groups at once.</p>
- **startIndex** (optional)
  <p>It is the index number from which you want to fetch group details. </p>
<p>By default, the value is 1. If you specify 5, you will get details starting from the fifth group.</p>
- **excludedAttributes** (optional)
  <p>It is a list of strings indicating which resource attributes should be removed from the default set of attributes to be returned.</p><p>Currently, we support excluding only the 'members' attribute.</p>

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
  "startIndex": 2,
  "itemsPerPage": 100,
  "Resources": [
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ],
      "id": "blt2**********",
      "meta": {
        "resourceType": "Group",
        "created": "2020-11-24T05:48:14.060Z",
        "location": "http://localhost:8000/scim/v2/organizations/blta********/groups/blt2********"
      },
      "displayName": "MyGroup",
      "active": true,
      "members": [
        {
          "value": "<user-uid>",
          "display": "User Name"
        }
      ]
    }
  ]
}
```

