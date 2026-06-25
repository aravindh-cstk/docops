---
title: "[Set Up Your Project] - Webhook Data Format"
description: Webhook Data Format
url: https://www.contentstack.com/docs/headless-cms/webhook-data-format
product: Contentstack
doc_type: api-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Webhook Data Format

This page describes the webhook payload structure Contentstack sends to external services, including the POST method, headers, body keys, and multiple example payloads. It is intended for developers implementing webhook receivers and should be used when validating, parsing, or debugging webhook requests.

## Webhook Data Format

Contentstack uses outgoing webhooks that send data from Contentstack to external services. When an event occurs, data is sent to the registered URL.

When a webhook is triggered, the data received is in the following format:

```
Method: POST
Headers: "Content-Type: application/json", "X-Contentstack-Request-Signature:9876543210"
Body: {
  "event": "string",
  "module": "string",
  "api_key": "string",
  "data": "object"
}
```

Details of the POST call's `Body` keys:
- `event` - One of these [`create`, `update`, `delete`, `publish`, `publish.start`, `publish.success`, `publish.fail`, `unpublish`, `unpublish.start`, `unpublish.success`, `unpublish.fail`]
- `module` - One of these [`content types`, `entry`, `asset`, `release`]
- `api_key` - The API key of the stack
- `data` - This is the response object

## Examples

Here’s an example of a response object attached to the POST body when trying to update an existing **entry** in a content type.

```
{
  "module": "entry",
  "api_key": "blt**************22",
  "data": {
    "entry": {
      "title": "Webhook Entry",
      "url": "/webhook-entry",
      "locale": "en-us",
      "uid": "blt**************a9",
      "created_by": "blt**************33",
      "updated_by": "blt**************33",
      "created_at": "2019-03-08T08:57:47.737Z",
      "updated_at": "2019-03-08T08:58:07.560Z",
      "ACL": {},
      "_version": 2,
      "tags": []
    },
    "content_type": {
      "created_at": "2019-03-08T08:57:38.993Z",
      "created_by": "blt**************33",
      "updated_at": "2019-03-08T08:57:38.993Z",
      "updated_by": "blt**************33",
      "title": "Webhook created",
      "uid": "webhookcreated",
      "description": "",
      "schema": [
        {
          "display_name": "Title",
          "uid": "title",
          "data_type": "text",
          "field_metadata": {
            "_default": true
          },
          "unique": true,
          "mandatory": true,
          "multiple": false
        },
        {
          "display_name": "Webhook created",
          "uid": "url",
          "data_type": "text",
          "field_metadata": {
            "_default": true
          },
          "unique": false,
          "mandatory": false,
          "multiple": false
        }
      ],
      "options": {
        "title": "title",
        "singleton": false,
        "publishable": true,
        "is_page": true,
        "sub_title": [],
        "url_pattern": "/:title",
        "url_prefix": "/"
      }
    }
  },
  "event": "update",
  "triggered_at": "2019-03-08T08:58:07.725Z"
}

```

Here’s an example of a response object attached to the POST body when trying to update an existing **comment** in any entry.

