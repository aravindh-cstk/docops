---
title: "[Solution Guides Articles] - Automate Recipe for Content Type Propagation"
description: "An automation flow that propagates content type changes from a source stack to a destination stack."
url: https://www.contentstack.com/docs/headless-cms/automate-recipe-for-content-type-propagation
product: Contentstack
doc_type: solution-guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Solution Guides Articles] - Automate Recipe for Content Type Propagation

This page demonstrates how to build an automation flow that propagates content type changes from a source stack to a destination stack. It is intended for developers configuring Contentstack Automate workflows and should be used when you need to replicate or synchronize content type updates across stacks.

## Automate Recipe for Content Type Propagation

The following example demonstrates an automation flow that propagates content type changes from a source stack to a destination stack.

**Note**: If a field is deleted in the source stack, the corresponding field and its associated data will also be removed from the destination stack.

This flow uses a series of triggers and actions to detect content type changes and push them to the destination stack. It also verifies whether the content type exists before propagating any updates.

## Tactical Rundown

- ### Create Trigger

  Create a new automation and select the **Contentstack** connector as the trigger. If you have not previously added an account, you can configure it by clicking **Add New Account**.  
  Optionally, you can select the stack you want to replicate from and specify the content type for the trigger. If you leave the content type blank, then changes to all content types will trigger this automation.

  **Note**: There is an option to trigger this flow on ‘All’ events, as indicated in the screenshot below.

  At this point, in a separate tab, return to the Content Type editor and click **Save**. After that, return to the Automate tab and click **Test Action**. This will pick up the content type update that was just performed as the payload information.

- ### Check for Content Type Existence

  Before any updates are applied to the destination stack, it is necessary to verify whether the content type exists or not in the destination stack. In this step, we issue an HTTP Request action to query the destination stack.

  Ensure that the appropriate headers for the HTTP action are included, such as the api_key, authorization, content-type, and optionally, the include_branch. For security purposes, the credential information can be stored as [Project Variables](../../../api-docs/developer-apis/automations-management-api/project-variables.md) and referenced in the header value selection.

  Ensure that the action is tested to capture the response payload. In this case, we expect two HTTP response codes. A 200 code indicates the content type already exists in the destination stack. A 422 code indicates if the content type cannot be found.

- ### Conditional Fork

  Based on the response from the previous step, the flow can conditionally proceed to either apply the updates to the destination stack or attempt to create the content type in the destination stack.

  **Conditional Fork: Create Copy Action (HTTP 200 OK)**  
  The second step is to utilize the HTTP Request action and leverage the CMA to perform a PUT operation on the destination stack and content type. Enter the CMA API in the URL field, and update the Body segment as needed. Ensure correct header information is provided for the destination stack, including the management token in the Authorization header.

  Perform a test of this action by clicking **Test Action**. If successful, a panel displaying the update results will be rendered.

  Click **Save and Exit**.

- **Conditional Fork: Create Content Type Action (HTTP 422 OK)**  
  If the content type does not exist in the destination stack, the flow will issue another HTTP Request action and call the CMA API to create the content type. To test this successfully, delete the content type in the destination stack and click **Test Action**.

  Click **Save and Exit**.

- ### Activate Automation

  Toggle the switch to activate the automation.

## Common questions

**Q: What happens if a field is deleted in the source stack?**  
A: If a field is deleted in the source stack, the corresponding field and its associated data will also be removed from the destination stack.

**Q: Why does the flow check for content type existence before updating?**  
A: It is necessary to verify whether the content type exists or not in the destination stack so the flow can either apply updates (when it exists) or create the content type (when it does not).

**Q: Which HTTP response codes are expected when checking for the content type?**  
A: A 200 code indicates the content type already exists in the destination stack. A 422 code indicates if the content type cannot be found.

**Q: Where should credential information be stored for security purposes?**  
A: For security purposes, the credential information can be stored as Project Variables and referenced in the header value selection.

<!-- filename: solution-guides-articles-automate-recipe-for-content-type-propagation.md -->