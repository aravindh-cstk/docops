---
title: "[How-to Guides and Knowledgebase articles] - Share Content Between Stacks Using a Web Proxy"
description: Share Content Between Stacks Using a Web Proxy
url: https://www.contentstack.com/docs/developers/how-to-guides/share-content-between-stacks-using-a-web-proxy
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Share Content Between Stacks Using a Web Proxy

This page explains how to share content stored in one Contentstack stack with another stack using a sample app and a web proxy. It is intended for developers who need to set up cross-stack content sharing and want to follow a step-by-step implementation guide.

## Share Content Between Stacks Using a Web Proxy

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn how to manage stack-level content operations and migrations, refer to the [Content Management API](../../../api-docs/api-detail/content-management-api.md) documentation.

There can be many instances where we must use content stored in one [stack](../set-up-stack/about-stack.md) in another stack. This sharing of data between stacks is a common practice when we have a lot of content spread across multiple stacks.

In this guide, we will discuss how to create a system that can help us share data between stacks by using a sample app and web proxy.

**Process Overview**: We will begin by building two stacks: Stack A (parent Stack) and Stack B (child Stack.) The sample app will consist of a header, footer, home page, error page, and a contact page as default components from the parent stack (stack A). This app will display previews of the recent blogs added in the child stack (stack B).

## Prerequisites

