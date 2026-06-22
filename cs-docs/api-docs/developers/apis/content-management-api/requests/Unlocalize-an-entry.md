---
title: "Unlocalize an entry"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/unlocalize?locale={locale_code}
url: developers/apis/content-management-api/requests/unlocalize-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Unlocalize an entry


**Method:** `POST`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}/unlocalize?locale={locale_code}`

The Unlocalize an entry request is used to unlocalize an existing entry. Read more about [Unlocalization](/docs/developers/multilingual-content/unlocalize-an-entry).   
To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_Authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique  |

| entry_uid | blt9965f5f9840923ba | Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries  |

| locale | fr-fr | Enter the code of the language to unlocalize the entry of that particular language. |

**Response (200):**

```json
{
	"notice": "Entry unlocalized successfully."
}
```
