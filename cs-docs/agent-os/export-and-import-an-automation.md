---
title: "[Automations guides and connectors] - Export and Import an Automation"
description: Export and import automation workflows as JSON files to migrate configurations across projects and organizations.
url: https://www.contentstack.com/docs/agent-os/export-and-import-an-automation
product: Automation Hub
doc_type: guide
audience:
  - developers
  - administrators
version: v1
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Export and Import an Automation

This page explains how to export an automation as a JSON file and import it into another project or organization. It is intended for users who manage automation workflows and need to migrate, back up, or maintain consistent configurations across projects.

## Export and Import an Automation

To streamline deployment and maintain consistency across projects, the Import and Export feature enables seamless migration and configuration management of automation workflows across different projects and organizations. For example, this feature can be used to migrate automations within the same environment for testing or to ensure consistent configurations across multiple projects within that environment. You can export and back up complete automation configurations as JSON files, including details such as trigger definitions, conditions, action sequences, and associated data.

Let’s see the steps to Export and Import an automation.

## Export an Automation

To export an automation, perform the steps given below:
- On the Automations listing page, in the **Actions** column, click the vertical three dots.
- Select the **Export** **Automation** option. A JSON file is downloaded in your local system.
    ![Export_automation_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad3a740af575820b/699bd52a48bd410008f09bd0/Export_automation_Icon.png)You can also export the automation by navigating to the **Settings** page inside your automation and then clicking the **Export Automation **button as shown below:![Export_Automation_From_Settings_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf6989fd48cba8f8a/6797993117131c48b0b1fec9/Export_Automation_From_Settings_Page.png)

## Import an Automation

To import an automation, perform the steps given below:
- On the Automations listing page, click the** + New Automation** button. From the dropdown, select the **Import** option.![Import_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt62e5e87ec7c02943/699bd52ae8917700087c275a/Import_Icon.png)
- In the **Import** **Automation **modal, choose the automation’s JSON file you want to import.
- Click the **Import** **Automation** button.
    **Note**:
        You can import automation only into the Projects and Organizations you have access to. Importing into different environments is not supported.
- The JSON file must include all the required fields present in the automation. Missing fields or data types will trigger an error message, preventing the automation from being imported.

## Common questions

**Q: What file format is used when exporting an automation?**  
A: A JSON file is downloaded in your local system.

**Q: Can I import an automation into a different environment?**  
A: Importing into different environments is not supported.

**Q: Where else can I export an automation from besides the Automations listing page?**  
A: You can export the automation by navigating to the **Settings** page inside your automation and then clicking the **Export Automation **button.

**Q: What happens if the JSON file is missing required fields or has incorrect data types?**  
A: Missing fields or data types will trigger an error message, preventing the automation from being imported.