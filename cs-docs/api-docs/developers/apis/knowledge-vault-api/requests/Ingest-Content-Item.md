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

**POST** `/v1/knowledge-vault/`

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

## Headers

- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/knowledge-vault-api#authentication).
  Default: `[Bearer <OAuth token>]`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **path** (required)
  Enter the absolute path for the parent folder.
  Default: `/dir0000000000000/dir************`

## Sample Request

```json
{
   "content": "ChatGPT, Google Gemini, Anthropic Claude, Perplexity AI, Jasper AI, Midjourney, DALL·E, Adobe Firefly, Canva AI, Runway ML, Pika Labs, ElevenLabs, Descript, GitHub Copilot, Amazon CodeWhisperer, Replit Ghostwriter, Microsoft Copilot, Notion AI, Zapier AI, HubSpot AI",
   "_metadata": {
       "title": "Popular AI Tools",
       "tags": ["AI", "AI Tools", "AI New Users"]
   }
}
```

## Sample Response

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

