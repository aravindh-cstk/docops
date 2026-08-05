---
title: "Get all project variables"
description: /v1/projects/{project_uid}/variables?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}
url: /get-all-project-variables
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T13:47:02.731Z
updated_at: 2024-02-22T13:31:57.501Z
---

# Get all project variables

<p>The <span class="code">Get all project variables</span> request returns comprehensive information of all the project variables defined in a project.</p><p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.variables:read</span> scope.</p><p class="note"><strong>Note:</strong> If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.</p>

**API Endpoint**: `/v1/projects/{project_uid}/variables?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

**Method**: `GET`

## URL Parameters

- **project_uid** (required)

## Query Parameters

- **limit** (optional)
  <span>The “limit” parameter will return a specific number of project variables (in between 0-100) in your response based on the value you provide. If there are 100 project variables and you want to fetch only 30 project variables, set the limit as 30.</span>
- **skip** (optional)
  <span>The “skip” parameter will skip a specific number of project variables and return the remaining ones in your response based on the value you provide. If there are 12 project variables and you want to exclude the first 2 project variables, set this to 2 to fetch the remaining 10 project variables.</span>
- **asc** (optional)
  <span>The “asc” parameter allows you to sort the list of project variables in the ascending order with respect to the value of a specific field. The project variables can be sorted by <em>created_at </em>and <em>updated_at </em>values.</span><span data-type='inlineCode'></span>
- **desc** (optional)
  <span>The “desc” parameter allows you to sort the list of project variables in the descending order with respect to the value of a specific field. The project variables can be sorted by <em>created_at </em>and <em>updated_at </em>values.</span>
- **include_count** (optional)
  <span>Set this to “true” to include the total number (count) of project variables in an organization.
</span>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;"></span>Authentication</a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter your Organization UID.</p>

## Response

```json
{
    "variables": [
        {
            "key": "Key1",
            "value": "1234567",
            "org_id": "blt******5ea6ddf287",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "type": "text",
            "created_at": "2024-02-22T11:32:54.440Z",
            "updated_at": "2024-02-22T11:33:09.574Z",
            "id": "fe4c65e93a664948b24854277af477da"
        },
        {
            "key": "Key2",
            "value": "ENC_123456789014;2WjbDeWolmvVJVsm;vjFptQQq3+I/V27Uru97/g==;wKoBGVLgsw==",
            "org_id": "blt******5ea6ddf287",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "type": "password",
            "created_at": "2024-02-22T11:33:03.772Z",
            "updated_at": "2024-02-22T11:33:03.772Z",
            "id": "f7bbf2d9cb894b5aa34b3d28603ae174"
        }
    ]
}
```

