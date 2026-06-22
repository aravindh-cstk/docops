---
title: "Get all Organizations"
description: GET /organizations?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&typeahead={value_to_be_searched}
url: developers/apis/content-management-api/requests/get-all-organizations
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get all Organizations


**Method:** `GET`  
**Endpoint:** `/organizations?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&typeahead={value_to_be_searched}`

The Get all organizations call lists all organizations related to the system user in the order that they were created.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken of the user. |

| limit | 1 | The ‘limit’ parameter will return a specific number of entries in the output. Example, if there are 10 organizations and you wish to fetch only the first 2, you |

| skip | 1 | The ‘skip’ parameter will skip a specific number of organizations in the output. Example, if there are 12 organizations and you want to skip the first 2 to get  |

| asc | created_at | The ‘asc’ parameter allows you to sort the list of organizations in the ascending order with respect to the value of a specific field. |

| desc | update_at | The ‘desc’ parameter allows you to sort the list of Organizations in the descending order with respect to the value of a specific field. |

| include_count | true | The ‘include_count’ parameter returns the total number of organizations related to the user. Example: If you wish to know the total number of organizations, you |

| typeahead | Contentstack | The typeahead parameter is a type of filter that allows you to perform a name-based search on all organizations based on the value provided. Example, if we have |

**Response (200):**

```json
{
  "organizations":[
    {
      "uid":"blt6a6f6666ab666aa6",
      "name":"Sample",
      "plan_id":"cms_plan",
      "owner_uid":"blt1f1cddeaefbefdd111b11111",
      "expires_on":"2029-12-31T00:00:00.000Z",
      "enabled":true,
      "is_over_usage_allowed":true,
      "created_at":"2016-05-31T06:30:40.993Z",
      "updated_at":"2019-05-24T10:26:41.861Z",
      "settings":{
        "sso":{
          "id":"sample-sso",
          "strict":true,
          "session_timeout":12,
          "sso_roles":{
            "enabled":false
          },
          "saml":{
            "acs_url":"https://app.contentstack.com/api/sso/saml2/sample-sso",
            "entity_id":"https://app.contentstack.com",
            "version":2,
            "name_id_format":"Email Address",
            "attributes":[
              "email",
              "first_name",
              "last_name"
            ]
          }
        }
      }
    },
    {
      "uid":"blt4444c44ea4ddf444",
      "name":"Sample2",
      "plan_id":"testing",
      "owner_uid":"blt22e22222d22d2f22222a2b2f",
      "is_transfer_set":false,
      "expires_on":"2020-01-31T00:00:00.000Z",
      "enabled":true,
      "is_over_usage_allowed":true,
      "created_at":"2016-09-30T05:08:10.076Z",
      "updated_at":"2019-04-18T08:45:57.936Z",
      "settings":{
        "sso":{
          "sso_roles":{
            "enabled":false
          }
        }
      },
      "owner":true
    }
  ]
}
```
