---
title: "[.NET Management] - Implement Retry Mechanism with .NET Management SDK"
description: Implement Retry Mechanism with .NET Management SDK
url: https://www.contentstack.com/docs/developers/sdks/content-management-sdk/dot-net/retry-mechanism
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: .NET Management SDK
last_updated: 2026-03-25
---

# [.NET Management] - Implement Retry Mechanism with .NET Management SDK

This page explains how the .NET Management SDK retry mechanism works for Contentstack Management API requests, who it is intended for (developers building integrations, automation, or migration workflows), and when to use it (to handle transient failures such as network instability, rate limits, and temporary server errors).

## Implement Retry Mechanism with .NET Management SDK

This guide explains how the **.NET Management SDK retry mechanism** helps **developers** handle transient failures when working with Contentstack’s Management APIs.

When building integrations, automation, or migration workflows, developers often encounter transient issues such as network instability, API rate limits, and temporary server errors during bulk operations or CI/CD pipelines.

To address these scenarios, the .NET Management SDK provides a built-in retry mechanism with the following behavior:
- Applies to all Management API requests.
- Uses a single, consistent retry pipeline.
- Requires no custom retry logic in your application.
- It is enabled by default, with no explicit configuration required.

This behavior improves reliability, reduces operational failures, and prevents unnecessary request drops during short-lived issues such as temporary network outages or rate-limit responses. If needed, you can disable retries by setting `RetryOnError = false` or by providing a custom `RetryPolicy`.

## Prerequisites
Before you begin, make sure you have the following:
- **Minimum supported .NET version**.NET Standard 2.0
- .NET Framework 4.7.1
- Compatible implementations (for example, .NET Core 2.0+).
- A valid stack and Management API credentials.

## What You’ll Learn
By reading this document, you will learn:
- When the .NET Management SDK retries requests automatically.
- How different failure types (HTTP, network, and generic errors) are handled.
- How retry limits, delays, and backoff strategies are applied.
- How to customize retry behavior to match your application’s reliability requirements.

## Retry Types
The SDK handles three retry scenarios with independent counters:

| Type | Trigger | Counter | Limit (Default) |
|---|---|---|---|
| **HTTP Errors** | Non-2xx status codes (429, 500, 502, 503, 504) | `HttpRetryCount` | `RetryLimit (5)` |
| **Network Errors** | DNS, Socket, Timeout failures | `NetworkRetryCount` | `MaxNetworkRetries (3)` |
| **Generic Errors** | Other exceptions | `Retries` | `RetryLimit (5)` |

Retry counters are maintained per request. Each API call has its own independent retry counters, and they are reset for every new request. Counters are not shared across the client instance, including when executing parallel operations.

**Generic Errors** refer to exceptions that are neither HTTP response errors nor network-related failures. They include all other runtime exceptions that may occur during request execution. Specific exception types are not explicitly defined and may vary by runtime environment.

Generic errors use the same `RetryLimit` configuration as HTTP errors. The `RetryLimit` value applies to both HTTP retry attempts and generic error retry attempts independently per request.

**Note:** By default, HTTP retries are applied only to transient server and rate-limiting errors. Client-side and authentication-related errors are intentionally excluded to avoid retrying non-recoverable failures.

## Configuration Parameters

### Core Settings
Use this when you want to control overall HTTP retry behavior, such as handling transient API failures and rate limiting.
- `RetryOnError` (bool, default: `true`) – Global master switch for retry behavior. This setting must be `true` for any retry logic to execute. If set to `false`, no retries occur, even if specific retry toggles (for example, network or HTTP server error retries) are enabled.
- `RetryLimit` (int, default: `5`) – Defines the maximum number of retry attempts for retryable HTTP errors and generic errors before the request fails.
- `RetryDelay` (TimeSpan, default: `300ms`) – Base delay for HTTP retries.

`RetryLimit` controls the number of retry attempts, while `RetryDelay` controls the delay between attempts.

### Network Retry Settings
Use this when requests fail due to transient connectivity issues such as DNS resolution errors, socket failures, or intermittent network drops.
- `RetryOnNetworkFailure` (bool, default: `true`) – Enable network retries.
- `RetryOnDnsFailure` (bool, default: `true`) – Enable DNS failure retries.
- `RetryOnSocketFailure` (bool, default: `true`) – Enable socket failure retries.
- `RetryOnHttpServerError` (bool, default: `true`) – Enable HTTP 5xx retries.
- `MaxNetworkRetries` (int, default: `3`) – Controls the maximum number of retry attempts for network-related failures such as DNS resolution errors, socket failures, and timeouts.
- `NetworkRetryDelay` (TimeSpan, default: `100ms`) – Base delay for network retries.
- `NetworkBackoffStrategy` (BackoffStrategy, default: `Exponential`) – `Fixed` or `Exponential`.

