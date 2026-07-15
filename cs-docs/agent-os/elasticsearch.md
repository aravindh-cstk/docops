---
title: "[Automations guides and connectors] - Elasticsearch"
description: Elasticsearch connector setup steps for Automation Hub action connectors.
url: https://www.contentstack.com/docs/agent-os/elasticsearch
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Elasticsearch

This page explains what the Elasticsearch connector is and how to set it up in Automation Hub. It is intended for developers configuring third-party services via Action Steps, and should be used when you need to index data into an Elasticsearch deployment from an automation.

## Elasticsearch

Elasticsearch is an open-source search-based platform for storing and retrieving valuable data. In order to store and search the data, you will need to create a deployment in Elasticsearch.

## Set up Elasticsearch

Perform the following steps to set up the Elasticsearch action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the** Elasticsearch **connector.![Elasticsearch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43f17505e3a72d3f/6527f8c87986d4db4d8f396d/Elasticsearch.png)
- Under **Choose an Action** tab, select the **Index an Entry** action.![Elasticsearch-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta54c6fe9221540b0/63dc0cc73aa4a610530ba044/Elasticsearch-Action.png)
- Click the **+ Add New Account **button to set up your Elasticsearch account (see screenshot in next step).![Elasticsearch-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta68440647a557822/63dc0cc7f613db4bc7cb8be6/Elasticsearch-Add-New-Account.png)
- In the **Authorize **modal, enter the **Node URL**,** Username**, and **Password**.

To generate Node URL, Username, and Password, log in to the Elasticsearch dashboard and perform the following steps:

Navigate to your deployment page.
- Under **Applications**, copy the endpoint for the Elasticsearch section. The copied endpoint is the **Node URL**..
- You will get a **Username** and **Password** once you create a deployment.

Then, click **Authorize**.
- On the **Configure Action** page, enter an **Index name** in which you want to store the data and provide the details in the **Body **field in JSON format.![Elasticsearch-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b90d996c981caab/63dc0cc7cdef8636cd80b9dc/Elasticsearch-Configure-Action.png)
- Click **Proceed**.
- You will see the input values which you have configured in the **Configure Action** modal.![Elasticsearch-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbab3f3a17bada606/63dc0cc7409fb73889c0e22b/Elasticsearch-Input.png)
- Check if the details are correct. If yes, click **Test Action**.![Elasticsearch-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc8ccde1bccbbbfc/63dc0cc78c69354d3e055194/Elasticsearch-Test-Action.png)
- Once set, click **Save and Exit**.![Elasticsearch-Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaaa5e818aadbd926/63dc0cc7cdbe917d7abd8f3b/Elasticsearch-Output.png)
- Navigate to the Elasticsearch dashboard. You will see the output if you search the index name in the API console section.![Elastic-Output.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7d5bedf27f4334bb/6305f68c27ca1b5cd53ec07b/Elastic-Output.png)

This sets up the **Elasticsearch** action connector.

## Common questions

### What action should I select to store data in Elasticsearch?
Under **Choose an Action** tab, select the **Index an Entry** action.

### Where do I find the Node URL for Elasticsearch?
Navigate to your deployment page, and under **Applications**, copy the endpoint for the Elasticsearch section. The copied endpoint is the **Node URL**..

### What format should I use for the Body field?
Provide the details in the **Body **field in JSON format.

### How do I verify the connector output?
Navigate to the Elasticsearch dashboard. You will see the output if you search the index name in the API console section.