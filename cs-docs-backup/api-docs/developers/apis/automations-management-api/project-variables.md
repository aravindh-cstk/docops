---
title: "Automations Management API | Project Variables"
description: Create, update, fetch, and manage project variables used by Contentstack Automations workflows.
url: https://www.contentstack.com/docs/developers/apis/automations-management-api/project-variables
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Automations Management API | Project Variables



## Get All Project Variables

### Get all project variables

**GET** `/v1/projects/{project_uid}/variables?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get all project variables request returns comprehensive information of all the project variables defined in a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

#### URL Parameters

- **project_uid** (required)
  Default: `05732fe9f7d6454791715b09a3792f52`

#### Query Parameters

- **limit** (optional)
  The “limit” parameter will return a specific number of project variables (in between 0-100) in your response based on the value you provide. If there are 100 project variables and you want to fetch only 30 project variables, set the limit as 30.
  Default: `30`
- **skip** (optional)
  The “skip” parameter will skip a specific number of project variables and return the remaining ones in your response based on the value you provide. If there are 12 project variables and you want to exclude the first 2 project variables, set this to 2 to fetch the remaining 10 project variables.
  Default: `2`
- **asc** (optional)
  The “asc” parameter allows you to sort the list of project variables in the ascending order with respect to the value of a specific field. The project variables can be sorted by _created_at_and _updated_at_values.
  Default: `created_at`
- **desc** (optional)
  The “desc” parameter allows you to sort the list of project variables in the descending order with respect to the value of a specific field. The project variables can be sorted by _created_at_and _updated_at_values.
  Default: `created_at`
- **include_count** (optional)
  Set this to “true” to include the total number (count) of project variables in an organization.
  Default: `true`

#### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter your Organization UID.
  Default: `your_organization_uid`

#### Sample Response

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




## Get a Single Project Variable

### Get a single project variable

**GET** `/v1/projects/{project_uid}/variables/{variable_uid}`

The Get a single project variable request fetches a specific project variable defined in a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:read scope.

#### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **variable_uid** (required)
  Enter the UID of the project variable.
  Default: `f7bbf2d9cb894b5aa34b3d28603ae174`

#### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

#### Sample Response

```json
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
```




## Create a Project Variable

### Create a project variable

**POST** `/v1/projects/{project_uid}/variables`

The Create a project variable request lets you create a project variable in a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:write scope.

#### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`

#### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "key": "Key3",
    "type": "text",
    "value": "password@1234"
}
```

#### Sample Response

```json
{
    "key": "Key3",
    "value": "password@1234",
    "org_id": "blt******5ea6ddf287",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "type": "text",
    "created_at": "2024-02-22T13:38:36.439Z",
    "updated_at": "2024-02-22T13:38:36.439Z",
    "id": "bd0ce37910cb4172b844308aa07e6bf7"
}
```




## Update a Project Variable

### Update a project variable

**PUT** `/v1/projects/{project_uid}/variables/{variable_uid}`

The Update a project variable request lets you update the key, value and type of a project variable.

To configure the permissions for your application via OAuth, include the automationhub.variables:write scope.

#### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **variable_uid** (required)
  Enter the UID of the project variable.
  Default: `bd0ce37910cb4172b844308aa07e6bf7`

#### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "key": "Key3",
    "type": "text",
    "value": "abcd@1234"
}
```

#### Sample Response

```json
{
    "key": "Key3",
    "value": "abcd@1234",
    "org_id": "blt******5ea6ddf287",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "type": "text",
    "created_at": "2024-02-22T13:38:36.439Z",
    "updated_at": "2024-02-22T13:42:23.560Z",
    "id": "bd0ce37910cb4172b844308aa07e6bf7"
}
```




## Delete a Project Variable

### Delete a project variable

**DELETE** `/v1/projects/{project_uid}/variables/{variable_uid}`

The Delete a project variable request lets you delete a specific project variable from a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:write scope.

#### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **variable_uid** (required)
  Enter the UID of the project variable.
  Default: `bd0ce37910cb4172b844308aa07e6bf7`

#### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

#### Sample Response

```json
{
    "message": "Project variable deleted successfully."
}
```

