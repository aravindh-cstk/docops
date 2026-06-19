---
title: Automations guides and connectors - CircleCI
description: Configure and integrate the CircleCI action connector to trigger a pipeline from an automation action step.
url: https://www.contentstack.com/docs/agent-os/circleci
product: Automations guides and connectors
doc_type: connector-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - CircleCI

This page explains how to set up the CircleCI action connector so you can integrate CircleCI services into your project and trigger a pipeline from an automation action step. It is intended for developers configuring third-party CI/CD integrations.

## CircleCI

The CircleCI action connector allows you to configure and integrate the CircleCI services to your project.

CircleCI is a CI/CD delivery platform that provides services to implement DevOps practices. It automates the process of creating the build and deploying the project to CI/CD pipeline.

## Set Up CircleCI action Connector

Follow the given instructions to set up the CI/CD action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the Configure Action Step, click the **CircleCI **connector.
- Under** Choose an Action** tab, select the Trigger a Pipeline action.
- In the** Configure Action** tab, click **+ Add New Account **to add your CircleCI account.
- Enter the **Title** and **API Token**. Once done, click **Authorize**.
- To generate the API Token for your CircleCI account, follow these steps:
- Navigate to your CircleCI console and click **User Settings**.
- Click the **Personal API Tokens** tab, then click **Create New Token**.

  **Additional Resource:** For more information, refer to the [Managing API’s](https://circleci.com/docs/2.0/managing-api-tokens/) doc.
- Select the **VCS type** textbox and select the repo type from the drop-down.
- Enter details such as **Organization name**, **Repository name**, **Branch/Tag**, and **Branch/Tag** name in their respective fields. Once done, click **Proceed**.
- Click **Test Action**.
- You should see the output as follows. If all looks good, click **Save and Exit** to finish the process.

This sets your **CircleCI** action connector.

## Common questions

**How do I generate a CircleCI API Token?**  
Navigate to your CircleCI console and click **User Settings**, then open the **Personal API Tokens** tab and click **Create New Token**.

**Where do I add my CircleCI account in the connector setup?**  
In the** Configure Action** tab, click **+ Add New Account **to add your CircleCI account.

**What action should I select to run CircleCI from the connector?**  
Under** Choose an Action** tab, select the Trigger a Pipeline action.

**How do I confirm the connector is working before saving?**  
Click **Test Action**, review the output, and if all looks good, click **Save and Exit**.