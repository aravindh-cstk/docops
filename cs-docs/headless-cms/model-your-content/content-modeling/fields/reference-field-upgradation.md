---
title: "Reference Field Upgradation"
description: "Discover the upgraded Contentstack Reference field for multiple content types, enhanced with new schema formats and publishing features."
url: /headless-cms/reference-field-upgradation
---

# Reference Field Upgradation

## Reference Field Upgradation

On 29th July 2019, we introduced a new version of the [**Reference**](/docs/headless-cms/reference) field that provides referencing to multiple [content types](/docs/headless-cms/about-content-types). Here's what changed:

-   For [stacks](/docs/headless-cms/about-stack) **created after 29th July 2019**, you will automatically be using the upgraded Reference field.
-   For stacks **created before 29th July 2019**, your Reference field will continue referencing a single content type, but you can upgrade to the new version by updating the schema of your Reference field (shown in table below) in your content type.

When you upgrade your Reference field, the input format of your Reference field changes from _array of strings_ to _array of objects_. The change in the format of the Reference field is as follows:

<table><tbody><tr><td>OLD</td><td>NEW</td></tr><tr><td><pre>{
  ...
    "ref_field": ["blt33a3333333df3c33",...]
  ...
}
</pre></td><td><pre>{
  ...
    "ref_field": [{&lt;
      "uid": "blt1111fe11e111111f",
      "_content_type_uid": "footer"
    },
  ...
}</pre></td></tr></tbody></table>

## Publish Entry

After upgrading/downgrading the Reference field, you need to save the entry and then publish it to see the field in action.

## Limitations

-   The max number of content types that can be added into a single Reference field is **50**.
-   The max number of entries that can be added in a multiple content type Reference field is **200**.
-   The "include reference" depth for multiple content type Reference field is **3**.
