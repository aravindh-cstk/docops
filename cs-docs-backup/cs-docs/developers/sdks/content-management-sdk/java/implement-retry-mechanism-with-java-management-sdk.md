---
title: "[Java Management] - Implement a Retry Mechanism with Java Management SDK"
description: Implement a Retry Mechanism with Java Management SDK
url: https://www.contentstack.com/docs/developers/sdks/content-management-sdk/java/implement-retry-mechanism-with-java-management-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - java
  - backend-engineers
version: unknown
last_updated: 2026-03-25
---

# [Java Management] - Implement a Retry Mechanism with Java Management SDK

This page explains how to configure and use retry behavior in the Contentstack Java Management SDK to handle transient API failures (timeouts, rate limits, and server errors). It is intended for developers integrating the Java Management SDK who need resilient synchronous and asynchronous API calls, and should be used when you want to tune retry limits, conditions, and backoff strategies.

## Implement a Retry Mechanism with Java Management SDK

APIs sometimes fail due to heavy load, unstable networks, or rate limits. The Java SDK automatically retries these failed requests to ensure application resilience. This guide describes how to configure retry mechanisms so your application recovers from transient failures without requiring additional manual code.

**Warning:** The default `RetryCondition` may retry non-idempotent operations, such as `POST` and `PUT`. Ensure your implementation accounts for potential duplicate resource creation if a network timeout occurs.

## Overview

The SDK retries failed HTTP requests caused by transient conditions, such as network blips, timeouts, 429 rate limits, and 5xx server errors. You control this behavior via `RetryConfig` on the `Contentstack` client builder.

### Key features

- **Automatic retries:** Internal interceptors automatically handle retries for both synchronous (`.execute()`) and asynchronous (`.enqueue()`) calls.
- **Specialized async handling:** Use `RetryCallback` for advanced asynchronous requirements, such as per-call configurations.
- **Flexible backoff:** Choose between fixed, linear, or custom backoff strategies to manage server recovery time.

### Supported backoff strategies

| Strategy | Description | Use Case |
|---|---|---|
| Fixed | Constant delay between every retry attempt. | Consistent intervals are required. |
| Linear | Delay grows linearly (e.g., 1s, 2s, 3s). | Deliberate, progressive escalation is needed. |
| Custom | Bespoke logic, such as exponential or jittered backoff. | General operational contexts/server recovery. |

## Prerequisites

Before you begin, ensure you have the following:

- Java 8 or higher
- The Contentstack Java Management SDK must be on the classpath.
- Authenticate in one of two ways:Management API authtoken
- OAuth is configured on the client
- HTTPS access to the Contentstack API

## Set up and credentials

- **Dependencies:** Add the Contentstack Java Management SDK to your project (it brings OkHttp and Retrofit). No extra libraries are required for retries.
- **Credentials:** Do not hardcode the auth token. Use an environment variable (e.g., `CONTENTSTACK_AUTH_TOKEN`) or a secrets manager.

**Example:**

```
String authToken = System.getenv("CONTENTSTACK_AUTH_TOKEN");
if (authToken == null || authToken.isEmpty()) {
    throw new IllegalStateException("CONTENTSTACK_AUTH_TOKEN must be set");
}
```

## Quick Reference

| Topic | Details |
|---|---|
| Sync calls (for example, `.execute()`) | You call the API synchronously. Retries are handled by the SDK interceptors; no extra code required. |
| Async calls (`.enqueue()`) | Retries are applied by the SDK interceptors, even when using a normal `Callback`. Use `RetryCallback` when you need per-call custom retry behavior or a different `RetryConfig`. |
| Fixed delay | Same delay between every retry. Set `retryDelay` only; leave `retryDelayOptions` unset. |
| Linear backoff | Delay grows linearly (e.g., 1s, 2s, 3s). Use `retryDelayOptions` with `base` only. |
| Exponential / custom backoff | You need an exponential (or other) delay. Use `retryDelayOptions` with `customBackoff`. |

## Configuration Parameters

