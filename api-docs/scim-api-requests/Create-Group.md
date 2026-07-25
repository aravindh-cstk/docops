---
title: "Create Group"
description: scim/v2.0/organizations/{organization_uid}/Groups
url: /create-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.044Z
updated_at: 2023-01-05T14:09:13.044Z
---

# Create Group

<p> The <span data-type="inlineCode">Create Group</span> request lets you create a group in your IdP client and add users to it. </p>
<p>In the "Request Body" section, you need to pass the ID of the user in Contentstack as the <span data-type="inlineCode">value</span>. Refer to the <a href="#get-all-users">Get All Users</a> request to get the user ID. Also, provide a name to the group in the <span data-type="inlineCode">displayName</span> key.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Groups`

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
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
  "displayName": "<<group_name>>",
  "members": [
    {
      "value": "<<user_uid>>"
    }
  ]
}
```

## Response

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
  "id": "blt*********",
  "meta": {
      "resourceType": "Group",
      "created": "2020-11-24T05:48:14.060Z",
      "lastModified": "2011-05-13T04:42:34Z",
      "location": "http://auth-api.contentstack.com/scim/v2/organizations/blt**********/groups/blt**********"
  },
  "displayName": "<group_name>",
  "members": [
    {
      "value": "<user_uid>",
      "display": "User Name"
    }
  ]
}
```

