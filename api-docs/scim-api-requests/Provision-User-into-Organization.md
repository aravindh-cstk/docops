---
title: "Provision User into Organization"
description: scim/v2.0/organizations/{organization_uid}/Users
url: /provision-user-into-organization
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.150Z
updated_at: 2023-01-05T14:09:12.150Z
---

# Provision User into Organization

<p>The <span data-type="inlineCode">Provision User into Organization</span> request adds the user to a Contentstack organization.</p>
<p>If the user does not already exist in Contentstack, you can add the new user to the organization by using this request.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Users`

**Method**: `POST`

## URL Parameters

- **organization_uid** (required)
  <p>The UID of the organization. Use the <a href="/docs/developers/apis/content-management-api#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.</p>

## Headers

- **Content-Type** (required)
  <p>The format of the response content.</p>
- **Authorization** (required)
  <p>The access token obtained after authorizing the IdP client.</p>

## Request Body

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "email_of_user",
  "name": {
    "familyName": "last_name",
    "givenName": "first_name"
  }
}
```

## Response

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "id": "blta********",
    "userName": "username@contentstack.com",
    "name": {
        "givenName": "firstname",
        "familyName": "lastname"
    },
    "active": true,
    "emails": [
        {
            "value": "username@contentstack.com",
            "type": "work",
            "primary": true
        }
    ],
    "meta": {
        "resourceType": "User",
        "created": "2021-02-05T07:44:33.272Z",
        "lastModified": "2021-02-05T07:45:41.301Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt********/Users/blta*******"
    }
}
```

