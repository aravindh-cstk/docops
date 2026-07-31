---
title: "Update user"
description: /user
url: /update-user
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:06.539Z
updated_at: 2025-07-08T10:15:32.414Z
---

# Update user

<p>The <span data-type="inlineCode">Update User</span> API Request updates the details of an existing user account. Only the&nbsp;information entered here will be updated, the existing data will remain unaffected.</p>
<p>When executing the API call, under the 'Body' section, enter the information of the user that you wish to update. This information should be in JSON format.
</p>
<p class="add-resource"><strong>Additional Resource:</strong> To update the role of an existing user, refer to the <a href="#update-existing-user-role">Update Existing User Role</a> API Request.</p>

**API Endpoint**: `/user`

**Method**: `PUT`

## Headers

- **authtoken** (required)
- **Content-Type** (required)

## Request Body

```json
{
	"user": {
		"company": "company name inc."
	}
}
```

## Response

```json
{
	"notice": "Profile updated successfully.",
	"user": {
		"uid": "abcdef1234567890abcdef",
		"created_at": "2015-03-13T07:37:03.494Z",
		"updated_at": "2015-03-13T07:37:03.494Z",
		"email": "developer@example.com",
		"username": "john.doe_blt11fed1e1",
		"first_name": "John",
		"last_name": "Doe",
		"company": "company name inc.",
		"org_uid": [
			"blt44444c44ea4ddf222"
		],
		"shared_org_uid": [
			"bltcde1e1cdf1f11e5f",
			"blt22e2222dd2e2fb22",
			"blt3f3ad33ca33cb3a3"
		],
		"mobile_number": "9898989898",
		"country_code": "91",
		"tfa_status": "verified",
		"authy_id": "123123123",
		"active": true,
		"failed_attempts": 0
	 "settings": {
            "global": [
                {
                    "key": "favorite_stacks",
                    "value": [
                        {
                            "org_uid": "blt40222226ddf287",
                            "stacks": [
                                {
                                    "api_key": "blt922222441b906ce"
                                }
                            ]
                        },
                        {
                            "org_uid": "blt8b22227a9dadcc",
                            "stacks": [
                                {
                                    "api_key": "blt2d2222baca745a8"
                                },
                                {
                                    "api_key": "blt38c22223b67bd04"
                                },
                                {
                                    "api_key": "blt8fb222260d06b9"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "last_login_at": "2025-07-08T08:46:26.437Z",
        "password_updated_at": "2024-11-07T08:51:49.609Z",
        "password_reset_required": false
}
```

