---
title: "Get Details of All Versions of an Asset"
description: /assets/{asset_uid}/versions?named={boolean_value}&include_count={boolean_value}&include_updated_at={boolean_value}&include_updated_by={boolean_value}
url: /get-details-of-all-versions-of-an-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.711Z
updated_at: 2025-04-28T07:35:14.082Z
---

# Get Details of All Versions of an Asset

<p><p>The <span data-type='inlineCode'>Get Details of All Versions of an Asset</span> request returns comprehensive information of all the versions of a specific asset within your stack.</p></p><div class="note"><strong>Note</strong>:<ul><li>The <span data-type='inlineCode'>_version_name</span> field is included in the response only if a name has been assigned to that version. To assign a version name, use the <a href="/docs/developers/apis/content-management-api#set-version-name-for-asset" target="_self">Set Version Name for Asset</a> request.</li><li>When using OAuth, ensure your application includes the <span data-type='inlineCode'>cm.asset:read</span> scope to access this endpoint.</li></ul></div><h5>Delete Version Name of Asset</h5>

**API Endpoint**: `/assets/{asset_uid}/versions?named={boolean_value}&include_count={boolean_value}&include_updated_at={boolean_value}&include_updated_by={boolean_value}`

**Method**: `GET`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the UID of the asset of which you want to retrieve details of all versions.</p>

## Query Parameters

- **named** (optional)
  <p>Set this parameter to 'true' to include in response only the named versions of the specified asset.</p>
- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total number of versions of the specified asset.</p>
- **include_updated_at** (optional)
  <p>Set this parameter to 'true' to include in response the timestamps for when each version was updated.</p>
- **include_updated_by** (optional)
  <p>Set this parameter to 'true' to include in response the UID of the user who updated each version.</p>

## Headers

- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **Content-Type** (required)
  <p>Pass application/json value.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

