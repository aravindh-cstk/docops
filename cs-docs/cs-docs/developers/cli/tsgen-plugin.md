---
title: "[Contentstack Command-line Interface (CLI)] - Generate Typescript Typings with TSGen Plugin"
description: Generate TypeScript typings from REST API and GraphQL queries using the Contentstack CLI TSGen plugin.
url: https://www.contentstack.com/docs/developers/cli/tsgen-plugin
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: CLI v1.1.0+
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Generate Typescript Typings with TSGen Plugin

This page explains how to install and use the Contentstack CLI TSGen plugin to generate TypeScript typings from REST API and GraphQL queries. It is intended for developers using the Contentstack CLI who want type definitions for content types, global fields, and GraphQL queries in TypeScript projects.

## Generate Typescript Typings with TSGen Plugin

The Contentstack CLI TSGen plugin generates TypeScript typings from REST API and GraphQL queries. The type file containing the TypeScript typings assists developers in working with content types, global fields, and GraphQL queries in TypeScript.

With the TSGen plugin, you can annotate interfaces and fields with comments from the JSDoc library. Additionally, the TSGen plugin allows you to add prefixes to interfaces.

**Note:** The Contentstack CLI uses the [introspection query](/docs/developers/apis/graphql-content-delivery-api/#introspection) to generate a GraphQL schema.

This step-by-step guide lets you install and use the tsgen plugin in the CLI.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- [CLI installed](/docs/developers/cli/install-the-cli/) (version 1.1.0 and above)
- [Delivery token](/docs/developers/create-tokens/create-a-delivery-token/)

## Steps for execution

- Install the TSGen plugin using the following command:

```
csdx plugins:install contentstack-cli-tsgen
```

- Add the delivery token as an alias to the CLI using the following command:

```
csdx auth:tokens:add --delivery
```

**Note:** Skip this step if you already have a delivery token as an alias.

## Usage

```
csdx tsgen
```

## Options

- `-a`, `--token-alias=token-alias`: (mandatory) Delivery token alias.
- `-d`, `--[no-]doc`: (optional) Includes documentation comments. By default, this flag is enabled.
- `-o`, `--output=output`: (mandatory) The full output path.
- `-p`, `--prefix=prefix`: (optional) Interface prefix, e.g., "I".
- `--api-type=api-type`: [default: rest] (optional) The API type to generate type definitions. <options: rest|graphql>
- `--branch=branch`: (optional) The name of the branch to be used.
- `--include-system-fields`: Includes system fields in generated types.
- `--namespace=namespace`: (optional) The namespace for the GraphQL API type to organize the generated types.
- `--include-editable-tags`: (optional) Includes editable tags in typings.
- `--include-referenced-entry`: (optional) Includes the `ReferencedEntry` interface in generated types. Use this option to add a generic interface for handling referenced entries when the exact content type is unknown or when a flexible reference type is needed.

## Examples

- To generate a type file with a delivery token alias and output file path:

```
csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts"
```

- To generate a type file with a delivery token alias and output file path for a branch named `develop`:

```
csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --branch "develop"
```

- To generate a type file with a prefix:

```
csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" -p "I"
```

- To generate a type file excluding documentation comments:

```
csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --no-doc
```

- To generate a type file with the `graphql` API type:

```
csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --api-type graphql
```

- To generate a type file with the `graphql` API type and GraphQL as the namespace:

```
csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --api-type graphql --namespace "GraphQL"
```

- To generate a type file with editable tags:

```
csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --include-editable-tags
```

- To generate a type file with `ReferencedEntry` interface:

```
csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --include-referenced-entry
```

- To generate typings with full Entry support:

```
csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --include-system-fields --include-referenced-entry
```

**Note:** Together, these two flags enable **full, accurate Entry typings**, ensuring that relationships, system metadata, and dynamic references are all represented correctly in the generated TypeScript definitions.

## Supported Contentstack Fields

- [Number](/docs/developers/create-content-types/number)
- [Title](/docs/developers/create-content-types/title/)
- [Date](/docs/developers/create-content-types/date/)
- [Boolean](/docs/developers/create-content-types/boolean/)
- [Single Select w/ String and Number Types](/docs/developers/create-content-types/single-line-textbox/)
- [Multiple Select w/ String and Number Types](/docs/developers/create-content-types/multi-line-textbox/)
- [Modular Block](/docs/developers/create-content-types/modular-blocks/)
- [Global Field](/docs/developers/global-field/about-global-field/) (CLI supports [Nested Global Fields](/docs/developers/global-field/about-global-field#nested-global-fields) from v1.42.0)
- [Group](/docs/developers/create-content-types/group/)
- [Link](/docs/developers/create-content-types/link/)
- [File](/docs/developers/create-content-types/file/)
- [Reference](/docs/developers/create-content-types/reference/)
- [Taxonomy](/docs/developers/taxonomy/about-taxonomy)

## Supported Field Options

- [Mandatory](/docs/developers/create-content-types/mandatory)
- [Multiple](/docs/developers/create-content-types/multiple)
- [Multiple Max Limit](/docs/developers/create-content-types/minimum-and-maximum-limit)
- Description (used in JSDoc comment)

**Additional Resource:** For a major TSGen version upgrade, refer to the [Migration.md](https://github.com/contentstack/contentstack-cli-tsgen/blob/master/MIGRATION.md) file in the GitHub repository.

## Common questions

### What does the TSGen plugin generate typings from?
The Contentstack CLI TSGen plugin generates TypeScript typings from REST API and GraphQL queries.

### Do I need a delivery token alias to run `csdx tsgen`?
Yes, `-a`, `--token-alias=token-alias` is listed as (mandatory) Delivery token alias.

### How do I generate typings for GraphQL instead of REST?
Use `--api-type graphql`.

### How can I enable full Entry typings?
Use `--include-system-fields --include-referenced-entry` together.