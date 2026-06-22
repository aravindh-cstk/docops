---
title: "Import an entry"
description: POST /content_types/{content_type_uid}/entries/import?locale={locale_code}&overwrite={overwrite}
url: developers/apis/content-management-api/requests/import-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Import an entry


**Method:** `POST`  
**Endpoint:** `/content_types/{content_type_uid}/entries/import?locale={locale_code}&overwrite={overwrite}`

The Import an entry call is used to import an entry. To import an entry, you need to upload a JSON file that has entry data in the format that fits the schema of the content type it is being imported to.   
To configure the permissions for your application via OAuth, please include the cm.entries:import scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 | Enter the API key of stack of which you wish to retrieve the content types. |

| authtoken | Your_Authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| Content-Type | multipart/form-data |  |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across |

| locale | en-us | Enter the code of the language to import the entry of that particular language. |

| overwrite | false | Select 'true' to replace an existing entry with the imported entry file. |

| inclue_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"notice": "Entry imported successfully.",
	"entry": {
		"title": "example",
		"url": "/example",
		"reference": [
			"bltfeec9dd9340037de"
		],
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 1,
		"tags": [],
		"_in_progress": false
	}
}
```
