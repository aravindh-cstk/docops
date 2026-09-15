---
title: "Add Custom Languages in Assets"
description: "Learn how to create custom languages for asset localization in Contentstack, enabling regional variants and internal formats for seamless content management."
url: /assets/add-custom-languages-in-assets
uid: bltcb9bd6c3f9e84a68
---

# Add Custom Languages in Assets

## Add Custom Languages in Assets

Custom languages in Assets allow teams to model languages, regional variants, or internal language definitions that fall outside supported formats. Custom languages are created globally at the Assets level and once added, become available across spaces and workspaces for asset localization.

To add custom languages, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps below:

1.  Open Assets and navigate to **Settings** > **Languages**.
2.  Click **\+ New Language**.
3.  Select **Create Custom Language**.
4.  Enter the following details:
    1.  **Language Name:** A descriptive name for the custom language.
    2.  **Language Code:** A unique code that identifies the language.
    3.  **Fallback Language:** Select a language to source content when localized content is unavailable.
5.  Click **Add** to create the custom language.

The newly created custom language becomes available for assignment to workspaces. Refer to the [Add Languages to a Workspace](/docs/assets/add-languages-to-a-workspace) document to get started with asset localization.

**Note:**

-   The combination of language code and locale or country code must remain unique across Assets.
-   Language codes must be between **2 and 12 characters** long.
-   Language codes must start with a letter and can include only letters, numbers, and hyphens (-).
-   Once created, a custom language code cannot be modified.
-   A fallback language ensures continuity by serving content from another language when localized content does not exist.

## Best Practices

-   Use clear and consistent language codes that reflect regional or business needs (e.g., en-internal or fr-ca-marketing).
-   Define fallback languages thoughtfully to avoid missing or broken localized asset delivery.
-   Limit custom languages to genuine use cases to keep localization management clean and scalable.
