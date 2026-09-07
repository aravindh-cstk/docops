---
title: "Get Started with Python SDK and Live Preview"
description: "Get Started with Python SDK and Live Preview"
url: /developers/sdks/content-delivery-sdk/python/get-started-with-python-sdk-and-live-preview
uid: blt06146469cd6f6930
---

# Get Started with Python SDK and Live Preview

## Get Started with Python SDK and Live Preview

This guide explains how to integrate Live Preview with the  [Python SDK](/docs/developers/sdks/content-delivery-sdk/python/about-python-sdk/) using Flask. Live Preview enables real-time content updates before publishing, helping developers and editors preview changes instantly.

## Pre-requisites

-   [Contentstack account](https://app.contentstack.com/#!/login)
-   [Python version 3](https://www.python.org/downloads/)
-   A flask environment setup

## Installation and Setup

To use the Contentstack Python SDK with your existing project, perform the following steps:

1.  Open the terminal, create a project, and move inside it as follows:

    ```
    mkdir project_name
    cd project_name
    ```

2.  Create a virtual environment:

    ```
    python3 -m venv venv
    ```

3.  Activate the virtual environment:  
    For macOS/Linux:

    ```
    source venv/bin/activate
    ```

    For Windows:

    ```
    venv\Scripts\activate
    ```

4.  Install pip Contentstack as follows:

    ```
    pip install contentstack flask
    ```


You can download the latest dependency version [here](https://pypi.org/project/Contentstack/).

## Initializing the Stack with Live Preview

Since the [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk) is responsible for communication, you need to initialize it within your stack.

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

**Note:** By default, the host parameter points to the North America endpoint. If your website is hosted on the European data center, then pass the European endpoint against the host parameter.

## Live Preview Query Setup

The live\_preview\_query() method ensures that the SDK fetches draft (unpublished) content updates in real time.

```
stack.live_preview_query(live_preview_query={
    'live_preview': 'your_live_preview_key',
    'content_type_uid': 'your_content_type_uid',
    'entry_uid': 'your_entry_uid'
})
```

**Parameters:**

| **Parameter** | **Description** |
| --- | --- |
| 
live\_preview

 | Unique token for live preview session |
| 

content\_type\_uid

 | UID of the content type to fetch data from |
| 

entry\_uid

 | UID of the entry being previewed |

## Create an Interceptor using Flask

Now, let’s create a Flask app to display the fetched entry details dynamically.

1.  **Create a File app.py**

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

2.  **Create a Template File templates/indec.html**

    ```
    <!DOCTYPE html>
    <html>
    <head>
        <title>{{ title }}</title>
    </head>
    <body>
        <h1>{{ title }}</h1>
        {% if pdf_url %}
            <iframe src="{{ pdf_url }}" width="800" height="600"></iframe>
            <br>
            <a href="{{ pdf_url }}" target="_blank">Download PDF</a>
        {% else %}
            <p>No PDF available.</p>
        {% endif %}
    </body>
    </html>
    ```

3.  **Testing the Live Preview Integration**

    Run the following code and start the Flask server:

    ```
    python app.py
    ```

    Open a browser and go to http://localhost:5000.Modify the entry in Contentstack and observe real-time changes.


## For Server-side Rendered Websites

To install and initialize the [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk), you can refer to our [SSR Live Preview Setup](/docs/headless-cms/set-up-live-preview-for-your-website#server-side-rendering-ssr-) documentation.

## Query Request

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

To get an [entry](/docs/headless-cms/about-entries), you need to specify the [content type](/docs/headless-cms/about-content-types) UID and the UID of the entry.

```
entry = stack.content_type("content_type_uid").entry();
result = entry.fetch()
```

## Timeline Preview

The Timeline Preview feature in the Python Delivery SDK allows you to preview different versions of an entry based on specific timestamps or scheduled releases—making it easier to test future or past content states.

For more information, refer to our [Timeline Preview](/docs/headless-cms/set-up-timeline-for-your-website) documentation

## More Resources

-   [JavaScript Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk)
-   [API Reference](/docs/developers/sdks/content-delivery-sdk/python/reference/)
-   [Python SDK Changelog](/docs/changelog?filter=sdks)
-   [View and Download Python SDK repository on GitHub](https://github.com/contentstack/contentstack-python)
