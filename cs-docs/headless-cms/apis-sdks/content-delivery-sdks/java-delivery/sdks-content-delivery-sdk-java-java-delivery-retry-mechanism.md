---
title: "Java Delivery SDK Retry Mechanism"
description: "Configure retries in the Contentstack Java Delivery SDK using RetryOptions, status codes, and backoff strategies to handle timeouts and 429s reliably."
url: /developers/sdks/content-delivery-sdk/java/java-delivery-retry-mechanism
uid: blt96c6b07bb806d377
---

# Java Delivery SDK Retry Mechanism

## Implement Retry Mechanism with Java Delivery SDK

The retry mechanism helps Java Delivery SDK developers improve application resilience by automatically retrying failed HTTP requests caused by transient issues, such as:

-   Temporary network interruptions
-   Request timeouts
-   Rate-limited responses
-   Temporary server errors

## Prerequisites

Before you begin, make sure you have the following:

-   Contentstack Java Delivery SDK installed
-   A valid Contentstack Stack, including:
    -   Stack API Key
    -   Delivery Token
    -   Environment name

## What you’ll learn

By the end of this guide, you can:

-   Configure the retry mechanism in the Java Delivery SDK
-   Use the default retry behavior provided by the SDK
-   Customize retry settings using RetryOptions (retry limits, delays, and retryable status codes)
-   Select an appropriate backoff strategy (FIXED, LINEAR, EXPONENTIAL, or CUSTOM)
-   Understand when retries are attempted and when requests ultimately fail

## Retry Configuration Options

The Java SDK offers extensive configuration control over the retry mechanism via the RetryOptions class, which is configured within the Config object.

### Configuration Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| retryLimit | int | 3 | 
The maximum number of retry attempts permitted (range: 0–10).

A value of 0 disables retries and causes the SDK to perform only the initial request.

 |
| retryDelay | long | 1000 | The base delay, in milliseconds, used by the backoff strategy between retry attempts. |
| backoffStrategy | BackoffStrategy | EXPONENTIAL | The method employed for calculating the incremental delay between retry attempts. |
| retryableStatusCodes | int\[\] | {408, 429, 502, 503, 504} | 

A list of HTTP status codes that explicitly trigger a retry operation, such as rate limiting or temporary server errors.

Accepts one or more status codes.

Requests with status codes not included in this list are not retried.

 |
| retryEnabled | boolean | true | 

The master control switch activates or deactivates the entire retry functionality.

When set to false, requests fail immediately without any retry attempts.

 |
| customBackoffStrategy | CustomBackoffStrategy | null | An optional, user-defined function for calculating the inter-retry delay. |

**Note:**

-   Status code 500 (Internal Server Error) is not retried by default because it typically indicates a server-side condition that may not be transient. If required, you can explicitly include 500 in the retryableStatusCodes configuration.
-   Network-level failures (IOException), such as timeouts, DNS resolution failures, and connection interruptions, are retried automatically. These retries are not controlled by retryableStatusCodes. Instead, they follow retryLimit and the configured backoff strategy.
-   The retryEnabled flag acts as a master switch. When set to false, it overrides all other retry settings, including retryLimit, and no retries are attempted.

![Java Management SDK retry mechanism architecture](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5a93aa39640a5cbb/69942a011eaffc0008e44e70/java_cma_retry_mechanism.png)

## Basic Usage: Default Configuration (Recommended Practice)

In the following examples:

-   api\_key refers to your Contentstack stack API key
-   delivery\_token refers to a Delivery Token associated with your stack
-   environment refers to the target environment (for example, production or staging)

```
Stack stack = Contentstack.stack("api_key", "delivery_token", "environment");

// The retry mechanism is enabled by default with the following parameters:
// - A maximum of 3 retry attempts.
// - A base delay of 1000ms.
// - The EXPONENTIAL backoff strategy.
// - Retries are triggered by status codes: 408, 429, 502, 503, 504.

Entry entry = stack.contentType("blog").entry("entry_uid");
entry.fetch(new EntryResultCallBack() {
   @Override
   public void onCompletion(ResponseType responseType, Error error) {
       // Automatic retries are handled prior to the invocation of this callback.
       if (error == null) {
           System.out.println("Entry fetched successfully");
       } else {
           System.err.println("Error: " + error.getErrorMessage());
       }
   }
});
```

## Advanced Configuration: Custom Retry Configuration

```
// Instantiation of custom retry options
RetryOptions retryOptions = new RetryOptions()
   .setRetryLimit(5)              // Defines the number of retries before a failure is declared.
   .setRetryDelay(1000)           // Establishes the base delay interval (1 second).
   .setBackoffStrategy(RetryOptions.BackoffStrategy.EXPONENTIAL)
   .setRetryableStatusCodes(408, 429, 500, 502, 503, 504); // Specifies the HTTP status codes that will initiate a retry.

// Application of the options to the configuration object
Config config = new Config();
config.setRetryOptions(retryOptions);

// Stack instantiation utilizing the custom retry configuration
Stack stack = Contentstack.stack(config, "api_key", "delivery_token", "environment");

// All subsequent requests will adhere to this specified retry configuration.
Entry entry = stack.contentType("blog").entry("entry_uid");
entry.fetch(new EntryResultCallBack() {
   @Override
   public void onCompletion(ResponseType responseType, Error error) {
       if (error == null) {
           System.out.println("Success!");
       } else {
           System.err.println("Failed after 5 retries: " + error.getErrorMessage());
       }
   }
});
```

