---
title: "[Content Migration] - Set Up Content Migration Framework (Windows)"
description: Install and set up the Contentstack Migration Framework on Windows to migrate content from a legacy CMS into Contentstack.
url: https://www.contentstack.com/docs/headless-cms/set-up-content-migration-framework-windows
product: Contentstack
doc_type: guide
audience:
  - developers
  - administrators
version: v2
last_updated: 2026-03-25
---

# [Content Migration] - Set Up Content Migration Framework (Windows)

This page explains how to install the Contentstack Migration Framework on Windows to migrate content from a legacy CMS into a Contentstack stack. It is intended for developers or administrators preparing a migration and should be used before starting the content import and mapping workflow.

## Set Up Content Migration Framework (Windows)

The **Contentstack Migration Framework** is designed to help users seamlessly migrate content from a legacy **Content Management System** (**CMS**) to Contentstack. The framework simplifies the migration process by providing an intuitive interface and step-by-step workflow for importing content, mapping content types, and migrating data into a [stack](../set-up-stack/about-stack.md) within Contentstack. This guide outlines the process for installing the migration framework.

**Note**: If you are migrating Sitecore data, setting up the Migration Framework via Docker is recommended. Refer to the [Set Up Content Migration Framework (Docker)](/docs/developers/content-migration/set-up-content-migration-tool-docker) document for detailed instructions.

## Prerequisites

Before you begin the installation process, ensure that you have the following prerequisites:
- [GitHub account](https://github.com/)
- [Node.js](https://nodejs.org/en/download/) version 21
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) version 10 or above
- [pnpm](https://pnpm.io/installation) version 10 or above
- Exported data from your legacy CMS that you wish to migrate (e.g., a ZIP, JSON, or other supported file type depending on your legacy CMS)

## Installing the Migration Framework

Follow the steps below to install the migration framework on your system:
- Open a terminal and run the following command to clone the repository and install dependencies:
```
git clone  https://github.com/contentstack/migration-v2.git && cd migration-v2 && setup-nvm.bat
```
- If prompted, enter your system password to allow installation of any missing dependencies.
- During the setup, select the legacy CMS you are migrating content from.

**Warning:** Ensure you select the correct legacy CMS to avoid any errors during the migration.
- Enter the file path of the exported content you wish to migrate. For example: `/Users/<username>/Downloads/<exported_data>.zip`.**Note:** The file type may vary depending on your legacy CMS. For example, Sitecore data is exported in ZIP format whereas Contentful data is exported in JSON.
- If the installation is successful, a browser window should open automatically with the `http://localhost:3000` URL.

This completes the installation of the Contentstack Migration Framework. You’re now ready to begin migrating your content.

## Common questions

**How do I choose between Windows setup and Docker setup?**  
If you are migrating Sitecore data, setting up the Migration Framework via Docker is recommended; otherwise, follow the Windows setup steps on this page.

**What should I do if the browser does not open to `http://localhost:3000` after installation?**  
Verify the setup completed successfully and then manually open `http://localhost:3000` in your browser.

**What export file types are supported for migration?**  
The file type depends on your legacy CMS (for example, Sitecore exports ZIP files and Contentful exports JSON files).