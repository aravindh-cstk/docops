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
- Within the Configure Action Step, click the **CircleCI **connector.![Select_the_Connector_Circleci.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5fd181090e8704dd/6527c9d57986d470318f3834/Select_the_Connector_Circleci.png)
- Under** Choose an Action** tab, select the Trigger a Pipeline action.![Select_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7923445dbf251200/63db55bc2d94ad4c89edca29/Select-Action.png)
- In the** Configure Action** tab, click **+ Add New Account **to add your CircleCI account.![Add_New_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt069683a6baea4735/63db55bcddb7a921030a7f07/Add-New-Account.png)
- Enter the **Title** and **API Token**. Once done, click **Authorize**.![Authorize_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt39a6f0e37311aba1/63db55bc0cf395166a6e24cb/Authorize-Account.png)
- To generate the API Token for your CircleCI account, follow these steps:
- Navigate to your CircleCI console and click **User Settings**.![User_Setting](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf75d3aeb81dc2458/63db56ffc73e0910c5408c8f/User-Setting.png)
- Click the **Personal API Tokens** tab, then click **Create New Token**.

  **Additional Resource:** For more information, refer to the [Managing API’s](https://circleci.com/docs/2.0/managing-api-tokens/) doc.
- Select the **VCS type** textbox and select the repo type from the drop-down.![Select_VCS_type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2f216818a956d0e/63db55bd5e9f5911307af893/Select-VCS-type.png)
- Enter details such as **Organization name**, **Repository name**, **Branch/Tag**, and **Branch/Tag** name in their respective fields. Once done, click **Proceed**.![Select_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt881f4c136879824a/63db55bc9c202c10ccaf622f/Select-Fields.png)
- Click **Test Action**.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32cfef9f9cbdb0d1/63db55bc771d7f10c63c3205/Test-Action.png)
- You should see the output as follows. If all looks good, click **Save and Exit** to finish the process.![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt86817aa04518c9c2/63db55bde480c910d1acbd56/Save-Exit.png)

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