---
title: "Unpublish entries and assets in bulk"
description: POST /bulk/unpublish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}
url: developer-apis/content-management-api-requests/unpublish-entries-and-assets-in-bulk
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Unpublish entries and assets in bulk

**POST** `/bulk/unpublish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}`

The Unpublish entries and assets in bulk request allows you to unpublish multiple entries and assets at the same time.   
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:unpublish scope.

**Note**: At a time, you can unpublish **10** entries in **10** languages and on **10** environments. Additionally, you can pass api_version as **3.2** in the **Headers** section to get logs of your unpublish task as per the new nested flow.

In the 'Body' section, you need to specify the locales (mention the locale codes) and environments (mention the names) to which you want to unpublish the entries or assets. If you do not specify a source locale, the entries or assets will be unpublished in the master locale automatically.

**Tip**: To schedule the unpublishing of multiple entries and/or assets, you can make use of the ‘[Create a Release](../../../../api-detail/content-management-api.md#create-a-release)’ request. Then, you can deploy this Release and all of the pinned items can be unpublished together either immediately or at a scheduled time to whatever environment you choose.

Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, locales in which the entries are present, and the version that you want to unpublish. Within the ‘assets’ parameter, pass these details of each entry – asset UIDs and the version that you want to unpublish (optional).

If some of the entries added to the bulk unpublish request do not satisfy the applied [publish rules](../../../../../cs-docs/developers/set-up-workflows-and-publish-rules/about-publish-rules.md), then all the items will not be unpublished. To unpublish at least the items that satisfy the publish rules, pass additional query parameters, skip_workflow_stage_check=true and approvals=true.

Let's understand how these two query parameters work while unpublishing entries.

When you use skip_workflow_stage_check=true as a query parameter, the entries that satisfy the publish rules are sent for unpublishing, while those entries that have not yet reached the workflow stage defined for the set publish rules will not be sent for unpublishing. However, if you set this parameter to false and some of the entries included in the bulk unpublish request have not yet reached the workflow stage defined for the set publish rules, then all the entries selected will not be sent for unpublishing.

When you use approvals=true as a query parameter, the entries that satisfy the publish rules are sent for unpublishing, while those entries that have not yet received authorization from the approver assigned to them will not be sent for unpublishing. However, if you set this parameter to false and some of the entries included in the bulk unpublish request have not yet received authorization from the approver assigned to them, then all the entries selected will not be sent for unpublishing.

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
- **api_version** (optional)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`

## Sample Request

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

## Sample Response

```json
{
    "notice": "Your bulk unpublish request is in progress. Please check publish queue for more details.",
    "job_id": "24bdfd068-95b2-4fbd-c47a-365e0534dcb3"
}
```

