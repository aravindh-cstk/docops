---
title: "[AM2.0] - Add Custom Languages in Assets"
description: How to create custom languages in Assets for modeling languages, regional variants, or internal language definitions and make them available for asset localization.
url: https://www.contentstack.com/docs/assets/add-custom-languages-in-assets
product: Contentstack Assets (AM2.0)
doc_type: how-to
audience:
  - developers
  - content-managers
  - localization-teams
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Add Custom Languages in Assets

This page explains how to create custom languages in Contentstack Assets (AM2.0) so teams can model languages, regional variants, or internal language definitions not covered by supported formats. It is intended for users managing Assets settings and should be used when setting up or expanding asset localization across spaces and workspaces.

## Add Custom Languages in Assets

Custom languages in Assets allow teams to model languages, regional variants, or internal language definitions that fall outside supported formats. Custom languages are created globally at the Assets level and once added, become available across spaces and workspaces for asset localization.

To add custom languages, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps below:
- Open Assets and navigate to **Settings** > **Languages**.
- Click **+ New Language**.
- Select **Create Custom Language**.
- Enter the following details:**Language Name:** A descriptive name for the custom language.
- **Language Code:** A unique code that identifies the language.
- **Fallback Language:** Select a language to source content when localized content is unavailable.
- Click **Add** to create the custom language.

The newly created custom language becomes available for assignment to workspaces. Refer to the [Add Languages to a Workspace](./add-languages-to-a-workspace.md) document to get started with asset localization.

**Note:**
- The combination of language code and locale or country code must remain unique across Assets.
- Language codes must be between **2 and 12 characters** long.
- Language codes must start with a letter and can include only letters, numbers, and hyphens (-).
- Once created, a custom language code cannot be modified.
- A fallback language ensures continuity by serving content from another language when localized content does not exist.

## Best Practices
- Use clear and consistent language codes that reflect regional or business needs (e.g., `en-internal` or `fr-ca-marketing`).
- Define fallback languages thoughtfully to avoid missing or broken localized asset delivery.
- Limit custom languages to genuine use cases to keep localization management clean and scalable.

## Common questions

**How are custom languages different from supported languages in Assets?**  
Custom languages allow teams to model languages, regional variants, or internal language definitions that fall outside supported formats.

**Where do custom languages become available after creation?**  
Custom languages are created globally at the Assets level and once added, become available across spaces and workspaces for asset localization.

**Can a custom language code be changed after it is created?**  
Once created, a custom language code cannot be modified.

**What does a fallback language do?**  
A fallback language ensures continuity by serving content from another language when localized content does not exist.