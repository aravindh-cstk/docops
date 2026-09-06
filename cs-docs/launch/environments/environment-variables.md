---
title: "Environment Variables"
description: "Learn how to set, use, and manage environment variables for your web projects effectively in Contentstack Launch."
url: /launch/environment-variables
uid: blt5aa4708b9b920b21
---

# Environment Variables

## Environment Variables

Environment Variables are key-value pairs configured outside your source code so that each value can change depending on the [Environment](/docs/launch/environments).

Your source code can read these values to change behavior during the Build Step or Launch [Cloud Function](/docs/launch/cloud-functions) execution.

All values are visible to any user that has access to the Project. It is safe to use both non-sensitive and sensitive data, such as tokens.

**Note:** Changes to Environment Variables are not applied to previous deployments. They only apply to new deployments.

You can add environment variables while creating a new project or environment, or configure the environment variables later at **Environments > Actions > Settings > Env. Variables**.

## What You Will Learn

-   How to open the Environment Variables settings for an environment.

-   How to add variables individually as key-value pairs.

-   How to add or edit variables in bulk using editor mode.

-   The size limits and formatting pitfalls that affect deployments.


## Add Environment Variables

1.  Click the **project card** to open your project from the Launch landing page.
2.  In the Environments screen, click an existing environment or create a new [environment](/docs/launch/environments). For this tutorial, we will add an environment variable to the **Default** environment for the Contentstack API key.  
    In the **Default** environment, click the **ellipses** under Actions and then click **Settings** to go to the Settings page.

    ![Launch_Settings_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ccdc1d79b2ef2eb/69b78cd967be9e781070b034/Launch_Settings_2026.png)

3.  In **Environments** under **Settings**, click **Environment Variables**.

    ![Launch-Env_Variables-Venus2-Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8031f2f1f10e353c/65c1b122ce84ad32c2e34087/Launch-Env_Variables-Venus2-Tab.png)

    If your project is connected to any stack, its status will be available inside **Integration Status**.

4.  In the **Add Keys and Values** section, click the **\+ Add Environment Variable** button to enter the environment variable **key** and **value**.

    **Note**:

    -   If you are adding an environment variable for the first time, you can directly add the environment **key** and **value** in the respective textboxes.
    -   You can add up to **128** environment variables per environment, with the total size of environment variables not exceeding **14 KB**.
    -   When using Launch [Cloud Functions](/docs/launch/cloud-functions/), ensure the combined size of all environment variables does not exceed **4 KB**.
    -   Misconfigured environment variables can cause deployment failures, especially if they contain single quote characters ('), commonly seen in private keys. Ensure all environment variable values are properly formatted and do not include single quotes.  
        **Example**:  
        Avoid: key=exa'mple  
        Recommended: key=example

    ![Launch-Env_Variables-Venus2-VariableKeyValue.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcbfa570b7bc2ba47/65c1b1227958f9b9f95129ea/Launch-Env_Variables-Venus2-VariableKeyValue.png)

    You can also add or edit environment variables in bulk, in the key-value format, by using the **Switch to Editor Mode toggle** button. You can add each environment variable in a new line.

    ![Launch-Env_Variables-Venus2-VariableBulk.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte6bf3c67676cb138/65c1b1220acbc5276f10ebca/Launch-Env_Variables-Venus2-VariableBulk.png)

    An environment variable can be added in the key=value format, or an existing variable's key or value can be edited in the Switch to Editor Mode. The updated environment variables will also be reflected in the Add Keys and Values section.  

    The bulk edit mode allows you to paste code blocks with key=value pairs, thereby reducing the effort of individually entering environment variables in the key-value edit mode.

5.  Click the **Save** button.

**Note:** You must trigger a new deployment after adding/modifying environment variables.
