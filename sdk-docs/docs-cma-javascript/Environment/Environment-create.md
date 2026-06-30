---
title: "create"
description: "The Create a Environment call creates a new environment in a particular stack of your Contentstack account."
url: "https://www.contentstack.com/js-management-environment-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create a Environment call creates a new environment in a particular stack of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.environments | object | No | — | The environment details with name, server, urls, and deploy content. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const environment = {
     name: 'development',
     servers: [
               {
                 name: 'default'
               }
               ],
     urls: [
             {
                 locale: 'en-us',
                 url: 'http://example.com/'
             }
           ],
     deploy_content: true
}

client.stack({ api_key: 'api_key'}).environment().create({ environment })
.then((environment) => console.log(environment))
```
