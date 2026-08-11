---
title: "API Endpoints"
description: "Explore Contentstack's comprehensive API endpoints documentation to streamline your development process. Learn how to leverage Contentstack Regions for seamless content management across your applications."
url: /administration/api-endpoints
---

# API Endpoints

## API Endpoints

This page lists the base API endpoints for Contentstack services across supported cloud providers and regions. It is intended for developers configuring integrations, SDKs, or network allowlists, and should be used when selecting the correct regional base URL for API calls (including GraphQL Live Preview).

**Tip:** Instead of hardcoding the base URLs below, you can retrieve them at runtime using the getContentstackEndpoint helper from the @contentstack/utils SDK. This is recommended for apps that support multiple regions or may add regions in the future. See [Get Contentstack Endpoints](/docs/developers/sdks/utils-sdk/javascript/get-contentstack-endpoints) for the full API reference and examples.

## Base API URLs for the AWS North America Region

Content Delivery: https://cdn.contentstack.io/

Content Management: https://api.contentstack.io/

Image Delivery: https://images.contentstack.io/

Assets (other than images): https://assets.contentstack.io/

Automate: https://automations-api.contentstack.com/

GraphQL: https://graphql.contentstack.com/

Brand Kit: https://brand-kits-api.contentstack.com/

Brand Kit GenAI and Knowledge Vault: https://ai.contentstack.com/brand-kits

Personalize Management: https://personalize-api.contentstack.com

Personalize Edge: https://personalize-edge.contentstack.com

Launch: https://launch-api.contentstack.com

## Base API URLs for AWS Europe Region

Content Delivery: https://eu-cdn.contentstack.com/

Content Management: https://eu-api.contentstack.com/

Image Delivery: https://eu-images.contentstack.com/

Assets (other than images): https://eu-assets.contentstack.com/

Automate: https://eu-prod-automations-api.contentstack.com

GraphQL: https://eu-graphql.contentstack.com/

Brand Kit: https://eu-brand-kits-api.contentstack.com

Brand Kit GenAI and Knowledge Vault: https://eu-ai.contentstack.com/brand-kits

Personalize Management: https://eu-personalize-api.contentstack.com

Personalze Edge: https://eu-personalize-edge.contentstack.com

Launch: https://eu-launch-api.contentstack.com

## Base API URLs for AWS Australia Region

Content Delivery: https://au-cdn.contentstack.com/

Content Management: https://au-api.contentstack.com/

Image Delivery: https://au-images.contentstack.com/

Assets (other than images): https://au-assets.contentstack.com/

Automate: https://au-prod-automations-api.contentstack.com

GraphQL: https://au-graphql.contentstack.com/

Brand Kit: https://au-brand-kits-api.contentstack.com

Brand Kit GenAI and Knowledge Vault: https://au-ai.contentstack.com/brand-kits

Personalize Management: https://au-personalize-api.contentstack.com

Personalze Edge: https://au-personalize-edge.contentstack.com

Launch: https://au-launch-api.contentstack.com

## Base API URLs for Azure North America Region

Content Delivery: https://azure-na-cdn.contentstack.com/

Content Management: https://azure-na-api.contentstack.com/

Image Delivery: https://azure-na-images.contentstack.com/

Assets (other than images): https://azure-na-assets.contentstack.com/

Automate: https://azure-na-automations-api.contentstack.com

GraphQL: https://azure-na-graphql.contentstack.com/

Brand Kit: https://azure-na-brand-kits-api.contentstack.com

Brand Kit GenAI and Knowledge Vault: https://azure-na-ai.contentstack.com/brand-kits

Personalize Management: https://azure-na-personalize-api.contentstack.com

Personalize Edge: https://azure-na-personalize-edge.contentstack.com

Launch: https://azure-na-launch-api.contentstack.com

## Base API URLs for Azure Europe Region

Content Delivery: https://azure-eu-cdn.contentstack.com/

Content Management: https://azure-eu-api.contentstack.com/

Image Delivery: https://azure-eu-images.contentstack.com/

Assets (other than images):https://azure-eu-assets.contentstack.com/

Automate: https://azure-eu-automations-api.contentstack.com

GraphQL: https://azure-eu-graphql.contentstack.com/

Brand Kit: https://azure-eu-brand-kits-api.contentstack.com

Brand Kit GenAI and Knowledge Vault: https://azure-eu-ai.contentstack.com/brand-kits

Personalize Management: https://azure-eu-personalize-api.contentstack.com

Personalize Edge: https://azure-eu-personalize-edge.contentstack.com

Launch: https://azure-eu-launch-api.contentstack.com

## Base API URLs for GCP North America Region

Content Delivery: https://gcp-na-cdn.contentstack.com/

Content Management: https://gcp-na-api.contentstack.com/

Image Delivery: https://gcp-na-images.contentstack.com/

Assets (other than images): https://gcp-na-assets.contentstack.com/

GraphQL:https://gcp-na-graphql.contentstack.com/

Brand Kit: https://gcp-na-brand-kits-api.contentstack.com

Brand Kit GenAI and Knowledge Vault: https://gcp-na-ai.contentstack.com/brand-kits

Personalize Management: https://gcp-na-personalize-api.contentstack.com

Personalize Edge: https://gcp-na-personalize-edge.contentstack.com

Launch: https://gcp-na-launch-api.contentstack.com

## Base API URLs for GCP Europe Region

Content Delivery:https://gcp-eu-cdn.contentstack.com/

Content Management: https://gcp-eu-api.contentstack.com/

Image Delivery: https://gcp-eu-images.contentstack.com/

Assets (other than images): https://gcp-eu-assets.contentstack.com/

GraphQL: https://gcp-eu-graphql.contentstack.com/

Personalize Management: https://gcp-eu-personalize-api.contentstack.com

Personalize Edge: https://gcp-eu-personalize-edge.contentstack.com

Launch: https://gcp-eu-launch-api.contentstack.com

## Base API URLs for Live Preview Support in GraphQL

AWS North America (AWS NA): https://graphql-preview.contentstack.com/

AWS Europe (AWS EU): https://eu-graphql-preview.contentstack.com/

AWS Australia (AWS AU): https://au-graphql-preview.contentstack.com/

Azure North America (Azure NA): https://azure-na-graphql-preview.contentstack.com/

Azure Europe (Azure EU): https://azure-eu-graphql-preview.contentstack.com/

GCP North America: https://gcp-na-graphql-preview.contentstack.com/

## Programmatic Access to Endpoints

If you are working with JavaScript or TypeScript, use the getContentstackEndpoint helper from @contentstack/utils instead of hardcoding endpoint URLs. This helper returns the correct base URL for a given region and service at runtime.

```
import { getContentstackEndpoint } from '@contentstack/utils';
const cdnUrl = getContentstackEndpoint('eu', 'contentDelivery');
// Returns: 'https://eu-cdn.contentstack.com'
```

Supported regions include:

-   na (alias: us)
-   eu
-   au
-   azure-na
-   azure-eu
-   gcp-na
-   gcp-eu

**Additional Resource:** For the complete API signature, supported parameters, and error handling details, refer to the [Get Contentstack Endpoints](/docs/developers/sdks/utils-sdk/javascript/get-contentstack-endpoints) documentation
