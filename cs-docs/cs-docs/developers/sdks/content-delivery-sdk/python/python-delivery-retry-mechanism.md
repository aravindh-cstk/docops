---
title: "[Python] - Python Delivery Retry Mechanism"
description: Implement Retry Mechanism with Python Delivery SDK
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/python/python-delivery-retry-mechanism
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - python-developers
version: unknown
last_updated: 2026-03-25
---

# [Python] - Python Delivery Retry Mechanism

This page explains how the Contentstack Python Delivery SDK handles request retries using the `retry_strategy` parameter, and is intended for developers integrating with the Content Delivery API who want to understand or customize retry behavior when initializing a Stack.

## Implement Retry Mechanism with Python Delivery SDK

This guide explains how the Contentstack Python SDK uses the `retry_strategy` parameter to retry failed requests when making API calls.

It is intended for developers who want to:
- Understand how retry behavior works in the Contentstack Python SDK
- Customize retry behavior for failed API requests when interacting with the Content Delivery API

After reading this guide, you can decide whether to rely on the SDK’s default retry behavior or to provide a custom retry strategy when initializing the Stack.

## Prerequisites
Before you begin, make sure you have the following:
- Contentstack Python Delivery SDK installed
- A valid Contentstack Stack, including:Stack API Key
- Delivery Token
- Environment name

## Default Retry Behavior
If no `retry_strategy` is provided when initializing the Stack, the SDK uses its default retry behavior. By default, it retries requests that fail due to transient issues such as network timeouts or rate limiting (HTTP 429), where requests may succeed if retried.

## Retry Logic Flow

### Retry Strategy Overview
The Contentstack Python SDK supports request retries through the `retry_strategy` parameter, which accepts a retry configuration object when initializing the Stack. The retry strategy is provided through the `Retry` class imported from `urllib3.util` and defines how failed requests are retried, including how many times to retry, how long to wait between attempts, and which HTTP status codes trigger a retry.

The SDK applies the configured retry strategy automatically when making API requests and does not require you to implement custom retry logic in your application.

The retry process follows this sequence:
- **Initial Request:** The SDK sends the HTTP request.
- **Evaluate Response:** If the status is 200 and the response is successful, return data.
- **Check Retry Conditions:** If the request fails, check if the error meets retry conditions.
- **Decide to Retry:** Evaluate status code against `status_forcelist (408, 429, 500, 502, 503, 504)`. Default is (`408` and `429`).
- **Check Retry Limit:** Verify if retry attempts remain (`total > 0`).
- **Calculate Retry Delay:** Calculate retry delay using exponential backoff, which increases the delay between retry attempts by doubling the wait time after each failure. The wait time is calculated as:`Delay = backoff_factor * (2 ** (retry_count - 1)) seconds`
- **Wait Before Retry:** Pause execution for the calculated delay.
- **Attempt Retry:** Retry the request with a decremented limit.
- **Exit with Final Error:** If all retries are exhausted, raise the final error.

### Code Snippet:

```
from urllib3.util import Retry
import contentstack

stack = contentstack.Stack(
api_key='your_api_key',
delivery_token='your_delivery_token',
environment='your_environment',
retry_strategy=Retry(
total=5, # Number of retries before failing the request
backoff_factor=1, # Base multiplier for exponential backoff (in seconds)
status_forcelist=[408, 429, 500, 502, 503, 504], # HTTP status codes to retry on
allowed_methods=['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'], # HTTP methods to retry
read=5, # Number of retries for read errors
connect=5 # Number of retries for connection errors
)
)
```

## Retry Strategy Parameters

### total
Total number of retry attempts before the request fails.

**Type**: `int`

**Default**: 5

**When to change this:** Increase this value if your application frequently encounters temporary failures and you want to allow more retry attempts before failing.

**Considerations: **Setting a very high retry count can increase request latency and delay error handling.

**Example:**

```
from urllib3.util import Retry
import contentstack

retry_strategy = Retry(total=5)
stack = contentstack.Stack(
'api_key',
'delivery_token',
'environment',
retry_strategy=retry_strategy
)
```

### backoff_factor
Base multiplier for the exponential backoff delay, in seconds. The delay increases exponentially with each retry attempt.

**Type:** `float`

**Default:** 0

**When to change this: **Adjust this value if you want to control how quickly the delay between retries increases.

**Considerations: **Larger backoff values can significantly increase the total time spent retrying failed requests.

