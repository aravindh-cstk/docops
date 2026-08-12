---
title: "Export and Import an Automation"
description: "Streamline deployment with Import and Export to migrate automation workflows as JSON files, ensuring consistent configurations across projects and environments."
url: /agent-os/export-and-import-an-automation
---

# Export and Import an Automation

## Export and Import an Automation

To streamline deployment and maintain consistency across projects, the Import and Export feature enables seamless migration and configuration management of automation workflows across different projects and organizations. For example, this feature can be used to migrate automations within the same environment for testing or to ensure consistent configurations across multiple projects within that environment. You can export and back up complete automation configurations as JSON files, including details such as trigger definitions, conditions, action sequences, and associated data.

Let’s see the steps to Export and Import an automation.

### Export an Automation

To export an automation, perform the steps given below:

1.  On the Automations listing page, in the **Actions** column, click the vertical three dots.
2.  Select the **Export** **Automation** option. A JSON file is downloaded in your local system.![Export_automation_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad3a740af575820b/699bd52a48bd410008f09bd0/Export_automation_Icon.png)
    
    You can also export the automation by navigating to the **Settings** page inside your automation and then clicking the **Export Automation** button as shown below:
    
    ![Export_Automation_From_Settings_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf6989fd48cba8f8a/6797993117131c48b0b1fec9/Export_Automation_From_Settings_Page.png)

### Import an Automation

To import an automation, perform the steps given below:

1.  On the Automations listing page, click the **+ New Automation** button. From the dropdown, select the **Import** option.![Import_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt62e5e87ec7c02943/699bd52ae8917700087c275a/Import_Icon.png)
2.  In the **Import** **Automation** modal, choose the automation’s JSON file you want to import.
3.  Click the **Import** **Automation** button.![Import_Automation_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9833f6193a151ea9/67979931e76cc64d14eed193/Import_Automation_Button.png)
    
    **Note**:
    
    -   You can import automation only into the Projects and Organizations you have access to. Importing into different environments is not supported.
    -   The JSON file must include all the required fields present in the automation. Missing fields or data types will trigger an error message, preventing the automation from being imported.
