---
title: [Personalize] - Create a Personalize Project
description: Learn how to create a project in Personalize and link your CMS stack to unlock the power of tailored content.
url: https://www.contentstack.com/docs/personalize/create-personalize-project
product: Personalize
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2026-03-25
filename: create-a-personalize-project.md
---

# [Personalize] - Create a Personalize Project

This page explains [Personalize] - Create a Personalize Project for Personalize. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Create a Personalize Project

Creating a project in Contentstack Personalize allows you to manage and execute content personalization for your audience. Once the project is set up, you can link it to an existing stack, allowing you to deliver personalized content across multiple channels.

This guide provides step-by-step instructions on creating a Personalize project and linking it to a stack.

### Prerequisites

* [Contentstack account](https://www.contentstack.com/login)
* Access to the Contentstack Organization as the [Owner](/docs/developers/organization/organization-roles#organization-owner)/[Admin](/docs/developers/organization/organization-roles#organization-admin) that has Personalize enabled
* An existing stack you want to link to the Personalize project

### Steps for Execution

To create a new project in Personalize, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1. In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2. You will be redirected to the **Personalize Projects** landing page. Click the **+ New Personalize Project** button.
3. In the **New Personalize Project** modal, provide the following details:
   1. **Name** (required): Enter a name for your project.
   2. **Description** (optional): Add a brief description of the project.
   3. From the **Select Stack** drop-down, select an existing stack to connect it to your Personalize project to link the stack in which you have the personalized content, entry variants, etc.

      **Note**: You can choose to connect to an existing stack later via the Personalize Project **Settings** > **General** > **Stack Connection** section.
   4. After filling out the information, click the **Create Project** button.![New_Personalize_Project.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7b3abc6a022cce4c/69c3e66e9125f6fbc99f7e90/New_Personalize_Project.png)

   This creates your new Personalize project. Your new project will now appear on the Personalize Projects landing page.

### Next Steps

You can now create personalized [experiences](/docs/personalize/about-experiences) within your project and link the content types of the existing stack via the CMS with your Personalize project to [create and manage Entry Variants](/docs/developers/variants/manage-variant-groups).

## Common questions
### What is covered in [Personalize] - Create a Personalize Project?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Personalize] - Create a Personalize Project?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
