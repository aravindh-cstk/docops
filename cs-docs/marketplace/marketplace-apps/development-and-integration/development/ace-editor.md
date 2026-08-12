---
title: "Ace Editor App Installation Guide"
description: "The Ace Editor app enables you to create and edit code snippets within the Contentstack environment."
url: /marketplace/ace-editor
---

# Ace Editor App Installation Guide

## Ace Editor App Installation Guide

Ace Editor is a powerful code editor available in Contentstack that lets you write HTML, CSS, JavaScript, SQL, and other types of code. It provides an intuitive interface with syntax highlighting, auto-completion, and code folding features to make coding easier. It also supports multiple programming languages such as Java, .Net, PHP, Python, and more, making it a great choice for developers.

Contentstack Marketplace lets you integrate the Ace Editor app directly into your headless CMS. You can easily use this app to write, edit, and view code within the Contentstack environment.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Ace Editor app within your stack.

## Steps for Execution

1.  [Install and Configure the Ace Editor app in Contentstack Marketplace](#install-and-configure-the-ace-editor-app-in-contentstack-marketplace)  
    
2.  [Use Ace Editor within your Stack Entry](#use-ace-editor-within-your-stack-entry)

1.  ## Install and Configure the Ace Editor app in Contentstack Marketplace
    
    Follow the steps to install the application in Contentstack.
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    <2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **Ace Editor** app and click **Install**.  
        ![Ace_editor_app_Install.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ama7cfbe4b1aa8cbb7/927257e48cc4f2e83361e45e/Ace_editor_app_Install.png?locale=en-us)
    5.  In the popup window, select the stack where you want to install the Ace Editor app and click the **Install** button.  
        ![Ace-Editor-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb308542c1d094019/64ba420cc0f305259fb69b7f/Ace-Editor-Install-App.png)
    6.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements. ![Ace-Editor-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b7827446903fc9e/65b81e19292a0e513387d4dd/Ace-Editor-UI-Locations.png)
      
    8.  **Note:** No additional configuration is required to use the Ace Editor app.
        
2.  ## Use Ace Editor within your Stack Entry
    
    To use the Ace Editor application within an entry of your stack, follow the steps given below:
    
    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details as displayed below:  
        ![Ace-Editor-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba8d33b46d465da6/64881f57352ac618edda2e47/Ace-Editor-Content-Type.png)
    3.  In the Content Type Builder page, add a [Custom](/docs/headless-cms/custom/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.  
        
    4.  Under **Select Extension/App**, select **Ace Editor**, and click the **Proceed** button.  
        ![Ace-Editor-Adding-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt62d9eb9f526e44aa/64881f57cb67020c0e15750c/Ace-Editor-Adding-In-Custom-Field.png)  
        Ace Editor is added in the custom field.  
        ![Ace-Editor-Added-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta182c0ebe37137b4/64881f57f7411b2e9737c36e/Ace-Editor-Added-In-Custom-Field.png)
    5.  After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
    6.  To use the Ace Editor app, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.  
        You will see the Ace Editor custom field on your entry page as shown below:  
        ![Ace-Editor-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc858bb38de00c903/64a416089fa42371ab9f364d/Ace-Editor-Sample-Entry.png)  
        Write, edit, and view code in the Ace Editor custom field. Let’s create a contact form using HTML:
        
        ```
        <form>
          <div class="input-fields">
            <input placeholder="Name*" />
          </div>
          <div class="input-fields">
            <input placeholder="Email*" />
          </div>
          <div class="text-field">
            <input type="text-area" placeholder="Message*" />
          </div>
          <button class="btn primary-btn">Send Message</button>
        </form>
        ```
        
        ![Ace-Editor-Example-Contact-Form](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte97caaf5b06e4b02/64a415dcade08c42cecb0fe9/Ace-Editor-Example-Contact-Form.png)
    7.  After adding the code snippets, **Save** and **Publish** your entry.  
        You can view the contact form on the web page.  
        ![Ace-Editor-Example-Display-Contact-Form](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2219759bbdf583c3/64881f57b9a0768e46926715/Ace-Editor-Example-Display-Contact-Form.png)
