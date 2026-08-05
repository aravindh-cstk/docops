---
title: "includeReferenceField(with:except:)"
description: "Specifies an array of except keys in reference object that would be included in the response."
url: "https://www.contentstack.com/swift-entryqueryable-includereferencefield-with-except-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeReferenceField(with:except:)

Specifies an array of except keys in reference object that would be included in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Reference field uid as key to include reference. |
| fields | [String] | No | — | List of field uid's to be excluded in response. |

Returns:
Type
Self

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query()
.includeReferenceField(with: "<REFERENCE_FIELD_UID>",except:["<EXCEPT_FIELD_UIDS>"])
.fetch { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
