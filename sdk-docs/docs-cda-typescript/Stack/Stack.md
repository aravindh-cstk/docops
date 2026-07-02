---
title: "Stack"
description: "A stack is a repository or a container that holds all the entries / assets of your site. It allows multiple users to create , edit , approve , and publish their content within a single space. The stack function initializes an instance of the Stack. To initialize a stack execute the following code: import contentstack from '@contentstack/delivery-sdk' const stack = contentstack.stack({ apiKey: \"apiKey\", deliveryToken: \"deliveryToken\", environment: \"environment\" });"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/typescript/reference/stack"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Stack

## Stack

A [stack](/docs/developers/set-up-stack/about-stack) is a repository or a container that holds all the [entries](/docs/content-managers/author-content/about-entries)/[assets](/docs/content-managers/working-with-assets/about-assets) of your site. It allows multiple users to [create](/docs/content-managers/working-with-entries/create-an-entry), [edit](/docs/content-managers/working-with-entries/edit-an-entry), [approve](/docs/content-managers/use-workflows/send-an-entry-for-publish-or-unpublish-approval), and [publish](/docs/content-managers/publish-content) their content within a single space.

The stack function initializes an instance of the Stack. To initialize a stack execute the following code:

```
import contentstack from '@contentstack/delivery-sdk'
const stack = contentstack.stack({ apiKey: "apiKey", deliveryToken: "deliveryToken", environment: "environment" });
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| apiKey | string | Yes | — | API key of the stack |
| deliveryToken | string | Yes | — | Delivery token to retrieve data from the stack |
| environment | string | Yes | — | Environment name where content is published |
| live_preview | LivePreview | No | — | The Live preview configuration for the Contentstack API |
| branch | string | No | main | Name of the branch to fetch data from |
| host | string | No | cdn.contentstack.io | Sets the host of the API server (example: "dev.contentstack.com") |
| region | string | No | — | Region of the stack. You can choose from five regions: NA, EU, Azure NA, Azure EU, GCP NA, and GCP EU. |
| locale | string | No | — | Lets you specify which language to use as source content if the entry does not exist in the specified language. |
| cacheOptions.policy | string | No | — | Specifies the caching strategy. Accepts a string value from the Policy enum. |
| cacheOptions.storeType | string | No | 'localStorage' | Defines where the cache is stored. Accepts localStorage or memoryStorage as string values. |
| cacheOptions.maxAge | number | No | 24 hrs | Sets the maximum age (in milliseconds) before the cache expires. |
| cacheOptions.serializer | function | No | JSON.stringify | Function to serialize data before storing it in the cache. |
| cacheOptions.deserializer | function | No | JSON.parse | Function to deserialize data when retrieving it from the cache. |
| early_access | List<string> | No | — | Set early access headers |
| logHandler | function | No | — | Method to enable custom logging in the SDK |
| plugins | List<any> | No | — | Add custom plugins to the SDK |
