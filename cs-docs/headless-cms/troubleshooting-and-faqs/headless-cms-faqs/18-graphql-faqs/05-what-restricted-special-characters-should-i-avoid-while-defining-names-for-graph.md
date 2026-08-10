---
title: "What restricted special characters should I avoid while defining names for GraphQL entities such as content types, fields, etc.?"
description: "What restricted special characters should I avoid while defining names for GraphQL entities such as content types, fields, etc.?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/18-graphql-faqs/05-what-restricted-special-characters-should-i-avoid-while-defining-names-for-graph
doc_type: faq
_cms_section_uid: csc612b9bb46be2d6d
_cms_faq_uid: csc206a3552fde3623
---

# What restricted special characters should I avoid while defining names for GraphQL entities such as content types, fields, etc.?

In Contentstack's GraphQL documents, you assign names to several entities, such as operations, content types, fields, variables, and fragments. All the GraphQL names you define must follow the same grammatical form of /\[\_A-Za-z\]\[\_0-9A-Za-z\]\*/.

**Additional Resource**: You can refer to the GraphQL documentation to learn more about the [naming specifications](https://spec.graphql.org/June2018/#sec-Names).

The aforementioned naming convention means if you have a content type name that starts with a number, it will end up throwing the following error:

```
{
  "errors": [
    {
      "message": "Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "{content_type_name}" does not."
    },
    ...
  ]
}
```

**Tip**: To prevent typename collisions, you can avoid using special characters while naming content types or fields.
