---
title: "Get Single Group By Display Name"
description: scim/v2.0/organizations/{organization_uid}/Groups?filter=displayName Eq "<<group_name>>"
url: /get-single-group-by-display-name
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.915Z
updated_at: 2023-01-05T14:09:15.915Z
---

# Get Single Group By Display Name

<p>The <span data-type="inlineCode">Get Single Group By Display Name</span> returns comprehensive details of a specific group that exists in the IdP client account, which is mapped in your Contentstack organization.</p>
<p>You need to pass the <span data-type="inlineCode">displayname</span> as a query parameter.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Groups?filter=displayName Eq "<<group_name>>"`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>The UID of the organization. Use the <a href="/docs/developers/apis/content-management-api#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.</p>

## Query Parameters

- **filter** (required)
  <p>Specify the type of filter you want to use. In this case, the filter will be “displayName Eq”</p>

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
            "id": "601**************",
            "displayName": "<<group_name>>",
            "members": [],
            "meta": {
                "resourceType": "Group",
                "created": "2021-02-01T11:25:11.082Z",
                "lastModified": "2021-02-18T11:34:53.619Z",
                "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt56**********/Groups/601***************"
            }
        }
    ]
}
```

