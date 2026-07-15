---
title: "Get an audit log item"
description: GET /v1/projects/{project_uid}/audit-logs/{auditlog_uid}
url: developer-apis/automations-management-api-requests/get-an-audit-log-item
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Get an audit log item

**GET** `/v1/projects/{project_uid}/audit-logs/{auditlog_uid}`

The Get an audit log item request is used to retrieve a specific item from the audit log of a project.

To configure the permissions for your application via OAuth, include the automationhub.audit-logs:read scope.

## URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **auditlog_uid** (required)
  Enter the UID of the specific log you want to retrieve.
  Default: `cslscb28b96f-f29c-4f68-bfc8-845a8085e948`

## Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

## Sample Response

```json
{
    "app_type": "",
    "branch": "",
    "channels": null,
    "created_at": "2024-02-22T12:03:01.283Z",
    "created_by": {
        "uid": "blt******dae71c6b33",
        "username": "user_blt88a8d584",
        "email": "sample_user@example.com",
        "first_name": "Jane",
        "last_name": "Doe",
        "role": 1,
        "active": true
    },
    "event": "Update",
    "headers": null,
    "management_token_uid": "",
    "metadata": {
        "__v": 0,
        "_id": "65******6323264738b10b29",
        "active": false,
        "audience": [],
        "created_at": "2024-02-22T11:32:24.309Z",
        "description": "",
        "id": "345ae3c033c6432baf34fe90032eaaad",
        "isDraftRule": false,
        "org_id": "blt******5ea6ddf287",
        "project_id": "05732fe9f7d6454791715b09a3792f52",
        "published": true,
        "shared": [],
        "step_groups": [
            "http",
            null
        ],
        "steps": [],
        "tags": [],
        "throttle": false,
        "title": "ChatGPT",
        "trigger": {
            "id": "fc4a630beb984aff9ca2cdf02e27c844",
            "next": []
        },
        "updated_at": "2024-02-22T12:03:01.279Z",
        "updated_by": "blt******dae71c6b33",
        "user_id": "blt******dae71c6b33"
    },
    "module": "Automation",
    "module_uid": "345ae3c033c6432baf34fe90032eaaad",
    "org_uid": "blt******5ea6ddf287",
    "payload": null,
    "project_uid": "05732fe9f7d6454791715b09a3792f52",
    "remote_addr": "223.***.**.180",
    "request": {},
    "request_id": "5f17ae07-697c-40c0-9a8f-bdd8b5fc3eb0",
    "response": {},
    "sort": null,
    "stack": "",
    "uid": "cslscb28b96f-f29c-4f68-bfc8-845a8085e948"
}
```