## Handling Retry Failures

If a request continues to fail even after retries are exhausted, check the following:

-   **Non-retryable status codes**: The SDK retries requests only for status codes listed in retryableStatusCodes. Other HTTP errors (for example, certain 4xx responses) are not retried.
-   **Authentication errors**: Errors caused by invalid API keys, delivery tokens, or environment names are not retryable and require correcting credentials.
-   **Persistent client errors (4xx)**:
    -   Most 4xx errors indicate permanent client-side issues, such as invalid requests or missing resources, and are not retried by default.
    -   **Exceptions:** Status codes 408 and 429 are retryable by default.
    -   If you explicitly include other 4xx status codes in retryableStatusCodes, they will be retried. However, this is generally not recommended, as these errors typically require request correction rather than retry.
-   **Network or DNS issues**: Prolonged network outages or DNS resolution failures may prevent successful retries.
-   **Retry limits reached**: If the configured retryLimit is reached, the SDK stops retrying and returns the final error through the callback.

## Backoff Strategies

A backoff strategy determines how long the SDK waits between retry attempts. Use the following guidelines to select a backoff strategy:

-   **EXPONENTIAL (recommended):** Best for production use to reduce server load during repeated failures.
-   **FIXED**: Use when a constant retry delay is acceptable.
-   **LINEAR**: Use when you want the delay to increase gradually.
-   **CUSTOM**: Use when you need fine-grained control, such as jitter or custom retry logic.

### 1\. FIXED Backoff (Constant Delay)

```
RetryOptions options = new RetryOptions()
   .setRetryDelay(1000)  // Configured for a 1-second delay.
   .setBackoffStrategy(RetryOptions.BackoffStrategy.FIXED);

// Retry delay pattern:
// Attempt 1: Wait 1000ms
// Attempt 2: Wait 1000ms
// Attempt 3: Wait 1000ms
```

**Use Case:** Appropriate when a consistent interval between retry attempts is desired.

### 2\. LINEAR Backoff

```
RetryOptions options = new RetryOptions()
   .setRetryDelay(1000)  // 1-second base delay established.
   .setBackoffStrategy(RetryOptions.BackoffStrategy.LINEAR);

// Retry delay pattern (The delay is proportional to the attempt number multiplied by the base delay):
// Attempt 1: Wait 1000ms (1 × 1000)
// Attempt 2: Wait 2000ms (2 × 1000)
// Attempt 3: Wait 3000ms (3 × 1000)
```

**Use Case:** Recommended when a controlled, progressive increase in the delay period is warranted.

### 3\. EXPONENTIAL Backoff (Recommended)

```
RetryOptions options = new RetryOptions()
   .setRetryDelay(1000)  // 1-second base delay established.
   .setBackoffStrategy(RetryOptions.BackoffStrategy.EXPONENTIAL);

// Retry delay pattern:
// Attempt 1: Wait 1000ms (2⁰ × 1000)
// Attempt 2: Wait 2000ms (2¹ × 1000)
// Attempt 3: Wait 4000ms (2² × 1000)
// Attempt 4: Wait 8000ms (2³ × 1000)
```

**Use Case:** This strategy is universally recommended for most operational contexts. It ensures a rapid increase in the delay to allow ample time for server recovery.

### 4\. CUSTOM Backoff (Advanced)

This advanced strategy allows you to define custom retry delay logic.

**Note:** If a custom backoff strategy is configured, it takes precedence over the backoffStrategy setting (FIXED, LINEAR, or EXPONENTIAL). When a custom implementation is provided, the backoffStrategy value is ignored.

**Safety considerations for custom backoff strategies**

When implementing a custom backoff strategy, keep the following in mind:

-   **Limit retry attempts**: Always pair a custom backoff strategy with an appropriate retryLimit to avoid excessive retries.
-   **Cap maximum delay**: Ensure the calculated delay does not grow indefinitely by enforcing a reasonable maximum delay.
-   **Handle non-retryable failures**: Apply custom backoff logic only for retryable errors defined in retryableStatusCodes.
-   **Use jitter carefully**: Adding jitter (random delay) can help reduce contention when multiple requests retry at the same time, but excessive randomness may lead to unpredictable retry timing.

```
RetryOptions options = new RetryOptions()
   .setCustomBackoffStrategy((attempt, statusCode, exception) -> {      
       // Example implementation: Exponential backoff incorporating jitter for dispersion
       long baseDelay = (long) Math.pow(2, attempt) * 1000;
       long jitter = (long) (Math.random() * 1000);
       return baseDelay + jitter;
   });
```
