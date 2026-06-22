---
title: "GenAI"
description: POST /v1/genai/
url: https://ai.contentstack.com/brand-kits/v1/genai/
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-08
---

# GenAI


**Method:** `POST`  
**Endpoint:** `/v1/genai/`

The GenAI request carries prompts, processes them, retrieves relevant data, and returns the processed data.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:read scope.

Here’s an example of the Request Body for using GenAI request:

```
{
  "prompt": "Enter your prompt",
  "knowledge_vault": true,
  "voice_profile_uid":"cs************d"
 }
```

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| brand_kit_uid | your_brand_kit_uid | Enter the Brand Kit UID. |

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>] | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/generative-ai-api#authentication). |

**Request Body:**

```json
{
  "prompt": "Write about Contentstack in 50 words.",
  "knowledge_vault": true,
  "voice_profile_uid": "cs************d"
}
```

**Response (200):**

```json
Streaming dictionary response
```