| Parameter | Type | Default | Description |
|---|---|---:|---|
| `retryLimit` | int | 3 | Number of additional retry attempts. |
| `retryDelay` | long | 300 ms | Fixed delay interval between retries. |
| `retryCondition` | RetryCondition | DefaultRetryCondition | Criteria for determining retryable errors. |
| `retryDelayOptions` | RetryDelayOptions | null | Configuration for linear or custom backoff. |

**Note:** The total number of requests is `1 + retryLimit`. For example, a `retryLimit` of 3 results in 4 total attempts.

**Detailed parameter logic**

- **retryDelay:** This value is ignored if `retryDelayOptions` is configured. There is no fallback between strategies.
- **retryCondition:** This functional interface uses the signature `boolean shouldRetry(int statusCode, Throwable error)`. By default, the SDK retries:**Status Codes:** `408`, `429`, `500`, `502`, `503`, and `504`.
- **Network Errors:** `IOException` and `SocketTimeoutException`.
- **retryDelayOptions:** This parameter supports base for linear backoff and `customBackoff` for user-defined delay calculations.

## Override Behavior

The SDK selects exactly one backoff strategy based on the parameters provided in the `RetryConfig`. These strategies are mutually exclusive; the SDK does not combine them or use one as a timeout for another.

The selection follows a strict priority order: `customBackoff` → `base` → `retryDelay`.

| Configuration | Applied Strategy | Parameters Ignored |
|---|---|---|
| `customBackoff` | The custom logic is defined in your calculate method. | base and `retryDelay`. |
| base (without `customBackoff`) | Linear backoff (delay = base × retryCount). | `retryDelay`. |
| `retryDelay` only | A fixed, constant delay interval. | N/A |

**Note:** `retryDelay` is the fallback only when `retryDelayOptions` is null or no valid backoff strategy is provided.

**Example:**
- If `retryDelayOptions` is set with only base, `retryDelay` is ignored.
- `retryDelay` is used only when `retryDelayOptions` is null, or when no valid delay strategy is provided.

**Retry condition logic**

The `**RetryCondition**` is a functional interface that determines if a failed request requires a retry based on the following signature: `boolean shouldRetry(int statusCode, Throwable error)`

**Default retry behavior**

The `**DefaultRetryCondition**` automatically triggers a retry for the following scenarios:
- **Status Codes:** 408, 429, 500, 502, 503, and 504.
- **Network Failures:** Requests resulting in a status code of `0`.
- **Exceptions:** Common network-related errors such as `IOException` and `SocketTimeoutException`.

## Basic Usage — Default Configuration (Recommended Practice)

```
import com.contentstack.cms.Contentstack;
import com.contentstack.cms.core.RetryCallback;
import com.contentstack.cms.core.RetryConfig;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Response;

import java.io.IOException;

// Use environment variable; never hardcode the token.
String authToken = System.getenv("CONTENTSTACK_AUTH_TOKEN");
if (authToken == null || authToken.isEmpty()) {
    throw new IllegalStateException("CONTENTSTACK_AUTH_TOKEN must be set");
}

Contentstack client = new Contentstack.Builder()
        .setAuthtoken(authToken)
        .build();

// Default retry configuration: 3 attempts, 300 ms fixed delay, retries on 408, 429, 5xx, network errors.
// Sync calls use this automatically via interceptors.
Response response = null;
try {
    response = client.user().getUser().execute();
    if (response.isSuccessful()) {
        System.out.println("Request completed successfully");
    } else {
        System.err.println("Error: " + response.code());
    }
} catch (IOException e) {
    System.err.println("Request failed: " + e.getMessage());
} finally {
    if (response != null && response.body() != null) {
        response.body().close();
    }
}
```

Asynchronous calls must use `RetryCallback` so the configured retry behavior and delays apply before your callback:

```
Call call = client.user().getUser();
call.enqueue(new RetryCallback(call, client.getRetryConfig()) {
   @Override
   public void onResponse(Call call, Response response) {
       if (response.isSuccessful()) {
           System.out.println("Request completed successfully");
       }
   }

   @Override
   protected void onFinalFailure(Call call, Throwable t) {
       System.err.println("Error: " + t.getMessage());
   }
});
```

