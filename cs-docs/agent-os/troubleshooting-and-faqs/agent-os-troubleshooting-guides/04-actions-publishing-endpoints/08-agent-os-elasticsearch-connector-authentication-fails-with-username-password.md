---
title: "Agent OS Elasticsearch Connector Authentication Fails with Username/Password"
description: "Agent OS Elasticsearch Connector Authentication Fails with Username/Password"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/08-agent-os-elasticsearch-connector-authentication-fails-with-username-password
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: cs129807784c8777ec
---

# Agent OS Elasticsearch Connector Authentication Fails with Username/Password

Setting up an Agent OS job to connect to an Elasticsearch connector fails because the Username and Password fields do not accept the credentials being entered, and it is unclear whether API-key-based authentication is supported instead.

**Root Cause**

The connector requires the **Node URL**, **Username**, and **Password** from the specific Elasticsearch deployment’s connection details, credentials that are automatically generated at the time the deployment was created, rather than a separately created API key.

**Resolution**

1.  Go to your Elasticsearch deployment page and locate the **Node URL** for the deployment.
2.  Retrieve the **Username** and **Password** that were automatically generated when the deployment was created (these are deployment-specific, not a separate API key).
3.  Enter the **Node URL**, **Username**, and **Password** exactly as shown on the deployment page into the Agent OS Elasticsearch connector fields.
4.  Refer to the Elasticsearch connector documentation specifically the credentials step, if you are unsure which deployment page fields to use.
5.  Retest the connection after entering the deployment-specific credentials.

The Elasticsearch connector authenticates successfully using the deployment’s **Node URL**, **Username**, and **Password**.
