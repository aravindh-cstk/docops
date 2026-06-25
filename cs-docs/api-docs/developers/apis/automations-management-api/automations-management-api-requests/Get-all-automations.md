---
title: "Get all automations"
description: GET /v1/projects/{project_uid}/automations?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&show_steps={boolean_value}
url: developers/apis/automations-management-api/requests/get-all-automations
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-11
---

# Get all automations

**GET** `/v1/projects/{project_uid}/automations?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&show_steps={boolean_value}`

The Get all automations request returns comprehensive information of all the automations created in a project.

To configure the permissions for your application via OAuth, include the automationhub.automations:read scope.

To get a list of automations that are active, you need to pass the query={'active':'true'} parameter.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

## URL Parameters

- **project_uid** (required)
  Enter the Project UID of the project.
  Default: `05732fe9f7d6454791715b09a3792f52`

## Query Parameters

- **limit** (optional)
  The “limit” parameter will return a specific number of automations (in between 0-100) in your response based on the value you provide. If there are 100 automations and you want to fetch only 30 automations, set the limit as 30.
  Default: `30`
- **skip** (optional)
  The “skip” parameter will skip a specific number of automations and return the remaining ones in your response based on the value you provide. If there are 12 automations and you want to exclude the first 2 automations, set this to 2 to fetch the remaining 10 automations.
  Default: `2`
- **asc** (optional)
  The “asc” parameter allows you to sort the list of automations in the ascending order with respect to the value of a specific field. The automations can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **desc** (optional)
  The “desc” parameter allows you to sort the list of automations in the descending order with respect to the value of a specific field. The automations can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **include_count** (optional)
  Set this to “true” to include the total number (count) of automations present in a project accessible in an organization.
  Default: `true`
- **show_steps** (optional)
  Set this to “true” to return all the steps, triggers associated with each automation in a project.
  Default: `true`

## Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

## Sample Response

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

