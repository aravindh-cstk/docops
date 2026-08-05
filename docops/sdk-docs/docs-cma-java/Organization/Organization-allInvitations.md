---
title: "allInvitations"
description: "The \"Get all organization invitations\" call gives you a list of all the Organization invitations. Only the owner or the admin of the Organization can resend the invitation to add users to an Organization. When executing the API call, provide the Organization UID. The query parameters for addParam(String, Object) are as follows:"
url: "https://www.contentstack.com/java-management-organization-allinvitations"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## allInvitations

The "Get all organization invitations" call gives you a list of all the Organization invitations. Only the owner or the admin of the Organization can resend the invitation to add users to an Organization.

When executing the API call, provide the Organization UID.

The query parameters for addParam(String, Object) are as follows:

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | Integer | No | — | The 'limit' parameter will return a specific number of sent organization invitations in the output. Example, if 10 invitations were sent out and you wish to fetch only the first 8, you need to specify '2' as the value in this parameter. |
| skip | Integer | No | — | The 'skip' parameter will skip a specific number of organization roles in the output. For example, if there are 12 organization roles and you want to skip the last 2 to get only the first 10 in the response body, you need to specify '2' here. |
| asc | String | No | — | The 'asc' parameter allows you to sort the list of organization invitations in ascending order based on a specific parameter. |
| desc | String | No | — | The 'desc' parameter allows you to sort the list of organization invitations in descending order on the basis of a specific parameter. |
| include_count | Boolean | No | — | The 'include_count' parameter returns the total number of organization invitations sent out. Example: If you wish to know the total number of organization invitations, you need to mention 'true'. |
| include_roles | String | No | — | The 'include_roles' parameter, when set to 'true', will display the details of the roles that are assigned to the user in an organization. |
| include_invited_by | Boolean | No | — | The 'include_invited_by' parameter, when set to 'true', includes the details of the user who sent out the organization invitation. |
| include_user_details | Boolean | No | — | The 'include_user_details' parameter, when set to 'true', lets you know whether the user who has been sent the organization invitation has enabled Two-factor Authentication or not. |
| typeahead | String | No | — |  |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
Call&lt;ResponseBody&gt; response = organisation.allInvitations().execute();
if (response.isSuccessful){
	System.out.println("Response"+ response)
}
```
