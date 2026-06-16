---
title: "[Solution Guides Articles] - Automatic Translation with Automate and ChatGPT"
description: Automatic Translation with Automate and ChatGPT using Contentstack Automate and Workflow stages.
url: https://www.contentstack.com/docs/developers/solution-guides/automatic-translation-with-automate-and-chatgpt
product: Contentstack
doc_type: solution-guide
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-26
---

# [Solution Guides Articles] - Automatic Translation with Automate and ChatGPT

This page explains how to automate content translation using Contentstack Automate and ChatGPT, coordinated through Contentstack Workflow stages. It is intended for developers and teams setting up an automated localization flow, and should be used when you want translations to be triggered and completed as part of a structured content workflow.

## Automatic Translation with Automate and ChatGPT

Contentstack's Automate, along with ChatGPT, will help you automate the translation process.

Utilizing Contentstack's [Workflow](/docs/content-managers/use-workflows) will ensure the entire process remains seamless. It also facilitates providing users with feedback, informing them about the specific stage they are at in the content creation process.

## Initial Setup

To demonstrate this flow, we will create a [Content Model](/docs/developers/marketplace-platform-guides/content-models) that accepts the following data:
- Headline (Single Line Textbox)
- Description (Multi Line Textbox)

Additionally, we will need to [set up a Workflow](https://www.contentstack.com/docs/developers/set-up-workflows-and-publish-rules) with the following stages:
- Draft
- Ready for Translation
- Translation Complete

Once we have these basics ready, we can set up the required automation for translation.

## Building the Automation

- **Create an Automation**  
If you are new to Automate, this guide will help you [get started with Automate](/docs/developers/automation-hub-guides/get-started-with-automation-hub#create-project)

- **Configure the Trigger**  
Choose Connector → Contentstack → Workflow Trigger.  
Fill the required fields and then set the workflow stage to “Ready for Translation.”

- **Get the Content to be translated**  
Choose Connector → Contentstack → Get Single Entry.  
Configure the [Get Single Entry action](/docs/developers/automation-hub-connectors/contentstack-trigger#entry-trigger) to get the data of the entry.

- **Translate the Content using ChatGPT**  
Choose Connector → ChatGPT → Configure Action.  
Choose the model and provide an appropriate prompt, such as: “Translate the following content for the French audience.”  
Remember to include the text from the previous step (Headline). It’s recommended to translate content on a per-field basis.  
Repeat the same process for the Description field.

- **Update the Translated Content**  
Configure Connector → Contentstack → Localize Entry.  
Add the required data, including the Entry Data. Here is an example:

```
{
    "entry": {
        "title":  "{{2.entry.title}}",
	"headline": "{{3.response.0.message.content}}",
	"description": "{{4.response.0.message.content}}"
    }
}
```

- **Update the Workflow Status**  
Choose Connector → Contentstack → Workflow Trigger.  
Fill the required fields and then set the workflow stage to “Translation Complete”

## Common questions

### Do I need to translate all fields in one ChatGPT step?
It’s recommended to translate content on a per-field basis, and repeat the same process for each field (for example, Headline and Description).

### What workflow stage should trigger the translation automation?
Set the workflow stage to “Ready for Translation” in the Workflow Trigger configuration.

### How do I write the translated content back into Contentstack?
Use Connector → Contentstack → Localize Entry and include the required data, including the Entry Data.

### What workflow stage should the automation set after translation is done?
Set the workflow stage to “Translation Complete”.