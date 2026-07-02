---
title: "includeContentType"
description: "The includeContentType method includes the full content type schema along with each entry in the response."
url: "https://www.contentstack.com/datasync-filesystem-global-includecontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeContentType

The `includeContentType` method includes the full content type schema along with each entry in the response.

No parameters.

Returns:
Type
Stack

**Example:**

```
Stack.contentType('example')
 .entries()
 .includeContentType()
 .find()
 .then((result) => {
   // Expected result
   {
     entries: [
       {
         ...,
       },
     ],
     content_type_uid: 'example',
     locale: 'en-us',
     content_type: {
       ..., // Content type example's schema
     }
   }
 }).catch((error) => {
   // Handle errors that occur during the query execution
 })
```
