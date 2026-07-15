---
title: "[Automations guides and connectors] - Automation Sharing"
description: Documentation for sharing automation workflows across organizations using a sharable recipe link, including handling project variables and pre-installation information.
url: https://www.contentstack.com/docs/agent-os/automation-sharing
product: Contentstack
doc_type: guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Automation Sharing

This page explains how to share automation workflows across different organizations in Contentstack using a recipe link, including how to import shared automations and manage project variables. It is intended for users who build or administer automations and need to replicate or collaborate on workflows across organizations.

## Automation Sharing

Automation Sharing enables you to seamlessly share automation workflows across different organizations. By generating a sharable recipe link, you can easily create a copy of your automation in another organization, without affecting the original version.

This streamlines collaboration and allows you to replicate successful automations efficiently, saving time and effort.

To share an automation, [log in](https://www.contentstack.com/login) to your Contentstack account and perform the steps given below:

**Access the Automations Listing:**
- Navigate to your project and in the top navigation panel, click **Automations**.
- On the automations listing page, go to the automation you want to share, and then click the vertical ellipses under the **Actions** column.
- Select the **Get Recipe Link** option. A pop-up modal named **Create a Recipe Link for the Automation **appears.![Get_Recipe_Link_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31e8a035c99eb6a2/699bcd8b3f35720008e049c5/Get_Recipe_Link_Icon.png)

**Create a Recipe Link:**
- In the **Create a Recipe Link for the Automation **modal, check the box to save and copy the automation recipe link.
- Once done, click **Save and Copy Link**.![Enable_Sharing.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt01f98b3d1ee2b809/67c6b89e4f90665ab58f965c/Enable_Sharing.png)

**Import the Automation:**
- Move to your target organization and paste the copied link into your browser's address bar.
- On the **Import Automation **screen, select a project from the Project Name drop-down where you want to import the automation.
- If needed, create a new project by clicking **+ New Project**.![+New Project.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte634943b7dd9b72d/66cf2e32b838be9743e0194e/_New_Project.png)

**Complete the Import:**
- After selecting the project, click the **Confirm and Import **button.![Confirm_Import_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltccb0e237a3881151/66cf2ece1d50fbd1467aa7ec/Confirm_Import_Button.png)
- You will be redirected to the cloned automation. From here, you can activate and start using the automation.

## Handling Project Variables

If your automation includes Project Variables, you can choose how to handle them during the sharing process. You have two options when creating the recipe link:
- **With Values: **Share non-sensitive data along with the recipe. This is useful if the values are safe to be shared across organizations.
- **Without Values:** Omit values to avoid sharing sensitive information. This is recommended for secure data handling.![Enable_Sharing_Project_Variables.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt98d324159338c438/67c6b89e53fc5ebad5b1bfa2/Enable_Sharing_Project_Variables.png)

### With Values Option:

**Import with Values:**
- Paste the recipe link in the target organization’s browser.
- On the **Import Automation **screen, select the project and click the **Next Step** button.

**Copy Project Variables:**
- On the **Project Variables **screen, a list of variables will appear with both Keys and Values.
- Check the **Mark to Copy **box to include these values in the imported automation.

  **Note: **You can change the variable Value during the automation import process. The recipe and Project Variables tab update to reflect the project variable changes.![Automation Sharing.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt40dbfefcda1e26c9/67b845b53cf087164385ee9a/Automation_Sharing.png)

**Finalize the Import:**
- Click **Confirm and Import** to complete the process. The cloned automation will include the selected project variables.

### Without Values Option:

**Import without Values:**
- Paste the recipe link in the target organization’s browser.
- On the **Import Automation **screen, select the project and click the **Next Step** button.

**Copy Keys Only:**
- On the **Project Variables **screen, only the Keys will be listed.
- Check the **Mark to Copy** box to include just the keys in the automation.![Copy_Key.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9c3fb569f17e34cd/67b845b6725905278db79033/Copy_Key.png)

**Finalize the Import:**
- Click **Confirm and Import**. The cloned automation will include the project variables without their values.![Imported_Recipe.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte18c3c0786b3e082/67bc06622cce5be55d8f77ac/Imported_Recipe.png)

## Managing Project Variables Post-Import

To review and update the Project Variables after import:

**Navigate to Project Variables:**
- In the top navigation panel, click Settings. Then, in the left navigation panel, click Variables.
- In the **Actions **column, click the three dots next to a variable, then select **Edit**.![Edit_Variable.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd91f844ba648a565/66cf037f060745478e37c924/Edit_Variable.png)
- Enter the appropriate values and click **Update**.
- After updating the variables, revisit your automation to ensure it is correctly configured with the new values.![Update_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt92fa4f8bb79fe064/66cf038762373b1ae87241df/Update_Button.png)

## Pre-installation Information for Recipe

When creating an automation, add important context in the Pre-installation Information for Recipe section within the Automation Settings. This helps users importing the automation understand the recipe clearly.

You can include:
- **Estimated Setup Time: **Specify the approximate setup time (in minutes) for the automation to help users plan effectively.
- **Additional Setup Details:** Provide essential information, including trigger configurations, setup tips, or important considerations to simplify the automation process.![Installation_Screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb2b1d2023525c31/6794ee8f7cdcd3663d5c3a19/Installation_Screen.png)

This added context improves the user experience and simplifies the implementation of imported recipes.

## Common questions

### Does sharing an automation affect the original automation?
No. By generating a sharable recipe link, you can create a copy of your automation in another organization, without affecting the original version.

### What is the difference between sharing project variables “With Values” and “Without Values”?
**With Values: **Share non-sensitive data along with the recipe. **Without Values:** Omit values to avoid sharing sensitive information.

### Can I change project variable values during import?
Yes. **Note: **You can change the variable Value during the automation import process. The recipe and Project Variables tab update to reflect the project variable changes.

### Where do I update project variables after importing an automation?
In the top navigation panel, click Settings. Then, in the left navigation panel, click Variables, and use **Edit** in the **Actions **column to update values.