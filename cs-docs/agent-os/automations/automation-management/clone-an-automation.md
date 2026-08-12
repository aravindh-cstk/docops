---
title: "Clone an Automation"
description: "Clone an Automation"
url: /agent-os/clone-an-automation
---

# Clone an Automation

## Clone an Automation

You can duplicate an automation from the automations listing page. A copy of the existing automation and all the current configurations is created, i.e., trigger(s) and action(s). Since the original and the cloned automation are in the same project, they can share important attributes, such as invited users and connected apps.

Creating a duplicate version of an automation can be useful for a number of reasons:

-   You can create a backup of a working automation in case you need to revert to a previous version.
-   You can duplicate a live automation to make changes and test them in duplicate. Once the updates are tested, you can replace the original with the updated version. This way, you do not have to change a live automation.
-   Suppose you need to create an automation similar to another one. In that case, you can create a clone of the similar automation and have a nice starting point from which to begin building your steps.

To clone an automation, perform the steps given below:

1.  On the **Automations** listing page, click the **clone** icon.  
    ![Clone_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt929a4072f9f79cad/699bcdb58923a00008498a84/Clone_Icon.png)
2.  On the **Clone Automation** modal, provide the **Automation Name** and **Select Project** from the dropdown to clone the automation to the selected project.
3.  Once you have updated the details, click **Clone**.  
    ![Clone_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt689742509b94d67a/699bcdb5676f8800085c09f8/Clone_Button.png)
4.  You can see the clone created for the automation in the selected project.![Cloned_Automation_on_listing_page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b241d4839e2faa5/699bcdb5e8917700087c2736/Cloned_Automation_on_listing_page.png)
5.  Alternatively, go to the automation **Settings** page and click **Clone Automation** to duplicate the automation.  
    ![Clone_settings_page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt726350aa42f65ce6/699bcdb58923a00008498a88/Clone_settings_page.png)

**Note:** You can now throttle the execution for your automations to avoid rate limit. For more information, refer to the [Throttle Execution](/docs/agent-os/throttle-execution) document.

If the automation is cloned in the same project, some steps may appear as tested and untested. If any action has a dependency on the previous step and that step remains untested, then all the subsequent steps become untested.

You can find the dependency by checking the automation step number in the active action step. If the current step fetches value from the untested step, it becomes dependent on the previous step to testify as tested.

**Note:** If a user clones an automation to a different project, all the automation steps become untested and the user needs to configure connected apps to activate the automation.

### What if you have Project Variables defined in your project?

If you have defined project variables in your project and used them in your automation, then you can copy the project variables to the destination project for the cloned automation to work properly.

1.  In the Clone Automation modal, provide the **Automation Name** and **Select Project** from the dropdown to clone the automation to the selected project.
2.  Click **Next Step** to view and copy the project variables in the destination project.  
    ![Next_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2114e0da803f135a/656dbe1907f01a7544bf0451/Next_Step.png)
    
    **Note:** Project Variables are defined at project level.
    
3.  Enable the toggle to copy the variables.
4.  Click **Clone** to clone the automation.  
    ![Clone_Button_New.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt45a84e1b1ab1b92a/656dbe190e4fd115ee57fc4a/Clone_Button_New.png)
5.  You will see the cloned automation along with the project variables in the destination project.  
    ![Cloned_Automation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt186c29da47bc5537/656dbe360e4fd163d957fc4e/Cloned_Automation.png)
