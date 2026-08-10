---
title: "About Aliases"
description: "Enhance your Contentstack with branch aliasing for seamless app code integration and management. Easily switch branches and maintain content flow."
url: /headless-cms/about-aliases
---

# About Aliases

## About Aliases

Contentstack allows you to assign aliases to any [branch](/docs/headless-cms/about-branches) of your stack. An alias acts as a pointer to a specific branch.

Aliases offer another way to refer to a specific branch within your frontend application code. Define a target branch for your alias and avoid the hassle of making heavy changes to your code. You can point the alias to a different target branch, whenever required, so that the application renders content to your website from the specified branch.

For example, your stack may have a "production" alias that points to the "main" branch. The default behavior when merging will automatically generate a backup of the branch you are [merging](/docs/headless-cms/merging-branches/) into as a safety measure. In case there's an issue, simply point the "production" alias to the new "backup" branch.

You can manage your stack's aliases under the **Aliases** section:

![About_Alias.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltacb828597c90eead/62192f31d83ad851e8a9cf2e/About_Alias.png)

**Additional Resource:** For more information about using branches and aliases in your stack, read our [Branches Real-world Scenarios](/docs/headless-cms/real-world-scenarios "https://www.contentstack.com/docs/headless-cms/real-world-scenarios") document.