**Backoff Calculation:**
- 1st retry: `backoff_factor * 1 seconds`
- 2nd retry: `backoff_factor * 2 seconds`
- 3rd retry: `backoff_factor * 4 seconds`
- 4th retry: `backoff_factor * 8 seconds`

And so on…

Exponential backoff increases the delay on each retry attempt. If total is high, the delay can grow quickly and significantly increase the time spent retrying.

With the delay formula shown above, the worst-case total wait time across retries (excluding request time) is:

```
Total wait ≈ backoff_factor × (2^total − 1) seconds
```
For example, with total=5 and backoff_factor=1, the total wait time is approximately **31 seconds** (1 + 2 + 4 + 8 + 16).

**Example:**

```
from urllib3.util import Retry
import contentstack

# With backoff_factor=1, delays will be: 1s, 2s, 4s, 8s, 16s
retry_strategy = Retry(total=5, backoff_factor=1)
stack = contentstack.Stack(
'api_key',
'delivery_token',
'environment',
retry_strategy=retry_strategy
)
```

### status_forcelist
List of HTTP status codes that should trigger a retry. The SDK will retry requests that return any of these status codes.

**Type:** `list[int` ]

**Default:** `[408, 429]`

**When to change this:** Modify this list if you want to retry requests for additional HTTP status codes returned by the API.

**Considerations:** Retrying on non-transient errors may result in repeated failed requests without improving reliability.

**Common Status Codes:**
- `408:` Request Timeout
- `429:` Too Many Requests (Rate Limit)
- `500:` Internal Server Error
- `502:` Bad Gateway
- `503:` Service Unavailable
- `504:` Gateway Timeout

**Example:**

```
from urllib3.util import Retry
import contentstack

# Retry on timeout, rate limit, and server errors
retry_strategy = Retry(
    total=5,
    backoff_factor=1,
    status_forcelist=[408, 429, 500, 502, 503, 504]
)

stack = contentstack.Stack(
    'api_key',
    'delivery_token',
    'environment',
    retry_strategy=retry_strategy
)
```

### allowed_methods
Set of HTTP methods that are allowed to be retried. By default, POST requests are not retried because retrying certain requests can result in the same operation being performed more than once.

**Type:** `list[str]` or `frozenset`

**Default:** `frozenset(['HEAD', 'GET', 'PUT', 'DELETE', 'OPTIONS', 'TRACE'])`

**When to change this:** Update this setting if you want to allow retries for additional HTTP methods.

**Considerations:** Retrying certain HTTP methods may result in repeated operations if the request is not safe to retry.

**Example:**

```
from urllib3.util import Retry
import contentstack

# Allow retries for GET and POST methods
retry_strategy = Retry(
    total=5,
    backoff_factor=1,
    status_forcelist=[408, 429, 500, 502, 503, 504],
    allowed_methods=['GET', 'POST']
)

stack = contentstack.Stack(
    'api_key',
    'delivery_token',
    'environment',
    retry_strategy=retry_strategy
)
```

### read
Number of retries for read errors, such as timeouts while reading a response.

**Type:** `int`

**Default:** None (uses the `total` value)

**When to change this:** Set this value if you want to control retry behavior specifically for read timeout errors.

**Considerations:** Increasing this value may extend the time spent waiting for a response before failing.

**Example:**

```
from urllib3.util import Retry
import contentstack

retry_strategy = Retry(
    total=5,
    backoff_factor=1,
    read=3  # Retry read errors up to 3 times
)

stack = contentstack.Stack(
    'api_key',
    'delivery_token',
    'environment',
    retry_strategy=retry_strategy
)
```

### connect
Number of retries for connection errors, such as failures while establishing a connection.

**Type:** `int`

**Default:** None (uses the `total` value)

**When to change this:** Set this value if you want to control retry behavior for connection-related failures.

**Considerations:** Higher values can delay failure when connection issues persist, increasing the time before an error is returned.

**Example:**

```
from urllib3.util import Retry
import contentstack

retry_strategy = Retry(
    total=5,
    backoff_factor=1,
    connect=3  # Retry connection errors up to 3 times
)

stack = contentstack.Stack(
    'api_key',
    'delivery_token',
    'environment',
    retry_strategy=retry_strategy
)
```

