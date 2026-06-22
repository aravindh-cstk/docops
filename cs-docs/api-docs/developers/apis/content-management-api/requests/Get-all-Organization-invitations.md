---
title: "Get all Organization invitations"
description: GET /organizations/{organization_uid}/share?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&include_roles={boolean_value}&include_invited_by={boolean_value}&include_user_details={boolean_value}&typeahead={value}
url: developers/apis/content-management-api/requests/get-all-organization-invitations
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get all Organization invitations


**Method:** `GET`  
**Endpoint:** `/organizations/{organization_uid}/share?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&include_roles={boolean_value}&include_invited_by={boolean_value}&include_user_details={boolean_value}&typeahead={value}`

The Get all organization invitations call gives you a list of all the Organization invitations. Only the owner or the admin of the Organization can resend the invitation to add users to an Organization.

When executing the API call, provide the Organization UID.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken of the user. |

| organization_uid | blt4001c00ea0ddf287 | Enter the UID of the Organization of which you want to retrieve the list of sent invitations. |

| limit | 1 | The ‘limit’ parameter will return a specific number of sent organization invitations in the output. Example, if 10 invitations were sent out and you wish to fet |

| skip | 2 | The ‘skip’ parameter will skip a specific number of organization roles in the output. Example, if there are 12 organization roles and you want to skip the last  |

| asc | created_at | The ‘asc’ parameter allows you to sort the list of organization invitations in ascending order on the basis of a specific parameter. |

| desc | update_at | The ‘desc’ parameter allows you to sort the list of organization invitations in descending order on the basis of a specific parameter. |

| include_count | true | The ‘include_count’ parameter returns the total number of organization invitations sent out. Example: If you wish to know the total number of organization invit |

| include_roles | true | The ‘include_roles’ parameter, when set to ‘true’, will display the details of the roles that are assigned to the user in an organization. |

| include_invited_by | true | The ‘include_invited_by’ parameter, when set to ‘true’, includes the details of the user who sent out the organization invitation. |

| include_user_details | true | The ‘include_user_details’ parameter, when set to ‘true’, lets you know whether the user who has been sent the organization invitation has enabled Two-factor Au |

| typeahead | Aravind | The ‘typeahead’ parameter allows you to perform a name-based search on all the stacks on an organization based on the value provided. For example, it allows you |

**Response (200):**

```json
{
    "shares": [
        {
            "uid": "bltcbccc241b3a4da1c352f8cec",
            "email": "aravind.kumar+1@raweng.com",
            "user_uid": "blt65a26b0aae48223c7ead5c30",
            "message": "Test Message",
            "org_uid": "bltad182661f48a9afe1d00cdc2",
            "org_roles": [
                "blt3733b2ca83073f4c71a41caf"
            ],
            "invited_by": "bltf9252892ba54cfc0811eb745",
            "invited_at": "2017-09-17T19:46:48.990Z",
            "status": "accepted",
            "created_at": "2017-09-17T19:46:48.982Z",
            "update_at": "2017-09-17T19:46:48.982Z"
        },
        {
            "uid": "bltb01c45c6c8e9326b6ba94caf",
            "email": "aravind.kumar+3@raweng.com",
            "user_uid": "blt3a17bcc7c0ec0930caedccf2",
            "message": "Test Message",
            "org_uid": "bltad182661f48a9afe1d00cdc2",
            "org_roles": [
                "blt3733b2ca83073f4c71a41caf"
            ],
            "invited_by": "bltf9252892ba54cfc0811eb745",
            "invited_at": "2017-09-17T19:46:48.992Z",
            "status": "pending",
            "created_at": "2017-09-17T19:46:48.983Z",
            "update_at": "2017-09-17T20:24:22.440Z"
        }
    ],
    "count": 3
}
```
