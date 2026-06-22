---
title: "Add stack settings"
description: POST /stacks/settings
url: developers/apis/content-management-api/requests/add-stack-settings
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-05-13
---

# Add stack settings


**Method:** `POST`  
**Endpoint:** `/stacks/settings`

The Add stack settings request lets you add additional settings for your existing stack.

You can add specific settings for your stack by passing any of the following parameters in the “Request Body”:

- Following parameters can be passed within the stack_variables section:"enforce_unique_urls": true: Ensures that entry URLs are not duplicated across the stack.
- "sys_rte_allowed_tags": "figure, style, script": You can pass a combination of the three values, figure, style, and script, to this parameter (e.g., "sys_rte_allowed_tags": "figure, style, script", "sys_rte_allowed_tags": "figure", etc.):figure: Wraps images inside the “Rich Text Editor” field within the <figure> tag.
- style: Allows to use the <style> tag within the HTML code of a “Rich Text Editor” field.
- script: Allows to use the <script> tag within the HTML code of a “Rich Text Editor” field.Note: Contentstack highly recommends that you avoid using the <script> tag within the HTML code of a “Rich Text Editor” field due to its security vulnerabilities.

"sys_rte_skip_format_on_paste": "GD:font-size": Skips the font-size attribute, and GD indicates the external vendor Google Document’s prefix."sys_rte_skip_format_on_paste":"GD:color": Skips the color attribute, and GD indicates the external vendor Google Document’s prefix."sys_rte_skip_format_on_paste":"GD:background-color": Skips the background-color attribute, and GD indicates the external vendor Google Document’s prefix."sys_rte_skip_format_on_paste": "MW:color": Skips the color attribute, and MW indicates the external vendor Microsoft Word’s prefix.

**Note**: We are currently supporting four attributes (GD:font-size, GD:color, GD:background-color, and MW:color) for this key. This is applicable for both HTML and JSON Rich Text Editors. For more information, refer to the [API Change Log](/docs/changelog/#accept-or-skip-source-color-background-color-while-copying-content-into-html-json-rtes) for this update.

To enable/disable Live Preview, pass the following schema in the Request Body:

```
"live_preview": {
      "enabled": true,
      "default-env": "blt93a********5c8de",
      "default-url": "https://preview.example.com"
    }
```

The editor normally uses the "enter" key for paragraphs and "shift+enter" for line breaks. However, by enabling "cs_only_breakline": true and "cs_breakline_on_enter": true in the "rte" parameter, pressing "enter" creates a line break, and "shift+enter" creates a new paragraph.

Here’s a sample of the Request Body:

```
{
    "stack_settings": {
 		"stack_variables": {
			"enforce_unique_urls": true,
			"sys_rte_allowed_tags": "style,figure,script",
			"sys_rte_skip_format_on_paste": "GD:font-size"
        },
		"rte": {
			"cs_breakline_on_enter": true,
			"cs_only_breakline": true
		},       
        "live_preview": {
            "enabled": true,
            "default-env": "blt94aa4e3021b96811",
            "default-url": "https://preview.example.com"
        }
    }
}
```

If you exclusively set "cs_only_breakline": true within the "rte" parameter, it ensures that only a <br> tag is inserted in the "Rich Text Editor" field when the content manager presses "Enter". Conversely, when this parameter is set to false, the <br> tag is substituted with <p></p>.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | API_key_of_your_stack | Enter the API key of your stack. |

| authtoken | Your_Authtoken | Enter your authtoken. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

**Request Body:**

```json
{
    "stack_settings": {
 		"stack_variables": {
			"enforce_unique_urls": true,
			"sys_rte_allowed_tags": "style,figure,script",
			"sys_rte_skip_format_on_paste": "GD:font-size"
        },
		"rte": {
			"cs_breakline_on_enter": true,
			"cs_only_breakline": true
		},       
        "live_preview": {
            "enabled": true,
            "default-env": "blt94aa4e3021b96811",
            "default-url": "https://preview.example.com"
        }
    }
}
```

**Response (201):**

```json
{
    "notice": "Stack settings updated successfully.",
    "stack_settings": {
        "rte": {
            "cs_breakline_on_enter": true,
            "cs_only_breakline": true
        },
        "stack_variables": {
            "enforce_unique_urls": true,
            "sys_rte_allowed_tags": "style,figure,script",
            "sys_rte_skip_format_on_paste": "GD:font-size"
        },
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "2d805ad8c8b6d59a91fa4d6238d1894c3f4483e3"
        },
        "live_preview": {
            "enabled": true,
            "default-env": "blt94aa4e3021b96811",
            "default-url": "https://preview.example.com"
        }
    }
}
```
