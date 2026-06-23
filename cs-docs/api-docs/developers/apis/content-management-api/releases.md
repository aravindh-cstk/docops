---
title: "CMA | Releases"
description: Create, update, fetch, deploy, and manage releases that group Contentstack entries and assets for publishing.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/releases
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Releases

You can pin a set of entries and assets (along with the deploy action, i.e., publish/unpublish) to a ‘release’, and then deploy this release to an environment. This will publish/unpublish all the items of the release to the specified environment. Read more about [Releases](/docs/content-managers/create-and-manage-releases).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

**Note**: Pass the release_version parameter as **2.0** in the Headers section if you have the latest release enabled for your organization. Reach out to our [support](mailto:support@contentstack.com) team for more information.

## Releases Collection

### Get all Releases

**GET** `/releases?include_count={boolean_value}&count={boolean_value}&include_items_count={boolean_value}&limit={limit_value}&skip={skip_value}`

The Get all Releases request retrieves a list of all Releases of a stack along with details of each Release. To configure the permissions for your application via OAuth, please include the cm.releases.management:read scope.

#### Query Parameters

- **include_count** (optional)
  The ‘include_count’ parameter includes the count of total number of releases in your stack, along with the details of each release. Example: If you want to know the total number of releases, you need to mention ‘true’ as the value of this parameter.
  Default: `false`
- **count** (optional)
  The ‘count’ parameter works similar to the ‘include_count’ parameter but returns ONLY the total count of releases in your stack and not the details of the releases in the response. Example: If you want to know the total number of releases in your stack, you need to mention ‘true’ as value for this parameter.
  Default: `true`
- **include_items_count** (optional)
  The ‘include_items_count’ parameter returns the total number of items in a specific release. Example: If you want to know the total number of items in a release, you need to mention ‘true’ as the value of this parameter.
  Default: `true`
- **limit** (optional)
  The ‘limit’ parameter will return a specific number of releases in the output. Example, if there are 10 releases and you want to fetch the  five latest updated releases, you need to specify '5' as value in this parameter.
  Default: `2`
- **skip** (optional)
  The ‘skip’ parameter will skip a specific number of releases in the response. Example: If there are 12 releases and you want to skip the first two updated releases to get only the next 10 in the response body, you need to specify ‘2’ here.
  Default: `2`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"releases": [{
		"name": "Release Name",
		"description": "2018-12-12",
		"uid": "blt123123bfc123fdd1",
		"created_by": "blt42e123123a2b1239f",
		"updated_by": "blt42e123123a2b1239f",
		"created_at": "2018-11-05T11:22:20.027Z",
		"updated_at": "2019-03-08T10:30:19.493Z",
		"locked": true,
		"status": [{
			"environment": "bltfd123123123123cb",
			"time": "2019-03-08T10:30:19.451Z",
			"status": "success",
			"user": "blt42e55757d70d5f81026a2b9f"
		}],
		"items_count": 10
	}]
}
```


### Get a single Release

**GET** `/releases/{release_uid}`

The Get a single Release request gets the details of a specific Release in a stack.

When executing the API request, provide the Release UID as parameter.

To configure the permissions for your application via OAuth, please include the cm.releases.management:read scope.

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release of which you want to retrieve the details.
  Default: `blt719af000dcde0000`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
    "release": {
        "uid": "bl***************38",
        "name": "Release Name",
        "description": "Fall Collection",
        "locked": false,
        "sys_version": 2,
        "created_at": "2025-04-04T08:41:52.729Z",
        "updated_at": "2025-07-24T10:34:29.852Z",
        "created_by": "bl***************8f",
        "updated_by": "bl***************2d",
        "status": [
            {
                "environment": "bl***************91",
                "status": "success",
                "user": "bl***************2d",
                "job_id": "7a78cb20-77b4-4bc5-93c0-092bcdde6c5a",
                "time": "2025-07-24T10:33:50.811Z"
            }
        ],
        "_deploy_latest": false,
        "items": [
            {
                "uid": "bl***************1a",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 2,
                "title": "Entry name",
                "variant_id": null
            },
            {
                "uid": "bl***************24",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 2,
                "title": "AI Innovation",
                "variant_id": null
            },
            {
                "uid": "bl***************10",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "blog",
                "version": 14,
                "title": "My First Blog",
                "variant_id": null
            },
            {
                "uid": "bl***************79",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 8,
                "title": "My first Article",
                "variant_id": null
            }
        ]
    }
}
```


