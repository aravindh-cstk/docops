---
title: "Transfer Organization ownership"
description: POST /organizations/{organization_uid}/transfer-ownership
url: developers/apis/content-management-api/requests/transfer-organization-ownership
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Transfer Organization ownership


**Method:** `POST`  
**Endpoint:** `/organizations/{organization_uid}/transfer-ownership`

The Transfer organization ownership call transfers the ownership of an Organization to another user. When the call is executed, an email invitation for accepting the ownership of a particular Organization is sent to the specified user.

Once the specified user accepts the invitation by clicking on the link provided in the email, the ownership of the Organization gets transferred to the new user. Subsequently, the previous owner will no longer have any permission on the Organization.

When executing the API call, provide the Organization UID.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken of the user. |

| organization_uid | enter_the_organization_uid | Enter the UID of the organization that you want to transfer to other user. |

**Request Body:**

```json
{
	"transfer_to": "abc@sample.com"
}
```

**Response (200):**

```json
{
	"notice": "Email has been successfully sent to the user."
}
```
