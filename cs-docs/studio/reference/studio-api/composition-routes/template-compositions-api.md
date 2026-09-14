---
title: "Template Compositions in the API"
description: "A template composition is a full page in Studio, addressable at a URL, one of the two composition types (the other is a section composition)."
url: /studio/template-compositions-api
---

# Template Compositions in the API

## Template compositions

A **template composition** is a full page in Studio, addressable at a URL, one of the two composition types (the other is a [section composition](/docs/studio/section-compositions-api)). It comes in two kinds:

-   **Linked**: bound to a content type (connected\_content\_type set), so one template renders every entry of that type at its own URL.
-   **Freeform**: bound to no content type (connected\_content\_type: ""). A single standalone page.

This page is the API reference for **creating template composition entries**. For the concepts and the Studio UI walkthrough, read [Templates](/docs/studio/templates-overview) and [Freeform templates](/docs/studio/freeform-templates). The create call, authentication, and zlib encoding are shared by all compositions (see [Create compositions via the API](/docs/studio/create-compositions-via-the-api)) and the ui tree is built from the [building blocks](/docs/studio/composition-building-blocks).

![How a linked template serves a page: a request URL flows through the composition (matched by its URL pattern) and the template entry (resolved by the URL](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am86c9efaa1f02bda2/0476ff23975b3fefa7386961/api-template-url-resolution.png)

## How to read this page

Two Template shapes, one page. Read in this order:

1.  **[Fields](#fields)**: the extra keys a Template carries beyond the shared composition envelope in [index.md, 4](/docs/studio/create-compositions-via-the-api#4-the-composition-entry).
2.  **[Data sources](#data-sources)**: which of the six [value sources](/docs/studio/composition-building-blocks#value-sources) are available on each Template kind.
3.  **[URL metadata](#url-metadata)**: every Template binds to a URL. This section shows how the URL pattern and its metadata line up.
4.  **[Example: linked template](#example-linked-template)**, hello-world for a Template bound to a content type. Copy, swap the CT / field names.
5.  **[Example: freeform template](#example-freeform-template)**, hello-world for a Template with no content type. Content comes from pinned entries or queries.

If you've already read [building-blocks.md](/docs/studio/composition-building-blocks) once, the JSON in the examples below reads directly. If any node or binding looks unfamiliar, go back to the shared vocabulary there.

## Fields

Beyond the fields common to every composition ([index.md, 4](/docs/studio/create-compositions-via-the-api#4-the-composition-entry)), a template sets:

| Field | Linked | Freeform |
| --- | --- | --- |
| place\_composition\_as | "page" | "page" |
| connected\_content\_type | content-type uid | "" |
| url | the resolved pattern (e.g. /blog/{{entry.url}}) | /<composition-ct-uid>/<composable\_uid> |
| url\_metadata | { url\_source, url\_queries } | { url\_source, url\_queries } |

A template has no linked\_schemas (that field is section-only).

## Data sources

All six [value sources](/docs/studio/composition-building-blocks#value-sources) are available, with one exception: a **freeform template has no template source** (there is no connected entry), so its content comes from pinned entries (contentstack), queries (contentstack\_queries), static values, or component defaults. See the [availability matrix](/docs/studio/composition-building-blocks#data-source-availability-by-composition).

## URL metadata

url is the pattern. url\_metadata describes how it resolves. url\_queries is a JSON string, not an object:

```
"url_metadata": {
  "url_source": "user_specified_pattern",
  "url_queries": "{\"include\":[],\"only\":{},\"where\":{}}"
}
```

url\_source is one of:

| Value | Meaning |
| --- | --- |
| custom\_preview\_url | from the content type's Custom Preview URL config |
| content\_type\_url\_pattern | from the content type's URL pattern |
| default\_url\_pattern | the /<ct-uid>/<composable\_uid> fallback (freeform's value) |
| user\_specified\_pattern | a hand-written pattern. **Freeform only on the API path**: on a linked template it reverts, because url\_queries is generated when the UI's Edit-URL panel is saved, and Studio re-derives from the content type's pattern on editor load |
| legacy\_url | a pre-variable \* wildcard pattern. Never write this deliberately: it's the state a composition falls into when url\_metadata is omitted |

> **url\_metadata is required on every template composition: omitting it is not a valid "minimal envelope".** The write succeeds and delivery still resolves off the url pattern alone, so the omission looks harmless, but Studio has no derivation to read, treats the composition as legacy\_url, and the Edit-URL panel presents the pattern as hand-typed, losing the content-type link the first time an author edits it. Pick the source that matches how the URL is actually derived: content\_type\_url\_pattern for a linked template on a page-type CT, default\_url\_pattern for a freeform identity URL, user\_specified\_pattern for a hand-chosen freeform path.

url\_queries is a { only, where } JSON-string used by the URL-pattern resolver. Leave include as \[\]. Reference-field resolution for both URL variables (like {{entry.author.slug}}) and template bindings is driven by [data\_sources\[template\].resolvedReferences](/docs/studio/create-compositions-via-the-api#reference-auto-inclusion), the composition's built-in reference-toggle metadata. Full pattern grammar: [URL variables reference](/docs/studio/url-variables-reference).

### URL variables: quick reference

The most common variables in a Template's url pattern:

| Variable | Resolves to | Requires |
| --- | --- | --- |
| {{entry.url}} | Entry's own url field (single-line text) | Nothing: CT ships with url field by default |
| {{entry.slug}} | Entry's slug field | A slug field on the CT |
| {{entry.title}} | Entry's title field | Always available |
| {{entry.<field>}} | Any single-line text field on the entry | The field exists on the CT |
| {{entry.<group>.<field>}} | A field inside a Group | Nested field access |
| {{entry.<ref>.<field>}} | A field on a referenced entry | The reference field name in data\_sources\[template\].resolvedReferences |
| {{entry.publish\_details.locale}} | Locale of the current entry publish | Always available |

**Runtime-verified URL-pattern gotcha.** For Studio's canvas to render, the preview-entry picker must find an entry where every variable in the pattern is populated. If your pattern references entry.url but the entry's url field is empty or set to a value the picker rejects (e.g. it starts with a leading slash and the pattern doesn't expect one), you'll see "No entry matches this URL pattern. Create an entry with these fields populated: url." Practical rules:

-   **Prefer using {{entry.title}} or {{entry.slug}} in patterns**, since those fields are always populated. Studio URL-encodes the substitution ("Audit Test Entry" becomes Audit%20Test%20Entry).
-   If you use {{entry.url}}, verify entry.url is set to the **full path** (e.g. /blog/audit-post) and set the Template pattern to {{entry.url}} (no prefix, no double-slash).
-   Avoid combining a prefix + {{entry.url}} when entry.url itself starts with /. You'll get /blog//foo and no match.

Example: a blog Template with the URL keyed off the author's slug (a reference-field variable):

```
"url": "/blog/{{entry.author.slug}}/{{entry.slug}}",
"url_metadata": {
  "url_source": "user_specified_pattern",
  "url_queries": "{\"only\":{},\"where\":{}}"
},
// Multi-variable patterns like this one are authored in Studio's Edit-URL modal — that flow
// is what generates url_queries and makes user_specified_pattern stick on a linked template.
// Writing this shape by API alone reverts to the CT's pattern on the next editor load.
"data_sources": [
  { "uid": "template", "resolvedReferences": { "template": ["author"] } }
]
```

data\_sources\[template\].resolvedReferences tells the SDK to expand the author reference so entry.author.slug is available: same mechanism drives reference-field bindings inside the ui tree.

## Example: linked template

Connected to blog\_post: the entry's title, then its sections modular-blocks field.

![Linked template as nested containers: a page with a header binding the connected entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am102d0f7540866248/50aa7006217092b58fb78e20/api-linked-template-tree.png)

```
{
  "title": "Blog Post",
  "composable_uid": "blog_post_template",
  "place_composition_as": "page",
  "connected_content_type": "blog_post",
  "url": "/blog/{{entry.url}}",
  "url_metadata": {
    "url_source": "content_type_url_pattern",
    "url_queries": "{\"include\":[],\"only\":{},\"where\":{}}"
  },
  "data_sources": "[]",
  "schema_version": "1.0.0",
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "type": "header",
          "props": {
            "text": {
              "type": "plaintext",
              "binding": { "type": "template", "value": { "path": { "title": {} } } }
            }
          }
        },
        {
          "uid": "rep1",
          "type": "repeater",
          "metadata": { "repeaterBindingFieldType": "modular_block" },
          "props": {
            "items": {
              "type": "array",
              "binding": { "type": "template", "value": { "path": { "sections": {} } } }
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
                    "value": "hero",
                    "conditionBinding": {
                      "type": "repeater",
                      "value": {
                        "repeaterUID": "rep1",
                        "content_type_uid": "blog_post",
                        "selected_field": "sections",
                        "path": { "hero": {} }
                      }
                    },
                    "dataBinding": {
                      "type": "repeater",
                      "value": { "repeaterUID": "rep1", "path": { "hero": {} } }
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
                            "value": { "repeaterUID": "rep1", "path": { "headline": {} } }
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

> The ui is stored zlib\-encoded. The tree is shown expanded for reference. See [index.md, 6](/docs/studio/create-compositions-via-the-api#6-spec-encoding-zlib-the-critical-step).

## Example: freeform template

No connected entry: a pinned hero entry, a static tagline, and a query of featured posts.

![Freeform template as nested containers: a page with a header bound to a pinned entry, a text bound to a static value, and a box flagged repeaterWrapper holding a repeater over a query whose text reads each item](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdb0c3ca0da7f96ea/4bc7e9bd63c383ba71b4ebf9/api-freeform-template-tree.png)

```
{
  "title": "Spring 2026 Landing",
  "composable_uid": "spring_2026_landing",
  "place_composition_as": "page",
  "connected_content_type": "",
  "url": "/compositions/spring_2026_landing",
  "url_metadata": {
    "url_source": "default_url_pattern",
    "url_queries": "{\"include\":[],\"only\":{},\"where\":{}}"
  },
  "schema_version": "1.0.0",
  "data_sources": [
    {
      "uid": "contentstack",
      "data": [{ "uid": "blt_hero…", "_content_type_uid": "hero" }]
    },
    {
      "uid": "contentstack_queries",
      "data": [
        {
          "uid": "featured-posts",
          "name": "Featured Posts",
          "spec": {
            "contentType": "blog_post",
            "sourceType": "content_type",
            "query": { "featured": true },
            "params": { "limit": 3, "skip": 0, "desc": "created_at" }
          }
        }
      ]
    }
  ],
  "ui": {
    "type": "page",
    "slots": {
      "root": [
        {
          "type": "header",
          "props": {
            "text": {
              "type": "plaintext",
              "binding": {
                "type": "contentstack",
                "value": {
                  "uid": "blt_hero…",
                  "_content_type_uid": "hero",
                  "path": { "headline": {} }
                }
              }
            }
          }
        },
        {
          "type": "text",
          "props": {
            "text": {
              "type": "plaintext",
              "binding": { "type": "static_value", "value": "Ship your spring campaign in a day." }
            }
          }
        },
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
                      "value": { "queryUID": "featured-posts", "path": { "entries": {} } }
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

For a template that embeds a section, see the [Section compositions](/docs/studio/section-compositions-api) reference.
