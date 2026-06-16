---
title: Contentstack Command-line Interface (CLI) - CLI Limitations
description: Core limitations of the Contentstack CLI across compatibility, authentication, export/import behaviors, and system requirements.
url: https://www.contentstack.com/docs/developers/cli/cli-limitations
product: Contentstack
doc_type: reference
audience:
  - developers
version: all
last_updated: 2026-03-25
---

# Contentstack Command-line Interface (CLI) - CLI Limitations

This page documents the core limitations of the Contentstack CLI across functional areas such as compatibility, authentication, export/import behaviors, and system requirements. It is intended for developers and operators planning CLI usage, troubleshooting CLI behavior, or designing migration/automation workflows.

CLI Limitations

This document outlines the core limitations of the Contentstack CLI across various functional areas, including compatibility, authentication, export/import behaviors, and system requirements. Each limitation is clearly explained with its corresponding impact and actionable workarounds to help you troubleshoot or plan your CLI usage more effectively.

## Scope of Limitations
- [**Core CLI Limitations**](#core-cli-limitations)
Node.js compatibility and supported operating systems.
- [**Authentication Module Limitations**](#authentication-module-limitations)
Covers MFA handling, management token behavior, and organization switching.
- [**Export Module Limitations**](#export-module-limitations)
Highlights restrictions related to version history, API rate limits, and unsupported modules during export.
- [**Import Module Limitations**](#import-module-limitations)
Includes limitations in importing workflows, historical data, and payload handling.
- [**Import Setup Limitations**](#import-setup-limitations)
Explains restrictions specific to the import-setup command, such as module support and dependency handling.
- [**Overwrite Operations Limitations**](#overwrite-operations-limitations)
Addresses constraints when replacing existing content using overwrite operations.
- [**Bulk Publish/Unpublish Limitations**](#bulk-publish-unpublish-limitations)
Lists challenges with batch processing and environment-specific configurations.
- [**Branch Operations Limitations**](#branch-operations-limitations)
Describes branch UID rules, naming restrictions, and stack-level limits.
- [**Launch Operations Limitations**](#launch-operations-limitations)
Details unsupported tasks in the CLI related to Launch, including environment creation and Bitbucket Cloud.
- [**Migration Scripts Limitations**](#migration-scripts-limitations)
Notes technical requirements like NODE_PATH and script complexity.
- [**Bootstrap Plugin Limitations**](#bootstrap-plugin-limitations)
Identifies constraints around app templates and role-based access.
- [**Seed Command Limitations**](#seed-command-limitations)
Focuses on structural requirements for GitHub repositories.
- [**RTE Migration Limitations**](#rte-migration-limitations)
Covers restrictions when migrating entries with HTML RTE fields.
- [**Entry Migration Limitations**](#entry-migration-limitations)
Reflects import-based constraints affecting entry migration.
- [**Audit Plugin Limitations**](#audit-plugin-limitations)
Highlights the limits of automated issue detection and resolution.
- [**Variants Plugin Limitations**](#variants-plugin-limitations)
Notes restrictions around authentication and variant-specific operations.
- [**Apps CLI Limitations**](#apps-cli-limitations)
Explains login dependencies and app name constraints for Developer Hub apps.
- [**TSGen Plugin Limitations**](#tsgen-plugin-limitations)
Lists requirements for plugin use and limitations of type generation.
- [**Configuration Limitations**](#configuration-limitations)
Describes how configuration size and scope affect CLI operations.

## Core CLI Limitations

### Node.js Version Requirements

**Limitation:** The CLI requires Node.js version 18.0.0 or higher (recommended: 20.x or 22.x).

**Impact:** The CLI does not support Node.js versions below 18.0.0.

**Workaround:**
- [Install a supported Node.js version](https://nodejs.org/en/download/) (20.0.0 or higher; till 22.x).
- Use nvm for version management:

```
nvm install 20
nvm use 20
```

**Related Commands:**
- `node --version`
- `npm install -g @contentstack/cli@latest`

**Version Information:** All CLI versions

### Operating System Support

**Limitation:** The CLI is tested and officially supported on the following operating systems:
- macOS (latest versions)
- Linux (Ubuntu, Debian, CentOS)
- Windows (10, 11)

**Impact:** Other operating systems may function, but they are not officially supported.

**Workaround:**
- Use Docker on unsupported operating systems.
- Use a supported operating system for production environments.

**Related Commands:**
- `csdx --version`

**Version Information:** All CLI versions

## Authentication Module Limitations

### Management Token Expiration

**Limitation:** Management tokens do not expire automatically but can be manually revoked.

**Impact:** Tokens remain valid until manually revoked, which poses a potential security risk if not rotated.

**Workaround:**
- Rotate tokens regularly (every **90 days** is recommended).
- Monitor token usage.
- Revoke unused tokens.

**Related Commands:**
- `csdx auth:tokens`
- `csdx auth:tokens:remove`

**Version Information:** All CLI versions

### MFA Support Limitations

**Limitation:** MFA requires manual code entry or the use of an OAuth flow.

**Impact:** MFA-enabled accounts cannot be fully automated without the `CONTENTSTACK_MFA_SECRET`.

**Workaround:**
- Use OAuth for SSO accounts by running: `csdx auth:login --oauth`
- Set the `CONTENTSTACK_MFA_SECRET` environment variable to enable automatic OTP generation.
- Use Management Tokens to bypass MFA after they are added.

**Related Commands:**
- `csdx auth:login`
- `csdx auth:login --oauth`

**Version Information:** All CLI versions

### Organization Switching

**Limitation:** The CLI does not include a built-in organization switcher.

**Impact:** You must log out and log back in or use different token aliases to switch between organizations.

**Workaround:**
- Use different management token aliases for each organization.
- Log out and log back in to switch between organizations.

**Related Commands:**
- `csdx auth:logout`
- `csdx auth:login`
- `csdx auth:tokens:add --management`

**Version Information:** All CLI versions

## Export Module Limitations

### Version History

**Limitation:** Only the latest version of published entries and assets is exported.

**Impact:** Historical versions are not preserved during export.

**Workaround:**
- Export creates new versions in the destination stack.
- Historical versions cannot be restored.

**Related Commands:**
- `csdx cm:stacks:export`

**Version Information:** All versions

### Payload Size Limits

**Limitation:** The default `maxContentLength` and `maxBodyLength` values are **100 MB**.

**Impact:** Large exports fail if they exceed the payload size limit.

**Workaround:**
- Update the configuration file with the following values:
```
{
  "maxContentLength": 200000000,
  "maxBodyLength": 200000000
}
```
- Process exports in smaller batches.
- Export specific modules.

**Related Commands:**
- `csdx cm:stacks:export --config`

### API Request Timing

**Limitation:** Export operations may encounter concurrency issues.

**Impact:** Large exports may fail or be throttled.

**Workaround:**
- Add the `delayMs` parameter to the configuration file (for example, `delayMs: 1000` for **1-second** delays).
- Export in smaller batches using the `--module` flag.
- Configure rate limits using the `csdx config:set:rate-limit` command.

**Related Commands:**
- `csdx cm:stacks:export --config`
- `csdx config:set:rate-limit`

### Unsupported Modules

**Limitation:** The following modules cannot be exported:
- Users
- Releases

**Impact:** User data and release information cannot be migrated via CLI.

**Workaround:**
- Users must be manually added to the destination stack.
- Releases must be recreated manually.

**Related Commands:**
- `csdx cm:stacks:export`

**Version Information:** All versions

## Import Module Limitations

### Version History

**Limitation:** Only the latest version of published entries and assets is imported.

**Impact:** Historical versions are not restored during import.

**Workaround:**
- Import creates new versions in the destination stack.
- Historical versions cannot be restored.

**Related Commands:**
- `csdx cm:stacks:import`

**Version Information:** All versions

### Workflow Users

**Limitation:** When importing workflows, admins and workflow stage users are not included in the migration.

**Impact:** Workflow configurations are imported, but user assignments are lost.

**Workaround:**
- Manually reassign workflow users after import.
- Update workflow stages with the correct users.

**Related Commands:**
- `csdx cm:stacks:import --module workflows`

### Payload Size Limits

**Limitation:** The default `maxContentLength` and `maxBodyLength` values are **100 MB**.

**Impact:** Large imports fail if they exceed the payload size limit.

**Workaround:**
- Update the configuration file with the following values:
```
{
  "maxContentLength": 200000000,
  "maxBodyLength": 200000000
}
```
- Process imports in smaller batches.
- Export or import specific modules.

**Related Commands:**
- `csdx cm:stacks:import --config`

### API Request Timing

**Limitation:** Import operations may encounter concurrency issues.

**Impact:** Large imports may fail or be throttled.

**Workaround:**
- Add the `delayMs` parameter to the configuration file (for example, `delayMs: 1000` for **1-second** delays).
- Import in smaller batches using the `--module` flag.
- Configure rate limits using the `csdx config:set:rate-limit` command.

**Related Commands:**
- `csdx cm:stacks:import --config`
- `csdx config:set:rate-limit`

### Unsupported Modules

**Limitation:** The following modules cannot be imported:
- Users
- Releases

**Impact:** User data and release information cannot be migrated via the CLI.

**Workaround:**
- Users must be manually added to the destination stack.
- Releases must be recreated manually.

**Related Commands:**
- `csdx cm:stacks:import`

**Version Information:** All versions

## Import Setup Limitations

### Supported Modules Limitation

**Limitation:** Only three modules can be directly selected for **import setup**:
- `global-fields`
- `content-types`
- `entries`

**Impact:** Other modules cannot be directly selected for import-setup.

**Workaround:**
- Other modules, such as extensions and assets, are automatically handled as dependencies.
- To [import](/docs/developers/cli/import-content-using-the-cli) other modules, use the full import command without **import setup**.

**Code Evidence:**
- `cli/packages/contentstack-import-setup/src/commands/cm/stacks/import-setup.ts`, lines 42-47: Module options are restricted to three.

**Related Commands:**
- `csdx cm:stacks:import-setup --module`

**Version Information:** All versions

### Asset Duplication Limitation

**Limitation:** When multiple assets in the target stack match a source asset (same title, filename, and file size), **import setup** cannot automatically determine which asset to use. These duplicates are recorded in `duplicate-assets.json`, but are not added to `uid-mapping.json`.

**Impact:**
- Duplicate assets may be uploaded as new assets during import.
- Manual resolution is required to handle duplicate assets.

**Workaround:**
- Review `duplicate-assets.json` before running the import.
- Manually resolve duplicates in the target stack by deleting or merging assets.
- Run the **import setup** again to regenerate mapping files after resolving duplicates.

**Code Evidence:**
- `../advanced-features/import-setup.md`, lines 1260-1274: Documents the asset duplication handling behavior in **import setup**.

**Related Commands:**
- `csdx cm:stacks:import-setup --module assets`
- `csdx cm:stacks:import --backup-dir`

**Version Information:** All versions

### Complex Dependencies Not Fully Automated

**Limitation:** Some modules with complex dependencies may require manual intervention.

**Impact:** **Import setup** may not handle all dependency scenarios automatically.

**Workaround:**
- Import dependencies manually.
- Use one of the following:
      **Import setup** for dependent modules
- Full import with `--replace-existing` for all modules.

**Related Commands:**
- `csdx cm:stacks:import-setup`
- `csdx cm:stacks:import --replace-existing`

**Version Information:** All versions

### Large Exports Take Time

**Limitation:** Processing thousands of items can take more than **10 minutes**.

**Impact:** **Import setup** operations may be slow for large stacks.

**Workaround:**
- Be patient, the process is working correctly.
- Monitor progress through log messages.
- Consider exporting or importing in smaller batches.

**Related Commands:**
- `csdx cm:stacks:import-setup`

**Version Information:** All versions

### Branch Structure Must Match

**Limitation:** Export directory structure must match branch structure for branch imports.

**Impact:** Branch imports may fail if directory structure doesn't match.

**Workaround:**
- Export specific branch: `csdx cm:stacks:export -k <key> -d ./export --branch <branch>`
- Point import setup to branch directory: `-d ./export/<branch-name>`

**Related Commands:**
- `csdx cm:stacks:export --branch`
- `csdx cm:stacks:import-setup --branch`

**Version Information:** All versions

## Overwrite Operations Limitations

### Dependency on Properly Structured Exported Content

**Limitation:** The process requires access to properly formatted exported content before running a command.

**Impact:** Overwrite operations may fail if export structure is incorrect.

**Workaround:**
- Ensure export was completed successfully.
- Verify the export directory structure.
- Export again if the structure is invalid.

**Related Commands:**
- `csdx cm:stacks:export`
- `csdx cm:stacks:import --replace-existing`

**Version Information:** All versions

### Asset Duplication

**Limitation:** Duplicate assets in the target stack are uploaded to a new folder, which can lead to redundancy. A resolution is under development.

**Impact:** Duplicate assets may be created during overwrite operations.

**Workaround:**
- Review duplicate assets before overwrite.
- Manually remove duplicates after import.
- Use `import-setup` to identify duplicates first.

**Related Commands:**
- `csdx cm:stacks:import-setup`
- `csdx cm:stacks:import --replace-existing`

**Version Information:** All versions

### Limited Module Support

**Limitation:** Currently, the `import-setup` command supports only content types, entries, global fields, and extensions. Modules with complex dependencies are not yet included.

**Impact:** Some modules cannot be overwritten automatically.

**Workaround:**
- Use full import with `--replace-existing` for all modules.
- Import dependencies manually first.
- Use standard import for unsupported modules.

**Related Commands:**
- `csdx cm:stacks:import-setup`
- `csdx cm:stacks:import --replace-existing`

**Version Information:** All versions

### Manual Overwrite Steps

**Limitation:** Overwriting certain modules requires manual intervention because there is no automated overwrite command.

**Impact:** You cannot fully automate some overwrite operations.

**Workaround:**
- Use Contentstack UI for manual overwrites.
- Combine CLI and UI operations.
- Script manual steps where possible.

**Related Commands:**
- `csdx cm:stacks:import --replace-existing`

**Version Information:** All versions

### Processing Large Data Sets

**Limitation:** Migrating large volumes of content or assets can take time and requires manual accuracy checks.

**Impact:** Large overwrite operations may take significant time.

**Workaround:**
- Process in smaller batches
- Verify accuracy after each batch
- Use `import-setup` to preview changes
- Monitor progress through logs

**Related Commands:**
- `csdx cm:stacks:import-setup`
- `csdx cm:stacks:import --replace-existing`

**Version Information:** All versions

### Handling Complex Relationships

**Limitation:** Mapping deeply nested or interdependent modules may require additional manual effort.

**Impact:** The system may not overwrite complex relationships correctly.

**Workaround:**
- Review relationships before overwrite
- Import dependencies in correct order
- Manually verify relationships after import
- Use `import-setup` to identify dependencies

**Related Commands:**
- `csdx cm:stacks:import-setup`
- `csdx cm:stacks:import --replace-existing`

**Version Information:** All versions

## Bulk Publish/Unpublish Limitations

### Batch Size Limitations

**Limitation:** Bulk publish operations process entries and assets in batches.

**Impact:** Very large operations can take longer to complete.

**Workaround:**
- Process in smaller batches
- Use configuration files for better control
- Monitor progress

**Related Commands:** `csdx cm:entries:publish`, `csdx cm:assets:publish`

**Version Information:** All versions

### Environment Limitations

**Limitation:** Bulk publish operations are environment-specific.

**Impact:** You must specify the environment for each operation.

**Workaround:**
- Use configuration files to manage multiple environments
- Script multiple operations for different environments

**Related Commands:**
- `csdx cm:entries:publish -e <environment>`
- `csdx cm:assets:publish -e <environment>`

**Version Information:** All versions

## Branch Operations Limitations

### Branch UID Format

**Limitation:** The branch UID must be in lowercase, and only `_` can be used to separate two words.

**Impact:** Invalid UID formats cause branch creation to fail.

**Workaround:**
- Use lowercase letters only
- Use underscore (`_`) as word separator
- Avoid special characters and spaces

**Related Commands:**
- `csdx cm:branches:create --uid`

**Version Information:** All versions

### Branch UID Length

**Limitation:** The maximum character length for a branch UID is 15.

**Impact:** Branch UIDs longer than 15 characters are rejected.

**Workaround:**
- Keep branch UIDs to 15 characters or fewer
- Use abbreviations if needed
- Plan the branch naming convention

**Related Commands:**
- `csdx cm:branches:create --uid`

**Version Information:** All versions

### Maximum Branches per Stack

**Limitation:** The maximum number of branches allowed per stack depends on the product tier.

**Impact:** The stack can reach the branch limit based on the subscription tier.

**Workaround:**
- Check product tier limits
- Delete unused branches
- Upgrade the tier if additional branches are required

**Related Commands:**
- `csdx cm:branches:list`

**Version Information:** All versions

### Branch Name and Source Cannot Be Edited

**Limitation:** Once you create a branch, you cannot edit its name or the source branch.

**Impact:** Branch configuration cannot be changed after creation.

**Workaround:**
- Delete and recreate the branch with the correct name and source
- Plan the branch structure before creation
- Use the Contentstack UI if available

**Related Commands:** `csdx cm:branches:create`, `csdx cm:branches:delete`

**Version Information:** All versions

## Launch Operations Limitations

### Environment Creation Not Supported

**Limitation:** Creating a new Launch environment via the CLI is not supported. At this time, environment creation is a one-time setup that must be done through the Launch UI. Once the environment is created, you can use the Launch CLI to trigger redeployments on existing environments.

**Impact:** You cannot create new environments via the CLI.

**Workaround:**
- Create environments through the Launch UI first
- Use the CLI for redeployments on existing environments
- Use `csdx launch:redeploy` for existing environments

**Related Commands:**
- `csdx launch:redeploy`

**Version Information:** All versions

### Bitbucket Cloud Not Supported

**Limitation:** The Launch CLI does not support Bitbucket Cloud as a source provider.

**Impact:** You cannot use Bitbucket Cloud repositories with the Launch CLI.

**Workaround:**
- Use GitHub or GitLab as the source provider
- Use the Launch UI for Bitbucket Cloud projects
- Migrate the repository to a supported provider

**Related Commands:**
- `csdx launch`

**Version Information:** All versions

### Settings Modification Not Supported

**Limitation:** The Launch CLI does not support modifying settings for existing projects or environments. To make these changes, use the Launch UI.

**Impact:** You cannot modify project or environment settings via the CLI.

**Workaround:**
- Use the Launch UI to modify settings
- Use the CLI only for deployment operations
- Configure settings before using the CLI

**Related Commands:**
- `csdx launch`

**Version Information:** All versions

## Migration Scripts Limitations

### NODE_PATH Requirement

**Limitation:** Custom migration scripts require the `NODE_PATH` environment variable to be set.

**Impact:** Migration scripts can fail with "module not found" errors.

**Workaround:**
- Set `NODE_PATH` before running migrations:
```
export NODE_PATH="$(npm root -g @contentstack/cli)/@contentstack/cli/node_modules"
```
- Add to shell profile for permanent fix

**Related Commands:**
- `csdx cm:stacks:migration`

**Version Information:** All versions

### Migration Script Complexity

**Limitation:** Complex migration scripts can have performance issues.

**Impact:** Large migrations can be slow or fail.

**Workaround:**
- Break migrations into smaller scripts
- Test migrations on small datasets first
- Use dry-run mode to preview changes

**Related Commands:**
- `csdx cm:stacks:migration --dry-run`

**Version Information:** All versions

## Bootstrap Plugin Limitations

### Duplicate Content Types

**Limitation:** Avoid importing duplicate content types into existing stacks.

**Impact:** Duplicate content types can cause conflicts or errors.

**Workaround:**
- Check existing content types before bootstrap
- Use different stack for bootstrap
- Remove duplicate content types if needed

**Related Commands:**
- `csdx cm:bootstrap`

**Version Information:** All versions

### Role Requirements

**Limitation:** To create new stacks, ensure your role is set to Owner or Admin in the organization.

**Impact:** Users without the Owner or Admin role cannot create stacks via bootstrap.

**Workaround:**
- Request Owner or Admin role from organization admin
- Use existing stack with appropriate permissions
- Have Owner or Admin run bootstrap command

**Related Commands:**
- `csdx cm:bootstrap`

**Version Information:** All versions

### Deprecated Apps

**Limitation:** Deprecated starter apps (reactjs-starter, nextjs-starter, gatsby-starter, angular-starter, nuxt-starter, vue-starter, stencil-starter, nuxt3-starter) are still available but not recommended for new projects.

**Impact:** Deprecated apps cannot receive updates or support.

**Workaround:**
- Use active “Kickstart” apps instead, for example, `kickstart-next` and `kickstart-nuxt`.
- Migrate from deprecated apps to active apps if needed.

**Related Commands:**
- `csdx cm:bootstrap --app-name`

**Version Information:** All versions

## Seed Command Limitations

### GitHub Repository Requirements

**Limitation:** The seed command requires a GitHub repository with a specific structure.

**Impact:** Repositories that do not follow the required structure can fail.

**Workaround:**
- Follow the Contentstack seed repository structure
- Use Contentstack's sample repositories
- Structure custom repositories correctly

**Related Commands:**
- `csdx cm:stacks:seed`

**Version Information:** All versions

## RTE Migration Limitations

### Content Type Requirements

**Limitation:** The RTE migration requires content types with `HTML RTE` fields.

**Impact:** Content types without `HTML RTE` fields cannot be migrated.

**Workaround:**
- Verify content types have `HTML RTE` fields
- Migrate only applicable content types

**Related Commands:**
- `csdx cm:entries:migrate-html-rte`

**Version Information:** All versions

### Migration Scope

**Limitation:** RTE migration processes all entries in the content type.

**Impact:** You cannot selectively migrate specific entries.

**Workaround:**
- Export entries.
- Filter entries manually.
- Import filtered entries.

**Related Commands:**
- `csdx cm:entries:migrate-html-rte`

**Version Information:** All versions

## Entry Migration Limitations

**Limitation:** Entry migration has limitations similar to the general import process.

**Impact:** The same limitations as the import module apply.

**Workaround:**
- Follow the import best practices
- Use `import-setup` for UID preservation
- Handle dependencies correctly

**Related Commands:**
- `csdx cm:stacks:import --module entries`

**Version Information:** All versions

## Audit Plugin Limitations

### Audit Scope

**Limitation:** Audit cannot detect all issues.

**Impact:** Some issues require manual review.

**Workaround:**
- Review the audit reports carefully.
- Manually verify critical content.
- Run audit multiple times if needed.

**Related Commands:**
- `csdx cm:stacks:audit`
- `csdx audit:fix`

**Version Information:** All versions

### Fix Limitations

**Limitation:** Audit fix cannot resolve all issues automatically.

**Impact:** Some issues require manual intervention.

**Workaround:**
- Review the fix reports
- Manually fix issues that audit cannot resolve
- Use `--fix-only` to fix specific issue types

**Related Commands:**
- `csdx audit:fix --fix-only <type>`

**Version Information:** All versions

## Variants Plugin Limitations

### Personalize Authentication

**Limitation:** Variants and Personalize support only basic authentication (login).

**Impact:** You cannot use management tokens for variants operations.

**Workaround:**
- Use `csdx auth:login` before variants operations
- Use `OAuth` for SSO accounts

**Code Evidence:**
- `backup/../advanced-features/supported-features.md` line 99: Confirms Personalize and Entry Variants limitation with authentication

**Related Commands:**
- `csdx cm:variants:export`
- `csdx cm:variants:import`
- `csdx auth:login`

**Version Information:** All versions

### Variant Export and Import Scope

**Limitation:** Variants are exported or imported as part of entries.

**Impact:** You cannot export or import variants independently.

**Workaround:**
- Export and import entries to include variants.
- Variants are automatically included.

**Related Commands:**
- `csdx cm:stacks:export --module entries`
- `csdx cm:stacks:import --module entries`

**Version Information:** All versions

## Apps CLI Limitations

### Login Requirement

**Limitation:** The Apps CLI requires login (management tokens are not supported).

**Impact:** You cannot fully automate Apps CLI operations with management tokens.

**Workaround:**
- Use `csdx auth:login` before performing Apps CLI operations
- Use `OAuth` for SSO accounts

**Related Commands:**
- `csdx app:create`
- `csdx app:deploy`
- `csdx auth:login`

**Version Information:** All versions

### App Name Constraints

**Limitation:** App names must be 3-20 characters long.

**Impact:** App names outside this range fail.

**Workaround:**
- Ensure app names meet length requirements
- Use valid characters only

**Related Commands:**
- `csdx app:create -n <app_name>`

**Version Information:** All versions

## TSGen Plugin Limitations

### Plugin Installation Required

**Limitation:** The `TSGen` plugin must be installed separately.

**Impact:** `TSGen` commands do not work without the plugin installation.

**Workaround:**
- Install plugin: `csdx plugins:install @contentstack/cli-tsgen`
- Verify installation: `csdx plugins`

**Related Commands:**
- `csdx plugins:install @contentstack/cli-tsgen`
- `csdx tsgen`

**Version Information:** All versions

### Type Generation Scope

**Limitation:** Type generation is based on the current stack structure.

**Impact:** Generated types do not always reflect all possible content structures.

**Workaround:**
- Regenerate types after stack changes
- Manually update types if needed

**Related Commands:**
- `csdx tsgen`

**Version Information:** All versions

## Configuration Limitations

### Configuration File Size

**Limitation:** Very large configuration files can cause issues.

**Impact:** Large configuration files can slow down operations.

**Workaround:**
- Keep configuration files focused
- Use multiple configuration files for different scenarios
- Optimize the configuration structure

**Related Commands:**
- `csdx cm:stacks:export --config`
- `csdx cm:stacks:import --config`

**Version Information:** All versions

### Rate Limit Configuration Scope

**Limitation:** Rate limit configuration applies globally.

**Impact:** You cannot set different rate limits for different operations.

**Workaround:**
- Use `--config` flag for operation-specific settings
- Adjust rate limits before different operations.

**Related Commands:**
- `csdx config:set:rate-limit`

**Version Information:** All versions

## Common questions

### Does the Contentstack CLI support Node.js versions below 18.0.0?
No. The page states: “The CLI requires Node.js version 18.0.0 or higher (recommended: 20.x or 22.x).”

### Can the CLI export or import historical versions of entries and assets?
No. The page states that only the latest version of published entries and assets is exported/imported, and historical versions are not preserved/restored.

### Can I migrate users and releases using the CLI export/import commands?
No. The page lists Users and Releases as unsupported modules for both export and import, and notes they must be recreated or added manually.

### Can I create a new Launch environment using the CLI?
No. The page states: “Creating a new Launch environment via the CLI is not supported,” and that environment creation must be done through the Launch UI.

filename: contentstack-command-line-interface-cli-cli-limitations.md