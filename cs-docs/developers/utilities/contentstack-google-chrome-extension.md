---
title: "[Tools] - Contentstack Google Chrome Extension"
description: The 'Contentstack Google Chrome Extension' provides its user with the ability to quickly move from a live web page to its corresponding entry in Contentstack.
url: https://www.contentstack.com/docs/developers/utilities/contentstack-google-chrome-extension
product: Contentstack
doc_type: utilities
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Tools] - Contentstack Google Chrome Extension

This page explains what the Contentstack Google Chrome Extension does and how to install and configure it. It is intended for developers and content editors working on Contentstack-powered websites who want to jump from a live page directly to its corresponding entry in Contentstack for faster editing.

## Contentstack Google Chrome Extension

The 'Contentstack Google Chrome Extension' provides its user with the ability to quickly move from a live web page to its corresponding entry in Contentstack.

If you are on a web page of a site that is powered by Contentstack, and if you have the permission to edit its content, you will see an edit button at the right/left bottom of the page. Clicking this will take you to the corresponding entry in Contentstack.

This reduces the time and effort of searching for specific entries within Contentstack’s web application in addition to optimizing the editing experience by enabling users to update content on the fly.

## Adding the Extension

To add this extension to your Chrome browser, follow the steps given below:

- Visit the [Contentstack Google Chrome Extension](https://chrome.google.com/webstore/detail/contentstack/kliacmaffhaakhphcelpjcmienmikgoa) page and add this extension by clicking on the **Add to Chrome** button.
- Once installed, a pop-up will prompt you to enter the stack details and button preferences. Provide the necessary details in each field (all fields are mandatory). Select your region (**North America,** **Europe**, or **Other**) and then save the configuration.

**Note**: If you select **Other** in **Region**, you will have to provide the endpoint of your region. To add multiple stacks to the configuration, click on **+ Add Stack** and provide the stack details as mentioned above.

- Add the following attributes to the body tag of your website’s page templates:**

  - data-pageref**: Used to identify the entry UID of the current page**
  - data-contenttype**: Used to identify the content type UID of the entry**
  - data-locale**: Used to identify the local of the entry for the current page

Here’s an example of how to add these details in your code:

*<body data-pageref="bltb8b487559a1b715d" data-contenttype="product" data-locale="en-us">*

In the above example,

"bltb8b487559a1b715d" is the UID of the entry  
"product" is the UID of the content type  
"en-us" is the locale of the entry of the corresponding web page

- Go to the tab in your Chrome browser where you want to use this extension, and reload or refresh the page.

**Note**: This is a one-time activity when you add a new domain or an API key.

- The **Edit** button will now be visible on your Contentstack-powered web pages.
- Clicking on this button will take you to its corresponding entry page in Contentstack.

If you want to use this extension on other stacks, you can click on the **Extension** icon as shown below. Then, you need to click on **+ Add Stack** after that provide the details of your stack (API Key) and your domain just like you did in the previous step.

## Limitations

- The extension works only for the entries of the "Webpage" type content types and not for "Content Block" content types.

## Common questions

**How do I make the Edit button appear on my site pages?**  
Add the required attributes to the `<body>` tag (`data-pageref`, `data-contenttype`, `data-locale`), then reload or refresh the page in Chrome.

**Can I configure the extension for more than one stack?**  
Yes. Click on the **Extension** icon, then click on **+ Add Stack** and provide the stack details (API Key) and your domain.

**What should I do if my region is not North America or Europe?**  
Select **Other** in **Region**, then provide the endpoint of your region.

**Does the extension work for all content types?**  
No. The extension works only for the entries of the "Webpage" type content types and not for "Content Block" content types.

<!-- filename: tools-contentstack-google-chrome-extension.md -->