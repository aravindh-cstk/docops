---
title: "Get Details of All Versions of an Asset"
description: GET /assets/{asset_uid}/versions?named={boolean_value}&include_count={boolean_value}&include_updated_at={boolean_value}&include_updated_by={boolean_value}
url: developers/apis/content-management-api/requests/get-details-of-all-versions-of-an-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-04-28
---

# Get Details of All Versions of an Asset


**Method:** `GET`  
**Endpoint:** `/assets/{asset_uid}/versions?named={boolean_value}&include_count={boolean_value}&include_updated_at={boolean_value}&include_updated_by={boolean_value}`

The Get Details of All Versions of an Asset request returns comprehensive information of all the versions of a specific asset within your stack.

**Note**:

- The _version_name field is included in the response only if a name has been assigned to that version. To assign a version name, use the Set Version Name for Asset request.
- When using OAuth, ensure your application includes the cm.asset:read scope to access this endpoint.

##### Delete Version Name of Asset

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| api_key | your_api_key | Enter the API key of your stack. |

| Content-Type | application/json | Pass application/json value. |

| branch | main | Enter your branch unique ID. |

| asset_uid | blt04d762f8af902c97 | Enter the UID of the asset of which you want to retrieve details of all versions. |

| named | false | Set this parameter to 'true' to include in response only the named versions of the specified asset. |

| include_count | true | Set this parameter to 'true' to include in response the total number of versions of the specified asset. |

| include_updated_at | true | Set this parameter to 'true' to include in response the timestamps for when each version was updated. |

| include_updated_by | true | Set this parameter to 'true' to include in response the UID of the user who updated each version. |

**Response (200):**

```json
{
    "versions": [
        {
            "_version": 2,
            "updated_at": "2025-04-24T09:03:13.496Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 1,
            "updated_at": "2025-04-24T09:00:59.720Z",
            "updated_by": "blt**************f3"
        }
    ],
    "count": 2
}
```
