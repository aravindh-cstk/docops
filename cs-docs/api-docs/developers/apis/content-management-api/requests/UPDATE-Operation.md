---
title: "UPDATE Operation"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}
url: developers/apis/content-management-api/requests/update-operation
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-06-21
---

# UPDATE Operation


**Method:** `PUT`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}`

The UPDATE operation allows you to update data at a specific index. This operation works for both singular fields and fields marked “Multiple”.

For example, you have an entry with a “Number” (named “Multiple Number”) field which has the values, “6,” “2,” “3,” “4,” and “5”, and you need to replace the number at the first index (a[0]) i.e., “6” with “1”. In this case, you need to use the UPDATE operation as follows:

```
{
    "entry": {
        "multiple_number": {
            "UPDATE": {
                "index": 0,
                "data": 1
            }
        }
    }
}
```

#### UPDATE Operation for Group Field

For example, consider a multi-group field - "banner" with 2 instances, and with titles “banner 1” and “banner 2”.  Using the update operation, to replace the title at the second instance (a[1]) i.e., “Banner 2” with “New update” and link title at the second index with "New level 2 update through CMA call". In this case, you need to use the UPDATE operation as follows:

```
{
    "entry": { 
        "group": {
            "UPDATE": {
                "index": 1,
                "data": {
                    "title": "New update",
                    "link": {
                        "UPDATE": {
                            "data": {
                                "title": "New level 2 update through CMA call"
                            }
                        }
                    }
                }
            }
        }
    }
}
```

Thus, using the UPDATE operation you can update a single/multi-level group field without sending the whole object array. 

#### UPDATE Operation for Nested Modular Blocks

For example, consider the following modular blocks nesting scenario:

Within "content_container" modular blocks, there is a "link_module" block. Within the link_module block, there are "link_components" modular blocks. Within the link_components modular blocks, there is a "link_component" block. In such nested modular blocks scenario, single line fields can be updated with the following Update operation:

```
{
    "entry": {
        "title": "example",
        "content_container": {
            "UPDATE": {
                "index": 1,
                "data": {
                    "link_module": {
                        "module_title": "test link module 2 Updated testing 2 new",
                        "link_components": {
                            "UPDATE": {
                                "index": 1,
                                "data": {
                                    "link_component": {
                                        "teaser": "updated Nested Module teaser using CMA call"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

Thus, using the UPDATE operation, you can update single/multi-level fields within the nested modular blocks without sending the whole object array.

#### Atomic Operators for Number Fields

Contentstack provides support for atomic operators that will specifically help you to work with “Number” fields. These atomic operators include ADD and SUB.

##### ADD Operation

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 | Enter Stack API Key. |

| authtoken | your_authtoken | Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests. |

| authorization | Your_Management_Token | Enter the management token. |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| content_type_uid | your_content_type_uid | Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack. |

| entry_uid | enter_your_entry_uid | Enter the unique ID of the entry. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

```json
{
	"entry": {
		"multiple_number": {
			"UPDATE": {
				"index": 0,
				"data": 1
			}
		}
	}
}
```

**Response (200):**

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "",
		"call_to_action_link": {
			"title": "",
			"href": ""
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 8,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:53:22.464Z",
		"_version": 3,
		"_in_progress": true,
		"multiple_number": [
			1,
			2,
			3,
			4,
			5
		],
		"multiple_group": []
	}
}
```
