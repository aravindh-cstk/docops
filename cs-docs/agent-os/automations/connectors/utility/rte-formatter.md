---
title: "RTE Formatter"
description: "RTE Formatter"
url: /agent-os/rte-formatter
---

# RTE Formatter

## RTE Formatter

The RTE Formatter action connector helps convert content within the JSON Rich Text Editor into HTML or text formats. Additionally, you can also convert HTML RTE content into JSON.

**Note:** To configure this action, you must configure the trigger connector to fetch the entry's content. Add a JSON RTE field to the content type and add content to the entry.

## Set up RTE Formatter

The RTE Formatter lets you perform the following actions:

1.  [Format JSON RTE Content to HTML](#format-json-rte-content-to-html)
2.  [Format JSON RTE Content to Text](#format-json-rte-content-to-text)
3.  [Format HTML RTE Content to JSON](#format-html-rte-content-to-json)

Let’s look at each of them in detail.

### Format JSON RTE Content to HTML

This action lets you convert the content within the JSON RTE into HTML format. You can add multiple JSON RTE content to convert.

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **RTE Formatter** connector.
    
    **Note:** You can sort and search the connector(s) based on the filter.
    
    ![Select_Connector](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fe903bef6bfb357/65df01367c852613b4234940/Select_Connector.png)
4.  Under **Choose an Action** tab, select the **Format JSON RTE Content to HTML** action.![Select_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt661abea5fbaf4eeb/65df013672b387848c22b783/Select_Action.png)
5.  Click the **\+ Add JSON RTE Content** button to select the JSON RTE content you want to convert.  
    You can mark the **Merge multiple RTE contents in a single array** checkbox to include all the JSON RTE content in a single array.![Select_Content](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt46f39143dcb691a9/65df01366c65d737cd87df2d/Select_Content.png)
6.  Click **Proceed**.
7.  Click **Test Action** to test the configured action.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21ad8e3d30d8bbf6/65df013631aca173477eee7e/Test_Action.png)
8.  The content will appear in HTML format. Click **Save and Exit**.![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt675d2ae4c81b540d/65df01363b4c4f4bb97adae0/Save_Exit.png)

### Format JSON RTE Content to Text

This action lets you convert the content within the JSON RTE into text format. You can add multiple JSON RTE content to convert to text format.

1.  Select the **Format JSON RTE Content to Text** action.![Select_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31a78c8e38462c97/65df00d7396ebb196f07d279/Select_Action.png)
2.  Click the **\+ Add JSON RTE Content** button to select the JSON RTE content you want to convert.  
    You can mark the **Merge multiple RTE contents in a single array** checkbox to include all the JSON RTE content in a single array.![Select_Content](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt217a748ddfcb7667/65df00d73b4c4f22867adadc/Select_Content.png)
3.  Click **Proceed**.
4.  Click **Test Action** to test the configured action.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21ad8e3d30d8bbf6/65df013631aca173477eee7e/Test_Action.png)
5.  The content will appear in Text format. Click **Save and Exit**.![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc9aa69e32627b2f8/65df00d7d778b090a5ad5c8a/Save_Exit.png)

### Format HTML RTE Content to JSON

This action lets you convert the HTML RTE content into JSON.

1.  Select the **Format HTML RTE Content to JSON** action.![Select_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e255fc28d3d1b8d/65df007f3e2d0e0e4bf714cc/Select_Action.png)
2.  Select the **HTML RTE Content** you want to convert.![Select_Content](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt53562de9fc32826e/65df007fee3a131714c8ecaa/Select_Content.png)
    
    **Note:** Provide the content in HTML format.
    
3.  Click **Proceed**.
4.  Click **Test Action** to test the configured action.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21ad8e3d30d8bbf6/65df013631aca173477eee7e/Test_Action.png)
5.  The content will appear in JSON format. Click **Save and Exit**.![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde8b40a946380636/65df00802568eff9f66cb3fa/Save_Exit.png)

This sets up the **RTE Formatter** action connector.
