---
title: "Deprovision User"
description: DELETE scim/v2.0/organizations/{organization_uid}/Users/{user_id}
url: developers/apis/scim-api/requests/deprovision-user
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Deprovision User


**Method:** `DELETE`  
**Endpoint:** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Deprovision User request lets you remove a user from a Contentstack organization.

This will remove the user from all the assigned stacks, but the user will continue to have a Contentstack account.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| Authorization | Bearer access_token_from_IdP_client | The access token obtained after authorizing the IdP client. |

| organization_uid | your_organization_uid | The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the o |

| user_id | id_of_user | The ID of the user you want to remove. Refer to the [Get All Users](#get-all-users) request to get the user ID. |
