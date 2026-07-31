---
title: "Add users to team"
description: /organizations/{organization_uid}/teams/{team_uid}/users
url: /add-users-to-team
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:38.125Z
updated_at: 2026-04-07T12:55:38.125Z
---

# Add users to team

<p>The <span data-type='inlineCode'>Add users to team</span> request allows you to send invitations to add users and assign them organizational and stack roles.</p><p class="note"><strong>Note</strong>: Only the Owner or the Admin of the organization can add users to a team.</p><p>You need to pass the email IDs of the users in the request body as follows:</p><pre>{<br />    "emails": [ "user1@contentstack.com", "user2@contentstack.com"]<br />}</pre><h5>Remove a user from team</h5>

**API Endpoint**: `/organizations/{organization_uid}/teams/{team_uid}/users`

**Method**: `POST`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>
- **team_uid** (required)
  <p>Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

```json
{
    "emails":["john.doe@contentstack.com", "jane.doe@contentstack.com"]
}
```

