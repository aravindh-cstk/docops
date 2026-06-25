---
title: "CDA | Assets"
description: Fetch published assets and asset metadata for use in Contentstack delivery experiences.
url: https://www.contentstack.com/docs/developer-apis/content-delivery-api/assets
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CDA | Assets

[Assets](/docs/content-managers/author-content/#create-and-manage-assets) refer to all the media files (images, videos, PDFs, audio files, and so on) uploaded in your Contentstack repository for future use. These files can be attached and used in multiple [entries](../../../../cs-docs/content-managers/author-content/about-entries.md).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack.

**Note**: [Branches](../content-management-api/branches.md) is a plan-based feature that is available only in the new Contentstack interface.

Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

## All Assets

### Get all assets

**GET** `/assets?environment={environment_name}&include_fallback=true&include_dimension={boolean_value}`

The Get all assets request fetches the list of all the assets of a particular stack. It returns the content of each asset in JSON format. You can also specify the environment of which you want to get the assets.

Additionally, if you wish to fetch the metadata attached to each asset, then you need to pass include_metadata as a query parameter. Set this parameter to true to include the asset metadata along with all assets in the response body.

You will find the entry metadata under the _metadata key in the response. It will be associated with a specific extension UID as follows:

```
"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
```

If an asset is not published in a specific locale, make use of the include_fallback=true query parameter to fetch the published version from the fallback locale.

You can apply [Queries](#queries) to filter assets/entries. Add a query parameter named query and provide your query (in JSON format) as the value.

**When using Delivery Tokens**

- Fetches ONLY published assets
- Environment is mandatory to fetch assets published on the specified environment
- Version is optionalIf no version is specified, it fetches the latest published version
- If a version is specified and if it is not the latest published version, it will not return any result

Locale is **optional**

- If no locale is specified, it returns the asset from the master locale
- If you specify a locale in the query, it returns the latest published version of the localized asset/assets
- If an asset is not localized, make use of the include_fallback=true query parameter to fetch the published asset from its fallback locale

#### Query Parameters

- **environment** (required)
  Enter the name of the environment if you want to retrieve the assets published in a particular environment.
  Default: `production`
- **include_fallback** (optional)
  Enter 'true' to include the published asset details from the fallback locale when the specified locale does not contain published content.
  Default: `true`
- **include_dimension** (optional)
  Enter 'true' to include the dimensions (height and width) of the image in the response. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD.
  Default: `true`
- **include_branch** (optional)
  Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
  "assets": [
    {
      "uid": "blt41cb1c94d363d824",
      "created_at": "2019-08-16T08:05:32.556Z",
      "updated_at": "2019-08-16T08:05:32.556Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/png",
      "file_size": "3780",
      "tags": [],
      "filename": "Samsung_Logo.png",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt41cb1c94d363d824/5d5663cc34d39437c37c537e/Samsung_Logo.png",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "Samsung_Logo.png",
      "dimension": {
        "height": 30.223,
        "width": 91.026
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:47.432Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "bltaf7230686bd6513c",
      "created_at": "2019-08-16T08:05:32.537Z",
      "updated_at": "2019-08-16T08:05:32.537Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/png",
      "file_size": "1537",
      "tags": [],
      "filename": "android-128.png",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltaf7230686bd6513c/5d5663ccd1312137ca910e00/android-128.png",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "android-128.png",
      "dimension": {
        "height": 128,
        "width": 128
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:47.432Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt19c34e5374418484",
      "created_at": "2019-08-16T08:05:30.460Z",
      "updated_at": "2019-08-16T08:05:30.460Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "69609",
      "tags": [],
      "filename": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt19c34e5374418484/5d5663ca9e9032233cab321a/in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
      "dimension": {
        "height": 615,
        "width": 802
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:47.432Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt6045a4b8db103c2b",
      "created_at": "2019-08-16T08:05:30.173Z",
      "updated_at": "2019-08-16T08:05:30.173Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/png",
      "file_size": "2185",
      "tags": [],
      "filename": "download.png",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt6045a4b8db103c2b/5d5663ca1a1b7e3885350f53/download.png",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "download.png",
      "dimension": {
        "height": 225,
        "width": 225
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:47.432Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "bltb7851ab3713053d0",
      "created_at": "2019-08-16T08:05:27.890Z",
      "updated_at": "2019-08-16T08:05:27.890Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/png",
      "file_size": "1546",
      "tags": [],
      "filename": "Samsung_Logo.png",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltb7851ab3713053d0/5d5663c7cb96683648a7967b/Samsung_Logo.png",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "Samsung_Logo.png",
      "dimension": {
        "height": 30,
        "width": 91
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:47.432Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt9c3dff6e3151d374",
      "created_at": "2019-08-16T08:05:27.886Z",
      "updated_at": "2019-08-16T08:05:27.886Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "5275",
      "tags": [],
      "filename": "download.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt9c3dff6e3151d374/5d5663c79722fb38d7db52e5/download.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "download.jpg",
      "dimension": {
        "height": 259,
        "width": 194
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:47.432Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt3eb813030ea67637",
      "created_at": "2019-08-16T08:05:25.659Z",
      "updated_at": "2019-08-16T08:05:25.659Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "78634",
      "tags": [],
      "filename": "galaxy_j1.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt3eb813030ea67637/5d5663c5e35aae24bf041e97/galaxy_j1.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "galaxy j1.jpg",
      "dimension": {
        "height": 624,
        "width": 612
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:47.432Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt95e09ccc2337ca8c",
      "created_at": "2019-08-16T08:05:25.658Z",
      "updated_at": "2019-08-16T08:05:25.658Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "48540",
      "tags": [],
      "filename": "iphone7lineup.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt95e09ccc2337ca8c/5d5663c546d2e3383a96ec64/iphone7lineup.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "iphone7lineup.jpg",
      "dimension": {
        "height": 677,
        "width": 800
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:47.432Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "bltd7186d6c49de3bf7",
      "created_at": "2019-08-16T08:05:23.252Z",
      "updated_at": "2019-08-16T08:05:23.252Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "7702",
      "tags": [],
      "filename": "xiaomi-redmi-3-pro-.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltd7186d6c49de3bf7/5d5663c35a08bc359f40780e/xiaomi-redmi-3-pro-.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "xiaomi-redmi-3-pro-.jpg",
      "dimension": {
        "height": 212,
        "width": 160
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:47.432Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt8880ccd8b0693000",
      "created_at": "2019-08-16T08:05:23.239Z",
      "updated_at": "2019-08-16T08:05:23.239Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "6356",
      "tags": [],
      "filename": "download_(2).jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt8880ccd8b0693000/5d5663c39abb322460ea02c5/download_(2).jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "download (2).jpg",
      "dimension": {
        "height": 101,
        "width": 498
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:56.964Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt198546991c0eea0a",
      "created_at": "2019-08-16T08:05:21.114Z",
      "updated_at": "2019-08-16T08:05:21.114Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "28485",
      "tags": [],
      "filename": "xiaomi-redmi-note-3-gray.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt198546991c0eea0a/5d5663c1295d353852cf6bce/xiaomi-redmi-note-3-gray.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "xiaomi-redmi-note-3-gray.jpg",
      "dimension": {
        "height": 457,
        "width": 457
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:56.964Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "bltde9105253cff407a",
      "created_at": "2019-08-16T08:05:21.094Z",
      "updated_at": "2019-08-16T08:05:21.094Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "3920",
      "tags": [],
      "filename": "02.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltde9105253cff407a/5d5663c11796f436ae56791e/02.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "02.jpg",
      "dimension": {
        "height": 114,
        "width": 114
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:56.964Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt11b00b9a335ed526",
      "created_at": "2019-08-16T08:05:18.935Z",
      "updated_at": "2019-08-16T08:05:18.935Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "166189",
      "tags": [],
      "filename": "samsung-galaxy-j1.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt11b00b9a335ed526/5d5663be995bf53944dfaf7b/samsung-galaxy-j1.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "samsung-galaxy-j1.jpg",
      "dimension": {
        "height": 1200,
        "width": 1200
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:56.964Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt50a7a9dd6866776f",
      "created_at": "2019-08-16T08:05:18.932Z",
      "updated_at": "2019-08-16T08:05:18.932Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "145200",
      "tags": [],
      "filename": "01.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt50a7a9dd6866776f/5d5663be34d39437c37c5376/01.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "01.jpg",
      "dimension": {
        "height": 1600,
        "width": 1600
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:56.964Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt11340726a6731924",
      "created_at": "2019-08-16T08:05:16.147Z",
      "updated_at": "2019-08-16T08:05:16.147Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "125788",
      "tags": [],
      "filename": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000001-front-gold.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt11340726a6731924/5d5663bcc29b63381a362909/in-galaxy-note-5-n9208-sm-n9208zdvins-000000001-front-gold.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000001-front-gold.jpg",
      "dimension": {
        "height": 615,
        "width": 802
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:56.964Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "bltc4f54f7ce3155b0e",
      "created_at": "2019-08-16T08:05:15.889Z",
      "updated_at": "2019-08-16T08:05:15.889Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "48163",
      "tags": [],
      "filename": "iphone7.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltc4f54f7ce3155b0e/5d5663bbdf859f364dbe36dd/iphone7.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "iphone7.jpg",
      "dimension": {
        "height": 532,
        "width": 600
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:56.964Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt5e520596299d24f6",
      "created_at": "2019-08-16T08:05:09.297Z",
      "updated_at": "2019-08-16T08:05:13.378Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/png",
      "file_size": "1850718",
      "tags": [],
      "filename": "BB_MacBook.png",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt5e520596299d24f6/5d5663b931dae323db2ef715/BB_MacBook.png",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 2,
      "title": "android-128.png",
      "dimension": {
        "height": 1000,
        "width": 1600
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:56.964Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "bltda02effe8bc97bb9",
      "created_at": "2019-08-16T08:05:09.588Z",
      "updated_at": "2019-08-16T08:05:09.588Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "45091",
      "tags": [],
      "filename": "Apple-iPhone-SE-Rose-Gold.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltda02effe8bc97bb9/5d5663b546d2e3383a96ec5e/Apple-iPhone-SE-Rose-Gold.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "Apple-iPhone-SE-Rose-Gold.jpg",
      "dimension": {
        "height": 550,
        "width": 640
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:56.964Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt86f9d1967569436a",
      "created_at": "2019-08-16T08:05:07.150Z",
      "updated_at": "2019-08-16T08:05:07.150Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "2960",
      "tags": [],
      "filename": "apple.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt86f9d1967569436a/5d5663b3a8b7e33799fda747/apple.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "apple.jpg",
      "dimension": {
        "height": 225,
        "width": 225
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:28:56.964Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt74c7996bd604c1b4",
      "created_at": "2019-08-16T08:05:07.145Z",
      "updated_at": "2019-08-16T08:05:07.145Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/png",
      "file_size": "2511",
      "tags": [],
      "filename": "Apple_logo_black.png",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt74c7996bd604c1b4/5d5663b32c082035a470808c/Apple_logo_black.png",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "Apple_logo_black.png",
      "dimension": {
        "height": 170,
        "width": 170
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:29:04.717Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "bltf8c7852efd06d11f",
      "created_at": "2019-08-16T08:05:05.009Z",
      "updated_at": "2019-08-16T08:05:05.009Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/png",
      "file_size": "63422",
      "tags": [],
      "filename": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltf8c7852efd06d11f/5d5663b166aa1a361fba10f9/in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png",
      "dimension": {
        "height": 302,
        "width": 400
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:29:04.717Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    },
    {
      "uid": "blt54f85c58ff2dea2d",
      "created_at": "2019-08-16T08:05:04.736Z",
      "updated_at": "2019-08-16T08:05:04.736Z",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "bltcd82b2c6bf913241",
      "content_type": "image/jpeg",
      "file_size": "3920",
      "tags": [],
      "filename": "02.jpg",
      "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt54f85c58ff2dea2d/5d5663b0c883c1383005e8c9/02.jpg",
      "ACL": {
        "roles": [],
        "others": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "sub_acl": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false,
            "publish": false
          }
        }
      },
      "is_dir": false,
      "_version": 1,
      "title": "02.jpg",
      "dimension": {
        "height": 114,
        "width": 114
      },
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-19T12:29:04.717Z",
        "user": "blt587a89fc7883c56700a95bfe"
      }
    }
  ]
}
```




## Single Asset

### Get a single asset

**GET** `/assets/{asset_uid}?environment={environment_name}&version={version}&include_fallback=true&include_dimension={boolean_value}`

The Get a single asset request fetches the latest version of a specific asset of a particular stack.

**Tip**: If no version is mentioned, the request will retrieve the latest published version of the asset. To get a specific version of an asset, refer to the [Get a Single Asset](../../../api-detail/content-management-api.md#get-a-single-asset) management API.

Additionally, if you wish to fetch the metadata attached to each asset, then you need to pass include_metadata as a query parameter. Set this parameter to true to include the asset metadata along with all assets in the response body.

You will find the entry metadata under the _metadata key in the response. It will be associated with a specific extension UID as follows:

```
"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
```

If an asset is not published in a specific locale, make use of the include_fallback=true query parameter to fetch the published version from the fallback locale.

**When using Delivery Tokens**

- Fetches ONLY published asset
- Environment is mandatory to fetch an asset published on the specified environment
- Version is optionalIf no version is specified, it fetches the latest published version
- If a version is specified and if it is not the latest published version, it will not return any result

Locale is **optional**

- If no locale is specified, it returns the asset from the master locale
- If you specify a locale in the query, it returns the latest published version of the localized asset
- If an asset is not localized, make use of the include_fallback=true query parameter to fetch the published asset from its fallback locale

#### URL Parameters

- **asset_uid** (required)
  Enter the unique ID of the asset of which you want to retrieve the details.
  Default: `blt19c34e5374418484`

#### Query Parameters

- **environment** (required)
  Enter the name of the environment if you want to retrieve an asset published in a particular environment.
  Default: `production`
- **version** (optional)
  Specify the version number of the asset that you want to retrieve. To retrieve a specific version, keep the environment parameter blank. If the version is not specified, the details of the latest version will be retrieved.
  Default: `1`
- **include_fallback** (optional)
  Enter 'true' to include published asset details from the fallback locale when the specified locale does not contain published information.
  Default: `true`
- **include_dimension** (optional)
  Enter 'true' to include the dimensions (height and width) of the image in the response. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD.
  Default: `true`
- **include_branch** (optional)
  Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`
- **include_metadata** (optional)
  Set this parameter to true to include the asset metadata along with all assets in the response body.
  Default: `true`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
  "asset": {
    "uid": "blt19c34e5374418484",
    "created_at": "2019-08-16T08:05:30.460Z",
    "updated_at": "2019-08-16T08:05:30.460Z",
    "created_by": "bltcd82b2c6bf913241",
    "updated_by": "bltcd82b2c6bf913241",
    "content_type": "image/jpeg",
    "file_size": "69609",
    "tags": [],
    "filename": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
    "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt19c34e5374418484/5d5663ca9e9032233cab321a/in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
    "ACL": {
      "roles": [],
      "others": {
        "read": false,
        "create": false,
        "update": false,
        "delete": false,
        "sub_acl": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "publish": false
        }
      }
    },
    "is_dir": false,
    "_version": 1,
    "title": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
    "dimension": {
      "height": 615,
      "width": 802
    },
    "publish_details": {
      "environment": "blta39a4441696e35e0",
      "locale": "en-us",
      "time": "2019-08-19T12:28:47.432Z",
      "user": "blt587a89fc7883c56700a95bfe"
    }
  }
}
```

