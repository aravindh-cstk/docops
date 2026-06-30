---
title: "logItem"
description: "The\" Get Organization log details\" request is used to retrieve the audit log details of an organization Tip : This request returns only the first 25 audit log items of the specified organization. If you get more than 25 items in your response, refer to the Pagination section to retrieve all the log items in paginated form"
url: "https://www.contentstack.com/java-management-organization-logitem"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## logItem

The" Get Organization log details" request is used to retrieve the audit log details of an organization

**Tip**: This request returns only the first 25 audit log items of the specified organization. If you get more than 25 items in your response, refer to the Pagination section to retrieve all the log items in paginated form

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| logUid | String | Yes | — | The log uid. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();C
all&lt;ResponseBody&gt; response = organisation.LogItem("logUid").execute();
if (response.isSuccessful){
	System.out.println("Response"+ response)
}
```
