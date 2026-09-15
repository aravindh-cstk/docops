---
title: "Section Compositions in the API"
description: "A section composition is a reusable block bound to a content type through linkedschemas."
url: /studio/section-compositions-api
uid: bltccf943f62855bf44
---

# Section Compositions in the API

## Section compositions

A section composition is a reusable block bound to a content type through linked\_schemas. It has no URL of its own. A template places it (place\_composition\_as: "section"). It is one of the two composition types (the other is a [template composition](/docs/studio/template-compositions-api)).

This page is the API reference for **creating section composition entries**: worked cases, each with its JSON. For the concepts and the Studio UI walkthrough, read [Sections](/docs/studio/build-and-use-sections). For the create call, authentication, and zlib encoding, see [Create compositions via the API](/docs/studio/create-compositions-via-the-api).

The ui tree is built from the shared [building blocks](/docs/studio/composition-building-blocks). Every block (single value, value sources, repeater, condition block, groups, reference, modular blocks, registered component) and mechanic (section slot, binding override, exposed prop), plus the prop and node type reference, is documented there. The cases below reference it rather than repeating it.

## Section entry shape

A section sets place\_composition\_as: "section", a ui whose root is a page node, and a linked\_schemas entry declaring its **scope**, the content-type field it binds against:

```
{
  "place_composition_as": "section",
  "linked_schemas": [{ "content_type_uid": "ct1", "selected_field": "reference_to_ct2" }],
  "ui": {
    "type": "page",
    "slots": { "root": [ /* building blocks go here */ ] }
  }
}
```

selected\_field is a field name, or a dotted path into a nested field ("group1.inner\_group", Case 12). Omit it and the section binds the whole connected entry (Cases 1, 10).

A template places a section with a section-composition node, where compositionUID is the section's **Content Management API (CMA) entry uid** (not its composable\_uid):

```
{ "type": "section-composition", "metadata": { "compositionUID": "<section entry uid>" } }
```

That plain embed is all most cases need on the template side. A case shows the template only when it does something more: fills a slot, applies an override.

