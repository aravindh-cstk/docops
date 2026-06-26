---
title: "Deprovision User"
description: DELETE scim/v2.0/organizations/{organization_uid}/Users/{user_id}
url: scim-api-requests/user
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Deprovision User

**DELETE** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Deprovision User request lets you remove a user from a Contentstack organization.

This will remove the user from all the assigned stacks, but the user will continue to have a Contentstack account.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](../api-detail/content-management-api.md#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **user_id** (required)
  The ID of the user you want to remove. Refer to the [Get All Users](#get-all-users) request to get the user ID.
  Default: `id_of_user`

## Headers

- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

