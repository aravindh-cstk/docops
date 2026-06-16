---
title: Automations guides and connectors - TravisCI
description: TravisCI connector documentation for setting up an action connector and triggering a build.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/travisci
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - TravisCI

This page describes the TravisCI connector in Automation Hub and explains how to set up the TravisCI action connector to trigger builds for GitHub or Bitbucket repositories. It is intended for developers or automation builders configuring third-party service actions and should be used when integrating TravisCI into an automation workflow.

## TravisCI

TravisCI is an integration service used to test the repositories hosted on GitHub or Bitbucket. When you integrate your GitHub or Bitbucket repositories with your TravisCI account, it checks for the configuration defined in the .travis.yml file (that you need to define) and notifies you with the output.

TravisCI is very helpful as it lets you test any kind of code break or redundancy in the master repository of your GitHub or Bitbucket accounts.

## Set Up TravisCI

Perform the following steps to set up TravisCI action connector:
- Click** Configure Action Step** from the left navigation panel.
- Click** Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **TravisCI** connector.
- Under **Choose an Action** tab, select the **Trigger a Build** action.
- In the **Configure Action** tab, click**+ Add New Account** to add your TravisCI account.
- In the **Authorize** pop-up window, provide the **API Token**.
- To generate an API Token, log in to the TravisCI dashboard and perform the following steps:
- Under User Settings, select **Settings**.
- Under the **Settings** tab, copy the **Token** value.

**Additional Resource:** For more information, refer to the [Token](https://blog.travis-ci.com/2013-01-28-token-token-token/) document.
- Once done, click**Authorize**.
- Select a **Repository** from the **Lookup** list. You need to integrate your GitHub or Bitbucket repositories within TravisCI.
- Select a **Branch** from the **Lookup** list.
- Clicking the **Show optional field** toggle button lets you add the **Commit message** and **Configuration** fields.
- Provide a new **Commit message**. This will override any previous commit message.
- Provide additional configuration details (in JSON format only) in the **Configuration** field. This will get added into the .travis.yml file.
- Once done, click **Proceed**.
- Click **Test Action**.
- On successful configuration, you can see the below output. Click **Save and Exit**.
- Navigate to TravisCI to check the progress. You should see the following output:

This sets the **TravisCI **action connector.

## Common questions

### Where do I get the TravisCI API Token?
To generate an API Token, log in to the TravisCI dashboard, go to User Settings, select **Settings**, and copy the **Token** value under the **Settings** tab.

### What repositories can I use with this connector?
You need to integrate your GitHub or Bitbucket repositories within TravisCI, then select a **Repository** from the **Lookup** list.

### What does the optional Configuration field do?
Provide additional configuration details (in JSON format only) in the **Configuration** field. This will get added into the .travis.yml file.

### What happens after I click Test Action?
On successful configuration, you can see the below output. Click **Save and Exit**, then navigate to TravisCI to check the progress.