### Create a Release

**POST** `/releases`

The Create a Release request allows you to create a new Release in your stack. To create a release, you need to provide the name of the release in the request body.

To configure the permissions for your application via OAuth, please include the cm.releases.management:write scope.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"release": {
		"name": "Release Name",
		"description": "2018-12-12",
		"locked": false,
		"archived": false
	}
}
```

#### Sample Response

```json
{
	"notice": "Release created successfully.",
	"release": {
		"name": "Release Name",
		"description": "2018-12-12",
		"locked": false,
		"uid": "blt123123aaa321321",
		"created_by": "blt123123123123123",
		"updated_by": "blt123123123123123",
		"created_at": "2017-12-12T12:12:12:122Z",
		"updated_at": "2017-12-12T12:12:12:122Z",
		"status": [],
               "_deploy_latest": false
	}
}
```


### Update a Release

**PUT** `/releases/{release_uid}`

The Update a Release call allows you to update the details of a Release, i.e., the ‘name’ and ‘description’.

When executing this API request, provide the Release UID as parameter. In the 'Body' section, you need to provide the new name and description of the Release that you want to update.

To configure the permissions for your application via OAuth, please include the cm.releases.management:write scope.

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to update the details of.
  Default: `blt719af000dcde0000`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "release": {
        "name": "Release Name",
        "description": "2018-12-22"
    }
}
```

#### Sample Response

```json
{
    "notice": "Release updated successfully.",
    "release": {
        "name": "Release Name",
        "description": "2018-12-22",
        "locked": false,
        "uid": "blt9dc98b5d9d4d1e4a",
        "created_by": "blta068b6e50264acf6",
        "updated_by": "blta068b6e50264acf6",
        "created_at": "2023-02-28T07:11:57.077Z",
        "updated_at": "2023-02-28T07:19:30.886Z",
        "status": [],
        "_deploy_latest": false
    }
}
```


### Delete a Release

**DELETE** `/releases/{release_uid}`

The Delete a Release request allows you to delete a specific Release from a stack.

When executing the API request, provide the Release UID.

To configure the permissions for your application via OAuth, please include the cm.releases.management:write scope.

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to delete.
  Default: `blt719af000dcde0000`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"notice": "Release deleted successfully."
}
```




## Release Items

### Get all items in a Release

**GET** `/releases/{release_uid}/items`

The Get all items in a Release request retrieves a list of all items (entries and assets) that are part of a specific Release.

When executing the API request, you need to provide the Release UID.

To configure the permissions for your application via OAuth, please include the cm.release:read scope.

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release of which you want to retrieve the items.
  Default: `blt719af000dcde0000`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
    "items": [
        {
            "action": "publish",
            "title": "Group",
            "uid": "blt63177c0f00f20b61",
            "locale": "en-us",
            "version": 2,
            "content_type_uid": "test_fields"
        },
        {
            "action": "publish",
            "title": "Modular Blocks",
            "uid": "bltcad3ea0479ffb274",
            "locale": "en-us",
            "version": 1,
            "content_type_uid": "test_fields"
        },
        {
            "action": "publish",
            "title": "File",
            "uid": "blt47a6d5202496b1da",
            "locale": "en-us",
            "version": 2,
            "content_type_uid": "test_fields"
        }
    ]
}
```


### Add a single item to a Release

**POST** `/releases/{release_uid}/item`

The Add a single item to a Release request allows you to add an item (entry or asset) to a Release.

When executing the API request, you need to provide the Release UID. In the 'Body' section, you need to provide the details of the item such as the UID, version (of the entry and asset), content type UID (of an entry), the action to be performed (publish/unpublish), and the locale of the item. To add the asset in the release, the content type should be passed as "content_type_uid": "built_io_upload" in the request body.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release in which you want to add an item.
  Default: `your_release_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"item": {
		"version": 1,
		"uid": "entry_or_asset_uid",
		"content_type_uid": "your_content_type_uid",
		"action": "publish",
		"locale": "en-us"
	}
}
```

