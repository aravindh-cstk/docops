---
title: "[Studio] - Create a Project"
description: Create a project in Studio and configure project settings.
url: https://www.contentstack.com/docs/studio/create-a-project
product: Contentstack Studio
doc_type: how-to
audience:
  - developers
  - content-managers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Create a Project

This page explains how to create a Studio project, why projects matter, and how to configure Project Settings for environments, locales, and live preview URLs. It is intended for users setting up Studio to connect design work with a Contentstack stack and content types, especially when integrating with a front-end for live preview and rendering.

## Create a Project

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Every experience in Studio begins with a **project**. A project is a scoped workspace that acts as a container for one or more compositions; these can be full web pages, page sections, or reusable blocks.

Projects also establish a connection between your design work and a specific **Contentstack stack** and **content type**, enabling seamless integration with your CMS data.

Projects help you:
- Connect to a specific Contentstack stack.
- Define where and how compositions are stored.
- Organize compositions by site, campaign, or functionality.
- Control layout behavior, data bindings, and design inheritance.

To create a project, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Open **Studio** and click the **+ New Project** button.
- In the **New Studio Project** modal:Enter a **Name** for your project.
- Optionally, add a **Description**.
- Select your **Contentstack Stack** to link with the project.**Note:** Ensure the selected stack has [Live Preview](../content-managers/author-content/about-live-preview.md) enabled.
- Optionally, you can expand **Advanced Settings** to specify the **Content Type Name** and **UID** to create a new content type for storing compositions.**Note:** If not configured, the Studio stores composition details in Contentstack under the **compositions** content type in the main branch by default. You can customize this setting in the Advanced Settings.
- Click **Create**.

Now that your project is set up, you can start creating **compositions**. These represent individual pages, sections, or reusable blocks that make up your digital experience.

## Configure Project Settings

Project Settings control how Studio interacts with environments, locales, and live preview URLs. Proper configuration ensures that pages render accurately in your connected front-end.
- Navigate to the **Project Settings** tab.
- Set up the following:**Base URL:** The URL used for live preview from your front-end project.
- **Default Environment and Locales:** Defines where your content will render.
- (Optional) Configure **fallback environments** if your setup requires cross-environment support.

**Note:** This step can be skipped if you are using Studio as a playground. However, real projects with front-end integration require this configuration for proper rendering and deployment.

## Best Practices

Follow these best practices to keep your projects organized, scalable, and easy for teams to manage:
- Create separate projects for different sites or campaigns.
- Use clear, descriptive names to indicate the project’s purpose.
- Reuse the same content type across projects if you want shared layout storage.

**Tip:** If you plan to reuse components or layouts across projects, define a common content type during project setup.

## Common questions

**Q: Do I need Live Preview enabled on the selected stack?**  
A: Yes—ensure the selected stack has [Live Preview](../content-managers/author-content/about-live-preview.md) enabled.

**Q: Where does Studio store composition details by default if Advanced Settings are not configured?**  
A: Studio stores composition details in Contentstack under the **compositions** content type in the main branch by default.

**Q: Can I skip configuring Project Settings?**  
A: Yes, if you are using Studio as a playground; real projects with front-end integration require this configuration for proper rendering and deployment.

**Q: Should I create separate projects for different initiatives?**  
A: Yes—create separate projects for different sites or campaigns.