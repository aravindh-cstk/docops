---
title: "[Set Up Your Project] - Send Concise Webhook Payload"
description: Send a concise JSON payload in Contentstack webhooks and view examples of comprehensive vs concise payloads.
url: https://www.contentstack.com/docs/headless-cms/send-concise-webhook-payload
product: Contentstack
doc_type: how-to
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Send Concise Webhook Payload

This page explains how to enable **Send Concise Payload** for a Contentstack webhook so it returns a concise JSON payload when events occur. It is intended for developers or stack administrators configuring webhooks and validating the payload format using examples and logs.

## Send Concise Webhook Payload

While creating or updating a [webhook](./about-webhooks.md), Contentstack allows you to send a concise JSON payload to the specified URL whenever the selected event occurs.

To send a concise webhook payload, log in to [Contentstack](https://www.contentstack.com/login), go to your [stack](../set-up-stack/about-stack.md), and perform the following steps:
- Click the “Settings” icon (press “S”) on the left navigation panel, and select **Webhooks** (press “alt + W” for Windows OS, and “option + W” for Mac OS). You will notice a list of existing webhooks.
- Select the webhook for which you want to enable the concise JSON payload.
- On the webhook page, toggle the **Send Concise Payload** switch to enable the webhook to return a concise JSON payload and click **Save**.
- To view the payload sent by a webhook, refer to the [View Webhook Logs](./view-webhook-logs.md) document.

## Examples

Here's an example of a **comprehensive JSON payload** that a webhook sends in the response body when trying to update an existing entry in a content type.

```
{
  "url":"https://localhost:8000",
  "method":"POST",
  "headers":{
    "Content-Type":"application/json",
    "User-Agent":"Contentstack",
    "X-Contentstack-Request-Signature":"1ff17c4025603aa04150241e400439cf18a57d02",
    "custom":"testing",
    "Authorization":"Basic dGVzdDp0ZXN0aW5n"
  },
  "body":{
    "module":"entry",
    "api_key":"blt38776c9acaae33b3",
    "data":{
      "entry":{
        "title":"Samle Entry",
        "body":"[Privacy](\)  [About](\) | Copyright@2021

",
        "tags":[
          "footer",
          "header",
          "asd",
          "new",
          "one"
        ],
        "locale":"en-us",
        "uid":"blt36952eb1aa651010",
        "created_by":"blt1e6dead9f06f1560",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2019-02-15T06:01:22.976Z",
        "updated_at":"2020-10-14T14:51:16.850Z",
        "ACL":{

        },
        "_version":8,
        "_in_progress":false,
        "reference":[
          {
            "uid":"blt67670c9c4c111b0d",
            "_content_type_uid":"eloqua"
          },
          {
            "uid":"blt89e57ca70a1ce997",
            "_content_type_uid":"header"
          },
          {
            "uid":"blt36952eb1aa651010",
            "_content_type_uid":"footer"
          }
        ],
        "oneref":[

        ],
        "file":{
          "uid":"blt98ad72d1484d6cc7",
          "created_at":"2020-02-27T12:23:46.359Z",
          "updated_at":"2020-02-27T12:23:46.359Z",
          "created_by":"blt42e55757d70d5f81026a2b9f",
          "updated_by":"blt42e55757d70d5f81026a2b9f",
          "content_type":"image/png",
          "file_size":"85734",
          "tags":[

          ],
          "filename":"Developer's Guide.png",
          "url":"https://images.contentstack.io/v3/assets/blt38776c9acaae33b3/blt98ad72d1484d6cc7/5e57b4d209113f0d3a8525bf/download",
          "ACL":[

          ],
          "is_dir":false,
          "parent_uid":null,
          "_version":1,
          "title":"Developer's Guide.png"
        }
      },
      "content_type":{
        "created_at":"2019-02-15T06:01:07.706Z",
        "created_by":"blt1e6dead9f06f1560",
        "updated_at":"2020-09-16T16:54:58.986Z",
        "updated_by":"blt6563a9b067fc1bc9",
        "title":"Footer",
        "uid":"footer",
        "description":"",
        "schema":[
          {
            "display_name":"Title",
            "uid":"title",
            "data_type":"text",
            "mandatory":true,
            "unique":true,
            "field_metadata":{
              "_default":true
            },
            "multiple":false,
            "non_localizable":false,
            "indexed":false,
            "inbuilt_model":false
          },
          {
            "data_type":"text",
            "display_name":"Body",
            "uid":"body",
            "field_metadata":{
              "allow_rich_text":true,
              "description":"",
              "multiline":false,
              "rich_text_type":"advanced",
              "options":[

              ],
              "version":1
            },
            "multiple":false,
            "mandatory":false,
            "unique":false,
            "non_localizable":false,
            "indexed":false,
            "inbuilt_model":false
          },
          {
            "data_type":"reference",
            "display_name":"Reference",
            "reference_to":[
              "eloqua",
              "footer",
              "header"
            ],
            "field_metadata":{
              "ref_multiple":true,
              "ref_multiple_content_types":true
            },
            "uid":"reference",
            "multiple":false,
            "mandatory":false,
            "unique":false,
            "non_localizable":false,
            "indexed":false,
            "inbuilt_model":false
          },
          {
            "data_type":"reference",
            "display_name":"oneref",
            "reference_to":"header",
            "field_metadata":{
              "ref_multiple":false
            },
            "uid":"oneref",
            "multiple":false,
            "mandatory":false,
            "unique":false,
            "non_localizable":false,
            "indexed":false,
            "inbuilt_model":false
          },
          {
            "data_type":"file",
            "display_name":"File",
            "uid":"file",
            "extensions":[

            ],
            "field_metadata":{
              "description":"",
              "rich_text_type":"standard"
            },
            "multiple":false,
            "mandatory":false,
            "unique":false,
            "indexed":false,
            "inbuilt_model":false,
            "non_localizable":false
          }
        ],
        "options":{
          "is_page":false,
          "singleton":true,
          "title":"title",
          "sub_title":[

          ]
        }
      }
    },
    "event":"update",
    "triggered_at":"2020-10-14T14:51:37.045Z"
  }
}
```

Here's an example of a **concise JSON payload** that a webhook sends in the response body when trying to update an existing entry in a content type:

```
{
  "url":"https://localhost:8000",
  "method":"POST",
  "headers":{
    "Content-Type":"application/json",
    "User-Agent":"Contentstack",
    "X-Contentstack-Request-Signature":"d33bec09607f6aa70d64e076a835bb6d1ff32e8c",
    "custom":"testing",
    "Authorization":"Basic dGVzdDp0ZXN0aW5n"
  },
  "body":{
    "module":"entry",
    "api_key":"blt38776c9acaae33b3",
    "event":"update",
    "triggered_at":"2020-10-14T14:40:54.157Z",
    "data":{
      "entry":{
        "uid":"blt36952eb1aa651010",
        "title":"Samle Entry",
        "locale":"en-us",
        "_version":7
      },
      "content_type":{
        "uid":"footer",
        "title":"Footer"
      }
    }
  }
}
```

## API Reference

To send concise webhook payload while creating or updating a webhook via API, refer to the following API requests:
- [Create a webhook](../../../api-docs/api-detail/content-management-api.md#create-a-webhook)
- [Update webhook](../../../api-docs/api-detail/content-management-api.md#update-webhook)

## Common questions

### What does enabling **Send Concise Payload** change?
It enables the webhook to return a concise JSON payload instead of a comprehensive JSON payload.

### Where can I see the payload that was sent by a webhook?
To view the payload sent by a webhook, refer to the [View Webhook Logs](./view-webhook-logs.md) document.

### Can I enable concise payloads when creating or updating webhooks via API?
Yes. Refer to the API requests: [Create a webhook](../../../api-docs/api-detail/content-management-api.md#create-a-webhook) and [Update webhook](../../../api-docs/api-detail/content-management-api.md#update-webhook).

### Where do I enable concise payloads in the UI?
On the webhook page, toggle the **Send Concise Payload** switch and click **Save**.