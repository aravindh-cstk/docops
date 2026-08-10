---
title: "Automatic Translation with Automate and ChatGPT"
description: "This guide helps businesses create a more agile, automated, and accurate translation solution to achieve a competitive edge."
url: /headless-cms/automatic-translation-with-automate-and-chatgpt
---

# Automatic Translation with Automate and ChatGPT

## Automatic Translation with Automate and ChatGPT

Contentstack's Automate, along with ChatGPT, will help you automate the translation process.

Utilizing Contentstack's [Workflow](/docs/headless-cms/about-workflows) will ensure the entire process remains seamless. It also facilitates providing users with feedback, informing them about the specific stage they are at in the content creation process.

## Initial Setup

To demonstrate this flow, we will create a [Content Model](/docs/marketplace/about-content-models) that accepts the following data:

1.  Headline (Single Line Textbox)
2.  Description (Multi Line Textbox)

Additionally, we will need to [set up a Workflow](/docs/headless-cms/about-workflows) with the following stages:

1.  Draft
2.  Ready for Translation
3.  Translation Complete

Once we have these basics ready, we can set up the required automation for translation.

## Building the Automation

1.  **Create an Automation**  
    If you are new to Automate, this guide will help you [get started with Automate](/docs/agent-os/get-started-with-automations#create-project)
2.  **Configure the Trigger**  
    Choose Connector → Contentstack → Workflow Trigger.  
    Fill the required fields and then set the workflow stage to “Ready for Translation.”
3.  **Get the Content to be translated**  
    Choose Connector → Contentstack → Get Single Entry.  
    Configure the [Get Single Entry action](/docs/agent-os/contentstack-trigger#entry-trigger) to get the data of the entry.
4.  **Translate the Content using ChatGPT**  
    Choose Connector → ChatGPT → Configure Action.  
    Choose the model and provide an appropriate prompt, such as: “Translate the following content for the French audience.”  
    Remember to include the text from the previous step (Headline). It’s recommended to translate content on a per-field basis.  
    Repeat the same process for the Description field.
5.  **Update the Translated Content**  
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
    
6.  **Update the Workflow Status**  
    Choose Connector → Contentstack → Workflow Trigger.  
    Fill the required fields and then set the workflow stage to “Translation Complete”
