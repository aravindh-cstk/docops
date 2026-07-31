---
title: "Publish a taxonomy"
description: /taxonomies/publish
url: /publish-a-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2026-05-18T15:02:18.926Z
updated_at: 2026-05-18T15:02:18.926Z
---

# Publish a taxonomy

<p>The <span data-type='inlineCode'>Publish a taxonomy</span> request &nbsp;initiates a job to publish one or more taxonomies to the specified environments, locales, and branches.</p><div class="note"><strong>Note</strong>:<p>&nbsp;</p><ul><li>Publishing is supported <strong>only at the taxonomy level</strong>, individual terms cannot be published.</li><li>The <span data-type='inlineCode'>locales</span> and <span data-type='inlineCode'>environments</span> parameters are mandatory.</li><li>The <span data-type='inlineCode'>scheduled_at</span> parameter is optional.</li><li>Although taxonomy is global, branch selection determines locale availability and the fallback hierarchy during publishing.</li></ul></div>

**API Endpoint**: `/taxonomies/publish`

**Method**: `POST`

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body. </p>
- **branch** (optional)
  <p>Specify the target branch when using the <span data-type='inlineCode'>include_fallback</span> parameter. If not specified, the system uses the <span data-type='inlineCode'>main</span> branch by default.</p>

## Request Body

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

