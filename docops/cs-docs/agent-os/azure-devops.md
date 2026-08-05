---
title: Automations guides and connectors - Azure DevOps
description: Azure DevOps connector setup for automating CI/CD workflow by running a pipeline.
url: https://www.contentstack.com/docs/agent-os/azure-devops
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Azure DevOps

This page explains how to use and set up the Azure DevOps connector to automate CI/CD workflows by running pipelines. It is intended for developers configuring third-party service connectors and should be used when you want to authorize an Azure DevOps account and configure the “Run a Pipeline” action.

## Azure DevOps

The [Azure DevOps](https://azure.microsoft.com/en-in/products/devops/) connector lets you automate your CI/CD workflow by running a pipeline. With this connector, you can automate the execution of the pipeline defined in the Azure DevOps dashboard.

## Set up Azure DevOps

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **Azure DevOps** connector.

**Note: ** You can sort and search the connector(s) based on the filter.

- Under **Choose an Action** tab, select the **Run a Pipeline** action.![Select_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta1dc28ec0ec2d985/65c1cf49c25864de0608aea4/Select_Action.png)
- Click the **+ Add New Account **button to set up your Azure DevOps account.![Add_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8897fab45d2fe1a8/65c1cf49c25864a7d708aea0/Add_Account.png)
- In the **Authorize **modal, enter a **Title**, and an **Access ****Token**.

To find your **Access ****token**, log in to the Azure DevOps dashboard and perform the following steps:

Click **User ****Settings **besides the profile icon.

- Click **Personal ****access ****tokens**.
- Click **+ New Token**.
- In the **Build **scope, click **Run & execute**.
- In the Project & team, click **Read**.
- Click the **Authorize **button.![Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt11d7a2108e6a884e/65c1cf497958f95a77512a68/Authorize.png)
- Enter the **Organization ****Name **and select a **Project ****Name **from the **Lookup **dropdown.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b0a457348dd557c/65c1cf49815b235f10bb36d8/Select_Fields.png)
- Select a **Pipeline ****Name **from the **Lookup **dropdown. Each pipeline is linked with a GitHub repository where a YAML file is added to test the pipeline.
- Enter the **YAML Template Parameters** in **JSON **format you want to add in the YAML file to run the pipeline.![Pipeline_YAML.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba8300e8c4b920c5/65c1cf4949edef5de06a0cf8/Pipeline_YAML.png)
- Optionally, enable the** Show optional fields **toggle button to display the optional fields.
- Enter the **Pipeline ****Version **to select a specific pipeline. With the **Preview ****Run **checkbox, you can run and test the pipeline in any environment except production.
- Enter the **Resource ****Data **to add in the YAML file such as builds, repositories, containers, etc. Click **+ Add Skip Stage** to skip any defined stage in the YAML file.
- In the **Custom ****Variable **field, pass the variables that you want to add in the **Custom ****YAML **file. You can add one or more custom files in the Custom YAML field.![Show_optional_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5514715576b612d7/65c1cf4968e92309a6e56d3c/Show_optional_Field.png)
- Click **Proceed**.
- Click the **Test ****Action **button to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt25befbf25d597866/65c1cf49c25864f60408aea8/Test_Action.png)
- Click **Save ****and ****Exit**.![Save_eXIT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8feda4a487b4a5de/65c1cf49245ed98b8190e4e0/Save_eXIT.png)

This sets the **Azure ****DevOps **action connector.

## Common questions

### What does the Azure DevOps connector do?
The [Azure DevOps](https://azure.microsoft.com/en-in/products/devops/) connector lets you automate your CI/CD workflow by running a pipeline.

### Which action should I choose to run a pipeline?
Under **Choose an Action** tab, select the **Run a Pipeline** action.

### Where do I find the Access token for authorization?
To find your **Access ****token**, log in to the Azure DevOps dashboard and use **User ****Settings **besides the profile icon**, then **Personal ****access ****tokens**, and create a token with the required scopes.

### Can I include parameters and variables when running the pipeline?
Enter the **YAML Template Parameters** in **JSON **format, and in the **Custom ****Variable **field, pass the variables that you want to add in the **Custom ****YAML **file.