/**
 * Environment variable loader with validation
 * Ensures all required credentials are present before running scripts
 */

export function loadEnv(requiredVars) {
  const missing = [];
  const env = {};

  requiredVars.forEach(varName => {
    const value = process.env[varName];
    if (!value || value.trim() === '') {
      missing.push(varName);
    } else {
      env[varName] = value;
    }
  });

  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach(v => console.error(`   - ${v}`));
    console.error('\n📋 Set these in .env or as GitHub Secrets');
    console.error('📖 See .env.example for template\n');
    process.exit(1);
  }

  return env;
}

export function getConfig(stackType) {
  // Phase 1 (CREATE_DRAFT_ONLY): Only need production credentials
  const createDraftOnly = process.env.CREATE_DRAFT_ONLY === 'true';
  const addToRelease = process.env.ADD_TO_RELEASE === 'true';

  const stackTypes = {
    apidocs: {
      required: createDraftOnly || addToRelease ? [
        'PROD_APIDOCS_STACK_API_KEY',
        'PROD_APIDOCS_STACK_MANAGEMENT_TOKEN',
      ] : [
        'PROD_APIDOCS_STACK_API_KEY',
        'PROD_APIDOCS_STACK_DELIVERY_TOKEN',
        'APIDOCS_SANDBOX_STACK_API_KEY',
        'APIDOCS_SANDBOX_MANAGEMENT_TOKEN',
      ],
      prod: {
        apiKey: process.env.PROD_APIDOCS_STACK_API_KEY,
        managementToken: process.env.PROD_APIDOCS_STACK_MANAGEMENT_TOKEN,
        deliveryToken: process.env.PROD_APIDOCS_STACK_DELIVERY_TOKEN,
      },
      sandbox: {
        apiKey: process.env.APIDOCS_SANDBOX_STACK_API_KEY,
        managementToken: process.env.APIDOCS_SANDBOX_MANAGEMENT_TOKEN,
      },
    },
    csdocs: {
      required: createDraftOnly || addToRelease ? [
        'PROD_CSDOCS_STACK_API_KEY',
        'PROD_CSDOCS_STACK_MANAGEMENT_TOKEN',
      ] : [
        'PROD_CSDOCS_STACK_API_KEY',
        'PROD_CSDOCS_STACK_DELIVERY_TOKEN',
        'CSDOCS_SANDBOX_STACK_API_KEY',
        'CSDOCS_SANDBOX_MANAGEMENT_TOKEN',
      ],
      prod: {
        apiKey: process.env.PROD_CSDOCS_STACK_API_KEY,
        managementToken: process.env.PROD_CSDOCS_STACK_MANAGEMENT_TOKEN,
        deliveryToken: process.env.PROD_CSDOCS_STACK_DELIVERY_TOKEN,
      },
      sandbox: {
        apiKey: process.env.CSDOCS_SANDBOX_STACK_API_KEY,
        managementToken: process.env.CSDOCS_SANDBOX_MANAGEMENT_TOKEN,
      },
    },
  };

  if (!stackTypes[stackType]) {
    throw new Error(`Unknown stack type: ${stackType}. Must be 'apidocs' or 'csdocs'`);
  }

  const config = stackTypes[stackType];
  loadEnv(config.required);
  return config;
}
