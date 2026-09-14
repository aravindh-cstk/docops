---
title: "How to Use GTM Tags to Modify Lytics Pathfora Widget Behavior"
description: "How to Use GTM Tags to Modify Lytics Pathfora Widget Behavior"
url: /lytics/how-to-use-gtm-tags-to-modify-lytics-pathfora-widget-behavior
---

# How to Use GTM Tags to Modify Lytics Pathfora Widget Behavior

## How to Use GTM Tags to Modify Lytics Pathfora Widget Behavior

a Tutorial to modify pathfora behaviour using custom javascript tags in GTM

## Introduction

Google Tag Manager (GTM) is a powerful tool for managing tags, triggers, and scripts on your website. Lytics offers a variety of widgets through its Pathfora framework, allowing businesses to personalize and target content to their users. This article will show you how to use GTM to modify the behavior of Lytics Pathfora widgets by utilizing custom JavaScript and CSS.

### Prerequisites

-   A working knowledge of Google Tag Manager
-   Basic understanding of JavaScript and CSS
-   Access to your website's GTM and Lytics accounts

### Step 1: Create a JavaScript Tag in GTM for Lytics Embedder

1.  Go to your Google Tag Manager Dashboard and click on "New Tag."
2.  Name the tag "Lytics Embedder."
3.  Choose the tag type as "Custom HTML."
4.  Paste your Lytics Embedder JavaScript code into the HTML field.

For example:

```
// Your Lytics Embedder code here
```

1.  Choose the triggering event for your tag. For instance, you can set it to trigger when a custom event "embedder variable = true" occurs.
2.  Save and publish the changes.

### Step 2: Create a CSS Tag in GTM for Lytics CSS Master

1.  Go back to the GTM Dashboard and create another new tag.
2.  Name the tag "Lytics CSS Master."
3.  Choose the tag type as "Custom HTML."
4.  Insert the CSS code wrapped in style tags into the HTML field.

For example:

```
<style>
// Your Lytics CSS Master code here
</style>
```

1.  Set the trigger to "All Pages Page View" so the CSS will be applied universally.
2.  Save and publish the changes.

### Step 3: Testing and Validation

1.  Open your website and inspect the Lytics Pathfora widgets to make sure they are behaving and appearing as intended.
2.  Use browser developer tools to troubleshoot any issues, such as incorrect application of styles or non-functioning JavaScript.

### Step 4: Customization and Advanced Uses

1.  You can further customize the Lytics Embedder JavaScript to manipulate widgets based on user behavior or other events.
2.  Similarly, modify the Lytics CSS Default to change the look and feel of the widgets to better align with your brand.

### Conclusion

Utilizing Google Tag Manager along with Lytics' Pathfora framework can greatly enhance your ability to deliver personalized and targeted content to your website visitors. By following these steps, you can modify widget behavior and appearance directly from GTM, making your marketing efforts more efficient and effective.

### Example code

#### A javascript to dynamically alter pathfora behaviour:

Use this code in gtm and associate to a custom variable

```
<script>
  // Get the "h2" and "p" elements with their respective class names
  // var headlineElement = document.querySelector('.pf-widget-headline');
  var messageElement = document.querySelector('.pf-widget-message');

  // Get the "img" tag with class name "pf-widget-img"
  var imgElement = document.querySelector('.pf-widget-img');

  // Create a new "a" tag
  var linkElement = document.createElement('a');
  linkElement.href = messageElement.textContent;
  linkElement.classList.add('pf-widget-custom-href');

  // Append the "img" tag inside the new "a" tag
  linkElement.appendChild(imgElement.cloneNode(true));

  // Replace the "img" tag with the new "a" tag in the DOM
  imgElement.parentNode.replaceChild(linkElement, imgElement);
</script>
```

#### Lytics CSS Default - a js to update css dynamically in pathfora:

```
<style type="text/css">
/* lytics-small-modal start */
  .lytics-small-modal .pf-widget-content{
    display:none;
  }
  .lytics-small-modal .pf-widget-img {
    width: 100% !important;
    height: 100% !important;
    float: none !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    margin-left: 0 !important;
    border-radius: 0 !important;
}
  .lytics-small-modal {
  cursor: pointer;
  }
  .lytics-small-modal .pf-widget-body {
    width: 100%;
    height: 100%;
}
  .lytics-small-modal .pf-widget-close {
    z-index: 1;
}
.lytics-small-modal{
    width: 250px;
    height: 250px;
}
/* lytics-small-modal end */  
  /* lytics-capture-leads styles start */
  .lytics-capture-leads .pf-widget, .lytics-capture-leads .pf-widget .pf-widget-body, .lytics-capture-leads .pf-widget-message, .lytics-capture-leads .pf-form-label, .lytics-capture-leads .pf-widget-checkbox{
    color: rgb(46, 46, 46) !important;
}
  .lytics-capture-leads{
  background-color: rgb(235, 177, 17) !important
  }
  .lytics-capture-leads .pf-widget-headline{
  color: white;
  }
  /* lytics-capture-leads styles end */

    /* lytics-preheader-modal styles start */
.lytics-preheader-modal{
	background-color: #ffb32a;
	min-height: 0;
	padding: 0;
    box-shadow: none;
}

.lytics-preheader-modal .pf-widget-message{
	color: black;
}

.lytics-preheader-modal .pf-widget-close{
	color: black;
}

@media (max-width: 600px) {
  .lytics-preheader-modal {
    display: none;
  }
}
    /* lytics-preheader-modal styles start */

  /* lytics-personalization-coupon styles start */
.lytics-personalization-coupon.pf-widget-modal.pf-widget-variant-2 .pf-widget-img {
    float: none !important;
    position: absolute !important!important;
    top: 20px !important;
    left: 5% !important;
    margin: 0% !important;
    width: 90% !important;
    height: auto !important;
    border-radius: 0px !important;
}
.lytics-personalization-coupon.pf-widget-modal.pf-widget-variant-2 .pf-widget-content {
    background-color: #EEB111 !important;
}
  .lytics-personalization-coupon.pf-widget-modal .pf-widget-message {
    font-size: 14px !important;
    margin: 0 0 0px !important;
}
  .lytics-personalization-coupon.pf-widget, .pf-widget .pf-widget-body, .lytics-personalization-coupon.pf-widget-modal.pf-widget-variant-2 .pf-widget-headline{
  color: black !important;
  }
  /* lytics-personalization-coupon styles end */
 /* lytics-personalization-coupon black-back styles start */

  .lytics-personalization-coupon.black-back.pf-widget-modal.pf-widget-variant-2 .pf-widget-content {
    background-color: black !important;
}
  .lytics-personalization-coupon.black-back.pf-widget, .pf-widget .pf-widget-body, .lytics-personalization-coupon.black-back.pf-widget-modal.pf-widget-variant-2 .pf-widget-headline{
  color: white !important;
  }
  /* lytics-personalization-coupon black-back styles end */


   /* lytics-big-modal styles start */
  .lytics-big-modal .pf-widget-img{
    position: relative !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    width: 100% !important;
    height: 100% !important;
    cursor: pointer !important;
}

  .lytics-big-modal .pf-widget-text{
    display: none !important;
}

  .lytics-big-modal .pf-widget-content{
    padding: 0px !important;
}
  .lytics-big-modal .pf-widget-close{
    z-index: 1 !important;
    color: black !important;
}
  /* lytics-big-modal styles end */
</style>
```
