---
title: "Publish a taxonomy"
description: POST /taxonomies/publish
url: developers/apis/content-management-api/requests/publish-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-05-18
---

# Publish a taxonomy


**Method:** `POST`  
**Endpoint:** `/taxonomies/publish`

The Publish a taxonomy request  initiates a job to publish one or more taxonomies to the specified environments, locales, and branches.

**Note**:

 

- Publishing is supported only at the taxonomy level, individual terms cannot be published.
- The locales and environments parameters are mandatory.
- The scheduled_at parameter is optional.
- Although taxonomy is global, branch selection determines locale availability and the fallback hierarchy during publishing.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| branch | dev | Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default. |

**Request Body:**

```json
{
  "locales": ["en-us", "fr-fr"],
  "environments": ["production"],
  "scheduled_at": "2025-10-01T10:00:00.000Z",
  "items": [
    {
      "uid": "taxonomy_uid_1"
    },
    {
      "uid": "taxonomy_uid_2"
    }
  ]
}
```
