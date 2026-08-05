---
title: "Get Items in Folder"
description: /v1/knowledge-vault/folders/{folder_uid}?folder_depth={number}&limit={limit}&skip={index}&sort={string}&order={string}&date_range={dateRange}&filter_users={string}&filter_field={string}&include_users={boolean}&typeahead={string}
url: /get-items-in-folder
product: Contentstack
doc_type: api-request
created_at: 2025-12-12T08:31:52.010Z
updated_at: 2026-03-02T22:44:40.646Z
---

# Get Items in Folder

<p>The <span class="code">Get Items in Folder</span> request retrieves all items contained within a specific folder in the Knowledge Vault of a brand kit.</p><p>To configure the permissions for your app via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:read</span> scope.</p>

**API Endpoint**: `/v1/knowledge-vault/folders/{folder_uid}?folder_depth={number}&limit={limit}&skip={index}&sort={string}&order={string}&date_range={dateRange}&filter_users={string}&filter_field={string}&include_users={boolean}&typeahead={string}`

**Method**: `GET`

## URL Parameters

- **folder_uid** (required)
  <p>Enter the parent folder UID.</p>

## Query Parameters

- **limit** (optional)
  <p>Enter the maximum number of content items to return.</p>
- **skip** (optional)
  <p>Enter the number of content items to be skipped from the response body.</p>
- **sort** (optional)
  <p>Enter the value on the basis of which you want to sort your content items.</p>
- **order** (optional)
  <p>Enter the ascending or descending order to organize your content items.</p>
- **include_users** (optional)
  <p>This parameter lets you include user information in the response. Set to true if you want to include the user information, else set to false.</p>
- **folder_depth** (optional)
  <p>Number of folder levels to traverse (1 = only direct children).</p>
- **date_range** (optional)
  <p>You can filter the response by date range. The format must be YYYY-MM-DD.</p>
- **filter_users ** (optional)
  <p>You can filter the response based on the comma-separated user UIDs.</p>
- **filter_field** (optional)
  <p>You can filter the response based on the user fields like created or updated.</p>
- **typeahead** (optional)
  <p>Text-based search across content item title or name.</p>

## Headers

- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/knowledge-vault-api#authentication" target="_self">Authentication</a>.</p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>
- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>

## Response

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

