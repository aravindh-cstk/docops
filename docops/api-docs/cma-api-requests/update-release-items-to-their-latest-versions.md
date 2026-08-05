---
title: "Update Release items to their latest versions"
description: /releases/{release_uid}/update_items
url: /update-release-items-to-their-latest-versions
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:02.744Z
updated_at: 2024-11-14T06:33:21.091Z
---

# Update Release items to their latest versions

<p>The <span data-type='inlineCode'>Update Release items to their latest versions</span> request let you update all the release items (entries and assets) to their latest versions before deployment.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.release:write</span> scope.</p><p>In the 'Body' section, you need to specify the following:</p><pre>{<br />    "items":[<br />        "$all"<br />    ]<br />}<br /></pre><p class="note"><strong>Note</strong>: This API request only allows you to collectively update all items in the release to their latest versions and not update any particular item individually.</p><p>In case an un-localized entry in the release has been localized later, this request will update the entry to the latest localized version. For example, if you add an un-localized entry to a release and later localize it to the French (France) language, this API request will update the release with the localized French version of the entry.</p><div class="note"><strong>Note</strong>: You cannot update the release items under the following scenarios:<ul><li>If the updated version of an entry has new references, this API request doesn't automatically add the references to the release. You need to add them manually.</li><li>You cannot update the items in a release once you deploy it.</li><li>If the latest version of an entry is in the in-progress state, this API request doesn't update the entry.</li></ul></div>

**API Endpoint**: `/releases/{release_uid}/update_items`

**Method**: `PUT`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release of which you want to update the items (entries and assets) to their latest versions. You can find the release uid by running the <a href="/docs/developers/apis/content-management-api#releases-collection">Get all Releases</a> API request.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **release_version** (optional)
  <p>Enter the release version.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter <span class="code">application/json</span> to pass a request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
    "items":[
        "$all"
    ]
}
```

## Response

```json
{
  "notice":"Release items updated to their latest versions successfully.",
  "release":{
    "name":"Sample release", 
    "description":"Sample release",
    "uid":"blt046d036db7f2f9df",
    "created_by":"blt55927d24ccdc8d74e",
    "updated_by":"bltf41b5ae869879839",
    "created_at":"2021-11-15T06:29:21.061Z",
    "updated_at":"2021-12-01T07:09:42.201Z",
    "locked":false,
    "status":[
      
    ],
    "_deploy_latest":false,
    "items":[
      {
        "uid":"blta5cd0e5e62e4bc97",
        "version":4,
        "action":"publish",
        "content_type_uid":"sample_ct",
        "locale":"en-us",
        "title":"Sample entry"
      },
      {
        "uid":"blte254916f7d580dda",
        "version":2,
        "action":"publish",
        "content_type_uid":"demo-ct",
        "locale":"en-us",
        "title":"11.jpg"
      }
    ]
  }
}

```

