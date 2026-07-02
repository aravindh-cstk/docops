---
title: "setWorkflowStage"
description: "The setWorkflowStage method allows you to set or update the workflow stage of an entry."
url: "https://www.contentstack.com/java-management-entry-setworkflowstage"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setWorkflowStage

The setWorkflowStage method allows you to set or update the workflow stage of an entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| workflow |  JSONObject | Yes | — | Details for the workflow stage |

Returns:
Type
Call<ResponseBody>

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
String workflowStagePayload = "{\n" + 
" \"workflow\": {\n" + 
" \"workflow_stage\": {\n" + 
" \"comment\": \"WorkflowComment\",\n" + 
" \"due_date\": \"Thu Dec 01 2018\",\n" + 
" \"notify\": false,\n" + 
" \"uid\": \"workflow_stage_uid\",\n" + 
" \"assigned_to\": [\n" + 
" {\n"+ 
" \"uid\": \"user_uid\",\n" + 
" \"name\": \"Username\",\n" + 
" \"email\": \"user_email_id\"\n" + 
" }\n" + 
" ],\n" + 
" \"assigned_by_roles\": [\n" + 
" {\n" + 
" \"uid\": \"role_uid\",\n" + 
" \"name\": \"Rolename\"\n" + 
" }\n" + 
" ]\n" + 
" }\n" +
" }\n" + "}";
JSONParser parser = new JSONParser();
JSONObject body = (JSONObject) parser.parse(workflowStagePayload);
Entry entry = contentstack.stack(API_KEY,MANAGEMENT_TOKEN).contentType(contenttype).entry(entry_uid);
Response<ResponseBody> response = entry.setWorkflowStage(body).execute();
if (response.isSuccessful()) {
System.out.println("Response" + response.body().string());
} else {
System.out.println("Error Body" + response.errorBody().string());
}
```
