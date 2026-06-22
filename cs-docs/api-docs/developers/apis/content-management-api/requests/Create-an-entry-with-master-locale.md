---
title: "Create an entry with master locale"
description: POST /content_types/{content_type_uid}/entries
url: developers/apis/content-management-api/requests/create-an-entry-with-master-locale
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Create an entry with master locale


**Method:** `POST`  
**Endpoint:** `/content_types/{content_type_uid}/entries`

The Create an entry with master locale request lets you create an entry in the master language of your stack if it does not already exist or has been deleted. You can use the UID of a [localized entry](/docs/developers/multilingual-content/localize-an-entry) to convert it into a [master language entry](/docs/developers/multilingual-content/set-the-master-language).

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.   
If the master language is not accessible or does not exist, a custom user role can still create an entry in any of the other available locales. However, the entry in the master language remains non-existent.

In such a scenario, roles with access to the master locale can create an entry in the master language using the UID of the localized entry and the copy_to_master query parameter. The copy_to_master parameter allows you to copy content from the localized entry to the master language entry version of the stack.

When executing the API call, in the ‘Body’ section, you need to provide the content of your entry based on the content type created. You also need to specify the UID of the localized entry for which you want to create an entry in the master locale.

Here’s what your request body should look like:

```
{
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "uid": "localized_entry_uid"
    }
}
```

##### Create an entry with custom asset field

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| Content-Type | application/json | Enter "application/json" to pass a Request body. |

| branch | main | Enter your branch unique ID. |

| content_type_uid | your_content_type_uid | Enter the unique ID of the content type of which you wish to retrieve the details. The UID is generated based on the title of the content type. The unique ID of |

| copy_to_master | true | Set this parameter to true to copy content from a localized entry to the master language. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

```json
{
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "uid": "blta1f4ca9e3a6cd764"
    }
}
```

**Response (201):**

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "locale": "en-us",
        "uid": "blta1f4ca9e3a6cd764",
        "created_by": "bltb2472ae3265037b1",
        "updated_by": "bltb2472ae3265037b1",
        "created_at": "2021-11-24T10:10:14.067Z",
        "updated_at": "2021-11-24T10:10:14.067Z",
        "ACL": {},
        "_version": 1,
        "_in_progress": false
    }
}
```
