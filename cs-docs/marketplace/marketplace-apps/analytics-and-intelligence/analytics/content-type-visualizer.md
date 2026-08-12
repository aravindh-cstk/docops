---
title: "Content Type Visualizer App Installation Guide"
description: "Content Type Visualizer app provides a visual representation of all content types and their fields within a particular stack."
url: /marketplace/content-type-visualizer
---

# Content Type Visualizer App Installation Guide

## Content Type Visualizer App Installation Guide

The Content Type Visualizer Dashboard app provides a visual representation of all Contentstack content types and their fields within a particular stack, similar to an ER diagram.

Contentstack Marketplace allows you to easily install the Content Type Visualizer application and use it within your stack to get a diagrammatic view of all the content types in the given stack, along with the references relationship between the content types.

**Note:** The Content Type Visualizer app can support up to 300 content types in the Dashboard.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

  

This step-by-step guide explains how to install and configure the Content Type Visualizer app within your stack.

## Steps for Execution

1.  [Install Content Type Visualizer in Contentstack Marketplace](#install-content-type-visualizer-in-contentstack-marketplace)
2.  [Use Content Type Visualizer within your Stack](#use-content-type-visualizer-within-your-stack)

1.  ## Install Content Type Visualizer in Contentstack Marketplace
    
    Follow the steps given below to install the application in Contentstack.
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).  
        
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **Content Type Visualizer** app and click the **Install** button.  
        ![Marketplace-content-type-visualizer.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt41140b4f9bfa17b2/69dc8272863ef852da007e76/Marketplace-content-type-visualizer.png)
    5.  In the popup window, select the stack where you want to install the Content Type Visualizer app and click the **Install** button.  
        ![Content-Type-Visualizer-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltac2fbb8f68fc9d0f/64b8f69a4439472842238f7a/Content-Type-Visualizer-Install-App.png)
    6.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Content-Type-Visualizer-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2da3f05fa2ca96be/65b7bd3563dd3a8040961d33/Content-Type-Visualizer-UI-Locations.png)
    7.  **Note:** No additional configuration is required to use the Content Type Visualizer app.
        
    8.  Click the **Stacks** icon from the left navigation panel. 
    9.  ![CT_Visualizer_-_Stack_Icon.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt712b9319754b9545/637621a197ed2210a4d53521/CT_Visualizer_-_Stack_Icon.png)
    10.  Click the required stack to start using the Content Type Visualizer application.
