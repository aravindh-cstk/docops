---
title: "Executions in Agent OS"
description: "Track and debug execution logs in Agent OS with performance metrics and statuses for better workflow visibility."
url: /agent-os/executions-in-agent-os
uid: blt3264d308714db548
---

# Executions in Agent OS

## Executions in Agent OS

Each time an automation or agent task is completed, regardless of whether it succeeds or fails, it counts as an execution. To run an automation, you must configure the trigger and action connector, then enable the automation. Even if the automation includes multiple steps, it is still counted as a single execution. For agent tasks, each operation initiated by the agent, such as data processing or a service request, also counts as one execution, regardless of the number of internal steps involved.

**Additional Resource:** In the [Execution Log](/docs/agent-os/view-execution-log-of-agent-os) section, you will find details about each execution.

## How are executions calculated?

The following event counts as an execution:

1.  Once the Automation is configured and invoked via an event.

The following events do not count as an execution:

1.  Testing of any individual trigger and action steps.
2.  Successful configuration of the trigger and action steps.
3.  If the trigger conditions are **not** met.

For example, consider automating a Slack message whenever a new entry is created in Contentstack. Each trigger of the automation will be counted as an execution.

The different statuses of an execution visible in the Execution Log are as follows:

1.  **Success:** When an automation or agent task completes successfully.
2.  **Failed:** When any step in an automation or agent task is unsuccessful.
3.  **Pending:** When the execution is yet to be picked up for processing, or when the throttle automation toggle is disabled.
4.  **Running:** When an execution is in progress.
5.  **Rejected:** When the execution exceeds the allocated time.
6.  **Paused:** When an execution is paused and resumed at a later stage.
7.  **Partially Executed**: When an execution is partially completed as it has reached the maximum limit of sending emails.

## Use Cases for Automations

### Retry Execution for Failed Automation

Certain API errors, or missing configuration of an action step in Automate can cause the entire automation to fail. If you encounter this issue, you can use the **Retry Execution** feature to troubleshoot the automation.

With this feature, you can retry the execution up to **2** times using the following steps:

1.  Suppose you have an automation with an unconfigured action step, as shown below:  
    ![Action_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb52be81d17888070/66a2809e5c5264826526ff95/Action_Step.png)
2.  Activate the automation and test the configured trigger. For example, test the **HTTP** trigger.
3.  Go to the **Execution Log** section. The status of the automation will show as **Failed**. An **Info** icon appears beside the **Failed** status. Click it to open a pop-up.  
    ![Failed_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87ffe2f65d662117/66a2809e02bf2773893ba2ef/Failed_Icon.png)
4.  Click the **Retry Execution** button to retry the execution.  
    ![Retry_Execution.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt06f7f50a0c528b01/66a280a60570204bcbcace9f/Retry_Execution.png)

    **Note:** The first attempt occurs when you activate and execute the automation. In the Retry Execution pop-up, you can retry the execution up to **2** more times.

5.  Click the **Code** icon for the failed step to view the **Input**/**Output** payload for the action step. For a trigger, you can specifically view the **Input** option.

    Additionally, you can click the **Copy** icon to copy and debug the code.

    ![Code_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt929a0b6db7d4748b/66a2809e85d5053f8e3fc111/Code_Icon.png)

Let’s explore a few use cases to understand the Retry Execution feature better.

### Use Case 1

If an automation fails in the first attempt due to any technical issue or server error at the exact time of execution, follow these steps:

1.  In the **Failed** Execution, click the **Retry Execution** button and close the window.  
    ![Failed_Status_For_Troubleshootin.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3134ebf305b30d72/66a2809d9cd6fd744ff25091/Failed_Status_For_Troubleshootin.png)
2.  In the **Execution Log**, you will see a **Success** status for that execution.  
    ![Success_Status_Troubleshooting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt907016678124599f/66a280a64252d50aa4eba91e/Success_Status_Troubleshooting.png)

### Use Case 2

If an automation fails even after retrying, follow these steps:

1.  Go to the automation and deactivate it.
2.  Reconfigure the failing step.
3.  Once successful, activate the automation again.
4.  Return to **Execution Log** and click the failed execution.

If the action step was previously configured with invalid or incorrect values, the execution will show a **Failed** status.

In the **Retry Execution** pop-up, you can retry the execution up to 2 times. You can debug the code by checking the payload. If the error is due to a third-party API or within Automate, please contact our [support](mailto:support@contentstack.com) team for assistance.

### Use Case 3

If an automation fails and you reconfigure a new trigger, retrying the same execution will result in an error message:

![Error_Message.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt987329a45ecaede4/66a2809e4a36013ff67c0dba/Error_Message.png)

This happens because the execution still has the payload data for the previously configured trigger. You must initiate a new execution to validate the changes.

### Use Case 4

If an automation runs successfully on the first attempt, you will see a success message as shown below:

![Success_Status.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5cb25e1e89cb772e/66a280a61cbda85f6086896f/Success_Status.png)

### Limitations

-   If an automation has a [**Response**](/docs/agent-os/response) connector, you will not be able to retry the execution for that automation.
-   The Info icon disappears once the retry limit is exceeded. You must start a new execution.  
    ![Execution_Limit_Exceeded.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt58d34759aa0cee3b/66a2809efef3eafc53007fb2/Execution_Limit_Exceeded.png)
