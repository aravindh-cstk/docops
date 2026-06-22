---
title: "Export an entry"
description: GET /content_types/{content_type_uid}/entries/{entry_uid}/export?locale={locale_code}
url: developers/apis/content-management-api/requests/export-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Export an entry


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}/export?locale={locale_code}`

The Export an entry call is used to export an entry. The exported entry data is saved in a downloadable JSON file.The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.   
To configure the permissions for your application via OAuth, please include the cm.entries:export scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_Authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique  |

| entry_uid | blt9965f5f9840923ba | Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries  |

| locale | en-us | Enter the code of the language to unlocalize the entry of that particular language. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"title": "example",
	"url": "/example",
	"tags": [],
	"locale": "en-us",
	"uid": "abcdefhgi1234567890",
	"created_by": "1234567890abcdefghijklmnopq",
	"updated_by": "1234567890abcdefghijklmnopq",
	"created_at": "2015-01-08T15:07:53.495Z",
	"updated_at": "2015-01-08T15:07:53.495Z",
	"ACL": {},
	"_version": 1,
	"_in_progress": false,
	"reference": [
		"bltf123123123123de"
	]
}
```
