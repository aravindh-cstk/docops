---
title: "Update User By ID (PATCH)"
description: PATCH scim/v2.0/organizations/{organization_uid}/Users/{user_id}
url: developers/apis/scim-api/requests/update-user-by-id-patch
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-07-20
---

# Update User By ID (PATCH)

**PATCH** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Update User Using PATCH request lets you update the details of a specific user by using the PATCH request type.

In the “Body” section, you need to provide the updated schema of the user in JSON format.

**Note**: As no user attributes, like name and email, are liable to change, this endpoint is currently provided for identity provider compatibility. You can deprovision a user by sending the 'Replace' operation to the path 'active' with the value 'false'.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](../../../../api-detail/content-management-api.md#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **user_id** (required)
  The ID of the user whose details you want to update. Refer to the [Get All Users](#get-all-users) request to get the user ID.
  Default: `id_of_user`

## Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

## Sample Request

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

## Sample Response

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

