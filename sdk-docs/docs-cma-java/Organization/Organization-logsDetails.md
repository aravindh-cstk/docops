---
title: "logsDetails"
description: "The \"Get Organization log details\" request is used to retrieve the audit log details of an organization Tip : This request returns only the first 25 audit log items of the specified organization. If you get more than 25 items in your response, refer to the Pagination section to retrieve all the log items in paginated form."
url: "https://www.contentstack.com/java-management-organization-logsdetails"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## logsDetails

The "Get Organization log details" request is used to retrieve the audit log details of an organization

**Tip**: This request returns only the first 25 audit log items of the specified organization. If you get more than 25 items in your response, refer to the Pagination section to retrieve all the log items in paginated form.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
Call&lt;ResponseBody&gt; response = organisation.logsDetails().execute();
if (response.isSuccessful){
	System.out.println("Response"+ response)
}
```
