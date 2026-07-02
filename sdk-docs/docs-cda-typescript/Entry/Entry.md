---
title: "Entry"
description: "An Entry is the actual piece of content created using one of the defined content types. To work with a single entry, specify its UID. Example: import contentstack from '@contentstack/delivery-sdk' import { BaseEntry } from '@contentstack/delivery-sdk' const stack = contentstack.stack({ apiKey: \"apiKey\", deliveryToken: \"deliveryToken\", environment: \"environment\" }); interface BlogPostEntry extends BaseEntry { // custom entry types } async function fetchEntry() { try { const result = await stack.contentType(contenttype_uid).entry(entry_uid).fetch<BlogPostEntry>(); console.log('Entry: ', result); //Add your statements } catch (error) { console.error('Error fetching entry:', error); } } fetchEntry();"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/typescript/reference/entry"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Entry

## Entry

An [Entry](/docs/content-managers/author-content/about-entries) is the actual piece of content created using one of the defined content types. To work with a single entry, specify its UID.

**Example:**

```
import contentstack from '@contentstack/delivery-sdk'
import { BaseEntry } from '@contentstack/delivery-sdk'

const stack = contentstack.stack({ apiKey: "apiKey", deliveryToken: "deliveryToken", environment: "environment" });
interface BlogPostEntry extends BaseEntry {
  // custom entry types
}
async function fetchEntry() {
    try {
const result = await stack.contentType(contenttype_uid).entry(entry_uid).fetch<BlogPostEntry>();
      console.log('Entry: ', result);
//Add your statements
    } catch (error) {
      console.error('Error fetching entry:', error);
  }
}
fetchEntry();
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entryUid | entryUid | No | — | UID of the entry |