## Asynchronous call retries

The Java SDK automatically applies retry logic to asynchronous requests (`.enqueue()`) through internal network interceptors. You are not required to use `RetryCallback` to enable basic retries.

The SDK provides two layers for handling asynchronous retries:

| Retry method | Implementation layer | Use case |
|---|---|---|
| Interceptors (default) | Network layer | Standard retries using the global `RetryConfig` defined on the Contentstack client. |
| RetryCallback | Application layer | Custom or per-call `RetryConfig` and advanced failure handling. |

**Using RetryCallback for custom behavior**

While interceptors handle global settings, use `RetryCallback` when a specific request requires a unique backoff strategy or retry limit that differs from the client's default configuration.

```
// Example: Using RetryCallback for a specific async request
Call call = client.user().getUser();
call.enqueue(new RetryCallback(call, customRetryConfig) {
   @Override
   public void onResponse(Call call, Response response) {
       if (response.isSuccessful()) {
           System.out.println("Request successful");
       }
   }

   @Override
   protected void onFinalFailure(Call call, Throwable t) {
       System.err.println("Request failed after all custom retries: " + t.getMessage());
   }
});
```

## Advanced Configuration — Custom Retry Configuration

```
// Instantiation of customized retry options
RetryConfig retryConfig = RetryConfig.builder()
       .retryLimit(5)                    // Establishes the maximum number of retries before a permanent failure is declared.
       .retryDelay(1000)                 // Sets the base delay interval (1 second) when specific delay options are not provided.
       .retryCondition((statusCode, error) -> {
           // Custom rule: only retry upon receiving 429 and 5xx status codes.
           return statusCode == 429 || (statusCode >= 500 && statusCode  response = client.user().getUser().execute();
```

For **asynchronous** calls utilizing a custom configuration:

```
Call call = client.user().getUser();
call.enqueue(new RetryCallback(call, client.getRetryConfig()) {
   @Override
   public void onResponse(Call call, Response response) {
       if (response.isSuccessful()) {
           System.out.println("Success!");
       }
   }

   @Override
   protected void onFinalFailure(Call call, Throwable t) {
       System.err.println("Failed after retries: " + t.getMessage());
   }
});
```

## Backoff Strategies

The delay is prioritized in the following sequence: `**customBackoff**` (if defined) -> `**base**` (linear calculation) -> `**retryDelay**` (fixed value). These options are mutually exclusive in practice. If a higher-priority strategy is defined, lower-priority strategies are ignored for delay calculation.

### 1. FIXED Backoff (Constant Delay)

Do **not** configure `retryDelayOptions`. Only configure `retryDelay`:

```
RetryConfig options = RetryConfig.builder()
       .retryDelay(1000)   // A static 1-second delay is imposed.
       .build();
```

The resulting retry delay pattern is:
- Attempt 1: Wait 1000 ms
- Attempt 2: Wait 1000 ms
- Attempt 3: Wait 1000 ms

**Use case:** Appropriate when a consistent interval is required between successive retry attempts.

### 2. LINEAR Backoff

Configure `**retryDelayOptions**` with only `**base**` (omitting `customBackoff`):

```
RetryConfig options = RetryConfig.builder()
       .retryDelayOptions(RetryDelayOptions.builder()
               .base(1000)   // Sets the 1-second base delay unit.
               .build())
       .build();
```

The resulting retry delay pattern (delay = base × retryCount) is:
- Attempt 1: Wait 1000 ms (1 × 1000)
- Attempt 2: Wait 2000 ms (2 × 1000)
- Attempt 3: Wait 3000 ms (3 × 1000)

**Use case:** Recommended when a deliberate and progressive escalation of the delay period is necessary.

### 3. EXPONENTIAL Backoff (via Custom Backoff)

Employ `**customBackoff**` to implement an exponential (or any non-linear) delay function:

