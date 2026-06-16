---
title: "[Automations guides and connectors] - RTE Formatter"
description: The RTE Formatter action connector helps convert content within the JSON Rich Text Editor into HTML or text formats, and convert HTML RTE content into JSON.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/rte-formatter
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - RTE Formatter

This page explains how to set up and use the RTE Formatter action connector in Automation Hub to convert JSON Rich Text Editor (RTE) content to HTML or text, and to convert HTML RTE content into JSON. It is intended for developers and automation builders configuring action steps in automations where RTE content needs to be transformed.

## RTE Formatter

The RTE Formatter action connector helps convert content within the JSON Rich Text Editor into HTML or text formats. Additionally, you can also convert HTML RTE content into JSON.

**Note:** To configure this action, you must configure the trigger connector to fetch the entry's content. Add a JSON RTE field to the content type and add content to the entry.

## Set up RTE Formatter

The RTE Formatter lets you perform the following actions:
- [Format JSON RTE Content to HTML](#format-json-rte-content-to-html)
- [Format JSON RTE Content to Text](#format-json-rte-content-to-text)
- [Format HTML RTE Content to JSON](#format-html-rte-content-to-json)

Let’s look at each of them in detail.

### Format JSON RTE Content to HTML

This action lets you convert the content within the JSON RTE into HTML format. You can add multiple JSON RTE content to convert.
- Click** Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the** RTE Formatter** connector.**Note**: You can sort and search the connector(s) based on the filter.
- Under **Choose an Action** tab, select the** Format JSON RTE Content to HTML** action.
- Click the **+ Add JSON RTE Content** button to select the JSON RTE content you want to convert.
You can mark the **Merge multiple RTE contents in a single array** checkbox to include all the JSON RTE content in a single array.
- Click **Proceed**.
- Click **Test Action **to test the configured action.
- The content will appear in HTML format. Click **Save and Exit**.

### Format JSON RTE Content to Text

This action lets you convert the content within the JSON RTE into text format. You can add multiple JSON RTE content to convert to text format.
- Select the **Format JSON RTE Content to Text **action.
- Click the **+ Add JSON RTE Content** button to select the JSON RTE content you want to convert.
You can mark the **Merge multiple RTE contents in a single array** checkbox to include all the JSON RTE content in a single array.
- Click **Proceed**.
- Click **Test Action** to test the configured action.
- The content will appear in Text format. Click **Save and Exit**.

### Format HTML RTE Content to JSON

This action lets you convert the HTML RTE content into JSON.
- Select the **Format HTML RTE Content to JSON **action.
- Select the **HTML RTE Content **you want to convert.**Note: **Provide the content in HTML format.
- Click **Proceed**.
- Click **Test Action** to test the configured action.
- The content will appear in JSON format. Click **Save and Exit**.

This sets up the **RTE Formatter** action connector.

## Common questions

### Do I need to configure anything before using the RTE Formatter action connector?
Yes. **Note:** To configure this action, you must configure the trigger connector to fetch the entry's content. Add a JSON RTE field to the content type and add content to the entry.

### Can I convert multiple JSON RTE contents at once?
Yes. You can add multiple JSON RTE content to convert, and you can mark the **Merge multiple RTE contents in a single array** checkbox to include all the JSON RTE content in a single array.

### What formats can the RTE Formatter convert between?
It can convert JSON RTE content to HTML, JSON RTE content to text, and HTML RTE content to JSON.

### Where do I see the output after testing the action?
After you click **Test Action**, the content will appear in the selected output format (HTML, Text, or JSON), and you can then click **Save and Exit**.