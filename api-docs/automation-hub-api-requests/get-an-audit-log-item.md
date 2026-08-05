---
title: "Get an audit log item"
description: /v1/projects/{project_uid}/audit-logs/{auditlog_uid}
url: /get-an-audit-log-item
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T17:38:55.311Z
updated_at: 2024-02-22T13:12:27.984Z
---

# Get an audit log item

<p>The <span class="code">Get an audit log item</span> request is used to retrieve a specific item from the audit log of a project.</p><p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.audit-logs:read</span> scope.</p>

**API Endpoint**: `/v1/projects/{project_uid}/audit-logs/{auditlog_uid}`

**Method**: `GET`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>
- **auditlog_uid** (required)
  <p>Enter the UID of the specific log you want to retrieve.</p>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;">Authentication</span></a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>

## Response

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