#### Sample Response

```json
{
    "notice": "Item added to release successfully.",
    "release": {
        "name": "Release Name 2",
        "description": "2018-12-12",
        "locked": false,
        "items": [
            {
                "action": "publish",
                "title": "Sample1",
                "uid": "bltc24b029fc706fc8d",
                "locale": "en-us",
                "version": 1,
                "content_type_uid": "localization"
            }
        ],
        "uid": "bltfb07235c1e256728",
        "created_by": "bltf7b2fe26db42adc6",
        "updated_by": "bltf7b2fe26db42adc6",
        "created_at": "2023-02-22T10:30:10.032Z",
        "updated_at": "2023-02-27T13:35:20.768Z",
        "ACL": [],
        "app_user_object_uid": null,
        "_version": 4,
        "status": [],
        "_deploy_latest": false,
        "tags": []
    }
}
```


### Add multiple items to a Release

**POST** `/releases/{release_uid}/items`

The Add multiple items to a Release request allows you to add multiple items (entries and/or assets) to a Release.

When executing the API request, you need to provide the Release UID. In the 'Body' section, you need to provide the details of the items such as their UIDs, versions (in case of entries and assets), content type UIDs (in case of entries), the action to be performed (publish/unpublish), and the locales of the items. To add the asset in the release, the content type should be passed as "content_type_uid": "built_io_upload" in the request body.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

**Note**: In a single request, you can add maximum **25** items (entries/assets) to a Release.

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release in which you want to add multiple items.
  Default: `your_release_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"items": [{
		"uid": "entry_or_asset_uid1",
		"version": 1,
		"locale": "en-us",
		"content_type_uid": "demo1",
		"action": "publish"
	}, {
		"uid": "entry_or_asset_uid2",
		"version": 4,
		"locale": "fr-fr",
		"content_type_uid": "demo2",
		"action": "publish"
	}]
}
```

#### Sample Response

```json
{
	"notice": "Item(s) to be added to the release has been sent successfully.",
	"release": {
		"name": "Release Name 2",
		"description": "2018-12-12",
		"items": [{
				"action": "publish",
				"title": "Sample1",
				"uid": "entry_or_asset_uid1",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo1"
			},
			{
				"action": "publish",
				"title": "Sample2",
				"uid": "entry_or_asset_uid2",
				"locale": "fr-fr",
				"version": 4,
				"content_type_uid": "demo2"
			}
		],
		"app_user_object_uid": "system",
		"uid": "release_uid",
		"created_by": "blt7d123123cc321fee9e",
		"updated_by": "blt7d123123cc321fee9e",
		"created_at": "2019-07-18T08:41:33.915Z",
		"updated_at": "2019-07-18T08:41:33.915Z",
		"ACL": [],
		"_version": 1,
		"locked": false,
		"status": [],
		"tags": []
	}
}
```


### Update Release items to their latest versions

**PUT** `/releases/{release_uid}/update_items`

The Update Release items to their latest versions request let you update all the release items (entries and assets) to their latest versions before deployment.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

In the 'Body' section, you need to specify the following:

```
{
    "items":[
        "$all"
    ]
}
```

**Note**: This API request only allows you to collectively update all items in the release to their latest versions and not update any particular item individually.

In case an un-localized entry in the release has been localized later, this request will update the entry to the latest localized version. For example, if you add an un-localized entry to a release and later localize it to the French (France) language, this API request will update the release with the localized French version of the entry.

**Note**: You cannot update the release items under the following scenarios:

