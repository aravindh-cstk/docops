---
title: "Create Group"
description: POST scim/v2.0/organizations/{organization_uid}/Groups
url: developers/apis/scim-api/requests/create-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Create Group


**Method:** `POST`  
**Endpoint:** `scim/v2.0/organizations/{organization_uid}/Groups`

The Create Group request lets you create a group in your IdP client and add users to it.

In the "Request Body" section, you need to pass the ID of the user in Contentstack as the value. Refer to the [Get All Users](#get-all-users) request to get the user ID. Also, provide a name to the group in the displayName key.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| Content-Type | application/json | The format of the response content. |

| Authorization | Bearer access_token_from_IdP_client | The access token obtained after authorizing the IdP client. |

| organization_uid | your_organization_uid | The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the o |

**Request Body:**

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

**Response (200):**

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
