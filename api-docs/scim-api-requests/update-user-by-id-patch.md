---
title: "Update User By ID (PATCH)"
description: scim/v2.0/organizations/{organization_uid}/Users/{user_id}
url: /update-user-by-id-patch
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.137Z
updated_at: 2023-07-20T12:08:24.132Z
---

# Update User By ID (PATCH)

<p>The <span data-type='inlineCode'>Update User Using PATCH</span> request lets you update the details of a specific user by using the PATCH request type.</p><p>In the “Body” section, you need to provide the updated schema of the user in JSON format.</p><p class="note"><strong>Note</strong>: As no user attributes, like name and email, are liable to change, this endpoint is currently provided for identity provider compatibility. You can deprovision a user by sending the 'Replace'&nbsp;<span data-type='inlineCode'>operation</span> to the <span data-type='inlineCode'>path</span>&nbsp;'active' with the <span data-type='inlineCode'>value</span>&nbsp;'false'.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

**Method**: `PATCH`

## URL Parameters

- **organization_uid** (required)
  <p>The UID of the organization. Use the <a href="/docs/developers/apis/content-management-api#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.</p>
- **user_id** (required)
  <p>The ID of the user whose details you want to update. Refer to the <a href="#get-all-users">Get All Users</a> request to get the user ID.</p>

## Headers

- **Content-Type** (required)
  <p>The format of the response content.</p>
- **Authorization** (required)
  <p>The access token obtained after authorizing the IdP client.</p>

## Request Body

```json
{
	"schemas": [
		"urn:ietf:params:scim:api:messages:2.0:PatchOp"
	],
	"Operations": [{
		"op": "Replace",
		"path": "active",
		"value": false
	}]

}
```

## Response

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "id": "blt6b9c8c1164bf8e6c",
    "userName": "<userName_1>",
    "name": {
        "givenName": "<firstName_1>",
        "familyName": "<lastName_1>"
    },
    "active": false,
    "emails": [
        {
            "value": "<userName_1>",
            "type": "work",
            "primary": true
        }
    ],
    "meta": {
        "resourceType": "User",
        "created": "2021-02-08T18:46:03.284Z",
        "lastModified": "2021-02-17T15:22:22.171Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt*************/Users/blt****************"
    }
}
```

