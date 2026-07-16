---
title: "Delete Group"
description: DELETE scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: scim-api-requests/group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Delete Group

**DELETE** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Delete Group request deletes an existing group from the SCIM. This will remove all the users from that group.

**Note**: This API request will not remove users from the organization or from the Contentstack account.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](../api-detail/content-management-api.md#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group you want to delete. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

## Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

