---
title: "Publish entries and assets in bulk"
description: POST /bulk/publish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}
url: developers/apis/content-management-api/requests/publish-entries-and-assets-in-bulk
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-04
---

# Publish entries and assets in bulk

**POST** `/bulk/publish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}`

The Publish entries and assets in bulk request allows you to publish multiple entries and assets at the same time.

To configure the permissions for your application via OAuth, please include the cm.bulk-operations:publish scope.

**Note:**
  

- At a time, you can publish 10 entries in 10 languages and in 10 environments.
- Additionally, nested references can be published up to five levels deep with all parent entries at the same time by passing api_version as 3.2 in the Headers section.

In the 'Body' section, you need to specify the locales (mention the locale codes) and environments (mention the names) to which you want to publish the entries or assets. If you do not specify a source locale, the entries or assets will be published in the master locale automatically.

**Tip**: To schedule the publishing of multiple entries and/or assets, you can make use of the [Create a Release](../../../../api-detail/content-management-api.md#create-a-release) request. Then, you can deploy this Release and all of the pinned items can be published together either immediately or at a scheduled time to whatever environment you choose.

Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, locales in which the entries are present, and the version (you need to specify the entry versions when schedule publishing) that you want to publish. Within the ‘assets’ parameter, pass these details of each entry – asset UIDs and the version that you want to publish (optional).

**Note**: The version parameter must be passed as an integer in the request body. For example, version: 2.

If some of the entries added to the bulk publish request do not satisfy the applied [publish rules](../../../../../cs-docs/developers/set-up-workflows-and-publish-rules/about-publish-rules.md), then all the items will not be published. To publish at least the items that satisfy the publish rules, pass additional query parameters, skip_workflow_stage_check=true and approvals=true.

Let's understand how these two query parameters work while publishing entries.

When you use skip_workflow_stage_check=true as a query parameter, the entries that satisfy the publish rules are sent for publishing, while those entries that have not yet reached the workflow stage defined for the set publish rules will not be sent for publishing. However, if you set this parameter to false and some of the entries included in the bulk publish request have not yet reached the workflow stage defined for the set publish rules, then all the entries selected will not be sent for publishing.

When you use approvals=true as a query parameter, the entries that satisfy the publish rules are sent for publishing, while those entries that have not yet received authorization from the approver assigned to them will not be sent for publishing. However, if you set this parameter to false and some of the entries included in the bulk publish request have not yet received authorization from the approver assigned to them, then all the entries selected will not be sent for publishing.

## Query Parameters

- **skip_workflow_stage_check** (optional)
  Set this to 'true' to publish the entries that are at a workflow stage where they satisfy the applied publish rules.
  Default: `true`
- **approvals** (optional)
  Set this to 'true' to publish the entries that do not require an approval to be published.
  Default: `true`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (required)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`

## Sample Request

```json
{
   "entries":[
      {
         "uid":"blt0e0945888fb09dea",
         "content_type":"ct0",
         "version": 5,
         "locale":"en-us"
      },
      {
         "uid":"bltabb69092b8d45ff7",
         "content_type":"ct0",
         "version": 1,
         "locale":"en-us"
      },
      {
         "uid":"blt5eb4637f09f0ac3e",
         "content_type":"ct5",
         "version": 2,
         "locale":"en-us"
      }
   ],
   "locales":[
      "en-us"
   ],
   "environments":[
      "env1"
   ],
   "rules":{
      "approvals":"true/false"
   },
   "scheduled_at":"scheduled_time",
   "publish_with_reference":true
}
```

## Sample Response

```json
{
   "notice":"Your bulk publish request is in progress. Please check publish queue for more details.",
   "job_id":"00906443-2ba3-420e-a3bd-2b6b4cd7c5745"
}
```

