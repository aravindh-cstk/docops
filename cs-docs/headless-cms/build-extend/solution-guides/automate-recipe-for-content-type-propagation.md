---
title: "Automate Recipe for Content Type Propagation"
description: "This solution guide aids customers in replicating content types across different stacks for consistent results."
url: /headless-cms/automate-recipe-for-content-type-propagation
uid: bltdad95215438eefa7
---

# Automate Recipe for Content Type Propagation

## Automate Recipe for Content Type Propagation

The following example demonstrates an automation flow that propagates content type changes from a source stack to a destination stack.

**Note:** If a field is deleted in the source stack, the corresponding field and its associated data will also be removed from the destination stack.

This flow uses a series of triggers and actions to detect content type changes and push them to the destination stack. It also verifies whether the content type exists before propagating any updates.

## Tactical Rundown

1.  ### Create Trigger

    Create a new automation and select the **Contentstack** connector as the trigger. If you have not previously added an account, you can configure it by clicking **Add New Account**.  
    Optionally, you can select the stack you want to replicate from and specify the content type for the trigger. If you leave the content type blank, then changes to all content types will trigger this automation.

    **Note:** There is an option to trigger this flow on ‘All’ events, as indicated in the screenshot below.

    ![Trigger Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltccc2f7f4b285d6c4/65f9721af2a2925856bf5dbb/image8.png)

    At this point, in a separate tab, return to the Content Type editor and click **Save**. After that, return to the Automate tab and click **Test Action**. This will pick up the content type update that was just performed as the payload information.

2.  ### Check for Content Type Existence

    Before any updates are applied to the destination stack, it is necessary to verify whether the content type exists or not in the destination stack. In this step, we issue an HTTP Request action to query the destination stack.

    ![HTTP Request Check](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd536cd2e016ff801/65f9721aa93acb1932312c56/image5.png)

    Ensure that the appropriate headers for the HTTP action are included, such as the api\_key, authorization, content-type, and optionally, the include\_branch. For security purposes, the credential information can be stored as [Project Variables](https://www.contentstack.com/docs/agent-os/variables) and referenced in the header value selection.

    Ensure that the action is tested to capture the response payload. In this case, we expect two HTTP response codes. A 200 code indicates the content type already exists in the destination stack. A 422 code indicates if the content type cannot be found.

3.  ### Conditional Fork

    Based on the response from the previous step, the flow can conditionally proceed to either apply the updates to the destination stack or attempt to create the content type in the destination stack.

    ![Conditional Fork Diagram](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8e50c77b51a97c40/65f9721afc863176f2d71ed9/image7.png)
    1.  **Conditional Fork: Create Copy Action (HTTP 200 OK)**

        The second step is to utilize the HTTP Request action and leverage the CMA to perform a PUT operation on the destination stack and content type. Enter the CMA API in the URL field, and update the Body segment as needed. Ensure correct header information is provided for the destination stack, including the management token in the Authorization header.

        ![HTTP PUT Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e212981a990da55/65f9721aedb2c71f483725c0/image1.png)

        Perform a test of this action by clicking **Test Action**. If successful, a panel displaying the update results will be rendered.

        ![Test Action Results](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4a5c5fc4d8a69748/65f9721aa1e815aeecd5c6cc/image2.png)

        Click **Save and Exit**.

    2.  **Conditional Fork: Create Content Type Action (HTTP 422 OK)**

        If the content type does not exist in the destination stack, the flow will issue another HTTP Request action and call the CMA API to create the content type. To test this successfully, delete the content type in the destination stack and click **Test Action**.

        ![Create Content Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb65f7297e3623d6/65f9721bba94f03d7c7cfc60/image6.png)

        Click **Save and Exit**.

4.  ### Activate Automation

    Toggle the switch to activate the automation.