## Interaction Between total, read, and connect
The `read` and `connect` parameters define retry limits for specific error categories:
- The `read` and `connect` parameters define retry limits for specific error categories.
- They are not fully independent counters.
- Each applies only to its respective error type.
- All retries are globally capped by `total`.
- If `total` is reached, no further retries occur, even if the `read` or `connect` limit has not been exhausted.
- If `read` or `connect` is not set, it inherits the value of `total`.

**Example**

```
Retry(total=10, read=3, connect=2)
```
**Behavior:**
- Read errors: up to 3 retries
- Connect errors: up to 2 retries
- Maximum retries across all error types: 5
- If 5 total retries occur, no further retries are attempted.

## Complete Example

### Basic Retry Configuration (Default Behavior)
This example uses the SDK’s default retry behavior without providing a custom retry strategy.

```
from urllib3.util import Retry
import contentstack

# Default retry strategy (5 retries, no backoff, retry on 408 and 429)
stack = contentstack.Stack(
    'api_key',
    'delivery_token',
    'environment'
)
```
**Expected behavior:**

If a request fails due to a timeout or rate-limited response, the SDK automatically retries the request based on its default retry behavior before returning an error.

### Custom Retry with Exponential Backoff

```
from urllib3.util import Retry
import contentstack

# Custom retry strategy with exponential backoff
retry_strategy = Retry(
    total=5,  # Maximum 5 retry attempts
    backoff_factor=1,  # Exponential backoff: 1s, 2s, 4s, 8s, 16s
    status_forcelist=[408, 429, 500, 502, 503, 504],  # Retry on these status codes
    allowed_methods=['GET', 'POST'],  # Allow retries for GET and POST
    read=5,  # Retry read errors
    connect=5  # Retry connection errors
)

stack = contentstack.Stack(
    'api_key',
    'delivery_token',
    'environment',
    retry_strategy=retry_strategy
)

# Use the stack to make requests
result = stack.asset_query().find()
```
**Expected behavior:**

When a retryable failure occurs, the SDK retries the request multiple times with increasing delays between attempts, as defined by the backoff configuration.

### Aggressive Retry Strategy
This strategy prioritizes retrying failed requests more aggressively by allowing more retry attempts and longer delays between retries. It can improve reliability during prolonged transient failures but may increase overall request latency when failures persist.

This approach is commonly used in applications where content delivery is critical and temporary failures are preferable to delayed responses, such as public-facing websites or high-traffic content APIs.

```
from urllib3.util import Retry
import contentstack

# More aggressive retry strategy for critical operations
retry_strategy = Retry(
    total=10,  # More retry attempts
    backoff_factor=2,  # Longer delays: 2s, 4s, 8s, 16s, 32s...
    status_forcelist=[408, 429, 500, 502, 503, 504],
    allowed_methods=['GET', 'POST', 'PUT', 'DELETE']
)

stack = contentstack.Stack(
    'api_key',
    'delivery_token',
    'environment',
    retry_strategy=retry_strategy
)
```
**Expected behavior:**

The SDK makes additional retry attempts before failing the request, which can increase the total time spent retrying when failures persist.

### Conservative Retry Strategy
This strategy prioritizes faster failure by limiting retry attempts and keeping delays shorter. It reduces the time spent retrying failed requests but may result in earlier failures when transient issues last longer.

This approach is commonly used in applications where faster failure is preferred, such as background jobs or services where prolonged retries could block processing.

```
from urllib3.util import Retry
import contentstack

# Conservative retry strategy (fewer retries, faster failure)
retry_strategy = Retry(
    total=3,  # Fewer retry attempts
    backoff_factor=0.5,  # Shorter delays: 0.5s, 1s, 2s
    status_forcelist=[408, 429]  # Only retry on timeout and rate limit
)

stack = contentstack.Stack(
    'api_key',
    'delivery_token',
    'environment',
    retry_strategy=retry_strategy
)
```
**Expected behavior:**

The SDK retries failed requests fewer times and fails faster when retry conditions continue to occur.

## Common questions

### Do I need to implement my own retry loop when using the SDK?
No. The SDK applies the configured retry strategy automatically when making API requests and does not require you to implement custom retry logic in your application.

### What happens if I don’t pass `retry_strategy` when initializing the Stack?
If no `retry_strategy` is provided when initializing the Stack, the SDK uses its default retry behavior.

### Which HTTP status codes are retried by default?
**Default:** `[408, 429]`

### Can I retry POST requests?
Yes, by updating `allowed_methods`, for example: `allowed_methods=['GET', 'POST']`.