- If the updated version of an entry has new references, this API request doesn't automatically add the references to the release. You need to add them manually.
- You cannot update the items in a release once you deploy it.
- If the latest version of an entry is in the in-progress state, this API request doesn't update the entry.

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release of which you want to update the items (entries and assets) to their latest versions. You can find the release uid by running the [Get all Releases](/docs/developers/apis/content-management-api#releases-collection) API request.
  Default: `blt045d036eb8f2f9df`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
    "items":[
        "$all"
    ]
}
```

#### Sample Response

```json
{
  "notice":"Release items updated to their latest versions successfully.",
  "release":{
    "name":"Sample release", 
    "description":"Sample release",
    "uid":"blt046d036db7f2f9df",
    "created_by":"blt55927d24ccdc8d74e",
    "updated_by":"bltf41b5ae869879839",
    "created_at":"2021-11-15T06:29:21.061Z",
    "updated_at":"2021-12-01T07:09:42.201Z",
    "locked":false,
    "status":[
      
    ],
    "_deploy_latest":false,
    "items":[
      {
        "uid":"blta5cd0e5e62e4bc97",
        "version":4,
        "action":"publish",
        "content_type_uid":"sample_ct",
        "locale":"en-us",
        "title":"Sample entry"
      },
      {
        "uid":"blte254916f7d580dda",
        "version":2,
        "action":"publish",
        "content_type_uid":"demo-ct",
        "locale":"en-us",
        "title":"11.jpg"
      }
    ]
  }
}
```


### Remove an item from a Release

**DELETE** `/releases/{release_uid}/items`

The Remove an item from a Release request removes one or more items (entries and/or assets) from a specific Release.

When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the details of the item such as their UIDs, version (of the entry), content type UID (of an entry), the action to be performed (publish/unpublish), and the locale of the item.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release from which you want to remove an item.
  Default: `blt718af000dcde0000`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"items": [{
		"uid": "blt123123123123",
		"version": 1,
		"locale": "ja-jp",
		"content_type_uid": "category",
		"action": "publish"
	}]
}
```

#### Sample Response

```json
{
	"notice": "Item(s) send to remove from release successfully.",
	"release": {
		"name": "Release Name 2",
		"description": "2018-12-12",
		"items": [{
				"action": "publish",
				"title": "Sample1",
				"uid": "blt123123ef321321",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo1"
			},
			{
				"action": "unpublish",
				"title": "Sample2",
				"uid": "blt321321fe123123",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo2"
			}
		],
		"uid": "blt123123ab12312de",
		"created_by": "blt123123123123123",
		"updated_by": "blt123123123123322",
		"created_at": "2017-12-12T12:12:12:122Z",
		"updated_at": "2017-12-14T13:13:13:122Z",
		"locked": false,
		"status": []
	}
}
```


### Delete multiple items from a Release

**DELETE** `/releases/{release_uid}/items?all={boolean_value}`

The Delete multiple items from a Release request deletes one or more items (entries and/or assets) from a specific Release.

When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the UIDs of the items along with details such as their locale, versions, the action to be performed on the items (publish/unpublish), and content type UID of entries (if any).

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release from which you want to remove items.
  Default: `blt719af000dcde0000`

#### Query Parameters

- **all** (required)
  The ‘all’ parameter will allow you to delete all items (entries and/or assets) of a release at once.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"items": [{
		"uid": "item_uid",
		"locale": "en-us",
		"version": 1,
		"content_type_uid": "your_content_type_uid",
		"action": "publish_or_unpublish"
	}]
}
```

#### Sample Response

```json
{
	"notice": "Item(s) send to remove from release successfully.",
	"release": {
		"name": "Release Name",
		"description": "2018-12-12",
		"items": [{
				"action": "publish_or_unpublish",
				"title": "Sample",
				"uid": "item_uid",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "your_content_type_uid"
			}
		],
		"uid": "blt123123ab12312de",
		"created_by": "blt123123123123123",
		"updated_by": "blt123123123123322",
		"created_at": "2017-12-12T12:12:12:122Z",
		"updated_at": "2017-12-14T13:13:13:122Z",
		"locked": false,
		"status": []
	}
}
```




## Deploy/Execute a Release

### Deploy a Release

**POST** `/releases/{release_uid}/deploy`

The Deploy a Release request deploys a specific Release to specific environment(s) and locale(s).

When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the details of the Release that you want to deploy. For example, you need to provide the scheduled time (in case of scheduled release), action, and environment(s) on which the Release should be deployed.

To configure the permissions for your application via OAuth, please include the cm.release:deploy scope.

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release which you want to deploy on a specific environment and locale.
  Default: `blt719af000dcde0000`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"release": {
		"scheduled_at": "2018-12-12T13:13:13.122Z",
		"action": "publish/unpublish",
		"environments": [
			"Production",
			"UAT"
		]
	}
}
```

