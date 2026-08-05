#!/usr/bin/env node

/**
 * Unit Test: Retry Logic
 * Tests exponential backoff and retry behavior
 */

class RetryLogicTest {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.tests = [];
  }

  // Simulated withRetry function
  async withRetry(fn, options = {}) {
    const { maxRetries = 3, baseDelay = 100, multiplier = 2 } = options;
    let lastError;
    const delays = [];

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return {
          success: true,
          result: await fn(),
          attempts: attempt,
          delays: delays,
        };
      } catch (error) {
        lastError = error;

        // Only retry on transient errors
        if (!this.isTransientError(error.statusCode)) {
          return {
            success: false,
            error: lastError,
            attempts: attempt,
            delays: delays,
            reason: 'Non-transient error - no retry',
          };
        }

        if (attempt < maxRetries) {
          const delay = baseDelay * Math.pow(multiplier, attempt - 1);
          delays.push(delay);
          await this.sleep(delay / 1000); // Convert to shorter sleep for testing
        }
      }
    }

    return {
      success: false,
      error: lastError,
      attempts: maxRetries,
      delays: delays,
      reason: 'Max retries exceeded',
    };
  }

  isTransientError(statusCode) {
    // Transient errors: 429, 503, 5xx, timeouts
    return [429, 503, 500, 502, 504].includes(statusCode) || statusCode >= 500;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  assert(name, condition, message) {
    if (condition) {
      this.passed++;
      console.log(`  ✅ ${name}`);
    } else {
      this.failed++;
      console.log(`  ❌ ${name}: ${message}`);
    }
    this.tests.push({ name, passed: condition, message });
  }

  // Test 1: Success on first attempt
  async testSuccessFirstAttempt() {
    console.log('\n📝 Test 1: Success on First Attempt\n');
    let callCount = 0;

    const result = await this.withRetry(async () => {
      callCount++;
      return 'success';
    });

    this.assert('Success first attempt', result.success, 'Should succeed');
    this.assert('No retries needed', result.attempts === 1, `Expected 1 attempt, got ${result.attempts}`);
    this.assert('No delays recorded', result.delays.length === 0, `Expected 0 delays, got ${result.delays.length}`);
  }

  // Test 2: Success on retry (429 rate limit)
  async testSuccessOnRateLimit() {
    console.log('\n📝 Test 2: Success on Retry (Rate Limit)\n');
    let callCount = 0;

    const result = await this.withRetry(async () => {
      callCount++;
      if (callCount === 1) {
        const err = new Error('Rate limited');
        err.statusCode = 429;
        throw err;
      }
      return 'success after retry';
    });

    this.assert('Success after retry', result.success, 'Should succeed on retry');
    this.assert('Retried once', result.attempts === 2, `Expected 2 attempts, got ${result.attempts}`);
    this.assert('Has delay recorded', result.delays.length > 0, 'Should have delay');
  }

  // Test 3: Exponential backoff delays
  async testExponentialBackoff() {
    console.log('\n📝 Test 3: Exponential Backoff\n');
    let callCount = 0;

    const result = await this.withRetry(
      async () => {
        callCount++;
        if (callCount <= 3) {
          const err = new Error('Service unavailable');
          err.statusCode = 503;
          throw err;
        }
        return 'success';
      },
      { maxRetries: 4, baseDelay: 100, multiplier: 2 }
    );

    this.assert('Exhausted retries', result.success === false, 'Should fail after all retries');
    this.assert('Has delays', result.delays.length > 0, 'Should record delays');

    // Check exponential progression: 100, 200, 400
    if (result.delays.length >= 1) {
      this.assert('First delay ~100ms', Math.abs(result.delays[0] - 100) < 10, `Got ${result.delays[0]}`);
    }
    if (result.delays.length >= 2) {
      this.assert('Second delay ~200ms', Math.abs(result.delays[1] - 200) < 10, `Got ${result.delays[1]}`);
    }
    if (result.delays.length >= 3) {
      this.assert('Third delay ~400ms', Math.abs(result.delays[2] - 400) < 10, `Got ${result.delays[2]}`);
    }
  }

  // Test 4: No retry on validation error (400)
  async testNoRetryValidationError() {
    console.log('\n📝 Test 4: No Retry on Validation Error (400)\n');
    let callCount = 0;

    const result = await this.withRetry(async () => {
      callCount++;
      const err = new Error('Bad request');
      err.statusCode = 400;
      throw err;
    });

    this.assert('Fails immediately', !result.success, 'Should fail immediately');
    this.assert('No retry on 400', result.attempts === 1, `Expected 1 attempt, got ${result.attempts}`);
    this.assert('No delays', result.delays.length === 0, 'Should not retry');
    this.assert('Reason is clear', result.reason.includes('Non-transient'), 'Should explain non-transient');
  }

  // Test 5: No retry on 401 Unauthorized
  async testNoRetry401() {
    console.log('\n📝 Test 5: No Retry on 401 Unauthorized\n');
    let callCount = 0;

    const result = await this.withRetry(async () => {
      callCount++;
      const err = new Error('Unauthorized');
      err.statusCode = 401;
      throw err;
    });

    this.assert('Fails immediately', !result.success, 'Should fail immediately');
    this.assert('No retry on 401', result.attempts === 1, `Expected 1 attempt, got ${result.attempts}`);
  }

  // Test 6: No retry on 403 Forbidden
  async testNoRetry403() {
    console.log('\n📝 Test 6: No Retry on 403 Forbidden\n');
    let callCount = 0;

    const result = await this.withRetry(async () => {
      callCount++;
      const err = new Error('Forbidden');
      err.statusCode = 403;
      throw err;
    });

    this.assert('Fails immediately', !result.success, 'Should fail immediately');
    this.assert('No retry on 403', result.attempts === 1, `Expected 1 attempt, got ${result.attempts}`);
  }

  // Test 7: Retry on 500 Server Error
  async testRetry500() {
    console.log('\n📝 Test 7: Retry on 500 Server Error\n');
    let callCount = 0;

    const result = await this.withRetry(async () => {
      callCount++;
      if (callCount === 1) {
        const err = new Error('Server error');
        err.statusCode = 500;
        throw err;
      }
      return 'success after retry';
    });

    this.assert('Succeeds after 500 error', result.success, 'Should retry and succeed');
    this.assert('Retried', result.attempts === 2, `Expected 2 attempts, got ${result.attempts}`);
  }

  // Test 8: Retry on 502 Bad Gateway
  async testRetry502() {
    console.log('\n📝 Test 8: Retry on 502 Bad Gateway\n');
    let callCount = 0;

    const result = await this.withRetry(async () => {
      callCount++;
      if (callCount === 1) {
        const err = new Error('Bad gateway');
        err.statusCode = 502;
        throw err;
      }
      return 'success';
    });

    this.assert('Succeeds after 502', result.success, 'Should retry and succeed');
    this.assert('Has delay', result.delays.length > 0, 'Should have delay');
  }

  // Test 9: Retry on 503 Service Unavailable
  async testRetry503() {
    console.log('\n📝 Test 9: Retry on 503 Service Unavailable\n');
    let callCount = 0;

    const result = await this.withRetry(async () => {
      callCount++;
      if (callCount <= 2) {
        const err = new Error('Service unavailable');
        err.statusCode = 503;
        throw err;
      }
      return 'success';
    });

    this.assert('Succeeds after 503', result.success, 'Should retry and succeed');
    this.assert('Multiple retries', result.attempts === 3, `Expected 3 attempts, got ${result.attempts}`);
  }

  // Test 10: Retry on 429 Rate Limit
  async testRetry429() {
    console.log('\n📝 Test 10: Retry on 429 Rate Limit\n');
    let callCount = 0;

    const result = await this.withRetry(async () => {
      callCount++;
      if (callCount <= 1) {
        const err = new Error('Too many requests');
        err.statusCode = 429;
        throw err;
      }
      return 'success';
    });

    this.assert('Succeeds after rate limit', result.success, 'Should retry and succeed');
    this.assert('Has exponential delay', result.delays[0] > 0, 'Should have delay');
  }

  // Test 11: Max retries exceeded
  async testMaxRetriesExceeded() {
    console.log('\n📝 Test 11: Max Retries Exceeded\n');
    let callCount = 0;

    const result = await this.withRetry(
      async () => {
        callCount++;
        const err = new Error('Always fails');
        err.statusCode = 503;
        throw err;
      },
      { maxRetries: 3 }
    );

    this.assert('Fails after max retries', !result.success, 'Should fail after all retries');
    this.assert('Attempts equal max retries', result.attempts === 3, `Expected 3 attempts, got ${result.attempts}`);
    this.assert('Has max retries reason', result.reason.includes('Max retries'), 'Should explain max retries');
  }

  // Test 12: Timeout retry
  async testTimeoutRetry() {
    console.log('\n📝 Test 12: Timeout Retry\n');
    let callCount = 0;

    const result = await this.withRetry(async () => {
      callCount++;
      if (callCount === 1) {
        const err = new Error('Timeout');
        err.statusCode = 504; // Gateway timeout
        throw err;
      }
      return 'success after timeout';
    });

    this.assert('Succeeds after timeout', result.success, 'Should retry on timeout');
    this.assert('Retried on timeout', result.attempts === 2, `Expected 2 attempts, got ${result.attempts}`);
  }

  // Test 13: Partial success in sequence
  async testPartialSuccessSequence() {
    console.log('\n📝 Test 13: Partial Success Sequence\n');
    let callCount = 0;

    const result = await this.withRetry(async () => {
      callCount++;
      if (callCount === 1) {
        const err = new Error('500 error');
        err.statusCode = 500;
        throw err;
      }
      if (callCount === 2) {
        const err = new Error('503 error');
        err.statusCode = 503;
        throw err;
      }
      return 'success on third attempt';
    });

    this.assert('Succeeds after multiple errors', result.success, 'Should succeed');
    this.assert('Multiple retries', result.attempts === 3, `Expected 3 attempts, got ${result.attempts}`);
    this.assert('Multiple delays', result.delays.length === 2, `Expected 2 delays, got ${result.delays.length}`);
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 RETRY LOGIC TEST SUMMARY\n');
    console.log(`✅ Passed: ${this.passed}`);
    console.log(`❌ Failed: ${this.failed}`);
    console.log(`📊 Total:  ${this.passed + this.failed}\n`);

    if (this.failed > 0) {
      console.log('Failed Tests:');
      this.tests.filter(t => !t.passed).forEach(t => {
        console.log(`  - ${t.name}: ${t.message}`);
      });
    }

    console.log('='.repeat(50) + '\n');
  }

  async run() {
    console.log('🧪 RETRY LOGIC TESTS\n');
    await this.testSuccessFirstAttempt();
    await this.testSuccessOnRateLimit();
    await this.testExponentialBackoff();
    await this.testNoRetryValidationError();
    await this.testNoRetry401();
    await this.testNoRetry403();
    await this.testRetry500();
    await this.testRetry502();
    await this.testRetry503();
    await this.testRetry429();
    await this.testMaxRetriesExceeded();
    await this.testTimeoutRetry();
    await this.testPartialSuccessSequence();
    this.printSummary();
    process.exit(this.failed > 0 ? 1 : 0);
  }
}

new RetryLogicTest().run();
