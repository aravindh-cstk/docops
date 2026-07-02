---
title: "replace"
description: "The Replace asset call will replace an existing asset with another file on the stack. Tip: You can try the call manually in any REST API client, such as Postman. Under Body, pass a body parameter named asset\\[upload\\] and select the input type as 'File'. This will enable you to select the file that you wish to import. You can assign a parent folder to your asset by using the asset\\[parent\\_uid\\] parameter, where you can pass the UID of the parent folder. Additionally, you can pass optional parameters such as asset\\[title\\] and asset\\[description\\] which let you enter a title and a description for the uploaded asset, respectively."
url: "https://www.contentstack.com/java-management-asset-getversionnamedetails"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## replace

The Replace asset call will replace an existing asset with another file on the stack.

Tip: You can try the call manually in any REST API client, such as Postman. Under Body, pass a body parameter named asset[upload] and select the input type as 'File'. This will enable you to select the file that you wish to import. You can assign a parent folder to your asset by using the asset[parent_uid] parameter, where you can pass the UID of the parent folder. Additionally, you can pass optional parameters such as asset[title] and asset[description] which let you enter a title and a description for the uploaded asset, respectively.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| filePath | String | Yes | — | The file path. |
| description | String | Yes | — | The file description. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
Call<ResponseBody> response = asset.replace("filePath", "description").execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
