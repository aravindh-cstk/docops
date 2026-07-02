---
title: "roles"
description: "Gets organization roles. Below are the parameters to use in the method - addParam(String, Object):"
url: "https://www.contentstack.com/copy-of-java-management-organization-roles"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## roles

Gets organization roles.

Below are the parameters to use in the method - addParam(String, Object):

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | Integer | No | — | The limit parameter will return a specific number of Organization roles in the output. Example, if there are 10 organization roles, and you wish to fetch only the first 2, you need to specify '2' as the value in this parameter. |
| skip | Integer | No | — | The 'skip' parameter will skip a specific number of organization roles in the output. For example, if there are 12 organization roles and you want to skip the last 2 to get only the first 10 in the response body, you need to specify '2' here. |
| asc | String | No | — | The "asc" parameter allows you to sort the list of organization roles in ascending order based on a parameter. |
| desc | String | No | — | The "desc" parameter allows you to sort the list of organization roles in descending order based on a parameter. |
| include_count | Boolean | No | — | The "include_count" parameter returns an organization's total number of roles. For example: If you want to know the total number of roles in an organization, you need to put the value as true. |
| include_stack_roles | Boolean | No | — | The include_stack_roles parameter, when set to true, includes the details of stack-level roles in the Response body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
Call&lt;ResponseBody&gt; response = organisation.roles().execute();
if (response.isSuccessful){
	System.out.println("Response"+ response)
}
```
