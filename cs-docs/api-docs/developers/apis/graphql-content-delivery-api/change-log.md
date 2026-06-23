---
title: "GraphQL | Change Log"
description: Review GraphQL Content Delivery API changes, updates, and version notes for Contentstack developers.
url: https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/change-log
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Change Log

#### February 25, 2022 - Ability to Fetch Branch-specific Content

Contentstack GraphQL API now allows you to fetch content that belongs to a specific branch in your stack. To do so, you can pass the branch ID as the value of the branch key in the header of the API request.

You can [query our sample stack](../../../api-detail/graphql-content-delivery-api/explorer.md) to fetch data present across different branches.

#### July 17, 2021 - Removal of GraphQL Beta Support

##### Notice

- Post GraphQL GA availability since 29th Jan 2021, our team has maintained backward compatibility to support the GraphQL Beta version to prevent our client from facing breaking changes. The notice period of the support initially was 30 days, yet the team continued to support the same until 16th July 2021. Since 16th July, our team has completely switched off support for GraphQL Beta.
- To migrate to our GraphQL GA from Beta, kindly refer to the API breaking changes section given below.

##### API Breaking Changes

- You can now filter the GraphQL query response (list of entries) based on referenced fields that lie only up to three levels deep. If the referenced content type specified in the "where" argument lies more than three levels deep in the reference hierarchy, you will receive the following error message:

```
{
  "errors": [
    {
      "message": "Failed to fetch items",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "all_abcd"
      ],
      "extensions": {
          "errors": [
            {
              "code": "REF_FILTER_DEPTH_EXCEEDED",
              "message": "Query filtering failed.",
              "details": {
                "hint": "Query filter's reference depth exceeded the depth allowed for your org."
              }
            }
          ]
      }
    }
  ],
  "data": {
    "all_abcd": null
  }
}
```

#### January 29, 2021 - GraphQL General Availability (GA)

The Contentstack GraphQL Content Delivery API is now **generally available (GA)** and can be used for production apps. This release brings some solid improvements as well as introduces certain breaking changes. However, to ensure your code doesn’t break, we will continue to support the Limited Availability version of the API for **30 days** post this release. You need to incorporate these changes within the given duration to avoid schema build errors.

**Note**: When running GraphQL API requests, we strongly recommend that you pass the access_token key in the header. Post the 30-day allotted period, we will block any use of access tokens in the query parameters.

- The Contentstack GraphQL API now has a rate limit of 80 requests per second per organization for uncached GraphQL requests. There is no limit on the requests that fetch content from our CDN cache.
- [Breaking] Contentstack GraphQL API now prefixes all asset related GraphQL typenames with ‘SysAsset’ instead of “Asset”. Here is a list of the GraphQL definition changes:
      ‘Asset’ to ‘SysAsset’
- ‘AssetWhere’ to ‘SysAssetWhere’
- ‘AssetConnection’ to ‘SysAssetConnection’
- ‘AssetEdge’ to ‘SysAssetEdge’
- ‘AllAssets’ to ‘AllSysAsset’
- ‘AssetSystemField’ to ‘SysAssetSystemField’
- ‘AssetDimension’ to ‘SysAssetDimension’
- ‘AssetDimensionWhere’ to ‘SysAssetDimensionWhere’
- ‘AssetOrderBy’ to ‘SysAssetOrderBy’
- ‘TransformUrl’ to ‘SysAssetTransformUrl
- ‘ImageFormats’ to ‘SysAssetImageFormats’
- ‘DisableValues’ to ‘SysAssetDisableValues’
- ‘FitValues’ to ‘SysAssetFitValues’
- ‘OrientValues’ to ‘SysAssetOrientValues’
- ‘OverlayAlignValues’ to ‘SysAssetOverlayAlignValues’
- ‘OverlayRepeatValues’ to ‘SysAssetOverlayRepeatValues’
- ‘AutoValues’ to ‘SysAssetAutoValues’
- ‘DispositionValues’ to ‘SysAssetDispositionValues’

  
  **[Breaking]** Contentstack GraphQL API now returns the x-resolver-cost response header that specifies the total number of database calls needed to retrieve data for a specific API request.
  Contentstack GraphQL API now safeguards against malicious queries by running **query cost analysis**, i.e., it calculates the total number of database calls a specific query will attempt to fetch desired data. This static analysis helps avoid hitting the database server with queries that request an excessive amount of data.

#### July 23, 2020 - GraphQL Beta

##### Deprecation

- Access tokens should now be passed via the header and not in the query parameters of the API request. The new Contentstack GraphQL API endpoint will look as follows:https://graphql.contentstack.com/stacks/{stack_api_key}?environment={environment_name}

##### API Breaking Changes

