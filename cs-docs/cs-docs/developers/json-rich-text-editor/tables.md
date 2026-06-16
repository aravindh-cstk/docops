---
title: [JSON RTE] - Tables
description: Learn how to work with tables in Contentstack’s JSON RTE. Render, style, and optimize tabular data for your frontend applications.
url: https://www.contentstack.com/docs/developers/json-rich-text-editor/tables
product: Contentstack
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2024-11-05
filename: tables.md
---

# [JSON RTE] - Tables

This page explains [JSON RTE] - Tables for Contentstack. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Tables

Tables in Contentstack’s JSON RTE provide a way to structure tabular data for better clarity. These tables help present data in an organized way.

**Note**: Tables do not include borders or styles in the content delivery. Developers need to implement custom styles on the frontend to ensure consistent presentation.

When a table is created in the JSON RTE, it is represented as a structured JSON block. Below is an example of how a table with two rows and two columns might appear in JSON format:

```
{  
    "uid": "550c197c28fe4948bdc623fadcb44a82",  
    "type": "table",  
    "attrs": {  
        "rows": 2,  
        "cols": 2,  
        "colWidths": [  
            250,  
            250  
        ]  
    },  
    "children": [  
        {  
            "type": "tbody",  
            "attrs": {},  
            "children": [  
                {  
                    "type": "tr",  
                    "attrs": {},  
                    "children": [  
                        {  
                            "type": "td",  
                            "attrs": {},  
                            "children": [  
                                {  
                                    "type": "p",  
                                    "attrs": {},  
                                    "children": [  
                                        {  
                                            "text": ""  
                                        }  
                                    ],  
                                    "uid": "6f90281498374362942aaa4ce844ddf8"  
                                }  
                            ],  
                            "uid": "ff8ddbbf3585422eba80eb694c178063"  
                        },  
                        {  
                            "type": "td",  
                            "attrs": {},  
                            "children": [  
                                {  
                                    "type": "p",  
                                    "attrs": {},  
                                    "children": [  
                                        {  
                                            "text": ""  
                                        }  
                                    ],  
                                    "uid": "679e4cabd3d94737bc7210fbaba20d32"  
                                }  
                            ],  
                            "uid": "fe750675222e4c5e8b0ebd7629571ede"  
                        }  
                    ],  
                    "uid": "6c3ba0527bdf4457a1596bbe428bbbe1"  
                },  
                {  
                    "type": "tr",  
                    "attrs": {},  
                    "children": [  
                        {  
                            "type": "td",  
                            "attrs": {},  
                            "children": [  
                                {  
                                    "type": "p",  
                                    "attrs": {},  
                                    "children": [  
                                        {  
                                            "text": ""  
                                        }  
                                    ],  
                                    "uid": "24d3b48fd87e4291aaba0e21ab708034"  
                                }  
                            ],  
                            "uid": "6460275d232a4c04a78a2334b136b7b7"  
                        },  
                        {  
                            "type": "td",  
                            "attrs": {},  
                            "children": [  
                                {  
                                    "type": "p",  
                                    "attrs": {},  
                                    "children": [  
                                        {  
                                            "text": ""  
                                        }  
                                    ],  
                                    "uid": "b84ff7aba8394d41a22707aceafafbbc"  
                                }  
                            ],  
                            "uid": "c8bd6daff39b4f819e230c4306ba1c82"  
                        }  
                    ],  
                    "uid": "ead39dc0c9414bc0ac41419bfbf92662"  
                }  
            ],  
            "uid": "119f5bed1f8549808f1716952e7e04b6"  
        }  
    ]  
}
```

**Note**: The RTE does not provide styling for tables, such as borders, padding, or alignment. Developers must manage the table presentation on the frontend.

### Applying Custom Styles

To ensure your table appears properly formatted on the frontend, you can use CSS to style the table. Below is a sample CSS snippet to apply basic borders and padding to your tables.

```
table {  
  width: 100%;  
  border-collapse: collapse;  
}  
  
td, th {  
  border: 1px solid #ddd;  
  padding: 8px;  
}  
  
tr:nth-child(even) {  
  background-color: #f2f2f2;  
}  
  
th {  
  background-color: #4CAF50;  
  color: white;  
  text-align: left;  
}
```

### Key Considerations

* **Table Borders and Styles**: The JSON RTE only delivers the table structure; all styling (e.g., borders, padding, and background colors) must be applied through CSS in your frontend.
* **Responsiveness**: Ensure your tables are responsive for smaller screen sizes by adding CSS rules or wrapping tables in a scrollable container.
* **Performance**: Avoid rendering large tables directly on the client side. If dealing with a large dataset, consider pagination or lazy loading.

Tables in Contentstack's JSON RTE provide a structured way to organize data. By applying CSS and rendering JSON data correctly, developers can create well-styled, responsive tables suited for various use cases.

## Common questions
### What is covered in [JSON RTE] - Tables?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [JSON RTE] - Tables?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
