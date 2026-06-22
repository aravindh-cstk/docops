---
title: "Ingest Content Item"
description: POST /v1/knowledge-vault/
url: developers/apis/knowledge-vault-api/requests/create-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-12-12
---

# Ingest Content Item


**Method:** `POST`  
**Endpoint:** `/v1/knowledge-vault/`

The Ingest Content request stores textual content in a specified folder within the Knowledge Vault of a brand kit. It enriches the content with metadata such as title and tags for improved organization and retrieval.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

Here’s an example of the Request Body for ingesting content:

```
{
   "content": "ChatGPT, Google Gemini, Anthropic Claude, Perplexity AI, Jasper AI, Midjourney, DALL·E, Adobe Firefly, Canva AI, Runway ML, Pika Labs, ElevenLabs, Descript, GitHub Copilot, Amazon CodeWhisperer, Replit Ghostwriter, Microsoft Copilot, Notion AI, Zapier AI, HubSpot AI",
   "_metadata": {
       "title": "Popular AI Tools",
       "tags": ["AI", "AI Tools", "AI New Users"]
   }
}
```

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>] | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/knowledge-vault-api#authentication). |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| brand_kit_uid | your_brand_kit_uid | Enter the Brand Kit UID. |

| path | /dir0000000000000/dir************ | Enter the absolute path for the parent folder. |

**Request Body:**

```json
{
   "content": "ChatGPT, Google Gemini, Anthropic Claude, Perplexity AI, Jasper AI, Midjourney, DALL·E, Adobe Firefly, Canva AI, Runway ML, Pika Labs, ElevenLabs, Descript, GitHub Copilot, Amazon CodeWhisperer, Replit Ghostwriter, Microsoft Copilot, Notion AI, Zapier AI, HubSpot AI",
   "_metadata": {
       "title": "Popular AI Tools",
       "tags": ["AI", "AI Tools", "AI New Users"]
   }
}
```

**Response (200):**

```json
{
    "message": "Your content will be ingested shortly",
    "content": {
        "uid": "cs**************",
        "tokens": {
            "count": 10060,
            "remaining": 989940
        }
    }
}
```
