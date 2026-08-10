---
title: "Add a Publish Rule"
description: "Define publish rules to control entry publishing and approvals in Contentstack workflows."
url: /headless-cms/add-a-publish-rule
---

# Add a Publish Rule

## Add a Publish Rule

Adding a publish rule lets you define approval or workflow requirements before entries can be published or unpublished. This ensures compliance and quality by enforcing organizational standards requiring each entry to meet the designated workflow stage before it can be published or unpublished.

**Note:** Only the stack [owner](/docs/headless-cms/types-of-roles#owner), [admin](/docs/headless-cms/types-of-roles#admin), or [developer](/docs/headless-cms/types-of-roles#developer) can add a publish rule.

Setting up publish rules within a workflow is optional. However, because publishing and unpublishing are critical to content operations, publish rules are managed within the **Workflows** feature.

To add a publish rule in your stack, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon or use the shortcut key “S” (for both Windows and Mac users).
2.  Select **Workflows** and go to the **Publish Rules** tab.
3.  Click **\+ New Publish Rule**.
4.  On the **Rule Details** page:
    
    1.  **Branch(es):** Select one or more branches to apply the rule.
        
        **Tip:** You can select multiple branches.
        
    2.  **Content Type:**
        1.  **All Content Types:** Apply the rule globally.
        2.  **Specific Content Type(s):** Select one or more types from the dropdown.
            
            **Note:** You cannot add more than one rule to the same content type.
            
    3.  **Language:**
        1.  **All Languages:** Apply the rule to all languages.
        2.  **Specific Language(s):** Choose desired languages from the dropdown.
    4.  **Environment:** Select the environment for which the rule applies (e.g., Production or Staging).
    5.  **Action:** Choose whether this rule applies to **Publish**, **Unpublish**, or **All** (both actions).
        
        **Note:** All parameters are required fields.
        
    
    ![Publish_Rules_Parameters.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5332192aeb538a2d/690909b44ce7cc797b56971f/Publish_Rules_Parameters.png)
5.  Expand the **Conditions** section (if not expanded by default). You must define at least one condition.
    1.  **Approver:** Add one or more users or roles who must approve before publishing or unpublishing.
    2.  **Workflow Stage:** Specify the workflow stage (e.g., Final Review or Legal Approved) that an entry must reach before it can be published or unpublished.
6.  Enable **Prevent self-approval** to ensure independent validation:
    
    1.  The last editor cannot approve or publish the entry.
    2.  Two distinct users must approve before publishing or unpublishing.
    3.  If only one user is assigned, the system displays a validation prompt asking you to add an additional approver.
        
        **Tip:** Enable this option to maintain separation of duties between content creators and reviewers, ensuring independent review and accountability in workflows.
        
    
    ![Publish_Rules_Conditions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b339acbb564090e/690909e7aad664766fe34b33/Publish_Rules_Conditions.png)
7.  After completing all required fields and conditions, click **Save**.

This creates a publish rule that governs publishing and unpublishing actions based on the selected parameters and conditions within your defined workflow.

**Note:**

-   Publish rules apply only to **unpublished versions** of an entry.
-   Once an entry version meets the rule conditions and is published to an environment, it can be republished to the same environment without restriction, even if it moves to a different stage.
-   To re-trigger rule validation, the entry must be modified to create a new version.

This approach streamlines publishing across locales and environments by eliminating redundant approvals, reducing delays, and ensuring timely content distribution.

## Example Scenario

Your team creates a blog post titled **“Holiday Sale Preview.”** The publish rule requires **Legal** approval and that the entry reaches the **Final Review** stage before it can be published.

-   When the post is first published, it’s routed for approval and validated against the required workflow stage.
-   If a content manager republishes the same version in a different environment, the rule isn’t triggered again since the version already met the required conditions.
-   If the post is edited (e.g., updating prices or images), a **new version** is created. The rule is enforced again, requiring fresh approval and workflow validation.

## API Reference

To add a publish rule via API, refer to the [Create publish rules](/docs/developers/apis/content-management-api/workflows#create-publish-rules) API request.