#### Sample Response

```json
{
	"notice": "Release sent successfully for deployment."
}
```




## Clone a Release

### Clone a Release

**POST** `/releases/{release_uid}/clone`

The Clone a Release request allows you to clone (make a copy of) a specific Release in a stack. When executing the API request, provide the Release UID.

In the 'Body' section, you need to provide the new name and description of the cloned Release.

To configure the permissions for your application via OAuth, please include the cm.release:clone scope.

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to clone.
  Default: `blt719af000dcde0000`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"release": {
		"name": "New Release Name",
		"description": "2018-12-12"
	}
}
```

#### Sample Response

```json
{
	"notice": "Release cloned successfully.",
	"release": {
		"name": "New Release Name",
		"description": "2018-12-12",
		"items": [{
				"action": "publish",
				"title": "Sample1",
				"uid": "blt123123ef321321",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo1"
			},
			{
				"action": "unpublish",
				"title": "Sample2",
				"uid": "blt321321fe123123",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo2"
			}
		],
		"uid": "blt1123ab123ede123",
		"created_by": "blt123123123123123",
		"updated_by": "blt123123123123123",
		"created_at": "2017-12-12T12:12:12:122Z",
		"updated_at": "2017-12-12T12:12:12:122Z",
		"locked": false,
		"status": []
	}
}
```




## Lock a Release

### Lock a Release

**PUT** `/releases/{release_uid}`

The Lock a Release request prevents further modifications to the specified release by locking it. In the 'Body' section, set the locked parameter as true to lock the release.

Your request body is as follows:

```
{
  "release": {
    "locked": true
  }
}
```

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to lock.
  Default: `blt719af000dcde0000`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "release": {
    "locked": true
  }
}
```

#### Sample Response

```json
{
    "notice": "Release updated successfully.",
    "release": {
        "uid": "blt4**************a",
        "name": "Christmas Releases",
        "description": "",
        "locked": true,
        "sys_locked": false,
        "sys_version": 2,
        "status": [
            {
                "environment": "bltf6**************0",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "445f0669-50fc-4918-8f36-09abb3d573f4",
                "time": "2025-03-04T12:06:27.951Z"
            },
            {
                "environment": "blta**************1",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "44****69-50fc-4918-8f36-09********f4",
                "time": "2025-03-04T12:06:27.974Z"
            }
        ],
        "created_at": "2025-02-13T05:55:46.177Z",
        "updated_at": "2025-06-25T08:24:04.621Z",
        "created_by": "blt3**************4",
        "updated_by": "blte9**************1"
    }
}
```




## Unlock a Release

### Unock a Release

**PUT** `/releases/{release_uid}`

The Unlock a Release request removes the lock from a release, allowing further modifications to the specified release. In the 'Body' section, set the locked parameter as false to unlock the release.

Your request body is as follows:

```
{
  "release": {
    "locked": false
  }
}
```

#### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to unlock.
  Default: `blt719af000dcde0000`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "release": {
    "locked": false
  }
}
```

#### Sample Response

```json
{
    "notice": "Release updated successfully.",
    "release": {
        "uid": "blt4**************a",
        "name": "Christmas Releases",
        "description": "",
        "locked": false,
        "sys_locked": false,
        "sys_version": 2,
        "status": [
            {
                "environment": "bltf6**************0",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "445f0669-50fc-4918-8f36-09abb3d573f4",
                "time": "2025-03-04T12:06:27.951Z"
            },
            {
                "environment": "blta**************1",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "44****69-50fc-4918-8f36-09********f4",
                "time": "2025-03-04T12:06:27.974Z"
            }
        ],
        "created_at": "2025-02-13T05:55:46.177Z",
        "updated_at": "2025-06-25T08:24:04.621Z",
        "created_by": "blt3**************4",
        "updated_by": "blte9**************1"
    }
}
```

