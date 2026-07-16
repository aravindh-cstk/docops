---
title: "Generative AI | Generative AI"
description: Use Generative AI endpoints to create, transform, and refine content with Contentstack AI capabilities.
url: https://www.contentstack.com/docs/developer-apis/generative-ai-api/generative-ai
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Generative AI | Generative AI

The Generate AI works as a communication channel between your Vector database and **Large Language Model (LLM)**. It carries your prompt/action to the vector database, retrieves a chunk of data based on the prompt/command, forwards it to the LLM for it to process, and finally returns the processed data back to the field.

## GenAI

### GenAI

**POST** `/v1/genai/`

The GenAI request carries prompts, processes them, retrieves relevant data, and returns the processed data.

To configure the permissions for your application via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

Here’s an example of the Request Body for using GenAI request:

```
{
  "prompt": "Enter your prompt",
  "knowledge_vault": true,
  "voice_profile_uid":"cs************d"
 }
```

#### Headers

- **brand_kit_uid** (optional)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **authtoken** (optional)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (optional)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/generative-ai-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Request

```json
{
  "prompt": "Write about Contentstack in 50 words.",
  "knowledge_vault": true,
  "voice_profile_uid": "cs************d"
}
```

#### Sample Response

```json
Streaming dictionary response
```

