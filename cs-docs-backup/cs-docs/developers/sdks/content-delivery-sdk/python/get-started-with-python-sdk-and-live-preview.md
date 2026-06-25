---
title: "[Pyhton] - Get Started with Python SDK and Live Preview"
description: Get Started with Python SDK and Live Preview
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/python/get-started-with-python-sdk-and-live-preview
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: v3
last_updated: 2026-03-25
---

# [Pyhton] - Get Started with Python SDK and Live Preview

This page explains how to integrate Live Preview with the Contentstack Python SDK using Flask. It is intended for developers setting up real-time preview of draft content changes before publishing, and should be used when implementing Live Preview in a Python-based application.

## Get Started with Python SDK and Live Preview

This guide explains how to integrate Live Preview with the  [Python SDK](./about-python-sdk.md) using Flask. Live Preview enables real-time content updates before publishing, helping developers and editors preview changes instantly.

## Pre-requisites
- [Contentstack account](https://app.contentstack.com/#!/login)
- [Python version 3](https://www.python.org/downloads/)
- A flask environment setup

## Installation and Setup
To use the Contentstack Python SDK with your existing project, perform the following steps:
- Open the terminal, create a project, and move inside it as follows:

```
mkdir project_name
cd project_name
```
- Create a virtual environment:

```
python3 -m venv venv
```
- Activate the virtual environment:
For macOS/Linux:

```
source venv/bin/activate
```
For Windows:

```
venv\Scripts\activate
```
- Install pip Contentstack as follows:
```
pip install contentstack flask
```

You can download the latest dependency version [here](https://pypi.org/project/Contentstack/).

## Initializing the Stack with Live Preview
Since the [Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md) is responsible for communication, you need to initialize it within your stack.

Use the following command to initialize the stack:

```
import contentstack
stack = contentstack.Stack(
    api_key='your_api_key',
    delivery_token='your_delivery_token',
    environment='your_environment',
    live_preview={
        'enable': True,
        'host': 'rest-preview.contentstack.com',
        'preview_token': 'your_preview_token'
    }
)
```
**Note**: By default, the `host` parameter points to the North America endpoint. If your website is hosted on the European data center, then pass the [European](../../../contentstack-regions/europe-region-what-it-is-and-what-it-isnt.md) endpoint against the `host` parameter.

## Live Preview Query Setup
The live_preview_query() method ensures that the SDK fetches draft (unpublished) content updates in real time.

```
stack.live_preview_query(live_preview_query={
    'live_preview': 'your_live_preview_key',
    'content_type_uid': 'your_content_type_uid',
    'entry_uid': 'your_entry_uid'
})
```
**Parameters:**

| Parameter | Description |
|---|---|
| `live_preview` | Unique token for live preview session |
| `content_type_uid` | UID of the content type to fetch data from |
| `entry_uid` | UID of the entry being previewed |

## Create an Interceptor using Flask
Now, let’s create a Flask app to display the fetched entry details dynamically.
- **Create a File app.py**
```
from flask import Flask, render_template
import contentstack
import logging
app = Flask(__name__)
logging.basicConfig(level=logging.DEBUG)
stack = contentstack.Stack(
    api_key='your_api_key',
    delivery_token='your_delivery_token',
    environment='your_environment',
    live_preview={
        'enable': True,
        'host': 'rest-preview.contentstack.com',
        'preview_token': 'your_preview_token'
    }
)
@app.route('/')
def fetch_data():
    logging.debug("Fetching Live Preview Data...")
    stack.live_preview_query(live_preview_query={
        'live_preview': 'your_live_preview_key',
        'content_type_uid': 'your_content_type_uid',
        'entry_uid': 'your_entry_uid'
    })
    query = stack.content_type("your_content_type_uid").entry('your_entry_uid')
    response = query.fetch()
    logging.debug("API Response: %s", response)
    if isinstance(response, list) and len(response) > 0:
        entry = response[0]
        title = entry.get('title', 'No Title')
        pdf_url = entry.get('file', {}).get('url', '')
        return render_template('index.html', title=title, pdf_url=pdf_url)
    else:
        return f"Unexpected response format: {response}", 500
if __name__ == '__main__':
    app.run(debug=True, port=5000)
```
- **Create a Template File templates/indec.html**
```

    {{ title }}

# {{ title }}

    {% if pdf_url %}

        [Download PDF]({{ pdf_url }})
    {% else %}
        No PDF available.

    {% endif %}

```
- **Testing the Live Preview Integration**Run the following code and start the Flask server:

```
python app.py
```
Open a browser and go to `http://localhost:5000`.Modify the entry in Contentstack and observe real-time changes.

## For Server-side Rendered Websites
To install and initialize the [Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md), you can refer to our [SSR Live Preview Setup](../../../set-up-live-preview/set-up-live-preview-for-your-website.md#server-side-rendering-ssr-) documentation.

## Query Request
Contentstack SDKs let you interact with the [Content Delivery APIs](../../../../../api-docs/api-detail/content-delivery-api.md) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

To get an [entry](../../../../content-managers/author-content/about-entries.md), you need to specify the [content type](../../../create-content-types/about-content-types.md) UID and the UID of the entry.

```
entry = stack.content_type("content_type_uid").entry();
result = entry.fetch()
```

## Timeline Preview
The Timeline Preview feature in the Python Delivery SDK allows you to preview different versions of an entry based on specific timestamps or scheduled releases—making it easier to test future or past content states.

For more information, refer to our [Timeline Preview](../../../set-up-timeline.md) documentation

## More Resources
- [JavaScript Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md)
- [Python News App Using Contentstack’s Python SDK](../../../sample-apps/build-a-python-news-app-using-contentstack-python-sdk.md)
- [API Reference](/docs/developers/python/api-reference/)
- [Python SDK Changelog](./python-sdk-changelog.md)
- [View and Download Python SDK repository on GitHub](https://github.com/contentstack/contentstack-python)

## Common questions

### Do I need Flask to use Live Preview with the Python SDK?
No. This guide uses Flask as an example to display fetched entry details dynamically, but Live Preview can be integrated into other Python frameworks or setups.

### What does `live_preview_query()` do?
The `live_preview_query()` method ensures that the SDK fetches draft (unpublished) content updates in real time.

### What should I set for the `host` parameter?
By default, the `host` parameter points to the North America endpoint. If your website is hosted on the European data center, then pass the European endpoint against the `host` parameter.

### Where can I find more Live Preview setup information for SSR websites?
You can refer to the SSR Live Preview Setup documentation linked in the “For Server-side Rendered Websites” section.