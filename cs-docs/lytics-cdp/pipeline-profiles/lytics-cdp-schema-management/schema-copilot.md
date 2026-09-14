---
title: "Schema Copilot"
description: "Schema Copilot revolutionizes how users manage data connections, streamlining the integration process with our Customer Data Platform (CDP), Lytics."
url: /lytics/schema-copilot
---

# Schema Copilot

## Schema Copilot

## Overview

Schema Copilot revolutionizes how users manage data connections, streamlining the integration process with our Customer Data Platform (CDP), Lytics.

Before starting this document, it is important to understand some key fundamentals regarding fields and mappings, which can be found [here](/docs/lytics/fields-mappings).

### Streamlined Data Integration Process

Integrating custom data into Lytics is simplified into two straightforward steps:

1.  **Schema Definition**: Outline the schema to dictate how your new data source should update existing customer profiles.
2.  **Data Stream Creation**: Establish a new data stream tailored to your source to ensure seamless data flow.

### Features of Schema Copilot

Schema Copilot leverages advanced generative artificial intelligence to comprehensively scrutinize your new data source. It offers intuitive suggestions for fields and mappings, enabling seamless integration of your new data source with the existing schema. This intelligent assistance ensures that your data aligns perfectly with the Lytics platform, enhancing your customer data integration's overall efficiency and accuracy.

### Getting Started

**To get started with Schema Copilot:**

1.  Navigate to the Schema Copilot wizard.

![851a902-Screenshot_2024-03-07_at_1.48.23_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcfcb3f4d767f0f0a/d0d8b01b4a006ed7771c9841/851a902-Screenshot_2024-03-07_at_1.48.23_PM.png)

1.  Fill out the "Provide Data" box with an example of your data source's data, either JSON or CSV. In the "Additional Prompt" box, you can also give the model more directives.

![1037620-Screenshot_2024-03-07_at_1.49.32_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2225153908d6cebb/4e30a49e74a60e9a1b4a3e4d/1037620-Screenshot_2024-03-07_at_1.49.32_PM.png)

1.  JSON Example

![62c5cb1-Screenshot_2024-03-07_at_1.51.36_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5c5e966839a550f0/f04f26a42814ac556d98e917/62c5cb1-Screenshot_2024-03-07_at_1.51.36_PM.png)

1.  **Tip:** If you do not correctly input the JSON, you will see an error message on the red banner.

![b59b4d4-Screenshot_2024-03-07_at_1.50.49_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaabf3d2ce2dd5dad/82ee52524478d23a997cc68e/b59b4d4-Screenshot_2024-03-07_at_1.50.49_PM.png)

1.  CSV Example

![4477697-Screenshot_2024-03-07_at_1.53.18_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2d04552c47de1f8b/b77e6d7f9df5518b8496bd30/4477697-Screenshot_2024-03-07_at_1.53.18_PM.png)

1.  Select the stream from which the data is going to be coming in.

![1c64db8-Screenshot_2024-03-07_at_2.08.21_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4b7b3ada47f2f99b/f6333a8b5ba85af8ac5a14bc/1c64db8-Screenshot_2024-03-07_at_2.08.21_PM.png)

1.  **(Optional)** If you would like to have more complex data types or only map data in certain conditions you can do that using the "Additional Prompt Box"
    1.  Example of Adding a prompt based on the CSV file input:

![fcd58f1-Screenshot_2024-03-07_at_1.55.54_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame5e7f70030a0730e/101a7d982a702cf98899dc6f/fcd58f1-Screenshot_2024-03-07_at_1.55.54_PM.png)

1.  Now, on the email mapping for the default stream, you will see a condition that requires the first name to exist.

![afbed62-Screenshot_2024-03-07_at_2.14.19_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf78650eb9c384519/f7588cbfa85a6591f82acb3b/afbed62-Screenshot_2024-03-07_at_2.14.19_PM.png)

1.  Click "Suggest Schema" and review the suggestions in the editable data grid. If you want to accept the suggestions, click "Save Schema." If you don't, you can return to the first step to change your data or prompt or exit the wizard entirely.
    1.  Understanding the Suggested Schema View:
        1.  Field rows will have the following columns:

![83f8c39-Screenshot_2024-03-07_at_2.27.31_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am81486e123f8e104a/8ddf3506605cd9a801d96e39/83f8c39-Screenshot_2024-03-07_at_2.27.31_PM.png)

1.  **Field Name**: The field's name being added or updated. If there is a green dot on this row, the field is new; if the dot is yellow, then the field already exists and is being updated. The lock next to the field indicates that this is an identifier and, therefore, cannot be edited as it would impact the integrity of the profiles already built.
2.  **Type**: This will indicate the data type. To better understand Lytics Field data types, please visit [here](/docs/lytics/fields-mappings#data-types).
3.  **Merge Op**: This will indicate how data merges into this field over time and is defined [here](/docs/lytics/fields-mappings#merge-operators).
4.  **Description**: This is the short description of the field and will act as the field name for the audience builder.
5.  **Is Identifier**: This will indicate whether it is an identifier.
6.  **Mappings**: The number of mappings recommended for the field based on

1.  Mappings will have the following columns:

![6c2ad68-Screenshot_2024-03-07_at_2.28.13_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am49af5ec73fad69d9/f7d23ed083cb01392d075dcc/6c2ad68-Screenshot_2024-03-07_at_2.28.13_PM.png)

1.  **Stream:** This will be the data source that will populate the mapping. In the example above, the stream is "default," Lytics Jstag's default stream.
2.  **Expression:** This is where additional aggregation, cleansing, hashing, string parsing, and manipulation can be done using LQL. Adding more context to the "Additional Prompt" Section will automatically populate some expressions. To learn more about what expressions are available, please look [here](/docs/lytics/lytics-query-language).
3.  **Condition:** Additional logic should be used to decide if the data should map. This will use the LQL syntax.

1.  Once the suggestions are saved, you can publish the changes by clicking "Publish Changes" on your Schema Dashboard.
