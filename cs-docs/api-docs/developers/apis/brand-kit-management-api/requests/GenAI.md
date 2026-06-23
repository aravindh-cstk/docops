---
title: "GenAI"
description: POST /v1/genai/
url: https://ai.contentstack.com/brand-kits/v1/genai/
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# GenAI

**POST** `/v1/genai/`

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

## Headers

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication).
  Default: `[Bearer <OAuth token>]`

## Sample Request

```json
{
  "prompt": "Write about Contentstack in 50 words.",
  "knowledge_vault": true,
  "voice_profile_uid": "cs************d"
}
```

## Sample Response

```json
Streaming dictionary response
```

