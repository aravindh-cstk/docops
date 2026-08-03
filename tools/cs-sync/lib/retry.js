/**
 * Retry utility with exponential backoff
 * Handles rate limiting and transient failures gracefully
 */

export async function withRetry(fn, options = {}) {
  const {
    maxRetries = 3,
    initialDelayMs = 100,
    maxDelayMs = 5000,
    backoffMultiplier = 2,
    name = 'operation',
  } = options;

  let lastError;
  let delay = initialDelayMs;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      const isLastAttempt = attempt === maxRetries;

      if (isLastAttempt) {
        throw error;
      }

      const statusCode = error.statusCode || error.status;
      const isRetryable = isRetryableError(statusCode, error.message);

      if (!isRetryable) {
        throw error;
      }

      console.warn(
        `⚠️  ${name} failed (attempt ${attempt}/${maxRetries}): ${error.message}. ` +
        `Retrying in ${delay}ms...`
      );

      await sleep(delay);
      delay = Math.min(delay * backoffMultiplier, maxDelayMs);
    }
  }

  throw lastError;
}

function isRetryableError(statusCode, message) {
  if (!statusCode) return true;

  const retryableStatuses = [
    408, // Request Timeout
    429, // Too Many Requests (rate limit)
    500, // Internal Server Error
    502, // Bad Gateway
    503, // Service Unavailable
    504, // Gateway Timeout
  ];

  if (retryableStatuses.includes(statusCode)) {
    return true;
  }

  if (message && (message.includes('ECONNREFUSED') || message.includes('ETIMEDOUT'))) {
    return true;
  }

  return false;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
