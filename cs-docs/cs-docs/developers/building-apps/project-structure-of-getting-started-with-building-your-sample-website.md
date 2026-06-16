---
title: "[Building Websites] - Project Structure of Getting Started With Building Your Sample Website"
description: Project structure of getting started with building your sample website.
url: https://www.contentstack.com/docs/developers/building-apps/project-structure-of-getting-started-with-building-your-sample-website
product: Building Websites
doc_type: getting-started
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Building Websites] - Project Structure of Getting Started With Building Your Sample Website

This page describes the project structure for the Restaurant Menu sample website, outlining the key directories and files, what they contain, and how they contribute to the overall project. It is intended for developers who are setting up or exploring the sample codebase and need to understand where core functionality and configuration live.

## Project Structure of Getting Started With Building Your Sample Website

The following code block represents the project structure of our Restaurant Menu website.

Here are the key directories and files that form the backbone of our Restaurant Menu website, detailing their purpose and how they contribute to the overall project.

- **Stack data**: This folder consists of the assets and content types required to set up the Restaurant Menu website.
- **src**: This folder contains the major components required for the Restaurant Menu website, including:  
  **api**: This directory contains code for fetching data from Contentstack using the Contentstack Delivery SDK.
- **components**: This directory houses reusable React components that make up our Restaurant Menu website’s UI.
- **reducer**: This directory contains pure functions that manage the website state using Redux. Reducers take the current state and an action (which describes what happened) and return the updated state.
- **routes**: This directory handles navigation between different pages or views on our Restaurant Menu website.
- **sdk**: This directory consists of the logic for initializing the Contentstack SDK with provided environment variables like API Key, Delivery Token, Region, and Environment.
- **store**: This directory holds the Redux store, which is the central location for the application's state.
- **styles**: This directory consists of various CSS styling files used to style our Restaurant Menu website.
- **types**: This directory contains TypeScript type definitions for various components and data, improving code clarity and safety.
- **App.tsx**: This is the main React component that gets rendered on the screen. It composes other components to build the overall UI.
- **index.tsx**: This is the entry point for the website. It renders the App component and sets up any necessary configurations.
- **.env.sample**: This is a sample environment variable file that guides the user on defining environment variables.
- **.gitignore**: This file specifies intentionally untracked files that Git should ignore.
- **README.md**: This is a markdown file that lists all the necessary steps to run our Restaurant Menu website.
- **package.json**: This file is a project manifest in JSON format. It lists dependencies, scripts, and other metadata for managing our Restaurant Menu website.
- **tsconfig.json**: This is a configuration file for TypeScript projects. It defines compiler options and marks the directory containing it as the project's root.

## Next Steps

[Adding a New Page to Your Sample Website](/docs/developers/building-apps/adding-a-new-page-to-your-sample-website/)

## Common questions

### Where do I put code for fetching content from Contentstack?
Use the **src** folder, specifically the **api** directory: “This directory contains code for fetching data from Contentstack using the Contentstack Delivery SDK.”

### Where is the Contentstack SDK initialized?
In the **sdk** directory: “This directory consists of the logic for initializing the Contentstack SDK with provided environment variables like API Key, Delivery Token, Region, and Environment.”

### Where should I look for global application state management?
Check **store** and **reducer**: the Redux store is in **store**, and state update logic is in **reducer**.

### Which file is the entry point for the website?
**index.tsx**: “This is the entry point for the website. It renders the App component and sets up any necessary configurations.”