---
title: "Ingest Content Item"
description: /v1/knowledge-vault/
url: /create-folder
product: Contentstack
doc_type: api-request
created_at: 2024-11-08T08:14:39.347Z
updated_at: 2025-12-12T08:40:09.138Z
---

# Ingest Content Item

<p>The <span class="code">Ingest Content</span> request stores textual content in a specified folder within the Knowledge Vault of a brand kit. It enriches the content with metadata such as title and tags for improved organization and retrieval.</p><p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p><p>Here’s an example of the Request Body for ingesting content:</p><pre>{
   "content": "ChatGPT, Google Gemini, Anthropic Claude, Perplexity AI, Jasper AI, Midjourney, DALL·E, Adobe Firefly, Canva AI, Runway ML, Pika Labs, ElevenLabs, Descript, GitHub Copilot, Amazon CodeWhisperer, Replit Ghostwriter, Microsoft Copilot, Notion AI, Zapier AI, HubSpot AI",
   "_metadata": {
       "title": "Popular AI Tools",
       "tags": ["AI", "AI Tools", "AI New Users"]
   }
}
</pre>

**API Endpoint**: `/v1/knowledge-vault/`

**Method**: `POST`

## Headers

- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/knowledge-vault-api#authentication" target="_self">Authentication</a>.</p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>
- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>
- **path** (required)
  <p>Enter the absolute path for the parent folder.</p>

## Request Body

```json
{
   "content": "ChatGPT, Google Gemini, Anthropic Claude, Perplexity AI, Jasper AI, Midjourney, DALL·E, Adobe Firefly, Canva AI, Runway ML, Pika Labs, ElevenLabs, Descript, GitHub Copilot, Amazon CodeWhisperer, Replit Ghostwriter, Microsoft Copilot, Notion AI, Zapier AI, HubSpot AI",
   "_metadata": {
       "title": "Popular AI Tools",
       "tags": ["AI", "AI Tools", "AI New Users"]
   }
}
```

## Response

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