2.  ## Use Content Type Visualizer within your Stack
    
    To use the Content Type Visualizer app within an entry of your stack, follow the steps given below:
    
    1.  Click the **Dashboard** option of the stack.
    2.  You will see the Content Type Visualizer app here. 
        
    3.  ![CT_Visualizer_-_Dashboard.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt94eaab93a68fdb27/639ad5b3fc376b178f0a17b2/CT_Visualizer_-_Dashboard.png)
    4.  In the diagram above, the content types relate to one another through references.
        
    5.  **Note:** One node references another node through the reference field.
        
    6.  ![Reference-Gif.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc6f3f012491a9d65/637365556237d7106934add6/Reference-Gif.gif)
    7.  ### 1:1 Relationship
        
    8.  In a 1:1 relationship, one content type references itself or another content type. In the example given below, CT5 references CT1 by 1:1 relation. 
        
    9.  ![CT_Visualizer_1-to-1_Edit_in_Card.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4a0c4c3b0ac75459/6373653c76567a10a7cb615c/CT_Visualizer_1-to-1_Edit_in_Card.png)
    10.  Reference field in the content type editor page: 
         
    11.  ![CT_Visualizer_1-to-1_Edit_Ref.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt93ea94ff98d2218f/63170369e3c321572216ac5f/CT_Visualizer_1-to-1_Edit_Ref.png)
     12.  ![CT_Visualizer_Select_CT1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltef55d7d74c855427/63170380c1142d2fd9dfd49a/CT_Visualizer_Select_CT1.png)
    13.  ### 1:M Relationship
         
    14.  In a 1:M relationship, one content type references many content types. In the example given below, CT1 references CT2 and CT4 by 1:M relation. 
         
    15.  ![CT_Visualizer_1-to-M_Edit_in_Card.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbac935a2215f76bc/6373653ca32209106e8b145c/CT_Visualizer_1-to-M_Edit_in_Card.png)
    16.  Reference field in the content type editor page: 
         
    17.  ![CT_Visualizer_1-to-M_Edit_Ref.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5989d9a64999357d/631703698c6aa1311ba17f03/CT_Visualizer_1-to-M_Edit_Ref.png)
     18.  ![CT_Visualizer_Select_CT2_CT4.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt99295fb7068b5d21/63170380cc56115de2f56eac/CT_Visualizer_Select_CT2_CT4.png)
    19.  Click the **\+** (zoom in) or **-** (zoom out) icons to zoom in or zoom out of the diagram. 
    20.  ![CT_Visualizer_-_Zoom_Feature.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt75a55b921266392f/639ad5c62a7bba15c0262fff/CT_Visualizer_-_Zoom_Feature.png)
    21.  To view the information of a specific content type in the diagram, follow the steps below:
         1.  Click a **content type card**.
         2.  **Note:** If a content type card is already selected, then click the **Content Type Information** icon in the right panel to view the information of the selected content type.
             
         3.  ![CT_Visualizer_-_CT_Info_Icon.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc1f1fdc0cee827ef/639ad5b361b8ce11a556dbbb/CT_Visualizer_-_CT_Info_Icon.png)
         4.  The Content Type Information panel displays Name and Field Count of the selected content type, by default. If the selected content type has entries and/or reference fields, then the Number of Entries (master) field and the Referenced Content Type(s) field will be displayed.
             
         5.  Click the **icon** below the Number of Entries (master) field to view the entries associated with the selected content type, in a new tab. 
         6.  ![CT_Visualizer_No_of_Entries.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt033727e98593a5aa/63736555f33b43105dcd49a5/CT_Visualizer_No_of_Entries.png)
         7.  Click the **Edit Content Type** button to edit the content type in the app. 
         8.  ![CT_Visualizer_Edit_in_CT_Info.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt27b371f61746ea97/637365557140e510ae4a5199/CT_Visualizer_Edit_in_CT_Info.png)
         9.  Alternatively, click the **Edit** icon in the content type card to edit it. 
             
         10.  ![CT_Visualizer_Edit_in_Card.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc83c535633fd093a/6373655439138f1063fa6fe0/CT_Visualizer_Edit_in_Card.png)
         11.  Click the **Referenced Content Type(s)** dropdown to view the referenced content types of the selected content type. 
         12.  ![CT_Visualizer_Referenced_CT_Info.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt21ef7baaeb1b32a1/63736554a3fffc10b9dc1c4e/CT_Visualizer_Referenced_CT_Info.png)
    22.  To view the code of a specific content type in the diagram, follow the steps below:
         1.  Click a **content type card**.
         2.  Click the **JSON View** icon in the right panel. 
         3.  ![CT_Visualizer_-_Code_View_Icon.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt81b0cf4782a47cbd/639ad5b2b45ba411b04e19f8/CT_Visualizer_-_Code_View_Icon.png)
         4.  You can see the selected content type under the **Content Type** section and its code view under the **JSON** section. 
             
         5.  Click the **Copy** icon to copy the JSON code.
         6.  ![CT_Visualizer_CT_JSON_Copy_Code.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2e1ad91fa0c0138f/6373653c0f2f8f10dd0e2255/CT_Visualizer_CT_JSON_Copy_Code.png)
         7.  To view the code of a different content type, select the required content type from the dropdown under Content Type. 
         8.  ![CT_Visualizer_CT_JSON_Dropdown.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt75cb0c742fcf77f8/6373653d68cde21055085818/CT_Visualizer_CT_JSON_Dropdown.png)
    23.  Click the **recenter** icon to bring the view to its initial state. 
    24.  ![CT_Visualizer_-_Recenter_Feature.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd9d5f66ceb1c2868/639ad5b425ef1f179ad3dff3/CT_Visualizer_-_Recenter_Feature.png)
    25.  Click the **Fullscreen** icon to view the content types in full screen.
    26.  ![CT_Visualizer_-_Full_Screen.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd6fa645cb6ac49b2/639ad5b3eed5e012100a1ec1/CT_Visualizer_-_Full_Screen.png)
     27.  ![CT_Visualizer_-_Full_Screen_Reset.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc26a9776fc4bd2ad/639ad5b3d45f0a5df66be273/CT_Visualizer_-_Full_Screen_Reset.png)
    28.  **Note:** All operations which can be done in the normal screen mode can also be done in the full screen mode.
         
    29.  Click the **Reload** button to reload the content types in the Dashboard.
    30.  ![CT_Visualizer_-_Reload.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd11e367c116473b8/639ad5b4a5454810991372b5/CT_Visualizer_-_Reload.png)
    31.  Click the **Search** button to search for any specific content type.
    32.  ![CT_Visualizer_-_Search_Button.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbfb938539cfb8c6b/639ad5b41883d62213da928d/CT_Visualizer_-_Search_Button.png)
    33.  **Note:** By default, the Search button displays the total count of the content types.
         
    34.  The Search modal displays the list of content types. You can search through this dropdown list or manually enter the name of the content type.
         
    35.  ![CT_Visualizer_-_Search_Modal.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb5ce43f12e1b55d8/639ad5c6841b716a01c84b49/CT_Visualizer_-_Search_Modal.png)
    36.  **Note:** Upon selecting the content type in the dropdown, you get to see the selected content type in zoomed-in view and it opens the side panel for it.
         
    37.  ![CT_Visualizer_-_Search_List_Zoomed-in.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7387fd316aea259e/639ad5b4467a0d22e73e0ef5/CT_Visualizer_-_Search_List_Zoomed-in.png)
    38.  Click the **X** button to clear and re-enter a different content type name in the Search modal.
    39.  ![CT_Visualizer_-_Search_X_Button.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbd117a80e2de354e/639ad5c6447ad711c23d9c99/CT_Visualizer_-_Search_X_Button.png)
    40.  Click the **Search** button again to close the Search modal.
    41.  Click and drag to reorder a content type.
    42.  ![CT_Visualizer_-_Drag_and_Drop.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltff39a401a04c03cf/639ad5b48f63b61092fd90cb/CT_Visualizer_-_Drag_and_Drop.gif)
    43.  **Note:** You can reorder the content types as per your convenience, the app maintains the reordered positions even after reloading the Dashboard or across different login sessions.
         
3.  **Note:** Presently, the Content Type Visualizer app cannot display relationships when references to other content types are located within global fields, modular blocks, or group fields.
