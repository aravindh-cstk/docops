---
title: "[Contentstack Command-line Interface (CLI)] - CLI-Supported Features for Export, Import, and Clone Operations"
description: CLI-Supported Features for Export, Import, and Clone Operations
url: https://www.contentstack.com/docs/headless-cms/cli-supported-features-for-export-import-and-clone-operations
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - CLI-Supported Features for Export, Import, and Clone Operations

This page describes the CLI-supported features available when running export, import, and clone operations in Contentstack. It is intended for developers and administrators managing content migrations, especially when stacks include Marketplace apps, Personalize projects, Entry Variants, or Studio configurations.

## CLI-Supported Features for Export, Import, and Clone Operations

Contentstack CLI offers support for [export](/docs/developers/cli/export-content-using-the-cli/), [import](/docs/developers/cli/import-content-using-the-cli), and [clone](/docs/developers/cli/cloning-a-stack/) operations, including Marketplace apps, module-wise imports, error handling, and Personalize project integration.  
This guide outlines these features to help you manage content migration operations with flexibility and control.

## Marketplace Apps

You can export/import public and private Marketplace apps into a stack using CLI commands.

### Prerequisites

- [Logged in](/docs/developers/cli/cli-authentication#authentication) to your [Contentstack account](https://www.contentstack.com/login/)
- [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner)/[Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) rights to export Marketplace apps
- Marketplace apps support enabled in the destination organization

**Note:**

- Only the latest version of a public or private Marketplace app can be installed via CLI.
- If you're using a region other than AWS NA, AWS EU, AWS AU, Azure NA, Azure EU, GCP NA, or GCP EU, provide the Developer Hub URL when prompted.
- To override the default Marketplace app encryption key, update the `config.json` file.

### Public Apps

If a public Marketplace app with a specific configuration already exists in the destination organization, you will be prompted with the following options during import:

- **Update **the app with the new configuration from the source organization.
- **Skip updating** the app configuration.**Warning:** Skipping may result in issues with imported content.
- **Exit **to cancel the entire stack import process.

### Private Apps

If the imported app has the same name as an existing app in the destination stack:

- You will be prompted to **rename **the imported app.

**Note:** App names must be **3-20 characters** long.

During the stack import:

- If acknowledged and confirmed, the listed private app(s) will be re-created and installed.
- If you cancel the app recreation, it may disrupt the import process of entries, content types, or global fields.
- To skip re-creation of private apps if they already exist, use the `--skip-app-recreation` flag.

```
csdx cm:stack:import -k > -d <> --skip-app-recreation --yes
```

### Error Handling

If an error occurs while importing a public or private app:

- You will be prompted to confirm whether to proceed.If you choose **not to proceed**, the import stops.
- If you choose **to proceed**, the import may still succeed but could affect entries, content types, or global fields.

**Note:** You cannot reuse any existing private apps during the import process.

## Personalize and Entry Variants

When working with stacks that are synced with a [Personalize](/docs/personalize/about-personalize) project, certain modules and configurations are automatically handled during export and import operations:

### Exporting

If the stack you're exporting is linked to a Personalize project, the following items will be exported:

- The associated Personalize project
- The following modules within the Personalize project:[Experiences](/docs/personalize/about-experiences/)
- [Audience](/docs/personalize/about-audiences/)
- [Attributes](/docs/personalize/about-attributes/)
- [Events](/docs/personalize/about-events/)
- [Entry Variants](/docs/content-managers/entry-variants) (exported from the stack as part of entries)

### Importing

If the content you're importing is associated or synced with a Personalize project, a new Personalize project will be created and linked to the new stack. Additionally, the items below will be imported into the target stack:

- The following modules within the Personalize project:Experiences
- Audience
- Attributes
- Events
- Entry Variants (imported into the stack as part of entries)

**Options**

- `--personalize-project-name`: (optional) Provide a unique name for the Personalize project.

**Note:** Variants and Personalize currently support only basic authentication.

### Personalize and Entry Variants Limitation

The `-a <alias>` flag skips Personalize modules as they require an [auth token for import](/docs/developers/cli/import-content-using-the-cli#import-content-using-auth-token) and cannot be imported using a management token.

## Studio

[Studio](/docs/studio/about-studio) is Contentstack’s visual composition builder for creating digital experiences using predefined configurations, including [components](/docs/studio/components), [layout structures](/docs/studio/layers), and [page data](/docs/studio/page-data).

When a stack is connected to Studio, its project configuration becomes part of the Studio setup, and it must be included during migration to ensure the target stack can accurately reproduce the source project’s structure and page layouts.

### Export

When exporting a stack that is connected to Studio, the CLI automatically includes the following:

- Project, including its configuration files.
- All [Compositions](/docs/studio/manage-a-composition) linked to the project.

These items get exported along with the standard stack modules.

### Import

When importing content into a stack, the CLI handles Studio-related modules based on the destination stack’s setup. The behaviour varies across the following scenarios:

- **Destination Stack With **[**Studio Enabled**](/docs/studio/get-started-with-studio)**:** The CLI creates a new Studio project in the destination stack using the configuration from the source stack. It then imports all compositions associated with that project into the newly created Studio project.
- **Destination Stack Without Studio Enabled:** The Studio modules are skipped during import. This does not affect the import of other [modules](/docs/developers/cli/import-content-using-the-cli#supported-modules).**Tip:** Enable Studio in the destination stack before running the import to migrate Studio projects and compositions.
- **Destination Stack Already Connected to a Studio Project:** The CLI skips the Studio modules to avoid overwriting the existing connection.

**Note:** Studio migration currently supports only basic authentication (username and password).

## Common questions

### Can I install older versions of Marketplace apps via the CLI?
No. Only the latest version of a public or private Marketplace app can be installed via CLI.

### What happens if I skip updating a public app configuration during import?
You can choose to skip updating the app configuration, but **Warning:** Skipping may result in issues with imported content.

### Why are Personalize modules skipped when using `-a <alias>`?
The `-a <alias>` flag skips Personalize modules as they require an auth token for import and cannot be imported using a management token.

### What should I do to migrate Studio projects and compositions?
Enable Studio in the destination stack before running the import to migrate Studio projects and compositions.