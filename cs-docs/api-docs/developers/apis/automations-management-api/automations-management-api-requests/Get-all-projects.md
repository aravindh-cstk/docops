---
title: "Get all projects"
description: GET /v1/projects?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}
url: developers/apis/automations-management-api/requests/get-all-projects
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Get all projects

**GET** `/v1/projects?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get all projects request returns comprehensive information of all the projects related to the Organization in which they are created.

To configure the permissions for your application via OAuth, include the automationhub.projects.management:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

## Query Parameters

- **limit** (optional)
  The “limit” parameter will return a specific number of projects (in between 0-100) in your response based on the value you provide. If there are 100 projects and you want to fetch only 30 projects, set the limit as 30.
  Default: `30`
- **skip** (optional)
  The “skip” parameter will skip a specific number of projects and return the remaining ones in your response based on the value you provide.  If there are 12 projects and you want to exclude the first 2 projects, set this to 2 to fetch the remaining 10 projects.
  Default: `2`
- **asc** (optional)
  The “asc” parameter allows you to sort the list of projects in the ascending order with respect to the value of a specific field. The projects can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **desc** (optional)
  The “desc” parameter allows you to sort the list of projects in the descending order with respect to the value of a specific field. The projects can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **include_count** (optional)
  Set this to “true” to include the total number (count) of projects in an organization.
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
    "projects": [
        {
            "title": "demo 14dec",
            "description": "",
            "user_id": "bltb71****0e9b7facc",
            "org_id": "bltc14f1***7416061b",
            "shared": [
                "blt82dbdb***5e144b53"
            ],
            "tags": [],
            "updated_by": "bltb712****e9b7facc",
            "type": "standard",
            "created_at": "2024-02-04T13:44:35.265Z",
            "updated_at": "2024-02-04T14:20:22.442Z",
            "id": "bbc469d1f445482****cae6b358479d0",
            "created_by": {
                "uid": "bltb7128*****9b7facc",
                "username": "test1_bltc0ec3c96",
                "email": "sample_user1@example.com",
                "firstName": "John",
                "lastName": "Doe",
                "active": true
            }
        },

        {
            "title": "Demo",
            "description": "",
            "user_id": "bltb712****e9b7facc",
            "org_id": "bltc14f1****416061b",
            "shared": [],
            "tags": [
                "testing"
            ],
            "updated_by": "bltb7128****9b7facc",
            "type": "standard",
            "created_at": "2024-01-31T06:39:54.994Z",
            "updated_at": "2024-01-31T06:39:54.994Z",
            "id": "f2065bad17f24****9faba08539b2753",
            "created_by": {
                "uid": "bltb7128***e9b7facc",
                "username": "test2_bltc0ec3c96",
                "email": "sample_user2@example.com",
                "firstName": "John",
                "lastName": "Smith",
                "active": true
            }
        }
          
    ] 
}
```

