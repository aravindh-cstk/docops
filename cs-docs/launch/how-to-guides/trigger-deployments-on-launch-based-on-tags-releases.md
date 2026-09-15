---
title: "Trigger Deployments on Launch Platform based on Tags/Releases"
description: "Learn how to configure automatic deployments on the Launch platform whenever you create a new tag or release in your Git repository."
url: /launch/trigger-deployments-on-launch-based-on-tags-releases
uid: bltf9d0907d5446606e
---

# Trigger Deployments on Launch Platform based on Tags/Releases

## Trigger Deployments on Launch Platform based on Tags/Releases

This step-by-step guide explains how to configure automatic deployments on the Launch platform whenever you create a new tag or a release in your Git repository.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization
-   Git repository for your project

## What You Will Learn

-   How to create a Launch Deploy Hook.

-   How to create a GitHub Action that deploys on a new tag or release.

-   How to save and activate the workflow.


## Prerequi

## Steps for Execution

1.  ### Create a Launch Deploy Hook

    [Log in](https://www.contentstack.com/login) to your Contentstack account and perform the following steps:

    1.  Click **Launch** from the dashboard as shown below.![Launch_2026_Landing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93cb437e9760884e/69647cf52269f8000829f814/Launch_2026_Landing_Page.png)
    2.  On the Projects landing page, select your **project**.
    3.  Navigate to the Launch [Environment Settings](/docs/launch/environments#configure-an-environment) page.
    4.  Create a new [**Deploy Hook**](/docs/launch/deploy-hooks#create-a-deploy-hook).
    5.  Copy the generated Deploy Hook URL. You'll need this in the next step.
2.  ### Create a GitHub Action

    1.  Create a [GitHub Action](https://docs.github.com/en/actions/get-started/quickstart) that triggers the deployment whenever a tag or a release is pushed to your repository.
    2.  Add the following GitHub workflow YAML template to your GitHub repository and replace values as needed:

        ```
        name: Launch Deployment on Content Change (Template)

        on:
          push:
            tags:
              - 'content/*'  # Triggers on any tag starting with "content/" (Change as needed)

        jobs:
          deploy:
            runs-on: ubuntu-latest

            steps:
              - name: Deploy to Launch (**Please configure!**)
                run: |
                  # Replace YOUR_DEPLOY_HOOK_URL with actual values
                  curl -X POST https://<YOUR_DEPLOY_HOOK_URL>?commit=${{ github.sha }}

                  # Add any additional steps required for your deployment process (e.g., build)
        ```


    **Additional Resource:** You can also refer to the sample file in the example repository [here](https://github.com/contentstack-launch-examples/github-actions-demo).

3.  ### Save and Activate the Workflow

    After replacing the placeholders and customizing the trigger pattern (if necessary), save the workflow file in your GitHub repository.

    This action activates the workflow, causing it to trigger automatically whenever you push a new tag that matches the specified pattern.


This setup enables automated deployments to your Launch environment whenever you create a new content release with the appropriate tag. Remember to update the workflow file if your deployment process or tagging convention changes.
