---
title: "CMA | Bulk Operations"
description: Run and monitor bulk operations for Contentstack entries and assets through management endpoints.
url: https://www.contentstack.com/docs/developer-apis/content-management-api/bulk-operations
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Bulk Operations

You can perform bulk operations such as [Add to Release](../../../../cs-docs/content-managers/author-content/bulk-add-to-release.md), [Publish](../../../../cs-docs/content-managers/author-content/bulk-publish-entries.md), [Unpublish](../../../../cs-docs/content-managers/author-content/bulk-unpublish-entries.md), and [Delete](../../../../cs-docs/content-managers/author-content/bulk-delete-entries.md) on multiple entries or assets, or [Change the Workflow Details](../../../../cs-docs/content-managers/author-content/update-entry-workflow-details-in-bulk.md) of multiple entries or assets at the same time.

**Additional Resource**: You can also learn how to [perform bulk operations on search results](../../../../cs-docs/content-managers/search-content/about-bulk-operations-on-search-results.md).

**Points to keep in mind**:

- Each bulk publish API request publishes a maximum of 10 items per request, if the Bulk Publish feature is part of your plan. So, for example, if you publish 100 items, you need to make 10 Bulk API requests.
- Bulk actions do not follow the standard CMA rate limit of 10 requests per second. The default rate limit for bulk actions is 1 request per second i.e., in one second you can make only one bulk publish API request.
- Mentioning the version number of the entries is optional. If you don't specify the version number, the latest version of the entries will be published or unpublished.
- Bulk publishing of entries of all locals is not supported. However, you can specify the locales as an array (en-us, fr-fr, zh-zh, and so on) against the ‘locale’ parameter to get them published.

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

## Bulk Add to Release

### Bulk Add to Release

**POST** `/bulk/release/items`

The Bulk Add to Release request allows you to add multiple entries and assets to a release, making content preparation for deployment more efficient and ensuring smooth, coordinated publishing.

In the 'Body' section, specify the release UID, action parameter which determines whether the release should be set for publish or unpublish, and the locale for the entries. Set the reference parameter to true to include referenced items.

The items parameter should include an array of objects, each with content type UIDs, entry UIDs, locales (optional), version (optional), and the entry title.

**Note**: Locales specified in the items parameter will override those in the request body. If no locales are provided for each entry, the locale mentioned in the request body will be used. You can also set the action parameter for each entry to publish or unpublish.

For each asset, provide the title, asset UID, set the content_type_uid to sys_assets, and optionally include the version you want to publish. Your request body will look as follows:

```
{
            "title": "Asset title",
            "uid": "blt**************46",
            "content_type_uid": "sys_assets",
            "version": 1
        }
```

