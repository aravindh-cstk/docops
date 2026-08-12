---
title: "Create a New Stack With Assets"
description: "Discover how to create and manage stacks in Contentstack, a centralized system for organizing and publishing content across channels efficiently."
url: /assets/create-a-new-stack
---

# Create a New Stack With Assets

## Create a New Stack With Assets

A stack is a centralized repository that stores and manages content types, entries, and linked assets for a project. It provides a structured environment for teams to create, manage, and publish content across channels.

**Note:**

-   You must be an organization [owner](/docs/administration/about-administration-roles#organization-owner) or organization [admin](/docs/administration/about-administration-roles#organization-admin) to create a stack.
-   An organization user can create only one stack per minute per organization.

To create a new stack, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to **CMS** through “App Switcher”.
2.  Click **\+ New Stack**.
3.  Select **Create New**.
4.  Enter the required information:
    -   **Name** (required)
    -   **Description** (optional)
    -   **Master Language** (required)
        
        **Note:** The master language cannot be changed after the stack is created.
        
5.  Assets are stored in spaces, not directly within stacks. Choose how to link the stack to a space.
    -   **Create and Link a New Space**:
        -   A new space is created with the same name as the stack.
        -   A default workspace (e.g., main) is created within the space.
        -   The stack owner becomes the space owner.
        -   The workspace is linked to the stack’s main branch.
    -   **Link an Existing Space**: Disable the toggle, then select an existing space and workspace.
6.  Click **Create**.

Once the stack is created:

-   You are redirected to the newly created stack.
-   The selected workspace is linked to the **main** branch.
-   Assets from the linked workspace become immediately available in the stack.
-   You can manage linked spaces from **Settings** > **Assets Hub**.
