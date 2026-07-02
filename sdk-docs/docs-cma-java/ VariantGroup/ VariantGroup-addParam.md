---
title: "addParam"
description: "The addParam() methodsets a single query parameter for the request using a key-value pair.."
url: "https://www.contentstack.com/java-management-variants-group-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam

The `addParam()` methodsets a single query parameter for the request using a key-value pair..

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | No | — | Query parameter key |
| value | Object | No | — | Query parameter value |

Returns:
Type
Void

```
import Contentstack;

// Replace AUTHTOKEN and API_KEY with your actual credentials
Contentstack contentstack = new Contentstack.Builder().setAuthToken(AUTHTOKEN).build();

Stack stack = contentstack.stack(API_KEY);

VariantGroup variantGroup = stack.variantGroup();

// Add query parameters to include count and variant info in the response

variantGroup.addParam("include_count", true);
variantGroup.addParam("include_variant_info", true);

Response<ResponseBody> response = variantGroup.find().execute();

if (response.isSuccessful() && response.body() != null) {           
  System.out.println("Fetched variant groups: " + response.body().string());  
} else {      
  System.out.println("Error: " + response.errorBody().string());  
}
```

### Overload 2

No parameters.

The following keys are accepted by the `addParam` method:

| **Key** | **Value** | **Description** |
|---|---|---|
| `skip` | int | Specifies the number of records to skip in the response. This is useful for pagination when fetching variant groups. |
| `limit` | int | Specifies the maximum number of records to return in a single API response. This parameter helps control the size of the response when fetching variant groups. |
| `include_count` | boolean | When set to `true`, the API response will include the total count of variant groups. |
| `include_variant_info` | boolean | When set to `true`, the API response will include detailed information about the variants associated with each variant group. |
| `include_variant_count` | boolean | When set to `true`, the API response will include the count of variants within each variant group. |
| `asc` | String | Specifies the field name by which to sort the results in ascending order. |
| `desc` | String | Specifies the field name by which to sort the results in descending order. |
| `content_type` | String | Filters the variant groups based on a specific content type UID. |
