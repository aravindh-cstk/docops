---
title: "ContentType"
description: "A content type is the structure or blueprint of a page or a section that your web or mobile property will display. It lets you define the overall schema of this blueprint by adding fields and setting its properties. Example: import { BaseContentType } from '@contentstack/delivery-sdk' interface BlogPost extends BaseContentType { text: string; // other custom props } async function fetchContentType() { try { const contentType = await stack.contentType(\"blog\").fetch<BlogPost>(); console.log(contentType); //Add your statements } catch (error) { console.error(\"Error fetching content type:\", error); } } fetchContentType();"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/typescript/reference/contenttype"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# ContentType

## ContentType

A [content type](/docs/developers/create-content-types/about-content-types) is the structure or blueprint of a page or a section that your web or mobile property will display. It lets you define the overall schema of this blueprint by adding fields and setting its properties.

**Example:**

```
import { BaseContentType } from '@contentstack/delivery-sdk'
interface BlogPost extends BaseContentType {
  text: string;
  // other custom props
}
async function fetchContentType() { 
   try { 
 const contentType = await stack.contentType("blog").fetch<BlogPost>();
 console.log(contentType); 
 //Add your statements
    } catch (error) { 
  console.error("Error fetching content type:", error); 
} 
} 
fetchContentType();
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentTypeUid | string | No | — | UID of the content type |
