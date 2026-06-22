---
title: "Delete an entry"
description: DELETE /content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}&delete_all_localized={boolean_value}
url: developers/apis/content-management-api/requests/delete-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Delete an entry


**Method:** `DELETE`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}&delete_all_localized={boolean_value}`

The Delete an entry request allows you to delete a specific entry from a content type. This API request also allows you to delete single and/or multiple localized entries.   
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

This API Request supports the following actions as well:

- Delete specific localized entry: For this request, you need to only specify the locale code of the language in the locale query parameter. If the locale parameter is not been specified, by default, the master language entry will be deleted.
- Delete master language along with all its localized entries: For this request, instead of the locale query parameter, you need to pass the delete_all_localized:true query parameter.Note: The delete_all_localized parameter will work only if you are deleting localized versions from the master language.
- Delete multiple localized entry: Additionally, you can delete specific localized entries by passing the locale codes in the Request body using the locales key as follows:

```
{
  "entry": {
    "locales": ["hi-in", "mr-in", "es"]
  }
}
```

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_Authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type of which you wish to delete the entry. The content type UID is generated based on the title of the content type and it i |

| entry_uid | blt9965f5f9840923ba | Enter the unique ID of the entry that you wish to delete. |

| locale | en-us | Enter the code of the language of which the entry needs to be deleted. |

| delete_all_localized | true | Set the "delete_all_localized" parameter to "true" to delete all the localized versions of the entry. |

**Response (200):**

```json
{
	"notice": "Entry deleted successfully."
}
```
