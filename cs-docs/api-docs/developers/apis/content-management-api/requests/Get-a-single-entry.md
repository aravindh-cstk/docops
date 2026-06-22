---
title: "Get a single entry"
description: GET /content_types/{content_type_uid}/entries/{entry_uid}?version={version_number}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}
url: developers/apis/content-management-api/requests/get-a-single-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Get a single entry


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}?version={version_number}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}`

The Get a single entry request fetches a particular entry of a content type.

The content of the entry is returned in JSON format. You can also specify the environment and locale of which you wish to retrieve the entries.

To configure the permissions for your application via OAuth, please include the cm.entries.management:read scope.   
Additionally, if you wish to fetch the metadata attached to each entry, then you need to pass include_metadata as a query parameter. Set this parameter to true to include the entry metadata along with all entries in the response body.

You will find the entry metadata under the _metadata key in the response. It will be associated with a specific extension UID as follows:

```
"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
```

**Tip:** To include the publish details in the response, make use of the include_publish_details parameter and set its value to ‘true’. This query will return the publish details of the entry in every environment along with the version number that is published in each of the environment. In addition to entry publish details, the include_publish_details parameter also fetches the entry metadata publishing details in the response.

**Tip: **Also, if no version is mentioned, this request will retrieve the latest published version of the entry. To retrieve a specific version, make use of the version parameter.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_Authtoken |  |

| authorization |  [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique  |

| entry_uid | blt9965f5f9840923ba | Enter the unique ID of the entry that you wish to fetch. |

| version | 2 | Enter the version number of the entry that you want to retrieve. However, to retrieve a specific version of an entry, you need to keep the environment parameter |

| locale | en-us | Enter the code of the language of which the entries need to be included. Only the entries published in this locale will be displayed. |

| include_workflow | true | Enter 'true' to include the workflow details of the entry. |

| include_publish_details | true | Enter 'true' to include the publish details of the entry. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"entry": {
		"title": "example",
		"url": "/example",
		"locale": "en-us",
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 1,
		"tags": [],
		"publish_details": [{
			"environment": "bltc15045c3098babcd",
			"version": 1,
			"locale": "en-us",
			"time": "2015-01-08T15:07:53.495Z",
			"user": "sys_bltd0f5afeabcd"
		}]
	}
}
```
