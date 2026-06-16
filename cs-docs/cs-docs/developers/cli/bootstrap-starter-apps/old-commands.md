---
title: "[Contentstack Command-line Interface (CLI)] - Bootstrap Starter Apps | Old Commands"
description: Bootstrap Starter Apps | Old Commands
url: https://www.contentstack.com/docs/developers/cli/bootstrap-starter-apps/old-commands
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Bootstrap Starter Apps | Old Commands

This page explains how to use the Contentstack CLI “Bootstrap” plugin to set up starter app projects by automating stack creation and importing required content. It is intended for developers who want to quickly initialize and run Contentstack starter apps using the CLI.

## Bootstrap Starter Apps | Old Commands

The “Bootstrap” plugin in Contentstack CLI allows users to automate the process of project setup for [starter apps](/docs/developers/sample-apps#starter-apps).

Using the CLI “Bootstrap” plugin developers can set up projects quickly and effectively. The plugin automates the whole procedure of stack creation and setting up the project.
Using this plugin, the content types, environments, entries, and assets required to run the starter apps get created in the stack you select or create.

In this guide, we will discuss how to use this plugin and automate the process.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login)
- [Node.js version 16 or above](https://nodejs.org/en/download/)
- CLI installed on your machine: `**npm install -g @contentstack/cli**`

## Steps for Execution

- [Log in to Contentstack CLI session](#log-in-to-contentstack-cli-session)
- [Use the Bootstrap command](#use-the-bootstrap-command)

## Log in to Contentstack CLI session

If you haven't installed the Contentstack CLI yet, follow the steps mentioned in the [CLI installation](/docs/developers/cli/install-the-cli) guide and get it installed.

After you have successfully installed the CLI on your machine, you have to log in to the CLI session to run the ‘Bootstrap’ command.

**Note**: By default, this CLI session will work for the app hosted in the** North America** region. If you want to switch to **Europe **or **Azure North America** region, follow the steps mentioned in the [**Set Region**](/docs/developers/cli/configure-the-cli#set-region) command section.

Now, open your terminal (command prompt) and run the following command to log in to your Contentstack account:

```
csdx auth:login
```

Provide your Contentstack account’s email and password to successfully log in to the CLI session.

**Additional Resources**: To learn more about the CLI login command, refer to the [**Login command **](/docs/developers/cli/authenticate-with-the-cli#login)section.

## Use the Bootstrap command

After successfully logging in to Contentstack CLI, run the following command to initiate the procedure:

```
csdx cm:bootstrap
```

This command will prompt you to enter the following details:

Technology
- Path
- Organization name
- Stack preference

Let's discuss these options in detail.

- **Technology**: Select the starter app (the technology type, such as React, Next, and so on) that you want to clone from the GitHub repository, from the available options.
For our example let's select **React JS** app.
- **Path**: Once you have selected the app, provide the folder path to copy the app's source code.
According to your preference, provide the folder path by selecting the **Other **option or you can use the **Current** directory as a default option.
This will start cloning the selected app to the folder you provide.
- **Organization name**: Now, **Select an Organization** from the list of your organizations.
The cloned app content will be added to a stack in the organization you select.
- **Stack preference**: In the organization you picked above, select if you want to create a **new stack **or use an **existing stack** to import the content of the app.
For this example let's create a **new stack** in the organization we selected.
- Accordingly, add the **Name of the Stack** where you want to import the project content and click the **Enter** button to start importing the project to the stack.
- On providing the above details, the plugin will add the project content including fields, and assets. It will also set up the environments, languages, and other settings for the selected app.

**Note**: Imported content will be automatically published in the target stack.

This is how you can automate the process of project creation in Contentstack by using the Bootstrap command.

The alternate way of using the plugin is by providing the required parameters after the command in a single line as shown below:

```
csdx cm:bootstrap -s  -t  -a  -d ""
```

**Options**:

- `-t`, `--accessToken=accessToken`: (optional) The token of your private repo to access the project.
- `-s`, `--appType=appType`: Sample or Starter app
- `-a`, `--appName=appName`: The app name of the starter app.
For eg. **reactjs-starter**, **nextjs-starter**, **gatsby-starter**, **angular-starter**, **nuxt-starter**.
- `-d`, `--directory=directory`: Specify the path or the location of the folder to clone the app.

**Examples:**

- To select the app you want to clone, use this command:

```
csdx cm:bootstrap -a
```

For Eg. To clone content of a** React JS **app:

```
csdx cm:bootstrap -a reactjs-starter
```

- This is an optional command to be used if you want to clone a project from a private GitHub repository.Provide the token of the private repository.

```
csdx cm:bootstrap -t
```

- Use this command to provide the path to the location of the folder to clone the app:

```
csdx cm:bootstrap -d ""
```

For Eg.

```
csdx cm:bootstrap -d "C:\Users\Name\Desktop\cli\content"
```

The above command will add the starter app’s (**React JS**) content to your stack as shown below:

## Run the Starter Apps

You can easily run this starter app on your local machine by following the steps below:

### Build, Configure and Run the Website (Manual Process)

Download the website code from our [GitHub repository](https://codeload.github.com/contentstack/contentstack-react-starter-app/zip/refs/heads/master).

After downloading the website code, navigate to the root folder and **create** a configuration file named **.env.development.**,

Provide your stack credentials like [API key](/docs/developers/set-up-stack/view-stack-details), [Delivery token](/docs/developers/create-tokens/about-delivery-tokens), and [environment](/docs/developers/set-up-environments/about-environments):

```
REACT_APP_CONTENTSTACK_API_KEY =
REACT_APP_CONTENTSTACK_DELIVERY_TOKEN =
REACT_APP_CONTENTSTACK_ENVIRONMENT =
REACT_APP_CONTENTSTACK_LIVE_PREVIEW= true
```

**Note:** By default, the Live Preview feature is disabled for this project. To enable it, set `REACT_APP_CONTENTSTACK_LIVE_PREVIEW= true`.

Now, fire up your terminal, point it to your project location, and run the following commands:

```
npm install
npm start
```

That’s it!
You can now view the website at **http://localhost:3000**.
Here's how your website's **Home** page will look after running on your localhost.

### Deploy the Website

The easiest and the quickest way to deploy the React JS starter website on production is to use Vercel.
You need a [Vercel account](https://vercel.com/signup) before you start deploying.

**Note**: During deployment, to use the European or Azure North American region, add an environment variable **REACT_APP_CONTENTSTACK_REGION** and set its value to **eu** or **azure-na **respectively**.**

The Bootstrap plugin supports the following starter apps.

Starter Apps

- [React JS](/docs/developers/sample-apps/build-a-starter-website-using-react-js-and-contentstack)
- [Next JS](/docs/developers/sample-apps/build-a-starter-website-using-next-js-and-contentstack)
- [Gatsby](/docs/developers/sample-apps/build-a-starter-website-with-gatsby-and-contentstack)
- [Angular](/docs/developers/sample-apps/build-a-starter-website-with-angular-and-contentstack)
- [Nuxt JS](/docs/developers/sample-apps/build-a-starter-website-with-nuxt-js-and-contentstack)

**Additional Resource**: To create and run a demo website, use the sample code and guide provided in the Contentstack starter apps [documentation](/docs/developers/sample-apps#starter-apps).

**Limitations:**

- When importing content to an existing stack, make sure you don't add duplicate content types. If you try to add similar content types, you'll get an error.
- If you want to create a new stack for storing content, make sure you have the “[owner](/docs/owners-and-admins/organization-roles#organization-owner)” or “[admin](/docs/owners-and-admins/organization-roles#organization-admin)” rights in that organization.

## Common questions

### What does the Contentstack CLI “Bootstrap” plugin do?
It allows users to automate the process of project setup for starter apps by creating required content types, environments, entries, and assets in a selected or newly created stack.

### Do I need to log in before running the Bootstrap command?
Yes. After installing the CLI, you have to log in to the CLI session to run the ‘Bootstrap’ command.

### Can I run Bootstrap with parameters in a single command?
Yes. The alternate way of using the plugin is by providing the required parameters after the command in a single line: `csdx cm:bootstrap -s  -t  -a  -d ""`.

### What happens to imported content after running Bootstrap?
Imported content will be automatically published in the target stack.