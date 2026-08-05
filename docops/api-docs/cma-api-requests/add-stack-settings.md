---
title: "Add stack settings"
description: /stacks/settings
url: /add-stack-settings
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:00.818Z
updated_at: 2025-05-13T06:05:17.177Z
---

# Add stack settings

<p>The <span data-type='inlineCode'>Add stack settings</span> request lets you add additional settings for your existing stack.</p><p>You can add specific settings for your stack by passing any of the following parameters in the “Request Body”:</p><ul><li>Following parameters can be passed within the <span class="code">stack_variables</span> section:<ul><li><span data-type='inlineCode'>"enforce_unique_urls": true</span>: Ensures that entry URLs are not duplicated across the stack.</li><li><span data-type='inlineCode'>"sys_rte_allowed_tags": "figure, style, script"</span>: You can pass a combination of the three values, <span data-type='inlineCode'>figure</span>, <span data-type='inlineCode'>style</span>, and <span data-type='inlineCode'>script</span>, to this parameter (e.g., <span data-type='inlineCode'>"sys_rte_allowed_tags": "figure, style, script"</span>, <span data-type='inlineCode'>"sys_rte_allowed_tags": "figure"</span>, etc.):<br /><ul><li><span data-type='inlineCode'>figure</span>: Wraps images inside the “Rich Text Editor” field within the <span data-type='inlineCode'>&lt;figure&gt;</span> tag.</li><li><span data-type='inlineCode'>style</span>: Allows to use the <span data-type='inlineCode'>&lt;style&gt;</span> tag within the HTML code of a “Rich Text Editor” field.</li><li><span data-type='inlineCode'>script</span>: Allows to use the <span data-type='inlineCode'>&lt;script&gt;</span> tag within the HTML code of a “Rich Text Editor” field.<br /><p class="note"><strong>Note</strong>: Contentstack highly recommends that you <strong>avoid using</strong> the <span data-type='inlineCode'>&lt;script&gt;</span> tag within the HTML code of a “Rich Text Editor” field due to its security vulnerabilities.</p></li></ul></li><li><span data-type='inlineCode'>"sys_rte_skip_format_on_paste": "GD:font-size"</span>: Skips the <span data-type='inlineCode'>font-size</span> attribute, and GD indicates the external vendor Google Document’s prefix.</li><li><span data-type='inlineCode'>"sys_rte_skip_format_on_paste":"GD:color"</span>: Skips the <span data-type='inlineCode'>color</span> attribute, and GD indicates the external vendor Google Document’s prefix.</li><li><span data-type='inlineCode'>"sys_rte_skip_format_on_paste":"GD:background-color"</span>: Skips the <span data-type='inlineCode'>background-color</span> attribute, and GD indicates the external vendor Google Document’s prefix.</li><li><span data-type='inlineCode'>"sys_rte_skip_format_on_paste": "MW:color"</span>: Skips the <span data-type='inlineCode'>color</span> attribute, and MW indicates the external vendor Microsoft Word’s prefix.<p class="note"><strong>Note</strong>: We are currently supporting four attributes (<span data-type='inlineCode'>GD:font-size</span>, <span data-type='inlineCode'>GD:color</span>, <span data-type='inlineCode'>GD:background-color</span>, and <span data-type='inlineCode'>MW:color</span>) for this key. This is applicable for both HTML and JSON Rich Text Editors. For more information, refer to the <a href="/docs/changelog/#accept-or-skip-source-color-background-color-while-copying-content-into-html-json-rtes" target="_self">API Change Log</a> for this update.</p></li></ul></li><li>To enable/disable Live Preview, pass the following schema in the Request Body:<pre>    "live_preview": {<br />      "enabled": true,<br />      "default-env": "blt93a********5c8de",<br />      "default-url": "https://preview.example.com"<br />    }</pre></li><li>The editor normally uses the "enter" key for paragraphs and "shift+enter" for line breaks. However, by enabling <span data-type='inlineCode'>"cs_only_breakline": true</span> and <span data-type='inlineCode'>"cs_breakline_on_enter": true</span> in the <span data-type='inlineCode'>"rte"</span> parameter, pressing "enter" creates a line break, and "shift+enter" creates a new paragraph.</li></ul><p>Here’s a sample of the Request Body:</p><pre>{<br />    "stack_settings": {<br /> 		"stack_variables": {<br />			"enforce_unique_urls": true,<br />			"sys_rte_allowed_tags": "style,figure,script",<br />			"sys_rte_skip_format_on_paste": "GD:font-size"<br />        },<br />		"rte": {<br />			"cs_breakline_on_enter": true,<br />			"cs_only_breakline": true<br />		},       <br />        "live_preview": {<br />            "enabled": true,<br />            "default-env": "blt94aa4e3021b96811",<br />            "default-url": "https://preview.example.com"<br />        }<br />    }<br />}</pre><p>If you exclusively set <span data-type='inlineCode'>"cs_only_breakline": true</span> within the <span data-type='inlineCode'>"rte"</span> parameter, it ensures that only a <span data-type='inlineCode'>&lt;br&gt;</span> tag is inserted in the "Rich Text Editor" field when the content manager presses "Enter". Conversely, when this parameter is set to false, the <span data-type='inlineCode'>&lt;br&gt;</span> tag is substituted with <span data-type='inlineCode'>&lt;p&gt;&lt;/p&gt;</span>.</p>

**API Endpoint**: `/stacks/settings`

**Method**: `POST`

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

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

## Response

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

