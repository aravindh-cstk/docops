---
title: "[AM2.0] - About Asset Localization"
description: Overview of asset localization in Assets, including benefits, supported languages, and an example workflow.
url: https://www.contentstack.com/docs/assets/about-asset-localization
product: Assets
doc_type: concept
audience:
  - developers
  - content-managers
  - administrators
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - About Asset Localization

This page explains what asset localization is in Assets, why it matters for global teams, what languages are supported (including custom languages), and provides an example workflow for managing localized asset metadata and files.

### About Asset Localization

Asset localization in Assets enables you to manage, adapt, and deliver digital assets for global audiences with ease. It allows you to create language-specific versions of asset metadata, and even the asset itself, so that teams can deliver culturally relevant and regionally accurate experiences without duplicating assets or workflows.

With asset localization, you can localize asset titles, descriptions, tags, user-defined metadata, and even replace the underlying file (eg., images containing text) for different languages, all within the same asset.

## Key Benefits of Asset Localization

Asset localization helps organizations scale global content delivery while maintaining control and consistency.
- Deliver regionally relevant assets without duplication
- Maintain a single source of truth for global assets
- Ensure consistent fallback behavior
- Improve search and discovery in localized environments
- Support global campaigns and multilingual websites at scale

## Why Asset Localization Matters

Global teams often need more than just translated content. Assets such as images, documents, and videos may need:
- Language-specific text
- Region-specific visuals
- Localized metadata for better discovery
- Controlled fallbacks when localized content is unavailable

Asset localization addresses these needs by allowing a single asset to support multiple languages while maintaining a clean, governed structure that’s easy to manage across teams and regions.

## Supported and Custom Languages

Assets supports **200+ predefined languages**, covering most global and regional needs.

In addition:
- You can create custom languages if your localization requirements do not align with standard language codes.
- Custom languages behave the same as supported languages for asset localization.
- Once created, a language code cannot be changed.

This flexibility allows teams to support:
- Regional dialects
- Internal or business-specific language conventions
- Market or audience-specific variations

## Example: Localized Asset Workflow

Imagine you manage assets for a website available in English and French:
- You upload an image and add metadata in English.
- You add French as a language with English as its fallback.
- You switch to the French version and:Update the title and description in French
- Add French tags
- Replace the image with a French version containing localized text

When the website is viewed in French, the French asset version is used. If a French version is unavailable, the English version is automatically served.

## Common questions

**What can be localized for an asset?**  
Asset titles, descriptions, tags, user-defined metadata, and even the underlying file can be localized.

**Do I need to duplicate assets to support multiple languages?**  
No. Asset localization allows a single asset to support multiple languages without duplicating assets or workflows.

**What happens if a localized version is missing?**  
Fallback behavior ensures that if a localized version is unavailable, the fallback language version is automatically served.

**Can I change a custom language code after creating it?**  
No. Once created, a language code cannot be changed.