`MaxNetworkRetries`, `NetworkRetryDelay`, and `NetworkBackoffStrategy` collectively influence how network retries are applied.

## Advanced Settings
Use this when you need custom retry logic, such as retrying only on specific status codes or applying a custom backoff strategy. In most scenarios, the Core and Network Retry settings are sufficient.
- `RetryCondition` (Func<HttpStatusCode, bool>?) – Custom function to determine retryable status codes.
- `RetryDelayOptions.Base` (TimeSpan, default: `300ms`) – Base delay for HTTP retries.
- `RetryDelayOptions.CustomBackoff` (Func<int, Exception?, TimeSpan>?) – Custom backoff calculation.

**By default, the retry mechanism applies only to **`429`** and **`5xx`** HTTP responses. Authentication errors (**`401`**, **`403`**) and other client errors are not retried unless you explicitly override this behavior using a custom **`RetryCondition`**.**

## Retry Flow
At a high level, the retry mechanism evaluates each request attempt and determines whether a retry is required based on the type of failure encountered. This evaluation is performed using the configured retry rules before deciding whether to retry the request or return an error.

### Request Execution Paths
- **Successful request:** If a request completes successfully, no retry logic is applied, and the response is returned immediately.
- **Failed request (retry path):** If a request fails due to an HTTP error, network failure, or other retryable condition, the SDK evaluates the configured retry settings to decide whether the request should be retried or the error should be returned.

### Diagram Explanation
- **Execute Request** → Check response/exception.
- **Success (2xx)** → Return response.
- **HTTP Error** → Check if retryable → Check limit → Retry or fail.
- **Exception** → Classify error type:**Network Error:** Check network retry config → Check `NetworkRetryCount < MaxNetworkRetries` → Retry or fail.
- **HTTP 5xx Error:** Check `RetryOnHttpServerError` or custom condition → Check `HttpRetryCount < RetryLimit` → Retry or fail.
- **Generic Error:** Check `RetryOnError` → Check `Retries < RetryLimit` → Retry or fail.
- **HTTP Error:** Check if the status code is retryable (for example, `429` or `5xx`). Authentication and other client errors (`401`, `403`, other `4xx`, and `3xx`) are not retried and fail immediately.
- **Calculate Delay**:Check `Retry-After` header (for 429) → Use if present.
- Check `CustomBackoff` function → Use if provided and returns > 0.
- Default: Network = `NetworkRetryDelay * 2^(attempt-1)` (exponential) or `NetworkRetryDelay` (fixed); HTTP = `BaseDelay * 2^retryCount`.
- Add jitter (0–100ms random).
- **Wait** → Loop back to Step 1.
- **Failure** → Log error → Throw exception.

## Delay Calculation
- **HTTP Retries:** `BaseDelay * 2^retryCount + jitter(0-100ms)`
- **Network Retries (Exponential):** `NetworkRetryDelay * 2^(attempt-1) + jitter(0-100ms)`
- **Network Retries (Fixed):** `NetworkRetryDelay + jitter(0-100ms)`
- **Retry-After Header:** Used if present (typically for 429 responses), not for network-level exceptions.
- **Custom Backoff:** Used if provided and returns > 0.

## Key Features
- Separate counters for Network, HTTP, and Generic retries.
- Exponential backoff with jitter to prevent synchronized retries.
- Respects HTTP `Retry-After` header for rate limiting.
- Custom retry conditions and backoff functions.
- Automatic network error classification.

## Example Configuration
The following example demonstrates a retry configuration suitable for handling transient HTTP failures and intermittent network issues. The values shown are illustrative and highlight how core and network retry settings can be combined to balance reliability and retry aggressiveness.

```
var options = new ContentstackClientOptions
{
    RetryOnError = true,
    RetryLimit = 5,
    RetryDelay = TimeSpan.FromMilliseconds(300),
    RetryOnNetworkFailure = true,
    MaxNetworkRetries = 3,
    NetworkRetryDelay = TimeSpan.FromMilliseconds(100),
    NetworkBackoffStrategy = BackoffStrategy.Exponential,
    RetryCondition = (statusCode) =>
        statusCode == HttpStatusCode.TooManyRequests ||
        statusCode >= HttpStatusCode.InternalServerError
};
```
These settings correspond to the Core Retry Settings and Network Retry Settings described earlier in this document and can be adjusted based on the type and frequency of failures your application encounters.

