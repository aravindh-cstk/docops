---
title: "Deprovision User"
description: scim/v2.0/organizations/{organization_uid}/Users/{user_id}
url: /deprovision-user
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.042Z
updated_at: 2023-01-05T14:09:15.042Z
---

# Deprovision User

<p>The <span data-type="inlineCode">Deprovision User</span> request lets you remove a user from a Contentstack organization.</p>
<p>This will remove the user from all the assigned stacks, but the user will continue to have a Contentstack account.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

**Method**: `DELETE`

## URL Parameters

- **organization_uid** (required)
  <p>The UID of the organization. Use the <a href="/docs/developers/apis/content-management-api#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.</p>
- **user_id** (required)
  <p>The ID of the user you want to remove. Refer to the <a href="#get-all-users">Get All Users</a> request to get the user ID.</p>

## Headers

- **Authorization** (required)
  <p>The access token obtained after authorizing the IdP client.</p>

