---
title: "Set Up Content Migration Framework (Windows)"
description: "Streamline your content migration to Contentstack effortlessly with our user-friendly framework. Follow our guide to install and start migrating today."
url: /headless-cms/set-up-content-migration-framework-windows
uid: blt0e72685829d0aa11
---

# Set Up Content Migration Framework (Windows)

## Set Up Content Migration Framework (Windows)

The **Contentstack Migration Framework** is designed to help users seamlessly migrate content from a legacy **Content Management System** (**CMS**) to Contentstack. The framework simplifies the migration process by providing an intuitive interface and step-by-step workflow for importing content, mapping content types, and migrating data into a [stack](/docs/headless-cms/about-stack) within Contentstack. This guide outlines the process for installing the migration framework.

**Note:** If you are migrating Sitecore data, setting up the Migration Framework via Docker is recommended. Refer to the [Set Up Content Migration Framework (Docker)](/docs/headless-cms/set-up-content-migration-framework-docker) document for detailed instructions.

## Prerequisites

Before you begin the installation process, ensure that you have the following prerequisites:

-   [GitHub account](https://github.com/)
-   [Node.js](https://nodejs.org/en/download/) version 21
-   [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) version 10 or above
-   [pnpm](https://pnpm.io/installation) version 10 or above
-   Exported data from your legacy CMS that you wish to migrate (e.g., a ZIP, JSON, or other supported file type depending on your legacy CMS)

## Installing the Migration Framework

Follow the steps below to install the migration framework on your system:

1.  Open a terminal and run the following command to clone the repository and install dependencies:

    ```
    git clone  https://github.com/contentstack/migration-v2.git && cd migration-v2 && setup-nvm.bat
    ```

2.  If prompted, enter your system password to allow installation of any missing dependencies.![Content Migration Tool - Setup Guide (Windows)_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c5e6235bea3d21d/683946f064e2865546bc2bae/Content_Migration_Tool_-_Setup_Guide_(Windows)_1.png)
3.  During the setup, select the legacy CMS you are migrating content from.

    ![Content Migration Tool Setup Guide_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79c5e8151c004a68/683946f025f1b4638fa0e6f4/Content_Migration_Tool_Setup_Guide_2.png)

    **Warning:** Ensure you select the correct legacy CMS to avoid any errors during the migration.

4.  Enter the file path of the exported content you wish to migrate. For example: /Users/<username>/Downloads/<exported\_data>.zip.![Content Migration Tool - Setup Guide (Windows)_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbde64ff361f1be88/683946f03bb899707ba3dfb4/Content_Migration_Tool_-_Setup_Guide_(Windows)_3.png)

    **Note:** The file type may vary depending on your legacy CMS. For example, Sitecore data is exported in ZIP format whereas Contentful data is exported in JSON.

5.  If the installation is successful, a browser window should open automatically with the http://localhost:3000 URL.![Content Migration Tool Setup Guide 4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltafe4f226d96c3a1f/67ff9a478e7aaa859446115b/Content_Migration_Tool_Setup_Guide_4.png)

This completes the installation of the Contentstack Migration Framework. You’re now ready to begin migrating your content.
