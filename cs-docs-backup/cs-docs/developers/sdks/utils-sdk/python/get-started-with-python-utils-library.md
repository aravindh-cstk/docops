---
title: "[Python] - Get Started with Python Utils Library"
description: Get started guide for Contentstack Python Utils SDK to build apps powered by Contentstack.
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/python/get-started-with-python-utils-library
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - python-developers
version: latest
last_updated: 2026-03-26
---

# [Python] - Get Started with Python Utils Library

This page explains how to install, set up, and use the Contentstack Python Utils SDK to render embedded items and work with RTE content. It is intended for developers integrating Contentstack content into Python applications and should be used when you need to fetch and render embedded items from entries.

## Get Started with Python Utils Library

This guide will help you get started with Contentstack [Python Utils SDK](./about-python-utils-library.md) to build apps powered by Contentstack.

## Prerequisites
- The latest version of [PyCharm](https://www.jetbrains.com/pycharm/download) or [Visual Studio Code](https://code.visualstudio.com/download)
- [Python 3](https://docs.python-guide.org/starting/installation/#python-3-installation-guides)
- An [activated virtual environment](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/#activating-a-virtual-environment) for the project

## SDK Installation and Setup

To set up Python Utils SDK, go to the terminal and locate the virtual environment path. Run the command given below:
- macOS
- Windows

```
python3 -m pip install contentstack_utils
```

```
py -m pip install contentstack_utils
```

**Note:** There should be two tabs to specify the OS bases pypi installation.

If you are using Contentstack Python SDK in your project by running the following commands,  then “contentstack/utils”  is already imported into your project.

```
#For the latest version:
pip install Contentstack

#For the specific version
pip install Contentstack==1.2.0
```

## Usage

Let’s learn how you can use Utils SDK to render embedded items.

### Create Render Option:

To render embedded items on the front-end, use the `' + _obj['multi'] + '`'
        if metadata.style_type == 'inline':
            return '' + _obj['title'] + '

' + _obj['line'] + ''
        if metadata.style_type == 'link':
            return '' + _obj['title'] + '

' + _obj['key'] + ''
        if metadata.style_type == 'display':
            return '' + _obj['title'] + '

' + _obj['multi'] + ''

    def render_mark(self, mark_type, render_text) -> str:
        if mark_type == 'bold':
            return '**' + render_text + '**'
        else:
            return ''

    def render_node(self, node_type, node_obj: dict, callback):
        if node_type == 'paragraph':
            children = callback(node_obj['children'])
            return "" + children + '

'
        else:
            return ''

```

## Basic Queries

Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry:

To get an embedded item of a single entry, you need to provide the stack API key, environment name, content type’s UID, and entry’s UID. Then, use the `entry.fetch` function as shown below:

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

To get multiple entries, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the Utils.json_to_html function as shown below:

```
from contentstack_utils.utils import Utils
from contentstack_utils.render.options import Options
path = [‘content_path_one’, ‘content_path_2’] # should be type of dictionary or list
entry_content = "html_string"
response = Utils.json_to_html(entry_content, path, Options())
print(response)
```

#### Render GQL SRTE Contents

To get multiple entries, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the GQL.json_to_html function as shown below:

```
from contentstack_utils.gql import GQL
from contentstack_utils.render.options import Options

path = ['content_path_one', 'content_path_2'] # should be type of dictionary or list
entry_content = "html_string"
response = GQL.json_to_html(entry_content, path, Options())
print(response)
```

## Common questions

### Do I need to install `contentstack_utils` if I already installed the Contentstack Python SDK?
If you are using Contentstack Python SDK in your project by running the following commands,  then “contentstack/utils”  is already imported into your project.

### Which command should I use to install the SDK on macOS vs Windows?
Use `python3 -m pip install contentstack_utils` on macOS and `py -m pip install contentstack_utils` on Windows.

### How do I render embedded items from a single entry?
Fetch the entry using `entry.fetch()` and then call `Utils.render(entry, ['rich_text_editor', 'some_other_text'], Options())`.

### What function should I use to render JSON RTE vs GQL SRTE contents?
Use `Utils.json_to_html` for JSON RTE contents and `GQL.json_to_html` for GQL SRTE contents.

Filename: python-get-started-with-python-utils-library.md