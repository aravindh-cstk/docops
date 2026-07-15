---
title: "releases"
description: "You can pin a set of entries and assets (along with the deploy action, i.e., publish/unpublish) to a release, and then deploy this release to an environment. This will publish/unpublish all the items of the release to the specified environment."
url: "https://www.contentstack.com/java-management-stack-releases"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## releases

You can pin a set of entries and assets (along with the deploy action, i.e., publish/unpublish) to a release, and then deploy this release to an environment. This will publish/unpublish all the items of the release to the specified environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| releaseUid | String | No | — | The unique ID of the release of which you want to retrieve the details. |

Returns:
Type
Releases

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.releases("releaseUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
