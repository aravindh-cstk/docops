---
title: "Log out of your account"
description: DELETE /user-session
url: developers/apis/administration-api/requests/log-out-of-your-account
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Log out of your account

**DELETE** `/user-session`

The Log out of your account call is used to sign out the user of Contentstack account.

## Headers

- **authtoken** (required)
  Default: `your_authtoken`

## Sample Response

```json
{
	"notice": "You've logged out successfully!"
}
```

