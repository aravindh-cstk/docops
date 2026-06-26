---
title: "Get Details of All Versions of an Asset"
description: GET /assets/{asset_uid}/versions?named={boolean_value}&include_count={boolean_value}&include_updated_at={boolean_value}&include_updated_by={boolean_value}
url: developer-apis/content-management-api-requests/get-details-of-all-versions-of-an-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-04-28
---

# Get Details of All Versions of an Asset

**GET** `/assets/{asset_uid}/versions?named={boolean_value}&include_count={boolean_value}&include_updated_at={boolean_value}&include_updated_by={boolean_value}`

The Get Details of All Versions of an Asset request returns comprehensive information of all the versions of a specific asset within your stack.

**Note**:

- The _version_name field is included in the response only if a name has been assigned to that version. To assign a version name, use the Set Version Name for Asset request.
- When using OAuth, ensure your application includes the cm.asset:read scope to access this endpoint.

##### Delete Version Name of Asset

## URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset of which you want to retrieve details of all versions.
  Default: `blt04d762f8af902c97`

## Query Parameters

- **named** (optional)
  Set this parameter to 'true' to include in response only the named versions of the specified asset.
  Default: `false`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total number of versions of the specified asset.
  Default: `true`
- **include_updated_at** (optional)
  Set this parameter to 'true' to include in response the timestamps for when each version was updated.
  Default: `true`
- **include_updated_by** (optional)
  Set this parameter to 'true' to include in response the UID of the user who updated each version.
  Default: `true`

## Headers

- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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

