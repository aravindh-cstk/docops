---
title: "Adaptive Rate Limiting"
description: "Learn how Adaptive Rate Limiting absorbs short traffic spikes on the delivery APIs, what the rate limit headers mean, and how to handle 429 responses."
url: /headless-cms/adaptive-rate-limit
uid: blt0262ff042dbe0d80
---

# Adaptive Rate Limiting

## Adaptive Rate Limiting

Adaptive Rate Limiting changes how Contentstack enforces your organization's delivery API rate limits, so that short, legitimate traffic spikes are absorbed instead of rejected. A campaign launch, a site build, or a bulk publish that clears cached content can send many requests to the origin server at the same moment. With Adaptive Rate Limiting, those requests are served as long as your average traffic stays within your rate limit.

Adaptive Rate Limiting does not change your rate limit. It changes how the limit is measured.

**Note:** Adaptive Rate Limiting is currently part of an Early Access Program and is available on request. In this phase, it applies only to the Content Delivery API, the Image Delivery API, and the GraphQL Content Delivery API. To enable it for your organization, or to adjust its settings, contact [support](mailto:support@contentstack.com).

## When to Use Adaptive Rate Limiting

Adaptive Rate Limiting helps when your traffic is spiky, not consistently high. Consider it if:

-   Your application receives 429 errors during short spikes, while your average traffic stays below your rate limit
-   Publishing content triggers a wave of uncached requests to the origin server
-   Your site builds or scheduled syncs send many requests at once

If your traffic stays above your rate limit for long periods, Adaptive Rate Limiting does not prevent 429 errors. In that case, reduce your request rate, cache more responses, or contact support about a higher limit.

## Requests Covered by the Rate Limit

Adaptive Rate Limiting applies to the delivery APIs: the Content Delivery API, the Image Delivery API, and the GraphQL Content Delivery API. Within those APIs, it covers the same requests as standard rate limiting:

-   **CDN requests**: Cached responses served by the CDN are not rate-limited.
-   **Origin server requests**: Uncached requests that are routed to the origin server count toward your rate limit.

Your default limits stay the same when you enable Adaptive Rate Limiting:

| API | Default Limit (Origin Requests) |
| --- | --- |
| Content Delivery API and Image Delivery API (shared) | 100 requests per second per organization |
| GraphQL Content Delivery API | 80 requests per second per organization |

All stacks and tokens in an organization share the same limit.

## How Adaptive Rate Limiting Works

Standard rate limiting counts requests in fixed one-second windows. When a window is full, every further request in that second is rejected, even if the previous second was quiet.

Adaptive Rate Limiting spreads your allowance evenly over time instead, so there are no window boundaries. It adds two capabilities on top of that: a burst allowance and request smoothing.

### Burst Allowance

The burst allowance is the number of requests you can send at the same moment. It is set as a percentage of your rate limit:

| Rate Limit | Burst Setting | Requests You Can Send at Once |
| --- | --- | --- |
| 80 requests per second | 100% (default) | 80 |
| 80 requests per second | 150% | 120 |
| 100 requests per second | 100% (default) | 100 |
| 100 requests per second | 200% | 200 |

Capacity refills continuously at your rate limit, with no fixed reset. At 100 requests per second, one request's worth of capacity returns every 10 milliseconds.

### Request Smoothing

Request smoothing is optional. When it is enabled, a request that arrives after your burst capacity is used up is held briefly and then served, instead of being rejected. Your application receives a slightly slower response, not an error.

The maximum hold time is configured for your organization, for example, 250 or 500 milliseconds. If a request would need to wait longer than that, the API rejects it with a 429 response.

## Monitoring Your Rate Limit

Every successful origin response includes the following headers:

| Header | Example | Description |
| --- | --- | --- |
| X-RateLimit-Limit | 100 | Your organization's rate limit, in requests per second. |
| X-RateLimit-Remaining | 42 | Number of requests you can send immediately before you reach your burst allowance. The value refills continuously. |

**Note:** When request smoothing is enabled, X-RateLimit-Remaining: 0 does not always mean your next request fails. The request may be held briefly and then served.

If X-RateLimit-Remaining returns \-1, rate limit information was temporarily unavailable and your request was allowed. Treat \-1 as unknown, not as a real count, and continue to pace your requests normally.

## Rate Limit Exceeded

When a request cannot be served within your burst allowance or the request smoothing hold time, the API returns 429 Too Many Requests with the following headers:

| Header | Example | Description |
| --- | --- | --- |
| Retry-After | 1 | Number of seconds to wait before you retry. The value is always a whole number of 1 or more. |
| X-RateLimit-Limit | 100 | Your organization's rate limit. |
| X-RateLimit-Remaining | 0 | No capacity is available right now. |

Rejected requests do not use your rate limit capacity. Only requests that are served count.

## Examples

The following examples assume an organization with a rate limit of 100 requests per second and the default burst allowance of 100%.

### Steady Traffic

Your application sends 50 requests per second, evenly spaced. Every request succeeds, and X-RateLimit-Remaining stays high because capacity refills faster than you use it.

```
HTTP/1.1 200 OK
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 97
```

