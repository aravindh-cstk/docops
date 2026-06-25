---
title: "Get Items in Folder"
description: GET /v1/knowledge-vault/folders/{folder_uid}?folder_depth={number}&limit={limit}&skip={index}&sort={string}&order={string}&date_range={dateRange}&filter_users={string}&filter_field={string}&include_users={boolean}&typeahead={string}
url: developer-apis/knowledge-vault-api-requests/get-items-in-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-02
---

# Get Items in Folder

**GET** `/v1/knowledge-vault/folders/{folder_uid}?folder_depth={number}&limit={limit}&skip={index}&sort={string}&order={string}&date_range={dateRange}&filter_users={string}&filter_field={string}&include_users={boolean}&typeahead={string}`

The Get Items in Folder request retrieves all items contained within a specific folder in the Knowledge Vault of a brand kit.

To configure the permissions for your app via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

## URL Parameters

- **folder_uid** (required)
  Enter the parent folder UID.
  Default: `dir0000000000000`

## Query Parameters

- **limit** (optional)
  Enter the maximum number of content items to return.
  Default: `10`
- **skip** (optional)
  Enter the number of content items to be skipped from the response body.
  Default: `0`
- **sort** (optional)
  Enter the value on the basis of which you want to sort your content items.
  Default: `created_at`
- **order** (optional)
  Enter the ascending or descending order to organize your content items.
  Default: `asc`
- **include_users** (optional)
  This parameter lets you include user information in the response. Set to true if you want to include the user information, else set to false.
  Default: `false`
- **folder_depth** (optional)
  Number of folder levels to traverse (1 = only direct children).
  Default: `1`
- **date_range** (optional)
  You can filter the response by date range. The format must be YYYY-MM-DD.
  Default: `2025-12-01`
- **filter_users ** (optional)
  You can filter the response based on the comma-separated user UIDs.
- **filter_field** (optional)
  You can filter the response based on the user fields like created or updated.
- **typeahead** (optional)
  Text-based search across content item title or name.
  Default: `AI Tools`

## Headers

- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../../api-detail/knowledge-vault-api.md#authentication).
  Default: `[Bearer <OAuth token>]`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

## Sample Response

```json
{
   "documents": [
       {
           "content_uid": "cs************",
           "content": "AI Tools for Beginners\nArtificial intelligence has become part of everyday life, and a growing number of easy to use tools make it accessible to everyone, even complete beginners. These tools help with writing, image creation, data organization, and productivity without requiring any technical background.\n1. Writing Assistants: AI writing assistants such as ChatGPT and Grammarly help users brainstorm ideas, correct grammar, and improve writing style. They are great for students, professionals, and anyone who wants to produce content faster.\n2. Image Generation Tools: Beginner friendly image generators like Canva AI or Adobe Firefly allow users to create attractive visuals from simple prompts. These tools help with social media graphics, blog illustrations, and creative projects.\n3. AI Productivity Tools: Tools such as Notion AI, Otter.ai, or Google Gemini assist with summarizing notes, generating task lists, and automating repetitive work. They save time and help users stay organized.\n4. AI Video and Audio Tools: Platforms like Descript and CapCut use AI to simplify audio/video editing, enabling beginners to create professional looking content with minimal effort. \n\nAI tools are becoming more intuitive and accessible, empowering anyone to work smarter and explore creativity in new ways. As AI continues to evolve, these beginner friendly tools will make learning and productivity even easier.",
           "deleted_at": false,
           "organization_uid": "blt*************",
           "brand_kit_uid": "cs************",
           "created_at": "2025-11-30 09:33:00.345900",
           "created_by": "blt*************",
           "updated_at": "2025-11-30 09:33:00.345910",
           "updated_by": "blt*************",
           "_metadata": {
               "tags": [],
               "title": "AI Tools for Beginners: Writing, Image, and Productivity",
               "file": {
                   "name": "AI_Tools_for_Beginners.pdf",
                   "size": 2669,
                   "type": "app/pdf"
               },
               "source": "UI"
           },
           "type": "entry",
           "path": "/dir0000000000000/dir************"
       }
   ],
   "current_folder": {
       "folder_uid": "dir************",
       "organization_uid": "blt*************",
       "brand_kit_uid": "cs************",
       "created_at": "2025-11-30 09:32:18.992813",
       "created_by": "blt*************",
       "updated_at": "2025-11-30 09:33:26.411742",
       "updated_by": "blt*************",
       "deleted_at": false,
       "type": "folder",
       "name": "AI for Beginners",
       "path": "/dir0000000000000"
   }
}
```

