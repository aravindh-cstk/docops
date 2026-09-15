---
title: "How Repeat Paths Work?"
description: "Discover how Repeat Path in Agent OS helps you loop through data to automate repetitive tasks and streamline bulk operations efficiently."
url: /agent-os/how-repeat-paths-work
uid: blt90e7f55613bd8a54
---

# How Repeat Paths Work?

## How Repeat Paths Work?

Repeat Path is used in automations to perform actions on bulk data. It allows you to repeat steps based on a data source or a specified count, adding efficiency, consistency, and scalability.

Here are the steps to configure a Repeat Path in your automation.

1.  Configure Trigger
2.  Configure Action Step
    -   Select Repeat Path
        -   Data source
        -   Number of times

1.  ## Configure Trigger

    Triggers are invocation events that happen whenever an event is triggered. Agent OS provides different triggers to invoke an event based on certain conditions.

    ![Configure_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbe2b30e26284f928/699bfe01da5d88000881ef57/Configure_Trigger.png)

    For example, HTTP Trigger provides a webhook URL to perform HTTP requests. So, when a user makes an HTTP request to the configured webhook URL, the associated action is performed. You can send bulk data to the HTTP webhook URL.

    ![HTTP_trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e51ccbcb28e65de/699bfe0068c24300082b2b20/HTTP_trigger.png)
2.  ## Configure Action Step (Repeat Path)

    Configure Action Step executes when the trigger event is fired. For example, when an entry is created/updated/deleted in Contentstack, a Slack message is sent to the channel to notify the team members of the ongoing updates.

    ![Configure_action_step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7f548e7d2224dec8/699bfe0036d8d5000862d6f5/Configure_action_step.png)

    Contentstack provides a variety of connectors or third-party applications that can be used based on your requirements. This allows you to connect your Contentstack application to a third-party application by simply authenticating your account.

    ![Action_Steps.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte555738275bdb0d4/699bfe008b33e4000870c6fb/Action_Steps.png)

    Select the Repeat Type for your action step in the Repeat Path configuration. If you want to create multiple entries from an array of data in Contentstack, select the Data source or the Number of times as a count to iterate the loop.

    1.  **Data source:** In the Data source field, select the source in which you are sending bulk data so that the Repeat Path can iterate the action step inside it, till the length of the array.  

        Suppose you are fetching your data in the HTTP trigger; you can select output from the previous automation step in this field.  
        ![Data_source.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt894b69acee54f45d/699bfe018923a00008498af5/Data_source.png)
    2.  **Number of times:** In the Number of times field, you must enter the count/number to iterate the Repeat Path.  
        ![Number_repeat.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt66a703b5bdb9a53f/699bfe01676f8800085c0a66/Number_repeat.png)

        **Note:** In the Number of times field, you can also select the output from a previous automation step.


    ### Some points to remember:

    1.  The default limit for executing Repeat Path is 100. Although, it can be increased by customizing your plan key. Please contact the [support team](mailto:support@contentstack.com) to customize your plan.
    2.  Based on the plan limit, if the repeat count exceeds, the automation fails. You can view the details in the [Execution Log](/docs/agent-os/view-execution-log-of-agent-os/) section.
3.  ## 2-1 Configure Action Step

    In the Repeat Path Step section, provide the action which will iterate based on the Repeat Path configuration.

    ![Add_Step_Repeat_Path.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt73726d4b853eab74/699bfe007603c100089f21a8/Add_Step_Repeat_Path.png)

    You can see the status of the Repeat Path in the [Execution Log](/docs/agent-os/view-execution-log-of-agent-os/) section.

    Similarly, you can add multiple steps in the Repeat Path as seen in the screenshot below:

    ![Add_multiple_Steps.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt11aefd1690c6fd66/699bfe0063bcae0008910a13/Add_multiple_Steps.png)

    **Note:** Currently, when previewing a JSON payload object within Automate, only the first **3** nodes of an array (such as those used in loops) are displayed in the _Design_ mode. This limitation is intended to optimize performance and ensure efficient data rendering in the browser.