- You can no longer fetch Reference field data using the traditional Reference UID based syntax. Contentstack GraphQL API now uses relay specification logic to traverse through the schema of a Reference field.The change in the Reference field syntax is as follows:
    
      
        
          

| Reference Field Type | Old | New |
| --- | --- | --- |
| Single Content Type Referencing | ```
query {
  all_product {
    total
    items {
      categories {
        title
      }
    }
  }
}
``` | ```
query {
  all_product {
    total
    items {
      categoriesConnection {
        totalCount
        edges {
          node {
            title
          }
        }
      }
    }
  }
}
``` |
| Multiple Content Type Referencing | ```
query {
  all_product {
    items {
      home_appliances {
        ... on Electronics {
          title
          appliance_details
        }
        ... on KitchenAppliances {
          title
          kitchen_appliance_details
        }
      }
    }
  }
}
``` | ```
query {
  all_product {
    items {
      home_appliancesConnection {
        edges {
          node {
            ... on Electronics {
              title
              appliance_details
            }
            ... on KitchenAppliances {
              title
              kitchen_appliance_details
            }
          }
        }
      }
    }
  }
}
``` |

        
      
    
    Note: If a Reference field with an old query schema is marked as “Multiple”, then you will be able to use the skip and limit parameters to paginate the response returned by this field.
- You can no longer fetch asset information by specifying the asset UID in the query. Contentstack’s GraphQL API now uses relay specification to fetch asset data.The change in the syntax is as follows:
    
      
        
          

| Old | New |
| --- | --- |
| ```
query {
  all_product {
    items {
      title
      images {
        title
        description
      }
    }
  }
}
``` | ```
query {
  all_product {
    items {
      title
      imagesConnection {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  }
}
``` |

        
      
    
    Note: You can use the skip and limit parameters while querying assets that have been marked as “Multiple”.
- The error messages now provide comprehensive information that helps debug the errors efficiently. Read more about Errors in GraphQL.
- After this release, you will be able to fetch only 25 items (entries/assets) from the root-level content types by default. For more information, contact our Support team.
- Changes in the GraphQL definition:
      The Where condition type for Global fields, Group fields, and Modular Blocks fields has changed from {NestedFieldUid}Filter to {NestedFieldUid}Where
- The Assets type has changed to Asset
- The {ContentTypeUID}.system._content_type_uid type has changed to {ContentTypeUID}.system.content_type_uid
- The Asset.system._content_type_uid system field previously returned built_io_upload, but will now return sys_assets
- The GraphQL scalar type for Date fields has changed from ISODate to DateTime

  
  You can no longer use the ‘Order by Asc’ and ‘Order by Desc’ operators on any top-level fields. After this release, you will be able to use these operators only on the following system-generated fields:

- Created at
- Updated at

  

#### January 24, 2020 - GraphQL Alpha 3

The following types of referenced entries will no longer return comprehensive details in the response body of their GraphQL API requests:

- Referenced entries that have been deleted
- Referenced entries that are not published
- Referenced entries that refer to content types other than the first 100 available

If the Reference field has been marked as "Multiple", then the query will return an empty array. While, a Reference field of the type "Single" will be returned as null.

So, consider for instance that the "Branches" Reference field is of "Single" type while the "Managers" Reference field has been marked as "Multiple". While fetching references, unpublished (draft) or deleted referenced entries OR referenced entries whose content types have failed to load (100 content types limit) will no longer appear in the API response body.

The following table displays the changes in the API response body:

  
    
      

| Old | New |
| --- | --- |
| ```
{
    "items": [{
        "branches": ["bltxyz1232bamln"],
        "managers": ["bltxyz1232bamln", "bltbacc1232bamln"] // field type: multiple
    }]
}
``` | ```
{
    "items": [
        {
            "branches": null,
            "managers": []
        }
    ]
}
``` |

    
  

#### March 29, 2019 - GraphQL Alpha 2

- Contentstack GraphQL API now allows you to fetch fields of an entry based on asset data. To know more about this, refer the Get Entries by Referenced Asset section.
- Contentstack GraphQL API now uses the same format that GraphQL deploys to show error messages. The following table displays the changes in the error specifications used in GraphQL Alpha 2:
    
      
        
          

| Old Error Response | New Error Response |
| --- | --- |
| ```
{
  "errors": [
    {
      "api_key": [
        "is not valid"
      ]
    }
  ],
  "message": "Failed to run query"
}
``` | ```
{
  "errors": [
    {
      "message": "Failed to run query.",
      "extensions": {
        "errors": [
          {
            "api_key": [
              "is not valid"
            ]
          }
        ],
        "statusCode": 412
      }
    }
  ]
}
``` |
