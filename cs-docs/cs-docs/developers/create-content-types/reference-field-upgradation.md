---
title: "[Set Up Your Project] - Reference Field Upgradation"
description: Reference Field Upgradation for the Reference field, including schema changes, publishing requirements, and limitations.
url: https://www.contentstack.com/docs/developers/create-content-types/reference-field-upgradation
product: Set Up Your Project
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2019-07-29
---

# [Set Up Your Project] - Reference Field Upgradation

This page explains the Reference Field Upgradation introduced on 29th July 2019, including what changed for stacks created before/after that date, how the input format changes, and what to do after upgrading/downgrading. It is intended for developers updating content type schemas and working with Reference fields in entries.

## Reference Field Upgradation

On 29th July 2019, we introduced a new version of the [**Reference**](/docs/developers/create-content-types/reference) field that provides referencing to multiple [content types](/docs/developers/create-content-types/about-content-types). Here's what changed:
- For [stacks](/docs/developers/set-up-stack/about-stack) **created after 29th July 2019**, you will automatically be using the upgraded Reference field.
- For stacks **created before 29th July 2019**, your Reference field will continue referencing a single content type, but you can upgrade to the new version by updating the schema of your Reference field (shown in table below) in your content type.

When you upgrade your Reference field, the input format of your Reference field changes from *array of strings* to *array of objects*. The change in the format of the Reference field is as follows:

OLDNEW

```
{
  ...
    "ref_field": ["blt33a3333333df3c33",...]
  ...
}

```

```
{
  ...
    "ref_field": [{
```

## Publish Entry

After upgrading/downgrading the Reference field, you need to save the entry and then publish it to see the field in action.

## Limitations

- The max number of content types that can be added into a single Reference field is **50**.
- The max number of entries that can be added in a multiple content type Reference field is **200**.
- The "include reference" depth for multiple content type Reference field is **3**.

## Common questions

**Q: Which stacks automatically use the upgraded Reference field?**  
A: For [stacks](/docs/developers/set-up-stack/about-stack) **created after 29th July 2019**, you will automatically be using the upgraded Reference field.

**Q: What changes in the input format when upgrading the Reference field?**  
A: The input format changes from *array of strings* to *array of objects*.

**Q: Do I need to publish entries after upgrading/downgrading the Reference field?**  
A: Yes. After upgrading/downgrading the Reference field, you need to save the entry and then publish it to see the field in action.

**Q: What are the limitations for multiple content type Reference fields?**  
A: The max number of content types is **50**, the max number of entries is **200**, and the "include reference" depth is **3**.