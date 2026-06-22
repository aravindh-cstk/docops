---
title: "Resend pending Organization invitation"
description: GET /organizations/{organization_uid}/share/{share_uid}/resend_invitation
url: developers/apis/content-management-api/requests/resend-pending-organization-invitation
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-11
---

# Resend pending Organization invitation


**Method:** `GET`  
**Endpoint:** `/organizations/{organization_uid}/share/{share_uid}/resend_invitation`

The Resend pending organization invitation request allows you to resend the Organization invitations to users who have not yet accepted the earlier invitation. Only the owner or the admin of the Organization can resend the invitation to add users to an Organization.

When executing Get all organization invitations request, you get the invitation status that helps to identify the pending invitations and share UID. When executing the Resend pending organization invitation API request, provide the Organization UID and share UID.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken of the user. |

| organization_uid | Enter_the_organization_uid | Enter the UID of the organization for which you want to resend invitation. |

| share_uid | Enter_the_share_uid | Enter the share UID of the organization that you transferred earlier. |

**Response (200):**

```json
{
	"notice": "The invitation has been resent successfully."
}
```
