---
title: "Get all automations"
description: /v1/projects/{project_uid}/automations?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&show_steps={boolean_value}
url: /get-all-automations
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T12:07:33.162Z
updated_at: 2024-03-11T05:02:51.334Z
---

# Get all automations

<p>The <span class="code">Get all automations</span> request returns comprehensive information of all the automations created in a project.</p>
<p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.automations:read</span> scope.</p>
<p>To get a list of automations that are active, you need to pass the <span class="code">query={'active':'true'}</span> parameter.</p>
<p class="note"><strong>Note:</strong> If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.</p>

**API Endpoint**: `/v1/projects/{project_uid}/automations?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&show_steps={boolean_value}`

**Method**: `GET`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID of the project.</p>

## Query Parameters

- **limit** (optional)
  <span>The “limit” parameter will return a specific number of automations (in between 0-100) in your response based on the value you provide. If there are 100 automations and you want to fetch only 30 automations, set the limit as 30.</span>
- **skip** (optional)
  <span>The “skip” parameter will skip a specific number of automations and return the remaining ones in your response based on the value you provide. If there are 12 automations and you want to exclude the first 2 automations, set this to 2 to fetch the remaining 10 automations.</span>
- **asc** (optional)
  <span>The “asc” parameter allows you to sort the list of automations in the ascending order with respect to the value of a specific field. The automations can be sorted by <em>created_at</em>, <em>title</em>, and <em>updated_at </em>values.</span>
- **desc** (optional)
  <span>The “desc” parameter allows you to sort the list of automations in the descending order with respect to the value of a specific field. The automations can be sorted by <em>created_at</em>, <em>title</em>, and <em>updated_at </em>values.</span>
- **include_count** (optional)
  <span>Set this to “true” to include the total number (count) of automations present in a project accessible in an organization.</span>
- **show_steps** (optional)
  <p>Set this to “true” to return all the steps, triggers associated with each automation in a project.</p>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;">Authentication</span></a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>

## Response

```json
{
    "rules": [
        {
            "id": "345ae3c033c643***f34fe90032eaaad",
            "title": "ChatGPT",
            "description": "",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "org_id": "blt4051c65****df287",
            "user_id": "blt762406d****c6b33",
            "active": true,
            "updated_by": "blt762406****1c6b33",
            "throttle": false,
            "created_at": "2024-02-22T11:32:24.309Z",
            "updated_at": "2024-02-22T12:12:08.109Z"
        },
        {
            "id": "b5b0a755a51d4***81d0968fe19a5f62",
            "title": "ChatGPT Test 2",
            "description": "",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "org_id": "blt4051c6***6ddf287",
            "user_id": "blt76240****71c6b33",
            "active": false,
            "updated_by": "blt76240****71c6b33",
            "throttle": false,
            "created_at": "2024-02-22T12:12:24.422Z",
            "updated_at": "2024-02-22T12:12:24.422Z"
        }
    ]
}
```

