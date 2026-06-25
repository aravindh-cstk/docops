---
title: "[Contentstack Regions] - API Endpoints"
description: Base API URLs for Contentstack services across AWS, Azure, and GCP regions, including GraphQL Live Preview endpoints.
url: https://www.contentstack.com/docs/administration/api-endpoints
product: Contentstack
doc_type: reference
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Contentstack Regions] - API Endpoints

This page lists the base API endpoints for Contentstack services across supported cloud providers and regions. It is intended for developers configuring integrations, SDKs, or network allowlists, and should be used when selecting the correct regional base URL for API calls (including GraphQL Live Preview).

## Base API URLs for the AWS North America Region
Content Delivery: `https://cdn.contentstack.io/`

Content Management: `https://api.contentstack.io/`

Image Delivery: `https://images.contentstack.io/`

Assets (other than images): `https://assets.contentstack.io/`

Automate: `https://automations-api.contentstack.com/`

GraphQL: `https://graphql.contentstack.com/`

Brand Kit: `https://brand-kits-api.contentstack.com/`

Brand Kit GenAI and Knowledge Vault: `https://ai.contentstack.com/brand-kits`

Personalize Management: `https://personalize-api.contentstack.com`

Personalize Edge: `https://personalize-edge.contentstack.com`

Launch: `https://launch-api.contentstack.com`

## Base API URLs for AWS Europe Region
Content Delivery: `https://eu-cdn.contentstack.com/`

Content Management: `https://eu-api.contentstack.com/`

Image Delivery: `https://eu-images.contentstack.com/`

Assets (other than images): `https://eu-assets.contentstack.com/`

Automate: `https://eu-prod-automations-api.contentstack.com`

GraphQL: `https://eu-graphql.contentstack.com/`

Brand Kit: `https://eu-brand-kits-api.contentstack.com`

Brand Kit GenAI and Knowledge Vault: `https://eu-ai.contentstack.com/brand-kits`

Personalize Management: `https://eu-personalize-api.contentstack.com`

Personalze Edge: `https://eu-personalize-edge.contentstack.com`

Launch: `https://eu-launch-api.contentstack.com`

## Base API URLs for AWS Australia Region
Content Delivery: `https://au-cdn.contentstack.com/`

Content Management: `https://au-api.contentstack.com/`

Image Delivery: `https://au-images.contentstack.com/`

Assets (other than images): `https://au-assets.contentstack.com/`

Automate: `https://au-prod-automations-api.contentstack.com`

GraphQL: `https://au-graphql.contentstack.com/`

Brand Kit: `https://au-brand-kits-api.contentstack.com`

Brand Kit GenAI and Knowledge Vault: `https://au-ai.contentstack.com/brand-kits`

Personalize Management: `https://au-personalize-api.contentstack.com`

Personalze Edge: `https://au-personalize-edge.contentstack.com`

Launch: `https://au-launch-api.contentstack.com`

## Base API URLs for Azure North America Region
Content Delivery: `https://azure-na-cdn.contentstack.com/`

Content Management: `https://azure-na-api.contentstack.com/`

Image Delivery: `https://azure-na-images.contentstack.com/`

Assets (other than images): `https://azure-na-assets.contentstack.com/`

Automate: `https://azure-na-automations-api.contentstack.com`

GraphQL: `https://azure-na-graphql.contentstack.com/`

Brand Kit: `https://azure-na-brand-kits-api.contentstack.com/`

Brand Kit GenAI and Knowledge Vault: `https://azure-na-ai.contentstack.com/brand-kits`

Personalize Management: `https://azure-na-personalize-api.contentstack.com`

Personalize Edge: `https://azure-na-personalize-edge.contentstack.com`

Launch: `https://azure-na-launch-api.contentstack.com`

## Base API URLs for Azure Europe Region
Content Delivery: `https://azure-eu-cdn.contentstack.com/`

Content Management: `https://azure-eu-api.contentstack.com/`

Image Delivery: `https://azure-eu-images.contentstack.com/`

Assets (other than images):`https://azure-eu-assets.contentstack.com/`

Automate: `https://azure-eu-automations-api.contentstack.com`

GraphQL: `https://azure-eu-graphql.contentstack.com/`

Brand Kit: `https://azure-eu-brand-kits-api.contentstack.com`

Brand Kit GenAI and Knowledge Vault: `https://azure-eu-ai.contentstack.com/brand-kits`

Personalize Management: `https://azure-eu-personalize-api.contentstack.com`

Personalize Edge: `https://azure-eu-personalize-edge.contentstack.com`

Launch: `https://azure-eu-launch-api.contentstack.com`

## Base API URLs for GCP North America Region
Content Delivery: `https://gcp-na-cdn.contentstack.com/`

Content Management: `https://gcp-na-api.contentstack.com/`

Image Delivery: `https://gcp-na-images.contentstack.com/`

Assets (other than images): `https://gcp-na-assets.contentstack.com/`

GraphQL:`https://gcp-na-graphql.contentstack.com/`

Brand Kit: `https://gcp-na-brand-kits-api.contentstack.com`

Brand Kit GenAI and Knowledge Vault: `https://gcp-na-ai.contentstack.com/brand-kits`

Personalize Management: `https://gcp-na-personalize-api.contentstack.com`

Personalize Edge: `https://gcp-na-personalize-edge.contentstack.com`

Launch: `https://gcp-na-launch-api.contentstack.com`

## Base API URLs for GCP Europe Region
Content Delivery:`https://gcp-eu-cdn.contentstack.com/`

Content Management: `https://gcp-eu-api.contentstack.com/`

Image Delivery: `https://gcp-eu-images.contentstack.com/`

Assets (other than images): `https://gcp-eu-assets.contentstack.com/`

GraphQL: `https://gcp-eu-graphql.contentstack.com/`

Personalize Management: `https://gcp-eu-personalize-api.contentstack.com`

Personalize Edge: `https://gcp-eu-personalize-edge.contentstack.com`

Launch: `https://gcp-eu-launch-api.contentstack.com`

## Base API URLs for Live Preview Support in GraphQL
AWS North America (AWS NA): `https://graphql-preview.contentstack.com/`

AWS Europe (AWS EU): `https://eu-graphql-preview.contentstack.com/`

AWS Australia (AWS AU): `https://au-graphql-preview.contentstack.com/`

Azure North America (Azure NA): `https://azure-na-graphql-preview.contentstack.com/`

Azure Europe (Azure EU): `https://azure-eu-graphql-preview.contentstack.com/`

GCP North America: `https://gcp-na-graphql-preview.contentstack.com/`

## Common questions

### How do I choose the correct base URL for my API calls?
Use the base API URL that matches the cloud provider and region where your Contentstack stack is hosted (for example, AWS Europe vs Azure North America).

### Are the GraphQL Live Preview endpoints different from the standard GraphQL endpoints?
Yes. The “Base API URLs for Live Preview Support in GraphQL” section lists separate GraphQL preview endpoints.

### Do I need different endpoints for different Contentstack services?
Yes. Services such as Content Delivery, Content Management, Image Delivery, Assets, Automate, GraphQL, Brand Kit, Personalize, and Launch each have their own base URL per region.