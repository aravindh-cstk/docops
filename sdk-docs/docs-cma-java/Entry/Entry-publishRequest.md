---
title: "publishRequest "
description: "The publishRequest method allows you to either send a publish request or accept/reject a received publish request. Request Structure Headers: Include the API Key (stack identifier) and Auth Token (authentication). Body Parameters: uid – Publish rule identifier action – \"publish\", \"unpublish\", or \"both\" status – 0 (Approval Requested), 1 (Approval Accepted), -1 (Approval Rejected) notification\\_settings – Controls notification triggers comment – Optional note for the approver"
url: "https://www.contentstack.com/java-management-entry-publishrequest"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## publishRequest 

The publishRequest method allows you to either send a publish request or accept/reject a received publish request.

**Request Structure**

**Headers:** Include the API Key (stack identifier) and Auth Token (authentication).

**Body Parameters:**

- uid – Publish rule identifier
- action – "publish", "unpublish", or "both"
- status – 0 (Approval Requested), 1 (Approval Accepted), -1 (Approval Rejected)
- notification_settings – Controls notification triggers
- comment – Optional note for the approver

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| publishing_rule |  JSONObject | Yes | — | Details for the publishing rule |

Returns:
Type
Call<ResponseBody>

```
import contentstack
Contentstack contentstack = new Contentstack.Builder().setAuthtoken("AUTHTOKEN").build();
String publishRequestPayload = "{\n" +
" \"workflow\": {\n" +
" \"publishing_rule\": {\n" +
" \"uid\": \"rule_uid\",\n" +
" \"action\": \"publish\",\n" +
" \"status\": 1,\n" +
" \"notify\": true,\n" +
" \"comment\": \"Approve this entry.\"\n" +
" }\n" +
" }\n" +
"}";
JSONParser parser = new JSONParser();
JSONObject body = (JSONObject) parser.parse(publishRequestPayload);
Entry entry = contentstack.stack(API_KEY,MANAGEMENT_TOKEN).contentType(contenttype).entry(entry_uid);
Response<ResponseBody> response = entry.publishRequest(body).execute();
if (response.isSuccessful()) {
System.out.println("Response" + response.body().string());
} else {
System.out.println("Error Body" + response.errorBody().string());
}
```
