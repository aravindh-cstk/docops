---
title: "Add Visual Markups"
description: "Transform static images into interactive experiences with Visual Markup. Highlight, add info, or create shoppable images in Contentstack Assets."
url: /assets/add-visual-markups
uid: blt3c78b5a914518dfd
---

# Add Visual Markups

## Add Visual Markups

Visual Markup allows you to enrich images in Assets by overlaying clickable or hoverable regions. These regions, called markups, transform static images into interactive and actionable experiences. You can use markups to highlight objects, add contextual information, or create shoppable experiences directly within Assets.

Visual Markup is ideal for scenarios where you want to guide users’ attention or provide links to related content.

**Examples:**

-   **E-commerce:** Tag products in lifestyle images.
-   **Marketing:** Guide viewers to related campaigns or assets.
-   **Education:** Annotate diagrams and training visuals.
-   **Publishing:** Add references or footnotes within images.

## Types of Visual Markup

Markups are available in two types: hotspots and bounding boxes.

### Hotspot

-   Marks a single point on the image.
-   Does not have width or height dimensions.
-   Ideal for highlighting small or precise details, e.g., a button on a device or a product logo.

### Bounding Box

-   Defines a rectangular region with width and height.
-   Covers larger areas of the image.
-   Ideal for highlighting larger objects, e.g., furniture, vehicles, or people.

## Add AI-Powered Markups

Assets can automatically suggest markups using AI to help you quickly identify objects in an image.

1.  Open an asset.
2.  Click the “Visual Markup” icon to open the side panel.
3.  Click **Suggest Markup with AI**.
4.  Review the suggested markups that appear in the panel. Each suggestion displays the detected object (e.g., person or car) along with a confidence score.
5.  Select the markups you want to keep and click **Add Selected Markups**.

**Note:**

-   AI suggestions are not always accurate. Review them carefully and remove or adjust any that are incorrect.
-   By default, AI-generated markups are created as bounding boxes.

## Add Markups Manually

If you want full control over placement, you can add markups manually by performing the following steps:

1.  In the Visual Markup side panel, click **\+ Add Markup**.
2.  From the floater panel, choose one of the following options:
    -   **Hotspot**: Place a single point on the image.
    -   **Bounding Box**: Draw a rectangle over the object you want to highlight.
3.  Adjust the placement as needed by dragging the hotspot or resizing the bounding box.

**Tip:**

-   Use hotspots for small or symbolic highlights (e.g., a brand logo).
-   Use bounding boxes for larger objects (e.g., a sofa in a living room).

## Edit Markup

You can edit a markup to make it interactive and meaningful by performing the following steps:

1.  Click the markup on the image. The **Edit Hotspot** or **Edit Bounding Box** modal opens.
2.  Enter the following details:
    -   **Title** (required): Name of the object (e.g., Monitor).
    -   **Description** (optional): Additional context or information.
    -   **URL**: Link to related content or a product page (e.g., https://www.ecommerce.com/buy/monitor).
    -   **Position** (X, Y): Adjust coordinates for precise placement.
    -   **Dimensions** (W, H): Resize bounding boxes by entering numeric values or dragging the edges.

        **Note:** Dimensions are applicable only for bounding boxes.

3.  Click **Save Hotspot** or **Save Bounding Box**.

## Manage Markup

After you add hotspots or bounding boxes, you can manage them from the Visual Markup panel. Each markup has its own controls to edit, duplicate, hide, or delete. You can also manage all markups at once.

### Manage Markups

In the Visual Markup panel, navigate to the markup you want to manage. Click the vertical ellipsis next to the markup name.

Choose from the available options:

-   **Edit**: Open the **Edit Hotspot** or **Edit Bounding Box** modal to update details such as title, description, URL, or position/dimensions.
-   **Duplicate**: Create a copy of the markup with the same properties. Useful when the same details apply to multiple objects.
-   **Hide**: Toggle to hide or show the markup on the image. Hidden markups remain listed in the panel but are not visible on the image.
-   **Delete**: Permanently remove the markup from the image.

### Manage All Markups

At the top of the Visual Markup panel, you can apply actions to all markups at once:

-   **Show All Markups** (enabled by default): Toggle off to hide all markups from the image while they remain listed in the panel.
-   **Delete All Markups**: Permanently remove all markups from the image. Use this when you want to start fresh.

**Tip:** Use **Hide** when you only want to temporarily remove markups from view, and delete when you are certain they are no longer needed.

## Example: Study Table with Shoppable Markups

Imagine you upload a lifestyle image of a study table to your asset library. You want to make it interactive so customers can explore and buy products directly.

1.  Add a bounding box around the monitor on the table.
    -   **Title:** Monitor
    -   **URL:** https://www.ecommerce.com/buy/monitor
    -   **Description:** 24-inch LED monitor with slim bezel design.
2.  Add another bounding box around the guitar leaning against the desk.
    -   **Title:** Guitar
    -   **URL:** https://www.ecommerce.com/buy/guitar
    -   **Description:** Acoustic guitar for beginners.
3.  Add a hotspot around the mouse beside the monitor.
    -   **Title:** Mouse
    -   **URL:** https://www.ecommerce.com/buy/mouse
    -   **Description:** RGB gaming mouse.
4.  Save the asset.

Now, when users view this image, they can hover over or click the bounding boxes or hotspot to learn more or navigate to the product pages directly.

With Visual Markup, you can make your images more engaging, actionable, and shoppable.
