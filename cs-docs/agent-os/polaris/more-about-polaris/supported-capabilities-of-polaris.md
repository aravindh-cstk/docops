---
title: "Supported Capabilities of Polaris"
description: "Understand Polaris limitations in Contentstack, including supported content types, permission controls, context-based actions, and metadata-only operations."
url: /agent-os/supported-capabilities-of-polaris
uid: blt742163c6bb530b8d
---

# Supported Capabilities of Polaris

## Supported Capabilities of Polaris

**Note:** For access, please talk to our [Support](mailto:support@contentstack.com) team.

-   Polaris works with **CMS entries**, **assets**, **content types**, **entry comments**, the **Visual Editor**, **releases**, **environments**, and **stack users**.
-   Polaris performs actions using the **credentials and permissions of the logged-in user**.
-   Polaris works with **text and metadata content**, reads files you attach, and can export entries as **downloadable files**.
-   Polaris **does not edit images or videos**.
-   When an entry, asset, or Visual Editor page is **open or selected**, Polaris uses it as the context for your request. You can also name other items, and stack-level actions, such as releases, environments, and user access, don't need an open item.
-   In the **Visual Editor**, Polaris saves changes to the entry and language behind the open page. It doesn't switch the page you are viewing; it gives you a link to open another page.
-   In **Manually Approve** mode, Polaris pauses before every **write action** and requires **explicit user confirmation**. In **Auto** mode, it performs write actions without asking.
