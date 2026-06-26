---
title: "Stack"
description: "Initialize an instance of ‘Stack’"
url: "https://www.contentstack.com/stack"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Stack

Initialize an instance of ‘Stack’

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| api_key | string | Yes | — | Stack API key |
| delivery_token | string | No | — | Stack Delivery token. |
| environment | string | No | — | Stack Environment name. |
| region | ContentstackRegion | string | No | — | DB region for Stack. You can choose from six regions namely, NA, EU, Azure NA, Azure EU, GCP NA, GCP EU, and AWS AU. |
| branch | string | No | — | Name of the branch you want to fetch data from |
| live_preview | object | No | — | Live preview configuration. |
| fetchOptions.debug | boolean | No | false | Optional, to enable debug logs set to true. |
| fetchOptions.logHandler | function | No | — | A log handler function to process given log messages & errors. |
| fetchOptions.agent | HttpProxyAgent | No | — |  |
| fetchOptions.timeout | number | No | — | Set timeout for the request. |
| fetchOptions.retryLimit | number | No | 5 | The number of retries before failure. |
| fetchOptions.retryDelay | number | No | 300ms | The number of ms to use for operation retries. |
| fetchOptions.retryCondition | function | No | Retry is on status codes 408, 429 | A function to determine if the error can be retried. |
| fetchOptions.retryDelayOptions.base | number | No | — | The base number of milliseconds to use in the exponential backoff for operation retries. |
| fetchOptions.retryDelayOptions.customBackoff | number | No | — | A custom function that accepts a retry count and error and returns the amount of time to delay in milliseconds. |

Returns:
Type
Stack

**Initialize Stack:**

```
import Contentstack from 'contentstack';
const Stack = Contentstack.Stack({ api_key: 'api_key', delivery_token: 'delivery_token', environment: 'environment' });
```

To set the European, Azure North American, Azure European, GCP North America region or GCP Europe, refer to the code below:

```
import Contentstack from 'contentstack';
const Stack = new Contentstack({ 'api_key': "api_key", 'delivery_token': "delivery_token", 'environment': "environment", "region": Contentstack.Region.<<add_your_region>>})
```

For Setting the Branch for a Region.

```
import Contentstack from 'contentstack';
const Stack = Contentstack.Stack({ api_key: 'api_key', delivery_token: 'delivery_token', environment: 'environment', region: Contentstack.Region.<<add_your_region>>, host: '<<add_your_host_URL>>', branch: 'branch')
```

****

**Proxy Configuration**

```
const HttpProxyAgent = require("http-proxy-agent");
const proxyAgent = new HttpProxyAgent("http://proxyurl/");
const Stack = Contentstack.Stack({ 
    api_key: 'api_key', 
    delivery_token: 'delivery_token', 
    environment: 'environment',
    fetchOptions: {
       agent: proxyAgent
    }
});
```

Here are a few examples of how you can add a username and password to HttpProxyAgent.

- You can pass it in the URL:

```
var proxyAgent = new HttpsProxyAgent('https://username:password@your-proxy.com');
```

- You can set it in the auth option:

```
var proxyOpts = url.parse('https://your-proxy.com');
proxyOpts.auth = 'username:password';
var proxyAgent = new HttpsProxyAgent(proxyOpts);
```

- You can even set the HTTP header manually:

```
var proxyOpts = url.parse('https://your-proxy.com');
proxyOpts.headers = {
  'Proxy-Authentication': 'Basic ' + new Buffer('username:password').toString('base64')
};
var proxyAgent = new HttpsProxyAgent(proxyOpts);
```