```
RetryConfig options = RetryConfig.builder()
    .retryDelayOptions(RetryDelayOptions.builder()
        .customBackoff((retryCount, statusCode, error) -> {
            // Calculate Exponential logic: 2^retryCount × 1000 ms
            long calculatedDelay = (long) Math.pow(2, retryCount) * 1000;

            // CRITICAL: Always cap the delay (e.g., 30 seconds) to prevent infinite growth.
            return Math.min(calculatedDelay, 30_000);
        })
        .build())
    .build();
```

The resulting retry delay pattern is:
- Attempt 1: Wait 2000 ms (2¹ × 1000)
- Attempt 2: Wait 4000 ms (2² × 1000)
- Attempt 3: Wait 8000 ms (2³ × 1000)
- Attempt 4: Wait 16000 ms (2⁴ × 1000)

**Use case:** Highly recommended for general operational contexts, as the rapid increase in delay affords ample time for server recovery.

**Warning:** Exponential backoff without a cap can cause a production application to hang for excessive periods if the service is unavailable.

### 4. CUSTOM Backoff (Advanced)

Define bespoke retry delay logic using the `**CustomBackoff**` interface:

```
RetryConfig options = RetryConfig.builder()
       .retryDelayOptions(RetryDelayOptions.builder()
               .customBackoff((retryCount, statusCode, error) -> {
                   // Example: Implementing Exponential backoff with Jitter for dispersion
                   long baseDelay = (long) Math.pow(2, retryCount) * 1000;
                   long jitter = (long) (Math.random() * 1000);
                   return baseDelay + jitter;
               })
               .build())
       .build();
```

The `**CustomBackoff**` signature is defined as: `long calculate(int retryCount, int statusCode, Throwable error)`

## Common mistakes to avoid

- **Using sync pattern for async calls:** If you use `call.enqueue(...)`, it is best practice to wrap your callback in `RetryCallback` and pass the same `RetryConfig` (e.g., `client.getRetryConfig()`) to ensure explicit control over the retry lifecycle.
- **Hardcoding the token:** Never put the authtoken in source code. Use an environment variable or a secrets manager. Refer to the "Set up and credentials" section earlier in this document.
- **Assuming retries for all operations:** The default condition retries 408, 429, 5xx, and network errors. For custom behavior, set `retryCondition` and ensure non-idempotent writes are not retried unintentionally.
- **Async calls without RetryCallback:** If you use `call.enqueue(callback)` with a standard Callback, retries are still applied by the SDK’s interceptors. Use `RetryCallback` specifically when you need custom per-call retry handling or a different `RetryConfig` for that request.

## How to verify retries are happening

- **Logging:** Enable SDK or OkHttp request/response logging to see repeated requests after a failure.
- **Transient failure:** Temporarily force a retryable error (e.g., return 503 from a mock or break the network briefly) and confirm you see multiple attempts before a final success or failure.
- **Metrics:** If you log or metricize each attempt (e.g., in a custom `RetryCondition` or wrapper), you can count retries and validate limits and delays.

## Next Steps

You can now rely on automatic retries for transient failures when using the Java Management SDK. To go further:
- Adjust `retryCondition` if you need to retry only specific status codes or errors.
- Use `retryDelayOptions` with `customBackoff` for exponential or jittered backoff in production.

## Common questions

### Do I need to use `RetryCallback` to get retries on async calls?
No. The Java SDK automatically applies retry logic to asynchronous requests (`.enqueue()`) through internal network interceptors.

### When should I use `RetryCallback`?
Use `RetryCallback` when a specific request requires a unique backoff strategy or retry limit that differs from the client's default configuration.

### How many total attempts will be made with `retryLimit`?
**Note:** The total number of requests is `1 + retryLimit`. For example, a `retryLimit` of 3 results in 4 total attempts.

### Which delay strategy is used if multiple are configured?
The selection follows a strict priority order: `customBackoff` → `base` → `retryDelay`. These strategies are mutually exclusive; the SDK does not combine them.