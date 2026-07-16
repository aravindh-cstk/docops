---
title: Automations guides and connectors - Heroku
description: Set up the Heroku Action connector to trigger a build of your Heroku app.
url: https://www.contentstack.com/docs/agent-os/heroku
product: Contentstack
doc_type: automation-connector-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Heroku

This page explains how to configure the Heroku Action connector in Contentstack Automations to trigger a build for a Heroku app. It is intended for developers setting up third-party action steps and should be used when you want an automation to deploy a build to Heroku.

## Heroku

The Heroku Action connector will trigger a build of your Heroku app.

## Set up Heroku

Perform the following steps to set up the Heroku action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Heroku** connector.![Heroku.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfcefc402864f80a8/6527f8c86f293946ac191330/Heroku.png)
- Under **Choose an Action** tab, select the **Trigger a Build** action.![Select_An_Action.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/blt403d654434c0a7c0/639d6d9272cb3955c5f0deed/Select_An_Action.png?locale=en-us)
- Click the **+ Add New Account** button to select your Heroku account.
- Now, add a suitable **Title** and the **API Key** of your Heroku app to connect your Heroku account with Contentstack.

To get your Heroku app's API Key, log in to the Heroku dashboard, and perform the following steps:
      Click **Account Settings** under the user profile.
- Click the **Account** tab, and you will find your API Key.

**Additional Resource:** For more information, refer to the [How to generate an API Key](https://help.heroku.com/PBGP6IDE/how-should-i-generate-an-api-key-that-allows-me-to-use-the-heroku-platform-api/) document.
- Once done, click **Authorize**.
- Under the **Source-blob url **section, add the url where the source code of your build is present.**Note:** If you are using a public GitHub repo for your source code then the url will be in the following format:

`https://api.github.com/repos/<username>/<repo_name>/tarball/<branch_name>/</branch_name></repo_name></username></repo_name></repo_name></username>`

**Example:**
`https://api.github.com/repos/username/samplename/tarball/master/`

**For a private GitHub repo use the following format:**
`https://:@api.github.com/repos/<username>/<repo_name>/tarball/<branch_name>/ </branch_name></repo_name></username></token></user_name>`

**Example:**
`https://username:sampletoken@api.github.com/repos/username/samplename/tarball/master/`
- Under the **App name/ id section**, select the app that you have created in Heroku.
- You can mention a **Version** for your build. This is an optional step which will help you keep track of the latest version for your build.
- Finally, click on the toggle button if you want to **Hide optional fields** and then click **Proceed**.![Click_On_Proceed.jpg](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/blt167a77860a593db3/639d682f097e0f59cca5e078/Click_On_Proceed.jpg?locale=en-us)
- Click **Test Action** to test if a build is created in Heroku. In the output section, you can view the status of your build.
- Once set, click **Save and Exit**.

The action will deploy a build in your Heroku project. You can check the build and open the respective app you deployed using the Heroku connector.

This sets up the **Heroku** action connector.

## Common questions

### What does the Heroku Action connector do?
The Heroku Action connector will trigger a build of your Heroku app.

### Where do I find the API Key needed for authorization?
Log in to the Heroku dashboard, click **Account Settings** under the user profile, then click the **Account** tab, and you will find your API Key.

### What should I provide for the Source-blob url?
Under the **Source-blob url **section, add the url where the source code of your build is present.

### How can I verify the connector is working?
Click **Test Action** to test if a build is created in Heroku. In the output section, you can view the status of your build.