```
{
    "triggered_at":"2022-04-22T06:51:57.427Z",
    "module":"comment",
    "api_key":"blt**************ab",
    "data":{
        "content_type":{
            "created_at":"2022-01-19T13:52:08.528Z",
            "created_by":"blt**************38",
            "updated_at":"2022-01-19T13:52:08.528Z",
            "updated_by":"blt**************38",
            "title":"Sample_content_type",
            "uid":"sample_content_type",
            "description":"",
            "schema":[
                {
                    "display_name":"Title",
                    "uid":"title",
                    "data_type":"text",
                    "field_metadata":{
                        "_default":true,
                        "version":3
                    },
                    "unique":false
                },
                {
                    "data_type":"text",
                    "display_name":"Multi Line Textbox",
                    "uid":"multi_line",
                    "field_metadata":{
                        "description":"Sample text.",
                        "multiline":true,
                        "version":3
                    },
                    "mandatory":false,
                    "multiple":false,
                    "non_localizable":false,
                    "unique":false
                },
                {
                    "display_name":"URL",
                    "uid":"url",
                    "data_type":"text",
                    "field_metadata":{
                        "_default":true,
                        "version":3
                    },
                    "unique":false,
                    "multiple":false,
                    "mandatory":false,
                    "non_localizable":false,
                    "indexed":false,
                    "inbuilt_model":false
                }
            ],
            "options":{
                "title":"title",
                "publishable":true,
                "is_page":true,
                "singleton":false,
                "sub_title":[
                    "url"
                ],
                "url_pattern":"/:title",
                "url_prefix":"/"
            }
        },
        "entry":{
            "locale":"en-us",
            "tags":[

            ],
            "title":"Sample Entry",
            "uid":"blt**************8d",
            "created_by":"blt**************4e",
            "updated_by":"blt**************fe",
            "created_at":"2022-01-27T05:42:01.729Z",
            "updated_at":"2022-02-04T12:39:37.992Z",
            "url":"/sample-entry",
            "ACL":{

            },
            "_version":6,
            "_in_progress":false
        },
        "comment":{
            "discussion_uid":"cs615c8c6cdd2633b0",
            "uid":"cs725e99b728f36145",
            "to_users":[
                {
                    "email":"user@contentstack.com",
                    "first_name":"User First Name",
                    "uid":"blt**************4e",
                    "last_name":"User Last Name"
                }
            ],
            "to_roles":[
                {
                    "name":"Developer",
                    "uid":"blt**************1d",
                    "users":[
                        "blt**************6d",
                        "blt**************56"
                    ]
                }
            ],
            "message":"This is an updated comment.",
            "created_at":"2022-04-22T06:48:54.655Z",
            "created_by":{
                "uid":"blt**************b1",
                "email":"user@contentstack.com",
                "first_name":"User First Name",
                "last_name":"User Last Name"
            },
            "deleted_at":false,
            "entry_uid":"blt**************8d",
            "locale":"en-us",
            "updated_at":"2022-04-22T06:51:57.201Z"
        },
        "discussion":{
            "title":"Multi Line Textbox-1650610117501",
            "entry_uid":"blt**************8d",
            "uid":"cs615c8c6cdd2633b0",
            "api_key":"blt**************ab",
            "org_uid":"blt**************f0",
            "_content_type_uid":"sample_content_type",
            "locale":"en-us",
            "status":1,
            "field":{
                "uid":"multi_line",
                "path":"multi_line",
                "og_path":"multi_line"
            },
            "created_at":"2022-04-22T06:48:54.326Z",
            "created_by":"blt**************b1"
        }
    },
    "event":"update"
}

```

Here’s an example of a response object attached to the POST body when an **asset** is published successfully on an environment.

```
{
  "module": "asset",
  "api_key": "blt**************22",
  "data": {
    "asset": {
      "uid": "blt**************11",
      "created_at": "2019-03-08T09:04:25.377Z",
      "updated_at": "2019-03-08T09:04:25.377Z",
      "created_by": "blt**************22",
      "updated_by": "blt**************22",
      "content_type": "image/png",
      "file_size": "560",
      "tags": [],
      "filename": "image.png",
      "url": "your_asset_URL",
      "ACL": {},
      "is_dir": false,
      "parent_uid": null,
      "_version": 1,
      "title": "image.png",
      "description": "",
      "publish_details": [
        {
          "environment": "blt**************33",
          "locale": "en-us",
          "time": "2019-03-08T09:04:43.921Z",
          "user": "blt**************22",
          "version": 1
        }
      ]
    },
    "environment": {
      "name": "blank",
      "servers": [],
      "urls": [],
      "deploy_content": false,
      "uid": "blt**************55",
      "created_by": "blt**************22",
      "updated_by": "blt**************22",
      "created_at": "2019-03-08T08:53:46.157Z",
      "updated_at": "2019-03-08T08:53:46.157Z",
      "ACL": [],
      "_version": 1
    },
    "action": "publish",
    "status": "success",
    "locale": "en-us"
  },
  "event": "publish",
  "triggered_at": "2019-03-08T09:04:53.444Z"
}

```

