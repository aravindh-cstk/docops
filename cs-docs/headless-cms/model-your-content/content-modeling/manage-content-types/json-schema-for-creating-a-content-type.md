---
title: "JSON schema for creating a content type"
description: "Find JSON Schema of fields explained, with examples for creating a content type via the Contentstack RESTful APIs. Understand different schema parameters here."
url: /headless-cms/json-schema-for-creating-a-content-type
---

# JSON schema for creating a content type

## JSON Schema for Creating a Content Type

Contentstack understands JSON data. If you want to [create a content type through API](/docs/developers/apis/content-management-api/content-types#create-a-content-type) or a JSON file (instead of through the user interface), you need to create a JSON file that contains the content type schema and use the "[Import content type](/docs/headless-cms/import-a-content-type)" option in the product or send the schema as the body in the API request.

Each [field](/docs/headless-cms/about-fields) added in the content type has its schema. Let's look at them in detail in the following section.

## JSON Schema of Fields

Here's the JSON schema of all the fields and how you can use them in the content type JSON file.

### Title

The [Title](/docs/headless-cms/title) field is the entry title and will have a unique value, i.e., entries cannot have the same title.

The schema of the Title field is given as follows:

```
{
    "display_name": "Title",
    "uid": "title",
    "data_type": "text",
    "mandatory": true,
    "unique": true,
    "field_metadata": {
        "_default": true
    },
    "multiple": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

To mark this field as non-unique, set the unique parameter to false.

### URL

The [URL](/docs/headless-cms/url) field allows you to enter a URL of the entry.

The schema of the URL field is as follows:

```
{
    "display_name": "URL",
    "uid": "url",
    "data_type": "text",
    "mandatory": true,
    "field_metadata": {
        "_default": true
    },
    "multiple": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

### Single line textbox

The [**Single Line Textbox**](/docs/headless-cms/single-line-textbox) field supports only plain text and is used to enter some short text. 

The schema of the Single line textbox field is given as follows:

```
{
    "data_type": "text",
    "display_name": "Single line textbox",
    "uid": "single_line",
    "field_metadata": {
        "description": "",
        "default_value": ""
    },
    "format": "",
    "error_messages": {
        "format": ""
    },
    "multiple": false,
    "mandatory": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section. This field possesses a couple of parameters that you can add as follows:

-   format: This parameter takes a regex that you can use to validate the value of a field.
-   error\_messages: This parameter is the error message that will be displayed if a field value is not validated. You can set a format for it as well.

### Multi line textbox

The [**Multi Line Textbox**](/docs/headless-cms/multi-line-textbox) field accepts multi-line arbitrary text and enters a large chunk of data.

The schema of the Multi line textbox field is given as follows:

```
{
    "data_type": "text",
    "display_name": "Multi line textbox",
    "uid": "multi_line",
    "field_metadata": {
        "description": "",
        "default_value": "",
        "multiline": true
    },
    "format": "",
    "error_messages": {
        "format": ""
    },
    "multiple": false,
    "mandatory": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section. This parameter possesses a couple of parameters, such as format and error\_messages, common to the “Single Line Textbox” field.

### HTML-based Rich text editor

The [**HTML-based Rich Text Editor**](/docs/headless-cms/rich-text-editor) field accepts a variety of data types, such as text, images, and videos and allows you to format the content entered in the field.

The schema of the HTML-based Rich Text Editor field is given as follows:

```
{
    "data_type": "text",
    "display_name": "HTML Rich text editor",
    "uid": "html_rich_text_editor",
    "field_metadata": {
        "allow_rich_text": true,
        "description": "",
        "multiline": false,
        "rich_text_type": "advanced",
        "version": 3
    },
    "multiple": false,
    "mandatory": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the "[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)" section.

Within the field\_metadata parameter, you can provide the keys given below:

-   allow\_rich\_text: This key determines whether the editor will support rich text and is set to true by default for Rich Text Editors.
-   description: This key allows you to provide the content for the Rich text editor field.
-   multiline: This key provides multiline capabilities to the Rich text editor.
-   rich\_text\_type: This key lets you enable the basic, custom, or advanced editor to enter your content.
-   options: If you choose the **Custom** editor, then the options key lets you specify the formatting options you prefer for your RTE toolbar, e.g., "options": \["h3", "blockquote", "sup"\]
-   version: This key determines whether you are using the older version of the Rich Text Editor or the latest version. The value of 1 denotes an older version of the editor, while 3 denotes the latest version of the editor.

The following table displays the various formatting options that can be added to your customized HTML-based RTE toolbar:

<table><tbody><tr><td><p>Formatting Options</p></td><td><p>Description</p></td></tr><tr><td><span class="code">html</span></td><td><p>Allows you to view and edit your content in HTML format.</p></td></tr><tr><td><span class="code">undo</span></td><td><p>Allows you to undo your last action. You can undo more than one action.</p></td></tr><tr><td><span class="code">redo</span></td><td><p>Allows you to redo an undone action. You can redo more than one undone action.</p></td></tr><tr><td><span class="code">blockquote</span></td><td><p>Allows you to set apart quoted text from the surrounding content.</p></td></tr><tr><td><span class="code">pre</span></td><td><p>Allows you to apply code block formatting to a specific code snippet.</p></td></tr><tr><td><span class="code">h1</span> to <span class="code">h6</span></td><td><p>Allows you to apply a specific heading style to a piece of text. You can apply <strong>Heading 1</strong>, <strong>2</strong>, <strong>3</strong>, <strong>4</strong>, <strong>5</strong>, or <strong>6</strong> depending upon the heading level.</p></td></tr><tr><td><span class="code">h1</span> to <span class="code">h6</span></td><td><p>Allows you to apply a specific heading style to a piece of text. You can apply <strong>Heading 1</strong>, <strong>2</strong>, <strong>3</strong>, <strong>4</strong>, <strong>5</strong>, or <strong>6</strong> depending upon the heading level.</p></td></tr><tr><td><span class="code">bold</span></td><td><p>Allows you to highlight certain text within the editor in bold.</p></td></tr><tr><td><span class="code">underline</span></td><td><p>Allows you to underline specific text within the editor.</p></td></tr><tr><td><span class="code">italic</span></td><td><p>Allows you to italicize specific text within the editor.</p></td></tr><tr><td><span class="code">deleted</span></td><td><p>Allows you to strikethrough certain words in the editor.</p></td></tr><tr><td><span class="code">sup</span></td><td><p>Allows you to format certain text in the editor as superscript.</p></td></tr><tr><td><span class="code">sub</span></td><td><p>Allows you to format certain text in the editor as subscript.</p></td></tr><tr><td><span class="code">lists</span></td><td><p>Allows you to structure a list of related items within the text as numbered or bulleted lists.</p></td></tr><tr><td><span class="code">alignment</span></td><td><p>Allows you to change text alignment inside the editor. By default, Contentstack aligns text to the left. You can either center the text, align it to the right, or justify it.</p></td></tr><tr><td><span class="code">video</span></td><td><p>Allows you to embed a YouTube or Vimeo video within the rich text editor content.</p></td></tr><tr><td><span class="code">imagemanager</span></td><td><p>Allows you to insert images within the rich text editor content.</p></td></tr><tr><td><span class="code">table</span></td><td><p>Allows you to add a table to the rich text editor content.</p></td></tr><tr><td><span class="code">link</span></td><td><p>Allows you to add hyperlinks to certain text within the editor content.</p></td></tr><tr><td><span class="code">properties</span></td><td><p>Allows you to point a piece of text to a certain class or ID defined within the stylesheet used for formatting the editor. The class or ID attribute you specify applies a specific style to the concerned text.</p></td></tr><tr><td><span class="code">reference_to</span></td><td><p>Allows you to embed entries and assets within an entry.</p></td></tr></tbody></table>

### JSON Rich Text Editor

The [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) field accepts a variety of data types, such as text, images, and videos and allows you to format the content entered in the field.

The schema for the JSON RTE field within a content type is as follows:

```
{
  "data_type":"json",
  "display_name":"JSON RTE",
  "uid":"json_rte",
  "field_metadata":{
    "allow_json_rte":true,
    "rich_text_type":"advanced",
    "description":"",
    "default_value":""
  },
  "reference_to":[
    "content_type_uid"
  ],
  "non_localizable":false,
  "multiple":false,
  "mandatory":false,
  "unique":false
}
```

**Note:** The JSON Rich Text Editor will have the same formatting options as the [HTML-based RTE](/docs/headless-cms/json-schema-for-creating-a-content-type#rich-text-editor) that can be added to your customized RTE toolbar. The only difference would be that the JSON RTE will not have the HTML source code viewer.

**Additional Resource:** You can also migrate content from your HTML-based RTE to the new JSON RTE using our CLI. Read more about our [migration guide](/docs/headless-cms/migrate-content-from-html-rte-to-json-rte).

### Markdown

The [**Markdown**](/docs/headless-cms/markdown) field accepts text in markdown format which is an easy-to-read text that is marked with certain tags or formatting instructions.

The schema of the Markdown field is given as follows:

```
{
    "data_type": "text",
    "display_name": "Markdown",
    "uid": "markdown",
    "field_metadata": {
        "description": "",
        "markdown": true
    },
    "multiple": false,
    "mandatory": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

To enable the field to accept markdown content, you need to set a key, "markdown": true, in the field\_metadata parameter.

### Select

The [**Select**](/docs/headless-cms/select) field allows users to choose one or more options from a set of predefined choices that can be displayed in the form of radio buttons, checkboxes, or dropdown options.

The schema of the **Select** field is given as follows:

```
{
    "data_type": "text",
    "display_name": "Select",
    "display_type": "dropdown",
    "enum": {
        "advanced": false,
        "choices": [{
            "value": "1"
        }, {
            "value": "2"
        }, {
            "value": "3"
        }]
    },
    "multiple": true,
    "uid": "select",
    "field_metadata": {
        "description": "",
        "default_value": ""
    },
    "mandatory": false,
    "unique": false
}
```

  

When the **Key-value pair** option is toggled on, the advanced parameter in the Select field schema is set to true and the schema displays the key and value added by the user.

The schema of such a Select field is given as follows:

```
{
    "data_type":"text",
    "display_name":"Select",
    "display_type":"dropdown",
    "enum":{
        "advanced":true,
        "choices":[
            {
                "key":"New York",
                "value":"NY"
            },
            {
                "key":"India",
                "value":"IN"
            },
            {
                "key":"Australia",
                "value":"AUS"
            }
        ]
    },
    "multiple":true,
    "uid":"select",
    "field_metadata":{
        "description":"",
        "default_value":""
    },
    "mandatory":false,
    "unique":false
}
```

  

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

Additionally, you need to set the parameters given below:

-   display\_type: This parameter allows you to assign a display type either in the form of radio button, checkboxes, or dropdown.
-   enum: This parameter allows you to provide the choice for the ‘Select’ field.
-   advanced: This parameter when set to true allows you to provide choices for the 'Select' field in key-value pairs.

### Modular Blocks

The [**Modular Blocks**](/docs/headless-cms/modular-blocks) field allows content managers to dynamically create and modify components of a page or app on the go.

The schema of a **Modular Blocks** field consisting of a **Single Line Textbox** and a **Rich Text Editor** is given as follows:

```
{
    "data_type": "blocks",
    "display_name": "Modular Blocks",
    "abstract": "Create content dynamically",
    "blocks": [{
        "title": "Block",
        "uid": "block",
        "autoEdit": true,
        "schema": [{
                "data_type": "text",
                "display_name": "Single line textbox",
                "abstract": "Name, title, email address, any short text",
                "uid": "single_line",
                "field_metadata": {
                    "description": "",
                    "default_value": ""
                },
                "class": "high-lighter",
                "format": "",
                "error_messages": {
                    "format": ""
                }
            },
            {
                "data_type": "text",
                "display_name": "Rich text editor",
                "abstract": "Long text with formatting options",
                "uid": "rich_text_editor",
                "field_metadata": {
                    "allow_rich_text": true,
                    "description": "",
                    "multiline": false,
                    "rich_text_type": "advanced"
                },
                "class": "high-lighter"
            }
        ]
    }],
    "multiple": true,
    "uid": "modular_blocks",
    "field_metadata": {}
}
```

You can also add Global fields as blocks in a Modular Blocks field. The schema of a **Modular Blocks** field consisting of a **Global** field as a block and a normal block schema is given as follows:

```
{
    "data_type": "blocks",
    "display_name": "Modular Blocks",
    "abstract": "Create content dynamically",
    "blocks": [{
        "title": "Block",
        "uid": "block",
        "autoEdit": true,
        "schema": [{
                "data_type": "text",
                "display_name": "Single line textbox",
                "abstract": "Name, title, email address, any short text",
                "uid": "single_line",
                "field_metadata": {
                    "description": "",
                    "default_value": ""
                },
                "class": "high-lighter",
                "format": "",
                "error_messages": {
                    "format": ""
                }
            },
            {
                "data_type": "text",
                "display_name": "Rich text editor",
                "abstract": "Long text with formatting options",
                "uid": "rich_text_editor",
                "field_metadata": {
                    "allow_rich_text": true,
                    "description": "",
                    "multiline": false,
                    "rich_text_type": "advanced"
                },
                "class": "high-lighter"
            }
        ]
    }, {
        "title": "Block",
        "uid": "block",
        "reference_to": "global_field_uid"
    }],
    "multiple": true,
    "uid": "modular_blocks",
    "field_metadata": {}
}
```

You need to mention the Global field that your parent content type will refer to in the reference\_to parameter.

### Number

The [**Number**](/docs/headless-cms/number) field accepts numeric data where you can enter any kind of numbers such as phone number or zip code.

The schema of the **Number** field is given as follows:

```
{
    "data_type": "number",
    "display_name": "Number",
    "uid": "number",
    "field_metadata": {
        "description": "",
        "default_value": ""
    },
    "multiple": false,
    "mandatory": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

You need to enter the data\_type parameter as number.

### Boolean

The [**Boolean**](/docs/headless-cms/boolean) field accepts a true or false value.

The schema of the Boolean field is given as follows:

```
{
    "data_type": "boolean",
    "display_name": "Boolean",
    "uid": "boolean",
    "field_metadata": {
        "description": "",
        "default_value": ""
    },
    "multiple": false,
    "mandatory": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

You need to enter the data\_type parameter as boolean.

### Date

The [**Date**](/docs/headless-cms/date) field renders a calendar that allows the user to select a date and time, which is accepted in the ISO format

The schema of the Date field is given as follows:

```
{
    "data_type": "isodate",
    "display_name": "Date",
    "uid": "date",
    "startDate": null,
    "endDate": null,
    "field_metadata": {
        "description": "",
        "default_value": ""
    },
    "multiple": false,
    "mandatory": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

You need to enter the data\_type parameter as isodate, and provide the startDate and endDate parameters if you want to display a date range.

### File

The [**File**](/docs/headless-cms/file) field lets you upload or use files in your entry.

The schema of the **File** field is given as follows:

```
{
    "data_type": "file",
    "display_name": "File",
    "uid": "file",
    "extensions": [],
    "field_metadata": {
        "description": "",
        "rich_text_type": "standard"
    },
    "multiple": false,
    "mandatory": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

Set the data\_type parameter as file and add the extensions parameter. Additionally, mention the "rich\_text\_type": "standard" key in the field\_metadata parameter.

### Link

The [**Link**](/docs/headless-cms/link) field accepts a valid static or relative [URL](/docs/headless-cms/about-urls) and a title.

The schema of the **Link** field is given as follows:

```
{
    "data_type": "link",
    "display_name": "Link",
    "uid": "link",
    "field_metadata": {
        "description": "",
        "default_value": {
            "title": "",
            "url": ""
        }
    },
    "multiple": false,
    "mandatory": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

Set the data\_type parameter as linklink, and add title and url in the default\_value key within the field\_metadata parameter.

### Reference

The [**Reference**](/docs/headless-cms/reference) field allows you to create references to [entries](/docs/headless-cms/about-entries) of the same [content type](/docs/headless-cms/about-content-types) or other content types.

The schema of the **Reference** field is given as follows:

```
{
    "data_type": "reference",
    "display_name": "Reference",
    "reference_to": "",
    "field_metadata": {
        "ref_multiple": false
    },
    "uid": "reference",
    "mandatory": false,
    "multiple": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

You need to mention either the same content type or another content type that your parent content type will refer to in the reference\_to parameter.

### Group

The [**Group**](/docs/headless-cms/group) field allows you to create a group of multiple fields.

The schema of the **Group** field is given as follows:

```
{
    "data_type": "group",
    "display_name": "Group",
    "field_metadata": {},
    "schema": [{
        "data_type": "text",
        "display_name": "Single line textbox",
        "uid": "single_line",
        "field_metadata": {
            "description": "",
            "default_value": ""
        },
        "format": "",
        "error_messages": {
            "format": ""
        },
        "multiple": false,
        "mandatory": false,
        "unique": false
    }],
    "uid": "group",
    "multiple": true,
    "mandatory": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

The details of the fields that you need to add in the Group field are mentioned in the schema parameter.

### Global Field

A [**Global**](/docs/headless-cms/global) field is a reusable field (or group of fields) that you can define once and reuse in any content type within your [stack](/docs/headless-cms/about-stack).

The schema of the **Global** field is given as follows:

```
{
  "data_type": "global_field",
  "display_name": "Global Field",
  "reference_to": "{{global_field_uid}}",
  "uid": "global_field",
  "mandatory": false,
  "multiple": false,
  "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

The details of the fields that have to be added in the Global field are mentioned in the schema parameters.

### Taxonomy

The [Taxonomy](/docs/headless-cms/about-taxonomy) field allows users to categorize content within your stack to facilitate easy navigation, search, and retrieval of information.

The schema of the Taxonomy field is given as follows:

```
{
   "uid":"taxonomies",
   "taxonomies":[
      {
         "taxonomy_uid":"taxonomy_1",
         "max_terms":5,
         "mandatory":true,
         "non_localizable":false
      },
      {
         "taxonomy_uid":"taxonomy_2",
         "max_terms":10,
         "mandatory":false,
         "non_localizable":false
      }
   ],
   "multiple":true
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

### Custom Field – Group Within Group

You can create a custom field by adding a **Group** field within another **Group** field.

The schema of the **Group** Within **Group** field is given as follows:

```
{
    "data_type": "group",
    "display_name": "Group_within_group",
    "field_metadata": {},
    "schema": [{
        "data_type": "group",
        "display_name": "Group_within_group_subgroup",
        "field_metadata": {},
        "schema": [{
            "data_type": "text",
            "display_name": "Single line textbox",
            "uid": "single_line",
            "field_metadata": {
                "description": "",
                "default_value": ""
            },
            "format": "",
            "error_messages": {
                "format": ""
            },
            "multiple": false,
            "mandatory": false,
            "unique": false
        }],
        "uid": "group_within_group_subgroup",
        "multiple": true,
        "max_instance": 2,
        "mandatory": false,
        "unique": false
    }],
    "uid": "group_within_group",
    "multiple": false,
    "mandatory": false,
    "unique": false
}
```

The parameters in the JSON body above are explained in the “[Field Parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained)” section.

The max\_instance parameter lets you decide the maximum limit for your internal Group, within the main Group schema.

### Custom Field - Global Field within Group Field

You can create a [**Custom**](/docs/headless-cms/custom) field by adding a **Global** field within another **Group** field.

The schema of the Global field within Group field is given as follows:

```
{
    "data_type": "group",
    "display_name": "Group",
    "schema": [{
        "data_type": "global_field",
        "display_name": "Global",
        "reference_to": "global_field_uid",
        "field_metadata": {
            "description": ""
        },
        "uid": "global"
    }],
    "uid": "group",
    "multiple": false,
    "mandatory": false
}
```

### Custom Field – Extensions

You can create a custom field that you can use in your content types.

The schema of the Extension field is given as follows:

```
{
    "display_name": "Extension",
    "uid": "text",
    "data_type": "json",
    "extension_uid": "blt002c000ce00b00000",
    "config": {
         "key": "value"
       },
    "mandatory": true,
    "field_metadata": {
        "_default": true
    },
    "multiple": false,
    "unique": false
}
```

**Note:** config JSON object key(s) cannot start with “**$**” or contain “**.**”

## Field Parameters Explained

Let’s see the parameters in the schema in detail:

<table><tbody><tr><td><p><strong>Parameters</strong></p></td><td><p><strong>Description</strong></p></td><td><p><strong>Supported fields</strong></p></td></tr><tr><td><span class="code">display_name</span></td><td><p>Determines the display name of a field. It is a mandatory field.</p></td><td><p>All fields</p></td></tr><tr><td><span class="code">uid</span></td><td><p>Represents the unique ID of each field. It is a mandatory field.</p></td><td><p>All fields</p></td></tr><tr><td><span class="code">data_type</span></td><td><p>Determines what value can be provided to the Title field.</p></td><td><p>All fields</p></td></tr><tr><td><span class="code">field_metadata</span></td><td><p>Allows you to enter additional data about a field. Also, you can add additional values under ‘field_metadata’.</p><ul><li><span class="code">isTitle</span>: Allows you to assign the value of a specific field as the title of a Group field.</li><li><span class="code">_default:</span> Allows you to set default fields for content types.</li><li><span class="code">default_value:</span> Allows you to set a default value for a field.</li><li><span class="code">allow_rich_text:</span> Determines whether the editor will support rich text, and is set to ‘true’ by default for Rich Text Editors.</li><li><span class="code">description:</span> Allows you to provide the content for the Rich text editor field.</li><li><span class="code">multiline:</span> Provides multi-line capabilities to the Rich text editor.</li><li><span class="code">rich_text_type:</span> Lets you enable either the <span class="code">basic</span>, <span class="code">custom</span>, or <span class="code">advanced</span> editor to enter your content.</li><li><span class="code">options</span>: If you choose the <strong>Custom</strong> editor, then the <span class="code">options</span> key lets you specify the formatting options you prefer for your RTE toolbar, e.g., <span class="code">"options": ["h3", "blockquote", "sup"]</span></li><li><span class="code">version</span>: This key determines whether you are using the older version of the Rich Text Editor or the latest version. The value of <strong>1</strong> denotes that it is an older version of the editor, while <strong>3</strong> denotes that it is the latest version of the editor.</li><li><span class="code">markdown:</span> Lets you assign a field to be a markdown by setting its value to ‘true’.</li><li><span class="code">placeholder:</span> Allows you to provide a hint text about the values that need to be entered in an input field, e.g., Single Line Textbox. This text can be seen inside the field until you enter a value.</li><li><span class="code">instruction:</span> Allows you to add instructions for the content managers while entering values for a field. The instructional text appears below the field.</li><li><span class="code">description:</span> Allows you to provide additional information about a field. The help text appears when the user hovers on the "?" sign beside the field name.</li></ul></td><td><p>All fields</p></td></tr><tr><td><span class="code">multiple</span></td><td>Allows you to assign multiple values to a field. By default, this parameter is set to “false” for the <strong>Title</strong>&nbsp;field. For Content Types with the field marked as <span class="code">multiple</span>, you need to pass the values in the array format in the request body. For example, <span class="code">"multi_line": ["Text1", "Text2"]</span></td><td><p>All fields</p></td></tr><tr><td><span class="code">mandatory</span></td><td><p>Determines whether a field can be left without a value or not. If the mandatory parameter of a field is set to “true,”&nbsp;the user cannot leave this field empty.</p></td><td><p>All fields except Taxonomy, Global, Modular Blocks, and Boolean</p></td></tr><tr><td><span class="code">unique</span></td><td><p>Decides whether the value entered in the field has to be unique or not.</p></td><td><p>All fields</p></td></tr><tr><td><span class="code">format</span></td><td><p>Takes a regex that you can use to validate the value of a field.</p></td><td><p>Single line textbox, Multi line textbox</p></td></tr><tr><td><span class="code">error_messages</span></td><td><p>Stores the error message that will be displayed if a field value is not validated. You can set a format for it as well.</p></td><td><p>Single line textbox, Multi line textbox</p></td></tr><tr><td><span class="code">enum</span></td><td><p>Allows you to provide the choice for the <strong>Select</strong>&nbsp;field.</p></td><td><p>Select</p></td></tr><tr><td><span class="code">advanced</span></td><td><p>Determines whether a select field can contain normal choices or key-value choices. Set the advanced parameter to "true" to add key-value pairs in the Select field.</p></td><td><p>Select</p></td></tr><tr><td><span class="code">reference_to</span></td><td><p>Allows you to set a reference to any content type or global field.</p></td><td><p>Reference, Global fields</p></td></tr><tr><td><span class="code">format</span></td><td><p>Allows you to set the schema for ‘Group’ and nested Group fields.</p></td><td><p>Group, Nested Group fields</p></td></tr><tr><td><span class="code">schema</span></td><td><p>Defines the details of the fields that have to be added in the <strong>Group</strong> field.</p></td><td><p>Group, Nested Group fields</p></td></tr><tr><td><span class="code">max_instance</span></td><td><p>Decides the maximum limit for your internal Group, within the main Group schema.</p></td><td><p>Nested Group fields</p></td></tr><tr><td><span class="code">max_terms</span></td><td><p>Decides the maximum limit for terms allowed for a specific Taxonomy within an entry.</p></td><td><p>Taxonomy</p></td></tr></tbody></table>

## JSON Schema of Content Type Elements

Each feature associated with a content type also has its own schema definition. Let’s understand how the schema for such features is used in the content type JSON file.

### Options

The “Options” schema allows you to define specific settings for your content type. You can either mark content types as [single](/docs/headless-cms/single-vs-multiple-content-types#single) or [multiple](/docs/headless-cms/single-vs-multiple-content-types#multiple), or define the type of your content type as [webpage](/docs/headless-cms/about-content-types#webpage) or [content block](/docs/headless-cms/about-content-types#content-block).

The “Options” schema looks as follows:

```
"options": {
                "is_page": true,
                "singleton": false,
                "title": "title",
                "sub_title": [],
                "url_pattern": "/:title",
                "url_prefix": "/"
            }
```

### Field Rules

The “Field Rules” schema allows you to set [field visibility rules](/docs/headless-cms/about-field-visibility-rules) for your content type. You can hide or display specific fields (target fields) on the entry page based on the values specified in other fields (operand fields) of the entry.

The “Field Rules” schema looks as follows:

```
"field_rules": [
                {
                    "conditions": [
                        {
                            "operand_field": "author",
                            "operator": "contains",
                            "value": "Dale"
                        }
                    ],
                    "actions": [
                        {
                            "action": "hide",
                            "target_field": "description"
                        }
                    ],
                    "match_type": "all"
                }
            ]
```

## Content Type Parameters Explained

Let’s understand the different schema parameters in detail:

<table><tbody><tr><td><p>Parameters</p></td><td><p>Description</p></td></tr><tr><td><span class="code">_version</span></td><td><p>Specifies the number assigned to every version of a specific content type. Editing the schema of a content type, adding or removing field visibility rules, or updating the content type details automatically increments the version number of the content type by 1.</p></td></tr><tr><td><span class="code">is_page</span></td><td><p>Allows you to create content types as “Webpages” or “Content Blocks”, and is set to “true” for webpages.</p></td></tr><tr><td><span class="code">singleton</span></td><td><p>Marks a content type as “Single” or “Multiple”, and is set to “true” for content types with unique schemas.</p></td></tr><tr><td><span class="code">url_pattern</span></td><td><p>Allows you to set a default URL pattern for all the entries of the content type, for example, “/title”.</p></td></tr><tr><td><span class="code">url_prefix</span></td><td><p>Defines the path where an entry of the content type exists.</p></td></tr><tr><td><span class="code">conditions</span></td><td><p>Allows you to define conditions for your field visibility rules. Under “conditions”, you can specify the following parameters:<br></p><ul><li><span class="code">operand_field</span>: Determine the field on which you want to set the condition.</li><li><span class="code">operator</span>: Determine an operator for your condition (for e.g., Matches).</li><li><span class="code">value</span>: Specify the expected value for the operand field.</li></ul></td></tr><tr><td><span class="code">actions</span></td><td><p>Allows you to define actions to be taken as per your field visibility rules. Under “actions”, you can specify the following parameters:</p><ul><li><span class="code">action</span>: Determine the action(s) to be performed when the conditions are met (for e.g., Show or Hide)</li><li><span class="code">target_field</span>: Specify the field that needs to be displayed or hidden as per the condition.</li></ul></td></tr><tr><td><span class="code">match_type</span></td><td><p>Determines whether the field visibility rule should be applied when “all” or “any” of the specified conditions are met.</p></td></tr></tbody></table>