> **About the JSON.** Examples are trimmed for readability: empty attrs/metadata/styles, the auto-generated \_metadata, and metadata.mode: "preview" are omitted. Real specs need mode: "preview" on every [Repeater](/docs/studio/composition-building-blocks#repeater) and use 15-char nanoid uids. Short uids like rep1 or slot1 are placeholders. What matters is that a repeaterUID, or a slot key on an embed, **matches the referenced node's uid exactly**. The enclosing Repeater's own uid is elided where a child's "repeaterUID": "rep1" already identifies it.

## Data sources

A section uses the same [value sources](/docs/studio/composition-building-blocks#value-sources) as any composition, with two section-specific traits:

-   Its template source resolves against the **linked-schema scope**, which can span **multiple** content types (linked\_schemas is an array) and be narrowed by selected\_field:

    ```
    "linked_schemas": [
      { "content_type_uid": "blog_post", "selected_field": "sections" },
      { "content_type_uid": "landing_page", "selected_field": "sections" }
    ]
    ```

-   Its own pinned entries and queries (data\_sources) **travel with the section**. They resolve wherever a template embeds it.

Full matrix: [Data-source availability by composition](/docs/studio/composition-building-blocks#data-source-availability-by-composition).

## How to read the cases below

If this is your first Section, you don't need to read all 14 cases. Read Cases 1, 2, 6, and 10 in that order. That's the arc:

-   **Case 1**: standard Section bound to a whole content type. Uses template binding + built-in components. The "hello world" of Sections.
-   **Case 2**: a Section that leaves a section-slot placeholder for the Template to fill. Introduces the loose-coupling shape.
-   **Case 6**: a Section over a Modular Block. Introduces Repeater + Condition Block per block-type + Binding Override on the Template side.
-   **Case 10**: same as Case 1 but rendering YOUR registered component (<SimpleCard>) instead of a built-in text node.

Every case follows the same layout:

1.  **What it is**: one line.
2.  **What blocks it uses**: links back to [building-blocks.md](/docs/studio/composition-building-blocks).
3.  **Section JSON**: the composition entry's shape (linked\_schemas, data\_sources, and the ui tree).
4.  **Template JSON** (only when it does something beyond a plain embed: fills a slot, applies an override).
5.  **What renders**: one line describing the runtime behaviour.

You should be able to lift each JSON verbatim, swap CT / field / component names, and have a working spec. When something inside a case looks unfamiliar (a value source, a Repeater key, a Condition Block condition), go back to [building-blocks.md](/docs/studio/composition-building-blocks). Every block is defined once there.

## List Sections vs Simple Sections

A section is one of two kinds by shape:

-   **List Section**: has a **Repeater at the root of its ui**. Used when linked\_schemas.selected\_field is an **iterable field**: a **reference field**, a **modular blocks field**, or a **group with multiple: true**. The Repeater walks the N items (referenced entries, MB rows, or group rows) and (for the first two) typically pairs with one Condition Block per matched type. The runtime never resolves template.<name> against an item outside this Repeater, even when a reference is single-cardinality.
-   **Simple Section**: no root Repeater. Used when the scope is a single entity: whole content type, single group, global field, or a single MB row / referenced entry / group row passed in from a wrapping List Section.

Any composition that iterates references, modular blocks, or group-multiple fields always involves at least one List Section. Two authoring shapes cover the two most common cases:

**Pattern A: self-contained List Section** (Case 5 for group-multiple, Case 6 for MB, Case 7 for references). One List Section carries the whole shape: linked\_schemas.selected\_field: <iterable field> + Repeater(items.path: {}) + (for MB / references) one CB per block-type or referenced CT + the leaf content bound via type: "repeater". Zero indirection. The template embeds it.

**Pattern B: List Section + Simple Section per branch** (Case 8 for references, Case 9 for MB, Case 2 for the ref+slot fill). Two sections cooperate:

-   **List Section (wrapper)**: has linked\_schemas.selected\_field: <iterable field> + Repeater + (for MB / references) CB per matched type + a **section-slot** as the leaf of each branch (empty).
-   **Simple Section (per branch)**: plain section linked directly to the target CT / MB inner block CT / group, no Repeater. Its bindings resolve against the current item the List Section's Repeater passes down.
-   **Template** places the List Section, then fills each section-slot with a section-composition pointing at the corresponding Simple Section (one per branch).

For **references**, both patterns require data\_sources to declare the reference so the Content Delivery API (CDA) hydrates it:

```
"data_sources": [
  { "uid": "template", "resolvedReferences": { "template": ["<reference_field>"] } }
]
```

Modular blocks don't need resolvedReferences. The block rows are already embedded in the connected entry.

## Cases

| # | Case | Blocks used | Template does |
| --- | --- | --- | --- |
| 1 | Standard section | Single value, Value sources, Repeater | plain embed |
| 2 | Section slot (with reference) | Reference, Section slot | fills a slot with a component |
| 3 | Section for a global field | Groups and global fields | plain embed |
| 4 | Section for a single-type group | Single value / Groups | plain embed |
| 5 | Section for a group-multiple | Groups and global fields, Repeater | plain embed |
| 6 | Modular blocks | Modular blocks | binding override (sibling) |
| 7 | References | Reference | plain embed |
| 8 | Reference wrapper | Reference, Section slot | fills slots with sections |
| 9 | Modular-block wrapper | Modular blocks, Section slot | fills slots with sections |
| 10 | Standard section w/ registered component | Registered component | plain embed |
| 11 | Wrapper slot + registered component | Groups, Section slot, Registered component | fills a slot with a component |
| 12 | Inner nested group | Groups, Repeater, Binding override | outer repeater + override |
| 13 | Inner nested modular block | Modular blocks, Repeater, Binding override | outer repeater + override |
| 14 | Exposed section prop | Registered component, Exposed section prop | overrides the prop per instance |

---

## Case 1: Standard section

Blocks: [Single value](/docs/studio/composition-building-blocks#single-value), [Value sources](/docs/studio/composition-building-blocks#value-sources), [Repeater](/docs/studio/composition-building-blocks#repeater).

Linked to a whole content type (ct1), built from Studio's built-in components. It uses every value source at once. The pinned entry and the query must be declared in data\_sources before a binding can point at them.

![Standard section as nested containers: a page with a header and a text, plus a box whose repeater loops a query and renders a text per result.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am014dea0b089c62fe/662001d4b52b69fe0f838803/api-standard-section-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "ct1" }],
  "data_sources": [
    {
      "uid": "contentstack",
      "data": [{ "uid": "blt8cdca5…", "_content_type_uid": "version2" }]
    },
    {
      "uid": "contentstack_queries",
      "data": [
        {
          "uid": "query-1",
          "name": "Query 1",
          "spec": {
            "contentType": "author",
            "sourceType": "content_type",
            "query": {},
            "params": { "limit": 10, "skip": 0, "desc": "created_at" }
          }
        }
      ]
    }
  ],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        // header: title from the PINNED entry; Tag from a static value
        {
          "type": "header",
          "props": {
            "text": {
              "type": "plaintext",
              "binding": {
                "type": "contentstack",
                "value": {
                  "uid": "blt8cdca5…",
                  "_content_type_uid": "version2",
                  "path": { "title": {} }
                }
              }
            },
            "Tag": {
              "type": "choice",
              "binding": { "type": "static_value", "value": "Featured" }
            }
          }
        },
        // text from the connected entry (the {{entry.title}} equivalent)
        {
          "type": "text",
          "props": {
            "text": {
              "type": "plaintext",
              "binding": { "type": "template", "value": { "path": { "title": {} } } }
            }
          }
        },
        // a repeater over the QUERY, wrapped in a box; each row reads the item via `repeater`
        {
          "type": "box",
          "metadata": { "repeaterWrapper": true },
          "props": { "children": { "type": "slot", "slot": "b" } },
          "slots": {
            "b": [
              {
                "uid": "rep1",
                "type": "repeater",
                "props": {
                  "items": {
                    "type": "array",
                    "binding": {
                      "type": "contentstack_queries",
                      "value": { "queryUID": "query-1", "path": { "entries": {} } }
                    }
                  },
                  "children": { "type": "slot", "slot": "r" }
                },
                "slots": {
                  "r": [
                    {
                      "type": "text",
                      "props": {
                        "text": {
                          "type": "plaintext",
                          "binding": {
                            "type": "repeater",
                            "value": { "repeaterUID": "rep1", "path": { "title": {} } }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

The header's title comes from the pinned entry, its Tag from a static value. The text below binds the connected entry. The repeater walks the query (Studio wraps a repeater in a box flagged repeaterWrapper) and each row reads the current item via repeater.

**In a template:** a plain embed connected to ct1.

---

## Case 2: Section slot (with reference)

Blocks: [Reference](/docs/studio/composition-building-blocks#reference) + [Section slot](/docs/studio/composition-building-blocks#section-slot).

A section linked to a reference field walks the referenced entries and, inside the matching branch, leaves a section-slot open for the template to fill.

![Section-slot case as nested containers: page then repeater over the reference, then condition-block for ct2, then box, then an empty section-slot the template fills.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2da0088281ca8584/2b471da8793c2aba3c8466b7/api-section-slot-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "ct1", "selected_field": "reference_to_ct2" }],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "uid": "rep1",
          "type": "repeater",
          "metadata": { "repeaterBindingFieldType": "reference" },
          "props": {
            "items": {
              "type": "array",
              "binding": { "type": "template", "value": { "path": {} } }
            },
            "children": { "type": "slot", "slot": "r" }
          },
          "slots": {
            "r": [
              {
                "type": "condition-block",
                "metadata": {
                  "condition": {
                    "type": "reference",
                    "operator": "eq",
                    "value": "ct2",
                    "conditionBinding": {
                      "type": "repeater",
                      "value": { "repeaterUID": "rep1", "path": { "_content_type_uid": {} } }
                    }
                  }
                },
                "props": { "children": { "type": "slot", "slot": "c" } },
                "slots": {
                  "c": [
                    {
                      "type": "box",
                      "props": { "children": { "type": "slot", "slot": "b" } },
                      "slots": {
                        "b": [
                          {
                            "uid": "slot1",
                            "type": "section-slot",
                            "props": {
                              "label": {
                                "type": "string",
                                "binding": { "type": "static_value", "value": "ct2 content" }
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

**In a template:** the embed fills the slot (keyed by the section-slot's uid) with a component that binds into the section's own repeater scope, so the component repeats along with the section:

![Template side of the section-slot case: a section-composition embeds the section and fills slot1 with a text bound into the section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc2495e79911fba83/00ef3dcbce14db47ba1057c0/api-section-slot-template-tree.png)

```
{
  "type": "section-composition",
  "metadata": { "compositionUID": "<section entry uid>" },
  "slots": {
    "slot1": [
      {
        "type": "text",
        "props": {
          "text": {
            "type": "plaintext",
            "binding": {
              "type": "repeater",
              "value": { "repeaterUID": "<section's repeater uid>", "path": { "title": {} } }
            }
          }
        }
      }
    ]
  }
}
```

The slot is filled with a component (a built-in text). In Case 8 a slot is filled with a whole section.

---

## Case 3: Section for a global field

Blocks: [Groups and global fields](/docs/studio/composition-building-blocks#groups-and-global-fields).

A global field behaves like a group, so this section iterates the linked global field and reads an inner field per row.

![Global-field case as nested containers: a page with a repeater that loops the linked global field and a text reading an inner field per row.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1aba52df781912c2/031c0aa352b529c40a21183d/api-group-loop-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "ct1", "selected_field": "global_field" }],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "uid": "rep1",
          "type": "repeater",
          "props": {
            "items": {
              "type": "array",
              "binding": { "type": "template", "value": { "path": {} } }
            },
            "children": { "type": "slot", "slot": "r" }
          },
          "slots": {
            "r": [
              {
                "type": "text",
                "props": {
                  "text": {
                    "type": "plaintext",
                    "binding": {
                      "type": "repeater",
                      "value": { "repeaterUID": "rep1", "path": { "single_line": {} } }
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

Structurally identical to iterating a multiple group (Case 5). **In a template:** a plain embed connected to ct1.

---

## Case 4: Section for a single-type group

Blocks: [Single value](/docs/studio/composition-building-blocks#single-value) / [Groups and global fields](/docs/studio/composition-building-blocks#groups-and-global-fields).

A single group holds one instance (nothing to loop over) so bind its inner fields directly.

```
{
  "linked_schemas": [{ "content_type_uid": "price_range", "selected_field": "group_single" }],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "type": "text",
          "props": {
            "text": {
              "type": "plaintext",
              "binding": { "type": "template", "value": { "path": { "textbox": {} } } }
            }
          }
        }
      ]
    }
  }
}
```

A single group binds directly. A multiple group repeats (Case 5). **In a template:** a plain embed connected to price\_range (its URL uses a user\_specified\_pattern, /url/grp/{{entry.title}}).

---

## Case 5: Section for a group-multiple

Blocks: [Groups and global fields](/docs/studio/composition-building-blocks#groups-and-global-fields), [Repeater](/docs/studio/composition-building-blocks#repeater).

Same as Case 4, but the group repeats, so the Repeater comes back.

![Group-multiple case as nested containers: a page with a repeater that loops the group and a text reading an inner field per row.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1aba52df781912c2/031c0aa352b529c40a21183d/api-group-loop-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "price_range", "selected_field": "group1" }],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "uid": "rep1",
          "type": "repeater",
          "props": {
            "items": {
              "type": "array",
              "binding": { "type": "template", "value": { "path": {} } }
            },
            "children": { "type": "slot", "slot": "r" }
          },
          "slots": {
            "r": [
              {
                "type": "text",
                "props": {
                  "text": {
                    "type": "plaintext",
                    "binding": {
                      "type": "repeater",
                      "value": { "repeaterUID": "rep1", "path": { "single_line": {} } }
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

**In a template:** a plain embed connected to price\_range (URL /url/multi/{{entry.title}}).

---

## Case 6: Modular blocks

Blocks: [Modular blocks](/docs/studio/composition-building-blocks#modular-blocks) + [Binding override](/docs/studio/composition-building-blocks#binding-override) on the template.

Loop the modular-blocks field. One Condition block per block type. One shown in full:

![Modular-blocks case as nested containers: page then repeater over the modular-blocks field, then condition-block for block1, then a text reading an inner field.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am825192ad277c7b7e/7fb8ecd817190f1e783228ed/api-modular-blocks-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "price_range", "selected_field": "modular_blocks" }],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "uid": "rep1",
          "type": "repeater",
          "metadata": { "repeaterBindingFieldType": "modular_block" },
          "props": {
            "items": {
              "type": "array",
              "binding": { "type": "template", "value": { "path": {} } }
            },
            "children": { "type": "slot", "slot": "r" }
          },
          "slots": {
            "r": [
              {
                "type": "condition-block",
                "metadata": {
                  "condition": {
                    "type": "modular_block",
                    "operator": "eq",
                    "value": "block1",
                    "conditionBinding": {
                      "type": "repeater",
                      "value": {
                        "repeaterUID": "rep1",
                        "content_type_uid": "price_range",
                        "selected_field": "modular_blocks",
                        "path": { "block1": {} }
                      }
                    },
                    "dataBinding": {
                      "type": "repeater",
                      "value": { "repeaterUID": "rep1", "path": { "block1": {} } }
                    }
                  }
                },
                "props": { "children": { "type": "slot", "slot": "c" } },
                "slots": {
                  "c": [
                    {
                      "type": "text",
                      "props": {
                        "text": {
                          "type": "plaintext",
                          "binding": {
                            "type": "repeater",
                            "value": { "repeaterUID": "rep1", "path": { "single_line": {} } }
                          }
                        }
                      }
                    }
                  ]
                }
              }
              // + one Condition block per additional block type (e.g. gf_block) — same shape, different value + path key
            ]
          }
        }
      ]
    }
  }
}
```

**In a template:** the embed uses a [binding override](/docs/studio/composition-building-blocks#binding-override) to point the section at the matching field of the template's own content type:

![Template side of the modular-blocks case: a section-composition embeds the section with a binding override repointing it to the sibling modular-blocks field.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am61127727bf64d8cb/03391ec0ec138b412e3cab04/api-modular-blocks-template-tree.png)

```
{
  "type": "section-composition",
  "metadata": {
    "compositionUID": "<section entry uid>",
    "sectionBindingOverride": {
      "selectedField": "price_range_modular_blocks",
      "uidRemapping": {}
    }
  }
}
```

This is the simplest override: repoint to a sibling field of the page CT. Cases 12/13 use the harder inner-narrow form.

---

## Case 7: References

Blocks: [Reference](/docs/studio/composition-building-blocks#reference).

A section linked to a reference field walks the referenced entries and renders each one itself. The Repeater iterates the linked field, a Condition block keeps the ct2 entries, and a text reads the referenced entry's title through the repeater scope.

![References case as nested containers: page then repeater over the reference, then condition-block for ct2, then a text reading the matched entry via the repeater scope.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2823a780c352334b/cbaf4eeaab7a76daf5d0006c/api-references-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "ct1", "selected_field": "reference_to_ct2" }],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "uid": "rep1",
          "type": "repeater",
          "metadata": { "repeaterBindingFieldType": "reference" },
          "props": {
            "items": {
              "type": "array",
              "binding": { "type": "template", "value": { "path": {} } }
            },
            "children": { "type": "slot", "slot": "r" }
          },
          "slots": {
            "r": [
              {
                "type": "condition-block",
                "metadata": {
                  "condition": {
                    "type": "reference",
                    "operator": "eq",
                    "value": "ct2",
                    "conditionBinding": {
                      "type": "repeater",
                      "value": { "repeaterUID": "rep1", "path": { "_content_type_uid": {} } }
                    }
                  }
                },
                "props": { "children": { "type": "slot", "slot": "c" } },
                "slots": {
                  "c": [
                    {
                      "type": "text",
                      "props": {
                        "text": {
                          "type": "plaintext",
                          "binding": {
                            "type": "repeater",
                            "value": { "repeaterUID": "rep1", "path": { "title": {} } }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

The only difference from Case 2 is what goes in the innermost slot: a text here, a section-slot there. **In a template:** a plain embed connected to ct1.

---

## Case 8: Reference wrapper

Blocks: Case 7's skeleton + [Section slot](/docs/studio/composition-building-blocks#section-slot).

Case 8 is Case 7's skeleton (a Repeater over the reference, a Condition block per CT) but instead of rendering the entry itself, each branch leaves a section-slot open, one per referenced type. The section becomes a wrapper that controls structure but defers the content to the template.

![Reference-wrapper case as nested containers: a repeater over the reference holds two condition-block branches (ct2, ct3), each exposing an empty section-slot.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfb8ada3ef66fc480/0397bba291e23ad270978cc7/api-reference-wrapper-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "ct1", "selected_field": "reference_to_ct2_and_ct3" }],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "uid": "rep1",
          "type": "repeater",
          "metadata": { "repeaterBindingFieldType": "reference" },
          "props": {
            "items": {
              "type": "array",
              "binding": { "type": "template", "value": { "path": {} } }
            },
            "children": { "type": "slot", "slot": "r" }
          },
          "slots": {
            "r": [
              {
                "type": "condition-block",
                "metadata": {
                  "condition": {
                    "type": "reference",
                    "operator": "eq",
                    "value": "ct2",
                    "conditionBinding": {
                      "type": "repeater",
                      "value": { "repeaterUID": "rep1", "path": { "_content_type_uid": {} } }
                    }
                  }
                },
                "props": { "children": { "type": "slot", "slot": "c" } },
                "slots": {
                  "c": [
                    {
                      "uid": "slot_ct2",
                      "type": "section-slot",
                      "props": {
                        "label": {
                          "type": "string",
                          "binding": { "type": "static_value", "value": "ct2 content" }
                        }
                      }
                    }
                  ]
                }
              }
              // + a Condition block for "ct3" — same shape; see the per-branch table below
            ]
          }
        }
      ]
    }
  }
}
```

One Condition block per referenced type. Only two tokens change between them:

| Referenced type | condition.value | Section-slot uid |
| --- | --- | --- |
| ct2 | "ct2" | slot\_ct2 |
| ct3 | "ct3" | slot\_ct3 |

**In a template:** embed the wrapper, then fill each slot (keyed by the section-slot's uid) with another section-composition pointing at a per-type "slot section":

![Template side of the reference wrapper: a section-composition embeds the wrapper and fills slot_ct2 and slot_ct3 each with another section-composition (per-type slot-section).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8d32da185b73b2e9/9826aee3e5de6a5128d675bc/api-reference-wrapper-template-tree.png)

```
{
  "connected_content_type": "ct1",
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "type": "section-composition",
          "metadata": { "compositionUID": "<wrapper section entry uid>" },
          "slots": {
            "slot_ct2": [
              {
                "type": "section-composition",
                "metadata": { "compositionUID": "<ct2 slot-section entry uid>" }
              }
            ],
            "slot_ct3": [
              {
                "type": "section-composition",
                "metadata": { "compositionUID": "<ct3 slot-section entry uid>" }
              }
            ]
          }
        }
      ]
    }
  }
}
```

Each per-type "slot section" is an ordinary section linked directly to that CT (ct2 / ct3). It binds its fields with plain template bindings, and the wrapper's iteration hands it the current referenced entry as its scope.

---

## Case 9: Modular-block wrapper

Blocks: Case 8's wrapper pattern, over a modular-blocks field instead of a reference.

Case 9 is Case 8's wrapper with the source field swapped. The Repeater's repeaterBindingFieldType is "modular\_block", and each Condition block matches a block uid (condition.type: "modular\_block") and carries a dataBinding (see [Condition block](/docs/studio/composition-building-blocks#condition-block)). Everything else (one slot per branch, the template filling each with a per-type section) is exactly Case 8. One Condition block shown in full:

![Modular-block wrapper case as nested containers: a repeater over the modular-blocks field holds a condition-block per block type, each exposing an empty section-slot.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am611c18a8a7c2c560/8ca3051e456825722fd6fc6d/api-modular-block-wrapper-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "ct1", "selected_field": "modular_blocks" }],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "uid": "rep1",
          "type": "repeater",
          "metadata": { "repeaterBindingFieldType": "modular_block" },
          "props": {
            "items": {
              "type": "array",
              "binding": { "type": "template", "value": { "path": {} } }
            },
            "children": { "type": "slot", "slot": "r" }
          },
          "slots": {
            "r": [
              {
                "type": "condition-block",
                "metadata": {
                  "condition": {
                    "type": "modular_block",
                    "operator": "eq",
                    "value": "gf_block",
                    "conditionBinding": {
                      "type": "repeater",
                      "value": {
                        "repeaterUID": "rep1",
                        "content_type_uid": "ct1",
                        "selected_field": "modular_blocks",
                        "path": { "gf_block": {} }
                      }
                    },
                    "dataBinding": {
                      "type": "repeater",
                      "value": { "repeaterUID": "rep1", "path": { "gf_block": {} } }
                    }
                  }
                },
                "slots": {
                  "c": [
                    {
                      "uid": "slot_gf",
                      "type": "section-slot",
                      "props": {
                        "label": {
                          "type": "string",
                          "binding": { "type": "static_value", "value": "gf_block content" }
                        }
                      }
                    }
                  ]
                }
              }
              // + a Condition block for "hero_block" and "ref_block" — same shape; see the table below
            ]
          }
        }
      ]
    }
  }
}
```

One Condition block per block type. The tokens that change:

| Block type | condition.value | path key (in conditionBinding + dataBinding) | Section-slot uid |
| --- | --- | --- | --- |
| gf\_block | "gf\_block" | gf\_block | slot\_gf |
| hero\_block | "hero\_block" | hero\_block | slot\_hero |
| ref\_block | "ref\_block" | ref\_block | slot\_ref |

**In a template:** identical to Case 8. Embed the wrapper, fill each slot with a per-block section:

![Template side of the modular-block wrapper: a section-composition embeds the wrapper and fills slot_gf, slot_hero (and slot_ref) each with a per-block section-composition.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am08fb3c2873b9777c/f731f93800a836f28103d8b6/api-modular-block-wrapper-template-tree.png)

```
{
  "connected_content_type": "ct1",
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "type": "section-composition",
          "metadata": { "compositionUID": "<wrapper section entry uid>" },
          "slots": {
            "slot_gf": [
              {
                "type": "section-composition",
                "metadata": { "compositionUID": "<gf_block slot-section entry uid>" }
              }
            ],
            "slot_hero": [
              {
                "type": "section-composition",
                "metadata": { "compositionUID": "<hero_block slot-section entry uid>" }
              }
            ],
            "slot_ref": [
              {
                "type": "section-composition",
                "metadata": { "compositionUID": "<ref_block slot-section entry uid>" }
              }
            ]
          }
        }
      ]
    }
  }
}
```

---

## Case 10: Standard section with a registered component

Blocks: [Registered component](/docs/studio/composition-building-blocks#registered-component).

Same spirit as Case 1, but it renders a registered component instead of built-ins. Linked to the whole content type (no selected\_field), so its props read straight off the connected entry.

![Registered-component case as nested containers: a page holding the registered simple-card, its text and buttonLabel props bound to the connected entry (buttonLabel via a dotted path).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb6a24daa18242f5e/5c333f42ce7d218ab26441fd/api-registered-component-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "price_range" }],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "type": "simple-card",
          "props": {
            "text": {
              "type": "string",
              "binding": { "type": "template", "value": { "path": { "title": {} } } }
            },
            "buttonLabel": {
              "type": "string",
              "binding": {
                "type": "template",
                "value": { "path": { "global_field_for_repeater.single_line": {} } }
              }
            }
          }
        }
      ]
    }
  }
}
```

The node type is the component's registered name (simple-card). buttonLabel uses a dotted path to reach a nested field. **In a template:** a plain embed connected to price\_range.

---

## Case 11: Wrapper with a slot, filled by a registered component

Blocks: [Groups and global fields](/docs/studio/composition-building-blocks#groups-and-global-fields) + [Section slot](/docs/studio/composition-building-blocks#section-slot) + [Registered component](/docs/studio/composition-building-blocks#registered-component) (on the template).

A wrapper section repeats a group and exposes a section-slot per pass. The template drops a registered component into that slot, wired to the section's repeater.

![Wrapper-with-slot case as nested containers: page then repeater over group1, then box, then an empty section-slot the template fills with simple-card.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaf3eb88d45a55b83/8f9e3fe71567b7b9ad01066a/api-wrapper-component-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "price_range", "selected_field": "group1" }],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "uid": "rep1",
          "type": "repeater",
          "props": {
            "items": {
              "type": "array",
              "binding": { "type": "template", "value": { "path": {} } }
            },
            "children": { "type": "slot", "slot": "r" }
          },
          "slots": {
            "r": [
              {
                "type": "box",
                "slots": {
                  "b": [
                    {
                      "uid": "slot1",
                      "type": "section-slot",
                      "props": {
                        "label": {
                          "type": "string",
                          "binding": { "type": "static_value", "value": "card" }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

**In a template:** the slot is filled with a simple-card, its text bound into the section's iteration:

![Template side of the wrapper-with-slot case: a section-composition embeds the wrapper and fills slot1 with the registered simple-card, wired to the section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame15af0b0720edbae/ee893cb50516209b81cc6bfe/api-wrapper-component-template-tree.png)

```
{
  "type": "section-composition",
  "metadata": { "compositionUID": "<section entry uid>" },
  "slots": {
    "slot1": [
      {
        "type": "simple-card",
        "props": {
          "text": {
            "type": "string",
            "binding": {
              "type": "repeater",
              "value": { "repeaterUID": "<section repeater uid>", "path": { "single_line": {} } }
            }
          },
          "buttonLabel": {
            "type": "string",
            "binding": { "type": "static_value", "value": "Learn more" }
          }
        }
      }
    ]
  }
}
```

Same as Case 2, but the slot holds a registered component rather than a built-in. The card renders once per group instance: the section provides the loop, the template provides what goes inside it.

---

## Case 12: Inner nested group

Blocks: [Groups and global fields](/docs/studio/composition-building-blocks#groups-and-global-fields) (authored against a dotted selected\_field) + [Repeater](/docs/studio/composition-building-blocks#repeater) + [Binding override](/docs/studio/composition-building-blocks#binding-override) on the template.

The section is a plain group-multiple section (identical to Case 5's ui) with one distinction: a dotted selected\_field targeting a group nested inside another group.

![Inner nested group case (section side) as nested containers: a page with a repeater looping the group and a text reading an inner field per row.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1aba52df781912c2/031c0aa352b529c40a21183d/api-group-loop-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "price_range", "selected_field": "group1.inner_group" }],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "uid": "rep1",
          "type": "repeater",
          "props": {
            "items": {
              "type": "array",
              "binding": { "type": "template", "value": { "path": {} } }
            },
            "children": { "type": "slot", "slot": "r" }
          },
          "slots": {
            "r": [
              {
                "type": "text",
                "props": {
                  "text": {
                    "type": "plaintext",
                    "binding": {
                      "type": "repeater",
                      "value": { "repeaterUID": "rep1", "path": { "single_line": {} } }
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

**In a template, the novelty:** an outer Repeater over group1, dropping the section with a [binding override](/docs/studio/composition-building-blocks#binding-override) that narrows it to the inner leaf each iteration:

![Template side of the inner nested group: a box wraps an outer repeater over group1 that drops the section with a binding override narrowing to the inner_group leaf.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5421100d52387ed5/d8b19cce2d7f9f0e66536e60/api-inner-group-template-tree.png)

```
{
  "type": "box",
  "metadata": { "repeaterWrapper": true },
  "props": { "children": { "type": "slot", "slot": "w" } },
  "slots": {
    "w": [
      {
        "type": "repeater",
        "props": {
          "items": {
            "type": "array",
            "binding": { "type": "template", "value": { "path": { "group1": {} } } }
          },
          "children": { "type": "slot", "slot": "r" }
        },
        "slots": {
          "r": [
            {
              "type": "section-composition",
              "metadata": {
                "compositionUID": "<section entry uid>",
                "sectionBindingOverride": {
                  "selectedField": "inner_group",
                  "uidRemapping": { "single_line": "single_line" }
                }
              }
            }
          ]
        }
      }
    ]
  }
}
```

Why the outer repeater: placed plainly, group1.inner\_group resolves to only the first group1 instance (a path landing on an array takes element 0). The template iterates group1 and, per iteration, reroots the section to the leaf inner\_group via the override.

---

## Case 13: Inner nested modular block

Blocks: [Modular blocks](/docs/studio/composition-building-blocks#modular-blocks) (dotted selected\_field) + [Repeater](/docs/studio/composition-building-blocks#repeater) + [Binding override](/docs/studio/composition-building-blocks#binding-override), the modular-blocks analogue of Case 12.

A modular-blocks section (like Case 6), but the selected\_field is a three-level dotted path into a modular-blocks field nested inside a block.

![Inner nested modular-block case (section side) as nested containers: page then repeater over the modular-blocks field, then condition-block for block1, then a text.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am825192ad277c7b7e/7fb8ecd817190f1e783228ed/api-modular-blocks-tree.png)

```
{
  "linked_schemas": [
    {
      "content_type_uid": "price_range",
      "selected_field": "modular_blocks.testblock.modular_blocks_in_modular_blocks"
    }
  ],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "uid": "rep1",
          "type": "repeater",
          "metadata": { "repeaterBindingFieldType": "modular_block" },
          "props": {
            "items": {
              "type": "array",
              "binding": { "type": "template", "value": { "path": {} } }
            },
            "children": { "type": "slot", "slot": "r" }
          },
          "slots": {
            "r": [
              {
                "type": "condition-block",
                "metadata": {
                  "condition": {
                    "type": "modular_block",
                    "operator": "eq",
                    "value": "block1",
                    "conditionBinding": {
                      "type": "repeater",
                      "value": {
                        "repeaterUID": "rep1",
                        "content_type_uid": "price_range",
                        "selected_field": "modular_blocks.testblock.modular_blocks_in_modular_blocks",
                        "path": { "block1": {} }
                      }
                    },
                    "dataBinding": {
                      "type": "repeater",
                      "value": { "repeaterUID": "rep1", "path": { "block1": {} } }
                    }
                  }
                },
                "slots": {
                  "c": [
                    {
                      "type": "text",
                      "props": {
                        "text": {
                          "type": "plaintext",
                          "binding": {
                            "type": "repeater",
                            "value": { "repeaterUID": "rep1", "path": { "single_line": {} } }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

**In a template:** an outer Repeater over the outer modular\_blocks, a Condition block for the testblock type, and inside it the section dropped with an override narrowing to the inner field:

![Template side of the inner nested modular block: a box wraps an outer repeater over modular_blocks with a testblock condition-block that drops the section with an override to the inner modular_blocks_in_modular_blocks field.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am05a7e6c1bf863358/54f0300c9d3926b9c0c483a1/api-inner-modular-template-tree.png)

```
{
  "type": "box",
  "metadata": { "repeaterWrapper": true },
  "props": { "children": { "type": "slot", "slot": "w" } },
  "slots": {
    "w": [
      {
        "uid": "rep-outer",
        "type": "repeater",
        "metadata": { "repeaterBindingFieldType": "modular_block" },
        "props": {
          "items": {
            "type": "array",
            "binding": { "type": "template", "value": { "path": { "modular_blocks": {} } } }
          },
          "children": { "type": "slot", "slot": "r" }
        },
        "slots": {
          "r": [
            // (a plain "block1" Condition block renders directly — omitted); the "testblock" branch drops the inner section:
            {
              "type": "condition-block",
              "metadata": {
                "condition": {
                  "type": "modular_block",
                  "operator": "eq",
                  "value": "testblock",
                  "conditionBinding": {
                    "type": "repeater",
                    "value": { "repeaterUID": "rep-outer", "path": { "testblock": {} } }
                  },
                  "dataBinding": {
                    "type": "repeater",
                    "value": { "repeaterUID": "rep-outer", "path": { "testblock": {} } }
                  }
                }
              },
              "slots": {
                "c": [
                  {
                    "type": "section-composition",
                    "metadata": {
                      "compositionUID": "<section entry uid>",
                      "sectionBindingOverride": {
                        "selectedField": "modular_blocks_in_modular_blocks",
                        "uidRemapping": {}
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
```

Same mechanism as Case 12, over modular blocks: the template iterates the outer field, and inside the testblock branch it reroots the section to the inner modular\_blocks\_in\_modular\_blocks field via the override.

---

## Case 14: Exposed section prop

Blocks: [Registered component](/docs/studio/composition-building-blocks#registered-component) + [Exposed section prop](/docs/studio/composition-building-blocks#exposed-section-prop) (on the template).

A section can mark one internal component prop as overridable per template instance. The section author exposes it via sectionExposedProps on the section root's ui.metadata. Each template that embeds the section then sets its own value. Here a simple-card's text prop (bound internally to the entry's title) is exposed as "Card Title".

![Exposed section prop, section side: a page holding the registered simple-card whose text prop binds the connected entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am37671e77f391251b/48786410ce07eee4d29f4989/api-exposed-prop-tree.png)

```
{
  "linked_schemas": [{ "content_type_uid": "price_range" }],
  "ui": {
    "type": "page",
    "metadata": {
      "sectionExposedProps": [
        {
          "nodeUid": "card1",
          "propKey": "text",
          "uid": "card_title",
          "displayName": "Card Title",
          "propType": "string",
          "bindingAtExposeTime": {
            "type": "template",
            "value": { "path": { "title": {} } }
          }
        }
      ]
    },
    "slots": {
      "root": [
        {
          "uid": "card1",
          "type": "simple-card",
          "props": {
            "text": {
              "type": "string",
              "binding": { "type": "template", "value": { "path": { "title": {} } } }
            }
          }
        }
      ]
    }
  }
}
```

sectionExposedProps lists each exposed prop: nodeUid is the internal component instance (card1), propKey is that component's own prop (text), uid is the handle the template overrides under (card\_title), and bindingAtExposeTime snapshots the internal binding at the moment of exposure. See [Exposed section prop](/docs/studio/composition-building-blocks#exposed-section-prop) for every field.

**In a template:** the embed sets the exposed prop under its uid, on the section-composition node's props (like a registered component's props). Any value source works: a static value here, or a binding to the template's own connected entry:

![Exposed section prop, template side: a section-composition embed that sets props.card_title to a static value. The override is keyed by the exposed prop](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am10870be7253cbe9b/87abee7fca485151888dbc9b/api-exposed-prop-template-tree.png)

```
{
  "type": "section-composition",
  "metadata": { "compositionUID": "<section entry uid>" },
  "props": {
    "card_title": {
      "type": "string",
      "binding": { "type": "static_value", "value": "Editor's pick" }
    }
  }
}
```

At render the runtime maps card\_title back to card1.text and builds section\_exposed\_overrides = { "card1": { "text": "Editor's pick" } }, the sole source for that prop, so the section's internal title binding is overridden for this instance.

**Per-instance overrides.** A template can drop the same section multiple times and set a different override on each. Because each section-composition node has its own uid, and by convention static-value keys embed the enclosing node's uid (<node-uid>-<propName>), each instance resolves to its own value:

```
[
  { "uid": "sc_1", "type": "section-composition",
    "metadata": { "compositionUID": "<section entry uid>" },
    "props": { "card_title": { "type": "string",
      "binding": { "type": "static_value", "value": "sc_1-card_title" } } } },
  { "uid": "sc_2", "type": "section-composition",
    "metadata": { "compositionUID": "<section entry uid>" },
    "props": { "card_title": { "type": "string",
      "binding": { "type": "static_value", "value": "sc_2-card_title" } } } }
]
```

With static\_value.string: \[ { key: "sc\_1-card\_title", value: "..." }, { key: "sc\_2-card\_title", value: "..." } \], each embed reads its own key.

---

The prop and node type reference tables live in the [building blocks](/docs/studio/composition-building-blocks#prop-value).
