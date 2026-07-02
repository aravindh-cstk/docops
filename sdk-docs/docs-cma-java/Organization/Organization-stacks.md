---
title: "stacks"
description: "The \"Get all stacks\" in an organization call fetches the list of all stacks in an Organization The query parameters for the method - addParam(String, Object) are as follows:"
url: "https://www.contentstack.com/java-management-organization-stacks"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## stacks

The "Get all stacks" in an organization call fetches the list of all stacks in an Organization

The query parameters for the method - addParam(String, Object) are as follows:

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | Integer | No | — | The 'limit' parameter will return a specific number of sent organization invitations in the output. Example, if 10 invitations were sent out and you wish to fetch only the first 8, you need to specify '2' as the value in this parameter. |
| skip | Integer | No | — | The 'skip' parameter will skip a specific number of organization roles in the output. Example, if there are 12 organization roles and you want to skip the last 2 to get only the first 10 in the response body, you need to specify '2' here. |
| asc | String | No | — | The 'asc' parameter allows you to sort the list of organization invitations in ascending order on the basis of a specific parameter. |
| desc | String | No | — | The 'desc' parameter allows you to sort the list of organization invitations in descending order on the basis of a specific parameter. |
| include_count | Boolean | No | — | The 'include_count' parameter returns the number of organization invitations sent out. Example: If you wish to know the total number of organization invitations, you need to mention 'true'. |
| typeahead | Boolean | No | — | The 'typeahead' parameter allows you to perform a name-based search on all the stacks in an organization based on the value provided. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
Call&lt;ResponseBody&gt; response = organisation.stacks().execute();
if (response.isSuccessful){
	System.out.println("Response"+ response)
}
```