- [Contentstack account](https://app.contentstack.com/#!/login)
- [ExpressJS](https://expressjs.com/) 4.17 or above
- Basic knowledge of [Contentstack CLI](/docs/developers/cli)

## Steps for Execution

- [Download the code from our GitHub repository](#download-the-code-from-our-github-repository)
- [Create Stacks and Import Content](#create-stacks-and-import-content)
- [Configure the code](#configure-the-code)
- [Execute the code](#execute-the-code)

### Download the code from our GitHub repository

For this exercise, we will first start by downloading the code bundle from our [GitHub](https://github.com/contentstack/contentstack-web-proxy-sample-app) repository. Within this code bundle, you will find the “stack-data” folder, which has two subfolders “parent-stack-data” and “child-stack-data” from which we will import the data into the stacks that we will create in the next step.

### Create Stacks and Import Content

When [creating stacks](../set-up-stack/create-a-new-stack.md) for this exercise, remember that we need two separate stacks, a parent stack and a child stack.  
After you create the stacks, use the [Contentstack CLI](/docs/developers/cli) to import entries and assets to both the parent as well as the child stacks. Perform the following steps in order to do this:  
Perform the following steps in order to do this:

Install the [Contentstack CLI](/docs/developers/cli).

```
npm install -g @contentstack/cli
```

- [Authenticate](../cli/cli-authentication.md) yourself with CLI:

```
csdx auth:login
```

- Import the content types, assets, and entries:

```
csdx cm:import -A -s  -d
```

`-A`, `--auth-token`: To use the auth token of the current session. It is automatically generated and stored in the session after running the login command.

- `-s`, `--stack-uid-stack-uid`: The API key of the target stack
- `-d`, `--data=data`: The path or the location in your file system where the content, you intend to import, is stored. For example, `-d "C:\Users\Name\Desktop\cli\content"
  `

Repeat the above steps to [import](../cli/import-content-using-the-cli.md) data into the child stack.

So far, we have created the following [content types](../create-content-types/about-content-types.md) and imported [entries](../../content-managers/author-content/about-entries.md) and [assets](/docs/content-managers/working-with-assets/about-assets) into them.

**Note:** For this exercise, you need to ensure that both the parent and child stack should have en-us set as the [master language](../multilingual-content/set-the-master-language.md).

For the parent stack (stack A) we have added the following content types:

- Home
- Header
- Footer
- Error
- Contact

Once you have imported entries and assets to the content types, they will look like this:

For stack B, we have imported the **Blogs** content type and its entries. When completed, it will look like this:

- Finally, publish the imported content of all the content types in both the stacks, A and B.

### Configure the code

Now that your stacks are ready with the content types and the respective entries, let us move ahead with configuring the code of the sample app.

Open the downloaded code in any appropriate code editor application.

- Open the command prompt and move inside the project root directory. Then, run the command npm install to install the required dependencies.
- After installing the dependencies for your code, navigate to the **.env** file.![env_preview.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdfb6ea8fb437341d/6388d0f883315b288791520e/env_preview.jpg)
- Mention the required details for Stack A:**Port****Proxy URL:**
  North America:`https://api.contentstack.io/`

  Europe:- `https://eu-api.contentstack.com/`

  Azure NA:- `https://azure-na-api.contentstack.com/`

  Azure EU:- `https://azure-eu-api.contentstack.com/`

  **Stack API Key**

  **Stack Delivery Token**

  **Stack Publish Env**
- For Stack B, mention the following details:**Stack API Key****Stack Delivery Token****Stack Publish Env**
- In the config.js file, provide the UIDs of the default content types and the blog content type, as shown below:

The **defaultContentTypes** array will contain the UIDs for the default entries from the parent Stack (Stack A) viz. “header,” “footer,” “home,” “error,” and “contact”. Whereas, blogContentTypeUid will hold the UID i.e “blog” for your blog entries from your child Stack (Stack B.)

- Save the code.

### Execute the Code

The final step of this experiment is to execute the code. In your root directory perform the following steps:

In the command terminal, execute the command  
npm start

- In your web-browser enter the following address:

```
http://localhost:5000
```

You will see the following result:

This is how the two stacks communicate with each other. As you can see, the sample app enables the parent Stack - Stack A, to display the preview of the blogs from the child Stack - Stack B.

The JSON response that is generated is shown below:

```
{
  defaultEntries: {
    header: [ [Object] ],
    footer: [ [Object] ],
    home: [ [Object] ],
    error: [ [Object] ],
    contact: [ [Object] ]
  },
  entries: [
    {
      _version: 8,
      locale: 'en-us',
      uid: 'bltbd31fa200947d8ac',
      ACL: {},
      _in_progress: false,
      blog: [Object],
      created_at: '2020-09-30T16:48:45.943Z',
      created_by: 'blt828ab71437a69a50',
      tags: [],
      title: 'Blogs',
      updated_at: '2020-09-30T17:31:29.990Z',
      updated_by: 'blt828ab71437a69a50',
      url: '/blogs',
      publish_details: [Object]
    }
  ]
}
```

As you can observe from the above JSON response, there are no individual calls that are made to fetch entries for our sample app, therefore there is no need for individual APIs.

Notice the default entries object from our original response consists of default entries i.e header, footer, home, error, and contact from parent Stack (Stack A)

```
defaultEntries: {
    header: [ [Object] ],
    footer: [ [Object] ],
    home: [ [Object] ],
    error: [ [Object] ],
    contact: [ [Object] ]
 }
```

In the following response, you can see the previews of blogs added in the child Stack (Stack B)

```
entries: [
    {
      _version: 8,
      locale: 'en-us',
      uid: 'bltbd31fa200947d8ac',
      ACL: {},
      _in_progress: false,
      blog: [Object],
      created_at: '2020-09-30T16:48:45.943Z',
      created_by: 'blt828ab71437a69a50',
      tags: [],
      title: 'Blogs',
      updated_at: '2020-09-30T17:31:29.990Z',
      updated_by: 'blt828ab71437a69a50',
      url: '/blogs',
      publish_details: [Object]
    }
  ]
```

This is how you get a common response for both of your entries (default and blogs) from two separate Stacks within a single JSON response using web proxy implementation.

## Common questions

### Is this page still supported?

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

### What are Stack A and Stack B used for in this guide?

Stack A (parent Stack) provides default components (header, footer, home, error, contact), and Stack B (child Stack) provides the **Blogs** content type and its entries.

### What tool is used to import content into the stacks?

The [Contentstack CLI](/docs/developers/cli) is used to import content types, assets, and entries into both stacks.

### What does the web proxy implementation produce?

It produces a single JSON response containing default entries from the parent stack and blog previews from the child stack.