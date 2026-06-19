---
title: "[Developer Hub guides] - API Integration in Developer Hub Apps"
description: Use the Contentstack App SDK .api() method to make internal Contentstack API calls and external third-party API calls from Developer Hub apps, with authentication and routing handled via App Permissions and Advanced Settings.
url: https://www.contentstack.com/docs/developer-hub/api-integration-in-developer-hub-apps
product: Contentstack
doc_type: guide
audience:
  - developers
  - app-builders
version: current
last_updated: 2026-03-25
---

# [Developer Hub guides] - API Integration in Developer Hub Apps

This page explains how to use the Contentstack App SDK `.api()` method in Developer Hub apps for both internal Contentstack API calls and external third-party integrations, including when to use each approach, required setup, and examples for configuration, security, and troubleshooting.

## Introduction

The Contentstack App SDK `.api()` method offers a unified approach for making internal API calls to Contentstack services as well as external calls to third-party services. It automatically manages authentication, routing, and security, so you can focus on building functionality instead of handling infrastructure.

### When to Use Each Approach
- **Internal API Calls: **Access [Contentstack APIs](/docs/developers/apis) such as content management, releases, and webhooks with automatic authentication handled through App Permissions.
- **External API Calls:** Connect to third-party services such as AI, Slack, or payment processors using Advanced Settings for secure credential management.

## Prerequisites

Before making API calls, ensure the following:
- A [Developer Hub](/docs/developer-hub) App already created
- **For internal calls**, App Permissions properly configured in the [app manifest](/docs/developer-hub/app-manifest/)
- **For external calls**, [Advanced Settings](/docs/developer-hub/introduction-to-advanced-settings) set up with Variables, Mappings, and Rewrites as needed
- The **App SDK **initialized in your application

**Additional Resource: **Refer to the [App SDK](https://github.com/contentstack/app-sdk-docs/) documentation to learn more.

## Internal API Calls to Contentstack

Internal API calls use Contentstack’s built-in authentication via App Permissions, eliminating the need for separate credential management.

### App Permissions Configuration

Start by declaring the required permissions. In your Developer Hub application, go to the UI tab and select all the permissions your app needs. For this example, the following permissions are used:

### Read/Write Operations Example

The example below demonstrates how to read and write content and releases:

```
async function getContentTypes() {
  try {
    // Get all content types
    const contentTypesRes = await appSdk.api(
      `${appSdk.endpoints.CMA}/v3/content_types`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return contentTypesRes.json();
  } catch (error) {
    console.error('Error fetching content types:', error);
    throw error;
  }
}

async function createContentType(contentTypeData) {
  try {
    const contentTypesRes = await appSdk.api(
      `${appSdk.endpoints.CMA}/v3/content_types`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: contentTypeData
      }
    );

    return contentTypesRes.json();
  } catch (error) {
    console.error('Error creating content type:', error);
    throw error;
  }
}
```

## Integrate Third-party Services

External API calls use Advanced Settings configurations to securely manage credentials and simplify URL routing.

**Note:** This example only uses AI. You can integrate any API.

### Advanced Settings Configuration

#### Step 1: Configure Variables (for API keys)

In Developer Hub, under **Advanced Settings > Variables**, define your AI key variables as shown below:

```
{
  "AI_API_KEY": "sk-your-default-ai-api-key",
  "AI_MODEL": "gpt-3.5-turbo"
}
```

#### Step 2: Configure Mappings (for customer customization)

In Developer Hub, under **Advanced Settings > Mappings**, define mappings that allow end users to provide their credentials for the application.

```
{
  "CUSTOMER_AI_KEY": "integrations.ai.apiKey",
  "PREFERRED_MODEL": "integrations.ai.model"
}
```

#### Step 3: Configure Rewrites (for clean URLs)

In Developer Hub, under **Advanced Settings > Rewrites**, define rewrites to simplify the API calls made by your application.

```
{
  "/ai-chat": "https://api.ai.com/v1/chat/completions",
  "/ai-models": "https://api.ai.com/v1/models"
}
```

### AI Integration Example

The following is a complete example of how to integrate with the AI API:

```
async function generateAIContent(userPrompt) {
  try {
    // Get available models first
    const modelsRes = await appSdk.api('/ai-models', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer {{map.CUSTOMER_AI_KEY}}',
        'Content-Type': 'application/json'
      }
    });
    const models = await modelsRes.json();
    console.log('Available Models:', models.data);

    // Generate AI content
    const aiResponse = await appSdk.api('/ai-chat', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer {{map.CUSTOMER_AI_KEY}}',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: '{{map.PREFERRED_MODEL}}',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful content writing assistant for a CMS.'
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });
    const data = await aiResponse.json();
    console.log('AI Response:', data);

    return {
      generatedContent: data.choices[0].message.content,
      usage: data.usage,
      model: data.model
    };

  } catch (error) {
    console.error('Error generating AI content:', error);

    // Handle specific error cases
    if (error.status === 401) {
      throw new Error('Invalid API key. Please check your AI configuration.');
    } else if (error.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }

    throw error;
  }
}
```

## Best Practices

### Error Handling

Ensure that you are always implementing comprehensive error handling:

```
async function makeApiCallWithRetry(url, options, maxRetries = 3) {
  for (let attempt = 1; attempt  setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }
}
```

### Security Guidelines
- Never hardcode credentials in your application code
- Use **Variables** to store sensitive information such as API keys
- Use **Mappings** for values that customers can configure
- Always validate API responses before processing
- Log errors for debugging, but never include sensitive data in logs

### Performance Optimization
- **Cache API responses **when it improves performance
- **Use batch operations** for handling multiple related API calls
- **Implement request debouncing** for actions triggered by user input
- **Monitor rate limits** and apply backoff strategies when needed

## Troubleshooting

### Internal API Calls
- **403 Forbidden: **Check App Permissions in the app manifest
- **404 Not Found: **Verify the API endpoint and that the resource exists
- **422 Validation Error: **Ensure the request body format and required fields are correct

### External API Calls
- **401 unauthorized: **Confirm Variable and Mapping configurations for API keys
- **Rewrite not working: **Review the syntax and order of your Rewrite rules
- **CORS errors: **Make sure you are using the `.api()` method instead of a direct `fetch`

### Debugging Tips
- **Enable verbose logging **during development
- **Test API calls **in isolation before integrating into your app
- **Verify your Advanced Settings **configuration in Developer Hub
- Use the browser’s **network** tab to inspect request and response details
- Wrap API calls in **try-catch** blocks with detailed error logging for better traceability

### Getting Help
- Refer to the [App Permissions](/docs/developer-hub/build-an-app-using-app-permissions) documentation
- Refer to the [Introduction to Advanced Settings](/docs/developer-hub/introduction-to-advanced-settings) in Developer Hub
- Contact the [support team](mailto:support@contentstack.com) with specific error messages and request details

## Common questions

### What is the difference between internal and external API calls in Developer Hub apps?
Internal API calls access Contentstack APIs with automatic authentication handled through App Permissions, while external API calls connect to third-party services using Advanced Settings for secure credential management.

### Where should I store third-party API keys for external integrations?
Use **Advanced Settings > Variables** to store sensitive information such as API keys, and **Advanced Settings > Mappings** for values that customers can configure.

### Why should I use `.api()` instead of `fetch` for third-party calls?
The `.api()` method manages authentication, routing, and security, and can help avoid issues such as CORS errors when compared to making direct `fetch` calls.

### What should I check if an internal call returns 403 Forbidden?
Check App Permissions in the app manifest and ensure the required permissions are selected and properly configured.