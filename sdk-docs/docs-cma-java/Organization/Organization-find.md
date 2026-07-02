---
title: "find"
description: "The \"Get all organizations\" call lists all organizations related to the system user in the order that they were created Following are the query parameters for the method - addParam(String, Object):"
url: "https://www.contentstack.com/java-management-organization-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The "Get all organizations" call lists all organizations related to the system user in the order that they were created

Following are the query parameters for the method - addParam(String, Object):

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | Integer | No | — | The limit parameter will return a specific number of Organization roles in the output. Example, if there are 10 organization roles, and you wish to fetch only the first 2, you need to specify '2' as the value in this parameter. |
| skip | Integer | No | — | The 'skip' parameter will skip a specific number of organization roles in the output. For example, if there are 12 organization roles and you want to skip the last 2 to get only the first 10 in the response body, you need to specify '2' here. |
| asc | String | No | — | The "asc" parameter allows you to sort the list of organization roles in ascending order based on a parameter. |
| desc | String | No | — | The "desc" parameter allows you to sort the list of organization roles in descending order based on a parameter. |
| include_count | Boolean | No | — | The "include_count" parameter returns an organization's total number of roles. For example: If you want to know the total number of roles in an organization, you need to put the value as true. |
| typehead | Boolean | No | — | " contentstack". |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
Call&lt;ResponseBody&gt; response = organisation.find().execute();
if (response.isSuccessful){
	System.out.println("Response"+ response)
}
```
