---
title: "Resend pending Organization invitation"
description: /organizations/{organization_uid}/share/{share_uid}/resend_invitation
url: /resend-pending-organization-invitation
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:11.929Z
updated_at: 2026-04-07T12:55:11.929Z
---

# Resend pending Organization invitation

<p>The <span data-type='inlineCode'>Resend pending organization invitation</span> request allows you to resend the Organization invitations to users who have not yet accepted the earlier invitation. Only the owner or the admin of the Organization can resend the invitation to add users to an Organization.</p><p>When executing <span data-type='inlineCode'>Get all organization invitations</span> request, you get the invitation status that helps to identify the pending invitations <span>and share UID</span>. When executing the <span><span data-type='inlineCode'>Resend pending organization invitation </span></span>API request, provide the Organization UID and share UID.</p>

**API Endpoint**: `/organizations/{organization_uid}/share/{share_uid}/resend_invitation`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of the organization for which you want to resend invitation.</p>
- **share_uid** (required)
  <p>Enter the share UID of the organization that you&nbsp;transferred earlier.</p>

## Headers

- **authtoken** (required)
  <p>Enter the authtoken of the user.</p>

## Response

```json
{
	"notice": "The invitation has been resent successfully."
}
```

