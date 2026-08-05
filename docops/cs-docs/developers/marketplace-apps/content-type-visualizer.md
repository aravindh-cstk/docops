---
title: "[Marketplace guides and apps] - Content Type Visualizer App Installation Guide"
description: Installation and usage guide for the Content Type Visualizer Dashboard app in Contentstack Marketplace.
url: https://www.contentstack.com/docs/marketplace/content-type-visualizer
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Content Type Visualizer App Installation Guide

This page explains how to install the Content Type Visualizer app from the Contentstack Marketplace and how to use it within a stack’s Dashboard to visualize content types and their reference relationships. It is intended for Contentstack stack owners/admins who need a diagrammatic view of content models and references.

## Content Type Visualizer App Installation Guide

The Content Type Visualizer Dashboard app provides a visual representation of all Contentstack content types and their fields within a particular stack, similar to an ER diagram.

Contentstack Marketplace allows you to easily install the Content Type Visualizer application and use it within your stack to get a diagrammatic view of all the content types in the given stack, along with the references relationship between the content types.

**Note:** The Content Type Visualizer app can support up to 300 content types in the Dashboard.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

This step-by-step guide explains how to install and configure the Content Type Visualizer app within your stack.

## Steps for Execution

- [Install Content Type Visualizer in Contentstack Marketplace](#install-content-type-visualizer-in-contentstack-marketplace)
- [Use Content Type Visualizer within your Stack](#use-content-type-visualizer-within-your-stack)

## Install Content Type Visualizer in Contentstack Marketplace

Follow the steps given below to install the application in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace **icon to go to the Marketplace.
- Click **Apps **from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Content Type Visualizer **app and click the **Install App **button.
- In the popup window, select the stack where you want to install the Content Type Visualizer app and click the **Install **button.![Content-Type-Visualizer-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltac2fbb8f68fc9d0f/64b8f69a4439472842238f7a/Content-Type-Visualizer-Install-App.png)
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Content-Type-Visualizer-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2da3f05fa2ca96be/65b7bd3563dd3a8040961d33/Content-Type-Visualizer-UI-Locations.png)

  **Note:** No additional configuration is required to use the Content Type Visualizer app.

- Click the **Stacks **icon from the left navigation panel.
- Click the required stack to start using the Content Type Visualizer application.

## Use Content Type Visualizer within your Stack

To use the Content Type Visualizer app within an entry of your stack, follow the steps given below:

Click the **Dashboard **option of the stack.

You will see the Content Type Visualizer app here.

In the diagram above, the content types relate to one another through references.

**Note:** One node references another node through the reference field.

### 1:1 Relationship

In a 1:1 relationship, one content type references itself or another content type. In the example given below, CT5 references CT1 by 1:1 relation.

Reference field in the content type editor page:

### 1:M Relationship

In a 1:M relationship, one content type references many content types. In the example given below, CT1 references CT2 and CT4 by 1:M relation.

Reference field in the content type editor page:

- Click the **+ **(zoom in) or** - **(zoom out) icons to zoom in or zoom out of the diagram.
- To view the information of a specific content type in the diagram, follow the steps below:
  - Click a **content type card**.
  - 

    **Note:** If a content type card is already selected, then click the **Content Type Information** icon in the right panel to view the information of the selected content type.
  - The Content Type Information panel displays `Name` and `Field Count` of the selected content type, by default. If the selected content type has entries and/or reference fields, then the `Number of Entries (master)` field and the `Referenced Content Type(s)` field will be displayed.
- Click the **icon** below the `Number of Entries (master)` field to view the entries associated with the selected content type, in a new tab.
- Click the **Edit Content Type** button to edit the content type in the app.

  Alternatively, click the **Edit** icon in the content type card to edit it.

- Click the **Referenced Content Type(s)** dropdown to view the referenced content types of the selected content type.
- To view the code of a specific content type in the diagram, follow the steps below:
  - Click a **content type card**.
- Click the **JSON View** icon in the right panel.

  You can see the selected content type under the **Content Type** section and its code view under the **JSON **section.

- Click the **Copy** icon to copy the JSON code.
- To view the code of a different content type, select the required content type from the dropdown under `Content Type`.
- Click the **recenter** icon to bring the view to its initial state.
- Click the **Fullscreen** icon to view the content types in full screen.

  **Note:** All operations which can be done in the normal screen mode can also be done in the full screen mode.

- Click the **Reload** button to reload the content types in the Dashboard.
- Click the **Search** button to search for any specific content type.

  **Note:** By default, the Search button displays the total count of the content types.

  The Search modal displays the list of content types. You can search through this dropdown list or manually enter the name of the content type.

  **Note:** Upon selecting the content type in the dropdown, you get to see the selected content type in zoomed-in view and it opens the side panel for it.

- Click the **X** button to clear and re-enter a different content type name in the Search modal.
- Click the **Search** button again to close the Search modal.
- Click and drag to reorder a content type.

  **Note:** You can reorder the content types as per your convenience, the app maintains the reordered positions even after reloading the Dashboard or across different login sessions.

**Note**: Presently, the Content Type Visualizer app cannot display relationships when references to other content types are located within global fields, modular blocks, or group fields.

## Common questions

### Who can install the Content Type Visualizer app?
You need access to the Contentstack Organization/Stack as the Owner/Admin.

### Does the Content Type Visualizer app require additional configuration after installation?
**Note:** No additional configuration is required to use the Content Type Visualizer app.

### What is the maximum number of content types supported in the Dashboard?
**Note:** The Content Type Visualizer app can support up to 300 content types in the Dashboard.

### Are all reference relationships displayed in the diagram?
**Note**: Presently, the Content Type Visualizer app cannot display relationships when references to other content types are located within global fields, modular blocks, or group fields.