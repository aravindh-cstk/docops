---
title: "How Conditional Paths Work"
description: "Learn how to use Conditional Path in automations to create if-else logic and customize workflows with precise conditions."
url: /agent-os/how-conditional-paths-work
uid: blt710c1203ed733a5f
---

# How Conditional Paths Work

## How Conditional Paths Work?

Conditional Path is a part of setting up the automations by providing logical expressions that resolve to either true or false. Based on this, different actions can be executed for different paths. It adds flexibility and adaptability in automation.

Here are the steps to configure Conditional Path in your automation.

1.  Configure Trigger
2.  Configure Action Step
    -   Select Conditional Path
        -   If - Add Step
        -   Else - Add Step

1.  ## Configure Trigger

    Triggers are invocation events that happen whenever an event is triggered. Agent OS provides different triggers to invoke an event based on certain conditions.

    ![Configure_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5d36114e072ec0b5/65aa9c221307905a5bcc060f/Configure_Trigger.png)

    For example, Contentstack Trigger provides different events to configure the trigger connector, such as executing an action when an entry is created in Contentstack.  

    **Note:** If the trigger conditions do not satisfy the conditions, then the automation will not be executed. To go ahead in the conditional path block, the configuration in the Trigger Conditions (if provided) must match.

2.  ## Configure Action Step

    Configure Action Step executes when the trigger event is fired. For example, when an entry is created/updated/deleted in Contentstack, a slack message is sent to the channel to notify the team members of the ongoing updates.  

    ![Configure_Action_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1942823ef907a2a1/65aa9c22b56104a8b18c3501/Configure_Action_Step.png)

    Contentstack provides a variety of connectors or third-party applications that can be used based on the requirements. This allows you to connect your Contentstack application to a third-party application by simply authenticating your account.

    **Note:** Pause and Response action connectors cannot be used inside Conditional Path.

    ![Next_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b7a63f6d15cad77/65aa9c22dbd0c3062dad39ca/Next_Step.png)

    In the Conditional Path configuration, provide the conditions you want to set up in the input box.

    Suppose you want to execute the If block only when an entry is created in a specific content type. You can provide the content type UID and match it with the content type.

    ![Conditional_Path_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt95aef82b5bb2a792/65aa9c2202a665ef4f92d14c/Conditional_Path_Configuration.png)
3.  ## 2-1 If (Configure Action Step)

    In the Configure Action Step section, provide the action you want to perform if the conditions provided in the Conditional Path configuration resolves to true, then the If block will get executed.

    ![If-else-step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5a907d6a8ae6e3e0/699be242e8917700087c2765/If-else-step.png)

    You can check the success message for the execution of the automation in the Execution Log section.

    ![Execution_log.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb29b763a67bc5ee2/699be2428d3a6a0008c5b236/Execution_log.png)

    Similarly, you can add multiple steps in the If statement for execution. See the screenshot below.

    ![Add_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt36137dc17bc736d5/699be24199cddc000822b93c/Add_Step.png)
4.  ## 2-2 Else (Configure Action)

    The basic formula of the Conditional Path is to execute a specific action. Check for the configuration; if the conditions match, execute IF; otherwise, execute ELSE block.

    So, if the condition resolves to false, then execute the Else block. You can set up any action connector in the Else block.  

    ![eLSE_STEP.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c70bf8da597d6cc/699be2410f938800084d0731/eLSE_STEP.png)

    Once the Else block is executed, you can check the success message for the execution in the Execution Log section. In detail , you can see the name of the steps that are executed and number of steps configured (2-3 and 3-2)  

    ![Else_second_step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1bfc8de50823df49/699be242ead2f50008c964eb/Else_second_step.png)

    **Note:** The naming for steps 2-1, 2-3, 4-3 depends on the number of actions configured in the conditional path.
