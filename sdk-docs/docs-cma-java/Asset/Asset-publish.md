---
title: "publish"
description: "The \"Publish an asset\" call is used to publish a specific version of an asset on the desired environment either immediately or at a later date/time. In case of Scheduled Publishing, add the scheduled\\_at key and provide the date/time in the ISO format as its value. Example: \"scheduled\\_at\":\"2016-10-07T12:34:36.000Z\""
url: "https://www.contentstack.com/copy-of-java-management-asset-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## publish

The "Publish an asset" call is used to publish a specific version of an asset on the desired environment either immediately or at a later date/time.

In case of Scheduled Publishing, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | - | JSON Request body. |

Returns:
Type
call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
JSONObject body = new JSONBody();
Call<ResponseBody> response = asset.publish(body).execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
