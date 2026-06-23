---
title: "Administration | Teams"
description: Create, update, fetch, and manage administration teams for organizing users and access across Contentstack.
url: https://www.contentstack.com/docs/administration-teams
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Administration | Teams

Teams, simplifies role and permission management by grouping users. Instead of assigning roles individually or at the stack level, you can directly assign roles to a team. This ensures that all team members share the same set of role permissions.

## Get all teams

### Get all teams

**GET** `/organizations/{organization_uid}/teams`

The Get all teams request returns comprehensive information of all the teams available in your organization.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`

#### Query Parameters

- **includeUserDetails** (optional)
  Set this parameter to “true” to include the details of users in the response.
  Default: `true`
- **asc** (optional)
  Sort the response in ascending order.
  Default: `created_at`
- **desc** (optional)
  Sort the response in descending order.
  Default: `created_at`
- **typeahead** (optional)
  Retrieves responses that match the provided string.
  Default: `sample`
- **limit** (optional)
  Enter the maximum number of teams to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of teams to be skipped from the response body.
  Default: `2`
- **user_uid** (optional)
  Enter the user UIDs in string format, separated by commas, for filtering.
  Default: `user_uid_1, user_uid_2`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **api_version** (required)
  Enter the API version.
  Default: `1.1`

#### Sample Response

```json
{
    "count": 2,
    "teams": [
        {
            "_id": "65b*****************e9a",
            "name": "Team A",
            "createdAt": "2024-02-01T09:55:46.703Z",
            "createdBy": "blt**************f0",
            "updatedAt": "2024-02-01T09:56:36.724Z",
            "updatedBy": "blt**************f0",
            "organizationUid": "blt**************b5",
            "users": [
                "blt**************a0",
                "blt**************8d",
                "blt**************21"
            ],
            "stackRoleMapping": [
                {
                    "stackApiKey": "blt**************74",
                    "roles": [
                        "blt**************37"
                    ]
                },
                {
                    "stackApiKey": "blt**************fe",
                    "roles": [
                        "blt**************32"
                    ]
                }
            ],
            "organizationRole": "blt**************8d",
            "__v": 0,
            "uid": "65b*****************e9a",
            "createdByUserName": "Jane Doe",
            "updatedByUserName": "Jane Doe"
        },
        {
            "_id": "65b*****************892",
            "name": "Sample Team",
            "createdAt": "2024-01-31T11:52:27.049Z",
            "createdBy": "blt**************f0",
            "updatedAt": "2024-01-31T11:52:27.049Z",
            "updatedBy": "blt**************f0",
            "organizationUid": "blt**************b5",
            "users": [],
            "stackRoleMapping": [],
            "organizationRole": "blt**************8d",
            "__v": 0,
            "uid": "65b*****************892",
            "createdByUserName": "Jane Doe",
            "updatedByUserName": "Jane Doe"
        }
    ]
}
```




## Get a single team

### Get a single team

**GET** `/organizations/{organization_uid}/teams/{team_uid}`

The Get a single team request returns comprehensive information of a specific team available in a particular organization.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-management-api#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

#### Query Parameters

- **includeUserDetails** (optional)
  Set this parameter to “true” to include the details of users in the response.
  Default: `true`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

#### Sample Response

```json
{
    "_id": "65b******************e9a",
    "name": "Sample Team",
    "createdAt": "2024-02-01T09:55:46.703Z",
    "createdBy": "blt**************f0",
    "updatedAt": "2024-02-01T09:56:36.724Z",
    "updatedBy": "blt**************f0",
    "organizationUid": "blt**************b5",
    "users": [
        "blt**************a0",
        "blt**************8d",
        "blt**************21"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************37"
            ]
        },
        {
            "stackApiKey": "blt**************fe",
            "roles": [
                "blt**************32"
            ]
        }
    ],
    "organizationRole": "blt**************8d",
    "__v": 0,
    "uid": "65b******************e9a",
    "createdByUserName": "Sample User",
    "updatedByUserName": "Sample User"
}
```




## Create a team

### Create a team

**POST** `/organizations/{organization_uid}/teams`

The Create a team request creates a team in the specified organization.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`

