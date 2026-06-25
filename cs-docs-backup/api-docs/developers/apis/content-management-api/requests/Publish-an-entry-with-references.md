---
title: "Publish an entry with references"
description: POST /bulk/publish?x-bulk-action=publish
url: developers/apis/content-management-api/requests/publish-an-entry-with-references
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-02
---

# Publish an entry with references

**POST** `/bulk/publish?x-bulk-action=publish`

The Publish an Entry With References request allows you to publish an entry along with all its references at the same time.  
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:publish scope.

**Note:** At a time, you can publish an entry in up to **50 languages** and on **10 environments.**

In the “Body” section, you need to specify the following parameters:

- entries: Pass the details of the main entry i.e., its entry UID, content type UID, the locale code, and the version that you want to publish.
- locales: Pass the locale codes in which you want to publish your entry and its references. If you do not specify a source locale, the entries will be published in the master locale automatically.
- environments: Pass the UIDs of the environments to which you want to publish the entries. You can get the UIDs from Get all environments request.

Here are some additional parameters that you need to pass in the “Request Body”:

- "publish_with_reference": true: Pass this parameter to publish an entry along with its references.Note: Only one level of referenced entries will be published using this API Request.
- skip_workflow_stage_check: true: Pass this parameter to skip those entries that do not satisfy the workflow stage of their publishing rule(s) and publish the rest of them.Note: Specifically applicable for Workflow enabled organizations, when this parameter is set to “false” and if any one of the entries fails to satisfy the set conditions, NONE of the entries will be sent for publishing.
- approvals: true: Pass this parameter to publish only those entries that have been approved by the designated approver, and skip the rest that have not yet been approved.Note: Specifically applicable for Workflow enabled organizations, when this parameter is set to “false” and if any one of the entries is not approved by the Approver, NONE of the entries will be sent for publishing.

## Query Parameters

- **approvals** (optional)
  Set this to “true” to publish the entries that do not require an approval to be published.
  Default: `true`
- **x-bulk-action** (required)
  Pass “publish” as the value of this parameter in order to publish an entry with all references.
  Default: `publish`
- **skip_workflow_stage_check** (optional)
  Set this to “true” to publish the entries that are at a workflow stage where they satisfy the applied publish rules.
  Default: `true`

## Headers

- **api_key** (required)
  Default: `blt02f7b45378b008ee`
- **authtoken** (optional)
  Default: `your authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
	"entries": [{
		"uid": "{entry_uid}",
		"content_type": "{content_type_uid}",
		"version": 1,
		"locale": "{entry_locale_code}"
	}],
	"locales": [
		"{publish_locale}"
	],
	"environments": [
		"{environment_uid}"
	],
	"publish_with_reference": true,
	"skip_workflow_stage_check": true
}
```

## Sample Response

```json
{
	"notice": "Your bulk publish request is in progress. Please check publish queue for more details."
}
```

