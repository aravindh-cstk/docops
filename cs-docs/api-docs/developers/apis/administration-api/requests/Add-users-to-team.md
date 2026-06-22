---
title: "Add users to team"
description: POST /organizations/{organization_uid}/teams/{team_uid}/users
url: developers/apis/administration-api/requests/add-users-to-team
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Add users to team


**Method:** `POST`  
**Endpoint:** `/organizations/{organization_uid}/teams/{team_uid}/users`

The Add users to team request allows you to send invitations to add users and assign them organizational and stack roles.

**Note**: Only the Owner or the Admin of the organization can add users to a team.

You need to pass the email IDs of the users in the request body as follows:

```
{
    "emails": [ "user1@contentstack.com", "user2@contentstack.com"]
}
```

##### Remove a user from team

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| organization_uid | your_organization_uid | Enter the UID of your Organization. |

| team_uid | team_uid | Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/ |

**Request Body:**

```json
{
    "emails":["john.doe@contentstack.com", "jane.doe@contentstack.com"]
}
```
