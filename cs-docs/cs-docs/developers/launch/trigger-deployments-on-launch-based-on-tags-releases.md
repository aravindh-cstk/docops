---
title: "[Contentstack Launch] - Trigger Deployments on Launch Platform based on Tags/Releases"
description: Step-by-step guide to configure automatic deployments on the Launch platform whenever you create a new tag or a release in your Git repository.
url: https://www.contentstack.com/docs/launch/trigger-deployments-on-launch-based-on-tags-releases
product: Contentstack Launch
doc_type: how-to
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Contentstack Launch] - Trigger Deployments on Launch Platform based on Tags/Releases

This page explains how to configure automatic deployments on the Contentstack Launch platform when new tags or releases are created in a Git repository. It is intended for developers who manage Launch projects and want deployments to trigger automatically based on tagging or release events.

## Trigger Deployments on Launch Platform based on Tags/Releases

This step-by-step guide explains how to configure automatic deployments on the Launch platform whenever you create a new tag or a release in your Git repository.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization
- Git repository for your project

## Steps for Execution
- ### Create a Launch Deploy Hook

    [Log in](https://www.contentstack.com/login) to your Contentstack account and perform the following steps:

      Click **Launch** from the dashboard as shown below.
- On the Projects landing page, select your **project**.
- Navigate to the Launch [Environment Settings](/docs/launch/environments#configure-an-environment) page.
- Create a new [**Deploy Hook**](/docs/launch/deploy-hooks#create-a-deploy-hook).
- Copy the generated Deploy Hook URL. You'll need this in the next step.
- ### Create a GitHub Action

      Create a [GitHub Action](https://docs.github.com/en/actions/quickstart) that triggers the deployment whenever a tag or a release is pushed to your repository.
- Add the following GitHub workflow YAML template to your GitHub repository and replace values as needed:
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
          curl -X POST https://?commit=${{ github.sha }}

          # Add any additional steps required for your deployment process (e.g., build)
```

    **Additional Resource:** You can also refer to the sample file in the example repository [here](https://github.com/contentstack-launch-examples/github-actions-demo).
- ### Save and Activate the Workflow

    After replacing the placeholders and customizing the trigger pattern (if necessary), save the workflow file in your GitHub repository.

    This action activates the workflow, causing it to trigger automatically whenever you push a new tag that matches the specified pattern.

This setup enables automated deployments to your Launch environment whenever you create a new content release with the appropriate tag. Remember to update the workflow file if your deployment process or tagging convention changes.

## Common questions

**Q: Do I need a Deploy Hook to trigger deployments from GitHub Actions?**  
A: Yes, you create a Deploy Hook in Launch and use the generated Deploy Hook URL in your GitHub workflow.

**Q: What events trigger the workflow in the provided template?**  
A: The template triggers on `push` events for tags matching the pattern `content/*` (which you can change as needed).

**Q: Where do I configure the Launch environment used by the Deploy Hook?**  
A: You configure it in the Launch [Environment Settings](/docs/launch/environments#configure-an-environment) page.

**Q: What should I update if my tagging convention changes?**  
A: Update the workflow file’s tag trigger pattern so it matches your new tagging convention.