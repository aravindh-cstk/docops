---
title: "HTML RTE vs JSON RTE"
description: "Compare HTML RTE and JSON RTE in Contentstack to choose between flexible structured storage or traditional HTML-based content editing."
url: /headless-cms/html-rte-vs-json-rte
---

# HTML RTE vs JSON RTE

## HTML RTE vs JSON RTE

JSON RTE stores content in a structured plain-text format, allowing it to be read and processed by various programming languages. In contrast, HTML RTE stores content exclusively as HTML markup, which may reduce interoperability and flexibility across platforms.

## Code Representation

The following examples illustrate the differences between content storage in HTML RTE and JSON RTE as displayed in the source code viewer:

**HTML RTE:**

```
<p>This RTE is amazing.</p>
```

**JSON RTE:**

```
{
  "json_rte": {
    "type": "doc",
    "attrs": {},
    "uid": "a52aa19f3af54a61a32f1724831dc084",
    "children": [
      {
        "type": "p",
        "attrs": {},
        "uid": "c0a9f4affcef4409b3d23857d35f863b",
        "children": [
          { "text": "This RTE is " },
          { "text": "amazing", "bold": true },
          { "text": "." }
        ]
      }
    ]
  }
}
```

## HTML RTE vs JSON RTE

Unlike the HTML RTE, the JSON RTE does not include a source code viewer, simplifying content creation and minimizing the potential for coding errors.

![Comparison of HTML RTE and JSON RTE UI](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9dc4cea7c12b0c99/6819d17ca6dd344410227d6a/1._difference_image.png)

## Comparison Between HTML RTE and JSON RTE

| Feature | HTML RTE | JSON RTE |
| --- | --- | --- |
| Content Storage | Stores content as HTML markup | Stores content as structured JSON blocks |
| Editing Environment | Includes an HTML source code viewer | Does not include an HTML source code viewer |
| Flexibility | Limited to HTML; less adaptable across frameworks | Highly flexible; integrates with multiple frameworks |
| Developer Interaction | Requires direct manipulation of HTML elements | Enables modular handling of content through JSON |
| Content Reusability | Limited by rigid HTML structure | Content is modular and highly reusable |
| Error Management | Higher risk of manual coding errors | Reduced errors through controlled, structure-based editing |
| Audience Suitability | Best suited for users familiar with HTML coding | Suitable for both technical and non-technical users |
