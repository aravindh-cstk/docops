---
title: [Automations guides and connectors] - Monitor Agent OS Activities in Audit Log
description: Monitor Agents, Automations, Connected Apps, etc., activities using the Audit Log to track edits, updates, and events across your Agent OS project.
url: https://www.contentstack.com/docs/developers/automation-hub-guides/monitor-automation-hub-activities-in-audit-log
product: Automations
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2026-02-20
filename: monitor-agent-os-activities-in-audit-log.md
---

# [Automations guides and connectors] - Monitor Agent OS Activities in Audit Log

This page explains [Automations guides and connectors] - Monitor Agent OS Activities in Audit Log for Automations. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Monitor Agent OS Activities in Audit Log

The **Audit Log** section helps you monitor the activities performed in a particular [project](../developers/automation-hub-guides/create-a-project.md).

To access the Audit Log, follow the below steps:

1. Log in to your [Contentstack account](https://www.contentstack.com/login).
2. After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.![App_switcher_icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6290d7afc992eda9/6998761148bd410008f0963f/App_switcher_icon.png)
3. Go to your project or [create](./managing-projects.md#create-a-project) a new one.
4. From the top navigation panel, click **Settings**. Click the **Audit Log** tab to see all the details of the project.![Audit_log_tab](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt45be97e35fc777d6/6998741b36d8d5000862d105/Audit_log_tab.png)

The following details are displayed under Audit Log when an event occurs:

* **Date:** Specifies the date when the event occurred. Additionally, it displays the user's name.
* **Module:** Specifies the components of Agent OS such as Agents, Projects, Automations, Connected Apps, and Project Variables on which the event was performed.
* **Action:** Specifies the type of action, such as create, update, delete, enable, and disable, etc.
* **Title:** Specifies the title of a particular module such as Automations, Connected Apps etc.

You can filter the audit log by date to view only specific logs.

![Audit_log_filter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt74e1a2824294cc7f/6998741bb13d650008b4fc1a/Audit_log_filter.png)

### Types of Audit Log Events

Audit Log tracks and displays actions or events performed in a particular project. For your reference, we have provided a comprehensive list of all the events.

The following table displays the various events visible in Audit Log:

| **Modules** | **Events** |
| --- | --- |
| Project | Project is edited  Project is created |
| Agents | Created  Deleted  Enabled  Disabled |
| Automation | Created  Enabled  Disabled  Deleted  Updated  Import  Export |
| Connected Apps | App is connected  The App is edited/re-authorized  The App is deleted |
| Project Variables | Delete  Update |

## Common questions
### What is covered in [Automations guides and connectors] - Monitor Agent OS Activities in Audit Log?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Automations guides and connectors] - Monitor Agent OS Activities in Audit Log?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
