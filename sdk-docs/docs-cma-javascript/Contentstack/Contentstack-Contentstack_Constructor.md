---
title: "Contentstack"
description: "The Content Management API (CMA) is used to manage the content of your Contentstack account. This includes creating, updating, deleting, and fetching content of your account."
url: "https://www.contentstack.com/js-management-contentstack-method"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Contentstack

The Content Management API (CMA) is used to manage the content of your Contentstack account. This includes creating, updating, deleting, and fetching content of your account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| endpoint | string | No | — | API endpoint that a service will talk to. |
| host | string | No | api.contentstack.io | API host |
| headers | object | No | — | Optional additional headers |
| early_access | string | No | — | Optional array of header strings for early access features. |
| authtoken | string | No | — | Optional Authtoken is a read-write token used to make authorized CMA requests, but it is a user-specific token. |
| authorization | string | No | — | Optional authorization token is a read-write token used to make authorized CMA requests, but it is a user-specific token. |
| timeout | number | No | 30000ms | Optional number of milliseconds before the request times out. |
| maxRequests | number | No | 5 concurrent request. | Optional maximum number of requests SDK should send concurrently. |
| retryOnError | boolean | No | true | Optional boolean for retry on failure. |
| retryLimit | number | No | 5 | Optional number of retries before failure. |
| retryDelay | number | No | 300ms | The number of milliseconds to use for operation retries. |
| retryCondition | function | No | 429 | A function to determine if the error can be retried. |
| retryDelayOptions.base | number | No | — | The base number of milliseconds to use in the exponential backoff for operation retries. |
| retryDelayOptions.customBackoff | function | No | — | A custom function that accepts a retry count and error and returns the amount of time to delay in milliseconds. (if you want not to retry for specific condition return -1) |
| maxContentLength | number | No | 1073741824 i.e. 1 GB | Optional maximum content length in bytes. |
| maxBodyLength | number | No | 10 MB | Optional maximum body length in bytes. |
| logHandler | function | No | — | A log handler function to process given log messages & errors. |
| application | string | No | — | Application name and version e.g myApp/version |
| integration | string | No | — | Integration name and version e.g react/version |

Returns:
Type
ContentstackClient

**Client Initialization**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client();
```

**Set the `endpoint` to 'https://api.contentstack.io:{port}/{version}'**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ endpoint: 'https://api.contentstack.io:{port}/{version}' });
```

**Set the `host` to 'api.contentstack.io'**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ host: 'api.contentstack.io' });
```

**Set the `headers` to { 'headerkey': 'value'}**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ headers: { 'headerkey': 'value'} });
```

**Set the Early Access Headers**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({
  early_access: ['early_access_1', 'early_access_2'] 
});
```

**Set the `authtoken`**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken: 'value' });
```

**Set the `authorization`**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authorization: 'Bearer ' })
```

**Set the `timeout` to 50000ms**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ timeout: 50000 })
```

**Set the `maxRequests` to 5**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ maxRequests: 5 })
```

**Set the `retryOnError` to false**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ retryOnError: false })
```

**Set the `retryLimit` to 2**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ retryLimit: 2 })
```

**Set the `retryDelay` to 500ms**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ retryDelay: 500 })
```

**Set the `retryCondition` on error status 429**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ retryCondition: (error) => {     if (error.response && error.response.status === 429) {       return true     }     return false   } })
```

**Setbaseretry delay for all services to 300 ms**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({retryDelayOptions: {base: 300}})
```

**Set a custom backoff function to provide delay of 500 ms on retryCount < 3 and -1 for retryCount >= 3 values on retries**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({retryDelayOptions: {customBackoff: function(retryCount, err) {       if (retryCount < 3) {         return 500       } else {         return -1 //returning -1 will hold next retry for request       }    }}})
```

**Set the `maxContentLength` to 1024 ** 3**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ maxContentLength: 1024 ** 3 })
```

**Set the `maxBodyLength` to 1024 ** 2 * 10 // 10 MB**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ maxBodyLength: 1024 ** 2 * 10 })
```

****

**Set the `logHandler`**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ logHandler: (level, data) => {
      if (level === 'error' && data) {
        const title = [data.name, data.message].filter((a) => a).join(' - ')
        console.error(`[error] ${title}`)
        return
      }
      console.log(`[${level}] ${data}`)    
} })
```
