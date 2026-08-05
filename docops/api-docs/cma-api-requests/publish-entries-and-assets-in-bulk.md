---
title: "Publish entries and assets in bulk"
description: /bulk/publish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}
url: /publish-entries-and-assets-in-bulk
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:23.606Z
updated_at: 2026-07-20T16:51:48.773Z
---

# Publish entries and assets in bulk

<p>The <span class="code">Publish entries and assets in bulk</span> request allows you to publish multiple entries and assets at the same time.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.bulk-operations:publish</span> scope.</p>
<div class="note"><strong>Note:</strong>
  <ul>
    <li>At a time, you can publish <strong>10 entries</strong> in <strong>10 languages</strong> and in <strong>10 environments</strong>.</li>
    <li>Additionally, <a href="/docs/headless-cms/about-nested-reference-publishing/" target="self">nested references</a> can be published up to <strong>five </strong>levels deep with all parent entries at the same time by passing <span data-type='inlineCode'>api_version</span> as <strong>3.2</strong> in the <strong>Headers</strong> section.</li>
  </ul>
</div>
<p>In the 'Body' section, you need to specify the locales (mention the locale codes) and environments (mention the names) to which you want to publish the entries or assets. If you do not specify a source locale, the entries or assets will be published in the master locale automatically.</p>
<p class="tip"><strong>Tip</strong>: To schedule the publishing of multiple entries and/or assets, you can make use of the <a href="/docs/developers/apis/content-management-api#create-a-release" target="_self">Create a Release</a> request. Then, you can deploy this Release and all of the pinned items can be published together either immediately or at a scheduled time to whatever environment you choose.</p>
<p>Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, locales in which the entries&nbsp;are present, and the version&nbsp;(you need to specify the entry versions when schedule publishing) that you want to publish. Within the ‘assets’ parameter, pass these details of each entry – asset UIDs and the version that you want to publish (optional).</p>
<p class="note"><strong>Note</strong>: The <span class="code">version</span> parameter must be passed as an integer in the request body. For example, <span class="code">version: 2</span>.</p>
<p>If some of the entries added to the bulk publish request do not satisfy the applied <a href="/docs/developers/set-up-workflows-and-publish-rules/about-publish-rules" target="_self">publish rules</a>, then all the items will not be published. To publish at least the items that satisfy the publish rules, pass additional query parameters, <span class="code">skip_workflow_stage_check=true</span> and <span class="code">approvals=true</span>.</p>
<p>Let's understand how these two query parameters work while publishing entries.</p>
<p>When you use <span class="code">skip_workflow_stage_check=true</span> as a query parameter, the entries that satisfy the publish rules are sent for publishing, while those entries that have not yet reached the workflow stage defined for the set publish rules will not be sent for publishing. However, if you set this parameter to <span class="code">false</span> and some of the entries included in the bulk publish request have not yet reached the workflow stage defined for the set publish rules, then all the entries selected will not be sent for publishing.</p>
<p>When you use <span class="code">approvals=true</span> as a query parameter, the entries that satisfy the publish rules are sent for publishing, while those entries that have not yet received authorization from the approver assigned to them will not be sent for publishing. However, if you set this parameter to <span class="code">false</span> and some of the entries included in the bulk publish request have not yet received authorization from the approver assigned to them, then all the entries selected will not be sent for publishing.</p>

**API Endpoint**: `/bulk/publish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}`

**Method**: `POST`

## Query Parameters

- **skip_workflow_stage_check** (optional)
  <p>Set this to 'true' to publish the entries that are at a workflow stage where they satisfy the applied publish rules.</p>
- **approvals** (optional)
  <p>Set this to 'true' to publish the entries that do not require an approval to be published.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>
- **api_version** (required)
  <p> Enter the API version to enable Nested Reference Publishing.</p>

## Request Body

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

## Response

```json
{
   "notice":"Your bulk publish request is in progress. Please check publish queue for more details.",
   "job_id":"00906443-2ba3-420e-a3bd-2b6b4cd7c5745"
}
```

