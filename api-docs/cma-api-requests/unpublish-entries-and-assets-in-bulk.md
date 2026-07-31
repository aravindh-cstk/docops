---
title: "Unpublish entries and assets in bulk"
description: /bulk/unpublish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}
url: /unpublish-entries-and-assets-in-bulk
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:59.854Z
updated_at: 2024-03-21T13:12:14.145Z
---

# Unpublish entries and assets in bulk

<p>The <span class="code">Unpublish entries and assets in bulk</span> request allows you to unpublish multiple entries and assets at the same time. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span><span data-type='inlineCode'>cm.bulk-operations:unpublish</span></span> scope.</p><p class="note"><strong>Note</strong>: At a time, you can unpublish <strong>10</strong> entries in <strong>10</strong> languages and on <strong>10</strong> environments.&nbsp;Additionally, you can pass api_version as <strong>3.2</strong> in the <strong>Headers</strong> section to get logs of your unpublish task as per the new nested flow.</p><p>In the 'Body' section, you need to specify the locales (mention the locale codes) and environments (mention the names) to which you want to unpublish the entries or assets. If you do not specify a source locale, the entries or assets will be unpublished in the master locale automatically.</p><p class="tip"><strong>Tip</strong>: To schedule the unpublishing of multiple entries and/or assets, you can make use of the ‘<a href="/docs/developers/apis/content-management-api/#create-a-release" target="_self">Create a Release</a>’ request. Then, you can deploy this Release and all of the pinned items can be unpublished together either immediately or at a scheduled time to whatever environment you choose.</p><p>Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, locales in which the entries are present, and the version that you want to unpublish. Within the ‘assets’ parameter, pass these details of each entry – asset UIDs and the version that you want to unpublish (optional).</p><p>If some of the entries added to the bulk unpublish request do not satisfy the applied <a href="/docs/developers/set-up-workflows-and-publish-rules/about-publish-rules" target="_self">publish rules</a>, then all the items will not be unpublished. To unpublish at least the items that satisfy the publish rules, pass additional query parameters, <span class="code">skip_workflow_stage_check=true</span> and <span class="code">approvals=true</span>.</p><p>Let's understand how these two query parameters work while unpublishing entries.</p><p>When you use <span class="code">skip_workflow_stage_check=true</span> as a query parameter, the entries that satisfy the publish rules are sent for unpublishing, while those entries that have not yet reached the workflow stage defined for the set publish rules will not be sent for unpublishing. However, if you set this parameter to <span class="code">false</span> and some of the entries included in the bulk unpublish request have not yet reached the workflow stage defined for the set publish rules, then all the entries selected will not be sent for unpublishing.</p><p>When you use <span class="code">approvals=true</span> as a query parameter, the entries that satisfy the publish rules are sent for unpublishing, while those entries that have not yet received authorization from the approver assigned to them will not be sent for unpublishing. However, if you set this parameter to <span class="code">false</span> and some of the entries included in the bulk unpublish request have not yet received authorization from the approver assigned to them, then all the entries selected will not be sent for unpublishing.<br /></p>

**API Endpoint**: `/bulk/unpublish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}`

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
- **api_version** (optional)
  <p>Enter the API version to enable Nested Reference Publishing.</p>

## Request Body

```json
{
  "entries": [
    {
      "content_type": "news",
      "uid": "bhs12565525612",
      "locale": "en-us"
    },
    {
      "content_type": "article",
      "uid": "bjhcud11787212",
      "locale": "en-us"
    }
  ],
  "workflow": {
    "workflow_stage": {
      "comment": "String Comment",
      "due_date": "Thu Dec 01 2018",
      "notify": false,
      "uid": "bueyr8723823",
      "assigned_to": [
        {
          "uid": "bhgt28726372",
          "name": "user_name",
          "email": "user_email_ID"
        }
      ],
      "assigned_by_roles": [
        {
          "uid": "gsshgs27627361",
          "name": "Content Manager"
        }
      ]
    }
  },
  "locales": [
    "en-us"
  ],
  "environments": [
    "{{env_uid}}"
  ]
}
```

## Response

```json
{
    "notice": "Your bulk unpublish request is in progress. Please check publish queue for more details.",
    "job_id": "24bdfd068-95b2-4fbd-c47a-365e0534dcb3"
}

```

