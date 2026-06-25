---
title: "[Brand Kit] - About Knowledge Vault"
description: Overview of Knowledge Vault, how it works, key features, and methods to ingest items.
url: https://www.contentstack.com/docs/brand-kit/about-knowledge-vault
product: Contentstack
doc_type: concept
audience:
  - content-managers
  - developers
  - marketers
version: current
last_updated: 2026-03-26
---

# [Brand Kit] - About Knowledge Vault

This page explains what the Knowledge Vault is, how it works as a vector database for semantic search, what features it provides, and the available ways to ingest content into it. It is intended for content managers and teams who need on-brand AI-generated content and should be used when setting up or maintaining brand knowledge sources for generative AI.

## About Knowledge Vault

The Knowledge Vault is a powerful tool designed to help create on-brand AI-generated content by storing critical company information, such as brand-related documents, data and content, and making it available to generative AI for content creation.

Unlike a traditional database that stores exact copies of images, documents and text, the Knowledge Vault is a vector database, which stores data as numerical representations, or vectors, that capture the meaning and context of information instead.

A vector database enables more intelligent searches based on the meaning behind the words, known as a semantic search. This allows AI to understand and retrieve information that is contextually relevant for the content that is being created, even if the exact words don't match.

## How does Knowledge Vault Work?

When you upload content to the Knowledge Vault, it doesn't store the full document in its original format like a PDF file. Instead, it extracts the text from your content and converts it into vectors, positioning it in a **vector space** based on its semantic meaning.

This enables AI to perform more nuanced searches and generate content that is more aligned with your brand's voice and guidelines.

So, while you won't be able to retrieve the original file directly from the Knowledge Vault, if you store the external ID from a separate Digital Asset Management (DAM) system, you could, in theory, retrieve the associated file from there. The AI will still use the embedded knowledge to create content that accurately reflects your brand's identity and messaging.

## Knowledge Vault Features

The following are the key features of the Knowledge Vault:
- **Centralized Repository**: Consolidates all your brand's documents, data, and content into one easily accessible location, ensuring everything is organized and within reach.
- **Brand Information Storage**: Securely stores essential materials, including brand guidelines, product details, help center information, and historical content, safeguarding your brand's legacy and identity.
- **Generative AI Reference**: Acts as an authoritative source for Contentstack's generative AI, ensuring that any generated content is consistent with your brand's voice, style, and identity.
- **Consistency and Accuracy**: Maintains uniformity and precision across all digital platforms by centralizing all brand information, thereby reinforcing your brand's integrity.
- **Content Creation Support**: Allows content creators, developers, and marketers to easily access and reference essential brand information while developing new content.

## Ingesting Items into the Knowledge Vault

There are three methods to add content in to the Knowledge Vault:
- **Using the Knowledge Vault Interface**: You can add and update items in the Knowledge Vault via its interface. For more details, refer to the [Add Item in Knowledge Vault](./add-item-in-knowledge-vault.md) and [Edit Item in Knowledge Vault](./edit-item-in-knowledge-vault.md) guides.
- **Using the Automate Brand Kit Connector**: You can load items into the Knowledge Vault by using the [Create an Item in Knowledge Vault](/docs/developers/automation-hub-connectors/brand-kit#create-an-item-in-knowledge-vault) action within the Automate [Brand Kit](/docs/developers/automation-hub-connectors/brand-kit) Connector.
- **Using the Knowledge Vault API**: You can add items into the Knowledge Vault by using the [Ingest Content](../../../api-docs/api-detail/brand-kit-management-api.md#ingest-content) request in the [Knowledge Vault](../../../api-docs/api-detail/brand-kit-management-api.md#knowledge-vault) API.

## Common questions

**Can I download the original files I upload to the Knowledge Vault?**  
No. You won't be able to retrieve the original file directly from the Knowledge Vault.

**Why does Knowledge Vault use a vector database instead of storing exact copies?**  
It stores data as numerical representations, or vectors, that capture the meaning and context of information, enabling semantic search.

**What are the ways to ingest content into the Knowledge Vault?**  
Using the Knowledge Vault Interface, using the Automate Brand Kit Connector, or using the Knowledge Vault API.

**How can I retrieve the original file if I need it later?**  
If you store the external ID from a separate Digital Asset Management (DAM) system, you could, in theory, retrieve the associated file from there.