#### Query Parameters

- **includeUserDetails** (optional)
  Set this parameter to “true” to include the details of users in the response.
  Default: `true`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "name": "Team A",
    "users": ["blt**************a0"],
    "stackRoleMapping": [{
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        }],
    "organizationRole": "blt**************c5"
}
```

#### Sample Response

```json
{
    "_id": "65b*******************11",
    "name": "Team A",
    "createdAt": "2024-02-01T11:01:33.399Z",
    "createdBy": "blt**************f0",
    "updatedAt": "2024-02-01T11:01:33.399Z",
    "updatedBy": "blt**************f0",
    "organizationUid": "blt**************b5",
    "users": [
        "blt**************a0"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        }
    ],
    "organizationRole": "blt**************c5",
    "__v": 0,
    "uid": "65b*******************11",
    "createdByUserName": "Jane Doe
    "updatedByUserName": "Jane Doe"
}
```




## Update a team

### Update a team

**PUT** `/organizations/{organization_uid}/teams/{team_uid}`

The Update a team request is used to modify details, such as adding or removing users from a team, assigning or removing stack roles within a team, updating team descriptions, and updating organization roles for an existing team within a specific organization.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team you want to update. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-management-api#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

#### Query Parameters

- **includeUserDetails** (optional)
  Set this parameter to “true” to include the details of users in the response.
  Default: `true`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "name": "Team A",
    "users": [
        {
            "email": "john.doe@contentstack.com"
        }
    ],
    "organizationRole": "blt**************8d",
    "stackRoleMapping": [
        {
            "roles": [
                "blt**************f6"
            ],
            "stackApiKey": "blt**************74"
        }
    ]
}
```

#### Sample Response

```json
{
    "_id": "65b******************e9a",
    "name": "Team A",
    "createdAt": "2024-02-01T09:55:46.703Z",
    "createdBy": "blt**************f0",
    "updatedAt": "2024-02-01T11:06:35.107Z",
    "updatedBy": "blt**************f0",
    "organizationUid": "blt**************b5",
    "users": [
        "blt**************21"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        }
    ],
    "organizationRole": "blt**************8d",
    "__v": 0,
    "uid": "65b******************e9a",
    "createdByUserName": "Jane Doe",
    "updatedByUserName": "Jane Doe"
}
```




## Delete a team

### Delete a team

**DELETE** `/organizations/{organization_uid}/teams/{team_uid}`

The Delete a team request deletes an existing team along with all its associated users and assigned roles.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team you want to update. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-management-api#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`




## Users

All accounts registered with Contentstack are known as [Users](/docs/developers/invite-users-and-assign-roles/about-stack-users). An organization can have many users with varying permissions and roles.

##### Get all users of team

### Get all users of team

**GET** `/organizations/{organization_uid}/teams/{team_uid}/users`

The Get all users of team request retrieves information about all the users associated with a particular team.

Additionally, you can also set the query parameters: includeUserDetails or include_count to true to include user details and the count of users in the response.

##### Add users to team

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-management-api#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

#### Query Parameters

- **includeUserDetails** (optional)
  Set this parameter to “true” to include the details of users in the response.
  Default: `true`
- **include_count** (optional)
  Set this parameter to “true” to include the total count of users in the response.
  Default: `true`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

#### Sample Response

