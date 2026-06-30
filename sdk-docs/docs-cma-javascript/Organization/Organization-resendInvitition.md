---
title: "resendInvitition"
description: "The Resend pending organization invitation call allows you to resend Organization invitations to users who have not yet accepted the earlier invitation."
url: "https://www.contentstack.com/js-management-organization-resendinvitition"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## resendInvitition

The Resend pending organization invitation call allows you to resend Organization invitations to users who have not yet accepted the earlier invitation.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| invitation_uid | string | Yes | — | The invitation id for which request to be sent |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organization_uid').resendInvitition('invitation_uid')
.then((response) => console.log(response.notice))
```
