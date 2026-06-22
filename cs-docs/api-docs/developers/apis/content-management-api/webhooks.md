---
title: "CMA | Webhooks"
description: Create, update, fetch, and manage webhooks that trigger external workflows from Contentstack events.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/webhooks
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Webhooks

A webhook is a mechanism that sends real-time information to any third-party app or service to keep your application in sync with your Contentstack account. Webhooks allow you to specify a URL to which you would like Contentstack to post data when an event happens. Read more about [Webhooks](/docs/developers/set-up-webhooks).

**Note**: If any key name in the response data sent to a notification URL begins with a dollar sign ($), it will be prefixed with the acronym "cs" as a wildcard. For example, the key named "$success" would be replaced with "cs$success." For more information, refer to our [API Change Log](/docs/developers/apis/api-change-log#january-21-2022) documentation.

## Related Pages

- [Get all Webhooks](https://www.contentstack.com/docs)
- [Get Single Webhook](https://www.contentstack.com/docs)
- [Create a Webhook](https://www.contentstack.com/docs)
- [Update Webhook](https://www.contentstack.com/docs)
- [Delete Webhook](https://www.contentstack.com/docs)
- [Export Webhook](https://www.contentstack.com/docs)
- [Import Webhook](https://www.contentstack.com/docs)
- [Get Webhook Executions](https://www.contentstack.com/docs)
- [Webhook Retry](https://www.contentstack.com/docs)
- [Get Execution Log](https://www.contentstack.com/docs)
