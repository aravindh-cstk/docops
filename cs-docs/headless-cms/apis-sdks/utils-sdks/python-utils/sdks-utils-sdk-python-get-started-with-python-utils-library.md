---
title: "Get Started with Python Utils Library"
description: "steps to use the Python Utils Library"
url: /developers/sdks/utils-sdk/python/get-started-with-python-utils-library
---

# Get Started with Python Utils Library

## Get Started with Python Utils Library

This guide will help you get started with Contentstack [Python Utils SDK](/docs/developers/sdks/utils-sdk/python/about-python-utils-library) to build apps powered by Contentstack.

## Prerequisites

-   The latest version of [PyCharm](https://www.jetbrains.com/pycharm/download) or [Visual Studio Code](https://code.visualstudio.com/download)
-   [Python 3](https://docs.python-guide.org/starting/installation/#python-3-installation-guides)
-   An [activated virtual environment](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/#activating-a-virtual-environment) for the project

## SDK Installation and Setup

To set up Python Utils SDK, go to the terminal and locate the virtual environment path. Run the command given below:

-   macOS
-   Windows

```
python3 -m pip install contentstack_utils
```

```
py -m pip install contentstack_utils
```

renderContents function, and define the UI elements you want to show in the front-end of your website, as shown in the example code below:

```
from contentstack_utils.render.options import Options

class DemoOption(Options):

    def render_options(self, _obj, metadata):
        if metadata.style_type == 'block':
            return '<p>' + _obj['title'] + '</p><span>' + _obj['multi'] + '</span>'
        if metadata.style_type == 'inline':
            return '<p>' + _obj['title'] + '</p><span>' + _obj['line'] + '</span>'
        if metadata.style_type == 'link':
            return '<p>' + _obj['title'] + '</p><span>' + _obj['key'] + '</span>'
        if metadata.style_type == 'display':
            return '<p>' + _obj['title'] + '</p><span>' + _obj['multi'] + '</span>'

    def render_mark(self, mark_type, render_text) -> str:
        if mark_type == 'bold':
            return '<b>' + render_text + '</b>'
        else:
            return ''

    def render_node(self, node_type, node_obj: dict, callback):
        if node_type == 'paragraph':
            children = callback(node_obj['children'])
            return "<p class='class-id'>" + children + '</p>'
        else:
            return ''
```

## Basic Queries

Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry:

To get an embedded item of a single entry, you need to provide the stack API key, environment name, content type’s UID, and entry’s UID. Then, use the entry.fetch function as shown below:

```
import contentstack  
from contentstack_utils.render.options import Options 
stack = contentstack.Stack('api_key','delivery_token','environment')
content_type = stack.content_type("content_type_uid")
entry = content_type.entry("entry_uid")
result = entry.fetch()
if result is not None:
   entry = result['entries']
   Utils.render(entry, ['rich_text_editor', 'some_other_text'], Options())
```

### Fetch Embedded Item(s) from Multiple Entries

To get embedded items from multiple entries, you need to provide the stack API key, delivery token, environment name, and content type’s UID.

```
import contentstack
from contentstack_utils.utils import Utils
from contentstack_utils.render.options import Options

stack = contentstack.Stack('api_key','delivery_token','environment')
query = stack.content_type("content_type_uid").query()
result = query.find()
if result is not None and 'entries' in result:
   entry = result['entries']
   for item in range:
       Utils.render(item, ['rich_text_editor', 'some_other_text'], Options())
```

#### Render JSON RTE Contents

To get multiple entries, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the Utils.json\_to\_html function as shown below:

```
from contentstack_utils.utils import Utils
from contentstack_utils.render.options import Options
path = [‘content_path_one’, ‘content_path_2’] # should be type of dictionary or list
entry_content = "html_string" 
response = Utils.json_to_html(entry_content, path, Options())
print(response)
```

#### Render GQL SRTE Contents

To get multiple entries, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the GQL.json\_to\_html function as shown below:

```
from contentstack_utils.gql import GQL
from contentstack_utils.render.options import Options
    
path = ['content_path_one', 'content_path_2'] # should be type of dictionary or list
entry_content = "html_string"
response = GQL.json_to_html(entry_content, path, Options())
print(response)
```
