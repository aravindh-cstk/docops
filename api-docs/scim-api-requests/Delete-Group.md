---
title: "Delete Group"
description: scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: /delete-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.079Z
updated_at: 2023-01-05T14:09:14.079Z
---

# Delete Group

<p>The <span data-type="inlineCode">Delete Group</span> request deletes an existing group from the SCIM. This will remove all the users from that group.</p>
<p class="note"><strong>Note</strong>: This API request will not remove users from the organization or from the Contentstack account.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

**Method**: `DELETE`

## URL Parameters

- **organization_uid** (required)
  <p>The UID of the organization. Use the <a href="/docs/developers/apis/content-management-api#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.</p>
- **group_id** (required)
  <p>The ID of the group you want to delete. Refer to the <a href="#get-all-groups">Get All Groups</a> request to fetch group ID.</p>

## Headers

- **Content-Type** (required)
  <p>The format of the response content.</p>
- **Authorization** (required)
  <p>The access token obtained after authorizing the IdP client.</p>

