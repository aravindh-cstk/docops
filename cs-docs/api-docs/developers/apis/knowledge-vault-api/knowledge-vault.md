---
title: "Knowledge Vault | Knowledge Vault"
description: Create, update, fetch, and manage Knowledge Vault resources used to ground AI-assisted content workflows.
url: https://www.contentstack.com/docs/developers/apis/knowledge-vault-api/knowledge-vault
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Knowledge Vault | Knowledge Vault

The [Knowledge Vault](/docs/content-managers/brand-kit/about-knowledge-vault) API serves as a centralized hub for content, enabling you to store, manage, and organize brand-related assets such as text, documents, images, and other files, within structured brand kit folders.

## Ingest Content Item

### Ingest Content Item

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

#### Headers

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

#### Sample Request

```json
{
   "content": "ChatGPT, Google Gemini, Anthropic Claude, Perplexity AI, Jasper AI, Midjourney, DALL·E, Adobe Firefly, Canva AI, Runway ML, Pika Labs, ElevenLabs, Descript, GitHub Copilot, Amazon CodeWhisperer, Replit Ghostwriter, Microsoft Copilot, Notion AI, Zapier AI, HubSpot AI",
   "_metadata": {
       "title": "Popular AI Tools",
       "tags": ["AI", "AI Tools", "AI New Users"]
   }
}
```

#### Sample Response

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




## Ingest Content Item as Document



## Update Content Item

### Update Content Item

**PUT** `/v1/knowledge-vault/{content_uid}`

The Update Content request lets you update a specific content stored in the Knowledge Vault.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

#### URL Parameters

- **content_uid** (optional)
  Enter the Content UID.
  Default: `your_content_uid`

#### Headers

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/knowledge-vault-api#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Request

```json
{
  "content": "Contentstack is a headless CMS that enables flexible, scalable content management and omnichannel delivery across digital platforms."
  "_metadata": {
        "title": "Contentstack headless CMS",
    }
}
```

#### Sample Response

```json
{
    "message": "Your content will be updated shortly",
    "content": {
        "uid": "cs************de",
        "tokens": {
            "count": 2905,
            "remaining": 99997095
        }
    }
}
```




## Delete Content Item

### Delete Content Item

**DELETE** `/v1/knowledge-vault/{content_uid}`

The Delete Content request lets you delete a specific content stored in the Knowledge Vault.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

#### URL Parameters

- **content_uid** (optional)
  Enter the Content UID.
  Default: `your_content_uid`

#### Headers

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/knowledge-vault-api#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Response

```json
{
    "message": "Content deleted successfully"
}
```