## Retry Decision
A request is retried when:
- `RetryOnError` is `true`.
- Retry limit is not exceeded for the error type.
- The error is classified as retryable. By default, the SDK retries only transient failures.

**Retryable errors:**
- **HTTP status codes:** `429` (Too Many Requests), `500`, `502`, `503`, `504`.
- **Network-related errors:** DNS failures, socket errors, and timeout-related exceptions.

**Non-retryable errors:**
- `401` Unauthorized.
- `403` Forbidden.
- All other `4xx` client errors (for example, `400`, `404`).
- All `3xx` responses.

Authentication and authorization errors are intentionally excluded from retries, as repeating these requests does not resolve the underlying issue.

## Common Mistakes and Guardrails
When configuring retries, keep the following considerations in mind to avoid unintended behavior in production environments:

### Common Mistakes
- **Setting retry limits too high:** Excessive retry attempts can increase request latency and amplify load during outages rather than resolving them.
- **Using aggressive retry delays:** Very short retry delays can lead to retry storms, especially when multiple requests fail simultaneously.
- **Retrying non-transient errors:** Retrying authentication, authorization, or validation errors will not succeed and can mask underlying configuration issues. For example, HTTP `401` and `403` responses indicate authentication or authorization failures and are excluded from retries by default.
- **Custom retry conditions without safeguards:** Overly broad custom retry conditions may cause retries for errors that should fail fast.

### Production Guardrails
- Start with the default retry settings and adjust gradually based on observed failure patterns.
- Monitor retry-related logs and error rates to identify excessive retries or unexpected retry behavior.
- Prefer exponential backoff for network-related failures to reduce synchronized retry spikes.
- Use custom retry logic only when the default behavior does not meet specific requirements.

## Error Handling
When retries fail, or limits are exceeded:
- Error is logged with Request ID, error type, and retry counts.
- `ContentstackErrorException` is thrown for HTTP errors.
- Original exception is thrown for network/generic errors.

### Next Steps After Retry Failure
If a request still fails after retries, review the error type and consider the following actions:
- **Intermittent failures:** Re-run the operation and observe whether the issue resolves on its own.
- **Frequent failures:** Review retry limits and delay settings to confirm they align with your application’s reliability requirements.
- **Environment-specific failures:** Validate network stability, DNS resolution, proxy or firewall rules, and TLS configuration in the runtime environment.
- **API-related failures:** Check whether the HTTP status code is expected to be retried and adjust retry conditions if necessary.

### Troubleshooting Common Retry Failures
Use the table below to quickly identify common retry failure patterns and the checks to perform.

| Symptom | What It Usually Means | What to Check |
|---|---|---|
| Retries are exhausted, and the request still fails. | The underlying issue persisted beyond the configured retry window. | Increase `RetryLimit` or retry delays if appropriate, and verify whether the failure is truly transient. |
| Requests frequently fail with 429 Too Many Requests. | API rate limits are being hit. | Reduce request concurrency, add additional delay, or ensure the retry condition includes `429`. |
| Requests frequently fail with HTTP 5xx errors. | A server-side or transient backend issue. | Confirm whether the error is temporary, and ensure `RetryOnHttpServerError` (or equivalent) is enabled. |
| Network retries occur repeatedly (DNS/socket failures). | Intermittent connectivity or DNS issues. | Check DNS configuration, outbound connectivity, proxies/firewalls, and stability of the runtime network. |
| Retries do not occur for a failure you expected to be retried. | The failure does not match configured retry rules. | Review `RetryOnError`, network retry toggles, and the `RetryCondition` logic. |
| Delays between retries are unexpectedly long or short. | Backoff strategy is affecting retry intervals. | Review `NetworkBackoffStrategy` and any custom backoff configuration (if used). |

## Common questions

### How do I disable retries in the .NET Management SDK?
Set `RetryOnError = false` or provide a custom `RetryPolicy`.

### Which HTTP status codes are retried by default?
By default, the retry mechanism applies only to **`429`** and **`5xx`** HTTP responses.

### Are retry counters shared across requests or parallel operations?
No. Retry counters are maintained per request and are reset for every new request; counters are not shared across the client instance, including when executing parallel operations.

### What exception types are considered “Generic Errors”?
**Generic Errors** refer to exceptions that are neither HTTP response errors nor network-related failures and may vary by runtime environment.