```json
{
    "users": [
        {
            "uid": "blt**************f0",
            "username": "jane_blt6266157b",
            "email": "jane.doer@contentstack.com",
            "firstName": "Jane",
            "lastName": "Doer",
            "active": true,
            "orgInvitationStatus": "accepted"
        },
        {
            "uid": "blt**************8d",
            "username": "john_blt28057039",
            "email": "john.doe@contentstack.com",
            "firstName": "John",
            "lastName": "Doe",
            "active": true,
            "orgInvitationStatus": "accepted"
        },
        {
            "uid": "blt**************21",
            "username": "jane_blt9d1e076e",
            "email": "jane.doe@contentstack.com",
            "firstName": "Jane",
            "lastName": "Doe",
            "active": true,
            "orgInvitationStatus": "accepted"
        },
        {
            "uid": "blt**************a0",
            "username": "sample_blt03a1b0ad",
            "email": "sample.user@contentstack.com",
            "firstName": "Sample",
            "lastName": "User",
            "active": true,
            "orgInvitationStatus": "accepted"
        }
    ],
    "count": 4
}
```


### Add users to team

**POST** `/organizations/{organization_uid}/teams/{team_uid}/users`

The Add users to team request allows you to send invitations to add users and assign them organizational and stack roles.

**Note**: Only the Owner or the Admin of the organization can add users to a team.

You need to pass the email IDs of the users in the request body as follows:

```
{
    "emails": [ "user1@contentstack.com", "user2@contentstack.com"]
}
```

##### Remove a user from team

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-management-api#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "emails":["john.doe@contentstack.com", "jane.doe@contentstack.com"]
}
```


### Remove a user from team

**DELETE** `/organizations/{organization_uid}/teams/{team_uid}/users/{user_uid}`

The Remove a user from team request allows you to remove an existing user from a particular team.

**Note**: Only the Owner or the Admin of the organization can remove users from a team.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-management-api#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`
- **user_uid** (required)
  Enter the UID of the user you want to remove from the team. The UID of a user is unique across an organization. Execute the [Get all users of team](/docs/developers/apis/content-management-api#get-all-users-of-team) request to retrieve the UID of a user.
  Default: `user_uid`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`




## Stack Role Mapping

When adding users to a team, you have the option to simultaneously assign roles for the available stacks within the organization. This process involves mapping stack roles for all the users added to the team.

##### Get all stack role mapping

### Get all stack role mapping

**GET** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings`

The Get all stack role mapping request allows you to retrieve details of all associated stacks for a specified team in your organization.

##### Add a stack role mapping

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-management-api#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

#### Sample Response

```json
{
    "stackRoleMappings": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        },
        {
            "stackApiKey": "blt**************fe",
            "roles": [
                "blt**************3a"
            ]
        }
    ]
}
```


### Add a stack role mapping

**POST** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings`

The Add a stack role mapping request allows you to associate users from a specified team with the available stacks in your organization.

You need to pass the API key of the stack and the role UIDs in the request body as follows:

```
{
    "stackApiKey": "stack_api_key",
    "roles": [
        "role_one_uid",
        "role_two_uid"
    ]
}
```

##### Update a stack role mapping

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-management-api#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "stackApiKey": "blt**************74",
    "roles": [
        "blt**************f6",
        "blt**************37"
    ]
}
```

#### Sample Response

```json
{
    "stackRoleMapping": {
        "stackApiKey": "blt**************74",
        "roles": [
            "blt**************f6",
            "blt**************37"
        ]
    }
}
```


### Update a stack role mapping

**POST** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}`

The Update a stack role mapping request allows you to update the stack roles for a specific stack in your organization. You need to pass the role UIDs in the request body as follows:

```
{
    "roles": [
        "role_uid"
    ]
}
```

##### Remove a stack role mapping

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-management-api#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`
- **stack_api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "roles": [
        "blt**************48",
        "blt**************f4"
    ]
}
```

#### Sample Response

```json
{
    "stackRoleMapping": {
        "stackApiKey": "blt**************74",
        "roles": [
            "blt**************48",
            "blt**************f4"
        ]
    }
}
```


### Remove a stack role mapping

**DELETE** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}`

The Remove a stack role mapping request allows you to delete the associations of team users for a specified stack in your organization.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-management-api#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`
- **stack_api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