### A Burst Within Your Allowance

A webhook fires and your application sends 80 requests at the same moment. All 80 succeed immediately. X-RateLimit-Remaining drops to about 20, then refills at one request every 10 milliseconds.

### A Burst Over Your Allowance, Without Request Smoothing

Your site build sends 120 requests at the same moment. The first 100 succeed immediately, and the remaining 20 receive a 429 response:

```
HTTP/1.1 429 Too Many Requests
Retry-After: 1
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
```

Your application waits 1 second and retries those 20 requests, as described in [Handle 429 Responses](#handle-429-responses).

### The Same Burst, With Request Smoothing

Your organization has request smoothing enabled with a maximum hold time of 250 milliseconds, and your site build sends the same 120 requests at the same moment. The first 100 succeed immediately. Requests 101 to 120 are held for 10 milliseconds, 20 milliseconds, and so on, up to 200 milliseconds, and then served.

All 120 requests succeed, with no 429 responses and no retries. The slowest response takes about 200 milliseconds longer than usual.

### Sustained Overload

Your application sends 300 requests per second, continuously, for several seconds. Requests are served at your rate limit of about 100 per second. Requests beyond what request smoothing can absorb receive a 429 response with a Retry-After header.

Adaptive Rate Limiting cannot absorb sustained traffic above your rate limit. Reduce your request rate, add caching, or contact support about a higher limit.

## Handle 429 Responses

Always wait before you retry a 429 response. Use the Retry-After value, and add a small random delay, known as jitter, so that many clients do not retry at the same moment. If a 429 response arrives without a Retry-After header, wait 1 second and retry with exponential backoff: 1 second, then 2, then 4.

The following JavaScript function retries a request up to four times, using Retry-After when it is present:

```
async function fetchWithRetry(url, options = {}, maxRetries = 4) {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(url, options);
    if (res.status !== 429 || attempt >= maxRetries) return res;

    const retryAfter = parseInt(res.headers.get('Retry-After'), 10);
    const baseMs = Number.isFinite(retryAfter) ? retryAfter * 1000 : 1000 * 2 ** attempt;
    const jitterMs = Math.random() * 500;
    await new Promise((r) => setTimeout(r, baseMs + jitterMs));
  }
}
```

The following Python function does the same with the requests library:

```
import random
import time
import requests

def get_with_retry(url, headers, max_retries=4):
    for attempt in range(max_retries + 1):
        res = requests.get(url, headers=headers)
        if res.status_code != 429 or attempt == max_retries:
            return res

        retry_after = res.headers.get("Retry-After")
        base = int(retry_after) if retry_after and retry_after.isdigit() else 2 ** attempt
        time.sleep(base + random.uniform(0, 0.5))
```

To inspect the rate limit headers on any request, set the STACK\_API\_KEY and DELIVERY\_TOKEN environment variables to your stack API key and a delivery token for the stack, then run the following cURL command:

```
curl -s -D - -o /dev/null \
  "https://cdn.contentstack.io/v3/content_types/blog_post/entries" \
  -H "api_key: $STACK_API_KEY" \
  -H "access_token: $DELIVERY_TOKEN" | grep -i -E "ratelimit|retry-after"
```

**Tip:** The Contentstack SDKs include a configurable retry mechanism that handles 429 responses for you.

## Best Practices

| Avoid | Do Instead |
| --- | --- |
| Retrying a 429 response immediately in a loop | Wait for the Retry-After interval plus jitter |
| Sending thousands of requests at once | Send requests in batches no larger than your burst allowance |
| Ignoring X-RateLimit-Remaining | Slow down as the value approaches 0 |
| Using the same fixed retry delay everywhere | Use Retry-After, then exponential backoff |
| Retrying indefinitely | Cap retries at 3 to 5 attempts, then report the error |
| Fetching the same content repeatedly | Cache responses where possible |

## Frequently Asked Questions

**Does the rate limit apply to each user, each token, or the whole organization?**

To the whole organization. All stacks and tokens in an organization share the same limit.

**Do rejected requests count against my rate limit?**

No. Only requests that are served use capacity.

**Does my existing retry logic keep working?**

Yes. If your client already respects Retry-After, no changes are needed. With request smoothing enabled, you see fewer 429 responses overall.

**Why are some responses slower during a burst?**

Request smoothing holds a request that arrives slightly early for a few milliseconds and then serves it, instead of rejecting it.

**Can I change my burst allowance or request smoothing settings?**

Yes. These settings are configured per organization. Contact [support](mailto:support@contentstack.com) with your traffic pattern, including your peak requests per second and how long spikes last, and the team recommends settings for you.

**What does X-RateLimit-Remaining: -1 mean?**

Rate limit information was temporarily unavailable, and your request was allowed. It is not an error. Continue to pace your requests normally.

**Additional Resource:** For the default rate limits and error codes of each API, see the [Content Delivery API](/docs/developers/apis/content-delivery-api#rate-limiting), [Image Delivery API](/docs/developers/apis/image-delivery-api#rate-limiting), and [GraphQL Content Delivery API](/docs/developers/apis/graphql-content-delivery-api#rate-limiting) references.