Once the API request is executed, a job ID is generated in the response. You can use this job ID to track the status of your add to release request in [Get Stack Bulk Task Queue](../../../api-detail/content-management-api.md#get-stack-bulk-task-queue).

**Note**: Pass bulk_version as 2.0 in the Headers section.

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (optional)
  Enter application/json to pass a request body.
  Default: `application/json`
- **bulk_version** (required)
  Pass the bulk_version header as 2.0 to allow bulk operation.
  Default: `2.0`

#### Sample Request

```json
{
    "release": "blt**************9d", 
    "action": "publish",
    "locale": [
        "en-us"
    ],
    "reference": true,
    "items": [
        {
            "content_type_uid": "ct_1",
            "uid": "blt**************46",
            "version": 2,
            "locale": "en-us",
            "title": "validation test"
        }
    ]
}
```

#### Sample Response

```json
{
    "job_id": "cs-13****15-5**a-42**-b**0-8f********a6",
    "notice": "Your add to release request is in progress."
}
```




## Bulk Publish Operation

### Publish entries and assets in bulk

**POST** `/bulk/publish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}`

The Publish entries and assets in bulk request allows you to publish multiple entries and assets at the same time.

To configure the permissions for your application via OAuth, please include the cm.bulk-operations:publish scope.

**Note:**
  

- At a time, you can publish 10 entries in 10 languages and in 10 environments.
- Additionally, nested references can be published up to five levels deep with all parent entries at the same time by passing api_version as 3.2 in the Headers section.

In the 'Body' section, you need to specify the locales (mention the locale codes) and environments (mention the names) to which you want to publish the entries or assets. If you do not specify a source locale, the entries or assets will be published in the master locale automatically.

**Tip**: To schedule the publishing of multiple entries and/or assets, you can make use of the [Create a Release](../../../api-detail/content-management-api.md#create-a-release) request. Then, you can deploy this Release and all of the pinned items can be published together either immediately or at a scheduled time to whatever environment you choose.

Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, locales in which the entries are present, and the version (you need to specify the entry versions when schedule publishing) that you want to publish. Within the ‘assets’ parameter, pass these details of each entry – asset UIDs and the version that you want to publish (optional).

**Note**: The version parameter must be passed as an integer in the request body. For example, version: 2.

If some of the entries added to the bulk publish request do not satisfy the applied [publish rules](../../../../cs-docs/developers/set-up-workflows-and-publish-rules/about-publish-rules.md), then all the items will not be published. To publish at least the items that satisfy the publish rules, pass additional query parameters, skip_workflow_stage_check=true and approvals=true.

Let's understand how these two query parameters work while publishing entries.

When you use skip_workflow_stage_check=true as a query parameter, the entries that satisfy the publish rules are sent for publishing, while those entries that have not yet reached the workflow stage defined for the set publish rules will not be sent for publishing. However, if you set this parameter to false and some of the entries included in the bulk publish request have not yet reached the workflow stage defined for the set publish rules, then all the entries selected will not be sent for publishing.

When you use approvals=true as a query parameter, the entries that satisfy the publish rules are sent for publishing, while those entries that have not yet received authorization from the approver assigned to them will not be sent for publishing. However, if you set this parameter to false and some of the entries included in the bulk publish request have not yet received authorization from the approver assigned to them, then all the entries selected will not be sent for publishing.

#### Query Parameters

- **skip_workflow_stage_check** (optional)
  Set this to 'true' to publish the entries that are at a workflow stage where they satisfy the applied publish rules.
  Default: `true`
- **approvals** (optional)
  Set this to 'true' to publish the entries that do not require an approval to be published.
  Default: `true`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (required)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`

#### Sample Request

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

#### Sample Response

```json
{
   "notice":"Your bulk publish request is in progress. Please check publish queue for more details.",
   "job_id":"00906443-2ba3-420e-a3bd-2b6b4cd7c5745"
}
```




## Bulk Unpublish Operation

### Unpublish entries and assets in bulk

**POST** `/bulk/unpublish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}`

The Unpublish entries and assets in bulk request allows you to unpublish multiple entries and assets at the same time.   
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:unpublish scope.

**Note**: At a time, you can unpublish **10** entries in **10** languages and on **10** environments. Additionally, you can pass api_version as **3.2** in the **Headers** section to get logs of your unpublish task as per the new nested flow.

In the 'Body' section, you need to specify the locales (mention the locale codes) and environments (mention the names) to which you want to unpublish the entries or assets. If you do not specify a source locale, the entries or assets will be unpublished in the master locale automatically.

**Tip**: To schedule the unpublishing of multiple entries and/or assets, you can make use of the ‘[Create a Release](../../../api-detail/content-management-api.md#create-a-release)’ request. Then, you can deploy this Release and all of the pinned items can be unpublished together either immediately or at a scheduled time to whatever environment you choose.

Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, locales in which the entries are present, and the version that you want to unpublish. Within the ‘assets’ parameter, pass these details of each entry – asset UIDs and the version that you want to unpublish (optional).

If some of the entries added to the bulk unpublish request do not satisfy the applied [publish rules](../../../../cs-docs/developers/set-up-workflows-and-publish-rules/about-publish-rules.md), then all the items will not be unpublished. To unpublish at least the items that satisfy the publish rules, pass additional query parameters, skip_workflow_stage_check=true and approvals=true.

Let's understand how these two query parameters work while unpublishing entries.

When you use skip_workflow_stage_check=true as a query parameter, the entries that satisfy the publish rules are sent for unpublishing, while those entries that have not yet reached the workflow stage defined for the set publish rules will not be sent for unpublishing. However, if you set this parameter to false and some of the entries included in the bulk unpublish request have not yet reached the workflow stage defined for the set publish rules, then all the entries selected will not be sent for unpublishing.

When you use approvals=true as a query parameter, the entries that satisfy the publish rules are sent for unpublishing, while those entries that have not yet received authorization from the approver assigned to them will not be sent for unpublishing. However, if you set this parameter to false and some of the entries included in the bulk unpublish request have not yet received authorization from the approver assigned to them, then all the entries selected will not be sent for unpublishing.

#### Query Parameters

- **skip_workflow_stage_check** (optional)
  Set this to 'true' to publish the entries that are at a workflow stage where they satisfy the applied publish rules.
  Default: `true`
- **approvals** (optional)
  Set this to 'true' to publish the entries that do not require an approval to be published.
  Default: `true`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (optional)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`

#### Sample Request

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

#### Sample Response

```json
{
    "notice": "Your bulk unpublish request is in progress. Please check publish queue for more details.",
    "job_id": "24bdfd068-95b2-4fbd-c47a-365e0534dcb3"
}
```




## Bulk Delete Operation

### Delete entries and assets in bulk

**POST** `/bulk/delete`

The Delete entries and assets in bulk request allows you to delete multiple entries and assets at the same time.  
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:delete scope.

**Note**: At a time, you can delete **100****entries** in a bulk delete request.

In the 'Body' section, you need to specify the content type UIDs, entry UIDs or asset UIDs, and locales of which the entries or assets you want to delete.

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
    "entries":[{
        "content_type":"{{content_type_uid}}",
        "uid":"{{entry_uid}}",
        "locale":"{{locale}}"
    },{
        "content_type":"{{content_type_uid}}",
        "uid":"{{entry_uid}",
        "locale":"{{entry_locale}}"
    }
    ],
     "assets": [{
         "uid": "{{uid}}"
     }]
}
```

#### Sample Response

```json
{
    "notice": "Your bulk delete request is in progress. Please check bulk task queue for more details."
}
```




## Bulk Update Workflow Details Operation

The ‘Change Workflow Details’ action is a new option that allows you to change workflow details (such as stage, assignee, due date, and comments) of multiple entries at the same time. 

**Additional Resource**: To know how you can change Workflow details of multiple entries at once, refer to the [Change Workflow Details of Entries in Bulk](../../../../cs-docs/content-managers/search-content/change-workflow-details-of-entries-in-bulk.md) article.

### Update workflow details in bulk

**POST** `/bulk/workflow`

The Update workflow details in bulk request allows you to update the workflow details for multiple entries at the same time.   
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:workflow scope.

**Note**: You can change the workflow stage of multiple entries only if all the entries have been assigned the same workflow stage and are associated with the same workflow.

In the 'Body' section, you need to provide the details of the workflow stage. Enter a comment for the assigned user, if needed; provide the due date; set notification settings to ‘true’, so that the specified user will be notified of it; enter the UID of the workflow stage; and finally, enter the user details, such as UID, name, and email address of the user.

**Note**: At a time, you can update the workflow details for **10** entries in a bulk update workflow details request. During the bulk update, if any one entry's workflow stage fails to update, then the workflow stage of all entries in the bulk operation will fail to update.

Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, and locales in which the entries are present.

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
    "entries": [{
        "content_type": "content_type_uid1",
        "uid": "entry_uid",
        "locale": "en-us"
    }, {
        "content_type": "content_type_uid2",
        "uid": "entry_uid",
        "locale": "en-us"
    }],
    "workflow": {
        "workflow_stage": {
            "comment": "Workflow-related Comments",
            "due_date": "Thu Dec 01 2018",
            "notify": false,
            "uid": "workflow_stage_uid",
            "assigned_to": [{
                "uid": "user_uid",
                "name": "user_name",
                "email": "user_email_id"
            }],
            "assigned_by_roles": [{
                "uid": "role_uid",
                "name": "role_name"
            }]
        }
    }
}
```

#### Sample Response

```json
{
"notice": "Your request to update workflow stage is complete."
}
```

