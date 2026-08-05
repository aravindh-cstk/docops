---
title: "Publish an entry with references"
description: /bulk/publish?x-bulk-action=publish
url: /publish-an-entry-with-references
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.796Z
updated_at: 2025-07-02T10:52:49.272Z
---

# Publish an entry with references

<p>The <span data-type='inlineCode'>Publish an Entry With References</span> request allows you to publish an entry along with all its references at the same time.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth, </span>please include the <span><span data-type='inlineCode'>cm.bulk-operations:publish</span></span> scope.</p><p class="note"><strong>Note:</strong> At a time, you can publish an entry in up to <strong>50 languages</strong> and on <strong>10 environments.</strong></p><p>In the “Body” section, you need to specify the following parameters:</p><ul><li><span data-type='inlineCode'>entries</span>: Pass the details of the main entry i.e., its entry UID, content type UID, the locale code, and the version that you want to publish.</li><li><span data-type='inlineCode'>locales</span>: Pass the locale codes in which you want to publish your entry and its references. If you do not specify a source locale, the entries will be published in the master locale automatically.</li><li><span data-type='inlineCode'>environments</span>: Pass the UIDs of the environments to which you want to publish the entries. You can get the UIDs from <a href="/docs/developers/apis/content-management-api#get-all-environments" target="_self"><span data-type='inlineCode'>Get all environments request</span></a><span data-type='inlineCode'>.</span></li></ul><p>Here are some additional parameters that you need to pass in the “Request Body”:</p><ul><li><span data-type='inlineCode'>"publish_with_reference": true</span>: Pass this parameter to publish an entry along with its references.<br /><p class="note"><strong>Note:</strong> Only <strong>one level</strong> of referenced entries will be published using this API Request.</p></li><li><span data-type='inlineCode'>skip_workflow_stage_check: true</span>: Pass this parameter to skip those entries that do not satisfy the workflow stage of their publishing rule(s) and publish the rest of them.<br /><p class="note"><strong>Note:</strong> Specifically applicable for Workflow enabled organizations, when this parameter is set to “false” and if any one of the entries fails to satisfy the set conditions, NONE of the entries will be sent for publishing.</p></li><li><span data-type='inlineCode'>approvals: true</span>: Pass this parameter to publish only those entries that have been approved by the designated approver, and skip the rest that have not yet been approved.<br /><p class="note"><strong>Note:</strong> Specifically applicable for Workflow enabled organizations, when this parameter is set to “false” and if any one of the entries is not approved by the Approver, NONE of the entries will be sent for publishing.</p></li></ul>

**API Endpoint**: `/bulk/publish?x-bulk-action=publish`

**Method**: `POST`

## Query Parameters

- **approvals** (optional)
  <p>Set this to “true” to publish the entries that do not require an approval to be published.</p>
- **x-bulk-action** (required)
  <p>Pass “publish” as the value of this parameter in order to publish an entry with all references.</p>
- **skip_workflow_stage_check** (optional)
  <p>Set this to “true” to publish the entries that are at a workflow stage where they satisfy the applied publish rules.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

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

## Response

```json
{
	"notice": "Your bulk publish request is in progress. Please check publish queue for more details."
}
```

