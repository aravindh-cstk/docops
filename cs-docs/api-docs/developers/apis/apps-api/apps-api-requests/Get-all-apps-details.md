---
title: "Get all apps details"
description: GET /apps
url: developers/apis/apps-api/requests/get-all-apps-details
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get all apps details

**GET** `/apps`

The **Get all app details** request is used to retrieve details of all the apps in a particular organization.

**ACL:**

- Organization Admins
- Organization Owners
- Stack Owners
- Stack Admins

## Query Parameters

- **search** (optional)
  Searches app details using its name and description.
- **limit** (optional)
  Sets response limit. Default: 50 Not greater than 50
- **skip** (optional)
  Skips the response by offset. Default value: 0
- **order** (optional)
  Defines the response order.  One of the below array:: [“asc“, “desc“, “ASC“, “DESC“ ]
- **sort** (optional)
  Sorts the response based on the passed option.  One of the below array:: [“name“, “updated_at“, “created_at“]

## Headers

- **authtoken** (required)
  Enter your management token.
  Default: `your_authtoken`
- **organization_uid** (required)
  The UID of the organization.
  Default: `your_organization_uid`

## Sample Response

```json
{
    "data": [
        {
            "framework_version": "1.0",
            "version": 1,
            "icon": "data:image/gif;base64,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",
            "description": "Description of the app",
            "target_type": "stack",
            "name": "Postman test",
            "ui_location": {
                "signed": true,
                "base_url": "https://659c-122-170-41-207.ngrok.io",
                "locations": [
                    {
                        "type": "cs.cm.stack.config",
                        "meta": [
                            {
                                "signed": true,
                                "path": "/config",
                                "name": "Configuration"
                            }
                        ]
                    },
                    {
                        "type": "cs.cm.stack.custom_field",
                        "meta": [
                            {
                                "signed": true,
                                "path": "/custom-field",
                                "name": "Field",
                                "data_type": "text"
                            }
                        ]
                    }
                ]
            },
            "webhook": {
                "signed": true,
                "name": "Algolia",
                "enabled": true,
                "target_url": "https://webhook.site/5eb294c0-9eda-495a-9e4f-7feb73892bce",
                "channels": [
                    "content_types.entries.environments.publish.success",
                    "assets.environments.publish.success",
                    "content_types.entries.environments.unpublish.success",
                    "assets.environments.unpublish.success",
                    "content_types.entries.delete",
                    "content_types.delete",
                    "assets.delete"
                ],
                "app_lifecycle_enabled": true,
                "retry_policy": "manual"
            },
            "visibility": "private",
            "created_by": {
                "uid": "bltec8b381725bce91a",
                "first_name": "deena",
                "last_name": "dudekula"
            },
            "updated_by": {
                "uid": "bltec8b381725bce91a",
                "first_name": "deena",
                "last_name": "dudekula"
            },
            "organization_uid": "blte322e9b6abc4d33c",
            "created_at": "2021-10-25T06:48:42.772Z",
            "updated_at": "2021-10-25T06:49:16.830Z",
            "uid": "6176534a02cd3e001155f0fd"
        },
        {
            "framework_version": "1.0",
            "version": 1,
            "icon": "",
            "description": "",
            "target_type": "stack",
            "name": "Postman test 2",
            "ui_location": {
                "signed": true,
                "base_url": "https://659c-122-170-41-207.ngrok.io",
                "locations": [
                    {
                        "type": "cs.cm.stack.config",
                        "meta": [
                            {
                                "signed": true,
                                "path": "/config",
                                "name": "Configuration"
                            }
                        ]
                    },
                    {
                        "type": "cs.cm.stack.custom_field",
                        "meta": [
                            {
                                "signed": true,
                                "path": "/custom-field",
                                "name": "Field",
                                "data_type": "text"
                            }
                        ]
                    }
                ]
            },
            "webhook": {
                "signed": true,
                "name": "Algolia",
                "enabled": true,
                "target_url": "https://webhook.site/5eb294c0-9eda-495a-9e4f-7feb73892bce",
                "channels": [
                    "content_types.entries.environments.publish.success",
                    "assets.environments.publish.success",
                    "content_types.entries.environments.unpublish.success",
                    "assets.environments.unpublish.success",
                    "content_types.entries.delete",
                    "content_types.delete",
                    "assets.delete"
                ],
                "app_lifecycle_enabled": true,
                "retry_policy": "manual"
            },
            "visibility": "private",
            "created_by": {
                "uid": "bltec8b381725bce91a",
                "first_name": "deena",
                "last_name": "dudekula"
            },
            "updated_by": {
                "uid": "bltec8b381725bce91a",
                "first_name": "deena",
                "last_name": "dudekula"
            },
            "organization_uid": "blte322e9b6abc4d33c",
            "created_at": "2021-10-25T06:46:50.069Z",
            "updated_at": "2021-10-25T06:46:50.069Z",
            "uid": "617652da02cd3e001155f0fb"
        }
    ],
    "skip": 0,
    "limit": 50,
    "count": 2
}
```

