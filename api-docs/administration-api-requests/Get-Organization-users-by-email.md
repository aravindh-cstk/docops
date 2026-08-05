---
title: "Get Organization users by email"
description: /organizations/{organization_uid}/share/search
url: /get-organization-users-by-email
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:05.688Z
updated_at: 2026-04-07T12:55:05.688Z
---

# Get Organization users by email

<p>The <span data-type='inlineCode'>Get Organization users by email</span> request retrieves information about users within an organization based on their email addresses.</p>
<p>When executing the API request, you need to provide the organization UID. In the request body, you need to enter the email IDs of the users whose details you want to retrieve from the mentioned organization, like as follows:</p><pre>{<br />    "emails":["abc@sample.com", "xyz@sample.com", …]<br />}</pre>
<p class="note"><strong>Note:</strong> If you do not pass the request body, you will get the details of all the users in the Organization.</p>

**API Endpoint**: `/organizations/{organization_uid}/share/search`

**Method**: `POST`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of the Organization of which you want to retrieve the list of users.</p>

## Query Parameters

- **include_roles** (optional)
  <p>The <span data-type='inlineCode'>include_roles</span> parameter, when set to “true,” will display the details of the roles that are assigned to the organization users.</p>
- **include_user_details** (optional)
  <p>The <span data-type='inlineCode'>include_user_details</span> parameter, when set to “true,” lets you know whether the user has enabled Two-factor Authentication or not.</p>
- **include_count** (optional)
  <p>The <span data-type='inlineCode'>include_count</span> parameter returns the total number of organization users. Example: If you wish to know the total number of organization invitations, you need to mention “true.”</p>
- **limit** (optional)
  <p>The <span data-type='inlineCode'>limit</span> parameter will return a specific number of organization users in your output. Example, if you want to retrieve details of 10 users and you wish to fetch only the first 5, you need to specify “5” as the value in this parameter.</p>
- **skip** (optional)
  <p>The <span data-type='inlineCode'>skip</span> parameter will skip a specific number of organization users in your output. Example, if you want to retrieve details of 10 users and you wish to skip the latest 5, you need to specify “5” as the value in this parameter.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>

## Request Body

```json
{
    "emails":["abc@sample.com"]
}
```

## Response

```json
{
    "shares": [
        {
            "uid": "blt1231231231231231",
            "email": "abc@sample.com",
            "user_uid": "blteaf2e44ba211bb3f",
            "message": "",
            "org_uid": "blt3213213213213213",
            "org_roles": [
                "blt2132132132132132"
            ],
            "invited_by": "blt1321321321321321",
            "invited_at": "2023-10-13T12:17:02.473Z",
            "status": "accepted",
            "acceptance_token": "blt1112223331231231",
            "created_at": "2023-10-13T12:17:02.468Z",
            "updated_at": "2023-10-13T12:17:25.670Z"
        }
    ]
}
```