Here's an example of a response object attached to the POST body when an **entry** is published within a release successfully on an environment.

```
{
    "event": "publish",
    "source": {
        "type": "release"
        "title": "Release01",
        "uid": "blt**************11"
    },
    "data": {
        "entry": {
            ...
        }
    },
    "api_key": "blt**************dc",
    "module": "entry",
    "triggered_at": "2019-03-06T05:34:44.876Z"
}
```

Here's an example of a response object attached to the POST body when an **asset** is published within a release successfully on an environment.

```
{
    "event": "publish",
    "source": {
        "type": "release"
        "title": "Release02",
        "uid": "blt**************11"
    },
    "data": {
        "asset": {
            ...
        }
    },
    "api_key": "blt**************dc",
    "module": "asset",
    "triggered_at": "2019-03-06T05:34:44.876Z"
}
```

Lastly, here's an example of a response object attached to the POST body when a **release** has been deployed successfully.

```
{
  "module": "release",
  "api_key": "blt**************11",
  "data": {
    "release": {
      "name": "Webhook-Release",
      "description": "Release 08-03-2019",
      "locked": true,
      "items": [
        {
          "uid": "blt**************01",
          "version": 1,
          "action": "publish",
          "content_type_uid": "content_type",
          "locale": "en-us",
          "title": "Entry1"
        },
        {
          "uid": "blt**************02",
          "version": 1,
          "action": "publish",
          "content_type_uid": "content_type",
          "locale": "en-us",
          "title": "Entry2"
        },
        {
          "uid": "blt**************33",
          "version": 1,
          "action": "publish",
          "content_type_uid": "built_io_upload",
          "locale": "en-us",
          "title": "Image1.png"
        },
        {
          "uid": "blt**************44",
          "version": 1,
          "action": "publish",
          "content_type_uid": "built_io_upload",
          "locale": "en-us",
          "title": "Image2.png"
        }
      ],
      "uid": "blt**************11",
      "created_by": "blt**************23",
      "updated_by": "blt**************23",
      "created_at": "2019-03-08T09:25:24.165Z",
      "updated_at": "2019-03-08T09:25:32.278Z",
      "status": [
        {
          "environment": "blt**************33",
          "time": "2019-03-08T09:25:32.235Z",
          "status": "success",
          "user": "blt**************23"
        }
      ]
    },
    "environment": {
      "deploy_content": false,
      "servers": [],
      "urls": [
        {
          "url": "",
          "locale": "en-us"
        }
      ],
      "name": "production",
      "uid": "blt**************33",
      "created_by": "blt**************23",
      "updated_by": "blt**************23",
      "created_at": "2019-03-08T09:22:35.779Z",
      "updated_at": "2019-03-08T09:22:35.779Z",
      "ACL": [],
      "_version": 1
    },
    "action": "deploy",
    "status": "success"
  },
  "event": "deploy",
  "triggered_at": "2019-03-08T09:25:32.518Z"
}
```

## Common questions

### What HTTP method and content type do Contentstack outgoing webhooks use?
They use `Method: POST` and the header `"Content-Type: application/json"`.

### What are the top-level keys in the webhook request body?
The body includes `"event"`, `"module"`, `"api_key"`, and `"data"`.

### What values can the `event` field contain?
`event` can be one of these [`create`, `update`, `delete`, `publish`, `publish.start`, `publish.success`, `publish.fail`, `unpublish`, `unpublish.start`, `unpublish.success`, `unpublish.fail`].

### What does the `data` field represent?
`data` is the response object.