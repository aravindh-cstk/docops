---
title: "Auto Publish to Staging on Workflow Approval"
description: "This guide outlines the process of auto-publishing to the staging environment for the final validation."
url: /headless-cms/auto-publish-to-staging-on-workflow-approval
uid: blt3195b31834fe5d18
---

# Auto Publish to Staging on Workflow Approval

## Auto Publish to Staging on Workflow Approval

The proposed solution will leverage a _**Workflow**_ trigger that will execute on a transition step from _**READY FOR PREVIEW → APPROVED FOR STAGING**_:

The automation will be tied to a given stack and to a given workflow progress, which means that if you need the same behavior in other stacks or for other workflows you will need to reuse the configuration described in the following sections in this document.

## Diagram Walkthrough

![image02.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6102251eb4b9e654/65f99c6639973e32fb6e9748/image02.png)

**Note:** the optional step described in the diagram is out of the scope of this recipe, but it’s here to illustrate the potential evolution of this automation. Alternatively, you could notify via slack, sms, etc…

## Automate Configuration

Prerequisites

TO-DO: ADD CONTENTSTACK ACCOUNT FOR CONTENTSTACK ACTIONS

The following sections describe how to configure Automate to accomplish the goals described above. You can read more about [Automate](https://www.contentstack.com/docs/agent-os/what-is-contentstack-agent-os) in our documentation.

1\. Connector & Trigger

<table style="text-align: left;"><tbody style="text-align: left;"><tr><td><strong>Connector Type</strong></td><td colspan="4"><em>Contentstack</em></td></tr><tr><td><strong>Trigger</strong></td><td colspan="4"><em>Workflow Trigger</em></td></tr><tr><td colspan="5"><strong>Configuration</strong></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select an Account</strong></p></td><td colspan="2"><em>Select your Contentstack account you configured</em></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select and Event</strong></p></td><td colspan="2"><em>Workflow Stage Changed</em></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select Stack</strong></p></td><td colspan="2"><em>Select the stack you want the automation to run in. It should be the same stack where the workflow is available.</em></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select Branch</strong></p></td><td colspan="2"><em>Select the branch you want the automation to run in.</em></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select Content Type</strong></p></td><td colspan="2"><em>Select the content type the workflow is associated with.</em></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select Workflow</strong></p></td><td colspan="2"><em>Select the workflow that has the stages described above (or at least the stage where you want the automation to trigger the publishing action)</em></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select Workflow Stage</strong></p></td><td colspan="2"><em>Select the workflow stage where you want the publishing action to take place.</em></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Show optional fields</strong></p></td><td colspan="2"><em>Toggled</em></td></tr></tbody></table>

**EXAMPLE CONFIGURATION**

![image03.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt263ad8d1119c02c9/65f99c668330b378eb02fae1/image03.png)

Once you have the trigger configured, click _**Proceed →**_.

Next, you can test your trigger by clicking **Test Trigger**.

You might see something like this:

![image13.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd0d006a4aa7f1a1c/65f99c8aa7eab402ac9171e7/image13.png)

To solve the problem, follow these steps: First, check if the trigger works correctly. Then, make sure you perform the workflow transition. To do this, create a basic content entry and move it to the "APPROVED FOR STAGING" stage

![image11.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte316d718cb54badf/65f99c8ae55fcb2217236144/image11.png)

Once you do that, you should see something like this upon testing again:

![image06.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfddcd9ec84aa8e44/65f99c8a54369ad9d0695906/image06.png)

Next, click **Save and Exit**.

Next, you can skip the _**Apply Trigger Conditions**_ section, as no trigger conditions are necessary for this automation. Simply click **Save and Exit** again.

2\. Configure Action Step

<table style="text-align: left;"><tbody style="text-align: left;"><tr><td><strong>Step Type</strong></td><td colspan="4"><em>Action Step</em></td></tr><tr><td><strong>Connector</strong></td><td colspan="4"><em>Contentstack</em></td></tr><tr><td><strong>Action</strong></td><td colspan="4"><em>Publish Entry</em></td></tr><tr><td colspan="5"><strong>Configuration</strong></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select an Account</strong></p></td><td colspan="2"><em>Select the stack you want the automation to run in. It should be the same stack where the workflow is available.</em></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select Stack</strong></p></td><td colspan="2"><em>Select the branch you want the automation to run in.</em></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select Content Type</strong></p></td><td colspan="2"><p><em>Select the content type from the trigger payload:</em><em><br italic="[object Object]"></em><em><strong>1.body.data.workflow.content_type.uid</strong></em><em><strong><br italic="[object Object]" bold="[object Object]"></strong></em></p><img asset_uid="blt08edab6893c4ce7b" src="https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt08edab6893c4ce7b/65f99c8b9b2cdac05393f161/image12.png" alt="image12.png" height="auto"></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select Entry</strong></p></td><td colspan="2"><em>Select the entry from the trigger payload:</em><em><br italic="[object Object]"></em><em><strong>1.body.data.workflow.entry.uid</strong></em><p><em><strong></strong></em></p><img asset_uid="blt08edab6893c4ce7b" src="https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt08edab6893c4ce7b/65f99c8b9b2cdac05393f161/image12.png" alt="image12.png" height="auto"></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Select Environment</strong></p></td><td colspan="2"><em>Select your “Staging” environment</em></td></tr><tr style="text-align: left;"><td colspan="3" style="text-align: left;"><p style="text-align: left;"><strong>Show Optional fields</strong></p></td><td colspan="2"><em>Untoggled</em></td></tr><tr><td colspan="5"><strong>EXAMPLE CONFIGURATION</strong></td></tr><tr><td colspan="5"><p></p><p></p><img asset_uid="bltbf1037bb8cb6a7cd" src="https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbf1037bb8cb6a7cd/65f99cbaf2a29205e9bf5f0f/image16.png" alt="image16.png" height="auto"></td></tr></tbody></table>

Once you have the action configured, click _**Proceed →**_.

You should see something like this:

![image04.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadf0324de54f6065/65f99c66d4e0c0d3cf2935a4/image04.png)

Next, click **Save and Exit**.

At this point, your automation is ready to be tested. But first, you need to Activate the automation. You can do so by toggling the button on the top right corner of your screen:

![image14.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7c22391685f1b693/65f99cbae55fcb25ad236149/image14.png)

Once your automation is active, you can test it by transitioning an entry to the ‘APPROVED FOR STAGING’ stage. Once you do that you should be able to see the entry being published to staging, and also you can review the automation log.

![image05.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde76df6a829428bf/65f99c8af50f9a07007c1c98/image05.png)

![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51f286d8497d5ba3/65f99c67edb2c7ff6237277f/image4.png)

To check the automation execution log, go back to Automate, choose your project, and then choose the Audit Log option in the left panel, you should see a log for your automation that just triggered:

![image6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87e45aac6531fc0f/65f99c8aa93acb51ea312dc6/image6.png)

**Additional Best Practices:**

As a best practice, it is recommended to name your trigger an action with a descriptive name, so developers or Automate managers can get an understanding of the automation at a glance, for example:

**Workflow Trigger** rename:

![image15.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec73ca68404fcbf0/65f99cbaa7eab432449171eb/image15.png)

**Publish Entry** rename:

![image8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt08915eb203f1a4af/65f99c8a6405522a087b139e/image8.png)

**Note:** keep in mind that to make modifications to your actions and trigger names you will need to first deactivate the automation.
