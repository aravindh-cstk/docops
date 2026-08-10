---
title: "Environment Limitations"
description: "Understand the limitations of environments to ensure seamless content publishing across different deployment channels."
url: /headless-cms/environment-limitations
---

# Environment Limitations

## Environment Limitations

-   Environment names cannot use the following special characters: #%^+\\/?\\\*:|"'<>\\s{}=,
-   Environment names cannot contain spaces.
-   Environment names should **not exceed 255 characters** and cannot contain capital letters.
-   Environments are stack-specific and cannot be shared between stacks.
-   Once an environment is deleted, it cannot be restored.
-   Any published content in the deleted environment remains in Contentstack but becomes inaccessible via that environment.
-   [Delivery tokens](/docs/headless-cms/about-delivery-tokens) associated with the deleted environment become invalid, preventing API-based content retrieval.
