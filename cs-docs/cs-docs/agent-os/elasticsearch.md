---
title: "[Automations guides and connectors] - Elasticsearch"
description: Elasticsearch connector setup steps for Automation Hub action connectors.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/elasticsearch
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
- Within the **Configure Action Step**, click the** Elasticsearch **connector.
- Under **Choose an Action** tab, select the **Index an Entry** action.
- Click the **+ Add New Account **button to set up your Elasticsearch account (see screenshot in next step).
- In the **Authorize **modal, enter the **Node URL**,** Username**, and **Password**.

To generate Node URL, Username, and Password, log in to the Elasticsearch dashboard and perform the following steps:

Navigate to your deployment page.
- Under **Applications**, copy the endpoint for the Elasticsearch section. The copied endpoint is the **Node URL**..
- You will get a **Username** and **Password** once you create a deployment.

Then, click **Authorize**.
- On the **Configure Action** page, enter an **Index name** in which you want to store the data and provide the details in the **Body **field in JSON format.
- Click **Proceed**.
- You will see the input values which you have configured in the **Configure Action** modal.
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.
- Navigate to the Elasticsearch dashboard. You will see the output if you search the index name in the API console section.

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