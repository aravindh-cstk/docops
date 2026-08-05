---
title: "Knowledge Vault | Folder Management"
description: Create, update, fetch, and manage folders for organizing Knowledge Vault files and resources.
url: https://www.contentstack.com/docs/developer-apis/knowledge-vault-api/folder-management
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Knowledge Vault | Folder Management

Folder Management provides APIs to organize and maintain your folder structure within Knowledge Vault. You can create folders, retrieve all folders, view items inside a folder, update folder details, move folders or items, and delete folders.

## Create Folder

### Create Folder

**POST** `/v1/knowledge-vault/folders`

The Create Folder request lets you create a new folder within a specified parent directory in your knowledge vault.

To configure the permissions for your app via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Example:

```
{
  "name": "AI for Advanced Users",
  "path": "/dir0000000000000"
}
```

The _name_ and _path_ are required strings where _name_ specifies the new folder’s name and _path_ provides the parent folder UID where the new folder will be created.

**Note**: Root folder UID is dir0000000000000.

#### Headers

- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/knowledge-vault-api.md#authentication).
  Default: `[Bearer <OAuth token>]`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Sample Request

```json
{
  "name": "AI for Advanced Users",
  "path": "/dir0000000000000"
}
```

#### Sample Response

```json
{
   "message": "Folder created successfully",
   "folder_uid": "dir************"
}
```




## Get All Folders

### Get All Folders

**GET** `/v1/knowledge-vault/folders?limit={limit}&sort={sort_field}&skip={skip}&order={asc|desc}`

The Get All Folders request retrieves a paginated list of all folders within the Knowledge Vault for a specified brand kit. You can apply filters such as sorting, pagination, and the inclusion of user metadata in the response.

To configure the permissions for your app via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

#### Query Parameters

- **limit** (optional)
  Enter the maximum number of folders to return.
  Default: `10`
- **sort** (optional)
  Enter the value on the basis of which you want to sort your folders.
  Default: `created_at`
- **skip** (optional)
  Enter the number of folders to be skipped from the response body.
  Default: `0`
- **order** (optional)
  Enter the ascending or descending order to organize the folders.
  Default: `asc`

#### Headers

- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/knowledge-vault-api.md#authentication).
  Default: `[Bearer <OAuth token>]`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Sample Response

```json
{
   "documents": [
       {
           "folder_uid": "dir0000000000000",
           "organization_uid": "blt*************",
           "brand_kit_uid": "cs************",
           "created_at": "2025-11-30 09:31:29.864609",
           "created_by": "blt*************",
           "updated_at": "2025-11-30 09:31:29.864619",
           "updated_by": "blt*************",
           "deleted_at": false,
           "type": "folder",
           "name": "Root",
           "path": "/"
       },
       {
           "folder_uid": "dir************",
           "organization_uid": "blt57de41ea4319272c",
           "brand_kit_uid": "cs************",
           "created_at": "2025-11-30 09:32:18.992813",
           "created_by": "blt*************",
           "updated_at": "2025-11-30 09:33:26.411742",
           "updated_by": "blt*************",
           "deleted_at": false,
           "type": "folder",
           "name": "AI for Beginners",
           "path": "/dir0000000000000"
       },
       {
           "folder_uid": "dir************",
           "organization_uid": "blt*************",
           "brand_kit_uid": "cs************",
           "created_at": "2025-11-30 09:41:05.895270",
           "created_by": "blt*************",
           "updated_at": "2025-11-30 09:41:05.895281",
           "updated_by": "blt*************",
           "deleted_at": false,
           "type": "folder",
           "name": "AI for Advanced Users",
           "path": "/dir0000000000000"
       }
   ]
}
```




## Get Items in Folder

### Get Items in Folder

**GET** `/v1/knowledge-vault/folders/{folder_uid}?folder_depth={number}&limit={limit}&skip={index}&sort={string}&order={string}&date_range={dateRange}&filter_users={string}&filter_field={string}&include_users={boolean}&typeahead={string}`

The Get Items in Folder request retrieves all items contained within a specific folder in the Knowledge Vault of a brand kit.

To configure the permissions for your app via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

#### URL Parameters

- **folder_uid** (required)
  Enter the parent folder UID.
  Default: `dir0000000000000`

#### Query Parameters

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

#### Headers

- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/knowledge-vault-api.md#authentication).
  Default: `[Bearer <OAuth token>]`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Sample Response

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




## Update Folder

### Update Folder

**PUT** `/v1/knowledge-vault/folders/{folder_uid}`

The Update Folder request lets you rename an existing folder in the Knowledge Vault of a brand kit.

To configure the permissions for your application via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Example:

```
{
  "name": "AI for Business Leaders"
}
```

#### URL Parameters

- **older_uid** (required)
  Enter the UID of the folder to be updated.
  Default: `your_folder_uid`

#### Headers

- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/knowledge-vault-api.md#authentication).
  Default: `[Bearer <OAuth token>]`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Sample Request

```json
{
  "name": "AI for Business Leaders"
}
```

#### Sample Response

```json
{
   "message": "Folder name updated successfully"
}
```




## Move Items to Folder

### Move Items to Folder

**PUT** `/v1/knowledge-vault/folders/{folder_uid}/move-items`

The Move Items to Folder request lets you move multiple items into a specified folder within the Knowledge Vault of a brand kit.

To configure the permissions for your app via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Example:

```
{
   "content_uids": [
       "cs**************",
       "cs**************"
   ]
}
```

The content_uids holds the list of content item UIDs to move into another folder.

#### URL Parameters

- **folder_uid ** (required)
  Enter the UID of the folder where the items will be moved.
  Default: `your_folder_uid`

#### Headers

- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/knowledge-vault-api.md#authentication).
  Default: `[Bearer <OAuth token>]`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Sample Request

```json
{
   "content_uids": [
       "cs**************",
       "cs**************"
   ]
}
```

#### Sample Response

```json
{
   "message": "Items moved successfully",
   "updated_count": 2,
   "elapsed_time": 0.033
}
```




## Delete Folder

### Delete Folder

**DELETE** `/v1/knowledge-vault/folders/{folder_uid}`

The Delete Folder request permanently deletes a specified folder from the Knowledge Vault in a brand kit.

To configure the permissions for your app via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

#### URL Parameters

- **folder_uid** (required)
  Enter the UID of the folder to be deleted.
  Default: `your_folder_uid`

#### Headers

- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/knowledge-vault-api.md#authentication).
  Default: `[Bearer <OAuth token>]`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Sample Response

```json
{
  "message": "Folder deleted successfully.",
}
```

