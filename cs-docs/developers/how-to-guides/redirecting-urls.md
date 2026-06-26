---
title: "[How-to Guides and Knowledgebase articles] - Redirecting URLs"
description: Redirecting URLs
url: https://www.contentstack.com/docs/developers/how-to-guides/redirecting-urls
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Redirecting URLs

This page explains how to manage URL redirects in Contentstack-powered websites by creating a dedicated content type and entries for redirects, and then implementing code logic to redirect users from old URLs to new ones. It is intended for developers maintaining site routing and SEO behavior when published entry URLs change.

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

If you happen to change the URL of any already-published [entry](../../content-managers/author-content/about-entries.md), it is recommended that you redirect the previous URL to the newer one. This is considered as an appropriate SEO best practice as users trying to visit the older link to the website will be automatically taken to the newer link, instead of seeing a “Page not found” error.

**Additional Resource:** If you're interested in knowing what are the best practices when it comes to managing SEO for your content, here's our [SEO Best Practices for Contentstack-powered Websites](/docs/developers/how-to-guides/seo-best-practices-for-contentstack-powered-websites) guide that you can refer to.

Let’s learn how to manage URL redirects using your Contentstack-powered websites.

## Create a content type to handle URL redirects

You need to create a separate [content type](../create-content-types/create-a-content-type.md) to manage the redirection of the changed URLs.

- [Create a new content type](../create-content-types/create-a-content-type.md) within your Contentstack [stack](../set-up-stack/about-stack.md)
- Provide a suitable name for the content type, such as **Redirect**
- Set it as a [Multiple](../create-content-types/multiple.md) content type of [Content Block](/docs/developers/create-content-types/webpage-vs-content-block) type
- Add two [Single Line Textbox](../create-content-types/single-line-textbox.md) fields to the content type and name them **From** and **To**, respectively

This creates your Redirect content type. You can now add your redirect links as entries.

## Create entries to manage redirection of URLs

If you change the URL of any [published entry](../../content-managers/author-content/publish-an-entry.md), perform the following steps to manage URL redirects:

- [Create an entry](../../content-managers/author-content/create-an-entry.md) for your **Redirect** content type.
- In the **From** [field](../create-content-types/about-fields.md), mention the URL that has been modified or no longer exists.
- In the **To** field, mention the new URL.
- After you enter relevant content in all the available fields, save and publish the entry to the specified publishing environment.

## Manage your code to redirect URLs

Finally, the main and irreplaceable task is to write the script that will manage your Redirects. It should check the URL in the “From” field and get redirected to the URL in the “To” field.

Now, if any user visits the old URL, he/she will be redirected to the new URL automatically.

## How the Script Works

Once you have created the content type as discussed above, you can create a script that can help you implement the logic. The following screenshot shows the example code or the script that can be implemented:

The script takes the path (the page URL) the user enters in the browser. Refer to this section of the code:

Then, it makes a CDN query using parameters such as environment name, locale, path. Inside the headers, you need to pass the API key, access token, and other parameters.

The script searches or finds the URL (entered by the user in the browser) in the Redirects content type inside the field name "From".

In the response code, the script checks if there's an existing entry (with code 200). If there's one redirect available then the script checks if the URL is temporary or permanent (using the code 301 and 302). For this, you can add a Boolean field in the Redirect content type as shown in the example below:

In the above example, 302 represents the redirect URL is temporary whereas 301 represents a permanent redirect. This helps our script to let the browser know about the redirect URL and if it is permanent then the browser displays the URL without running the script again.

If the URL is marked as 302 (Boolean field in the content type is selected) then the browser checks the script every time the URL is hit by the user.

If it finds that URL in the From field, it then checks if there's a corresponding or a redirected URL in the To field. If the redirect URL is available, the user is redirected to the new URL. Take a look at the example screenshot below:

## Common questions

### Is this page still supported?
No. **Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

### Why should I redirect old URLs after changing an entry URL?
It is recommended that you redirect the previous URL to the newer one as an appropriate SEO best practice so users visiting the older link are automatically taken to the newer link instead of seeing a “Page not found” error.

### What fields are required in the Redirect content type?
Add two [Single Line Textbox](../create-content-types/single-line-textbox.md) fields to the content type and name them **From** and **To**, respectively.

### How does the script decide between a temporary and permanent redirect?
The script checks if the URL is temporary or permanent (using the code 301 and 302), and you can add a Boolean field in the Redirect content type to indicate whether 302 (temporary) or 301 (permanent) should be used.